# 🌱 Plants in ECNU

> 华东师范大学校园植物数据可视化平台

华东师范大学的校园中开放了一套植物领养系统，学生和校友可以认养校内植物并留下寄语。本项目通过爬取微信小程序「芳秾」的数据，对校园植物和领养情况进行了全方位的数据分析与可视化。

---

## 功能模块

### 🗺️ 交互式地图
- 基于腾讯地图 API 的植物点聚合地图，展示植物在各校区的分布

### 📊 数据可视化
- **桑基图**：领养植物的学院 × 植物种类分布
- **旭日图**：全校植物按科目、种类的层级分布
- **平行坐标轴**：植物树高、胸径、冠幅等维度比较

### ☁️ 词云
- 对领养寄语进行分词，生成词云图

### 🤖 领养预测
- 逻辑回归 + SVM 模型，预测最可能被下一个认养的植物（AUC 0.99）

### 💬 情感分析
- 调用讯飞星火大模型 API，对领养寄语进行情感分析

### 🌐 Web 应用
- Vue 3 前端 + Python 后端，支持登录、植物浏览、寄语查看、个人中心等功能

---

## 项目结构

```
Plants-in-ECNU/
├── data/                        # 数据爬取与处理
│   ├── all_trees.json           # 所有植物信息（位置、尺寸、领养人）
│   ├── all_templates.json       # 植物种类详情（科、习性）
│   ├── all_trees_for_lib.json   # 附加文化关键词的完整数据
│   ├── get_data_code/           # 爬虫脚本（Charles 抓包 + Python）
│   └── icon/                    # 植物图标图片
│
├── analysis/                    # 数据分析
│   ├── emotion/                 # 领养寄语情感分析（讯飞星火 API）
│   ├── culture/                 # 植物文化关键词提取（NLP）
│   └── prediction/              # 领养预测模型
│       ├── reg/                 # 逻辑回归（AIC 筛变量）
│       └── svm/                 # SVM（准确率 0.75 / AUC 0.99）
│
├── visualization/               # 静态可视化
│   ├── charts/                  # 桑基图 / 旭日图 / 平行坐标轴
│   └── wordcloud/               # 词云
│
├── webapp/                      # Web 应用
│   ├── frontend/                # Vue 3 + TypeScript + ECharts 前端
│   └── backend/                 # Python Flask + MySQL 后端
│
└── prototype/                   # UI 原型设计（墨刀）
```

---

## 技术栈

| 模块 | 技术 |
|------|------|
| 前端 | Vue 3 · TypeScript · Vite · ECharts 5 · Element Plus · D3.js |
| 后端 | Python · Flask · MySQL |
| 数据爬取 | Python · Charles 抓包 |
| 数据分析 | Jupyter Notebook · Pandas · scikit-learn |
| NLP | 讯飞星火大模型 API · Pyecharts |
| 地图 | 腾讯地图 JavaScript API |

---

## 数据说明

数据来源于华东师范大学微信小程序「芳秾」，涵盖**闵行校区**和**中北校区**的全部在册植物。

主要字段：
- `id` / `place`（校区）/ `longitude` / `latitude`（经纬度）
- `height`（树高，米）/ `radius`（胸径，cm）/ `subHeight`（冠幅，米）
- `template`（植物种类，含科名、习性）
- `owner`（领养人姓名、单位、寄语）

---

## 快速开始

### 前端开发

```bash
cd webapp/frontend
npm install
npm run dev
```

### 后端

```bash
cd webapp/backend
python server.py
```

---

## 项目来源

本项目由早期课程项目 **[PlantsInECNU](https://github.com/NaCloudy/PlantsInECNU)** 迭代而来。

原项目为静态可视化版本，包含植物分布图（HTML + D3.js）、初步数据爬取和词云生成。本项目在此基础上进行了全面重构与扩展：

- 数据规模扩大，覆盖闵行、中北双校区全部在册植物
- 从静态页面升级为 Vue 3 全栈 Web 应用
- 新增 ML 预测模型（逻辑回归 + SVM）
- 新增 NLP 情感分析（讯飞星火 API）
- 新增多种交互式图表（桑基图、旭日图、平行坐标轴）

---

## 团队

课程项目，华东师范大学。
