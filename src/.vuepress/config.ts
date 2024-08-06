import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: plumeTheme({
  	footer: false,
    navbar: [
    { text: '', link: '/' },
    ],
    profile: {
      name: 'Captains',
      description: 'RoboSharks team captains',
      avatar: 'https://www.adabit.org/shorkhehe.png',
      circle: true,
    },
    plugins: {
	  search: false,
	}
  }),
  base: "/",
  lang: "en-US",
  title: "BHS RoboSharks",
  description: "Mate ROV Team",
})
