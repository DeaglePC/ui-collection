import{r as g,j as f}from"./client-CsvIHAk3.js";const n=220,de=.7,Xe=1.2,_e=n*1.2,Ue=.85,Be=.38,ae=44,Se=[{x:34,y:26},{x:-30,y:16},{x:0,y:0}],b=(w,L,C)=>Math.min(C,Math.max(L,w)),Ke=w=>1-(1-w)**3;function Fe(w){return`polygon(${w.map(([L,C])=>`${L.toFixed(1)}px ${C.toFixed(1)}px`).join(", ")})`}function Ze({demo:w=!1,className:L="","aria-label":C="Peel sticker — drag a corner, or press and hold Space"}){const pe=g.useRef(null),ue=g.useRef(null),fe=g.useRef(null),xe=g.useRef(null),ge=g.useRef(null),he=g.useRef(null),y=g.useRef(null),ie=g.useRef(!1),[Te,je]=g.useState(""),[Ee,I]=g.useState(!1),M=g.useCallback(s=>{ie.current=!ie.current,je(s+(ie.current?"​":""))},[]);return g.useEffect(()=>{const s=pe.current,R=ue.current,Y=fe.current,E=xe.current,S=ge.current,m=he.current;if(!s||!R||!Y||!E||!S||!m)return;const k=window.matchMedia("(prefers-reduced-motion: reduce)");let A=k.matches;const be=()=>{A=k.matches};k.addEventListener("change",be);let x="stuck",a=0,$={kx:1,ky:1},F=0,T=0,O=0,X=0,me=!1,i=null,q=0,_=0,le=0,U=0,B=0,v=!1,p=null,ye=0,u=null,j=1,d=null,Z=0,z=0,H=0,K=-1,ve=!1,G=0;const Q=new Set,Ae=(e,t)=>{const o=window.setTimeout(()=>{Q.delete(o),e()},t);Q.add(o)},V=()=>{const{kx:e,ky:t}=$,o=e?t?135:45:t?225:315;m.style.setProperty("--dp-flap-angle",`${o}deg`)},W=e=>{const t=b(e,0,1),{kx:o,ky:r}=$,c=(N,D)=>[o?N:n-N,r?D:n-D],h=t>.01;if(h!==me&&(me=h,R.classList.toggle("ns-dp-peeling",h)),t<=.004){E.style.clipPath="",S.style.backgroundImage="",m.style.opacity="0";return}const l=2*n*(1-t);let ne,re;l>n?(ne=[[0,0],[n,0],[n,l-n],[l-n,n],[0,n]],re=[[n,l-n],[n,n],[l-n,n]]):l>.5?(ne=[[0,0],[l,0],[0,l]],re=[[l,0],[n,0],[n,n],[0,n],[0,l]]):(ne=[[0,0],[.1,0],[0,.1]],re=[[0,0],[n,0],[n,n],[0,n]]),E.style.clipPath=Fe(ne.map(([N,D])=>c(N,D))),m.style.clipPath=Fe(re.map(([N,D])=>c(N,D))),m.style.opacity="1";const se=o?1:-1,oe=r?1:-1,Ne=o?0:n,De=r?0:n,Re=l-Ne-De,$e=-se*oe,Le=se*oe*(10+42*t),Ce=o?l/2:n-l/2,Ie=r?l/2:n-l/2;m.style.transformOrigin=`${Ce.toFixed(1)}px ${Ie.toFixed(1)}px`,m.style.transform=`matrix(0, ${$e}, ${$e}, 0, ${(se*Re).toFixed(2)}, ${(oe*Re).toFixed(2)}) rotate3d(${se}, ${-oe}, 0, ${Le.toFixed(2)}deg)`;const Ye=o?n:0,Oe=r?n:0,Pe=Math.SQRT2*n*t;S.style.backgroundImage=`radial-gradient(circle at ${Ye}px ${Oe}px, rgba(0,0,0,0.36) ${(Pe*.9).toFixed(1)}px, rgba(0,0,0,0) ${(Pe*1.3).toFixed(1)}px)`},J=()=>{R.style.transform=`translate3d(${(F+Z).toFixed(2)}px, ${(T+z).toFixed(2)}px, 0) rotateY(${U.toFixed(2)}deg) rotateZ(${(B+H).toFixed(2)}deg) scale(${j.toFixed(3)})`},ee=()=>{const e=b(a,0,1);let t=10+e*12,o=24+e*26,r=.38-e*.06;d&&(t=28,o=52,r=.24),o+=30*G,r+=.12*G,Y.style.boxShadow=`0 ${t.toFixed(1)}px ${o.toFixed(1)}px rgba(0,0,0,${r.toFixed(3)})`},ce=e=>{if(p=null,x="restick",A){a=0,x="stuck",W(0),J(),ee(),e||M("Re-stuck");return}u={q:a,v:0,silent:e},P()},te=(e,t)=>{p=null;const o=b(e.x,-ae,ae),r=b(e.y,-ae,ae);if(t||M("Torn free"),A){F=o,T=r,a=0,Z=0,z=0,H=0,x="stuck",W(0),J(),ee(),t||Ae(()=>M("Re-adhered"),350);return}x="flutter",d={t:0,sx:F,sy:T,tx:o,ty:r,p0:b(a,0,1),silent:t},P()},ke=e=>{O=0;const t=X?Math.min(.05,(e-X)/1e3):1/60;X=e;let o=!1;if(i){const r=Math.hypot(i.px-i.cx,i.py-i.cy);a=b(r/_e,0,1),q*=Math.exp(-5*t),_*=Math.exp(-5*t),o=!0}if(v&&(a=b(a+t/Xe,0,1),a>=1&&(v=!1,I(!1),te({x:F+8,y:T+30},!1)),o=!0),p){if(a=A?p.target:Math.min(p.target,a+p.rate*t),a>=p.target-1e-4){if(p.releaseAt===0)p.releaseAt=e+(A?600:150);else if(e>=p.releaseAt){const r=p.target;if(p=null,r>=de){const c=Se[ye%Se.length];ye+=1,te({x:c.x,y:c.y},!0)}else ce(!0)}}o=!0}if(A)U=0,B=0;else{const c=i||v||p?-4*b(a,0,1)*($.kx?1:-1):0,h=b(q*.018,-12,12)+c,l=b(q*.008-_*.008,-8,8);U+=(h-U)*Math.min(1,t*9),B+=(l-B)*Math.min(1,t*9),(Math.abs(U)>.03||Math.abs(B)>.03)&&(o=!0)}if(u){const h=.84*Math.sqrt(210);if(u.v+=(-210*u.q-h*u.v)*t,u.q+=u.v*t,a=Math.max(0,u.q),j=u.q<0?1+Math.min(.05,-u.q*.35):1,Math.abs(u.q)<.004&&Math.abs(u.v)<.03){const l=u.silent;u=null,j=1,a=0,x="stuck",l||M("Re-stuck")}else o=!0}if(d){d.t+=t;const r=b(d.t/Ue,0,1),c=Ke(r);if(Z=(d.tx-d.sx)*c+Math.sin(d.t*9)*9*(1-r),z=(d.ty-d.sy)*c,H=16*Math.exp(-2.2*d.t)*Math.sin(d.t*9.5),a=d.p0*(1-c),r>=1){F=d.tx,T=d.ty;const h=d.silent;d=null,Z=0,z=0,H=0,a=0,x="resettle",K=0,ve=h}o=!0}if(K>=0){K+=t;const r=b(K/Be,0,1);G=Math.sin(Math.PI*r),j=1+.045*Math.sin(Math.PI*r),r>=1&&(K=-1,G=0,j=1,x="stuck",ve||M("Re-adhered")),o=!0}W(a),J(),ee(),o?O=requestAnimationFrame(ke):X=0},P=()=>{O||(X=0,O=requestAnimationFrame(ke))},we=()=>{const e=s.getBoundingClientRect();return{x:e.left+e.width/2,y:e.top+e.height/2}},qe={pointerDown(e,t,o){if(x==="flutter"||x==="resettle")return;p=null,u=null,j=1;const r=we(),c=r.x+F,h=r.y+T;$={kx:e>=c?1:0,ky:t>=h?1:0},V(),i={id:o,px:e,py:t,cx:c+($.kx?n/2:-n/2),cy:h+($.ky?n/2:-n/2)},q=0,_=0,le=performance.now(),v=!1,x="peeling",I(!0),M("Peeling"),P()},pointerMove(e,t,o){if(!i||i.id!==o)return;const r=performance.now(),c=Math.max(1,r-le)/1e3;q+=((e-i.px)/c-q)*.4,_+=((t-i.py)/c-_)*.4,le=r,i.px=e,i.py=t,P()},pointerUp(e,t,o){if(!(!i||i.id!==o)){if(i=null,I(!1),a>=de){const r=we();te({x:e-r.x,y:t-r.y},!1)}else ce(!1);P()}},holdStart(){v||i||x==="flutter"||x==="resettle"||(p=null,u=null,j=1,$={kx:1,ky:1},V(),v=!0,x="peeling",I(!0),M("Peeling"),P())},holdEnd(){v&&(v=!1,I(!1),a>=de?te({x:F+8,y:T+30},!1):ce(!1))},autoPeel(e,t){return i||v||x!=="stuck"?!1:($={kx:1,ky:1},V(),x="peeling",p={target:e,rate:e/(t/1e3),releaseAt:0},P(),!0)},userActive:()=>!!(i||v)};y.current=qe;const Me=()=>{document.hidden||P()};return document.addEventListener("visibilitychange",Me),V(),W(0),J(),ee(),()=>{cancelAnimationFrame(O),k.removeEventListener("change",be),document.removeEventListener("visibilitychange",Me),Q.forEach(e=>window.clearTimeout(e)),Q.clear(),y.current=null}},[M]),g.useEffect(()=>{if(!w)return;let s=!0,R;const Y=[{target:.42,ramp:800,wait:2400},{target:.92,ramp:900,wait:3400}];let E=0;const S=()=>{if(!s)return;const m=y.current,k=Y[E%Y.length];m&&!m.userActive()&&m.autoPeel(k.target,k.ramp)?(E+=1,R=window.setTimeout(S,k.ramp+k.wait)):R=window.setTimeout(S,900)};return R=window.setTimeout(S,1e3),()=>{s=!1,window.clearTimeout(R)}},[w]),f.jsxs("div",{ref:pe,role:"button",tabIndex:0,"aria-label":C,className:`ns-dp-root ${Ee?"ns-dp-grabbing":""} ${L}`,onPointerDown:s=>{s.currentTarget.setPointerCapture(s.pointerId),y.current?.pointerDown(s.clientX,s.clientY,s.pointerId)},onPointerMove:s=>y.current?.pointerMove(s.clientX,s.clientY,s.pointerId),onPointerUp:s=>y.current?.pointerUp(s.clientX,s.clientY,s.pointerId),onPointerCancel:s=>y.current?.pointerUp(s.clientX,s.clientY,s.pointerId),onKeyDown:s=>{(s.key===" "||s.code==="Space")&&(s.preventDefault(),s.repeat||y.current?.holdStart())},onKeyUp:s=>{(s.key===" "||s.code==="Space")&&(s.preventDefault(),y.current?.holdEnd())},onBlur:()=>y.current?.holdEnd(),children:[f.jsx("style",{children:ze}),f.jsx("span",{role:"status","aria-live":"polite","aria-atomic":"true",className:"sr-only",children:Te}),f.jsxs("div",{ref:ue,className:"ns-dp-wrap","aria-hidden":"true",children:[f.jsx("div",{ref:fe,className:"ns-dp-shadow"}),f.jsxs("div",{ref:xe,className:"ns-dp-front",children:[f.jsx("div",{className:"ns-dp-gloss"}),f.jsx("div",{className:"ns-dp-dots"}),f.jsx("div",{className:"ns-dp-art",children:f.jsx("svg",{width:"110",height:"110",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:f.jsx("path",{d:"M13 2 L4 14 H11 L10 22 L20 9 H12.5 Z",fill:"var(--background)",fillOpacity:"0.92",stroke:"rgba(0,0,0,0.25)",strokeWidth:"0.4",strokeLinejoin:"round"})})}),f.jsx("div",{ref:ge,className:"ns-dp-cast"})]}),f.jsx("div",{ref:he,className:"ns-dp-flap",children:f.jsx("div",{className:"ns-dp-sheen"})})]})]})}const ze=`
.ns-dp-root{
  position:relative;
  width:320px;height:320px;
  display:flex;align-items:center;justify-content:center;
  border-radius:16px;
  border:1px solid var(--border);
  background:color-mix(in srgb, var(--foreground) 3%, var(--background));
  box-shadow:0 6px 20px rgba(0,0,0,0.25);
  cursor:grab;
  touch-action:none;
  user-select:none;
  -webkit-user-select:none;
  perspective:900px;
  overflow:hidden;
  transition:border-color .18s ease, box-shadow .18s ease, transform .18s cubic-bezier(0.16,1,0.3,1);
}
.ns-dp-root:hover{
  transform:translateY(-3px);
  border-color:color-mix(in srgb, var(--foreground) 30%, var(--border));
  box-shadow:0 18px 44px rgba(0,0,0,0.5);
}
.ns-dp-root:focus-visible{outline:2px solid var(--ns-accent);outline-offset:4px;}
.ns-dp-root.ns-dp-grabbing{cursor:grabbing;}
.ns-dp-wrap{
  position:relative;width:220px;height:220px;
  transform-style:preserve-3d;
  pointer-events:none;
  will-change:transform;
}
.ns-dp-shadow{position:absolute;inset:8px;border-radius:16px;}
.ns-dp-front{
  position:absolute;inset:0;border-radius:16px;
  background:var(--ns-accent);
  border:7px solid color-mix(in srgb, var(--foreground) 90%, var(--background));
  will-change:clip-path;
}
.ns-dp-gloss{
  position:absolute;inset:0;border-radius:9px;
  background:linear-gradient(120deg, rgba(255,255,255,0.30), rgba(255,255,255,0.06) 40%, rgba(255,255,255,0) 60%);
}
.ns-dp-dots{
  position:absolute;inset:0;border-radius:9px;
  background-image:radial-gradient(circle, rgba(0,0,0,0.32) 1px, rgba(0,0,0,0) 1.5px);
  background-size:7px 7px;
  opacity:0.35;
}
.ns-dp-art{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;}
.ns-dp-cast{position:absolute;inset:-7px;border-radius:16px;pointer-events:none;}
.ns-dp-flap{
  position:absolute;inset:0;border-radius:16px;opacity:0;
  background:linear-gradient(var(--dp-flap-angle,135deg),
    color-mix(in srgb, white 25%, var(--ns-accent)) 0%,
    color-mix(in srgb, white 55%, var(--ns-accent)) 55%,
    color-mix(in srgb, var(--background) 90%, var(--foreground)) 100%);
  box-shadow:inset 0 0 14px rgba(0,0,0,0.18);
  will-change:transform,clip-path;
}
.ns-dp-sheen{
  position:absolute;inset:0;border-radius:16px;opacity:0.85;
  background:linear-gradient(115deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.55) 45%, rgba(255,255,255,0.10) 53%, rgba(255,255,255,0) 64%);
  background-size:240% 240%;
  background-position:130% 130%;
}
.ns-dp-peeling .ns-dp-sheen{animation:ns-dp-sweep 1.7s linear infinite;}
@keyframes ns-dp-sweep{
  from{background-position:130% 130%;}
  to{background-position:-40% -40%;}
}
@media (prefers-reduced-motion: reduce){
  .ns-dp-root{transition:none;}
  .ns-dp-root:hover{transform:none;}
  .ns-dp-peeling .ns-dp-sheen{animation:none;}
}
`;function Ge(){return f.jsx("div",{className:"ns-stage",children:f.jsx(Ze,{})})}export{Ge as default};
