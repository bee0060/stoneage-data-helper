
const initAttributes = () => {
    const cached = localStorage.getItem('attributes')
    try {
        const cachedData = JSON.parse(cached) || []
        attributes.push(...cachedData)
    } catch (ex) {
        console.error(ex)
    }
}

// 初始化大品类下拉框
function initCategorySelect(selectId) {
    const selectElement = document.getElementById(selectId);
    if (!selectElement) return;

    // 清空现有选项
    selectElement.innerHTML = '';

    // 添加默认选项（如果是查询框则添加"全部"选项）
    if (selectId.includes('search')) {
        const allOption = document.createElement('option');
        allOption.value = 'all';
        allOption.textContent = '全部';
        selectElement.appendChild(allOption);
    } else {
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = '请选择大品类';
        defaultOption.selected = true;
        selectElement.appendChild(defaultOption);
    }

    // 添加大品类选项
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.value;
        option.textContent = category.name;
        selectElement.appendChild(option);
    });
}

// 初始化品质下拉框
function initQualitySelect(selectId) {
    const selectElement = document.getElementById(selectId);
    if (!selectElement) return;

    // 清空现有选项
    selectElement.innerHTML = '';

    // 添加品质选项
    qualities.forEach(quality => {
        const option = document.createElement('option');
        option.value = quality.value;
        option.textContent = quality.name;
        selectElement.appendChild(option);
    });
}

// 初始化词条下拉框
function initAttributeSelect(category, selectId) {
    const selectElement = document.getElementById(selectId);
    if (!selectElement) return;

    // 清空现有选项
    selectElement.innerHTML = '';

    const matchAttributes = attributes.filter(item => item.category === category)

    const emptyOption = document.createElement('option');
    emptyOption.value = '';
    emptyOption.textContent = '-----';
    selectElement.appendChild(emptyOption);

    // 添加品质选项
    matchAttributes.forEach(item => {
        const option = document.createElement('option');
        option.value = item.name;
        option.textContent = item.name;
        selectElement.appendChild(option);
    });
}

const mergeEntryItems = (left, right) => {
    return right.reduce((acc, cur, index) => {
        const found = acc.find(item => item.category === cur.category && item.name === cur.name && item.quality === cur.quality)
        if (found) {
            found.min = Math.min(found.min, cur.min)
            found.max = Math.max(found.max, cur.max)
        } else {
            acc.push(cur)
        }
        return acc
    }, left.slice())
}

const getEntryItems = () => {
    const cachedItems = JSON.parse(localStorage.getItem('entryItems') || '[]');
    const allItems = mergeEntryItems(entryItems, cachedItems)
    return allItems
}

const checkAttribute = (category, name) => attributes.find(item => item.category === category && item.name === name)
const createAttribute = (category, name) => ({
    category, name
})
const submitAttribute = (category, name) => {
    if (checkAttribute(category, name)) {
        return
    }
    const newAttribute = createAttribute(category, name)
    attributes.push(newAttribute)

    localStorage.setItem('attributes', JSON.stringify(attributes));
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function () {
    // 初始化标签切换
    const queryTab = document.getElementById('queryTab');
    const entryTab = document.getElementById('entryTab');
    const queryContent = document.getElementById('queryContent');
    const entryContent = document.getElementById('entryContent');

    // 初始化词条
    initAttributes()

    // 初始化下拉框
    initCategorySelect('searchCategory')

    initCategorySelect('entryCategory')
    initQualitySelect('entryQuality')

    queryTab.addEventListener('click', function () {
        queryTab.classList.add('tab-active');
        entryTab.classList.remove('tab-active');
        queryContent.classList.add('tab-content-active');
        entryContent.classList.remove('tab-content-active');
    });

    entryTab.addEventListener('click', function () {
        entryTab.classList.add('tab-active');
        queryTab.classList.remove('tab-active');
        entryContent.classList.add('tab-content-active');
        queryContent.classList.remove('tab-content-active');
    });

    // DOM对象获取
    // 大品类选择联动小品类（查询区）
    const searchCategory = document.getElementById('searchCategory');
    const searchAttribute = document.getElementById('searchAttribute');
    // 大品类选择联动小品类（录入区）
    const entryCategory = document.getElementById('entryCategory');
    const entryAttribute = document.getElementById('entryAttribute');
    // 词条搜索建议（查询区）

    searchCategory.addEventListener('change', function () {
        initAttributeSelect(this.value, 'searchAttribute')
    });

    entryCategory.addEventListener('change', function () {
        initAttributeSelect(this.value, 'entryAttribute')
    });



    // 录入表单提交（更新逻辑：删除同词条同品质旧数据，保留最新数据）
    const entryForm = document.getElementById('entryForm');
    const entryHistory = document.getElementById('entryHistory');

    entryForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const category = entryCategory.value;
        const name = document.getElementById('entryAttribute').value.trim();
        const inputValue = parseFloat(document.getElementById('entryValue').value);
        const quality = document.getElementById('entryQuality').value;

        if (!category || !name || isNaN(inputValue)) {
            showToast('请填写大品类、词条名称和数值');
            return;
        }

        // 加载现有数据
        let items = getEntryItems()
        // 生成唯一标识：词条名称+大品类+品质（确定需要更新的数据集）
        const uniqueKey = `${name}-${category}-${quality}`;

        // 1. 筛选并保留非更新数据（排除当前词条+品类+品质的旧数据）
        const remainingItems = items.filter(item => {
            const itemKey = `${item.name}-${item.category}-${item.quality}`;
            return itemKey !== uniqueKey;
        });

        // 2. 计算新的边界值（基于所有历史数据，包括即将被删除的旧数据）
        const allSameItems = items.filter(item => {
            const itemKey = `${item.name}-${item.category}-${item.quality}`;
            return itemKey === uniqueKey;
        });

        let minVal, maxVal;
        if (allSameItems.length === 0) {
            // 全新词条：直接使用当前值作为边界
            minVal = inputValue;
            maxVal = inputValue;
        } else {
            // 存在旧数据：基于所有历史值计算边界
            const allMin = [...allSameItems.map(item => item.min), inputValue];
            const allMax = [...allSameItems.map(item => item.max), inputValue];
            minVal = Math.min(...allMin);
            maxVal = Math.max(...allMax);
        }

        // 3. 创建新记录
        const newItem = {
            category,
            subCategory: '',
            name,
            quality,
            min: minVal,
            max: maxVal,
            time: new Date().toLocaleString()
        };

        // 4. 保存新数据（剩余数据 + 新记录）
        const updatedItems = [...remainingItems, newItem];
        localStorage.setItem('entryItems', JSON.stringify(updatedItems));

        // 4.1 保存词条信息
        submitAttribute(category, name)

        // 5. 更新历史展示（重新渲染，自动移除旧数据）
        renderEntryHistory();
        // 6. 同步更新查询结果
        performSearch();

        // 7. 重置表单
        document.getElementById('entryValue').value = '';
        showToast(`已更新：${name}（${getQualityText(quality)}）最新范围 ${minVal}-${maxVal}`);
    });

    // 渲染录入历史（自动过滤旧数据，只显示最新记录）
    function renderEntryHistory() {
        const items = getEntryItems()
        if (items.length === 0) {
            entryHistory.innerHTML = '<div class="p-4 text-gray-500 text-center">暂无录入记录</div>';
            return;
        }

        // 去重处理：只保留每个词条+品类+品质的最新记录（按时间排序）
        const uniqueItems = [];
        const seenKeys = new Set();

        // 按时间倒序排序，确保最新记录先出现
        [...items].sort((a, b) => new Date(b.time) - new Date(a.time))
            .forEach(item => {
                const key = `${item.name}-${item.category}-${item.quality}`;
                if (!seenKeys.has(key)) {
                    seenKeys.add(key);
                    uniqueItems.push(item);
                }
            });

        // 渲染去重后的历史记录
        entryHistory.innerHTML = uniqueItems.map(item => {
            const categoryName = categoryMap[item.category]
            const subCatText = item.subCategory ? ` > ${item.subCategory}` : '';
            return `
              <div class="p-3 border-b last:border-0">
                  <div class="font-medium">${categoryName}</div>
                  <div class="text-sm text-gray-500 mt-1">
                      ${item.name}${subCatText} · ${getQualityText(item.quality)} · 
                      （范围：${item.min}-${item.max}）
                  </div>
              </div>
          `;
        }).join('');
    }

    // 品质文本映射
    function getQualityText(quality) {
        const map = { blue: '蓝色', purple: '紫色', orange: '橙色', red: '红色' };
        return map[quality] || quality;
    }

    // 提示框功能
    function showToast(text) {
        const toast = document.getElementById('toast');
        toast.textContent = text;
        toast.classList.add('toast-show');
        setTimeout(() => {
            toast.classList.remove('toast-show');
        }, 3000);
    }

    // 导出功能：复制到剪贴板
    document.getElementById('exportBtn').addEventListener('click', function () {
        const items = getEntryItems()
        if (items.length === 0) {
            showToast('没有数据可复制');
            return;
        }

        // 只导出去重后的最新数据
        const uniqueItems = [];
        const seenKeys = new Set();
        [...items].sort((a, b) => new Date(b.time) - new Date(a.time))
            .forEach(item => {
                const key = `${item.name}-${item.category}-${item.quality}`;
                if (!seenKeys.has(key)) {
                    seenKeys.add(key);
                    uniqueItems.push(item);
                }
            });

        const jsonStr = `${JSON.stringify(attributes, null, 2)}\n\n${JSON.stringify(uniqueItems, null, 2)}`;
        navigator.clipboard.writeText(jsonStr).then(() => {
            showToast('最新数据已复制到剪贴板');
        }).catch(err => {
            console.error('复制失败:', err);
            showToast('复制失败，请手动复制');
        });
    });

    // 清理按钮功能：清除LocalStorage缓存
    document.getElementById('clearBtn').addEventListener('click', function () {
        if (confirm('确定要清除所有缓存数据吗？此操作不可恢复')) {
            localStorage.removeItem('attributes');
            localStorage.removeItem('entryItems');
            renderEntryHistory();
            document.getElementById('searchResult').innerHTML = '<div class="text-center text-gray-500 py-8">暂无词条数据，请先在录入标签添加内容</div>';
            showToast('缓存已清空');
        }
    });

    // 初始化历史记录
    renderEntryHistory();

    // 查询功能
    function performSearch() {
        const category = searchCategory.value;
        const qualityFilters = Array.from(
            document.querySelectorAll('input[name="searchQuality"]:checked')
        ).map(cb => cb.value);
        const name = searchAttribute.value.trim().toLowerCase();

        const items = getEntryItems()
        // 去重处理：只保留最新记录
        const uniqueItems = [];
        const seenKeys = new Set();

        [...items].sort((a, b) => new Date(b.time) - new Date(a.time))
            .forEach(item => {
                const key = `${item.name}-${item.category}-${item.quality}`;
                if (!seenKeys.has(key)) {
                    seenKeys.add(key);
                    uniqueItems.push(item);
                }
            });

        const results = uniqueItems.filter(item => {
            // 品类筛选
            if (category !== 'all' && item.category !== category) return false;
            // 品质筛选
            if (qualityFilters.length > 0 && !qualityFilters.includes(item.quality)) return false;
            // 名称筛选
            if (name && !item.name.toLowerCase().includes(name)) return false;
            return true;
        });

        const searchResult = document.getElementById('searchResult');
        if (results.length === 0) {
            searchResult.innerHTML = '<div class="text-center text-gray-500 py-8">未找到匹配的词条</div>';
            return;
        }

        searchResult.innerHTML = results.map(item => `
          <div class="result-block">
              <div class="font-semibold">${item.name}</div>
              <div class="result-indent">
                  <div>大品类：${categoryMap[item.category]}</div>
                  ${item.subCategory ? `<div>小品类：${item.subCategory}</div>` : ''}
                  <div>品质：<span class="inline-block w-2 h-2 rounded-full bg-quality${item.quality.charAt(0).toUpperCase() + item.quality.slice(1)} mr-1"></span>${getQualityText(item.quality)}</div>
                  <div>数值范围：${item.min} - ${item.max}</div>
                  <div class="text-xs text-gray-500 mt-1">最后更新：${item.time}</div>
              </div>
          </div>
      `).join('');
    }

    // 绑定查询触发事件
    document.getElementById('searchCategory').addEventListener('change', performSearch);
    document.getElementById('searchAttribute').addEventListener('change', performSearch);
    document.querySelectorAll('input[name="searchQuality"]').forEach(checkbox => {
        checkbox.addEventListener('change', performSearch);
    });
});