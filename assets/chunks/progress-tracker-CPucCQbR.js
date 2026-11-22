import{r as p,j as r}from"./client-CsvIHAk3.js";function w({title:d="Getting started",steps:i,autoPlay:b=!1,interval:g=2200,onChange:x,className:_}){const[n,l]=p.useState(()=>new Set(i.filter(e=>e.done).map(e=>e.id))),[c,h]=p.useState(b),m=p.useRef(new Set(i.map(e=>e.id))),v=i.map(e=>e.id).join("|");p.useEffect(()=>{const e=i.filter(s=>!m.current.has(s.id));e.forEach(s=>m.current.add(s.id)),e.some(s=>s.done)&&l(s=>new Set([...s,...e.filter(a=>a.done).map(a=>a.id)]))},[v]);const t=i.length,o=i.filter(e=>n.has(e.id)).length,k=t?o/t:0,f=e=>{const s=new Set(n);s.has(e)?s.delete(e):s.add(e),l(s),x?.(i.map(a=>({...a,done:s.has(a.id)})))};return p.useEffect(()=>{if(!c)return;const e=i.find(a=>!n.has(a.id)),s=window.setTimeout(()=>{e?f(e.id):l(new Set(i.filter(a=>a.done).map(a=>a.id)))},e?g:g*2);return()=>clearTimeout(s)},[c,n]),r.jsxs("div",{className:["ui-progress",_].filter(Boolean).join(" "),"data-complete":o===t||void 0,onPointerDown:()=>h(!1),onKeyDown:()=>h(!1),children:[r.jsx("style",{href:"ui-progress-tracker",precedence:"default",children:y}),r.jsxs("div",{className:"ui-progress__head",children:[r.jsx("h3",{className:"ui-progress__title",dir:"auto",title:d,children:d}),r.jsxs("span",{className:"ui-progress__count","aria-hidden":"true",children:[r.jsx("span",{className:"ui-progress__digit",children:u.format(o)},o),"/",u.format(t)]})]}),r.jsx("div",{className:"ui-progress__bar",role:"progressbar","aria-label":d,"aria-valuemin":0,"aria-valuemax":t,"aria-valuenow":o,"aria-valuetext":`${u.format(o)} of ${u.format(t)} done`,children:r.jsx("span",{className:"ui-progress__fill",style:{transform:`scaleX(${k})`},children:r.jsx("span",{className:"ui-progress__shine"},o)})}),r.jsx("ul",{className:"ui-progress__list",children:i.map((e,s)=>{const a=n.has(e.id);return r.jsx("li",{style:{animationDelay:`${180+Math.min(s,12)*90}ms`},children:r.jsxs("button",{type:"button",role:"checkbox","aria-checked":a,className:"ui-progress__step",onClick:()=>f(e.id),children:[r.jsx("span",{className:"ui-progress__check","aria-hidden":"true",children:r.jsx("svg",{viewBox:"0 0 24 24",children:r.jsx("path",{d:"M6.5 12.5l3.5 3.5 7.5-8",pathLength:1})})}),r.jsx("span",{className:"ui-progress__label",title:e.label||void 0,children:r.jsx("span",{dir:"auto",children:e.label||" "})}),e.icon&&r.jsx("span",{className:"ui-progress__icon","aria-hidden":"true",children:e.icon})]})},e.id)})})]})}const u=new Intl.NumberFormat("en"),y=`
/* Colors and motion as variables – override them on .ui-progress (see Theming in the docs) */
.ui-progress {
  --ui-pg-card: var(--aui-surface, #ffffff);
  --ui-pg-line: var(--aui-border, #e5e5e5);
  --ui-pg-ink: var(--aui-ink, #171717);
  --ui-pg-muted: var(--aui-muted, #a3a3a3);
  --ui-pg-ring: var(--aui-border-strong, #8f8f8f);
  --ui-pg-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-pg-track: #f0f0f0;
  --ui-pg-hover: var(--aui-subtle, #f7f7f7);
  --ui-pg-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  --ui-pg-pop: cubic-bezier(0.34, 1.56, 0.64, 1);

  box-sizing: border-box;
  width: 100%;
  max-width: 360px;
  padding: 22px 16px 14px;
  background: var(--ui-pg-card);
  border: 1px solid var(--ui-pg-line);
  border-radius: calc(var(--aui-radius-lg, 16px) + 4px);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.03),
    0 8px 24px rgba(0, 0, 0, 0.035);
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  color: var(--ui-pg-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-progress *,
.ui-progress *::before,
.ui-progress *::after {
  box-sizing: border-box;
}

.ui-progress__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 0 6px;
}
.ui-progress__title {
  margin: 0;
  min-width: 0;
  overflow-wrap: anywhere;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.01em;
}
.ui-progress__count {
  font-size: 14px;
  color: var(--ui-pg-muted);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
/* The number rolls in from below whenever it changes */
.ui-progress__digit {
  display: inline-block;
  animation: ui-progress-roll 560ms var(--ui-pg-ease);
}

.ui-progress__bar {
  position: relative;
  height: 8px;
  margin: 16px 6px 12px;
  border-radius: 999px;
  background: var(--ui-pg-track);
  overflow: hidden;
}
.ui-progress__fill {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--ui-pg-ink);
  transform-origin: 0 50%;
  overflow: hidden;
  transition: transform 1100ms var(--ui-pg-ease);
}
.ui-progress__shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 30%, rgba(255, 255, 255, 0.28) 50%, transparent 70%) 0 0 / 220% 100%
    no-repeat;
  animation: ui-progress-shine 1400ms ease-out both;
}

.ui-progress__list {
  display: grid;
  /* One column that never grows past the card, so long labels shorten instead of pushing rows out */
  grid-template-columns: minmax(0, 1fr);
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
}
/* On mount the card settles in, then the rows fade up one after another */
.ui-progress {
  animation: ui-progress-in 520ms var(--ui-pg-ease) both;
}
.ui-progress__list > li {
  position: relative;
  animation: ui-progress-row-in 640ms var(--ui-pg-ease) both;
}

.ui-progress__step {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin: 0;
  padding: 9px 6px;
  border: 0;
  border-radius: calc(var(--aui-radius-sm, 7px) + 5px);
  background: transparent;
  font: inherit;
  font-size: 15px;
  line-height: 1.45;
  color: inherit;
  text-align: left;
  cursor: pointer;
  transition: background-color 160ms ease;
}
.ui-progress__step:hover {
  background: var(--ui-pg-hover);
}
.ui-progress__step:focus-visible {
  outline: 2px solid var(--ui-pg-focus);
  outline-offset: -2px;
}

/* Checkbox: the ring fills and pops, then the tick draws itself */
.ui-progress__check {
  position: relative;
  flex: none;
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  border: 1.5px solid var(--ui-pg-ring);
  border-radius: 50%;
  background: transparent;
  transition:
    background-color 220ms var(--ui-pg-ease),
    border-color 220ms var(--ui-pg-ease);
}
.ui-progress__check svg {
  width: 14px;
  height: 14px;
  fill: none;
  stroke: var(--aui-on-primary, #ffffff);
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  transition: stroke-dashoffset 120ms ease-in;
}
.ui-progress__step[aria-checked="true"] .ui-progress__check {
  background: var(--aui-primary, var(--ui-pg-ink));
  border-color: var(--aui-primary, var(--ui-pg-ink));
  animation: ui-progress-pop 560ms var(--ui-pg-ease);
}
.ui-progress__step[aria-checked="true"] .ui-progress__check svg {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 420ms var(--ui-pg-ease) 160ms;
}

/* Label: grays out while a line strikes through it, line by line */
.ui-progress__label {
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 300ms ease;
}
.ui-progress__label > span {
  background: linear-gradient(currentColor, currentColor) 0 58% / 0% 1.5px no-repeat;
  transition: background-size 380ms var(--ui-pg-ease);
}
.ui-progress__step[aria-checked="true"] .ui-progress__label {
  color: var(--ui-pg-muted);
}
.ui-progress__step[aria-checked="true"] .ui-progress__label > span {
  background-size: 100% 1.5px;
  transition: background-size 620ms var(--ui-pg-ease) 220ms;
}

.ui-progress__icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 18px;
  height: 18px;
  transition: opacity 300ms ease;
}
/* Any icon – an svg or an image of any shape – fits its 16px tile */
.ui-progress__icon {
  overflow: hidden;
}
.ui-progress__icon > :is(svg, img) {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.ui-progress__step[aria-checked="true"] .ui-progress__icon {
  opacity: 0.45;
}

@keyframes ui-progress-pop {
  0% { transform: scale(0.9); }
  60% { transform: scale(1.06); }
  100% { transform: scale(1); }
}
@keyframes ui-progress-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
}
@keyframes ui-progress-row-in {
  from {
    opacity: 0;
    filter: blur(3px);
    transform: translateY(8px);
  }
}
@keyframes ui-progress-roll {
  from { opacity: 0; transform: translateY(60%); }
  to { opacity: 1; transform: none; }
}
@keyframes ui-progress-shine {
  from { background-position: 120% 0; opacity: 1; }
  to { background-position: -20% 0; opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-progress,
  .ui-progress *,
  .ui-progress *::before,
  .ui-progress *::after {
    animation: none !important;
    transition-duration: 1ms !important;
    transition-delay: 0ms !important;
  }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-progress {
  --ui-pg-card: var(--aui-surface, #232326);
  --ui-pg-line: var(--aui-border, rgba(255, 255, 255, 0.08));
  --ui-pg-ink: var(--aui-ink, #ededed);
  --ui-pg-muted: var(--aui-muted, #8f8f8f);
  --ui-pg-ring: var(--aui-border-strong, #6b6b70);
  --ui-pg-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
  --ui-pg-track: rgba(255, 255, 255, 0.1);
  --ui-pg-hover: var(--aui-subtle, #2a2a2d);
  box-shadow:
    var(--aui-shadow-card, 0 1px 2px rgba(0, 0, 0, 0.4),
    0 8px 24px rgba(0, 0, 0, 0.35));
}
/* The filled check is light in dark mode, so the tick turns dark */
:where(.dark, [data-theme="dark"]) .ui-progress__check svg { stroke: var(--aui-on-primary, #121213); }
:where(.dark, [data-theme="dark"]) .ui-progress__shine {
  background-image: linear-gradient(90deg, transparent 30%, rgba(255, 255, 255, 0.7) 50%, transparent 70%);
}
`;function N(){return r.jsx("div",{className:"stage",children:r.jsx(w,{items:[{id:"a",label:"示例",value:"a",href:"#",name:"示例",title:"示例",text:"预览文字",status:"done",quote:"预览"}],options:[{label:"示例",value:"a"}],steps:[{id:"a",label:"一步"}],nodes:[{id:"a",label:"示例",children:[]}],comments:[{id:"a",author:"Ada",body:"预览",text:"预览"}],notifications:[{id:"a",title:"示例",body:"预览"}],tips:[{title:"示例",body:"预览"}],logos:["甲","乙","丙"],testimonials:[{name:"Ada",quote:"预览",role:"设计"}],links:[{label:"示例",href:"#"}],columns:[{id:"a",header:"列",accessorKey:"a"}],data:[{a:"示例"}],text:"预览文字",value:"预览",label:"示例",code:"const n = 1",title:"标题",placeholder:"输入"})})}export{N as default};
