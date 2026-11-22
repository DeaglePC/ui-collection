import{r as s,j as e}from"./client-CsvIHAk3.js";const o=new Intl.NumberFormat("en-US");function P({page:u,onPageChange:r,total:t,pageSize:f=20,pageCount:c,pageSizes:h,onPageSizeChange:b,siblings:M=1,compact:m=!1,disabled:g=!1,className:W,"aria-label":E="Pagination",ref:_,...N}){const L=s.useId(),d=Math.max(1,Math.floor(f)||1),l=t!=null&&Number.isFinite(t)?Math.max(0,Math.floor(t)):null,p=Math.max(1,l!=null?Math.ceil(l/d):Math.floor(c??1)||1),n=Math.min(p,Math.max(1,Math.floor(u)||1)),z=Math.max(0,Math.floor(M)||0),v=s.useRef(null),[R,w]=s.useState(!1),C=s.useRef(0),k=`${p}|${z}|${m}`,[$,T]=s.useState(k);$!==k&&(T(k),w(!1)),s.useLayoutEffect(()=>{const i=v.current;!i||R||m||i.scrollWidth>i.clientWidth+1&&(C.current=i.clientWidth,w(!0))}),s.useEffect(()=>{const i=v.current;if(!i||typeof ResizeObserver>"u")return;const a=new ResizeObserver(()=>{i.clientWidth>C.current+1&&w(!1)});return a.observe(i),()=>a.disconnect()},[]);const y=s.useRef(!1);s.useLayoutEffect(()=>{y.current&&(y.current=!1,v.current?.querySelector(`[data-page="${n}"]`)?.focus({preventScroll:!0}))},[n]);const j=(i,a=!1)=>{if(g)return;const x=Math.min(p,Math.max(1,i));x!==n&&(y.current=a&&!!v.current?.contains(document.activeElement),r(x))},q=l===0?0:(n-1)*d+1,A=l==null?0:Math.min(n*d,l),F=!m&&!R,I=h?.length?[...new Set([...h,d])].filter(i=>i>0).sort((i,a)=>i-a):null;return e.jsxs("nav",{...N,ref:i=>{v.current=i,typeof _=="function"?_(i):_&&(_.current=i)},"aria-label":E,className:["ui-pgn",W].filter(Boolean).join(" "),"data-disabled":g||void 0,style:{...N.style,"--ui-pgn-digits":o.format(p).length},children:[e.jsx("style",{href:"ui-pagination",precedence:"default",children:O}),e.jsxs("div",{className:"ui-pgn__info",children:[I&&e.jsxs("label",{className:"ui-pgn__size",children:[e.jsx("span",{className:"ui-pgn__size-label",children:"Rows per page"}),e.jsxs("span",{className:"ui-pgn__select",children:[e.jsx("select",{id:`${L}-size`,value:d,disabled:g,onChange:i=>{const a=Number(i.target.value);b?.(a);const x=Math.floor((n-1)*d/a)+1;x!==n&&r(x)},children:I.map(i=>e.jsx("option",{value:i,children:o.format(i)},i))}),e.jsx(D,{})]})]}),e.jsx("span",{className:"ui-pgn__range","aria-live":"polite","aria-atomic":"true",children:l!=null?l===0?"0 of 0":e.jsxs(e.Fragment,{children:[o.format(q),"–",o.format(A)," ",e.jsx("span",{className:"ui-pgn__of",children:"of"})," ",o.format(l)]}):e.jsxs(e.Fragment,{children:["Page ",o.format(n)," ",e.jsx("span",{className:"ui-pgn__of",children:"of"})," ",o.format(p)]})})]}),e.jsxs("ul",{className:"ui-pgn__pages",children:[e.jsx("li",{children:e.jsx("button",{type:"button",className:"ui-pgn__step","aria-label":"Previous page","aria-disabled":g||n<=1||void 0,onClick:()=>j(n-1),children:e.jsx(S,{dir:"left"})})}),F&&B(n,p,z).map((i,a)=>i===0?e.jsx("li",{className:"ui-pgn__gap","aria-hidden":"true",children:"…"},a):e.jsx("li",{children:e.jsx("button",{type:"button",className:"ui-pgn__num","data-page":i,"aria-label":`Page ${o.format(i)}`,"aria-current":i===n?"page":void 0,"aria-disabled":g||void 0,onClick:()=>j(i,!0),children:o.format(i)})},a)),e.jsx("li",{children:e.jsx("button",{type:"button",className:"ui-pgn__step","aria-label":"Next page","aria-disabled":g||n>=p||void 0,onClick:()=>j(n+1),children:e.jsx(S,{dir:"right"})})})]})]})}function B(u,r,t){const f=2*t+5,c=(h,b)=>Array.from({length:b-h+1},(M,m)=>h+m);return r<=f?c(1,r):u-t<=3?[...c(1,f-2),0,r]:u+t>=r-2?[1,0,...c(r-(f-3),r)]:[1,0,...c(u-t,u+t),0,r]}function S({dir:u}){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",focusable:"false","aria-hidden":"true",children:e.jsx("path",{d:u==="left"?"M15 6s-6 4.42-6 6 6 6 6 6":"M9 6s6 4.42 6 6-6 6-6 6"})})}function D(){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",focusable:"false","aria-hidden":"true",children:e.jsx("path",{d:"M18 9s-4.42 6-6 6-6-6-6-6"})})}const O=`
/* Colors as variables – override them on .ui-pgn (see Theming in the docs) */
.ui-pgn {
  --ui-pgn-ink: var(--aui-ink, #171717);
  --ui-pgn-text: #404040;
  --ui-pgn-muted: var(--aui-muted, #737373);
  --ui-pgn-faint: var(--aui-placeholder, #a3a3a3);
  --ui-pgn-wash: #f0f0f0;
  --ui-pgn-active: var(--aui-subtle, #ebebeb);
  --ui-pgn-surface: var(--aui-surface, #ffffff);
  --ui-pgn-surface-hover: #fafafa;
  --ui-pgn-line: var(--aui-border, #e5e5e5);
  --ui-pgn-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  --ui-pgn-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-pgn-radius: calc(var(--aui-radius, 12px) - 2px);
  --ui-pgn-h: 32px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 16px;
  min-width: 0;
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  line-height: 20px;
  font-weight: 400;
  font-variant-numeric: tabular-nums;
  color: var(--ui-pgn-muted);
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
}
.ui-pgn *, .ui-pgn *::before, .ui-pgn *::after { box-sizing: border-box; }
.ui-pgn svg { display: block; flex: none; }

.ui-pgn__info { display: flex; align-items: center; gap: 16px; min-width: 0; }
.ui-pgn__range { color: var(--ui-pgn-text); }
.ui-pgn__of { color: var(--ui-pgn-muted); }

/* Rows per page: a quiet label and a small white field – the browser's own list opens from it */
.ui-pgn__size { display: inline-flex; align-items: center; gap: 8px; cursor: default; }
.ui-pgn__select { position: relative; display: inline-flex; align-items: center; }
.ui-pgn__select > select {
  appearance: none;
  height: var(--ui-pgn-h);
  margin: 0;
  padding: 0 28px 0 11px;
  border: 1px solid var(--ui-pgn-line);
  border-radius: var(--ui-pgn-radius);
  background: var(--ui-pgn-surface);
  box-shadow: var(--ui-pgn-shadow);
  font: inherit;
  font-weight: 500;
  color: var(--ui-pgn-ink);
  cursor: pointer;
  transition: background-color 140ms ease;
}
.ui-pgn__select > select:hover:not(:disabled) { background: var(--ui-pgn-surface-hover); }
.ui-pgn__select > svg { position: absolute; right: 9px; width: 14px; height: 14px; color: var(--ui-pgn-muted); pointer-events: none; }
.ui-pgn__select > select:dir(rtl) { padding: 0 11px 0 28px; }
.ui-pgn__select > select:dir(rtl) + svg { right: auto; left: 9px; }

/* The arrows and the numbers: one row, every number as wide as the longest */
.ui-pgn__pages { display: flex; align-items: center; gap: 4px; margin: 0 0 0 auto; padding: 0; list-style: none; }
.ui-pgn__pages > li { display: flex; }
.ui-pgn__num,
.ui-pgn__step {
  position: relative;
  display: inline-grid;
  place-items: center;
  height: var(--ui-pgn-h);
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: var(--ui-pgn-radius);
  background: none;
  font: inherit;
  color: var(--ui-pgn-text);
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 120ms ease, color 120ms ease;
}
.ui-pgn__num { min-width: max(var(--ui-pgn-h), calc(var(--ui-pgn-digits, 1) * 1ch + 16px)); padding: 0 8px; }
.ui-pgn__step { width: var(--ui-pgn-h); border: 1px solid var(--ui-pgn-line); background: var(--ui-pgn-surface); box-shadow: var(--ui-pgn-shadow); color: var(--ui-pgn-muted); }
.ui-pgn__step > svg { width: 16px; height: 16px; }
.ui-pgn__step > svg:dir(rtl) { transform: scaleX(-1); }
.ui-pgn__num:hover:not([aria-disabled]) { background: var(--ui-pgn-wash); color: var(--ui-pgn-ink); }
.ui-pgn__step:hover:not([aria-disabled]) { background: var(--ui-pgn-surface-hover); color: var(--ui-pgn-ink); }
/* The page you're on: a gray fill, like an active tab */
.ui-pgn__num[aria-current="page"],
.ui-pgn__num[aria-current="page"]:hover { background: var(--ui-pgn-active); color: var(--ui-pgn-ink); font-weight: 500; cursor: default; }
.ui-pgn__step[aria-disabled] { opacity: 0.45; box-shadow: none; cursor: default; }
.ui-pgn__num:focus-visible,
.ui-pgn__step:focus-visible,
.ui-pgn__select > select:focus-visible { outline: 2px solid var(--ui-pgn-focus); outline-offset: 2px; }
.ui-pgn__select > select:focus:not(:focus-visible) { outline: none; }
.ui-pgn__gap { display: grid; place-items: center; min-width: 20px; height: var(--ui-pgn-h); color: var(--ui-pgn-faint); user-select: none; }

/* While rows load: everything stays, nothing can be pressed */
.ui-pgn[data-disabled] .ui-pgn__pages,
.ui-pgn[data-disabled] .ui-pgn__size { opacity: 0.5; }
.ui-pgn[data-disabled] button { cursor: default; }
.ui-pgn[data-disabled] .ui-pgn__num[aria-current="page"] { background: var(--ui-pgn-active); }

/* Touch screens: every number and arrow a finger can hit */
@media (pointer: coarse) {
  .ui-pgn { --ui-pgn-h: 40px; font-size: 15px; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-pgn__num, .ui-pgn__step, .ui-pgn__select > select { transition-duration: 1ms; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-pgn {
  --ui-pgn-ink: var(--aui-ink, #ededed);
  --ui-pgn-text: #d4d4d8;
  --ui-pgn-muted: var(--aui-muted, #8f8f8f);
  --ui-pgn-faint: var(--aui-placeholder, #5c5c63);
  --ui-pgn-wash: rgba(255, 255, 255, 0.06);
  --ui-pgn-active: var(--aui-subtle, rgba(255, 255, 255, 0.1));
  --ui-pgn-surface: var(--aui-surface, #232326);
  --ui-pgn-surface-hover: #2a2a2d;
  --ui-pgn-line: var(--aui-border, rgba(255, 255, 255, 0.1));
  --ui-pgn-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  --ui-pgn-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
  color-scheme: dark;
}
`;function K(){return e.jsx("div",{className:"stage",children:e.jsx(P,{items:[{id:"a",label:"示例",value:"a",href:"#",name:"示例",title:"示例",text:"预览文字",status:"done",quote:"预览"}],options:[{label:"示例",value:"a"}],steps:[{id:"a",label:"一步"}],nodes:[{id:"a",label:"示例",children:[]}],comments:[{id:"a",author:"Ada",body:"预览",text:"预览"}],notifications:[{id:"a",title:"示例",body:"预览"}],tips:[{title:"示例",body:"预览"}],logos:["甲","乙","丙"],testimonials:[{name:"Ada",quote:"预览",role:"设计"}],links:[{label:"示例",href:"#"}],columns:[{id:"a",header:"列",accessorKey:"a"}],data:[{a:"示例"}],text:"预览文字",value:"预览",label:"示例",code:"const n = 1",title:"标题",placeholder:"输入"})})}export{K as default};
