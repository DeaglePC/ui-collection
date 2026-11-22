import{r as u,j as a}from"./client-CsvIHAk3.js";function Y({trigger:t,items:n,align:y="start",side:w="bottom",title:l,header:M,open:b,defaultOpen:_=!1,onOpenChange:p,menuClassName:d,width:x,empty:k="Nothing here yet",className:o,"aria-label":c}){const g=u.useId(),m=`${g}-trigger`,E=`${g}-menu`,L=`${g}-title`,[D,C]=u.useState(_),f=b??D,N=u.useRef(null),A=u.useRef(null),I=u.useRef("first"),O=u.useRef(!f);f||(O.current=!0);const P=u.useRef(m),B=Array.isArray(n)?n.filter(Boolean):[],$=i=>{i!==f&&(b===void 0&&C(i),p?.(i))},e=()=>V(N.current,A.current),r=i=>{i==="now"&&e()?.focus({preventScroll:!0}),$(!1),i===!0&&J(e())},s=i=>{I.current=i?.detail?"menu":"first",$(!f)};u.useEffect(()=>{const i=e();i&&(i.id||(i.id=m),i.hasAttribute("aria-haspopup")||i.setAttribute("aria-haspopup","menu"),P.current=i.id)},[]),u.useLayoutEffect(()=>{const i=A.current;if(!f||!i)return;q(i);const h=()=>N.current&&F(i,N.current.getBoundingClientRect(),w,y,6);h(),window.addEventListener("resize",h),window.addEventListener("scroll",h,!0);const R=typeof ResizeObserver>"u"?null:new ResizeObserver(h);return R?.observe(i),()=>{window.removeEventListener("resize",h),window.removeEventListener("scroll",h,!0),R?.disconnect(),W(i)}},[f,w,y]),u.useEffect(()=>{if(!f)return;const i=A.current?.querySelector(":scope > .ui-dm__list"),h=I.current;if(!i||!O.current)return;if(h==="menu")return i.focus({preventScroll:!0});const R=z(i),K=R.find(U=>U.getAttribute("aria-checked")==="true");T((h==="last"?R[R.length-1]:K??R[0])??i)},[f]),u.useEffect(()=>{if(!f)return;const i=h=>{N.current?.contains(h.target)||r(!1)};return document.addEventListener("pointerdown",i,!0),()=>document.removeEventListener("pointerdown",i,!0)});const j=i=>{f||i.key!=="ArrowDown"&&i.key!=="ArrowUp"||A.current?.contains(i.target)||(i.preventDefault(),I.current=i.key==="ArrowUp"?"last":"first",$(!0))},S=i=>{const h=i.relatedTarget;f&&h&&!N.current?.contains(h)&&r(!1)},v={id:m,"aria-haspopup":"menu","aria-expanded":f,"aria-controls":f?E:void 0,onClick:s};return a.jsxs("span",{ref:N,className:["ui-dm",o].filter(Boolean).join(" "),onKeyDown:j,onBlur:S,children:[a.jsx("style",{href:"ui-dropdown-menu",precedence:"default",children:te}),t({open:f,toggle:s,triggerProps:v}),f&&a.jsxs("div",{ref:A,className:["ui-dm__panel",d].filter(Boolean).join(" "),popover:"manual","data-side":w,"data-align":y,style:x!=null?{width:x,maxWidth:"calc(100vw - 16px)"}:void 0,children:[M,l&&a.jsx("span",{className:"ui-dm__title",id:L,children:l}),a.jsx(H,{id:E,items:B,empty:k,labelledBy:l?L:c?void 0:P.current,label:l?void 0:c,onPick:()=>r(!0),onClose:r})]})]})}function H({id:t,items:n,empty:y,labelledBy:w,label:l,onPick:M,onClose:b,onBack:_}){const p=u.useId(),d=u.useRef(null),[x,k]=u.useState(null),[o,c]=u.useState(null),g=u.useRef(0),m=u.useRef(null),E=u.useRef({text:"",at:0});u.useEffect(()=>()=>window.clearTimeout(g.current),[]);const L=()=>{window.clearTimeout(g.current),m.current=null},D=(e,r,s)=>{window.clearTimeout(g.current),m.current=s,g.current=window.setTimeout(()=>{m.current=null,e()},r)},C=e=>d.current?.querySelector(`:scope > [data-index="${e}"]`)??null,f=(e,r)=>{L(),c(s=>s?.index===e?r?{index:e,focus:r}:s:{index:e,focus:r}),r&&o?.index===e&&T(z(document.getElementById(`${p}-sub`)?.querySelector(".ui-dm__list")??null)[0])},N=()=>{const e=o?.index;c(null),e!=null&&T(C(e))},A=(e,r)=>{const s=n[e];if(!(!s||s.disabled)){if(s.submenu){!r&&o?.index===e&&!o.focus?c(null):f(e,r);return}s.onSelect?.(),s.keepOpen||M()}},I=e=>{const r=Date.now();E.current.text=r-E.current.at>700?e:E.current.text+e,E.current.at=r;const s=E.current.text.toLowerCase(),j=z(d.current),S=j.indexOf(document.activeElement),v=s.length===1?S+1:Math.max(S,0);for(let i=0;i<j.length;i++){const h=j[(v+i)%j.length];if((n[Number(h.dataset.index)]?.label??"").toLowerCase().startsWith(s))return T(h)}},O=e=>{const r=z(d.current),s=r.indexOf(document.activeElement),j=s>=0?Number(r[s].dataset.index):-1,S=j>=0?n[j]:void 0,v=()=>{e.preventDefault(),e.stopPropagation()},i=h=>{v(),o&&c(null),r.length&&T(r[(h+r.length)%r.length])};switch(e.key){case"ArrowDown":return i(s+1);case"ArrowUp":return i(s<0?-1:s-1);case"Home":case"PageUp":return i(0);case"End":case"PageDown":return i(-1);case"ArrowRight":S?.submenu&&(v(),f(j,!0));return;case"ArrowLeft":_&&(v(),_());return;case"Escape":return v(),_?_():b("now");case"Enter":case" ":return v(),e.key===" "&&Date.now()-E.current.at<700?I(" "):A(j,!0);case"Tab":return b("now");default:e.key.length===1&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&(v(),I(e.key))}},P=e=>{const r=e.target;if(r===d.current||r.parentElement!==d.current)return k(null);k({top:r.offsetTop,height:r.offsetHeight,danger:r.hasAttribute("data-danger")})},B=e=>{const r=e.relatedTarget;(!r||r.parentElement!==d.current)&&k(null)},$=o?n[o.index]?.submenu:void 0;return a.jsxs(a.Fragment,{children:[a.jsxs("div",{ref:d,id:t,className:"ui-dm__list",role:"menu","aria-orientation":"vertical","aria-labelledby":w,"aria-label":l,tabIndex:-1,onKeyDown:O,onFocus:P,onBlur:B,onPointerLeave:()=>{L(),d.current?.contains(document.activeElement)&&document.activeElement!==d.current&&d.current?.focus({preventScroll:!0})},children:[x&&a.jsx("span",{className:"ui-dm__glow","aria-hidden":"true","data-danger":x.danger||void 0,style:{transform:`translateY(${x.top}px)`,height:x.height}}),n.length===0&&a.jsx("span",{className:"ui-dm__empty",children:y}),n.map((e,r)=>{const s=e.checked!==void 0&&!e.submenu,j=s?e.type==="checkbox"?"menuitemcheckbox":"menuitemradio":"menuitem",S=o?.index===r;return a.jsxs(u.Fragment,{children:[e.divider&&r>0&&a.jsx("span",{className:"ui-dm__sep",role:"separator"}),a.jsxs("div",{className:"ui-dm__item",role:j,tabIndex:-1,"data-index":r,"aria-checked":s?!!e.checked:void 0,"aria-disabled":e.disabled||void 0,"aria-haspopup":e.submenu?"menu":void 0,"aria-expanded":e.submenu?S:void 0,"aria-controls":e.submenu&&S?`${p}-sub-list`:void 0,"data-danger":e.danger||void 0,"data-rich":e.description?"":void 0,"data-open":S||void 0,onPointerDown:v=>v.preventDefault(),onPointerMove:v=>{const i=v.currentTarget;if(e.disabled){document.activeElement!==d.current&&d.current?.focus({preventScroll:!0});return}document.activeElement!==i&&i.focus({preventScroll:!0}),e.submenu?S?L():m.current!==r&&D(()=>f(r,!1),90,r):o?m.current!==-1&&D(()=>c(null),220,-1):L()},onClick:v=>A(r,v.detail===0),children:[(e.logo||e.icon)&&a.jsx("span",{className:"ui-dm__icon","data-logo":e.logo?"":void 0,"aria-hidden":"true",children:e.logo??a.jsx(X,{icon:e.icon})}),a.jsxs("span",{className:"ui-dm__label",children:[a.jsx("span",{className:"ui-dm__text",title:e.label,children:e.label}),e.description&&a.jsx("span",{className:"ui-dm__desc",title:e.description,children:e.description})]}),e.shortcut&&a.jsx("kbd",{className:"ui-dm__kbd",children:e.shortcut}),e.submenu&&a.jsx("span",{className:"ui-dm__more","aria-hidden":"true",children:a.jsx(Z,{})}),s&&a.jsx("span",{className:"ui-dm__check","aria-hidden":"true",children:e.checked&&a.jsx(ee,{})})]})]},`${r}-${e.label}`)})]}),o&&$&&a.jsx(G,{id:`${p}-sub`,listId:`${p}-sub-list`,row:()=>C(o.index),items:$,focus:o.focus,label:n[o.index]?.label,onEnter:()=>L(),onBack:N,onPick:M,onClose:b})]})}function G({id:t,listId:n,row:y,items:w,focus:l,label:M,onEnter:b,onBack:_,onPick:p,onClose:d}){const x=u.useRef(null);return u.useLayoutEffect(()=>{const k=x.current;if(!k)return;q(k);const o=()=>{const c=y()?.getBoundingClientRect();c&&F(k,new DOMRect(c.left-4,c.top-4,c.width+8,c.height+8),"right","start",4)};return o(),window.addEventListener("resize",o),window.addEventListener("scroll",o,!0),()=>{window.removeEventListener("resize",o),window.removeEventListener("scroll",o,!0),W(k)}},[]),u.useEffect(()=>{l&&T(z(x.current?.querySelector(".ui-dm__list")??null)[0])},[l]),a.jsx("div",{ref:x,id:t,className:"ui-dm__panel","data-sub":"",popover:"manual",onPointerEnter:b,children:a.jsx(H,{id:n,items:w,label:M,onPick:p,onClose:d,onBack:_})})}const z=t=>t?[...t.querySelectorAll(':scope > [role^="menuitem"]:not([aria-disabled="true"])')]:[];function T(t){t&&(t.focus({preventScroll:!0}),t.scrollIntoView?.({block:"nearest"}))}function V(t,n){if(!t)return null;const y=t.querySelectorAll("button, [href], input, [tabindex]");for(const w of y)if(!n?.contains(w))return w;return null}const J=t=>window.setTimeout(()=>{const n=document.activeElement;t?.isConnected&&(!n||n===document.body)&&t.focus({preventScroll:!0})});function q(t){"showPopover"in t&&!t.matches(":popover-open")&&t.showPopover()}function W(t){"hidePopover"in t&&t.isConnected&&t.matches(":popover-open")&&t.hidePopover()}function F(t,n,y,w,l){t.style.setProperty("--ui-dm-trigger-w",`${Math.round(n.width)}px`);const b=document.documentElement.clientWidth||window.innerWidth,_=window.innerHeight;t.style.maxHeight="";const p=t.offsetWidth,d=t.offsetHeight,x={bottom:_-n.bottom-l-8,top:n.top-l-8,right:b-n.right-l-8,left:n.left-l-8},k={top:"bottom",bottom:"top",left:"right",right:"left"};let o=y,c=w,g,m;const E=o==="top"||o==="bottom";if(x[o]<(E?d:p)&&x[k[o]]>x[o]&&(o=k[o]),!E&&x[o]<p)o="bottom",g=n.bottom-2,m=Math.min(Math.max(8,n.left+16),b-8-p),t.style.maxHeight=`${Math.max(120,_-g-8)}px`;else if(o==="top"||o==="bottom"){const L=Math.min(d,Math.max(120,x[o]));g=o==="bottom"?n.bottom+l:n.top-l-L,m=c==="start"?n.left:n.right-p,c==="start"&&m+p>b-8&&n.right-p>=8?(c="end",m=n.right-p):c==="end"&&m<8&&n.left+p<=b-8&&(c="start",m=n.left),m=Math.min(Math.max(8,m),b-8-p),d>L&&(t.style.maxHeight=`${L}px`)}else m=o==="right"?n.right+l:n.left-l-p,g=c==="start"?n.top:n.bottom-d,g+d>_-8&&(g=Math.max(8,_-8-d)),g<8&&(g=8),d>_-16&&(t.style.maxHeight=`${_-16}px`);t.style.top=`${Math.round(g)}px`,t.style.left=`${Math.round(m)}px`,t.dataset.side=o,t.dataset.align=c}const Q=t=>Array.isArray(t)&&t.length>0&&t.every(n=>Array.isArray(n)&&typeof n[0]=="string");function X({icon:t}){return Q(t)?a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",focusable:"false",children:t.map(([n,{key:y,...w}],l)=>u.createElement(n,{...w,key:String(y??l)}))}):a.jsx(a.Fragment,{children:t})}function Z(){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:a.jsx("path",{d:"M9 6s6 4.42 6 6-6 6-6 6"})})}function ee(){return a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:a.jsx("path",{className:"ui-dm__tick",d:"M5 14 8.5 17.5 19 6.5",pathLength:1})})}const te=`
/* Colors and motion as variables – override them on .ui-dm (see Theming in the docs) */
.ui-dm {
  --ui-dm-surface: var(--aui-overlay, var(--aui-surface, #ffffff));
  --ui-dm-ink: var(--aui-ink, #171717);
  --ui-dm-text: var(--aui-ink, #262626);
  --ui-dm-icon: var(--aui-muted, #8f8f8f);
  --ui-dm-faint: var(--aui-placeholder, #a3a3a3);
  --ui-dm-line: var(--aui-border, #ececec);
  --ui-dm-glow: #f4f4f5;
  --ui-dm-danger: var(--aui-danger, #d92d20);
  --ui-dm-danger-glow: color-mix(in srgb, var(--aui-red, #f04438) 8%, transparent);
  --ui-dm-shadow: var(--aui-shadow-popover, 0 0 0 1px rgba(0, 0, 0, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.18), 0 4px 12px -4px rgba(0, 0, 0, 0.06));
  --ui-dm-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-dm-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  --ui-dm-radius: calc(var(--aui-radius-lg, 10px) + 4px);
  --ui-dm-row-radius: calc(var(--aui-radius-sm, 5px) + 4px);

  position: relative;
  display: inline-flex;
  min-width: 0;
}

/* The menu: a white card in the top layer, a 1px edge and a deeper drop */
.ui-dm__panel {
  position: fixed;
  inset: auto;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 180px;
  /* Fits its content up to 320px – long items shorten with … (full text on hover) instead of stretching it; the width prop lifts the cap */
  max-width: min(320px, calc(100vw - 16px));
  max-height: calc(100vh - 16px);
  margin: 0;
  padding: 5px;
  border: 0;
  border-radius: var(--ui-dm-radius);
  background: var(--ui-dm-surface);
  box-shadow: var(--ui-dm-shadow);
  color: var(--ui-dm-ink);
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  line-height: 20px;
  font-weight: 400;
  text-align: start;
  overflow: visible;
  -webkit-font-smoothing: antialiased;
  transform-origin: top left;
  animation: ui-dm-in 220ms var(--ui-dm-ease) both;
}
.ui-dm__panel::backdrop { display: none; }
.ui-dm__panel[data-align="end"] { transform-origin: top right; }
.ui-dm__panel[data-side="top"] { transform-origin: bottom left; animation-name: ui-dm-in-up; }
.ui-dm__panel[data-side="top"][data-align="end"] { transform-origin: bottom right; }
.ui-dm__panel[data-side="right"] { transform-origin: top left; animation-name: ui-dm-in-side; animation-duration: 160ms; }
.ui-dm__panel[data-side="left"] { transform-origin: top right; animation-name: ui-dm-in-side; animation-duration: 160ms; }

.ui-dm__title { display: block; flex: none; padding: 7px 10px 5px; font-size: 12px; line-height: 16px; font-weight: 500; color: var(--ui-dm-icon); }

/* The rows; a long menu scrolls inside the card */
.ui-dm__list {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-content: start;
  gap: 1px;
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
}
.ui-dm__list:focus { outline: none; }

/* One soft highlight that glides between the rows */
.ui-dm__glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: var(--ui-dm-row-radius);
  background: var(--ui-dm-glow);
  pointer-events: none;
  transition: transform 180ms var(--ui-dm-ease), height 180ms var(--ui-dm-ease), background-color 120ms ease;
}
.ui-dm__glow[data-danger] { background: var(--ui-dm-danger-glow); }

.ui-dm__item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 9px;
  box-sizing: border-box;
  min-width: 0;
  min-height: 34px;
  padding: 0 10px;
  border-radius: var(--ui-dm-row-radius);
  color: var(--ui-dm-text);
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: color 120ms ease;
}
.ui-dm__item[data-rich] { min-height: 46px; padding: 7px 10px; }
.ui-dm__item:focus { outline: none; color: var(--ui-dm-ink); }
.ui-dm__item:focus-visible { outline: 2px solid var(--ui-dm-focus); outline-offset: -2px; }
/* The item whose submenu is open keeps a highlight while the focus is in the submenu */
.ui-dm__item[data-open] { color: var(--ui-dm-ink); }
.ui-dm__item[data-open]:not(:focus) { background: var(--ui-dm-glow); }
.ui-dm__item[aria-checked="true"] { color: var(--ui-dm-ink); font-weight: 500; }
.ui-dm__item[data-danger], .ui-dm__item[data-danger]:focus { color: var(--ui-dm-danger); }
.ui-dm__item[aria-disabled="true"] { color: var(--ui-dm-faint); cursor: default; }

.ui-dm__icon { display: grid; flex: none; place-items: center; width: 16px; height: 16px; color: var(--ui-dm-icon); transition: color 120ms ease; }
.ui-dm__icon > svg { display: block; width: 16px; height: 16px; }
.ui-dm__icon[data-logo] > svg, .ui-dm__icon[data-logo] > img { width: 14px; height: 14px; }
.ui-dm__item:focus .ui-dm__icon:not([data-logo]), .ui-dm__item[data-open] .ui-dm__icon:not([data-logo]) { color: var(--ui-dm-ink); }
.ui-dm__item[data-danger] .ui-dm__icon { color: var(--ui-dm-danger); }
.ui-dm__item[aria-disabled="true"] .ui-dm__icon { opacity: 0.5; color: var(--ui-dm-icon); }

/* Long names stay on one line – the full name on hover */
.ui-dm__label { display: grid; flex: 1; gap: 1px; min-width: 0; }
.ui-dm__text, .ui-dm__desc { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-dm__desc { font-size: 12.5px; line-height: 17px; font-weight: 400; color: var(--ui-dm-icon); }

.ui-dm__kbd { flex: none; padding-left: 16px; font: inherit; font-size: 12px; font-weight: 400; letter-spacing: 0.04em; color: var(--ui-dm-faint); }
.ui-dm__more, .ui-dm__check { display: grid; flex: none; place-items: center; width: 14px; height: 14px; }
.ui-dm__more { color: var(--ui-dm-faint); }
.ui-dm__check { color: var(--ui-dm-ink); }
.ui-dm__more > svg, .ui-dm__check > svg { display: block; width: 14px; height: 14px; }
.ui-dm__tick { stroke-dasharray: 1; animation: ui-dm-draw 280ms 40ms var(--ui-dm-ease) both; }

.ui-dm__sep { display: block; height: 1px; margin: 5px 4px; background: var(--ui-dm-line); }
.ui-dm__empty { display: block; padding: 6px 8px; color: var(--ui-dm-faint); }

@keyframes ui-dm-in { from { opacity: 0; transform: scale(0.96) translateY(-4px); } }
@keyframes ui-dm-in-up { from { opacity: 0; transform: scale(0.96) translateY(4px); } }
@keyframes ui-dm-in-side { from { opacity: 0; transform: scale(0.98); } }
@keyframes ui-dm-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }

/* Touch screens: rows a finger can hit */
@media (pointer: coarse) {
  .ui-dm__item { min-height: 40px; }
  .ui-dm__item[data-rich] { min-height: 48px; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-dm__panel, .ui-dm__tick { animation-duration: 1ms; }
  .ui-dm__glow, .ui-dm__item, .ui-dm__icon { transition-duration: 1ms; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-dm {
  --ui-dm-surface: var(--aui-overlay, var(--aui-surface, #19191b));
  --ui-dm-ink: var(--aui-ink, #ededed);
  --ui-dm-text: var(--aui-ink, #e4e4e7);
  --ui-dm-icon: var(--aui-muted, #8b8b92);
  --ui-dm-faint: var(--aui-placeholder, #5c5c63);
  --ui-dm-line: var(--aui-border, #2a2a2e);
  --ui-dm-glow: #26262a;
  --ui-dm-danger: var(--aui-danger, #ff8a7a);
  --ui-dm-danger-glow: color-mix(in srgb, var(--aui-red, #ff6b5f) 14%, transparent);
  --ui-dm-shadow: var(--aui-shadow-popover, 0 0 0 1px rgba(255, 255, 255, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.6));
  --ui-dm-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
  color-scheme: dark;
}
`;function ne(){return a.jsx("div",{className:"stage",children:a.jsx(Y,{trigger:({triggerProps:t})=>a.jsx("button",{type:"button",...t,children:"操作"}),items:[{label:"复制",description:"放到剪贴板"},{label:"重命名"},{label:"删除",danger:!0}]})})}export{ne as default};
