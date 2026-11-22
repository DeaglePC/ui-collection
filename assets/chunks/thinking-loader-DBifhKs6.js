import{r as i,j as n}from"./client-CsvIHAk3.js";const B=["Thinking","Searching the web","Reading sources","Writing response"],q=Array.from({length:8},(s,r)=>r),H=s=>{if(s<60)return`${s}s`;const r=Math.floor(s/60);if(r<60)return`${r}m ${s%60}s`;const a=Math.floor(r/60);return a<24?`${a}h ${String(r%60).padStart(2,"0")}m`:`${Math.floor(a/24)}d ${a%24}h`};function G({phases:s=B,interval:r=2200,phase:a,loop:k=!1,done:l=!1,doneLabel:f=d=>`Thought for ${H(d)}`,size:D="md",variant:F="pill",className:T}){const d=Array.isArray(s)?s.map(t=>String(t??"")):[],u=d.length?d:B.slice(0,1),S=Number.isFinite(r)&&r>0?Math.max(r,200):2200,[W,j]=i.useState(0),[I,L]=i.useState(()=>Date.now()),[p,R]=i.useState(null),M=p??Math.max(1,Math.round((Date.now()-I)/1e3));l&&p===null&&R(M),!l&&p!==null&&(R(null),L(Date.now()),j(0)),i.useEffect(()=>{if(l||a!==void 0&&Number.isFinite(a)||u.length<2)return;const t=window.setInterval(()=>{j(e=>e+1<u.length?e+1:k?0:e)},S);return()=>window.clearInterval(t)},[l,a,u.length,S,k]);const C=a!==void 0&&Number.isFinite(a)?Math.floor(a):W,Y=Math.min(Math.max(C,0),Math.max(u.length-1,0)),m=String((l?typeof f=="function"?f(M):f:u[Y])??""),[o,O]=i.useState({key:0,text:m}),[g,$]=i.useState(null);m!==o.text&&($(o),O({key:o.key+1,text:m}));const x=i.useRef(null),b=i.useRef(null),N=i.useRef(null),y=i.useRef(!1),w=i.useRef(()=>{});return w.current=()=>{const t=x.current,e=b.current,E=N.current;if(!t||!e||!E)return;const h=E.scrollWidth+1,c=t.parentElement,A={width:e.style.width,transition:e.style.transition};e.style.transition="none",e.style.width=`${h}px`;const v=c?getComputedStyle(c):null,U=c&&v?c.clientWidth-parseFloat(v.paddingLeft)-parseFloat(v.paddingRight):0,_=c?Math.floor(U-(t.offsetWidth-e.offsetWidth)):h;e.style.width=A.width,e.getBoundingClientRect(),e.style.transition=A.transition;const z=_>0&&h>_;t.toggleAttribute("data-cut",z),e.style.width=`${z?_:h}px`},i.useLayoutEffect(()=>{const t=b.current;t&&(y.current||(t.style.transition="none"),w.current(),y.current||(t.getBoundingClientRect(),t.style.transition="",y.current=!0))},[o.key]),i.useEffect(()=>{const t=x.current?.parentElement;if(!t||typeof ResizeObserver>"u")return;const e=new ResizeObserver(()=>w.current());return e.observe(t),()=>e.disconnect()},[]),n.jsxs("span",{ref:x,className:["ui-tl",T].filter(Boolean).join(" "),"data-size":D,"data-variant":F,"data-done":l||void 0,role:"status","aria-live":"polite",children:[n.jsx("style",{href:"ui-thinking-loader",precedence:"default",children:J}),n.jsxs("span",{className:"ui-tl__icon","aria-hidden":"true",children:[n.jsx("svg",{className:"ui-tl__spinner",viewBox:"0 0 16 16",children:q.map(t=>n.jsx("line",{x1:"8",y1:"1.75",x2:"8",y2:"4.75",transform:`rotate(${t*45} 8 8)`,style:{animationDelay:`${(t-8)*100}ms`}},t))}),n.jsx("svg",{className:"ui-tl__check",viewBox:"0 0 16 16",children:n.jsx("path",{d:"M3.5 8.4 6.6 11.3 12.5 4.9",pathLength:1})})]}),n.jsxs("span",{ref:b,className:"ui-tl__text",children:[g&&n.jsx("span",{className:"ui-tl__label ui-tl__label--out","aria-hidden":"true",dir:"auto",onAnimationEnd:()=>$(null),children:g.text},g.key),n.jsx("span",{ref:N,className:["ui-tl__label",o.key>0&&"ui-tl__label--in",!l&&"ui-tl__shine"].filter(Boolean).join(" "),"data-text":o.text,title:o.text,dir:"auto",children:o.text},o.key)]})]})}const J=`
.ui-tl {
  --ui-tl-ink: var(--aui-ink, #171717);
  --ui-tl-text: var(--aui-muted, #6b6b6b);
  --ui-tl-ray: #171717;
  --ui-tl-bg: var(--aui-surface, #ffffff);
  --ui-tl-line: var(--aui-border, #e7e7e7);
  --ui-tl-shine: rgba(255, 255, 255, 0.82);
  --ui-tl-done: #171717;
  --ui-tl-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  --ui-tl-h: 34px;
  --ui-tl-font: 14px;
  --ui-tl-icon: 15px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  height: var(--ui-tl-h);
  padding: 0 15px 0 12px;
  border-radius: 999px;
  background: var(--ui-tl-bg);
  box-shadow: var(--aui-shadow-card, inset 0 0 0 1px var(--ui-tl-line), 0 1px 2px rgba(0, 0, 0, 0.04));
  color: var(--ui-tl-text);
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: var(--ui-tl-font);
  font-weight: 450;
  line-height: 1;
  letter-spacing: -0.006em;
  max-width: 100%;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
}
.ui-tl[data-size="sm"] {
  --ui-tl-h: 28px;
  --ui-tl-font: 13px;
  --ui-tl-icon: 13px;
  gap: 7px;
  padding: 0 12px 0 10px;
}
.ui-tl[data-variant="plain"] {
  padding: 0;
  background: none;
  box-shadow: none;
}

/* Spinner and check share one square and swap with a little scale */
.ui-tl__icon {
  position: relative;
  flex: none;
  width: var(--ui-tl-icon);
  height: var(--ui-tl-icon);
}
.ui-tl__icon svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  transition: opacity 240ms ease, transform 420ms var(--ui-tl-ease);
}
.ui-tl__spinner line {
  stroke: var(--ui-tl-ray);
  stroke-width: 1.6;
  stroke-linecap: round;
  opacity: 0.18;
  animation: ui-tl-ray 800ms linear infinite;
}
.ui-tl__check {
  opacity: 0;
  transform: scale(0.6);
  fill: none;
  stroke: var(--ui-tl-done);
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.ui-tl__check path {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
}
.ui-tl[data-done] .ui-tl__spinner {
  opacity: 0;
  transform: scale(0.6) rotate(-45deg);
}
.ui-tl[data-done] .ui-tl__check {
  opacity: 1;
  transform: none;
}
.ui-tl[data-done] .ui-tl__check path {
  animation: ui-tl-draw 360ms var(--ui-tl-ease) 120ms forwards;
}

/* The text box glides to the width of the incoming label; labels roll through it */
/* min-width 0: in a narrow container the box gives way and the label ends in "…" */
.ui-tl__text {
  position: relative;
  display: block;
  min-width: 0;
  height: 1.3em;
  overflow: hidden;
  transition: width 460ms var(--ui-tl-ease);
}
.ui-tl__label {
  position: absolute;
  top: 0;
  left: 0;
  line-height: 1.3em;
  white-space: nowrap;
}
.ui-tl[data-cut] .ui-tl__label {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ui-tl[data-done] .ui-tl__label {
  color: var(--ui-tl-ink);
}
.ui-tl__label--in {
  animation: ui-tl-in 460ms var(--ui-tl-ease) both;
}
.ui-tl__label--out {
  animation: ui-tl-out 320ms var(--ui-tl-ease) both;
}

/* A soft light sweeping over the label while it works */
.ui-tl__shine::after {
  content: attr(data-text);
  content: attr(data-text) / "";
  position: absolute;
  inset: 0;
  white-space: nowrap;
  color: transparent;
  background: linear-gradient(90deg, transparent 38%, var(--ui-tl-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ui-tl-sweep 1.8s linear infinite;
  pointer-events: none;
}

@keyframes ui-tl-ray {
  0% { opacity: 1; }
  100% { opacity: 0.18; }
}
@keyframes ui-tl-in {
  from { opacity: 0; transform: translateY(70%); filter: blur(3px); }
  to { opacity: 1; transform: none; filter: none; }
}
@keyframes ui-tl-out {
  from { opacity: 1; transform: none; filter: none; }
  to { opacity: 0; transform: translateY(-70%); filter: blur(3px); }
}
@keyframes ui-tl-draw {
  to { stroke-dashoffset: 0; }
}
@keyframes ui-tl-sweep {
  from { background-position: 100% 0; }
  to { background-position: 0% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-tl *,
  .ui-tl *::after {
    animation-duration: 1ms !important;
    animation-delay: 0ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }
  .ui-tl__spinner line { opacity: 0.6; }
  .ui-tl__shine::after { display: none; }
  .ui-tl__check path { stroke-dashoffset: 0; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tl {
  --ui-tl-ink: var(--aui-ink, #ededed);
  --ui-tl-text: var(--aui-muted, #8f8f8f);
  --ui-tl-ray: #ededed;
  --ui-tl-bg: var(--aui-surface, #161618);
  --ui-tl-line: var(--aui-border, rgba(255, 255, 255, 0.1));
  --ui-tl-shine: rgba(255, 255, 255, 0.95);
  --ui-tl-done: #ededed;
}
`;function Q(){return n.jsx("div",{className:"stage",children:n.jsx(G,{label:"思考"})})}export{Q as default};
