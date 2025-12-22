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

  // ##乐器词条
  { category: 'instrument', name: "基础攻击增加" },
  { category: 'instrument', name: "攻击增加" },
  { category: 'instrument', name: "异常命中提升" },
  { category: 'instrument', name: "治疗效果提升" },
  { category: 'instrument', name: "对玩家造成伤害提升" },
  { category: 'instrument', name: "伤害加成提升" },
  { category: 'instrument', name: "伤害增加" },
  { category: 'instrument', name: "异常抵抗提升" },
  { category: 'instrument', name: "防御增加" },
  { category: 'instrument', name: "基础生命增加" },
  { category: 'instrument', name: "基础防御增加" },
  { category: 'instrument', name: "闪避率提升" },
  { category: 'instrument', name: "暴击伤害提升" },
  { category: 'instrument', name: "受到玩家伤害降低" },
  { category: 'instrument', name: "受到怪物伤害降低" },
  { category: 'instrument', name: "命中率提升" },
  { category: 'instrument', name: "暴击率提升" },
  { category: 'instrument', name: "伤害减免提升" },
  { category: 'instrument', name: "对怪物造成伤害提升" },
  { category: 'instrument', name: "地属性伤害提升" },
  { category: 'instrument', name: "火属性伤害提升" },
  { category: 'instrument', name: "风属性伤害提升" },
  { category: 'instrument', name: "受到火属性伤害降低" },
  { category: 'instrument', name: "受到风属性伤害降低" },
  { category: 'instrument', name: "受到治疗效果提升" },
  { category: 'instrument', name: "水属性伤害提升" },
  { category: 'instrument', name: "受到地属性伤害降低" },
  { category: 'instrument', name: "受到水属性伤害降低" },
  { category: 'instrument', name: "抗暴率提升" },
  { category: 'instrument', name: "敏捷提升" },
  { category: 'instrument', name: "受到伤害减少" },
  { category: 'instrument', name: "对暴龙系伤害提升" },
  { category: 'instrument', name: "对毒蛙系伤害提升" },
  { category: 'instrument', name: "对老虎系伤害提升" },
  { category: 'instrument', name: "对人龙系伤害提升" },
  { category: 'instrument', name: "生命增加" },
  { category: 'instrument', name: "对雷龙系伤害提升" },
  { category: 'instrument', name: "对飞龙系伤害提升" },
  { category: 'instrument', name: "对鲨鱼系伤害提升" },
  { category: 'instrument', name: "对羚羊系伤害提升" },
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
