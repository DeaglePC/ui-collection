import{r as o,j as c}from"./client-CsvIHAk3.js";function K({orientation:l="vertical",type:m="hover",fade:N=!1,maxHeight:T,viewportRef:j,onScroll:B,className:D,style:R,children:X,"aria-label":H,"aria-labelledby":S,ref:$,...Y}){const b=o.useRef(null),d=o.useRef(null),y=o.useRef(null),g=o.useRef({y:null,x:null}),_=o.useRef(0),x=o.useRef(null),[I,L]=o.useState(!1),w=l!=="horizontal",k=l!=="vertical",f=o.useCallback(()=>{const t=d.current,a=b.current;if(!t||!a)return;const e=getComputedStyle(a),i=e.direction==="rtl",r=parseFloat(e.getPropertyValue("--ui-sa-fade"))||28,n={y:w&&t.scrollHeight-t.clientHeight>1,x:k&&t.scrollWidth-t.clientWidth>1};for(const s of["y","x"]){a.toggleAttribute(`data-scroll-${s}`,n[s]);const u=g.current[s],h=u?.parentElement;if(!n[s]||!u||!h)continue;const p=s==="y"?t.clientHeight:t.clientWidth,v=s==="y"?t.scrollHeight:t.scrollWidth,P=Math.abs(s==="y"?t.scrollTop:t.scrollLeft),C=s==="y"?h.clientHeight:h.clientWidth,W=Math.max(Math.min(24,C),Math.round(C*p/v)),M=v-p>0?(C-W)*Math.min(P,v-p)/(v-p):0;s==="y"?(u.style.height=`${W}px`,u.style.transform=`translate3d(0, ${M}px, 0)`):(u.style.width=`${W}px`,u.style.transform=`translate3d(${i?-M:M}px, 0, 0)`);const J=v-p-P;a.style.setProperty(`--ui-sa-${s}-start`,`${Math.min(P,r)}px`),a.style.setProperty(`--ui-sa-${s}-end`,`${Math.min(Math.max(J,0),r)}px`)}n.y||(a.style.setProperty("--ui-sa-y-start","0px"),a.style.setProperty("--ui-sa-y-end","0px")),n.x||(a.style.setProperty("--ui-sa-x-start","0px"),a.style.setProperty("--ui-sa-x-end","0px")),L(n.x||n.y)},[k,w]);o.useLayoutEffect(()=>{if(f(),typeof ResizeObserver>"u")return;const t=new ResizeObserver(()=>f());return d.current&&t.observe(d.current),y.current&&t.observe(y.current),()=>t.disconnect()},[f]),o.useEffect(()=>()=>window.clearTimeout(_.current),[]);const F=t=>{f();const a=b.current;a&&(a.setAttribute("data-scrolling",""),window.clearTimeout(_.current),_.current=window.setTimeout(()=>a.removeAttribute("data-scrolling"),800)),B?.(t)},O=t=>a=>{const e=d.current,i=g.current[t],r=i?.parentElement;if(a.button!==0||!e||!i||!r)return;a.preventDefault(),a.stopPropagation();const n=r.getBoundingClientRect(),s=t==="y"?n.height/(r.offsetHeight||1):n.width/(r.offsetWidth||1),u=t==="y"?r.clientHeight:r.clientWidth,h=t==="y"?i.offsetHeight:i.offsetWidth,p=t==="y"?e.scrollHeight-e.clientHeight:e.scrollWidth-e.clientWidth;x.current={axis:t,from:t==="y"?a.clientY:a.clientX,start:t==="y"?e.scrollTop:e.scrollLeft,per:p/Math.max(1,u-h)/(s||1)},i.setPointerCapture(a.pointerId),b.current?.setAttribute("data-dragging","")},V=t=>{const a=x.current,e=d.current;if(!a||!e)return;const i=((a.axis==="y"?t.clientY:t.clientX)-a.from)*a.per;a.axis==="y"?e.scrollTop=a.start+i:e.scrollLeft=a.start+i},z=()=>{x.current=null,b.current?.removeAttribute("data-dragging")},U=t=>a=>{const e=d.current,i=g.current[t];if(a.button!==0||!e||!i||a.target===i)return;a.preventDefault();const r=i.getBoundingClientRect(),n=t==="y"?a.clientY<r.top:getComputedStyle(e).direction==="rtl"?a.clientX>r.right:a.clientX<r.left,s=(t==="y"?e.clientHeight:e.clientWidth)*.9*(n?-1:1),u=t==="x"&&getComputedStyle(e).direction==="rtl"?-1:1,h=!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;e.scrollBy({[t==="y"?"top":"left"]:s*u,behavior:h?"smooth":"auto"})},q=o.useCallback(t=>{d.current=t,E(j,t)},[j]),G=o.useCallback(t=>{b.current=t,E($,t)},[$]),A=t=>c.jsx("div",{className:"ui-sa__bar","data-axis":t,"aria-hidden":"true",onPointerDown:U(t),children:c.jsx("div",{className:"ui-sa__thumb",ref:a=>{g.current[t]=a},onPointerDown:O(t),onPointerMove:V,onPointerUp:z,onPointerCancel:z,onLostPointerCapture:z})});return c.jsxs("div",{ref:G,className:["ui-sa",D].filter(Boolean).join(" "),"data-orientation":l,"data-type":m,"data-fade":N?"":void 0,style:T!=null?{maxHeight:T,...R}:R,...Y,children:[c.jsx("style",{href:"ui-scroll-area",precedence:"default",children:Q}),c.jsx("div",{ref:q,className:"ui-sa__viewport",tabIndex:I?0:void 0,role:H||S?"region":void 0,"aria-label":H,"aria-labelledby":S,onScroll:F,children:c.jsx("div",{ref:y,className:"ui-sa__content",children:X})}),w&&A("y"),k&&A("x")]})}function E(l,m){typeof l=="function"?l(m):l&&(l.current=m)}const Q=`
/* The fades' lengths animate as you near an end */
@property --ui-sa-y-start { syntax: "<length>"; inherits: true; initial-value: 0px; }
@property --ui-sa-y-end { syntax: "<length>"; inherits: true; initial-value: 0px; }
@property --ui-sa-x-start { syntax: "<length>"; inherits: true; initial-value: 0px; }
@property --ui-sa-x-end { syntax: "<length>"; inherits: true; initial-value: 0px; }

/* Colors and sizes as variables – override them on .ui-sa (see Theming in the docs) */
.ui-sa {
  --ui-sa-thumb: rgba(0, 0, 0, 0.22);
  --ui-sa-thumb-hover: rgba(0, 0, 0, 0.36);
  --ui-sa-thumb-active: rgba(0, 0, 0, 0.48);
  --ui-sa-size: 6px;
  --ui-sa-size-hover: 8px;
  --ui-sa-inset: 2px;
  --ui-sa-fade: 28px;
  --ui-sa-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-sa-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));

  /* A column, so a height or max-height on the box is what the viewport fills */
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
}
.ui-sa *, .ui-sa *::before, .ui-sa *::after { box-sizing: border-box; }

/* The element that scrolls: the browser's own scrolling, its bar hidden – ours is drawn on top */
.ui-sa__viewport {
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  border-radius: inherit;
  overflow: hidden;
  overscroll-behavior: contain;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}
.ui-sa__viewport::-webkit-scrollbar { display: none; }
.ui-sa[data-orientation="vertical"] > .ui-sa__viewport { overflow-y: auto; }
.ui-sa[data-orientation="horizontal"] > .ui-sa__viewport { overflow-x: auto; }
.ui-sa[data-orientation="both"] > .ui-sa__viewport { overflow: auto; }
.ui-sa__viewport:focus { outline: none; }
/* Inside the box, so no card edge or overflow cuts it */
.ui-sa__viewport:focus-visible { outline: 2px solid var(--ui-sa-focus); outline-offset: -2px; }

/* Sideways the content keeps its natural width, so a wide row really overflows; text still wraps at the box */
.ui-sa:not([data-orientation="vertical"]) .ui-sa__content { min-width: fit-content; }

/* Soft fades where there is more – a mask, so it works on any background */
.ui-sa[data-fade][data-scroll-y] > .ui-sa__viewport {
  -webkit-mask-image: linear-gradient(to bottom, transparent, #000 var(--ui-sa-y-start), #000 calc(100% - var(--ui-sa-y-end)), transparent);
  mask-image: linear-gradient(to bottom, transparent, #000 var(--ui-sa-y-start), #000 calc(100% - var(--ui-sa-y-end)), transparent);
}
.ui-sa[data-fade][data-scroll-x]:not([data-scroll-y]) > .ui-sa__viewport {
  -webkit-mask-image: linear-gradient(to right, transparent, #000 var(--ui-sa-x-start), #000 calc(100% - var(--ui-sa-x-end)), transparent);
  mask-image: linear-gradient(to right, transparent, #000 var(--ui-sa-x-start), #000 calc(100% - var(--ui-sa-x-end)), transparent);
}
.ui-sa[data-fade][dir="rtl"][data-scroll-x]:not([data-scroll-y]) > .ui-sa__viewport,
[dir="rtl"] .ui-sa[data-fade][data-scroll-x]:not([data-scroll-y]) > .ui-sa__viewport {
  -webkit-mask-image: linear-gradient(to left, transparent, #000 var(--ui-sa-x-start), #000 calc(100% - var(--ui-sa-x-end)), transparent);
  mask-image: linear-gradient(to left, transparent, #000 var(--ui-sa-x-start), #000 calc(100% - var(--ui-sa-x-end)), transparent);
}
.ui-sa[data-fade] {
  transition: --ui-sa-y-start 160ms ease, --ui-sa-y-end 160ms ease, --ui-sa-x-start 160ms ease, --ui-sa-x-end 160ms ease;
}

/* The bar: a 10px strip over the content's edge, the thumb in it – hidden until there is something to scroll */
.ui-sa__bar {
  position: absolute;
  z-index: 1;
  display: none;
  opacity: 0;
  touch-action: none;
  user-select: none;
  transition: opacity 280ms var(--ui-sa-ease);
}
.ui-sa__bar[data-axis="y"] { top: var(--ui-sa-inset); bottom: var(--ui-sa-inset); inset-inline-end: 0; width: 10px; }
.ui-sa__bar[data-axis="x"] { left: var(--ui-sa-inset); right: var(--ui-sa-inset); bottom: 0; height: 10px; }
/* Both bars: each stops short of the corner the other one runs into */
.ui-sa[data-scroll-y][data-scroll-x] > .ui-sa__bar[data-axis="y"] { bottom: 10px; }
.ui-sa[data-scroll-y][data-scroll-x] > .ui-sa__bar[data-axis="x"] { inset-inline-end: 10px; }
.ui-sa[data-scroll-y] > .ui-sa__bar[data-axis="y"], .ui-sa[data-scroll-x] > .ui-sa__bar[data-axis="x"] { display: block; }

.ui-sa__thumb {
  position: absolute;
  border-radius: 999px;
  background: var(--ui-sa-thumb);
  cursor: default;
  transition: background-color 150ms ease, width 150ms var(--ui-sa-ease), height 150ms var(--ui-sa-ease);
  will-change: transform;
}
/* A wider, invisible grab area around the thin thumb */
.ui-sa__thumb::before { content: ""; position: absolute; inset: -4px; }
.ui-sa__bar[data-axis="y"] > .ui-sa__thumb { top: 0; inset-inline-end: var(--ui-sa-inset); width: var(--ui-sa-size); }
.ui-sa__bar[data-axis="x"] > .ui-sa__thumb { inset-inline-start: 0; bottom: var(--ui-sa-inset); height: var(--ui-sa-size); }
.ui-sa__bar[data-axis="y"]:hover > .ui-sa__thumb, .ui-sa[data-dragging] > .ui-sa__bar[data-axis="y"] > .ui-sa__thumb { width: var(--ui-sa-size-hover); }
.ui-sa__bar[data-axis="x"]:hover > .ui-sa__thumb, .ui-sa[data-dragging] > .ui-sa__bar[data-axis="x"] > .ui-sa__thumb { height: var(--ui-sa-size-hover); }
.ui-sa__bar:hover > .ui-sa__thumb { background: var(--ui-sa-thumb-hover); }
.ui-sa[data-dragging] .ui-sa__thumb { background: var(--ui-sa-thumb-active); }
.ui-sa[data-dragging] { user-select: none; }

/* When it shows: hover – while the pointer is over the box or it scrolls · scroll – only while it scrolls · always */
.ui-sa[data-type="always"] > .ui-sa__bar,
.ui-sa[data-scrolling] > .ui-sa__bar,
.ui-sa[data-dragging] > .ui-sa__bar { opacity: 1; transition-duration: 120ms; }
@media (hover: hover) {
  .ui-sa[data-type="hover"]:hover > .ui-sa__bar { opacity: 1; transition-duration: 120ms; }
}
/* Faded out it lets the pointer through to the content under it */
.ui-sa > .ui-sa__bar { pointer-events: none; }
.ui-sa:is([data-type="always"], [data-scrolling], [data-dragging]) > .ui-sa__bar { pointer-events: auto; }
@media (hover: hover) {
  .ui-sa[data-type="hover"]:hover > .ui-sa__bar { pointer-events: auto; }
}

/* Touch screens: the finger scrolls the content – the bar only shows where you are, a little thicker */
@media (pointer: coarse) {
  .ui-sa { --ui-sa-size: 4px; --ui-sa-size-hover: 4px; }
  .ui-sa > .ui-sa__bar { pointer-events: none; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-sa__bar, .ui-sa__thumb, .ui-sa[data-fade] { transition-duration: 1ms !important; }
}

/* Windows high contrast: the thumb keeps a system color */
@media (forced-colors: active) {
  .ui-sa__thumb { background: CanvasText; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-sa {
  --ui-sa-thumb: rgba(255, 255, 255, 0.22);
  --ui-sa-thumb-hover: rgba(255, 255, 255, 0.36);
  --ui-sa-thumb-active: rgba(255, 255, 255, 0.5);
  --ui-sa-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
`;function tt(){return c.jsx("div",{className:"stage",children:c.jsx(K,{})})}export{tt as default};
