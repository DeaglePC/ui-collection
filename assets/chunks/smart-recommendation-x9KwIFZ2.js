import{r as o,j as e}from"./client-CsvIHAk3.js";const m=["No signal","Weak signal","Good signal","Strong signal"],c=a=>{const i=Math.round(Number(a));return Number.isFinite(i)?Math.min(3,Math.max(0,i)):0},E=a=>new RegExp("^\\p{Lu}\\p{Ll}","u").test(a)?a.charAt(0).toLowerCase()+a.slice(1):a;function R({title:a="Smart recommendation",options:i,onAccept:y,onUndo:j,defaultOpen:N=!0,className:C}){const[_,S]=o.useState(0),[z,b]=o.useState(null),[h,g]=o.useState(N),[u,d]=o.useState(!1),f=o.useRef(null),[L,v]=o.useState(!1);o.useLayoutEffect(()=>{const r=f.current,s=r?.querySelector(".ui-sr__menu"),t=r?.closest(".ui-sr");if(!u||!r||!s||!t||getComputedStyle(r).position==="static")return v(!1);v(r.getBoundingClientRect().right-s.offsetWidth<t.getBoundingClientRect().left-24)},[u]),o.useEffect(()=>{if(!u)return;const r=t=>!f.current?.contains(t.target)&&d(!1),s=t=>t.key==="Escape"&&d(!1);return window.addEventListener("pointerdown",r),window.addEventListener("keydown",s),()=>{window.removeEventListener("pointerdown",r),window.removeEventListener("keydown",s)}},[u]);const l=_<i.length?_:0,n=i[l];if(!n)return null;const A=l===0,x=z===l,p=c(n.signal),w=`Accept ${E(String(n.label))}`;return e.jsxs(e.Fragment,{children:[e.jsx("style",{href:"ui-smart-recommendation",precedence:"default",children:B}),e.jsxs("section",{className:["ui-sr",C].filter(Boolean).join(" "),"aria-label":a,"data-accepted":x||void 0,children:[e.jsxs("div",{className:"ui-sr__card",children:[e.jsxs("button",{type:"button",className:"ui-sr__head","aria-expanded":h,onClick:()=>g(r=>!r),children:[e.jsx(M,{}),e.jsx("span",{className:"ui-sr__title",dir:"auto",title:a,children:a}),!A&&e.jsx("span",{className:"ui-sr__pill",children:"Alternative"}),e.jsx("span",{className:"ui-sr__chevron",children:e.jsx(k,{d:"m4.5 6.25 3.5 3.5 3.5-3.5"})})]}),e.jsx("div",{className:"ui-sr__body","data-open":h||void 0,inert:!h,children:e.jsx("p",{className:"ui-sr__reason",dir:"auto",children:n.reason},l)})]}),e.jsxs("footer",{className:"ui-sr__foot",children:[e.jsxs("span",{className:"ui-sr__signal","data-level":p,title:m[p],children:[e.jsx("span",{className:"ui-sr__bars","aria-hidden":"true",children:[1,2,3].map(r=>e.jsx("span",{"data-on":p>=r||void 0},r))}),m[p]]}),e.jsxs("div",{className:"ui-sr__actions",children:[i.length>1&&!x&&e.jsxs("div",{className:"ui-sr__alt",ref:f,children:[e.jsx("button",{type:"button",className:"ui-sr__btn","aria-haspopup":"menu","aria-expanded":u,onClick:()=>d(r=>!r),children:"Alternatives"}),u&&e.jsx("div",{className:"ui-sr__menu",role:"menu","data-flip":L||void 0,children:i.map((r,s)=>e.jsxs("button",{type:"button",role:"menuitemradio","aria-checked":s===l,className:"ui-sr__option",onClick:()=>{S(s),d(!1),g(!0)},children:[e.jsxs("span",{className:"ui-sr__option-label",children:[e.jsx("span",{className:"ui-sr__option-name",dir:"auto",title:r.label,children:r.label}),s===0&&e.jsx("span",{className:"ui-sr__tag",children:"Recommended"})]}),e.jsx("span",{className:"ui-sr__mini","data-level":c(r.signal),"aria-label":m[c(r.signal)],children:[1,2,3].map(t=>e.jsx("span",{"data-on":c(r.signal)>=t||void 0},t))})]},`${r.id}-${s}`))})]}),x?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"ui-sr__done",role:"status",children:[e.jsx(k,{d:"m3.5 8.5 3 3 6-7",size:14}),e.jsxs("span",{className:"ui-sr__done-text",title:`${n.label} accepted`,children:[e.jsx("bdi",{children:n.label})," accepted"]})]}),e.jsx("button",{type:"button",className:"ui-sr__btn",onClick:()=>{b(null),j?.(n)},children:"Undo"})]}):e.jsx("button",{type:"button",className:"ui-sr__btn ui-sr__btn--primary",title:w,onClick:()=>{b(l),d(!1),y?.(n)},children:e.jsx("span",{className:"ui-sr__btn-text",children:w})})]})]})]})]})}const M=()=>e.jsxs("svg",{className:"ui-sr__spark",viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("path",{d:"M9 3.5H4A1.5 1.5 0 0 0 2.5 5v7A1.5 1.5 0 0 0 4 13.5h7a1.5 1.5 0 0 0 1.5-1.5V8"}),e.jsx("path",{d:"M12.5 1.5v4M10.5 3.5h4"})]}),k=({d:a,size:i=16})=>e.jsx("svg",{viewBox:"0 0 16 16",width:i,height:i,fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:a})}),B=`
.ui-sr {
  --ui-sr-tray: var(--aui-subtle, #f0f0f0);
  --ui-sr-card: var(--aui-surface, #ffffff);
  --ui-sr-ink: var(--aui-ink, #171717);
  --ui-sr-text: var(--aui-ink, #404040);
  --ui-sr-muted: var(--aui-muted, #8f8f8f);
  --ui-sr-accent: var(--aui-blue, #4fb0fe);
  --ui-sr-ok: var(--aui-success, #1e8a4f);
  --ui-sr-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-sr-accent-text: var(--aui-blue, #4fb0fe);
  --ui-sr-border: var(--aui-border, #e5e5e5);
  --ui-sr-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  --ui-sr-head-hover: var(--aui-subtle, #f8f8f8);
  --ui-sr-pill: #f4f0ff;
  --ui-sr-pill-text: var(--aui-purple, #a651f0);
  --ui-sr-bar: #d4d4d4;
  --ui-sr-btn: var(--aui-surface, #fff);
  --ui-sr-btn-hover: #f7f7f7;
  --ui-sr-menu: var(--aui-overlay, #fff);
  --ui-sr-option-hover: var(--aui-subtle, #f5f5f5);
  --ui-sr-option-on: #f5f8ff;
  --ui-sr-tag: #eef7ff;
  --ui-sr-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  box-sizing: border-box;
  width: 100%;
  max-width: 440px;
  container-type: inline-size;
  /* Like the Chat Composer: the white card on a gray tray, the actions live in the tray below */
  background: var(--ui-sr-tray);
  /* The gray tray frames the white card on every side */
  padding: 6px;
  border-radius: calc(var(--aui-radius-lg, 16px) + 6px);
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  color: var(--ui-sr-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-sr *, .ui-sr *::before, .ui-sr *::after { box-sizing: border-box; }
.ui-sr button { margin: 0; font: inherit; color: inherit; cursor: pointer; }
.ui-sr button:focus-visible { outline: 2px solid var(--ui-sr-focus); outline-offset: 2px; }

.ui-sr__card {
  padding: 6px 8px 8px;
  background: var(--ui-sr-card);
  border: 1px solid var(--ui-sr-border);
  border-radius: var(--aui-radius-lg, 16px);
  box-shadow: var(--ui-sr-shadow);
}
.ui-sr__head {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 0;
  border-radius: calc(var(--aui-radius-lg, 16px) - 4px);
  background: transparent;
  text-align: left;
  transition: background-color 140ms ease;
}
.ui-sr__head:hover { background: var(--ui-sr-head-hover); }
.ui-sr button.ui-sr__head:focus-visible { outline-offset: -2px; }
.ui-sr__spark { flex: none; color: var(--ui-sr-accent-text); }
.ui-sr__title { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-size: 15px; font-weight: 500; }
.ui-sr__pill {
  flex: none;
  padding: 1px 8px;
  border-radius: 999px;
  background: var(--ui-sr-pill);
  font-size: 11.5px;
  font-weight: 500;
  color: var(--ui-sr-pill-text);
}
.ui-sr__chevron { display: grid; margin-left: auto; color: var(--ui-sr-muted); transition: transform 280ms var(--ui-sr-ease); }
.ui-sr__head[aria-expanded="false"] .ui-sr__chevron { transform: rotate(-90deg); }
.ui-sr__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 340ms var(--ui-sr-ease);
}
.ui-sr__body[data-open] { grid-template-rows: 1fr; }
.ui-sr__reason {
  min-height: 0;
  overflow: hidden;
  margin: 0;
  padding: 0 10px;
  font-size: 14px;
  line-height: 21px;
  color: var(--ui-sr-text);
  text-align: start;
  white-space: pre-line;
  overflow-wrap: anywhere;
  animation: ui-sr-swap 360ms var(--ui-sr-ease);
}
.ui-sr__body[data-open] .ui-sr__reason { padding-bottom: 8px; }
.ui-sr__reason strong { font-weight: 500; color: var(--ui-sr-ink); }

.ui-sr__foot {
  display: flex;
  align-items: center;
  /* Narrow containers: the actions move below the signal instead of running out of the tray */
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 10px;
  min-height: 50px;
  padding: 8px 8px 8px 16px;
}
.ui-sr__signal {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  white-space: nowrap;
  color: var(--ui-sr-muted);
}
.ui-sr__bars, .ui-sr__mini { display: inline-flex; align-items: flex-end; gap: 2px; }
.ui-sr__bars span, .ui-sr__mini span {
  width: 3px;
  border-radius: 1px;
  background: var(--ui-sr-bar);
  transition: background-color 260ms ease;
}
.ui-sr__bars span:nth-child(1), .ui-sr__mini span:nth-child(1) { height: 6px; }
.ui-sr__bars span:nth-child(2), .ui-sr__mini span:nth-child(2) { height: 9px; }
.ui-sr__bars span:nth-child(3), .ui-sr__mini span:nth-child(3) { height: 12px; }
/* Scoped to the card, so other components with data-level on the page keep their colors */
.ui-sr [data-level="1"] > span[data-on] { background: var(--aui-amber, #e8b000); }
.ui-sr [data-level="2"] > span[data-on] { background: var(--ui-sr-accent); }
.ui-sr [data-level="3"] > span[data-on] { background: var(--ui-sr-ok); }
.ui-sr__signal[data-level="0"] .ui-sr__bars span:first-child { background: #8f8f8f; }

/* Never wider than the row – a long label shortens in its button instead of running out of the tray */
.ui-sr__actions { display: flex; align-items: center; gap: 6px; min-width: 0; max-width: 100%; margin-left: auto; }
.ui-sr__alt, .ui-sr__actions > .ui-sr__btn:not(.ui-sr__btn--primary) { flex: none; }
.ui-sr__btn {
  height: 32px;
  padding: 0 12px;
  border: 0;
  border-radius: var(--aui-radius, 10px);
  background: var(--ui-sr-btn);
  box-shadow: 0 0 0 1px var(--ui-sr-border), 0 1px 2px rgba(0, 0, 0, 0.04);
  font-size: 13px !important;
  font-weight: 500;
  min-width: 0;
  max-width: 100%;
  white-space: nowrap;
  transition: background-color 160ms ease, transform 160ms ease;
}
.ui-sr__btn--primary { display: inline-flex; align-items: center; }
.ui-sr__btn-text { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.ui-sr__btn:hover { background: var(--ui-sr-btn-hover); }
.ui-sr__btn:active { transform: scale(0.98); }
.ui-sr__btn--primary {
  background: linear-gradient(#323137, #201e25);
  box-shadow: 0 0 0 1px #0d0d0d, 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  color: #fff !important;
}
.ui-sr__btn--primary:hover { background: linear-gradient(#3b3a41, #26242b); }
.ui-sr__done {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  padding-right: 4px;
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-sr-ok);
  animation: ui-sr-swap 300ms var(--ui-sr-ease);
}

.ui-sr__alt { position: relative; }
.ui-sr__menu {
  position: absolute;
  bottom: calc(100% + 8px);
  right: 0;
  z-index: 5;
  display: grid;
  gap: 2px;
  /* The column never grows with a long name; a long list scrolls */
  grid-template-columns: minmax(0, 1fr);
  width: 260px;
  max-height: min(320px, 60vh);
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 4px;
  border-radius: calc(var(--aui-radius-lg, 16px) - 4px);
  background: var(--ui-sr-menu);
  box-shadow: var(--aui-shadow-popover, 0 0 0 1px var(--ui-sr-border), 0 12px 30px -8px rgba(0, 0, 0, 0.2));
  animation: ui-sr-drop 180ms var(--ui-sr-ease);
}
.ui-sr__menu[data-flip] { right: auto; left: 0; }
/* Narrow: the actions sit on their own row – the menu lines up with its right edge so it stays inside */
@container (max-width: 420px) {
  .ui-sr__actions { position: relative; }
  .ui-sr__alt { position: static; }
  .ui-sr__menu { width: min(260px, 100cqw - 24px); }
}
.ui-sr__option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  min-height: 34px;
  padding: 0 10px;
  border: 0;
  border-radius: calc(var(--aui-radius-sm, 7px) + 1px);
  background: transparent;
  font-size: 13px !important;
  text-align: left;
}
.ui-sr__option:hover { background: var(--ui-sr-option-hover); }
.ui-sr__option[aria-checked="true"] { background: var(--ui-sr-option-on); }
.ui-sr button.ui-sr__option:focus-visible { outline-offset: -2px; }
.ui-sr__option-label { display: inline-flex; flex: 0 1 auto; align-items: center; gap: 6px; min-width: 0; }
.ui-sr__option-name, .ui-sr__done-text { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-sr__tag, .ui-sr__mini { flex: none; }
.ui-sr__tag { padding: 0 6px; border-radius: 999px; background: var(--ui-sr-tag); font-size: 10.5px; font-weight: 500; line-height: 16px; color: var(--ui-sr-accent-text); }

@keyframes ui-sr-swap { from { opacity: 0; transform: translateY(2px); } }
@keyframes ui-sr-drop { from { opacity: 0; transform: translateY(4px) scale(0.98); } }
@media (prefers-reduced-motion: reduce) {
  .ui-sr__reason, .ui-sr__done, .ui-sr__menu { animation: none; }
  .ui-sr__body, .ui-sr__chevron { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-sr {
  --ui-sr-tray: var(--aui-subtle, #161618);
  --ui-sr-card: var(--aui-surface, #232326);
  --ui-sr-ink: var(--aui-ink, #ededed);
  --ui-sr-text: var(--aui-ink, #c4c4c4);
  --ui-sr-muted: var(--aui-muted, #8f8f8f);
  --ui-sr-ok: #3fb971;
  --ui-sr-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
  --ui-sr-accent-text: var(--aui-info, #4fb0fe);
  --ui-sr-border: var(--aui-border, rgba(255, 255, 255, 0.08));
  --ui-sr-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  --ui-sr-head-hover: var(--aui-subtle, rgba(255, 255, 255, 0.06));
  --ui-sr-pill: color-mix(in srgb, var(--aui-purple, #b98af0) 18%, transparent);
  --ui-sr-pill-text: var(--aui-purple, #b98af0);
  --ui-sr-bar: rgba(255, 255, 255, 0.14);
  --ui-sr-btn: var(--aui-surface, #2a2a2d);
  --ui-sr-btn-hover: #313135;
  --ui-sr-menu: var(--aui-overlay, #2a2a2d);
  --ui-sr-option-hover: var(--aui-subtle, #313135);
  --ui-sr-option-on: color-mix(in srgb, var(--aui-blue, #4fb0fe) 16%, transparent);
  --ui-sr-tag: color-mix(in srgb, var(--aui-blue, #4fb0fe) 16%, transparent);
}
:where(.dark, [data-theme="dark"]) .ui-sr__menu {
  box-shadow: var(--aui-shadow-popover, 0 0 0 1px rgba(255, 255, 255, 0.1), 0 12px 30px -8px rgba(0, 0, 0, 0.5));
}
:where(.dark, [data-theme="dark"]) .ui-sr__btn--primary {
  background: linear-gradient(#f4f4f5, #e4e4e7);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.35), inset 0 1px 0 #ffffff;
  color: #121213 !important;
}
:where(.dark, [data-theme="dark"]) .ui-sr__btn--primary:hover { background: linear-gradient(#ffffff, #ececef); }
`;function q(){return e.jsx("div",{className:"stage",children:e.jsx(R,{items:[{id:"a",label:"示例",value:"a",href:"#",name:"示例",title:"示例",text:"预览文字",status:"done",quote:"预览"}],options:[{label:"示例",value:"a"}],steps:[{id:"a",label:"一步"}],nodes:[{id:"a",label:"示例",children:[]}],comments:[{id:"a",author:"Ada",body:"预览",text:"预览"}],notifications:[{id:"a",title:"示例",body:"预览"}],tips:[{title:"示例",body:"预览"}],logos:["甲","乙","丙"],testimonials:[{name:"Ada",quote:"预览",role:"设计"}],links:[{label:"示例",href:"#"}],columns:[{id:"a",header:"列",accessorKey:"a"}],data:[{a:"示例"}],text:"预览文字",value:"预览",label:"示例",code:"const n = 1",title:"标题",placeholder:"输入"})})}export{q as default};
