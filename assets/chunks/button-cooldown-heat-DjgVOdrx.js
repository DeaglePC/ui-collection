import{r as t,j as a}from"./client-CsvIHAk3.js";const L=.34,P=2.5,j=Math.LN2/P,C=1,f=.05,$=.18,D=1e3;function H(n){return Math.max(0,Math.min(n,.1))}function _(n){return n<=f?0:Math.max(1,Math.ceil(Math.log(n/f)/j))}function S(n,u){return u?`cooling down, ready in about ${_(n)}s`:n<=.01?"ready":`heat ${Math.round(Math.min(n,1)*100)}%`}function q({children:n,onPress:u,className:N=""}){const z=t.useId(),b=t.useRef(null),i=t.useRef(0),d=t.useRef(0),r=t.useRef(!1),o=t.useRef(0),m=t.useRef(0),l=t.useRef(0),p=t.useRef(()=>{}),[E,g]=t.useState(!1),[F,w]=t.useState("ready"),[I,v]=t.useState(""),x=`${z}-desc`;t.useEffect(()=>{const k=c=>{const R=H((c-m.current)/1e3);m.current=c;let e=i.current;e>0&&(e=e*Math.exp(-j*R),e<.001&&(e=0)),i.current=e;let s=d.current;s>0&&(s=Math.max(0,s-R/$),d.current=s);const h=b.current;h&&(h.style.setProperty("--heat",e.toFixed(4)),h.style.setProperty("--dip",s.toFixed(4))),r.current&&e<=f?(r.current=!1,g(!1),v("Re-armed — ready to press again."),l.current=c,w(S(e,!1))):c-l.current>=D&&(l.current=c,w(A=>{const M=S(e,r.current);return M===A?A:M})),e>0||s>0||r.current?o.current=requestAnimationFrame(k):o.current=0};return p.current=()=>{o.current||(m.current=performance.now(),o.current=requestAnimationFrame(k))},()=>{o.current&&cancelAnimationFrame(o.current),o.current=0}},[]);const y=()=>p.current(),T=()=>{if(r.current){d.current=1,y();return}i.current+=L,u?.(),i.current>=C&&(r.current=!0,g(!0),v(`Soaked — cooling down, ready in about ${_(i.current)}s.`)),l.current=0,y()};return a.jsxs("div",{className:N,children:[a.jsx("style",{children:`
.ns-button-cooldown-heat-btn{
  --h: min(var(--heat, 0), 1);
  /* warmup ramp: 0 until h=0.7, 0->1 across 0.7-1.0 — a "near the limit"
     glow, independent of the (much lower) re-arm point below. It fades out
     partway through the soak as h keeps decaying past 0.7; the hazard hatch
     and dimmed label (gated on aria-disabled, not --warm) are what stay on
     for the full lockout. Same scalar drives the shimmer intensity and the
     fill's hottest tone whether climbing toward the limit or draining
     through it. */
  --warm: max(0, min(1, calc((var(--heat, 0) - 0.7) * 3.3333)));
  position: relative;
  overflow: hidden;
  transform: translateY(calc(var(--dip, 0) * 1px)) scale(calc(1 + 0.02 * var(--h)));
  border-color: color-mix(in srgb, var(--border), var(--foreground) calc(var(--h) * 100%));
}
.ns-button-cooldown-heat-btn:hover{ background-color: color-mix(in srgb, var(--background), var(--foreground) 6%); }
.ns-button-cooldown-heat-btn[aria-disabled="true"]{ cursor: not-allowed; }

/* accumulated-heat fill: a bottom-up band reading the same --h the border
   and scale already use, so the gauge is legible even where the swelling
   is subtle. Tone shifts from --ns-muted (cool) toward --foreground (hot) as
   --warm rises, never toward --ns-accent — thermal state, not an affordance. */
.ns-button-cooldown-heat-fill{
  position: absolute;
  inset: 0;
  background-image: linear-gradient(to top,
    color-mix(in srgb, var(--ns-muted), var(--foreground) calc(var(--warm) * 45%)) 0%,
    color-mix(in srgb, var(--ns-muted), var(--foreground) calc(var(--warm) * 45%)) calc(var(--h) * 100%),
    transparent calc(var(--h) * 100%),
    transparent 100%);
  opacity: calc(0.16 + var(--warm) * 0.16);
  transition: opacity 200ms ease-out;
}
/* soaked (over-limit): the fill grows a hazard hatch and breathes — a
   distinct, unmissable "dead" read, still no color outside the palette. */
.ns-button-cooldown-heat-btn[aria-disabled="true"] .ns-button-cooldown-heat-fill{
  background-image:
    repeating-linear-gradient(135deg,
      color-mix(in srgb, var(--foreground) 22%, transparent) 0 1px,
      transparent 1px 6px),
    linear-gradient(to top,
      color-mix(in srgb, var(--ns-muted), var(--foreground) 45%) 0%,
      color-mix(in srgb, var(--ns-muted), var(--foreground) 45%) calc(var(--h) * 100%),
      transparent calc(var(--h) * 100%),
      transparent 100%);
  animation: ns-button-cooldown-heat-hazard 1.6s ease-in-out infinite;
}
.ns-button-cooldown-heat-btn[aria-disabled="true"] .ns-button-cooldown-heat-label{
  color: color-mix(in srgb, var(--foreground), var(--ns-muted) 35%);
}

/* heat shimmer/haze: a soft band sweeping the surface, opacity gated to
   --warm so it's invisible until the button is genuinely close to (or
   still cooling from) the limit — never at rest, never mid-warmup. */
.ns-button-cooldown-heat-haze{
  position: absolute;
  inset: 0;
  background-image: linear-gradient(100deg,
    transparent 30%,
    color-mix(in srgb, var(--ns-muted), var(--foreground) 30%) 50%,
    transparent 70%);
  background-size: 220% 100%;
  opacity: calc(var(--warm) * 0.35);
  animation: ns-button-cooldown-heat-shimmer 2.4s linear infinite;
}

.ns-button-cooldown-heat-label{
  position: relative;
  z-index: 1;
  letter-spacing: calc(var(--h) * 0.06em);
  transition: color 200ms ease-out;
}

@keyframes ns-button-cooldown-heat-shimmer{
  0%{ background-position: 130% 0; }
  100%{ background-position: -30% 0; }
}
@keyframes ns-button-cooldown-heat-hazard{
  0%, 100%{ opacity: 0.6; }
  50%{ opacity: 1; }
}

@media (prefers-reduced-motion: reduce){
  .ns-button-cooldown-heat-btn{ transform: none !important; }
  .ns-button-cooldown-heat-label{ letter-spacing: 0 !important; transition: none !important; }
  .ns-button-cooldown-heat-fill{ transition: none !important; }
  .ns-button-cooldown-heat-haze{ display: none !important; }
  .ns-button-cooldown-heat-btn[aria-disabled="true"] .ns-button-cooldown-heat-fill{
    animation: none !important;
    opacity: 1 !important;
  }
}
`}),a.jsxs("button",{ref:b,type:"button","aria-disabled":E?"true":void 0,"aria-describedby":x,onClick:T,className:"ns-button-cooldown-heat-btn inline-flex items-center justify-center rounded-sm border bg-background px-5 py-2.5 text-sm font-medium text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ns-accent",children:[a.jsx("span",{"aria-hidden":"true",className:"ns-button-cooldown-heat-fill"}),a.jsx("span",{"aria-hidden":"true",className:"ns-button-cooldown-heat-haze"}),a.jsx("span",{className:"ns-button-cooldown-heat-label",children:n})]}),a.jsx("p",{id:x,className:"mt-1.5 font-mono text-[11px] text-ns-muted",children:F}),a.jsx("span",{role:"status","aria-live":"polite",className:"sr-only",children:I})]})}function O(){return a.jsx("div",{className:"ns-stage",children:a.jsx(q,{children:"示例",onPress:()=>{}})})}export{O as default};
