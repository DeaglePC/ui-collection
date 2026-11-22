const e=JSON.parse(`[{"path":"333-voice-record-button.html","language":"html","content":"<!-- Lucian UX/UI Prompt #333 · MIT License (c) 2026 Seokwoooo · https://lucianlabs.dev/en/uxui-prompt/#333 -->\\n<!-- @meta {\\"title\\":\\"밀어서 취소하는 음성 녹음\\",\\"category\\":\\"폼·입력\\",\\"summary\\":\\"마이크 버튼을 누르고 있으면 녹음이 시작되어 시간이 흐르고, 목소리 크기만큼 파형이 오른쪽에서 밀려 들어옵니다. 누른 채 왼쪽으로 밀면 ‘밀어서 취소’가 흐려지다 기준을 넘는 순간 휴지통이 아래에서 올라와 뚜껑을 열고, 빨간 녹음 방울이 포물선을 그리며 떨어져 들어간 뒤 뚜껑이 닫히고 통이 한 번 흔들립니다. 그냥 떼면 음성 메시지 말풍선이 대화창에 올라갑니다.\\",\\"hint\\":\\"마이크 버튼을 길게 누르고 있다가 떼면 보내지고, 누른 채 왼쪽으로 밀면 취소됩니다\\",\\"shape\\":\\"square\\",\\"tags\\":[\\"voice\\",\\"record\\",\\"hold\\",\\"chat\\",\\"gesture\\"]} -->\\n<!-- @demo [[\\"wait\\",700],[\\"hold\\",\\".u333-mic\\",0,2200,{\\"after\\":1400}],[\\"drag\\",\\".u333-mic\\",0,[0.5,0.5],[-3.6,0.5],1600,{\\"after\\":1500}],[\\"hold\\",\\".u333-mic\\",0,1500,{\\"after\\":1600}]] -->\\n<!-- @en {\\"title\\":\\"Slide-to-cancel voice recorder\\",\\"summary\\":\\"Hold the mic button to start recording: the timer runs and a waveform sized to your voice slides in from the right. Keep holding and slide left, and ‘Slide to cancel’ fades until, past the line, a trash can rises from below and opens its lid, a red recording blob arcs over and drops in, and the lid shuts as the can gives a little shake. Simply let go and a voice message bubble pops up in the chat.\\",\\"hint\\":\\"Hold the mic button and let go to send, or slide left while holding to cancel\\",\\"map\\":[\\n  [\\"‹ 밀어서 취소<\\", \\"‹ Slide to cancel<\\"],\\n  [\\"aria-label=\\\\\\"눌러서 녹음, 떼면 전송\\\\\\"\\", \\"aria-label=\\\\\\"Hold to record, release to send\\\\\\"\\"],\\n  [\\">오늘 회의 몇 시였죠?<\\", \\">What time was the meeting today?<\\"],\\n  [\\"'음성 메시지 '\\", \\"'Voice message '\\"],\\n  [\\"'녹음 취소됨'\\", \\"'Recording canceled'\\"],\\n  [\\">수아<\\", \\">Sua<\\"]\\n]} -->\\n<style>\\n.u333{position:relative;width:340px;height:350px;display:flex;flex-direction:column;padding:14px;border-radius:28px;background:var(--ux-surface);box-shadow:0 0 0 1px var(--ux-line),0 30px 60px -36px var(--ux-shadow-strong);overflow:hidden}\\n.u333-chat{flex:1;display:flex;flex-direction:column;justify-content:flex-end;gap:8px;padding:4px 4px 12px;overflow:hidden}\\n.u333-in{align-self:flex-start;max-width:78%;padding:9px 13px;border-radius:18px 18px 18px 6px;background:var(--ux-surface-2);font-size:13.5px;font-weight:600}\\n.u333-in small{display:block;margin-bottom:2px;font-size:11px;font-weight:750;color:var(--ux-ink-3)}\\n.u333-vm{align-self:flex-end;display:flex;align-items:center;gap:8px;padding:9px 12px;border-radius:18px 18px 6px 18px;background:var(--ux-accent);color:var(--ux-accent-ink);animation:u333-up .5s var(--ux-spring)}\\n@keyframes u333-up{from{transform:translateY(30px) scale(.8);opacity:0}}\\n.u333-vm i{display:block;width:0;height:0;border-left:9px solid currentColor;border-top:6px solid transparent;border-bottom:6px solid transparent}\\n.u333-vm .w{display:flex;align-items:center;gap:2px;height:20px}\\n.u333-vm .w b{width:3px;border-radius:2px;background:currentColor;opacity:.85}\\n.u333-vm span{font:700 11.5px/1 ui-monospace,SFMono-Regular,Menlo,monospace}\\n.u333-sys{align-self:center;margin:0;padding:4px 10px;border-radius:999px;background:var(--ux-surface-2);font-size:11.5px;font-weight:700;color:var(--ux-ink-3);animation:u333-up .4s var(--ux-ease)}\\n.u333-bar{position:relative;display:flex;align-items:center;gap:8px;height:52px;padding:0 6px 0 14px;border-radius:26px;background:var(--ux-surface-2)}\\n.u333-ph{flex:1;font-size:13.5px;font-weight:600;color:var(--ux-ink-3);transition:opacity .2s}\\n.u333.is-rec .u333-ph{opacity:0}\\n.u333-rec{position:absolute;left:12px;right:64px;top:0;bottom:0;display:flex;align-items:center;gap:8px;opacity:0;pointer-events:none;transition:opacity .2s}\\n.u333.is-rec .u333-rec{opacity:1}\\n.u333-dot{width:9px;height:9px;border-radius:50%;background:var(--ux-danger);animation:u333-blink 1s steps(2) infinite}\\n@keyframes u333-blink{50%{opacity:.25}}\\n.u333-tm{font:700 12.5px/1 ui-monospace,SFMono-Regular,Menlo,monospace;color:var(--ux-ink);font-variant-numeric:tabular-nums}\\n.u333-wv{flex:1;display:flex;align-items:center;justify-content:flex-end;gap:2px;height:28px;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 30%);mask-image:linear-gradient(90deg,transparent,#000 30%)}\\n.u333-wv b{flex:none;width:3px;border-radius:2px;background:var(--ux-ink-2)}\\n.u333-cx{position:absolute;right:66px;top:0;bottom:0;display:flex;align-items:center;gap:4px;font-size:12px;font-weight:750;color:var(--ux-ink-3);opacity:0;transition:opacity .2s}\\n.u333.is-rec .u333-cx{opacity:var(--o,1)}\\n/* 취소하면: 휴지통이 아래에서 올라와 뚜껑을 열고, 녹음 방울이 포물선을 그리며 떨어져 들어간 뒤 뚜껑이 닫히고 통이 흔들리다 내려갑니다 */\\n.u333-trash{position:absolute;left:12px;top:50%;width:28px;height:30px;margin-top:-16px;opacity:0;pointer-events:none;transform-origin:50% 100%}\\n.u333-trash svg{width:100%;height:100%;fill:none;stroke:var(--ux-danger);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;overflow:visible}\\n.u333-trash .bd{fill:color-mix(in srgb,var(--ux-danger) 12%,transparent)}\\n.u333-trash .lid{transform-box:view-box;transform-origin:3.5px 8px}\\n/* 버려지는 녹음: 파형이 담긴 작은 빨간 알약 */\\n.u333-bl{position:absolute;left:13px;top:50%;width:28px;height:14px;margin-top:-7px;border-radius:7px;background:repeating-linear-gradient(90deg,transparent 0 4px,rgba(255,255,255,.9) 4px 6px) 2px 3px/24px 8px no-repeat,var(--ux-danger);box-shadow:0 4px 10px -3px color-mix(in srgb,var(--ux-danger) 60%,transparent);opacity:0;pointer-events:none}\\n.u333.is-trash .u333-ph{opacity:0}\\n.u333-mic{position:relative;flex:none;width:44px;height:44px;margin-left:auto;border:0;border-radius:50%;display:grid;place-items:center;background:var(--ux-accent);color:var(--ux-accent-ink);touch-action:none;transition:transform .35s var(--ux-spring),background-color .3s}\\n.u333-mic svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round}\\n.u333.is-rec .u333-mic{transform:translateX(var(--dx,0px)) scale(1.35);background:var(--ux-danger);transition:background-color .3s}\\n.u333-mic::before{content:\\"\\";position:absolute;inset:-6px;border-radius:50%;background:var(--ux-danger);opacity:0;transform:scale(calc(.9 + var(--lv,0) * .5))}\\n.u333.is-rec .u333-mic::before{opacity:.22}\\n</style>\\n<div class=\\"ux u333\\">\\n  <div class=\\"u333-chat\\" aria-live=\\"polite\\"><p class=\\"u333-in\\"><small>수아</small>오늘 회의 몇 시였죠?</p></div>\\n  <div class=\\"u333-bar\\">\\n    <span class=\\"u333-ph\\">Aa</span>\\n    <div class=\\"u333-rec\\" aria-hidden=\\"true\\"><i class=\\"u333-dot\\"></i><span class=\\"u333-tm\\">0:00</span><div class=\\"u333-wv\\"></div></div>\\n    <span class=\\"u333-cx\\" aria-hidden=\\"true\\">‹ 밀어서 취소</span>\\n    <span class=\\"u333-trash\\" aria-hidden=\\"true\\"><svg viewBox=\\"0 0 28 30\\"><path class=\\"bd\\" d=\\"M6 11h16l-1.3 14.2a2 2 0 0 1-2 1.8H9.3a2 2 0 0 1-2-1.8z\\"/><path d=\\"M11.5 15v8M16.5 15v8\\"/><g class=\\"lid\\"><path d=\\"M3.5 8h21M10.5 8V5.8a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1V8\\"/></g></svg></span>\\n    <span class=\\"u333-bl\\" aria-hidden=\\"true\\"></span>\\n    <button class=\\"u333-mic\\" type=\\"button\\" aria-label=\\"눌러서 녹음, 떼면 전송\\"><svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><rect x=\\"9\\" y=\\"3\\" width=\\"6\\" height=\\"11\\" rx=\\"3\\"/><path d=\\"M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21\\"/></svg></button>\\n  </div>\\n</div>\\n<script>\\n(function () {\\n  var root = document.currentScript.previousElementSibling;\\n  var mic = root.querySelector('.u333-mic'), chat = root.querySelector('.u333-chat'), tm = root.querySelector('.u333-tm'), wv = root.querySelector('.u333-wv');\\n  var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\\n  var rec = false, t0 = 0, iv = 0, sx = 0, k = 1, lv = 0, bars = [], canceled = false;\\n  function fmt(s) { s = Math.floor(s); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }\\n  function start(e) {\\n    rec = true; canceled = false; t0 = performance.now(); bars = [];\\n    wv.textContent = '';\\n    var r = root.getBoundingClientRect(); k = root.offsetWidth / (r.width || 1); sx = e.clientX;\\n    root.classList.add('is-rec');\\n    root.style.setProperty('--dx', '0px'); root.style.setProperty('--o', 1);\\n    // 목소리 크기를 흉내 내 막대를 하나씩 밀어 넣습니다\\n    iv = setInterval(function () {\\n      if (!root.isConnected) { clearInterval(iv); return; }\\n      var s = (performance.now() - t0) / 1000;\\n      tm.textContent = fmt(s);\\n      lv += ((0.25 + Math.random() * 0.75) * (Math.sin(s * 5) * 0.3 + 0.7) - lv) * 0.5;\\n      mic.style.setProperty('--lv', lv.toFixed(2));\\n      var b = document.createElement('b');\\n      b.style.height = Math.max(3, lv * 26).toFixed(0) + 'px';\\n      wv.appendChild(b); bars.push(lv);\\n      if (wv.children.length > 60) wv.removeChild(wv.firstChild);\\n    }, 70);\\n  }\\n  function stop(send) {\\n    if (!rec) return;\\n    rec = false; clearInterval(iv);\\n    root.classList.remove('is-rec');\\n    root.style.setProperty('--dx', '0px');\\n    var dur = (performance.now() - t0) / 1000;\\n    if (send && dur > 0.5) {\\n      var m = document.createElement('div');\\n      m.className = 'u333-vm';\\n      m.setAttribute('aria-label', '음성 메시지 ' + fmt(dur));\\n      var w = '';\\n      for (var i = 0; i < 18; i++) { var v = bars[Math.floor(i / 18 * bars.length)] || 0.2; w += '<b style=\\"height:' + Math.max(3, v * 20).toFixed(0) + 'px\\"></b>'; }\\n      m.innerHTML = '<i aria-hidden=\\"true\\"></i><span class=\\"w\\" aria-hidden=\\"true\\">' + w + '</span><span>' + fmt(dur) + '</span>';\\n      chat.appendChild(m);\\n      while (chat.children.length > 4) chat.removeChild(chat.firstChild);\\n    }\\n  }\\n  var trash = root.querySelector('.u333-trash'), lid = trash.querySelector('.lid'), blob = root.querySelector('.u333-bl'), TT = 0;\\n  function cancel() {\\n    if (canceled) return;\\n    canceled = true;\\n    stop(false);\\n    root.classList.add('is-trash'); clearTimeout(TT);\\n    var D = rm ? 0 : 1300;\\n    if (!rm && trash.animate) {\\n      trash.animate([{ opacity: 0, transform: 'translateY(26px)' }, { opacity: 1, transform: 'none', offset: 0.18 }, { opacity: 1, transform: 'none', offset: 0.6 }, { opacity: 1, transform: 'rotate(-8deg)', offset: 0.65 }, { opacity: 1, transform: 'rotate(7deg)', offset: 0.71 }, { opacity: 1, transform: 'rotate(-3deg)', offset: 0.77 }, { opacity: 1, transform: 'none', offset: 0.84 }, { opacity: 0, transform: 'translateY(26px)' }], { duration: D, easing: 'ease-out' });\\n      lid.animate([{ transform: 'none' }, { transform: 'none', offset: 0.1 }, { transform: 'rotate(-40deg)', offset: 0.24 }, { transform: 'rotate(-40deg)', offset: 0.52 }, { transform: 'rotate(5deg)', offset: 0.58 }, { transform: 'none', offset: 0.63 }, { transform: 'none' }], { duration: D });\\n      // 파형이 있던 자리에서 녹음 알약이 떠올라 포물선을 그리며 휴지통 입구로 떨어집니다\\n      blob.animate([{ opacity: 0, transform: 'translate(130px,0) scale(1.2)' }, { opacity: 1, transform: 'translate(118px,-14px) scale(1.15) rotate(-8deg)', offset: 0.12 }, { opacity: 1, transform: 'translate(64px,-52px) scale(.95) rotate(-20deg)', offset: 0.5 }, { opacity: 1, transform: 'translate(1px,-14px) scale(.6) rotate(-35deg)', offset: 0.86 }, { opacity: 0, transform: 'translate(1px,2px) scale(.3) rotate(-40deg)' }], { duration: 620, delay: 140, easing: 'cubic-bezier(.3,0,.6,1)' });\\n    }\\n    // 뚜껑이 닫힌 다음에 취소 안내를 띄웁니다\\n    setTimeout(function () {\\n      if (!root.isConnected) return;\\n      var n = document.createElement('p');\\n      n.className = 'u333-sys'; n.textContent = '녹음 취소됨';\\n      chat.appendChild(n);\\n      setTimeout(function () { n.remove(); }, 1600);\\n    }, rm ? 0 : 760);\\n    TT = setTimeout(function () { root.classList.remove('is-trash'); }, D);\\n  }\\n  mic.addEventListener('pointerdown', function (e) {\\n    e.preventDefault();\\n    try { mic.setPointerCapture(e.pointerId); } catch (er) { /* 무시 */ }\\n    start(e);\\n  });\\n  mic.addEventListener('pointermove', function (e) {\\n    if (!rec) return;\\n    var dx = Math.min(0, (e.clientX - sx) * k);\\n    root.style.setProperty('--dx', Math.max(-120, dx).toFixed(0) + 'px');\\n    root.style.setProperty('--o', Math.max(0, 1 + dx / 90).toFixed(2));\\n    if (dx < -100) cancel();\\n  });\\n  mic.addEventListener('pointerup', function () { stop(true); });\\n  mic.addEventListener('pointercancel', function () { stop(false); });\\n  // 키보드: Space를 누르고 있는 동안 녹음하고, 떼면 보냅니다\\n  mic.addEventListener('keydown', function (e) { if ((e.key === ' ' || e.key === 'Enter') && !rec && !e.repeat) { e.preventDefault(); start({ clientX: 0 }); } if (e.key === 'Escape' && rec) cancel(); });\\n  mic.addEventListener('keyup', function (e) { if (e.key === ' ' || e.key === 'Enter') stop(true); });\\n})();\\n<\/script>\\n"}]`),t=`请把下面这个 UI 元素做到我的项目里。

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
<!-- Lucian UX/UI Prompt #333 · MIT License (c) 2026 Seokwoooo · https://lucianlabs.dev/en/uxui-prompt/#333 -->
<!-- @meta {"title":"밀어서 취소하는 음성 녹음","category":"폼·입력","summary":"마이크 버튼을 누르고 있으면 녹음이 시작되어 시간이 흐르고, 목소리 크기만큼 파형이 오른쪽에서 밀려 들어옵니다. 누른 채 왼쪽으로 밀면 ‘밀어서 취소’가 흐려지다 기준을 넘는 순간 휴지통이 아래에서 올라와 뚜껑을 열고, 빨간 녹음 방울이 포물선을 그리며 떨어져 들어간 뒤 뚜껑이 닫히고 통이 한 번 흔들립니다. 그냥 떼면 음성 메시지 말풍선이 대화창에 올라갑니다.","hint":"마이크 버튼을 길게 누르고 있다가 떼면 보내지고, 누른 채 왼쪽으로 밀면 취소됩니다","shape":"square","tags":["voice","record","hold","chat","gesture"]} -->
<!-- @demo [["wait",700],["hold",".u333-mic",0,2200,{"after":1400}],["drag",".u333-mic",0,[0.5,0.5],[-3.6,0.5],1600,{"after":1500}],["hold",".u333-mic",0,1500,{"after":1600}]] -->
<!-- @en {"title":"Slide-to-cancel voice recorder","summary":"Hold the mic button to start recording: the timer runs and a waveform sized to your voice slides in from the right. Keep holding and slide left, and ‘Slide to cancel’ fades until, past the line, a trash can rises from below and opens its lid, a red recording blob arcs over and drops in, and the lid shuts as the can gives a little shake. Simply let go and a voice message bubble pops up in the chat.","hint":"Hold the mic button and let go to send, or slide left while holding to cancel","map":[
  ["‹ 밀어서 취소<", "‹ Slide to cancel<"],
  ["aria-label=\\"눌러서 녹음, 떼면 전송\\"", "aria-label=\\"Hold to record, release to send\\""],
  [">오늘 회의 몇 시였죠?<", ">What time was the meeting today?<"],
  ["'음성 메시지 '", "'Voice message '"],
  ["'녹음 취소됨'", "'Recording canceled'"],
  [">수아<", ">Sua<"]
]} -->
<style>
.u333{position:relative;width:340px;height:350px;display:flex;flex-direction:column;padding:14px;border-radius:28px;background:var(--ux-surface);box-shadow:0 0 0 1px var(--ux-line),0 30px 60px -36px var(--ux-shadow-strong);overflow:hidden}
.u333-chat{flex:1;display:flex;flex-direction:column;justify-content:flex-end;gap:8px;padding:4px 4px 12px;overflow:hidden}
.u333-in{align-self:flex-start;max-width:78%;padding:9px 13px;border-radius:18px 18px 18px 6px;background:var(--ux-surface-2);font-size:13.5px;font-weight:600}
.u333-in small{display:block;margin-bottom:2px;font-size:11px;font-weight:750;color:var(--ux-ink-3)}
.u333-vm{align-self:flex-end;display:flex;align-items:center;gap:8px;padding:9px 12px;border-radius:18px 18px 6px 18px;background:var(--ux-accent);color:var(--ux-accent-ink);animation:u333-up .5s var(--ux-spring)}
@keyframes u333-up{from{transform:translateY(30px) scale(.8);opacity:0}}
.u333-vm i{display:block;width:0;height:0;border-left:9px solid currentColor;border-top:6px solid transparent;border-bottom:6px solid transparent}
.u333-vm .w{display:flex;align-items:center;gap:2px;height:20px}
.u333-vm .w b{width:3px;border-radius:2px;background:currentColor;opacity:.85}
.u333-vm span{font:700 11.5px/1 ui-monospace,SFMono-Regular,Menlo,monospace}
.u333-sys{align-self:center;margin:0;padding:4px 10px;border-radius:999px;background:var(--ux-surface-2);font-size:11.5px;font-weight:700;color:var(--ux-ink-3);animation:u333-up .4s var(--ux-ease)}
.u333-bar{position:relative;display:flex;align-items:center;gap:8px;height:52px;padding:0 6px 0 14px;border-radius:26px;background:var(--ux-surface-2)}
.u333-ph{flex:1;font-size:13.5px;font-weight:600;color:var(--ux-ink-3);transition:opacity .2s}
.u333.is-rec .u333-ph{opacity:0}
.u333-rec{position:absolute;left:12px;right:64px;top:0;bottom:0;display:flex;align-items:center;gap:8px;opacity:0;pointer-events:none;transition:opacity .2s}
.u333.is-rec .u333-rec{opacity:1}
.u333-dot{width:9px;height:9px;border-radius:50%;background:var(--ux-danger);animation:u333-blink 1s steps(2) infinite}
@keyframes u333-blink{50%{opacity:.25}}
.u333-tm{font:700 12.5px/1 ui-monospace,SFMono-Regular,Menlo,monospace;color:var(--ux-ink);font-variant-numeric:tabular-nums}
.u333-wv{flex:1;display:flex;align-items:center;justify-content:flex-end;gap:2px;height:28px;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 30%);mask-image:linear-gradient(90deg,transparent,#000 30%)}
.u333-wv b{flex:none;width:3px;border-radius:2px;background:var(--ux-ink-2)}
.u333-cx{position:absolute;right:66px;top:0;bottom:0;display:flex;align-items:center;gap:4px;font-size:12px;font-weight:750;color:var(--ux-ink-3);opacity:0;transition:opacity .2s}
.u333.is-rec .u333-cx{opacity:var(--o,1)}
/* 취소하면: 휴지통이 아래에서 올라와 뚜껑을 열고, 녹음 방울이 포물선을 그리며 떨어져 들어간 뒤 뚜껑이 닫히고 통이 흔들리다 내려갑니다 */
.u333-trash{position:absolute;left:12px;top:50%;width:28px;height:30px;margin-top:-16px;opacity:0;pointer-events:none;transform-origin:50% 100%}
.u333-trash svg{width:100%;height:100%;fill:none;stroke:var(--ux-danger);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;overflow:visible}
.u333-trash .bd{fill:color-mix(in srgb,var(--ux-danger) 12%,transparent)}
.u333-trash .lid{transform-box:view-box;transform-origin:3.5px 8px}
/* 버려지는 녹음: 파형이 담긴 작은 빨간 알약 */
.u333-bl{position:absolute;left:13px;top:50%;width:28px;height:14px;margin-top:-7px;border-radius:7px;background:repeating-linear-gradient(90deg,transparent 0 4px,rgba(255,255,255,.9) 4px 6px) 2px 3px/24px 8px no-repeat,var(--ux-danger);box-shadow:0 4px 10px -3px color-mix(in srgb,var(--ux-danger) 60%,transparent);opacity:0;pointer-events:none}
.u333.is-trash .u333-ph{opacity:0}
.u333-mic{position:relative;flex:none;width:44px;height:44px;margin-left:auto;border:0;border-radius:50%;display:grid;place-items:center;background:var(--ux-accent);color:var(--ux-accent-ink);touch-action:none;transition:transform .35s var(--ux-spring),background-color .3s}
.u333-mic svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round}
.u333.is-rec .u333-mic{transform:translateX(var(--dx,0px)) scale(1.35);background:var(--ux-danger);transition:background-color .3s}
.u333-mic::before{content:"";position:absolute;inset:-6px;border-radius:50%;background:var(--ux-danger);opacity:0;transform:scale(calc(.9 + var(--lv,0) * .5))}
.u333.is-rec .u333-mic::before{opacity:.22}
</style>
<div class="ux u333">
  <div class="u333-chat" aria-live="polite"><p class="u333-in"><small>수아</small>오늘 회의 몇 시였죠?</p></div>
  <div class="u333-bar">
    <span class="u333-ph">Aa</span>
    <div class="u333-rec" aria-hidden="true"><i class="u333-dot"></i><span class="u333-tm">0:00</span><div class="u333-wv"></div></div>
    <span class="u333-cx" aria-hidden="true">‹ 밀어서 취소</span>
    <span class="u333-trash" aria-hidden="true"><svg viewBox="0 0 28 30"><path class="bd" d="M6 11h16l-1.3 14.2a2 2 0 0 1-2 1.8H9.3a2 2 0 0 1-2-1.8z"/><path d="M11.5 15v8M16.5 15v8"/><g class="lid"><path d="M3.5 8h21M10.5 8V5.8a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1V8"/></g></svg></span>
    <span class="u333-bl" aria-hidden="true"></span>
    <button class="u333-mic" type="button" aria-label="눌러서 녹음, 떼면 전송"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/></svg></button>
  </div>
</div>
<script>
(function () {
  var root = document.currentScript.previousElementSibling;
  var mic = root.querySelector('.u333-mic'), chat = root.querySelector('.u333-chat'), tm = root.querySelector('.u333-tm'), wv = root.querySelector('.u333-wv');
  var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var rec = false, t0 = 0, iv = 0, sx = 0, k = 1, lv = 0, bars = [], canceled = false;
  function fmt(s) { s = Math.floor(s); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
  function start(e) {
    rec = true; canceled = false; t0 = performance.now(); bars = [];
    wv.textContent = '';
    var r = root.getBoundingClientRect(); k = root.offsetWidth / (r.width || 1); sx = e.clientX;
    root.classList.add('is-rec');
    root.style.setProperty('--dx', '0px'); root.style.setProperty('--o', 1);
    // 목소리 크기를 흉내 내 막대를 하나씩 밀어 넣습니다
    iv = setInterval(function () {
      if (!root.isConnected) { clearInterval(iv); return; }
      var s = (performance.now() - t0) / 1000;
      tm.textContent = fmt(s);
      lv += ((0.25 + Math.random() * 0.75) * (Math.sin(s * 5) * 0.3 + 0.7) - lv) * 0.5;
      mic.style.setProperty('--lv', lv.toFixed(2));
      var b = document.createElement('b');
      b.style.height = Math.max(3, lv * 26).toFixed(0) + 'px';
      wv.appendChild(b); bars.push(lv);
      if (wv.children.length > 60) wv.removeChild(wv.firstChild);
    }, 70);
  }
  function stop(send) {
    if (!rec) return;
    rec = false; clearInterval(iv);
    root.classList.remove('is-rec');
    root.style.setProperty('--dx', '0px');
    var dur = (performance.now() - t0) / 1000;
    if (send && dur > 0.5) {
      var m = document.createElement('div');
      m.className = 'u333-vm';
      m.setAttribute('aria-label', '음성 메시지 ' + fmt(dur));
      var w = '';
      for (var i = 0; i < 18; i++) { var v = bars[Math.floor(i / 18 * bars.length)] || 0.2; w += '<b style="height:' + Math.max(3, v * 20).toFixed(0) + 'px"></b>'; }
      m.innerHTML = '<i aria-hidden="true"></i><span class="w" aria-hidden="true">' + w + '</span><span>' + fmt(dur) + '</span>';
      chat.appendChild(m);
      while (chat.children.length > 4) chat.removeChild(chat.firstChild);
    }
  }
  var trash = root.querySelector('.u333-trash'), lid = trash.querySelector('.lid'), blob = root.querySelector('.u333-bl'), TT = 0;
  function cancel() {
    if (canceled) return;
    canceled = true;
    stop(false);
    root.classList.add('is-trash'); clearTimeout(TT);
    var D = rm ? 0 : 1300;
    if (!rm && trash.animate) {
      trash.animate([{ opacity: 0, transform: 'translateY(26px)' }, { opacity: 1, transform: 'none', offset: 0.18 }, { opacity: 1, transform: 'none', offset: 0.6 }, { opacity: 1, transform: 'rotate(-8deg)', offset: 0.65 }, { opacity: 1, transform: 'rotate(7deg)', offset: 0.71 }, { opacity: 1, transform: 'rotate(-3deg)', offset: 0.77 }, { opacity: 1, transform: 'none', offset: 0.84 }, { opacity: 0, transform: 'translateY(26px)' }], { duration: D, easing: 'ease-out' });
      lid.animate([{ transform: 'none' }, { transform: 'none', offset: 0.1 }, { transform: 'rotate(-40deg)', offset: 0.24 }, { transform: 'rotate(-40deg)', offset: 0.52 }, { transform: 'rotate(5deg)', offset: 0.58 }, { transform: 'none', offset: 0.63 }, { transform: 'none' }], { duration: D });
      // 파형이 있던 자리에서 녹음 알약이 떠올라 포물선을 그리며 휴지통 입구로 떨어집니다
      blob.animate([{ opacity: 0, transform: 'translate(130px,0) scale(1.2)' }, { opacity: 1, transform: 'translate(118px,-14px) scale(1.15) rotate(-8deg)', offset: 0.12 }, { opacity: 1, transform: 'translate(64px,-52px) scale(.95) rotate(-20deg)', offset: 0.5 }, { opacity: 1, transform: 'translate(1px,-14px) scale(.6) rotate(-35deg)', offset: 0.86 }, { opacity: 0, transform: 'translate(1px,2px) scale(.3) rotate(-40deg)' }], { duration: 620, delay: 140, easing: 'cubic-bezier(.3,0,.6,1)' });
    }
    // 뚜껑이 닫힌 다음에 취소 안내를 띄웁니다
    setTimeout(function () {
      if (!root.isConnected) return;
      var n = document.createElement('p');
      n.className = 'u333-sys'; n.textContent = '녹음 취소됨';
      chat.appendChild(n);
      setTimeout(function () { n.remove(); }, 1600);
    }, rm ? 0 : 760);
    TT = setTimeout(function () { root.classList.remove('is-trash'); }, D);
  }
  mic.addEventListener('pointerdown', function (e) {
    e.preventDefault();
    try { mic.setPointerCapture(e.pointerId); } catch (er) { /* 무시 */ }
    start(e);
  });
  mic.addEventListener('pointermove', function (e) {
    if (!rec) return;
    var dx = Math.min(0, (e.clientX - sx) * k);
    root.style.setProperty('--dx', Math.max(-120, dx).toFixed(0) + 'px');
    root.style.setProperty('--o', Math.max(0, 1 + dx / 90).toFixed(2));
    if (dx < -100) cancel();
  });
  mic.addEventListener('pointerup', function () { stop(true); });
  mic.addEventListener('pointercancel', function () { stop(false); });
  // 키보드: Space를 누르고 있는 동안 녹음하고, 떼면 보냅니다
  mic.addEventListener('keydown', function (e) { if ((e.key === ' ' || e.key === 'Enter') && !rec && !e.repeat) { e.preventDefault(); start({ clientX: 0 }); } if (e.key === 'Escape' && rec) cancel(); });
  mic.addEventListener('keyup', function (e) { if (e.key === ' ' || e.key === 'Enter') stop(true); });
})();
<\/script>
`,n={files:e,prompt:t};export{n as default,e as files,t as prompt};
