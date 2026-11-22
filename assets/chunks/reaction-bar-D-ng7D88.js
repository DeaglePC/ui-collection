import{r as u,j as r}from"./client-CsvIHAk3.js";const m={like:["Like","likes"],comment:["Comment","comments"],repost:["Repost","reposts"],share:["Share","shares"]},x=new Intl.NumberFormat("en",{notation:"compact",maximumFractionDigits:1}),_=new Intl.NumberFormat("en"),k=i=>i>=1e4&&i<1e6?x.format(Math.round(i/1e3)*1e3):x.format(i),j=i=>typeof i=="number"&&Number.isFinite(i)&&i>0?Math.floor(i):0;function w({reactions:i={},onReact:c,actions:l=["like","comment","repost","share"],className:d}){const b=(Array.isArray(l)?l:[]).filter((e,a,s)=>e in m&&s.indexOf(e)===a),[t,n]=u.useState(()=>Object.fromEntries(Object.keys(m).map(e=>[e,{count:j(i?.[e]?.count),active:i?.[e]?.active===!0}]))),[h,g]=u.useState({}),v=e=>{const a=t[e],s={active:!a.active,count:Math.max(0,a.count+(a.active?-1:1))};n(o=>({...o,[e]:s})),g(o=>({...o,[e]:(o[e]??0)+1})),c?.(e,s)};return b.length?r.jsxs(r.Fragment,{children:[r.jsx("style",{href:"ui-reaction-bar",precedence:"default",children:N}),r.jsx("div",{className:["ui-rb",d].filter(Boolean).join(" "),role:"group","aria-label":"Reactions",children:b.map(e=>{const{count:a,active:s}=t[e],[o,f]=m[e];return r.jsxs("button",{type:"button",className:"ui-rb__btn","data-kind":e,"aria-pressed":s,"aria-label":`${o}${a?`, ${_.format(a)} ${a===1?f.slice(0,-1):f}`:""}`,title:a>=1e3?`${_.format(a)} ${f}`:void 0,onClick:()=>v(e),children:[r.jsx("span",{className:"ui-rb__icon","data-pop":h[e]?!0:void 0,children:M[e]},h[e]??0),r.jsx(y,{value:a})]},e)})})]}):null}function y({value:i}){const c=i>0?k(i):"",l=u.useRef(null),d=u.useRef(null),b=u.useRef(!0);return u.useLayoutEffect(()=>{const t=l.current,n=d.current;!t||!n||(t.style.width=`${n.offsetWidth}px`,b.current&&(b.current=!1,requestAnimationFrame(()=>t.setAttribute("data-smooth",""))))},[c]),r.jsx("span",{className:"ui-rb__count",ref:l,"aria-hidden":"true",children:r.jsx("span",{className:"ui-rb__digits",ref:d,children:c.split("").map((t,n)=>r.jsx("span",{className:"ui-rb__digit",children:t},`${c.length-n}-${t}`))})})}const p=({children:i})=>r.jsx("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:i}),M={like:r.jsx(p,{children:r.jsx("path",{className:"ui-rb__fill",d:"M19.46 4c-2.68-1.65-5.02-.99-6.43.07-.57.43-.86.65-1.03.65s-.46-.22-1.03-.65C9.56 3.01 7.22 2.35 4.54 4 1.02 6.15.22 13.27 8.34 19.28 9.89 20.43 10.66 21 12 21s2.11-.57 3.66-1.72C23.78 13.27 22.98 6.15 19.46 4Z"})}),comment:r.jsx(p,{children:r.jsx("path",{className:"ui-rb__fill",d:"M12 21.5c5.52 0 10-4.25 10-9.5S17.52 2.5 12 2.5 2 6.75 2 12c0 1.36.3 2.65.84 3.82.15.31.2.66.1 1l-.6 2.23a1.08 1.08 0 0 0 1.6 1.59l2.22-.6c.34-.09.69-.04 1 .1 1.17.55 2.46.86 4.84.86Z"})}),repost:r.jsxs(p,{children:[r.jsx("path",{d:"M16.5 3.5 19 6l-2.5 2.5"}),r.jsx("path",{d:"M19 6H8a4 4 0 0 0-4 4v1"}),r.jsx("path",{d:"M7.5 20.5 5 18l2.5-2.5"}),r.jsx("path",{d:"M5 18h11a4 4 0 0 0 4-4v-1"})]}),share:r.jsxs(p,{children:[r.jsx("path",{d:"M21 3 10.5 13.5"}),r.jsx("path",{d:"M21 3 14.6 20.6a.5.5 0 0 1-.93.05L10.5 13.5 3.35 10.33a.5.5 0 0 1 .05-.93Z"})]})},N=`
.ui-rb {
  --ui-rb-ink: var(--aui-ink, #404040);
  --ui-rb-like: var(--aui-pink, #ee3e9e);
  --ui-rb-comment: var(--aui-blue, #4fb0fe);
  --ui-rb-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-rb-repost: var(--aui-purple, #a651f0);
  --ui-rb-share: var(--aui-ink, #171717);
  --ui-rb-ease: cubic-bezier(0.85, 0, 0.15, 1);
  --ui-rb-soft: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2px;
  max-width: 100%;
  padding: 4px 10px;
  /* Half its one-row height – a pill; if huge counts wrap it to a second row it stays a rounded card */
  border-radius: 25px;
  background: var(--aui-surface, #fff);
  box-shadow: var(--aui-shadow-card, 0 0 0 1px var(--aui-border, #ececec), 0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.03));
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  -webkit-font-smoothing: antialiased;
}
.ui-rb *, .ui-rb *::before, .ui-rb *::after { box-sizing: border-box; }

.ui-rb__btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  min-width: 42px;
  height: 42px;
  margin: 0;
  padding: 0 10px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  font: inherit;
  color: var(--ui-rb-ink);
  cursor: pointer;
  transition: background-color 160ms ease;
  -webkit-tap-highlight-color: transparent;
}
.ui-rb__btn:hover { background: var(--aui-subtle, #f5f5f5); }
.ui-rb__btn:focus-visible { outline: 2px solid var(--ui-rb-focus); outline-offset: 2px; }
.ui-rb__btn[data-kind="like"] { --ui-rb-tone: var(--ui-rb-like); }
.ui-rb__btn[data-kind="comment"] { --ui-rb-tone: var(--ui-rb-comment); }
.ui-rb__btn[data-kind="repost"] { --ui-rb-tone: var(--ui-rb-repost); }
.ui-rb__btn[data-kind="share"] { --ui-rb-tone: var(--ui-rb-share); }

.ui-rb__icon { display: grid; place-items: center; flex: none; }
.ui-rb__icon svg { transition: color 200ms ease; }
.ui-rb__fill { fill: transparent; transition: fill 200ms ease; }
.ui-rb__btn[aria-pressed="true"] { color: var(--ui-rb-tone); }
.ui-rb__btn[aria-pressed="true"] .ui-rb__fill { fill: currentColor; }
/* Press pop: shrinks, springs past full size, settles */
.ui-rb__icon[data-pop] { animation: ui-rb-pop 320ms cubic-bezier(0.65, 0, 0.35, 1); }

/* Count: the width glides, digits roll */
.ui-rb__count {
  display: inline-block;
  overflow: hidden;
  width: 0;
  height: 20px;
}
.ui-rb__count[data-smooth] { transition: width 400ms var(--ui-rb-ease); }
.ui-rb__digits {
  display: inline-flex;
  padding-left: 6px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.ui-rb__digits:empty { padding-left: 0; }
.ui-rb__digit { display: inline-block; animation: ui-rb-roll 400ms var(--ui-rb-ease) both; }

@keyframes ui-rb-pop {
  0% { transform: scale(1); }
  35% { transform: scale(0.75); }
  70% { transform: scale(1.12); }
  100% { transform: scale(1); }
}
@keyframes ui-rb-roll {
  from { opacity: 0; transform: translateY(70%); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-rb__icon[data-pop], .ui-rb__digit { animation: none; }
  .ui-rb__count[data-smooth] { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-rb {
  --ui-rb-ink: var(--aui-ink, #c4c4c4);
  --ui-rb-like: var(--aui-pink, #f06db5);
  --ui-rb-comment: var(--aui-blue, #4fb0fe);
  --ui-rb-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
  --ui-rb-repost: var(--aui-purple, #b98af0);
  --ui-rb-share: var(--aui-ink, #ededed);
  background: var(--aui-surface, #232326);
  box-shadow: var(--aui-shadow-card, 0 0 0 1px var(--aui-border, rgba(255, 255, 255, 0.08)), 0 1px 2px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.35));
}
:where(.dark, [data-theme="dark"]) .ui-rb__btn:hover { background: var(--aui-subtle, rgba(255, 255, 255, 0.06)); }
`;function C(){return r.jsx("div",{className:"stage",children:r.jsx(w,{})})}export{C as default};
