import{r as n,j as e}from"./client-CsvIHAk3.js";const R=8,T=9,P=15,M=5,k=`
.ns-ps-row{
  display:flex;
  align-items:flex-start;
  justify-content:center;
  gap:13px;
  height:76px;
  padding-top:6px;
}
.ns-ps-pendulum{
  position:relative;
  width:1px;
  height:64px;
  transform-origin:top center;
  animation-name:ns-ps-swing;
  animation-timing-function:cubic-bezier(.37,0,.63,1);
  animation-iteration-count:infinite;
  transition:transform 520ms cubic-bezier(.16,1,.3,1),
             opacity 420ms ease;
}
.ns-ps-arm{
  position:absolute;
  inset:0;
  width:1px;
  background:var(--ns-muted);
}
.ns-ps-bob{
  position:absolute;
  left:50%;
  bottom:-2px;
  width:4px;
  height:4px;
  margin-left:-2px;
  border-radius:9999px;
  background:var(--foreground);
}
@keyframes ns-ps-swing{
  0%{transform:rotate(var(--ns-ps-amp))}
  50%{transform:rotate(calc(-1 * var(--ns-ps-amp)))}
  100%{transform:rotate(var(--ns-ps-amp))}
}
.ns-ps-row.ns-ps-done .ns-ps-pendulum{
  animation-play-state:paused;
  transition-delay:var(--ns-ps-retract-delay,0ms);
  transform:translateY(-140%);
  opacity:0;
}
@media (prefers-reduced-motion: reduce){
  .ns-ps-pendulum{
    animation:none;
    transition:opacity 200ms ease;
    transform:rotate(0deg);
  }
  .ns-ps-row.ns-ps-done .ns-ps-pendulum{
    transform:rotate(0deg);
    opacity:0;
  }
}
`;function B({label:S="Building",doneLabel:E="Build complete",value:o,done:a=!1,periodMs:f=1e4,count:$=13,amplitudeDeg:A=26,className:D=""}){const u=Math.min(P,Math.max(T,Math.round($))),i=n.useMemo(()=>Array.from({length:u},(t,s)=>f/(R+s)),[u,f]),x=i[Math.floor((u-1)/2)]??i[0],r=n.useMemo(()=>{if(o==null)return i;const t=Math.min(100,Math.max(0,o))/100;return i.map(s=>s+(x-s)*t)},[i,x,o]),h=n.useRef(null),[g,_]=n.useState(()=>r.map(()=>"-1ms")),[w,C]=n.useState(()=>r.map(()=>0));n.useLayoutEffect(()=>{const t=performance.now(),s=h.current;if(!s||s.length!==r.length){h.current=r.map(p=>({start:t,duration:p,phase:0}));return}if(o==null)return;let m=!1;const j=g.slice(),d=w.slice();r.forEach((p,c)=>{const l=s[c];if(Math.abs(p-l.duration)<.01)return;const O=t-l.start,v=(l.phase+O/l.duration)%1;s[c]={start:t,duration:p,phase:v},j[c]=`${-(v*p)}ms`,d[c]=(d[c]??0)+1,m=!0}),m&&(_(j),C(d))},[r,o]);const[y,b]=n.useState(0),N=n.useRef(a);n.useEffect(()=>{N.current&&!a&&b(0),N.current=a},[a]),n.useEffect(()=>{if(a)return;const t=window.setInterval(()=>b(s=>s+M),M*1e3);return()=>window.clearInterval(t)},[a]);const I=a?E:`${S}, ${y} second${y===1?"":"s"} elapsed`;return e.jsxs("div",{role:"status","aria-live":"polite",className:`inline-flex flex-col items-center gap-3 ${D}`,children:[e.jsx("style",{children:k}),e.jsx("div",{className:a?"ns-ps-row ns-ps-done":"ns-ps-row","aria-hidden":"true",children:r.map((t,s)=>{const m={animationDuration:`${t}ms`,animationDelay:g[s]??"-1ms","--ns-ps-amp":`${A}deg`,"--ns-ps-retract-delay":`${s*22}ms`};return e.jsxs("span",{className:"ns-ps-pendulum",style:m,children:[e.jsx("span",{className:"ns-ps-arm"}),e.jsx("span",{className:"ns-ps-bob"})]},`${s}-${w[s]??0}`)})}),e.jsx("p",{className:"font-mono text-xs text-ns-muted",children:I})]})}function L(){return e.jsx("div",{className:"ns-stage",children:e.jsx(B,{value:42})})}export{L as default};
