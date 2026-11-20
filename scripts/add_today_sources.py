# -*- coding: utf-8 -*-
"""Add CYBR//UI, Thinking Orbs, and the dots-swarm MIT core to the catalog."""
from __future__ import annotations

import json
import shutil
from pathlib import Path

ROOT = Path("/agent/repos/ui-collection")
CYBR = Path("/tmp/ui-src/cybr-ui")
ORBS = Path("/tmp/ui-src/thinking-orbs/apps/web/registry/orb")
DOTS = Path("/tmp/ui-src/dots/package")
ITEMS = ROOT / "src/data/items.json"
SOURCES = ROOT / "src/data/sources.json"
NOTICES = ROOT / "THIRD_PARTY_NOTICES.md"

CYBR_AUTHOR = "JLTDigital and Jonathan Taft"
CYBR_COPY = "Copyright (c) 2026 JLTDigital and Jonathan Taft"
CYBR_SITE = "https://cybr-ui.com"
CYBR_REPO = "https://github.com/JLTDigital/cybr-ui"
CYBR_LICENSE = "https://github.com/JLTDigital/cybr-ui/blob/main/LICENSE"

ORBS_COPY = "Copyright (c) 2026 Yogesh"
ORBS_SITE = "https://www.thinkingorbs.com"
ORBS_REPO = "https://github.com/yogesharc/thinking-orbs"
ORBS_LICENSE = "https://github.com/yogesharc/thinking-orbs/blob/main/LICENSE"

DOTS_COPY = "Copyright (c) 2026 hamza-al"
DOTS_SITE = "https://dotsui.dev"
DOTS_REPO = "https://github.com/hamza-al/dots-next"
DOTS_LICENSE = "https://cdn.jsdelivr.net/npm/dots-swarm@0.1.0-alpha.4/LICENSE"
DOTS_NPM = "https://www.npmjs.com/package/dots-swarm"


def header(title: str, page: str) -> str:
    return (
        "/**\n"
        f" * CYBR//UI · {title}\n"
        f" * MIT License · {CYBR_COPY}\n"
        f" * {page}\n"
        f" * {CYBR_REPO}\n"
        " */\n"
    )


def item(
    *,
    item_id: str,
    name: str,
    name_zh: str,
    source_id: str,
    source_name: str,
    source_url: str,
    original_url: str,
    author: str,
    repo: str,
    license_url: str,
    copyright_: str,
    category: str,
    tags: list[str],
    description: str,
    files: list[dict],
    install: str,
    notice: str,
    preview: str = "code",
    react_preview: str = "",
    iframe_height: int = 560,
    heavy: bool = False,
) -> dict:
    row = {
        "id": item_id,
        "name": name,
        "nameZh": name_zh,
        "sourceId": source_id,
        "sourceName": source_name,
        "sourceUrl": source_url,
        "originalUrl": original_url,
        "author": author,
        "repo": repo,
        "license": "MIT",
        "licenseUrl": license_url,
        "copyright": copyright_,
        "category": category,
        "tags": tags,
        "description": description,
        "kind": "code",
        "preview": preview,
        "iframeSrc": "",
        "reactPreview": react_preview,
        "iframeHeight": iframe_height,
        "files": files,
        "prompt": "",
        "install": install,
        "notice": notice,
    }
    if heavy:
        row["heavy"] = True
    return row


def code_file(path: str, content: str, language: str) -> dict:
    return {"path": path, "language": language, "content": content}


CYBR_META = {
    "hard-offset-button": ("硬偏移按钮", "按钮"),
    "glitch-button": ("故障按钮", "按钮"),
    "hud-bracket-button": ("HUD 括号按钮", "按钮"),
    "terminal-button": ("终端按钮", "按钮"),
    "hazard-button": ("警示按钮", "按钮"),
    "decrypt-text": ("解密文字", "文字动效"),
    "typewriter-terminal": ("终端打字机", "文字动效"),
    "glitch-heading": ("故障标题", "文字动效"),
    "telemetry-counter": ("遥测计数", "文字动效"),
    "stepped-wipe-reveal": ("阶梯擦除显现", "文字动效"),
    "bento-grid": ("粗野便当网格", "卡片"),
    "spec-card": ("规格卡", "卡片"),
    "access-card": ("通行证件卡", "卡片"),
    "hardware-panel": ("硬件面板", "卡片"),
    "hud-image-frame": ("HUD 图像框", "卡片"),
    "neon-edge-card": ("霓虹边卡片", "卡片"),
    "classified-card": ("机密卡片", "卡片"),
    "stat-band": ("数据条带", "卡片"),
    "hud-tooltip": ("HUD 提示", "导航"),
    "classified-accordion": ("机密问答手风琴", "导航"),
    "ticker-marquee": ("行情跑马灯", "滚动动效"),
    "warning-tape": ("警示胶带", "滚动动效"),
    "logo-wall": ("标志墙", "卡片"),
    "blueprint-grid": ("蓝图网格", "背景/Shader"),
    "perspective-grid": ("透视网格", "背景/Shader"),
    "beton-brut": ("清水混凝土", "背景/Shader"),
    "crt-overlay": ("CRT 叠加", "背景/Shader"),
    "data-rain": ("数据雨", "背景/Shader"),
    "exposed-wiring": ("外露走线", "背景/Shader"),
    "status-bar": ("状态栏", "导航"),
    "terminal-navbar": ("终端导航栏", "导航"),
    "mega-menu": ("粗野巨型菜单", "导航"),
    "monolith-footer": ("巨石页脚", "导航"),
    "boot-sequence-loader": ("启动序列加载", "加载动画"),
    "segmented-progress": ("分段进度", "加载动画"),
    "data-readout-carousel": ("数据读数轮播", "卡片"),
    "command-palette": ("命令面板", "导航"),
    "pixelated-image-trail": ("像素图像拖尾", "滚动动效"),
}


def cybr_items() -> list[dict]:
    registry = json.loads((CYBR / "registry.json").read_text())
    by_name = {row["name"]: row for row in registry["items"]}
    rows = []
    for name, (name_zh, category) in CYBR_META.items():
        info = by_name[name]
        source = (CYBR / "registry/ui" / f"{name}.tsx").read_text()
        page = f"{CYBR_SITE}/docs/components/{name}"
        content = header(info["title"], page) + source
        deps = info.get("dependencies") or []
        dep_note = f" 另外依赖 {', '.join(deps)}。" if deps else ""
        rows.append(item(
            item_id=f"cybr-{name}",
            name=info["title"],
            name_zh=name_zh,
            source_id="cybr",
            source_name="CYBR//UI",
            source_url=CYBR_SITE,
            original_url=page,
            author=CYBR_AUTHOR,
            repo=CYBR_REPO,
            license_url=CYBR_LICENSE,
            copyright_=CYBR_COPY,
            category=category,
            tags=["CYBR//UI", "MIT", name],
            description=f"CYBR//UI「{info['title']}」。{info['description']}",
            files=[code_file(f"registry/ui/{name}.tsx", content, "tsx")],
            install=f"npx shadcn@latest add @cybr/{name}",
            notice=(
                f"MIT，{CYBR_COPY}。作者 {CYBR_AUTHOR}。"
                f"原页 {page}。仓库 {CYBR_REPO}。"
                "实时预览会载入 @cybr/tokens 与 @cybr/effects，避免缺少设计令牌时画面空白。"
                + dep_note
            ),
            iframe_height=720 if name in {"mega-menu", "monolith-footer", "terminal-navbar", "pixelated-image-trail"} else 560,
        ))

    extras = [
        ("tokens", "设计令牌", "卡片", "styles/tokens.css", "styles/cybr-tokens.css", "css",
         f"{CYBR_SITE}/r/tokens.json", "npx shadcn@latest add @cybr/tokens"),
        ("effects", "效果样式", "背景/Shader", "styles/effects.css", "styles/cybr-effects.css", "css",
         f"{CYBR_SITE}/r/effects.json", "npx shadcn@latest add @cybr/effects"),
        ("theme-acid-terminal", "Acid Terminal 主题", "背景/Shader", "styles/themes/acid-terminal.css",
         "styles/cybr-theme-acid-terminal.css", "css", f"{CYBR_SITE}/r/theme-acid-terminal.json",
         "npx shadcn@latest add @cybr/theme-acid-terminal"),
        ("theme-ice-neon", "Ice Neon 主题", "背景/Shader", "styles/themes/ice-neon.css",
         "styles/cybr-theme-ice-neon.css", "css", f"{CYBR_SITE}/r/theme-ice-neon.json",
         "npx shadcn@latest add @cybr/theme-ice-neon"),
        ("use-reduced-motion", "减弱动效钩子", "加载动画", "lib/use-reduced-motion.ts",
         "lib/use-reduced-motion.ts", "typescript", f"{CYBR_SITE}/r/use-reduced-motion.json",
         "npx shadcn@latest add @cybr/use-reduced-motion"),
    ]
    for name, name_zh, category, src_rel, out_path, language, page, install in extras:
        info = by_name[name]
        body = (CYBR / src_rel).read_text()
        if language == "css":
            content = f"/* CYBR//UI · {info['title']} · MIT · {CYBR_COPY} · {page} · {CYBR_REPO} */\n" + body
        else:
            content = header(info["title"], page) + body
        rows.append(item(
            item_id=f"cybr-{name}",
            name=info["title"],
            name_zh=name_zh,
            source_id="cybr",
            source_name="CYBR//UI",
            source_url=CYBR_SITE,
            original_url=page,
            author=CYBR_AUTHOR,
            repo=CYBR_REPO,
            license_url=CYBR_LICENSE,
            copyright_=CYBR_COPY,
            category=category,
            tags=["CYBR//UI", "MIT", name],
            description=f"CYBR//UI「{info['title']}」。{info['description']}",
            files=[code_file(out_path, content, language)],
            install=install,
            notice=(
                f"MIT，{CYBR_COPY}。作者 {CYBR_AUTHOR}。原页 {page}。仓库 {CYBR_REPO}。"
                + (" 组件预览依赖这份样式；没有它时按钮和面板会失去颜色与描边。" if name in {"tokens", "effects"} else "")
            ),
            preview="code",
            iframe_height=420,
        ))
    return rows


def orb_banner(title: str, page: str) -> str:
    return (
        "/**\n"
        f" * Thinking Orbs · {title}\n"
        f" * MIT License · {ORBS_COPY}\n"
        f" * {page}\n"
        f" * {ORBS_REPO}\n"
        " */\n"
    )


def orb_items() -> list[dict]:
    files = {
        "orb.tsx": (ORBS / "orb.tsx").read_text(),
        "orb-core.ts": (ORBS / "orb-core.ts").read_text(),
        "shapes.ts": (ORBS / "shapes.ts").read_text(),
        "renders.ts": (ORBS / "renders.ts").read_text(),
    }
    vendor = ROOT / "src/vendor/yogesh-orbs"
    if vendor.exists():
        shutil.rmtree(vendor)
    vendor.mkdir(parents=True)
    page = ORBS_SITE
    for name, body in files.items():
        titled = {"orb.tsx": "Orb", "orb-core.ts": "orb core", "shapes.ts": "shapes", "renders.ts": "renders"}[name]
        (vendor / name).write_text(orb_banner(titled, page) + body)

    notice = (
        f"MIT，{ORBS_COPY}。作者 Yogesh。原页 {page}。仓库 {ORBS_REPO}。"
        "源码来自仓库 apps/web/registry/orb，未改实现。形状与绘制方式在同仓库的 shapes.ts / renders.ts。"
    )
    base = dict(
        source_id="thinkingorbs",
        source_name="Thinking Orbs",
        source_url=ORBS_SITE,
        author="Yogesh",
        repo=ORBS_REPO,
        license_url=ORBS_LICENSE,
        copyright_=ORBS_COPY,
        category="AI 界面组件",
    )
    return [
        item(
            **base,
            item_id="thinkingorbs-orb",
            name="Orb",
            name_zh="智能体状态光球",
            original_url=ORBS_SITE,
            tags=["Thinking Orbs", "MIT", "orb"],
            description="Yogesh 的 MIT 光球。9 种智能体状态和各自的变体，用 SVG 当前文字色绘制，不依赖额外样式。",
            files=[
                code_file("orb.tsx", orb_banner("Orb", page) + files["orb.tsx"], "tsx"),
                code_file("orb-core.ts", orb_banner("orb core", page) + files["orb-core.ts"], "typescript"),
            ],
            install="npm install @yogesharc/thinking-orbs",
            notice=notice,
            preview="react",
            react_preview="thinkingorbs-orb",
            iframe_height=420,
        ),
        item(
            **base,
            item_id="thinkingorbs-shapes",
            name="Orb shapes",
            name_zh="光球形状",
            original_url=f"{ORBS_SITE}/playground",
            tags=["Thinking Orbs", "MIT", "shapes"],
            description="同一 MIT 仓库里的额外形状：cube、octahedron、tetrahedron、torus。配合 Orb 的 shape 属性使用。",
            files=[code_file("shapes.ts", orb_banner("shapes", f"{ORBS_SITE}/playground") + files["shapes.ts"], "typescript")],
            install="npm install @yogesharc/thinking-orbs",
            notice=notice + " 从 @yogesharc/thinking-orbs/shapes 引入，或复制 shapes.ts。",
            preview="react",
            react_preview="thinkingorbs-shapes",
            iframe_height=420,
        ),
        item(
            **base,
            item_id="thinkingorbs-renders",
            name="Orb renders",
            name_zh="光球绘制",
            original_url=f"{ORBS_SITE}/playground",
            tags=["Thinking Orbs", "MIT", "renders"],
            description="同一 MIT 仓库里的额外绘制：dashes、squares、crosses、mesh、halftone、lines、verticalLines。",
            files=[code_file("renders.ts", orb_banner("renders", f"{ORBS_SITE}/playground") + files["renders.ts"], "typescript")],
            install="npm install @yogesharc/thinking-orbs",
            notice=notice + " 从 @yogesharc/thinking-orbs/renders 引入，或复制 renders.ts。",
            preview="react",
            react_preview="thinkingorbs-renders",
            iframe_height=420,
        ),
    ]


def dots_items() -> list[dict]:
    vendor = ROOT / "src/vendor/dots-swarm"
    if vendor.exists():
        shutil.rmtree(vendor)
    shutil.copytree(DOTS, vendor, ignore=shutil.ignore_patterns("*.tgz"))
    package = json.loads((vendor / "package.json").read_text())
    package.pop("scripts", None)
    package.pop("devDependencies", None)
    (vendor / "package.json").write_text(json.dumps(package, indent=2) + "\n")
    (ROOT / "LICENSES/dots-swarm-MIT.txt").write_text((DOTS / "LICENSE").read_text())

    notice = (
        f"MIT，{DOTS_COPY}。作者 hamza-al。原页 {DOTS_SITE}/docs。npm 包 dots-swarm@0.1.0-alpha.4。"
        f"公开仓库 {DOTS_REPO} 目前返回 404，源码取自已发布的 MIT 包（本仓库 src/vendor/dots-swarm），不是未确认许可。"
        "没有收录 @dots-swarm/pro、Pro 形状或 Studio。"
    )
    usage_swarm = """// Dots · DotSwarm
// MIT License · Copyright (c) 2026 hamza-al
// https://dotsui.dev/docs
// npm: dots-swarm@0.1.0-alpha.4
// 公开仓库 https://github.com/hamza-al/dots-next 当前不可访问。下面是该 MIT 包 README 中的免费核心用法。

import { useState } from "react";
import { DotSwarm, type Shape } from "dots-swarm";

export function Example() {
  const [shape, setShape] = useState<Shape>("cloud");
  return (
    <div style={{ width: 400, height: 400 }}>
      <DotSwarm shape={shape} count={1000} color="#d9f99d" />
      <button type="button" onClick={() => setShape("heart")}>A little love</button>
    </div>
  );
}
"""
    usage_dot = """// Dots · Dot
// MIT License · Copyright (c) 2026 hamza-al
// https://dotsui.dev/docs
// npm: dots-swarm@0.1.0-alpha.4（入口 dots-swarm/dot，也从包根导出）

import { Dot, type DotKeyframe } from "dots-swarm/dot";

const entrance: DotKeyframe[] = [
  { y: 0, duration: 0.8, easing: "ease-in" },
  { size: 120, duration: 0.9 },
  { color: "#c3adff", duration: 0.6 },
];

export function Example() {
  return (
    <Dot initial={{ size: 18, y: -160, color: "#d5f999" }} sequence={entrance}>
      <span>Ada</span>
    </Dot>
  );
}
"""
    usage_nav = """// Dots · NavigationSwarm
// MIT License · Copyright (c) 2026 hamza-al
// https://dotsui.dev/docs
// npm: dots-swarm@0.1.0-alpha.4

import { NavigationSwarm } from "dots-swarm";

export function Example() {
  return (
    <div style={{ width: 400, height: 400 }}>
      <NavigationSwarm
        instruction={{ maneuver: "turn-left", distanceMeters: 180, roadName: "Market St" }}
        color="#9ad7ff"
      />
    </div>
  );
}
"""
    base = dict(
        source_id="dots",
        source_name="Dots",
        source_url=DOTS_SITE,
        author="hamza-al",
        repo=DOTS_REPO,
        license_url=DOTS_LICENSE,
        copyright_=DOTS_COPY,
    )
    return [
        item(
            **base,
            item_id="dots-swarm",
            name="DotSwarm",
            name_zh="粒子形变",
            original_url=f"{DOTS_SITE}/docs",
            category="背景/Shader",
            tags=["Dots", "MIT", "dots-swarm", "免费核心"],
            description="dots-swarm 免费 MIT 核心里的粒子形变。预览在 cloud、heart、calendar、lock 等包内形状之间切换。Pro 形状不在这个包里。",
            files=[code_file("dotswarm-usage.tsx", usage_swarm, "tsx")],
            install="npm install dots-swarm",
            notice=notice,
            preview="react",
            react_preview="dots-swarm",
            iframe_height=420,
            heavy=True,
        ),
        item(
            **base,
            item_id="dots-dot",
            name="Dot",
            name_zh="单点运动",
            original_url=f"{DOTS_SITE}/docs",
            category="加载动画",
            tags=["Dots", "MIT", "dots-swarm", "免费核心"],
            description="同一 MIT 包里的单点运动。不需要画布样式，按关键帧改变位置、大小和颜色。",
            files=[code_file("dot-usage.tsx", usage_dot, "tsx")],
            install="npm install dots-swarm",
            notice=notice,
            preview="react",
            react_preview="dots-dot",
            iframe_height=360,
        ),
        item(
            **base,
            item_id="dots-navigation",
            name="NavigationSwarm",
            name_zh="导航粒子",
            original_url=f"{DOTS_SITE}/docs",
            category="导航",
            tags=["Dots", "MIT", "dots-swarm", "免费核心"],
            description="同一 MIT 包导出的导航粒子。转向、直行、环岛和到达都用包内免费形状，不包含 Pro。",
            files=[code_file("navigation-usage.tsx", usage_nav, "tsx")],
            install="npm install dots-swarm",
            notice=notice,
            preview="react",
            react_preview="dots-navigation",
            iframe_height=420,
            heavy=True,
        ),
    ]


def write_mounts() -> None:
    out = ROOT / "cybr-src/mounts"
    out.mkdir(parents=True, exist_ok=True)
    button = '''import {{ {comp} }} from "../components/{slug}";
export default function Mount() {{
  return (
    <div className="cybr-stage">
      <div className="flex flex-wrap items-center justify-center gap-12">
        <{comp}>{label}</{comp}>
        <{comp} disabled>Offline</{comp}>
      </div>
    </div>
  );
}}
'''
    buttons = {
        "hard-offset-button": ("HardOffsetButton", "Deploy now"),
        "glitch-button": ("GlitchButton", "Jack in"),
        "hud-bracket-button": ("HudBracketButton", "Target"),
        "terminal-button": ("TerminalButton", "execute"),
        "hazard-button": ("HazardButton", "Purge cache"),
    }
    for slug, (comp, label) in buttons.items():
        (out / f"{slug}.tsx").write_text(button.format(comp=comp, slug=slug, label=label))

    files = {
        "decrypt-text.tsx": '''import { DecryptText } from "../components/decrypt-text";
import { Replay } from "../preview";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <Replay>
        <p className="text-center font-display text-[4rem] leading-none text-ink">
          <DecryptText text="ACCESS GRANTED" />
        </p>
      </Replay>
    </div>
  );
}
''',
        "typewriter-terminal.tsx": '''import { TypewriterTerminal } from "../components/typewriter-terminal";
import { Replay } from "../preview";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <Replay>
        <TypewriterTerminal
          className="mx-auto w-full max-w-xl"
          lines={[
            { text: "boot --style=brutal", prompt: true },
            { text: "mounting /dev/concrete ...... ok" },
            { text: "loading neon.drv ............ ok" },
            { text: "_ready", prompt: true },
          ]}
        />
      </Replay>
    </div>
  );
}
''',
        "glitch-heading.tsx": '''import { GlitchHeading } from "../components/glitch-heading";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <GlitchHeading className="text-[3.125rem]">Signal lost</GlitchHeading>
    </div>
  );
}
''',
        "telemetry-counter.tsx": '''import { TelemetryCounter } from "../components/telemetry-counter";
import { Replay } from "../preview";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <Replay>
        <dl className="mx-auto flex w-full max-w-sm flex-col">
          <div className="flex items-baseline justify-between border-b border-line py-1.5">
            <dt className="text-[0.6875rem] tracking-label text-label">REQ / S</dt>
            <dd><TelemetryCounter className="text-[1.875rem]" value={1284} /></dd>
          </div>
          <div className="flex items-baseline justify-between border-b border-line py-1.5">
            <dt className="text-[0.6875rem] tracking-label text-label">LATENCY MS</dt>
            <dd><TelemetryCounter className="text-[1.875rem]" value={12.4} decimals={1} /></dd>
          </div>
          <div className="flex items-baseline justify-between py-1.5">
            <dt className="text-[0.6875rem] tracking-label text-label">NODES ONLINE</dt>
            <dd><TelemetryCounter className="text-[1.875rem]" value={64} minDigits={3} /></dd>
          </div>
        </dl>
      </Replay>
    </div>
  );
}
''',
        "stepped-wipe-reveal.tsx": '''import { SteppedWipeReveal } from "../components/stepped-wipe-reveal";
import { Replay } from "../preview";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <Replay>
        <p className="text-center font-display text-[2.75rem] leading-[0.92] uppercase text-ink">
          <SteppedWipeReveal>Raw.</SteppedWipeReveal>
          <SteppedWipeReveal delay={300}>Loud.</SteppedWipeReveal>
          <SteppedWipeReveal delay={600} className="text-signal">Lit.</SteppedWipeReveal>
        </p>
      </Replay>
    </div>
  );
}
''',
        "bento-grid.tsx": '''import { BentoGrid, BentoGridItem } from "../components/bento-grid";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <BentoGrid className="w-full">
        <BentoGridItem span={2}>
          <span className="text-caption tracking-label text-label"><span className="text-signal">01</span> / SPAN 2</span>
          <p className="font-display text-3xl uppercase text-ink">The grid is the border</p>
        </BentoGridItem>
        <BentoGridItem>
          <span className="text-caption tracking-label text-label"><span className="text-signal">02</span> / SPAN 1</span>
          <p className="text-sm text-ink">2px gaps over a line-coloured parent.</p>
        </BentoGridItem>
        <BentoGridItem>
          <span className="text-caption tracking-label text-label"><span className="text-signal">03</span> / SPAN 1</span>
          <p className="text-sm text-ink">Nothing floats.</p>
        </BentoGridItem>
      </BentoGrid>
    </div>
  );
}
''',
        "spec-card.tsx": '''import { SpecCard, SpecCardAction } from "../components/spec-card";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <SpecCard
        className="w-full max-w-2xl"
        meta="UNIT / D-01 · REV 2.6"
        title="Core module"
        titleAs="h3"
        action={<SpecCardAction href="#spec">VIEW SPEC →</SpecCardAction>}
        specs={[
          { label: "STATUS", value: "ONLINE", accent: true },
          { label: "CLASS", value: "MIT" },
          { label: "SECTOR", value: "UI" },
          { label: "BUILD", value: "0.1" },
        ]}
      >
        Short product description, two lines at most.
      </SpecCard>
    </div>
  );
}
''',
        "access-card.tsx": '''import { AccessCard } from "../components/access-card";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <AccessCard className="w-64" level="03" name="[Operator name]" idLine="ID 0x4F2A-91 · EXP 2099" />
    </div>
  );
}
''',
        "hardware-panel.tsx": '''import { HardwarePanel, HardwarePanelStatus } from "../components/hardware-panel";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <HardwarePanel className="w-full max-w-xs" title="PWR / BUS 04">
        <HardwarePanelStatus label="MAIN" on />
        <HardwarePanelStatus label="AUX" on={false} />
        <HardwarePanelStatus label="UPLINK" on />
      </HardwarePanel>
    </div>
  );
}
''',
        "hud-image-frame.tsx": '''import { HudImageFrame } from "../components/hud-image-frame";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <HudImageFrame className="min-h-72 w-full" index="01" caption="[IMAGE] · SCAN 38%" />
    </div>
  );
}
''',
        "neon-edge-card.tsx": '''import { NeonEdgeCard } from "../components/neon-edge-card";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <NeonEdgeCard className="w-full max-w-md" href="#open" eyebrow="HOVER OR TAB TO ME" title="The only glow allowed" cta="OPEN →" />
    </div>
  );
}
''',
        "classified-card.tsx": '''import { ClassifiedCard, Redacted } from "../components/classified-card";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <ClassifiedCard className="w-full max-w-sm" hint="CLICK BAR TO DECLASSIFY">
        Subject entered <Redacted>sector nine at</Redacted> 0300 hrs and <Redacted>disabled the</Redacted> relay.
      </ClassifiedCard>
    </div>
  );
}
''',
        "stat-band.tsx": '''import { StatBand } from "../components/stat-band";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <StatBand
        className="w-full"
        stats={[
          { value: "038", label: "COMPONENTS" },
          { value: "MIT", label: "LICENSE" },
          { value: "0PX", label: "BORDER RADIUS" },
          { value: "02", label: "THEMES" },
        ]}
      />
    </div>
  );
}
''',
        "hud-tooltip.tsx": '''import { HudTooltip } from "../components/hud-tooltip";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <div className="flex w-full max-w-lg flex-wrap items-start justify-between gap-8">
        <HudTooltip content={<>STATUS: ONLINE<br />LOAD: 42%</>}>
          <button type="button" className="min-h-11 cursor-help border-2 border-ink bg-ground-deep px-4 font-mono text-sm font-bold tracking-label text-ink">NODE 07</button>
        </HudTooltip>
        <HudTooltip variant="lock" side="right" eyebrow="TARGET LOCKED" title="NODE 12" content="Bracket corners and a leader line.">
          <button type="button" className="min-h-11 cursor-help border-2 border-ink bg-ground-deep px-4 font-mono text-sm font-bold tracking-label text-ink">NODE 12</button>
        </HudTooltip>
      </div>
    </div>
  );
}
''',
        "classified-accordion.tsx": '''import { ClassifiedAccordion, ClassifiedAccordionItem } from "../components/classified-accordion";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <ClassifiedAccordion className="w-full max-w-xl bg-bg" defaultValue={["f-01"]}>
        <ClassifiedAccordionItem value="f-01" id="F-01" question="HOW DO I INSTALL ONE?">
          Run npx shadcn add @cybr/name. The source lands in your project.
        </ClassifiedAccordionItem>
        <ClassifiedAccordionItem value="f-02" id="F-02" question="WHAT DOES IT NEED?">
          Tailwind CSS, the CYBR tokens, and the effects stylesheet.
        </ClassifiedAccordionItem>
        <ClassifiedAccordionItem value="f-03" id="F-03" question="REDUCED MOTION?">
          Every animation falls back when prefers-reduced-motion is set.
        </ClassifiedAccordionItem>
      </ClassifiedAccordion>
    </div>
  );
}
''',
        "ticker-marquee.tsx": '''import { TickerMarquee } from "../components/ticker-marquee";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <TickerMarquee
        className="w-full"
        aria-label="Ticker"
        items={["01 / TICKER MARQUEE", "// REV 0.1 LIVE", "// SYS:OK", "// MIT LICENSE"]}
      />
    </div>
  );
}
''',
        "warning-tape.tsx": '''import { WarningTape } from "../components/warning-tape";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill bg-ground-deep">
      <div className="w-full bg-ground-deep">
        <WarningTape
          aria-label="Site notices"
          items={["CAUTION // UNDER CONSTRUCTION", "RESTRICTED SECTOR", "CAUTION // UNDER CONSTRUCTION", "RESTRICTED SECTOR"]}
        />
        <WarningTape variant="ink" tilt={1.5} className="pt-2" />
      </div>
    </div>
  );
}
''',
        "logo-wall.tsx": '''import { LogoWall, LogoWallItem } from "../components/logo-wall";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <LogoWall className="w-full" label="TRUSTED BY">
        <LogoWallItem href="#">[LOGO 01]</LogoWallItem>
        <LogoWallItem href="#">[LOGO 02]</LogoWallItem>
        <LogoWallItem href="#">[LOGO 03]</LogoWallItem>
        <LogoWallItem href="#">[LOGO 04]</LogoWallItem>
        <LogoWallItem href="#">[LOGO 05]</LogoWallItem>
        <LogoWallItem href="#">[LOGO 06]</LogoWallItem>
      </LogoWall>
    </div>
  );
}
''',
        "blueprint-grid.tsx": '''import { BlueprintGrid } from "../components/blueprint-grid";
export default function Mount() {
  return (
    <div className="cybr-stage-fill cybr-stage">
      <BlueprintGrid className="min-h-80 w-full font-mono">
        <div className="absolute top-4 left-5 border border-line bg-ground-deep px-2.5 py-1.5 text-xs tracking-label text-label">
          <span className="text-signal">01</span> / BLUEPRINT GRID
        </div>
      </BlueprintGrid>
    </div>
  );
}
''',
        "perspective-grid.tsx": '''import { PerspectiveGrid } from "../components/perspective-grid";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <PerspectiveGrid className="min-h-80 w-full font-mono">
        <div className="absolute top-4 left-5 border border-line bg-ground-deep px-2.5 py-1.5 text-xs tracking-label text-label">
          <span className="text-signal">02</span> / PERSPECTIVE GRID
        </div>
      </PerspectiveGrid>
    </div>
  );
}
''',
        "beton-brut.tsx": '''import { BetonBrut } from "../components/beton-brut";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <BetonBrut className="min-h-80 w-full font-mono">
        <div className="absolute top-4 left-5 border border-line bg-ground-deep px-2.5 py-1.5 text-xs tracking-label text-label">
          <span className="text-signal">03</span> / BÉTON BRUT
        </div>
      </BetonBrut>
    </div>
  );
}
''',
        "crt-overlay.tsx": '''import { CrtOverlay } from "../components/crt-overlay";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <CrtOverlay className="flex min-h-80 w-full items-center justify-center font-mono">
        <div className="text-center">
          <p className="font-display text-5xl text-signal">NO CARRIER</p>
          <p className="mt-3 text-xs tracking-[0.3em] text-label">CH 03 · RETRY IN 05</p>
        </div>
      </CrtOverlay>
    </div>
  );
}
''',
        "data-rain.tsx": '''import { DataRain } from "../components/data-rain";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <DataRain className="min-h-80 w-full font-mono">
        <div className="absolute bottom-4 left-5 bg-ground-deep px-2 py-1 text-xs tracking-label text-label">
          <span className="text-signal">05</span> / DATA RAIN
        </div>
      </DataRain>
    </div>
  );
}
''',
        "exposed-wiring.tsx": '''import { ExposedWiring } from "../components/exposed-wiring";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <ExposedWiring className="min-h-80 w-full font-mono">
        <div className="absolute top-4 left-5 border border-line bg-ground-deep px-2.5 py-1.5 text-xs tracking-label text-label">
          <span className="text-signal">06</span> / EXPOSED WIRING
        </div>
      </ExposedWiring>
    </div>
  );
}
''',
        "status-bar.tsx": '''import { StatusBar } from "../components/status-bar";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <StatusBar className="w-full" items={["SYS:OK", "REV 0.1", "NODE / EU-NE"]} signal={3} />
    </div>
  );
}
''',
        "terminal-navbar.tsx": '''import { TerminalNavbar, TerminalNavbarCta } from "../components/terminal-navbar";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <TerminalNavbar
        aria-label="Demo"
        className="w-full"
        brandHref="#"
        links={[
          { label: "INDEX", href: "#index" },
          { label: "COMPONENTS", href: "#components", current: true },
          { label: "DOCS", href: "#docs" },
          { label: "GITHUB", href: "#github" },
        ]}
        actions={<TerminalNavbarCta href="#install">INSTALL →</TerminalNavbarCta>}
      />
    </div>
  );
}
''',
        "mega-menu.tsx": '''import { MegaMenu } from "../components/mega-menu";
import { TerminalNavbar } from "../components/terminal-navbar";

const columns = [
  { heading: "BUTTONS", links: [{ label: "Hard-Offset", href: "#hard" }, { label: "Glitch", href: "#glitch" }, { label: "Hazard", href: "#hazard" }] },
  { heading: "TEXT", links: [{ label: "Decrypt", href: "#decrypt" }, { label: "Typewriter", href: "#type" }] },
  { heading: "LAYOUT", links: [{ label: "Bento", href: "#bento" }, { label: "Spec Card", href: "#spec" }] },
];
const feature = { eyebrow: "NEW DROP", title: "GLITCH BUTTON →", href: "#glitch" };

export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <nav aria-label="Standalone demo" className="flex self-start bg-ground-deep">
        <MegaMenu label="COMPONENTS" columns={columns} feature={feature} />
      </nav>
      <TerminalNavbar aria-label="Navbar demo" className="w-full" brandHref="#" links={[{ label: "INDEX", href: "#index" }, { label: "DOCS", href: "#docs" }]}>
        <MegaMenu label="COMPONENTS" columns={columns} feature={feature} />
      </TerminalNavbar>
    </div>
  );
}
''',
        "monolith-footer.tsx": '''import { MonolithFooter } from "../components/monolith-footer";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <MonolithFooter
        className="w-full"
        columns={[
          { heading: "LIBRARY", items: [{ label: "Components", href: "#components" }, { label: "Themes", href: "#themes" }] },
          { heading: "SOURCE", items: [{ label: "GitHub", href: "#github" }, { label: "Licence", href: "#licence" }] },
          { heading: "SYSTEM", items: [{ text: "REV 0.1" }, { text: "MIT" }] },
          { heading: "SIGNAL", items: [{ label: "Docs", href: "#docs" }] },
        ]}
      />
    </div>
  );
}
''',
        "boot-sequence-loader.tsx": '''import { BootSequenceLoader } from "../components/boot-sequence-loader";
import { Replay } from "../preview";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <Replay>
        <BootSequenceLoader
          className="mx-auto min-h-40 w-full max-w-xl"
          lines={[
            { text: "[0000.01] init kernel ............ ", status: "OK" },
            { text: "[0000.18] mount /dev/concrete .... ", status: "OK" },
            { text: "[0000.42] load neon.drv .......... ", status: "OK" },
            { text: "[0000.77] handshake uplink ....... ", status: "READY" },
          ]}
        />
      </Replay>
    </div>
  );
}
''',
        "segmented-progress.tsx": '''import { SegmentedProgress } from "../components/segmented-progress";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <SegmentedProgress className="w-full max-w-xl bg-bg p-6" value={65} label="Loading" phase="HANDSHAKE" />
    </div>
  );
}
''',
        "data-readout-carousel.tsx": '''import { DataReadoutCarousel } from "../components/data-readout-carousel";

function Readout({ code, title, value, unit, note }: { code: string; title: string; value: string; unit: string; note: string }) {
  return (
    <div className="flex min-h-48 flex-col justify-between gap-6 px-6 py-6">
      <span className="text-caption tracking-label text-label"><span className="text-signal">{code}</span> / {title}</span>
      <span className="font-display text-6xl leading-none text-ink">{value}<span className="text-signal">{unit}</span></span>
      <span className="text-xs text-label">{note}</span>
    </div>
  );
}

export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <DataReadoutCarousel
        className="w-full max-w-xl"
        label="SYSTEM READOUT"
        slides={[
          <Readout key="a" code="R-01" title="UPTIME" value="99.98" unit="%" note="Rolling 30-day availability." />,
          <Readout key="b" code="R-02" title="LATENCY" value="042" unit="MS" note="Median edge response." />,
          <Readout key="c" code="R-03" title="COMPONENTS" value="038" unit="//" note="Free MIT registry items." />,
        ]}
      />
    </div>
  );
}
''',
        "command-palette.tsx": '''import { useState } from "react";
import { CommandPalette, type CommandPaletteGroup } from "../components/command-palette";

const groups: CommandPaletteGroup[] = [
  { label: "BUTTONS", items: [
    { value: "hard-offset-button", label: "Hard-Offset Button", hint: "BTN-01" },
    { value: "glitch-button", label: "Glitch Button", hint: "BTN-02" },
    { value: "hazard-button", label: "Hazard Button", hint: "BTN-05" },
  ]},
  { label: "TEXT", items: [
    { value: "decrypt-text", label: "Decrypt Text", hint: "TXT-01" },
    { value: "glitch-heading", label: "Glitch Heading", hint: "TXT-02" },
  ]},
];

export default function Mount() {
  const [last, setLast] = useState<string | null>(null);
  return (
    <div className="cybr-stage">
      <CommandPalette groups={groups} onSelect={setLast} />
      <p className="m-0 font-mono text-xs tracking-label text-label">LAST RUN: <span className="text-ink">{last ?? "—"}</span></p>
    </div>
  );
}
''',
        "pixelated-image-trail.tsx": '''import { PixelatedImageTrail } from "../components/pixelated-image-trail";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <PixelatedImageTrail
        className="flex min-h-80 w-full items-center justify-center bg-ground-void"
        images={["./cybr/trail-01.svg", "./cybr/trail-02.svg", "./cybr/trail-03.svg", "./cybr/trail-04.svg"]}
      >
        <div className="text-center font-display text-5xl leading-none text-ink">MOVE THE<br />CURSOR<span className="text-signal">_</span></div>
      </PixelatedImageTrail>
    </div>
  );
}
''',
        "tokens.tsx": '''import { GlitchButton } from "../components/glitch-button";
import { HardOffsetButton } from "../components/hard-offset-button";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <div className="flex flex-wrap gap-3 font-mono text-xs">
        <span className="bg-signal px-3 py-2 text-ground-deep">signal</span>
        <span className="bg-surface px-3 py-2 text-ink">surface</span>
        <span className="border border-line px-3 py-2 text-label">label</span>
        <span className="bg-ink px-3 py-2 text-bg">ink</span>
      </div>
      <div className="flex flex-wrap gap-8">
        <HardOffsetButton>Deploy</HardOffsetButton>
        <GlitchButton>Jack in</GlitchButton>
      </div>
    </div>
  );
}
''',
        "effects.tsx": '''import { GlitchHeading } from "../components/glitch-heading";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <GlitchHeading className="text-5xl">Glitch</GlitchHeading>
      <div className="hazard-stripes h-10 w-full max-w-md" />
      <div className="relative h-24 w-full max-w-md overflow-hidden bg-surface scanlines" />
    </div>
  );
}
''',
        "theme-acid-terminal.tsx": '''import { GlitchButton } from "../components/glitch-button";
import { HardOffsetButton } from "../components/hard-offset-button";
export default function Mount() {
  return (
    <div className="cybr-stage bg-bg text-ink" data-theme="acid-terminal">
      <p className="font-mono text-xs tracking-label text-label">data-theme=&quot;acid-terminal&quot;</p>
      <div className="flex gap-3 font-mono text-xs">
        <span className="bg-signal px-3 py-2 text-ground-deep">signal</span>
        <span className="bg-surface px-3 py-2 text-ink">surface</span>
      </div>
      <div className="flex flex-wrap gap-8">
        <HardOffsetButton>Deploy</HardOffsetButton>
        <GlitchButton>Jack in</GlitchButton>
      </div>
    </div>
  );
}
''',
        "theme-ice-neon.tsx": '''import { GlitchButton } from "../components/glitch-button";
import { HardOffsetButton } from "../components/hard-offset-button";
export default function Mount() {
  return (
    <div className="cybr-stage bg-bg text-ink" data-theme="ice-neon">
      <p className="font-mono text-xs tracking-label text-label">data-theme=&quot;ice-neon&quot;</p>
      <div className="flex gap-3 font-mono text-xs">
        <span className="bg-signal px-3 py-2 text-ground-deep">signal</span>
        <span className="bg-surface px-3 py-2 text-ink">surface</span>
      </div>
      <div className="flex flex-wrap gap-8">
        <HardOffsetButton>Deploy</HardOffsetButton>
        <GlitchButton>Jack in</GlitchButton>
      </div>
    </div>
  );
}
''',
    }
    for name, content in files.items():
        (out / name).write_text(content)
    print("mounts", len(list(out.glob('*.tsx'))))


def main() -> None:
    items = json.loads(ITEMS.read_text())
    existing = {row["id"] for row in items}
    fresh = [row for row in [*cybr_items(), *orb_items(), *dots_items()] if row["id"] not in existing]
    items.extend(fresh)

    sources = json.loads(SOURCES.read_text())
    known = {row["id"] for row in sources}
    additions = [
        {
            "id": "cybr",
            "name": "CYBR//UI",
            "url": CYBR_SITE,
            "repo": CYBR_REPO,
            "license": "MIT",
            "licenseUrl": CYBR_LICENSE,
            "author": CYBR_AUTHOR,
            "included": "注册表中的 38 个免费组件，外加 tokens、effects、Acid Terminal、Ice Neon 和 use-reduced-motion。安装入口为 npx shadcn@latest add @cybr/all。",
            "excluded": "没有付费档。主题只作为可选预设收录，不替换本站自己的颜色。",
            "why": f"仓库 LICENSE 为 MIT，{CYBR_COPY}。组件与样式从公开仓库和 https://cybr-ui.com/r/{{name}}.json 取得。",
        },
        {
            "id": "thinkingorbs",
            "name": "Thinking Orbs",
            "url": ORBS_SITE,
            "repo": ORBS_REPO,
            "license": "MIT",
            "licenseUrl": ORBS_LICENSE,
            "author": "Yogesh",
            "included": "React 光球，以及仓库里的额外形状和绘制方式（shapes.ts、renders.ts）。",
            "excluded": "Swift 包不是这个网站的 React 预览，没有单独做卡片。没有发明仓库里不存在的文件。",
            "why": f"仓库 LICENSE 为 MIT，{ORBS_COPY}。源码在 apps/web/registry/orb。",
        },
        {
            "id": "dots",
            "name": "Dots",
            "url": DOTS_SITE,
            "repo": DOTS_REPO,
            "license": "MIT（免费核心 dots-swarm）",
            "licenseUrl": DOTS_LICENSE,
            "author": "hamza-al",
            "included": "已发布 npm 包 dots-swarm@0.1.0-alpha.4 的 MIT 构建，含粒子形变、单点和导航。完整文件在 src/vendor/dots-swarm。",
            "excluded": "@dots-swarm/pro、Pro 形状、Studio 付费功能和 $149 付费墙后的内容。公开 GitHub 仓库目前 404，没有从那里取文件。",
            "why": f"npm 包内 LICENSE 为 MIT，{DOTS_COPY}（经 jsDelivr 与 npm 核对）。许可已确认。限制是源码仓库不可访问，所以用已发布的 MIT 包，不标成未确认可再分发。",
        },
    ]
    for row in additions:
        if row["id"] not in known:
            sources.append(row)

    ITEMS.write_text(json.dumps(items, ensure_ascii=False, indent=2) + "\n")
    SOURCES.write_text(json.dumps(sources, ensure_ascii=False, indent=2) + "\n")

    (ROOT / "LICENSES/CYBR-UI-MIT.txt").write_text((CYBR / "LICENSE").read_text())
    (ROOT / "LICENSES/Thinking-Orbs-MIT.txt").write_text(Path("/tmp/ui-src/thinking-orbs/LICENSE").read_text())

    notice = """
## CYBR//UI
- 站点：https://cybr-ui.com
- 仓库：https://github.com/JLTDigital/cybr-ui
- 许可：MIT
- 许可原文：https://github.com/JLTDigital/cybr-ui/blob/main/LICENSE
- 作者：JLTDigital and Jonathan Taft
- 收录：38 个免费组件，以及 tokens、effects、theme-acid-terminal、theme-ice-neon、use-reduced-motion。
- 未收录：无付费档。`@cybr/all` 只包含这些免费组件。
- 依据：仓库 LICENSE 为 MIT，Copyright (c) 2026 JLTDigital and Jonathan Taft。

## Thinking Orbs
- 站点：https://www.thinkingorbs.com
- 仓库：https://github.com/yogesharc/thinking-orbs
- 许可：MIT
- 许可原文：https://github.com/yogesharc/thinking-orbs/blob/main/LICENSE
- 作者：Yogesh
- 收录：React 光球源码，以及仓库中的 shapes 与 renders。
- 未收录：Swift 包未单独做网页预览。
- 依据：仓库 LICENSE 为 MIT，Copyright (c) 2026 Yogesh。

## Dots
- 站点：https://dotsui.dev
- 仓库：https://github.com/hamza-al/dots-next（目前 404，未从该地址取得文件）
- 许可：MIT（免费核心 npm 包 dots-swarm@0.1.0-alpha.4）
- 许可原文：https://cdn.jsdelivr.net/npm/dots-swarm@0.1.0-alpha.4/LICENSE
- 作者：hamza-al
- 收录：已发布 dots-swarm 包中的免费 MIT 核心，含实时预览。包文件在 src/vendor/dots-swarm。
- 未收录：@dots-swarm/pro、Pro 形状、Studio 付费功能。
- 依据：包内 LICENSE 为 MIT，Copyright (c) 2026 hamza-al。许可已确认；公开源码仓库不可访问，因此使用 npm 上的 MIT 构建，不标为未确认可再分发。
"""
    text = NOTICES.read_text()
    if "## CYBR//UI" not in text:
        NOTICES.write_text(text.rstrip() + "\n" + notice)

    write_mounts()
    print("added", len(fresh), "total", len(items))


if __name__ == "__main__":
    main()
