import{r as g,j as l}from"./client-CsvIHAk3.js";const h=[-3.4,-13.6,-12.6,-4.1,2.9,2.4,-3.6,-6.3,-.1,10.1,16.4,11.2],f=h.length,q=5,p=f*q;function k(e,t,o,a,n){const s=n*n,c=s*n;return .5*(2*t+(-e+o)*n+(2*e-5*t+4*o-a)*s+(-e+3*t-3*o+a)*c)}function C(){const e=[];for(let t=0;t<f;t++){const o=h[(t-1+f)%f],a=h[t],n=h[(t+1)%f],s=h[(t+2)%f];for(let c=0;c<q;c++){const _=c/q;e.push(k(o,a,n,s,_))}}return e}const r=C(),I=r.reduce((e,t)=>Math.max(e,Math.abs(t)),0);let N=0,R=1/0;for(let e=0;e<r.length;e++){const t=r[e];t<R&&(R=t,N=e)}const m=64,G=m/2,F=m/2,L=14,w=8/I,X=(()=>{let e="";for(let t=0;t<p;t++){const o=t/p*Math.PI*2-Math.PI/2,a=L+r[t]*w,n=G+Math.cos(o)*a,s=F+Math.sin(o)*a;e+=t===0?`M ${n.toFixed(2)} ${s.toFixed(2)}`:` L ${n.toFixed(2)} ${s.toFixed(2)}`}return`${e} Z`})(),$=11e3,U=22,B=400,P=28,D=Math.round(P*.5);function K({className:e=""}){const t=g.useRef(null),o=g.useRef(null),a=g.useRef(null);return g.useEffect(()=>{const n=t.current,s=o.current,c=a.current;if(!n||!s||!c)return;const _=window.matchMedia("(prefers-reduced-motion: reduce)").matches,b=i=>{const u=Math.floor(i)%p,A=(u+1)%p,v=i-Math.floor(i);return r[u]+(r[A]-r[u])*v},y=i=>{const u=i/I*U;c.style.left=`${50+u}%`},j=()=>{s.style.animation="none",s.offsetWidth,s.style.animation=`ns-eqcam-pulse ${B}ms ease-out`};if(_){y(r[N]);return}let d=0,x=!0,M=0,T=Math.sign(r[0])||1;const S=i=>{if(d=0,!x)return;M===0&&(M=i);const v=(i-M)%$/$*p,E=b(v);y(E);const H=E===0?T:Math.sign(E);H!==T&&j(),T=H,d=requestAnimationFrame(S)},O=new IntersectionObserver(i=>{x=i[0]?.isIntersecting??!0,x&&!d&&(d=requestAnimationFrame(S))});return O.observe(n),()=>{cancelAnimationFrame(d),O.disconnect()}},[]),l.jsxs("div",{ref:t,role:"separator","aria-orientation":"horizontal","data-eqcam":!0,className:`ns-eqcam relative w-full ${e}`,style:{height:P},children:[l.jsx("style",{children:`
.ns-eqcam{ display:flex; align-items:center; }
.ns-eqcam-line{
  position:relative;
  width:100%;
  height:1px;
  background:var(--foreground);
  opacity:0.35;
}
.ns-eqcam-tick{
  position:absolute;
  top:50%;
  width:1px;
  height:${D}px;
  background:var(--foreground);
  opacity:0.9;
  transform:translate(-50%, -50%);
  left:50%;
}
.ns-eqcam-ghost{
  position:absolute;
  left:50%;
  top:50%;
  width:${m}px;
  height:${m}px;
  transform:translate(-50%, -50%);
  opacity:0;
  pointer-events:none;
  transition:opacity 300ms ease;
}
.ns-eqcam:hover .ns-eqcam-ghost{ opacity:0.18; }
@keyframes ns-eqcam-pulse{
  0%{ opacity:0.43; }
  100%{ opacity:0.35; }
}
@media (prefers-reduced-motion: reduce){
  .ns-eqcam-line{ animation:none!important; }
  .ns-eqcam-ghost{ transition:none!important; }
}
`}),l.jsx("div",{ref:o,className:"ns-eqcam-line","aria-hidden":"true"}),l.jsx("div",{ref:a,className:"ns-eqcam-tick","aria-hidden":"true"}),l.jsx("svg",{className:"ns-eqcam-ghost",viewBox:`0 0 ${m} ${m}`,"aria-hidden":"true",focusable:"false",children:l.jsx("path",{d:X,fill:"none",stroke:"var(--foreground)",strokeWidth:1})})]})}function W(){return l.jsx("div",{className:"ns-stage",children:l.jsx(K,{})})}export{W as default};
