import{r as v,j as l}from"./client-CsvIHAk3.js";const te="#0190fe";function ie({value:e,defaultValue:r,onValueChange:n,alpha:p,presets:t,open:f,defaultOpen:d=!1,onOpenChange:c,label:s="Color",showValue:u=!0,size:g="md",side:h="bottom",align:m="start",name:C,className:k,disabled:x,ref:$,onClick:U,...N}){const[j,S]=ee(e,r??te,n),[_,D]=ee(f,d,c),A=v.useId(),I=v.useRef(null),i=v.useRef(null),a=v.useRef(null),w=v.useRef(D);w.current=D;const M=v.useRef(!_);_||(M.current=!0);const y=L(j),B=y?R(y,!1).toUpperCase():j,H=y&&p&&y.a<1?`${Math.round(y.a*100)}%`:null,K=o=>!!o&&(!!a.current?.contains(o)||!!I.current?.contains(o));return v.useLayoutEffect(()=>{const o=a.current;if(!_||!o)return;"showPopover"in o&&!o.matches(":popover-open")&&o.showPopover();const E=()=>{i.current&&re(o,i.current.getBoundingClientRect(),h,m)};E(),window.addEventListener("resize",E),window.addEventListener("scroll",E,!0);const T=typeof ResizeObserver>"u"?null:new ResizeObserver(E);return T?.observe(o),()=>{window.removeEventListener("resize",E),window.removeEventListener("scroll",E,!0),T?.disconnect(),"hidePopover"in o&&o.isConnected&&o.matches(":popover-open")&&o.hidePopover()}},[_,h,m]),v.useEffect(()=>{const o=a.current;if(!_||!o)return;M.current&&!o.contains(document.activeElement)&&o.querySelector("[role=slider]")?.focus({preventScroll:!0}),M.current=!1;const E=()=>w.current(!1);let T=o.contains(document.activeElement);const V=()=>T=!0,G=b=>T=!!b.relatedTarget&&o.contains(b.relatedTarget);o.addEventListener("focusin",V),o.addEventListener("focusout",G);const X=b=>{K(b.target)||E()},J=b=>{if(b.key!=="Escape"||b.defaultPrevented)return;b.preventDefault(),b.stopPropagation();const P=K(document.activeElement);E(),P&&i.current?.focus({preventScroll:!0})},Q=b=>{const P=b.relatedTarget;K(b.target)&&P&&!K(P)&&E()};return document.addEventListener("pointerdown",X,!0),window.addEventListener("keydown",J,!0),document.addEventListener("focusout",Q),()=>{document.removeEventListener("pointerdown",X,!0),window.removeEventListener("keydown",J,!0),document.removeEventListener("focusout",Q),o.removeEventListener("focusin",V),o.removeEventListener("focusout",G);const b=i.current;T&&window.setTimeout(()=>{const P=document.activeElement;b?.isConnected&&(!P||P===document.body)&&b.focus({preventScroll:!0})})}},[_]),l.jsxs("span",{ref:I,className:["ui-clp",k].filter(Boolean).join(" "),"data-size":g==="sm"?"sm":"md",children:[l.jsx("style",{href:"ui-color-picker",precedence:"default",children:le}),l.jsxs("button",{...N,ref:o=>{i.current=o,typeof $=="function"?$(o):$&&($.current=o)},type:"button",className:"ui-clp__trigger","data-bare":!u||void 0,disabled:x,"aria-haspopup":"dialog","aria-expanded":_,"aria-controls":_?`${A}-card`:void 0,onClick:o=>{U?.(o),o.defaultPrevented||D(!_)},children:[l.jsx("span",{className:"ui-clp__swatch",style:{"--ui-clp-c":y?Y(y):j},"aria-hidden":"true"}),l.jsxs("span",{className:u?"ui-clp__value":"ui-clp__sr",children:[l.jsxs("span",{className:"ui-clp__sr",children:[s,": "]}),B,H&&l.jsxs("span",{className:"ui-clp__alpha",children:[" ",H]})]})]}),C&&l.jsx("input",{type:"hidden",name:C,value:y?R(y,!!p):j}),_&&l.jsx("div",{ref:a,id:`${A}-card`,className:"ui-clp__pop",role:"dialog","aria-label":s,popover:"manual","data-side":h,"data-align":m,children:l.jsx(ae,{value:j,onChange:S,alpha:p,presets:t})})]})}function ae({value:e,onChange:r,alpha:n,presets:p}){const[t,f]=v.useState(()=>F(L(e)??L(te),0,n)),[d,c]=v.useState(e),[s,u]=v.useState(null),g=v.useRef(null),h=v.useRef(null),m=v.useRef(null);if(e!==d){c(e);const i=L(e);i&&R(i,!!n)!==R(q(t),!!n)&&f(F(i,t.h,n,t.s))}const C=q(t),k=R(C,!!n),x=i=>{f(i);const a=R(q(i),!!n);a!==e&&r(a)},$=Math.round(t.s*100),U=Math.round(t.v*100),N=Math.round(t.h),j=Math.round(t.a*100),S=(p??[]).map(i=>typeof i=="string"?{value:i,label:i.toUpperCase()}:i),_=S.findIndex(i=>{const a=L(i.value);return!!a&&R(a,!!n)===k}),[D,A]=v.useState(!1),I=i=>{const a=L(i);return a&&x(F(n?a:{...a,a:1},t.h,n,t.s)),!!a};return l.jsxs("div",{className:"ui-clp__panel",style:{"--ui-clp-c":Y(C),"--ui-clp-solid":Y({...C,a:1}),"--ui-clp-hue":`hsl(${N} 100% 50%)`},children:[l.jsx("div",{ref:g,className:"ui-clp__area",role:"slider",tabIndex:0,dir:"ltr","aria-label":"Saturation and brightness","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":$,"aria-valuetext":`Saturation ${$}%, brightness ${U}%`,...W(g,(i,a)=>x({...t,s:i,v:1-a}),!0),onKeyDown:i=>{const a=i.shiftKey?10:1,M={ArrowRight:[a,0],ArrowLeft:[-a,0],ArrowUp:[0,a],ArrowDown:[0,-a],PageUp:[0,10],PageDown:[0,-10],Home:[-100,0],End:[100,0]}[i.key];M&&(i.preventDefault(),x({...t,s:z($+M[0],0,100)/100,v:z(U+M[1],0,100)/100}))},children:l.jsx("span",{className:"ui-clp__thumb",style:{left:`${t.s*100}%`,top:`${(1-t.v)*100}%`}})}),l.jsx("div",{ref:h,className:"ui-clp__slider ui-clp__slider--hue",role:"slider",tabIndex:0,dir:"ltr","aria-label":"Hue","aria-orientation":"horizontal","aria-valuemin":0,"aria-valuemax":360,"aria-valuenow":N,"aria-valuetext":`${N}°, ${se(N)}`,...W(h,i=>x({...t,h:i*360})),onKeyDown:i=>{const a=Z(i,N,360);a!=null&&x({...t,h:a})},children:l.jsx("span",{className:"ui-clp__knob",style:{"--p":t.h/360,background:`hsl(${N} 100% 50%)`}})}),n&&l.jsx("div",{ref:m,className:"ui-clp__slider ui-clp__slider--alpha",role:"slider",tabIndex:0,dir:"ltr","aria-label":"Opacity","aria-orientation":"horizontal","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":j,"aria-valuetext":`${j}%`,...W(m,i=>x({...t,a:Math.round(i*100)/100})),onKeyDown:i=>{const a=Z(i,j,100);a!=null&&x({...t,a:a/100})},children:l.jsx("span",{className:"ui-clp__knob",style:{"--p":t.a}})}),l.jsxs("div",{className:"ui-clp__fields",children:[l.jsx("span",{className:"ui-clp__preview","aria-hidden":"true"}),l.jsxs("label",{className:"ui-clp__hex","data-invalid":D||void 0,children:[l.jsx("span",{className:"ui-clp__hash","aria-hidden":"true",children:"#"}),l.jsx("input",{className:"ui-clp__input",value:s??k.slice(1).toUpperCase(),"aria-label":"Hex color","aria-invalid":D||void 0,spellCheck:!1,autoComplete:"off",autoCapitalize:"off",onChange:i=>{const a=i.target.value;u(a),A(!1),ne.test(a.trim())&&I(a)},onBlur:()=>{s!=null&&I(s),u(null),A(!1)},onKeyDown:i=>{i.key!=="Enter"||s==null||(i.preventDefault(),I(s)?u(null):A(!0))}})]}),n&&l.jsxs("span",{className:"ui-clp__pct",children:[j,"%"]})]}),S.length>0&&l.jsx("div",{className:"ui-clp__presets",role:"radiogroup","aria-label":"Presets",children:S.map((i,a)=>l.jsx("button",{type:"button",role:"radio",className:"ui-clp__preset","aria-checked":a===_,"aria-label":i.label,title:i.label,tabIndex:a===(_>=0?_:0)?0:-1,style:{"--ui-clp-p":i.value},onClick:()=>{const w=L(i.value);w&&x(F(n?w:{...w,a:1},t.h,n,t.s))},onKeyDown:w=>{const M=getComputedStyle(w.currentTarget).direction==="rtl",y={ArrowRight:M?-1:1,ArrowDown:1,ArrowLeft:M?1:-1,ArrowUp:-1}[w.key],B=w.key==="Home"?0:w.key==="End"?S.length-1:y!=null?(a+y+S.length)%S.length:null;if(B==null)return;w.preventDefault();const H=w.currentTarget.parentElement?.children[B];H?.focus(),H?.click()}},`${i.value}-${a}`))})]})}function W(e,r,n=!1){const p=t=>{const f=e.current;if(!f)return;const d=f.getBoundingClientRect(),c=n?0:d.height/2,s=z((t.clientX-d.left-c)/Math.max(1,d.width-c*2),0,1),u=z((t.clientY-d.top)/Math.max(1,d.height),0,1);r(s,u)};return{onPointerDown:t=>{t.button===0&&(e.current?.setPointerCapture(t.pointerId),e.current?.focus({preventScroll:!0}),t.preventDefault(),p(t))},onPointerMove:t=>{e.current?.hasPointerCapture(t.pointerId)&&p(t)},onPointerUp:t=>{e.current?.hasPointerCapture(t.pointerId)&&e.current.releasePointerCapture(t.pointerId)}}}function Z(e,r,n){const p=e.shiftKey?10:1,t={ArrowRight:r+p,ArrowUp:r+p,ArrowLeft:r-p,ArrowDown:r-p,PageUp:r+10,PageDown:r-10,Home:0,End:n};return e.key in t?(e.preventDefault(),z(t[e.key],0,n)):null}function ee(e,r,n){const[p,t]=v.useState(r),f=e!==void 0;return[f?e:p,c=>{f||t(c),n?.(c)}]}function re(e,r,n,p){const d=document.documentElement.clientWidth||window.innerWidth,c=window.innerHeight;e.style.maxHeight="";const s=e.offsetWidth,u=e.offsetHeight,g={bottom:c-r.bottom-6-8,top:r.top-6-8};let h=n;g[h]<u&&g[h==="top"?"bottom":"top"]>g[h]&&(h=h==="top"?"bottom":"top");const m=Math.min(u,Math.max(160,g[h])),C=h==="bottom"?r.bottom+6:r.top-6-m;let k=p,x=k==="start"?r.left:r.right-s;k==="start"&&x+s>d-8&&r.right-s>=8?(k="end",x=r.right-s):k==="end"&&x<8&&r.left+s<=d-8&&(k="start",x=r.left),x=Math.min(Math.max(8,x),d-8-s),u>m&&(e.style.maxHeight=`${m}px`),e.style.top=`${Math.round(C)}px`,e.style.left=`${Math.round(x)}px`,e.dataset.side=h,e.dataset.align=k}const z=(e,r,n)=>Math.min(n,Math.max(r,e)),O=e=>Math.round(z(e,0,255)).toString(16).padStart(2,"0"),ne=/^(#?([0-9a-f]{6}|[0-9a-f]{8})|rgba?\(.*\))$/i,oe=/^-?(\d+\.?\d*|\.\d+)%?$/;function L(e){const r=String(e??"").trim().toLowerCase(),n=/^#?([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.exec(r)?.[1];if(n){const c=n.length<=4?[...n].map(u=>u+u).join(""):n,s=u=>parseInt(c.slice(u,u+2),16);return{r:s(0),g:s(2),b:s(4),a:c.length===8?s(6)/255:1}}const p=/^rgba?\(([^)]*)\)$/.exec(r)?.[1];if(p==null)return null;const t=p.trim().split(/\s*[,/]\s*|\s+/).filter(Boolean);if(t.length!==3&&t.length!==4||!t.every(c=>oe.test(c)))return null;const f=c=>z(Math.round(c.endsWith("%")?parseFloat(c)*2.55:parseFloat(c)),0,255),d=t[3]==null?1:z(t[3].endsWith("%")?parseFloat(t[3])/100:parseFloat(t[3]),0,1);return{r:f(t[0]),g:f(t[1]),b:f(t[2]),a:d}}const R=(e,r)=>`#${O(e.r)}${O(e.g)}${O(e.b)}${r&&e.a<1?O(e.a*255):""}`,Y=e=>`rgb(${Math.round(e.r)} ${Math.round(e.g)} ${Math.round(e.b)} / ${e.a})`;function q({h:e,s:r,v:n,a:p}){const t=f=>{const d=(f+e/60)%6;return Math.round((n-n*r*Math.max(0,Math.min(d,4-d,1)))*255)};return{r:t(5),g:t(3),b:t(1),a:p}}function F({r:e,g:r,b:n,a:p},t,f,d=0){const c=e/255,s=r/255,u=n/255,g=Math.max(c,s,u),h=g-Math.min(c,s,u);let m=t;return h>0&&(m=g===c?(s-u)/h%6:g===s?(u-c)/h+2:(c-s)/h+4,m=(m*60+360)%360),{h:m,s:g===0?d:h/g,v:g,a:f?p:1}}const se=e=>e<15?"red":e<45?"orange":e<70?"yellow":e<165?"green":e<195?"cyan":e<255?"blue":e<290?"purple":e<335?"pink":"red",le=`
/* Colors and motion as variables – override them on .ui-clp (see Theming in the docs) */
.ui-clp {
  --ui-clp-ink: var(--aui-ink, #171717);
  --ui-clp-strong: var(--aui-ink, #171717);
  --ui-clp-muted: var(--aui-muted, #8f8f8f);
  --ui-clp-surface: var(--aui-surface, #ffffff);
  --ui-clp-overlay: var(--aui-overlay, var(--aui-surface, #ffffff));
  --ui-clp-hover: rgba(0, 0, 0, 0.04);
  --ui-clp-hairline: rgba(0, 0, 0, 0.08);
  --ui-clp-check: #e6e6e6;
  --ui-clp-shadow: 0 0 0 1px var(--aui-border, #e6e6e8), 0 1px 2px rgba(0, 0, 0, 0.04);
  --ui-clp-shadow-hover: 0 0 0 1px var(--aui-border-strong, #d4d4d8), 0 1px 2px rgba(0, 0, 0, 0.05);
  --ui-clp-edge-focus: 0 0 0 1px var(--aui-border-strong, #b4b4bb), 0 1px 2px rgba(0, 0, 0, 0.05);
  --ui-clp-danger-edge: #f04438;
  --ui-clp-pop-shadow: var(--aui-shadow-popover, 0 0 0 1px rgba(0, 0, 0, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.18), 0 4px 12px -4px rgba(0, 0, 0, 0.06));
  --ui-clp-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-clp-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  --ui-clp-mono: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;

  --h: 32px;
  --radius: var(--aui-radius, 9px);

  position: relative;
  display: inline-flex;
  min-width: 0;
  vertical-align: middle;
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  line-height: 20px;
  color: var(--ui-clp-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-clp[data-size="sm"] { --h: 28px; --radius: calc(var(--aui-radius, 9px) - 1px); }
.ui-clp--inline { display: block; }
.ui-clp *, .ui-clp *::before, .ui-clp *::after { box-sizing: border-box; }
.ui-clp__sr { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }

/* The button: white with a 1px edge, the swatch and the hex in a fixed-width face, so it never jumps */
.ui-clp__trigger {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  height: var(--h);
  margin: 0;
  padding: 0 12px 0 8px;
  border: 0;
  border-radius: var(--radius);
  background: var(--ui-clp-surface);
  box-shadow: var(--ui-clp-shadow);
  font: inherit;
  color: var(--ui-clp-strong);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: box-shadow 140ms ease;
}
.ui-clp[data-size="sm"] .ui-clp__trigger { padding: 0 10px 0 6px; }
.ui-clp__trigger[data-bare] { justify-content: center; width: var(--h); padding: 0; }
.ui-clp__trigger:hover:not(:disabled), .ui-clp__trigger[aria-expanded="true"] { box-shadow: var(--ui-clp-shadow-hover); }
.ui-clp__trigger:disabled { opacity: 0.5; cursor: not-allowed; }
.ui-clp__trigger:focus-visible { outline: 2px solid var(--ui-clp-focus); outline-offset: 2px; }

/* A swatch over a checkerboard, so a see-through color reads as see-through */
.ui-clp__swatch, .ui-clp__preview {
  flex: none;
  background: linear-gradient(var(--ui-clp-c), var(--ui-clp-c)), repeating-conic-gradient(var(--ui-clp-check) 0 25%, #fff 0 50%) 0 0 / 8px 8px;
  box-shadow: inset 0 0 0 0.5px var(--ui-clp-hairline);
}
.ui-clp__swatch { width: 18px; height: 18px; border-radius: 6px; }
.ui-clp[data-size="sm"] .ui-clp__swatch { width: 16px; height: 16px; border-radius: 5px; }
.ui-clp__value { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: var(--ui-clp-mono); font-size: 12px; font-weight: 500; letter-spacing: 0; }
.ui-clp__alpha { color: var(--ui-clp-muted); }

/* The card in the top layer: a 1px edge and a deeper drop */
.ui-clp__pop {
  position: fixed;
  inset: auto;
  z-index: 1000;
  box-sizing: border-box;
  max-width: calc(100vw - 16px);
  max-height: calc(100vh - 16px);
  margin: 0;
  padding: 14px;
  border: 0;
  border-radius: calc(var(--aui-radius-lg, 10px) + 6px);
  background: var(--ui-clp-overlay);
  box-shadow: var(--ui-clp-pop-shadow);
  color: var(--ui-clp-ink);
  font: inherit;
  overflow: auto;
  overscroll-behavior: contain;
  transform-origin: top left;
  animation: ui-clp-in 220ms var(--ui-clp-ease) both;
}
.ui-clp__pop::backdrop { display: none; }
.ui-clp__pop[data-align="end"] { transform-origin: top right; }
.ui-clp__pop[data-side="top"] { transform-origin: bottom left; animation-name: ui-clp-in-up; }
.ui-clp__pop[data-side="top"][data-align="end"] { transform-origin: bottom right; }

.ui-clp__panel { display: grid; gap: 14px; width: 236px; max-width: 100%; }
.ui-clp--inline .ui-clp__panel { width: 100%; }

/* Saturation left to right, brightness bottom to top, over the hue */
.ui-clp__area {
  position: relative;
  height: 152px;
  border-radius: calc(var(--radius) + 1px);
  background: linear-gradient(to top, #000, rgba(0, 0, 0, 0)), linear-gradient(to right, #fff, rgba(255, 255, 255, 0)), var(--ui-clp-hue);
  box-shadow: inset 0 0 0 1px var(--ui-clp-hairline);
  cursor: crosshair;
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
}
.ui-clp__thumb, .ui-clp__knob {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  box-shadow: 0 0 0 2px #fff, 0 0 0 2.5px rgba(0, 0, 0, 0.18), 0 1px 4px 1px rgba(0, 0, 0, 0.24);
}
.ui-clp__thumb { width: 12px; height: 12px; margin: -6px 0 0 -6px; background: var(--ui-clp-solid); }

/* The sliders: a 12px rail, the knob stops half its height from each end */
.ui-clp__slider { position: relative; height: 12px; border-radius: 999px; cursor: pointer; touch-action: none; user-select: none; -webkit-user-select: none; box-shadow: inset 0 0 0 1px var(--ui-clp-hairline); }
.ui-clp__slider--hue { background: linear-gradient(to right, #f00 0%, #ff0 16.67%, #0f0 33.33%, #0ff 50%, #00f 66.67%, #f0f 83.33%, #f00 100%); }
.ui-clp__slider--alpha { background: linear-gradient(to right, transparent, var(--ui-clp-solid)), repeating-conic-gradient(var(--ui-clp-check) 0 25%, #fff 0 50%) 0 0 / 8px 8px; }
.ui-clp__knob { top: 50%; left: calc(6px + (100% - 12px) * var(--p)); width: 16px; height: 16px; margin: -8px 0 0 -8px; background: transparent; }
.ui-clp__slider--alpha .ui-clp__knob { background: linear-gradient(var(--ui-clp-c), var(--ui-clp-c)), repeating-conic-gradient(var(--ui-clp-check) 0 25%, #fff 0 50%) 0 0 / 6px 6px; }
.ui-clp__area:focus-visible, .ui-clp__slider:focus-visible { outline: 2px solid var(--ui-clp-focus); outline-offset: 2px; }

/* The hex field: no ring, only its edge firms up */
.ui-clp__fields { display: flex; align-items: center; gap: 8px; min-width: 0; }
.ui-clp__preview { width: 32px; height: 32px; border-radius: var(--radius); }
.ui-clp__hex {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  gap: 2px;
  min-width: 0;
  height: 32px;
  padding: 0 10px;
  border-radius: var(--radius);
  background: var(--ui-clp-surface);
  box-shadow: var(--ui-clp-shadow);
  cursor: text;
  transition: box-shadow 140ms ease;
}
.ui-clp__hex:hover { box-shadow: var(--ui-clp-shadow-hover); }
.ui-clp__hex:focus-within { box-shadow: var(--ui-clp-edge-focus); }
.ui-clp__hex[data-invalid] { box-shadow: 0 0 0 1px var(--ui-clp-danger-edge); }
.ui-clp__hash { flex: none; font-family: var(--ui-clp-mono); font-size: 12px; color: var(--ui-clp-muted); }
.ui-clp__input {
  flex: 1 1 auto;
  width: 0;
  min-width: 0;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  font-family: var(--ui-clp-mono);
  font-size: 12px;
  font-weight: 500;
  color: var(--ui-clp-strong);
}
.ui-clp__pct { flex: none; width: 36px; font-size: 12px; line-height: 16px; text-align: end; font-variant-numeric: tabular-nums; color: var(--ui-clp-muted); }

/* Presets: round swatches; the chosen one gets a ring in its own color */
.ui-clp__presets { display: flex; flex-wrap: wrap; gap: 8px; padding: 2px; }
.ui-clp__preset {
  flex: none;
  width: 22px;
  height: 22px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: linear-gradient(var(--ui-clp-p), var(--ui-clp-p)), repeating-conic-gradient(var(--ui-clp-check) 0 25%, #fff 0 50%) 0 0 / 8px 8px;
  box-shadow: inset 0 0 0 0.5px var(--ui-clp-hairline);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 140ms var(--ui-clp-ease), box-shadow 140ms ease;
}
.ui-clp__preset:hover { transform: scale(1.1); }
.ui-clp__preset[aria-checked="true"] { box-shadow: inset 0 0 0 0.5px var(--ui-clp-hairline), 0 0 0 2px var(--ui-clp-overlay), 0 0 0 3.5px var(--ui-clp-p); }
.ui-clp__preset:focus-visible { outline: 2px solid var(--ui-clp-focus); outline-offset: 2px; }

@keyframes ui-clp-in { from { opacity: 0; transform: scale(0.96) translateY(-4px); } }
@keyframes ui-clp-in-up { from { opacity: 0; transform: scale(0.96) translateY(4px); } }

/* Touch screens: a bigger button, thumbs and swatches, and 16px in the field so iOS doesn't zoom in */
@media (pointer: coarse) {
  .ui-clp { --h: 40px; }
  .ui-clp[data-size="sm"] { --h: 36px; }
  .ui-clp__area { height: 176px; }
  .ui-clp__slider { height: 14px; }
  .ui-clp__knob { left: calc(7px + (100% - 14px) * var(--p)); width: 20px; height: 20px; margin: -10px 0 0 -10px; }
  .ui-clp__thumb { width: 16px; height: 16px; margin: -8px 0 0 -8px; }
  .ui-clp__panel { gap: 14px; }
  .ui-clp__hex, .ui-clp__preview { height: 40px; }
  .ui-clp__preview { width: 40px; }
  .ui-clp__input { font-size: 16px; }
  .ui-clp__presets { gap: 10px; }
  .ui-clp__preset { width: 28px; height: 28px; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-clp__pop { animation-duration: 1ms; }
  .ui-clp__preset { transition: none; }
  .ui-clp__preset:hover { transform: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-clp {
  --ui-clp-ink: var(--aui-ink, #ededed);
  --ui-clp-strong: var(--aui-ink, #ededed);
  --ui-clp-muted: var(--aui-muted, #8b8b92);
  --ui-clp-surface: var(--aui-surface, #1c1c1e);
  --ui-clp-overlay: var(--aui-overlay, var(--aui-surface, #19191b));
  --ui-clp-hover: rgba(255, 255, 255, 0.06);
  --ui-clp-hairline: rgba(255, 255, 255, 0.1);
  --ui-clp-shadow: 0 0 0 1px var(--aui-border, #2a2a2e);
  --ui-clp-shadow-hover: 0 0 0 1px var(--aui-border-strong, #3a3a40);
  --ui-clp-edge-focus: 0 0 0 1px var(--aui-border-strong, #4a4a52);
  --ui-clp-danger-edge: rgba(255, 99, 105, 0.8);
  --ui-clp-pop-shadow: var(--aui-shadow-popover, 0 0 0 1px rgba(255, 255, 255, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.6));
  --ui-clp-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
  color-scheme: dark;
}
`;function pe(){return l.jsx("div",{className:"stage",children:l.jsx(ie,{})})}export{pe as default};
