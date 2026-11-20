import{r as h,j as o}from"./client-CsvIHAk3.js";const L=1e3,M=40,_=M/2,C=4,m=26,g=600,p=260,S=380,T=5,Y=3.6,R=.16,F=1.1,G=1.6,V=1.15,J=.62,U=.5;function q(i){let n=i|0;return()=>{n=n+1831565813|0;let s=Math.imul(n^n>>>15,1|n);return s=s+Math.imul(s^s>>>7,61|s)^s,((s^s>>>14)>>>0)/4294967296}}const w=i=>Math.max(2,Math.min(M-2,i)),l=i=>i.toFixed(1);function K(i){const n=q(i);let s=0;const e=[];for(let r=0;r<m;r++)s+=(n()-.5)*2.4,s=Math.max(-C,Math.min(C,s)),e.push({x:r/(m-1)*L,y:_+s});const b=`M ${e.map(r=>`${l(r.x)} ${l(r.y)}`).join(" L ")}`,y=3+Math.floor(n()*3),u=3,f=(m-4-u)/y,t=[];for(let r=0;r<y;r++){const d=u+f*(r+.5)+(n()-.5)*f*.5,z=Math.max(1,Math.min(m-2,Math.round(d))),k=e[z],A=e[z-1],N=e[z+1],W=Math.atan2(N.y-A.y,N.x-A.x),D=n()<.5?-1:1,I=W+D*(Math.PI/2)+(n()-.5)*.5,v=6+n()*5,x={x:k.x+Math.cos(I)*v,y:w(k.y+Math.sin(I)*v)},O=I+(n()-.5)*.7,j=4+n()*5,E={x:x.x+Math.cos(O)*j,y:w(x.y+Math.sin(O)*j)},H=`M ${l(k.x)} ${l(k.y)} L ${l(x.x)} ${l(x.y)} L ${l(E.x)} ${l(E.y)}`,B=z/(m-1),P=Math.round(B*g+n()*40);t.push({d:H,delay:P,length:v+j})}let a=0;t.forEach((r,d)=>{r.length>t[a].length&&(a=d)});let c=-1;return t.forEach((r,d)=>{d!==a&&(c===-1||r.length>t[c].length)&&(c=d)}),{mainD:b,branches:t,longestIdx:a,secondIdx:c,tip:e[e.length-1]}}function Q({seed:i,className:n=""}){const s=h.useRef(null),[e,b]=h.useState(null),[y,u]=h.useState(!1),$=h.useId().replace(/[:]/g,"");h.useEffect(()=>{b(K(i??Math.floor(Math.random()*2**31)))},[i]),h.useEffect(()=>{const t=s.current;if(!t)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){u(!0);return}const a=new IntersectionObserver(c=>{c.some(r=>r.isIntersecting)&&(u(!0),a.disconnect())},{threshold:.2});return a.observe(t),()=>a.disconnect()},[]);const f=`M 0 ${_} L ${L} ${_}`;return o.jsxs("div",{ref:s,role:"separator","aria-orientation":"horizontal","data-craze-rule":!0,"data-armed":y?"true":void 0,className:`ns-craze-rule relative w-full ${n}`,style:{height:M},children:[o.jsx("style",{children:`
.ns-craze-rule .ns-craze-main{
  stroke-dasharray:1;stroke-dashoffset:1;
  transition:stroke-dashoffset ${g}ms cubic-bezier(0.16,1,0.3,1);
}
.ns-craze-rule[data-armed="true"] .ns-craze-main{stroke-dashoffset:0}
.ns-craze-rule .ns-craze-branch{
  stroke-dasharray:1;stroke-dashoffset:1;
  transition:stroke-dashoffset ${p}ms cubic-bezier(0.16,1,0.3,1);
}
.ns-craze-rule[data-armed="true"] .ns-craze-branch{stroke-dashoffset:0}
.ns-craze-rule[data-armed="true"] .ns-craze-branch-longest{
  animation:ns-craze-idle-branch 5s ease-in-out infinite;
}
.ns-craze-rule[data-armed="true"] .ns-craze-branch-second{
  animation:ns-craze-idle-branch-second 7s ease-in-out infinite;
}
.ns-craze-rule[data-armed="true"] .ns-craze-ink{
  animation:ns-craze-idle-breathe 6s ease-in-out infinite;
  animation-delay:${g}ms;
}
.ns-craze-rule .ns-craze-tip{opacity:0}
.ns-craze-rule[data-armed="true"] .ns-craze-tip{
  animation:ns-craze-tip-flash ${S}ms ease-out both;
  animation-delay:${g}ms;
}
@keyframes ns-craze-idle-branch{0%,100%{stroke-dashoffset:0}50%{stroke-dashoffset:-0.55}}
@keyframes ns-craze-idle-branch-second{0%,100%{stroke-dashoffset:0}50%{stroke-dashoffset:-0.4}}
/* Group-level opacity, not stroke-opacity: the halo/core paths already carry
   their own strokeOpacity, and an explicit stroke-opacity on a child is not
   inherited from its ancestor — opacity is a compositing effect, so it
   still dims both layers together. */
@keyframes ns-craze-idle-breathe{0%,100%{opacity:0.75}50%{opacity:1}}
@keyframes ns-craze-tip-flash{0%{opacity:0}18%{opacity:1}100%{opacity:0}}
@media (prefers-reduced-motion: reduce){
  .ns-craze-rule .ns-craze-main,
  .ns-craze-rule .ns-craze-branch{transition:none!important;stroke-dashoffset:0!important}
  .ns-craze-rule .ns-craze-branch-longest,
  .ns-craze-rule .ns-craze-branch-second,
  .ns-craze-rule .ns-craze-ink{animation:none!important;opacity:1!important}
  .ns-craze-rule .ns-craze-tip{animation:none!important;opacity:0!important}
}
`}),o.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${L} ${M}`,preserveAspectRatio:"none","aria-hidden":!0,className:"block overflow-visible",children:[o.jsx("defs",{children:o.jsx("filter",{id:`${$}-blur`,x:"-10%",y:"-300%",width:"120%",height:"700%",children:o.jsx("feGaussianBlur",{stdDeviation:F})})}),o.jsxs("g",{className:"ns-craze-ink",children:[o.jsxs("g",{filter:`url(#${$}-blur)`,children:[o.jsx("path",{d:e?.mainD??f,className:"ns-craze-main",fill:"none",stroke:"var(--foreground)",strokeOpacity:R,strokeWidth:T,strokeLinecap:"round",strokeLinejoin:"round",pathLength:1,vectorEffect:"non-scaling-stroke"}),e?.branches.map((t,a)=>{const c=a===e.longestIdx?"ns-craze-branch-longest":a===e.secondIdx?"ns-craze-branch-second":"";return o.jsx("path",{d:t.d,className:`ns-craze-branch ${c}`,style:{transitionDelay:`${t.delay}ms`,animationDelay:c==="ns-craze-branch-second"?`${t.delay+p+700}ms`:`${t.delay+p}ms`},fill:"none",stroke:"var(--foreground)",strokeOpacity:R,strokeWidth:Y,strokeLinecap:"round",strokeLinejoin:"round",pathLength:1,vectorEffect:"non-scaling-stroke"},`halo-${a}`)})]}),o.jsx("path",{d:e?.mainD??f,className:"ns-craze-main",fill:"none",stroke:"var(--foreground)",strokeOpacity:J,strokeWidth:G,strokeLinecap:"round",strokeLinejoin:"round",pathLength:1,vectorEffect:"non-scaling-stroke"}),e?.branches.map((t,a)=>{const c=a===e.longestIdx?"ns-craze-branch-longest":a===e.secondIdx?"ns-craze-branch-second":"";return o.jsx("path",{d:t.d,className:`ns-craze-branch ${c}`,style:{transitionDelay:`${t.delay}ms`,animationDelay:c==="ns-craze-branch-second"?`${t.delay+p+700}ms`:`${t.delay+p}ms`},fill:"none",stroke:"var(--foreground)",strokeOpacity:U,strokeWidth:V,strokeLinecap:"round",strokeLinejoin:"round",pathLength:1,vectorEffect:"non-scaling-stroke"},a)})]}),e&&o.jsx("circle",{className:"ns-craze-tip",cx:e.tip.x,cy:e.tip.y,r:2.4,fill:"var(--foreground)"})]})]})}function Z(){return o.jsx("div",{className:"ns-stage",children:o.jsx(Q,{seed:42})})}export{Z as default};
