import{r as i,j as e}from"./client-CsvIHAk3.js";function w({open:r}){return e.jsxs("svg",{width:"16",height:"28",viewBox:"0 0 16 28","aria-hidden":"true",focusable:"false",className:"ns-hf-icon",children:[e.jsx("path",{d:"M4.5 17.5 v3.6 a3 3 0 0 0 6 0 v-3.6",fill:"none",stroke:"var(--ns-muted)",strokeWidth:"1.4",strokeLinecap:"round"}),e.jsxs("g",{className:"ns-hf-hasp","data-state":r?"open":"closed",children:[e.jsx("circle",{cx:"8",cy:"4.5",r:"1.5",fill:"var(--ns-muted)"}),e.jsx("line",{x1:"8",y1:"4.5",x2:"8",y2:"19.5",stroke:"var(--foreground)",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("rect",{x:"4.6",y:"16.5",width:"6.8",height:"6",rx:"2.4",fill:"none",stroke:"var(--foreground)",strokeWidth:"1.5"})]})]})}function j({items:r,multiple:p=!1,defaultOpen:m=[],className:x=""}){const[u,g]=i.useState(()=>new Set(m)),[b,d]=i.useState(0),l=i.useRef([]),f=i.useId().replace(/:/g,""),v=s=>{g(n=>{const t=new Set(n);return t.has(s)?t.delete(s):(p||t.clear(),t.add(s)),t})},y=(s,n)=>{const t=r.length;let a=-1;s.key==="ArrowDown"?a=(n+1)%t:s.key==="ArrowUp"?a=(n-1+t)%t:s.key==="Home"?a=0:s.key==="End"&&(a=t-1),a>=0&&(s.preventDefault(),d(a),l.current[a]?.focus())};return e.jsxs("div",{className:`ns-hf-root ${x}`,children:[e.jsx("style",{children:k}),r.map((s,n)=>{const t=u.has(s.id),a=`${f}-h-${s.id}`,h=`${f}-p-${s.id}`,o=t?"open":"closed";return e.jsxs("div",{className:"ns-hf-section","data-state":o,children:[e.jsx("h3",{className:"ns-hf-h3",children:e.jsxs("button",{ref:c=>{l.current[n]=c},type:"button",id:a,"aria-expanded":t,"aria-controls":h,className:"ns-hf-header","data-state":o,tabIndex:n===b?0:-1,onClick:()=>{d(n),v(s.id)},onFocus:()=>d(n),onKeyDown:c=>y(c,n),children:[e.jsx("span",{className:"ns-hf-title",children:s.title}),e.jsx(w,{open:t})]})}),e.jsx("div",{id:h,role:"region","aria-labelledby":a,className:"ns-hf-rows","data-state":o,children:e.jsx("div",{className:"ns-hf-rows-inner",children:e.jsx("div",{className:"ns-hf-content","data-state":o,children:s.content})})})]},s.id)})]})}const k=`
.ns-hf-root{display:flex;flex-direction:column;border:1px solid var(--border);border-radius:12px;overflow:hidden;background:var(--background);}
.ns-hf-section + .ns-hf-section{border-top:1px solid var(--border);}
.ns-hf-h3{margin:0;}
.ns-hf-header{
  position:relative;
  display:flex;
  width:100%;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  padding:14px 40px 14px 16px;
  border:0;
  background:var(--background);
  color:var(--foreground);
  font-size:14px;
  text-align:left;
  cursor:pointer;
  transform:translateY(0);
  transition:transform 90ms ease-out;
  transition-delay:90ms;
}
.ns-hf-header[data-state="open"]{
  transform:translateY(-2px);
  transition-delay:130ms;
}
.ns-hf-header:hover{background:color-mix(in oklab, var(--ns-muted) 8%, var(--background));}
.ns-hf-header:focus-visible{outline:2px solid var(--ns-accent);outline-offset:-2px;}
.ns-hf-title{flex:1;min-width:0;}
.ns-hf-icon{position:absolute;right:12px;top:50%;transform:translateY(-50%);}

.ns-hf-hasp{transform-origin:8px 4.5px;transform:rotate(0deg);
  transition:transform 220ms cubic-bezier(0.68,-0.55,0.34,1.55);transition-delay:180ms;}
.ns-hf-hasp[data-state="open"]{transform:rotate(-58deg);
  transition:transform 200ms cubic-bezier(0.34,1.56,0.64,1);transition-delay:0ms;}
.ns-hf-header[data-state="closed"]:hover .ns-hf-hasp{transform:translateX(-1.5px);transition:transform 120ms ease-out;}

.ns-hf-rows{
  display:grid;
  grid-template-rows:0fr;
  transition:grid-template-rows 220ms cubic-bezier(0.4,0,0.2,1);
  transition-delay:0ms;
}
.ns-hf-rows[data-state="open"]{
  grid-template-rows:1fr;
  transition:grid-template-rows 300ms cubic-bezier(0.16,1,0.3,1);
  transition-delay:190ms;
}
.ns-hf-rows-inner{overflow:hidden;}
.ns-hf-content{
  padding:0 16px 16px 16px;
  color:var(--ns-muted);
  font-size:13px;
  line-height:1.6;
  opacity:0;
  transform:translateY(4px);
  transition:opacity 120ms ease, transform 120ms ease;
  transition-delay:0ms;
}
.ns-hf-content[data-state="open"]{
  opacity:1;
  transform:translateY(0);
  transition:opacity 220ms ease, transform 220ms cubic-bezier(0.16,1,0.3,1);
  transition-delay:220ms;
}

@media (prefers-reduced-motion: reduce){
  .ns-hf-header,.ns-hf-hasp,.ns-hf-rows,.ns-hf-content{
    transition-duration:0ms !important;
    transition-delay:0ms !important;
  }
}
`;function I(){return e.jsx("div",{className:"ns-stage",children:e.jsx(j,{items:[{id:"a",title:"示例",content:"这是一段用来预览排版的示例文字。"},{id:"b",title:"第二项",content:"第二段用来占位的说明。"}],defaultOpen:["示例","第二项"]})})}export{I as default};
