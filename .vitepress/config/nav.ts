import type { DefaultTheme } from "vitepress";
//顶部 多选择
export const nav: DefaultTheme.NavItem[] = [
  {
    text: "技术博客",
    link: "/tech/tech0",
    activeMatch: "^/tech",
  },
  {
    text: "软件开发",
    link: "/knowledge/java",
    activeMatch: "^/knowledge",
  },
  {
    text: "时间之外",
    link: "/daily/time",
    activeMatch: "^/daily",
  },
  {
    text: "关于我",
    link: "/shinya",
  },
  // {
  //   text: "项目",
  //   activeMatch: "^/projects",
  //   items: [
  //     {
  //       text: "学无止境",
  //       items: [{ text: "MYDB", link: "/projects/mydb/mydb0" }],
  //     },
  //   ],
  // },

  // {
  //   text: "笔记",
  //   activeMatch: "^/notes",
  //   items: [
  //     {
  //       text: "学无止境",
  //       items: [
  //         { text: "6.5840", link: "/notes/6.5840/mapreducepaper" },
  //         {
  //           text: "系统架构设计师",
  //           link: "/notes/system_architect/knowledge/knowledge1",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   text: "折腾",
  //   link: "/fiddling/fake-ip-based-transparent-proxy",
  //   activeMatch: "^/fiddling",
  // },
  // {
  //   text: "更多",
  //   activeMatch: "^/notes",
  //   items: [
  //     {
  //       text: "学无止境",
  //       items: [
  //         { text: "6.5840", link: "/notes/6.5840/mapreducepaper" },
  //         {
  //           text: "系统架构设计师",
  //           link: "/notes/system_architect/knowledge/knowledge1",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   text: '碎碎念',
  //   link: '/balabala',
  //   activeMatch: '^/balabala'
  // },
  // {
  //   text: "归档",
  //   link: "/archive",
  // },
];
