# 案例管理系统使用指南

## 概述

本系统提供了一个可扩展的案例管理解决方案，允许您轻松添加、编辑和更新案例信息，包括图片、文字和视频资料。

## 文件结构

```
wangzhan2/
├── case-detail.html          # 案例详情页面模板
├── cases-data.js             # 案例数据配置文件
├── case-management-guide.md  # 本指南文件
├── images/
│   └── cases/                # 案例图片文件夹
│       ├── case-1/           # 案例1的图片
│       ├── case-2/           # 案例2的图片
│       └── ...
├── videos/
│   └── cases/                # 案例视频文件夹
│       ├── case-1/           # 案例1的视频
│       ├── case-2/           # 案例2的视频
│       └── ...
└── ...
```

## 如何添加新案例

### 1. 在 cases-data.js 中添加案例数据

在 `cases-data.js` 文件中，按照以下格式添加新案例：

```javascript
"case-10": {
    id: "case-10",
    title: "新案例标题",
    subtitle: "案例副标题",
    category: "fashion", // 分类：fashion, tech, food, health, finance, education, culture, ecommerce
    categoryName: "时尚品牌",
    date: "2024年10月-2024年12月",
    services: ["品牌策略", "视觉设计"],
    teamSize: "6人",
    client: "客户名称",
    background: "项目背景描述",
    goals: [
        "目标1",
        "目标2",
        "目标3"
    ],
    solution: "解决方案描述",
    results: {
        brandAwareness: "250%",
        socialGrowth: "180%",
        websiteTraffic: "200%",
        satisfaction: "90%"
    },
    testimonial: {
        quote: "客户评价内容",
        client: "客户姓名",
        position: "客户职位"
    },
    images: {
        main: "images/cases/case-10/main.jpg",
        gallery: [
            { src: "images/cases/case-10/image1.jpg", title: "图片标题1" },
            { src: "images/cases/case-10/image2.jpg", title: "图片标题2" }
        ]
    },
    video: "videos/cases/case-10/video.mp4",
    relatedCases: ["case-1", "case-3", "case-5"]
}
```

### 2. 准备图片和视频文件

#### 图片要求：
- **主图**：建议尺寸 1200x800px，格式 JPG 或 PNG
- **画廊图片**：建议尺寸 800x600px，格式 JPG 或 PNG
- **文件命名**：使用有意义的名称，如 `main.jpg`, `logo.jpg`, `branding.jpg`

#### 视频要求：
- **格式**：MP4, WebM
- **分辨率**：建议 1920x1080 或 1280x720
- **时长**：建议 1-3 分钟
- **文件大小**：建议不超过 50MB

### 3. 创建文件夹结构

为每个新案例创建对应的文件夹：

```
images/cases/case-10/
├── main.jpg
├── logo.jpg
├── branding.jpg
└── materials.jpg

videos/cases/case-10/
└── promotion.mp4
```

## 如何编辑现有案例

### 1. 修改案例基本信息

在 `cases-data.js` 中找到对应的案例，直接修改相关字段：

```javascript
"case-1": {
    // 修改标题
    title: "新的案例标题",
    
    // 修改副标题
    subtitle: "新的案例副标题",
    
    // 修改项目时间
    date: "2024年1月-2024年3月",
    
    // 修改服务类型
    services: ["品牌策略", "视觉设计", "数字营销", "活动策划"],
    
    // 修改团队规模
    teamSize: "10人",
    
    // 修改客户名称
    client: "新的客户名称",
    
    // 修改项目背景
    background: "新的项目背景描述",
    
    // 修改项目目标
    goals: [
        "新的目标1",
        "新的目标2",
        "新的目标3",
        "新的目标4"
    ],
    
    // 修改解决方案
    solution: "新的解决方案描述",
    
    // 修改项目成果
    results: {
        brandAwareness: "350%",
        socialGrowth: "200%",
        websiteTraffic: "250%",
        satisfaction: "95%"
    },
    
    // 修改客户评价
    testimonial: {
        quote: "新的客户评价内容",
        client: "新的客户姓名",
        position: "新的客户职位"
    }
}
```

### 2. 更新图片和视频

1. **替换图片**：
   - 将新图片放入对应的案例文件夹
   - 更新 `cases-data.js` 中的图片路径
   - 确保图片文件名与代码中的路径一致

2. **替换视频**：
   - 将新视频放入对应的案例文件夹
   - 更新 `cases-data.js` 中的视频路径

### 3. 更新相关案例

修改 `relatedCases` 数组来更新相关案例推荐：

```javascript
relatedCases: ["case-2", "case-4", "case-6"]
```

## 如何删除案例

### 1. 从数据文件中删除

在 `cases-data.js` 中删除对应的案例数据：

```javascript
// 删除整个案例对象
delete casesData["case-1"];
```

### 2. 删除相关文件

删除对应的图片和视频文件夹：

```
rm -rf images/cases/case-1/
rm -rf videos/cases/case-1/
```

### 3. 更新相关链接

检查并更新其他案例中的 `relatedCases` 数组，移除对已删除案例的引用。

## 分类管理

### 现有分类：
- `fashion` - 时尚品牌
- `tech` - 科技创新
- `food` - 餐饮服务
- `health` - 医疗健康
- `finance` - 金融服务
- `education` - 教育培训
- `culture` - 文化娱乐
- `ecommerce` - 电商平台

### 添加新分类：

1. 在 `cases-data.js` 中添加新分类的案例
2. 在 `portfolio.html` 的筛选按钮中添加新分类
3. 更新相关的 CSS 样式

## 最佳实践

### 1. 图片优化
- 压缩图片以减少文件大小
- 使用适当的图片格式（JPG 用于照片，PNG 用于图标和透明背景）
- 保持一致的宽高比

### 2. 内容管理
- 定期更新案例信息
- 保持描述文字简洁明了
- 确保所有链接都正常工作

### 3. 文件命名
- 使用有意义的文件名
- 避免使用中文文件名
- 使用小写字母和连字符

### 4. 版本控制
- 在修改前备份原始文件
- 记录重要的更改
- 定期备份整个项目

## 故障排除

### 常见问题：

1. **图片不显示**
   - 检查文件路径是否正确
   - 确认文件是否存在
   - 检查文件权限

2. **视频无法播放**
   - 确认视频格式是否支持
   - 检查文件大小是否过大
   - 验证视频文件是否损坏

3. **案例页面无法访问**
   - 检查 URL 参数是否正确
   - 确认案例 ID 是否存在
   - 验证 JavaScript 文件是否正确加载

### 技术支持

如果遇到问题，请检查：
1. 浏览器控制台是否有错误信息
2. 文件路径是否正确
3. 数据格式是否符合要求

## 系统特点

### 动态案例管理
- **Portfolio页面**：显示所有案例，支持分类筛选
- **首页案例**：从所有案例中随机选择9个展示
- **案例详情页**：每个案例都有独立的详情页面
- **自动更新**：添加新案例后，所有页面自动更新

### 数据驱动
- 所有案例数据集中在 `cases-data.js` 文件中
- 修改数据文件即可更新所有页面
- 支持图片、视频、文字等多媒体内容
- 支持案例分类和相关案例推荐

## 更新日志

### v1.1.0 (2025-01-27)
- 实现动态案例加载系统
- Portfolio页面显示所有案例
- 首页案例随机选择功能
- 优化案例管理流程

### v1.0.0 (2025-01-27)
- 创建案例管理系统
- 支持动态案例数据
- 添加案例详情页面
- 实现案例筛选功能
- 支持图片和视频展示
