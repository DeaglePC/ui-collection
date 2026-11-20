import{r as a,j as s}from"./client-CsvIHAk3.js";const G="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 .:-",d=150,y=45,E=3,k=6,S=20,T=40,R=22,j=160,D="cubic-bezier(0.61, 0, 0.4, 1)",M="cubic-bezier(0.16, 1, 0.3, 1)";function N(o){return o[Math.floor(Math.random()*o.length)]??" "}function _(o){return{leaf:null,front:null,back:null,bottom:null,under:null,displayed:o,hovering:!1,token:0}}function O({value:o,charset:h=G,cellWidth:L=34,cellHeight:X=50,className:$=""}){const i=o.split(""),r=a.useRef(i.map(e=>_(e)));r.current.length!==i.length&&(r.current=i.map((e,t)=>r.current[t]??_(e)));const f=a.useRef(!1),u=a.useRef(!1),x=a.useRef(o),l=a.useRef(void 0),[A,P]=a.useState(o);a.useEffect(()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)");f.current=e.matches;const t=()=>{f.current=e.matches};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]);const b=(e,t)=>{e.leaf&&(e.leaf.style.transition="none",e.leaf.style.transform=e.hovering?`rotateX(${R}deg)`:"rotateX(0deg)"),e.front&&(e.front.textContent=t),e.bottom&&(e.bottom.textContent=t),e.under&&(e.under.textContent=N(h)),e.displayed=t},g=(e,t,n)=>{if(n||!e.leaf||!e.front||!e.back){b(e,t);return}e.back.textContent=t,e.leaf.style.transition="none",e.leaf.style.transform="rotateX(0deg)",e.leaf.offsetHeight,e.leaf.style.transition=`transform ${d}ms ${D}`,e.leaf.style.transform="rotateX(-180deg)",window.setTimeout(()=>{e.bottom&&(e.bottom.textContent=t)},d/2),window.setTimeout(()=>{b(e,t)},d)},C=(e,t)=>{const n=r.current[e];if(!n)return;const c=++n.token;if(f.current){g(n,t,!0);return}const w=E+Math.floor(Math.random()*(k-E+1)),z=(S+Math.random()*(T-S))*(e+1);let p=0;const m=()=>{if(n.token!==c)return;if(u.current){window.setTimeout(m,90);return}const F=p===w-1;g(n,F?t:N(h),!1),p++,p<w&&window.setTimeout(m,d+y)};window.setTimeout(m,z)};a.useEffect(()=>{const e=x.current;if(x.current=o,e===o)return;i.forEach((n,c)=>{r.current[c]&&r.current[c].displayed!==n&&C(c,n)}),window.clearTimeout(l.current);const t=f.current?0:T*i.length+(d+y)*k+120;return l.current=window.setTimeout(()=>P(o),t),()=>window.clearTimeout(l.current)},[o]);const H=()=>{u.current=!0},I=()=>{u.current=!1},v=(e,t)=>{f.current||(e.hovering=t,e.leaf&&(e.leaf.style.transition=`transform ${j}ms ${M}, box-shadow ${j}ms ${M}`,e.leaf.style.transform=t?`rotateX(${R}deg)`:"rotateX(0deg)",e.leaf.style.boxShadow=t?"0 5px 8px -1px rgba(0,0,0,0.55)":"none"))};return s.jsxs("div",{className:`ns-sf-board ${$}`,onPointerEnter:H,onPointerLeave:I,children:[s.jsx("style",{children:V}),s.jsx("span",{role:"status","aria-live":"polite","aria-atomic":"true",className:"sr-only",children:A}),s.jsx("div",{className:"ns-sf-row",children:i.map((e,t)=>s.jsxs("button",{type:"button",tabIndex:-1,"aria-hidden":"true",className:"ns-sf-cell",style:{"--sf-w":`${L}px`,"--sf-h":`${X}px`},onPointerEnter:()=>v(r.current[t],!0),onPointerLeave:()=>v(r.current[t],!1),children:[s.jsx("span",{className:"ns-sf-plate ns-sf-under",ref:n=>{r.current[t]&&(r.current[t].under=n)},children:e}),s.jsx("span",{className:"ns-sf-plate ns-sf-bottom",ref:n=>{r.current[t]&&(r.current[t].bottom=n)},children:e}),s.jsx("div",{className:"ns-sf-leaf-clip",children:s.jsxs("div",{className:"ns-sf-leaf",ref:n=>{r.current[t]&&(r.current[t].leaf=n)},children:[s.jsx("span",{className:"ns-sf-face ns-sf-face-front",ref:n=>{r.current[t]&&(r.current[t].front=n)},children:e}),s.jsx("span",{className:"ns-sf-face ns-sf-face-back",ref:n=>{r.current[t]&&(r.current[t].back=n)},children:e})]})})]},t))})]})}const V=`
.ns-sf-board{display:inline-block;}
.ns-sf-row{display:flex;gap:3px;}
.ns-sf-cell{
  position:relative;
  width:var(--sf-w);
  height:var(--sf-h);
  padding:0;
  border:1px solid var(--border);
  border-radius:4px;
  background:var(--foreground);
  overflow:hidden;
  perspective:70px;
  cursor:default;
  -webkit-tap-highlight-color:transparent;
}
.ns-sf-plate{
  position:absolute;
  left:0;
  width:100%;
  height:50%;
  overflow:hidden;
  display:flex;
  justify-content:center;
  font-family:var(--font-geist-mono, ui-monospace, monospace);
  font-size:calc(var(--sf-h) * 0.52);
  line-height:var(--sf-h);
  color:var(--background);
}
.ns-sf-under{ top:0; align-items:flex-start; }
.ns-sf-bottom{
  bottom:0;
  align-items:flex-end;
  border-top:1px solid var(--background);
  box-shadow:inset 0 5px 6px -3px color-mix(in srgb, var(--background) 60%, transparent);
}
.ns-sf-leaf-clip{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:50%;
  overflow:hidden;
  z-index:2;
}
.ns-sf-leaf{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  transform-style:preserve-3d;
  transform-origin:bottom center;
  transform:rotateX(0deg);
}
.ns-sf-face{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:var(--sf-h);
  display:flex;
  align-items:center;
  justify-content:center;
  font-family:var(--font-geist-mono, ui-monospace, monospace);
  font-size:calc(var(--sf-h) * 0.52);
  color:var(--background);
  backface-visibility:hidden;
  -webkit-backface-visibility:hidden;
}
.ns-sf-face-front{ box-shadow:inset 0 -5px 6px -2px color-mix(in srgb, var(--background) 50%, transparent); }
.ns-sf-face-back{ transform:rotateX(180deg); box-shadow:inset 0 5px 6px -2px color-mix(in srgb, var(--background) 50%, transparent); }
@media (prefers-reduced-motion: reduce){
  .ns-sf-leaf{ transition:none !important; }
}
`;function U(){return s.jsx("div",{className:"ns-stage",children:s.jsx(O,{value:"a"})})}export{U as default};
