import{r as s,j as e}from"./client-CsvIHAk3.js";const E=1.15,O=30,U=10,de=Array.from({length:O},(n,r)=>String(r%10)),Z=400,me=40,ue="cubic-bezier(0.65, 0, 0.35, 1)",D=140,V=120,K=180,xe="cubic-bezier(0.16, 1, 0.3, 1)",pe=90,he=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function F(n){return Math.round(Math.max(0,n)*100)}function l(n){return`$${(n/100).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function R(n,r){if(r>=0){const a=Math.floor(n/100);return Math.floor(a/10**r)%10}const t=n%100;return r===-1?Math.floor(t/10)%10:t%10}function ge(n){return`${String(n.getDate()).padStart(2,"0")} ${he[n.getMonth()]} ${String(n.getFullYear()).slice(-2)}`}function z(n,r){return r.map(t=>{const a=U+R(n,t);return{place:t,rest:a,play:a,final:a,delay:0}})}function Q(n,r,t,a){const p=t.filter(f=>R(n,f)!==R(r,f)),w=p.length?Math.min(...p):0;return t.map(f=>{const N=R(n,f),c=R(r,f),$=U+N,k=U+c;let S=k;a==="asc"&&c<N&&(S=k+O/3),a==="desc"&&c>N&&(S=k-O/3);const o=p.includes(f)?me*(f-w):0;return{place:f,rest:$,play:S,final:k,delay:o}})}function ve(){const[n,r]=s.useState(!1);return s.useEffect(()=>{const t=window.matchMedia("(prefers-reduced-motion: reduce)");r(t.matches);const a=()=>r(t.matches);return t.addEventListener("change",a),()=>t.removeEventListener("change",a)},[]),n}function X({cols:n,armed:r}){return e.jsx("div",{"aria-hidden":"true",className:"ns-fr-wheel",children:n.map(t=>{const a=r?t.play:t.rest;return e.jsx("span",{className:"ns-fr-wcell",children:e.jsx("span",{className:"ns-fr-wtrack",style:{transform:`translateY(-${(a*E).toFixed(3)}em)`,transition:r?`transform ${Z}ms ${ue} ${t.delay}ms`:"none"},children:de.map((p,w)=>e.jsx("span",{className:"ns-fr-wdigit",children:p},w))})},t.place)})})}function ye({creditsPurchased:n,balance:r,defaultBalance:t,amount:a,description:p,actionLabel:w="Charge",onCommit:f,className:N=""}){const c=F(n),$=r!==void 0,[k,S]=s.useState(()=>Math.min(c,F(t??n))),o=Math.min(c,$?F(r):k),C=c-o,d=F(a),Y=d>0&&d<=o,q=Math.max(4,String(Math.floor(c/100)).length),b=[...Array.from({length:q},(i,y)=>q-1-y),-1,-2],j=ve(),[ee,T]=s.useState(()=>z(o,b)),[ne,_]=s.useState(()=>z(C,b)),[G,A]=s.useState(!1),J=s.useRef(o),L=s.useRef(void 0),h=s.useRef(void 0),W=s.useRef(!1);s.useLayoutEffect(()=>{const i=J.current;if(J.current=o,!W.current){W.current=!0;return}if(i===o)return;window.clearTimeout(L.current),h.current!==void 0&&cancelAnimationFrame(h.current);const y=c-i;if(j){T(z(o,b)),_(z(C,b)),A(!1);return}const m=Q(i,o,b,"desc"),v=Q(y,C,b,"asc");T(m),_(v),A(!1),h.current=requestAnimationFrame(()=>{h.current=requestAnimationFrame(()=>A(!0))});const I=Math.max(0,...m.map(u=>u.delay),...v.map(u=>u.delay));return L.current=window.setTimeout(()=>{T(u=>u.map(x=>({...x,rest:x.final,play:x.final,delay:0}))),_(u=>u.map(x=>({...x,rest:x.final,play:x.final,delay:0}))),A(!1)},I+Z+30),()=>{h.current!==void 0&&cancelAnimationFrame(h.current)}},[o]),s.useEffect(()=>()=>{window.clearTimeout(L.current),h.current!==void 0&&cancelAnimationFrame(h.current)},[]);const[g,re]=s.useState(null),[te,se]=s.useState(0),[P,B]=s.useState("rest"),[ae,oe]=s.useState(""),H=s.useRef(0),M=s.useRef([]),ie=()=>{if(!Y)return;const i=o-d;H.current+=1;const m={amountCents:d,date:ge(new Date),serial:String(H.current).padStart(6,"0")};re(m),se(v=>v+1),$||S(i),f?.(d/100,i/100),oe(`Stamped — ${l(d)}. Balance ${l(i)} remaining, ${l(c-i)} spent to date, registers reconcile.`),M.current.forEach(v=>window.clearTimeout(v)),M.current=[],j||(B("down"),M.current.push(window.setTimeout(()=>B("up"),D+V)),M.current.push(window.setTimeout(()=>B("rest"),D+V+K)))};s.useEffect(()=>()=>M.current.forEach(i=>window.clearTimeout(i)),[]);const ce=P==="down"?"translateY(8px)":"translateY(0px)",le=j||P==="rest"?"none":P==="down"?`transform ${D}ms ${xe}`:`transform ${K}ms ease-in`,fe=g?`Franking indicium: ${l(g.amountCents)}, stamped ${g.date}, serial ${g.serial}`:"";return e.jsxs("div",{className:`ns-fr-root ${N}`,"data-reduced":j||void 0,children:[e.jsxs("div",{className:"ns-fr-card",children:[e.jsxs("div",{className:"ns-fr-head",children:[e.jsx("span",{className:"ns-fr-kicker",children:"Invoice"}),p&&e.jsx("span",{className:"ns-fr-desc",children:p})]}),e.jsxs("div",{className:"ns-fr-amount-row",children:[e.jsx("span",{className:"ns-fr-amount",children:l(d)}),e.jsx("span",{className:"ns-fr-amount-label",children:"due"})]}),e.jsx("div",{className:"ns-fr-stampzone",children:g&&e.jsxs("svg",{role:"img","aria-label":fe,viewBox:"0 0 168 76",className:"ns-fr-frank",style:{animationDelay:j?"0ms":`${D}ms`},children:[e.jsx("rect",{x:"1",y:"1",width:"166",height:"74",rx:"6",className:"ns-fr-frank-border"}),e.jsxs("g",{transform:"translate(38, 38)",className:"ns-fr-frank-rosette",children:[Array.from({length:12},(i,y)=>{const m=y*30*Math.PI/180,v=Math.cos(m)*9,I=Math.sin(m)*9,u=Math.cos(m)*15,x=Math.sin(m)*15;return e.jsx("line",{x1:v.toFixed(2),y1:I.toFixed(2),x2:u.toFixed(2),y2:x.toFixed(2),className:"ns-fr-frank-ray"},y)}),e.jsx("circle",{r:"16",className:"ns-fr-frank-ring"}),e.jsx("circle",{r:"2.5",className:"ns-fr-frank-hub"})]}),e.jsx("line",{x1:"70",y1:"8",x2:"70",y2:"68",className:"ns-fr-frank-div"}),e.jsx("text",{x:"80",y:"34",className:"ns-fr-frank-amt",children:l(g.amountCents)}),e.jsx("text",{x:"80",y:"49",className:"ns-fr-frank-date",children:g.date}),e.jsxs("text",{x:"80",y:"63",className:"ns-fr-frank-serial",children:["SER ",g.serial]})]},te)}),e.jsxs("button",{type:"button",className:"ns-fr-die","aria-label":`${w} ${l(d)}`,disabled:!Y,onClick:ie,style:{transform:j?void 0:ce,transition:le},children:[e.jsx("span",{"aria-hidden":"true",className:"ns-fr-die-label",children:w}),e.jsx("span",{"aria-hidden":"true",className:"ns-fr-die-amt",children:l(d)})]})]}),e.jsxs("div",{className:"ns-fr-registers",children:[e.jsxs("div",{className:"ns-fr-register",children:[e.jsx("span",{className:"ns-fr-reg-caption",children:"Balance"}),e.jsx(X,{cols:ee,armed:G}),e.jsx("span",{className:"ns-fr-reg-mirror",children:l(o)})]}),e.jsxs("div",{className:"ns-fr-register",children:[e.jsx("span",{className:"ns-fr-reg-caption",children:"Spent to date"}),e.jsx(X,{cols:ne,armed:G}),e.jsx("span",{className:"ns-fr-reg-mirror",children:l(C)})]})]}),e.jsxs("p",{className:"ns-fr-reconcile",children:["registers reconcile: ",l(c)]}),e.jsx("div",{role:"status","aria-live":"polite","aria-atomic":"true",className:"sr-only",children:ae}),e.jsx("style",{children:`
        .ns-fr-root {
          display: flex;
          flex-direction: column;
          gap: 14px;
          width: 100%;
          max-width: 22rem;
          font-family: var(--font-sans);
          color: var(--foreground);
        }
        .ns-fr-card {
          position: relative;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: var(--background);
          padding: 16px 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ns-fr-head {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .ns-fr-kicker {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ns-muted);
        }
        .ns-fr-desc {
          font-size: 13px;
          color: var(--foreground);
        }
        .ns-fr-amount-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }
        .ns-fr-amount {
          font-family: var(--font-mono);
          font-size: 26px;
          font-weight: 500;
          font-variant-numeric: tabular-nums;
        }
        .ns-fr-amount-label {
          font-size: 12px;
          color: var(--ns-muted);
        }
        .ns-fr-stampzone {
          min-height: 78px;
          display: flex;
          align-items: center;
        }
        .ns-fr-frank {
          width: 100%;
          max-width: 220px;
          height: auto;
          overflow: visible;
          animation: ns-fr-press ${pe}ms ease-out both;
        }
        .ns-fr-frank-border {
          fill: none;
          stroke: var(--border);
          stroke-width: 1.5px;
          stroke-dasharray: 3 2.5;
        }
        .ns-fr-frank-ray {
          stroke: var(--ns-muted);
          stroke-width: 1.2px;
        }
        .ns-fr-frank-ring {
          fill: none;
          stroke: var(--foreground);
          stroke-width: 1.4px;
        }
        .ns-fr-frank-hub {
          fill: var(--foreground);
        }
        .ns-fr-frank-div {
          stroke: var(--border);
          stroke-width: 1px;
        }
        .ns-fr-frank-amt {
          font-family: var(--font-mono);
          font-size: 15px;
          font-weight: 600;
          fill: var(--foreground);
        }
        .ns-fr-frank-date {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.06em;
          fill: var(--foreground);
        }
        .ns-fr-frank-serial {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.05em;
          fill: var(--ns-muted);
        }
        @keyframes ns-fr-press {
          0% { opacity: 0.35; }
          55% { opacity: 1; filter: brightness(1.25); }
          100% { opacity: 1; filter: brightness(1); }
        }

        .ns-fr-die {
          align-self: flex-start;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
          padding: 8px 14px;
          border: 1px solid var(--foreground);
          border-radius: 6px;
          background: var(--background);
          color: var(--foreground);
          cursor: pointer;
          outline: none;
          -webkit-tap-highlight-color: transparent;
        }
        .ns-fr-die:not(:disabled):hover {
          background: color-mix(in oklab, var(--foreground) 6%, transparent);
        }
        .ns-fr-die:focus-visible {
          outline: 2px solid var(--ns-accent);
          outline-offset: 2px;
        }
        .ns-fr-die:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }
        .ns-fr-die-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ns-muted);
        }
        .ns-fr-die-amt {
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 600;
        }

        .ns-fr-registers {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .ns-fr-register {
          display: flex;
          flex-direction: column;
          gap: 4px;
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 8px 10px;
        }
        .ns-fr-reg-caption {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ns-muted);
        }
        .ns-fr-wheel {
          display: flex;
          font-family: var(--font-mono);
          font-size: 15px;
          font-weight: 600;
          line-height: ${E};
        }
        .ns-fr-wcell {
          display: inline-block;
          width: 1ch;
          height: ${E}em;
          overflow: hidden;
        }
        .ns-fr-wtrack {
          display: flex;
          flex-direction: column;
          will-change: transform;
        }
        .ns-fr-wdigit {
          height: ${E}em;
          line-height: ${E}em;
          text-align: center;
        }
        .ns-fr-reg-mirror {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--ns-muted);
        }

        .ns-fr-reconcile {
          margin: 0;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.04em;
          color: var(--ns-muted);
          text-align: center;
        }

        .ns-fr-root[data-reduced] .ns-fr-frank {
          animation: none;
          opacity: 1;
        }
        @media (prefers-reduced-motion: reduce) {
          .ns-fr-frank {
            animation: none;
            opacity: 1;
          }
        }
      `})]})}function ke(){return e.jsx("div",{className:"ns-stage",children:e.jsx(ye,{creditsPurchased:42,balance:42,defaultBalance:42,amount:42,description:"这是一段用来预览排版的示例文字。",onCommit:()=>{}})})}export{ke as default};
