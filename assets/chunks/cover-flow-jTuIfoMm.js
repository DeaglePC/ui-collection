import{r as n,j as r}from"./client-CsvIHAk3.js";const fe=7,q=110;function le({items:x,index:b,defaultIndex:O,onIndexChange:D,onSelect:j,itemWidth:w=280,itemHeight:U=280,angle:L=50,reflection:X=!0,caption:S=!0,renderCaption:V,controls:$=!0,ticks:I=!0,sound:B=!1,"aria-label":J="Cover flow",className:Q}){const p=x.length,m=Math.max(p-1,0),N=(e=>Math.min(Math.max(e,0),m))(b??O??Math.floor(m/2)),[h,Z]=n.useState(N),[W,ee]=n.useState(1),[k,te]=n.useState(1),z=n.useRef(null),K=n.useRef([]),o=n.useRef({pos:N,target:N,vel:0,raf:0,last:0,active:N}),d=n.useRef({angle:L,scale:k,itemWidth:w,onIndexChange:D,sound:B,count:p});d.current={angle:L,scale:k,itemWidth:w,onIndexChange:D,sound:B,count:p};const T=n.useRef(!1);n.useEffect(()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)");T.current=e.matches;const t=()=>T.current=e.matches;return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]);const _=n.useRef(null),ae=()=>{const e=_.current;if(!e||e.state!=="running")return;const t=e.currentTime,a=e.createOscillator(),i=e.createGain();a.type="triangle",a.frequency.setValueAtTime(2200,t),a.frequency.exponentialRampToValueAtTime(900,t+.03),i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.05,t+.004),i.gain.exponentialRampToValueAtTime(1e-4,t+.045),a.connect(i).connect(e.destination),a.start(t),a.stop(t+.05)},F=()=>{if(!d.current.sound)return;const e=window.AudioContext??window.webkitAudioContext;!_.current&&e&&(_.current=new e),_.current?.state==="suspended"&&_.current.resume()};n.useEffect(()=>()=>{_.current?.close()},[]);const f=n.useCallback(()=>{const{pos:e}=o.current,{angle:t,scale:a,itemWidth:i}=d.current,c=i*.78*a,s=i*.27*a,R=i*.7*a;K.current.forEach((g,se)=>{if(!g)return;const C=se-e,y=Math.abs(C);if(y>fe+1){g.style.visibility="hidden";return}const M=Math.min(y,1),H=Math.sign(C),ue=H*(M*c+Math.max(y-1,0)*s);g.style.visibility="";const de=1-M*.08-Math.min(Math.max(y-1,0),4)*.015;g.style.transform=`translate3d(${ue}px, 0, ${-M*R}px) rotateY(${-H*M*t}deg) scale(${de.toFixed(4)})`,g.style.zIndex=String(1e3-Math.round(y*10)),g.style.setProperty("--ui-cf-t",M.toFixed(3)),g.style.setProperty("--ui-cf-d",Math.min(Math.max(C,-1.5),1.5).toFixed(3)),g.dataset.side=C<0?"left":"right"});const l=Math.round(Math.min(Math.max(e,0),d.current.count-1));l!==o.current.active&&(ee(l>o.current.active?1:-1),o.current.active=l,Z(l),d.current.onIndexChange?.(l),ae())},[]),A=n.useCallback(()=>{const e=o.current;if(e.raf)return;e.last=performance.now();const t=a=>{const i=Math.min(a-e.last,32)/1e3;e.last=a;const c=190,s=2*Math.sqrt(c)*.92;if(e.vel+=(c*(e.target-e.pos)-s*e.vel)*i,e.pos+=e.vel*i,Math.abs(e.target-e.pos)<6e-4&&Math.abs(e.vel)<.002){e.pos=e.target,e.vel=0,e.raf=0,f();return}f(),e.raf=requestAnimationFrame(t)};e.raf=requestAnimationFrame(t)},[f]),u=n.useCallback(e=>{const t=o.current;t.target=Math.min(Math.max(Math.round(e),0),d.current.count-1),T.current?(t.pos=t.target,t.vel=0,f()):A()},[f,A]);n.useEffect(()=>()=>cancelAnimationFrame(o.current.raf),[]),n.useEffect(()=>{b!==void 0&&b!==Math.round(o.current.target)&&u(b)},[b,u]),n.useEffect(()=>{o.current.target>m?u(m):f()},[m,u,f]),n.useLayoutEffect(()=>{const e=z.current;if(!e)return;const t=()=>te(Math.min(1,Math.max(.5,e.clientWidth/(w*3.2))));t();const a=new ResizeObserver(t);return a.observe(e),()=>a.disconnect()},[w]),n.useLayoutEffect(f);const P=n.useRef(0);n.useEffect(()=>{const e=z.current;if(!e)return;const t=a=>{const i=a.shiftKey&&!a.deltaX?a.deltaY:a.deltaX;if(Math.abs(i)<=Math.abs(a.deltaY)&&!a.shiftKey)return;a.preventDefault(),F();const c=o.current,s=q*d.current.scale*1.4;c.target=Math.min(Math.max(c.target+i/s,-.35),d.current.count-1+.35),A(),window.clearTimeout(P.current),P.current=window.setTimeout(()=>u(c.target+Math.sign(i)*.3),110)};return e.addEventListener("wheel",t,{passive:!1}),()=>{e.removeEventListener("wheel",t),window.clearTimeout(P.current)}},[A,u]);const E=n.useRef(null),re=e=>{if(e.button!==0)return;F();const t=e.target.closest("[data-cf-index]");E.current={id:e.pointerId,x:e.clientX,from:o.current.pos,moved:!1,hit:t?Number(t.dataset.cfIndex):null,samples:[{x:e.clientX,t:performance.now()}]}},ie=e=>{const t=E.current;if(!t||t.id!==e.pointerId)return;const a=e.clientX-t.x;if(!t.moved){if(Math.abs(a)<6)return;t.moved=!0,e.currentTarget.setPointerCapture(e.pointerId),e.currentTarget.dataset.dragging=""}const i=o.current;cancelAnimationFrame(i.raf),i.raf=0;let c=t.from-a/(q*d.current.scale);const s=d.current.count-1;c<0&&(c=c*.3),c>s&&(c=s+(c-s)*.3),i.pos=i.target=c,i.vel=0,t.samples.push({x:e.clientX,t:performance.now()}),t.samples.length>6&&t.samples.shift(),f()},Y=e=>{const t=E.current;if(!t||t.id!==e.pointerId)return;if(E.current=null,delete e.currentTarget.dataset.dragging,!t.moved){if(t.hit===null)return;t.hit===Math.round(o.current.target)?j?.(x[t.hit],t.hit):u(t.hit);return}const a=t.samples[0],i=t.samples[t.samples.length-1],c=Math.max(i.t-a.t,1),s=-((i.x-a.x)/c)*1e3/(q*d.current.scale),R=o.current;R.vel=T.current?0:s;let l=Math.round(R.pos+s*.18);Math.abs(s)>.8&&l===Math.round(t.from)&&(l+=Math.sign(s)),u(l)},ne=e=>{const t=Math.round(o.current.target),a={ArrowLeft:t-1,ArrowRight:t+1,Home:0,End:m};e.key in a?(e.preventDefault(),F(),u(a[e.key])):(e.key==="Enter"||e.key===" ")&&j&&e.target===e.currentTarget&&(e.preventDefault(),j(x[t],t))},v=x[h],ce=Math.round(w*k),oe=Math.round(U*k),G=(e,t=!1)=>r.jsx("div",{className:"ui-cf__media",children:e.cover??(e.image?r.jsx("img",{src:e.image,alt:t?"":e.alt??e.title??"",draggable:!1,loading:"lazy",decoding:"async",onError:a=>a.currentTarget.style.visibility="hidden"}):null)});return r.jsxs("div",{className:["ui-cf",Q].filter(Boolean).join(" "),style:{"--ui-cf-w":`${ce}px`,"--ui-cf-h":`${oe}px`},"data-reflection":X||void 0,children:[r.jsx("style",{href:"ui-cover-flow",precedence:"default",children:pe}),r.jsx("div",{ref:z,className:"ui-cf__viewport",role:"region","aria-roledescription":"carousel","aria-label":J,tabIndex:0,onKeyDown:ne,onPointerDown:re,onPointerMove:ie,onPointerUp:Y,onPointerCancel:Y,"data-selectable":j?"":void 0,children:r.jsx("div",{className:"ui-cf__stage",style:{perspective:`${Math.round(1e3*k)}px`},children:x.map((e,t)=>r.jsxs("div",{ref:a=>{K.current[t]=a},className:"ui-cf__item","data-cf-index":t,"data-active":t===h||void 0,role:"group","aria-roledescription":"slide","aria-label":`${t+1} of ${p}${e.title?`: ${e.title}`:""}`,"aria-hidden":t!==h||void 0,children:[r.jsx("div",{className:"ui-cf__ground","aria-hidden":"true"}),r.jsx("div",{className:"ui-cf__card",children:G(e)}),X&&r.jsx("div",{className:"ui-cf__reflection","aria-hidden":"true",inert:!0,children:r.jsx("div",{className:"ui-cf__card",children:G(e,!0)})})]},e.id))})}),(S||$||I)&&r.jsxs("div",{className:"ui-cf__footer",children:[r.jsxs("div",{className:"ui-cf__row",children:[$&&r.jsx("button",{type:"button",className:"ui-cf__nav","aria-label":"Previous",disabled:h===0,onClick:()=>u(Math.round(o.current.target)-1),children:r.jsx("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:r.jsx("path",{d:"M10 3.5 5.5 8l4.5 4.5"})})}),S&&r.jsx("div",{className:"ui-cf__caption","aria-live":"polite",children:r.jsx("div",{className:"ui-cf__caption-in","data-dir":W>0?"next":"prev",children:v&&(V?V(v,h):r.jsxs(r.Fragment,{children:[v.title&&r.jsx("div",{className:"ui-cf__title",children:v.title}),v.subtitle&&r.jsx("div",{className:"ui-cf__subtitle",children:v.subtitle})]}))},v?.id)}),$&&r.jsx("button",{type:"button",className:"ui-cf__nav","aria-label":"Next",disabled:h===m,onClick:()=>u(Math.round(o.current.target)+1),children:r.jsx("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:r.jsx("path",{d:"M6 3.5 10.5 8 6 12.5"})})})]}),I&&p>15&&r.jsxs("div",{className:"ui-cf__counter","aria-hidden":"true",children:[h+1," / ",p]}),I&&p>1&&p<=15&&r.jsx("div",{className:"ui-cf__ticks",children:x.map((e,t)=>r.jsx("button",{type:"button",tabIndex:-1,className:"ui-cf__tick","aria-label":`Show ${e.title??`cover ${t+1}`}`,"aria-current":t===h||void 0,onClick:()=>u(t)},e.id))})]})]})}const pe=`
.ui-cf {
  --ui-cf-ink: #171717;
  --ui-cf-muted: #8a8a8a;
  --ui-cf-card: #f1f1f1;
  --ui-cf-edge: rgba(0, 0, 0, 0.08);
  --ui-cf-dim: rgba(255, 255, 255, 0.24);
  --ui-cf-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 10px 20px -12px rgba(0, 0, 0, 0.18);
  --ui-cf-reflect: 0.22;
  --ui-cf-ground: rgba(0, 0, 0, 0.16);
  --ui-cf-tick: rgba(0, 0, 0, 0.16);
  --ui-cf-nav: #ffffff;
  --ui-cf-nav-line: #e7e7e7;
  --ui-cf-focus: rgba(23, 23, 23, 0.25);
  --ui-cf-ease: cubic-bezier(0.22, 1, 0.36, 1);
  display: grid;
  gap: 4px;
  width: 100%;
  min-width: 0;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* Soft fade on both sides, so the stacks run out instead of being cut off */
.ui-cf__viewport {
  position: relative;
  overflow: hidden;
  padding: calc(var(--ui-cf-h) * 0.08) 0 0;
  height: calc(var(--ui-cf-h) * 1.08);
  border-radius: 12px;
  outline: none;
  cursor: grab;
  touch-action: pan-y;
  user-select: none;
  -webkit-user-select: none;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent);
}
.ui-cf[data-reflection] .ui-cf__viewport { height: calc(var(--ui-cf-h) * 1.4); }
.ui-cf__viewport[data-dragging] { cursor: grabbing; }
.ui-cf__viewport:focus-visible .ui-cf__item[data-active] .ui-cf__card {
  box-shadow: var(--ui-cf-shadow), 0 0 0 3px var(--ui-cf-focus);
}

.ui-cf__stage {
  position: relative;
  height: var(--ui-cf-h);
  transform-style: preserve-3d;
}
.ui-cf__item {
  position: absolute;
  top: 0;
  left: 50%;
  width: var(--ui-cf-w);
  height: var(--ui-cf-h);
  margin-left: calc(var(--ui-cf-w) / -2);
  transform-style: preserve-3d;
  will-change: transform;
}
.ui-cf__viewport[data-selectable] .ui-cf__item[data-active] { cursor: pointer; }
.ui-cf__card {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  background: var(--ui-cf-card);
  box-shadow: var(--ui-cf-shadow);
}
.ui-cf__media {
  position: absolute;
  inset: 0 -8%;
  transform: translateX(calc(var(--ui-cf-d, 0) * -5%));
}
.ui-cf__media > img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
/* A soft shadow on the floor that fades as a cover turns away */
.ui-cf__ground {
  position: absolute;
  left: 10%;
  right: 10%;
  bottom: -3px;
  height: 8px;
  border-radius: 50%;
  background: var(--ui-cf-ground);
  filter: blur(5px);
  opacity: calc(1 - var(--ui-cf-t, 0) * 0.7);
  pointer-events: none;
}
/* Hairline edge, a dim that grows as a cover turns away, and a sheen on the side facing the light */
.ui-cf__card::before,
.ui-cf__card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
}
.ui-cf__card::before {
  z-index: 2;
  box-shadow: inset 0 0 0 1px var(--ui-cf-edge);
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.22), transparent 45%);
  opacity: calc(var(--ui-cf-t, 0) * 0.9);
}
.ui-cf__item[data-side="right"] .ui-cf__card::before {
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.22), transparent 45%);
}
.ui-cf__card::after {
  z-index: 1;
  background: var(--ui-cf-dim);
  opacity: var(--ui-cf-t, 0);
}

/* The floor: a flipped copy that fades out – a mask, so it works on any background */
.ui-cf__reflection {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 32%;
  margin-top: 2px;
  overflow: hidden;
  pointer-events: none;
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, var(--ui-cf-reflect)), transparent 85%);
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, var(--ui-cf-reflect)), transparent 85%);
}
.ui-cf__reflection > .ui-cf__card {
  height: var(--ui-cf-h);
  transform: scaleY(-1);
  transform-origin: 50% calc(var(--ui-cf-h) / 2);
  box-shadow: none;
}
.ui-cf__reflection > .ui-cf__card {
  position: absolute;
  bottom: auto;
  top: 0;
}

/* Caption with previous / next on either side, position ticks below */
.ui-cf__footer {
  position: relative;
  z-index: 1;
  display: grid;
  justify-items: center;
  gap: 14px;
  margin-top: calc(var(--ui-cf-h) * -0.04);
}
.ui-cf:not([data-reflection]) .ui-cf__footer { margin-top: 12px; }
.ui-cf__row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 44px;
}
.ui-cf__counter { color: var(--ui-cf-muted); font-size: 12px; line-height: 14px; font-variant-numeric: tabular-nums; }
.ui-cf__ticks {
  display: flex;
  align-items: center;
  gap: 2px;
}
.ui-cf__tick {
  display: grid;
  place-items: center;
  width: 14px;
  height: 14px;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
}
.ui-cf__tick::before {
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: var(--ui-cf-tick);
  transition: width 320ms var(--ui-cf-ease), background-color 200ms ease;
}
.ui-cf__tick[aria-current]::before {
  width: 14px;
  background: var(--ui-cf-ink);
}
.ui-cf__tick:hover::before { background: var(--ui-cf-muted); }
.ui-cf__tick[aria-current]:hover::before { background: var(--ui-cf-ink); }
.ui-cf__caption {
  display: grid;
  min-width: min(220px, 50vw);
  text-align: center;
}
.ui-cf__caption-in { animation: ui-cf-in 420ms var(--ui-cf-ease) both; }
.ui-cf__caption-in[data-dir="prev"] { animation-name: ui-cf-in-prev; }
.ui-cf__title {
  color: var(--ui-cf-ink);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.35;
}
.ui-cf__subtitle {
  color: var(--ui-cf-muted);
  font-size: 13px;
  line-height: 1.4;
}
.ui-cf__nav {
  display: grid;
  place-items: center;
  flex: none;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: var(--ui-cf-nav);
  box-shadow: inset 0 0 0 1px var(--ui-cf-nav-line), 0 1px 2px rgba(0, 0, 0, 0.05);
  color: var(--ui-cf-ink);
  cursor: pointer;
  transition: transform 160ms var(--ui-cf-ease), opacity 160ms ease;
}
.ui-cf__nav:active { transform: scale(0.92); }
.ui-cf__nav:disabled { opacity: 0.35; cursor: default; transform: none; }
.ui-cf__nav:focus-visible { outline: 2px solid var(--ui-cf-focus); outline-offset: 2px; }
.ui-cf__nav svg {
  width: 14px;
  height: 14px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}
@media (pointer: coarse) {
  .ui-cf__nav { width: 40px; height: 40px; }
}

/* The caption rises in from the direction of travel */
@keyframes ui-cf-in {
  from { opacity: 0; transform: translate(14px, 4px); filter: blur(3px); }
  to { opacity: 1; transform: none; filter: none; }
}
@keyframes ui-cf-in-prev {
  from { opacity: 0; transform: translate(-14px, 4px); filter: blur(3px); }
  to { opacity: 1; transform: none; filter: none; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-cf__caption-in { animation: none; }
  .ui-cf__media { transform: none; }
  .ui-cf__tick::before { transition: none; }
  .ui-cf__nav { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-cf {
  --ui-cf-ink: #ededed;
  --ui-cf-muted: #8f8f8f;
  --ui-cf-card: #1d1d20;
  --ui-cf-edge: rgba(255, 255, 255, 0.1);
  --ui-cf-dim: rgba(0, 0, 0, 0.5);
  --ui-cf-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 12px 24px -14px rgba(0, 0, 0, 0.6);
  --ui-cf-reflect: 0.3;
  --ui-cf-ground: rgba(0, 0, 0, 0.45);
  --ui-cf-tick: rgba(255, 255, 255, 0.2);
  --ui-cf-nav: #1d1d20;
  --ui-cf-nav-line: rgba(255, 255, 255, 0.1);
  --ui-cf-focus: rgba(255, 255, 255, 0.35);
}
`;function me(){return r.jsx("div",{className:"stage",children:r.jsx(le,{items:[{id:"a",label:"示例",value:"a",href:"#",name:"示例",title:"示例",text:"预览文字",status:"done",quote:"预览"}],options:[{label:"示例",value:"a"}],steps:[{id:"a",label:"一步"}],nodes:[{id:"a",label:"示例",children:[]}],comments:[{id:"a",author:"Ada",body:"预览",text:"预览"}],notifications:[{id:"a",title:"示例",body:"预览"}],tips:[{title:"示例",body:"预览"}],logos:["甲","乙","丙"],testimonials:[{name:"Ada",quote:"预览",role:"设计"}],links:[{label:"示例",href:"#"}],columns:[{id:"a",header:"列",accessorKey:"a"}],data:[{a:"示例"}],text:"预览文字",value:"预览",label:"示例",code:"const n = 1",title:"标题",placeholder:"输入"})})}export{me as default};
