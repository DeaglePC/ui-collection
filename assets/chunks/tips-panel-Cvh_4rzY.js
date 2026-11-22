import{r as b,j as e}from"./client-CsvIHAk3.js";function g({title:i="Tips",tips:r,onClose:o,closeLabel:l="Close",className:c}){const[n,x]=b.useState(new Set),s=new Map,d=r.map(a=>{const t=s.get(a.id)??0;return s.set(a.id,t+1),{tip:a,key:t?`${a.id}#${t}`:a.id}}),f=d.filter(a=>n.has(a.key)).length;return e.jsxs(e.Fragment,{children:[e.jsx("style",{href:"ui-tips-panel",precedence:"default",children:v}),e.jsxs("section",{className:["ui-tp",c].filter(Boolean).join(" "),"aria-label":i,children:[e.jsxs("header",{className:"ui-tp__head",children:[e.jsx("h3",{className:"ui-tp__title",dir:"auto",children:i}),e.jsxs("span",{className:"ui-tp__count","aria-live":"polite",children:[u.format(f),"/",u.format(r.length)," done"]})]}),e.jsx("div",{className:"ui-tp__card",children:e.jsx("ul",{className:"ui-tp__grid",children:d.map(({tip:a,key:t},h)=>{const p=n.has(t);return e.jsxs("li",{className:"ui-tp__tip","data-done":p||void 0,style:{animationDelay:`${80+Math.min(h,12)*50}ms`},children:[e.jsx("p",{className:"ui-tp__tip-title",dir:"auto",children:a.title}),e.jsx("p",{className:"ui-tp__tip-text",dir:"auto",children:a.description}),p?e.jsxs("span",{className:"ui-tp__done",role:"status",children:[e.jsx(_,{}),a.doneLabel??"Done"]}):e.jsx("button",{type:"button",className:["ui-tp__btn",a.primary&&"ui-tp__btn--primary"].filter(Boolean).join(" "),onClick:()=>{x(m=>new Set(m).add(t)),a.onAction?.()},children:a.action})]},t)})})}),o&&e.jsx("footer",{className:"ui-tp__foot",children:e.jsx("button",{type:"button",className:"ui-tp__btn",onClick:o,children:l})})]})]})}const u=new Intl.NumberFormat("en"),_=()=>e.jsxs("svg",{viewBox:"0 0 16 16",width:"16",height:"16","aria-hidden":"true",children:[e.jsx("circle",{cx:"8",cy:"8",r:"7",fill:"currentColor"}),e.jsx("path",{d:"m5 8.2 2 2 4-4.2",fill:"none",stroke:"#fff",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})]}),v=`
.ui-tp {
  --ui-tp-tray: var(--aui-subtle, #f0f0f0);
  --ui-tp-card: var(--aui-surface, #ffffff);
  --ui-tp-line: var(--aui-border, #ececec);
  --ui-tp-ink: var(--aui-ink, #171717);
  --ui-tp-muted: var(--aui-muted, #737373);
  --ui-tp-ok: var(--aui-blue, #4fb0fe);
  --ui-tp-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  /* Height of the tip list before it scrolls */
  --ui-tp-max-height: 420px;
  --ui-tp-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  box-sizing: border-box;
  width: 100%;
  max-width: 760px;
  /* Like the Chat Composer: a gray tray with heading and footer, the white card sits on top of it */
  background: var(--ui-tp-tray);
  /* The gray tray frames the white card on every side */
  padding: 6px;
  border-radius: calc(var(--aui-radius-lg, 16px) + 6px);
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  color: var(--ui-tp-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-tp *, .ui-tp *::before, .ui-tp *::after { box-sizing: border-box; }
.ui-tp button { margin: 0; font: inherit; cursor: pointer; }
.ui-tp button:focus-visible { outline: 2px solid var(--ui-tp-focus); outline-offset: 2px; }

.ui-tp__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 13px 20px 12px;
}
.ui-tp__title {
  min-width: 0;
  margin: 0;
  overflow-wrap: anywhere;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.01em;
}
.ui-tp__count {
  flex: none;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  color: var(--ui-tp-muted);
}

.ui-tp__card {
  container-type: inline-size;
  max-height: var(--ui-tp-max-height);
  overflow-y: auto;
  scrollbar-width: thin;
  background: var(--ui-tp-card);
  border: 1px solid var(--aui-border, #e5e5e5);
  border-radius: var(--aui-radius-lg, 16px);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}
.ui-tp__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin: 0;
  padding: 14px;
  list-style: none;
}
@container (max-width: 560px) { .ui-tp__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@container (max-width: 380px) { .ui-tp__grid { grid-template-columns: minmax(0, 1fr); } }

.ui-tp__tip {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 16px 14px;
  border: 1px solid var(--ui-tp-line);
  border-radius: calc(var(--aui-radius-lg, 16px) - 2px);
  animation: ui-tp-in 480ms var(--ui-tp-ease) both;
  transition: background-color 260ms ease, border-color 260ms ease;
}
.ui-tp__tip[data-done] { background: var(--aui-subtle, #fafafa); }
/* Tips are shrink-to-fit flex items – max-width keeps long words and URLs inside the tile */
.ui-tp__tip-title {
  max-width: 100%;
  margin: 0;
  overflow-wrap: anywhere;
  text-align: start;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
.ui-tp__tip-text {
  flex: 1;
  max-width: 100%;
  overflow-wrap: anywhere;
  white-space: pre-line;
  text-align: start;
  margin: 6px 0 14px;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-tp-muted);
}
.ui-tp__kbd {
  display: inline-grid;
  place-items: center;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border-radius: calc(var(--aui-radius-sm, 7px) - 1px);
  background: var(--aui-surface, #fff);
  box-shadow: 0 0 0 1px var(--aui-border, #e5e5e5), 0 1px 0 var(--aui-border, #e5e5e5);
  font-family: inherit;
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
  color: var(--ui-tp-ink);
  vertical-align: 1px;
}

/* A long label wraps inside the tile instead of leaving it; one line stays 30px */
.ui-tp__btn {
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
  color: var(--ui-tp-ink);
  text-align: start;
  overflow-wrap: anywhere;
  transition: background-color 160ms ease, transform 160ms ease;
}
.ui-tp__btn:hover { background: #f7f7f7; }
.ui-tp__btn:active { transform: scale(0.98); }
.ui-tp__btn--primary {
  background: linear-gradient(#323137, #201e25);
  box-shadow: 0 0 0 1px #0d0d0d, 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  color: #fff;
}
.ui-tp__btn--primary:hover { background: linear-gradient(#3b3a41, #26242b); }

.ui-tp__done {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: 100%;
  min-height: 30px;
  overflow-wrap: anywhere;
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-tp-ok);
  animation: ui-tp-pop 360ms var(--ui-tp-ease);
}

.ui-tp__foot { padding: 8px 10px 10px; }
.ui-tp:not(:has(.ui-tp__foot)) { padding-bottom: 8px; }

@keyframes ui-tp-in {
  from { opacity: 0; transform: translateY(4px); }
}
@keyframes ui-tp-pop {
  from { opacity: 0; transform: scale(0.94); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-tp__tip, .ui-tp__done { animation: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tp {
  --ui-tp-tray: var(--aui-subtle, #161618);
  --ui-tp-card: var(--aui-surface, #232326);
  --ui-tp-line: var(--aui-border, rgba(255, 255, 255, 0.08));
  --ui-tp-ink: var(--aui-ink, #ededed);
  --ui-tp-muted: var(--aui-muted, #8f8f8f);
  --ui-tp-ok: var(--aui-blue, #4fb0fe);
  --ui-tp-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
:where(.dark, [data-theme="dark"]) .ui-tp__card {
  border-color: var(--aui-border, rgba(255, 255, 255, 0.08));
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  color-scheme: dark;
}
:where(.dark, [data-theme="dark"]) .ui-tp__tip[data-done] { background: var(--aui-subtle, #2a2a2d); }
:where(.dark, [data-theme="dark"]) .ui-tp__kbd {
  background: var(--aui-surface, #2a2a2d);
  box-shadow: 0 0 0 1px var(--aui-border, rgba(255, 255, 255, 0.1)), 0 1px 0 var(--aui-border, rgba(255, 255, 255, 0.1));
}
:where(.dark, [data-theme="dark"]) .ui-tp__btn {
  background: var(--aui-surface, #2a2a2d);
  box-shadow: 0 0 0 1px var(--aui-border, rgba(255, 255, 255, 0.1)), 0 1px 2px rgba(0, 0, 0, 0.4);
}
:where(.dark, [data-theme="dark"]) .ui-tp__btn:hover { background: #313135; }
/* The dark primary button inverts, like on the site */
:where(.dark, [data-theme="dark"]) .ui-tp__btn--primary {
  background: linear-gradient(#f4f4f5, #e4e4e7);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.3), inset 0 1px 0 #ffffff;
  color: #121213;
}
:where(.dark, [data-theme="dark"]) .ui-tp__btn--primary:hover { background: linear-gradient(#ffffff, #ececef); }
`;function w(){return e.jsx("div",{className:"stage",children:e.jsx(g,{items:[{id:"a",label:"示例",value:"a",href:"#",name:"示例",title:"示例",text:"预览文字",status:"done",quote:"预览"}],options:[{label:"示例",value:"a"}],steps:[{id:"a",label:"一步"}],nodes:[{id:"a",label:"示例",children:[]}],comments:[{id:"a",author:"Ada",body:"预览",text:"预览"}],notifications:[{id:"a",title:"示例",body:"预览"}],tips:[{title:"示例",body:"预览"}],logos:["甲","乙","丙"],testimonials:[{name:"Ada",quote:"预览",role:"设计"}],links:[{label:"示例",href:"#"}],columns:[{id:"a",header:"列",accessorKey:"a"}],data:[{a:"示例"}],text:"预览文字",value:"预览",label:"示例",code:"const n = 1",title:"标题",placeholder:"输入"})})}export{w as default};
