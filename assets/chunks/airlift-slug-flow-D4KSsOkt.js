import{r,j as o}from"./client-CsvIHAk3.js";const z=1800,ie=140,U=.09,W=.14,I=220,N=14,oe=.08,O=5,X=22,w=2.4,J=3,re=5/N;function ae({onSlugArrival:$,className:Z=""}){const F=r.useRef(null),T=r.useRef(null),C=r.useRef(null),H=r.useRef(null),j=r.useRef(null),L=r.useRef(null),P=r.useRef($);return P.current=$,r.useEffect(()=>{const g=F.current,A=T.current,B=C.current,a=H.current,m=j.current,k=L.current;if(!g||!A||!B||!a||!m||!k)return;let p=!1,x=0,n=0,_=!0,i=0,l=0,f=0,v=0,b=0,y=[];const h=window.matchMedia("(prefers-reduced-motion: reduce)"),K=()=>{const e=Math.min(X*w,Math.max(O*w,x*w));m.style.width=`${e}px`,m.style.height=`${e}px`,m.style.marginBottom=`${J}px`},E=e=>{k.style.height=`${Math.max(0,Math.min(1,e))*100}%`},Q=e=>{const s=document.createElement("div");s.className="asf-slug";const t=document.createElement("div");t.className="asf-plug",a.appendChild(t),a.appendChild(s),y.push({slug:s,plug:t,injectedAtV:e,fading:!1,fadeStartV:0})},Y=e=>{e.slug.remove(),e.plug.remove()},ee=()=>{b=b%N+1,E(b/N),P.current?.()},te=(e,s)=>{const t=n*U,c=n*W,u=s/1e3*ie,d=u+t,ne=d+c;!e.fading&&ne>=n&&(e.fading=!0,e.fadeStartV=s,e.slug.style.transition=`opacity ${I}ms linear`,e.plug.style.transition=`opacity ${I}ms linear`,e.slug.style.opacity="0",e.plug.style.opacity="0",ee()),e.slug.style.height=`${t}px`,e.slug.style.bottom=`${Math.min(u,n-t)}px`,e.plug.style.height=`${c}px`,e.plug.style.bottom=`${Math.min(d,n-0)}px`},se=()=>{const e=n*U,s=n*W,t=e+s,c=n*.5-t/2;a.innerHTML="";const u=document.createElement("div");u.className="asf-slug",u.style.height=`${e}px`,u.style.bottom=`${c}px`;const d=document.createElement("div");d.className="asf-plug",d.style.height=`${s}px`,d.style.bottom=`${c+e}px`,a.appendChild(d),a.appendChild(u),E(re)},M=()=>{const e=g.getBoundingClientRect(),s=Math.min(e.width,e.height);x=Math.max(O,Math.min(X,s*oe)),B.style.width=`${x}px`,A.style.width=`${x}px`,K();const t=m.getBoundingClientRect();n=Math.max(0,e.height-t.height-J),A.style.height=`${n}px`,h.matches&&se()},R=e=>{if(i=0,p)return;if(!_||n<=0){i=requestAnimationFrame(R);return}l===0&&(l=e);const s=Math.min(100,e-l);for(l=e,f+=s,v+=s;v>=z;)v-=z,Q(f);y=y.filter(t=>{const c=f-t.injectedAtV;return te(t,c),t.fading&&f-t.fadeStartV>=I?(Y(t),!1):!0}),i=requestAnimationFrame(R)},D=()=>{M(),!h.matches&&(l=0,i||(i=requestAnimationFrame(R)))},q=()=>{cancelAnimationFrame(i),i=0,a.innerHTML="",y=[],v=0,f=0,l=0,b=0,E(0),D()};h.addEventListener("change",q);let S=0;const G=new ResizeObserver(()=>{window.clearTimeout(S),S=window.setTimeout(()=>{p||M()},100)});G.observe(g);const V=new IntersectionObserver(e=>{_=e[0]?.isIntersecting??!0,_&&!h.matches&&!i&&(l=0,i=requestAnimationFrame(R))});return V.observe(g),document.fonts.ready.then(()=>{p||M()}),D(),()=>{p=!0,cancelAnimationFrame(i),i=0,window.clearTimeout(S),h.removeEventListener("change",q),G.disconnect(),V.disconnect()}},[]),o.jsxs("div",{ref:F,className:`relative flex h-full w-full flex-col items-center justify-end ${Z}`,children:[o.jsx("style",{children:le}),o.jsx("div",{ref:j,className:"asf-basin",children:o.jsx("div",{ref:L,className:"asf-basin-fill"})}),o.jsx("div",{ref:C,className:"relative",children:o.jsx("div",{ref:T,className:"asf-static-column relative overflow-visible",children:o.jsx("div",{ref:H,className:"absolute inset-x-0 bottom-0"})})})]})}const le=`
.asf-static-column {
  background: var(--ns-muted);
  opacity: 0.3;
  border-radius: 999px;
}
.dark .asf-static-column {
  opacity: 0.16;
}
.asf-slug {
  position: absolute;
  left: 0;
  right: 0;
  border-radius: 999px;
  background: var(--foreground);
  opacity: 0.4;
}
.asf-plug {
  position: absolute;
  left: 0;
  right: 0;
  border-radius: 2px;
  background: var(--foreground);
  opacity: 1;
}
.asf-basin {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 3px;
  background: var(--background);
}
.asf-basin-fill {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0%;
  background: var(--foreground);
  transition: height 220ms linear;
}
`;function ue(){return o.jsx("div",{className:"ns-stage",children:o.jsx(ae,{onSlugArrival:()=>{}})})}export{ue as default};
