import{j as a,r}from"./client-CsvIHAk3.js";function Q({open:e,defaultOpen:i,onOpenChange:n,trigger:l,title:d,description:o,size:u="md",width:g,initialFocus:x,contained:c,children:_,footer:p,closeOnBackdrop:b=!0,closeButton:w=!0,closeLabel:y="Close",...C}){const[k,f,m]=ee(e,i,n);return a.jsxs(a.Fragment,{children:[te(l,k,f,m),a.jsx(Z,{...C,open:k,onDismiss:()=>f(!1),title:d,description:o,size:u,width:g,initialFocus:x,contained:c,closeOnBackdrop:b,opener:m,close:w?{label:y,onClick:()=>f(!1)}:void 0,footer:p,children:_})]})}const O=200;function Z({open:e,onDismiss:i,title:n,description:l,size:d="md",width:o,initialFocus:u,contained:g,closeOnBackdrop:x,opener:c,alert:_,busy:p,close:b,footer:w,children:y,className:C,style:k,...f}){const m=r.useId(),q=`${m}-title`,P=`${m}-desc`,$=r.useRef(null),L=r.useRef(null),j=r.useRef(i);j.current=i;const N=r.useRef(p);N.current=p;const A=r.useRef(e),[E,W]=r.useState(e),[T,R]=r.useState(!1),[V,X]=r.useState(e);e!==V&&(X(e),e?(W(!0),R(!1)):E&&R(!0)),r.useEffect(()=>{if(!T)return;const t=window.setTimeout(()=>{W(!1),R(!1)},K()?0:O);return()=>window.clearTimeout(t)},[T]),r.useLayoutEffect(()=>{const t=$.current;if(!E||!t)return;const S=c.current??document.activeElement;c.current=null;const h=!g;t.open||(h?t.showModal():t.show()),h&&re(),(h||!A.current)&&(u?.current??t.querySelector("[data-autofocus]")??I(t.querySelector(".ui-dlg__body"))??I(t.querySelector(".ui-dlg__foot"))??I(t)??L.current)?.focus({preventScroll:!0}),A.current=!1;const D=s=>{s.preventDefault(),N.current||j.current()},G=()=>{if(!t.open){if(!N.current)return j.current();h?t.showModal():t.show()}},Y=s=>{s.key==="Escape"&&(s.stopPropagation(),!h&&!s.defaultPrevented&&D(s)),s.key==="Tab"&&!h&&ie(s,t)};return t.addEventListener("cancel",D),t.addEventListener("close",G),t.addEventListener("keydown",Y),()=>{t.removeEventListener("cancel",D),t.removeEventListener("close",G),t.removeEventListener("keydown",Y);const s=t.contains(document.activeElement);t.open&&t.close(),h&&ne();const F=document.activeElement;S?.isConnected&&(s||!F||F===document.body)&&S.focus({preventScroll:!0})}},[E]);const B=r.useRef(!1),H=t=>{const S=B.current&&t.target===t.currentTarget;if(B.current=!1,!(!S||T)){if(x&&!p)return j.current();K()||L.current?.animate([{transform:"scale(1)"},{transform:"scale(1.012)"},{transform:"scale(1)"}],{duration:240,easing:"ease-out"})}};if(!E)return null;const J=o!=null?{"--ui-dlg-w":typeof o=="number"?`${o}px`:o}:void 0;return a.jsxs("dialog",{...f,ref:$,className:["ui-dlg",C].filter(Boolean).join(" "),style:k,role:_?"alertdialog":f.role,"aria-modal":g?!0:void 0,"aria-labelledby":q,"aria-describedby":z(l)?P:f["aria-describedby"],"aria-busy":p||void 0,"data-contained":g||void 0,"data-leaving":T||void 0,onPointerDown:t=>B.current=t.target===t.currentTarget,onClick:H,children:[a.jsx("style",{href:"ui-dialog",precedence:"default",children:oe}),a.jsxs("div",{ref:L,className:"ui-dlg__panel","data-size":d,"data-alert":_||void 0,tabIndex:-1,style:J,children:[a.jsxs("div",{className:"ui-dlg__card",children:[a.jsxs("div",{className:"ui-dlg__head",children:[a.jsxs("div",{className:"ui-dlg__heading",children:[a.jsx("h2",{className:"ui-dlg__title",id:q,children:n}),z(l)&&a.jsx("p",{className:"ui-dlg__desc",id:P,children:l})]}),b&&a.jsx("button",{type:"button",className:"ui-dlg__close","aria-label":b.label,title:b.label,onClick:b.onClick,children:a.jsx("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",focusable:"false",children:a.jsx("path",{d:"M18 6L6.00081 17.9992M17.9992 18L6 6.00085",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),z(y)&&a.jsx("div",{className:"ui-dlg__body",children:y})]}),z(w)&&a.jsx("div",{className:"ui-dlg__foot",children:w})]})]})}function ee(e,i,n){const[l,d]=r.useState(i??!1),o=r.useRef(null),u=e!==void 0,g=u?e:l;return[g,c=>{c!==g&&(u||d(c),n?.(c))},o]}function te(e,i,n,l){return r.isValidElement(e)?r.cloneElement(e,{"aria-haspopup":"dialog","aria-expanded":i,onClick:d=>{e.props.onClick?.(d),!d.defaultPrevented&&(l.current=d.currentTarget,n(!0))}}):null}const z=e=>e!=null&&typeof e!="boolean"&&e!=="",K=()=>typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,ae="input, textarea, select, button, [href], [tabindex], [contenteditable='true']",U=e=>e?[...e.querySelectorAll(ae)].filter(i=>i.tabIndex>=0&&!i.disabled&&i.getClientRects().length>0):[],I=e=>U(e)[0]??null;function ie(e,i){const n=U(i);if(!n.length)return e.preventDefault();const l=n[0],d=n[n.length-1],o=document.activeElement,u=!o||!n.includes(o);e.shiftKey&&(o===l||u)?(e.preventDefault(),d.focus()):!e.shiftKey&&(o===d||u)&&(e.preventDefault(),l.focus())}let M=0,v=null;function re(){if(M++>0)return;const e=document.documentElement,i=window.innerWidth-e.clientWidth;v={overflow:e.style.overflow,gutter:e.style.scrollbarGutter},e.style.overflow="hidden",i>0&&(e.style.scrollbarGutter="stable")}function ne(){if(--M>0||!v)return;M=0;const e=document.documentElement;e.style.overflow=v.overflow,e.style.scrollbarGutter=v.gutter,v=null}const oe=`
/* Colors and motion as variables – override them on .ui-dlg (see Theming in the docs) */
.ui-dlg {
  --ui-dlg-scrim: rgba(0, 0, 0, 0.18);
  --ui-dlg-tray: var(--aui-subtle, #f0f0f0);
  --ui-dlg-surface: var(--aui-surface, #ffffff);
  --ui-dlg-strong: var(--aui-ink, #171717);
  --ui-dlg-ink: var(--aui-ink, #171717);
  --ui-dlg-text: var(--aui-muted, #6b6b6b);
  --ui-dlg-icon: var(--aui-muted, #737373);
  --ui-dlg-line: var(--aui-border, #ececec);
  --ui-dlg-wash: #f0f0f0;
  --ui-dlg-shadow: var(--aui-shadow-popover, 0 0 0 1px rgba(0, 0, 0, 0.04), 0 24px 56px -12px rgba(0, 0, 0, 0.28), 0 6px 16px -6px rgba(0, 0, 0, 0.08));
  --ui-dlg-btn: var(--aui-surface, #ffffff);
  --ui-dlg-btn-hover: #fafafa;
  --ui-dlg-btn-line: var(--aui-border, #e5e5e5);
  --ui-dlg-on-dark: #fafafa;
  --ui-dlg-dark-top: #323137;
  --ui-dlg-dark-bottom: #201e25;
  --ui-dlg-dark-hover-top: #3c3b42;
  --ui-dlg-dark-hover-bottom: #29272f;
  --ui-dlg-edge-top: #4b4951;
  --ui-dlg-edge-bottom: #18171b;
  --ui-dlg-ring: #0d0d0d;
  --ui-dlg-danger: var(--aui-danger, #c4320a);
  --ui-dlg-danger-bg: #ffe9e6;
  --ui-dlg-danger-bg-hover: #ffdcd6;
  --ui-dlg-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-dlg-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));

  /* The layer: the whole window (or its frame when contained), dimmed, the card in the middle */
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: none;
  margin: 0;
  padding: 24px 16px;
  border: 0;
  background: var(--ui-dlg-scrim);
  color: var(--ui-dlg-ink);
  overflow: hidden;
  overscroll-behavior: contain;
  container: ui-dlg / size;
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: -0.006em;
  text-align: start;
  -webkit-font-smoothing: antialiased;
  animation: ui-dlg-scrim 180ms ease both;
}
.ui-dlg:not([open]) { display: none; }
.ui-dlg::backdrop { background: transparent; }
.ui-dlg[data-contained] { position: absolute; z-index: 70; }
.ui-dlg *, .ui-dlg *::before, .ui-dlg *::after { box-sizing: border-box; }

/* The gray tray: the white card on top, the actions on the tray below it */
.ui-dlg__panel {
  --ui-dlg-w: 480px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: var(--ui-dlg-w);
  max-width: 100%;
  max-height: 100%;
  min-height: 0;
  padding: 4px;
  border-radius: calc(var(--aui-radius-lg, 16px) + 4px);
  background: var(--ui-dlg-tray);
  box-shadow: var(--ui-dlg-shadow);
  animation: ui-dlg-in 260ms var(--ui-dlg-ease) both;
}
.ui-dlg__panel[data-size="sm"] { --ui-dlg-w: 400px; }
.ui-dlg__panel[data-size="lg"] { --ui-dlg-w: 720px; }
.ui-dlg__panel:focus { outline: none; }

/* The white card: header and content; the content scrolls, the header stays */
.ui-dlg__card {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-height: 0;
  border-radius: var(--aui-radius-lg, 16px);
  background: var(--ui-dlg-surface);
  box-shadow: var(--aui-shadow-card, 0 0 0 1px var(--ui-dlg-line), 0 1px 2px rgba(0, 0, 0, 0.04));
  /* Normally only the content scrolls; when even the title doesn't fit (a short frame, a phone on its side) the card
     scrolls as a whole – the actions sit on the tray below it and stay in view */
  overflow: hidden auto;
}

/* Title and quiet line; the × sits on the title's first line */
.ui-dlg__head {
  display: flex;
  flex: none;
  align-items: flex-start;
  gap: 12px;
  padding-block: 18px 0;
  padding-inline: 20px 13px;
}
.ui-dlg__head:not(:has(.ui-dlg__close)) { padding-inline-end: 20px; }
.ui-dlg__head:last-child { padding-bottom: 20px; }
.ui-dlg__panel[data-alert] .ui-dlg__head { padding-top: 20px; }
.ui-dlg__heading { display: grid; flex: 1; gap: 4px; min-width: 0; }
.ui-dlg__title { margin: 0; font-size: 15px; line-height: 22px; font-weight: 500; letter-spacing: -0.01em; color: var(--ui-dlg-strong); overflow-wrap: anywhere; }
.ui-dlg__desc { margin: 0; color: var(--ui-dlg-text); overflow-wrap: anywhere; }

.ui-dlg__close {
  position: relative;
  display: grid;
  flex: none;
  place-items: center;
  width: 32px;
  height: 32px;
  margin: -5px 0 0;
  padding: 0;
  border: 0;
  border-radius: calc(var(--aui-radius, 12px) - 2px);
  background: transparent;
  color: var(--ui-dlg-icon);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 160ms ease, color 160ms ease, transform 160ms var(--ui-dlg-ease);
}
.ui-dlg__close svg { display: block; width: 16px; height: 16px; }
.ui-dlg__close:hover { background: var(--ui-dlg-wash); color: var(--ui-dlg-ink); }
.ui-dlg__close:active { transform: scale(0.94); }

/*
 * The content scrolls under the fixed header. A hairline shows at the top once it is scrolled and at the bottom
 * while there is more – drawn by covers that scroll along with the content, so no script is needed
 */
.ui-dlg__body {
  flex: 1 1 auto;
  min-height: 0;
  padding: 12px 20px 20px;
  overflow: auto;
  overscroll-behavior: contain;
  overflow-wrap: anywhere;
  background:
    linear-gradient(var(--ui-dlg-surface) 0 0) top / 100% 2px no-repeat local,
    linear-gradient(var(--ui-dlg-surface) 0 0) bottom / 100% 2px no-repeat local,
    linear-gradient(var(--ui-dlg-line) 0 0) top / 100% 1px no-repeat scroll,
    linear-gradient(var(--ui-dlg-line) 0 0) bottom / 100% 1px no-repeat scroll,
    var(--ui-dlg-surface);
}

/* The actions on the tray, aligned to the end – as far from the card as from the tray's edge */
.ui-dlg__foot {
  display: flex;
  flex: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding: 8px 4px 4px;
}

/* AlertDialog's own two buttons – the classic Button's secondary, dark gradient and red fill, at its small size */
.ui-dlg__btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  min-width: 0;
  max-width: 100%;
  margin: 0;
  padding: 0 12px;
  border: 1px solid var(--ui-dlg-btn-line);
  border-radius: calc(var(--aui-radius, 12px) - 2px);
  background: var(--ui-dlg-btn);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  color: var(--ui-dlg-ink);
  font: inherit;
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 160ms ease, box-shadow 160ms ease, color 160ms ease, transform 160ms var(--ui-dlg-ease), opacity 160ms ease;
}
.ui-dlg__btn:hover:not(:disabled) { background: var(--ui-dlg-btn-hover); }
.ui-dlg__btn[data-tone="primary"] {
  border-color: transparent;
  background:
    linear-gradient(var(--ui-dlg-dark-top), var(--ui-dlg-dark-bottom)) padding-box,
    linear-gradient(var(--ui-dlg-edge-top), var(--ui-dlg-edge-bottom)) border-box;
  box-shadow: 0 0 0 1px var(--ui-dlg-ring), 0 2px 4px rgba(0, 0, 0, 0.1);
  color: var(--ui-dlg-on-dark);
}
.ui-dlg__btn[data-tone="primary"]:hover {
  background:
    linear-gradient(var(--ui-dlg-dark-hover-top), var(--ui-dlg-dark-hover-bottom)) padding-box,
    linear-gradient(var(--ui-dlg-edge-top), var(--ui-dlg-edge-bottom)) border-box;
}
.ui-dlg__btn[data-tone="danger"] { border-color: transparent; background: var(--ui-dlg-danger-bg); box-shadow: none; color: var(--ui-dlg-danger); }
.ui-dlg__btn[data-tone="danger"]:hover { background: var(--ui-dlg-danger-bg-hover); }
.ui-dlg__btn:active:not(:disabled):not([data-busy]) { transform: scale(0.97); }
.ui-dlg__btn:disabled { opacity: 0.4; cursor: default; }
.ui-dlg__btn-label { overflow: hidden; text-overflow: ellipsis; line-height: 20px; }
/* Busy: the label keeps the width, a small arc turns in its place */
.ui-dlg__btn[data-busy] { cursor: progress; }
.ui-dlg__btn[data-busy] .ui-dlg__btn-label { visibility: hidden; }
.ui-dlg__spin {
  position: absolute;
  inset: 0;
  width: 14px;
  height: 14px;
  margin: auto;
  border: 1.5px solid currentColor;
  border-inline-end-color: transparent;
  border-radius: 50%;
  animation: ui-dlg-turn 700ms linear infinite;
}

.ui-dlg :is(.ui-dlg__close, .ui-dlg__btn):focus-visible {
  outline: 2px solid var(--ui-dlg-focus);
  outline-offset: 2px;
}

/* The way out: the backdrop fades, the card shrinks a little as it goes */
.ui-dlg[data-leaving] { pointer-events: none; animation: ui-dlg-scrim-out ${O}ms ease both; }
.ui-dlg[data-leaving] .ui-dlg__panel { animation: ui-dlg-out 150ms ease-in both; }

@keyframes ui-dlg-scrim { from { background-color: transparent; } }
@keyframes ui-dlg-scrim-out { to { background-color: transparent; } }
@keyframes ui-dlg-in { from { opacity: 0; transform: translateY(8px) scale(0.97); } }
@keyframes ui-dlg-out { to { opacity: 0; transform: scale(0.98); } }
@keyframes ui-dlg-sheet-in { from { transform: translateY(100%); } }
@keyframes ui-dlg-sheet-out { to { transform: translateY(100%); } }
@keyframes ui-dlg-turn { to { transform: rotate(1turn); } }

/*
 * Phones (or a narrow frame): a sheet from the bottom – full width, the actions within the thumb's reach and above
 * the home bar, the content scrolling under the title
 */
@container ui-dlg (max-width: 520px) {
  .ui-dlg__panel {
    /* Out over the layer's padding to the edges and the bottom; at least 40px of backdrop stay above it */
    width: calc(100% + 32px);
    max-width: none;
    max-height: calc(100% + 8px);
    margin: auto -16px -24px;
    padding-bottom: max(4px, env(safe-area-inset-bottom));
    border-end-start-radius: 0;
    border-end-end-radius: 0;
    animation: ui-dlg-sheet-in 320ms var(--ui-dlg-ease) both;
  }
  .ui-dlg__panel[data-alert] .ui-dlg__btn { flex: 1 1 0; }
  .ui-dlg[data-leaving] .ui-dlg__panel { animation: ui-dlg-sheet-out ${O}ms cubic-bezier(0.4, 0, 1, 1) both; }
}

/* Touch screens: bigger targets – the look stays */
@media (pointer: coarse) {
  .ui-dlg__btn { height: 40px; padding: 0 16px; }
  .ui-dlg__close { width: 36px; height: 36px; margin: -7px -2px 0 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-dlg, .ui-dlg__panel, .ui-dlg[data-leaving], .ui-dlg[data-leaving] .ui-dlg__panel { animation-duration: 1ms; }
  .ui-dlg__spin { animation-duration: 1.6s; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-dlg {
  --ui-dlg-scrim: rgba(0, 0, 0, 0.5);
  --ui-dlg-tray: var(--aui-subtle, #111113);
  --ui-dlg-surface: var(--aui-surface, #19191b);
  --ui-dlg-strong: var(--aui-ink, #ededed);
  --ui-dlg-ink: var(--aui-ink, #ededed);
  --ui-dlg-text: var(--aui-muted, #a1a1a1);
  --ui-dlg-icon: var(--aui-muted, #8b8b92);
  --ui-dlg-line: var(--aui-border, #2a2a2e);
  --ui-dlg-wash: rgba(255, 255, 255, 0.06);
  --ui-dlg-shadow: var(--aui-shadow-popover, 0 0 0 1px rgba(255, 255, 255, 0.06), 0 24px 56px -12px rgba(0, 0, 0, 0.7));
  --ui-dlg-btn: #232326;
  --ui-dlg-btn-hover: #2a2a2d;
  --ui-dlg-btn-line: var(--aui-border, rgba(255, 255, 255, 0.1));
  /* The dark gradient turns light, like the Button's primary */
  --ui-dlg-on-dark: #121213;
  --ui-dlg-dark-top: #f4f4f5;
  --ui-dlg-dark-bottom: #e4e4e7;
  --ui-dlg-dark-hover-top: #ffffff;
  --ui-dlg-dark-hover-bottom: #ececef;
  --ui-dlg-edge-top: #ffffff;
  --ui-dlg-edge-bottom: #d4d4d8;
  --ui-dlg-ring: rgba(0, 0, 0, 0.6);
  --ui-dlg-danger: var(--aui-danger, #ff8a7a);
  --ui-dlg-danger-bg: rgba(255, 107, 95, 0.16);
  --ui-dlg-danger-bg-hover: rgba(255, 107, 95, 0.22);
  --ui-dlg-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
  color-scheme: dark;
}
`;function de(){return a.jsx("div",{className:"stage",children:a.jsx(Q,{})})}export{de as default};
