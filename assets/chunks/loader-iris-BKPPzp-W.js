import{j as r}from"./client-CsvIHAk3.js";const s=`
.ns-bi-blade{
  transform-box:fill-box;
  transform-origin:center;
  animation:ns-bi-breathe var(--ns-bi-period) infinite;
}
@keyframes ns-bi-breathe{
  0%,10%{transform:translateY(0px);animation-timing-function:cubic-bezier(.16,1,.3,1)}
  22%{transform:translateY(-9px);animation-timing-function:cubic-bezier(.34,1.56,.64,1)}
  28%{transform:translateY(-7.5px)}
  55%{transform:translateY(-7.5px);animation-timing-function:cubic-bezier(.16,1,.3,1)}
  67%{transform:translateY(1px);animation-timing-function:cubic-bezier(.34,1.56,.64,1)}
  73%,100%{transform:translateY(0px)}
}
@media (prefers-reduced-motion: reduce){
  .ns-bi-blade{animation:none;transform:translateY(-4px);}
}
`,o="M 50 47 L 37 12 L 63 12 Z";function l({size:n=40,periodMs:i=2600,label:t="Loading",className:a=""}){return r.jsxs("span",{role:"status","aria-live":"polite","data-loader-iris":!0,className:`inline-flex shrink-0 items-center justify-center ${a}`,style:{width:n,height:n},children:[r.jsx("style",{children:s}),r.jsxs("svg",{viewBox:"0 0 100 100",width:n,height:n,"aria-hidden":"true",focusable:"false",style:{"--ns-bi-period":`${i}ms`},children:[r.jsx("circle",{cx:50,cy:50,r:46,fill:"none",stroke:"var(--border)",strokeWidth:1.5}),Array.from({length:6},(c,e)=>r.jsx("g",{transform:`rotate(${e*60} 50 50)`,children:r.jsx("path",{className:"ns-bi-blade",d:o,fill:"color-mix(in srgb, var(--foreground) 82%, transparent)",stroke:"var(--surface)",strokeWidth:1,strokeLinejoin:"round"})},e)),r.jsx("circle",{cx:50,cy:50,r:2.5,fill:"var(--foreground)"})]}),r.jsx("span",{className:"sr-only",children:t})]})}function f(){return r.jsx("div",{className:"ns-stage",children:r.jsx(l,{})})}export{f as default};
