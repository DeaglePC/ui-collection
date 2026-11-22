import{r as c,j as e}from"./client-CsvIHAk3.js";const b=[{kind:"heading",width:.55},{kind:"text",lines:3}],k=`
.ns-dev-bar{position:relative;overflow:hidden;background:var(--border)}
.ns-dev-bar::after{
  content:"";position:absolute;inset:0;
  background-image:linear-gradient(100deg,
    transparent 22%,
    color-mix(in oklab, var(--background) 55%, transparent) 39%,
    color-mix(in oklab, var(--ns-muted) 24%, transparent) 52%,
    transparent 74%);
  transform:translateX(-100%);
  /* the delay is a custom property, not animation-delay on the host element:
     animation-delay does not inherit into ::after, custom properties do */
  animation:ns-dev-sweep 2600ms cubic-bezier(.42,0,.2,1) var(--ns-dev-delay,0ms) infinite;
}
@keyframes ns-dev-sweep{0%{transform:translateX(-100%)}64%,100%{transform:translateX(100%)}}

/* Alpha masks only — the gradients below are opacity ramps, not ink. */
.ns-dev-content{
  -webkit-mask-image:linear-gradient(to bottom,rgb(0 0 0/1) 0 33%,rgb(0 0 0/0) 47% 100%);
  mask-image:linear-gradient(to bottom,rgb(0 0 0/1) 0 33%,rgb(0 0 0/0) 47% 100%);
  -webkit-mask-size:100% 300%;mask-size:100% 300%;
  -webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;
  animation:ns-dev-resolve var(--ns-dev-ms) cubic-bezier(.22,1,.36,1) both;
}
@keyframes ns-dev-resolve{
  from{-webkit-mask-position:0 100%;mask-position:0 100%;filter:blur(7px) contrast(.7)}
  to{-webkit-mask-position:0 0%;mask-position:0 0%;filter:blur(0) contrast(1)}
}
.ns-dev-ghost{
  transform-origin:top center;
  -webkit-mask-image:linear-gradient(to bottom,rgb(0 0 0/0) 0 33%,rgb(0 0 0/1) 47% 100%);
  mask-image:linear-gradient(to bottom,rgb(0 0 0/0) 0 33%,rgb(0 0 0/1) 47% 100%);
  -webkit-mask-size:100% 300%;mask-size:100% 300%;
  -webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;
  animation:ns-dev-dissolve var(--ns-dev-ms) cubic-bezier(.22,1,.36,1) both;
}
@keyframes ns-dev-dissolve{
  from{-webkit-mask-position:0 100%;mask-position:0 100%;filter:blur(0);transform:scaleY(1)}
  to{-webkit-mask-position:0 0%;mask-position:0 0%;filter:blur(5px);transform:scaleY(.975)}
}
@media (prefers-reduced-motion: reduce){
  .ns-dev-bar::after{animation:none;background-image:none}
  .ns-dev-content,.ns-dev-ghost{animation:none;-webkit-mask-image:none;mask-image:none;filter:none}
}
`;function f(i,o){return i.map((n,s)=>{const d=(t,a,u)=>e.jsx("div",{className:`ns-dev-bar ${u}`,style:{width:`${t*100}%`,height:a,"--ns-dev-delay":`${-140*o.n++}ms`}});switch(n.kind){case"heading":return e.jsx("div",{children:d(n.width??.55,20,"rounded-sm")},s);case"text":{const t=Math.max(1,n.lines??3),a=n.width??1;return e.jsx("div",{className:"flex flex-col gap-3",children:Array.from({length:t},(u,r)=>e.jsx("div",{children:d(r===t-1?a*.62:a,12,"rounded-full")},r))},s)}case"circle":{const t=n.size??40;return e.jsx("div",{className:"ns-dev-bar shrink-0 rounded-full",style:{width:t,height:t,"--ns-dev-delay":`${-140*o.n++}ms`}},s)}case"box":return e.jsx("div",{children:d(n.width??1,n.height??120,"rounded-md")},s);case"row":return e.jsx("div",{className:"flex w-full",style:{gap:n.gap??12,alignItems:n.align==="center"?"center":"flex-start"},children:n.items.map((t,a)=>e.jsx("div",{className:t.kind==="circle"?"shrink-0":"min-w-0 flex-1",children:f([t],o)},a))},s)}})}function w({loading:i,children:o,blocks:n=b,developMs:s=900,loadingLabel:d="Loading",className:t=""}){const[a,u]=c.useState(!1),[r,m]=c.useState(i?"loading":"ready"),v=c.useRef(i);c.useEffect(()=>{const l=window.matchMedia("(prefers-reduced-motion: reduce)"),g=()=>u(l.matches);return g(),l.addEventListener("change",g),()=>l.removeEventListener("change",g)},[]),c.useEffect(()=>{if(i){v.current=!0,m("loading");return}if(!v.current){m("ready");return}if(v.current=!1,a){m("ready");return}m("developing");const l=window.setTimeout(()=>m("ready"),s);return()=>window.clearTimeout(l)},[i,s,a]);const p=r==="developing",h={"--ns-dev-ms":`${s}ms`};return e.jsxs("div",{className:`relative ${t}`,style:h,"aria-busy":r!=="ready",children:[e.jsx("style",{children:k}),r!=="loading"&&e.jsx("div",{className:p?"ns-dev-content":void 0,children:o}),r!=="ready"&&e.jsx("div",{"aria-hidden":!0,className:["flex w-full flex-col gap-4",p?"ns-dev-ghost pointer-events-none absolute inset-0":""].join(" "),children:f(n,{n:0})}),r==="loading"&&e.jsx("span",{role:"status",className:"sr-only",children:d})]})}function y(){return e.jsx("div",{className:"ns-stage",children:e.jsx(w,{loading:!0,children:"示例"})})}export{y as default};
