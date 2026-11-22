import{r as o,j as t}from"./client-CsvIHAk3.js";function T(i,a){const s=Math.max(0,Math.round((a-i)/1e3));if(s<45)return"just now";const r=Math.round(s/60);if(r<60)return`${r}min ago`;const d=Math.round(r/60);if(d<24)return`${d}h ago`;const c=Math.round(d/24);return c<30?`${c}d ago`:c<365?`${Math.round(c/30)}mo ago`:`${Math.round(c/365)}y ago`}const $=new Intl.NumberFormat("en"),R=i=>i.split(/\s+/).map(a=>Array.from(a).find(s=>/[\p{L}\p{N}]/u.test(s))).filter(Boolean).slice(0,2).join("").toUpperCase();function E({title:i="Comment",messages:a,currentUser:s,assistant:r,onReply:d,onClose:c,className:f}){const[h,b]=o.useState(a),[N]=o.useState(()=>new Set(a.filter(e=>e.author.assistant).map(e=>e.id))),[z,S]=o.useState(new Set),[x,v]=o.useState(""),[p,w]=o.useState(!1),[A,g]=o.useState(()=>Date.now()),l=o.useRef(null),D=I(l);o.useEffect(()=>{const e=window.setInterval(()=>g(Date.now()),3e4);return()=>window.clearInterval(e)},[]),o.useEffect(()=>{l.current?.scrollTo({top:l.current.scrollHeight,behavior:"smooth"})},[h.length,p]);const M=async()=>{const e=x.trim();if(!e||p)return;v(""),g(Date.now()),y(!0),b(u=>[...u,{id:`m-${Date.now()}`,author:s,createdAt:Date.now(),text:e}]);const n=d?.(e);if(n){w(!0);try{const u=await n;u&&b(_=>[..._,{...u,createdAt:Date.now()}])}finally{w(!1),g(Date.now())}}},y=e=>{const n=l.current;n&&(n.style.maxHeight=e?`${n.offsetHeight}px`:"")},C=e=>{y(!1),S(n=>{const u=new Set(n);return u.has(e)?u.delete(e):u.add(e),u})};return t.jsxs(t.Fragment,{children:[t.jsx("style",{href:"ui-comment-thread",precedence:"default",children:H}),t.jsxs("section",{className:["ui-ct",f].filter(Boolean).join(" "),"aria-label":i,children:[t.jsxs("header",{className:"ui-ct__head",children:[t.jsx("h3",{className:"ui-ct__title",title:i,dir:"auto",children:i}),t.jsxs("span",{className:"ui-ct__count",children:[$.format(h.length)," ",h.length===1?"message":"messages"]}),c&&t.jsx("button",{type:"button",className:"ui-ct__icon-btn","aria-label":"Close comment",onClick:c,children:t.jsx(m,{d:"m4 4 8 8M12 4l-8 8"})})]}),t.jsx("div",{className:"ui-ct__card ui-ct__morph",ref:D,children:t.jsxs("div",{className:"ui-ct__scroll",ref:l,"aria-live":"polite",children:[h.map(e=>{const n=z.has(e.id),u=/^\/edit\b/i.test(e.text.trim());return t.jsxs("article",{className:"ui-ct__msg","data-delayed":N.has(e.id)||void 0,children:[t.jsxs("div",{className:"ui-ct__meta",children:[t.jsx(j,{author:e.author}),t.jsx("span",{className:"ui-ct__name",title:e.author.name,dir:"auto",children:e.author.name}),t.jsx("time",{className:"ui-ct__time",dateTime:new Date(e.createdAt).toISOString(),children:T(+e.createdAt,A)})]}),e.text&&t.jsx("p",{className:"ui-ct__text",dir:"auto",children:u?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"ui-ct__command",children:"/Edit"})," ",e.text.trim().replace(/^\/edit\s*/i,"")]}):e.text}),e.status&&t.jsxs("div",{className:"ui-ct__status",children:[t.jsxs("button",{type:"button",className:"ui-ct__status-btn","aria-expanded":n,disabled:!e.details?.length,onClick:()=>C(e.id),children:[t.jsx("span",{className:"ui-ct__check",children:t.jsx(m,{d:"m4 8.3 2.6 2.6L12 5.4",size:12})}),t.jsx("span",{className:"ui-ct__status-text",title:e.status,dir:"auto",children:e.status}),!!e.details?.length&&t.jsx("span",{className:"ui-ct__chevron",children:t.jsx(m,{d:"m4.5 6.25 3.5 3.5 3.5-3.5",size:14})})]}),!!e.details?.length&&t.jsx("div",{className:"ui-ct__details","data-open":n||void 0,inert:!n,children:t.jsx("ul",{children:e.details.map((_,k)=>t.jsx("li",{dir:"auto",style:{"--i":k},children:_},k))})})]})]},e.id)}),p&&r&&t.jsxs("article",{className:"ui-ct__msg","aria-label":`${r.name} is thinking`,children:[t.jsxs("div",{className:"ui-ct__meta",children:[t.jsx(j,{author:r}),t.jsx("span",{className:"ui-ct__name",children:r.name})]}),t.jsx("p",{className:"ui-ct__thinking",children:"Thinking…"})]})]})}),t.jsxs("form",{className:"ui-ct__composer",onSubmit:e=>{e.preventDefault(),M()},children:[t.jsx("input",{className:"ui-ct__input",value:x,onChange:e=>v(e.target.value),placeholder:r?`Reply, or ask @${r.name}…`:"Add comment…","aria-label":"Reply"}),t.jsx("button",{type:"submit",className:"ui-ct__send","aria-label":"Send reply",disabled:!x.trim()||p,children:t.jsx(m,{d:"M8 13V3M3.5 7.5 8 3l4.5 4.5",size:14})})]})]})]})}function j({author:i}){const[a,s]=o.useState(!1);return i.avatar&&typeof i.avatar!="string"?t.jsx("span",{className:"ui-ct__avatar",children:i.avatar}):typeof i.avatar=="string"&&!a?t.jsx("img",{className:"ui-ct__avatar",src:i.avatar,alt:"",width:24,height:24,loading:"lazy",onError:()=>s(!0)}):t.jsx("span",{className:"ui-ct__avatar ui-ct__avatar--initials","aria-hidden":"true",children:R(i.name)})}const m=({d:i,size:a=16})=>t.jsx("svg",{viewBox:"0 0 16 16",width:a,height:a,fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:t.jsx("path",{d:i})});function I(i){const a=o.useRef(null);return o.useLayoutEffect(()=>{const s=a.current,r=i.current;if(!s||!r)return;const d=()=>{s.style.height=`${r.offsetHeight}px`};d();const c=new ResizeObserver(d);c.observe(r);const f=requestAnimationFrame(()=>s.setAttribute("data-smooth",""));return()=>{c.disconnect(),cancelAnimationFrame(f)}},[i]),a}const H=`
.ui-ct {
  --ui-ct-tray: var(--aui-subtle, #f0f0f0);
  --ui-ct-card: var(--aui-surface, #ffffff);
  --ui-ct-ink: var(--aui-ink, #171717);
  --ui-ct-text: var(--aui-ink, #404040);
  --ui-ct-muted: var(--aui-muted, #8f8f8f);
  --ui-ct-accent: var(--aui-blue, #4fb0fe);
  --ui-ct-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-ct-ok: var(--aui-success, #1e8a4f);
  --ui-ct-accent-text: var(--aui-blue, #4fb0fe);
  --ui-ct-border: var(--aui-border, #e5e5e5);
  --ui-ct-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  --ui-ct-hover: var(--aui-subtle, rgba(0, 0, 0, 0.05));
  --ui-ct-row-hover: var(--aui-subtle, #f5f5f5);
  --ui-ct-initials: #eef7ff;
  --ui-ct-dot: #d4d4d4;
  --ui-ct-subtle: var(--aui-placeholder, #a3a3a3);
  --ui-ct-avatar-ring: rgba(0, 0, 0, 0.06);
  --ui-ct-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  box-sizing: border-box;
  width: 100%;
  max-width: 420px;
  /* Like the Chat Composer: a gray tray with heading and reply field, the white card sits on top of it */
  background: var(--ui-ct-tray);
  /* The gray tray frames the white card on every side */
  padding: 6px;
  border-radius: calc(var(--aui-radius-lg, 16px) + 6px);
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  color: var(--ui-ct-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-ct *, .ui-ct *::before, .ui-ct *::after { box-sizing: border-box; }
.ui-ct button { margin: 0; font: inherit; color: inherit; cursor: pointer; }
.ui-ct button:focus-visible { outline: 2px solid var(--ui-ct-focus); outline-offset: 2px; }

.ui-ct__head {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 46px;
  padding: 6px 10px 6px 18px;
}
/* A long title takes two lines at most – the count and close stay in place */
.ui-ct__title { display: -webkit-box; min-width: 0; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow-wrap: anywhere; margin: 0; font-size: 15px; font-weight: 500; line-height: 22px; }
.ui-ct__count { flex: none; margin-right: auto; white-space: nowrap; font-size: 12.5px; color: var(--ui-ct-muted); }
.ui-ct__icon-btn {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  border-radius: calc(var(--aui-radius-sm, 7px) + 1px);
  background: transparent;
  color: var(--ui-ct-muted) !important;
  transition: background-color 140ms ease, color 140ms ease;
}
.ui-ct__icon-btn:hover { background: var(--ui-ct-hover); color: var(--ui-ct-ink) !important; }

.ui-ct__card {
  background: var(--ui-ct-card);
  border: 1px solid var(--ui-ct-border);
  border-radius: var(--aui-radius-lg, 16px);
  box-shadow: var(--ui-ct-shadow);
}
.ui-ct__scroll {
  display: grid;
  gap: 18px;
  align-content: start;
  min-height: var(--ui-ct-min-height, 0px);
  max-height: var(--ui-ct-max-height, 340px);
  padding: 16px 18px 18px;
  overflow-y: auto;
  scrollbar-width: thin;
}
/* Each message builds up piece by piece: name row, text, status – the assistant's first reply a beat later */
.ui-ct__msg { --ui-ct-d: 0ms; min-width: 0; }
.ui-ct__msg[data-delayed] { --ui-ct-d: 700ms; }
.ui-ct__msg > * { animation: ui-ct-in 420ms var(--ui-ct-ease) both; animation-delay: var(--ui-ct-d); }
.ui-ct__msg > :nth-child(2) { animation-delay: calc(var(--ui-ct-d) + 80ms); }
.ui-ct__msg > :nth-child(3) { animation-delay: calc(var(--ui-ct-d) + 160ms); }
.ui-ct__meta { display: flex; align-items: center; gap: 9px; min-width: 0; }
.ui-ct__avatar {
  display: grid;
  place-items: center;
  flex: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
}
img.ui-ct__avatar { box-shadow: 0 0 0 1px var(--ui-ct-avatar-ring); }
.ui-ct__avatar svg { width: 100%; height: 100%; }
.ui-ct__avatar--initials { background: var(--ui-ct-initials); font-size: 9px; font-weight: 600; color: var(--ui-ct-accent-text); }
.ui-ct__name { min-width: 0; overflow: hidden; font-size: 14px; font-weight: 500; line-height: 20px; white-space: nowrap; text-overflow: ellipsis; }
.ui-ct__time { flex: none; margin-left: auto; white-space: nowrap; font-size: 12.5px; color: var(--ui-ct-muted); font-variant-numeric: tabular-nums; }
.ui-ct__text { margin: 8px 0 0; font-size: 14px; line-height: 21px; overflow-wrap: anywhere; white-space: pre-line; text-align: start; color: var(--ui-ct-text); }
.ui-ct__command { color: var(--ui-ct-muted); }

.ui-ct__status { margin-top: 8px; }
.ui-ct__status-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  max-width: 100%;
  height: 26px;
  padding: 0 6px 0 8px;
  border: 0;
  border-radius: calc(var(--aui-radius-sm, 7px) + 1px);
  background: transparent;
  font-size: 14px !important;
  transition: background-color 140ms ease;
}
/* The global button reset sets margin: 0 – shift the row so the check icon sits centered under the avatars */
.ui-ct .ui-ct__status-btn { margin-left: -4px; }
.ui-ct__status-btn:hover:not(:disabled) { background: var(--ui-ct-row-hover); }
.ui-ct__status-btn:disabled { cursor: default; }
.ui-ct__status-text { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-ct__check, .ui-ct__chevron { flex: none; }
.ui-ct__check {
  display: grid;
  place-items: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--ui-ct-ok);
  color: #fff;
}
.ui-ct__chevron { display: grid; color: var(--ui-ct-muted); transition: transform 260ms var(--ui-ct-ease); }
.ui-ct__status-btn[aria-expanded="true"] .ui-ct__chevron { transform: rotate(180deg); }
.ui-ct__details {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 320ms var(--ui-ct-ease);
}
.ui-ct__details[data-open] { grid-template-rows: 1fr; }
.ui-ct__details ul {
  min-height: 0;
  overflow: hidden;
  margin: 0;
  padding: 0 0 0 28px;
  list-style: none;
}
.ui-ct__details li {
  position: relative;
  margin-top: 6px;
  font-size: 13px;
  line-height: 19px;
  overflow-wrap: anywhere;
  text-align: start;
  color: var(--ui-ct-muted);
  /* Closing: lines fade out quickly while the box folds */
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 160ms ease, transform 220ms var(--ui-ct-ease);
}
/* Opening: lines come in one after another */
.ui-ct__details[data-open] li {
  opacity: 1;
  transform: none;
  transition-duration: 320ms, 420ms;
  transition-delay: calc(60ms + var(--i, 0) * 60ms);
}
/* Tree lines instead of dots: each line gets its own corner – down on the axis of the check icon, then a rounded turn right */
.ui-ct__details li:first-child { margin-top: 5px; }
.ui-ct__details li::before {
  content: "";
  position: absolute;
  left: -16.625px;
  top: -3px;
  width: 10.5px;
  height: 13px;
  border-left: 1.25px solid var(--ui-ct-dot);
  border-bottom: 1.25px solid var(--ui-ct-dot);
  border-bottom-left-radius: 5px;
}
/* The first branch starts with a small gap under the check icon */
.ui-ct__details li:first-child::before {
  top: -5px;
  height: 15px;
}

.ui-ct__thinking {
  display: inline-block;
  margin: 8px 0 0;
  font-size: 14px;
  background: linear-gradient(90deg, var(--ui-ct-subtle) 0%, var(--ui-ct-subtle) 35%, rgba(255, 255, 255, 0.9) 50%, var(--ui-ct-subtle) 65%, var(--ui-ct-subtle) 100%);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ui-ct-shine 1.6s linear infinite;
}

.ui-ct__composer {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 9px 9px 18px;
}
.ui-ct__input {
  flex: 1;
  min-width: 0;
  height: 32px;
  border: 0;
  outline: none;
  background: transparent;
  font: inherit;
  font-size: 14px;
  color: var(--ui-ct-ink);
}
.ui-ct__input::placeholder { color: var(--ui-ct-subtle); }
.ui-ct__send {
  display: grid;
  place-items: center;
  flex: none;
  width: 30px;
  height: 30px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: linear-gradient(#323137, #201e25);
  box-shadow: 0 0 0 1px #0d0d0d, 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #fff !important;
  transition: opacity 160ms ease, transform 160ms ease;
}
.ui-ct__send:disabled { opacity: 0.3; cursor: default; }
.ui-ct__send:not(:disabled):active { transform: scale(0.94); }

@keyframes ui-ct-in { from { opacity: 0; transform: translateY(4px); } }
@keyframes ui-ct-shine { from { background-position: 100% 0; } to { background-position: 0% 0; } }
@media (prefers-reduced-motion: reduce) {
  .ui-ct__msg > *, .ui-ct__thinking { animation: none; }
  .ui-ct__details, .ui-ct__details li, .ui-ct__chevron { transition: none; }
}

/* Height changes glide instead of jumping */
.ui-ct__morph { overflow: hidden; }
.ui-ct__morph[data-smooth] { transition: height 380ms var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1)); }
@media (prefers-reduced-motion: reduce) { .ui-ct__morph[data-smooth] { transition: none; } }


/* Text fields: no focus box while typing – also against global :focus-visible rules of the host page */
.ui-ct input:not([type="checkbox"]):not([type="radio"]):focus-visible,
.ui-ct textarea:focus-visible,
.ui-ct [contenteditable]:focus-visible { outline: none; }
/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-ct {
  --ui-ct-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
  --ui-ct-tray: var(--aui-subtle, #161618);
  --ui-ct-card: var(--aui-surface, #232326);
  --ui-ct-ink: var(--aui-ink, #ededed);
  --ui-ct-text: var(--aui-ink, #c4c4c4);
  --ui-ct-muted: var(--aui-muted, #8f8f8f);
  --ui-ct-ok: #1e8a4f;
  --ui-ct-accent-text: var(--aui-info, #4fb0fe);
  --ui-ct-border: var(--aui-border, rgba(255, 255, 255, 0.08));
  --ui-ct-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  --ui-ct-hover: var(--aui-subtle, rgba(255, 255, 255, 0.06));
  --ui-ct-row-hover: var(--aui-subtle, rgba(255, 255, 255, 0.06));
  --ui-ct-initials: color-mix(in srgb, var(--aui-blue, #4fb0fe) 16%, transparent);
  --ui-ct-dot: rgba(255, 255, 255, 0.14);
  --ui-ct-subtle: var(--aui-placeholder, #6b6b70);
  --ui-ct-avatar-ring: rgba(255, 255, 255, 0.08);
}
:where(.dark, [data-theme="dark"]) .ui-ct__send {
  background: linear-gradient(#f4f4f5, #e4e4e7);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.35), inset 0 1px 0 #ffffff;
  color: #121213 !important;
}
`;function L(){return t.jsx("div",{className:"stage",children:t.jsx(E,{currentUser:{name:"林夏"},assistant:{name:"助手",assistant:!0},messages:[{id:"1",author:{name:"林夏"},createdAt:Date.now()-36e5,text:"这段预览能折叠吗？"},{id:"2",author:{name:"助手",assistant:!0},createdAt:Date.now()-35e5,text:"可以。点开就能看到细节。",status:"已整理",details:["保留原文","补了一句说明"]}]})})}export{L as default};
