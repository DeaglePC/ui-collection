#!/usr/bin/env python3
"""Collect openly-licensed UI items into the 源集 data set.

Only copies items with a clear open license (MIT etc.) or, for unclear
licenses, emits link-only cards with no code.
"""
from __future__ import annotations

import json
import re
import shutil
import textwrap
from pathlib import Path

ROOT = Path("/workspace/ui-collection")
SRC = Path("/tmp/ui-src")
PUBLIC = ROOT / "public" / "previews"
DATA = ROOT / "src" / "data"
LICENSES = ROOT / "LICENSES"
VENDOR = ROOT / "src" / "vendor"
CODE_DIR = ROOT / "src" / "data" / "code"

for p in (PUBLIC, DATA, LICENSES, VENDOR, CODE_DIR):
    p.mkdir(parents=True, exist_ok=True)

items: list[dict] = []
sources: list[dict] = []

MIT_STD = """MIT License

{copyright}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
"""


def read(p: Path) -> str:
    return p.read_text(encoding="utf-8", errors="replace")


def write(p: Path, s: str) -> None:
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(s, encoding="utf-8")


def add_item(**kw):
    required = ["id", "name", "nameZh", "sourceId", "sourceName", "sourceUrl",
                "originalUrl", "author", "license", "category", "tags",
                "description", "kind"]
    for k in required:
        assert k in kw, k
    kw.setdefault("files", [])
    kw.setdefault("preview", "none")
    kw.setdefault("copyright", "")
    kw.setdefault("repo", "")
    kw.setdefault("licenseUrl", "")
    kw.setdefault("install", "")
    kw.setdefault("prompt", "")
    kw.setdefault("notice", "")
    kw.setdefault("iframeSrc", "")
    kw.setdefault("reactPreview", "")
    kw.setdefault("iframeHeight", 420)
    items.append(kw)


# ---------------------------------------------------------------------------
# LICENSES
# ---------------------------------------------------------------------------
shutil.copy(SRC / "cuekit" / "LICENSE", LICENSES / "Cue-Kit-MIT.txt")
shutil.copy(SRC / "radiant" / "LICENSE", LICENSES / "Radiant-MIT.txt")
shutil.copy(SRC / "voiceorbs" / "LICENSE", LICENSES / "VoiceOrbs-MIT.txt")
shutil.copy(SRC / "mekai" / "LICENSE", LICENSES / "Mekai-UI-MIT.txt")
shutil.copy(SRC / "lucian" / "LICENSE", LICENSES / "Lucian-UXUI-Prompt-MIT.txt")
shutil.copy(SRC / "libraries" / "LICENSE", LICENSES / "Libraries.dev-MIT.txt")
shutil.copy(SRC / "ndekoui" / "LICENCE.md", LICENSES / "ndekoui-MIT.txt")

# Foundry44 from their published license page
write(LICENSES / "Foundry44-MIT.txt", MIT_STD.format(copyright="Copyright (c) 2026 Foundry44"))
write(LICENSES / "Crucible-MIT.txt", MIT_STD.format(copyright="Copyright (c) 2026 Crucible (crucibleui.com)"))

# ---------------------------------------------------------------------------
# LUCIAN
# ---------------------------------------------------------------------------
LUCIAN_TOKENS = read(SRC / "lucian" / "src" / "tokens.css")
LUCIAN_PROMPT_PREFIX = """下面 UI 要素を我的项目里实现。先做这些：
1. 确认项目的框架（React、Next、Vue、Svelte、纯 HTML 等）、样式方式（CSS 模块、Tailwind、全局 CSS）和主题方式（data-theme、dark 类、CSS 变量）。
2. 先找到插入位置的文件和已有元素，并说明它在哪里被使用。
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
    ("005-paper-plane-send.html", "按钮", ["按钮", "发送", "聊天"], "纸飞机发送按钮：按下后纸飞机绕一圈飞出，按钮上出现进度环并变成勾，消息以气泡进入对话。"),
    ("046-command-palette.html", "导航", ["命令面板", "搜索", "快捷键"], "命令面板：打开后可搜索并执行命令，键盘上下选择，带分组和快捷键提示。"),
    ("055-music-player-card.html", "卡片", ["播放器", "唱片", "卡片"], "唱片播放器卡片：播放时唱片从封套滑出、唱臂落下，切歌时封套横移，进度条可拖动。"),
    ("060-image-compare-slider.html", "表单", ["对比", "滑块", "日夜"], "日夜对比滑块：拖动手柄比较同一场景的白天与夜晚，手柄有弹性跟随，靠近边缘时标签会淡出。"),
    ("080-orbit-spinner.html", "加载动画", ["加载", "轨道", "旋转"], "轨道旋转加载：几颗点沿轨道公转，节奏明确，适合作为等待指示。"),
    ("100-flip-clock-timer.html", "加载动画", ["计时", "翻页", "时钟"], "翻页计时器：数字像车站翻页钟一样对半翻动，可作为倒计时或时钟。"),
    ("116-bezier.html", "表单", ["贝塞尔", "缓动", "曲线"], "贝塞尔缓动曲线编辑器：可拖动控制点调整曲线，并看到对应的缓动预览。"),
    ("200-receipt-fold.html", "卡片", ["收据", "折叠", "打印"], "收据折叠：一张小票对折、展开，带打印质感，适合订单或支付完成状态。"),
    ("307-typewriter-rotating-words.html", "文字动效", ["打字机", "轮换", "标题"], "打字机轮换词：一句话里的关键词逐字打出再换成下一个，带闪烁光标。"),
    ("333-voice-record-button.html", "语音/光球", ["录音", "语音", "按钮"], "语音录音按钮：按下开始录音，波形随声音起伏，再次按下结束。"),
    ("378-particle-text.html", "文字动效", ["粒子", "文字", "消散"], "粒子文字：字形由粒子组成，悬停或触发时粒子散开再聚回。"),
]

def lucian_wrap(inner: str, title: str) -> str:
    # strip leading meta comments stay — they're useful; wrap as full document
    return f"""<!DOCTYPE html>
<html lang="zh-CN" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} · Lucian UX/UI Prompt</title>
<!-- Lucian UX/UI Prompt · MIT License (c) 2026 Seokwoooo · https://lucianlabs.dev/uxui-prompt/ -->
<style>
{LUCIAN_TOKENS}
html,body{{margin:0;min-height:100%;background:var(--ux-page);}}
body{{display:grid;place-items:center;padding:28px 16px;}}
</style>
</head>
<body class="ux">
{inner}
</body>
</html>
"""

def lucian_meta(raw: str) -> dict:
    m = re.search(r'<!-- @meta (\{.*?\}) -->', raw, re.S)
    if not m:
        return {}
    try:
        return json.loads(m.group(1))
    except json.JSONDecodeError:
        return {}

for fname, cat, tags, desc in LUCIAN_PICKS:
    path = SRC / "lucian" / "src" / "elements" / fname
    raw = read(path)
    meta = lucian_meta(raw)
    num = fname.split("-")[0]
    slug = fname.replace(".html", "")
    title_zh = meta.get("title") or slug
    # Use our Chinese desc; keep original title in name if Korean
    name_en = slug[4:].replace("-", " ").title()
    en = re.search(r'<!-- @en (\{.*?\}) -->', raw, re.S)
    if en:
        try:
            # @en may have trailing map - it's a JS-ish object, not always JSON
            pass
        except Exception:
            pass
    # English title from @en if we can grab it
    en_title = re.search(r'<!-- @en \{"title":"([^"]+)"', raw)
    if en_title:
        name_en = en_title.group(1)
    html = lucian_wrap(raw, name_en)
    iframe = f"lucian-{num}.html"
    write(PUBLIC / iframe, html)
    # license comment + original fragment as code
    code = (
        f"<!-- Lucian UX/UI Prompt #{num} · MIT License (c) 2026 Seokwoooo · "
        f"https://lucianlabs.dev/en/uxui-prompt/#{num} -->\n"
        + raw
    )
    prompt = LUCIAN_PROMPT_PREFIX + code
    add_item(
        id=f"lucian-{num}",
        name=name_en,
        nameZh=desc.split("：")[0] if "：" in desc else title_zh,
        sourceId="lucian",
        sourceName="Lucian UX/UI Prompt",
        sourceUrl="https://lucianlabs.dev/en/uxui-prompt/",
        originalUrl=f"https://lucianlabs.dev/en/uxui-prompt/#{num}",
        author="Seokwoooo",
        repo="https://github.com/Seokwoooo/lucian-uxui-prompt",
        license="MIT",
        licenseUrl="https://github.com/Seokwoooo/lucian-uxui-prompt/blob/main/LICENSE",
        copyright="Copyright (c) 2026 Seokwoooo",
        category=cat,
        tags=tags + ["Lucian", "HTML"],
        description=desc,
        kind="code",
        preview="iframe",
        iframeSrc=f"./previews/{iframe}",
        iframeHeight=460 if cat != "导航" else 520,
        files=[{"path": fname, "language": "html", "content": code}],
        prompt=prompt,
        install="",
        notice="原仓库共 400 个 MIT 元素。本站按质量精选，并保留许可证注释。",
    )

sources.append({
    "id": "lucian",
    "name": "Lucian UX/UI Prompt",
    "url": "https://lucianlabs.dev/en/uxui-prompt/",
    "repo": "https://github.com/Seokwoooo/lucian-uxui-prompt",
    "license": "MIT",
    "licenseUrl": "https://github.com/Seokwoooo/lucian-uxui-prompt/blob/main/LICENSE",
    "author": "Seokwoooo",
    "included": "精选 11 个可交互 HTML 元素（含完整源码、提示词模板和实时预览）。原仓库共 400 个，全部 MIT。",
    "excluded": "其余 389 个未整库搬入，避免堆砌；均可在源站和 GitHub 获取。",
    "why": "仓库 LICENSE 为 MIT，复制的代码顶部保留「Lucian UX/UI Prompt #NNN · MIT License (c) 2026 Seokwoooo」注释。",
})

print(f"Lucian: {len([i for i in items if i['sourceId']=='lucian'])}")

# continue in same file... we'll exec the rest
print("collector base ok, lucian done")
write(DATA / "_partial.json", json.dumps({"n": len(items)}, ensure_ascii=False))
