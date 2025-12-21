// 大品类对象数组（name: 显示名称，value: 标识值）
const categories = [
    { name: '装备', value: 'equipment' },
    { name: '乐器', value: 'instrument' },
    { name: '宠物特性', value: 'petTrait' },
    { name: '宠物装备', value: 'petEquipment' }
];

const categoryMap = {
    equipment: '装备',
    instrument: '乐器',
    petTrait: '宠物特性',
    petEquipment: '宠物装备',
}

// 小品类对象数组（可根据实际需求补充对应小品类）
const subCategories = [
    { category: 'equipment', items: [] }, // 可添加装备对应的小品类
    { category: 'instrument', items: [] }, // 可添加乐器对应的小品类
    { category: 'petTrait', items: [] }, // 可添加宠物特性对应的小品类
    { category: 'petEquipment', items: [] } // 可添加宠物装备对应的小品类
];

// 品质对象数组（保持不变）
const qualities = [
    { name: '蓝色', value: 'blue' },
    { name: '紫色', value: 'purple' },
    { name: '橙色', value: 'orange' },
    { name: '红色', value: 'red' },
    { name: '彩色', value: 'perfect' },
];

// 词条数据格式
const attributeTemplate = {
    category: '',
    name: ''
}

const attributes = [
    // ##装备词条
    // 腕力加点类
    { category: 'equipment', name: "腕力加点提高基础攻击" },
    { category: 'equipment', name: "腕力加点增加攻击" },
    { category: 'equipment', name: "腕力加点对玩家造成伤害提升" },
    { category: 'equipment', name: "腕力加点提升暴击率" },
    { category: 'equipment', name: "腕力加点提升命中率" },
    { category: 'equipment', name: "角色的腕力加点增加" },
    { category: 'equipment', name: "腕力加点增加防御" },
    { category: 'equipment', name: "腕力加点增加生命" },
    { category: 'equipment', name: "腕力加点对怪物造成伤害提升" },
    { category: 'equipment', name: "腕力加点增加敏捷" },
    { category: 'equipment', name: "腕力加点降低敏捷" },
    { category: 'equipment', name: "腕力加点提高基础防御" },
    { category: 'equipment', name: "腕力加点提高基础生命" },
    { category: 'equipment', name: "腕力加点降低受到玩家伤害" },
    { category: 'equipment', name: "腕力加点降低受到怪物伤害" },

    // 体力加点类
    { category: 'equipment', name: "体力加点提升治疗效果" },
    { category: 'equipment', name: "体力加点提高基础生命" },
    { category: 'equipment', name: "体力加点提升异常抵抗" },
    { category: 'equipment', name: "体力加点增加防御" },
    { category: 'equipment', name: "体力加点增加生命" },
    { category: 'equipment', name: "角色的体力加点增加" },
    { category: 'equipment', name: "体力加点提高基础攻击" },
    { category: 'equipment', name: "体力加点增加攻击" },
    { category: 'equipment', name: "体力加点对玩家造成伤害提升" },
    { category: 'equipment', name: "体力加点对怪物造成伤害提升" },
    { category: 'equipment', name: "体力加点增加敏捷" },
    { category: 'equipment', name: "体力加点提高基础防御" },
    { category: 'equipment', name: "体力加点降低受到玩家伤害" },
    { category: 'equipment', name: "体力加点降低受到怪物伤害" },
    { category: 'equipment', name: "体力加点提升受到治疗效果" },

    // 耐力加点类
    { category: 'equipment', name: "耐力加点提高基础防御" },
    { category: 'equipment', name: "耐力加点提升异常抵抗" },
    { category: 'equipment', name: "耐力加点增加防御" },
    { category: 'equipment', name: "耐力加点提高基础生命" },
    { category: 'equipment', name: "角色的耐力加点增加" },
    { category: 'equipment', name: "耐力加点提高基础攻击" },
    { category: 'equipment', name: "耐力加点增加攻击" },
    { category: 'equipment', name: "耐力加点增加生命" },
    { category: 'equipment', name: "耐力加点对玩家造成伤害提升" },
    { category: 'equipment', name: "耐力加点对怪物造成伤害提升" },
    { category: 'equipment', name: "耐力加点增加敏捷" },
    { category: 'equipment', name: "耐力加点提升反击率" },
    { category: 'equipment', name: "耐力加点降低受到玩家伤害" },
    { category: 'equipment', name: "耐力加点降低受到怪物伤害" },
    { category: 'equipment', name: "耐力加点提升抗暴率" },

    // 速度加点类
    { category: 'equipment', name: "速度加点增加敏捷" },
    { category: 'equipment', name: "速度加点提升异常命中" },
    { category: 'equipment', name: "速度加点降低受到玩家伤害" },
    { category: 'equipment', name: "速度加点增加生命" },
    { category: 'equipment', name: "角色的速度加点增加" },
    { category: 'equipment', name: "速度加点降低受到怪物伤害" },
    { category: 'equipment', name: "速度加点提升闪避率" },
    { category: 'equipment', name: "速度加点提高基础攻击" },
    { category: 'equipment', name: "速度加点增加攻击" },
    { category: 'equipment', name: "速度加点增加防御" },
    { category: 'equipment', name: "速度加点对玩家造成伤害提升" },
    { category: 'equipment', name: "速度加点对怪物造成伤害提升" },
    { category: 'equipment', name: "速度加点提高基础防御" },
    { category: 'equipment', name: "速度加点提高基础生命" },

    // 携带宠物类
    { category: 'equipment', name: "携带宠物的伤害减免提升" },
    { category: 'equipment', name: "携带宠物的暴击率提升" },
    { category: 'equipment', name: "携带宠物的暴击伤害提升" },
    { category: 'equipment', name: "携带宠物的伤害加成提升" },
    { category: 'equipment', name: "携带宠物的抗暴率提升" },

    // 装备基础属性类
    { category: 'equipment', name: "装备基础属性提升" },

    // ##宠物装备词条
    { category: 'petEquipment', name: "宠物防御增加" },
    { category: 'petEquipment', name: "宠物生命增加" },
    { category: 'petEquipment', name: "宠物命中率提升" },
    { category: 'petEquipment', name: "宠物闪避率提升" },
    { category: 'petEquipment', name: "宠物暴击率提升" },
    { category: 'petEquipment', name: "宠物抗暴率提升" },
    { category: 'petEquipment', name: "宠物暴击伤害提升" },
    { category: 'petEquipment', name: "宠物伤害加成" },
    { category: 'petEquipment', name: "宠物异常抵抗提升" },
    { category: 'petEquipment', name: "宠物受到治疗效果提升" },
    { category: 'petEquipment', name: "宠物风属性伤害减免" },
    { category: 'petEquipment', name: "宠物伤害减免" },
    { category: 'petEquipment', name: "宠物伤害增加" },
    { category: 'petEquipment', name: "宠物攻击增加" },
    { category: 'petEquipment', name: "宠物基础生命增加" },
    { category: 'petEquipment', name: "宠物基础攻击增加" },
    { category: 'petEquipment', name: "宠物基础防御增加" },
    { category: 'petEquipment', name: "宠物地属性伤害提升" },
    { category: 'petEquipment', name: "宠物火属性伤害提升" },
    { category: 'petEquipment', name: "宠物水属性伤害提升" },
    { category: 'petEquipment', name: "宠物风属性伤害提升" },
    { category: 'petEquipment', name: "宠物地属性伤害减免" },
    { category: 'petEquipment', name: "宠物火属性伤害减免" },
    { category: 'petEquipment', name: "宠物水属性伤害减免" },
]

// 词条数值范围记录数据格式
const entryItemTemplate = {
    category: '',
    subCategory: '',
    name: '',
    quality: 0,
    min: 0,
    max: 1,
    time: new Date().toLocaleString()
}

// 词条数值范围记录
const entryItems = []

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

const getEntryItems = () => {
    const cachedItems = JSON.parse(localStorage.getItem('entryItems') || '[]');
    const allItems = entryItems.concat(cachedItems)
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
    initQualitySelect('searchSubCategory')

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
    const searchSubCategory = document.getElementById('searchSubCategory');
    const searchAttribute = document.getElementById('searchAttribute');
    // 大品类选择联动小品类（录入区）
    const entryCategory = document.getElementById('entryCategory');
    const entrySubCategory = document.getElementById('entrySubCategory');
    const entryAttribute = document.getElementById('entryAttribute');
    // 词条搜索建议（查询区）
    const searchItemName = document.getElementById('searchItemName');
    const itemSuggestions = document.getElementById('itemSuggestions');

    function updateSearchSubCategories(category) {
        searchSubCategory.innerHTML = '<option value="all">全部</option>';
        if (subCategories[category]) {
            subCategories[category].forEach(sub => {
                const option = document.createElement('option');
                option.value = sub;
                option.textContent = sub;
                searchSubCategory.appendChild(option);
            });
        }
    }

    searchCategory.addEventListener('change', function () {
        updateSearchSubCategories(this.value);
        initAttributeSelect(this.value, 'searchAttribute')
    });
    searchAttribute.addEventListener('change', function () {
        searchItemName.value = this.value
    });
    updateSearchSubCategories(searchCategory.value); // 初始化

    function updateEntrySubCategories(category) {
        entrySubCategory.innerHTML = '<option value="">（可选）请选择小品类</option>';
        if (subCategories[category]) {
            subCategories[category].forEach(sub => {
                const option = document.createElement('option');
                option.value = sub;
                option.textContent = sub;
                entrySubCategory.appendChild(option);
            });
        }
    }

    entryCategory.addEventListener('change', function () {
        updateEntrySubCategories(this.value);
        initAttributeSelect(this.value, 'entryAttribute')
    });
    entryAttribute.addEventListener('change', function () {
        entryItemName.value = this.value
    });


    searchItemName.addEventListener('input', function () {
        const value = this.value.trim().toLowerCase();
        if (value.length < 1) {
            itemSuggestions.classList.add('hidden');
            return;
        }

        const allItems = getEntryItems()
        const uniqueNames = [...new Set(allItems.map(item => item.name))];
        const filtered = uniqueNames.filter(name => name.toLowerCase().includes(value));

        itemSuggestions.innerHTML = '';
        if (filtered.length > 0) {
            filtered.forEach(name => {
                const div = document.createElement('div');
                div.className = 'px-3 py-2 hover:bg-gray-100 cursor-pointer';
                div.textContent = name;
                div.addEventListener('click', function () {
                    searchItemName.value = name;
                    itemSuggestions.classList.add('hidden');
                });
                itemSuggestions.appendChild(div);
            });
            itemSuggestions.classList.remove('hidden');
        } else {
            itemSuggestions.classList.add('hidden');
        }
    });

    // 点击其他区域关闭建议框
    document.addEventListener('click', function (e) {
        if (!searchItemName.contains(e.target) && !itemSuggestions.contains(e.target)) {
            itemSuggestions.classList.add('hidden');
        }
    });

    // 录入表单提交（更新逻辑：删除同词条同品质旧数据，保留最新数据）
    const entryForm = document.getElementById('entryForm');
    const entryHistory = document.getElementById('entryHistory');

    entryForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const category = entryCategory.value;
        const subCategory = entrySubCategory.value; // 允许为空
        const name = document.getElementById('entryItemName').value.trim();
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
            subCategory: subCategory || '',
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
        const subCategory = searchSubCategory.value;
        const qualityFilters = Array.from(
            document.querySelectorAll('input[name="searchQuality"]:checked')
        ).map(cb => cb.value);
        const name = searchItemName.value.trim().toLowerCase();

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
            // 小品类筛选（允许为空）
            if (subCategory !== 'all' && item.subCategory !== subCategory) return false;
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
    document.getElementById('searchSubCategory').addEventListener('change', performSearch);
    document.getElementById('searchItemName').addEventListener('input', performSearch);
    document.querySelectorAll('input[name="searchQuality"]').forEach(checkbox => {
        checkbox.addEventListener('change', performSearch);
    });
});