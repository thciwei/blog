import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";
import { metaData } from "./config/metadata";
import { head } from "./config/head";
import { nav } from "./config/nav";
import { sidebar } from "./config/sidebar";
import { RssPlugin, RSSOptions } from "vitepress-plugin-rss";

const RSS: RSSOptions = {
  title: "thciwei",
  baseUrl: "",
  copyright: "Copyright © 2022-present thciwei",
  filename: "feed.xml",
  ignoreHome: true,
  filter: (post, idx) => {
    return (
      post.filepath.includes("posts/") && !post.filepath.includes("index.md")
    );
  },
};

// https://vitepress.dev/reference/site-config
export default withPwa(
  defineConfig({
    title: metaData.title,
    description: metaData.description,
    lang: metaData.lang,
    head: head,

    // 最后更新时间
    lastUpdated: false,

    // 简洁的url
    cleanUrls: true,

    // 输出目录
    outDir: "./dist",

    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: nav,

      sidebar: sidebar,

      outline: {
        label: "页面导航",
        level: "deep",
      },

      editLink: {
        // pattern: "https://github.com/senshinya/blog/edit/main/:path",
        text: "不妥之处，敬请雅正",
      },

      lastUpdated: {
        text: "最后更新于",
        formatOptions: {
          dateStyle: "short",
          timeStyle: "medium",
        },
      },

      docFooter: {
        prev: "上一篇",
        next: "下一篇",
      },

      socialLinks: [
        //header栏自定义链接和图标
        // { icon: { svg: "🚇" }, link: "https://www.travellings.cn/go.html" },
        { icon: "github", link: "https://github.com/thciwei" },
      ],

      footer: {
        message: "如有转载或 CV 请标注本站原文地址",
        copyright: "Copyright © 2022-present thciwei",
      },

      // @ts-ignore
      articleMetadataConfig: {
        author: "QiaoSong", // 文章全局默认作者名称
        authorLink: "/shinya", // 点击作者名时默认跳转的链接
      },

      // 自定义扩展: 文章版权配置
      copyrightConfig: {
        license: "署名-相同方式共享 4.0 国际 (CC BY-SA 4.0)",
        licenseLink:
          "https://creativecommons.org/licenses/by/4.0/legalcode.zh-hans",
      },
    },

    rewrites: {
      "posts/:categorie/:type/index.md": ":categorie/:type.md",
      "posts/:categorie/:type/:file.md": ":categorie/:type/:file.md",
      "posts/:categorie/:type/:type1/index.md": ":categorie/:type/:type1.md",
      "posts/:categorie/:type/:type1/:file.md":
        ":categorie/:type/:type1/:file.md",
      "posts/:categorie/index.md": ":categorie.md",
      "posts/:categorie/:file.md": ":categorie/:file.md",
      "pages/:categorie/index.md": ":categorie.md",
    },

    sitemap: {
      hostname: "https://thciwei.github.io/",
    },

    vite: {
      optimizeDeps: {
        exclude: ["@nolebase/vitepress-plugin-enhanced-readabilities/client"],
      },
      ssr: {
        noExternal: [
          "@nolebase/vitepress-plugin-enhanced-readabilities",
          "@nolebase/vitepress-plugin-highlight-targeted-heading",
        ],
      },
      //页面加载RSS
      // plugins: [RssPlugin(RSS)],
    },

    pwa: {
      outDir: "dist",
      selfDestroying: true,
    },
  })
);
