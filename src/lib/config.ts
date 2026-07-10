import { courseLessons, publicCases } from "./content";

export const siteConfig = {
  name: "悖论矩阵",
  title: "BLJZ.club",
  tagline: "小团队 AI 公开内容操作台",
  heroDeck: "AI FIELD NOTES · PUBLIC COURSE · SMALL TEAM SYSTEMS",
  bio: "这里不做泛 AI 工具测评。这里记录小团队如何把内容、线索、跟进、复盘和工具选择整理成 AI 能接入的结构。",
  email: "contact@bljz.club",
  social: {
    newsletter: "#articles",
    course: "#course",
  },
  nav: [
    { label: "公开课", href: "/#course" },
    { label: "文章", href: "/#articles" },
    { label: "案例", href: "/#projects" },
    { label: "判断", href: "/#thoughts" },
  ],
  stats: [
    { value: "7", label: "Day Course" },
    { value: "9", label: "Public Notes" },
    { value: "7", label: "Case Maps" },
    { value: "1", label: "Business Loop" },
  ],
};

export const projects = [
  ...publicCases.map((item) => ({ ...item, link: `/cases/${item.slug}` })),
];

export const thoughts = [
  {
    year: "2026",
    quote: "AI 是放大器，不是印钞机。",
  },
  {
    year: "2026",
    quote: "第一张表比第一个智能体重要。",
  },
  {
    year: "2025",
    quote: "流程没跑通，自动化只会放大混乱。",
  },
  {
    year: "2025",
    quote: "不是没有客户，是客户散了。",
  },
  {
    year: "2024",
    quote: "临时判断用 Agent，固定重复用 workflow，需要做成工具或系统，用 Codex。",
  },
];

export const courseDays = courseLessons.map(({ day, title, axis }) => ({ day, title, axis }));
