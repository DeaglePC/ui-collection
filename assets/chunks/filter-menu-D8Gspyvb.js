import{r as t,j as e}from"./client-CsvIHAk3.js";function T({groups:u,value:d,defaultValue:l={},onChange:p,defaultOpen:c,title:f="Filters",hints:g=!0,className:B}){const m=(Array.isArray(u)?u:[]).filter(i=>!!i&&typeof i=="object").map(i=>({...i,label:String(i.label??""),options:(Array.isArray(i.options)?i.options:[]).filter(a=>!!a&&typeof a=="object").map(a=>({...a,label:String(a.label??"")}))})),S=t.useId(),[F,H]=t.useState(l),b=d??F,[h,O]=t.useState(()=>new Set(c??m.slice(0,1).map(i=>i.id))),[x,k]=t.useState(null),M=t.useRef(null),z=t.useRef(null),E=U(z),R=i=>{d===void 0&&H(i),p?.(i)},w=i=>Array.isArray(b[i])?b[i]:[],I=(i,a)=>w(i).includes(a),y=(i,a)=>{const r=w(i);R({...b,[i]:r.includes(a)?r.filter(o=>o!==a):[...r,a]})},_=i=>O(a=>{const r=new Set(a);return r.has(i)?r.delete(i):r.add(i),r}),C=new Set,D=m.flatMap(i=>i.options.filter(a=>I(i.id,a.id)&&!C.has(`${i.id}\0${a.id}`)&&!!C.add(`${i.id}\0${a.id}`)).map(a=>({group:i,option:a,label:`${i.chipPrefix??""}${a.label}`}))),n=m.flatMap((i,a)=>[{kind:"group",group:i,gi:a},...h.has(i.id)?i.options.map((r,o)=>({kind:"option",group:i,option:r,gi:a,oi:o})):[]]),j=i=>i.kind==="group"?`g:${i.gi}`:`o:${i.gi}:${i.oi}`,$=i=>{k(i),M.current?.querySelector(`[data-key="${CSS.escape(i)}"]`)?.focus()},L=i=>{const a=n.findIndex(o=>j(o)===x),r=n[a];if(i.key==="ArrowDown"||i.key==="ArrowUp"){i.preventDefault();const o=n[Math.max(0,Math.min(n.length-1,a+(i.key==="ArrowDown"?1:-1)))]??n[0];$(j(o))}else if(i.key==="Home"||i.key==="End")i.preventDefault(),$(j(n[i.key==="Home"?0:n.length-1]));else if(r&&(i.key==="ArrowRight"||i.key==="ArrowLeft")){i.preventDefault();const o=r.group.id;i.key==="ArrowRight"&&!h.has(o)&&_(o),i.key==="ArrowLeft"&&(h.has(o)&&_(o),$(`g:${r.gi}`))}else r&&(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),r.kind==="group"?_(r.group.id):y(r.group.id,r.option.id))};return e.jsxs("div",{className:["ui-fm",B].filter(Boolean).join(" "),children:[e.jsx("style",{href:"ui-filter-menu",precedence:"default",children:q}),e.jsxs("div",{className:"ui-fm__card",children:[e.jsxs("div",{className:"ui-fm__head",children:[e.jsx("span",{className:"ui-fm__title",dir:"auto",title:f,children:f}),e.jsx("button",{type:"button",className:"ui-fm__clear",disabled:D.length===0,onClick:()=>R({}),children:"Clear all"})]}),e.jsx("div",{className:"ui-fm__chips-outer",ref:E,children:e.jsx("div",{className:"ui-fm__chips",ref:z,"aria-live":"polite",children:D.map((i,a)=>e.jsxs("span",{className:"ui-fm__chip",children:[e.jsx("span",{className:"ui-fm__chip-label",dir:"auto",title:i.label,children:i.label}),e.jsx("button",{type:"button","aria-label":`Remove ${i.label}`,onClick:()=>y(i.group.id,i.option.id),children:e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M6.5 6.5l11 11M17.5 6.5l-11 11"})})})]},a))})}),e.jsx("div",{className:"ui-fm__groups",ref:M,onKeyDown:L,children:m.map((i,a)=>{const r=h.has(i.id),o=new Set(w(i.id).filter(s=>i.options.some(v=>v.id===s))).size,N=`g:${a}`;return e.jsxs("section",{className:"ui-fm__group","data-open":r?"":void 0,children:[e.jsxs("button",{type:"button",className:"ui-fm__group-head","data-key":N,tabIndex:x===N||x===null&&a===0?0:-1,"aria-expanded":r,"aria-controls":`${S}-${a}`,onFocus:()=>k(N),onClick:()=>_(i.id),children:[e.jsx("svg",{className:"ui-fm__chevron",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M6.5 9.5 12 15l5.5-5.5"})}),e.jsx("span",{className:"ui-fm__group-label",dir:"auto",title:i.label,children:i.label}),e.jsx("span",{className:"ui-fm__group-count",children:i.options.length.toLocaleString("en-US")}),e.jsx("span",{className:"ui-fm__group-picked","aria-live":"polite",children:o>0?`${o} filter${o===1?"":"s"}`:""})]}),e.jsx("div",{className:"ui-fm__panel",id:`${S}-${a}`,role:"group","aria-label":i.label,children:e.jsx("div",{className:"ui-fm__panel-inner",children:i.options.map((s,v)=>{const A=`o:${a}:${v}`,K=I(i.id,s.id);return e.jsxs("button",{type:"button",role:"checkbox","aria-checked":K,className:"ui-fm__option","data-key":A,tabIndex:r&&x===A?0:-1,onFocus:()=>k(A),onClick:()=>y(i.id,s.id),children:[e.jsx("span",{className:"ui-fm__box","aria-hidden":"true",children:e.jsx("svg",{viewBox:"0 0 24 24",children:e.jsx("path",{d:"m6 12.5 4 4 8-9"})})}),e.jsx("span",{className:"ui-fm__option-label",dir:"auto",title:s.label,children:s.label})]},`${s.id}#${v}`)})})})]},`${i.id}#${a}`)})})]}),g&&e.jsxs("div",{className:"ui-fm__hints","aria-hidden":"true",children:[e.jsxs("span",{className:"ui-fm__hint",children:[e.jsx("kbd",{children:e.jsx("svg",{viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 5v14m0 0-5-5m5 5 5-5"})})}),e.jsx("kbd",{children:e.jsx("svg",{viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 19V5m0 0-5 5m5-5 5 5"})})}),"To navigate"]}),e.jsxs("span",{className:"ui-fm__hint",children:[e.jsx("kbd",{children:e.jsx("svg",{viewBox:"0 0 24 24",children:e.jsx("path",{d:"M18 6v6.5a2 2 0 0 1-2 2H7m0 0 3.5-3.5M7 14.5 10.5 18"})})}),"To select"]})]})]})}function U(u){const d=t.useRef(null);return t.useLayoutEffect(()=>{const l=d.current,p=u.current;if(!l||!p)return;const c=()=>{l.style.height=`${p.offsetHeight}px`};c();const f=new ResizeObserver(c);f.observe(p);const g=requestAnimationFrame(()=>l.setAttribute("data-smooth",""));return()=>{f.disconnect(),cancelAnimationFrame(g)}},[u]),d}const q=`
.ui-fm {
  --ui-fm-tray: var(--aui-subtle, #f0f0f0);
  --ui-fm-card: var(--aui-surface, #ffffff);
  --ui-fm-card-line: var(--aui-border, #e5e5e5);
  --ui-fm-ink: var(--aui-ink, #171717);
  --ui-fm-text: var(--aui-ink, #404040);
  --ui-fm-muted: var(--aui-muted, #8f8f8f);
  --ui-fm-chip: var(--aui-subtle, #f3f3f3);
  --ui-fm-chip-hover: #ebebeb;
  --ui-fm-box: #f0f0f0;
  --ui-fm-box-line: var(--aui-border-strong, #e3e3e3);
  --ui-fm-check: var(--aui-on-primary, #ffffff);
  --ui-fm-row-hover: var(--aui-subtle, #f7f7f7);
  --ui-fm-kbd: #ffffff;
  --ui-fm-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-fm-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  --ui-fm-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  width: 100%;
  max-width: 420px;
  padding: 6px;
  border-radius: calc(var(--aui-radius-lg, 16px) + 8px);
  background: var(--ui-fm-tray);
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  color: var(--ui-fm-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-fm *, .ui-fm *::before, .ui-fm *::after { box-sizing: border-box; }
.ui-fm button { font: inherit; color: inherit; margin: 0; cursor: pointer; -webkit-tap-highlight-color: transparent; }
.ui-fm button:focus-visible { outline: 2px solid var(--ui-fm-focus); outline-offset: 2px; }

.ui-fm__card {
  padding: 16px 16px 10px;
  border: 1px solid var(--ui-fm-card-line);
  border-radius: calc(var(--aui-radius-lg, 16px) + 4px);
  background: var(--ui-fm-card);
  box-shadow: var(--ui-fm-shadow);
}

/* ---------- Header ---------- */

.ui-fm__head { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 0 2px; }
.ui-fm__title { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; text-align: start; font-size: 15px; font-weight: 600; letter-spacing: -0.01em; }
.ui-fm__clear {
  flex: none;
  padding: 4px 6px;
  margin-right: -6px !important;
  border: 0;
  border-radius: calc(var(--aui-radius-sm, 7px) + 1px);
  background: none;
  font-size: 13px;
  color: var(--ui-fm-muted) !important;
  transition: color 160ms ease, background-color 160ms ease, opacity 200ms ease;
}
.ui-fm__clear:hover:not(:disabled) { color: var(--ui-fm-ink) !important; background: var(--ui-fm-row-hover); }
.ui-fm__clear:disabled { opacity: 0.45; cursor: default; }

/* ---------- Chips ---------- */

.ui-fm__chips-outer { overflow: hidden; }
.ui-fm__chips-outer[data-smooth] { transition: height 320ms var(--ui-fm-ease); }
.ui-fm__chips { display: flex; flex-wrap: wrap; gap: 6px; padding-top: 12px; }
.ui-fm__chips:empty { padding-top: 0; }
.ui-fm__chip {
  display: inline-flex;
  min-width: 0;
  max-width: 100%;
  align-items: center;
  gap: 2px;
  height: 30px;
  padding: 0 4px 0 11px;
  border-radius: calc(var(--aui-radius-sm, 7px) + 3px);
  background: var(--ui-fm-chip);
  font-size: 13px;
  color: var(--ui-fm-text);
  white-space: nowrap;
  animation: ui-fm-chip-in 260ms var(--ui-fm-ease) both;
}
.ui-fm__chip-label { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.ui-fm__chip button {
  display: grid;
  flex: none;
  place-items: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 0;
  border-radius: calc(var(--aui-radius-sm, 7px) - 1px);
  background: none;
  color: var(--ui-fm-muted);
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-fm__chip button:hover { background: var(--ui-fm-chip-hover); color: var(--ui-fm-ink); }
.ui-fm__chip svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; }

/* ---------- Groups ---------- */

.ui-fm__groups { display: grid; grid-template-columns: minmax(0, 1fr); padding-top: 6px; }
.ui-fm__group-head {
  display: flex;
  align-items: center;
  gap: 7px;
  width: calc(100% + 12px);
  height: 36px;
  margin: 2px -6px 0 !important;
  padding: 0 8px 0 6px;
  border: 0;
  border-radius: calc(var(--aui-radius-sm, 7px) + 3px);
  background: none;
  text-align: left;
  transition: background-color 160ms ease;
}
.ui-fm__group-head:hover { background: var(--ui-fm-row-hover); }
.ui-fm__chevron {
  width: 16px;
  height: 16px;
  flex: none;
  fill: none;
  stroke: var(--ui-fm-text);
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform: rotate(-90deg);
  transition: transform 260ms var(--ui-fm-ease);
}
.ui-fm__group[data-open] .ui-fm__chevron { transform: none; }
.ui-fm__group-label { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; text-align: start; font-size: 14px; font-weight: 500; }
.ui-fm__group-count { flex: none; font-size: 12.5px; color: var(--ui-fm-muted); font-variant-numeric: tabular-nums; }
.ui-fm__group-picked { flex: none; margin-left: auto; white-space: nowrap; font-size: 12.5px; color: var(--ui-fm-muted); }

.ui-fm__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 320ms var(--ui-fm-ease);
}
.ui-fm__group[data-open] .ui-fm__panel { grid-template-rows: 1fr; }
.ui-fm__panel-inner {
  min-height: 0;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1px;
  padding: 0 0 0;
  opacity: 0;
  transition: opacity 220ms ease, padding 320ms var(--ui-fm-ease);
}
.ui-fm__group[data-open] .ui-fm__panel-inner { opacity: 1; padding: 2px 0 6px; }
/* A long list scrolls inside the open group, so the card keeps a sane height */
.ui-fm__group[data-open] .ui-fm__panel-inner { max-height: 340px; overflow-x: hidden; overflow-y: auto; overscroll-behavior: contain; }

.ui-fm__option {
  display: flex;
  align-items: center;
  gap: 12px;
  width: calc(100% + 12px);
  height: 34px;
  margin: 0 -6px !important;
  padding: 0 6px;
  border: 0;
  border-radius: calc(var(--aui-radius-sm, 7px) + 3px);
  background: none;
  font-size: 14px;
  color: var(--ui-fm-text) !important;
  text-align: left;
  transition: background-color 160ms ease;
}
.ui-fm__option-label { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; text-align: start; }
.ui-fm__option:hover { background: var(--ui-fm-row-hover); }
.ui-fm__option:focus-visible { outline-offset: -2px; }
.ui-fm__box {
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  flex: none;
  border-radius: 6px;
  background: var(--ui-fm-box);
  box-shadow: inset 0 0 0 1px var(--ui-fm-box-line);
  transition: background-color 180ms ease, box-shadow 180ms ease;
}
.ui-fm__box svg {
  width: 14px;
  height: 14px;
  fill: none;
  stroke: var(--ui-fm-check);
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
  transition: stroke-dashoffset 260ms var(--ui-fm-ease);
}
.ui-fm__option[aria-checked="true"] .ui-fm__box { background: var(--aui-primary, var(--ui-fm-ink)); box-shadow: inset 0 0 0 1px var(--aui-primary, var(--ui-fm-ink)); }
.ui-fm__option[aria-checked="true"] .ui-fm__box svg { stroke-dashoffset: 0; }

/* ---------- Keyboard hints on the tray ---------- */

.ui-fm__hints { display: flex; justify-content: space-between; gap: 12px; padding: 10px 8px 4px; }
.ui-fm__hint { display: inline-flex; align-items: center; gap: 5px; font-size: 12.5px; color: var(--ui-fm-text); }
.ui-fm__hint kbd {
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: calc(var(--aui-radius-sm, 7px) - 1px);
  background: var(--ui-fm-kbd);
  box-shadow: 0 0 0 1px var(--ui-fm-card-line), 0 1px 1px rgba(0, 0, 0, 0.04);
}
.ui-fm__hint kbd:last-of-type { margin-right: 4px; }
.ui-fm__hint svg { width: 13px; height: 13px; fill: none; stroke: var(--ui-fm-text); stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round; }

@keyframes ui-fm-chip-in { from { opacity: 0; transform: scale(0.9); } }

@media (prefers-reduced-motion: reduce) {
  .ui-fm__chips-outer[data-smooth], .ui-fm__panel, .ui-fm__panel-inner, .ui-fm__chevron, .ui-fm__box svg { transition: none; }
  .ui-fm__chip { animation: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-fm {
  --ui-fm-tray: var(--aui-subtle, #161618);
  --ui-fm-card: var(--aui-surface, #232326);
  --ui-fm-card-line: var(--aui-border, rgba(255, 255, 255, 0.08));
  --ui-fm-ink: var(--aui-ink, #ededed);
  --ui-fm-text: var(--aui-ink, #c4c4c4);
  --ui-fm-muted: var(--aui-muted, #8f8f8f);
  --ui-fm-chip: var(--aui-subtle, #2a2a2d);
  --ui-fm-chip-hover: #313135;
  --ui-fm-box: #2a2a2d;
  --ui-fm-box-line: var(--aui-border-strong, rgba(255, 255, 255, 0.1));
  --ui-fm-check: var(--aui-on-primary, #121213);
  --ui-fm-row-hover: var(--aui-subtle, rgba(255, 255, 255, 0.05));
  --ui-fm-kbd: #232326;
  --ui-fm-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
  --ui-fm-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}
`;function P(){return e.jsx("div",{className:"stage",children:e.jsx(T,{})})}export{P as default};
