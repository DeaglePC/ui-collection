import{r as n,j as s}from"./client-CsvIHAk3.js";const j=60,M=420,f=380,R=240,V=220,W=10,B=`
.ns-echo-ring{transform-box:fill-box}
.ns-echo-pinging{animation:ns-echo-ping var(--ns-echo-period,7000ms) cubic-bezier(.32,.72,.35,1) infinite}
@keyframes ns-echo-ping{
  0%{r:3;stroke-opacity:.85}
  70%{stroke-opacity:.18}
  100%{r:47;stroke-opacity:0}
}
.ns-echo-row{position:relative}
.ns-echo-skel{
  position:absolute;inset:0;border-radius:8px;background:var(--border);
  transform:scaleX(0);transform-origin:50% 50%;opacity:0;
}
.ns-echo-row-in .ns-echo-skel{
  animation:ns-echo-row-in ${M}ms cubic-bezier(.16,1,.3,1) forwards;
}
@keyframes ns-echo-row-in{
  from{transform:scaleX(0);opacity:0}
  to{transform:scaleX(1);opacity:1}
}
.ns-echo-loaded .ns-echo-skel{opacity:0;transition:opacity ${R}ms ease-out}
.ns-echo-content{
  position:absolute;inset:0;opacity:0;transition:opacity ${R}ms ease-out;
}
.ns-echo-loaded .ns-echo-content{opacity:1}
@media (prefers-reduced-motion: reduce){
  .ns-echo-pinging{animation:none}
  .ns-echo-row-in .ns-echo-skel{animation:none}
  .ns-echo-content,.ns-echo-loaded .ns-echo-skel{transition:none}
}
`;function F(e,i,l){const c=Math.max(1,l),d=c*e+Math.max(0,c-1)*i,y=e/2/d*100;return Math.max(6,50-y)}function G({items:e,query:i="",rowHeight:l=52,rowGap:c=10,stageRows:d=4,className:y=""}){const E=n.useId(),g=n.useRef(null),h=n.useRef([]),[p,N]=n.useState(!1),[o,m]=n.useState(e&&e.length>0?"loaded":"empty"),[T,S]=n.useState(0),[P,C]=n.useState(""),[x,b]=n.useState(e??[]),v=n.useRef(o==="empty"),[_,A]=n.useState(7e3);n.useEffect(()=>{A(Math.round(6e3+Math.random()*2e3))},[]),n.useEffect(()=>{const t=window.matchMedia("(prefers-reduced-motion: reduce)"),u=()=>N(t.matches);return u(),t.addEventListener("change",u),()=>t.removeEventListener("change",u)},[]),n.useEffect(()=>{const t=()=>{h.current.forEach(r=>window.clearTimeout(r)),h.current=[]};if(!(!!e&&e.length>0)){t();const r=g.current;return r&&(r.style.removeProperty("animation"),r.style.removeProperty("transition"),r.style.removeProperty("r"),r.style.removeProperty("stroke-opacity")),m("empty"),S(0),v.current=!0,t}if(!v.current)return b(e),m("loaded"),t;if(v.current=!1,C(`${e.length} result${e.length===1?"":"s"} loaded`),b(e),p)return m("loaded"),t;m("arriving");const a=g.current;if(a){const r=getComputedStyle(a),D=r.getPropertyValue("r")||"3px",X=r.getPropertyValue("stroke-opacity")||"1";a.style.animation="none",a.style.setProperty("r",D),a.style.setProperty("stroke-opacity",X),a.getBoundingClientRect(),a.style.transition=`r ${f}ms cubic-bezier(.16,1,.3,1), stroke-opacity ${f}ms ease-out`;const z=F(l,c,d);requestAnimationFrame(()=>{a.style.setProperty("r",`${z}px`),a.style.setProperty("stroke-opacity","0.55")})}const k=Math.min(e.length,W);let w=0;const $=()=>{w+=1,S(w),w<k&&h.current.push(window.setTimeout($,j))};return h.current.push(window.setTimeout($,f),window.setTimeout(()=>m("loaded"),f+k*j+M+V)),t},[e,p,l,c,d]),n.useEffect(()=>()=>{h.current.forEach(t=>window.clearTimeout(t))},[]);const O=i?`No results for "${i}"`:"Nothing here yet",I=`${x.length} result${x.length===1?"":"s"}${i?` for "${i}"`:""}`,L=d*l+Math.max(0,d-1)*c;return s.jsxs("div",{className:`ns-echo relative w-full ${y}`,children:[s.jsx("style",{children:B}),s.jsxs("div",{role:"region","aria-labelledby":E,className:"flex w-full flex-col items-center gap-4",children:[s.jsxs("div",{className:"relative w-full",style:{height:p?void 0:L},children:[o!=="loaded"&&!p&&s.jsx("svg",{"aria-hidden":"true",focusable:"false",className:"absolute inset-0 h-full w-full",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:s.jsx("circle",{ref:g,r:3,cx:50,cy:50,vectorEffect:"non-scaling-stroke",className:o==="empty"?"ns-echo-ring ns-echo-pinging":"ns-echo-ring",style:{fill:"none",stroke:"var(--border)",strokeWidth:1,"--ns-echo-period":`${_}ms`}})}),(o==="arriving"||o==="loaded")&&s.jsx("ul",{className:`relative flex w-full list-none flex-col ${o==="loaded"?"ns-echo-loaded":""}`,style:{gap:c},children:x.map((t,u)=>s.jsxs("li",{className:`ns-echo-row ${o==="loaded"||u<T?"ns-echo-row-in":""}`,style:{height:l},children:[s.jsx("div",{className:"ns-echo-skel","aria-hidden":"true"}),s.jsx("div",{className:"ns-echo-content","aria-hidden":o!=="loaded",children:t.content})]},t.id))})]}),s.jsx("p",{id:E,className:o==="empty"?"text-center text-sm text-ns-muted":"sr-only",children:o==="empty"?O:I})]}),s.jsx("span",{role:"status","aria-live":"polite",className:"sr-only",children:P})]})}function J(){return s.jsx("div",{className:"ns-stage",children:s.jsx(G,{items:[{id:"a",content:"这是一段用来预览排版的示例文字。"},{id:"b",content:"第二段用来占位的说明。"}]})})}export{J as default};
