import{r as R,j as T}from"./client-CsvIHAk3.js";const S=1e3/30,H=910,Z=900,K=3,ee=5,te=.1,ne=H+60,Y=3;function Q(N){let b=N>>>0||1;return()=>{b=b+1831565813|0;let d=Math.imul(b^b>>>15,1|b);return d=d+Math.imul(d^d>>>7,61|d)^d,((d^d>>>14)>>>0)/4294967296}}const re=`
.ns-fe-field{ position:relative; overflow:hidden; }
.ns-fe-dot{
  position:absolute;
  left:0; top:0;
  border-radius:9999px;
  background:var(--ns-muted);
  will-change:opacity,transform;
}
.ns-fe-flash-a, .ns-fe-flash-b{
  animation-duration:200ms;
  animation-timing-function:cubic-bezier(.22,.7,.32,1);
  animation-fill-mode:none;
}
.ns-fe-flash-a{ animation-name:ns-fe-flash-a; }
.ns-fe-flash-b{ animation-name:ns-fe-flash-b; }
@keyframes ns-fe-flash-a{
  0%{ opacity:var(--ns-fe-rest-o); transform:scale(1); background-color:var(--ns-muted); }
  18%{ opacity:1; transform:scale(1.9); background-color:var(--foreground); }
  100%{ opacity:var(--ns-fe-rest-o); transform:scale(1); background-color:var(--ns-muted); }
}
@keyframes ns-fe-flash-b{
  0%{ opacity:var(--ns-fe-rest-o); transform:scale(1); background-color:var(--ns-muted); }
  18%{ opacity:1; transform:scale(1.9); background-color:var(--foreground); }
  100%{ opacity:var(--ns-fe-rest-o); transform:scale(1); background-color:var(--ns-muted); }
}
@media (prefers-reduced-motion: reduce){
  .ns-fe-flash-a, .ns-fe-flash-b{ animation:none; }
}
`;function se({count:N=350,coupling:b=.03,neighbors:d=12,deafFraction:q=.02,periodMs:D=1250,className:W=""}){const $=R.useRef(null),V=R.useRef([]),[L,G]=R.useState(!1);R.useEffect(()=>{const a=window.matchMedia("(prefers-reduced-motion: reduce)");G(a.matches);const c=M=>G(M.matches);return a.addEventListener("change",c),()=>a.removeEventListener("change",c)},[]);const t=Math.max(24,Math.round(N)),i=Math.max(3,Math.min(t-1,Math.round(d))),F=R.useRef(null);if(!F.current||F.current.n!==t||F.current.k!==i||F.current.deafFraction!==q){const a=Q(1592590337^t^i<<8),c=Array.from({length:t},()=>({xFrac:a(),yFrac:a(),sizePx:K+a()*(ee-K),deaf:!1})),M=Math.max(1,Math.round(t*q)),l=Array.from({length:t},(r,s)=>s);for(let r=l.length-1;r>0;r--){const s=Math.floor(a()*(r+1)),o=l[r];l[r]=l[s],l[s]=o}for(let r=0;r<M;r++)c[l[r]].deaf=!0;const k=new Int32Array(t*i),w=new Int32Array(i),I=new Float32Array(i);for(let r=0;r<t;r++){let s=0,o=-1,m=-1/0;const z=c[r].xFrac,B=c[r].yFrac;for(let f=0;f<t;f++){if(f===r)continue;const u=c[f].xFrac-z,A=c[f].yFrac-B,h=u*u+A*A;if(s<i)w[s]=f,I[s]=h,h>m&&(m=h,o=s),s++;else if(h<m){w[o]=f,I[o]=h,m=-1/0;for(let x=0;x<i;x++){const P=I[x];P>m&&(m=P,o=x)}}}for(let f=0;f<i;f++)k[r*i+f]=w[f]??r}const p=new Uint8Array(t),g=Math.max(1,Math.round(t*.15)),j=Math.floor(a()*t),E=[j];p[j]=1;let O=1,C=0;for(;C<E.length&&O<g;){const r=E[C++];for(let s=0;s<i;s++){const o=k[r*i+s];if(!p[o]&&(p[o]=1,O++,E.push(o),O>=g))break}}F.current={fireflies:c,neighborIdx:k,restOpacity:.55,bandMembers:p,n:t,k:i,deafFraction:q}}const v=F.current;return R.useEffect(()=>{if(L||!$.current)return;const{fireflies:c,neighborIdx:M}=v,l=new Float32Array(t),k=new Float32Array(t),w=new Uint8Array(t),I=new Float64Array(t),p=new Uint8Array(t),g=new Uint8Array(t),j=Q(1592590338^t);for(let n=0;n<t;n++){const y=c[n];w[n]=y.deaf?1:0,l[n]=j();const e=.85+j()*.3,U=Math.max(ne,y.deaf?D*e*.86:D*e);k[n]=S/U}const E=b,O=Math.exp(Y),C=n=>Math.log(1+(O-1)*n)/Y,r=n=>(Math.exp(Y*n)-1)/(O-1),s=[],o=[];let m=-1/0;const z=Math.max(6,Math.round(t*.06)),B=(n,y)=>{I[n]=y+H;const e=V.current[n];e&&(e.classList.remove("ns-fe-flash-a","ns-fe-flash-b"),e.classList.add(p[n]?"ns-fe-flash-b":"ns-fe-flash-a"),p[n]=p[n]?0:1)},f=n=>{for(let e=0;e<t;e++)l[e]+=k[e];g.fill(0),s.length=0,o.length=0;for(let e=0;e<t;e++)l[e]>=1&&!g[e]&&(g[e]=1,s.push(e));let y=0;for(;y<s.length;){const e=s[y++];l[e]=0,n>=I[e]&&o.push(e);const U=e*i;for(let X=0;X<i;X++){const _=M[U+X];if(w[_])continue;const J=C(Math.min(1,l[_]))+E;J>=1?g[_]||(g[_]=1,s.push(_)):l[_]=r(J)}}if(o.length!==0){if(o.length>z){if(n-m<Z)return;m=n}for(let e=0;e<o.length;e++)B(o[e],n)}};let u=0,A=0,h=0;const x=n=>{const y=A?Math.min(200,n-A):S;for(A=n,h+=y;h>=S;)f(n),h-=S;u=requestAnimationFrame(x)},P=()=>{document.hidden?(u&&cancelAnimationFrame(u),u=0):u||(A=0,h=0,u=requestAnimationFrame(x))};return u=requestAnimationFrame(x),document.addEventListener("visibilitychange",P),()=>{u&&cancelAnimationFrame(u),document.removeEventListener("visibilitychange",P)}},[L,t,i,b,D,v]),T.jsxs("div",{ref:$,className:`ns-fe-field block h-full w-full ${W}`,children:[T.jsx("style",{children:re}),T.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0",children:v.fireflies.map((a,c)=>{const M=L&&v.bandMembers[c]?v.restOpacity+te:v.restOpacity;return T.jsx("div",{ref:l=>{V.current[c]=l},className:"ns-fe-dot",style:{left:`${a.xFrac*100}%`,top:`${a.yFrac*100}%`,width:a.sizePx,height:a.sizePx,marginLeft:-a.sizePx/2,marginTop:-a.sizePx/2,opacity:M,"--ns-fe-rest-o":v.restOpacity}},c)})})]})}function oe(){return T.jsx("div",{className:"ns-stage",children:T.jsx(se,{})})}export{oe as default};
