import{r as d,j as L}from"./client-CsvIHAk3.js";const M={current:null};function W({content:e,children:h,side:g="bottom",align:a="start",offset:o=8,openDelay:c=600,closeDelay:r=300,width:x,disabled:P,open:l,onOpenChange:b,className:y}){const w=d.useRef(null),n=d.useRef(null),p=d.useRef(0),u=d.useRef(null),m=d.useRef(!1),[v,z]=d.useState(!1),B=e==null||typeof e=="boolean"||e==="",k=!P&&!B&&(l??v),T=d.useRef(k);T.current=k;const E=d.useRef(()=>{});E.current=t=>{window.clearTimeout(p.current),u.current=null,l===void 0&&z(t),t!==T.current&&b?.(t)};const Y=d.useRef({close:()=>E.current(!1)}),C=()=>{window.clearTimeout(p.current),!(P||B||m.current||T.current)&&(p.current=window.setTimeout(()=>E.current(!0),Math.max(0,c)))},I=()=>{window.clearTimeout(p.current),T.current&&(p.current=window.setTimeout(()=>E.current(!1),Math.max(0,r)))},H=()=>{window.clearTimeout(p.current),u.current=null};if(d.useEffect(()=>{if(!k)return;const t=Y.current;return M.current&&M.current!==t&&M.current.close(),M.current=t,()=>{M.current===t&&(M.current=null)}},[k]),d.useEffect(()=>()=>window.clearTimeout(p.current),[]),d.useLayoutEffect(()=>{const t=n.current;if(!k||!t)return;O(t);const i=()=>w.current&&U(t,w.current,g,a,o);i(),window.addEventListener("resize",i),window.addEventListener("scroll",i,!0);const s=typeof ResizeObserver>"u"?null:new ResizeObserver(i);return s?.observe(t),()=>{window.removeEventListener("resize",i),window.removeEventListener("scroll",i,!0),s?.disconnect(),q(t)}},[k,g,a,o]),d.useEffect(()=>{if(!k)return;const t=f=>{if(f.key!=="Escape"||f.defaultPrevented)return;f.preventDefault(),f.stopPropagation(),m.current=!0;const R=n.current?.contains(document.activeElement);E.current(!1),R&&w.current?.focus({preventScroll:!0})},i=f=>{const R=u.current;!R||f.pointerType==="touch"||X(R,f.clientX,f.clientY)||(u.current=null,I())},s=f=>{const R=f.target;!n.current?.contains(R)&&!w.current?.contains(R)&&E.current(!1)};return window.addEventListener("keydown",t,!0),document.addEventListener("pointermove",i),document.addEventListener("pointerdown",s,!0),()=>{window.removeEventListener("keydown",t,!0),document.removeEventListener("pointermove",i),document.removeEventListener("pointerdown",s,!0)}},[k]),!d.isValidElement(h))return L.jsx(L.Fragment,{children:h});const N=h.props,D=(t,i)=>N[t]?.(i),j=(t,i)=>s=>{D(t,s),s.defaultPrevented||i(s)},S=(t,i)=>{if(m.current=!1,t.pointerType==="touch")return;const s=n.current?.getBoundingClientRect(),f=t.relatedTarget;if(f instanceof Node&&(n.current?.contains(f)||w.current?.contains(f)))return H();if(i&&T.current&&s&&(u.current=$([{x:t.clientX,y:t.clientY},{x:s.left,y:s.top},{x:s.right,y:s.top},{x:s.right,y:s.bottom},{x:s.left,y:s.bottom}]),X(u.current,t.clientX,t.clientY)))return window.clearTimeout(p.current);u.current=null,T.current?I():window.clearTimeout(p.current)},F=d.cloneElement(h,{ref:t=>{w.current=t;const i=N.ref;typeof i=="function"?i(t):i&&(i.current=t)},onPointerEnter:j("onPointerEnter",t=>{t.pointerType!=="touch"&&(T.current?H():C())}),onPointerLeave:j("onPointerLeave",t=>S(t,!0)),onPointerDown:j("onPointerDown",()=>{m.current=!0,E.current(!1)}),onFocus:j("onFocus",t=>{let i=!0;try{i=t.currentTarget.matches(":focus-visible")}catch{}i&&C()}),onBlur:j("onBlur",t=>{m.current=!1,!(t.relatedTarget instanceof Node&&n.current?.contains(t.relatedTarget))&&(T.current?E.current(!1):window.clearTimeout(p.current))})});return L.jsxs(L.Fragment,{children:[L.jsx("style",{href:"ui-hover-card",precedence:"default",children:V}),F,k&&L.jsx("div",{ref:n,className:["ui-hvc",y].filter(Boolean).join(" "),popover:"manual","data-side":g,"data-align":a,style:x!=null?{width:x,maxWidth:"calc(100vw - 16px)"}:void 0,onPointerEnter:t=>t.pointerType!=="touch"&&H(),onPointerLeave:t=>S(t,!1),onBlur:t=>{const i=t.relatedTarget;i instanceof Node&&(n.current?.contains(i)||w.current?.contains(i))||E.current(!1)},children:e})]})}function $(e){const h=[...e].sort((c,r)=>c.x-r.x||c.y-r.y),g=(c,r,x)=>(r.x-c.x)*(x.y-c.y)-(r.y-c.y)*(x.x-c.x),a=[];for(const c of h){for(;a.length>=2&&g(a[a.length-2],a[a.length-1],c)<=0;)a.pop();a.push(c)}const o=[];for(const c of[...h].reverse()){for(;o.length>=2&&g(o[o.length-2],o[o.length-1],c)<=0;)o.pop();o.push(c)}return a.slice(0,-1).concat(o.slice(0,-1))}function X(e,h,g){if(e.length<3)return!1;for(let a=0;a<e.length;a++){const o=e[a],c=e[(a+1)%e.length],r=Math.hypot(c.x-o.x,c.y-o.y)||1;if(((c.x-o.x)*(g-o.y)-(c.y-o.y)*(h-o.x))/r<-4)return!1}return!0}function O(e){"showPopover"in e&&!e.matches(":popover-open")&&e.showPopover()}function q(e){"hidePopover"in e&&e.isConnected&&e.matches(":popover-open")&&e.hidePopover()}function U(e,h,g,a,o){const r=h.getBoundingClientRect(),x=document.documentElement.clientWidth||window.innerWidth,P=window.innerHeight;e.style.maxHeight="";const l=e.offsetWidth,b=e.offsetHeight,y={bottom:P-r.bottom-o-8,top:r.top-o-8,right:x-r.right-o-8,left:r.left-o-8},w={top:"bottom",bottom:"top",left:"right",right:"left"};let n=g;y[n]<(n==="top"||n==="bottom"?b:l)&&y[w[n]]>y[n]&&(n=w[n]),(n==="left"||n==="right")&&y[n]<l&&(n=y.bottom>=y.top?"bottom":"top");const p=getComputedStyle(h).direction==="rtl";let u=(n==="top"||n==="bottom")&&p&&a!=="center"?a==="start"?"end":"start":a,m,v;if(n==="top"||n==="bottom"){const z=Math.min(b,Math.max(120,y[n]));m=n==="bottom"?r.bottom+o:r.top-o-z,v=u==="start"?r.left:u==="end"?r.right-l:r.left+r.width/2-l/2,u==="start"&&v+l>x-8&&r.right-l>=8?(u="end",v=r.right-l):u==="end"&&v<8&&r.left+l<=x-8&&(u="start",v=r.left),v=Math.min(Math.max(8,v),x-8-l),b>z&&(e.style.maxHeight=`${z}px`)}else v=n==="right"?r.right+o:r.left-o-l,m=u==="start"?r.top:u==="end"?r.bottom-b:r.top+r.height/2-b/2,m=Math.min(Math.max(8,m),Math.max(8,P-8-b)),b>P-16&&(e.style.maxHeight=`${P-16}px`);e.style.top=`${Math.round(m)}px`,e.style.left=`${Math.round(v)}px`,e.dataset.side=n,e.dataset.align=u}const V=`
/* Colors and motion as variables – override them on .ui-hvc (see Theming in the docs) */
.ui-hvc {
  --ui-hvc-surface: var(--aui-overlay, var(--aui-surface, #ffffff));
  --ui-hvc-ink: var(--aui-ink, #171717);
  --ui-hvc-shadow: var(--aui-shadow-popover, 0 0 0 1px rgba(0, 0, 0, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.18), 0 4px 12px -4px rgba(0, 0, 0, 0.06));
  --ui-hvc-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-hvc-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));

  /* A white card in the top layer: a 1px edge and a deeper drop. It fits its content up to 320px; width lifts the cap */
  position: fixed;
  inset: auto;
  z-index: 1000;
  display: block;
  box-sizing: border-box;
  width: max-content;
  max-width: min(320px, calc(100vw - 16px));
  max-height: calc(100vh - 16px);
  margin: 0;
  padding: 16px;
  border: 0;
  border-radius: calc(var(--aui-radius-lg, 10px) + 6px);
  background: var(--ui-hvc-surface);
  box-shadow: var(--ui-hvc-shadow);
  color: var(--ui-hvc-ink);
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  line-height: 20px;
  font-weight: 400;
  text-align: start;
  overflow: auto;
  overflow-wrap: anywhere;
  overscroll-behavior: contain;
  -webkit-font-smoothing: antialiased;
  transform-origin: top left;
  animation: ui-hvc-in 200ms var(--ui-hvc-ease) both;
}
.ui-hvc::backdrop { display: none; }
.ui-hvc *, .ui-hvc *::before, .ui-hvc *::after { box-sizing: border-box; }
/* Links and buttons you put inside get the library's ring */
.ui-hvc :is(a, button, [tabindex]):focus-visible { outline: 2px solid var(--ui-hvc-focus); outline-offset: 2px; }

/* It grows out of the side and edge it is attached to */
.ui-hvc[data-align="end"] { transform-origin: top right; }
.ui-hvc[data-align="center"] { transform-origin: top center; }
.ui-hvc[data-side="top"] { transform-origin: bottom left; animation-name: ui-hvc-in-up; }
.ui-hvc[data-side="top"][data-align="end"] { transform-origin: bottom right; }
.ui-hvc[data-side="top"][data-align="center"] { transform-origin: bottom center; }
.ui-hvc[data-side="right"] { transform-origin: top left; animation-name: ui-hvc-in-right; }
.ui-hvc[data-side="right"][data-align="end"] { transform-origin: bottom left; }
.ui-hvc[data-side="right"][data-align="center"] { transform-origin: center left; }
.ui-hvc[data-side="left"] { transform-origin: top right; animation-name: ui-hvc-in-left; }
.ui-hvc[data-side="left"][data-align="end"] { transform-origin: bottom right; }
.ui-hvc[data-side="left"][data-align="center"] { transform-origin: center right; }

@keyframes ui-hvc-in { from { opacity: 0; transform: scale(0.97) translateY(-4px); } }
@keyframes ui-hvc-in-up { from { opacity: 0; transform: scale(0.97) translateY(4px); } }
@keyframes ui-hvc-in-right { from { opacity: 0; transform: scale(0.97) translateX(-4px); } }
@keyframes ui-hvc-in-left { from { opacity: 0; transform: scale(0.97) translateX(4px); } }

/* Touch screens with a mouse or pen (a tablet): 15px text, so it reads like the rest of the UI there */
@media (pointer: coarse) {
  .ui-hvc { padding: 16px; font-size: 15px; line-height: 22px; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-hvc { animation: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-hvc {
  --ui-hvc-surface: var(--aui-overlay, var(--aui-surface, #19191b));
  --ui-hvc-ink: var(--aui-ink, #ededed);
  --ui-hvc-shadow: var(--aui-shadow-popover, 0 0 0 1px rgba(255, 255, 255, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.6));
  --ui-hvc-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
  color-scheme: dark;
}
`;function G(){return L.jsx("div",{className:"stage",children:L.jsx(W,{name:"示例"})})}export{G as default};
