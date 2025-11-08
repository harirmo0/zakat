import type { HomeContent } from "../../types/home";

const homeContentZh: HomeContent = {
  locale: "zh",
  brandSection: {
    heading: "maroc zakat · 官方品牌",
    description:
      "我们以 maroc zakat 统一对外，建设已认证的社交账号（X、YouTube、Reddit、Facebook 上的 @maroc_zakat），发布权威数据并支持各类合作。",
    pillars: [
      {
        title: "统一形象",
        detail:
          "所有资料均标注 maroc zakat、更新时间与来源，方便机构引用与审计。"
      },
      {
        title: "官方社群",
        detail:
          "社交平台定期推送尼萨布更新、工具升级与合作机会，并接受社区反馈。"
      },
      {
        title: "协作入口",
        detail:
          "联系页面面向慈善组织、研究者、金融及技术团队开放合作与数据更新申请。"
      }
    ]
  },
  hero: {
    tag: "摩洛哥最高教务委员会 · 马力基学派",
    title: "maroc zakat · 2025 年天课全指南",
    description:
      "maroc zakat 提供 2025 年摩洛哥天课（zakat）尼萨布最新数据、2024/2025 变化、阿尔及利亚与突尼斯数据、MAD 与外币计算工具，以及合作渠道。",
    navItems: [
      { id: "overview-2025", label: "2025 要点" },
      { id: "maroc-zakat", label: "maroc zakat" },
      { id: "nisab-2024", label: "回顾 2024" },
      { id: "regional-nisab", label: "马格里布" },
      { id: "calculator", label: "天课计算器" },
      { id: "usd-calculator", label: "外币助手" },
      { id: "prayer-times", label: "礼拜时间" },
      { id: "zakat-sheet", label: "天课表格" },
      { id: "faq", label: "常见问题" },
      { id: "sources", label: "资料" }
    ],
    primaryCta: { label: "立即计算", href: "#calculator" },
    secondaryCta: { label: "查看回历时间表", href: "#timeline" },
    meta: [
      { value: "7,438 MAD", label: "银本位尼萨布 · 2025/11" },
      { value: "2.5%", label: "天课比例" },
      { value: "354 天", label: "回历年" }
    ]
  },
  overview2025: {
    heading: "2025 年摩洛哥尼萨布",
    description:
      "摩洛哥继续使用 595 克白银作为标准。2025 年 11 月尼萨布为 7,438 MAD。我们每月更新，并与银行与宗教部门核实。",
    stats: [
      {
        title: "每周监测",
        paragraph: "2025 年 11 月第一周白银均价 12.51 MAD/g ⇒ 尼萨布 7,438 MAD。",
        bullets: ["每周五市场收盘后更新", "来源：宗教部公告 + 摩洛哥央行数据"]
      },
      {
        title: "2.5% 规则",
        paragraph: "当净储蓄超过尼萨布并维持一个回历年，需缴纳 2.5%。示例：12,000 MAD ⇒ 300 MAD。",
        bullets: ["包括工资、奖金、留存礼物", "扣除必要支出与短期债务"]
      },
      {
        title: "外币储蓄",
        paragraph: "支付当天按官方汇率折算为 MAD，再乘以 2.5%。可使用下方工具。",
        bullets: ["使用央行或银行官方汇率", "记录汇率与时间以备审计"]
      }
    ],
    note: "选择白银可覆盖更多中等收入家庭，符合 maroc zakat 的社会目标。"
  },
  comparison2024: {
    heading: "2024 vs 2025",
    description:
      "2024 年末白银价格约 11.92 MAD/g，2025 年 11 月回升至 12.51 MAD/g，上涨约 5%。若 2024 年延迟到 2025 年缴纳，请使用最新值重新计算。",
    rows: [
      { month: "一月", value2024: "7,020", value2025: "7,312", note: "工业需求回升" },
      { month: "四月", value2024: "7,065", value2025: "7,366", note: "拉马丹前准备" },
      { month: "八月", value2024: "7,118", value2025: "7,402", note: "能源市场波动" },
      { month: "十一月", value2024: "7,080", value2025: "7,438", note: "当前官方参考值" }
    ],
    footnote: "若尼萨布在 2024 年达到但 2025 年才缴纳，请以最新数值为准。"
  },
  essentials: {
    heading: "核心原则",
    description: "基于马力基学派并结合摩洛哥经济情况。",
    cards: [
      {
        title: "官方尼萨布",
        body: "595 克白银（≈ 7,438 MAD），确保中产群体也能履行天课义务。",
        badge: "官方指引"
      },
      {
        title: "课征资产",
        body: "扣除必要支出后的净储蓄：现金、银行余额、快速变现资产等。",
        badge: "马力基法学"
      },
      {
        title: "重视回历",
        body: "从首次达到尼萨布的月初开始计算回历年，可在拉马丹等特殊时期提前支付并做好记录。",
        badge: "现代应用"
      }
    ]
  },
  regional: {
    heading: "马格里布地区数据",
    description: "帮助跨国家庭同步 zakat 规划。",
    cards: [
      {
        title: "摩洛哥",
        intro: "2025 年尼萨布：7,438 MAD。建议每月查看宗教部公告确保最新数据。",
        bullets: ["参考纪要：1447 年穆哈兰姆", "建议保留书面记录", "优先选择有资质的慈善机构"]
      },
      {
        title: "阿尔及利亚",
        intro: "2025 年尼萨布：705,000 DZD（2025/10）。适合在阿尔及利亚/摩洛哥之间工作的人士。",
        bullets: ["汇率请使用官方数据", "个人电子申报可选", "跨境转账前联系合作机构"]
      },
      {
        title: "突尼斯",
        intro: "2025 年尼萨布：12,500 TND（1446/11）。支付当日再折算为 MAD。",
        bullets: ["关注央行发布的汇率", "企业须独立记账天课", "跨境汇款遵循反洗钱规定"]
      }
    ],
    note: "建议固定天课日期，将所有资产折算为 MAD，并保存汇率证明。"
  },
  scenarios: {
    heading: "示例场景",
    description: "展示月薪 7,000 MAD 的两种情况，可用作参考模板。",
    cards: [
      {
        title: "每月储蓄 1,000 MAD",
        subtitle: "标准案例",
        items: [
          { label: "12 个月后余额", value: "12,000 MAD" },
          { label: "是否超过尼萨布？", value: "是" },
          { label: "应缴天课", value: "300 MAD" },
          { label: "建议支付时间", value: "回历周年或提前在拉马丹" }
        ],
        footer: "选择固定的回历日期，支付前再次核对余额。"
      },
      {
        title: "每月储蓄 500 MAD",
        subtitle: "暂未达到尼萨布",
        items: [
          { label: "12 个月后余额", value: "6,000 MAD" },
          { label: "是否超过尼萨布？", value: "否" },
          { label: "应缴天课", value: "未达到前无需缴纳" },
          { label: "建议措施", value: "增加储蓄或减少支出，直至超过尼萨布" }
        ],
        footer: "持续记录余额，及时识别超过尼萨布的时间点。"
      }
    ]
  },
  calculator: {
    heading: "快速天课计算器",
    description: "对比每月结余与尼萨布，估算年终天课。仅供参考，支付前请再次确认。",
    salaryLabel: "月收入（MAD）",
    expenseLabel: "必要支出（MAD）",
    nisabLabel: "尼萨布选项",
    nisabOptions: [
      { value: 7438, label: "银本位（推荐）" },
      { value: 101397, label: "金本位（谨慎选项）" }
    ],
    submitLabel: "开始计算",
    statusMessages: {
      invalid: {
        chip: "信息缺失",
        recommendation: "请至少填写月收入。"
      },
      noSavings: {
        chip: "无结余",
        recommendation: "结余为零或为负，暂无需缴纳。"
      },
      belowNisab: {
        chip: "未达尼萨布",
        recommendation: "继续储蓄并监测，达到尼萨布后再纳天课。"
      },
      reachedNisab: {
        chip: "已达尼萨布",
        recommendation: "在天课周年支付 2.5%，也可在拉马丹等时段提前支付。"
      }
    },
    monthlySavingLabel: "预计月结余",
    annualSavingLabel: "12 个月累计",
    zakatAmountLabel: "应缴天课（2.5%）",
    recommendationLabel: "建议",
    initialRecommendation: "填写数据后点击计算。",
    hint: "* 请在正式支付前以当日余额为准，并咨询学者处理特殊情况。"
  },
  why25: {
    heading: "为何始终采用 2.5%",
    description: "源自圣训与学者共识，亦符合 2025 年北非的经济实际。",
    cards: [
      {
        title: "宗教依据",
        paragraph: "“白银的一四十分之一”是核心依据，凡与白银性质相同的资产均适用 2.5%。",
        bullets: ["在摩洛哥、阿尔及利亚、突尼斯均适用", "遇到紧急需要可提前支付", "未产生收益的投资暂时豁免"]
      },
      {
        title: "经济合理性",
        paragraph: "北非通胀约 2–3%，2.5% 能兼顾弱势群体和储蓄者之间的平衡。",
        bullets: ["纳入银行存款与闲置现金", "分红收益计入课征基数", "保留计算记录，方便审计"]
      }
    ]
  },
  usdCalculator: {
    heading: "外币辅助工具",
    description: "支付前将美元、欧元、英镑折算为 MAD，对照尼萨布后再乘以 2.5%。",
    steps: ["记下外币余额", "按当日官方汇率换算为 MAD", "与当前尼萨布对比", "若超过 ⇒ Zakat = MAD × 0.025"],
    tip: "示例：2,000 USD × 10.12 = 20,240 MAD ⇒ 天课约 506 MAD。",
    table: [
      { currency: "美元 (USD)", rate: "10.12 MAD", nisab: "735 $", zakat: "18.4 $ (≈ 186 MAD)" },
      { currency: "欧元 (EUR)", rate: "10.86 MAD", nisab: "685 €", zakat: "17.1 € (≈ 186 MAD)" },
      { currency: "英镑 (GBP)", rate: "12.54 MAD", nisab: "593 £", zakat: "14.8 £ (≈ 186 MAD)" }
    ],
    caption: "请使用实际支付日的汇率并保存证明（银行回单、截图等）。"
  },
  timeline: {
    heading: "回历行动清单",
    description: "以伊斯兰月份规划储蓄与天课支付，突出摩洛哥重点时段。",
    entries: [
      { title: "穆哈兰姆", description: "接近周年时可提前支付。" },
      { title: "萨法尔", description: "支持弱势家庭过冬。" },
      { title: "拉比艾•欧外勒", description: "纪念先知 ﷺ，检查余额。" },
      { title: "拉比艾•赛尼 ⇢ 朱马达", description: "寒冬重点：衣物与小额债务援助。" },
      { title: "拉贾布", description: "禁月，适合计划性支付。" },
      { title: "沙巴尼", description: "整理账目，准备拉马丹。" },
      {
        title: "拉马丹",
        description: "天课与慈善高峰。",
        highlight: true,
        highlightStyle: "background: linear-gradient(135deg, rgba(146, 235, 37, 0.85), rgba(56, 189, 248, 0.85));"
      },
      { title: "肖瓦勒", description: "延续拉马丹后的慈善。" },
      { title: "都•盖达", description: "周年前再次核对余额。" },
      {
        title: "都•哈志", description: "前十天功德加倍，适合支付天课与大量捐赠。",
        highlight: true,
        highlightStyle: "background: linear-gradient(135deg, rgba(37, 235, 119, 0.85), rgba(56, 189, 248, 0.85));"
      }
    ]
  },
  prayerTimes: {
    heading: "摩洛哥官方礼拜时间",
    description: "直接嵌入宗教部 (habous.gov.ma) 页面，安排天课与施舍的最佳时间。",
    iframeTitle: "摩洛哥宗教部礼拜时间",
    ctaLabel: "打开 habous.gov.ma"
  },
  zakatSheet: {
    heading: "下载 maroc zakat CSV 表",
    description:
      "便捷的 CSV 模板，记录月度净储蓄、监测尼萨布、自动估算 2.5% 天课，兼容 Excel/Numbers/Google Sheets。",
    featureList: [
      "列结构：月份 / 净收入 / 必要支出 / 月度结余 / 累计余额 / 尼萨布状态",
      "内置公式，可自动计算结余与天课",
      "当累计余额超过 7,438 MAD 时自动提示"
    ],
    badges: ["CSV", "2025 年 11 月更新"],
    downloadLabel: "下载 maroc-zakat-tracker.csv",
    downloadHint: "Google Sheets：文件 → 导入 → 新表格，可与家人或团队共享。",
    reminder: "官方尼萨布或汇率变动时，请及时更新表格中的数值。"
  },
  family: {
    heading: "向亲属支付天课",
    description: "区分法定义务抚养与可接受的天课受益人。",
    cards: [
      { title: "不可支付", body: "父母、祖父母、子女、孙辈等受赡养人。" },
      { title: "允许并推荐", body: "兄弟姐妹、叔伯姨舅等不需负担生活费的贫困亲属。" },
      {
        title: "首选私下进行",
        body: "尊重受助者隐私；若公开可激励他人，也可视情况执行。",
        emphasis: "background: linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(40, 40, 40, 0.85)); color: #ffffff;"
      }
    ]
  },
  reminder: {
    heading: "订阅 Maroc Zakat 提醒",
    description: "留下邮箱即可收到尼萨布更新、计算器改进以及每月天课提醒。",
    emailLabel: "电子邮箱",
    nameLabel: "名字（可选）",
    consentLabel: "我同意接收 Maroc Zakat 提醒及隐私相关通知。",
    submitLabel: "订阅",
    successMessage: "订阅成功。我们会发送每月提醒和重要更新。",
    errorMessage: "暂时无法保存订阅，请稍后再试。",
    badgeLabel: "每月摘要",
    hint: "每月 1-2 封邮件，可随时一键退订。"
  },
  goldVsSilver: {
    heading: "白银 vs 黄金",
    description: "为何摩洛哥首选白银？何时可以考虑黄金。",
    goldList: [
      "黄金尼萨布：85 g（≈ 101,397 MAD）",
      "主要针对高收入群体",
      "多数职员因此免除天课",
      "在严重通胀时可咨询学者评估"
    ],
    silverList: [
      "白银尼萨布：595 g（≈ 7,438 MAD）",
      "覆盖面更广，符合社会互助宗旨",
      "获得官方认可",
      "契合 maroc zakat 的使命"
    ],
    conclusion: "默认选择白银，需要改用黄金时请征询学者并说明理由。"
  },
  faq: {
    heading: "常见问题",
    description: "根据搜索趋势持续更新，如需更多语言或内容请通过协作页面联系。",
    items: [
      {
        question: "如何计算 2025 年摩洛哥尼萨布？",
        answer: "统计净储蓄（现金+账户），扣除紧急负债，确认是否超过 7,438 MAD，并维持一个回历年。最终金额 × 0.025。"
      },
      {
        question: "阿尔及利亚与突尼斯怎么办？",
        answer: "阿尔及利亚：705,000 DZD ⇒ 天课 17,625 DZD；突尼斯：12,500 TND ⇒ 天课 312.5 TND。可折算为 MAD 统一管理。"
      },
      {
        question: "是否可以自动扣除？",
        answer: "可以设置银行定期转账并注明“zakat”，每年核对一次尼萨布。"
      },
      {
        question: "哪些应用值得信赖？",
        answer: "Zakat Maroc、Zakatify、Mawkib 等，注意确认是否支持自定义尼萨布。"
      },
      {
        question: "在哪里查看每周更新？",
        answer: "访问 habous.gov.ma 或关注 @maroc_zakat 获取摘要。"
      }
    ]
  },
  sources: {
    heading: "参考资料",
    description: "官方文献与实用链接。",
    links: [
      { label: "工资天课官方意见", href: "https://agadir24.info/%D8%B2%D9%83%D8%A7%D8%A9-%D8%A7%D9%84%D8%A3%D8%AC%D9%88%D8%B1-%D8%A7%D9%84%D8%B4%D9%87%D8%B1%D9%8A%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-%D9%81%D8%AA%D9%88%D9%89-%D8%A7%D9%84%D9%85.html" },
      { label: "马力基学派观点 (IslamWeb)", href: "https://www.islamweb.net/ar/fatwa/246004/%D9%85%D8%B0%D9%87%D8%A8-%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%83%D9%8A%D8%A9-%D9%81%D9%8A-%D8%B2%D9%83%D8%A7%D8%A9-%D8%A7%D9%84%D8%B1%D8%A7%D8%AA%D8%A8" },
      { label: "摩洛哥回历日历", href: "https://www.islamicfinder.org/world/morocco" },
      { label: "天课概览 (维基百科)", href: "https://zh.wikipedia.org/wiki/%E5%A4%A9%E8%BF%B7" },
      { label: "宗教部完整官方文档", href: "https://www.habous.gov.ma/%D8%A7%D9%84%D9%85%D8%AC%D9%84%D8%B3-%D8%A7%D9%84%D8%B9%D9%84%D9%85%D9%8A-%D8%A7%D9%84%D8%A7%D8%B9%D9%84%D9%89/21626-%D9%81%D8%AA%D9%88%D9%89-%D8%A7%D9%84%D9%85%D8%AC%D9%84%D8%B3-%D8%A7%D9%84%D8%B9%D9%84%D9%85%D9%8A-%D8%A7%D9%84%D8%A3%D8%B9%D9%84%D9%89-%D9%81%D9%8A-%D9%85%D9%88%D8%B6%D9%88%D8%B9-%D8%A7%D9%84%D8%B2%D9%83%D8%A7%D8%A9.html" }
    ]
  },
  footer: {
    summary: "依据马力基学派及摩洛哥官方指导整理。",
    note: "遇到特殊情况或金属价格大幅波动，请咨询可信学者。",
    updated: "最后更新：2025 年 11 月",
    social: {
      heading: "关注 maroc zakat",
      links: [
        { label: "X (Twitter)", href: "https://x.com/maroc_zakat", ariaLabel: "在 X 上关注 maroc zakat" },
        { label: "Instagram", href: "https://www.instagram.com/maroczakat/", ariaLabel: "在 Instagram 上关注 maroc zakat" },
        { label: "YouTube", href: "https://www.youtube.com/@maroc_zakat", ariaLabel: "订阅 maroc zakat 的 YouTube 频道" }
      ]
    }
  }
};

export default homeContentZh;

