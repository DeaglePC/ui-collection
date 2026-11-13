# -*- coding: utf-8 -*-
"""Build the 源集 item catalog from verified open-licensed sources."""
from __future__ import annotations
import json, re, shutil, sys
from pathlib import Path
from common import (
    ROOT, SRC, PUBLIC, DATA, LICENSES, VENDOR,
    items, sources, read, write, add_item, add_source, MIT_STD,
)

# ensure dirs
for p in (PUBLIC, DATA, LICENSES, VENDOR):
    p.mkdir(parents=True, exist_ok=True)

# -------------------- LICENSES --------------------
shutil.copy(SRC / "cuekit" / "LICENSE", LICENSES / "Cue-Kit-MIT.txt")
shutil.copy(SRC / "radiant" / "LICENSE", LICENSES / "Radiant-MIT.txt")
shutil.copy(SRC / "voiceorbs" / "LICENSE", LICENSES / "VoiceOrbs-MIT.txt")
shutil.copy(SRC / "mekai" / "LICENSE", LICENSES / "Mekai-UI-MIT.txt")
shutil.copy(SRC / "lucian" / "LICENSE", LICENSES / "Lucian-UXUI-Prompt-MIT.txt")
shutil.copy(SRC / "libraries" / "LICENSE", LICENSES / "Libraries.dev-MIT.txt")
shutil.copy(SRC / "ndekoui" / "LICENCE.md", LICENSES / "ndekoui-MIT.txt")
write(LICENSES / "Foundry44-MIT.txt", MIT_STD.format(copyright="Copyright (c) 2026 Foundry44"))
write(LICENSES / "Crucible-MIT.txt", MIT_STD.format(copyright="Copyright (c) 2026 Crucible (crucibleui.com)"))

# ========================================================================
# LUCIAN
# ========================================================================
LUCIAN_TOKENS = read(SRC / "lucian" / "src" / "tokens.css")
LUCIAN_PROMPT_PREFIX = """请把下面这个 UI 元素做到我的项目里。

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
"""

LUCIAN_PICKS = [
    ("005-paper-plane-send.html", "按钮", ["按钮", "发送", "聊天"], "纸飞机发送按钮：按下后纸飞机绕一圈飞出，按钮上出现进度环并变成勾，消息以气泡进入对话。", 480),
    ("046-command-palette.html", "导航", ["命令面板", "搜索", "快捷键"], "命令面板：打开后可搜索并执行命令，键盘上下选择，带分组和快捷键提示。", 540),
    ("055-music-player-card.html", "卡片", ["播放器", "唱片", "卡片"], "唱片播放器卡片：播放时唱片从封套滑出、唱臂落下，切歌时封套横移，进度条可拖动。", 500),
    ("060-image-compare-slider.html", "表单", ["对比", "滑块", "日夜"], "日夜对比滑块：拖动手柄比较同一场景的白天与夜晚，手柄有弹性跟随，靠近边缘时标签会淡出。", 460),
    ("080-orbit-spinner.html", "加载动画", ["加载", "轨道", "旋转"], "轨道旋转加载：几颗点沿轨道公转，节奏明确，适合作为等待指示。", 360),
    ("100-flip-clock-timer.html", "加载动画", ["计时", "翻页", "时钟"], "翻页计时器：数字像车站翻页钟一样对半翻动，可作为倒计时或时钟。", 420),
    ("116-bezier.html", "表单", ["贝塞尔", "缓动", "曲线"], "贝塞尔缓动曲线编辑器：可拖动控制点调整曲线，并看到对应的缓动预览。", 500),
    ("200-receipt-fold.html", "卡片", ["收据", "折叠", "打印"], "收据折叠：一张小票对折或展开，带打印质感，适合订单或支付完成状态。", 500),
    ("307-typewriter-rotating-words.html", "文字动效", ["打字机", "轮换", "标题"], "打字机轮换词：一句话里的关键词逐字打出再换成下一个，带闪烁光标。", 320),
    ("333-voice-record-button.html", "语音/光球", ["录音", "语音", "按钮"], "语音录音按钮：按下开始录音，波形随声音起伏，再次按下结束。", 360),
    ("378-particle-text.html", "文字动效", ["粒子", "文字", "消散"], "粒子文字：字形由粒子组成，悬停或触发时粒子散开再聚回。", 400),
]

def lucian_wrap(inner: str, title: str) -> str:
    return (
        "<!DOCTYPE html>\n<html lang=\"zh-CN\" data-theme=\"dark\">\n<head>\n"
        "<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n"
        f"<title>{title} · Lucian UX/UI Prompt</title>\n"
        "<!-- Lucian UX/UI Prompt · MIT License (c) 2026 Seokwoooo · https://lucianlabs.dev/uxui-prompt/ -->\n"
        f"<style>\n{LUCIAN_TOKENS}\n"
        "html,body{margin:0;min-height:100%;background:var(--ux-page);}\n"
        "body{display:grid;place-items:center;padding:28px 16px;}\n"
        "</style>\n</head>\n<body class=\"ux\">\n"
        f"{inner}\n</body>\n</html>\n"
    )

for fname, cat, tags, desc, h in LUCIAN_PICKS:
    path = SRC / "lucian" / "src" / "elements" / fname
    raw = read(path)
    num = fname.split("-")[0]
    en_title = re.search(r'<!-- @en \{"title":"([^"]+)"', raw)
    name_en = en_title.group(1) if en_title else fname[4:-5].replace("-", " ").title()
    name_zh = desc.split("：")[0]
    html = lucian_wrap(raw, name_en)
    iframe = f"lucian-{num}.html"
    write(PUBLIC / iframe, html)
    code = (
        f"<!-- Lucian UX/UI Prompt #{num} · MIT License (c) 2026 Seokwoooo · "
        f"https://lucianlabs.dev/en/uxui-prompt/#{num} -->\n" + raw
    )
    add_item(
        id=f"lucian-{num}", name=name_en, nameZh=name_zh, sourceId="lucian",
        sourceName="Lucian UX/UI Prompt",
        sourceUrl="https://lucianlabs.dev/en/uxui-prompt/",
        originalUrl=f"https://lucianlabs.dev/en/uxui-prompt/#{num}",
        author="Seokwoooo", repo="https://github.com/Seokwoooo/lucian-uxui-prompt",
        license="MIT", licenseUrl="https://github.com/Seokwoooo/lucian-uxui-prompt/blob/main/LICENSE",
        copyright="Copyright (c) 2026 Seokwoooo", category=cat, tags=tags + ["Lucian", "HTML"],
        description=desc, kind="code", preview="iframe", iframeSrc=f"./previews/{iframe}",
        iframeHeight=h, files=[{"path": fname, "language": "html", "content": code}],
        prompt=LUCIAN_PROMPT_PREFIX + code,
        notice="原仓库共 400 个 MIT 元素。本站按质量精选，并保留许可证注释。",
    )

add_source(
    id="lucian", name="Lucian UX/UI Prompt", url="https://lucianlabs.dev/en/uxui-prompt/",
    repo="https://github.com/Seokwoooo/lucian-uxui-prompt", license="MIT",
    licenseUrl="https://github.com/Seokwoooo/lucian-uxui-prompt/blob/main/LICENSE",
    author="Seokwoooo",
    included="精选 11 个可交互 HTML 元素（完整源码、提示词模板、实时预览）。原仓库 400 个全部 MIT。",
    excluded="其余 389 个未整库搬入，避免堆砌；均可在源站和 GitHub 获取。",
    why="仓库 LICENSE 为 MIT。复制的代码顶部保留原作者要求的来源与许可证注释。",
)
print("lucian", len([i for i in items if i["sourceId"]=="lucian"]))

# ========================================================================
# RADIANT
# ========================================================================
RADIANT_PICKS = [
    ("event-horizon", "Event Horizon", "事件视界", "带光线追踪引力透镜的黑洞：吸积盘被弯曲，完成度接近演示片。", ["黑洞", "WebGL", "光线追踪"]),
    ("aurora-veil", "Aurora Veil", "极光帷幕", "柔和的极光帷幕在画布上缓慢折叠、变色，适合作为氛围背景。", ["极光", "WebGL", "背景"]),
    ("rubber-reality", "Rubber Reality", "橡胶现实", "弹簧网格会随鼠标或触摸拉扯再弹回，像一层橡胶膜。", ["弹簧", "物理", "交互"]),
    ("torn-paper", "Torn Paper", "撕纸", "纸被撕开后透出后面的光，边缘有纤维感。", ["撕纸", "纹理", "背景"]),
    ("silk-cascade", "Silk Cascade", "丝绸垂瀑", "柔性丝绸沿着重力垂下并随时间流动。", ["丝绸", "布料", "背景"]),
    ("rain-on-glass", "Rain on Glass", "玻璃上的雨", "雨滴打在玻璃上、滑落、合并，带折射。官方有分步教程。", ["雨", "玻璃", "折射"]),
    ("neon-drive", "Neon Drive", "霓虹疾驰", "夜间公路式霓虹光线向远处延伸，节奏感强。", ["霓虹", "速度", "背景"]),
    ("gilded-fracture", "Gilded Fracture", "金缮裂纹", "裂纹里渗出金色，像金缮修补过的器物表面。", ["金缮", "裂纹", "纹理"]),
]
# Look up descriptions from shaders.ts if present
shaders_ts = read(SRC / "radiant" / "src" / "lib" / "shaders.ts")
for sid, name, name_zh, desc, tags in RADIANT_PICKS:
    src_html = SRC / "radiant" / "static" / f"{sid}.html"
    raw = read(src_html)
    # prepend license if missing
    if "MIT" not in raw[:500] and "Copyright" not in raw[:500]:
        raw = (
            "<!-- Radiant Shaders · MIT License · Copyright (c) 2025 Paul Bakaus\n"
            "     https://github.com/pbakaus/radiant · https://radiant-shaders.com -->\n" + raw
        )
    iframe = f"radiant-{sid}.html"
    write(PUBLIC / iframe, raw)
    add_item(
        id=f"radiant-{sid}", name=name, nameZh=name_zh, sourceId="radiant",
        sourceName="Radiant", sourceUrl="https://www.radiant-shaders.com/",
        originalUrl=f"https://www.radiant-shaders.com/shader/{sid}",
        author="Paul Bakaus", repo="https://github.com/pbakaus/radiant",
        license="MIT", licenseUrl="https://github.com/pbakaus/radiant/blob/main/LICENSE",
        copyright="Copyright (c) 2025 Paul Bakaus", category="背景/Shader",
        tags=tags + ["Radiant", "Shader"],
        description=desc, kind="code", preview="iframe", iframeSrc=f"./previews/{iframe}",
        iframeHeight=480,
        files=[{"path": f"{sid}.html", "language": "html", "content": raw}],
        notice="零依赖的独立 HTML，可直接复制。原仓库共 88 个着色器，本站精选 8 个。",
    )

add_source(
    id="radiant", name="Radiant", url="https://www.radiant-shaders.com/",
    repo="https://github.com/pbakaus/radiant", license="MIT",
    licenseUrl="https://github.com/pbakaus/radiant/blob/main/LICENSE",
    author="Paul Bakaus",
    included="精选 8 个独立 HTML 着色器（含完整源码与实时预览）。原仓库 88 个全部 MIT。",
    excluded="其余未整库搬入。没有提示词（官方建议把源码交给编码代理去改）。",
    why="GitHub LICENSE 为 MIT，Copyright (c) 2025 Paul Bakaus。",
)
print("radiant", len([i for i in items if i["sourceId"]=="radiant"]))

# ========================================================================
# FOUNDRY44 — 9 free MIT
# ========================================================================
FOUNDRY_PICKS = [
    ("text-scramble", "Text Scramble", "乱码解码文字", "文字动效",
     "文字从随机字符逐个「解码」成最终文案，可在进入视口或悬停时触发。",
     ["解码", "乱码", "标题"],
     '<h1 data-f44="text-scramble" data-f44-trigger="hover" data-f44-once="false" data-f44-duration="1200">FOUNDATION</h1><p class="hint">把指针放在标题上试试。</p>',
     280, "h1{font:700 64px/1.05 ui-serif,Georgia,serif;letter-spacing:-.03em;margin:0} .hint{margin-top:18px;color:#9a9388;font-size:13px}"),
    ("rolling-number", "Rolling Number", "滚动数字", "加载动画",
     "数字像里程表一样纵向翻滚到目标值，进入视口时播放。",
     ["数字", "计数", "里程表"],
     '<div class="row"><span data-f44="rolling-number" data-f44-value="12840" data-f44-duration="1400">0</span></div><p class="hint">进入画面后数字会翻滚到位。</p>',
     280, ".row{font:700 80px/1 ui-sans-serif,system-ui;letter-spacing:-.04em} .hint{margin-top:18px;color:#9a9388;font-size:13px}"),
    ("spotlight-card", "Spotlight Card", "聚光灯卡片", "卡片",
     "一张（或一组）卡片上，柔和的径向光斑跟随指针移动。",
     ["光斑", "卡片", "指针"],
     '<div class="grid">' + "".join(
         f'<article data-f44="spotlight-card" class="card"><h3>Card {n}</h3><p>A soft radial glow follows the cursor.</p></article>'
         for n in (1,2,3)
     ) + "</div>",
     340,
     ".grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;width:min(720px,100%)}"
     ".card{padding:28px 22px;border:1px solid #2c2924;border-radius:16px;background:#161412;min-height:160px}"
     ".card h3{margin:0 0 8px;font:600 16px/1.3 ui-sans-serif,system-ui}"
     ".card p{margin:0;color:#9a9388;font-size:13px;line-height:1.55}"),
    ("line-reveal", "Line Reveal", "逐行显现", "文字动效",
     "文字一行行从遮罩里滑出，或被一条扫过的色带揭开，进入视口时播放。",
     ["显现", "遮罩", "滚动"],
     '<div data-f44="line-reveal" data-f44-once="false" class="reveal"><p>Lines slide up from a mask.</p><p>One after another, when they come into view.</p><p>Keep the licence notice with the code.</p></div>',
     320, ".reveal{font:500 28px/1.45 ui-serif,Georgia,serif;max-width:16em}"),
    ("word-loop", "Word Loop", "词语轮换", "文字动效",
     "句子里的一个词垂直切换到下一个备选词，循环播放。",
     ["轮换", "标题", "循环"],
     '<p class="sent">Build with <span data-f44="word-loop" data-f44-words="care,craft,patience,intent">care</span>.</p>',
     260, ".sent{font:500 36px/1.3 ui-serif,Georgia,serif}"),
    ("clip-reveal", "Clip Reveal", "裁剪显现", "滚动动效",
     "图片被逐渐扩大的 clip-path 揭开，进入视口时播放。",
     ["裁剪", "图片", "滚动"],
     '<div data-f44="clip-reveal" class="ph" style="width:min(520px,90vw);height:280px;border-radius:18px;overflow:hidden">'
     '<div style="width:100%;height:100%;background:linear-gradient(135deg,#3a2a18,#c9a06a 40%,#6b3a1f 80%);"></div></div>',
     360, ""),
    ("image-parallax", "Image Parallax", "图片视差", "滚动动效",
     "图片在框里比页面滚得更慢，形成一层浅浅的视差。",
     ["视差", "图片", "滚动"],
     '<div style="height:160px"></div>'
     '<div data-f44="image-parallax" style="width:min(520px,90vw);height:280px;border-radius:18px;overflow:hidden">'
     '<div style="width:100%;height:140%;background:linear-gradient(160deg,#1b2838,#4a6d8c 50%,#c2a46a);"></div></div>'
     '<div style="height:200px"></div><p class="hint">在框里滚动，看图片是否比外框更慢。</p>',
     420, ".hint{color:#9a9388;font-size:13px}"),
    ("sticky-header", "Sticky Header", "收起式顶栏", "导航",
     "页面向下滚时顶栏收起，向上滚时再滑回来。",
     ["顶栏", "导航", "滚动"],
     '<header data-f44="sticky-header" class="hdr">Foundry44 · Sticky Header</header>'
     '<main class="body">'+ "".join(f"<p>Scroll down and back up. Line {i}.</p>" for i in range(1,18))+"</main>",
     420,
     "body{padding:0!important;align-items:stretch!important}"
     ".hdr{position:sticky;top:0;z-index:5;padding:16px 24px;background:#1c1916;border-bottom:1px solid #2c2924;font:600 14px/1 ui-sans-serif,system-ui}"
     ".body{padding:24px;max-width:40em;color:#c9c2b6;line-height:1.8}"),
    ("word-fill", "Word Fill", "逐词上色", "文字动效",
     "一段文字先是淡的，随着页面滚动按阅读顺序逐词恢复成完整颜色。",
     ["上色", "阅读", "滚动"],
     '<div style="height:80px"></div>'
     '<p data-f44="word-fill" class="fill">A paragraph starts faint and each word takes full colour in reading order as the page scrolls. The effect follows the reader, not a timer.</p>'
     '<div style="height:240px"></div>',
     400, ".fill{font:500 26px/1.55 ui-serif,Georgia,serif;max-width:18em}"),
]

FOUNDRY_CSS_BASE = """
html,body{margin:0;min-height:100%;background:#0e0d0b;color:#f0ebe3;}
body{display:grid;place-items:center;padding:36px 20px;font-family:ui-sans-serif,system-ui,sans-serif;}
"""

for slug, name, name_zh, cat, desc, tags, demo, h, extra_css in FOUNDRY_PICKS:
    js = read(SRC / "foundry" / f"{slug}.js")
    # skip fake 404 css
    js_name = f"{slug}.js"
    iframe = f"foundry-{slug}.html"
    html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{name} · Foundry44</title>
<!-- Foundry44 · {name} · Copyright (c) 2026 Foundry44 · MIT License
     https://foundry44.dev/components/{slug}/ -->
<style>
{FOUNDRY_CSS_BASE}
{extra_css}
</style>
</head>
<body>
{demo}
<script>
{js}
</script>
</body>
</html>
"""
    write(PUBLIC / iframe, html)
    # React + core from registry JSON
    files = [{"path": js_name, "language": "javascript", "content": js}]
    reg = SRC / "foundry" / f"{slug}.json"
    if reg.exists():
        try:
            data = json.loads(read(reg))
            for f in data.get("files") or []:
                files.append({
                    "path": f.get("path") or "component.tsx",
                    "language": "tsx" if str(f.get("path","")).endswith((".tsx",".ts")) else "txt",
                    "content": f.get("content") or "",
                })
        except Exception as e:
            print("foundry json err", slug, e)
    add_item(
        id=f"foundry-{slug}", name=name, nameZh=name_zh, sourceId="foundry44",
        sourceName="Foundry44", sourceUrl="https://foundry44.dev/",
        originalUrl=f"https://foundry44.dev/components/{slug}/",
        author="Foundry44", repo="",
        license="MIT", licenseUrl="https://foundry44.dev/license/",
        copyright="Copyright (c) 2026 Foundry44", category=cat,
        tags=tags + ["Foundry44", "零依赖"],
        description=desc, kind="code", preview="iframe", iframeSrc=f"./previews/{iframe}",
        iframeHeight=h, files=files,
        install=f"npx shadcn@latest add https://foundry44.dev/r/{slug}.json",
        notice="这是 Foundry44 公开的 9 个免费 MIT 组件之一。其余为 Pro，未收录。演示页本身不在 MIT 范围内，本站用了自写的演示外壳。",
    )

add_source(
    id="foundry44", name="Foundry44", url="https://foundry44.dev/",
    repo="", license="MIT（仅 9 个免费组件）",
    licenseUrl="https://foundry44.dev/license/",
    author="Foundry44",
    included="全部 9 个免费组件：Text Scramble、Rolling Number、Spotlight Card、Line Reveal、Word Loop、Clip Reveal、Image Parallax、Sticky Header、Word Fill。含官方 JS 与 React 源码、实时预览。",
    excluded="其余约 119 个 Pro 组件。Pro 许可明确禁止再分发或放入公开组件库。演示页的场景、文案和照片也不在 MIT 范围内。",
    why="官方许可页写明这 9 个组件（引擎、样式、React、脚本、AI 提示词）均为 MIT，Copyright (c) 2026 Foundry44。源码从官方公开的 /demos/*.js 与 /r/*.json 取得。",
)
print("foundry", len([i for i in items if i["sourceId"]=="foundry44"]))

print("part A done", len(items))
# dump mid-state so we can continue in same file... this IS the same file, continue below

# ========================================================================
# CUE KIT
# ========================================================================
# HTML (complete documents) + React/prompt selections
CUE_HTML = [
    ("gooey-liquid-feedback-drop", "Gooey Liquid Feedback Drop", "液态反馈水滴", "加载动画",
     "滚动触发的液态水滴，用 SVG gooey 滤镜和自写物理，弹跳后变成反馈弹层。",
     ["液态", "Gooey", "反馈"], 520),
    ("isometric-mechanical-keycap", "Isometric Mechanical Keycap", "等轴机械键帽", "按钮",
     "一颗等轴测的机械键盘键帽，按下有行程和回弹。",
     ["键帽", "等轴", "按钮"], 420),
    ("dot-matrix-cascade-typography", "Dot Matrix Cascade Typography", "点阵 cascade 文字", "文字动效",
     "点阵字形逐级落下、级联显现，偏硬件显示气质。",
     ["点阵", "文字", "级联"], 480),
    ("scrollspy-line-navigation", "Scrollspy Line Navigation", "滚动指示线导航", "导航",
     "一条细线跟随当前章节，作滚动侦测导航。",
     ["导航", "滚动侦测", "细线"], 520),
]
CUE_CODE = [
    ("button-magnetic", "Magnetic Button", "磁性按钮", "按钮",
     "按钮在一定半径内被指针吸过去，用弹簧回到原位；会尊重减少动态效果。",
     ["磁性", "按钮", "弹簧"]),
    ("glossy-slider-call-button", "Glossy Slider Call Button", "滑块通话按钮", "按钮",
     "带高光的滑动接通按钮，滑到尽头才触发。",
     ["滑块", "按钮", "通话"]),
    ("expandable-share-card", "Expandable Share Card", "可展开分享卡片", "卡片",
     "白色分享卡片，有公开/私密开关、展开的邀请面板和多邮箱输入。",
     ["分享", "卡片", "展开"]),
    ("collapsing-cards-accordion", "Collapsing Cards Accordion", "折叠卡片手风琴", "卡片",
     "一组卡片作为手风琴折叠、展开，带有体积感的收合。",
     ["手风琴", "卡片", "折叠"]),
    ("dynamic-island-feedback-notch", "Dynamic Island Feedback Notch", "灵动岛式反馈", "加载动画",
     "类似灵动岛的反馈槽，状态变化时变形、展开再收回。",
     ["灵动岛", "反馈", "通知"]),
    ("live-waveform-audio-recorder", "Live Waveform Audio Recorder", "实时波形录音器", "语音/光球",
     "录音时画出实时波形，停止后可回看。",
     ["波形", "录音", "语音"]),
]
CUE_PROMPT_ONLY = [
    ("burn-reveal-text-scene", "Burn Reveal Text Scene", "燃烧消散文字", "文字动效",
     "字形像被烧掉一样逐个消散，是 Cue Kit 里很有标志性的滚动文字场景。目前官方只提供设计它的 AI 提示词，还没有 React 源码。",
     ["燃烧", "文字", "滚动", "提示词"]),
]

def cue_prompt(slug: str) -> str:
    p = SRC / "cuekit" / "lib" / "prompts" / f"{slug}.md"
    if not p.exists():
        return ""
    text = read(p)
    # Extract fenced prompt if present
    m = re.search(r"## The prompt\s*```(?:\w+)?\n(.*?)```", text, re.S)
    if m:
        return m.group(1).strip()
    m = re.search(r"```(?:\w+)?\n(.*?)```", text, re.S)
    return m.group(1).strip() if m else text

def cue_license_header(slug: str, name: str) -> str:
    return (
        f"/**\n * Cue Kit / Cue Foundations · {name}\n"
        f" * MIT License · Copyright (c) 2026 Alok Srivastava (Cue)\n"
        f" * https://kit.cuedesign.space/components/{slug}\n"
        f" * https://github.com/aloksivastava1025-prog/cue-foundations\n */\n"
    )

for slug, name, name_zh, cat, desc, tags, h in CUE_HTML:
    raw = read(SRC / "cuekit" / "components" / "foundations" / f"{slug}.html")
    if "MIT License" not in raw[:800]:
        raw = f"<!-- {cue_license_header(slug, name).strip()} -->\n" + raw
    iframe = f"cue-{slug}.html"
    write(PUBLIC / iframe, raw)
    prompt = cue_prompt(slug)
    tsx = SRC / "cuekit" / "components" / "foundations" / f"{slug}.tsx"
    files = [{"path": f"{slug}.html", "language": "html", "content": raw}]
    if tsx.exists():
        files.append({"path": f"{slug}.tsx", "language": "tsx",
                      "content": cue_license_header(slug, name) + read(tsx)})
    add_item(
        id=f"cue-{slug}", name=name, nameZh=name_zh, sourceId="cuekit",
        sourceName="Cue Kit", sourceUrl="https://kit.cuedesign.space/",
        originalUrl=f"https://kit.cuedesign.space/components/{slug}",
        author="Alok Srivastava", repo="https://github.com/aloksivastava1025-prog/cue-foundations",
        license="MIT", licenseUrl="https://github.com/aloksivastava1025-prog/cue-foundations/blob/main/LICENSE",
        copyright="Copyright (c) 2026 Alok Srivastava (Cue)", category=cat,
        tags=tags + ["Cue Kit"], description=desc, kind="code", preview="iframe",
        iframeSrc=f"./previews/{iframe}", iframeHeight=h, files=files, prompt=prompt,
        install=f"npx shadcn@latest add https://kit.cuedesign.space/r/{slug}.json",
    )

for slug, name, name_zh, cat, desc, tags in CUE_CODE:
    tsx_p = SRC / "cuekit" / "components" / "foundations" / f"{slug}.tsx"
    if not tsx_p.exists():
        print("missing cue tsx", slug)
        continue
    content = cue_license_header(slug, name) + read(tsx_p)
    prompt = cue_prompt(slug)
    add_item(
        id=f"cue-{slug}", name=name, nameZh=name_zh, sourceId="cuekit",
        sourceName="Cue Kit", sourceUrl="https://kit.cuedesign.space/",
        originalUrl=f"https://kit.cuedesign.space/components/{slug}",
        author="Alok Srivastava", repo="https://github.com/aloksivastava1025-prog/cue-foundations",
        license="MIT", licenseUrl="https://github.com/aloksivastava1025-prog/cue-foundations/blob/main/LICENSE",
        copyright="Copyright (c) 2026 Alok Srivastava (Cue)", category=cat,
        tags=tags + ["Cue Kit"], description=desc, kind="code", preview="code",
        files=[{"path": f"{slug}.tsx", "language": "tsx", "content": content}],
        prompt=prompt,
        install=f"npx shadcn@latest add https://kit.cuedesign.space/r/{slug}.json",
        notice="组件依赖 React、Tailwind，部分还用到 Framer Motion / GSAP。本页提供完整源码与官方提示词；因依赖较重，未做站内实时预览。",
    )

for slug, name, name_zh, cat, desc, tags in CUE_PROMPT_ONLY:
    prompt = cue_prompt(slug)
    add_item(
        id=f"cue-{slug}", name=name, nameZh=name_zh, sourceId="cuekit",
        sourceName="Cue Kit", sourceUrl="https://kit.cuedesign.space/",
        originalUrl=f"https://kit.cuedesign.space/components/{slug}",
        author="Alok Srivastava", repo="https://github.com/aloksivastava1025-prog/cue-foundations",
        license="MIT", licenseUrl="https://github.com/aloksivastava1025-prog/cue-foundations/blob/main/LICENSE",
        copyright="Copyright (c) 2026 Alok Srivastava (Cue)", category="提示词",
        tags=tags + ["Cue Kit", "仅提示词"], description=desc, kind="code", preview="code",
        files=[], prompt=prompt,
        notice="官方目前只提供设计该组件的 AI 提示词，尚未发布 React 源码。提示词同样按 MIT 发布。",
    )

add_source(
    id="cuekit", name="Cue Kit", url="https://kit.cuedesign.space/",
    repo="https://github.com/aloksivastava1025-prog/cue-foundations", license="MIT",
    licenseUrl="https://github.com/aloksivastava1025-prog/cue-foundations/blob/main/LICENSE",
    author="Alok Srivastava",
    included="精选 11 项：4 个带独立 HTML 预览，6 个带 React 源码与官方提示词，1 个仅提示词（Burn Reveal）。源码来自公开的 cue-foundations 仓库。",
    excluded="主站 Cue+ 的付费组件不在 Cue Kit / 该仓库中，未收录。仓库其余组件未全部搬入。",
    why="仓库 LICENSE 为 MIT，Copyright (c) 2026 Alok Srivastava (Cue)。官方 llms.txt 也写明 Cue Kit 是 MIT、无需注册。",
)
print("cue", len([i for i in items if i["sourceId"]=="cuekit"]))

# ========================================================================
# VOICEORBS — copy CSS orbs + lib into vendor
# ========================================================================
VO_LIB_DST = VENDOR / "voiceorbs" / "lib"
VO_LIB_SRC = SRC / "voiceorbs" / "src" / "registry" / "lib"
VO_LIB_DST.mkdir(parents=True, exist_ok=True)
# copy needed lib files (not tests, not provider adapters)
for name in [
    "orb-state.ts", "orb-color.ts", "use-orb-level.ts", "use-orb-animator.ts",
    "use-reduced-motion.ts", "use-in-view.ts", "use-audio-level.ts",
    "use-waveform.ts", "use-audio-bands.ts", "use-webgl-support.ts",
    "orb-pill.tsx", "orb-pill.module.css", "orb-status.tsx",
]:
    srcp = VO_LIB_SRC / name
    if srcp.exists():
        shutil.copy(srcp, VO_LIB_DST / name)

VO_ORBS = [
    ("pulse-orb", "PulseOrb", "Pulse Orb", "脉冲光球", "纯 CSS 的脉冲光球，体积最轻，适合作为助手状态指示。", ["CSS", "脉冲", "轻量"]),
    ("glass-orb", "GlassOrb", "Glass Orb", "玻璃光球", "半透明玻璃质感的光球，状态切换时折射和光晕会变。", ["CSS", "玻璃", "光晕"]),
    ("aurora-orb", "AuroraOrb", "Aurora Orb", "极光光球", "极光色带在球体里流动，聆听和说话时节奏不同。", ["CSS", "极光", "色带"]),
    ("halo-orb", "HaloOrb", "Halo Orb", "光环光球", "外圈光环随状态扩张、旋转，中间是稳定的核。", ["CSS", "光环"]),
    ("equalizer-orb", "EqualizerOrb", "Equalizer Orb", "均衡器光球", "一圈均衡器柱围绕中心，说话时柱高跟随音量。", ["CSS", "均衡器", "音量"]),
    ("minimal-orb", "MinimalOrb", "Minimal Orb", "极简光球", "最克制的一颗，只用细线和轻微呼吸表达状态。", ["CSS", "极简"]),
]

vo_prompt = """把这个 VoiceOrbs 光球接到我的语音助手界面里。

所有光球共用同一套 7 种状态：idle、connecting、listening、thinking、speaking、error、disabled。用 state 属性驱动，状态之间应平滑过渡。

实时音量通过 levelRef（React ref，0..1，不要用 state 以免重渲染）传入。没有音量时设为 -1，光球会走自己的程序动画。

请保留源码顶部的 MIT 许可证与 Copyright (c) 2026 Alexis Munoz。组件是复制即用，不是 npm 包；把组件文件和共享的 lib 一并拷进项目。

尊重 prefers-reduced-motion。下面是组件源码。
"""

for slug, export, name, name_zh, desc, tags in VO_ORBS:
    src_dir = SRC / "voiceorbs" / "src" / "registry" / "orbe" / slug
    dst_dir = VENDOR / "voiceorbs" / "orbe" / slug
    if not src_dir.exists():
        print("missing orb", slug)
        continue
    dst_dir.mkdir(parents=True, exist_ok=True)
    files = []
    for f in sorted(src_dir.iterdir()):
        if f.suffix in {".tsx", ".ts", ".css"} and "tw." not in f.name:
            shutil.copy(f, dst_dir / f.name)
            files.append({
                "path": f"{slug}/{f.name}",
                "language": "tsx" if f.suffix == ".tsx" else ("css" if f.suffix == ".css" else "ts"),
                "content": (
                    f"/* VoiceOrbs · MIT License · Copyright (c) 2026 Alexis Munoz */\n"
                    if f.suffix == ".css" else
                    f"// VoiceOrbs · MIT License · Copyright (c) 2026 Alexis Munoz\n"
                    f"// https://github.com/amunozdev/voiceorbs\n"
                ) + read(f),
            })
    # also include orb-state.ts as supporting
    files.append({
        "path": "lib/orb-state.ts",
        "language": "ts",
        "content": "// VoiceOrbs · MIT License · Copyright (c) 2026 Alexis Munoz\n" + read(VO_LIB_SRC / "orb-state.ts"),
    })
    add_item(
        id=f"voiceorbs-{slug}", name=name, nameZh=name_zh, sourceId="voiceorbs",
        sourceName="VoiceOrbs", sourceUrl="https://voiceorbs.vercel.app/",
        originalUrl=f"https://voiceorbs.vercel.app/",
        author="Alexis Munoz", repo="https://github.com/amunozdev/voiceorbs",
        license="MIT", licenseUrl="https://github.com/amunozdev/voiceorbs/blob/main/LICENSE",
        copyright="Copyright (c) 2026 Alexis Munoz", category="语音/光球",
        tags=tags + ["VoiceOrbs", "7 状态"],
        description=desc + " 共用 idle / connecting / listening / thinking / speaking / error / disabled 七种状态。",
        kind="code", preview="react", reactPreview=f"voiceorbs-{slug}",
        files=files, prompt=vo_prompt + "\n\n组件名：" + export + "\n",
        notice="原仓库 20 个光球全部 MIT。本站收入 6 个纯 CSS、无需 WebGL 第三方包的，便于预览和复制。依赖 @paper-design/shaders-react 的 GPU 款未收入站内预览，可到源仓库取。",
    )

add_source(
    id="voiceorbs", name="VoiceOrbs", url="https://voiceorbs.vercel.app/",
    repo="https://github.com/amunozdev/voiceorbs", license="MIT",
    licenseUrl="https://github.com/amunozdev/voiceorbs/blob/main/LICENSE",
    author="Alexis Munoz",
    included="6 个纯 CSS 光球（Pulse、Glass、Aurora、Halo、Equalizer、Minimal）及共享的 7 状态协议源码，带实时预览（可切换状态）。",
    excluded="其余约 14 个（含 WebGL / Three / @paper-design/shaders-react 的 Plasma、Dither、Nebula 等）未做站内预览，以免引入额外重依赖；它们同样是 MIT，可在 GitHub 取用。",
    why="仓库 LICENSE 为 MIT，Copyright (c) 2026 Alexis Munoz。",
)
print("voiceorbs", len([i for i in items if i["sourceId"]=="voiceorbs"]))

# ========================================================================
# MEKAI
# ========================================================================
MEKAI_PICKS = [
    ("split-text", "SplitText", "Split Text", "文字动效", "字母逐个弹簧就位，进入视口时播放。", ["拆字", "弹簧", "滚动"]),
    ("scramble-text", "ScrambleText", "Scramble Text", "文字动效", "悬停或聚焦时，文字从随机字形从左到右解码。", ["解码", "悬停"]),
    ("blur-text", "BlurText", "Blur Text", "文字动效", "单词一个接一个从模糊变清晰，进入视口时播放。", ["模糊", "显现"]),
    ("shiny-text", "ShinyText", "Shiny Text", "文字动效", "一道柔和的光带循环扫过文字。", ["光泽", "循环"]),
    ("pixel-button", "PixelButton", "Pixel Button", "按钮", "像素风按钮，按下有块状反馈，搭配像素字体。", ["像素", "按钮", "游戏"]),
    ("magnetic-button", "MagneticButton", "Magnetic Button", "按钮", "按钮被指针吸过去，带弹簧回弹。", ["磁性", "按钮"]),
    ("health-bar", "HealthBar", "Health Bar", "游戏 UI", "游戏血条，掉血和回血都有动画。", ["血条", "游戏"]),
    ("xp-bar", "XpBar", "XP Bar", "游戏 UI", "经验条，升级时有过段动画，显示等级。", ["经验", "游戏", "升级"]),
    ("plasma", "Plasma", "Plasma", "背景/Shader", "WebGL 等离子场，颜色可配，指针带透镜变形。", ["等离子", "WebGL", "背景"]),
    ("aurora", "Aurora", "Aurora", "背景/Shader", "极光背景，带状光幕缓慢流动。", ["极光", "背景"]),
    ("click-spark", "ClickSpark", "Click Spark", "按钮", "点击处迸出火花，可包在任意内容外面。", ["火花", "点击"]),
    ("tilt-card", "TiltCard", "Tilt Card", "卡片", "卡片随指针做 3D 倾斜，带高光。", ["倾斜", "卡片", "3D"]),
    ("folder", "Folder", "Folder", "卡片", "文件夹卡片，悬停时里面的文件散开。", ["文件夹", "悬停"]),
]

# copy theme and selected components
mekai_dst = VENDOR / "mekai"
mekai_dst.mkdir(parents=True, exist_ok=True)
shutil.copy(SRC / "mekai" / "theme.css", mekai_dst / "theme.css")
shutil.copy(SRC / "mekai" / "LICENSE", mekai_dst / "LICENSE")
(mekai_dst / "ui").mkdir(exist_ok=True)

for slug, export, name, name_zh, desc, tags in MEKAI_PICKS:
    srcp = SRC / "mekai" / "components" / "ui" / f"{slug}.tsx"
    if not srcp.exists():
        print("missing mekai", slug)
        continue
    raw = read(srcp)
    if "Copyright" not in raw[:400]:
        raw = (
            f"/**\n * Mekai UI · {name}\n"
            f" * MIT License · Copyright (c) 2026 Mekai Games\n"
            f" * https://ui.mekaigames.com/components/{slug}\n"
            f" * https://github.com/mekai-ui/mekai-ui\n */\n" + raw
        )
    write(mekai_dst / "ui" / f"{slug}.tsx", raw)
    add_item(
        id=f"mekai-{slug}", name=name, nameZh=name_zh, sourceId="mekai",
        sourceName="Mekai UI", sourceUrl="https://ui.mekaigames.com/",
        originalUrl=f"https://ui.mekaigames.com/components/{slug}",
        author="Mekai Games", repo="https://github.com/mekai-ui/mekai-ui",
        license="MIT", licenseUrl="https://github.com/mekai-ui/mekai-ui/blob/main/LICENSE",
        copyright="Copyright (c) 2026 Mekai Games", category=cat if False else (
            "文字动效" if "text" in slug or slug in {"shiny-text","blur-text","scramble-text","split-text"} else
            "按钮" if "button" in slug or slug=="click-spark" else
            "游戏 UI" if slug in {"health-bar","xp-bar"} else
            "背景/Shader" if slug in {"plasma","aurora"} else
            "卡片"
        ),
        tags=tags + ["Mekai UI", "Motion"],
        description=desc, kind="code", preview="react", reactPreview=f"mekai-{slug}",
        files=[{"path": f"{slug}.tsx", "language": "tsx", "content": raw}],
        install=f"npx shadcn@latest add https://ui.mekaigames.com/r/{slug}.json",
        notice="GitHub 上这 53 个免费组件全部 MIT。本站精选并做了实时预览。需要 Motion 和 Mekai 的 theme.css。",
    )

add_source(
    id="mekai", name="Mekai UI", url="https://ui.mekaigames.com/",
    repo="https://github.com/mekai-ui/mekai-ui", license="MIT（53 个免费组件）",
    licenseUrl="https://github.com/mekai-ui/mekai-ui/blob/main/LICENSE",
    author="Mekai Games",
    included="精选 13 个免费组件（文字、按钮、游戏 UI、Shader 背景、卡片），带完整源码与实时预览。源码来自公开 GitHub 仓库。",
    excluded="其余免费组件未全部搬入。167 个里付费的那部分不在该公开仓库中，未收录。",
    why="仓库 LICENSE 为 MIT，Copyright (c) 2026 Mekai Games。README 写明这 53 个永久免费。",
)
print("mekai", len([i for i in items if i["sourceId"]=="mekai"]))

print("part B", len(items))

# ========================================================================
# LIBRARIES.DEV — npm MIT packages, usage code + live preview via npm
# ========================================================================
LIB_ITEMS = [
    ("border-beam", "Border Beam", "边框光束", "背景/Shader",
     "一道柔光沿卡片、按钮或输入框的边框走，也可改成呼吸式光晕。单独的 npm 包，MIT。",
     ["边框", "光束", "npm"],
     "border-beam",
     """import { BorderBeam } from 'border-beam';

export function Example() {
  return (
    <BorderBeam size="md">
      <div style={{ padding: 32, borderRadius: 16, background: '#1d1d1d' }}>
        Your content here
      </div>
    </BorderBeam>
  );
}
"""),
    ("thinking-orbs", "Thinking Orbs", "思考光球", "AI 界面组件",
     "AI 思考时的球形加载，有 searching、working、solving、listening 等多种状态。",
     ["思考", "加载", "AI", "npm"],
     "thinking-orbs",
     """import { ThinkingOrb } from 'thinking-orbs';

export function Example() {
  return <ThinkingOrb state="searching" size={64} theme="dark" />;
}
"""),
    ("metal-fx", "Metal FX", "液态金属", "按钮",
     "WebGL 液态金属环绕按钮或图标，有彩虹、银、金几种预设。需要 WebGL2。",
     ["金属", "WebGL", "按钮", "npm"],
     "metal-fx",
     """import { MetalFx } from 'metal-fx';

export function Example() {
  return (
    <MetalFx variant="button" preset="chromatic" theme="dark">
      <button>Upgrade</button>
    </MetalFx>
  );
}
"""),
    ("liquid-gooey", "Liquid Gooey", "液态融合", "导航",
     "子元素像粘液一样融合、分离，适合做圆形菜单或变形面板。",
     ["液态", "融合", "菜单", "npm"],
     "liquid-gooey",
     """import { Liquid } from 'liquid-gooey';

export function Example({ open }: { open: boolean }) {
  return (
    <Liquid blur={6} contrast={18} fill="#fff">
      <Liquid.Item x={open ? -54 : 0} y={open ? -34 : 0} transition="bouncy">
        <button>A</button>
      </Liquid.Item>
      <Liquid.Item x={0} y={open ? -64 : 0} transition="bouncy" delay={40}>
        <button>B</button>
      </Liquid.Item>
    </Liquid>
  );
}
"""),
    ("voice-glow", "Voice Glow", "语音光晕", "语音/光球",
     "输入框或卡片底边随语音起伏的光晕，可接麦克风或自定义电平。",
     ["语音", "光晕", "输入框", "npm"],
     "voice-glow",
     """import { VoiceBeam, useMicrophone } from 'voice-glow';

export function Example() {
  const mic = useMicrophone();
  return (
    <>
      <VoiceBeam stream={mic.stream}>
        <div style={{ padding: 32, borderRadius: 20, background: '#1d1d1d' }}>
          Speak
        </div>
      </VoiceBeam>
      <button onClick={mic.state === 'live' ? mic.stop : mic.start}>
        {mic.state === 'live' ? 'Stop' : 'Start'}
      </button>
    </>
  );
}
"""),
    ("bot-avatars", "Bot Avatars", "机器人头像", "AI 界面组件",
     "带表情和状态的机器人头像，有 clover、droid、cat 等多种造型，可切 working 等状态。",
     ["头像", "AI", "表情", "npm"],
     "bot-avatars",
     """import { BotAvatar } from 'bot-avatars';

export function Example({ busy }: { busy: boolean }) {
  return <BotAvatar type="clover" state={busy ? 'working' : 'default'} />;
}
"""),
    ("img-fx", "Image FX", "生成图加载", "加载动画",
     "图片生成时的像素马赛克渐显成照片，适合做生成式 UI 的过渡。需要 three 作为 peer。",
     ["图片", "生成", "马赛克", "npm"],
     "img-fx",
     """import { ImageGeneration } from 'img-fx';

export function Example() {
  return (
    <ImageGeneration preset="pixels-organic" images={['/a.jpg', '/b.jpg']}>
      <div className="card" style={{ width: 320, height: 320, borderRadius: 20 }} />
    </ImageGeneration>
  );
}
"""),
]

LIB_PROMPT = """用 Libraries.dev 的 {pkg} 做下面的效果。先安装：

npm install {pkg}

这是 MIT 许可的官方用法，请按文档接入，不要改包内部实现。商业项目可以使用。Pro 的 Studio 导出和 Pro 预设不在 MIT 范围内，不要去找。

用法：

{usage}
"""

for slug, name, name_zh, cat, desc, tags, pkg, usage in LIB_ITEMS:
    header = (
        f"// Libraries.dev · {name}\n"
        f"// MIT License · Copyright (c) 2026 Jakub Antalik\n"
        f"// https://libraries.dev · https://github.com/Jakubantalik/Libraries.dev\n"
        f"// npm: {pkg}\n\n"
    )
    add_item(
        id=f"libraries-{slug}", name=name, nameZh=name_zh, sourceId="libraries",
        sourceName="Libraries.dev", sourceUrl="https://libraries.dev/",
        originalUrl=f"https://libraries.dev/{slug if slug != 'thinking-orbs' else 'orb'}",
        author="Jakub Antalik", repo="https://github.com/Jakubantalik/Libraries.dev",
        license="MIT", licenseUrl="https://github.com/Jakubantalik/Libraries.dev/blob/main/LICENSE",
        copyright="Copyright (c) 2026 Jakub Antalik", category=cat,
        tags=tags + ["Libraries.dev"],
        description=desc, kind="code", preview="react", reactPreview=f"libraries-{slug}",
        files=[{"path": f"{slug}-usage.tsx", "language": "tsx", "content": header + usage}],
        prompt=LIB_PROMPT.format(pkg=pkg, usage=usage),
        install=f"npm install {pkg}",
        notice="这是 MIT 的 npm 包，完整实现在包内。本站收入官方用法示例并做实时预览。Pro Studio 导出和模型文件（Libraries.dev Model License）未收录。",
    )

add_source(
    id="libraries", name="Libraries.dev", url="https://libraries.dev/",
    repo="https://github.com/Jakubantalik/Libraries.dev", license="MIT（库代码）",
    licenseUrl="https://github.com/Jakubantalik/Libraries.dev/blob/main/LICENSE",
    author="Jakub Antalik",
    included="7 个 MIT 库的用法示例与实时预览：Border Beam、Thinking Orbs、Metal FX、Liquid Gooey、Voice Glow、Bot Avatars、Image FX。通过官方 npm 包运行，不复制 Pro 内容。",
    excluded="Pro Studio 导出、Pro 预设和食谱（付费许可）。模型文件（如 Magnet.mfxl）受 Libraries.dev Model License 约束，未收录。SwiftUI Distortion Waves 未做 Web 预览。",
    why="仓库根 LICENSE 与各包 LICENSE 均为 MIT，Copyright (c) 2026 Jakub Antalik。官方说明商业项目可用这些库；Pro 内容另算。",
)
print("libraries", len([i for i in items if i["sourceId"]=="libraries"]))

# ========================================================================
# CRUCIBLE — free MIT via public registry JSON
# ========================================================================
CRUCIBLE_PICKS = [
    ("anneal", "Anneal", "退火显现文字", "文字动效",
     "文字从模糊逐渐锐化，按词或按字错开，像金属退火。", ["模糊", "显现", "文字"]),
    ("cipher", "Cipher", "符文解码文字", "文字动效",
     "字符先在锻造符文里翻搅，再淬成最终文案。", ["解码", "符文", "文字"]),
    ("gild", "Gild", "鎏金扫光文字", "文字动效",
     "一道金属光慢慢扫过字形，像鎏金。", ["鎏金", "扫光", "文字"]),
    ("murmur", "Murmur", "流式回答", "AI 界面组件",
     "流式助手消息：每个到达的词向上淡入就位，适合 AI 对话。", ["流式", "对话", "AI"]),
    ("relay", "Relay", "工具调用卡片", "AI 界面组件",
     "Agent 工具调用卡片：运行时状态符旋转，完成后收起，等待确认时会停住。", ["工具调用", "Agent", "AI"]),
    ("sluice", "Sluice", "提示词输入舱", "AI 界面组件",
     "聊天用的提示词输入：自动长高的文本框装在玻璃舱里。", ["输入", "提示词", "AI"]),
    ("quota", "Quota", "上下文额度条", "AI 界面组件",
     "上下文窗口或积分的计量卡片，数字滚动，分段条显示用量。", ["额度", "上下文", "AI"]),
    ("quench", "Quench", "淬火涟漪按钮", "按钮",
     "从点击处扩散的涟漪，像热金属入水。", ["涟漪", "按钮", "点击"]),
    ("sheen", "Sheen", "扫光按钮", "按钮",
     "一道白银色的光定期扫过按钮表面和边缘。", ["扫光", "按钮"]),
    ("piston", "Piston", "活塞提交按钮", "按钮",
     "提交按钮按活塞行程走完异步生命周期：标签、等待、成功或失败。", ["提交", "状态", "按钮"]),
    ("flywheel", "Flywheel", "飞轮加载", "加载动画",
     "四种机械感 CSS 转轮（环、点轨道、分段、双环），可切换。", ["加载", "转轮", "CSS"]),
]

cruc_vendor = VENDOR / "crucible"
cruc_vendor.mkdir(parents=True, exist_ok=True)

# write useReducedMotion and cn
write(cruc_vendor / "use-reduced-motion.ts",
      "// Crucible · MIT License · Copyright (c) 2026 Crucible (crucibleui.com)\n"
      + json.loads(read(SRC / "crucible-r" / "use-reduced-motion.json"))["files"][0]["content"])
write(cruc_vendor / "cn.ts", """export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(" ");
}
""")

for slug, name, name_zh, cat, desc, tags in CRUCIBLE_PICKS:
    jp = SRC / "crucible-r" / f"{slug}.json"
    if not jp.exists():
        print("missing crucible", slug)
        continue
    try:
        data = json.loads(read(jp))
    except Exception as e:
        print("bad json", slug, e)
        continue
    files = []
    main_tsx = None
    for f in data.get("files") or []:
        content = f.get("content") or ""
        path = f.get("path") or f"{slug}.tsx"
        base = Path(path).name
        header = (
            f"/**\n * Crucible · {name}\n"
            f" * MIT License · Copyright (c) 2026 Crucible (crucibleui.com)\n"
            f" * https://crucibleui.com · https://crucibleui.com/r/{slug}.json\n */\n"
        )
        if "Copyright (c) 2026 Crucible" not in content[:500]:
            content = header + content
        # adapted copy for preview: rewrite imports
        adapted = content
        adapted = adapted.replace('from "@/lib/utils"', 'from "../cn"')
        adapted = adapted.replace("from '@/lib/utils'", "from '../cn'")
        adapted = adapted.replace('from "@/hooks/use-reduced-motion"', 'from "../use-reduced-motion"')
        adapted = adapted.replace("from '@/hooks/use-reduced-motion'", "from '../use-reduced-motion'")
        write(cruc_vendor / slug / base, adapted)
        files.append({"path": path, "language": "tsx" if path.endswith(("tsx","ts")) else "txt", "content": content})
        if path.endswith(".tsx") and main_tsx is None:
            main_tsx = base
    add_item(
        id=f"crucible-{slug}", name=name, nameZh=name_zh, sourceId="crucible",
        sourceName="Crucible", sourceUrl="https://crucibleui.com/",
        originalUrl=f"https://crucibleui.com/components/{slug}",
        author="Crucible", repo="",
        license="MIT", licenseUrl="https://crucibleui.com/license",
        copyright="Copyright (c) 2026 Crucible (crucibleui.com)", category=cat,
        tags=tags + ["Crucible"],
        description=desc, kind="code", preview="react", reactPreview=f"crucible-{slug}",
        files=files,
        install=f"npx shadcn@latest add @crucible/{slug}",
        notice="来自官方公开的免费注册表 https://crucibleui.com/r/{0}.json。114 个免费组件为 MIT；Pro 组件的源码不会公开提供，未收录。".format(slug),
    )

add_source(
    id="crucible", name="Crucible", url="https://crucibleui.com/",
    repo="", license="MIT（114 个免费组件）",
    licenseUrl="https://crucibleui.com/license",
    author="Crucible",
    included="精选 11 个免费组件（文字、AI 界面、按钮、加载），源码来自公开注册表 JSON，并做了实时预览。",
    excluded="124 个 Pro 组件：官方明确「源码不会公开提供」，许可为付费单座许可，未收录。其余免费组件未全部搬入。",
    why="官方许可页写明全部 114 个免费组件（从 crucibleui.com/r/<name>.json 安装的）以 MIT 发布，Copyright (c) 2026 Crucible (crucibleui.com)。公开的 registry.json 只列出免费项。",
)
print("crucible", len([i for i in items if i["sourceId"]=="crucible"]))

# ========================================================================
# NDEKOUI — MIT, code of selected AI pieces (many internal deps → code-only)
# ========================================================================
NDEKO_PICKS = [
    ("chat-prompt-input", "Chat Prompt Input", "对话提示词输入", "AI 界面组件",
     "带模式切换的 AI 对话输入框，是 ndekoui 里对话界面的核心部件。",
     ["输入", "提示词", "AI"],
     SRC / "ndekoui" / "registry" / "ndeko" / "ui" / "chat-prompt-input.tsx"),
]

# Find a couple more reasonably described AI files
# tool / citation / context
extra_candidates = list((SRC / "ndekoui" / "registry" / "ndeko").rglob("*.tsx"))
interesting = []
for p in extra_candidates:
    n = p.name.lower()
    if any(k in n for k in ["tool-call", "tool-approval", "citation", "context-usage", "usage-bar", "source-cite", "risk-confirm"]):
        interesting.append(p)

# also search in items descriptions? Let's pick known paths
for rel in [
    "ui/chat-prompt-input.tsx",
]:
    pass

# Try to find files by name keywords more broadly
for p in extra_candidates:
    n = str(p).lower()
    if any(k in n for k in ["tool-call", "citation", "context-window", "usage-meter", "prompt-input"]):
        if p not in [x[2] if len(x)>2 else None for x in []]:
            interesting.append(p)

# dedupe and print
seen=set()
uniq=[]
for p in interesting:
    if p not in seen:
        seen.add(p); uniq.append(p)
print("ndeko interesting", [str(p.relative_to(SRC/"ndekoui")) for p in uniq[:20]])

# We'll include chat-prompt-input plus any tool/citation file as code-only,
# and 2 simpler visual components if we can find animated buttons in registry.

# Look at registry items for simple ones - skip if too coupled.
# Include the main file with a clear notice.

NDEKO_FILES = [
    ("chat-prompt-input", "Chat Prompt Input", "对话提示词输入框", "AI 界面组件",
     "带发送和模式切换的 AI 对话输入。源码改编自 prompt-kit（MIT），并由 ndekocode 继续维护。依赖该库自己的 Button、Textarea、Tooltip 等，适合用 shadcn CLI 整套安装。",
     ["输入", "提示词", "AI"],
     SRC / "ndekoui" / "registry" / "ndeko" / "ui" / "chat-prompt-input.tsx"),
]

# try these paths
for slug, title, title_zh, cat, desc, tags, maybe in [
    ("agent-01", "Agent Status Tile", "Agent 状态磁贴", "AI 界面组件",
     "多 agent 协作里的状态磁贴，展示一个 agent 当前是排队、运行还是等待确认。",
     ["Agent", "状态", "AI"],
     SRC / "ndekoui" / "registry" / "ndeko" / "components" / "agent" / "agent-01.tsx"),
    ("agent-status", "Agent Status", "Agent 状态", "AI 界面组件",
     "Agent 运行状态条：排队、运行、等待确认、完成。",
     ["Agent", "状态", "AI"],
     SRC / "ndekoui" / "registry" / "ndeko" / "components" / "agent" / "_parts" / "agent-status.tsx"),
]:
    if maybe.exists():
        NDEKO_FILES.append((slug, title, title_zh, cat, desc, tags, maybe))

for slug, name, name_zh, cat, desc, tags, path in NDEKO_FILES:
    raw = read(path)
    header = (
        f"/**\n * ndekoui · {name}\n"
        f" * MIT License · Copyright (c) 2024 ibelick\n"
        f" * Copyright (c) 2024-present ndekocode\n"
        f" * https://ui.ndekocode.dev · https://github.com/NdekoCode/ndekoui\n */\n"
    )
    if "MIT" not in raw[:500]:
        raw = header + raw
    add_item(
        id=f"ndekoui-{slug}", name=name, nameZh=name_zh, sourceId="ndekoui",
        sourceName="ndekoui", sourceUrl="https://ui.ndekocode.dev/",
        originalUrl="https://ui.ndekocode.dev/",
        author="ndekocode（部分改编自 ibelick / prompt-kit）",
        repo="https://github.com/NdekoCode/ndekoui",
        license="MIT", licenseUrl="https://github.com/NdekoCode/ndekoui/blob/main/LICENCE.md",
        copyright="Copyright (c) 2024 ibelick; Copyright (c) 2024-present ndekocode",
        category=cat, tags=tags + ["ndekoui"],
        description=desc, kind="code", preview="code",
        files=[{"path": path.name, "language": "tsx", "content": raw}],
        install=f"npx shadcn@latest add https://ui.ndekocode.dev/r/{slug}.json",
        notice="该组件依赖 ndekoui 自己的设计系统和若干部件，本站提供主文件源码但不做站内预览。建议用官方 CLI 或 MCP 安装完整依赖。LICENCE 为 MIT，并注明改编自 prompt-kit。",
    )

add_source(
    id="ndekoui", name="ndekoui", url="https://ui.ndekocode.dev/",
    repo="https://github.com/NdekoCode/ndekoui", license="MIT",
    licenseUrl="https://github.com/NdekoCode/ndekoui/blob/main/LICENCE.md",
    author="ndekocode（LICENCE 同时保留 ibelick 的版权声明）",
    included="精选 3 个与 AI 界面相关的源码文件（对话输入、Agent 状态），供阅读和再分发。因依赖该库内部设计系统，未做站内实时预览。",
    excluded="其余约数百个组件、block 和模板未整库搬入。它们同样是 MIT，可用官方 shadcn 注册表或 MCP 安装。",
    why="仓库 LICENCE.md 为 MIT，Copyright (c) 2024 ibelick 与 Copyright (c) 2024-present ndekocode。",
)
print("ndekoui", len([i for i in items if i["sourceId"]=="ndekoui"]))

# ========================================================================
# LINK-ONLY: unclear license or ToS forbids redistribution
# ========================================================================
LINK_ITEMS = [
    # uibrik
    ("uibrik-overview", "uibrik", "uibrik 组件库", "卡片",
     "给 AI 代理通过 MCP 安装的动效 React 组件库，有可压扁的开关、磁性 FAQ、会散开的文件夹、GPU 着色器背景等。免费组件可在个人和商业项目中使用，但条款没有给出 MIT 等标准开源许可，也没有明确允许再分发到集合站。",
     ["MCP", "组件库"],
     "uibrik", "uibrik", "https://uibrik.com/", "https://uibrik.com/",
     "uibrik",
     "条款允许免费组件用于个人和商业项目，但不是标准开源许可；部分组件在 21st.dev 上另以 MIT 发布，本站未去核对每一份拷贝。"),
    # ditherui
    ("dither-prompt-input", "Prompt Input", "提示词输入框", "AI 界面组件",
     "DitherUI 的提示词输入，属于其 AI 产品界面一套。免费项可从文档复制，但条款没有给出标准开源许可，再分发边界不清晰。",
     ["提示词", "输入", "AI"],
     "ditherui", "DitherUI", "https://ditherui.dev/", "https://ditherui.dev/docs/components",
     "DitherUI",
     "免费项可复制使用，但未找到 MIT 等许可证；All-Access 明确禁止把源码再发布为组件库。"),
    ("dither-agent-thinking", "Agent Thinking", "Agent 思考过程", "AI 界面组件",
     "展示模型思考过程的界面组件。仅链接到源站，不收录源码。",
     ["思考", "Agent", "AI"],
     "ditherui", "DitherUI", "https://ditherui.dev/", "https://ditherui.dev/",
     "DitherUI",
     "许可不清晰，且部分 AI 组件（如 Agent Run）是付费 Pro，一律不复制代码。"),
    ("dither-voice-orb", "Dither Voice Orb", "Dither 语音光球", "语音/光球",
     "DitherUI 的语音光球。仅链接。",
     ["语音", "光球"],
     "ditherui", "DitherUI", "https://ditherui.dev/", "https://ditherui.dev/",
     "DitherUI",
     "许可不清晰，不复制代码。"),
    # motionprompts
    ("motionprompts-overview", "motionprompts", "motionprompts 动效库", "滚动动效",
     "面向 GSAP 和 WebGL 的动效提示词库，官网有滚动、预加载、3D 等大量演示。免费项可以查看和复制来评估，但条款写明「看，不要发布」，付费许可也禁止把提示词或源码再分发到别的库。",
     ["GSAP", "WebGL", "提示词"],
     "motionprompts", "motionprompts", "https://motionprompts.dev/", "https://motionprompts.dev/",
     "Vanguardia / motionprompts",
     "条款明确禁止再发布提示词或源码，免费档是「看，不要发布」。"),
    # scrolltide
    ("scrolltide-otis", "Otis", "Otis 模板", "滚动动效",
     "Scrolltide 免费模板之一，电影感滚动站点。条款允许用来做自己的或客户的网站，但禁止把模板或提示词再分发为产品或提示词包。",
     ["模板", "滚动", "免费"],
     "scrolltide", "Scrolltide", "https://www.scrolltide.co/", "https://www.scrolltide.co/",
     "Scrolltide",
     "条款禁止再分发模板和提示词本身。复制超过一个免费模板还需要账号。"),
    ("scrolltide-selene", "SELENE", "SELENE 模板", "滚动动效",
     "Scrolltide 免费模板之一。仅链接，不收录提示词或源码。",
     ["模板", "滚动", "免费"],
     "scrolltide", "Scrolltide", "https://www.scrolltide.co/", "https://www.scrolltide.co/",
     "Scrolltide",
     "条款禁止再分发。"),
    ("scrolltide-glacier", "Glacier", "Glacier 模板", "滚动动效",
     "Scrolltide 免费模板之一。仅链接。",
     ["模板", "滚动", "免费"],
     "scrolltide", "Scrolltide", "https://www.scrolltide.co/", "https://www.scrolltide.co/",
     "Scrolltide",
     "条款禁止再分发。"),
]

for (iid, name, name_zh, cat, desc, tags, sid, sname, surl, ourl, author, why) in LINK_ITEMS:
    add_item(
        id=iid, name=name, nameZh=name_zh, sourceId=sid, sourceName=sname,
        sourceUrl=surl, originalUrl=ourl, author=author, repo="",
        license="未确认可再分发", licenseUrl="", copyright="",
        category=cat, tags=tags + ["仅链接"],
        description=desc, kind="link", preview="none",
        files=[], notice="仅链接，未确认可再分发。本站不收录其源码、提示词或截图。",
    )

add_source(
    id="uibrik", name="uibrik", url="https://uibrik.com/", repo="",
    license="专有条款（免费可用，非标准开源许可）",
    licenseUrl="https://uibrik.com/terms", author="uibrik",
    included="仅 1 张链接卡片，无源码。",
    excluded="全部源码。条款写免费组件可用于个人和商业项目、安装后的源码可以改，但没有 MIT 等许可，也没有明确允许再分发到集合站。Pro 更是禁止再发布。部分免费组件在 21st.dev 另以 MIT 发布，本站未逐项核对，故一律不复制。",
    why="许可不清晰时只放链接，不复制代码。",
)
add_source(
    id="ditherui", name="DitherUI", url="https://ditherui.dev/", repo="",
    license="专有条款（免费可复制，无标准开源许可）",
    licenseUrl="https://ditherui.dev/terms", author="DitherUI / indieninad",
    included="3 张仅链接卡片（Prompt Input、Agent Thinking、Voice Orb），无源码。",
    excluded="全部源码。免费项没有找到 LICENSE。All-Access（50 美元买断）明确禁止把源码再发布为组件库；Agent Run 等是 Pro 组件，未收录。",
    why="许可不清晰或禁止再分发时，只放链接。",
)
add_source(
    id="motionprompts", name="motionprompts", url="https://motionprompts.dev/",
    repo="https://github.com/VanguardiaAI/motionprompts-mcp（MCP，PolyForm Noncommercial，不是组件本身）",
    license="专有条款；免费项「看，不要发布」",
    licenseUrl="https://motionprompts.dev/terms/", author="Vanguardia / Soluciones IA Procursa SAS",
    included="1 张仅链接卡片，无提示词、无源码。",
    excluded="全部提示词和源码。服务条款写明：免费项仅供评估，「看，不要发布」；付费许可禁止再分发提示词或源码，也禁止用来做竞争性的提示词或组件库。另禁止大规模自动抓取。",
    why="ToS 明确禁止再发布。",
)
add_source(
    id="scrolltide", name="Scrolltide", url="https://www.scrolltide.co/", repo="",
    license="专有条款（个人和客户站点可用，禁止再分发模板/提示词）",
    licenseUrl="https://www.scrolltide.co/terms", author="Scrolltide",
    included="3 张仅链接卡片（免费模板 Otis、SELENE、Glacier 的入口），无提示词、无源码。",
    excluded="全部模板和提示词。条款允许用来做自己的或客户的网站，但禁止把模板或提示词再分发为产品、主题或提示词包。复制超过一个免费模板需要账号，本站未登录抓取。大部分库是付费的。",
    why="ToS 禁止再分发源模板和提示词。",
)

print("link-only", len([i for i in items if i["kind"]=="link"]))
print("TOTAL", len(items))

# ========================================================================
# WRITE OUTPUT
# ========================================================================
# stable order: code first (by source then name), link last
source_order = ["cuekit","foundry44","radiant","voiceorbs","mekai","lucian","crucible","libraries","ndekoui",
                "uibrik","ditherui","motionprompts","scrolltide"]
def sort_key(it):
    so = source_order.index(it["sourceId"]) if it["sourceId"] in source_order else 99
    kind = 0 if it["kind"]=="code" else 1
    return (kind, so, it["name"])
items.sort(key=sort_key)

write(DATA / "items.json", json.dumps(items, ensure_ascii=False, indent=2))
write(DATA / "sources.json", json.dumps(sources, ensure_ascii=False, indent=2))

# category counts
from collections import Counter
cats = Counter(i["category"] for i in items if i["kind"]=="code")
kinds = Counter(i["kind"] for i in items)
print("categories", dict(cats))
print("kinds", dict(kinds))
print("json bytes", (DATA/"items.json").stat().st_size)

# THIRD_PARTY_NOTICES
lines = [
    "# Third-Party Notices",
    "",
    "本仓库（源集 / UI 集合站）的站点外壳是为这次收集任务新写的。",
    "以下第三方内容按其原许可证收录，版权归原作者。MIT 要求保留版权与许可声明，各条目的源码文件和 LICENSES/ 目录中都有。",
    "",
    "本站没有收录付费 / Pro 组件，也没有绕过登录或付费墙。许可不清晰或条款禁止再分发的，只保留链接卡片。",
    "",
]
for s in sources:
    lines += [
        f"## {s['name']}",
        f"- 站点：{s['url']}",
        f"- 仓库：{s.get('repo') or '（无公开仓库或未使用）'}",
        f"- 许可：{s['license']}",
        f"- 许可原文：{s.get('licenseUrl') or '—'}",
        f"- 作者：{s['author']}",
        f"- 收录：{s['included']}",
        f"- 未收录：{s['excluded']}",
        f"- 依据：{s['why']}",
        "",
    ]
lines += [
    "## 字体与其它",
    "站点界面使用通过 Google Fonts 加载的开源字体（如 Noto Sans SC、Newsreader），按其各自的 SIL OFL 或对应许可使用。",
    "Foundry44 免费组件的演示外壳是本站自写的，没有使用其受版权保护的演示页场景；组件引擎本身按 MIT 收录。",
    "",
]
write(ROOT / "THIRD_PARTY_NOTICES.md", "\n".join(lines))
print("done.")
