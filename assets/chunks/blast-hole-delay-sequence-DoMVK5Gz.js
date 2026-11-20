import{r as h,j as a}from"./client-CsvIHAk3.js";const F=6,O=9,T=32,j=900,d=80,y=120,z=600,G=d+y+z,R=2e3,g=250,L=d+y/2,k=.38;function D(e){const o=Math.round(e/T);return Math.min(O,Math.max(F,o))}function H(e){const o=1-e;return 1-o*o*o}function B(e){return e*e*e}function $(e){if(e<0)return{fire:0,spent:0};if(e<d)return{fire:H(e/d),spent:0};if(e<d+y)return{fire:1,spent:0};if(e<G){const o=B((e-d-y)/z);return{fire:1-o,spent:o}}return{fire:0,spent:1}}function q({className:e="","aria-label":o="Blast round delay sequence"}){const x=h.useRef(null),E=h.useRef([]),[c,C]=h.useState(F);h.useEffect(()=>{const u=x.current;if(!u)return;const r=new ResizeObserver(l=>{const i=l[0];if(!i)return;const f=i.contentBoxSize?.[0],p=f?f.inlineSize:i.contentRect.width,b=f?f.blockSize:i.contentRect.height;C(D(Math.min(p,b)))});return r.observe(u),()=>r.disconnect()},[]),h.useEffect(()=>{const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=E.current.slice(0,c),l=c*j,i=l+R+c*g,f=n=>{for(let t=0;t<r.length;t++){const s=r[t];if(!s)continue;const N=t*j,v=l+R+t*g;let P=0,m;if(n<l+R){const _=$(n-N);P=_.fire,m=_.spent}else n<v?m=1:n<v+g?m=1-(n-v)/g:m=0;s.style.setProperty("--fire",P.toFixed(4)),s.style.setProperty("--spent",m.toFixed(4))}};if(u){const n=Math.min(3,c-1);for(let t=0;t<r.length;t++){const s=r[t];s&&(t<n?(s.style.setProperty("--fire","0"),s.style.setProperty("--spent","1")):t===n?(s.style.setProperty("--fire","1"),s.style.setProperty("--spent","0")):(s.style.setProperty("--fire","0"),s.style.setProperty("--spent","0")))}return}let p=0,b=!0;const I=performance.now()-L,w=n=>{if(b){const t=(n-I)%i;f(t<0?t+i:t)}p=requestAnimationFrame(w)},S=new IntersectionObserver(n=>{b=n[0]?.isIntersecting??!0},{threshold:0}),A=x.current;return A&&S.observe(A),p=requestAnimationFrame(w),()=>{cancelAnimationFrame(p),S.disconnect()}},[c]);const M=Array.from({length:c});return a.jsxs("div",{ref:x,role:"img","aria-label":o,className:`relative flex items-center justify-center overflow-hidden bg-background p-[6%] ${e}`,children:[a.jsx("style",{children:`
.ns-bhds-grid{
  display: grid;
  gap: 12%;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  max-width: 100%;
  max-height: 100%;
}
.ns-bhds-row{
  display: contents;
}
.ns-bhds-cell{
  position: relative;
  border-radius: 999px;
  background-color: color-mix(
    in oklch,
    var(--ns-muted),
    var(--foreground) calc(var(--fire, 0) * 100%)
  );
  filter: brightness(calc(1 - var(--spent, 0) * ${1-k}));
  box-shadow: 0 0 calc(var(--fire, 0) * 18%)
    color-mix(in srgb, var(--foreground) calc(var(--fire, 0) * 60%), transparent);
  transition: filter 60ms linear;
}
.ns-bhds-cell::after{
  content: "";
  position: absolute;
  inset: 22%;
  border-radius: 999px;
  background: color-mix(in srgb, var(--background) calc(38% - var(--fire, 0) * 30%), transparent);
}
`}),a.jsx("div",{className:"ns-bhds-grid",style:{gridTemplateColumns:`repeat(${c}, 1fr)`,gridTemplateRows:`repeat(${c}, 1fr)`},children:M.map((u,r)=>a.jsx("div",{ref:l=>{E.current[r]=l},className:"ns-bhds-row",style:{gridRow:r+1},children:M.map((l,i)=>a.jsx("div",{className:"ns-bhds-cell",style:{gridRow:r+1,gridColumn:i+1}},i))},r))})]})}function X(){return a.jsx("div",{className:"ns-stage",children:a.jsx(q,{})})}export{X as default};
