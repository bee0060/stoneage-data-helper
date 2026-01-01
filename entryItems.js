
// 词条数值范围记录
const entryItems = [
  {
    "category": "equipment",
    "subCategory": "",
    "name": "体力加点提升异常抵抗",
    "quality": "orange",
    "min": 0.97,
    "max": 1.18,
    "time": "2026/1/2 01:17:30"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "体力加点提升异常抵抗",
    "quality": "red",
    "min": 1.23,
    "max": 1.5,
    "time": "2026/1/2 01:05:17"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "体力加点提高基础生命",
    "quality": "red",
    "min": 0.98,
    "max": 1.2,
    "time": "2026/1/2 01:03:16"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "体力加点提高基础生命",
    "quality": "orange",
    "min": 0.79,
    "max": 0.95,
    "time": "2026/1/2 01:02:14"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "体力加点提升治疗效果",
    "quality": "orange",
    "min": 0.52,
    "max": 0.63,
    "time": "2026/1/2 01:01:03"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "体力加点提升治疗效果",
    "quality": "red",
    "min": 0.64,
    "max": 0.8,
    "time": "2026/1/2 00:58:42"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点降低受到怪物伤害",
    "quality": "red",
    "min": 0.8,
    "max": 1,
    "time": "2026/1/2 00:57:40"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点降低受到怪物伤害",
    "quality": "orange",
    "min": 0.65,
    "max": 0.79,
    "time": "2026/1/2 00:57:34"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点降低受到玩家伤害",
    "quality": "orange",
    "min": 0.65,
    "max": 0.79,
    "time": "2026/1/2 00:57:10"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点降低受到玩家伤害",
    "quality": "red",
    "min": 0.8,
    "max": 1,
    "time": "2026/1/2 00:56:46"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点提高基础生命",
    "quality": "red",
    "min": 0.97,
    "max": 1.2,
    "time": "2026/1/2 00:56:01"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点提高基础生命",
    "quality": "orange",
    "min": 0.77,
    "max": 0.95,
    "time": "2026/1/2 00:55:14"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点提高基础防御",
    "quality": "orange",
    "min": 0.77,
    "max": 0.95,
    "time": "2026/1/2 00:54:03"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点提高基础防御",
    "quality": "red",
    "min": 0.97,
    "max": 1.2,
    "time": "2026/1/2 00:52:47"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点降低敏捷",
    "quality": "orange",
    "min": 3,
    "max": 3,
    "time": "2026/1/2 00:50:58"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点降低敏捷",
    "quality": "red",
    "min": 4,
    "max": 4,
    "time": "2026/1/2 00:50:55"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点增加敏捷",
    "quality": "red",
    "min": 4,
    "max": 4,
    "time": "2026/1/2 00:50:02"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点增加敏捷",
    "quality": "orange",
    "min": 3,
    "max": 3,
    "time": "2026/1/2 00:49:30"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点对怪物造成伤害提升",
    "quality": "red",
    "min": 0.8,
    "max": 1,
    "time": "2026/1/2 00:49:13"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点对怪物造成伤害提升",
    "quality": "orange",
    "min": 0.64,
    "max": 0.79,
    "time": "2026/1/2 00:48:46"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点增加生命",
    "quality": "orange",
    "min": 6,
    "max": 7,
    "time": "2026/1/2 00:45:55"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点增加生命",
    "quality": "red",
    "min": 6,
    "max": 10,
    "time": "2026/1/2 00:45:48"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点增加防御",
    "quality": "orange",
    "min": 5,
    "max": 5,
    "time": "2026/1/2 00:44:06"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点增加防御",
    "quality": "red",
    "min": 6,
    "max": 7,
    "time": "2026/1/2 00:43:27"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "角色的腕力加点增加",
    "quality": "orange",
    "min": 3,
    "max": 4,
    "time": "2026/1/2 00:35:30"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "角色的腕力加点增加",
    "quality": "red",
    "min": 4,
    "max": 5,
    "time": "2026/1/2 00:35:12"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点提升命中率",
    "quality": "red",
    "min": 0.64,
    "max": 0.8,
    "time": "2026/1/2 00:34:17"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点对玩家造成伤害提升",
    "quality": "orange",
    "min": 0.65,
    "max": 0.79,
    "time": "2026/1/2 00:21:39"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点对玩家造成伤害提升",
    "quality": "red",
    "min": 0.8,
    "max": 1,
    "time": "2026/1/2 00:18:59"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点增加攻击",
    "quality": "red",
    "min": 4,
    "max": 4,
    "time": "2026/1/2 00:16:18"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点增加攻击",
    "quality": "orange",
    "min": 3,
    "max": 3,
    "time": "2026/1/2 00:15:03"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点提高基础攻击",
    "quality": "orange",
    "min": 0.77,
    "max": 0.95,
    "time": "2026/1/2 00:13:41"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点提高基础攻击",
    "quality": "red",
    "min": 0.98,
    "max": 1.2,
    "time": "2026/1/2 00:09:41"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点提升暴击率",
    "quality": "orange",
    "min": 0.5,
    "max": 0.62,
    "time": "2025/12/31 15:58:33"
  },
  {
    "category": "equipment",
    "subCategory": "",
    "name": "腕力加点提升暴击率",
    "quality": "red",
    "min": 0.64,
    "max": 0.8,
    "time": "2025/12/31 15:57:09"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "治疗效果提升",
    "quality": "orange",
    "min": 1.66,
    "max": 2.25,
    "time": "2025/12/28 00:22:26"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "暴击伤害提升",
    "quality": "orange",
    "min": 1.66,
    "max": 2.25,
    "time": "2025/12/28 00:21:26"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "闪避率提升",
    "quality": "orange",
    "min": 1.66,
    "max": 2.25,
    "time": "2025/12/28 00:19:34"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "命中率提升",
    "quality": "orange",
    "min": 1.66,
    "max": 2.25,
    "time": "2025/12/28 00:19:00"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "暴击率提升",
    "quality": "orange",
    "min": 1.66,
    "max": 2.25,
    "time": "2025/12/28 00:18:53"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "抗暴率提升",
    "quality": "orange",
    "min": 1.66,
    "max": 2.15,
    "time": "2025/12/28 00:15:54"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "抗暴率提升",
    "quality": "red",
    "min": 2.26,
    "max": 3,
    "time": "2025/12/28 00:12:03"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "受到治疗效果提升",
    "quality": "red",
    "min": 3.42,
    "max": 4.5,
    "time": "2025/12/28 00:09:46"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "生命增加",
    "quality": "red",
    "min": 42,
    "max": 55,
    "time": "2025/12/28 00:05:29"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "受到伤害减少",
    "quality": "red",
    "min": 16,
    "max": 20,
    "time": "2025/12/28 00:02:00"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "敏捷提升",
    "quality": "red",
    "min": 16,
    "max": 20,
    "time": "2025/12/28 00:01:29"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "受到怪物伤害降低",
    "quality": "red",
    "min": 3.39,
    "max": 4.5,
    "time": "2025/12/28 00:00:19"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "受到玩家伤害降低",
    "quality": "red",
    "min": 3.39,
    "max": 4.5,
    "time": "2025/12/27 23:59:51"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "伤害减免提升",
    "quality": "red",
    "min": 2.26,
    "max": 3,
    "time": "2025/12/27 23:56:29"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "暴击伤害提升",
    "quality": "red",
    "min": 2.26,
    "max": 3,
    "time": "2025/12/27 23:55:14"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "暴击率提升",
    "quality": "red",
    "min": 2.26,
    "max": 3,
    "time": "2025/12/27 23:54:30"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "闪避率提升",
    "quality": "red",
    "min": 2.26,
    "max": 3,
    "time": "2025/12/27 23:53:33"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "命中率提升",
    "quality": "red",
    "min": 2.26,
    "max": 3,
    "time": "2025/12/27 23:51:58"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "基础防御增加",
    "quality": "red",
    "min": 4.54,
    "max": 6,
    "time": "2025/12/27 23:51:05"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "基础生命增加",
    "quality": "red",
    "min": 4.56,
    "max": 6,
    "time": "2025/12/27 23:50:04"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "防御增加",
    "quality": "red",
    "min": 31,
    "max": 40,
    "time": "2025/12/27 23:48:21"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "治疗效果提升",
    "quality": "red",
    "min": 2.26,
    "max": 3,
    "time": "2025/12/27 23:47:48"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "异常抵抗提升",
    "quality": "orange",
    "min": 3.36,
    "max": 4.49,
    "time": "2025/12/27 23:46:14"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "异常抵抗提升",
    "quality": "red",
    "min": 4.52,
    "max": 6,
    "time": "2025/12/27 23:44:46"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "伤害增加",
    "quality": "orange",
    "min": 12,
    "max": 15,
    "time": "2025/12/27 23:43:35"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "攻击增加",
    "quality": "orange",
    "min": 12,
    "max": 15,
    "time": "2025/12/27 23:35:41"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "对怪物造成伤害提升",
    "quality": "orange",
    "min": 2.49,
    "max": 3.38,
    "time": "2025/12/24 23:03:17"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "对怪物造成伤害提升",
    "quality": "red",
    "min": 3.41,
    "max": 4.5,
    "time": "2025/12/24 22:57:01"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "对玩家造成伤害提升",
    "quality": "orange",
    "min": 2.49,
    "max": 3.38,
    "time": "2025/12/24 17:04:23"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "对玩家造成伤害提升",
    "quality": "red",
    "min": 3.49,
    "max": 4.5,
    "time": "2025/12/24 16:58:37"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "伤害加成提升",
    "quality": "orange",
    "min": 1.67,
    "max": 2.25,
    "time": "2025/12/24 16:56:12"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "伤害加成提升",
    "quality": "red",
    "min": 2.27,
    "max": 3,
    "time": "2025/12/24 16:52:15"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "基础攻击增加",
    "quality": "orange",
    "min": 3.33,
    "max": 4.5,
    "time": "2025/12/24 16:48:35"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "基础攻击增加",
    "quality": "red",
    "min": 4.51,
    "max": 6,
    "time": "2025/12/24 16:41:23"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "水属性伤害提升",
    "quality": "red",
    "min": 3.43,
    "max": 4.5,
    "time": "2025/12/24 08:00:45"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "风属性伤害提升",
    "quality": "red",
    "min": 3.43,
    "max": 4.5,
    "time": "2025/12/24 08:00:41"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "火属性伤害提升",
    "quality": "red",
    "min": 3.43,
    "max": 4.5,
    "time": "2025/12/24 08:00:31"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "异常命中提升",
    "quality": "orange",
    "min": 3.32,
    "max": 4.49,
    "time": "2025/12/22 23:10:54"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "异常命中提升",
    "quality": "red",
    "min": 4.52,
    "max": 5.99,
    "time": "2025/12/22 23:00:11"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "伤害增加",
    "quality": "red",
    "min": 16,
    "max": 20,
    "time": "2025/12/22 22:56:06"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "攻击增加",
    "quality": "red",
    "min": 16,
    "max": 20,
    "time": "2025/12/22 22:55:02"
  },
  {
    "category": "instrument",
    "subCategory": "",
    "name": "地属性伤害提升",
    "quality": "red",
    "min": 3.43,
    "max": 4.5,
    "time": "2025/12/22 22:53:49"
  },
  {
    "category": "petEquipment",
    "subCategory": "",
    "name": "宠物暴击率提升",
    "quality": "purple",
    "min": 0.61,
    "max": 1.2,
    "time": "2025/12/21 23:19:33"
  },
  {
    "category": "petEquipment",
    "subCategory": "",
    "name": "宠物伤害加成",
    "quality": "purple",
    "min": 0.55,
    "max": 1,
    "time": "2025/12/21 23:14:46"
  },
  {
    "category": "petEquipment",
    "subCategory": "",
    "name": "宠物火属性伤害提升",
    "quality": "purple",
    "min": 0.55,
    "max": 1,
    "time": "2025/12/21 23:13:22"
  },
  {
    "category": "petEquipment",
    "subCategory": "",
    "name": "宠物火属性伤害提升",
    "quality": "blue",
    "min": 0.67,
    "max": 0.67,
    "time": "2025/12/21 23:09:31"
  },
  {
    "category": "petEquipment",
    "subCategory": "",
    "name": "宠物伤害增加",
    "quality": "purple",
    "min": 1,
    "max": 3,
    "time": "2025/12/21 22:45:22"
  },
  {
    "category": "petEquipment",
    "subCategory": "",
    "name": "宠物攻击增加",
    "quality": "purple",
    "min": 1,
    "max": 3,
    "time": "2025/12/21 22:38:40"
  },
  {
    "category": "petEquipment",
    "subCategory": "",
    "name": "宠物基础攻击增加",
    "quality": "purple",
    "min": 0.61,
    "max": 1.2,
    "time": "2025/12/21 22:35:26"
  },
  {
    "category": "petEquipment",
    "subCategory": "",
    "name": "宠物异常抵抗提升",
    "quality": "purple",
    "min": 1.77,
    "max": 3.5,
    "time": "2025/12/21 22:19:30"
  }
]