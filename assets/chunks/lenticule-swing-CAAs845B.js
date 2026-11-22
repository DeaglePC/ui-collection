import{r as d,j as o}from"./client-CsvIHAk3.js";const p=.6,S=9,_=4e3,k=34,D=.55,j=22,T=64,W=.05,L=1.5,I=8.1,z=(L+I)/2,G=(I-L)/2,H=1.2;function X(t){const i=Math.sin(t*12.9898+78.233)*43758.5453;return i-Math.floor(i)}function K(t){return 1-Math.pow(1-t,3)}function Z(t,i,h,u){const g=2*h*Math.sqrt(i);t.v+=(i*(t.t-t.x)-g*t.v)*u,t.x+=t.v*u}function J({messageA:t,messageB:i,snapAt:h=.4,pitch:u=10,className:g=""}){const R=d.useRef(null),y=d.useRef(null),[c,V]=d.useState(j);d.useEffect(()=>{const e=y.current;if(!e)return;const n=l=>{if(l<=0)return;const a=Math.round(l/u);V(Math.min(T,Math.max(j,a)))};n(e.getBoundingClientRect().width);const r=new ResizeObserver(l=>{const a=l[0]?.contentRect.width;a&&n(a)});return r.observe(e),()=>r.disconnect()},[u]);const B=d.useMemo(()=>Array.from({length:c},(e,n)=>({i:n,centered:n-(c-1)/2,jitter:X(n)*2-1})),[c]);return d.useEffect(()=>{const e=R.current;if(!e)return;const n=window.matchMedia("(prefers-reduced-motion: reduce)");let r=n.matches;const l=()=>{r=n.matches};n.addEventListener("change",l);let a=0,m=performance.now(),w=!1;const f={x:-p,v:0,t:-p};let x=m+_,E=Number.NaN,b=null;const O=s=>{s!==E&&(E=s,e.style.setProperty("--lens-angle",String(s)))},$=()=>{const s=e.getBoundingClientRect();return s.height<=0?0:Math.min(1,Math.max(0,-s.top/s.height))},A=()=>{w=document.hidden,w||(m=performance.now())};document.addEventListener("visibilitychange",A);const M=s=>{if(a=requestAnimationFrame(M),w)return;const q=Math.min(.05,(s-m)/1e3);m=s;const N=$();if(r){const v=N>=h;v!==b&&(b=v,O(v?S:-S));return}s>=x&&(f.t=f.t>0?-p:p,x=s+_),Z(f,k,D,q);const C=Math.min(1,N/h),F=K(C)*S,P=1-C;O(Number((F+f.x*P).toFixed(3)))};return a=requestAnimationFrame(M),()=>{cancelAnimationFrame(a),n.removeEventListener("change",l),document.removeEventListener("visibilitychange",A)}},[h]),o.jsxs("div",{ref:R,className:`ns-lens-root ${g}`,style:{"--lens-angle":"-9"},children:[o.jsx("style",{children:Q}),o.jsxs("h1",{className:"sr-only",children:[t," ",i]}),o.jsx("div",{ref:y,className:"ns-lens-stage","aria-hidden":"true",children:B.map(e=>{const n={left:`${e.i/c*100}%`,width:`${100/c}%`,"--i":String(e.centered),"--j":e.jitter.toFixed(3)},r={left:`${-e.i*100}%`,width:`${c*100}%`};return o.jsxs("div",{className:"ns-lens-strip",style:n,children:[o.jsx("div",{className:"ns-lens-window ns-lens-b",style:r,children:i}),o.jsx("div",{className:"ns-lens-window ns-lens-a",style:r,children:t})]},e.i)})})]})}const Q=`
.ns-lens-root{position:relative;width:100%;}
.ns-lens-stage{
  position:relative;
  width:100%;
  height:1.15em;
  font-family:var(--font-sans,inherit);
  font-size:clamp(28px,6vw,64px);
  font-weight:700;
  line-height:1.15;
  letter-spacing:-0.02em;
  color:var(--foreground);
  overflow:hidden;
  user-select:none;
}
.ns-lens-strip{
  position:absolute;
  top:0;
  height:100%;
  overflow:hidden;
}
.ns-lens-window{
  position:absolute;
  top:0;
  height:100%;
  display:flex;
  align-items:center;
  white-space:nowrap;
  will-change:transform,opacity;
  transform:translateX(calc(var(--lens-angle) * var(--i) * ${W}px));
}
/*
  Both windows paint an opaque --background. Without it the crossfade cannot
  work at all: text has a transparent background, so message B stayed fully
  visible through the gaps in and between message A's glyphs no matter what
  opacity A carried, and the two copies composited into permanently unreadable
  garble. Measured A at opacity 1 and B still showing through. With an opaque
  fill, A genuinely occludes B, and fading A is what reveals B — which is also
  what makes the per-strip flip read as a lenticular card instead of a blend.
*/
.ns-lens-window{
  background:var(--background);
}
.ns-lens-b{
  opacity:1;
  z-index:1;
}
.ns-lens-a{
  z-index:2;
  /*
    Each strip fades from fully opaque to fully transparent over a narrow
    CROSSOVER_BAND-wide window centered on ITS OWN crossover angle (spread
    across [CROSSOVER_LO, CROSSOVER_HI] by --j). That keeps most strips
    fully committed to one message at any given angle, so the mid-scroll
    frame reads as a wipe between two legible headlines instead of both
    superimposed at ~50%.
  */
  opacity:clamp(0, calc(0.5 - (var(--lens-angle) - (${z} + var(--j) * ${G})) / ${H}), 1);
}
@media (prefers-reduced-motion: reduce){
  .ns-lens-window{transition:none;}
}
`;function Y(){return o.jsx("div",{className:"ns-stage",children:o.jsx(J,{messageA:"示例",messageB:"示例"})})}export{Y as default};
