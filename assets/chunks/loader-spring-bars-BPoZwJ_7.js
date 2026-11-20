import{j as n}from"./client-CsvIHAk3.js";const m=`
.ns-lr-rack{
  display:flex;
  align-items:flex-end;
  justify-content:center;
  gap:calc(var(--ns-lr-bar) * .6);
  height:var(--ns-lr-height);
}
.ns-lr-bar{
  width:var(--ns-lr-bar);
  height:100%;
  border-radius:9999px;
  background:var(--foreground);
  transform-origin:bottom center;
  animation:ns-lr-pulse var(--ns-lr-period) infinite;
}
@keyframes ns-lr-pulse{
  0%,18%{transform:scaleY(.38);animation-timing-function:cubic-bezier(.16,1,.3,1)}
  30%{transform:scaleY(1.16);animation-timing-function:cubic-bezier(.34,1.56,.64,1)}
  38%{transform:scaleY(.88);animation-timing-function:cubic-bezier(.34,1.56,.64,1)}
  46%{transform:scaleY(1.05);animation-timing-function:cubic-bezier(.16,1,.3,1)}
  54%,100%{transform:scaleY(.38)}
}
@media (prefers-reduced-motion: reduce){
  .ns-lr-bar{animation:none;transform:scaleY(.7);opacity:.7;}
}
`;function u({count:e=5,height:a=40,periodMs:r=2200,label:i="Loading",className:t=""}){const l=Math.min(9,Math.max(3,Math.round(e))),o=Math.max(3,Math.round(a*.11)),c=r*.085;return n.jsxs("span",{role:"status","aria-live":"polite","data-loader-spring-bars":!0,className:`inline-flex items-end ${t}`,style:{height:a,"--ns-lr-bar":`${o}px`,"--ns-lr-height":`${a}px`,"--ns-lr-period":`${r}ms`},children:[n.jsx("style",{children:m}),n.jsx("span",{className:"ns-lr-rack","aria-hidden":"true",children:Array.from({length:l},(d,s)=>n.jsx("span",{className:"ns-lr-bar",style:{animationDelay:`${-(s*c)}ms`}},s))}),n.jsx("span",{className:"sr-only",children:i})]})}function p(){return n.jsx("div",{className:"ns-stage",children:n.jsx(u,{})})}export{p as default};
