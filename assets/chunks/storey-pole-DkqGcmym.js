import{r as s,j as r}from"./client-CsvIHAk3.js";const de=15,q=44,te=300,pe=280,fe=45,me=640,he=.28,ge=.11,ve=220,xe=.3;function be(){const[o,a]=s.useState(!1);return s.useEffect(()=>{const i=window.matchMedia("(prefers-reduced-motion: reduce)");a(i.matches);const m=()=>a(i.matches);return i.addEventListener("change",m),()=>i.removeEventListener("change",m)},[]),o}function ne(o){if(o===0)return"at ground level";const a=Math.abs(o).toFixed(1);return o>0?`${a} m above ground`:`${a} m below ground`}function ye(o){return o===0?"±0.0 m":`${o>0?"+":"−"}${Math.abs(o).toFixed(1)} m`}function se(o){if(o)return o.level.name??`Level ${o.level.label}`}function we(o){let a=2166136261;for(let i=0;i<o.length;i++)a^=o.charCodeAt(i),a=Math.imul(a,16777619);return a>>>0}function Me(o){let a=o;return()=>{a|=0,a=a+1831565813|0;let i=Math.imul(a^a>>>15,1|a);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function re({level:o,className:a}){const{cuts:i,core:m}=s.useMemo(()=>{const c=Me(we(o.id)),M=2+Math.floor(c()*3),b=[];for(let E=0;E<M;E++)if(c()>.5){const g=14+c()*68;b.push({x1:g,y1:6,x2:g,y2:66})}else{const g=12+c()*48;b.push({x1:6,y1:g,x2:90,y2:g})}return{cuts:b,core:{x:10+c()*58,y:10+c()*42,w:10+c()*12,h:8+c()*10}}},[o.id]);return r.jsxs("svg",{viewBox:"0 0 96 72",className:a,"aria-hidden":"true",focusable:"false",children:[r.jsx("rect",{x:2,y:2,width:92,height:68,className:"text-border",fill:"none",stroke:"currentColor",strokeWidth:1.5}),i.map((c,M)=>r.jsx("line",{x1:c.x1,y1:c.y1,x2:c.x2,y2:c.y2,className:"text-border",stroke:"currentColor",strokeWidth:1},M)),r.jsx("rect",{x:m.x,y:m.y,width:m.w,height:m.h,className:"text-ns-muted",fill:"currentColor",fillOpacity:.28,stroke:"currentColor",strokeWidth:1})]})}function ke({label:o,levels:a,value:i,defaultValue:m,onValueChange:c,name:M,className:b=""}){const E=s.useId(),g=M??E,C=be(),G=s.useRef(C);G.current=C;const h=s.useMemo(()=>[...a].sort((t,e)=>e.elevation-t.elevation),[a]),u=s.useMemo(()=>{let t=0;return h.map(e=>{const n=Math.max(0,e.height)*de,l=t;return t+=n,{level:e,top:l,height:n,bottom:l+n}})},[h]),_=u.length?u[u.length-1].bottom:0,f=s.useMemo(()=>new Map(u.map(t=>[t.level.id,t])),[u]),W=s.useMemo(()=>new Map(h.map((t,e)=>[t.id,e])),[h]),oe=s.useMemo(()=>h.find(e=>e.elevation===0)?.id??h[0]?.id??"",[h]),T=i!==void 0,[ae,ie]=s.useState(()=>m??oe),p=T?i:ae,F=s.useCallback(t=>{T||ie(t),t!==p&&c?.(t)},[T,p,c]),[v,H]=s.useState(p),z=s.useRef(v),k=s.useRef(!1);s.useEffect(()=>{k.current||(z.current=p,H(p))},[p]);const X=s.useRef(null),x=s.useRef(null);if(!x.current){const t=f.get(p)?.bottom??0;x.current={raf:0,last:0,y:t,vy:0,target:t,zeta:1,deadline:0}}const N=s.useCallback(t=>{const e=X.current;e&&(e.style.transform=`translateY(${t}px)`)},[]),y=s.useCallback(t=>{const e=x.current;e.raf&&cancelAnimationFrame(e.raf),e.raf=0,e.y=t,e.vy=0,e.target=t,N(t)},[N]),D=s.useCallback(t=>{const e=x.current;e.raf=0;const n=e.last?Math.min(.033,(t-e.last)/1e3):1/60;e.last=t;const l=2*e.zeta*Math.sqrt(te);if(e.vy+=(-te*(e.y-e.target)-l*e.vy)*n,e.y+=e.vy*n,t>=e.deadline||Math.abs(e.y-e.target)<.3&&Math.abs(e.vy)<4){e.y=e.target,e.vy=0,N(e.y);return}N(e.y),e.raf=requestAnimationFrame(D)},[N]),$=s.useCallback((t,e)=>{if(G.current){y(t);return}const n=x.current;n.target=t,n.zeta=Math.max(he,1-(e-1)*ge),n.deadline=performance.now()+Math.min(me,pe+(e-1)*fe),n.last=0,n.raf||(n.raf=requestAnimationFrame(D))},[D,y]);s.useEffect(()=>()=>{const t=x.current;t?.raf&&cancelAnimationFrame(t.raf)},[]);const j=s.useRef(null);s.useEffect(()=>{const t=W.get(p),e=f.get(p);if(t===void 0||!e)return;if(j.current===null){y(e.bottom),j.current=t;return}if(j.current===t)return;const n=Math.max(1,Math.abs(t-j.current));j.current=t,$(e.bottom,n)},[p,W,f,$,y]);const B=s.useRef(null),Z=s.useCallback(t=>{let e,n=1/0;for(const l of u){const d=Math.abs(l.bottom-t);d<n&&(n=d,e=l)}return e},[u]),I=s.useCallback(t=>{const e=B.current;if(!e||u.length===0)return;const n=e.getBoundingClientRect(),l=Math.min(_,Math.max(0,t-n.top)),d=Z(l);if(!d)return;const Y=d.height*xe,A=Math.abs(l-d.bottom)<Y/2;y(A?d.bottom:l),z.current=d.level.id,H(d.level.id)},[u,_,Z,y]),le=s.useCallback(t=>{u.length!==0&&(k.current=!0,B.current?.setPointerCapture(t.pointerId),I(t.clientY))},[u.length,I]),ce=s.useCallback(t=>{k.current&&I(t.clientY)},[I]),K=s.useCallback(()=>{if(!k.current)return;k.current=!1;const t=z.current,e=f.get(t);F(t),e&&$(e.bottom,1)},[f,F,$]),[ue,U]=s.useState(""),S=s.useRef(null);s.useEffect(()=>{const t=f.get(p);if(!t)return;const e=t.level.elevation;if(S.current===null){S.current=e;return}const n=e-S.current;if(S.current=e,n===0){U(`Level ${t.level.label} selected`);return}const l=n>0?"up":"down";U(`${l} ${Math.abs(n).toFixed(1)} m to Level ${t.level.label}`)},[p,f]);const[R,P]=s.useState(null),V=s.useRef(null),O=s.useRef(v);if(s.useEffect(()=>{if(v===O.current)return;const t=O.current;if(O.current=v,C){P(null);return}P(f.get(t)?.level??null)},[v,C,f]),s.useEffect(()=>{if(!R)return;const t=V.current;if(!t||typeof t.animate!="function"){P(null);return}const e=t.animate([{opacity:1},{opacity:0}],{duration:ve,easing:"ease-out",fill:"forwards"}),n=()=>P(l=>l===R?null:l);e.onfinish=n,e.oncancel=n},[R]),u.length===0)return r.jsx("p",{className:`font-mono text-xs text-ns-muted ${b}`,children:"No levels to show."});const w=f.get(v)?.level??h[0];return r.jsxs("div",{className:`ns-sp-root flex flex-wrap items-start gap-6 ${b}`,children:[r.jsxs("div",{ref:B,role:"radiogroup","aria-label":o,className:"ns-sp-section touch-none",style:{height:_},onPointerDown:le,onPointerMove:ce,onPointerUp:K,onPointerCancel:K,children:[u.map((t,e)=>{const n=t.level,l=n.id===p,d=n.id===v,Y=n.elevation<0,A=se(u[e+1]),J=se(u[e-1]),L=[];A&&L.push(`directly above ${A}`),J&&L.push(`below ${J}`);const Q=[`Level ${n.label}`,ne(n.elevation)];n.name&&Q.push(n.name);let ee=Q.join(", ");return L.length&&(ee+=`; ${L.join(", ")}`),r.jsxs("div",{className:"ns-sp-row",style:{height:t.height},children:[r.jsx("input",{type:"radio",className:"ns-sp-input",name:g,value:n.id,checked:l,onChange:()=>F(n.id),"aria-label":ee}),r.jsxs("span",{className:"ns-sp-visual","data-checked":d||void 0,children:[r.jsx("span",{className:"ns-sp-bar","data-checked":d||void 0,children:Y&&r.jsx("span",{"aria-hidden":"true",className:"ns-sp-hatch"})}),r.jsxs("span",{className:"ns-sp-info",children:[r.jsx("span",{className:"ns-sp-code","data-checked":d||void 0,children:n.label}),r.jsx("span",{className:"ns-sp-elev",children:ye(n.elevation)}),n.name&&r.jsx("span",{className:"ns-sp-name",children:n.name})]})]})]},n.id)}),r.jsx("div",{ref:X,"aria-hidden":"true",className:"ns-sp-datum",style:{transform:`translateY(${x.current.y}px)`}})]}),r.jsxs("div",{className:"ns-sp-side min-w-[180px] max-w-[240px] flex-1",children:[r.jsxs("div",{className:"ns-sp-plan-stack",children:[r.jsx(re,{level:w,className:"ns-sp-plan-glyph"},w.id),R&&r.jsx("div",{ref:V,className:"ns-sp-plan-overlay",children:r.jsx(re,{level:R,className:"ns-sp-plan-glyph"})})]}),r.jsxs("div",{className:"ns-sp-readout",children:[r.jsx("span",{className:"ns-sp-readout-code",children:w.label}),r.jsx("span",{className:"ns-sp-readout-elev",children:ne(w.elevation)}),w.name&&r.jsx("span",{className:"ns-sp-readout-name",children:w.name})]})]}),r.jsx("div",{className:"sr-only",role:"status","aria-live":"polite",children:ue}),r.jsx("style",{children:`
        .ns-sp-section {
          position: relative;
          width: ${q+8}px;
          min-width: max-content;
        }
        .ns-sp-row {
          position: relative;
        }
        .ns-sp-input {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
          outline: none;
        }
        .ns-sp-visual {
          display: flex;
          align-items: stretch;
          height: 100%;
          border-radius: 4px;
        }
        .ns-sp-input:focus-visible + .ns-sp-visual {
          outline: 2px solid var(--ns-accent);
          outline-offset: 2px;
        }
        .ns-sp-bar {
          position: relative;
          flex: 0 0 ${q}px;
          width: ${q}px;
          box-sizing: border-box;
          border: 1px solid var(--border);
          background: var(--background);
          transition: background-color 160ms ease;
          overflow: hidden;
        }
        .ns-sp-bar[data-checked] {
          background: color-mix(in oklab, var(--foreground) 8%, transparent);
        }
        .ns-sp-row:hover .ns-sp-bar:not([data-checked]) {
          background: color-mix(in oklab, var(--foreground) 4%, transparent);
        }
        .ns-sp-hatch {
          position: absolute;
          inset: 0 auto 0 0;
          width: 9px;
          background-image: repeating-linear-gradient(
            45deg,
            var(--border) 0 1.5px,
            transparent 1.5px 5px
          );
        }
        .ns-sp-info {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 10px 0 12px;
          white-space: nowrap;
        }
        .ns-sp-code {
          font-family: var(--font-mono, monospace);
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--ns-muted);
          min-width: 1.5em;
          transition: color 160ms ease;
        }
        .ns-sp-code[data-checked] {
          color: var(--foreground);
          font-weight: 700;
        }
        .ns-sp-elev {
          font-family: var(--font-mono, monospace);
          font-size: 0.6875rem;
          color: var(--ns-muted);
          font-variant-numeric: tabular-nums;
        }
        .ns-sp-name {
          font-size: 0.75rem;
          color: var(--ns-muted);
        }
        .ns-sp-datum {
          position: absolute;
          left: 0;
          right: 0;
          top: -1px;
          height: 2px;
          background: var(--foreground);
          pointer-events: none;
          will-change: transform;
        }

        .ns-sp-side {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ns-sp-plan-stack {
          position: relative;
          aspect-ratio: 4 / 3;
          width: 100%;
          border-radius: 8px;
          background: var(--background);
        }
        .ns-sp-plan-overlay {
          position: absolute;
          inset: 0;
        }
        .ns-sp-plan-glyph {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .ns-sp-readout {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 6px 8px;
        }
        .ns-sp-readout-code {
          font-family: var(--font-mono, monospace);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--foreground);
        }
        .ns-sp-readout-elev {
          font-family: var(--font-mono, monospace);
          font-size: 0.75rem;
          color: var(--ns-muted);
        }
        .ns-sp-readout-name {
          font-size: 0.8125rem;
          color: var(--ns-muted);
        }

        @media (prefers-reduced-motion: reduce) {
          .ns-sp-bar {
            transition: none;
          }
          .ns-sp-code {
            transition: none;
          }
        }
      `})]})}function je(){return r.jsx("div",{className:"ns-stage",children:r.jsx(ke,{label:"示例",levels:[{id:"a",label:"示例",elevation:42,height:42},{id:"b",label:"第二项",elevation:18,height:18}],value:"a",defaultValue:"示例",onValueChange:()=>{},name:"示例"})})}export{je as default};
