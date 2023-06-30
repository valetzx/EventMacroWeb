import { defineConfig } from "vitepress"
const defaultSidebar = [
  {
    text: "安装说明",
    link: "/guide/install",
  },
  {
    text: "使用指南",
    link: "/guide/introduction",
  },
  {
    text:"常见问题",
    link: "/guide/qa",
  },
  {
    text: "更新日志",
    link: "/guide/update",
  }
]
const nav = [
  ...defaultSidebar,
]
export default defineConfig({
  title: "EventMacro",
  description: "在触发某些Minecraft游戏事件后，自动执行设定脚本动作的懒人MOD",
  lastUpdated: true,
  themeConfig: {
    nav,
    socialLinks: [
      { icon: "github", link: "https://github.com/valetzx/EventMacroWeb" },
    ],
    footer: {
      message: '欢迎加入付费交流群：856185460 / 671626979',
      copyright: "Copyright © 2022-Present EventMacro",
    },
    lastUpdatedText: "Last Updated"
  },
})
