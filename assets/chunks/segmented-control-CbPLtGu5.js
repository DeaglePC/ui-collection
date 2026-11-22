import{r as o,j as n}from"./client-CsvIHAk3.js";function Z({options:c,value:w,defaultValue:M,onChange:D,size:k="md",variant:N="tray",fullWidth:A=!1,kind:j="radio",disabled:g=!1,"aria-label":U,"aria-labelledby":$,className:K}){const l=o.useMemo(()=>{const e=new Set;return(Array.isArray(c)?c:[]).filter(t=>!t||t.value==null||e.has(String(t.value))?!1:(e.add(String(t.value)),!0))},[c]),T=k==="sm"||k==="lg"?k:"md",S=N==="underline"?N:"tray",[B,H]=o.useState(()=>M??l.find(e=>!e.disabled)?.value),p=w!==void 0?w:B,h=o.useRef(null),m=o.useRef(null),d=o.useRef(null),W=o.useRef(null),v=o.useRef(p);v.current=p;const z=o.useRef(!1),R=o.useRef(0),E=o.useRef(void 0),b=o.useRef(null),_=()=>Array.from(d.current?.querySelectorAll(":scope > .ui-seg__opt")??[]),y=l.findIndex(e=>e.value===p),X=y>=0?y:l.findIndex(e=>!e.disabled),x=e=>{const t=l.find(i=>i.value===e);!t||t.disabled||g||e===v.current||(v.current=e,w===void 0&&H(e),D?.(e))},Y=()=>{const e=_();if(!e.length||!d.current)return;const t=getComputedStyle(e[0]),i=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight),s=e.map(a=>a.firstElementChild.offsetWidth+i);A?(d.current.style.setProperty("--ui-seg-min",`${Math.max(...s)}px`),e.forEach(a=>a.style.width="")):e.forEach((a,r)=>a.style.width=`${s[r]}px`)},C=e=>{const t=d.current,i=W.current;if(!t||!i)return;const s=t.querySelector(":scope > .ui-seg__opt[data-active]");if(!s||!s.offsetWidth){i.style.opacity="0";return}let a=s.offsetLeft,r=s.offsetWidth;if(S==="underline"){const P=s.firstElementChild;a+=P.offsetLeft,r=P.offsetWidth}const u=!i.dataset.ready||!e&&!z.current,q=parseFloat(i.style.left)||0;!u&&a!==q&&(i.dataset.dir=a>q?"right":"left"),u&&(i.style.transition="none"),i.style.opacity="1",i.style.left=`${a}px`,i.style.right=`${t.clientWidth-a-r}px`,u&&(i.dataset.ready="1",i.offsetWidth,i.style.transition="")},F=()=>{const e=m.current;if(!e)return;const t=e.scrollWidth-e.clientWidth;h.current?.toggleAttribute("data-overflow",t>1),e.style.setProperty("--ui-seg-fade-l",e.scrollLeft>1?"24px":"0px"),e.style.setProperty("--ui-seg-fade-r",e.scrollLeft<t-1?"24px":"0px")},G=e=>{const t=m.current,i=d.current,s=i?.querySelector(":scope > .ui-seg__opt[data-active]");if(!t||!i||!s||t.scrollWidth<=t.clientWidth+1)return;const a=i.offsetLeft+s.offsetLeft-(t.clientWidth-s.offsetWidth)/2;t.scrollTo({left:Math.max(0,a),behavior:e?"smooth":"auto"})};o.useLayoutEffect(()=>{const e=d.current,t=m.current;if(!e||!t)return;const i=()=>{Y(),C(!1),F()};i();const s=requestAnimationFrame(()=>h.current?.setAttribute("data-ready",""));let a=0;const r=new ResizeObserver(()=>{cancelAnimationFrame(a),a=requestAnimationFrame(i)});return r.observe(t),r.observe(e),e.querySelectorAll(".ui-seg__opt, .ui-seg__content").forEach(u=>r.observe(u)),()=>{r.disconnect(),cancelAnimationFrame(a),cancelAnimationFrame(s)}},[l.length,A,S,T]),o.useLayoutEffect(()=>{if(E.current===p)return;const e=E.current===void 0;E.current=p,e||(z.current=!0,clearTimeout(R.current),R.current=window.setTimeout(()=>z.current=!1,440)),C(!e),G(!e);const t=d.current;!e&&t&&t.contains(document.activeElement)&&_()[y]?.focus({preventScroll:!0})},[p]),o.useEffect(()=>()=>clearTimeout(R.current),[]);const J=e=>{const t=l.filter(u=>!u.disabled);if(!t.length||g)return;const i=j==="radio"?["ArrowLeft","ArrowUp"]:["ArrowLeft"],s=j==="radio"?["ArrowRight","ArrowDown"]:["ArrowRight"],a=t.findIndex(u=>u.value===v.current);let r;i.includes(e.key)?r=t[(a-1+t.length)%t.length]:s.includes(e.key)?r=t[(a+1)%t.length]:e.key==="Home"?r=t[0]:e.key==="End"&&(r=t[t.length-1]),r&&(e.preventDefault(),x(r.value),_()[l.indexOf(r)]?.focus())},I=e=>{let t=-1,i=1/0;return _().forEach((s,a)=>{const r=s.getBoundingClientRect(),u=e<r.left?r.left-e:e>r.right?e-r.right:0;u<i&&(i=u,t=a)}),l[t]},L=()=>{b.current=null,h.current?.removeAttribute("data-pressed")},O=e=>{if(g||e.button!==0)return;const t=I(e.clientX);if(!t||t.disabled)return;const i=e.pointerType==="touch",s=!i||t.value===v.current;if(b.current={id:e.pointerId,touch:i,drag:s,x:e.clientX,moved:!1},s&&h.current?.setAttribute("data-pressed",""),!i){x(t.value);try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}}},Q=e=>{const t=b.current;if(!t||t.id!==e.pointerId||!t.moved&&Math.abs(e.clientX-t.x)<(t.touch?8:3)||(t.moved=!0,!t.drag))return;const i=I(e.clientX);i&&!i.disabled&&x(i.value)},V=e=>{const t=b.current;if(!(!t||t.id!==e.pointerId)){if(t.touch&&!t.moved){const i=I(e.clientX);i&&x(i.value)}L()}},f=j==="tabs";return n.jsxs("div",{ref:h,className:["ui-seg",K].filter(Boolean).join(" "),"data-size":T,"data-variant":S,"data-full":A||void 0,"data-disabled":g||void 0,children:[n.jsx("style",{href:"ui-segmented-control",precedence:"default",children:te}),n.jsx("div",{ref:m,className:"ui-seg__scroller",onScroll:F,children:n.jsxs("div",{ref:d,className:"ui-seg__track",role:f?"tablist":"radiogroup","aria-label":U,"aria-labelledby":$,"aria-disabled":g||void 0,"aria-orientation":f?"horizontal":void 0,onKeyDown:J,onPointerDown:O,onPointerMove:Q,onPointerUp:V,onPointerCancel:L,onLostPointerCapture:L,children:[n.jsx("span",{ref:W,className:"ui-seg__pill","aria-hidden":"true"}),l.map((e,t)=>{const i=t===y,s=e.label??(e.icon?null:String(e.value)),a=ee(e.count);return n.jsx("button",{type:"button",className:"ui-seg__opt",role:f?"tab":"radio","aria-checked":f?void 0:i,"aria-selected":f?i:void 0,"aria-controls":f?e.controls:void 0,"aria-label":e.ariaLabel,"data-active":i||void 0,disabled:e.disabled||g,tabIndex:t===X?0:-1,onClick:()=>x(e.value),children:n.jsxs("span",{className:"ui-seg__content",children:[e.icon&&n.jsx("span",{className:"ui-seg__icon",onErrorCapture:r=>r.target.style.visibility="hidden",children:e.icon}),s!=null&&n.jsxs("span",{className:"ui-seg__label",dir:"auto",children:[n.jsx("span",{className:"ui-seg__text",children:s}),n.jsx("span",{className:"ui-seg__text ui-seg__text-bold","aria-hidden":"true",children:s})]}),a!=null&&a!==""&&n.jsx("span",{className:"ui-seg__count",children:a},String(a)),e.badge!=null&&n.jsx("span",{className:"ui-seg__badge",children:e.badge})]})},String(e.value))})]})})]})}const ee=c=>typeof c=="number"?Number.isFinite(c)?c.toLocaleString("en-US"):null:c,te=`
/* Animatable custom properties: the equal segment width and the soft edges glide too */
@property --ui-seg-min { syntax: "<length>"; inherits: true; initial-value: 0px; }
@property --ui-seg-fade-l { syntax: "<length>"; inherits: false; initial-value: 0px; }
@property --ui-seg-fade-r { syntax: "<length>"; inherits: false; initial-value: 0px; }

.ui-seg {
  --ui-seg-tray: var(--aui-subtle, #f0f0f0);
  --ui-seg-pill: var(--aui-surface, #ffffff);
  --ui-seg-line: var(--aui-border, #ececec);
  --ui-seg-ink: var(--aui-ink, #171717);
  --ui-seg-text: var(--aui-ink, #404040);
  --ui-seg-soft: var(--aui-muted, #737373);
  --ui-seg-muted: var(--aui-muted, #8f8f8f);
  --ui-seg-count: rgba(0, 0, 0, 0.06);
  --ui-seg-accent: var(--aui-blue, #4fb0fe);
  --ui-seg-accent-soft: color-mix(in srgb, var(--aui-blue, #0190fe) 10%, transparent);
  --ui-seg-pill-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.06);
  --ui-seg-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-seg-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  /* Size: md */
  --ui-seg-h: 30px;
  --ui-seg-px: 12px;
  --ui-seg-fs: 13.5px;
  --ui-seg-r: calc(var(--aui-radius, 10px) + 1px);
  --ui-seg-pad: 3px;
  --ui-seg-icon: 15px;
  --ui-seg-gap: 20px;
  box-sizing: border-box;
  display: inline-flex;
  max-width: 100%;
  min-width: 0;
  vertical-align: middle;
  border-radius: var(--ui-seg-r);
  background: var(--ui-seg-tray);
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: var(--ui-seg-fs);
  line-height: 1;
  color: var(--ui-seg-soft);
  -webkit-font-smoothing: antialiased;
}
.ui-seg[data-size="sm"] { --ui-seg-h: 26px; --ui-seg-px: 10px; --ui-seg-fs: 12.5px; --ui-seg-r: calc(var(--aui-radius, 10px) - 1px); --ui-seg-pad: 2px; --ui-seg-icon: 14px; --ui-seg-gap: 16px; }
.ui-seg[data-size="lg"] { --ui-seg-h: 36px; --ui-seg-px: 16px; --ui-seg-fs: 14px; --ui-seg-r: calc(var(--aui-radius, 10px) + 3px); --ui-seg-pad: 4px; --ui-seg-icon: 16px; --ui-seg-gap: 24px; }
.ui-seg[data-full] { display: flex; width: 100%; }
.ui-seg[data-disabled] { opacity: 0.5; pointer-events: none; }
.ui-seg *, .ui-seg *::before, .ui-seg *::after { box-sizing: border-box; }
:where(.ui-seg) button { margin: 0; border: 0; background: none; font: inherit; color: inherit; cursor: pointer; }
:where(.ui-seg) svg { display: block; flex: none; }

/* Scrolls sideways only when it doesn't fit; the padding keeps focus rings from being cut off */
.ui-seg__scroller {
  position: relative;
  flex: 1;
  min-width: 0;
  overflow-x: auto;
  overflow-y: hidden;
  padding: var(--ui-seg-pad);
  border-radius: inherit;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 var(--ui-seg-fade-l), #000 calc(100% - var(--ui-seg-fade-r)), transparent);
  mask-image: linear-gradient(to right, transparent, #000 var(--ui-seg-fade-l), #000 calc(100% - var(--ui-seg-fade-r)), transparent);
  transition: --ui-seg-fade-l 200ms ease, --ui-seg-fade-r 200ms ease;
}
.ui-seg__scroller::-webkit-scrollbar { display: none; }

.ui-seg__track {
  position: relative;
  display: flex;
  width: max-content;
  min-width: 100%;
  /* Horizontal drags move the pill; vertical ones still scroll the page */
  touch-action: pan-y;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
/* When it scrolls, swipes scroll it instead of dragging the pill */
.ui-seg[data-overflow] .ui-seg__track { touch-action: pan-x pan-y; }
/* Equal segments, each as wide as the widest one needs */
.ui-seg[data-full] .ui-seg__track { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(var(--ui-seg-min), 1fr); }
.ui-seg[data-ready] .ui-seg__track { transition: --ui-seg-min 320ms var(--ui-seg-ease); }

/* An option */
.ui-seg__opt {
  position: relative;
  z-index: 1;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  height: var(--ui-seg-h);
  padding: 0 var(--ui-seg-px);
  overflow: clip;
  border-radius: calc(var(--ui-seg-r) - var(--ui-seg-pad));
  white-space: nowrap;
  transition: color 200ms ease;
}
.ui-seg[data-ready]:not([data-full]) .ui-seg__opt { transition: color 200ms ease, width 320ms var(--ui-seg-ease); }
.ui-seg__opt[data-active] { color: var(--ui-seg-ink); }
.ui-seg__opt:disabled { opacity: 0.4; cursor: not-allowed; }
.ui-seg__opt:focus-visible { outline: 2px solid var(--ui-seg-focus); outline-offset: -2px; }
@media (hover: hover) {
  .ui-seg__opt:not([data-active]):not(:disabled):hover { color: var(--ui-seg-text); }
}

.ui-seg__content { display: inline-flex; flex: none; align-items: center; gap: 6px; }
.ui-seg__icon { display: grid; place-items: center; width: var(--ui-seg-icon); height: var(--ui-seg-icon); }
.ui-seg__icon svg, .ui-seg__icon img { width: 100%; height: 100%; }
/* Images fill the tile without leaving it, whatever their shape */
.ui-seg__icon { overflow: hidden; }
.ui-seg__icon img { display: block; object-fit: contain; }

/* Regular and semibold copies of the label crossfade */
.ui-seg__label { display: grid; justify-items: center; }
.ui-seg__text { grid-area: 1 / 1; font-weight: 500; transition: opacity 200ms ease; }
.ui-seg__text-bold { font-weight: 600; opacity: 0; }
.ui-seg__opt[data-active] .ui-seg__text { opacity: 0; }
.ui-seg__opt[data-active] .ui-seg__text-bold { opacity: 1; }

.ui-seg__count {
  display: inline-grid;
  place-items: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: var(--ui-seg-count);
  font-size: 11px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--ui-seg-text);
  animation: ui-seg-in 260ms var(--ui-seg-ease) both;
}
.ui-seg[data-size="sm"] .ui-seg__count { min-width: 16px; height: 16px; padding: 0 4px; font-size: 10.5px; }
.ui-seg__badge {
  display: inline-flex;
  align-items: center;
  height: 18px;
  padding: 0 6px;
  border-radius: calc(var(--aui-radius-sm, 7px) - 1px);
  background: var(--ui-seg-accent-soft);
  font-size: 11px;
  font-weight: 500;
  color: var(--ui-seg-accent);
}

/* The indicator: left and right edges glide separately – the one facing the target leads, so it stretches and settles */
.ui-seg__pill {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 100%;
  z-index: 0;
  border-radius: calc(var(--ui-seg-r) - var(--ui-seg-pad));
  background: var(--ui-seg-pill);
  box-shadow: var(--ui-seg-pill-shadow);
  opacity: 0;
  pointer-events: none;
  transition: left 380ms var(--ui-seg-ease), right 380ms var(--ui-seg-ease), scale 200ms var(--ui-seg-ease), opacity 160ms ease;
}
.ui-seg__pill[data-dir="right"] { transition-duration: 400ms, 270ms, 200ms, 160ms; }
.ui-seg__pill[data-dir="left"] { transition-duration: 270ms, 400ms, 200ms, 160ms; }
/* Press feedback: the pill gives a little while held or dragged */
.ui-seg[data-pressed]:not([data-variant="underline"]) .ui-seg__pill { scale: 0.97; }

/* Underline variant: text tabs on a hairline */
.ui-seg[data-variant="underline"] { --ui-seg-px: 2px; border-radius: 0; background: none; box-shadow: inset 0 -1px 0 var(--ui-seg-line); }
.ui-seg[data-variant="underline"] .ui-seg__scroller { padding: 0; }
.ui-seg[data-variant="underline"]:not([data-full]) .ui-seg__track { gap: var(--ui-seg-gap); }
.ui-seg[data-variant="underline"][data-full] { --ui-seg-px: 10px; }
.ui-seg[data-variant="underline"] .ui-seg__opt { height: calc(var(--ui-seg-h) + 6px); border-radius: 6px; }
.ui-seg[data-variant="underline"] .ui-seg__opt:focus-visible { outline-offset: -2px; }
.ui-seg[data-variant="underline"] .ui-seg__pill { top: auto; height: 2px; border-radius: 2px 2px 0 0; background: var(--ui-seg-ink); box-shadow: none; }

@keyframes ui-seg-in { from { opacity: 0; transform: translateY(3px); filter: blur(2px); } to { opacity: 1; transform: none; filter: none; } }

/* Touch screens: every option at least 40px tall */
@media (hover: none) and (pointer: coarse) {
  .ui-seg[data-size] { --ui-seg-h: 40px; }
  .ui-seg[data-size="lg"] { --ui-seg-h: 44px; }
  .ui-seg[data-variant="underline"] .ui-seg__opt { height: var(--ui-seg-h); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-seg *, .ui-seg *::before, .ui-seg *::after { animation: none !important; transition: none !important; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-seg {
  --ui-seg-tray: var(--aui-subtle, #111113);
  --ui-seg-pill: var(--aui-surface, #26262a);
  --ui-seg-line: var(--aui-border, #2a2a2e);
  --ui-seg-ink: var(--aui-ink, #ededed);
  --ui-seg-text: var(--aui-ink, #c8c8cc);
  --ui-seg-soft: var(--aui-muted, #8b8b92);
  --ui-seg-muted: var(--aui-muted, #8b8b92);
  --ui-seg-count: rgba(255, 255, 255, 0.08);
  --ui-seg-accent: var(--aui-blue, #4fb0fe);
  --ui-seg-accent-soft: color-mix(in srgb, var(--aui-blue, #4fb0fe) 14%, transparent);
  --ui-seg-pill-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 1px 2px rgba(0, 0, 0, 0.4);
  --ui-seg-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
`;function ae(){return n.jsx("div",{className:"stage",children:n.jsx(Z,{})})}export{ae as default};
