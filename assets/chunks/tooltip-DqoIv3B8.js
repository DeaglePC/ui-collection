import{r as o,j as l}from"./client-CsvIHAk3.js";const W=300,H=120,d={current:null,warmUntil:0};function O({content:i,shortcut:g,children:y,side:w="top",align:u="center",offset:L=6,delay:r=500,disabled:E,open:P,onOpenChange:m,className:h}){const p=o.useId(),T=`${p}-tip`,n=`${p}-keys`,v=o.useRef(null),x=o.useRef(null),a=o.useRef(0),s=o.useRef(!1),[S,B]=o.useState(!1),[D,z]=o.useState(!1),[A,F]=o.useState(!1),I=i==null||typeof i=="boolean"||i==="",f=!E&&!I&&(P??S),b=o.useRef(()=>{});b.current=t=>{window.clearTimeout(a.current),P===void 0&&B(t),t!==f&&m?.(t)};const M=o.useRef({close:()=>b.current(!1)}),C=t=>{window.clearTimeout(a.current);const e=v.current;if(E||I||s.current||!e||e.getAttribute("aria-expanded")==="true")return;const c=d.current&&d.current!==M.current||Date.now()<d.warmUntil;t||c?(z(!!c),b.current(!0)):a.current=window.setTimeout(()=>{z(!1),b.current(!0)},Math.max(0,r))},j=(t=!1)=>{window.clearTimeout(a.current),t?a.current=window.setTimeout(()=>b.current(!1),H):b.current(!1)};if(o.useEffect(()=>{if(!f)return;const t=M.current;d.current&&d.current!==t&&d.current.close(),d.current=t;const e=v.current,c=(e?.getAttribute("aria-label")||e?.textContent||"").trim();return F(typeof i=="string"&&i.trim()===c),()=>{d.current===t&&(d.current=null,d.warmUntil=Date.now()+W)}},[f]),o.useEffect(()=>()=>window.clearTimeout(a.current),[]),o.useLayoutEffect(()=>{const t=x.current;if(!f||!t)return;V(t);const e=()=>{const _=v.current;_&&Y(t,_,w,u,L)};e(),window.addEventListener("resize",e),window.addEventListener("scroll",e,!0);const c=typeof ResizeObserver>"u"?null:new ResizeObserver(e);return c?.observe(t),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",e,!0),c?.disconnect(),X(t)}},[f,w,u,L]),o.useEffect(()=>{if(!f)return;const t=e=>{e.key!=="Escape"||e.defaultPrevented||(e.preventDefault(),e.stopPropagation(),s.current=!0,b.current(!1))};return window.addEventListener("keydown",t,!0),()=>window.removeEventListener("keydown",t,!0)},[f]),!o.isValidElement(y))return l.jsx(l.Fragment,{children:y});const R=y.props,N=(t,e)=>R[t]?.(e),k=(t,e)=>c=>{N(t,c),c.defaultPrevented||e(c)},U=[R["aria-describedby"],f&&(A?g?n:null:T)].filter(Boolean).join(" ")||void 0,$=o.cloneElement(y,{ref:t=>{v.current=t;const e=R.ref;typeof e=="function"?e(t):e&&(e.current=t)},"aria-describedby":U,onPointerEnter:k("onPointerEnter",t=>{t.pointerType!=="touch"&&C(!1)}),onPointerLeave:k("onPointerLeave",t=>{s.current=!1,t.pointerType!=="touch"&&j(!0)}),onPointerDown:k("onPointerDown",()=>{s.current=!0,j()}),onClick:k("onClick",()=>{s.current=!0,j()}),onFocus:k("onFocus",t=>{let e=!0;try{e=t.currentTarget.matches(":focus-visible")}catch{}e&&C(!0)}),onBlur:k("onBlur",()=>{s.current=!1,j()})});return l.jsxs(l.Fragment,{children:[$,f&&l.jsxs("span",{ref:x,id:T,role:"tooltip",className:["ui-tip",h].filter(Boolean).join(" "),popover:"manual","data-side":w,"data-instant":D||void 0,onPointerEnter:()=>window.clearTimeout(a.current),onPointerLeave:()=>j(!0),children:[l.jsx("style",{href:"ui-tooltip",precedence:"default",children:q}),l.jsx("span",{className:"ui-tip__text",dir:"auto",children:i}),g&&l.jsx("kbd",{className:"ui-tip__keys",id:n,children:g})]})]})}function V(i){"showPopover"in i&&!i.matches(":popover-open")&&i.showPopover()}function X(i){"hidePopover"in i&&i.isConnected&&i.matches(":popover-open")&&i.hidePopover()}function Y(i,g,y,w,u){const r=g.getBoundingClientRect(),E=document.documentElement.clientWidth||window.innerWidth,P=window.innerHeight,m=i.offsetWidth,h=i.offsetHeight,p={bottom:P-r.bottom-u-8,top:r.top-u-8,right:E-r.right-u-8,left:r.left-u-8},T={top:"bottom",bottom:"top",left:"right",right:"left"};let n=y;p[n]<(n==="top"||n==="bottom"?h:m)&&p[T[n]]>p[n]&&(n=T[n]),(n==="left"||n==="right")&&p[n]<m&&(n=p.top>=h||p.top>=p.bottom?"top":"bottom");const v=getComputedStyle(g).direction==="rtl",x=(n==="top"||n==="bottom")&&v&&w!=="center"?w==="start"?"end":"start":w;let a,s;n==="top"||n==="bottom"?(a=n==="bottom"?r.bottom+u:r.top-u-h,s=x==="start"?r.left:x==="end"?r.right-m:r.left+r.width/2-m/2,s=Math.min(Math.max(8,s),E-8-m)):(s=n==="right"?r.right+u:r.left-u-m,a=x==="start"?r.top:x==="end"?r.bottom-h:r.top+r.height/2-h/2,a=Math.min(Math.max(8,a),Math.max(8,P-8-h))),i.style.top=`${Math.round(a)}px`,i.style.left=`${Math.round(s)}px`,i.dataset.side=n}const q=`
/* Colors and motion as variables – override them on .ui-tip (see Theming in the docs) */
.ui-tip {
  --ui-tip-bg: #171717;
  --ui-tip-ink: #ffffff;
  --ui-tip-muted: rgba(255, 255, 255, 0.72);
  --ui-tip-key: rgba(255, 255, 255, 0.14);
  --ui-tip-shadow: 0 8px 20px -8px rgba(0, 0, 0, 0.32), 0 2px 6px -2px rgba(0, 0, 0, 0.12);
  --ui-tip-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));

  /* A small dark label in the top layer – it fits its text and wraps at 240px */
  position: fixed;
  inset: auto;
  z-index: 1001;
  display: flex;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  width: max-content;
  max-width: min(240px, calc(100vw - 16px));
  margin: 0;
  padding: 5px 9px;
  border: 0;
  border-radius: var(--aui-radius-sm, 8px);
  background: var(--ui-tip-bg);
  box-shadow: var(--ui-tip-shadow);
  color: var(--ui-tip-ink);
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 12.5px;
  line-height: 18px;
  font-weight: 500;
  letter-spacing: -0.005em;
  text-align: start;
  white-space: normal;
  overflow: visible;
  -webkit-font-smoothing: antialiased;
  animation: ui-tip-in 160ms var(--ui-tip-ease) both;
}
.ui-tip::backdrop { display: none; }
.ui-tip__text { min-width: 0; overflow-wrap: anywhere; }
/* The shortcut: a small key chip, never broken across lines */
.ui-tip__keys {
  flex: none;
  align-self: center;
  margin: 0 -3px 0 0;
  padding: 0 5px;
  border-radius: 4px;
  background: var(--ui-tip-key);
  font: inherit;
  font-size: 11px;
  line-height: 16px;
  font-feature-settings: "tnum";
  letter-spacing: 0.02em;
  color: var(--ui-tip-muted);
  white-space: nowrap;
}

/* It drifts in 3px from the trigger's side; a neighbour in the skip-delay window shows at once */
.ui-tip[data-side="bottom"] { animation-name: ui-tip-in-down; }
.ui-tip[data-side="left"] { animation-name: ui-tip-in-left; }
.ui-tip[data-side="right"] { animation-name: ui-tip-in-right; }
.ui-tip[data-instant] { animation: none; }
@keyframes ui-tip-in { from { opacity: 0; transform: translateY(3px); } }
@keyframes ui-tip-in-down { from { opacity: 0; transform: translateY(-3px); } }
@keyframes ui-tip-in-left { from { opacity: 0; transform: translateX(3px); } }
@keyframes ui-tip-in-right { from { opacity: 0; transform: translateX(-3px); } }

/* Touch screens (a tablet with a mouse or pen): a little larger type */
@media (pointer: coarse) {
  .ui-tip { padding: 6px 10px; font-size: 13.5px; line-height: 20px; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-tip { animation: none; }
}

/* Dark mode: a light label – follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tip {
  --ui-tip-bg: #fafafa;
  --ui-tip-ink: #171717;
  --ui-tip-muted: rgba(0, 0, 0, 0.6);
  --ui-tip-key: rgba(0, 0, 0, 0.07);
  --ui-tip-shadow: 0 8px 20px -8px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.06);
  color-scheme: dark;
}
`;function K(){return l.jsx("div",{className:"stage",children:l.jsx(O,{name:"示例"})})}export{K as default};
