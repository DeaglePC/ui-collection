import{r as s,j as e}from"./client-CsvIHAk3.js";const m=[{title:"Triggered by events",hint:"Webhooks",icon:"bolt"},{title:"Grounded in your data",hint:"Context",icon:"database"},{title:"Connected to your apps",hint:"APIs",icon:"plug"},{title:"Works with any model",hint:"Routing",icon:"spark"},{title:"Traced at every step",hint:"Logs",icon:"pulse"}],i=104,I=26,x=34,E=24,w=9,T=168,$=109;function A({items:c=m,defaultIndex:b=0,interval:u=2600,onChange:k,className:j}){const y="ui-lyr"+s.useId().replace(/[^a-zA-Z0-9_-]/g,""),a=(c.length?c:m).slice(0,5),[l,d]=s.useState(Math.min(b,a.length-1)),[f,n]=s.useState(!1),h=s.useRef(!1);s.useEffect(()=>{if(f||h.current||a.length<2||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const r=window.setInterval(()=>d(t=>(t+1)%a.length),u);return()=>window.clearInterval(r)},[f,u,a.length]);const p=r=>{h.current=!0,d(r),k?.(r)},M=a.length-1,N=r=>$+r*I-(r<l?x+E:r===l&&l<M?x:0);return e.jsxs("div",{className:["ui-lyr",j].filter(Boolean).join(" "),onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onFocus:()=>n(!0),onBlur:()=>n(!1),children:[e.jsx("style",{href:"ui-layer-stack",precedence:"default",children:z}),e.jsxs("svg",{className:"ui-lyr-stack",viewBox:"0 0 600 400","aria-hidden":"true",children:[e.jsx("defs",{children:e.jsx("filter",{id:`${y}-glow`,x:"-60%",y:"-120%",width:"220%",height:"340%",children:e.jsx("feGaussianBlur",{stdDeviation:"14"})})}),a.map((r,t)=>e.jsxs("g",{className:"ui-lyr-layer","data-active":t===l?"":void 0,"data-above":t<l?"":void 0,style:{transform:`translate(${T}px, ${N(t)}px)`},children:[e.jsx("ellipse",{className:"ui-lyr-glow",cx:0,cy:i/2+w+18,rx:70,ry:24,filter:`url(#${y}-glow)`}),e.jsxs("g",{transform:`translate(0 ${w}) matrix(1 0.5 -1 0.5 0 0)`,children:[e.jsx("rect",{className:"ui-lyr-side",width:i,height:i,rx:9}),e.jsx("rect",{className:"ui-lyr-side-on",width:i,height:i,rx:9})]}),e.jsxs("g",{transform:"matrix(1 0.5 -1 0.5 0 0)",children:[e.jsx("rect",{className:"ui-lyr-face",width:i,height:i,rx:9}),e.jsx("rect",{className:"ui-lyr-face-on",width:i,height:i,rx:9}),e.jsx("g",{className:"ui-lyr-icon",transform:`translate(${i/2-18} ${i/2-18}) scale(1.5)`,children:L[r.icon??"bolt"]})]})]},t)).reverse()]}),e.jsxs("div",{className:"ui-lyr-menu",role:"tablist","aria-label":"Layers","aria-orientation":"vertical",children:[e.jsx("span",{className:"ui-lyr-pill","aria-hidden":"true",style:{transform:`translateY(calc(${l} * var(--ui-lyr-row)))`}}),a.map((r,t)=>e.jsxs("button",{type:"button",role:"tab","aria-selected":t===l,tabIndex:t===l?0:-1,className:"ui-lyr-row",onClick:()=>p(t),onKeyDown:o=>{const g=o.key==="ArrowDown"?t+1:o.key==="ArrowUp"?t-1:null;if(g===null)return;o.preventDefault();const v=(g+a.length)%a.length;p(v),o.currentTarget.parentElement?.children[v+1]?.focus()},children:[e.jsx("span",{className:"ui-lyr-title",children:r.title}),r.hint&&e.jsx("span",{className:"ui-lyr-hint",children:r.hint})]},t))]})]})}const L={bolt:e.jsx("path",{d:"M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z"}),database:e.jsxs(e.Fragment,{children:[e.jsx("ellipse",{cx:"12",cy:"6",rx:"7",ry:"3"}),e.jsx("path",{d:"M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"})]}),plug:e.jsx("path",{d:"M9 3v5M15 3v5M6.5 8h11v3a5.5 5.5 0 0 1-11 0V8ZM12 16.5V21"}),spark:e.jsx("path",{d:"M12 3c.6 4.6 2.4 6.4 7 7-4.6.6-6.4 2.4-7 7-.6-4.6-2.4-6.4-7-7 4.6-.6 6.4-2.4 7-7ZM18.5 15.5c.2 1.5.8 2.1 2.3 2.3-1.5.2-2.1.8-2.3 2.3-.2-1.5-.8-2.1-2.3-2.3 1.5-.2 2.1-.8 2.3-2.3Z"}),pulse:e.jsx("path",{d:"M3 12h4l2.5-6 5 12 2.5-6h4"})},z=`
.ui-lyr {
  /* 1 unit of the 600 × 400 layout grid */
  --u: calc(100cqw / 600);
  --ui-lyr-row: calc(52 * var(--u));
  /* The accent blue used across the library */
  --ui-lyr-accent: #2f6bff;
  --ui-lyr-accent-deep: #2557d9;
  --ui-lyr-tint: #e9f0ff;
  --ui-lyr-glow: rgba(47, 107, 255, 0.28);
  --ui-lyr-face: rgba(255, 255, 255, 0.6);
  --ui-lyr-edge: rgba(10, 10, 10, 0.11);
  --ui-lyr-side: #ececef;
  --ui-lyr-face-above: rgba(255, 255, 255, 0.3);
  --ui-lyr-side-above: rgba(236, 236, 239, 0.55);
  --ui-lyr-panel: #f5f5f5;
  --ui-lyr-pill: #ffffff;
  --ui-lyr-pill-ring: #e5e5e5;
  --ui-lyr-text: #171717;
  --ui-lyr-muted: #8f8f8f;
  --ui-lyr-ease: cubic-bezier(0.65, 0, 0.25, 1);
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 2;
  container-type: inline-size;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.ui-lyr *, .ui-lyr *::before, .ui-lyr *::after { box-sizing: border-box; }

/* ---------- Stack ---------- */

.ui-lyr-stack { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.ui-lyr-layer { transition: transform 560ms var(--ui-lyr-ease); }
.ui-lyr-glow {
  fill: var(--ui-lyr-glow);
  opacity: 0;
  transition: opacity 420ms ease;
}
.ui-lyr-layer[data-active] .ui-lyr-glow { opacity: 1; }
.ui-lyr-side-on {
  fill: var(--ui-lyr-accent-deep);
  opacity: 0;
  transition: opacity 360ms ease;
}
.ui-lyr-side {
  fill: var(--ui-lyr-side);
  stroke: var(--ui-lyr-edge);
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
  transition: fill 360ms ease, stroke 360ms ease;
}
.ui-lyr-face {
  fill: var(--ui-lyr-face);
  stroke: var(--ui-lyr-edge);
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
  transition: fill 360ms ease, stroke 360ms ease;
}
.ui-lyr-face-on {
  fill: var(--ui-lyr-tint);
  stroke: var(--ui-lyr-accent);
  opacity: 0;
  stroke-width: 1.6;
  vector-effect: non-scaling-stroke;
  transition: opacity 360ms ease;
}
.ui-lyr-icon {
  fill: none;
  stroke: var(--ui-lyr-accent);
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: 0;
  transition: opacity 300ms ease;
}
/* Layers above the chosen one turn more glassy, so its color shows through */
.ui-lyr-layer[data-above] .ui-lyr-face { fill: var(--ui-lyr-face-above); }
.ui-lyr-layer[data-above] .ui-lyr-side { fill: var(--ui-lyr-side-above); }
.ui-lyr-layer[data-active] .ui-lyr-side-on { opacity: 1; }
.ui-lyr-layer[data-active] .ui-lyr-face-on { opacity: 1; }
.ui-lyr-layer[data-active] .ui-lyr-icon { opacity: 1; transition-delay: 120ms; }

/* ---------- Menu ---------- */

.ui-lyr-menu {
  position: absolute;
  left: calc(326 * var(--u));
  top: 50%;
  width: calc(248 * var(--u));
  padding: calc(8 * var(--u));
  transform: translateY(-50%);
  border-radius: calc(18 * var(--u));
  background: var(--ui-lyr-panel);
}
/* White card that glides behind the chosen row */
.ui-lyr-pill {
  position: absolute;
  left: calc(8 * var(--u));
  right: calc(8 * var(--u));
  top: calc(8 * var(--u));
  height: var(--ui-lyr-row);
  border-radius: calc(12 * var(--u));
  background: var(--ui-lyr-pill);
  box-shadow: 0 0 0 1px var(--ui-lyr-pill-ring), 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: transform 460ms var(--ui-lyr-ease);
}
.ui-lyr-row {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: calc(10 * var(--u));
  width: 100%;
  height: var(--ui-lyr-row);
  margin: 0;
  padding: 0 calc(14 * var(--u));
  border: 0;
  border-radius: calc(12 * var(--u));
  background: transparent;
  font: inherit;
  text-align: left;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.ui-lyr-row:focus-visible { outline: 2px solid var(--ui-lyr-accent); outline-offset: -2px; }
.ui-lyr-title {
  flex: 0 1 auto;
  min-width: 0;
  overflow: hidden;
  font-size: calc(14 * var(--u));
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.01em;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--ui-lyr-text);
  transition: color 300ms ease;
}
.ui-lyr-hint {
  /* The title comes first – the hint gives way and ends in … */
  flex: 0 10000 auto;
  min-width: 0;
  max-width: 45%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: calc(12 * var(--u));
  line-height: 1.3;
  color: var(--ui-lyr-muted);
}
.ui-lyr-row[aria-selected="true"] .ui-lyr-title { color: var(--ui-lyr-accent); }

@media (prefers-reduced-motion: reduce) {
  .ui-lyr-layer, .ui-lyr-glow, .ui-lyr-pill { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-lyr {
  --ui-lyr-accent: #6b95ff;
  --ui-lyr-accent-deep: #2f6bff;
  --ui-lyr-tint: #1f2c4d;
  --ui-lyr-glow: rgba(47, 107, 255, 0.3);
  --ui-lyr-face: rgba(255, 255, 255, 0.04);
  --ui-lyr-edge: rgba(255, 255, 255, 0.13);
  --ui-lyr-side: #26262a;
  --ui-lyr-face-above: rgba(255, 255, 255, 0.025);
  --ui-lyr-side-above: rgba(38, 38, 42, 0.5);
  --ui-lyr-panel: #161618;
  --ui-lyr-pill: #232326;
  --ui-lyr-pill-ring: rgba(255, 255, 255, 0.08);
  --ui-lyr-text: #ededed;
  --ui-lyr-muted: #8f8f8f;
}
`;function Z(){return e.jsx("div",{className:"stage",children:e.jsx(A,{})})}export{Z as default};
