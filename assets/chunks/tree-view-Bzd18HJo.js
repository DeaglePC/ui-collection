import{r as u,j as n}from"./client-CsvIHAk3.js";function Y({items:y,expanded:l,defaultExpanded:j,onExpandedChange:w,selected:p,defaultSelected:A=null,onSelect:M,guides:m=!0,emptyText:o="Empty","aria-label":h,"aria-labelledby":S,className:B}){const E=u.useId(),I=u.useRef(null),R=u.useRef(new Map),{roots:z,byId:N}=u.useMemo(()=>Z(y),[y]),[F,O]=u.useState(()=>Array.isArray(j)?j:[]),x=l!==void 0?Array.isArray(l)?l:[]:F,_=u.useMemo(()=>new Set(x.map(String)),[x]),[U,V]=u.useState(A),T=p!==void 0?p:U,[W,q]=u.useState(null),K=u.useRef(new Set),C=u.useMemo(()=>{const t=[],e=i=>{for(const r of i)t.push(r),r.kids&&_.has(r.id)&&e(r.kids)};return e(z),t},[z,_]),s=C.filter(t=>!t.node.disabled),k=(t,e)=>{if(_.has(t)===e)return;const i=e?[...x,t]:x.filter(r=>String(r)!==t);l===void 0&&O(i),w?.(i)},G=t=>{const e=t.filter(r=>!_.has(r));if(!e.length)return;const i=[...x,...e];l===void 0&&O(i),w?.(i)},D=t=>{t.node.disabled||(p===void 0&&V(t.id),M?.(t.id,t.node))},c=t=>{t&&R.current.get(t)?.focus()},H=(s.find(t=>t.id===W)??s.find(t=>t.id===T)??s[0])?.id;u.useEffect(()=>{const t=document.activeElement;if(!t||!I.current?.contains(t)||t.getAttribute("role")!=="treeitem")return;let e=t.dataset.id;const i=new Set(C.map(r=>r.id));if(!(e&&i.has(e))){for(;e&&!i.has(e);)e=N.get(e)?.parent;e&&c(e)}},[C,N]);const X=u.useRef({text:"",at:0}),J=(t,e)=>{const i=Date.now(),r=X.current;r.text=i-r.at>700?t:r.text+t,r.at=i;const d=r.text.toLocaleLowerCase(),f=[...d].every(a=>a===d[0]),g=f?d[0]:d,v=f?e+1:e;for(let a=0;a<s.length;a++){const b=s[(v+a+s.length)%s.length];if(String(b.node.label??"").trimStart().toLocaleLowerCase().startsWith(g))return c(b.id)}},Q=t=>{const e=t.target;if(e.getAttribute("role")!=="treeitem"||t.ctrlKey||t.metaKey||t.altKey)return;const i=N.get(e.dataset.id??"");if(!i)return;const r=s.indexOf(i),d=I.current?getComputedStyle(I.current).direction==="rtl":!1,f=d?"ArrowLeft":"ArrowRight",g=d?"ArrowRight":"ArrowLeft",v=i.kids!==null&&_.has(i.id);let a=!0;switch(t.key){case"ArrowDown":c(s[r+1]?.id);break;case"ArrowUp":c(r>0?s[r-1].id:void 0);break;case"Home":c(s[0]?.id);break;case"End":c(s[s.length-1]?.id);break;case f:i.kids&&!i.node.disabled&&(v?c(i.kids.find(b=>!b.node.disabled)?.id):k(i.id,!0));break;case g:v?k(i.id,!1):c(i.parent??void 0);break;case"Enter":D(i),i.kids&&!i.node.disabled&&k(i.id,!v);break;case" ":D(i);break;case"*":{const b=i.parent?N.get(i.parent)?.kids??[]:z;G(b.filter(L=>L.kids&&!L.node.disabled).map(L=>L.id));break}default:t.key.length===1&&/\S/.test(t.key)?J(t.key,r):a=!1}a&&t.preventDefault()},$=t=>t.map(e=>{const i=e.kids!==null,r=i&&_.has(e.id);r&&K.current.add(e.id);const d=!!e.node.disabled,f=`${E}-l${e.n}`,g=`${E}-m${e.n}`,v=r&&e.node.openIcon!=null?e.node.openIcon:e.node.icon;return n.jsxs("li",{ref:a=>{a?R.current.set(e.id,a):R.current.delete(e.id)},role:"treeitem",className:"ui-tv__item","data-id":e.id,"aria-level":e.depth+1,"aria-posinset":e.pos,"aria-setsize":e.size,"aria-expanded":i?r:void 0,"aria-selected":e.id===T,"aria-disabled":d||void 0,"aria-labelledby":f,"aria-describedby":e.node.meta!=null?g:void 0,tabIndex:e.id===H?0:-1,onFocus:a=>{a.target===a.currentTarget&&q(e.id)},children:[n.jsxs("div",{className:"ui-tv__row",style:{"--ui-tv-d":e.depth},onMouseDown:d?a=>a.preventDefault():void 0,onClick:()=>{d||(D(e),i&&k(e.id,!r))},children:[n.jsx("span",{className:"ui-tv__chev","aria-hidden":"true",onClick:i?a=>{a.stopPropagation(),d||k(e.id,!r)}:void 0,children:i&&n.jsx(P,{})}),v!=null&&n.jsx("span",{className:"ui-tv__icon","aria-hidden":"true",children:v}),n.jsx("span",{className:"ui-tv__label",id:f,dir:"auto",title:e.node.label,children:e.node.label}),e.node.meta!=null&&n.jsx("span",{className:"ui-tv__meta",id:g,dir:"auto",children:e.node.meta})]}),i&&n.jsx("div",{className:"ui-tv__fold","data-open":r||void 0,children:n.jsx("ul",{role:"group",className:"ui-tv__group",style:{"--ui-tv-d":e.depth+1},children:(r||K.current.has(e.id))&&(e.kids.length?$(e.kids):n.jsx("li",{role:"none",className:"ui-tv__empty",style:{"--ui-tv-d":e.depth+1},children:o}))})})]},e.id)});return n.jsxs("ul",{ref:I,role:"tree","aria-label":h,"aria-labelledby":S,className:["ui-tv",B].filter(Boolean).join(" "),"data-guides":m||void 0,onKeyDown:Q,children:[n.jsx("style",{href:"ui-tree-view",precedence:"default",children:ee}),$(z)]})}function Z(y){const l=new Map;let j=0;const w=(p,A,M)=>{const m=[];for(const o of Array.isArray(p)?p:[]){if(!o||o.id==null)continue;const h=String(o.id);if(l.has(h))continue;const S={node:o,id:h,n:j++,depth:A,parent:M,pos:0,size:0,kids:null};l.set(h,S),m.push(S)}return m.forEach((o,h)=>{o.pos=h+1,o.size=m.length,o.kids=Array.isArray(o.node.children)?w(o.node.children,A+1,o.id):null}),m};return{roots:w(y,0,null),byId:l}}const P=()=>n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M9 6c0 0 6 4.42 6 6s-6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),ee=`
/* Colors and motion as variables – override them on .ui-tv (see Theming in the docs) */
.ui-tv {
  --ui-tv-ink: var(--aui-ink, #171717);
  --ui-tv-text: var(--aui-ink, #262626);
  --ui-tv-icon: var(--aui-muted, #8f8f8f);
  --ui-tv-meta: var(--aui-muted, #8f8f8f);
  --ui-tv-faint: var(--aui-placeholder, #a3a3a3);
  --ui-tv-wash: #f4f4f5;
  --ui-tv-fill: #ededed;
  --ui-tv-guide: var(--aui-border, #ececec);
  --ui-tv-guide-on: #c8c8c8;
  --ui-tv-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-tv-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  /* Sizes: 32px rows, 18px per level */
  --ui-tv-h: 32px;
  --ui-tv-pad: 8px;
  --ui-tv-indent: 18px;
  --ui-tv-chev: 16px;
  --ui-tv-r: calc(var(--aui-radius-sm, 5px) + 3px);

  display: block;
  box-sizing: border-box;
  min-width: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  font-weight: 400;
  line-height: 20px;
  color: var(--ui-tv-text);
  -webkit-font-smoothing: antialiased;
}
.ui-tv *, .ui-tv *::before, .ui-tv *::after { box-sizing: border-box; }
.ui-tv__group { position: relative; min-height: 0; margin: 0; padding: 0; list-style: none; overflow: hidden; }
.ui-tv__item { display: block; margin: 0; padding: 0; }

/* A row: chevron, glyph, name, meta – one fixed height; deeper levels indent (at most to 45% of the width) */
.ui-tv__row {
  display: flex;
  align-items: center;
  gap: 5px;
  height: var(--ui-tv-h);
  padding-inline: calc(var(--ui-tv-pad) + min(var(--ui-tv-d, 0) * var(--ui-tv-indent), 45%)) var(--ui-tv-pad);
  overflow: hidden;
  border-radius: var(--ui-tv-r);
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 90ms ease;
}
.ui-tv__item[aria-selected="true"] > .ui-tv__row { background: var(--ui-tv-fill); color: var(--ui-tv-ink); }
.ui-tv__item[aria-selected="true"] > .ui-tv__row .ui-tv__label { font-weight: 500; }
@media (hover: hover) {
  .ui-tv__item:not([aria-selected="true"]):not([aria-disabled="true"]) > .ui-tv__row:hover { background: var(--ui-tv-wash); }
  .ui-tv__row:hover .ui-tv__chev { color: var(--ui-tv-meta); }
}
.ui-tv__item[aria-disabled="true"] > .ui-tv__row { opacity: 0.4; cursor: not-allowed; }

/* The ring sits on the row, inside it – never around the open branch below */
.ui-tv__item:focus { outline: none; }
.ui-tv__item:focus-visible > .ui-tv__row { outline: 2px solid var(--ui-tv-focus); outline-offset: -2px; }

.ui-tv__chev {
  display: grid;
  flex: none;
  place-items: center;
  width: var(--ui-tv-chev);
  height: var(--ui-tv-chev);
  color: var(--ui-tv-faint);
  transition: transform 200ms var(--ui-tv-ease), color 90ms ease;
}
.ui-tv__chev svg { display: block; width: 14px; height: 14px; }
.ui-tv__chev:dir(rtl) svg { transform: scaleX(-1); }
.ui-tv__item[aria-expanded="true"] > .ui-tv__row > .ui-tv__chev { transform: rotate(90deg); }
.ui-tv__item[aria-expanded="true"] > .ui-tv__row > .ui-tv__chev:dir(rtl) { transform: rotate(-90deg); }

.ui-tv__icon { display: grid; flex: none; place-items: center; width: 16px; height: 16px; margin-inline-end: 4px; overflow: hidden; color: var(--ui-tv-icon); }
.ui-tv__icon svg, .ui-tv__icon img { display: block; width: 100%; height: 100%; object-fit: contain; }
.ui-tv__item[aria-selected="true"] > .ui-tv__row .ui-tv__icon { color: var(--ui-tv-ink); }

/* Long names end in … – the full name on hover */
.ui-tv__label { flex: 1 1 auto; min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-tv__meta {
  flex: none;
  max-width: 45%;
  margin-inline-start: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12.5px;
  line-height: 16px;
  color: var(--ui-tv-meta);
  font-variant-numeric: tabular-nums;
}

/* A branch grows and shrinks in height; closed, its rows are hidden from the keyboard and screen readers too */
.ui-tv__fold {
  display: grid;
  grid-template-rows: 0fr;
  visibility: hidden;
  transition: grid-template-rows 220ms var(--ui-tv-ease), visibility 0s linear 220ms;
}
.ui-tv__fold[data-open] { grid-template-rows: 1fr; visibility: visible; transition: grid-template-rows 220ms var(--ui-tv-ease), visibility 0s; }

/* Guides: a thin line under each open branch's chevron – darker where the selected row is */
.ui-tv[data-guides] .ui-tv__group::before {
  content: "";
  position: absolute;
  top: 2px;
  bottom: 2px;
  inset-inline-start: calc(var(--ui-tv-pad) + min((var(--ui-tv-d) - 1) * var(--ui-tv-indent), 45%) + var(--ui-tv-chev) / 2 - 0.5px);
  width: 1px;
  background: var(--ui-tv-guide);
  pointer-events: none;
  transition: background-color 160ms ease;
}
.ui-tv[data-guides] .ui-tv__group:has(> .ui-tv__item[aria-selected="true"])::before { background: var(--ui-tv-guide-on); }

.ui-tv__empty {
  display: flex;
  align-items: center;
  height: var(--ui-tv-h);
  padding-inline: calc(var(--ui-tv-pad) + min(var(--ui-tv-d, 0) * var(--ui-tv-indent), 45%) + var(--ui-tv-chev) + 5px) var(--ui-tv-pad);
  font-size: 12.5px;
  color: var(--ui-tv-faint);
  white-space: nowrap;
}

/* Touch screens: rows at least 40px tall */
@media (pointer: coarse) {
  .ui-tv { --ui-tv-h: 40px; --ui-tv-indent: 20px; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-tv__row, .ui-tv__chev, .ui-tv__fold, .ui-tv__fold[data-open], .ui-tv[data-guides] .ui-tv__group::before { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tv {
  --ui-tv-ink: var(--aui-ink, #ededed);
  --ui-tv-text: var(--aui-ink, #e4e4e7);
  --ui-tv-icon: var(--aui-muted, #8b8b92);
  --ui-tv-meta: var(--aui-muted, #8b8b92);
  --ui-tv-faint: var(--aui-placeholder, #5c5c63);
  --ui-tv-wash: rgba(255, 255, 255, 0.05);
  --ui-tv-fill: #26262a;
  --ui-tv-guide: var(--aui-border, #2a2a2e);
  --ui-tv-guide-on: #4a4a50;
  --ui-tv-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
}
`;function ie(){return n.jsx("div",{className:"stage",children:n.jsx(Y,{})})}export{ie as default};
