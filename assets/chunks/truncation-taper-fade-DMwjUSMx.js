import{r as t,j as o}from"./client-CsvIHAk3.js";const O=220,J=900,Q=650,U=12;function b(i,u,v){return i+(u-i)*v}const L={isOverflowing:!1,overflowPx:0,hiddenRatio:0,tailStart:0,lastVisibleIndex:0};function Y({text:i,maxTailChars:u=U,className:v=""}){const M=t.useRef(null),S=t.useRef(null),[p,k]=t.useState(L),[P,E]=t.useState(!1),[_,R]=t.useState(!1),[A,m]=t.useState(!1),[y,N]=t.useState(!1),w=P||_,s=t.useMemo(()=>Array.from(i),[i]);t.useEffect(()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)"),n=()=>N(e.matches);return n(),e.addEventListener("change",n),()=>e.removeEventListener("change",n)},[]),t.useLayoutEffect(()=>{const e=M.current,n=S.current;if(!e||!n)return;const r=()=>{const a=e.clientWidth,d=n.scrollWidth;if(a<=0||s.length===0){k(L);return}const f=d>a+.5,I=Math.max(0,d-a),q=Math.min(1,Math.max(0,I/Math.max(a,1)));let T=s.length,x=s.length-1;if(f){const B=d/s.length,D=Math.max(1,Math.floor(a/Math.max(B,.01)));x=Math.min(s.length-1,D-1);const G=Math.min(u,s.length);T=Math.max(0,x-G+1)}k({isOverflowing:f,overflowPx:I,hiddenRatio:q,tailStart:T,lastVisibleIndex:x})};r();const h=new ResizeObserver(r);h.observe(e);let c=!1;return document.fonts?.ready?.then(()=>{c||r()}).catch(()=>{}),()=>{c=!0,h.disconnect()}},[s,u]),t.useEffect(()=>{if(!w||!p.isOverflowing){m(!1);return}if(y){m(!0);return}const e=window.setTimeout(()=>m(!0),O),n=window.setTimeout(()=>m(!1),O+J);return()=>{window.clearTimeout(e),window.clearTimeout(n)}},[w,p.isOverflowing,y]);const{isOverflowing:V,overflowPx:W,hiddenRatio:g,tailStart:l,lastVisibleIndex:$}=p,z=s.slice(0,l).join(""),F=s.slice(l),C=-.02-g*.16,X=100-g*38,H=1-g*.16,K=Math.max(1,$-l),j=V?"linear-gradient(to right, black, black calc(100% - 3ch), transparent 100%)":void 0;return o.jsxs("span",{ref:M,tabIndex:0,title:i,"data-vt-active":w?"true":void 0,onMouseEnter:()=>E(!0),onMouseLeave:()=>E(!1),onFocus:()=>R(!0),onBlur:()=>R(!1),className:`ns-vt relative block cursor-default overflow-hidden whitespace-nowrap outline-none ${v}`,style:{maskImage:j,WebkitMaskImage:j,transition:"-webkit-mask-image 260ms ease, mask-image 260ms ease"},children:[o.jsx("style",{children:`
        /* An outline paints outside the border box, but this element clips
           its own overflow — an outline here would itself get clipped away.
           An inset box-shadow paints inside instead, so it always shows. */
        .ns-vt:focus-visible {
          box-shadow: inset 0 0 0 2px var(--ns-accent);
        }
        .ns-vt[data-vt-active="true"] {
          -webkit-mask-image: none !important;
          mask-image: none !important;
        }
        .ns-vt-tail-char {
          display: inline-block;
          transition:
            letter-spacing 220ms cubic-bezier(.16,1,.3,1),
            font-stretch 220ms cubic-bezier(.16,1,.3,1),
            transform 220ms cubic-bezier(.16,1,.3,1);
        }
        .ns-vt-line {
          display: inline-block;
          transition: transform ${Q}ms cubic-bezier(.65,0,.35,1);
        }
        [data-vt-active="true"] .ns-vt-tail-char {
          letter-spacing: 0 !important;
          font-stretch: 100% !important;
          transform: scaleX(1) !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .ns-vt-tail-char, .ns-vt-line, .ns-vt {
            transition: none !important;
          }
        }
      `}),o.jsx("span",{ref:S,"aria-hidden":!0,className:"pointer-events-none absolute left-0 top-0 whitespace-nowrap",style:{visibility:"hidden"},children:i}),o.jsxs("span",{className:"ns-vt-line",style:{transform:`translateX(${A?-W:0}px)`},children:[z,F.map((e,n)=>{const r=l+n,h=Math.min(1,(r-l)/K),c=Math.pow(h,1.6),a=b(-.004,C,c),d=b(100,X,c),f=b(1,H,c);return o.jsx("span",{className:"ns-vt-tail-char",style:{letterSpacing:`${a.toFixed(3)}em`,fontStretch:`${d.toFixed(1)}%`,transform:`scaleX(${f.toFixed(3)})`,transformOrigin:"right"},children:e},r)})]})]})}function ee(){return o.jsx("div",{className:"ns-stage",children:o.jsx(Y,{text:"这是一段用来预览排版的示例文字。"})})}export{ee as default};
