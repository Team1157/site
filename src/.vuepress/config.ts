import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: plumeTheme({
  	footer: false,
    navbar: [
    { text: 'Projects', link: '/projects' },
    ],
    profile: {
      name: 'Captains',
      description: 'RoboSharks team captains',
      avatar: 'https://www.adabit.org/shorkhehe.png',
      circle: true,
    },
    plugins: {
	  search: false,
	},
	logo: '/logo.png',
	appearance: 'force-dark',
	editLink: true
  }),
  base: "/",
  lang: "en-US",
  title: "Robosharks",
  description: "Mate ROV Team",
})
