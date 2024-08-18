import{_ as c,c as i,o as d,e as m}from"./app-CpTq9pDM.js";async function p(){const r="https://api.github.com/users/team1157/repos";try{const s=await(await fetch(r)).json(),n=document.getElementById("repo-container");s.forEach(e=>{const o=document.createElement("div");o.className="repo-card",o.innerHTML=`
                    <h2>
                        <a href="${e.html_url}" target="_blank">${e.name}</a>
                    </h2>
                    <p>
                        ${e.description?e.description:"No description provided."}
                    </p>
                    <p>
                        <strong>Stars:</strong> ${e.stargazers_count} | <strong>Forks:</strong> ${e.forks_count}
                    </p>
                `,n.appendChild(o)})}catch(t){console.error("Error fetching repositories:",t)}}p();const l={},u=m("div",{id:"repo-container"},null,-1),h=[u];function _(a,r,t,s,n,e){return d(),i("div",null,h)}const g=c(l,[["render",_],["__file","index.html.vue"]]),k=JSON.parse(`{"path":"/opensource/","title":"opensource","lang":"en-US","frontmatter":{"title":"opensource","author":"ada","createTime":"2024/08/16 21:45:00","permalink":"/opensource/","head":[["script",{"id":"check-dark-mode"},"document.documentElement.classList.add('dark')"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[],"readingTime":{"minutes":0.6,"words":180},"git":{"updatedTime":1723869489000,"contributors":[{"name":"ada","email":"git@adas.software","commits":1}]},"filePathRelative":"opensource.md","categoryList":[]}`);export{g as comp,k as data};
