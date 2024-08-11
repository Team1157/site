import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  head: [
    ['meta', { name: 'theme-color', content: '#1b1b1f' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    ['meta', { property: 'og:type', content: 'article' }],
    [
      'style',
      {},
      `
         br {
            display: block;
            margin: 30px 0;
         }
         
         .about-us, .join-now {
           padding: 0px;
           border-radius: 10px;
           color: #ffffff;
         }
         
         .contentuwu {
           display: flex;
           align-items: center;
         }
         
         .text-content {
           flex: 1;
         }
         
         .text-content h2 {
           margin-left: 20px;
           font-size: 2rem;
         }
         
         .text-content p {
           font-size: 1.2rem;
           line-height: 1.5;
           margin-left: 20px;
         }
         
         .team-image {
           flex-shrink: 0;
           max-width: 30%;
           height: auto;
           border-radius: 10px;
           margin-left: 20px;
         }
         
         .team-image-right {
           flex-shrink: 0;
           max-width: 30%;
           height: auto;
           border-radius: 10px;
           margin-right: 20px;
         }
         h2.hero-name{
         	color:  #3e2137;
         }
         h2{
         	color: #d4af37;
         }
         h3{
         	color:  #ebbcfc;
         }
         .image-container {
           position: relative;
           height: 150px;
           overflow: hidden;
           margin-bottom: 20px;
         }
       
         .image-container img {
           width: 100%;
           position: relative;
         }
       
         .arrow {
           position: absolute;
           bottom: 0;
           left: 50%;
           transform: translateX(-50%);
           font-size: 20px;
           cursor: pointer;
           background-color: rgba(0, 0, 0, 0.7);
           padding-top: 3px;
           padding-right: 5px;
           padding-bottom: 3px;
           padding-left: 5px;
           border-radius: 50%;
         }
         .card-container {
             display: grid;
             grid-template-columns: repeat(3, 1fr);
             gap: 30px;
         }
         .card {
             padding: 35px;
             border-radius: 20px;
             text-align: center;
             box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
             transition: transform 0.2s;
         }
         .card:hover {
             transform: translateY(-5px);
         }
         .card-icon {
             font-size: 40px;
             margin-bottom: 10px;
         }
         .card-title {
             font-size: 18px;
             margin-bottom: 10px;
         }
         .card-text {
             font-size: 14px;
         }
         
         @media screen and (max-width: 768px) {
           .contentuwu {
             flex-direction: column;
           }
         
           .text-content h2,
           .text-content p {
             margin-left: 0;
             text-align: center;
           }
         
           .team-image, .team-image-right {
             max-width: 100%;
             margin: 20px 0;
             order: -1;
           }
         
           .card-container {
             grid-template-columns: 1fr;
           }
         }
         
         @media screen and (max-width: 480px) {
           .text-content h2 {
             font-size: 1.5rem;
           }
         
           .text-content p {
             font-size: 1rem;
           }
         
           .card {
             padding: 20px;
           }
         }
    `,
    ],
  ],
  bundler: viteBundler(),
  theme: plumeTheme({
    footer: false,
    navbar: [
      { text: 'Donate', link: '/donate' },
      { text: 'About', link: '/#about' },
      { text: 'Events', link: '/events' },
      { text: 'Projects', link: '/projects' },
      { text: 'History', link: '/history' },
    ],
    profile: {
      name: 'Captains',
      description: 'RoboSharks team captains',
      avatar: '/img/logo.png',
      circle: true,
    },
    plugins: {
      search: false,
    },
    logo: '/img/logo.png',
    appearance: 'force-dark',
    editLink: true,
  }),
  base: '/',
  lang: 'en-US',
  title: 'Robosharks',
  description: '1/2 Robot 1/2 Shark Mate ROV Team',
})
