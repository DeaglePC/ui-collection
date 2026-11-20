const n=JSON.parse(`[{"path":"046-command-palette.html","language":"html","content":"<!-- Lucian UX/UI Prompt #046 · MIT License (c) 2026 Seokwoooo · https://lucianlabs.dev/en/uxui-prompt/#046 -->\\n<!-- @meta {\\"title\\":\\"커맨드 팔레트\\",\\"category\\":\\"메뉴·탭\\",\\"summary\\":\\"검색 알약이 아래로 펼쳐지며 팔레트가 되고, 입력하면 결과가 걸러지며 맞는 글자가 강조됩니다. 강조 막대는 고른 항목으로 미끄러지고, 실행하면 팔레트가 다시 알약으로 접힙니다.\\",\\"hint\\":\\"입력해서 명령을 걸러 보세요. 위아래 방향키로 고르고 Enter로 실행, Esc로 접습니다. 접힌 알약은 클릭하거나 Ctrl/⌘+K로 다시 엽니다\\",\\"shape\\":\\"square\\",\\"hue\\":\\"#F59E0B\\",\\"hue2\\":\\"#3D8BFF\\",\\"tags\\":[\\"command-palette\\",\\"combobox\\",\\"search\\",\\"keyboard\\",\\"filter\\"]} -->\\n<!-- @demo [[\\"wait\\",700],[\\"tap\\",\\".u046-in\\"],[\\"type\\",\\".u046-in\\",0,{\\"ko\\":\\"다크\\",\\"en\\":\\"dark\\"},160],[\\"wait\\",900],[\\"key\\",\\".u046-in\\",0,\\"Enter\\"],[\\"wait\\",1700],[\\"tap\\",\\".u046-field\\"],[\\"wait\\",800],[\\"key\\",\\".u046-in\\",0,\\"ArrowDown\\",3,380],[\\"wait\\",400],[\\"key\\",\\".u046-in\\",0,\\"Enter\\"],[\\"wait\\",1700],[\\"tap\\",\\".u046-field\\"],[\\"wait\\",1200]] -->\\n<!-- @en {\\"title\\":\\"Command palette\\",\\"summary\\":\\"The search pill unfolds downward into a palette; as you type, results filter with the matching letters highlighted. The highlight bar glides to the chosen item, and running it folds the palette back into a pill.\\",\\"hint\\":\\"Type to filter commands. Choose with the up and down arrows, run with Enter and fold it with Esc. Click the folded pill or press Ctrl/⌘+K to reopen it\\",\\"map\\":[\\n  [\\"검색하거나 명령 입력\\", \\"Search or type a command\\"],\\n  [\\"명령 검색\\", \\"Search commands\\"],\\n  [\\"aria-label=\\\\\\"명령\\\\\\"\\", \\"aria-label=\\\\\\"Commands\\\\\\"\\"],\\n  [\\"</kbd>이동</span>\\", \\"</kbd>Move</span>\\"],\\n  [\\"</kbd>실행</span>\\", \\"</kbd>Run</span>\\"],\\n  [\\"'최근 파일'\\", \\"'Recent files'\\"],\\n  [\\"'명령'\\", \\"'Commands'\\"],\\n  [\\"'브랜드 가이드 2026'\\", \\"'Brand guide 2026'\\"],\\n  [\\"'봄 캠페인 랜딩'\\", \\"'Spring campaign landing'\\"],\\n  [\\"'분기 리포트 초안'\\", \\"'Quarterly report draft'\\"],\\n  [\\"'새 문서 만들기'\\", \\"'Create new document'\\"],\\n  [\\"'다크 모드 전환'\\", \\"'Toggle dark mode'\\"],\\n  [\\"'팀원 초대하기'\\", \\"'Invite teammates'\\"],\\n  [\\"'PDF로 내보내기'\\", \\"'Export as PDF'\\"],\\n  [\\"\\\\\\"><b>‘' + esc(input.value.trim()) + '’ 결과가 없어요</b>다른 낱말로 찾아보세요</li>'\\", \\"\\\\\\"><b>No results for ‘' + esc(input.value.trim()) + '’</b>Try another word</li>'\\"],\\n  [\\"'‘' + name + '’ 실행됨'\\", \\"'Ran ‘' + name + '’'\\"]\\n]} -->\\n<style>\\n.u046{position:relative;width:360px;height:460px}\\n.u046-pal{position:absolute;left:0;right:0;top:0;height:100%;display:flex;flex-direction:column;border-radius:24px;background:var(--ux-surface);box-shadow:0 0 0 1px var(--ux-line),0 34px 60px -34px var(--ux-shadow-strong);clip-path:inset(0 0 0 0 round 24px);transition:clip-path .6s var(--ux-ease),box-shadow .5s}\\n.u046.is-closed .u046-pal{clip-path:inset(0 0 calc(100% - 56px) 0 round 28px);box-shadow:0 0 0 1px var(--ux-line-2),0 14px 26px -18px var(--ux-shadow-strong);transition:clip-path .5s var(--ux-ease),box-shadow .5s}\\n.u046-field{position:relative;display:flex;align-items:center;gap:10px;height:56px;flex:none;padding:0 14px 0 18px;border-bottom:1px solid var(--ux-line);cursor:text;transition:border-color .3s}\\n.u046.is-closed .u046-field{border-color:transparent;cursor:pointer}\\n.u046-field svg{width:19px;height:19px;flex:none;fill:none;stroke:var(--ux-ink-3);stroke-width:2;stroke-linecap:round}\\n.u046-in{flex:1;min-width:0;height:100%;border:0;padding:0;background:none;font:inherit;font-size:15.5px;font-weight:560;color:var(--ux-ink);outline:none}\\n.u046-in:focus-visible{outline:none}\\n.u046-in::placeholder{color:var(--ux-ink-3)}\\n.u046-kbd{display:inline-flex;align-items:center;height:24px;padding:0 7px;border-radius:7px;background:var(--ux-surface-2);box-shadow:inset 0 -1px 0 var(--ux-line-2);font-size:11.5px;font-weight:700;color:var(--ux-ink-3);font-family:inherit;white-space:nowrap}\\n.u046-field:focus-within{border-bottom-color:var(--ux-line)}\\n.u046-field:has(.u046-in:focus-visible){box-shadow:inset 0 -2px 0 var(--ux-accent)}\\n.u046-body{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;overscroll-behavior:contain;padding:6px 8px;transition:opacity .3s}\\n.u046-body::-webkit-scrollbar{display:none}\\n.u046.is-closed .u046-body,.u046.is-closed .u046-foot{opacity:0}\\n.u046-hl{position:absolute;left:8px;right:8px;top:0;height:46px;border-radius:13px;background:var(--ux-accent-soft);box-shadow:inset 3px 0 0 var(--ux-accent);transform:translateY(var(--y,0));transition:transform .4s var(--ux-spring),opacity .2s;pointer-events:none}\\n.u046-list{position:relative;margin:0;padding:0;list-style:none}\\n.u046-g{padding:10px 10px 6px;font-size:11px;font-weight:800;letter-spacing:.08em;color:var(--ux-ink-3)}\\n.u046-op{display:flex;align-items:center;gap:12px;height:46px;padding:0 10px;border-radius:13px;font-size:14.5px;font-weight:620;color:var(--ux-ink-2);cursor:pointer;animation:u046-in .45s var(--ux-spring) backwards;animation-delay:calc(var(--i) * 28ms)}\\n.u046-op[aria-selected=\\"true\\"]{color:var(--ux-ink)}\\n.u046-op mark{background:none;color:var(--ux-accent);font-weight:800}\\n.u046-ic{width:28px;height:28px;flex:none;border-radius:9px;display:grid;place-items:center;background:var(--c,var(--ux-surface-2));color:#fff}\\n.u046-ic svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\\n.u046-ic.plain{color:var(--ux-ink-2)}\\n.u046-op .u046-kbd{margin-left:auto}\\n.u046-empty{padding:40px 0;text-align:center;font-size:14px;color:var(--ux-ink-3)}\\n.u046-empty b{display:block;margin-bottom:4px;font-size:15px;color:var(--ux-ink)}\\n@keyframes u046-in{from{opacity:0;transform:translateY(8px)}}\\n.u046-foot{display:flex;align-items:center;gap:14px;height:44px;flex:none;padding:0 16px;border-top:1px solid var(--ux-line);font-size:12px;font-weight:600;color:var(--ux-ink-3);transition:opacity .3s}\\n.u046-foot .u046-kbd{height:20px;padding:0 5px;margin-right:4px;font-size:11px}\\n.u046-done{margin-left:auto;color:var(--ux-mint);font-weight:700;opacity:0;transform:translateY(4px);transition:opacity .3s,transform .4s var(--ux-spring)}\\n.u046-done.show{opacity:1;transform:none}\\n</style>\\n<div class=\\"ux u046\\">\\n  <div class=\\"u046-pal\\">\\n    <label class=\\"u046-field\\">\\n      <svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><circle cx=\\"11\\" cy=\\"11\\" r=\\"6.5\\"/><path d=\\"M16 16l4.5 4.5\\"/></svg>\\n      <input class=\\"u046-in\\" type=\\"text\\" role=\\"combobox\\" aria-expanded=\\"true\\" aria-autocomplete=\\"list\\" autocomplete=\\"off\\" spellcheck=\\"false\\" placeholder=\\"검색하거나 명령 입력\\" aria-label=\\"명령 검색\\">\\n      <kbd class=\\"u046-kbd u046-key\\">esc</kbd>\\n    </label>\\n    <div class=\\"u046-body\\"><span class=\\"u046-hl\\" aria-hidden=\\"true\\"></span><ul class=\\"u046-list\\" role=\\"listbox\\" aria-label=\\"명령\\"></ul></div>\\n    <div class=\\"u046-foot\\" aria-hidden=\\"true\\"><span><kbd class=\\"u046-kbd\\">↑↓</kbd>이동</span><span><kbd class=\\"u046-kbd\\">↵</kbd>실행</span><span class=\\"u046-done\\"></span></div>\\n  </div>\\n</div>\\n<script>\\n(function () {\\n  var root = document.currentScript.previousElementSibling;\\n  var input = root.querySelector('.u046-in'), list = root.querySelector('.u046-list');\\n  var hl = root.querySelector('.u046-hl'), key = root.querySelector('.u046-key');\\n  var done = root.querySelector('.u046-done'), field = root.querySelector('.u046-field');\\n  var body = root.querySelector('.u046-body');\\n  var uid = 'u046-' + Math.random().toString(36).slice(2, 7);\\n  var mac = /Mac|iPhone|iPad/.test(navigator.platform || '');\\n  var I = {\\n    doc: '<path d=\\"M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20z\\"/><path d=\\"M14 3.5v4h4\\"/>',\\n    plus: '<path d=\\"M12 5v14M5 12h14\\"/>',\\n    moon: '<path d=\\"M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z\\"/>',\\n    user: '<circle cx=\\"10\\" cy=\\"8.5\\" r=\\"3.5\\"/><path d=\\"M3.5 19.5c.8-3.4 3.4-5 6.5-5 1.6 0 3 .4 4.2 1.3M18 14v6M15 17h6\\"/>',\\n    out: '<path d=\\"M12 15V4M8 8l4-4 4 4M5 14v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5\\"/>'\\n  };\\n  var DATA = [\\n    { g: '최근 파일', n: '브랜드 가이드 2026', ic: 'doc', c: 'linear-gradient(140deg,#8B6CFF,#5B8CFF)' },\\n    { g: '최근 파일', n: '봄 캠페인 랜딩', ic: 'doc', c: 'linear-gradient(140deg,#FFB547,#FF7A45)' },\\n    { g: '최근 파일', n: '분기 리포트 초안', ic: 'doc', c: 'linear-gradient(140deg,#22C3A6,#0EA5E9)' },\\n    { g: '명령', n: '새 문서 만들기', ic: 'plus', k: mac ? '⌘N' : 'Ctrl N' },\\n    { g: '명령', n: '다크 모드 전환', ic: 'moon', k: mac ? '⌘⇧L' : 'Ctrl ⇧L' },\\n    { g: '명령', n: '팀원 초대하기', ic: 'user' },\\n    { g: '명령', n: 'PDF로 내보내기', ic: 'out', k: mac ? '⌘E' : 'Ctrl E' }\\n  ];\\n  var opts = [], act = 0, closed = false, doneT = 0;\\n  function esc(s) { return s.replace(/[&<>\\"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '\\"': '&quot;' }[c]; }); }\\n  // 입력한 글자와 맞는 부분만 강조합니다\\n  function hit(name, q) {\\n    if (!q) return esc(name);\\n    var i = name.toLowerCase().indexOf(q);\\n    return esc(name.slice(0, i)) + '<mark>' + esc(name.slice(i, i + q.length)) + '</mark>' + esc(name.slice(i + q.length));\\n  }\\n  function render() {\\n    var q = input.value.trim().toLowerCase();\\n    var found = DATA.filter(function (d) { return !q || d.n.toLowerCase().indexOf(q) >= 0; });\\n    var html = '', g = '', n = 0;\\n    found.forEach(function (d) {\\n      if (d.g !== g) { g = d.g; html += '<li class=\\"u046-g\\" role=\\"presentation\\">' + g + '</li>'; }\\n      html += '<li class=\\"u046-op\\" role=\\"option\\" id=\\"' + uid + '-' + n + '\\" data-n=\\"' + esc(d.n) + '\\" style=\\"--i:' + n + '\\" aria-selected=\\"false\\"><span class=\\"u046-ic' + (d.c ? '' : ' plain') + '\\"' + (d.c ? ' style=\\"--c:' + d.c + '\\"' : '') + ' aria-hidden=\\"true\\"><svg viewBox=\\"0 0 24 24\\">' + I[d.ic] + '</svg></span><span>' + hit(d.n, q) + '</span>' + (d.k ? '<kbd class=\\"u046-kbd\\">' + d.k + '</kbd>' : '') + '</li>';\\n      n++;\\n    });\\n    if (!n) html = '<li class=\\"u046-empty\\" role=\\"presentation\\"><b>‘' + esc(input.value.trim()) + '’ 결과가 없어요</b>다른 낱말로 찾아보세요</li>';\\n    list.innerHTML = html;\\n    opts = Array.prototype.slice.call(list.querySelectorAll('.u046-op'));\\n    opts.forEach(function (o, i) {\\n      o.addEventListener('pointermove', function () { if (act !== i) mark(i); });\\n      o.addEventListener('click', function () { mark(i); run(); });\\n    });\\n    hl.style.opacity = n ? '1' : '0';\\n    mark(0, true);\\n  }\\n  // 강조 막대는 고른 항목의 위치로 스프링처럼 미끄러집니다\\n  function mark(i, instant) {\\n    if (!opts.length) { input.removeAttribute('aria-activedescendant'); return; }\\n    act = (i + opts.length) % opts.length;\\n    opts.forEach(function (o, k) { o.setAttribute('aria-selected', String(k === act)); });\\n    input.setAttribute('aria-activedescendant', opts[act].id);\\n    if (instant) { hl.style.transition = 'none'; }\\n    var o = opts[act], top = o.offsetTop + 6;\\n    hl.style.setProperty('--y', top + 'px');\\n    if (instant) { void hl.offsetWidth; hl.style.transition = ''; }\\n    // 고른 항목이 목록 밖에 있으면 보이는 곳까지 스크롤합니다\\n    if (top + o.offsetHeight > body.scrollTop + body.clientHeight) body.scrollTo({ top: top + o.offsetHeight - body.clientHeight + 6, behavior: instant ? 'auto' : 'smooth' });\\n    else if (top < body.scrollTop + 30) body.scrollTo({ top: act === 0 ? 0 : top - 30, behavior: instant ? 'auto' : 'smooth' });\\n  }\\n  function run() {\\n    if (!opts[act]) return;\\n    var name = opts[act].getAttribute('data-n');\\n    opts[act].animate([{ transform: 'scale(.97)' }, { transform: 'none' }], { duration: 260, easing: 'ease-out' });\\n    done.textContent = '‘' + name + '’ 실행됨';\\n    done.classList.add('show');\\n    clearTimeout(doneT);\\n    doneT = setTimeout(function () { if (root.isConnected) setClosed(true); }, 650);\\n  }\\n  // 접히면 팔레트가 맨 위 검색 알약 크기로 오므라듭니다\\n  function setClosed(v) {\\n    closed = v;\\n    root.classList.toggle('is-closed', v);\\n    input.setAttribute('aria-expanded', String(!v));\\n    key.textContent = v ? (mac ? '⌘K' : 'Ctrl K') : 'esc';\\n    if (v) { input.value = ''; input.blur(); setTimeout(function () { if (closed) { done.classList.remove('show'); render(); } }, 500); }\\n    else { done.classList.remove('show'); input.focus(); }\\n  }\\n  input.addEventListener('input', function () { if (closed) setClosed(false); render(); });\\n  input.addEventListener('keydown', function (e) {\\n    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); if (closed) setClosed(false); else mark(act + (e.key === 'ArrowDown' ? 1 : -1)); }\\n    else if (e.key === 'Enter' && !e.isComposing && e.keyCode !== 229) { e.preventDefault(); if (closed) setClosed(false); else run(); }\\n    else if (e.key === 'Escape' && !closed) { e.preventDefault(); e.stopPropagation(); setClosed(true); }\\n  });\\n  field.addEventListener('pointerdown', function () { if (closed) { clearTimeout(doneT); setClosed(false); } });\\n  function onKey(e) {\\n    if (!root.isConnected) { document.removeEventListener('keydown', onKey); return; }\\n    if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {\\n      var a = document.activeElement;\\n      if (a && a !== document.body && !root.contains(a)) return;\\n      e.preventDefault(); setClosed(!closed);\\n    }\\n  }\\n  document.addEventListener('keydown', onKey);\\n  render();\\n})();\\n<\/script>\\n"}]`),e=`请把下面这个 UI 元素做到我的项目里。

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
<!-- Lucian UX/UI Prompt #046 · MIT License (c) 2026 Seokwoooo · https://lucianlabs.dev/en/uxui-prompt/#046 -->
<!-- @meta {"title":"커맨드 팔레트","category":"메뉴·탭","summary":"검색 알약이 아래로 펼쳐지며 팔레트가 되고, 입력하면 결과가 걸러지며 맞는 글자가 강조됩니다. 강조 막대는 고른 항목으로 미끄러지고, 실행하면 팔레트가 다시 알약으로 접힙니다.","hint":"입력해서 명령을 걸러 보세요. 위아래 방향키로 고르고 Enter로 실행, Esc로 접습니다. 접힌 알약은 클릭하거나 Ctrl/⌘+K로 다시 엽니다","shape":"square","hue":"#F59E0B","hue2":"#3D8BFF","tags":["command-palette","combobox","search","keyboard","filter"]} -->
<!-- @demo [["wait",700],["tap",".u046-in"],["type",".u046-in",0,{"ko":"다크","en":"dark"},160],["wait",900],["key",".u046-in",0,"Enter"],["wait",1700],["tap",".u046-field"],["wait",800],["key",".u046-in",0,"ArrowDown",3,380],["wait",400],["key",".u046-in",0,"Enter"],["wait",1700],["tap",".u046-field"],["wait",1200]] -->
<!-- @en {"title":"Command palette","summary":"The search pill unfolds downward into a palette; as you type, results filter with the matching letters highlighted. The highlight bar glides to the chosen item, and running it folds the palette back into a pill.","hint":"Type to filter commands. Choose with the up and down arrows, run with Enter and fold it with Esc. Click the folded pill or press Ctrl/⌘+K to reopen it","map":[
  ["검색하거나 명령 입력", "Search or type a command"],
  ["명령 검색", "Search commands"],
  ["aria-label=\\"명령\\"", "aria-label=\\"Commands\\""],
  ["</kbd>이동</span>", "</kbd>Move</span>"],
  ["</kbd>실행</span>", "</kbd>Run</span>"],
  ["'최근 파일'", "'Recent files'"],
  ["'명령'", "'Commands'"],
  ["'브랜드 가이드 2026'", "'Brand guide 2026'"],
  ["'봄 캠페인 랜딩'", "'Spring campaign landing'"],
  ["'분기 리포트 초안'", "'Quarterly report draft'"],
  ["'새 문서 만들기'", "'Create new document'"],
  ["'다크 모드 전환'", "'Toggle dark mode'"],
  ["'팀원 초대하기'", "'Invite teammates'"],
  ["'PDF로 내보내기'", "'Export as PDF'"],
  ["\\"><b>‘' + esc(input.value.trim()) + '’ 결과가 없어요</b>다른 낱말로 찾아보세요</li>'", "\\"><b>No results for ‘' + esc(input.value.trim()) + '’</b>Try another word</li>'"],
  ["'‘' + name + '’ 실행됨'", "'Ran ‘' + name + '’'"]
]} -->
<style>
.u046{position:relative;width:360px;height:460px}
.u046-pal{position:absolute;left:0;right:0;top:0;height:100%;display:flex;flex-direction:column;border-radius:24px;background:var(--ux-surface);box-shadow:0 0 0 1px var(--ux-line),0 34px 60px -34px var(--ux-shadow-strong);clip-path:inset(0 0 0 0 round 24px);transition:clip-path .6s var(--ux-ease),box-shadow .5s}
.u046.is-closed .u046-pal{clip-path:inset(0 0 calc(100% - 56px) 0 round 28px);box-shadow:0 0 0 1px var(--ux-line-2),0 14px 26px -18px var(--ux-shadow-strong);transition:clip-path .5s var(--ux-ease),box-shadow .5s}
.u046-field{position:relative;display:flex;align-items:center;gap:10px;height:56px;flex:none;padding:0 14px 0 18px;border-bottom:1px solid var(--ux-line);cursor:text;transition:border-color .3s}
.u046.is-closed .u046-field{border-color:transparent;cursor:pointer}
.u046-field svg{width:19px;height:19px;flex:none;fill:none;stroke:var(--ux-ink-3);stroke-width:2;stroke-linecap:round}
.u046-in{flex:1;min-width:0;height:100%;border:0;padding:0;background:none;font:inherit;font-size:15.5px;font-weight:560;color:var(--ux-ink);outline:none}
.u046-in:focus-visible{outline:none}
.u046-in::placeholder{color:var(--ux-ink-3)}
.u046-kbd{display:inline-flex;align-items:center;height:24px;padding:0 7px;border-radius:7px;background:var(--ux-surface-2);box-shadow:inset 0 -1px 0 var(--ux-line-2);font-size:11.5px;font-weight:700;color:var(--ux-ink-3);font-family:inherit;white-space:nowrap}
.u046-field:focus-within{border-bottom-color:var(--ux-line)}
.u046-field:has(.u046-in:focus-visible){box-shadow:inset 0 -2px 0 var(--ux-accent)}
.u046-body{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;overscroll-behavior:contain;padding:6px 8px;transition:opacity .3s}
.u046-body::-webkit-scrollbar{display:none}
.u046.is-closed .u046-body,.u046.is-closed .u046-foot{opacity:0}
.u046-hl{position:absolute;left:8px;right:8px;top:0;height:46px;border-radius:13px;background:var(--ux-accent-soft);box-shadow:inset 3px 0 0 var(--ux-accent);transform:translateY(var(--y,0));transition:transform .4s var(--ux-spring),opacity .2s;pointer-events:none}
.u046-list{position:relative;margin:0;padding:0;list-style:none}
.u046-g{padding:10px 10px 6px;font-size:11px;font-weight:800;letter-spacing:.08em;color:var(--ux-ink-3)}
.u046-op{display:flex;align-items:center;gap:12px;height:46px;padding:0 10px;border-radius:13px;font-size:14.5px;font-weight:620;color:var(--ux-ink-2);cursor:pointer;animation:u046-in .45s var(--ux-spring) backwards;animation-delay:calc(var(--i) * 28ms)}
.u046-op[aria-selected="true"]{color:var(--ux-ink)}
.u046-op mark{background:none;color:var(--ux-accent);font-weight:800}
.u046-ic{width:28px;height:28px;flex:none;border-radius:9px;display:grid;place-items:center;background:var(--c,var(--ux-surface-2));color:#fff}
.u046-ic svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.u046-ic.plain{color:var(--ux-ink-2)}
.u046-op .u046-kbd{margin-left:auto}
.u046-empty{padding:40px 0;text-align:center;font-size:14px;color:var(--ux-ink-3)}
.u046-empty b{display:block;margin-bottom:4px;font-size:15px;color:var(--ux-ink)}
@keyframes u046-in{from{opacity:0;transform:translateY(8px)}}
.u046-foot{display:flex;align-items:center;gap:14px;height:44px;flex:none;padding:0 16px;border-top:1px solid var(--ux-line);font-size:12px;font-weight:600;color:var(--ux-ink-3);transition:opacity .3s}
.u046-foot .u046-kbd{height:20px;padding:0 5px;margin-right:4px;font-size:11px}
.u046-done{margin-left:auto;color:var(--ux-mint);font-weight:700;opacity:0;transform:translateY(4px);transition:opacity .3s,transform .4s var(--ux-spring)}
.u046-done.show{opacity:1;transform:none}
</style>
<div class="ux u046">
  <div class="u046-pal">
    <label class="u046-field">
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>
      <input class="u046-in" type="text" role="combobox" aria-expanded="true" aria-autocomplete="list" autocomplete="off" spellcheck="false" placeholder="검색하거나 명령 입력" aria-label="명령 검색">
      <kbd class="u046-kbd u046-key">esc</kbd>
    </label>
    <div class="u046-body"><span class="u046-hl" aria-hidden="true"></span><ul class="u046-list" role="listbox" aria-label="명령"></ul></div>
    <div class="u046-foot" aria-hidden="true"><span><kbd class="u046-kbd">↑↓</kbd>이동</span><span><kbd class="u046-kbd">↵</kbd>실행</span><span class="u046-done"></span></div>
  </div>
</div>
<script>
(function () {
  var root = document.currentScript.previousElementSibling;
  var input = root.querySelector('.u046-in'), list = root.querySelector('.u046-list');
  var hl = root.querySelector('.u046-hl'), key = root.querySelector('.u046-key');
  var done = root.querySelector('.u046-done'), field = root.querySelector('.u046-field');
  var body = root.querySelector('.u046-body');
  var uid = 'u046-' + Math.random().toString(36).slice(2, 7);
  var mac = /Mac|iPhone|iPad/.test(navigator.platform || '');
  var I = {
    doc: '<path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20z"/><path d="M14 3.5v4h4"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    moon: '<path d="M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z"/>',
    user: '<circle cx="10" cy="8.5" r="3.5"/><path d="M3.5 19.5c.8-3.4 3.4-5 6.5-5 1.6 0 3 .4 4.2 1.3M18 14v6M15 17h6"/>',
    out: '<path d="M12 15V4M8 8l4-4 4 4M5 14v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5"/>'
  };
  var DATA = [
    { g: '최근 파일', n: '브랜드 가이드 2026', ic: 'doc', c: 'linear-gradient(140deg,#8B6CFF,#5B8CFF)' },
    { g: '최근 파일', n: '봄 캠페인 랜딩', ic: 'doc', c: 'linear-gradient(140deg,#FFB547,#FF7A45)' },
    { g: '최근 파일', n: '분기 리포트 초안', ic: 'doc', c: 'linear-gradient(140deg,#22C3A6,#0EA5E9)' },
    { g: '명령', n: '새 문서 만들기', ic: 'plus', k: mac ? '⌘N' : 'Ctrl N' },
    { g: '명령', n: '다크 모드 전환', ic: 'moon', k: mac ? '⌘⇧L' : 'Ctrl ⇧L' },
    { g: '명령', n: '팀원 초대하기', ic: 'user' },
    { g: '명령', n: 'PDF로 내보내기', ic: 'out', k: mac ? '⌘E' : 'Ctrl E' }
  ];
  var opts = [], act = 0, closed = false, doneT = 0;
  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  // 입력한 글자와 맞는 부분만 강조합니다
  function hit(name, q) {
    if (!q) return esc(name);
    var i = name.toLowerCase().indexOf(q);
    return esc(name.slice(0, i)) + '<mark>' + esc(name.slice(i, i + q.length)) + '</mark>' + esc(name.slice(i + q.length));
  }
  function render() {
    var q = input.value.trim().toLowerCase();
    var found = DATA.filter(function (d) { return !q || d.n.toLowerCase().indexOf(q) >= 0; });
    var html = '', g = '', n = 0;
    found.forEach(function (d) {
      if (d.g !== g) { g = d.g; html += '<li class="u046-g" role="presentation">' + g + '</li>'; }
      html += '<li class="u046-op" role="option" id="' + uid + '-' + n + '" data-n="' + esc(d.n) + '" style="--i:' + n + '" aria-selected="false"><span class="u046-ic' + (d.c ? '' : ' plain') + '"' + (d.c ? ' style="--c:' + d.c + '"' : '') + ' aria-hidden="true"><svg viewBox="0 0 24 24">' + I[d.ic] + '</svg></span><span>' + hit(d.n, q) + '</span>' + (d.k ? '<kbd class="u046-kbd">' + d.k + '</kbd>' : '') + '</li>';
      n++;
    });
    if (!n) html = '<li class="u046-empty" role="presentation"><b>‘' + esc(input.value.trim()) + '’ 결과가 없어요</b>다른 낱말로 찾아보세요</li>';
    list.innerHTML = html;
    opts = Array.prototype.slice.call(list.querySelectorAll('.u046-op'));
    opts.forEach(function (o, i) {
      o.addEventListener('pointermove', function () { if (act !== i) mark(i); });
      o.addEventListener('click', function () { mark(i); run(); });
    });
    hl.style.opacity = n ? '1' : '0';
    mark(0, true);
  }
  // 강조 막대는 고른 항목의 위치로 스프링처럼 미끄러집니다
  function mark(i, instant) {
    if (!opts.length) { input.removeAttribute('aria-activedescendant'); return; }
    act = (i + opts.length) % opts.length;
    opts.forEach(function (o, k) { o.setAttribute('aria-selected', String(k === act)); });
    input.setAttribute('aria-activedescendant', opts[act].id);
    if (instant) { hl.style.transition = 'none'; }
    var o = opts[act], top = o.offsetTop + 6;
    hl.style.setProperty('--y', top + 'px');
    if (instant) { void hl.offsetWidth; hl.style.transition = ''; }
    // 고른 항목이 목록 밖에 있으면 보이는 곳까지 스크롤합니다
    if (top + o.offsetHeight > body.scrollTop + body.clientHeight) body.scrollTo({ top: top + o.offsetHeight - body.clientHeight + 6, behavior: instant ? 'auto' : 'smooth' });
    else if (top < body.scrollTop + 30) body.scrollTo({ top: act === 0 ? 0 : top - 30, behavior: instant ? 'auto' : 'smooth' });
  }
  function run() {
    if (!opts[act]) return;
    var name = opts[act].getAttribute('data-n');
    opts[act].animate([{ transform: 'scale(.97)' }, { transform: 'none' }], { duration: 260, easing: 'ease-out' });
    done.textContent = '‘' + name + '’ 실행됨';
    done.classList.add('show');
    clearTimeout(doneT);
    doneT = setTimeout(function () { if (root.isConnected) setClosed(true); }, 650);
  }
  // 접히면 팔레트가 맨 위 검색 알약 크기로 오므라듭니다
  function setClosed(v) {
    closed = v;
    root.classList.toggle('is-closed', v);
    input.setAttribute('aria-expanded', String(!v));
    key.textContent = v ? (mac ? '⌘K' : 'Ctrl K') : 'esc';
    if (v) { input.value = ''; input.blur(); setTimeout(function () { if (closed) { done.classList.remove('show'); render(); } }, 500); }
    else { done.classList.remove('show'); input.focus(); }
  }
  input.addEventListener('input', function () { if (closed) setClosed(false); render(); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); if (closed) setClosed(false); else mark(act + (e.key === 'ArrowDown' ? 1 : -1)); }
    else if (e.key === 'Enter' && !e.isComposing && e.keyCode !== 229) { e.preventDefault(); if (closed) setClosed(false); else run(); }
    else if (e.key === 'Escape' && !closed) { e.preventDefault(); e.stopPropagation(); setClosed(true); }
  });
  field.addEventListener('pointerdown', function () { if (closed) { clearTimeout(doneT); setClosed(false); } });
  function onKey(e) {
    if (!root.isConnected) { document.removeEventListener('keydown', onKey); return; }
    if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
      var a = document.activeElement;
      if (a && a !== document.body && !root.contains(a)) return;
      e.preventDefault(); setClosed(!closed);
    }
  }
  document.addEventListener('keydown', onKey);
  render();
})();
<\/script>
`,t={files:n,prompt:e};export{t as default,n as files,e as prompt};
