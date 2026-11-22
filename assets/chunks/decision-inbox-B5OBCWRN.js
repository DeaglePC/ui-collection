import{r as _,j as i}from"./client-CsvIHAk3.js";function g({decisions:t,onDecide:f,className:x}){const[u,l]=_.useState(()=>Object.fromEntries(t.map(e=>[e.id,{open:!e.collapsed}]))),c=(e,a)=>l(r=>({...r,[e]:{...r[e],...a}})),o=t.filter(e=>!u[e.id]?.answered).length,m=new Intl.NumberFormat("en").format(o),p=(e,a)=>{c(e.id,{answered:a==="primary"?e.primary:e.secondary}),f?.(e,a),window.setTimeout(()=>{l(r=>{const d={...r,[e.id]:{...r[e.id],gone:!0}},n=t.find(s=>s.id!==e.id&&!d[s.id]?.open&&!d[s.id]?.answered);return n&&(d[n.id]={...d[n.id],open:!0}),d})},1100)};return i.jsxs(i.Fragment,{children:[i.jsx("style",{href:"ui-decision-inbox",precedence:"default",children:w}),i.jsxs("section",{className:["ui-di",x].filter(Boolean).join(" "),"data-clear":o===0||void 0,children:[i.jsx("header",{className:"ui-di__head","aria-live":"polite",children:o>0?i.jsxs(i.Fragment,{children:[i.jsx(b,{}),i.jsxs("span",{children:[m," ",o===1?"needs":"need"," your input"]})]}):i.jsxs(i.Fragment,{children:[i.jsx(h,{}),i.jsx("span",{children:"All caught up"})]})}),i.jsxs("div",{className:"ui-di__card",children:[t.map(e=>{const a=u[e.id]??{open:!0};return i.jsx("div",{className:"ui-di__row","data-gone":a.gone||void 0,inert:a.gone,children:i.jsx("div",{className:"ui-di__row-inner",children:i.jsxs("div",{className:"ui-di__item","data-open":a.open||void 0,"data-answered":a.answered?!0:void 0,children:[a.open?i.jsx("p",{className:"ui-di__title",dir:"auto",children:e.title}):i.jsx("button",{type:"button",className:"ui-di__title ui-di__title--folded",dir:"auto",title:e.title,onClick:()=>c(e.id,{open:!0}),children:e.title}),i.jsx("div",{className:"ui-di__body","data-open":a.open||void 0,children:i.jsxs("div",{className:"ui-di__body-inner",children:[e.detail&&i.jsx("p",{className:"ui-di__detail",dir:"auto",children:e.detail}),i.jsx("div",{className:"ui-di__actions",children:a.answered?i.jsxs("span",{className:"ui-di__done",role:"status",children:[i.jsx(h,{}),i.jsx("span",{dir:"auto",children:a.answered})]}):i.jsxs(i.Fragment,{children:[i.jsx("button",{type:"button",className:"ui-di__btn ui-di__btn--primary",dir:"auto",onClick:()=>p(e,"primary"),children:e.primary}),i.jsx("button",{type:"button",className:"ui-di__btn",dir:"auto",onClick:()=>p(e,"secondary"),children:e.secondary})]})})]})})]})})},e.id)}),i.jsx("p",{className:"ui-di__empty",children:"Nothing waiting on you – new decisions show up here."})]})]})]})}const b=()=>i.jsxs("svg",{viewBox:"0 0 16 16",width:"16",height:"16","aria-hidden":"true",children:[i.jsx("path",{d:"M6.7 2.3a1.5 1.5 0 0 1 2.6 0l5.4 9.4A1.5 1.5 0 0 1 13.4 14H2.6a1.5 1.5 0 0 1-1.3-2.3Z",fill:"currentColor"}),i.jsx("path",{d:"M8 5.6v3.6",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round"}),i.jsx("circle",{cx:"8",cy:"11.4",r:"0.85",fill:"#fff"})]}),h=()=>i.jsxs("svg",{viewBox:"0 0 16 16",width:"16",height:"16","aria-hidden":"true",children:[i.jsx("circle",{cx:"8",cy:"8",r:"7",fill:"currentColor"}),i.jsx("path",{d:"m5 8.2 2 2 4-4.2",fill:"none",stroke:"#fff",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})]}),w=`
.ui-di {
  --ui-di-tray: var(--aui-subtle, #f0f0f0);
  --ui-di-card: var(--aui-surface, #ffffff);
  --ui-di-line: var(--aui-border, #f0f0f0);
  --ui-di-ink: var(--aui-ink, #171717);
  --ui-di-text: var(--aui-ink, #404040);
  --ui-di-muted: var(--aui-muted, #8f8f8f);
  --ui-di-faint: var(--aui-placeholder, #b5b5b5);
  --ui-di-alert: #e6730e;
  --ui-di-ok: var(--aui-success, #1e8a4f);
  --ui-di-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-di-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  box-sizing: border-box;
  width: 100%;
  max-width: 440px;
  /* Like the Chat Composer: a gray tray with the heading, the white card sits on top of it */
  background: var(--ui-di-tray);
  /* The gray tray frames the white card on every side */
  padding: 6px;
  border-radius: calc(var(--aui-radius-lg, 16px) + 6px);
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  color: var(--ui-di-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-di *, .ui-di *::before, .ui-di *::after { box-sizing: border-box; }
.ui-di button { margin: 0; font: inherit; cursor: pointer; }
.ui-di button:focus-visible { outline: 2px solid var(--ui-di-focus); outline-offset: 2px; }

.ui-di__head {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 11px 18px 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-di-alert);
  transition: color 300ms ease;
}
.ui-di[data-clear] .ui-di__head { color: var(--ui-di-ok); }

.ui-di__card {
  overflow: hidden;
  background: var(--ui-di-card);
  border: 1px solid var(--aui-border, #e5e5e5);
  border-radius: var(--aui-radius-lg, 16px);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}

/* Rows fold away with a height transition once answered */
.ui-di__row {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 460ms var(--ui-di-ease), opacity 300ms ease;
}
.ui-di__row[data-gone] { grid-template-rows: 0fr; opacity: 0; }
.ui-di__row-inner { min-height: 0; overflow: hidden; }
.ui-di__row + .ui-di__row .ui-di__item { border-top: 1px solid var(--ui-di-line); }
.ui-di__row[data-gone] + .ui-di__row .ui-di__item { border-top-color: transparent; }

.ui-di__item { padding: 16px 20px 14px; }
.ui-di__item:not([data-open]) { padding-bottom: 16px; }
.ui-di__title {
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: start;
  color: var(--ui-di-ink);
  overflow-wrap: anywhere;
}
.ui-di__title--folded {
  /* Still one line however long the title – it opens in full on click */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--ui-di-faint);
  transition: color 160ms ease;
}
.ui-di__title--folded:hover { color: var(--ui-di-muted); }

.ui-di__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 420ms var(--ui-di-ease);
}
.ui-di__body[data-open] { grid-template-rows: 1fr; }
/* Room around the buttons so the clipping for the fold never cuts their ring and shadow */
.ui-di__body-inner {
  min-height: 0;
  overflow: hidden;
  margin: 0 -4px -4px;
  padding: 0 4px 4px;
}
.ui-di__detail {
  margin: 4px 0 0;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-di-muted);
  white-space: pre-line;
  overflow-wrap: anywhere;
}
.ui-di__actions {
  display: flex;
  align-items: center;
  /* Long or translated answers go on a second line instead of out of the card */
  flex-wrap: wrap;
  gap: 8px;
  min-height: 30px;
  margin-top: 12px;
}

.ui-di__btn {
  max-width: 100%;
  min-height: 30px;
  padding: 5px 12px;
  border: 0;
  border-radius: calc(var(--aui-radius, 10px) - 1px);
  background: var(--aui-surface, #fff);
  box-shadow: 0 0 0 1px var(--aui-border, #e5e5e5), 0 1px 2px rgba(0, 0, 0, 0.04);
  font-size: 13px !important;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-di-ink);
  overflow-wrap: anywhere;
  transition: background-color 160ms ease, transform 160ms ease;
}
.ui-di__btn:hover { background: #f7f7f7; }
.ui-di__btn:active { transform: scale(0.98); }
.ui-di__btn--primary {
  background: linear-gradient(#323137, #201e25);
  box-shadow: 0 0 0 1px #0d0d0d, 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  color: #fff;
}
.ui-di__btn--primary:hover { background: linear-gradient(#3b3a41, #26242b); }

.ui-di__done {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  max-width: 100%;
  color: var(--ui-di-ok);
  overflow-wrap: anywhere;
  animation: ui-di-in 360ms var(--ui-di-ease);
}
.ui-di__done > span { min-width: 0; }

.ui-di__empty {
  display: none;
  margin: 0;
  padding: 18px 20px;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-di-muted);
}
.ui-di[data-clear] .ui-di__empty { display: block; animation: ui-di-in 420ms var(--ui-di-ease) 300ms both; }

@keyframes ui-di-in {
  from { opacity: 0; transform: translateY(3px); }
}

@media (prefers-reduced-motion: reduce) {
  .ui-di__row, .ui-di__body { transition: none; }
  .ui-di__done, .ui-di__empty { animation: none !important; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-di {
  --ui-di-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
  --ui-di-tray: var(--aui-subtle, #161618);
  --ui-di-card: var(--aui-surface, #232326);
  --ui-di-line: var(--aui-border, rgba(255, 255, 255, 0.08));
  --ui-di-ink: var(--aui-ink, #ededed);
  --ui-di-text: var(--aui-ink, #c4c4c4);
  --ui-di-muted: var(--aui-muted, #8f8f8f);
  --ui-di-faint: var(--aui-placeholder, #6b6b70);
  --ui-di-alert: var(--aui-orange, #f28a2e);
  --ui-di-ok: #41bd74;
}
:where(.dark, [data-theme="dark"]) .ui-di__card {
  border-color: var(--aui-border, rgba(255, 255, 255, 0.08));
  box-shadow: var(--aui-shadow-card, 0 1px 2px rgba(0, 0, 0, 0.4));
}
:where(.dark, [data-theme="dark"]) .ui-di__btn {
  background: var(--aui-surface, #2a2a2d);
  box-shadow: 0 0 0 1px var(--aui-border, rgba(255, 255, 255, 0.1)), 0 1px 2px rgba(0, 0, 0, 0.4);
}
:where(.dark, [data-theme="dark"]) .ui-di__btn:hover { background: #313135; }
/* The dark primary button inverts, like on the site */
:where(.dark, [data-theme="dark"]) .ui-di__btn--primary {
  background: linear-gradient(#f4f4f5, #e4e4e7);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.3), inset 0 1px 0 #ffffff;
  color: #121213;
}
:where(.dark, [data-theme="dark"]) .ui-di__btn--primary:hover { background: linear-gradient(#ffffff, #ececef); }
`;function y(){return i.jsx("div",{className:"stage",children:i.jsx(g,{decisions:[{id:"a",title:"发布这一版？",detail:"免费组件已经核对过许可。",primary:"发布",secondary:"再看一眼"},{id:"b",title:"关掉实验？",detail:"只有 3% 的人用过。",primary:"关掉",secondary:"保留",collapsed:!0}]})})}export{y as default};
