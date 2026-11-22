import{j as e,r as h}from"./client-CsvIHAk3.js";function u({keys:a,size:l="sm",platform:t,className:p,children:o,...s}){const i=w(),n=t==="mac"||t==="other"?t:i,d=(a==null?[]:(typeof a=="string"?[a]:[...a]).filter(r=>typeof r=="string"&&r.trim()!=="")).map(r=>b(r,n));return!d.length&&(o==null||o===!1||o==="")?null:e.jsxs(e.Fragment,{children:[e.jsx("style",{href:"ui-kbd",precedence:"default",children:y}),e.jsx("kbd",{className:["ui-kbd",p].filter(Boolean).join(" "),"data-size":l==="md"?"md":"sm","data-os":n,...s,children:d.length?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"ui-kbd__keys","aria-hidden":"true",children:d.map((r,c)=>e.jsx("span",{className:"ui-kbd__key","data-glyph":r.glyph?"":void 0,children:r.label},c))}),e.jsx("span",{className:"ui-kbd__sr",children:d.map(r=>r.spoken).join(" ")})]}):o})]})}const m={mod:{mac:"⌘",other:"Ctrl",spoken:["Command","Control"],glyph:!0},cmd:{mac:"⌘",other:"⌘",spoken:["Command","Command"],glyph:!0},ctrl:{mac:"⌃",other:"Ctrl",spoken:["Control","Control"],glyph:!0},alt:{mac:"⌥",other:"Alt",spoken:["Option","Alt"],glyph:!0},shift:{mac:"⇧",other:"Shift",spoken:["Shift","Shift"],glyph:!0},enter:{mac:"↵",other:"Enter",spoken:["Return","Enter"],glyph:!0},esc:{mac:"Esc",other:"Esc",spoken:["Escape","Escape"]},tab:{mac:"Tab",other:"Tab",spoken:["Tab","Tab"]},space:{mac:"Space",other:"Space",spoken:["Space","Space"]},backspace:{mac:"⌫",other:"Backspace",spoken:["Delete","Backspace"],glyph:!0},delete:{mac:"⌦",other:"Del",spoken:["Forward delete","Delete"],glyph:!0},up:{mac:"↑",other:"↑",spoken:["Up arrow","Up arrow"],glyph:!0},down:{mac:"↓",other:"↓",spoken:["Down arrow","Down arrow"],glyph:!0},left:{mac:"←",other:"←",spoken:["Left arrow","Left arrow"],glyph:!0},right:{mac:"→",other:"→",spoken:["Right arrow","Right arrow"],glyph:!0},pageup:{mac:"PgUp",other:"PgUp",spoken:["Page up","Page up"]},pagedown:{mac:"PgDn",other:"PgDn",spoken:["Page down","Page down"]},home:{mac:"Home",other:"Home",spoken:["Home","Home"]},end:{mac:"End",other:"End",spoken:["End","End"]}},g={command:"cmd",meta:"cmd","⌘":"cmd",control:"ctrl",option:"alt",opt:"alt",return:"enter",escape:"esc",del:"delete",arrowup:"up",arrowdown:"down",arrowleft:"left",arrowright:"right",pgup:"pageup",pgdn:"pagedown"},k={".":"Period",",":"Comma","/":"Slash","\\":"Backslash","?":"Question mark","[":"Left bracket","]":"Right bracket","-":"Minus","+":"Plus","=":"Equals",";":"Semicolon","'":"Quote","`":"Backtick"},b=(a,l)=>{const t=a.trim(),p=g[t.toLowerCase()]??t.toLowerCase(),o=m[p];if(o){const i=l==="mac",n=i?o.mac:o.other;return{label:n,spoken:o.spoken[i?0:1],glyph:!!o.glyph&&n.length===1}}const s=t.length===1?t.toUpperCase():t;return{label:s,spoken:k[t]??s,glyph:!1}},f=()=>()=>{},x=()=>{if(typeof navigator>"u")return!1;const a=navigator;return/mac|iphone|ipad|ipod/i.test(a.userAgentData?.platform||a.platform||a.userAgent||"")},w=()=>h.useSyncExternalStore(f,x,()=>!1)?"mac":"other",y=`
/* Colors as variables – override them on .ui-kbd (see Theming in the docs). A small white keycap with a 1px edge and a
   slightly heavier bottom, like a key on the keyboard */
.ui-kbd {
  --ui-kbd-bg: var(--aui-surface, #ffffff);
  --ui-kbd-ink: var(--aui-muted, #616161);
  --ui-kbd-line: var(--aui-border, #e3e3e3);
  --ui-kbd-depth: #d9d9d9;
  --h: 18px;
  --pad: 5px;

  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: var(--h);
  height: var(--h);
  margin: 0;
  padding: 0 var(--pad);
  border-radius: calc(var(--aui-radius-sm, 7px) - 2px);
  background: var(--ui-kbd-bg);
  box-shadow: inset 0 0 0 1px var(--ui-kbd-line), inset 0 -1px 0 var(--ui-kbd-depth);
  color: var(--ui-kbd-ink);
  font-family: var(--aui-font, "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 11px;
  font-weight: 500;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.02em;
  white-space: nowrap;
  vertical-align: middle;
  font-variant-numeric: tabular-nums;
  -webkit-font-smoothing: antialiased;
  user-select: none;
}
.ui-kbd[data-size="md"] {
  --h: 22px;
  --pad: 6px;
  border-radius: calc(var(--aui-radius-sm, 7px) - 1px);
  font-size: 12px;
}

/* A combo sits in one chip: ⌘K close together, "Ctrl K" with a small space – left to right even in RTL text, like
   the keys are pressed */
.ui-kbd__keys {
  display: inline-flex;
  align-items: center;
  gap: 1px;
  direction: ltr;
  unicode-bidi: isolate;
  /* The heavier bottom edge takes a pixel – the glyphs sit a half pixel higher to look centred */
  translate: 0 -0.5px;
}
.ui-kbd[data-os="other"] .ui-kbd__keys { gap: 3px; }
/* ⌘ ⇧ ⌥ and arrows look small next to letters in most fonts – a touch larger */
.ui-kbd__key[data-glyph] { font-size: 1.1em; }

/* Read by screen readers, not drawn */
.ui-kbd__sr {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
.ui-kbd:has(.ui-kbd__sr) { position: relative; }

/* Windows high contrast: the shadows are dropped, an edge keeps the chip visible */
@media (forced-colors: active) {
  .ui-kbd { border: 1px solid CanvasText; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-kbd {
  --ui-kbd-bg: var(--aui-surface, #232326);
  --ui-kbd-ink: var(--aui-muted, #a1a1a6);
  --ui-kbd-line: var(--aui-border, #34343a);
  --ui-kbd-depth: #1a1a1d;
}
`;function _(){return e.jsx("div",{className:"stage",children:e.jsx(u,{})})}export{_ as default};
