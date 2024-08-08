import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { property: 'og:type', content: 'article' }],
    ['script', {}, `
      function expandImage(element) {
        var container = element.parentElement;
        if (container.style.height === '150px') {
          container.style.height = 'auto';
          element.innerHTML = '&#9650;'; // Up arrow
        } else {
          container.style.height = '150px';
          element.innerHTML = '&#9660;'; // Down arrow
        }
      }
    `]
  ],
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
