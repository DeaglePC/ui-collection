import{r as d,j as i}from"./client-CsvIHAk3.js";function I({code:e,language:o,filename:a,showLineNumbers:c=!1,highlightLines:n,wrap:s=!1,maxHeight:r,copyable:h=!0,onCopy:b,className:m,style:z}){const v=typeof e=="string"?e:e==null?"":String(e),x=v.replace(/\r\n?/g,`
`).replace(/\n$/,""),g=O(o),w=d.useMemo(()=>H(X(x,g)),[x,g]),A=d.useMemo(()=>new Set(Array.isArray(n)?n:[]),[n]),f=a||F(o),k=d.useRef(null),[_,E]=d.useState(!1),[l,j]=d.useState(!1);d.useLayoutEffect(()=>{const t=k.current;if(!t)return;const u=()=>E(t.scrollWidth>t.clientWidth+1||t.scrollHeight>t.clientHeight+1);u();const p=new ResizeObserver(u);return p.observe(t),t.firstElementChild&&p.observe(t.firstElementChild),()=>p.disconnect()},[x,s,r,c]),d.useEffect(()=>{if(!l)return;const t=window.setTimeout(()=>j(!1),1400);return()=>window.clearTimeout(t)},[l]);const $=()=>U(v).then(t=>{t&&(j(!0),b?.(v))}),T=!!f||h,M=String(w.length).length;return i.jsxs("figure",{className:["ui-code",m].filter(Boolean).join(" "),"data-wrap":s||void 0,"data-numbers":c||void 0,style:{...z,"--ui-code-digits":M},children:[i.jsx("style",{href:"ui-code-block",precedence:"default",children:q}),T&&i.jsxs("figcaption",{className:"ui-code__head",children:[i.jsx("span",{className:"ui-code__label",dir:"auto",title:f||void 0,children:f}),h&&i.jsxs("button",{type:"button",className:"ui-code__copy","data-copied":l||void 0,"aria-label":l?"Copied":"Copy code",title:l?"Copied":"Copy code",onClick:$,children:[i.jsxs("svg",{className:"ui-code__copy-icon",viewBox:"0 0 16 16","aria-hidden":"true",children:[i.jsx("rect",{x:"5.5",y:"5.5",width:"8.5",height:"8.5",rx:"2"}),i.jsx("path",{d:"M10.5 3.75v-.25A1.5 1.5 0 0 0 9 2H3.5A1.5 1.5 0 0 0 2 3.5V9a1.5 1.5 0 0 0 1.5 1.5h.25"})]}),i.jsx("svg",{className:"ui-code__copy-done",viewBox:"0 0 16 16","aria-hidden":"true",children:i.jsx("path",{d:"M3.5 8.4 6.6 11.3 12.5 4.9"})})]})]}),h&&i.jsx("span",{className:"ui-code__sr",role:"status",children:l?"Copied":""}),i.jsx("div",{ref:k,className:"ui-code__scroll",style:r!=null?{maxHeight:r}:void 0,tabIndex:_?0:void 0,role:_?"region":void 0,"aria-label":_?`${f||"Code"}, code`:void 0,children:i.jsx("pre",{className:"ui-code__pre",dir:"ltr",children:i.jsx("code",{className:"ui-code__code",children:w.map((t,u)=>i.jsxs("span",{className:"ui-code__line","data-marked":A.has(u+1)||void 0,children:[c&&i.jsx("span",{className:"ui-code__ln","aria-hidden":"true",children:u+1}),i.jsx("span",{className:"ui-code__text",children:t.map(([p,S],B)=>p?i.jsx("span",{className:`ui-code__t-${p}`,children:S},B):S)})]},u))})})})]})}const R={ts:"js",tsx:"js",typescript:"js",js:"js",jsx:"js",javascript:"js",mjs:"js",cjs:"js",json:"json",jsonc:"json",bash:"bash",sh:"bash",shell:"bash",zsh:"bash",console:"bash",python:"python",py:"python"},J={ts:"TypeScript",typescript:"TypeScript",tsx:"TSX",js:"JavaScript",javascript:"JavaScript",jsx:"JSX",mjs:"JavaScript",cjs:"JavaScript",json:"JSON",jsonc:"JSON",bash:"Bash",sh:"Shell",shell:"Shell",zsh:"Zsh",console:"Terminal",python:"Python",py:"Python"},O=e=>e?R[e.toLowerCase()]??null:null,F=e=>e?J[e.toLowerCase()]??e:"",y="(?![\\s\\S])",C=`\\/\\*[\\s\\S]*?(?:\\*\\/|${y})`,Z={js:[["com",`\\/\\/[^\\n]*|${C}`],["str","\"(?:[^\"\\\\\\n]|\\\\.)*\"?|'(?:[^'\\\\\\n]|\\\\.)*'?|`(?:[^`\\\\]|\\\\[\\s\\S])*`?"],["num","\\b0[xXbBoO][\\da-fA-F_]+n?\\b|\\b\\d[\\d_]*(?:\\.\\d+)?(?:[eE][+-]?\\d+)?n?\\b"],["lit","\\b(?:true|false|null|undefined|NaN|Infinity)\\b"],["kw","\\b(?:abstract|as|async|await|break|case|catch|class|const|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|if|implements|import|in|instanceof|interface|keyof|let|new|of|private|protected|public|readonly|return|satisfies|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\\b"],["fn","(?<![\\w$])[A-Za-z_$][\\w$]*(?=\\s*\\()"]],json:[["com",`\\/\\/[^\\n]*|${C}`],["key",'"(?:[^"\\\\\\n]|\\\\.)*"(?=\\s*:)'],["str",'"(?:[^"\\\\\\n]|\\\\.)*"?'],["num","-?\\b\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?\\b"],["lit","\\b(?:true|false|null)\\b"]],bash:[["com","(?<![^\\s;|&(])#[^\\n]*"],["str",`"(?:[^"\\\\]|\\\\[\\s\\S])*"?|'[^']*'?`],["var","\\$\\{[^}\\n]*\\}?|\\$[A-Za-z_]\\w*|\\$[0-9@#?*$!-]"],["kw","\\b(?:if|then|else|elif|fi|for|in|do|done|while|until|case|esac|function|return|export|local|readonly|unset|exit)\\b"],["fn","(?<=^[ \\t]*|[|;&(][ \\t]*)[A-Za-z_.\\/~][\\w.\\/~+-]*(?![\\w=])"]],python:[["com","#[^\\n]*"],["str",`(?:\\b[rRbBuUfF]{1,2})?(?:"""[\\s\\S]*?(?:"""|${y})|'''[\\s\\S]*?(?:'''|${y})|"(?:[^"\\\\\\n]|\\\\.)*"?|'(?:[^'\\\\\\n]|\\\\.)*'?)`],["fn","@[A-Za-z_][\\w.]*"],["num","\\b0[xXoObB][\\da-fA-F_]+\\b|\\b\\d[\\d_]*(?:\\.\\d+)?(?:[eE][+-]?\\d+)?j?\\b"],["lit","\\b(?:True|False|None|self|cls)\\b"],["kw","\\b(?:and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|raise|return|try|while|with|yield)\\b"],["fn","\\b[A-Za-z_]\\w*(?=\\s*\\()"]]},N=new Map;function L(e){let o=N.get(e);if(!o){const a=Z[e];o={re:new RegExp(a.map(([,c])=>`(${c})`).join("|"),"gm"),kinds:a.map(([c])=>c)},N.set(e,o)}return o}function X(e,o){if(!o||!e)return[[null,e]];const{re:a,kinds:c}=L(o);a.lastIndex=0;const n=[];let s=0,r;for(;r=a.exec(e);){if(!r[0]){a.lastIndex++;continue}r.index>s&&n.push([null,e.slice(s,r.index)]);const h=r.findIndex((b,m)=>m>0&&b!==void 0);n.push([c[h-1]??null,r[0]]),s=r.index+r[0].length}return s<e.length&&n.push([null,e.slice(s)]),n}function H(e){const o=[[]];for(const[a,c]of e)c.split(`
`).forEach((n,s)=>{s&&o.push([]),n&&o[o.length-1].push([a,n])});return o}async function U(e){try{return await navigator.clipboard.writeText(e),!0}catch{const o=document.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style.cssText="position:fixed;opacity:0;pointer-events:none",document.body.appendChild(o),o.select();let a=!1;try{a=document.execCommand("copy")}catch{a=!1}return o.remove(),a}}const q=`
/* Colors as variables – override them on .ui-code (see Theming in the docs) */
.ui-code {
  --ui-code-tray: var(--aui-subtle, #f4f4f4);
  --ui-code-bg: var(--aui-surface, #ffffff);
  --ui-code-line: var(--aui-border, #e7e7e7);
  --ui-code-ink: var(--aui-ink, #171717);
  --ui-code-muted: var(--aui-muted, #737373);
  --ui-code-faint: #b4b4b4;
  --ui-code-icon: var(--aui-muted, #8a8a8a);
  --ui-code-wash: rgba(0, 0, 0, 0.05);
  --ui-code-mark: rgba(0, 96, 226, 0.06);
  --ui-code-mark-edge: rgba(0, 96, 226, 0.5);
  --ui-code-focus: var(--aui-focus, rgba(0, 96, 226, 0.7));
  --ui-code-ease: var(--aui-ease, cubic-bezier(0.22, 1, 0.36, 1));
  --ui-code-mono: var(--aui-font-mono, ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace);
  --ui-code-r: calc(var(--aui-radius, 10px) + 2px);
  --ui-code-pad: 3px;
  /* Tokens */
  --ui-code-com: #9a9a9a;
  --ui-code-str: #0b8576;
  --ui-code-kw: #8a35d6;
  --ui-code-num: #b25e00;
  --ui-code-lit: #b25e00;
  --ui-code-fn: #1f63c9;
  --ui-code-key: #171717;
  --ui-code-var: #1f63c9;

  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  margin: 0;
  padding: var(--ui-code-pad);
  border-radius: var(--ui-code-r);
  background: var(--ui-code-tray);
  color: var(--ui-code-ink);
  font-family: var(--aui-font, "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);
  font-size: 13.5px;
  line-height: 20px;
  -webkit-font-smoothing: antialiased;
}
.ui-code *, .ui-code *::before, .ui-code *::after { box-sizing: border-box; }

/* Header on the tray: the name on the left, copy on the right – the button as far from the right edge as from the top */
.ui-code__head {
  display: flex;
  flex: none;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 3px 0 13px;
}
.ui-code__label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  font-size: 12.5px;
  line-height: 16px;
  font-weight: 500;
  color: var(--ui-code-muted);
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ui-code__sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

/* Copy: a ghost button on the tray; the copy glyph blurs into a check */
.ui-code__copy {
  all: unset;
  position: relative;
  display: grid;
  flex: none;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: calc(var(--ui-code-r) - 5px);
  color: var(--ui-code-icon);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-code__copy svg {
  position: absolute;
  width: 15px;
  height: 15px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: opacity 200ms ease, transform 320ms var(--ui-code-ease), filter 200ms ease;
}
.ui-code__copy-icon rect { fill: none; stroke: currentColor; }
.ui-code__copy .ui-code__copy-done { opacity: 0; transform: scale(0.6); filter: blur(2px); stroke-width: 1.7; }
.ui-code__copy[data-copied] { color: var(--ui-code-ink); }
.ui-code__copy[data-copied] .ui-code__copy-icon { opacity: 0; transform: scale(0.6); filter: blur(2px); }
.ui-code__copy[data-copied] .ui-code__copy-done { opacity: 1; transform: none; filter: none; }
.ui-code__copy:focus-visible { outline: 2px solid var(--ui-code-focus); outline-offset: 2px; }
@media (hover: hover) {
  .ui-code__copy:hover { background: var(--ui-code-wash); color: var(--ui-code-ink); }
}

/* The white card with the code: scrolls sideways (or wraps) and, past maxHeight, down – never wider than its container */
.ui-code__scroll {
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  overflow: auto;
  overscroll-behavior-x: contain;
  border-radius: calc(var(--ui-code-r) - var(--ui-code-pad));
  background: var(--ui-code-bg);
  box-shadow: 0 0 0 1px var(--ui-code-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.18) transparent;
}
.ui-code__scroll:focus-visible { outline: 2px solid var(--ui-code-focus); outline-offset: -2px; }
.ui-code__pre {
  margin: 0;
  padding: 12px 0;
  font-family: var(--ui-code-mono);
  font-size: 12.5px;
  line-height: 20px;
  color: var(--ui-code-ink);
  tab-size: 2;
  text-align: left;
}
.ui-code__code { display: block; width: max-content; min-width: 100%; font: inherit; }
.ui-code[data-wrap] .ui-code__code { width: auto; }

.ui-code__line { display: flex; min-height: 20px; padding: 0 16px; }
.ui-code__text { flex: 1 0 auto; white-space: pre; }
.ui-code[data-wrap] .ui-code__text { flex: 1 1 auto; min-width: 0; white-space: pre-wrap; overflow-wrap: anywhere; }
.ui-code__line[data-marked] { background: var(--ui-code-mark); box-shadow: inset 2px 0 0 var(--ui-code-mark-edge); }

/* Line numbers stay in place while long lines scroll sideways */
.ui-code[data-numbers] .ui-code__line { padding-left: 0; }
.ui-code__ln {
  position: sticky;
  left: 0;
  z-index: 1;
  flex: none;
  min-width: calc(var(--ui-code-digits, 2) * 1ch + 32px);
  padding: 0 14px 0 18px;
  background: var(--ui-code-bg);
  color: var(--ui-code-faint);
  text-align: right;
  font-variant-numeric: tabular-nums;
  -webkit-user-select: none;
  user-select: none;
}
.ui-code__line[data-marked] .ui-code__ln {
  background: linear-gradient(var(--ui-code-mark), var(--ui-code-mark)), var(--ui-code-bg);
  box-shadow: inset 2px 0 0 var(--ui-code-mark-edge);
  color: var(--ui-code-muted);
}

.ui-code__t-com { color: var(--ui-code-com); }
.ui-code__t-str { color: var(--ui-code-str); }
.ui-code__t-kw { color: var(--ui-code-kw); }
.ui-code__t-num { color: var(--ui-code-num); }
.ui-code__t-lit { color: var(--ui-code-lit); }
.ui-code__t-fn { color: var(--ui-code-fn); }
.ui-code__t-key { color: var(--ui-code-key); }
.ui-code__t-var { color: var(--ui-code-var); }

/* Touch screens: a bigger hit area around the copy button, the look stays */
@media (pointer: coarse) {
  .ui-code__copy::after { content: ""; position: absolute; inset: -5px; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-code__copy, .ui-code__copy svg { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-code {
  --ui-code-tray: var(--aui-subtle, #1d1d20);
  --ui-code-bg: var(--aui-surface, #161618);
  --ui-code-line: var(--aui-border, rgba(255, 255, 255, 0.1));
  --ui-code-ink: var(--aui-ink, #ededed);
  --ui-code-muted: var(--aui-muted, #8b8b92);
  --ui-code-faint: #55555b;
  --ui-code-icon: var(--aui-muted, #8b8b92);
  --ui-code-wash: rgba(255, 255, 255, 0.07);
  --ui-code-mark: rgba(77, 141, 255, 0.1);
  --ui-code-mark-edge: rgba(77, 141, 255, 0.6);
  --ui-code-focus: var(--aui-focus, rgba(77, 141, 255, 0.8));
  --ui-code-com: #6e6e75;
  --ui-code-str: var(--aui-teal, #4fc3b4);
  --ui-code-kw: #cfaef5;
  --ui-code-num: var(--aui-orange, #f2a15c);
  --ui-code-lit: var(--aui-orange, #f2a15c);
  --ui-code-fn: #7cb4ff;
  --ui-code-key: #ededed;
  --ui-code-var: #7cb4ff;
}
:where(.dark, [data-theme="dark"]) .ui-code__scroll { box-shadow: 0 0 0 1px var(--ui-code-line); scrollbar-color: rgba(255, 255, 255, 0.2) transparent; }
`;function K(){return i.jsx("div",{className:"stage",children:i.jsx(I,{items:[{id:"a",label:"示例",value:"a",href:"#",name:"示例",title:"示例",text:"预览文字",status:"done",quote:"预览"}],options:[{label:"示例",value:"a"}],steps:[{id:"a",label:"一步"}],nodes:[{id:"a",label:"示例",children:[]}],comments:[{id:"a",author:"Ada",body:"预览",text:"预览"}],notifications:[{id:"a",title:"示例",body:"预览"}],tips:[{title:"示例",body:"预览"}],logos:["甲","乙","丙"],testimonials:[{name:"Ada",quote:"预览",role:"设计"}],links:[{label:"示例",href:"#"}],columns:[{id:"a",header:"列",accessorKey:"a"}],data:[{a:"示例"}],text:"预览文字",value:"预览",label:"示例",code:"const n = 1",title:"标题",placeholder:"输入"})})}export{K as default};
