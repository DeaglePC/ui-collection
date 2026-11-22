import{r as t,j as f}from"./client-CsvIHAk3.js";const B=t.createContext(null),T=.01,v="data-rsz-panel";function D({direction:n="horizontal",onLayout:i,keyboardStep:w=5,className:C,style:M,children:P,ref:y,...S}){const d=t.useRef(null),a=t.useRef(new Map).current,[b,k]=t.useState({}),h=t.useRef(b);h.current=b;const[O,j]=t.useState(0),A=t.useRef(i);A.current=i;const E=t.useRef(0),p=t.useCallback(()=>d.current?[...d.current.children].filter(e=>e.hasAttribute(v)).map(e=>e.getAttribute(v)):[],[]);t.useLayoutEffect(()=>{const e=p(),l=h.current;if(!e.length)return;for(const r of[...a.keys()])e.includes(r)||a.delete(r);const z=e.filter(r=>l[r]!=null||a.get(r)?.initial!=null),c=z.reduce((r,s)=>r+(l[s]??a.get(s).initial),0),x=e.length>z.length?Math.max(0,100-c)/(e.length-z.length):0;let o=e.map(r=>l[r]??a.get(r)?.initial??x);const m=o.reduce((r,s)=>r+s,0)||1;o=o.map(r=>r*100/m),e.length===Object.keys(l).length&&e.every((r,s)=>Math.abs((l[r]??-1)-o[s])<T)||k(Object.fromEntries(e.map((r,s)=>[r,o[s]])))},[O,p,a]);const R=t.useCallback(()=>(j(e=>e+1),()=>j(e=>e+1)),[]),N=t.useMemo(()=>({direction:n,sizes:b,configs:a,step:w,register:R,read:()=>p().map(e=>h.current[e]??0),dragging:e=>d.current?.toggleAttribute("data-resizing",e),resize:(e,l,z)=>{const c=p(),x=F(e),o=x?c.indexOf(x):-1;if(o<0||o>=c.length-1)return;const m=c.map(u=>h.current[u]??0),g=l(m,c.map(u=>a.get(u)??{min:0,max:100,collapsible:!1,collapsed:0}),o);if(!g||g.every((u,_)=>Math.abs(u-m[_])<T))return;const r=d.current;r&&z&&(r.setAttribute("data-snap",""),window.clearTimeout(E.current),E.current=window.setTimeout(()=>r.removeAttribute("data-snap"),240));const s=Object.fromEntries(c.map((u,_)=>[u,g[_]]));h.current=s,k(s),A.current?.(g.map(u=>Math.round(u*100)/100))}}),[n,b,a,w,R,p]),W=t.useCallback(e=>{d.current=e,G(y,e)},[y]);return f.jsxs(B.Provider,{value:N,children:[f.jsx("style",{href:"ui-resizable",precedence:"default",children:K}),f.jsx("div",{ref:W,className:["ui-rsz",C].filter(Boolean).join(" "),"data-direction":n,style:M,...S,children:P})]})}function F(n){let i=n.previousElementSibling;for(;i&&!i.hasAttribute(v);)i=i.previousElementSibling;return i?.getAttribute(v)??null}function G(n,i){typeof n=="function"?n(i):n&&(n.current=i)}const K=`
/* Colors as variables – override them on .ui-rsz (see Theming in the docs) */
.ui-rsz {
  --ui-rsz-line: var(--aui-border, #ececec);
  --ui-rsz-line-active: #c4c4c8;
  --ui-rsz-grip: var(--aui-surface, #ffffff);
  --ui-rsz-grip-edge: #e1e1e4;
  --ui-rsz-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-rsz-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));

  /* Fills what it is put in; the panes share it by their sizes */
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
}
.ui-rsz[data-direction="vertical"] { flex-direction: column; }
.ui-rsz *, .ui-rsz *::before, .ui-rsz *::after { box-sizing: border-box; }
.ui-rsz[data-resizing] { user-select: none; -webkit-user-select: none; }
.ui-rsz[data-direction="horizontal"][data-resizing] { cursor: col-resize; }
.ui-rsz[data-direction="vertical"][data-resizing] { cursor: row-resize; }
/* While dragging, iframes and text under the pointer don't catch it */
.ui-rsz[data-resizing] > .ui-rsz__panel { pointer-events: none; }

/* A pane: its share of the room, never pushed wider by its content; it scrolls when the content doesn't fit */
.ui-rsz__panel { position: relative; min-width: 0; min-height: 0; overflow: auto; }
.ui-rsz[data-snap] > .ui-rsz__panel { transition: flex-grow 220ms var(--ui-rsz-ease); }

/* The handle: a 1px line in the layout, a 12px grab strip over it */
.ui-rsz__handle {
  position: relative;
  z-index: 1;
  flex: none;
  outline: none;
  touch-action: none;
  user-select: none;
  border: 0 solid var(--ui-rsz-line);
  transition: border-color 150ms ease;
}
.ui-rsz[data-direction="horizontal"] > .ui-rsz__handle { width: 0; border-inline-start-width: 1px; cursor: col-resize; }
.ui-rsz[data-direction="vertical"] > .ui-rsz__handle { height: 0; border-top-width: 1px; cursor: row-resize; }
.ui-rsz__handle::after { content: ""; position: absolute; border-radius: 4px; }
.ui-rsz[data-direction="horizontal"] > .ui-rsz__handle::after { top: 0; bottom: 0; left: -6px; right: -6px; }
.ui-rsz[data-direction="vertical"] > .ui-rsz__handle::after { left: 0; right: 0; top: -6px; bottom: -6px; }
/* The line firms up under the pointer (after a short rest, so passing over it stays calm) and while dragging */
.ui-rsz__handle:hover { border-color: var(--ui-rsz-line-active); transition-delay: 120ms; }
.ui-rsz__handle[data-dragging], .ui-rsz__handle:focus-visible { border-color: var(--ui-rsz-line-active); transition-delay: 0ms; }
/* Keyboard focus: the ring around the grab strip, inside it, so the panes' edges never cut it */
.ui-rsz__handle:focus-visible::after { outline: 2px solid var(--ui-rsz-focus); outline-offset: -2px; }

/* The grip: a small white pill on the line, a 1px edge */
.ui-rsz__grip {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 999px;
  background: var(--ui-rsz-grip);
  box-shadow: 0 0 0 1px var(--ui-rsz-grip-edge), 0 1px 2px rgba(0, 0, 0, 0.06);
  pointer-events: none;
}
.ui-rsz[data-direction="horizontal"] .ui-rsz__grip { width: 8px; height: 28px; }
.ui-rsz[data-direction="vertical"] .ui-rsz__grip { width: 28px; height: 8px; }

/* Touch screens: a wider strip for the finger and a bigger grip */
@media (pointer: coarse) {
  .ui-rsz[data-direction="horizontal"] > .ui-rsz__handle::after { left: -12px; right: -12px; }
  .ui-rsz[data-direction="vertical"] > .ui-rsz__handle::after { top: -12px; bottom: -12px; }
  .ui-rsz[data-direction="horizontal"] .ui-rsz__grip { width: 10px; height: 36px; }
  .ui-rsz[data-direction="vertical"] .ui-rsz__grip { width: 36px; height: 10px; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-rsz[data-snap] > .ui-rsz__panel { transition: none; }
  .ui-rsz__handle { transition: none; }
}

/* Windows high contrast: the line keeps a system color */
@media (forced-colors: active) {
  .ui-rsz__handle { border-color: CanvasText; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-rsz {
  --ui-rsz-line: var(--aui-border, #26262a);
  --ui-rsz-line-active: #4a4a50;
  --ui-rsz-grip: var(--aui-surface, #1c1c1e);
  --ui-rsz-grip-edge: #34343a;
  --ui-rsz-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
`;function q(){return f.jsx("div",{className:"stage",children:f.jsx(D,{})})}export{q as default};
