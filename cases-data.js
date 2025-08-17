// 案例数据配置文件
// 可以通过修改这个文件来添加、编辑或删除案例

const casesData = {
    // 案例1：高端时尚品牌全案设计
    "case-1": {
        id: "case-1",
        title: "高端时尚品牌全案设计",
        subtitle: "为知名时尚品牌打造完整的品牌形象体系，提升品牌价值认知",
        category: "fashion",
        categoryName: "时尚品牌",
        date: "2024年3月-2024年6月",
        services: ["品牌策略", "视觉设计", "数字营销"],
        teamSize: "8人",
        client: "某知名时尚品牌",
        background: "客户是一家新兴的时尚品牌，希望通过专业的品牌策划和视觉设计，在竞争激烈的时尚市场中脱颖而出，建立独特的品牌形象。",
        goals: [
            "建立独特的品牌定位和价值主张",
            "设计完整的视觉识别系统",
            "制定数字营销策略",
            "提升品牌知名度和市场认知度"
        ],
        solution: "我们通过深入的市场调研和消费者洞察，为品牌制定了"年轻、时尚、品质"的核心定位，并围绕这一定位设计了完整的品牌视觉系统和营销策略。",
        results: {
            brandAwareness: "300%",
            socialGrowth: "150%",
            websiteTraffic: "200%",
            satisfaction: "85%"
        },
        testimonial: {
            quote: "创意无限团队为我们提供了专业的品牌策划服务，从品牌定位到视觉设计，每一个环节都体现了他们的专业水准。项目成果超出了我们的预期，品牌形象得到了显著提升。",
            client: "张总",
            position: "品牌总监"
        },
        images: {
            main: "images/cases/case-1/main.jpg",
            gallery: [
                { src: "images/cases/case-1/logo.jpg", title: "Logo设计" },
                { src: "images/cases/case-1/vi.jpg", title: "VI手册" },
                { src: "images/cases/case-1/packaging.jpg", title: "包装设计" }
            ]
        },
        video: "videos/cases/case-1/promotion.mp4",
        relatedCases: ["case-2", "case-3", "case-4"]
    },

    // 案例2：奢侈品品牌视觉升级
    "case-2": {
        id: "case-2",
        title: "奢侈品品牌视觉升级",
        subtitle: "为奢侈品品牌进行视觉形象升级，提升品牌高端感",
        category: "fashion",
        categoryName: "时尚品牌",
        date: "2024年1月-2024年4月",
        services: ["视觉设计", "品牌升级"],
        teamSize: "6人",
        client: "某奢侈品品牌",
        background: "客户是一家传统奢侈品品牌，希望在现代市场中保持高端形象的同时，吸引年轻消费群体。",
        goals: [
            "保持品牌高端定位",
            "吸引年轻消费群体",
            "提升品牌现代感",
            "增强品牌识别度"
        ],
        solution: "我们保留了品牌的核心价值，同时注入了现代设计元素，通过全新的视觉系统让品牌更具时代感。",
        results: {
            brandAwareness: "250%",
            socialGrowth: "180%",
            websiteTraffic: "160%",
            satisfaction: "90%"
        },
        testimonial: {
            quote: "创意无限团队很好地平衡了传统与现代，既保持了我们的品牌调性，又让品牌焕发了新的活力。",
            client: "李总",
            position: "市场总监"
        },
        images: {
            main: "images/cases/case-2/main.jpg",
            gallery: [
                { src: "images/cases/case-2/branding.jpg", title: "品牌视觉" },
                { src: "images/cases/case-2/campaign.jpg", title: "广告 campaign" },
                { src: "images/cases/case-2/store.jpg", title: "店面设计" }
            ]
        },
        video: "videos/cases/case-2/brand-story.mp4",
        relatedCases: ["case-1", "case-3", "case-5"]
    },

    // 案例3：科技创新企业品牌升级
    "case-3": {
        id: "case-3",
        title: "科技创新企业品牌升级",
        subtitle: "为科技企业重塑品牌形象，提升市场竞争力和品牌认知度",
        category: "tech",
        categoryName: "科技创新",
        date: "2024年2月-2024年5月",
        services: ["品牌策略", "视觉设计", "数字营销"],
        teamSize: "10人",
        client: "某AI科技公司",
        background: "客户是一家专注于人工智能技术的科技公司，希望建立现代化的品牌形象，突出技术创新优势。",
        goals: [
            "建立现代化品牌形象",
            "突出技术创新优势",
            "提升行业影响力",
            "吸引投资和人才"
        ],
        solution: "我们设计了体现科技感和创新性的品牌视觉系统，通过数字营销策略提升品牌在行业中的影响力。",
        results: {
            brandAwareness: "400%",
            socialGrowth: "300%",
            websiteTraffic: "350%",
            satisfaction: "92%"
        },
        testimonial: {
            quote: "创意无限团队深刻理解科技行业的特点，为我们打造了既专业又现代的品牌形象，大大提升了我们的市场竞争力。",
            client: "王总",
            position: "CEO"
        },
        images: {
            main: "images/cases/case-3/main.jpg",
            gallery: [
                { src: "images/cases/case-3/logo.jpg", title: "Logo设计" },
                { src: "images/cases/case-3/website.jpg", title: "官网设计" },
                { src: "images/cases/case-3/materials.jpg", title: "宣传物料" }
            ]
        },
        video: "videos/cases/case-3/company-intro.mp4",
        relatedCases: ["case-1", "case-2", "case-6"]
    },

    // 案例4：高端餐饮品牌策划
    "case-4": {
        id: "case-4",
        title: "高端餐饮品牌策划",
        subtitle: "为高端餐饮品牌提供完整的品牌策划和视觉设计服务",
        category: "food",
        categoryName: "餐饮服务",
        date: "2024年4月-2024年7月",
        services: ["品牌策略", "视觉设计", "活动策划"],
        teamSize: "7人",
        client: "某高端餐饮连锁",
        background: "客户是一家高端餐饮连锁品牌，希望建立独特的品牌形象，提升品牌在高端餐饮市场的地位。",
        goals: [
            "建立高端餐饮品牌形象",
            "设计独特的视觉识别系统",
            "策划品牌推广活动",
            "提升品牌知名度"
        ],
        solution: "我们为品牌设计了体现高端品质的视觉系统，并策划了一系列品牌推广活动。",
        results: {
            brandAwareness: "280%",
            socialGrowth: "200%",
            websiteTraffic: "180%",
            satisfaction: "88%"
        },
        testimonial: {
            quote: "创意无限团队为我们打造了完美的品牌形象，从视觉设计到活动策划，每一个细节都体现了专业水准。",
            client: "陈总",
            position: "品牌总监"
        },
        images: {
            main: "images/cases/case-4/main.jpg",
            gallery: [
                { src: "images/cases/case-4/branding.jpg", title: "品牌视觉" },
                { src: "images/cases/case-4/restaurant.jpg", title: "餐厅设计" },
                { src: "images/cases/case-4/menu.jpg", title: "菜单设计" }
            ]
        },
        video: "videos/cases/case-4/restaurant-tour.mp4",
        relatedCases: ["case-1", "case-2", "case-7"]
    },

    // 案例5：医疗品牌形象设计
    "case-5": {
        id: "case-5",
        title: "医疗品牌形象设计",
        subtitle: "为医疗机构打造专业、可信赖的品牌形象",
        category: "health",
        categoryName: "医疗健康",
        date: "2024年5月-2024年8月",
        services: ["品牌策略", "视觉设计"],
        teamSize: "5人",
        client: "某医疗机构",
        background: "客户是一家专业医疗机构，希望建立专业、可信赖的品牌形象，提升患者信任度。",
        goals: [
            "建立专业医疗品牌形象",
            "提升患者信任度",
            "设计医疗品牌视觉系统",
            "增强品牌识别度"
        ],
        solution: "我们设计了体现专业性和可信赖感的品牌视觉系统，通过温暖的色调和专业的布局传达医疗机构的专业形象。",
        results: {
            brandAwareness: "200%",
            socialGrowth: "150%",
            websiteTraffic: "180%",
            satisfaction: "95%"
        },
        testimonial: {
            quote: "创意无限团队为我们设计了既专业又温暖的品牌形象，大大提升了患者对我们的信任度。",
            client: "赵总",
            position: "院长"
        },
        images: {
            main: "images/cases/case-5/main.jpg",
            gallery: [
                { src: "images/cases/case-5/logo.jpg", title: "Logo设计" },
                { src: "images/cases/case-5/hospital.jpg", title: "医院环境" },
                { src: "images/cases/case-5/materials.jpg", title: "宣传物料" }
            ]
        },
        video: "videos/cases/case-5/hospital-intro.mp4",
        relatedCases: ["case-3", "case-6", "case-8"]
    },

    // 案例6：金融科技品牌重塑
    "case-6": {
        id: "case-6",
        title: "金融科技品牌重塑",
        subtitle: "为金融科技企业打造现代化的品牌形象和营销策略",
        category: "finance",
        categoryName: "金融服务",
        date: "2024年6月-2024年9月",
        services: ["品牌策略", "视觉设计", "数字营销"],
        teamSize: "9人",
        client: "某金融科技公司",
        background: "客户是一家金融科技公司，希望建立现代化、可信赖的品牌形象，在竞争激烈的金融科技市场中脱颖而出。",
        goals: [
            "建立现代化金融科技品牌形象",
            "提升品牌可信赖度",
            "制定数字营销策略",
            "增强市场竞争力"
        ],
        solution: "我们设计了体现科技感和可信赖感的品牌视觉系统，通过数字营销策略提升品牌在金融科技领域的影响力。",
        results: {
            brandAwareness: "350%",
            socialGrowth: "280%",
            websiteTraffic: "320%",
            satisfaction: "90%"
        },
        testimonial: {
            quote: "创意无限团队为我们打造了完美的金融科技品牌形象，既体现了科技感，又保持了金融行业的专业性和可信赖感。",
            client: "刘总",
            position: "市场总监"
        },
        images: {
            main: "images/cases/case-6/main.jpg",
            gallery: [
                { src: "images/cases/case-6/logo.jpg", title: "Logo设计" },
                { src: "images/cases/case-6/app.jpg", title: "APP界面" },
                { src: "images/cases/case-6/campaign.jpg", title: "广告 campaign" }
            ]
        },
        video: "videos/cases/case-6/fintech-story.mp4",
        relatedCases: ["case-3", "case-5", "case-9"]
    },

    // 案例7：在线教育平台设计
    "case-7": {
        id: "case-7",
        title: "在线教育平台设计",
        subtitle: "为在线教育平台提供品牌设计和用户体验优化服务",
        category: "education",
        categoryName: "教育培训",
        date: "2024年7月-2024年10月",
        services: ["品牌策略", "视觉设计", "UI/UX设计"],
        teamSize: "12人",
        client: "某在线教育平台",
        background: "客户是一家在线教育平台，希望建立专业、友好的品牌形象，提升用户体验和品牌认知度。",
        goals: [
            "建立专业教育品牌形象",
            "优化平台用户体验",
            "设计教育品牌视觉系统",
            "提升用户满意度"
        ],
        solution: "我们设计了体现教育专业性和用户友好性的品牌视觉系统，并优化了平台的用户界面和用户体验。",
        results: {
            brandAwareness: "300%",
            socialGrowth: "250%",
            websiteTraffic: "280%",
            satisfaction: "92%"
        },
        testimonial: {
            quote: "创意无限团队为我们打造了完美的教育品牌形象，用户体验得到了显著提升，用户满意度大幅提高。",
            client: "孙总",
            position: "产品总监"
        },
        images: {
            main: "images/cases/case-7/main.jpg",
            gallery: [
                { src: "images/cases/case-7/logo.jpg", title: "Logo设计" },
                { src: "images/cases/case-7/platform.jpg", title: "平台界面" },
                { src: "images/cases/case-7/mobile.jpg", title: "移动端设计" }
            ]
        },
        video: "videos/cases/case-7/platform-demo.mp4",
        relatedCases: ["case-4", "case-8", "case-9"]
    },

    // 案例8：文化品牌视觉策划
    "case-8": {
        id: "case-8",
        title: "文化品牌视觉策划",
        subtitle: "为文化娱乐品牌提供创意视觉策划服务",
        category: "culture",
        categoryName: "文化娱乐",
        date: "2024年8月-2024年11月",
        services: ["品牌策略", "视觉设计", "活动策划"],
        teamSize: "8人",
        client: "某文化娱乐公司",
        background: "客户是一家文化娱乐公司，希望建立独特的文化品牌形象，吸引年轻消费群体。",
        goals: [
            "建立独特文化品牌形象",
            "吸引年轻消费群体",
            "设计文化品牌视觉系统",
            "策划文化活动"
        ],
        solution: "我们设计了体现文化特色和年轻活力的品牌视觉系统，并策划了一系列文化活动。",
        results: {
            brandAwareness: "320%",
            socialGrowth: "350%",
            websiteTraffic: "300%",
            satisfaction: "88%"
        },
        testimonial: {
            quote: "创意无限团队为我们打造了独特的文化品牌形象，既体现了文化特色，又吸引了年轻消费群体。",
            client: "周总",
            position: "创意总监"
        },
        images: {
            main: "images/cases/case-8/main.jpg",
            gallery: [
                { src: "images/cases/case-8/branding.jpg", title: "品牌视觉" },
                { src: "images/cases/case-8/event.jpg", title: "活动策划" },
                { src: "images/cases/case-8/materials.jpg", title: "宣传物料" }
            ]
        },
        video: "videos/cases/case-8/culture-story.mp4",
        relatedCases: ["case-5", "case-7", "case-9"]
    },

    // 案例9：电商平台品牌视觉系统
    "case-9": {
        id: "case-9",
        title: "电商平台品牌视觉系统",
        subtitle: "为大型电商平台打造统一的品牌视觉识别系统",
        category: "ecommerce",
        categoryName: "电商平台",
        date: "2024年9月-2024年12月",
        services: ["品牌策略", "视觉设计", "UI/UX设计"],
        teamSize: "15人",
        client: "某大型电商平台",
        background: "客户是一家大型电商平台，希望建立统一的品牌视觉识别系统，提升品牌在电商领域的竞争力。",
        goals: [
            "建立统一品牌视觉识别系统",
            "提升电商平台竞争力",
            "优化用户界面设计",
            "增强品牌识别度"
        ],
        solution: "我们设计了统一的品牌视觉识别系统，并优化了平台的用户界面设计，提升了用户体验。",
        results: {
            brandAwareness: "400%",
            socialGrowth: "320%",
            websiteTraffic: "380%",
            satisfaction: "94%"
        },
        testimonial: {
            quote: "创意无限团队为我们打造了完美的电商品牌视觉系统，用户体验得到了显著提升，品牌竞争力大幅增强。",
            client: "吴总",
            position: "设计总监"
        },
        images: {
            main: "images/cases/case-9/main.jpg",
            gallery: [
                { src: "images/cases/case-9/logo.jpg", title: "Logo设计" },
                { src: "images/cases/case-9/website.jpg", title: "网站设计" },
                { src: "images/cases/case-9/app.jpg", title: "APP设计" }
            ]
        },
        video: "videos/cases/case-9/ecommerce-demo.mp4",
        relatedCases: ["case-6", "case-7", "case-8"]
    }
};

// 获取所有案例
function getAllCases() {
    return Object.values(casesData);
}

// 根据分类获取案例
function getCasesByCategory(category) {
    return Object.values(casesData).filter(caseItem => caseItem.category === category);
}

// 根据ID获取单个案例
function getCaseById(id) {
    return casesData[id];
}

// 获取相关案例
function getRelatedCases(caseId, limit = 3) {
    const currentCase = casesData[caseId];
    if (!currentCase || !currentCase.relatedCases) {
        return [];
    }
    
    return currentCase.relatedCases
        .slice(0, limit)
        .map(id => casesData[id])
        .filter(Boolean);
}

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        casesData,
        getAllCases,
        getCasesByCategory,
        getCaseById,
        getRelatedCases
    };
}
