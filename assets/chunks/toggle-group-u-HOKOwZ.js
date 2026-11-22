import{r as f,j as n}from"./client-CsvIHAk3.js";function D(i){const{items:s,size:b="md",variant:m="tray",disabled:u=!1,"aria-label":x,"aria-labelledby":w,className:y}=i,_=i.type==="single",g=f.useMemo(()=>{const t=new Set;return(Array.isArray(s)?s:[]).filter(e=>!e||e.value==null||t.has(String(e.value))?!1:(t.add(String(e.value)),!0))},[s]),k=b==="sm"||b==="lg"?b:"md",z=m==="buttons"?"buttons":"tray",[A,j]=f.useState(()=>h(i.defaultValue)),v=i.value!==void 0,d=v?h(i.value):A,c=f.useRef(null),[S,L]=f.useState(null),N=t=>{const e=g.find(r=>r.value===t);if(!e||e.disabled||u)return;const a=d.includes(t),l=_?a?[]:[t]:g.map(r=>r.value).filter(r=>r===t?!a:d.includes(r));v||j(l),i.type==="single"?i.onChange?.(l[0]??null):i.onChange?.(l)},p=g.filter(t=>!t.disabled&&!u),C=p.find(t=>t.value===S)?.value??p.find(t=>d.includes(t.value))?.value??p[0]?.value,I=t=>{if(!p.length||t.altKey||t.ctrlKey||t.metaKey)return;const e=Array.from(c.current?.querySelectorAll(":scope > .ui-tgl__item:not(:disabled)")??[]),a=e.indexOf(document.activeElement);if(a<0)return;const l=c.current?getComputedStyle(c.current).direction==="rtl":!1,r=l?"ArrowLeft":"ArrowRight",R=l?"ArrowRight":"ArrowLeft";let o=-1;t.key===r||t.key==="ArrowDown"?o=(a+1)%e.length:t.key===R||t.key==="ArrowUp"?o=(a-1+e.length)%e.length:t.key==="Home"?o=0:t.key==="End"&&(o=e.length-1),!(o<0)&&(t.preventDefault(),e[o].focus())};return n.jsxs("div",{ref:c,role:"group","aria-label":x,"aria-labelledby":w,"aria-disabled":u||void 0,className:["ui-tgl",y].filter(Boolean).join(" "),"data-size":k,"data-variant":z,"data-disabled":u||void 0,onKeyDown:I,children:[n.jsx("style",{href:"ui-toggle-group",precedence:"default",children:E}),g.map(t=>{const e=d.includes(t.value),a=t.label??(t.icon?null:String(t.value)),l=a==null;return n.jsxs("button",{type:"button",className:"ui-tgl__item","aria-pressed":e,"aria-label":t.ariaLabel,title:l?t.ariaLabel:void 0,"data-icon-only":l||void 0,disabled:t.disabled||u,tabIndex:t.value===C?0:-1,onFocus:()=>L(t.value),onClick:()=>N(t.value),children:[t.icon!=null&&n.jsx("span",{className:"ui-tgl__icon","aria-hidden":"true",children:t.icon}),a!=null&&n.jsx("span",{className:"ui-tgl__label",dir:"auto",children:a})]},String(t.value))})]})}function h(i){return Array.isArray(i)?i.filter(s=>s!=null):i==null?[]:[i]}const E=`
/* Colors as variables – override them on .ui-tgl (see Theming in the docs) */
.ui-tgl {
  --ui-tgl-tray: var(--aui-subtle, #f0f0f0);
  --ui-tgl-pill: var(--aui-surface, #ffffff);
  --ui-tgl-pill-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.08), 0 2px 8px -2px rgba(0, 0, 0, 0.06);
  --ui-tgl-line: var(--aui-border, #e5e5e5);
  --ui-tgl-line-strong: #d4d4d4;
  --ui-tgl-chip: var(--aui-surface, #ffffff);
  --ui-tgl-fill: #f0f0f0;
  --ui-tgl-wash: rgba(0, 0, 0, 0.04);
  --ui-tgl-ink: var(--aui-ink, #171717);
  --ui-tgl-text: var(--aui-muted, #737373);
  --ui-tgl-hover-text: var(--aui-ink, #404040);
  --ui-tgl-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-tgl-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  /* Size: md */
  --ui-tgl-h: 30px;
  --ui-tgl-px: 12px;
  --ui-tgl-fs: 13.5px;
  --ui-tgl-icon-size: 15px;
  --ui-tgl-gap: 8px;
  --ui-tgl-pad: 3px;
  --ui-tgl-r: calc(var(--aui-radius, 10px) + 1px);

  box-sizing: border-box;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--ui-tgl-gap);
  max-width: 100%;
  min-width: 0;
  vertical-align: middle;
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: var(--ui-tgl-fs);
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-tgl-text);
  -webkit-font-smoothing: antialiased;
}
.ui-tgl[data-size="sm"] { --ui-tgl-h: 26px; --ui-tgl-px: 10px; --ui-tgl-fs: 12.5px; --ui-tgl-icon-size: 14px; --ui-tgl-gap: 6px; --ui-tgl-pad: 2px; --ui-tgl-r: calc(var(--aui-radius, 10px) - 1px); }
.ui-tgl[data-size="lg"] { --ui-tgl-h: 36px; --ui-tgl-px: 16px; --ui-tgl-fs: 14px; --ui-tgl-icon-size: 16px; --ui-tgl-pad: 4px; --ui-tgl-r: calc(var(--aui-radius, 10px) + 3px); }
.ui-tgl[data-disabled] { opacity: 0.5; }
.ui-tgl *, .ui-tgl *::before, .ui-tgl *::after { box-sizing: border-box; }
/* Nothing to show – no empty track */
.ui-tgl:not(:has(> .ui-tgl__item)) { display: none; }

/* An item: the pressed fill is its own layer, so it can grow in from the middle */
.ui-tgl__item {
  position: relative;
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  gap: 6px;
  max-width: 100%;
  min-width: var(--ui-tgl-h);
  height: var(--ui-tgl-h);
  margin: 0;
  padding: 0 var(--ui-tgl-px);
  border: 0;
  border-radius: calc(var(--ui-tgl-r) - var(--ui-tgl-pad));
  background: transparent;
  color: inherit;
  font: inherit;
  white-space: nowrap;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: color 200ms ease, background-color 160ms ease, box-shadow 160ms ease, transform 200ms var(--ui-tgl-ease);
}
.ui-tgl__item::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--ui-tgl-pill);
  box-shadow: var(--ui-tgl-pill-shadow);
  opacity: 0;
  transform: scale(0.86);
  pointer-events: none;
  transition: opacity 160ms ease, transform 320ms var(--ui-tgl-ease);
}
.ui-tgl__item[aria-pressed="true"] { color: var(--ui-tgl-ink); }
.ui-tgl__item[aria-pressed="true"]::before { opacity: 1; transform: none; }
.ui-tgl__item[data-icon-only] { padding: 0; width: var(--ui-tgl-h); }
.ui-tgl__item:active:not(:disabled) { transform: scale(0.96); }
.ui-tgl__item:disabled { opacity: 0.4; cursor: not-allowed; }
.ui-tgl[data-disabled] .ui-tgl__item:disabled { opacity: 1; }
.ui-tgl__item:focus-visible { outline: 2px solid var(--ui-tgl-focus); outline-offset: 2px; }
@media (hover: hover) {
  .ui-tgl__item:not([aria-pressed="true"]):not(:disabled):hover { color: var(--ui-tgl-hover-text); }
}

.ui-tgl__icon, .ui-tgl__label { position: relative; z-index: 1; }
.ui-tgl__icon { display: grid; flex: none; place-items: center; width: var(--ui-tgl-icon-size); height: var(--ui-tgl-icon-size); overflow: hidden; }
.ui-tgl__icon svg, .ui-tgl__icon img { display: block; width: 100%; height: 100%; object-fit: contain; }
/* Long labels end in … instead of pushing the row wider than its container */
.ui-tgl__label { min-width: 0; overflow: hidden; text-overflow: ellipsis; }

/* Tray (default): the light-gray track of the Segmented Control; it scrolls sideways if it doesn't fit */
.ui-tgl[data-variant="tray"] {
  flex-wrap: nowrap;
  gap: 0;
  padding: var(--ui-tgl-pad);
  overflow-x: auto;
  border-radius: var(--ui-tgl-r);
  background: var(--ui-tgl-tray);
  scrollbar-width: none;
}
.ui-tgl[data-variant="tray"]::-webkit-scrollbar { display: none; }
.ui-tgl[data-variant="tray"] .ui-tgl__item:focus-visible { outline-offset: -2px; }

/* Buttons: separate white chips with an edge; pressed ones sink into a gray fill. Many of them wrap */
.ui-tgl[data-variant="buttons"] .ui-tgl__item {
  border-radius: calc(var(--ui-tgl-r) - 2px);
  background: var(--ui-tgl-chip);
  box-shadow: inset 0 0 0 1px var(--ui-tgl-line), 0 1px 2px rgba(0, 0, 0, 0.04);
}
.ui-tgl[data-variant="buttons"] .ui-tgl__item::before { background: var(--ui-tgl-fill); box-shadow: inset 0 0 0 1px var(--ui-tgl-line-strong); }
.ui-tgl[data-variant="buttons"] .ui-tgl__item[aria-pressed="true"] { box-shadow: none; }
@media (hover: hover) {
  .ui-tgl[data-variant="buttons"] .ui-tgl__item:not([aria-pressed="true"]):not(:disabled):hover { background: var(--aui-subtle, #fafafa); box-shadow: inset 0 0 0 1px var(--ui-tgl-line-strong), 0 1px 2px rgba(0, 0, 0, 0.04); }
}

/* Touch screens: every item at least 36px tall */
@media (pointer: coarse) {
  .ui-tgl[data-size] { --ui-tgl-h: 36px; }
  .ui-tgl[data-size="lg"] { --ui-tgl-h: 40px; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-tgl__item, .ui-tgl__item::before { transition: none; }
  .ui-tgl__item:active:not(:disabled) { transform: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tgl {
  --ui-tgl-tray: var(--aui-subtle, #111113);
  --ui-tgl-pill: var(--aui-surface, #26262a);
  --ui-tgl-pill-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 1px 2px rgba(0, 0, 0, 0.4);
  --ui-tgl-line: var(--aui-border, #2a2a2e);
  --ui-tgl-line-strong: #3a3a3f;
  --ui-tgl-chip: var(--aui-surface, #161618);
  --ui-tgl-fill: #26262a;
  --ui-tgl-wash: rgba(255, 255, 255, 0.05);
  --ui-tgl-ink: var(--aui-ink, #ededed);
  --ui-tgl-text: var(--aui-muted, #8b8b92);
  --ui-tgl-hover-text: var(--aui-ink, #c8c8cc);
  --ui-tgl-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
:where(.dark, [data-theme="dark"]) .ui-tgl[data-variant="buttons"] .ui-tgl__item { box-shadow: inset 0 0 0 1px var(--ui-tgl-line); }
`;function T(){return n.jsx("div",{className:"stage",children:n.jsx(D,{})})}export{T as default};
