export const knowledgeBaseUrl = "https://beilunjuzhen.feishu.cn/wiki/FHdSwbAiYibmL2k6d3bcEZpMnOf?fromScene=spaceOverview";
export const day4KnowledgeUrl = "https://beilunjuzhen.feishu.cn/wiki/DRrewKGzfiYQo7kU0fIchOujnnb?fromScene=spaceOverview";
export const serviceSiteUrl = "https://beilunjuzhen.cn";

export type ContentSection = {
  heading: string;
  body: string;
  bullets?: string[];
  note?: string;
};

export type PublicLink = {
  label: string;
  url: string;
};

export type ArticleEntry = {
  slug: string;
  num: string;
  title: string;
  date: string;
  series: string;
  excerpt: string;
  sections: ContentSection[];
  map: string[];
  externalUrl?: string;
  externalLabel?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  links?: PublicLink[];
};

export type PublicCase = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  map: string[];
  sections: ContentSection[];
  externalUrl?: string;
  externalLabel?: string;
  legacySlug?: string;
};

export const courseLessons = [
  {
    slug: "day-01",
    day: "01",
    title: "先别学 AI，先找钱漏在哪",
    axis: "客户 / 线索 / 跟进 / 复盘",
    summary: "第一天不讲炫技，先把业务里最容易漏钱的地方找出来。",
    externalUrl: "https://beilunjuzhen.feishu.cn/wiki/RfqNw0SjXi5emDkgC4tcIWNNnoe",
    sections: [
      {
        heading: "这节课真正解决什么",
        body: "很多小团队的问题不是没有 AI 工具，而是客户、线索、跟进和复盘散在不同地方。工具上得越快，混乱也会被放大得越快。",
      },
      {
        heading: "第一步动作",
        body: "先做一张基础线索表。把来源、需求、阶段、负责人、下一步动作和下次跟进日期留下来。不是为了做报表，是为了知道钱漏在哪。",
      },
      {
        heading: "为什么第一张表比第一个智能体重要",
        body: "表不是终点，它是在给团队建立共同记忆。只有入口、阶段和下一步动作被留下，AI 才有稳定的上下文，后面的分类、提醒和复盘才不会靠猜。",
      },
    ],
    map: ["内容入口", "评论/咨询", "基础线索表", "A/B/C 分层", "下一步动作"],
    assignment: "今天只做一件事：找出最近 7 天所有客户开口的位置，先手动记入一张基础表。",
  },
  {
    slug: "day-02",
    day: "02",
    title: "小团队 7 天到底拍什么",
    axis: "内容不是热闹，是入口",
    summary: "内容不是为了热闹，是为了让对的人看见并开口。",
    externalUrl: "https://beilunjuzhen.feishu.cn/wiki/TAppw8edYi0PapkkAHccjEmDn3g?fromScene=spaceOverview",
    sections: [
      {
        heading: "内容的真实任务",
        body: "不是每天追热点，而是把用户最常问、最犹豫、最怕踩坑的问题讲清楚。",
      },
      {
        heading: "7 天内容骨架",
        body: "第一天讲痛点，第二天讲误区，第三天讲案例，第四天讲对比，第五天讲流程，第六天讲答疑，第七天讲复盘。",
      },
      {
        heading: "为什么内容后面必须接线索表",
        body: "播放量只是表层信号。评论、私信、咨询和资料领取，才是下一步动作的入口。内容带来开口，记录才能让这次开口不被浪费。",
      },
    ],
    map: ["用户痛点", "误区澄清", "真实案例", "流程拆解", "答疑复盘"],
    assignment: "写出你行业里用户最常问的 10 个问题，按痛点、误区、案例、流程四类归档。",
  },
  {
    slug: "day-03",
    day: "03",
    title: "从内容到线索记录",
    axis: "评论、咨询、资料的承接",
    summary: "内容发出去之后，真正的工作才刚开始。",
    externalUrl: knowledgeBaseUrl,
    sections: [
      {
        heading: "承接不是一句话术",
        body: "承接是让每一个开口的人都有归属：他从哪里来，问了什么，下一步该给什么材料。",
      },
      {
        heading: "先把基础字段跑起来",
        body: "来源、需求、地区、预算敏感度、材料发送、负责人、下一步动作，这些字段先人工留下。",
      },
      {
        heading: "人工都跑不顺，自动化只会复制错误",
        body: "先观察团队真实怎么接、怎么判断、在哪里漏。判断标准稳定之后，再把重复动作交给工具。",
      },
    ],
    map: ["内容发布", "互动记录", "需求字段", "材料发送", "跟进日期"],
    assignment: "把昨天的评论和咨询整理成一张线索表，至少补齐来源、需求、下一步动作。",
  },
  {
    slug: "day-04",
    day: "04",
    title: "爆款不是终点，A 类线索才是",
    axis: "看见、开口、分层、动作",
    summary: "播放量是被看见，咨询是有人开口，A 类线索才开始接近业务结果。",
    externalUrl: day4KnowledgeUrl,
    sections: [
      {
        heading: "先把三个词分清",
        body: "浏览量只是看见，评论和私信只是开口。A 类线索必须能落到业务动作：服务范围匹配、问题足够具体、信息能够判断，并且愿意继续往下走。",
      },
      {
        heading: "A/B/C 不是评价人",
        body: "A/B/C 只是当下的处理优先级，不是判断客户值不值钱。A 类进入人工跟进，B 类继续用材料和内容养熟，C 类先不占用团队的即时精力。",
      },
      {
        heading: "AI 可以辅助，但不能替老板拍板",
        body: "真正稳定的分层要先人工跑一轮。标准清楚之后，AI 可以帮忙摘要、初筛、提醒和回流。判断责任还在业务里，不能甩给工具。",
      },
    ],
    map: ["看见", "开口", "事实记录", "A/B/C", "下一步动作"],
    assignment: "找出最近 20 条评论、私信或咨询，只按 A/B/C 做轻分层，并给每条 A 类线索写清下一步动作。",
  },
  {
    slug: "day-05",
    day: "05",
    title: "Agent、workflow、Codex 怎么选",
    axis: "工具边界与业务动作",
    summary: "工具不是信仰，不同动作需要不同执行器。",
    externalUrl: knowledgeBaseUrl,
    sections: [
      {
        heading: "临时判断用 Agent",
        body: "开放问题、资料理解、一次性分析，适合交给 Agent。它擅长在上下文里判断，不适合替团队承担没有定义的责任。",
      },
      {
        heading: "固定重复用 workflow",
        body: "规则明确、输入输出稳定、重复发生的动作，适合做 workflow。先写清触发、字段、人工确认点和失败处理。",
      },
      {
        heading: "需要长期使用的能力再用 Codex",
        body: "当一个动作需要变成网页、脚本、内部工具或系统，并且要接入现有工程资产时，再让 Codex 介入。",
      },
    ],
    map: ["临时判断", "固定重复", "工程化工具", "数据沉淀", "持续迭代"],
    assignment: "列出你团队 5 个重复动作，标记它们分别适合人工、Agent、workflow 还是 Codex。",
  },
  {
    slug: "day-06",
    day: "06",
    title: "业务诊断：哪里该人工，哪里该自动",
    axis: "先跑清判断，再决定自动化",
    summary: "先看清业务循环，再决定 AI 应该进入哪一步。",
    externalUrl: knowledgeBaseUrl,
    sections: [
      {
        heading: "诊断从客户路径开始",
        body: "先看用户从哪里来、谁接、怎么分层、下一步是什么，以及什么时候应该再次触达。",
      },
      {
        heading: "判断标准没有稳定，就先人工跑",
        body: "人工跑一轮的价值，是把例外、分歧和真实字段找出来。没有这一步，自动化只会把模糊判断固定下来。",
      },
      {
        heading: "自动化从最窄的一步开始",
        body: "先选一个高频、低风险、输入输出清楚的动作试跑。能被复盘，再逐步接到提醒、材料生成和数据回流。",
      },
    ],
    map: ["行业场景", "业务漏点", "人工跑通", "局部自动", "复盘优化"],
    assignment: "画出你行业的一条客户路径：看见、开口、首单、复购，每一步写一个最常见的漏点。",
  },
  {
    slug: "day-07",
    day: "07",
    title: "7 天后如何继续加深",
    axis: "复购飞轮与内容资产",
    summary: "7 天不是结束，是把内容和业务动作变成长期资产的开始。",
    externalUrl: knowledgeBaseUrl,
    sections: [
      {
        heading: "复盘什么",
        body: "看哪类内容带来有效咨询，哪类线索最容易推进，哪一步最常断掉。",
      },
      {
        heading: "沉淀什么",
        body: "沉淀基础表、用户问题、案例素材、跟进节点和复购触发条件。它们会变成下一轮内容和工具的输入。",
      },
      {
        heading: "下一轮怎么做",
        body: "把表现好的内容变成系列，把有效字段变成流程，把重复动作逐步工具化。每一轮只解决一个最靠近结果的断点。",
      },
    ],
    map: ["内容资产", "线索资产", "客户记忆", "复购节点", "工具化"],
    assignment: "写出下一轮 7 天内容主题，并标记每条内容对应哪个业务漏点。",
  },
];

export const articleEntries: ArticleEntry[] = [
  {
    slug: "gpt-live-ai-management",
    num: "00",
    title: "第一次把 GPT Live 请进直播间，我更关心的不是它会说什么",
    date: "2026.07.11",
    series: "现场实验",
    excerpt: "AI 能进入直播间，但要真正进入业务，仍然绕不开流程、激励和管理责任。",
    externalUrl: day4KnowledgeUrl,
    externalLabel: "查看 Day4 公开整理",
    sections: [
      {
        heading: "这次不是做一个热闹的 AI 嘉宾",
        body: "今天后半段更像一次现场测试：让 GPT Live 进入直播间，和我一起讨论 AI 在企业里的落地。它能接话、能总结、能帮忙压缩观点，但我更关心的不是它像不像嘉宾，而是它能不能把真实业务说清楚。",
      },
      {
        heading: "我自己的入口还是实体零售",
        body: "我过去做宠物门店，最直观的感受是：客户记忆很容易断。员工一换，历史成交客户、购买周期、服务记录和复购提醒就容易散掉。AI 在这里更像一个会提醒的客户记忆系统，让团队少靠脑子硬撑。",
      },
      {
        heading: "员工愿不愿意用，取决于机制",
        body: "很多老板以为上一个工具就行了，但员工会先判断这是不是额外负担。真正能推下去的方式，是把 AI 任务和业务结果、绩效动作、成交反馈放在一起，让它看起来是帮他完成工作，而不是凭空多一套流程。",
      },
      {
        heading: "工具放大管理，不代替管理",
        body: "AI 可以提醒、归纳、发现异常，也可以把重复动作变轻。但流程要不要改，激励怎么设计，谁负责回流结果，这些仍然是管理问题。老板没有决心，软件再聪明也只能停在演示里。",
      },
      {
        heading: "下半年的竞争会更像行业交付",
        body: "模型仍然会更新，但我更看重谁能把 Agent、workflow 和具体业务场景接起来。跑分会继续存在，真正影响小团队的，是工具能不能进入线索、跟进、复盘和复购这些动作。",
      },
      {
        heading: "这次实验留下的提醒",
        body: "直播里的 AI 嘉宾不是终点。声音、回音、网络切换、屏幕展示、轮次控制都需要重新设计。它更像一个新入口：可以做播客、可以做复盘，也可以把现场观点变成下一篇文章和知识库。",
      },
    ],
    map: ["现场对谈", "客户记忆", "员工激励", "管理机制", "行业交付"],
  },
  {
    slug: "why-open-course",
    num: "01",
    title: "开 AI 账号一年多，到今天决定开课",
    date: "2026.07",
    series: "现场判断",
    excerpt: "不是卖焦虑，而是把小团队真正卡住的那一环讲清楚。",
    externalUrl: knowledgeBaseUrl,
    externalLabel: "查看公开课知识库",
    sections: [
      {
        heading: "工具越来越强，问题却没有自动变少",
        body: "做 AI 内容一年多，我越来越确定一件事：很多人不是不努力，也不是不懂工具，而是不知道工具应该接到哪一个业务动作上。通用 Agent 越来越强，这个问题反而更明显。",
      },
      {
        heading: "我为什么在这个时候开课",
        body: "我服务过小团队、门店和老板型公司之后发现，大家真正卡住的并不是提示词，而是客户从哪里来、谁来接、怎么判断、下一步做什么。把这些东西讲清楚，比再教一个新工具更有价值。",
      },
      {
        heading: "这门课为什么从业务入口开始",
        body: "第一天不从模型、插件和炫技开始，而是从客户、线索、跟进、复盘这些土问题开始。土，但是离钱最近。第一张基础表跑起来以后，Agent、workflow 和 Codex 才有地方进入。",
      },
      {
        heading: "什么样的人更适合来听",
        body: "这套内容更适合十几人以内的小团队、实体门店、服务型公司和老板亲自盯业务的团队。你不需要先懂代码，但要愿意把真实业务拿出来看。",
        bullets: ["有内容，但线索经常散掉", "员工在跟进，但老板看不到过程", "已经用了 AI，却说不清它离业务结果还有多远"],
      },
    ],
    map: ["Agent 变强", "问题仍在", "回到业务", "先建结构", "再谈工具"],
  },
  {
    slug: "what-is-marketing",
    num: "02",
    title: "什么是营销：不是包装，也不是投流",
    date: "2026.07",
    series: "核心判断",
    excerpt: "营销是让货、服务或能力通过内容、平台、关系和数据找到对的人。",
    externalUrl: knowledgeBaseUrl,
    externalLabel: "查看 AI + 营销知识库",
    sections: [
      {
        heading: "包装和投流，只是营销的一部分",
        body: "营销不是把东西说得更好听，也不是单纯买流量。营销是让一个真实的货、服务或能力，通过内容、平台、关系和数据找到对的人。",
      },
      {
        heading: "完整链路是：看见、理解、开口、首单、复购",
        body: "对小团队来说，任何一环断掉，前面的投入都会漏掉。只有播放，没有开口；只有咨询，没有记录；只有首单，没有复购，都是局部热闹。",
      },
      {
        heading: "AI 应该接在业务动作上",
        body: "内容环节可以辅助选题和表达，线索环节可以辅助分类和总结，跟进环节可以辅助提醒和材料生成，复购环节可以辅助识别周期。AI 的价值来自它接住了哪一步。",
      },
      {
        heading: "先检查你自己的营销飞轮",
        body: "不要先问哪一个模型最好。先问：客户从哪里看见你，为什么愿意开口，谁记录了这次开口，首单之后还有没有下一次触发。",
      },
    ],
    map: ["货找人", "看见理解", "开口记录", "首单", "复购飞轮"],
  },
  {
    slug: "agent-workflow-codex",
    num: "03",
    title: "Agent、workflow、Codex 到底怎么选",
    date: "2026.07",
    series: "工具判断",
    excerpt: "临时判断、固定重复、长期工具化，分别对应不同执行器。",
    externalUrl: knowledgeBaseUrl,
    externalLabel: "查看工具选择专题",
    sections: [
      {
        heading: "先别按工具名字选",
        body: "同一个动作看起来都能交给 AI，但它到底是临时判断、固定重复，还是要长期沉淀成系统，决定了该用什么。",
      },
      {
        heading: "Agent 处理开放判断",
        body: "一次性分析、阅读资料、理解上下文、生成多个方案，适合 Agent。它像一个能随时进入现场的判断助手。",
      },
      {
        heading: "workflow 固化稳定重复",
        body: "当触发条件、输入字段、处理步骤和输出格式已经稳定，workflow 才有价值。流程没跑通，自动化只会放大混乱。",
      },
      {
        heading: "Codex 把确定的能力做成工具",
        body: "当这件事要接网站、表格、脚本、数据库或内部系统，并且要持续维护，Codex 才进入工程化阶段。顺序应该是人工跑通、Agent 辅助、workflow 固化、Codex 工具化。",
      },
    ],
    map: ["业务动作", "人工跑通", "Agent 判断", "workflow 固化", "Codex 工具化"],
  },
  {
    slug: "first-table",
    num: "04",
    title: "小团队为什么要先做基础表",
    date: "2026.07",
    series: "业务结构",
    excerpt: "不是没有客户，是客户散了；不是没有数据，是数据睡着了。",
    externalUrl: knowledgeBaseUrl,
    externalLabel: "查看课程知识库",
    sections: [
      {
        heading: "第一张表不是为了做漂亮报表",
        body: "它是为了让团队知道：用户从哪里来，问了什么，谁接了，现在是什么阶段，下一步是什么。",
      },
      {
        heading: "没有记录，内容爆了也只是热闹",
        body: "咨询来了容易散，员工接了没有回流，老板只能凭感觉判断。不是没有客户，是客户散了；不是没有数据，是数据睡着了。",
      },
      {
        heading: "最小字段先跑起来",
        body: "来源、需求、阶段、负责人、下一步动作、下次跟进时间，这六类信息已经足够跑第一轮。不要一开始做几十个字段。",
      },
      {
        heading: "有了结构，AI 才能真正帮忙",
        body: "AI 可以进一步分类、提醒、总结、生成材料，甚至接入 workflow 和内部工具。但这些能力都依赖同一件事：团队把真实业务动作留下来了。",
      },
    ],
    map: ["来源", "需求", "阶段", "负责人", "下一步动作"],
  },
  {
    slug: "hexmahjong",
    num: "05",
    title: "海克斯麻将：一个梦到的游戏，我用 AI 把它做了出来",
    date: "2026.06",
    series: "项目记录",
    excerpt: "一个梦，一套不太正常的麻将规则，最后被 AI coding 变成了能玩的 H5 游戏。",
    image: "/assets/articles/hexmahjong-gameplay.jpg",
    imageAlt: "海克斯麻将 H5 游戏对局界面",
    imageWidth: 1280,
    imageHeight: 720,
    links: [
      { label: "在线体验", url: "https://hexmahjong.fun" },
      { label: "查看开源仓库", url: "https://github.com/hanjin714/hexmahjong.fun" },
    ],
    sections: [
      {
        heading: "起点不是需求文档，是一个梦",
        body: "有天晚上我梦见一款游戏：把云顶之弈的海克斯强化系统和麻将融合在一起。醒来以后觉得这件事够奇怪，也够具体，于是直接开始做。",
      },
      {
        heading: "AI coding 把想法变成了可玩的东西",
        body: "从第一行代码到上线，核心开发都由 AI coding 协助完成。现在已经有海克斯强化三选一、城邦规则、中英文切换、技能详情和新手引导。",
      },
      {
        heading: "真正难的不是写出第一版",
        body: "规则组合会不会失控、玩家能不能看懂、移动端操作是否顺手，这些都不是一句提示词能解决的。AI 缩短了实现距离，但产品判断仍然要自己承担。",
      },
      {
        heading: "这个项目证明了什么",
        body: "一个人可以把梦里的 idea 做成上线产品，但前提是你愿意持续测试、删减和修正。AI 是放大器，它放大的是已经足够具体的想法和持续迭代的能力。",
      },
    ],
    map: ["梦境 idea", "规则原型", "AI coding", "可玩版本", "持续迭代"],
  },
  {
    slug: "hello-world",
    num: "06",
    title: "你好，世界：为什么叫悖论矩阵",
    date: "2026.05",
    series: "起点",
    excerpt: "AI 很强，但落地很难；零售很传统，但改造空间很大。",
    sections: [
      {
        heading: "为什么叫悖论",
        body: "悖论，就是那些看起来彼此冲突，却能同时成立的事：AI 很强大，但落地很难；零售很传统，但改造空间很大；一个人，也能借助工具做成过去需要一个团队的事。",
      },
      {
        heading: "这个博客到底记录什么",
        body: "这里记录 AI 如何进入真实业务，也记录技术、内容和产品是怎么被做出来的。不是新闻搬运，也不是工具大全，而是一线实践留下来的判断。",
      },
      {
        heading: "我从哪里来",
        body: "我做过实体宠物零售，知道门店里的钱不是抽象指标，而是库存、复购、员工交接和每一次被忘掉的提醒。后来做 AI，我一直在追问同一个问题：它到底能不能进入这些真实动作。",
      },
      {
        heading: "接下来继续写什么",
        body: "小团队怎么用 AI 少漏一条线索，实体门店怎么记住客户，内容怎么回到业务，Agent、workflow 和 Codex 怎么分工，以及一个人如何把想法做成产品。",
      },
    ],
    map: ["真实业务", "技术实验", "内容入口", "小团队系统", "持续复盘"],
  },
  {
    slug: "case-petstore",
    num: "07",
    title: "派星人宠物：不增加销售，如何让现金流重新回流",
    date: "2026.05",
    series: "实体案例",
    excerpt: "宠物零售先处理库存与复购断层，再讨论更多流量。",
    image: "/assets/articles/paixingren-store.jpg",
    imageAlt: "派星人宠物门店内的猫咪寄养与零售区域",
    imageWidth: 1600,
    imageHeight: 1200,
    sections: [
      {
        heading: "门店里有两类钱最容易被忽略",
        body: "一类冻结在库存里：该卖的断货，不该囤的积压。另一类漏在复购里：粮、药、驱虫和护理都有周期，但员工一忙、人员一换，提醒就断了。",
      },
      {
        heading: "预测型动作：先看需求和库存节奏",
        body: "历史销售、季节变化和品类周期可以帮助团队判断什么时候补货、什么时候去库存。AI 不替老板拍板，但可以把异常和趋势提前摊在桌面上。",
      },
      {
        heading: "修复型动作：把客户周期留下来",
        body: "宠物生日、疫苗时间、驱虫周期、吃粮速度和上次购买时间，本来就存在于订单和员工记忆里。把这些信息结构化，团队才能在合适的时间看到下一步动作。",
      },
      {
        heading: "真正的变化从客户记忆开始",
        body: "门店不一定先增加投放和销售人数。先把已经发生过的购买、服务和周期记住，就有机会减少本来会漏掉的复购。",
        note: "这是业务机制拆解，不承诺固定的复购或利润结果。具体效果取决于数据完整度、执行频率和门店服务能力。",
      },
    ],
    map: ["历史订单", "品类周期", "客户记忆", "任务提醒", "结果回流"],
  },
  {
    slug: "case-salon",
    num: "08",
    title: "社区理发店：闲时填空术",
    date: "2026.05",
    series: "实体案例",
    excerpt: "理发店真正昂贵的库存，不只是产品，还有每天无法储存的空闲时间。",
    image: "/assets/articles/barbershop-case.jpg",
    imageAlt: "社区理发店内空闲的理发座位",
    imageWidth: 1414,
    imageHeight: 754,
    sections: [
      {
        heading: "理发店也有一种会过期的库存",
        body: "周末和晚间排队，工作日下午却空着。发型师的时间一旦过去就无法再次出售，这种忙闲不均会直接吞掉人效。",
      },
      {
        heading: "先预测服务周期，再匹配空闲时段",
        body: "根据上次服务时间、项目类型和客户习惯，团队可以提前看到可能需要再次到店的人，再把合适的空档和发型师匹配起来。",
      },
      {
        heading: "沉睡客户不是一个统一人群",
        body: "长期未返店、体验后未继续、项目周期已到，是不同的状态。先分清原因，再决定内容、提醒还是人工沟通，效果才不会变成盲目群发。",
      },
      {
        heading: "AI 放大的应该是店长经验",
        body: "高频问题、项目建议和成熟表达可以被沉淀成材料，帮助新人更快进入状态。但最终的判断仍要回到客户需求和服务质量。",
      },
    ],
    map: ["服务记录", "周期预测", "闲时匹配", "分层触达", "复盘回流"],
  },
  {
    slug: "case-smarthome",
    num: "09",
    title: "县城智能家居：小团队如何接住长周期线索",
    date: "2026.05",
    series: "实体案例",
    excerpt: "装修决策跨越数月，线索最容易死在通讯录和员工记忆里。",
    image: "/assets/articles/smart-home-case.jpg",
    imageAlt: "全屋智能家居门店内的卧室体验空间",
    imageWidth: 1600,
    imageHeight: 1044,
    sections: [
      {
        heading: "长周期生意最怕的不是慢，是失忆",
        body: "从交房、硬装到软装和设备进场，客户决策可能跨越几个月。销售只要错过一次节点，线索就可能消失在通讯录里。",
      },
      {
        heading: "先把装修阶段变成可见字段",
        body: "小区、户型、交房时间、预算区间、当前装修阶段、上次沟通和下一步动作，这些字段能让团队知道客户现在卡在哪里。",
      },
      {
        heading: "案例库要和客户场景匹配",
        body: "同小区、同户型、同预算的真实案例，比通用宣传册更接近客户当前的判断。AI 可以帮助检索和组合材料，但案例本身必须真实。",
      },
      {
        heading: "销冠能力不是一段万能话术",
        body: "真正值得复制的是判断顺序：先听需求，再识别阶段，再给适合的案例和下一步。把这个顺序留下，新人才有可能更快稳定。",
      },
    ],
    map: ["装修阶段", "线索记录", "节点提醒", "案例匹配", "结果复盘"],
  },
];

export const legacyArticleSlugs = ["hello-world", "case-petstore", "case-salon", "case-smarthome", "hexmahjong"];

export const publicCases: PublicCase[] = [
  {
    slug: "lead-factory",
    title: "小团队 AI 线索工厂",
    description: "把内容、评论、咨询、跟进和复盘放回同一张业务地图里。",
    tags: ["Leads", "Course"],
    externalUrl: knowledgeBaseUrl,
    externalLabel: "查看课程知识库",
    map: ["内容入口", "线索记录", "A/B/C 分层", "负责人", "结果回流"],
    sections: [
      { heading: "问题通常不是没有线索", body: "真正的问题是线索散在评论、私信、聊天记录和员工脑子里。老板看不见，团队也无法复盘。" },
      { heading: "先建立一个共同入口", body: "把来源、需求、阶段、负责人和下一步动作放在同一张基础表里。先手动跑清楚，再决定哪一步交给 AI。" },
      { heading: "线索工厂不是一套软件", body: "它是一条能被观察的业务链：内容让人开口，记录让线索不散，分层让团队聚焦，回流让下一轮内容更准。" },
    ],
  },
  {
    slug: "tool-boundary",
    title: "Agent / Workflow / Codex 判断",
    description: "临时判断用 Agent，固定重复用 workflow，需要做成工具再用 Codex。",
    tags: ["Agent", "Workflow"],
    externalUrl: knowledgeBaseUrl,
    externalLabel: "查看工具专题",
    map: ["人工流程", "临时判断", "固定重复", "工程工具", "复盘迭代"],
    sections: [
      { heading: "工具选择先看动作类型", body: "同样叫 AI，开放判断、重复执行和工程开发需要的输入、风险控制和验收方式完全不同。" },
      { heading: "人工跑通是共同前置条件", body: "如果团队还说不清标准、例外和结果，换成任何工具都只是把模糊包装得更复杂。" },
      { heading: "从最窄的确定动作开始", body: "先让 AI 接住一个高频、低风险、能验证的动作，再把结果写回业务记录里。" },
    ],
  },
  {
    slug: "marketing-flywheel",
    title: "AI + 营销飞轮",
    description: "营销不是包装和投流，是让货、服务或能力通过内容和数据找到对的人。",
    tags: ["Marketing", "Growth"],
    externalUrl: knowledgeBaseUrl,
    externalLabel: "查看营销知识库",
    map: ["货与服务", "内容入口", "看见开口", "首单", "复购"],
    sections: [
      { heading: "内容不是营销的终点", body: "内容先让对的人看见和理解，后面还要有人开口、被记录、完成首单，并在合适的时间进入下一次关系。" },
      { heading: "线上看营销飞轮", body: "内容、流量、获客和首单是前半程。播放量有价值，但它必须和后面的真实业务动作发生关系。" },
      { heading: "线下看复购飞轮", body: "首单之后留下客户和服务数据，识别复购触发，再把结果写回下一轮内容与运营。" },
    ],
  },
  {
    slug: "public-archive",
    title: "公开复盘与文章库",
    description: "把直播、文章和历史认知沉淀成可检索、可复用的内容资产。",
    tags: ["Writing", "Archive"],
    externalUrl: knowledgeBaseUrl,
    externalLabel: "查看飞书知识库",
    map: ["直播现场", "录播整理", "文章重构", "主题索引", "持续更新"],
    sections: [
      { heading: "直播结束不是内容结束", body: "现场问题、案例、口误后的补充和听众反馈，都是下一篇文章和下一轮课程的原材料。" },
      { heading: "知识库要按问题组织", body: "不是按文件格式堆放，而是围绕客户、线索、内容、工具和复购建立主题入口。" },
      { heading: "每次输出都回到同一套判断", body: "AI 是放大器。先找业务漏点，先留结构，再决定 Agent、workflow 或 Codex。" },
    ],
  },
  {
    slug: "paradox-ai",
    legacySlug: "paradox-ai",
    title: "悖论 AI：零售复购增收方向",
    description: "从已经成交的客户开始，寻找复购、库存和员工交接中的业务漏点。",
    tags: ["Retail", "AI"],
    externalUrl: serviceSiteUrl,
    externalLabel: "访问企业服务官网",
    map: ["历史订单", "客户周期", "业务漏点", "动作提醒", "结果复盘"],
    sections: [
      { heading: "零售最贵的不只是获客", body: "很多团队盯着还没有进来的钱，却忽略已经成交的客户为什么只来一次。复购断层、库存积压和员工交接都可能吞掉现金流。" },
      { heading: "AI 先把已有数据叫醒", body: "订单、服务记录和客户周期本来就存在。先找规律、再生成动作、最后把结果写回，数据才会从档案变成运营输入。" },
      { heading: "适合小团队的进入方式", body: "不先做大而全的系统，先选一个品类、一个周期或一类客户跑小闭环，让团队能看见、能执行、能复盘。" },
    ],
  },
  {
    slug: "steamgames-fun",
    legacySlug: "steamgames-fun",
    title: "SteamGames.fun",
    description: "围绕热门 Steam 游戏做中文攻略，用内容、搜索和持续更新验证小型网站增长。",
    tags: ["SEO", "Content"],
    externalUrl: "https://steamgames.fun",
    externalLabel: "访问项目网站",
    map: ["游戏需求", "中文攻略", "搜索入口", "内容更新", "流量复盘"],
    sections: [
      { heading: "这是一个内容型网站实验", body: "围绕玩家会主动搜索的问题建立中文攻略，让每一篇内容对应一个明确需求，而不是先做一个空网站再等待流量。" },
      { heading: "AI 缩短生产，但不能替代选题", body: "资料整理、结构草拟和页面开发可以提速，真正决定内容是否有价值的，仍然是玩家此刻在找什么。" },
      { heading: "项目留下的判断", body: "小型网站的增长不是一次上线，而是关键词、内容质量、收录和用户行为的长期复盘。" },
    ],
  },
  {
    slug: "weirdweek-fun",
    legacySlug: "weirdweek-fun",
    title: "WeirdWeek.fun",
    description: "把难以主动搜索、却值得被看见的奇特商品做成一份内容周刊。",
    tags: ["Curation", "Website"],
    externalUrl: "https://weirdweek.fun",
    externalLabel: "访问项目网站",
    map: ["商品发现", "人工筛选", "内容策展", "站点发布", "反馈迭代"],
    sections: [
      { heading: "需求不是搜索出来的，也可能是被发现的", body: "有些商品用户不会主动输入关键词，但在合适的内容场景里看见以后会产生兴趣。这个项目验证的是策展和发现。" },
      { heading: "AI 适合扩大筛选面", body: "工具可以帮助整理候选、翻译信息和生成页面草稿，最终留下什么，仍然需要人的品味和判断。" },
      { heading: "小项目也要有自己的闭环", body: "发现、筛选、发布、观察反馈，再回到下一期选题。没有这条循环，网站只是一批静态页面。" },
    ],
  },
];

export const legacyProjectSlugs = ["paradox-ai", "steamgames-fun", "weirdweek-fun"];
