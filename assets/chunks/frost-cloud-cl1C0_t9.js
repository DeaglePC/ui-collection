import{r as l,j as e}from"./client-CsvIHAk3.js";const re=[{cx:115,cy:93,r:43},{cx:163,cy:111,r:39},{cx:156,cy:155,r:31},{cx:107,cy:155,r:35},{cx:72,cy:126,r:34}],H={x:80,y:100,width:80,height:65},s={y:106,w:18,h:31,left:96.5,right:127.5},p=120,J=120,se=180,K=[{x:0,y:0},{x:-1,y:.05},{x:1,y:-.05},{x:0,y:0},{x:.65,y:-.55},{x:-.7,y:.35}],g=(d,h,x)=>`translate(${d} ${h}) ${x} translate(${-d} ${-h})`,v=({offset:d,color:h,opacity:x})=>e.jsx("stop",{offset:d,style:{stopColor:`var(--ui-fc-${h})`,stopOpacity:x}});function ae({background:d=!0,color:h="blue",followPointer:x=!0,className:Q,label:V="A frosted white cloud with eyes that floats, looks around and blinks"}){const ee=l.useId().replace(/[^a-zA-Z0-9_-]/g,""),t=a=>`fc${ee}-${a}`,F=l.useRef(null),A=l.useRef(null),R=l.useRef(null),E=l.useRef(null),U=l.useRef(null),O=l.useRef(null),S=l.useRef(null),j=l.useRef(null);l.useEffect(()=>{const a=F.current;if(!a)return;const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i={x:0,y:0,vx:0,vy:0},n={x:0,y:0},f={p:0,v:0};let w=!1,k=1.2,N=1.8,m=-1,C=!1,L=-1,y=0,$=0,c=0;const _=(o,r=.16)=>o<0||o>r?1:1-.9*Math.sin(o/r*Math.PI),D=()=>{const o=u?0:Math.sin(c*1.1)*5,r=u?0:Math.sin(c*1.1+Math.PI/2)*.012,b=1+r-f.p*.12,te=1-r+f.p*.1;A.current?.setAttribute("transform",`translate(0 ${o.toFixed(2)}) ${g(p,se,`scale(${te.toFixed(4)} ${b.toFixed(4)})`)}`),R.current?.setAttribute("transform",`translate(${(i.x*4).toFixed(2)} ${(i.y*2).toFixed(2)}) ${g(p,J,`rotate(${(i.x*2.5).toFixed(2)}) scale(${(1-Math.abs(i.x)*.025).toFixed(4)} 1)`)}`),E.current?.setAttribute("transform",`translate(${(i.x*12).toFixed(2)} ${(i.y*7).toFixed(2)})`),S.current?.setAttribute("transform",`translate(${(-i.x*7).toFixed(2)} ${(-i.y*3).toFixed(2)})`);const z=m<0?1:Math.min(_(c-m),C?_(c-m-.26):1),ie=_(c-L,.34),W=s.y+s.h/2;U.current?.setAttribute("transform",g(s.left+s.w/2,W,`scale(1 ${z.toFixed(3)})`)),O.current?.setAttribute("transform",g(s.right+s.w/2,W,`scale(1 ${Math.min(z,ie).toFixed(3)})`));const Z=(o+5)/10;j.current?.setAttribute("transform",g(p,210,`scale(${(1-Z*.12).toFixed(3)} 1)`)),j.current?.setAttribute("opacity",(.34-Z*.1).toFixed(3))},I=o=>{const r=Math.min(.05,(o-($||o))/1e3);if($=o,c+=r,!w&&c>k){const b=K[Math.floor(Math.random()*K.length)];n.x=b.x,n.y=b.y,k=c+1.4+Math.random()*2.2}c>N&&(m=c,C=Math.random()<.25,N=c+2.4+Math.random()*3),i.vx+=((n.x-i.x)*70-i.vx*13)*r,i.vy+=((n.y-i.y)*70-i.vy*13)*r,i.x+=i.vx*r,i.y+=i.vy*r,f.v+=(-f.p*220-f.v*9)*r,f.p+=f.v*r,D(),y=requestAnimationFrame(I)},P=()=>{y||u||($=0,y=requestAnimationFrame(I))},M=()=>{cancelAnimationFrame(y),y=0},T=new IntersectionObserver(([o])=>o.isIntersecting?P():M());T.observe(a);const Y=o=>{if(!x)return;const r=a.getBoundingClientRect();w=!0,n.x=Math.max(-1,Math.min(1,((o.clientX-r.left)/r.width-.5)*2.4)),n.y=Math.max(-1,Math.min(1,((o.clientY-r.top)/r.height-.5)*2.4))},q=()=>{w=!1,n.x=0,n.y=0,k=c+1.2},X=()=>{f.p=.9,f.v=0,L=c+.12,u&&(P(),window.setTimeout(M,1200))};return a.addEventListener("pointermove",Y),a.addEventListener("pointerleave",q),a.addEventListener("pointerdown",X),D(),()=>{M(),T.disconnect(),a.removeEventListener("pointermove",Y),a.removeEventListener("pointerleave",q),a.removeEventListener("pointerdown",X)}},[x]);const B=re.map((a,u)=>e.jsx("circle",{...a},u)),G=(a,u,i)=>{const n={x:a,y:s.y,width:s.w,height:s.h,rx:s.w/2};return e.jsxs("g",{ref:u,children:[e.jsx("rect",{...n,x:a-1.5,y:s.y-1,width:s.w+3,height:s.h+3,rx:s.w/2+1.5,className:"ui-fc__eye-drop",filter:`url(#${t("edge")})`}),e.jsx("rect",{...n,fill:`url(#${t("hole")})`}),e.jsx("clipPath",{id:t(`clip-${i}`),children:e.jsx("rect",{...n})}),e.jsx("rect",{...n,y:s.y+2.5,className:"ui-fc__eye-shade",fill:"none",strokeWidth:"5",filter:`url(#${t("edge")})`,clipPath:`url(#${t(`clip-${i}`)})`})]})};return e.jsxs("div",{ref:F,className:["ui-fc",Q].filter(Boolean).join(" "),"data-bg":d||void 0,"data-color":h,role:"img","aria-label":V,children:[e.jsx("style",{href:"ui-frost-cloud",precedence:"default",children:oe}),e.jsxs("svg",{viewBox:"0 0 240 240","aria-hidden":"true",children:[e.jsxs("defs",{children:[e.jsxs("filter",{id:t("goo"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:[e.jsx("feGaussianBlur",{stdDeviation:"3.5"}),e.jsx("feColorMatrix",{values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -12"})]}),e.jsx("filter",{id:t("soft"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:e.jsx("feGaussianBlur",{stdDeviation:"12"})}),e.jsx("filter",{id:t("halo"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:e.jsx("feGaussianBlur",{stdDeviation:"9"})}),e.jsx("filter",{id:t("edge"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:e.jsx("feGaussianBlur",{stdDeviation:"1.6"})}),e.jsx("filter",{id:t("shade"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:e.jsx("feGaussianBlur",{stdDeviation:"5"})}),e.jsxs("g",{id:t("shape"),filter:`url(#${t("goo")})`,children:[B,e.jsx("rect",{...H})]}),e.jsx("mask",{id:t("mask"),maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"240",height:"240",children:e.jsx("use",{href:`#${t("shape")}`,fill:"#fff"})}),e.jsxs("linearGradient",{id:t("frost"),x1:"0",y1:"50",x2:"0",y2:"192",gradientUnits:"userSpaceOnUse",children:[e.jsx(v,{offset:0,color:"white"}),e.jsx(v,{offset:1,color:"frost",opacity:.97})]}),e.jsxs("linearGradient",{id:t("hole"),x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx(v,{offset:0,color:"hole-1"}),e.jsx(v,{offset:1,color:"hole-2"})]})]}),e.jsx("ellipse",{ref:j,className:"ui-fc__shadow",cx:p,cy:"210",rx:"54",ry:"7",filter:`url(#${t("shade")})`}),e.jsx("g",{ref:A,children:e.jsxs("g",{ref:R,children:[e.jsx("use",{href:`#${t("shape")}`,className:"ui-fc__halo",filter:`url(#${t("halo")})`}),e.jsx("use",{href:`#${t("shape")}`,className:"ui-fc__edge",filter:`url(#${t("edge")})`}),e.jsxs("g",{mask:`url(#${t("mask")})`,children:[e.jsx("rect",{width:"240",height:"240",fill:`url(#${t("frost")})`}),e.jsxs("g",{filter:`url(#${t("soft")})`,className:"ui-fc__tint",transform:`translate(-6 18) ${g(p,J,"scale(0.84 0.78)")}`,children:[B,e.jsx("rect",{...H})]}),e.jsx("ellipse",{ref:S,cx:"108",cy:"78",rx:"34",ry:"14",fill:"#fff",opacity:"0.75",filter:`url(#${t("shade")})`})]}),e.jsxs("g",{ref:E,children:[G(s.left,U,"l"),G(s.right,O,"r")]})]})})]})]})}const oe=`
/* Palette as variables – blue, or red-orange via data-color="orange" */
.ui-fc {
  --ui-fc-sky-top: #2475ea;
  --ui-fc-sky-bottom: #4ac8f5;
  --ui-fc-sky-light: rgba(110, 225, 255, 0.55);
  --ui-fc-white: #ffffff;
  --ui-fc-frost: #eef8ff;
  --ui-fc-tint: rgba(70, 165, 235, 0.2);
  --ui-fc-hole-1: #3aaef2;
  --ui-fc-hole-2: #62cdfa;
  --ui-fc-eye-drop: rgba(40, 130, 210, 0.1);
  --ui-fc-eye-shade: rgba(10, 90, 190, 0.24);
  --ui-fc-halo: rgba(30, 150, 255, 0.2);
  --ui-fc-edge: rgba(20, 120, 240, 0.4);
  --ui-fc-shadow: rgba(10, 90, 200, 0.55);
  --ui-fc-ground: rgba(10, 80, 190, 0.4);
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  aspect-ratio: 1;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}
.ui-fc[data-color="orange"] {
  --ui-fc-sky-top: #e94135;
  --ui-fc-sky-bottom: #fa9842;
  --ui-fc-sky-light: rgba(255, 205, 150, 0.5);
  --ui-fc-frost: #fff5f0;
  --ui-fc-tint: rgba(235, 110, 70, 0.2);
  --ui-fc-hole-1: #f05f42;
  --ui-fc-hole-2: #fba05b;
  --ui-fc-eye-drop: rgba(200, 70, 40, 0.1);
  --ui-fc-eye-shade: rgba(170, 40, 20, 0.24);
  --ui-fc-halo: rgba(240, 100, 60, 0.2);
  --ui-fc-edge: rgba(220, 80, 40, 0.4);
  --ui-fc-shadow: rgba(170, 50, 20, 0.5);
  --ui-fc-ground: rgba(150, 30, 10, 0.36);
}
.ui-fc svg { display: block; width: 100%; max-width: 320px; overflow: visible; }
.ui-fc__halo { fill: var(--ui-fc-halo); }
.ui-fc__edge { fill: var(--ui-fc-edge); }
.ui-fc__shadow { fill: var(--ui-fc-shadow); }
.ui-fc__tint { fill: var(--ui-fc-tint); }
.ui-fc__eye-drop { fill: var(--ui-fc-eye-drop); }
.ui-fc__eye-shade { stroke: var(--ui-fc-eye-shade); }

/* The sky: darker at the top, lighter at the bottom, a brighter patch behind the cloud – fills the whole box */
.ui-fc[data-bg] {
  --ui-fc-halo: rgba(255, 255, 255, 0.75);
  --ui-fc-edge: rgba(255, 255, 255, 0.5);
  --ui-fc-shadow: var(--ui-fc-ground);
  background:
    radial-gradient(60% 55% at 62% 42%, var(--ui-fc-sky-light), transparent 70%),
    linear-gradient(180deg, var(--ui-fc-sky-top), var(--ui-fc-sky-bottom));
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> – a deeper sky */
:where(.dark, [data-theme="dark"]) .ui-fc {
  --ui-fc-sky-top: #1659c8;
  --ui-fc-sky-bottom: #2aa6e6;
  --ui-fc-sky-light: rgba(90, 205, 255, 0.45);
  --ui-fc-ground: rgba(5, 50, 140, 0.5);
}
:where(.dark, [data-theme="dark"]) .ui-fc[data-color="orange"] {
  --ui-fc-sky-top: #bf2722;
  --ui-fc-sky-bottom: #ed701d;
  --ui-fc-sky-light: rgba(255, 175, 120, 0.42);
  --ui-fc-ground: rgba(110, 15, 5, 0.5);
}
:where(.dark, [data-theme="dark"]) .ui-fc:not([data-bg]) {
  --ui-fc-halo: rgba(255, 255, 255, 0.35);
  --ui-fc-edge: rgba(255, 255, 255, 0.25);
}
`;function ce(){return e.jsx("div",{className:"stage",children:e.jsx(ae,{name:"示例"})})}export{ce as default};
