import{r,j as e}from"./client-CsvIHAk3.js";const S=2,C=350;function N(s,n){return typeof s=="object"&&s!==null&&Object.prototype.hasOwnProperty.call(s,n)}function $(s,n){let t=s;for(const i of n.split(".")){if(!N(t,i))return{present:!1,value:void 0};if(t=t[i],t===void 0)return{present:!1,value:void 0}}return{present:!0,value:t}}function w(s,n=""){const t=[];for(const i of s){const a=n?`${n}.${i.key}`:i.key;t.push(a),i.kind==="object"&&i.fields&&t.push(...w(i.fields,a))}return t}function A(s,n){return s==="null"?e.jsx("span",{className:"italic",children:"null"}):s==="boolean"?n?"true":"false":s==="number"?typeof n=="number"?n.toLocaleString():String(n??""):typeof n=="string"?n:String(n??"")}function j({kind:s,present:n,value:t}){return e.jsxs("span",{className:`ns-slip-value-wrap ns-slip-${s}`,"data-state":n?"set":"pending",children:[e.jsx("span",{className:"ns-slip-edge ns-slip-edge-dashed","aria-hidden":"true"}),e.jsx("span",{className:"ns-slip-edge ns-slip-edge-solid","aria-hidden":"true"}),e.jsx("span",{className:"ns-slip-tick","aria-hidden":"true"}),e.jsx("span",{className:"ns-slip-value",children:n?A(s,t):""})]})}function v({present:s,children:n}){return e.jsxs("div",{className:"ns-slip-container","data-state":s?"set":"pending",children:[e.jsx("span",{className:"ns-slip-edge ns-slip-edge-dashed","aria-hidden":"true"}),e.jsx("span",{className:"ns-slip-edge ns-slip-edge-solid","aria-hidden":"true"}),e.jsx("span",{className:"ns-slip-tick","aria-hidden":"true"}),e.jsx("dl",{className:"ns-slip-dl",children:n})]})}function b(s,n,t,i){const a=N(n,s.key),m=a?n[s.key]:void 0,d=`${i}.${s.key}`,u={paddingLeft:t*16};if(s.kind==="object"){const o=s.fields??[];return e.jsxs("div",{className:"ns-slip-row",style:u,children:[e.jsx("dt",{className:"ns-slip-key",children:s.key}),e.jsx("dd",{children:e.jsx(v,{present:a,children:o.map(y=>b(y,m,t+1,d))})})]},d)}if(s.kind==="array"){const o=a&&Array.isArray(m)?m:[],y=o.length+S,g=Array.isArray(s.item)?s.item:void 0,p=typeof s.item=="string"?s.item:"string";return e.jsxs("div",{className:"ns-slip-row",style:u,children:[e.jsx("dt",{className:"ns-slip-key",children:s.key}),e.jsx("dd",{children:e.jsx(v,{present:a,children:Array.from({length:y},(h,l)=>{const f=l<o.length,x=f?o[l]:void 0,k=`${d}.${l}`;return g?e.jsxs("div",{className:"ns-slip-row",style:{paddingLeft:(t+1)*16},children:[e.jsxs("dt",{className:"ns-slip-index",children:["[",l,"]"]}),e.jsx("dd",{children:e.jsx(v,{present:f,children:g.map(c=>b(c,x,t+2,k))})})]},k):e.jsxs("div",{className:"ns-slip-row",style:{paddingLeft:(t+1)*16},children:[e.jsxs("dt",{className:"ns-slip-index",children:["[",l,"]"]}),e.jsx("dd",{children:e.jsx(j,{kind:p,present:f,value:x})})]},k)})})})]},d)}return e.jsxs("div",{className:"ns-slip-row",style:u,children:[e.jsx("dt",{className:"ns-slip-key",children:s.key}),e.jsx("dd",{children:e.jsx(j,{kind:s.kind,present:a,value:m})})]},d)}async function T(s){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(s),!0}catch{}try{const n=document.createElement("textarea");n.value=s,n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.focus(),n.select();const t=document.execCommand("copy");return document.body.removeChild(n),t}catch{return!1}}const O=`
.ns-skeleton-schema dt,.ns-skeleton-schema dd,.ns-skeleton-schema dl{margin:0;padding:0}
.ns-skeleton-schema .ns-slip-dl{display:flex;flex-direction:column;gap:8px}
.ns-skeleton-schema .ns-slip-row{display:flex;align-items:flex-start;gap:12px}
.ns-skeleton-schema .ns-slip-row > dd{flex:1;min-width:0;display:flex}
.ns-skeleton-schema .ns-slip-key,.ns-skeleton-schema .ns-slip-index{
  flex:0 0 auto;min-width:64px;padding-top:3px;
  font-family:var(--font-mono);font-size:11.5px;line-height:18px;color:var(--ns-muted);white-space:nowrap;
}
.ns-skeleton-schema .ns-slip-index{opacity:.75;min-width:32px}

.ns-skeleton-schema .ns-slip-container{position:relative;display:block;flex:1;padding:8px;border-radius:12px}
.ns-skeleton-schema .ns-slip-container > .ns-slip-dl{position:relative}

.ns-skeleton-schema .ns-slip-value-wrap{
  position:relative;display:inline-flex;align-items:center;box-sizing:border-box;
  min-height:22px;padding:2px 7px;border-radius:6px;
}
.ns-skeleton-schema .ns-slip-string{display:flex;width:100%}
.ns-skeleton-schema .ns-slip-number{min-width:3.5ch;justify-content:flex-end;font-family:var(--font-mono);font-variant-numeric:tabular-nums}
.ns-skeleton-schema .ns-slip-boolean{width:5ch;font-family:var(--font-mono)}
.ns-skeleton-schema .ns-slip-null{width:4ch;font-family:var(--font-mono)}

.ns-skeleton-schema .ns-slip-edge{position:absolute;inset:0;border-radius:inherit;pointer-events:none}
.ns-skeleton-schema .ns-slip-edge-dashed{border:1px dashed var(--border);opacity:1}
.ns-skeleton-schema .ns-slip-edge-solid{border:1px solid var(--border);opacity:0}
.ns-skeleton-schema [data-state="set"] > .ns-slip-edge-dashed{opacity:0}
.ns-skeleton-schema [data-state="set"] > .ns-slip-edge-solid{opacity:1}
.ns-skeleton-schema [data-state="set"] > .ns-slip-tick{background:var(--foreground)}
.ns-skeleton-schema [data-state="set"] > .ns-slip-value{opacity:1;transform:translateY(0)}

.ns-skeleton-schema .ns-slip-tick{
  position:absolute;top:-1px;left:-1px;width:4px;height:4px;background:var(--ns-muted);
}
.ns-skeleton-schema .ns-slip-value{position:relative;font-size:12.5px;color:var(--foreground);opacity:0;transform:translateY(3px)}

/* the fill transitions only arm once mounted-live, so pre-filled content
   (a value that arrived complete on first render) never plays a cascade it
   didn't earn */
.ns-skeleton-schema.ns-slip-live .ns-slip-edge{transition:opacity 150ms cubic-bezier(.16,1,.3,1)}
.ns-skeleton-schema.ns-slip-live .ns-slip-tick{transition:background-color 200ms ease-out}
.ns-skeleton-schema.ns-slip-live .ns-slip-value{transition:transform 320ms cubic-bezier(.34,1.56,.64,1),opacity 200ms ease-out}

.ns-skeleton-schema .ns-slip-copy{outline:none}
.ns-skeleton-schema .ns-slip-copy:focus-visible{outline:2px solid var(--ns-accent);outline-offset:2px}

@media (prefers-reduced-motion: reduce){
  .ns-skeleton-schema .ns-slip-edge,.ns-skeleton-schema .ns-slip-tick,.ns-skeleton-schema .ns-slip-value{transition:none !important}
}
`;function E({schema:s,value:n,streaming:t=!1,label:i="Structured output",className:a=""}){const[m,d]=r.useState(!1),[u,o]=r.useState(!1),[y,g]=r.useState(""),p=r.useRef(void 0),h=r.useRef(void 0);r.useEffect(()=>{const c=requestAnimationFrame(()=>d(!0));return()=>cancelAnimationFrame(c)},[]);const l=r.useMemo(()=>w(s),[s]),f=r.useMemo(()=>l.filter(c=>$(n,c).present).length,[l,n]),x=l.length;r.useEffect(()=>(h.current&&clearTimeout(h.current),h.current=setTimeout(()=>{g(`${f} of ${x} field${x===1?"":"s"} complete`)},C),()=>{h.current&&clearTimeout(h.current)}),[f,x]),r.useEffect(()=>()=>{p.current&&clearTimeout(p.current)},[]);const k=async()=>{await T(JSON.stringify(n??{},null,2))&&(o(!0),p.current&&clearTimeout(p.current),p.current=setTimeout(()=>o(!1),1500))};return e.jsxs("div",{role:"region","aria-busy":t,"aria-label":i,className:`ns-skeleton-schema ${m?"ns-slip-live":""} ${a}`,children:[e.jsx("style",{children:O}),e.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[e.jsx("span",{className:"font-mono text-[11px] uppercase tracking-[0.14em] text-ns-muted",children:i}),e.jsx("button",{type:"button",className:"ns-slip-copy rounded-sm border border-border px-2 py-1 font-mono text-[11px] text-ns-muted transition-colors duration-150 hover:text-foreground",onClick:k,"aria-label":u?`${i} copied to clipboard`:`Copy ${i} as JSON`,children:u?"Copied":"Copy JSON"})]}),e.jsx("dl",{className:"ns-slip-dl",children:s.map(c=>b(c,n,0,"root"))}),e.jsx("p",{"aria-live":"polite",className:"sr-only",children:y})]})}function L(){return e.jsx("div",{className:"ns-stage",children:e.jsx(E,{schema:[{key:"a",kind:"string",fields:[{id:"a",label:"示例"},{id:"a",label:"示例"}],item:[{id:"a",label:"示例"},{id:"a",label:"示例"}]},{key:"b",kind:"string",fields:[{id:"a",label:"示例"},{id:"a",label:"示例"}],item:[{id:"a",label:"示例"},{id:"a",label:"示例"}]}],value:{a:"示例"}})})}export{L as default};
