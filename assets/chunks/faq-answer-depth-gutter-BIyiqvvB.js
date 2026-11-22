import{r,j as s}from"./client-CsvIHAk3.js";const S=260,$=200,g="cubic-bezier(0.22,1,0.36,1)";function w(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function q({items:b,allowMultiple:m=!1,defaultOpen:f=[],className:v=""}){const c=r.useId().replace(/:/g,""),[i,y]=r.useState(()=>new Set(f)),a=r.useRef(new Map),l=r.useRef(new Set),d=r.useRef(new Set(f)),p=r.useRef(i);p.current=i;const h=r.useCallback(e=>{const n=a.current.get(e);if(n){if(n.hidden=!1,n.style.transition="none",n.style.height="0px",n.offsetHeight,w()){n.style.transition="",n.style.height="auto";return}n.style.transition=`height ${S}ms ${g}`,n.style.height=`${n.scrollHeight}px`}},[]),u=r.useCallback(e=>{const n=a.current.get(e);if(n){if(n.style.transition="none",n.style.height=`${n.offsetHeight}px`,n.offsetHeight,w()){n.style.transition="",n.style.height="0px",n.hidden=!0;return}n.style.transition=`height ${$}ms ${g}`,n.style.height="0px"}},[]);r.useEffect(()=>{i.forEach(e=>{d.current.has(e)||h(e)}),d.current.forEach(e=>{i.has(e)||u(e)}),d.current=new Set(i)},[i,h,u]);const j=(e,n)=>{if(e.propertyName!=="height"||e.target!==e.currentTarget)return;const t=a.current.get(n);t&&(t.style.transition="",p.current.has(n)?t.style.height="auto":(t.style.height="0px",t.hidden=!0))},N=e=>{y(n=>{const t=new Set(n);return t.has(e)?t.delete(e):(m||t.clear(),t.add(e)),t})};return s.jsxs("div",{className:`ns-fdg-root ${v}`.trim(),children:[s.jsx("style",{children:E}),b.map(e=>{const n=i.has(e.id),t=`${c}-q-${e.id}`,x=`${c}-a-${e.id}`;return s.jsxs("div",{className:"ns-fdg-row","data-open":n,children:[s.jsx("h3",{className:"ns-fdg-h3",children:s.jsxs("button",{type:"button",id:t,"data-faq-trigger":"",className:"ns-fdg-trigger","aria-expanded":n,"aria-controls":x,onClick:()=>N(e.id),children:[s.jsx("span",{className:"ns-fdg-question",children:e.question}),s.jsxs("span",{className:"ns-fdg-sign","data-open":n,"aria-hidden":"true",children:[s.jsx("span",{className:"ns-fdg-sign-h"}),s.jsx("span",{className:"ns-fdg-sign-v"})]})]})}),s.jsx("div",{id:x,ref:o=>{if(!o){a.current.delete(e.id);return}a.current.set(e.id,o),!l.current.has(e.id)&&(l.current.add(e.id),i.has(e.id)?o.style.height="auto":(o.style.height="0px",o.hidden=!0))},"data-faq-panel":"","data-open":n,role:"region","aria-labelledby":t,className:"ns-fdg-panel",onTransitionEnd:o=>j(o,e.id),children:s.jsx("div",{className:"ns-fdg-answer",children:e.answer})})]},e.id)})]})}const E=`
.ns-fdg-root{width:100%;color:var(--foreground);padding-left:14px;}
.ns-fdg-root *,.ns-fdg-root *::before,.ns-fdg-root *::after{box-sizing:border-box;}

.ns-fdg-row{position:relative;}
.ns-fdg-row + .ns-fdg-row{border-top:1px solid var(--border);}
/* Open-row rail: fixed height, so two open rows never join into one bar. */
.ns-fdg-row::before{
  content:"";position:absolute;left:-14px;top:18px;width:2px;height:18px;
  border-radius:9999px;background-color:transparent;
  transition:background-color 160ms ease;
}
.ns-fdg-row[data-open="true"]::before{background-color:var(--ns-accent);}

.ns-fdg-h3{margin:0;font-size:inherit;font-weight:inherit;}
.ns-fdg-trigger{
  display:flex;width:100%;align-items:center;justify-content:space-between;gap:20px;
  padding:16px 0;border:0;background:none;
  color:var(--foreground);font:inherit;font-size:15px;line-height:1.4;
  text-align:left;cursor:pointer;border-radius:6px;
}
.ns-fdg-trigger:hover .ns-fdg-question{color:var(--ns-accent);}
.ns-fdg-trigger:focus-visible{outline:2px solid var(--ns-accent);outline-offset:3px;}
.ns-fdg-question{min-width:0;transition:color 160ms ease;}

.ns-fdg-sign{position:relative;flex:0 0 10px;width:10px;height:10px;}
.ns-fdg-sign-h,.ns-fdg-sign-v{position:absolute;left:0;top:0;background-color:var(--ns-muted);}
.ns-fdg-sign-h{width:10px;height:1.5px;top:4.25px;}
.ns-fdg-sign-v{width:1.5px;height:10px;left:4.25px;transition:transform 200ms ${g};transform-origin:center;}
.ns-fdg-sign[data-open="true"] .ns-fdg-sign-v{transform:scaleY(0);}

.ns-fdg-panel{overflow:hidden;height:0;}
.ns-fdg-panel[hidden]{display:none;}
.ns-fdg-answer{padding:0 0 20px 0;color:var(--ns-muted);font-size:13.5px;line-height:1.65;}
.ns-fdg-answer p{margin:0;}
.ns-fdg-answer p + p{margin-top:11px;}

@media (prefers-reduced-motion: reduce){
  .ns-fdg-sign-v,.ns-fdg-question{transition-duration:0ms !important;}
}
`;function R(){return s.jsx("div",{className:"ns-stage",children:s.jsx(q,{items:[{id:"a",question:"示例",answer:"示例"},{id:"b",question:"第二项",answer:"第二项"}],defaultOpen:["示例","第二项"]})})}export{R as default};
