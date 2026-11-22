import{r as d,j as e}from"./client-CsvIHAk3.js";const re=[{cx:115,cy:93,r:43},{cx:163,cy:111,r:39},{cx:156,cy:155,r:31},{cx:107,cy:155,r:35},{cx:72,cy:126,r:34}],H={x:80,y:100,width:80,height:65},o={y:106,w:18,h:31,left:96.5,right:127.5},m=120,J=120,se=180,K=[{x:0,y:0},{x:-1,y:.05},{x:1,y:-.05},{x:0,y:0},{x:.65,y:-.55},{x:-.7,y:.35}],w=(h,f,x)=>`translate(${h} ${f}) ${x} translate(${-h} ${-f})`,g=({offset:h,color:f,opacity:x})=>e.jsx("stop",{offset:h,style:{stopColor:`var(--ui-glw-${f})`,stopOpacity:x}});function ae({background:h=!0,color:f="orange",followPointer:x=!0,className:Q,label:V="A glowing cloud with eyes that floats, looks around and blinks"}){const ee=d.useId().replace(/[^a-zA-Z0-9_-]/g,""),t=s=>`gc${ee}-${s}`,U=d.useRef(null),_=d.useRef(null),A=d.useRef(null),R=d.useRef(null),E=d.useRef(null),O=d.useRef(null),S=d.useRef(null),v=d.useRef(null);d.useEffect(()=>{const s=U.current;if(!s)return;const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i={x:0,y:0,vx:0,vy:0},n={x:0,y:0},c={p:0,v:0};let j=!1,k=1.2,C=1.8,b=-1,L=!1,D=-1,y=0,$=0,l=0;const M=(a,r=.16)=>a<0||a>r?1:1-.9*Math.sin(a/r*Math.PI),N=()=>{const a=u?0:Math.sin(l*1.1)*5,r=u?0:Math.sin(l*1.1+Math.PI/2)*.012,p=1+r-c.p*.12,te=1-r+c.p*.1;_.current?.setAttribute("transform",`translate(0 ${a.toFixed(2)}) ${w(m,se,`scale(${te.toFixed(4)} ${p.toFixed(4)})`)}`),A.current?.setAttribute("transform",`translate(${(i.x*4).toFixed(2)} ${(i.y*2).toFixed(2)}) ${w(m,J,`rotate(${(i.x*2.5).toFixed(2)}) scale(${(1-Math.abs(i.x)*.025).toFixed(4)} 1)`)}`),R.current?.setAttribute("transform",`translate(${(i.x*12).toFixed(2)} ${(i.y*7).toFixed(2)})`),S.current?.setAttribute("transform",`translate(${(-i.x*7).toFixed(2)} ${(-i.y*3).toFixed(2)})`);const z=b<0?1:Math.min(M(l-b),L?M(l-b-.26):1),ie=M(l-D,.34),W=o.y+o.h/2;E.current?.setAttribute("transform",w(o.left+o.w/2,W,`scale(1 ${z.toFixed(3)})`)),O.current?.setAttribute("transform",w(o.right+o.w/2,W,`scale(1 ${Math.min(z,ie).toFixed(3)})`));const Z=(a+5)/10;v.current?.setAttribute("transform",w(m,210,`scale(${(1-Z*.12).toFixed(3)} 1)`)),v.current?.setAttribute("opacity",(.34-Z*.1).toFixed(3))},I=a=>{const r=Math.min(.05,(a-($||a))/1e3);if($=a,l+=r,!j&&l>k){const p=K[Math.floor(Math.random()*K.length)];n.x=p.x,n.y=p.y,k=l+1.4+Math.random()*2.2}l>C&&(b=l,L=Math.random()<.25,C=l+2.4+Math.random()*3),i.vx+=((n.x-i.x)*70-i.vx*13)*r,i.vy+=((n.y-i.y)*70-i.vy*13)*r,i.x+=i.vx*r,i.y+=i.vy*r,c.v+=(-c.p*220-c.v*9)*r,c.p+=c.v*r,N(),y=requestAnimationFrame(I)},P=()=>{y||u||($=0,y=requestAnimationFrame(I))},F=()=>{cancelAnimationFrame(y),y=0},T=new IntersectionObserver(([a])=>a.isIntersecting?P():F());T.observe(s);const Y=a=>{if(!x)return;const r=s.getBoundingClientRect();j=!0,n.x=Math.max(-1,Math.min(1,((a.clientX-r.left)/r.width-.5)*2.4)),n.y=Math.max(-1,Math.min(1,((a.clientY-r.top)/r.height-.5)*2.4))},q=()=>{j=!1,n.x=0,n.y=0,k=l+1.2},X=()=>{c.p=.9,c.v=0,D=l+.12,u&&(P(),window.setTimeout(F,1200))};return s.addEventListener("pointermove",Y),s.addEventListener("pointerleave",q),s.addEventListener("pointerdown",X),N(),()=>{F(),T.disconnect(),s.removeEventListener("pointermove",Y),s.removeEventListener("pointerleave",q),s.removeEventListener("pointerdown",X)}},[x]);const G=re.map((s,u)=>e.jsx("circle",{...s},u)),B=(s,u,i)=>{const n={x:s,y:o.y,width:o.w,height:o.h,rx:o.w/2};return e.jsxs("g",{ref:u,children:[e.jsx("rect",{...n,fill:`url(#${t("eye")})`}),e.jsx("clipPath",{id:t(`clip-${i}`),children:e.jsx("rect",{...n})}),e.jsx("rect",{...n,y:o.y+2.5,className:"ui-glw__eye-shade",fill:"none",strokeWidth:"5",filter:`url(#${t("edge")})`,clipPath:`url(#${t(`clip-${i}`)})`})]})};return e.jsxs("div",{ref:U,className:["ui-glw",Q].filter(Boolean).join(" "),"data-bg":h||void 0,"data-color":f,role:"img","aria-label":V,children:[e.jsx("style",{href:"ui-glow-cloud",precedence:"default",children:le}),e.jsxs("svg",{viewBox:"0 0 240 240","aria-hidden":"true",children:[e.jsxs("defs",{children:[e.jsxs("filter",{id:t("goo"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:[e.jsx("feGaussianBlur",{stdDeviation:"3.5"}),e.jsx("feColorMatrix",{values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -12"})]}),e.jsx("filter",{id:t("soft"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:e.jsx("feGaussianBlur",{stdDeviation:"7"})}),e.jsx("filter",{id:t("halo"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:e.jsx("feGaussianBlur",{stdDeviation:"9"})}),e.jsx("filter",{id:t("edge"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:e.jsx("feGaussianBlur",{stdDeviation:"1.6"})}),e.jsx("filter",{id:t("shade"),x:"0",y:"0",width:"240",height:"240",filterUnits:"userSpaceOnUse",children:e.jsx("feGaussianBlur",{stdDeviation:"5"})}),e.jsxs("g",{id:t("shape"),filter:`url(#${t("goo")})`,children:[G,e.jsx("rect",{...H})]}),e.jsx("mask",{id:t("mask"),maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"240",height:"240",children:e.jsx("use",{href:`#${t("shape")}`,fill:"#fff"})}),e.jsxs("linearGradient",{id:t("rim"),x1:"0",y1:"56",x2:"0",y2:"182",gradientUnits:"userSpaceOnUse",children:[e.jsx(g,{offset:0,color:"rim"}),e.jsx(g,{offset:1,color:"white"})]}),e.jsxs("radialGradient",{id:t("body"),cx:"120",cy:"108",r:"78",gradientUnits:"userSpaceOnUse",children:[e.jsx(g,{offset:0,color:"body-1"}),e.jsx(g,{offset:.6,color:"body-2"}),e.jsx(g,{offset:1,color:"body-3"})]}),e.jsxs("linearGradient",{id:t("eye"),x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx(g,{offset:0,color:"white"}),e.jsx(g,{offset:1,color:"eye"})]})]}),e.jsx("ellipse",{ref:v,className:"ui-glw__shadow",cx:m,cy:"210",rx:"54",ry:"7",filter:`url(#${t("shade")})`}),e.jsx("g",{ref:_,children:e.jsxs("g",{ref:A,children:[e.jsx("use",{href:`#${t("shape")}`,className:"ui-glw__halo",filter:`url(#${t("halo")})`}),e.jsx("use",{href:`#${t("shape")}`,className:"ui-glw__edge",filter:`url(#${t("edge")})`}),e.jsxs("g",{mask:`url(#${t("mask")})`,children:[e.jsx("rect",{width:"240",height:"240",fill:`url(#${t("rim")})`}),e.jsxs("g",{filter:`url(#${t("soft")})`,fill:`url(#${t("body")})`,transform:`translate(0 2) ${w(m,J,"scale(0.9 0.87)")}`,children:[G,e.jsx("rect",{...H})]}),e.jsx("ellipse",{ref:S,cx:"104",cy:"80",rx:"30",ry:"12",fill:"#fff",opacity:"0.32",filter:`url(#${t("shade")})`})]}),e.jsxs("g",{ref:R,children:[B(o.left,E,"l"),B(o.right,O,"r")]})]})})]})]})}const le=`
/* Palette as variables – blue, or red-orange via data-color="orange" */
.ui-glw {
  --ui-glw-sky-top: #2475ea;
  --ui-glw-sky-bottom: #4ac8f5;
  --ui-glw-sky-light: rgba(110, 225, 255, 0.55);
  --ui-glw-white: #ffffff;
  --ui-glw-rim: #f4fcff;
  --ui-glw-body-1: #06a3ff;
  --ui-glw-body-2: #18b2ff;
  --ui-glw-body-3: #58cdff;
  --ui-glw-eye: #cdeeff;
  --ui-glw-eye-shade: rgba(30, 140, 230, 0.3);
  --ui-glw-halo: rgba(30, 150, 255, 0.2);
  --ui-glw-edge: rgba(20, 120, 240, 0.4);
  --ui-glw-shadow: rgba(10, 90, 200, 0.55);
  --ui-glw-ground: rgba(10, 80, 190, 0.4);
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
.ui-glw[data-color="orange"] {
  --ui-glw-sky-top: #e94135;
  --ui-glw-sky-bottom: #fa9842;
  --ui-glw-sky-light: rgba(255, 205, 150, 0.5);
  --ui-glw-rim: #fff9f5;
  --ui-glw-body-1: #f45434;
  --ui-glw-body-2: #fa7342;
  --ui-glw-body-3: #ffb175;
  --ui-glw-eye: #ffe8db;
  --ui-glw-eye-shade: rgba(230, 90, 50, 0.3);
  --ui-glw-halo: rgba(240, 100, 60, 0.2);
  --ui-glw-edge: rgba(220, 80, 40, 0.4);
  --ui-glw-shadow: rgba(170, 50, 20, 0.5);
  --ui-glw-ground: rgba(150, 30, 10, 0.36);
}
.ui-glw svg { display: block; width: 100%; max-width: 320px; overflow: visible; }
.ui-glw__halo { fill: var(--ui-glw-halo); }
.ui-glw__edge { fill: var(--ui-glw-edge); }
.ui-glw__shadow { fill: var(--ui-glw-shadow); }
.ui-glw__eye-shade { stroke: var(--ui-glw-eye-shade); }

/* The sky: darker at the top, lighter at the bottom, a brighter patch behind the cloud – fills the whole box */
.ui-glw[data-bg] {
  --ui-glw-halo: rgba(255, 255, 255, 0.55);
  --ui-glw-edge: rgba(255, 255, 255, 0.3);
  --ui-glw-shadow: var(--ui-glw-ground);
  background:
    radial-gradient(60% 55% at 62% 42%, var(--ui-glw-sky-light), transparent 70%),
    linear-gradient(180deg, var(--ui-glw-sky-top), var(--ui-glw-sky-bottom));
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> – a deeper sky */
:where(.dark, [data-theme="dark"]) .ui-glw {
  --ui-glw-sky-top: #1659c8;
  --ui-glw-sky-bottom: #2aa6e6;
  --ui-glw-sky-light: rgba(90, 205, 255, 0.45);
  --ui-glw-ground: rgba(5, 50, 140, 0.5);
}
:where(.dark, [data-theme="dark"]) .ui-glw[data-color="orange"] {
  --ui-glw-sky-top: #bf2722;
  --ui-glw-sky-bottom: #ed701d;
  --ui-glw-sky-light: rgba(255, 175, 120, 0.42);
  --ui-glw-ground: rgba(110, 15, 5, 0.5);
}
:where(.dark, [data-theme="dark"]) .ui-glw:not([data-bg]) {
  --ui-glw-halo: rgba(255, 255, 255, 0.35);
  --ui-glw-edge: rgba(255, 255, 255, 0.25);
}
`;function ne(){return e.jsx("div",{className:"stage",children:e.jsx(ae,{name:"示例"})})}export{ne as default};
