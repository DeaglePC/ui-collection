import{r as i,j as s}from"./client-CsvIHAk3.js";const h=8,z=6*h,N=14*h,P=62,k=90,C=14,M=216,L=88,O=100,H=1,B=1e7;function K(r){let l=0;for(let c=0;c<r.length;c++)l=Math.imul(l,31)+r.charCodeAt(c)|0;const p=(l%2e3+2e3)%2e3/2e3;return Math.round((p*2-1)*3*100)/100}function U(r,l,p){return Math.min(p,Math.max(l,r))}function X({transactions:r,ariaLabel:l="Payment history",className:p=""}){const[c,R]=i.useState(!1),[m,x]=i.useState(()=>new Set),[I,g]=i.useState(null),[$,_]=i.useState(""),b=i.useRef(new Map),v=i.useRef(!1);i.useEffect(()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=()=>R(e.matches);return t(),e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]),i.useLayoutEffect(()=>{const e=b.current;if(v.current){const t=[];let o=null;for(const n of r){const d=e.get(n.id);d===void 0?t.push(n.id):d==="settled"&&n.status==="refunded"&&(o=n)}if(t.length>0&&x(n=>{const d=new Set(n);for(const u of t)d.add(u);return d}),o){const n=o.refundedAmount??o.amount;_(`Refunded: ${o.date}, $${o.amount.toFixed(2)} — $${n.toFixed(2)} returned`)}}b.current=new Map(r.map(t=>[t.id,t.status])),v.current=!0},[r,c]),i.useEffect(()=>{if(m.size===0)return;const e=setTimeout(()=>x(new Set),32);return()=>clearTimeout(e)},[m]);const w=i.useMemo(()=>{const e=new Map;return[...r].reverse().forEach((o,n)=>e.set(o.id,n)),e},[r]),y=i.useMemo(()=>{const e=r.map(a=>{const f=(w.get(a.id)??0)*h-(a.status==="refunded"?z:0);return{id:a.id,rawY:f}}),t=Math.min(0,...e.map(a=>a.rawY)),o=Math.max(0,...e.map(a=>a.rawY)),n=-t,d=L+(o-t);return{byId:new Map(e.map(a=>[a.id,{rawY:a.rawY,shiftedY:a.rawY+n}])),height:d,topPad:n}},[r,w]);return s.jsxs("div",{className:["ns-spindle relative mx-auto",p].join(" "),style:{width:M+40,height:y.height},children:[s.jsx("style",{children:`
.ns-spindle-spine{position:absolute;top:0;bottom:0;left:50%;width:1px;background:var(--border);transform:translateX(-0.5px);pointer-events:none}
.ns-spindle-list{position:relative;margin:0;padding:0;height:100%;list-style:none}
.ns-spindle-card{
  position:absolute;
  left:50%;
  top:0;
  width:${M}px;
  padding:20px 14px 12px;
  border-radius:12px;
  box-shadow:0 1px 3px color-mix(in srgb, var(--foreground) 14%, transparent);
  transition:transform 560ms cubic-bezier(.34,1.56,.64,1), opacity 460ms ease-out, color 560ms ease-out;
  cursor:default;
}
.ns-spindle-card:focus-visible{outline:2px solid var(--ns-accent);outline-offset:2px}
.ns-spindle-puncture{
  position:absolute;
  left:50%;
  top:16px;
  width:3px;
  height:3px;
  border-radius:9999px;
  background:color-mix(in srgb, var(--foreground) 45%, var(--ns-muted));
  transform:translate(-50%,-50%) scale(1);
  opacity:1;
  transition:width 320ms cubic-bezier(.22,1,.36,1), height 320ms cubic-bezier(.22,1,.36,1),
    opacity 160ms ease-out 380ms, transform 160ms cubic-bezier(.34,1.56,.64,1) 380ms;
}
.ns-spindle-card[data-status="refunded"] .ns-spindle-puncture{width:3px;height:13px;border-radius:9999px}
.ns-spindle-card[data-entering="true"] .ns-spindle-puncture{opacity:0;transform:translate(-50%,-50%) scale(.25)}
.ns-spindle-dl{margin:6px 0 0}
.ns-spindle-row{display:flex;align-items:baseline;justify-content:space-between;gap:8px;line-height:1.35}
.ns-spindle-date{font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;color:var(--ns-muted)}
.ns-spindle-amount{font-family:var(--font-mono);font-size:16px;font-weight:600;color:inherit}
.ns-spindle-status{font-family:var(--font-mono);font-size:11px;color:var(--ns-muted)}
.ns-spindle-card[data-status="refunded"] .ns-spindle-status{color:inherit}
@media (prefers-reduced-motion: reduce){
  /* Not a snap: the strike still needs to read as a card landing, just
     short and linear instead of the 560ms spring overshoot — small-scale
     UI motion on transform/opacity/color, not the ambient or parallax
     motion prefers-reduced-motion exists to suppress. */
  .ns-spindle-card{transition:transform 160ms linear, opacity 140ms linear, color 160ms linear!important}
  .ns-spindle-puncture{transition:width 140ms linear, height 140ms linear, opacity 100ms linear 60ms, transform 100ms linear 60ms!important}
}
`}),s.jsx("div",{"aria-hidden":"true",className:"ns-spindle-spine"}),s.jsx("ol",{"aria-label":l,className:"ns-spindle-list",children:r.map(e=>{const t=y.byId.get(e.id),o=t?.rawY??0,n=t?.shiftedY??0,d=e.status==="refunded",u=m.has(e.id),a=I===e.id,f=(u?n-(c?C:k):n)-(a?2:0),D=K(e.id),S=U(o,0,N)/N*P,T=a?B:Math.round(3e3-o)*O+(d?H:0),Y=e.refundedAmount??e.amount,j=d?`Refunded, $${Y.toFixed(2)} returned`:"Settled",F=`${e.date}, $${e.amount.toFixed(2)}, ${j}`;return s.jsxs("li",{tabIndex:0,"aria-label":F,"data-id":e.id,"data-status":e.status,"data-entering":u,onFocus:()=>g(e.id),onBlur:()=>g(E=>E===e.id?null:E),className:"ns-spindle-card border border-border bg-background",style:{transform:`translate(-50%, ${f}px) rotate(${D}deg)`,transformOrigin:"50% 16px",zIndex:T,opacity:u?0:1,color:`color-mix(in srgb, var(--foreground) ${100-S}%, var(--ns-muted))`},children:[s.jsx("span",{"aria-hidden":"true",className:"ns-spindle-puncture"}),s.jsxs("dl",{className:"ns-spindle-dl",children:[s.jsxs("div",{className:"ns-spindle-row",children:[s.jsx("dt",{className:"sr-only",children:"Date"}),s.jsx("dd",{className:"ns-spindle-date",children:e.date})]}),s.jsxs("div",{className:"ns-spindle-row",children:[s.jsx("dt",{className:"sr-only",children:"Amount"}),s.jsxs("dd",{className:"ns-spindle-amount",children:["$",e.amount.toFixed(2)]})]}),s.jsxs("div",{className:"ns-spindle-row",children:[s.jsx("dt",{className:"sr-only",children:"Status"}),s.jsx("dd",{className:"ns-spindle-status",children:j})]})]})]},e.id)})}),s.jsx("div",{"aria-live":"polite",className:"sr-only",children:$})]})}function G(){return s.jsx("div",{className:"ns-stage",children:s.jsx(X,{transactions:[{id:"a",date:"2026-11-15",amount:42,status:"settled"},{id:"b",date:"2026-11-14",amount:18,status:"settled"}]})})}export{G as default};
