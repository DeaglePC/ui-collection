import{r as p,j as r}from"./client-CsvIHAk3.js";const q=500,U=10,Y=n=>n.key==="ContextMenu"||n.shiftKey&&n.key==="F10",V='button, [href], input, select, textarea, summary, [tabindex]:not([tabindex="-1"])',B=n=>!!n?.closest('input, textarea, select, [contenteditable=""], [contenteditable="true"]');function X({children:n,items:i,title:M,"aria-label":E="Actions",disabled:m,onOpenChange:L,width:y,menuClassName:v}){const f=p.useId(),s=p.useRef(null),[h,w]=p.useState(null),e=p.useRef(0),u=p.useRef(0),d=p.useRef(null),x=p.useRef(L);x.current=L;const _=a=>{const c=typeof i=="function"?i(a):i;return Array.isArray(c)?c.filter(Boolean):[]},b=(a,c,g,t)=>{if(m||!_(g).length)return!1;const o=document.activeElement,l=s.current,k=g.closest(V),D=o&&l?.contains(o)?o:k&&l?.contains(k)?k:l&&l.tabIndex>=0?l:null;return w({x:a,y:c,target:g,back:D,keyboard:t,n:++e.current}),x.current?.(!0,g),!0},A=a=>{const c=h?.back??null;a==="now"&&c?.focus({preventScroll:!0}),w(null),x.current?.(!1,null),a===!0&&Q(c)};p.useEffect(()=>()=>window.clearTimeout(d.current?.timer),[]);const C=()=>{window.clearTimeout(d.current?.timer),d.current=null};if(!p.isValidElement(n))return r.jsx(r.Fragment,{children:n});const R=n.props,I=(a,c)=>R[a]?.(c),S=(a,c)=>g=>{I(a,g),g.defaultPrevented||c(g)},$=p.cloneElement(n,{ref:a=>{s.current=a;const c=R.ref;typeof c=="function"?c(a):c&&(c.current=a)},style:m?R.style:{WebkitTouchCallout:"none",...R.style},onContextMenu:S("onContextMenu",a=>{if(Date.now()-u.current<600)return a.preventDefault();const c=a.target;if(m||B(c))return;const g=!!d.current;C(),b(a.clientX,a.clientY,c,!1)&&(a.preventDefault(),g&&(u.current=Date.now()))}),onKeyDown:S("onKeyDown",a=>{if(!Y(a)||m)return;const c=a.target;if(B(c))return;const g=c.getBoundingClientRect(),o=getComputedStyle(c).direction==="rtl"?g.right-Math.min(12,g.width/2):g.left+Math.min(12,g.width/2);b(o,g.top+Math.min(g.height,26),c,!0)&&(a.preventDefault(),u.current=Date.now())}),onPointerDown:S("onPointerDown",a=>{if(C(),a.pointerType!=="touch"||m||B(a.target))return;const c=a.target,{clientX:g,clientY:t}=a;d.current={x:g,y:t,timer:window.setTimeout(()=>{d.current=null,b(g,t,c,!1)&&(u.current=Date.now())},q)}}),onPointerMove:S("onPointerMove",a=>{const c=d.current;c&&Math.hypot(a.clientX-c.x,a.clientY-c.y)>U&&C()}),onPointerUp:S("onPointerUp",C),onPointerCancel:S("onPointerCancel",C),onClickCapture:a=>{Date.now()-u.current<600&&(a.preventDefault(),a.stopPropagation()),I("onClickCapture",a)}}),z=h?_(h.target):[];return r.jsxs(r.Fragment,{children:[r.jsx("style",{href:"ui-context-menu",precedence:"default",children:it}),$,h&&z.length>0&&r.jsx(G,{id:`${f}-menu`,at:h,items:z,title:M,label:E,width:y,className:v,onClose:A},h.n)]})}function G({id:n,at:i,items:M,title:E,label:m,width:L,className:y,onClose:v}){const f=p.useRef(null),s=p.useRef(v);s.current=v;const h=`${n}-title`;p.useLayoutEffect(()=>{const e=f.current;if(!e)return;H(e);const u=getComputedStyle(i.target).direction==="rtl",d=()=>W(e,new DOMRect(i.x,i.y,0,0),"bottom",u?"end":"start",0);d();const x=typeof ResizeObserver>"u"?null:new ResizeObserver(d);return x?.observe(e),()=>{x?.disconnect(),K(e)}},[]),p.useEffect(()=>{const e=f.current?.querySelector(":scope > .ui-ctx__list");if(e){if(!i.keyboard)return e.focus({preventScroll:!0});N(T(e)[0]??e)}},[]),p.useEffect(()=>{const e=_=>_ instanceof Node&&!!f.current?.contains(_),u=_=>!e(_.target)&&s.current(!1),d=_=>{const b=_.target;e(b)||(b===document||b instanceof Node&&b.contains(i.target))&&s.current(!1)},x=()=>s.current(!1);return document.addEventListener("pointerdown",u,!0),window.addEventListener("scroll",d,!0),window.addEventListener("resize",x),window.addEventListener("blur",x),()=>{document.removeEventListener("pointerdown",u,!0),window.removeEventListener("scroll",d,!0),window.removeEventListener("resize",x),window.removeEventListener("blur",x)}},[]);const w=e=>e.stopPropagation();return r.jsxs("div",{ref:f,className:["ui-ctx","ui-ctx__panel",y].filter(Boolean).join(" "),popover:"manual",style:L!=null?{width:L,maxWidth:"calc(100vw - 16px)"}:void 0,onClick:w,onDoubleClick:w,onPointerDown:w,onMouseDown:w,onContextMenu:e=>{e.preventDefault(),e.stopPropagation()},children:[E&&r.jsx("span",{className:"ui-ctx__title",id:h,children:E}),r.jsx(F,{id:n,items:M,labelledBy:E?h:void 0,label:E?void 0:m,onPick:()=>v(!0),onClose:v})]})}function F({id:n,items:i,empty:M,labelledBy:E,label:m,onPick:L,onClose:y,onBack:v}){const f=p.useId(),s=p.useRef(null),[h,w]=p.useState(null),[e,u]=p.useState(null),d=p.useRef(0),x=p.useRef(null),_=p.useRef({text:"",at:0});p.useEffect(()=>()=>window.clearTimeout(d.current),[]);const b=()=>{window.clearTimeout(d.current),x.current=null},A=(t,o,l)=>{window.clearTimeout(d.current),x.current=l,d.current=window.setTimeout(()=>{x.current=null,t()},o)},C=t=>s.current?.querySelector(`:scope > [data-index="${t}"]`)??null,R=(t,o)=>{b(),u(l=>l?.index===t?o?{index:t,focus:o}:l:{index:t,focus:o}),o&&e?.index===t&&N(T(document.getElementById(`${f}-sub`)?.querySelector(".ui-ctx__list")??null)[0])},I=()=>{const t=e?.index;u(null),t!=null&&N(C(t))},S=(t,o)=>{const l=i[t];if(!(!l||l.disabled)){if(l.submenu){!o&&e?.index===t&&!e.focus?u(null):R(t,o);return}l.onSelect?.(),l.keepOpen||L()}},$=t=>{const o=Date.now();_.current.text=o-_.current.at>700?t:_.current.text+t,_.current.at=o;const l=_.current.text.toLowerCase(),k=T(s.current),D=k.indexOf(document.activeElement),j=l.length===1?D+1:Math.max(D,0);for(let P=0;P<k.length;P++){const O=k[(j+P)%k.length];if((i[Number(O.dataset.index)]?.label??"").toLowerCase().startsWith(l))return N(O)}},z=t=>{const o=T(s.current),l=o.indexOf(document.activeElement),k=l>=0?Number(o[l].dataset.index):-1,D=k>=0?i[k]:void 0,j=()=>{t.preventDefault(),t.stopPropagation()},P=O=>{j(),e&&u(null),o.length&&N(o[(O+o.length)%o.length])};switch(t.key){case"ArrowDown":return P(l+1);case"ArrowUp":return P(l<0?-1:l-1);case"Home":case"PageUp":return P(0);case"End":case"PageDown":return P(-1);case"ArrowRight":D?.submenu&&(j(),R(k,!0));return;case"ArrowLeft":v&&(j(),v());return;case"Escape":return j(),v?v():y("now");case"Enter":case" ":return j(),t.key===" "&&Date.now()-_.current.at<700?$(" "):S(k,!0);case"Tab":return y("now");default:t.key.length===1&&!t.metaKey&&!t.ctrlKey&&!t.altKey&&(j(),$(t.key))}},a=t=>{const o=t.target;if(o===s.current||o.parentElement!==s.current)return w(null);w({top:o.offsetTop,height:o.offsetHeight,danger:o.hasAttribute("data-danger")})},c=t=>{const o=t.relatedTarget;(!o||o.parentElement!==s.current)&&w(null)},g=e?i[e.index]?.submenu:void 0;return r.jsxs(r.Fragment,{children:[r.jsxs("div",{ref:s,id:n,className:"ui-ctx__list",role:"menu","aria-orientation":"vertical","aria-labelledby":E,"aria-label":m,tabIndex:-1,onKeyDown:z,onFocus:a,onBlur:c,onPointerLeave:()=>{b(),s.current?.contains(document.activeElement)&&document.activeElement!==s.current&&s.current?.focus({preventScroll:!0})},children:[h&&r.jsx("span",{className:"ui-ctx__glow","aria-hidden":"true","data-danger":h.danger||void 0,style:{transform:`translateY(${h.top}px)`,height:h.height}}),i.length===0&&r.jsx("span",{className:"ui-ctx__empty",children:M}),i.map((t,o)=>{const l=t.checked!==void 0&&!t.submenu,k=l?t.type==="checkbox"?"menuitemcheckbox":"menuitemradio":"menuitem",D=e?.index===o;return r.jsxs(p.Fragment,{children:[t.divider&&o>0&&r.jsx("span",{className:"ui-ctx__sep",role:"separator"}),r.jsxs("div",{className:"ui-ctx__item",role:k,tabIndex:-1,"data-index":o,"aria-checked":l?!!t.checked:void 0,"aria-disabled":t.disabled||void 0,"aria-haspopup":t.submenu?"menu":void 0,"aria-expanded":t.submenu?D:void 0,"aria-controls":t.submenu&&D?`${f}-sub-list`:void 0,"data-danger":t.danger||void 0,"data-rich":t.description?"":void 0,"data-open":D||void 0,onPointerDown:j=>j.preventDefault(),onPointerMove:j=>{const P=j.currentTarget;if(t.disabled){document.activeElement!==s.current&&s.current?.focus({preventScroll:!0});return}document.activeElement!==P&&P.focus({preventScroll:!0}),t.submenu?D?b():x.current!==o&&A(()=>R(o,!1),90,o):e?x.current!==-1&&A(()=>u(null),220,-1):b()},onClick:j=>S(o,j.detail===0),children:[(t.logo||t.icon)&&r.jsx("span",{className:"ui-ctx__icon","data-logo":t.logo?"":void 0,"aria-hidden":"true",children:t.logo??r.jsx(tt,{icon:t.icon})}),r.jsxs("span",{className:"ui-ctx__label",children:[r.jsx("span",{className:"ui-ctx__text",title:t.label,children:t.label}),t.description&&r.jsx("span",{className:"ui-ctx__desc",title:t.description,children:t.description})]}),t.shortcut&&r.jsx("kbd",{className:"ui-ctx__kbd",children:t.shortcut}),t.submenu&&r.jsx("span",{className:"ui-ctx__more","aria-hidden":"true",children:r.jsx(et,{})}),l&&r.jsx("span",{className:"ui-ctx__check","aria-hidden":"true",children:t.checked&&r.jsx(nt,{})})]})]},`${o}-${t.label}`)})]}),e&&g&&r.jsx(J,{id:`${f}-sub`,listId:`${f}-sub-list`,row:()=>C(e.index),items:g,focus:e.focus,label:i[e.index]?.label,onEnter:()=>b(),onBack:I,onPick:L,onClose:y})]})}function J({id:n,listId:i,row:M,items:E,focus:m,label:L,onEnter:y,onBack:v,onPick:f,onClose:s}){const h=p.useRef(null);return p.useLayoutEffect(()=>{const w=h.current;if(!w)return;H(w);const e=()=>{const u=M()?.getBoundingClientRect();u&&W(w,new DOMRect(u.left-4,u.top-4,u.width+8,u.height+8),"right","start",4)};return e(),window.addEventListener("resize",e),window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",e,!0),K(w)}},[]),p.useEffect(()=>{m&&N(T(h.current?.querySelector(".ui-ctx__list")??null)[0])},[m]),r.jsx("div",{ref:h,id:n,className:"ui-ctx__panel","data-sub":"",popover:"manual",onPointerEnter:y,children:r.jsx(F,{id:i,items:E,label:L,onPick:f,onClose:s,onBack:v})})}const T=n=>n?[...n.querySelectorAll(':scope > [role^="menuitem"]:not([aria-disabled="true"])')]:[];function N(n){n&&(n.focus({preventScroll:!0}),n.scrollIntoView?.({block:"nearest"}))}const Q=n=>window.setTimeout(()=>{const i=document.activeElement;n?.isConnected&&(!i||i===document.body)&&n.focus({preventScroll:!0})});function H(n){"showPopover"in n&&!n.matches(":popover-open")&&n.showPopover()}function K(n){"hidePopover"in n&&n.isConnected&&n.matches(":popover-open")&&n.hidePopover()}function W(n,i,M,E,m){const y=document.documentElement.clientWidth||window.innerWidth,v=window.innerHeight;n.style.maxHeight="";const f=n.offsetWidth,s=n.offsetHeight,h={bottom:v-i.bottom-m-8,top:i.top-m-8,right:y-i.right-m-8,left:i.left-m-8},w={top:"bottom",bottom:"top",left:"right",right:"left"};let e=M,u=E,d,x;const _=e==="top"||e==="bottom";if(h[e]<(_?s:f)&&h[w[e]]>h[e]&&(e=w[e]),!_&&h[e]<f)e="bottom",d=i.bottom-2,x=Math.min(Math.max(8,i.left+16),y-8-f),n.style.maxHeight=`${Math.max(120,v-d-8)}px`;else if(e==="top"||e==="bottom"){const b=Math.min(s,Math.max(120,h[e]));d=e==="bottom"?i.bottom+m:i.top-m-b,x=u==="start"?i.left:i.right-f,u==="start"&&x+f>y-8&&i.right-f>=8?(u="end",x=i.right-f):u==="end"&&x<8&&i.left+f<=y-8&&(u="start",x=i.left),x=Math.min(Math.max(8,x),y-8-f),s>b&&(n.style.maxHeight=`${b}px`)}else x=e==="right"?i.right+m:i.left-m-f,d=u==="start"?i.top:i.bottom-s,d+s>v-8&&(d=Math.max(8,v-8-s)),d<8&&(d=8),s>v-16&&(n.style.maxHeight=`${v-16}px`);n.style.top=`${Math.round(d)}px`,n.style.left=`${Math.round(x)}px`,n.dataset.side=e,n.dataset.align=u}const Z=n=>Array.isArray(n)&&n.length>0&&n.every(i=>Array.isArray(i)&&typeof i[0]=="string");function tt({icon:n}){return Z(n)?r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",focusable:"false",children:n.map(([i,{key:M,...E}],m)=>p.createElement(i,{...E,key:String(M??m)}))}):r.jsx(r.Fragment,{children:n})}function et(){return r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:r.jsx("path",{d:"M9 6s6 4.42 6 6-6 6-6 6"})})}function nt(){return r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:r.jsx("path",{className:"ui-ctx__tick",d:"M5 14 8.5 17.5 19 6.5",pathLength:1})})}const it=`
/* Colors and motion as variables – override them on .ui-ctx (see Theming in the docs) */
.ui-ctx {
  --ui-ctx-surface: var(--aui-overlay, var(--aui-surface, #ffffff));
  --ui-ctx-ink: var(--aui-ink, #171717);
  --ui-ctx-text: var(--aui-ink, #262626);
  --ui-ctx-icon: var(--aui-muted, #8f8f8f);
  --ui-ctx-faint: var(--aui-placeholder, #a3a3a3);
  --ui-ctx-line: var(--aui-border, #ececec);
  --ui-ctx-glow: #f4f4f5;
  --ui-ctx-danger: var(--aui-danger, #d92d20);
  --ui-ctx-danger-glow: color-mix(in srgb, var(--aui-red, #f04438) 8%, transparent);
  --ui-ctx-shadow: var(--aui-shadow-popover, 0 0 0 1px rgba(0, 0, 0, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.18), 0 4px 12px -4px rgba(0, 0, 0, 0.06));
  --ui-ctx-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-ctx-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  --ui-ctx-radius: calc(var(--aui-radius-lg, 10px) + 4px);
  --ui-ctx-row-radius: calc(var(--aui-radius-sm, 5px) + 4px);
}

/* The menu: a white card in the top layer, a 1px edge and a deeper drop */
.ui-ctx__panel {
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
  border-radius: var(--ui-ctx-radius);
  background: var(--ui-ctx-surface);
  box-shadow: var(--ui-ctx-shadow);
  color: var(--ui-ctx-ink);
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  line-height: 20px;
  font-weight: 400;
  text-align: start;
  overflow: visible;
  -webkit-font-smoothing: antialiased;
  transform-origin: top left;
  animation: ui-ctx-in 220ms var(--ui-ctx-ease) both;
}
.ui-ctx__panel::backdrop { display: none; }
.ui-ctx__panel[data-align="end"] { transform-origin: top right; }
.ui-ctx__panel[data-side="top"] { transform-origin: bottom left; animation-name: ui-ctx-in-up; }
.ui-ctx__panel[data-side="top"][data-align="end"] { transform-origin: bottom right; }
.ui-ctx__panel[data-side="right"] { transform-origin: top left; animation-name: ui-ctx-in-side; animation-duration: 160ms; }
.ui-ctx__panel[data-side="left"] { transform-origin: top right; animation-name: ui-ctx-in-side; animation-duration: 160ms; }

.ui-ctx__title { display: block; flex: none; padding: 7px 10px 5px; font-size: 12px; line-height: 16px; font-weight: 500; color: var(--ui-ctx-icon); }

/* The rows; a long menu scrolls inside the card */
.ui-ctx__list {
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
.ui-ctx__list:focus { outline: none; }

/* One soft highlight that glides between the rows */
.ui-ctx__glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: var(--ui-ctx-row-radius);
  background: var(--ui-ctx-glow);
  pointer-events: none;
  transition: transform 180ms var(--ui-ctx-ease), height 180ms var(--ui-ctx-ease), background-color 120ms ease;
}
.ui-ctx__glow[data-danger] { background: var(--ui-ctx-danger-glow); }

.ui-ctx__item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 9px;
  box-sizing: border-box;
  min-width: 0;
  min-height: 34px;
  padding: 0 10px;
  border-radius: var(--ui-ctx-row-radius);
  color: var(--ui-ctx-text);
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: color 120ms ease;
}
.ui-ctx__item[data-rich] { min-height: 46px; padding: 7px 10px; }
.ui-ctx__item:focus { outline: none; color: var(--ui-ctx-ink); }
.ui-ctx__item:focus-visible { outline: 2px solid var(--ui-ctx-focus); outline-offset: -2px; }
/* The item whose submenu is open keeps a highlight while the focus is in the submenu */
.ui-ctx__item[data-open] { color: var(--ui-ctx-ink); }
.ui-ctx__item[data-open]:not(:focus) { background: var(--ui-ctx-glow); }
.ui-ctx__item[aria-checked="true"] { color: var(--ui-ctx-ink); font-weight: 500; }
.ui-ctx__item[data-danger], .ui-ctx__item[data-danger]:focus { color: var(--ui-ctx-danger); }
.ui-ctx__item[aria-disabled="true"] { color: var(--ui-ctx-faint); cursor: default; }

.ui-ctx__icon { display: grid; flex: none; place-items: center; width: 16px; height: 16px; color: var(--ui-ctx-icon); transition: color 120ms ease; }
.ui-ctx__icon > svg { display: block; width: 16px; height: 16px; }
.ui-ctx__icon[data-logo] > svg, .ui-ctx__icon[data-logo] > img { width: 14px; height: 14px; }
.ui-ctx__item:focus .ui-ctx__icon:not([data-logo]), .ui-ctx__item[data-open] .ui-ctx__icon:not([data-logo]) { color: var(--ui-ctx-ink); }
.ui-ctx__item[data-danger] .ui-ctx__icon { color: var(--ui-ctx-danger); }
.ui-ctx__item[aria-disabled="true"] .ui-ctx__icon { opacity: 0.5; color: var(--ui-ctx-icon); }

/* Long names stay on one line – the full name on hover */
.ui-ctx__label { display: grid; flex: 1; gap: 1px; min-width: 0; }
.ui-ctx__text, .ui-ctx__desc { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-ctx__desc { font-size: 12.5px; line-height: 17px; font-weight: 400; color: var(--ui-ctx-icon); }

.ui-ctx__kbd { flex: none; padding-left: 16px; font: inherit; font-size: 12px; font-weight: 400; letter-spacing: 0.04em; color: var(--ui-ctx-faint); }
.ui-ctx__more, .ui-ctx__check { display: grid; flex: none; place-items: center; width: 14px; height: 14px; }
.ui-ctx__more { color: var(--ui-ctx-faint); }
.ui-ctx__check { color: var(--ui-ctx-ink); }
.ui-ctx__more > svg, .ui-ctx__check > svg { display: block; width: 14px; height: 14px; }
.ui-ctx__tick { stroke-dasharray: 1; animation: ui-ctx-draw 280ms 40ms var(--ui-ctx-ease) both; }

.ui-ctx__sep { display: block; height: 1px; margin: 5px 4px; background: var(--ui-ctx-line); }
.ui-ctx__empty { display: block; padding: 6px 8px; color: var(--ui-ctx-faint); }

@keyframes ui-ctx-in { from { opacity: 0; transform: scale(0.96) translateY(-4px); } }
@keyframes ui-ctx-in-up { from { opacity: 0; transform: scale(0.96) translateY(4px); } }
@keyframes ui-ctx-in-side { from { opacity: 0; transform: scale(0.98); } }
@keyframes ui-ctx-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }

/* Touch screens: rows a finger can hit */
@media (pointer: coarse) {
  .ui-ctx__item { min-height: 40px; }
  .ui-ctx__item[data-rich] { min-height: 48px; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-ctx__panel, .ui-ctx__tick { animation-duration: 1ms; }
  .ui-ctx__glow, .ui-ctx__item, .ui-ctx__icon { transition-duration: 1ms; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-ctx {
  --ui-ctx-surface: var(--aui-overlay, var(--aui-surface, #19191b));
  --ui-ctx-ink: var(--aui-ink, #ededed);
  --ui-ctx-text: var(--aui-ink, #e4e4e7);
  --ui-ctx-icon: var(--aui-muted, #8b8b92);
  --ui-ctx-faint: var(--aui-placeholder, #5c5c63);
  --ui-ctx-line: var(--aui-border, #2a2a2e);
  --ui-ctx-glow: #26262a;
  --ui-ctx-danger: var(--aui-danger, #ff8a7a);
  --ui-ctx-danger-glow: color-mix(in srgb, var(--aui-red, #ff6b5f) 14%, transparent);
  --ui-ctx-shadow: var(--aui-shadow-popover, 0 0 0 1px rgba(255, 255, 255, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.6));
  --ui-ctx-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
  color-scheme: dark;
}
`;function rt(){return r.jsx("div",{className:"stage",children:r.jsx(X,{name:"示例"})})}export{rt as default};
