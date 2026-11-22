import{r as h,j as t}from"./client-CsvIHAk3.js";function M({items:r,separator:i="chevron",maxItems:n=4,className:u,"aria-label":d="Breadcrumb",ref:f,...m}){const p=h.useRef(null),c=r.length,x=c>Math.max(2,n)?c-Math.max(2,n):0,[e,o]=h.useState(0),[,a]=h.useState(0),l=r.map(s=>s.label).join("\0")+`|${n}`,[k,C]=h.useState(l);k!==l&&(C(l),o(0));const _=Math.min(Math.max(0,c-2),x+e),E=r.slice(1,1+_);if(h.useLayoutEffect(()=>{const s=p.current;!s||_>=c-2||S(s)>s.clientWidth+1&&o(b=>b+1)}),h.useEffect(()=>{const s=p.current;if(!s||typeof ResizeObserver>"u")return;let b=s.clientWidth;const v=new ResizeObserver(()=>{Math.abs(s.clientWidth-b)<1||(b=s.clientWidth,o(0),a(b))});return v.observe(s),()=>v.disconnect()},[c===0]),c===0)return null;const y=s=>t.jsx("li",{className:"ui-bcr__sep",role:"presentation","aria-hidden":"true",children:i==="slash"?"/":i==="chevron"?t.jsx(I,{}):i},s),g=[];return r.forEach((s,b)=>{if(b>0&&b<=_){b===1&&(g.push(y("s-more")),g.push(t.jsx("li",{className:"ui-bcr__item",children:t.jsx(A,{items:E})},"more")));return}b>0&&g.push(y(`s-${b}`));const v=b===c-1;g.push(t.jsx("li",{className:"ui-bcr__item","data-current":v||void 0,children:t.jsx(N,{item:s,current:v})},`${b}-${s.label}`))}),t.jsxs("nav",{...m,ref:f,"aria-label":d,className:["ui-bcr",u].filter(Boolean).join(" "),"data-tight":_>=c-2&&c>2?"":void 0,children:[t.jsx("style",{href:"ui-breadcrumb",precedence:"default",children:B}),t.jsx("ol",{ref:p,className:"ui-bcr__list",children:g})]})}function N({item:r,current:i}){const n=t.jsxs(t.Fragment,{children:[r.icon!=null&&t.jsx("span",{className:"ui-bcr__icon","aria-hidden":"true",children:t.jsx(j,{icon:r.icon})}),t.jsx("span",{className:"ui-bcr__label","data-label":"",dir:"auto",children:r.label})]});return i?t.jsx("span",{className:"ui-bcr__current","aria-current":"page",onPointerEnter:w(r.label),children:n}):r.href?t.jsx("a",{className:"ui-bcr__link",href:r.href,onClick:r.onClick,onPointerEnter:w(r.label),children:n}):r.onClick?t.jsx("button",{type:"button",className:"ui-bcr__link",onClick:r.onClick,onPointerEnter:w(r.label),children:n}):t.jsx("span",{className:"ui-bcr__link","data-static":"",onPointerEnter:w(r.label),children:n})}const w=r=>i=>{const n=i.currentTarget.querySelector("[data-label]");n&&(n.scrollWidth>n.clientWidth+1?i.currentTarget.title=r:i.currentTarget.removeAttribute("title"))};function S(r){let i=0;for(const n of Array.from(r.children)){const u=n.querySelector("[data-label]"),d=n.getBoundingClientRect().width;i+=u?d-u.getBoundingClientRect().width+Math.min(u.scrollWidth,L):d}return i}const L=200;function A({items:r}){const i=h.useId(),[n,u]=h.useState(!1),d=h.useRef(null),f=h.useRef(null),m=()=>Array.from(f.current?.querySelectorAll("[role='menuitem']")??[]),p=e=>{u(!1),e&&d.current?.focus({preventScroll:!0})};h.useLayoutEffect(()=>{const e=f.current,o=d.current;if(!n||!e||!o)return;"showPopover"in e&&!e.matches(":popover-open")&&e.showPopover();const a=()=>W(e,o.getBoundingClientRect());return a(),m()[0]?.focus({preventScroll:!0}),window.addEventListener("resize",a),window.addEventListener("scroll",a,!0),()=>{window.removeEventListener("resize",a),window.removeEventListener("scroll",a,!0),"hidePopover"in e&&e.isConnected&&e.matches(":popover-open")&&e.hidePopover()}},[n]),h.useEffect(()=>{if(!n)return;const e=o=>{const a=o.target;!f.current?.contains(a)&&!d.current?.contains(a)&&u(!1)};return document.addEventListener("pointerdown",e,!0),()=>document.removeEventListener("pointerdown",e,!0)},[n]);const c=e=>{const o=m(),a=o.indexOf(document.activeElement),l=k=>o[(k+o.length)%o.length]?.focus();if(e.key==="ArrowDown")l(a+1);else if(e.key==="ArrowUp")l(a-1);else if(e.key==="Home")l(0);else if(e.key==="End")l(o.length-1);else if(e.key==="Escape")p(!0);else return e.key==="Tab"?u(!1):void 0;e.preventDefault(),e.stopPropagation()},x=e=>o=>{e.onClick?.(o),p(!e.href)};return t.jsxs(t.Fragment,{children:[t.jsx("button",{ref:d,type:"button",className:"ui-bcr__more","aria-label":r.length===1?"Show 1 more crumb":`Show ${r.length} more crumbs`,"aria-haspopup":"menu","aria-expanded":n,"aria-controls":n?`${i}-menu`:void 0,title:r.map(e=>e.label).join(" / "),onClick:()=>u(e=>!e),onKeyDown:e=>{e.key==="ArrowDown"&&!n&&(e.preventDefault(),u(!0))},children:t.jsx(R,{})}),n&&t.jsx("div",{ref:f,id:`${i}-menu`,className:"ui-bcr__menu",role:"menu","aria-label":"More crumbs",popover:"manual",onKeyDown:c,children:r.map((e,o)=>{const a=t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"ui-bcr__menu-icon","aria-hidden":"true",children:e.icon!=null?t.jsx(j,{icon:e.icon}):t.jsx(T,{})}),t.jsx("span",{className:"ui-bcr__menu-label",dir:"auto",children:e.label})]}),l={"--depth":Math.min(o,3)};return e.href?t.jsx("a",{role:"menuitem",tabIndex:-1,className:"ui-bcr__menu-item",style:l,href:e.href,title:e.label,onClick:x(e),children:a},o):t.jsx("button",{type:"button",role:"menuitem",tabIndex:-1,className:"ui-bcr__menu-item",style:l,title:e.label,"aria-disabled":e.onClick?void 0:!0,onClick:e.onClick?x(e):void 0,children:a},o)})})]})}function W(r,i){const d=document.documentElement.clientWidth||window.innerWidth,f=window.innerHeight;r.style.maxHeight="";const m=r.offsetWidth,p=r.offsetHeight,c=f-i.bottom-6-8,x=i.top-6-8,e=c>=p||c>=x,o=Math.max(120,Math.min(p,e?c:x));let l=getComputedStyle(r).direction==="rtl"?i.right-m:i.left-4;l=Math.min(Math.max(8,l),d-8-m),r.style.top=`${Math.round(e?i.bottom+6:i.top-6-o)}px`,r.style.left=`${Math.round(l)}px`,p>o&&(r.style.maxHeight=`${o}px`),r.dataset.side=e?"bottom":"top"}const z=r=>Array.isArray(r)&&r.length>0&&r.every(i=>Array.isArray(i)&&typeof i[0]=="string");function j({icon:r}){return z(r)?t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",focusable:"false",children:r.map(([i,{key:n,...u}],d)=>h.createElement(i,{...u,key:String(n??d)}))}):t.jsx(t.Fragment,{children:r})}function I(){return t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",focusable:"false",children:t.jsx("path",{d:"M9 6s6 4.42 6 6-6 6-6 6"})})}function R(){return t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",focusable:"false","aria-hidden":"true",children:t.jsx("path",{d:"M6 12.5V12m12 .5V12m-6 .5V12m-5 .5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm12 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"})})}function T(){return t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",focusable:"false",children:[t.jsx("path",{d:"M19 15h-7c-3.77 0-5.66 0-6.83-1.17C4 12.66 4 10.77 4 7V4"}),t.jsx("path",{d:"M15 20s5-3.68 5-5-5-5-5-5"})]})}const B=`
/* Colors as variables – override them on .ui-bcr (see Theming in the docs) */
.ui-bcr {
  --ui-bcr-ink: var(--aui-ink, #171717);
  --ui-bcr-muted: var(--aui-muted, #737373);
  --ui-bcr-faint: var(--aui-placeholder, #c4c4c4);
  --ui-bcr-wash: #f0f0f0;
  --ui-bcr-surface: var(--aui-overlay, var(--aui-surface, #ffffff));
  --ui-bcr-text: var(--aui-ink, #262626);
  --ui-bcr-icon: var(--aui-muted, #8f8f8f);
  --ui-bcr-glow: #f4f4f5;
  --ui-bcr-shadow: var(--aui-shadow-popover, 0 0 0 1px rgba(0, 0, 0, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.18), 0 4px 12px -4px rgba(0, 0, 0, 0.06));
  --ui-bcr-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-bcr-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  --ui-bcr-radius: calc(var(--aui-radius-sm, 5px) + 1px);

  display: block;
  min-width: 0;
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  line-height: 20px;
  font-weight: 400;
  color: var(--ui-bcr-muted);
  -webkit-font-smoothing: antialiased;
}
.ui-bcr *, .ui-bcr *::before, .ui-bcr *::after { box-sizing: border-box; }

/* One line; the crumbs shorten before anything wraps */
.ui-bcr__list {
  display: flex;
  align-items: center;
  min-width: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  white-space: nowrap;
}
/* The other crumbs keep their names (each capped at 200px, and folded into … when the row is short); only the
   current page shortens to fit */
.ui-bcr__item { display: flex; flex: none; align-items: center; min-width: 0; }
.ui-bcr__item[data-current] { flex: 0 1 auto; }

.ui-bcr__sep {
  display: grid;
  flex: none;
  place-items: center;
  min-width: 20px;
  padding: 0 2px;
  color: var(--ui-bcr-faint);
  user-select: none;
}
.ui-bcr__sep > svg { display: block; width: 14px; height: 14px; }
.ui-bcr__sep > svg:dir(rtl) { transform: scaleX(-1); }

/* The links: quiet text that turns to ink on hover */
.ui-bcr__link,
.ui-bcr__current {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: 100%;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: var(--ui-bcr-radius);
  background: none;
  font: inherit;
  color: inherit;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}
.ui-bcr__link { cursor: pointer; transition: color 120ms ease; }
.ui-bcr__link[data-static] { cursor: default; }
.ui-bcr__link:not([data-static]):hover { color: var(--ui-bcr-ink); }
.ui-bcr__link:focus-visible,
.ui-bcr__more:focus-visible { outline: 2px solid var(--ui-bcr-focus); outline-offset: 2px; }
.ui-bcr__current { font-weight: 500; color: var(--ui-bcr-ink); cursor: default; animation: ui-bcr-in 260ms var(--ui-bcr-ease) both; }

/* Long names shorten with … – the full one on hover */
.ui-bcr__label { min-width: 0; max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ui-bcr__current .ui-bcr__label { max-width: none; }
.ui-bcr__icon { display: grid; flex: none; place-items: center; width: 14px; height: 14px; }
.ui-bcr__icon > svg, .ui-bcr__icon > img { display: block; width: 14px; height: 14px; }

/* The … for the folded crumbs */
.ui-bcr__more {
  position: relative;
  display: grid;
  flex: none;
  place-items: center;
  width: 26px;
  height: 22px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: var(--ui-bcr-radius);
  background: none;
  color: var(--ui-bcr-muted);
  font: inherit;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 120ms ease, color 120ms ease;
}
.ui-bcr__more:hover, .ui-bcr__more[aria-expanded="true"] { background: var(--ui-bcr-wash); color: var(--ui-bcr-ink); }
.ui-bcr__more > svg { display: block; width: 16px; height: 16px; }

/* The menu with the folded crumbs: the Dropdown Menu's card in the top layer */
.ui-bcr__menu {
  position: fixed;
  inset: auto;
  z-index: 1000;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-content: start;
  gap: 1px;
  box-sizing: border-box;
  min-width: 180px;
  max-width: min(320px, calc(100vw - 16px));
  max-height: calc(100vh - 16px);
  margin: 0;
  padding: 5px;
  border: 0;
  border-radius: calc(var(--aui-radius-lg, 10px) + 4px);
  background: var(--ui-bcr-surface);
  box-shadow: var(--ui-bcr-shadow);
  color: var(--ui-bcr-text);
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  line-height: 20px;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-font-smoothing: antialiased;
  transform-origin: top left;
  animation: ui-bcr-menu 220ms var(--ui-bcr-ease) both;
}
.ui-bcr__menu::backdrop { display: none; }
.ui-bcr__menu[data-side="top"] { transform-origin: bottom left; animation-name: ui-bcr-menu-up; }
.ui-bcr__menu-item {
  display: flex;
  align-items: center;
  gap: 9px;
  box-sizing: border-box;
  min-width: 0;
  min-height: 34px;
  margin: 0;
  padding: 0 10px 0 calc(10px + var(--depth, 0) * 12px);
  border: 0;
  border-radius: calc(var(--aui-radius-sm, 5px) + 4px);
  background: none;
  font: inherit;
  color: inherit;
  text-align: start;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 120ms ease, color 120ms ease;
}
.ui-bcr__menu-item:hover:not([aria-disabled]), .ui-bcr__menu-item:focus { background: var(--ui-bcr-glow); color: var(--ui-bcr-ink); outline: none; }
.ui-bcr__menu-item:focus-visible { outline: 2px solid var(--ui-bcr-focus); outline-offset: -2px; }
.ui-bcr__menu-item[aria-disabled] { cursor: default; }
.ui-bcr__menu-icon { display: grid; flex: none; place-items: center; width: 16px; height: 16px; color: var(--ui-bcr-icon); }
.ui-bcr__menu-icon > svg, .ui-bcr__menu-icon > img { display: block; width: 16px; height: 16px; }
.ui-bcr__menu-icon > svg:dir(rtl) { transform: scaleX(-1); }
.ui-bcr__menu-label { min-width: 0; overflow: hidden; text-overflow: ellipsis; }

@keyframes ui-bcr-in { from { opacity: 0; transform: translateX(-4px); } }
@keyframes ui-bcr-menu { from { opacity: 0; transform: scale(0.96) translateY(-4px); } }
@keyframes ui-bcr-menu-up { from { opacity: 0; transform: scale(0.96) translateY(4px); } }

/* Touch screens: crumbs and rows a finger can hit, without moving the text */
@media (pointer: coarse) {
  .ui-bcr__link:not([data-static]) { position: relative; }
  .ui-bcr__link:not([data-static])::after { content: ""; position: absolute; inset: -10px -4px; }
  .ui-bcr__more::after { content: ""; position: absolute; inset: -8px -6px; }
  .ui-bcr__menu-item { min-height: 42px; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-bcr__current, .ui-bcr__menu { animation: none; }
  .ui-bcr__link, .ui-bcr__more, .ui-bcr__menu-item { transition-duration: 1ms; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-bcr {
  --ui-bcr-ink: var(--aui-ink, #ededed);
  --ui-bcr-muted: var(--aui-muted, #8f8f8f);
  --ui-bcr-faint: var(--aui-placeholder, #52525b);
  --ui-bcr-wash: rgba(255, 255, 255, 0.06);
  --ui-bcr-surface: var(--aui-overlay, var(--aui-surface, #19191b));
  --ui-bcr-text: var(--aui-ink, #e4e4e7);
  --ui-bcr-icon: var(--aui-muted, #8b8b92);
  --ui-bcr-glow: #26262a;
  --ui-bcr-shadow: var(--aui-shadow-popover, 0 0 0 1px rgba(255, 255, 255, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.6));
  --ui-bcr-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
  color-scheme: dark;
}
`;function $(){return t.jsx("div",{className:"stage",children:t.jsx(M,{items:[{id:"a",label:"示例",value:"a",href:"#",name:"示例",title:"示例",text:"预览文字",status:"done",quote:"预览"}],options:[{label:"示例",value:"a"}],steps:[{id:"a",label:"一步"}],nodes:[{id:"a",label:"示例",children:[]}],comments:[{id:"a",author:"Ada",body:"预览",text:"预览"}],notifications:[{id:"a",title:"示例",body:"预览"}],tips:[{title:"示例",body:"预览"}],logos:["甲","乙","丙"],testimonials:[{name:"Ada",quote:"预览",role:"设计"}],links:[{label:"示例",href:"#"}],columns:[{id:"a",header:"列",accessorKey:"a"}],data:[{a:"示例"}],text:"预览文字",value:"预览",label:"示例",code:"const n = 1",title:"标题",placeholder:"输入"})})}export{$ as default};
