import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: plumeTheme(),
  base: "/",
  lang: "en-US",
  title: "BHS RoboSharks",
  description: "Mate ROV Team",
})
