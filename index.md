---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
layoutClass: "m-home-layout"

hero:
  name: "QiaoSong"
  tagline: 把自己写成诗，留下爱和勇敢
  image:
    src: https://blog-img.shinya.click/bg.png
    alt: background
  actions:
    - theme: brand
      text: 技术博客
      link: /tech/tech0
    - theme: brand
      text: 软件开发
      link: /knowledge/java/java0
    - theme: brand
      text: 时间之外
      link: /daily/time
    # - theme: alt
    #   text: 看看 Github
    #   link: https://github.com/thciwei

features:
  # - icon: 🏛️
  #   title: 项目
  #   details: 知者行之始，行者知之成<br />穷则默默造轮，达则四处推广
  #   link: /projects/mydb/mydb0
  - icon: 📖
    title: 笔记
    details: 笔记是积累财富
    # link: /notes/6.5840/mapreducepaper
  - icon: 💡
    title: 折腾
    details: 灵感来源于折腾，变化如此
    # link: /fiddling/fake-ip-based-transparent-proxy
  - icon: 🍰
    title: 美食
    details: 爱好是做蛋糕，还有面包
    # details: '<small class="bottom-small"><br/><br/>爱好是做蛋糕，还有面包</small>'
    # link: /daily/anti-chronic-gastritis
  # - icon: 🧾
  #   title: 碎碎念
  #   details: 就当我在扯淡
  #   link: /balabala
  - icon: 🎸
    title: 音乐
    details: 听音乐是一种抚慰
    # link: /shinya
---

<!-- 开启github贡献热力图 -->
<!-- <Heatmap /> -->

<style>
.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .item:last-child .details {
  display: flex;
   /* justify-content: flex-end; */
  /* align-items: end; */
  justify-content: flex-start;
  align-items: start;
}

@media (min-width: 768px) {
  .VPHome {
    margin-bottom: 50px !important;
  }
}
</style>
