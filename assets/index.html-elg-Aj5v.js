import{f as C,g as h,h as v,t as R,i as b,j as k,_ as f,o as l,c as p,e as a,k as c,n as y,l as u,p as S,m as w,a as o,w as x,r as P}from"./app-DAiOjRjB.js";function T(t){const s=C(()=>{const n=R(t),[d="",_=""]=n.split("/");return{owner:d,name:_}}),r=h(null),e=h(!1);async function i(){const{owner:n,name:d}=s.value;if(!n||!d)return;e.value=!1;const _=await fetch(`https://api.pengzhanbo.cn/github/repo/${n}/${d}`).then(g=>g.json());r.value=_,e.value=!0}return v(s,i,{immediate:!0}),{data:r,loaded:e}}const O=b({__name:"RepoCard",props:{repo:{}},setup(t,{expose:s}){s();const r=t,{loaded:e,data:i}=T(k(r,"repo")),n={props:r,loaded:e,data:i};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),m=t=>(S("data-v-65cac19a"),t=t(),w(),t),G={key:0,class:"vp-repo-card"},N={class:"repo-name"},j=m(()=>a("span",{class:"vpi-github-repo"},null,-1)),D={class:"repo-link"},E=["href"],I={class:"repo-visibility"},L={class:"repo-desc"},V={class:"repo-info"},z={key:0},B=m(()=>a("span",{class:"vpi-github-star"},null,-1)),F=m(()=>a("span",{class:"vpi-github-fork"},null,-1)),U={key:1},A=m(()=>a("span",{class:"vpi-github-license"},null,-1));function J(t,s,r,e,i,n){return e.loaded&&e.data?(l(),p("div",G,[a("p",N,[j,a("span",D,[a("a",{href:e.data.url,target:"_blank",rel:"noopener noreferrer"},c(e.data.ownerType==="Organization"?e.data.fullName:e.data.name),9,E)]),a("span",I,c(e.data.visibility+(e.data.template?" Template":"")),1)]),a("p",L,c(e.data.description),1),a("div",V,[e.data.language?(l(),p("p",z,[a("span",{class:"repo-language",style:y({"background-color":e.data.languageColor})},null,4),a("span",null,c(e.data.language),1)])):u("",!0),a("p",null,[B,a("span",null,c(e.data.stars),1)]),a("p",null,[F,a("span",null,c(e.data.forks),1)]),e.data.license?(l(),p("p",U,[A,a("span",null,c(e.data.license.name),1)])):u("",!0)])])):u("",!0)}const M=f(O,[["render",J],["__scopeId","data-v-65cac19a"],["__file","RepoCard.vue"]]),W={__name:"index.html",setup(t,{expose:s}){s();const r={RepoCard:M};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function q(t,s,r,e,i,n){const d=P("CardGrid");return l(),p("div",null,[o(d,null,{default:x(()=>[o(e.RepoCard,{repo:"team1157/site"}),o(e.RepoCard,{repo:"team1157/robot-code-kcmt-2024"}),o(e.RepoCard,{repo:"team1157/Controller-Library"}),o(e.RepoCard,{repo:"team1157/adaESC"}),o(e.RepoCard,{repo:"team1157/Thruster-Arrangement-Utility"}),o(e.RepoCard,{repo:"team1157/PitDisplay"}),o(e.RepoCard,{repo:"team1157/landsharks-rover"}),o(e.RepoCard,{repo:"team1157/2020-FiniteCharge"}),o(e.RepoCard,{repo:"team1157/2018-PowerDown"}),o(e.RepoCard,{repo:"team1157/WaterGameConfirmed"}),o(e.RepoCard,{repo:"team1157/FunTime"}),o(e.RepoCard,{repo:"team1157/Scan-Game"})]),_:1})])}const K=f(W,[["render",q],["__file","index.html.vue"]]),Q=JSON.parse(`{"path":"/opensource/","title":"Open Source","lang":"en-US","frontmatter":{"title":"Open Source","author":"ada","createTime":"2024/08/16 21:45:00","permalink":"/opensource/","head":[["script",{"id":"check-dark-mode"},"document.documentElement.classList.add('dark')"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[],"readingTime":{"minutes":0.27,"words":81},"git":{"updatedTime":1724965658000,"contributors":[{"name":"ada","email":"git@adas.software","commits":2},{"name":"cmdada","email":"cmdada@proton.me","commits":1}]},"filePathRelative":"opensource.md","categoryList":[]}`);export{K as comp,Q as data};