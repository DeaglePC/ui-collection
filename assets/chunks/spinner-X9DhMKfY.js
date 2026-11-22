import{j as e}from"./client-CsvIHAk3.js";function t({size:n=14,label:i,className:s,...r}){return e.jsxs(e.Fragment,{children:[e.jsx("style",{href:"ui-spinner",precedence:"default",children:o}),e.jsxs("svg",{...r,className:["ui-spn",s].filter(Boolean).join(" "),viewBox:"0 0 16 16",width:n,height:n,...i?{role:"status","aria-label":i}:{"aria-hidden":!0},children:[e.jsx("circle",{cx:"8",cy:"8",r:"6",fill:"none",stroke:"currentColor",strokeOpacity:"0.2",strokeWidth:"2"}),e.jsx("path",{d:"M8 2a6 6 0 0 1 6 6",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})]})}const o=`
/* One turn every --ui-spn-speed – override it on .ui-spn (see Theming in the docs) */
.ui-spn {
  --ui-spn-speed: 750ms;
  display: inline-block;
  flex: none;
  vertical-align: middle;
  animation: ui-spn-turn var(--ui-spn-speed) linear infinite;
}
@keyframes ui-spn-turn { to { rotate: 360deg; } }

/* Reduced motion: it still turns – it is the only sign that work goes on – but slowly */
@media (prefers-reduced-motion: reduce) {
  .ui-spn { --ui-spn-speed: 2400ms; }
}
`;function u(){return e.jsx("div",{className:"stage",children:e.jsx(t,{})})}export{u as default};
