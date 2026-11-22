import{r as n,j as t}from"./client-CsvIHAk3.js";const G=6.4,H=10,X=.22,A=.05,O=34,V=2,Z=4e3,q='button, [href], input, [tabindex]:not([tabindex="-1"])';function J({items:y,className:I=""}){const[u,T]=n.useState(!1),[b,L]=n.useState(0),[_,$]=n.useState(""),[N,z]=n.useState([]),l=n.useRef(!1),C=n.useRef(new Set),d=n.useRef(0),f=n.useRef(0),a=n.useRef(void 0),h=n.useRef(void 0),k=n.useRef(null),i=n.useRef(null),M=n.useRef(null),R=n.useRef(null),m=n.useRef(null),w=n.useRef(0),E=n.useRef(void 0),S=n.useId();n.useEffect(()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)");l.current=e.matches;const r=()=>{l.current=e.matches};return e.addEventListener("change",r),()=>e.removeEventListener("change",r)},[]);const g=n.useCallback(e=>{k.current&&(k.current.style.transform=`rotate(${e}deg)`),i.current&&(i.current.style.transform=`rotate(${-e*X}deg)`)},[]),j=n.useCallback(e=>{const r=h.current??e,s=Math.min((e-r)/1e3,.05);h.current=e;const o=d.current,c=f.current,p=-90*o-G*c,x=c+p*s,U=o+x*s;if(d.current=Math.max(-O,Math.min(O,U)),f.current=x,g(d.current),Math.abs(d.current)<A&&Math.abs(f.current)<A){d.current=0,f.current=0,g(0),h.current=void 0,a.current=void 0;return}a.current=requestAnimationFrame(j)},[g]),B=n.useCallback(()=>{a.current===void 0&&(a.current=requestAnimationFrame(j))},[j]),P=n.useCallback(()=>{const e=M.current;e&&(e.classList.remove(l.current?"ns-cb-badge-pulse-reduced":"ns-cb-badge-pulse"),e.offsetWidth,e.classList.add(l.current?"ns-cb-badge-pulse-reduced":"ns-cb-badge-pulse"))},[]),D=n.useCallback(()=>{a.current!==void 0&&(cancelAnimationFrame(a.current),a.current=void 0),h.current=void 0,d.current=0,f.current=0,g(0)},[g]);n.useEffect(()=>{const e=C.current,r=y.filter(s=>!e.has(s.id));C.current=new Set(y.map(s=>s.id)),r.length!==0&&(z(s=>[...r,...s]),L(s=>s+r.length),P(),l.current||(f.current+=H*r.length,B()),w.current+=r.length,window.clearTimeout(E.current),E.current=window.setTimeout(()=>{const s=w.current;w.current=0,$(`${s} new notification${s===1?"":"s"}`)},Z))},[y]),n.useEffect(()=>()=>{a.current!==void 0&&cancelAnimationFrame(a.current),window.clearTimeout(E.current)},[]);const F=()=>{T(!0),D(),L(0)},v=e=>{T(!1),e&&R.current?.focus()};n.useEffect(()=>{if(!u)return;const e=o=>{if(o.key==="Escape"){o.preventDefault(),v(!0);return}if(o.key!=="Tab"||!m.current)return;const c=Array.from(m.current.querySelectorAll(q));if(c.length===0)return;const p=c[0],x=c[c.length-1];o.shiftKey&&document.activeElement===p?(o.preventDefault(),x.focus()):!o.shiftKey&&document.activeElement===x&&(o.preventDefault(),p.focus())},r=o=>{const c=o.target;m.current?.contains(c)||R.current?.contains(c)||v(!1)};return document.addEventListener("keydown",e),document.addEventListener("pointerdown",r,!0),m.current?.querySelector(q)?.focus(),()=>{document.removeEventListener("keydown",e),document.removeEventListener("pointerdown",r,!0)}},[u]);const K=e=>{if(l.current||a.current!==void 0)return;const r=e.currentTarget.getBoundingClientRect(),s=(e.clientX-(r.left+r.width/2))/(r.width/2),o=s<0?-1:1,c=Math.max(.5,Math.min(1,Math.abs(s))),p=o*c*V;i.current&&(i.current.style.transform=`rotate(${p}deg)`)},W=()=>{a.current===void 0&&i.current&&(i.current.style.transform="rotate(0deg)")};return t.jsxs("div",{className:`ns-cb-root ${I}`,children:[t.jsx("style",{children:Q}),t.jsx("span",{role:"status","aria-live":"polite","aria-atomic":"true",className:"sr-only",children:_}),t.jsxs("button",{ref:R,type:"button","aria-haspopup":"true","aria-expanded":u,"aria-controls":u?S:void 0,"aria-label":b>0?`Notifications, ${b} unread`:"Notifications",className:"ns-cb-trigger",onClick:()=>u?v(!1):F(),onPointerMove:K,onPointerLeave:W,children:[t.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 26 26","aria-hidden":"true",focusable:"false",children:[t.jsxs("g",{ref:i,className:"ns-cb-body",style:{transformOrigin:"13px 4px"},children:[t.jsx("path",{d:"M13 3.5c-3.6 0-6 2.8-6 6.6 0 5-1.8 6.9-1.8 6.9h15.6s-1.8-1.9-1.8-6.9c0-3.8-2.4-6.6-6-6.6Z",fill:"none",stroke:"var(--foreground)",strokeWidth:"1.3",strokeLinejoin:"round"}),t.jsx("path",{d:"M10.4 19c.3 1.2 1.3 2 2.6 2s2.3-.8 2.6-2",fill:"none",stroke:"var(--foreground)",strokeWidth:"1.3",strokeLinecap:"round"})]}),t.jsxs("g",{ref:k,style:{transformOrigin:"13px 11px"},children:[t.jsx("line",{x1:"13",y1:"11",x2:"13",y2:"16.5",stroke:"var(--ns-muted)",strokeWidth:"1.2",strokeLinecap:"round"}),t.jsx("circle",{cx:"13",cy:"17.4",r:"1.5",fill:"var(--ns-muted)"})]})]}),b>0&&t.jsx("span",{ref:M,className:"ns-cb-badge","aria-hidden":"true",children:b>9?"9+":b})]}),u&&t.jsxs("div",{ref:m,id:S,role:"dialog","aria-label":"Notifications",className:"ns-cb-tray",children:[N.length===0?t.jsx("p",{className:"ns-cb-empty",children:"No notifications yet."}):t.jsx("ul",{className:"ns-cb-list",children:N.map(e=>t.jsx("li",{className:"ns-cb-row",children:e.message},e.id))}),t.jsx("button",{type:"button",className:"ns-cb-close",onClick:()=>v(!0),children:"Close"})]})]})}const Q=`
.ns-cb-root{position:relative;display:inline-block;}
.ns-cb-trigger{
  position:relative;
  display:inline-flex;align-items:center;justify-content:center;
  width:40px;height:40px;
  border:1px solid var(--border);border-radius:8px;
  background:var(--background);
  cursor:pointer;
}
.ns-cb-trigger:focus-visible{outline:2px solid var(--ns-accent);outline-offset:2px;}
.ns-cb-badge{
  position:absolute;top:2px;right:2px;
  min-width:16px;height:16px;padding:0 4px;
  display:flex;align-items:center;justify-content:center;
  border-radius:999px;
  background:var(--foreground);color:var(--background);
  font-size:10px;font-family:var(--font-geist-mono, ui-monospace, monospace);
  line-height:1;
}
@keyframes ns-cb-squash{
  0%{transform:scale(1);}
  35%{transform:scale(1.5,0.7);}
  65%{transform:scale(0.85,1.15);}
  100%{transform:scale(1);}
}
@keyframes ns-cb-fade-pulse{
  0%{opacity:1;}
  40%{opacity:0.35;}
  100%{opacity:1;}
}
.ns-cb-badge-pulse{animation:ns-cb-squash 340ms cubic-bezier(0.34,1.56,0.64,1);}
.ns-cb-badge-pulse-reduced{animation:ns-cb-fade-pulse 340ms ease;}

.ns-cb-tray{
  position:absolute;top:calc(100% + 8px);right:0;
  width:260px;max-height:280px;overflow:auto;
  border:1px solid var(--border);border-radius:12px;
  background:var(--background);
  box-shadow:0 8px 24px -8px rgba(0,0,0,0.45);
  padding:10px;
  z-index:20;
}
.ns-cb-empty{margin:8px 4px;font-size:12px;color:var(--ns-muted);}
.ns-cb-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:2px;}
.ns-cb-row{padding:8px;border-radius:6px;font-size:13px;color:var(--foreground);}
.ns-cb-row:hover{background:color-mix(in oklab, var(--ns-muted) 10%, var(--background));}
.ns-cb-close{
  margin-top:8px;width:100%;
  padding:6px 0;
  border:1px solid var(--border);border-radius:6px;
  background:var(--background);color:var(--ns-muted);
  font-size:12px;cursor:pointer;
}
.ns-cb-close:hover{color:var(--foreground);}
.ns-cb-close:focus-visible{outline:2px solid var(--ns-accent);outline-offset:1px;}
`;function ee(){return t.jsx("div",{className:"ns-stage",children:t.jsx(J,{items:[{id:"a",message:"示例"},{id:"b",message:"第二项"}]})})}export{ee as default};
