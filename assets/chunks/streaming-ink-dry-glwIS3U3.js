import{r as o,j as n}from"./client-CsvIHAk3.js";const p=600,j=900;function k(r){let a=-1;for(let e=0;e<r.length;e++){const l=r[e];if(l===`
`){a=e;continue}(l==="."||l==="!"||l==="?")&&(e===r.length-1||/\s/.test(r[e+1]??""))&&(a=e)}return a}function v({tokens:r,dryMs:a=p,idleFlushMs:e=j,className:l=""}){const[x,g]=o.useState([]),[h,y]=o.useState(""),s=o.useRef({settled:[],tail:""}),u=o.useRef(0),f=o.useRef(void 0);return o.useEffect(()=>{const i=r.join("");i.length<u.current&&(u.current=0,s.current={settled:[],tail:""});const c=i.slice(u.current);if(u.current=i.length,c){let t=s.current.tail+c,d=s.current.settled;const m=k(t);m>=0&&(d=[...d,t.slice(0,m+1)],t=t.slice(m+1)),s.current={settled:d,tail:t},g(d),y(t)}return clearTimeout(f.current),f.current=setTimeout(()=>{if(s.current.tail){const t=[...s.current.settled,s.current.tail];s.current={settled:t,tail:""},g(t),y("")}},e),()=>clearTimeout(f.current)},[r,e]),n.jsxs("div",{role:"log","aria-live":"polite","aria-atomic":"false",className:l,style:a!==p?{"--ns-streaming-ink-dry-dry-ms":`${a}ms`}:void 0,children:[n.jsx("p",{"aria-hidden":"true",className:"ns-streaming-ink-dry-visual whitespace-pre-wrap",children:r.map((i,c)=>i===""?null:n.jsx("span",{className:"ns-streaming-ink-dry-token",children:i},c))}),n.jsxs("span",{className:"sr-only",children:[x.map((i,c)=>n.jsx("span",{children:i},c)),n.jsx("span",{"aria-busy":h.length>0,children:h})]}),n.jsx("style",{children:S})]})}const S=`
.ns-streaming-ink-dry-token{
  font-weight:400;
  font-variation-settings:'wght' 400;
  animation:ns-streaming-ink-dry-dry var(--ns-streaming-ink-dry-dry-ms,600ms) cubic-bezier(.16,1,.3,1) both;
}
@keyframes ns-streaming-ink-dry-dry{
  from{opacity:.55;filter:blur(.4px)}
  to{opacity:1;filter:blur(0)}
}
@media (prefers-reduced-motion: reduce){
  .ns-streaming-ink-dry-token{animation:none;font-weight:400;font-variation-settings:'wght' 400;opacity:1;filter:none}
}
`;function b(){return n.jsx("div",{className:"ns-stage",children:n.jsx(v,{tokens:["示例","第二项"]})})}export{b as default};
