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
		  container.classList.toggle('expanded');
		  var image = container.querySelector('img');
		  if (container.classList.contains('expanded')) {
		    container.style.height = 'auto';
		    element.innerHTML = '&#9650;'; // Up arrow
		  } else {
		    image.style.height = '150px';
		    element.innerHTML = '&#9660;'; // Down arrow
		  }
		}
    `]
  ],
  bundler: viteBundler(),
  theme: plumeTheme({
  	footer: false,
    navbar: [
    { text: 'Events', link: '/events' },
    { text: 'History', link: '/history' },
    ],
    profile: {
      name: 'Captains',
      description: 'RoboSharks team captains',
      avatar: '/logo.png',
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
  description: "1/2 Robot 1/2 Shark Mate ROV Team",
})
