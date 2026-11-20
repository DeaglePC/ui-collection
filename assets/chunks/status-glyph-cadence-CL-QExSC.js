import{j as n}from"./client-CsvIHAk3.js";const b={working:"Working",searching:"Searching","awaiting-input":"Awaiting input",blocked:"Blocked",done:"Done"},m=[[12,4],[18.93,8],[18.93,16],[12,20],[5.07,16],[5.07,8]],f={working:[1,.83,.66,.49,.32,.15],searching:[1,.7,.15,.15,.15,.15],"awaiting-input":[.22,.22,.22,.22,.22,.22],blocked:[0,.55,.55,.55,.55,.55],done:[1,1,1,1,1,1]},d=1.7,p=`
.ns-bc-ring{transform-box:fill-box;transform-origin:center;}
.ns-bc-center{transform-box:fill-box;transform-origin:center;}
.ns-bc-check{transform-box:fill-box;transform-origin:center;}
.ns-bc-spin{animation:ns-bc-spin 1.2s linear infinite;}
.ns-bc-sweep{animation:ns-bc-sweep 1.7s cubic-bezier(.45,0,.55,1) infinite;}
.ns-bc-tremor{animation:ns-bc-tremor 1.5s steps(1) infinite;}
.ns-bc-pulse{animation:ns-bc-pulse 1.9s ease-in-out infinite;}
.ns-bc-settle{animation:ns-bc-settle .42s cubic-bezier(.34,1.56,.64,1) both;}
@keyframes ns-bc-spin{to{transform:rotate(360deg)}}
@keyframes ns-bc-sweep{
  0%,100%{transform:rotate(-35deg)}
  50%{transform:rotate(35deg)}
}
@keyframes ns-bc-tremor{
  0%,58%,100%{transform:rotate(0deg)}
  15%{transform:rotate(9deg)}
  30%{transform:rotate(-5deg)}
  44%{transform:rotate(3deg)}
}
@keyframes ns-bc-pulse{
  0%,100%{transform:scale(.8);opacity:.5}
  50%{transform:scale(1.22);opacity:1}
}
@keyframes ns-bc-settle{
  from{transform:scale(.5);opacity:0}
  to{transform:scale(1);opacity:1}
}
@media (prefers-reduced-motion: reduce){
  .ns-bc-spin,.ns-bc-sweep,.ns-bc-tremor,.ns-bc-pulse,.ns-bc-settle{animation:none;}
}
`,g={working:"ns-bc-spin",searching:"ns-bc-sweep","awaiting-input":"",blocked:"ns-bc-tremor",done:""};function u({state:e,size:s=24,label:i,className:o=""}){const c=f[e],r=g[e];return n.jsxs("span",{role:"status","aria-live":"polite",className:`inline-flex shrink-0 items-center justify-center ${o}`,style:{width:s,height:s},children:[n.jsx("style",{children:p}),n.jsxs("svg",{viewBox:"0 0 24 24",width:s,height:s,"aria-hidden":"true",focusable:"false",children:[n.jsx("g",{className:r?`ns-bc-ring ${r}`:"ns-bc-ring",children:m.map(([a,l],t)=>n.jsx("circle",{cx:a,cy:l,r:d,style:{fill:"var(--foreground)",opacity:c[t]}},t))}),e==="awaiting-input"&&n.jsx("circle",{className:"ns-bc-center ns-bc-pulse",cx:12,cy:12,r:2.8,style:{fill:"var(--foreground)"}}),e==="done"&&n.jsx("path",{className:"ns-bc-check",d:"M8.3 12.4l2.5 2.5 4.9-5.4",fill:"none",stroke:"var(--foreground)",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]},e),n.jsx("span",{className:"sr-only",children:i??b[e]})]})}function x(){return n.jsx("div",{className:"ns-stage",children:n.jsx(u,{state:"working",label:"示例"})})}export{x as default};
