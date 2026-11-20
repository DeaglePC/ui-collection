import{r as s,j as r}from"./client-CsvIHAk3.js";function R(n){const i=Math.hypot(n[0],n[1])||1;return[n[0]/i,n[1]/i]}function L(n){return[-n[1],n[0]]}function T(n,i){const l=n.length,o=[];for(let e=0;e<l-1;e++){const t=n[e+1][0]-n[e][0],u=n[e+1][1]-n[e][1];o.push(R(L([t,u])))}const c=n.map((e,t)=>{if(t===0)return o[0];if(t===l-1)return o[l-2];const u=o[t-1],f=o[t];return R([u[0]+f[0],u[1]+f[1]])}),m=n.map((e,t)=>[e[0]+c[t][0]*i[t],e[1]+c[t][1]*i[t]]),k=n.map((e,t)=>[e[0]-c[t][0]*i[t],e[1]-c[t][1]*i[t]]),b=e=>`${e[0].toFixed(2)},${e[1].toFixed(2)}`;let p=`M${b(m[0])}`;for(let e=1;e<l;e++)p+=` L${b(m[e])}`;for(let e=l-1;e>=0;e--)p+=` L${b(k[e])}`;return`${p} Z`}const E=[[4,12.4],[7.6,15.6],[9.7,18],[12.3,15.1],[15.2,11.5],[18.1,8],[19.7,6.1]],A=[.55,1.05,1.7,1.55,1.15,.7,.35],F=T(E,A),$=E[0],h={x:6,y:10.6,width:12,height:2.8,rx:1.4};function M({checked:n,defaultChecked:i=!1,onCheckedChange:l,disabled:o=!1,label:c,id:m,name:k,value:b,className:p="","aria-label":e}){const t=s.useId(),u=m??`checkbox-ink-stroke-${t}`,f=s.useRef(null),y=s.useRef(null),g=s.useRef(!1),N=n!==void 0,[C,S]=s.useState(i),v=N?n:C,a=v==="indeterminate"?"indeterminate":v?"checked":"unchecked",[z,I]=s.useState(0),[D,j]=s.useState(!1),w=s.useRef(a);s.useEffect(()=>{g.current=window.matchMedia("(prefers-reduced-motion: reduce)").matches},[]),s.useEffect(()=>{f.current&&(f.current.indeterminate=a==="indeterminate")},[a]),s.useEffect(()=>{w.current!=="unchecked"&&a==="unchecked"&&!g.current&&(I(x=>x+1),j(!0)),w.current=a},[a]),s.useEffect(()=>{const d=y.current;!d||g.current||a!=="checked"||(d.classList.remove("ns-nib-pop"),d.offsetWidth,d.classList.add("ns-nib-pop"))},[a]);const H=d=>{const x=d.target.checked;N||S(x),l?.(x)};return r.jsxs("label",{htmlFor:c?u:void 0,className:`inline-flex items-center gap-2.5 ${o?"cursor-not-allowed":"cursor-pointer"} ${p}`,children:[r.jsx("style",{children:`
        .ns-nib-box {
          transition: border-radius 200ms cubic-bezier(.16,1,.3,1), border-color 150ms cubic-bezier(.16,1,.3,1);
        }
        .ns-nib-ink {
          clip-path: inset(0 100% 0 0) fill-box;
          transition: clip-path 220ms cubic-bezier(.16,1,.3,1);
        }
        [data-state="checked"] .ns-nib-ink-check,
        [data-state="indeterminate"] .ns-nib-ink-dash {
          clip-path: inset(0 0 0 0) fill-box;
        }
        [data-state="checked"] .ns-nib-box {
          border-radius: 6px;
        }
        .ns-nib-dot {
          animation: ns-nib-dot-fade 320ms cubic-bezier(.16,1,.3,1) forwards;
        }
        @keyframes ns-nib-dot-fade {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        .ns-nib-pop {
          animation: ns-nib-pop-settle 220ms cubic-bezier(.34,1.4,.64,1);
        }
        @keyframes ns-nib-pop-settle {
          0% { transform: scale(1); }
          55% { transform: scale(1.04); }
          100% { transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ns-nib-box, .ns-nib-ink { transition: none !important; }
          .ns-nib-dot, .ns-nib-pop { animation: none !important; }
        }
      `}),r.jsxs("span",{className:"relative inline-flex h-[18px] w-[18px] shrink-0",children:[r.jsx("input",{ref:f,type:"checkbox",id:u,name:k,value:b,checked:v===!0,disabled:o,onChange:H,"aria-label":c?void 0:e??"Checkbox",className:"peer absolute inset-0 h-full w-full cursor-pointer appearance-none opacity-0 disabled:cursor-not-allowed"}),r.jsx("span",{ref:y,"data-state":a,"aria-hidden":!0,className:`ns-nib-box pointer-events-none absolute inset-0 rounded-[4px] border border-border peer-hover:border-foreground/30 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ns-accent ${o?"opacity-40":""}`,children:r.jsxs("svg",{"aria-hidden":!0,viewBox:"0 0 24 24",className:"pointer-events-none absolute inset-0 h-full w-full text-foreground",children:[r.jsx("path",{d:F,"data-nib-ink":"check",className:"ns-nib-ink ns-nib-ink-check fill-current"}),r.jsx("rect",{x:h.x,y:h.y,width:h.width,height:h.height,rx:h.rx,"data-nib-ink":"dash",className:"ns-nib-ink ns-nib-ink-dash fill-current"}),D&&r.jsx("circle",{cx:$[0],cy:$[1],r:1.15,className:"ns-nib-dot fill-current",onAnimationEnd:()=>j(!1)},z)]})})]}),c&&r.jsx("span",{className:`text-sm text-foreground ${o?"opacity-40":""}`,children:c})]})}function P(){return r.jsx("div",{className:"ns-stage",children:r.jsx(M,{checked:!0,onCheckedChange:()=>{},label:"示例",id:"a",name:"示例",value:"a","aria-label":"示例"})})}export{P as default};
