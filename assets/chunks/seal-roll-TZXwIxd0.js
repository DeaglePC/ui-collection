import{r as s,j as e}from"./client-CsvIHAk3.js";const ee=[{quote:"We moved our whole onboarding flow over in a week. The thing that convinced the team was how little custom CSS it took to make it feel like ours.",author:"Priya Nair",role:"VP Engineering, Fathom"},{quote:"Shipped a working demo before lunch. That never happens.",author:"Marcus Ohl",role:"Founder, Driftwood"},{quote:"Every component reads its own theme tokens, so dark mode just worked the day we flipped the switch. No follow-up ticket, which is rare enough that I remember it.",author:"Elena Voss",role:"Design Lead, Northbound"},{quote:"Fast, honest docs, and the demos actually match the shipped behavior.",author:"Aiyana Redcloud",role:"Product, Kestrel"}],u=76,d=46,X=d/2,z=260,E=800,de=.22;function O(t){return t<0?0:t>1?1:t}function W(t,o,p){return t+(o-t)*p}function te(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}function H(t){return t*180/Math.PI}function ue(){const[t,o]=s.useState(!1);return s.useEffect(()=>{const p=window.matchMedia("(prefers-reduced-motion: reduce)");o(p.matches);const k=()=>o(p.matches);return p.addEventListener("change",k),()=>p.removeEventListener("change",k)},[]),t}function se(t){const o=Math.sin(t*12.9898+7.233)*43758.5453;return o-Math.floor(o)}function pe({seed:t,clipId:o}){const j=u/6,f=d/4,h=[];for(let a=0;a<4;a++){const P=a%2===1;for(let i=0;i<6;i++){const v=se(a*6+i+t*97),m=j*(.35+v*.4),q=i*j+(j-m)/(P?1.6:2.2),I=a*f+f*.28;h.push(e.jsx("rect",{x:P?u-q-m:q,y:I,width:m,height:Math.max(1.4,f*.3),rx:.8,fill:"var(--foreground)"},`${a}-${i}`))}}return e.jsx("g",{clipPath:`url(#${o})`,opacity:.2,children:h})}function me({seed:t}){const o=s.useId();return e.jsxs("svg",{width:u,height:d,viewBox:`0 0 ${u} ${d}`,className:"ns-seal-barrel-svg","aria-hidden":"true",focusable:"false",children:[e.jsx("defs",{children:e.jsx("clipPath",{id:o,children:e.jsx("rect",{x:1,y:1,width:u-2,height:d-2,rx:d/2-1})})}),e.jsx("rect",{x:1,y:1,width:u-2,height:d-2,rx:d/2-1,fill:"var(--background)",stroke:"var(--border)",strokeWidth:1.5}),e.jsx(pe,{seed:t,clipId:o}),e.jsx("line",{x1:u/2,y1:3,x2:u/2,y2:d-3,stroke:"var(--ns-muted)",strokeWidth:1,opacity:.5})]})}function fe({items:t=ee,rollMs:o=4e3,dwellMs:p=2200,className:k="","aria-label":j="Testimonials"}){const f=Math.max(1,t.length),h=ue(),[a,P]=s.useState(0),[i,v]=s.useState("rolling"),[m,q]=s.useState(!1),[I,U]=s.useState(!1),[ne,V]=s.useState(!1),G=m||I||ne,R=t[a%f]??ee[0],K=s.useMemo(()=>R.quote.trim().split(/\s+/),[R.quote]),B=s.useRef(null),J=s.useRef(null),D=s.useRef(null),w=s.useRef([]),A=s.useRef(null),y=s.useCallback(n=>{P((n%f+f)%f)},[f]),ae=s.useCallback(()=>y(a-1),[y,a]),re=s.useCallback(()=>y(a+1),[y,a]),oe=s.useCallback(()=>{const n=!m;n&&i==="rolling"&&A.current&&A.current(),q(n)},[m,i]),Q=s.useCallback(()=>{const n=B.current?.clientWidth??320;return{x0:-u,x1:Math.max(0,n-u)}},[]);return s.useLayoutEffect(()=>{let n=0,l=!1,b=!1;if(h)return w.current.forEach(r=>r?.setAttribute("data-revealed","true")),v("stamped"),()=>{b=!0};v("rolling");const{x0:T,x1:g}=Q(),c=D.current;c&&(c.style.transition="none",c.style.opacity="1",c.style.transform=`translateX(${T}px) translateY(0px) rotate(0deg)`);const $=J.current?.clientWidth||B.current?.clientWidth||320,N=w.current.map(r=>r?r.offsetTop*$+r.offsetLeft:0),S=w.current.reduce((r,x)=>x?Math.max(r,x.offsetTop*$+x.offsetLeft+x.offsetWidth):r,1),M=(r,x)=>{w.current.forEach(L=>L?.setAttribute("data-revealed","true")),c&&(c.style.transition=`transform ${z}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${z}ms ease`,c.style.transform=`translateX(${r}px) translateY(-12px) rotate(${x}deg)`,c.style.opacity="0"),window.setTimeout(()=>{b||v("stamped")},z)};A.current=()=>{l||(l=!0,cancelAnimationFrame(n),M(g,H(g/X)))};const F=performance.now(),C=r=>{if(l)return;const x=O((r-F)/o),L=te(x),Y=W(T,g,L),Z=H(Y/X);c&&(c.style.transform=`translateX(${Y}px) translateY(0px) rotate(${Z}deg)`);const ie=L*S;N.forEach((le,ce)=>{if(le<=ie){const _=w.current[ce];_&&!_.hasAttribute("data-revealed")&&_.setAttribute("data-revealed","true")}}),x<1?n=requestAnimationFrame(C):(l=!0,M(Y,Z))};return n=requestAnimationFrame(C),()=>{b=!0,l=!0,cancelAnimationFrame(n),A.current=null}},[a,h]),s.useEffect(()=>{if(i!=="stamped"||G)return;const n=window.setTimeout(()=>v("clearing"),p);return()=>window.clearTimeout(n)},[i,G,p]),s.useEffect(()=>{if(i!=="clearing")return;if(h){const N=window.setTimeout(()=>y(a+1),0);return()=>window.clearTimeout(N)}let n=0,l=!1;const{x0:b,x1:T}=Q(),g=D.current,c=performance.now(),$=N=>{if(l)return;const S=O((N-c)/E),M=te(S),F=W(T,b,M),C=H(F/X),r=O(S/de);g&&(g.style.transition="none",g.style.opacity=String(W(0,1,r)),g.style.transform=`translateX(${F}px) translateY(${W(-12,0,r)}px) rotate(${C}deg)`),S<1?n=requestAnimationFrame($):y(a+1)};return n=requestAnimationFrame($),()=>{l=!0,cancelAnimationFrame(n)}},[i,h]),e.jsxs("div",{className:`ns-seal-root ${k}`,"data-reduced":h||void 0,role:"region","aria-label":j,onPointerEnter:()=>U(!0),onPointerLeave:()=>U(!1),onFocus:()=>V(!0),onBlur:n=>{n.currentTarget.contains(n.relatedTarget)||V(!1)},children:[e.jsx("style",{children:he}),e.jsxs("div",{className:"ns-seal-card",children:[e.jsxs("div",{className:"ns-seal-stage",ref:B,children:[!h&&e.jsx("div",{className:"ns-seal-barrel-wrap",ref:D,"aria-hidden":"true",children:e.jsx(me,{seed:se(a)})}),e.jsx("blockquote",{className:"ns-seal-quote",ref:J,"data-phase":i,children:K.map((n,l)=>e.jsxs(s.Fragment,{children:[e.jsx("span",{ref:b=>{w.current[l]=b},className:"ns-seal-word",children:n}),l<K.length-1?" ":""]},`${a}-${l}`))})]}),e.jsxs("footer",{className:"ns-seal-impression","data-phase":i,"data-seal-attribution":"",children:[e.jsx("cite",{className:"ns-seal-cite",children:R.author}),R.role?e.jsxs("span",{className:"ns-seal-role",children:[", ",R.role]}):null]})]}),e.jsxs("div",{className:"ns-seal-controls",children:[e.jsx("button",{type:"button",className:"ns-seal-btn",onClick:ae,"aria-label":"Previous testimonial",children:"Prev"}),e.jsx("button",{type:"button",className:"ns-seal-btn",onClick:re,"aria-label":"Next testimonial",children:"Next"}),e.jsx("button",{type:"button",className:"ns-seal-btn",onClick:oe,"aria-pressed":m,"aria-label":m?"Resume testimonial rotation":"Pause testimonial rotation","data-seal-pause":"",children:m?"Resume":"Pause"})]})]})}const he=`
.ns-seal-root {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  max-width: 560px;
  font-family: var(--font-sans, ui-sans-serif, system-ui);
  color: var(--foreground);
}
.ns-seal-card {
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--background);
  padding: 28px 24px 20px;
}
.ns-seal-stage {
  position: relative;
  overflow: hidden;
  padding-top: ${d+16}px;
  min-height: 116px;
}
.ns-seal-barrel-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: ${u}px;
  height: ${d}px;
  pointer-events: none;
  will-change: transform;
}
.ns-seal-barrel-svg {
  display: block;
}
.ns-seal-quote {
  margin: 0;
  padding: 0;
  border: none;
  position: relative;
  font-size: 1.05rem;
  line-height: 1.55;
  font-weight: 500;
}
.ns-seal-word {
  display: inline-block;
  opacity: 0;
  color: var(--foreground);
  border-radius: 3px;
  padding: 0 1px;
}
.ns-seal-word[data-revealed] {
  opacity: 1;
  animation: ns-seal-press 400ms ease-out both;
}
.ns-seal-quote[data-phase="clearing"] {
  filter: blur(6px);
  opacity: 0;
  transition: filter ${E}ms ease-in, opacity ${E}ms ease-in;
}
@keyframes ns-seal-press {
  0% {
    text-shadow: 0 1px 0 var(--background);
    background-color: color-mix(in oklab, var(--ns-muted) 45%, transparent);
  }
  100% {
    text-shadow: none;
    background-color: transparent;
  }
}
.ns-seal-impression {
  margin-top: 16px;
  font-family: var(--font-mono, ui-monospace, monospace);
  font-size: 0.8rem;
  color: var(--ns-muted);
}
.ns-seal-cite {
  font-style: normal;
  color: var(--foreground);
  opacity: 0;
  transform: translateY(4px);
  display: inline-block;
  transition: opacity 300ms ease, transform 300ms ease;
}
.ns-seal-role {
  opacity: 0;
  transition: opacity 300ms ease;
}
.ns-seal-impression[data-phase="stamped"] .ns-seal-cite,
.ns-seal-impression[data-phase="clearing"] .ns-seal-cite {
  opacity: 1;
  transform: translateY(0);
}
.ns-seal-impression[data-phase="stamped"] .ns-seal-role,
.ns-seal-impression[data-phase="clearing"] .ns-seal-role {
  opacity: 1;
}
.ns-seal-impression[data-phase="clearing"] {
  filter: blur(6px);
  opacity: 0;
  transition: filter ${E}ms ease-in, opacity ${E}ms ease-in;
}
.ns-seal-impression[data-phase="clearing"] .ns-seal-cite,
.ns-seal-impression[data-phase="clearing"] .ns-seal-role {
  transition: none;
}
.ns-seal-controls {
  display: flex;
  gap: 8px;
}
.ns-seal-btn {
  border: 1px solid var(--border);
  background: var(--background);
  color: var(--foreground);
  border-radius: 6px;
  padding: 6px 12px;
  font-family: var(--font-mono, ui-monospace, monospace);
  font-size: 0.78rem;
  cursor: pointer;
  transition: background-color 150ms ease, border-color 150ms ease;
  outline: none;
}
.ns-seal-btn:hover {
  border-color: var(--ns-muted);
  background: color-mix(in oklab, var(--foreground) 4%, transparent);
}
.ns-seal-btn:focus-visible {
  outline: 2px solid var(--ns-accent);
  outline-offset: 2px;
}
.ns-seal-btn[aria-pressed="true"] {
  border-color: var(--foreground);
}

.ns-seal-root[data-reduced] .ns-seal-word {
  animation: none !important;
  transition: none !important;
}
.ns-seal-root[data-reduced] .ns-seal-quote,
.ns-seal-root[data-reduced] .ns-seal-impression,
.ns-seal-root[data-reduced] .ns-seal-cite,
.ns-seal-root[data-reduced] .ns-seal-role {
  transition: none !important;
  filter: none !important;
}

@media (prefers-reduced-motion: reduce) {
  .ns-seal-word {
    animation: none !important;
  }
  .ns-seal-quote,
  .ns-seal-impression,
  .ns-seal-cite,
  .ns-seal-role,
  .ns-seal-btn {
    transition: none !important;
    filter: none !important;
  }
}
`;function ge(){return e.jsx("div",{className:"ns-stage",children:e.jsx(fe,{})})}export{ge as default};
