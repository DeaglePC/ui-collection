import{r as x,j as b}from"./client-CsvIHAk3.js";function N({open:t,onClose:e,children:w,side:E="bottom",align:d="start",offset:M=6,anchor:y,title:u,description:r,width:s,focusOnOpen:f=!0,unstyled:L,className:i,style:n,role:c="dialog",ref:p,...v}){const R=x.useId(),P=`${R}-title`,T=`${R}-desc`,g=x.useRef(null),_=x.useRef(e);_.current=e;const C=x.useRef(!t);t||(C.current=!0);const z=()=>y?.current??g.current?.parentElement??null,j=o=>!!o&&(!!g.current?.contains(o)||!!z()?.contains(o));if(x.useLayoutEffect(()=>{const o=g.current;if(!t||!o)return;A(o);const l=()=>{const a=z();a&&q(o,a.getBoundingClientRect(),E,d,M)};l(),window.addEventListener("resize",l),window.addEventListener("scroll",l,!0);const m=typeof ResizeObserver>"u"?null:new ResizeObserver(l);return m?.observe(o),()=>{window.removeEventListener("resize",l),window.removeEventListener("scroll",l,!0),m?.disconnect(),O(o)}},[t,E,d,M]),x.useEffect(()=>{const o=g.current;if(!t||!o)return;f&&C.current&&!o.contains(document.activeElement)&&(U(o)??o).focus({preventScroll:!0});const l=H(z(),o);let m=o.contains(document.activeElement);const a=()=>m=!0,h=I=>m=!!I.relatedTarget&&o.contains(I.relatedTarget);return o.addEventListener("focusin",a),o.addEventListener("focusout",h),()=>{o.removeEventListener("focusin",a),o.removeEventListener("focusout",h),m&&W(l)}},[t]),x.useEffect(()=>{if(!t)return;const o=a=>{j(a.target)||_.current()},l=a=>{if(a.key!=="Escape"||a.defaultPrevented)return;const h=a.target?.closest?.("[popover]");if(h&&h!==g.current&&g.current?.contains(h))return;a.preventDefault(),a.stopPropagation();const I=j(document.activeElement),$=H(z(),g.current);_.current(),I&&$?.focus({preventScroll:!0})},m=a=>{const h=a.relatedTarget;j(a.target)&&h&&!j(h)&&_.current()};return document.addEventListener("pointerdown",o,!0),window.addEventListener("keydown",l,!0),document.addEventListener("focusout",m),()=>{document.removeEventListener("pointerdown",o,!0),window.removeEventListener("keydown",l,!0),document.removeEventListener("focusout",m)}},[t]),!t)return null;const S=k(u)||k(r);return b.jsxs("div",{...v,ref:o=>{g.current=o,typeof p=="function"?p(o):p&&(p.current=o)},className:["ui-pop",i].filter(Boolean).join(" "),"data-unstyled":L||void 0,role:c,"aria-labelledby":k(u)?P:v["aria-labelledby"],"aria-describedby":k(r)?T:v["aria-describedby"],tabIndex:-1,popover:"manual","data-side":E,"data-align":d,style:s!=null?{...n,width:s,maxWidth:"calc(100vw - 16px)"}:n,children:[b.jsx("style",{href:"ui-popover",precedence:"default",children:B}),S&&b.jsxs("div",{className:"ui-pop__head",children:[k(u)&&b.jsx("p",{className:"ui-pop__title",id:P,children:u}),k(r)&&b.jsx("p",{className:"ui-pop__desc",id:T,children:r})]}),w]})}const k=t=>t!=null&&typeof t!="boolean"&&t!=="",U=t=>[...t.querySelectorAll("input, textarea, select, button, [href], [tabindex]")].find(e=>e.tabIndex>=0&&!e.disabled&&e.getClientRects().length>0);function H(t,e){if(!t)return null;if(t.matches("button, [href], input, [tabindex]"))return t;for(const w of t.querySelectorAll("button, [href], input, [tabindex]"))if(!e?.contains(w))return w;return null}const W=t=>window.setTimeout(()=>{const e=document.activeElement;t?.isConnected&&(!e||e===document.body)&&t.focus({preventScroll:!0})});function A(t){"showPopover"in t&&!t.matches(":popover-open")&&t.showPopover()}function O(t){"hidePopover"in t&&t.isConnected&&t.matches(":popover-open")&&t.hidePopover()}function q(t,e,w,E,d){const y=document.documentElement.clientWidth||window.innerWidth,u=window.innerHeight;t.style.maxHeight="";const r=t.offsetWidth,s=t.offsetHeight,f={bottom:u-e.bottom-d-8,top:e.top-d-8,right:y-e.right-d-8,left:e.left-d-8},L={top:"bottom",bottom:"top",left:"right",right:"left"};let i=w,n=E;f[i]<(i==="top"||i==="bottom"?s:r)&&f[L[i]]>f[i]&&(i=L[i]),(i==="left"||i==="right")&&f[i]<r&&(i=f.bottom>=f.top?"bottom":"top");let c,p;if(i==="top"||i==="bottom"){const v=Math.min(s,Math.max(120,f[i]));c=i==="bottom"?e.bottom+d:e.top-d-v,p=n==="start"?e.left:n==="end"?e.right-r:e.left+e.width/2-r/2,n==="start"&&p+r>y-8&&e.right-r>=8?(n="end",p=e.right-r):n==="end"&&p<8&&e.left+r<=y-8&&(n="start",p=e.left),p=Math.min(Math.max(8,p),y-8-r),s>v&&(t.style.maxHeight=`${v}px`)}else p=i==="right"?e.right+d:e.left-d-r,c=n==="start"?e.top:n==="end"?e.bottom-s:e.top+e.height/2-s/2,n==="start"&&c+s>u-8&&e.bottom-s>=8?(n="end",c=e.bottom-s):n==="end"&&c<8&&e.top+s<=u-8&&(n="start",c=e.top),c=Math.min(Math.max(8,c),Math.max(8,u-8-s)),s>u-16&&(t.style.maxHeight=`${u-16}px`);t.style.top=`${Math.round(c)}px`,t.style.left=`${Math.round(p)}px`,t.dataset.side=i,t.dataset.align=n}const B=`
/* Colors and motion as variables – override them on .ui-pop (see Theming in the docs) */
.ui-pop {
  --ui-pop-surface: var(--aui-overlay, var(--aui-surface, #ffffff));
  --ui-pop-strong: var(--aui-ink, #171717);
  --ui-pop-ink: var(--aui-ink, #171717);
  --ui-pop-muted: var(--aui-muted, #8f8f8f);
  --ui-pop-shadow: var(--aui-shadow-popover, 0 0 0 1px rgba(0, 0, 0, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.18), 0 4px 12px -4px rgba(0, 0, 0, 0.06));
  --ui-pop-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));

  /* A white card in the top layer: a 1px edge and a deeper drop */
  position: fixed;
  inset: auto;
  z-index: 1000;
  display: block;
  box-sizing: border-box;
  max-height: calc(100vh - 16px);
  margin: 0;
  border: 0;
  transform-origin: top left;
  animation: ui-pop-in 220ms var(--ui-pop-ease) both;
  max-width: calc(100vw - 16px);
}
/* Unstyled: the browser's popover look switched off at no weight, so any class of yours wins */
:where(.ui-pop) { padding: 0; background: none; color: inherit; overflow: visible; }
/* The card itself – left out with unstyled, so your own classes draw it */
.ui-pop:not([data-unstyled]) {
  /* Fits its content up to 360px – a long URL or name wraps instead of stretching it; the width prop lifts the cap */
  max-width: min(360px, calc(100vw - 16px));
  padding: 16px;
  border-radius: calc(var(--aui-radius-lg, 10px) + 6px);
  background: var(--ui-pop-surface);
  box-shadow: var(--ui-pop-shadow);
  color: var(--ui-pop-ink);
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  line-height: 20px;
  font-weight: 400;
  text-align: start;
  overflow: auto;
  overscroll-behavior: contain;
  -webkit-font-smoothing: antialiased;
}
.ui-pop::backdrop { display: none; }
.ui-pop:focus { outline: none; }
.ui-pop *, .ui-pop *::before, .ui-pop *::after { box-sizing: border-box; }

/* It grows out of the side and edge it is attached to */
.ui-pop[data-align="end"] { transform-origin: top right; }
.ui-pop[data-align="center"] { transform-origin: top center; }
.ui-pop[data-side="top"] { transform-origin: bottom left; animation-name: ui-pop-in-up; }
.ui-pop[data-side="top"][data-align="end"] { transform-origin: bottom right; }
.ui-pop[data-side="top"][data-align="center"] { transform-origin: bottom center; }
.ui-pop[data-side="right"] { transform-origin: top left; animation-name: ui-pop-in-right; }
.ui-pop[data-side="right"][data-align="end"] { transform-origin: bottom left; }
.ui-pop[data-side="right"][data-align="center"] { transform-origin: center left; }
.ui-pop[data-side="left"] { transform-origin: top right; animation-name: ui-pop-in-left; }
.ui-pop[data-side="left"][data-align="end"] { transform-origin: bottom right; }
.ui-pop[data-side="left"][data-align="center"] { transform-origin: center right; }

.ui-pop__head { display: grid; gap: 2px; min-width: 0; }
.ui-pop__head:not(:last-child) { margin-bottom: 14px; }
.ui-pop__title { margin: 0; font-weight: 500; color: var(--ui-pop-strong); overflow-wrap: anywhere; }
.ui-pop__desc { margin: 0; font-size: 12.5px; line-height: 17px; color: var(--ui-pop-muted); overflow-wrap: anywhere; }

@keyframes ui-pop-in { from { opacity: 0; transform: scale(0.96) translateY(-4px); } }
@keyframes ui-pop-in-up { from { opacity: 0; transform: scale(0.96) translateY(4px); } }
@keyframes ui-pop-in-right { from { opacity: 0; transform: scale(0.96) translateX(-4px); } }
@keyframes ui-pop-in-left { from { opacity: 0; transform: scale(0.96) translateX(4px); } }

/* Touch screens: 15px text, so it reads like the rest of a phone UI */
@media (pointer: coarse) {
  .ui-pop { padding: 16px; font-size: 15px; line-height: 22px; }
  .ui-pop__desc { font-size: 13px; line-height: 18px; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-pop { animation-duration: 1ms; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-pop {
  --ui-pop-surface: var(--aui-overlay, var(--aui-surface, #19191b));
  --ui-pop-strong: var(--aui-ink, #ededed);
  --ui-pop-ink: var(--aui-ink, #ededed);
  --ui-pop-muted: var(--aui-muted, #8b8b92);
  --ui-pop-shadow: var(--aui-shadow-popover, 0 0 0 1px rgba(255, 255, 255, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.6));
  color-scheme: dark;
}
`;function X(){return b.jsx("div",{className:"stage",children:b.jsx(N,{})})}export{X as default};
