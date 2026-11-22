const e=[{path:"200-receipt-fold.html",language:"html",content:`<!-- Lucian UX/UI Prompt #200 · MIT License (c) 2026 Seokwoooo · https://lucianlabs.dev/en/uxui-prompt/#200 -->
<!-- @meta {"title": "접히는 정산 영수증", "category": "작업·시스템", "summary": "합계만 보이게 접혀 있는 영수증입니다. 상세 내역을 누르면 종이가 펼쳐지며 구매 항목과 부가세가 나타나고, 다시 누르면 접힙니다.", "hint": "‘상세 내역’을 눌러 영수증을 펼쳐 보세요", "shape": "square", "fluid": true, "hue": "#a29371", "hue2": "#7B61FF", "tags": ["receipt-fold", "new-century"]} -->
<!-- @demo [["wait", 600], ["tap", ".u200 .expand", 0], ["wait", 1900], ["tap", ".u200 .expand", 0], ["wait", 1100]] -->
<!-- @en {"title": "Folding receipt", "summary": "A receipt folded down to just its total. Press details and the paper unfolds to show the items and VAT; press again to fold it back.", "hint": "Press “Details” to unfold the receipt","map":[
  ["상세 내역 ↓", "Details ↓"],
  ["내역 접기 ↑", "Hide details ↑"],
  ["부가세 10%", "VAT 10%"]
]} -->
<style>
.u200 {width:100%;max-width:370px;font-size:14px;line-height:1.45;position:relative;--a:#cd5339;--soft:color-mix(in srgb,var(--a) 12%,var(--ux-surface));font-variant-numeric:tabular-nums}
.u200 button{border:1px solid var(--ux-line-2);background:var(--ux-surface);border-radius:9px;padding:9px 12px;min-height:38px;transition:background .2s,transform .3s,color .2s;color:var(--ux-ink)}
.u200 button:active{transform:translateY(1px)}.u200 button:disabled{opacity:.4;cursor:default}.u200 button.primary{background:var(--ux-ink);color:var(--ux-page);border-color:transparent}
.u200 .muted{color:var(--ux-ink-2);font-size:12px}.u200 .eyebrow{font:600 10px/1.2 ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase;color:var(--ux-ink-2)}
.u200 .row{display:flex;align-items:center;justify-content:space-between;gap:8px}.u200 .actions{display:flex;gap:8px;align-items:center;margin-top:16px;flex-wrap:wrap}
.u200 input,.u200 select{max-width:100%;min-width:0;background:var(--ux-surface);color:var(--ux-ink);border:1px solid var(--ux-line-2);border-radius:7px;padding:8px;font:inherit}
.u200 output{font-variant-numeric:tabular-nums}.u200 :focus-visible{outline:2px solid var(--ux-accent);outline-offset:3px}
@media(prefers-reduced-motion:reduce){.u200 *,.u200 *::before,.u200 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
.u200 .receipt{max-width:302px;margin:auto;background:#f4edda;color:#3d3c31;padding:16px 23px 22px;position:relative;filter:drop-shadow(0 9px 9px #0002);clip-path:polygon(0 0,100% 0,100% 97%,95% 100%,90% 97%,85% 100%,80% 97%,75% 100%,70% 97%,65% 100%,60% 97%,55% 100%,50% 97%,45% 100%,40% 97%,35% 100%,30% 97%,25% 100%,20% 97%,15% 100%,10% 97%,5% 100%,0 97%)}.u200 .receipt h3{font:italic 27px/.95 Georgia;text-align:center;margin:1px 0 10px}.u200 .receipt .meta{text-align:center;font:9px ui-monospace;letter-spacing:1px;color:#5d5b4f;padding-bottom:9px;border-bottom:1px dashed #969383}.u200 .total{display:flex;align-items:center;justify-content:space-between;margin-top:10px;font:11px ui-monospace}.u200 .total strong{font:24px Georgia;letter-spacing:-1px}.u200 .fold{display:grid;grid-template-rows:0fr;transition:grid-template-rows .45s cubic-bezier(.22,1,.36,1);transform-origin:top}.u200 .fold-inner{overflow:hidden;min-height:0}.u200 .receipt.expanded .fold{grid-template-rows:1fr}.u200 .line{display:flex;justify-content:space-between;font:11px/1.4 ui-monospace;margin:4px 0;gap:10px}.u200 .line.sub{border-top:1px dashed #a09b88;padding-top:8px}.u200 .expand{width:100%;background:transparent;border:0;border-top:1px dashed #999580;border-bottom:1px dashed #999580;color:#514d3f;border-radius:0;font:10px ui-monospace;min-height:28px;margin-top:8px;padding:5px 0}.u200 .receipt button{color:#3d3c31;background:transparent}.u200 .split{display:flex;justify-content:space-between;align-items:center;margin-top:9px;font-size:11px}.u200 .split input{width:53px;min-height:30px;padding:4px 6px;border:1px solid #a09b88;background:#faf5e7;color:#3d3c31;font:12px ui-monospace}.u200 .per{font:12px ui-monospace;text-align:center;margin-top:9px}.u200 .footer{text-align:center;margin-top:10px;font:9px ui-monospace;letter-spacing:2px}

/* Focused composition */
.u200{max-width:320px}.u200 {max-width:250px}.u200 .receipt{padding:25px 25px 32px;max-width:250px}.u200 .receipt h3{font:italic 29px Georgia;margin:0 0 20px;text-align:center}.u200 .total{justify-content:center;margin:0 0 22px}.u200 .total strong{font:34px Georgia;letter-spacing:-1px}.u200 .expand{margin:0;padding:8px 0;font-size:11px;min-height:32px}.u200 .line{font-size:10px;margin:8px 0;line-height:1.6}</style>
<div class="ux u200" data-state="initial"><div class="receipt"><h3>Corner.</h3><div class="total"><strong>₩18,700</strong></div><button class="expand" aria-expanded="false" aria-controls="u200-lines">상세 내역 ↓</button><div class="fold" id="u200-lines" inert><div class="fold-inner"><div class="line" style="margin-top:16px"><span>FLAT WHITE × 2</span><span>10,000</span></div><div class="line"><span>CARDAMOM BUN</span><span>7,000</span></div><div class="line sub"><span>부가세 10%</span><span>1,700</span></div></div></div></div></div>
<script>
(()=>{const root=document.currentScript.previousElementSibling;const q=s=>root.querySelector(s),qa=s=>[...root.querySelectorAll(s)];const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;const state=s=>root.dataset.state=s;const pulse=(el,frames,duration=450)=>{if(!reduced)el.animate(frames,{duration,easing:'cubic-bezier(.2,.8,.2,1)'});};let open=false;q('.expand').onclick=()=>{open=!open;q('.receipt').classList.toggle('expanded',open);q('.expand').setAttribute('aria-expanded',open);q('.expand').textContent=open?'내역 접기 ↑':'상세 내역 ↓';q('.fold').inert=!open;state(open?'expanded':'initial')};})();
<\/script>
`}],t=`请把下面这个 UI 元素做到我的项目里。

1. 先确认项目的框架（React、Next、Vue、Svelte、纯 HTML 等）、样式方式（CSS 模块、Tailwind、全局 CSS）和主题方式（data-theme、dark 类、CSS 变量）。
2. 先找到插入位置的文件和已有元素，说明它在哪里被使用。
3. 在插入位置作为新组件添加；如果有要替换的对象，用下面的元素替换。
4. 保留已有数据、props、事件处理、表单值和无障碍属性。
5. 以下面代码的结构、形态、动效值（时间、曲线、延迟）为基准移植。可以按框架改成组件和状态，但不要重新猜测设计。
6. 把下面的 --ux-* 令牌映射到项目已有的主题变量，同时保留亮色和暗色两套值，并在两种主题下确认。
7. 样式只放在这个元素的类（.uNNN）里，不要改全局 CSS 或全局脚本。避免类名冲突。
8. 示例文案和数据换成项目的真实数据。不要带走图库专用的演示代码。把代码顶部的许可证注释留在新组件文件顶部。
9. 在 prefers-reduced-motion 开启时，功能和最终状态仍然要可用。

完成后请报告：改了哪些文件、和原来相比行为有何不同、确认了哪些范围（两套主题、移动宽度、键盘）、哪些没能确认。

--- 代码开始（以下是原作者提供的、实际可运行的原件，MIT License） ---
<!-- Lucian UX/UI Prompt #200 · MIT License (c) 2026 Seokwoooo · https://lucianlabs.dev/en/uxui-prompt/#200 -->
<!-- @meta {"title": "접히는 정산 영수증", "category": "작업·시스템", "summary": "합계만 보이게 접혀 있는 영수증입니다. 상세 내역을 누르면 종이가 펼쳐지며 구매 항목과 부가세가 나타나고, 다시 누르면 접힙니다.", "hint": "‘상세 내역’을 눌러 영수증을 펼쳐 보세요", "shape": "square", "fluid": true, "hue": "#a29371", "hue2": "#7B61FF", "tags": ["receipt-fold", "new-century"]} -->
<!-- @demo [["wait", 600], ["tap", ".u200 .expand", 0], ["wait", 1900], ["tap", ".u200 .expand", 0], ["wait", 1100]] -->
<!-- @en {"title": "Folding receipt", "summary": "A receipt folded down to just its total. Press details and the paper unfolds to show the items and VAT; press again to fold it back.", "hint": "Press “Details” to unfold the receipt","map":[
  ["상세 내역 ↓", "Details ↓"],
  ["내역 접기 ↑", "Hide details ↑"],
  ["부가세 10%", "VAT 10%"]
]} -->
<style>
.u200 {width:100%;max-width:370px;font-size:14px;line-height:1.45;position:relative;--a:#cd5339;--soft:color-mix(in srgb,var(--a) 12%,var(--ux-surface));font-variant-numeric:tabular-nums}
.u200 button{border:1px solid var(--ux-line-2);background:var(--ux-surface);border-radius:9px;padding:9px 12px;min-height:38px;transition:background .2s,transform .3s,color .2s;color:var(--ux-ink)}
.u200 button:active{transform:translateY(1px)}.u200 button:disabled{opacity:.4;cursor:default}.u200 button.primary{background:var(--ux-ink);color:var(--ux-page);border-color:transparent}
.u200 .muted{color:var(--ux-ink-2);font-size:12px}.u200 .eyebrow{font:600 10px/1.2 ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase;color:var(--ux-ink-2)}
.u200 .row{display:flex;align-items:center;justify-content:space-between;gap:8px}.u200 .actions{display:flex;gap:8px;align-items:center;margin-top:16px;flex-wrap:wrap}
.u200 input,.u200 select{max-width:100%;min-width:0;background:var(--ux-surface);color:var(--ux-ink);border:1px solid var(--ux-line-2);border-radius:7px;padding:8px;font:inherit}
.u200 output{font-variant-numeric:tabular-nums}.u200 :focus-visible{outline:2px solid var(--ux-accent);outline-offset:3px}
@media(prefers-reduced-motion:reduce){.u200 *,.u200 *::before,.u200 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
.u200 .receipt{max-width:302px;margin:auto;background:#f4edda;color:#3d3c31;padding:16px 23px 22px;position:relative;filter:drop-shadow(0 9px 9px #0002);clip-path:polygon(0 0,100% 0,100% 97%,95% 100%,90% 97%,85% 100%,80% 97%,75% 100%,70% 97%,65% 100%,60% 97%,55% 100%,50% 97%,45% 100%,40% 97%,35% 100%,30% 97%,25% 100%,20% 97%,15% 100%,10% 97%,5% 100%,0 97%)}.u200 .receipt h3{font:italic 27px/.95 Georgia;text-align:center;margin:1px 0 10px}.u200 .receipt .meta{text-align:center;font:9px ui-monospace;letter-spacing:1px;color:#5d5b4f;padding-bottom:9px;border-bottom:1px dashed #969383}.u200 .total{display:flex;align-items:center;justify-content:space-between;margin-top:10px;font:11px ui-monospace}.u200 .total strong{font:24px Georgia;letter-spacing:-1px}.u200 .fold{display:grid;grid-template-rows:0fr;transition:grid-template-rows .45s cubic-bezier(.22,1,.36,1);transform-origin:top}.u200 .fold-inner{overflow:hidden;min-height:0}.u200 .receipt.expanded .fold{grid-template-rows:1fr}.u200 .line{display:flex;justify-content:space-between;font:11px/1.4 ui-monospace;margin:4px 0;gap:10px}.u200 .line.sub{border-top:1px dashed #a09b88;padding-top:8px}.u200 .expand{width:100%;background:transparent;border:0;border-top:1px dashed #999580;border-bottom:1px dashed #999580;color:#514d3f;border-radius:0;font:10px ui-monospace;min-height:28px;margin-top:8px;padding:5px 0}.u200 .receipt button{color:#3d3c31;background:transparent}.u200 .split{display:flex;justify-content:space-between;align-items:center;margin-top:9px;font-size:11px}.u200 .split input{width:53px;min-height:30px;padding:4px 6px;border:1px solid #a09b88;background:#faf5e7;color:#3d3c31;font:12px ui-monospace}.u200 .per{font:12px ui-monospace;text-align:center;margin-top:9px}.u200 .footer{text-align:center;margin-top:10px;font:9px ui-monospace;letter-spacing:2px}

/* Focused composition */
.u200{max-width:320px}.u200 {max-width:250px}.u200 .receipt{padding:25px 25px 32px;max-width:250px}.u200 .receipt h3{font:italic 29px Georgia;margin:0 0 20px;text-align:center}.u200 .total{justify-content:center;margin:0 0 22px}.u200 .total strong{font:34px Georgia;letter-spacing:-1px}.u200 .expand{margin:0;padding:8px 0;font-size:11px;min-height:32px}.u200 .line{font-size:10px;margin:8px 0;line-height:1.6}</style>
<div class="ux u200" data-state="initial"><div class="receipt"><h3>Corner.</h3><div class="total"><strong>₩18,700</strong></div><button class="expand" aria-expanded="false" aria-controls="u200-lines">상세 내역 ↓</button><div class="fold" id="u200-lines" inert><div class="fold-inner"><div class="line" style="margin-top:16px"><span>FLAT WHITE × 2</span><span>10,000</span></div><div class="line"><span>CARDAMOM BUN</span><span>7,000</span></div><div class="line sub"><span>부가세 10%</span><span>1,700</span></div></div></div></div></div>
<script>
(()=>{const root=document.currentScript.previousElementSibling;const q=s=>root.querySelector(s),qa=s=>[...root.querySelectorAll(s)];const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;const state=s=>root.dataset.state=s;const pulse=(el,frames,duration=450)=>{if(!reduced)el.animate(frames,{duration,easing:'cubic-bezier(.2,.8,.2,1)'});};let open=false;q('.expand').onclick=()=>{open=!open;q('.receipt').classList.toggle('expanded',open);q('.expand').setAttribute('aria-expanded',open);q('.expand').textContent=open?'내역 접기 ↑':'상세 내역 ↓';q('.fold').inert=!open;state(open?'expanded':'initial')};})();
<\/script>
`,n={files:e,prompt:t};export{n as default,e as files,t as prompt};
