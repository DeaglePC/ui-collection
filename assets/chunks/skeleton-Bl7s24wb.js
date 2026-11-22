import{j as r,r as l}from"./client-CsvIHAk3.js";import{m}from"./react-CLAl0IOL.js";import{u as x,r as i,k as d,l as p}from"./motion-D7BdpXrB.js";import{A as u}from"./index-DdfTS2IF.js";const h=`
@keyframes eased-shimmer { from { background-position: -170vw 0; } 70%, to { background-position: -30vw 0; } }
.eased-skeleton {
  background-color: var(--eased-surface-hover);
  background-image: linear-gradient(90deg, transparent 46%, oklch(from var(--eased-surface-hover) calc(l + 0.06) c h) 50%, transparent 54%);
  background-size: 300vw 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  animation: eased-shimmer 2000ms linear infinite;
}
@media (prefers-reduced-motion: reduce) { .eased-skeleton { animation: none; background-image: none; } }
`;function k(){const e=l.useRef(null);return l.useLayoutEffect(()=>{for(const t of e.current?.getAnimations()??[])t.startTime=0},[]),e}function b({loading:e=!0,children:t,className:a="",block:o=!1,text:n=!1}){const s=x(),c=/\brounded-/.test(a)?"":"rounded-control-xs";return t===void 0?r.jsx(u,{initial:!1,children:e&&r.jsx(f,{className:`block ${c} ${a}`,exit:{opacity:0,transition:s?i:d}},"block")}):r.jsxs("span",{"aria-busy":e||void 0,className:`relative ${o?"grid":"inline-grid"} max-w-full ${a}`,children:[r.jsx(m.span,{inert:e,className:"col-start-1 row-start-1 min-w-0",initial:!1,animate:e?{opacity:0,filter:s?"blur(0px)":"blur(4px)"}:{opacity:1,filter:"blur(0px)",transitionEnd:{filter:"none"}},transition:s?i:e?{duration:0}:p,children:t}),r.jsx(u,{initial:!1,children:e&&r.jsx(f,{className:`absolute ${n?"inset-x-0 inset-y-[0.2lh]":"inset-0"} ${c} ${a.match(/\brounded-\S+/g)?.join(" ")??""}`,exit:{opacity:0,transition:s?i:d}},"block")})]})}function f({className:e,exit:t}){const a=k();return r.jsx(m.span,{ref:a,"aria-hidden":!0,className:`eased-skeleton ${e}`,exit:t,children:r.jsx("style",{href:"eased-skeleton",precedence:"default",children:h})})}function $({lines:e=3,loading:t=!0,className:a=""}){return r.jsx("span",{"aria-hidden":!0,className:`flex flex-col gap-2 py-1 ${a}`,children:Array.from({length:e},(o,n)=>r.jsx(b,{loading:t,className:`h-3 ${n===e-1&&e>1?"w-3/5":"w-full"}`},n))})}export{b as S,$ as a};
