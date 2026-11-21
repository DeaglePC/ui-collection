# -*- coding: utf-8 -*-
"""Add Furin, affectUI, asciicn, Eased UI, and Keyframery free MIT sources."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path("/agent/repos/ui-collection")
SRC = Path("/tmp/ui-src")
ITEMS = ROOT / "src/data/items.json"
SOURCES = ROOT / "src/data/sources.json"
NOTICES = ROOT / "THIRD_PARTY_NOTICES.md"

FURIN_CAT = {
    "Backgrounds": "背景/Shader",
    "Text": "文字动效",
    "Cards": "卡片",
    "Navigation": "导航",
    "Buttons": "按钮",
    "Cursors": "按钮",
    "Interaction": "滚动动效",
    "Galleries": "卡片",
    "Loaders": "加载动画",
    "Data": "数据图表",
}


def code_file(path: str, content: str) -> dict:
    lang = "tsx" if path.endswith(".tsx") else "typescript" if path.endswith(".ts") else "css" if path.endswith(".css") else "markdown" if path.endswith(".md") else "text"
    return {"path": path, "language": lang, "content": content}


def banner(title: str, copy: str, page: str, repo: str) -> str:
    return f"/**\n * {title}\n * MIT License · {copy}\n * {page}\n * {repo}\n */\n"


def entry(**kwargs) -> dict:
    tags = kwargs.pop("tags")
    row = {
        "id": kwargs["item_id"],
        "name": kwargs["name"],
        "nameZh": kwargs["name_zh"],
        "sourceId": kwargs["source_id"],
        "sourceName": kwargs["source_name"],
        "sourceUrl": kwargs["source_url"],
        "originalUrl": kwargs["original_url"],
        "author": kwargs["author"],
        "repo": kwargs["repo"],
        "license": "MIT",
        "licenseUrl": kwargs["license_url"],
        "copyright": kwargs["copyright"],
        "category": kwargs["category"],
        "tags": tags,
        "description": kwargs["description"][:420],
        "kind": "code",
        "preview": "code",
        "iframeSrc": "",
        "reactPreview": "",
        "iframeHeight": kwargs.get("height", 520),
        "files": kwargs["files"],
        "prompt": "",
        "install": kwargs["install"],
        "notice": kwargs["notice"],
    }
    return row


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def furin_items() -> list[dict]:
    reg = json.loads(read(SRC / "furin/registry.json"))
    author = "Marcelo Treviño Velázquez"
    copy = "Copyright (c) 2026 Marcelo Treviño Velázquez"
    repo = "https://github.com/MTVelazquez/furin"
    lic = "https://github.com/MTVelazquez/furin/blob/main/LICENSE"
    rows = []
    for info in reg["items"]:
        slug = info["name"]
        folder = SRC / "furin/registry" / slug
        files = []
        page = f"https://furin.dev/components/{slug}"
        for path in sorted(folder.iterdir()):
            if path.suffix not in {".tsx", ".css"}:
                continue
            body = banner(f"Furin · {info['title']}", copy, page, repo) + read(path)
            files.append(code_file(f"components/{slug}/{path.name}", body))
        cat = FURIN_CAT.get((info.get("categories") or ["Cards"])[0], "卡片")
        rows.append(entry(
            item_id=f"furin-{slug}",
            name=info["title"],
            name_zh=info["title"],
            source_id="furin",
            source_name="Furin",
            source_url="https://furin.dev",
            original_url=page,
            author=author,
            repo=repo,
            license_url=lic,
            copyright=copy,
            category=cat,
            tags=["Furin", "MIT", slug],
            description=f"Furin「{info['title']}」。{info.get('description') or ''}",
            files=files,
            install=f"npx shadcn@latest add https://furin.dev/r/{slug}.json",
            notice=f"MIT，{copy}。作者 {author}。原页 {page}。仓库 {repo}。免费组件，不含 Pro。",
            height=640 if cat == "背景/Shader" else 520,
        ))
    return rows


def affect_items() -> list[dict]:
    root = SRC / "affectui"
    author = "Florian Höller (adfects)"
    copy = "Copyright (c) 2026 Florian Höller (adfects)"
    repo = "https://github.com/flohoeller/affectui"
    lic = "https://github.com/flohoeller/affectui/blob/main/LICENSE"
    groups = [
        (root / "components", "components"),
        (root / "blocks", "blocks"),
        (root / "motion", "motion"),
        (root / "illustrations", "illustrations"),
    ]
    stems: dict[str, list[Path]] = {}
    kinds: dict[str, str] = {}
    for folder, kind in groups:
        for path in folder.glob("*.tsx"):
            stem = path.name.replace("-clean.tsx", "").replace(".tsx", "")
            stems.setdefault(stem, []).append(path)
            kinds[stem] = kind
    rows = []
    for stem, paths in sorted(stems.items()):
        paths = sorted(paths, key=lambda p: ("-clean" in p.name, p.name))
        page = f"https://www.affectui.com/components/{stem}"
        files = []
        for path in paths:
            body = banner(f"affectUI · {stem}", copy, page, repo) + read(path)
            files.append(code_file(f"components/{path.name}", body))
        kind = kinds[stem]
        cat = affect_category(stem, kind)
        title = stem.replace("-", " ").title()
        rows.append(entry(
            item_id=f"affect-{stem}",
            name=title,
            name_zh=title,
            source_id="affect",
            source_name="affectUI",
            source_url="https://www.affectui.com",
            original_url=page,
            author=author,
            repo=repo,
            license_url=lic,
            copyright=copy,
            category=cat,
            tags=["affectUI", "MIT", kind, stem],
            description=f"affectUI 免费组件「{title}」。公开仓库中的 MIT 源码；带 -clean 的文件是同一项的干净变体。不含 Pro。",
            files=files,
            install=f"npx shadcn@latest add https://www.affectui.com/r/{stem}.json",
            notice=f"MIT，{copy}。作者 {author}。原页 {page}。仓库 {repo}。Pro（Agent Graph、Checkpoints、Crew、Tree 等）不在这个仓库，没有收录。",
            height=560,
        ))
    skill_files = []
    skill_root = root / "skills/affectui"
    for path in sorted(skill_root.rglob("*")):
        if path.is_file() and path.suffix.lower() in {".md", ".txt"}:
            rel = path.relative_to(skill_root).as_posix()
            skill_files.append(code_file(f"skills/{rel}", banner("affectUI skill", copy, "https://www.affectui.com/docs", repo) + read(path)))
    rows.append(entry(
        item_id="affect-skill",
        name="affectUI skill",
        name_zh="affectUI 技能",
        source_id="affect",
        source_name="affectUI",
        source_url="https://www.affectui.com",
        original_url="https://www.affectui.com/docs",
        author=author,
        repo=repo,
        license_url=lic,
        copyright=copy,
        category="提示词",
        tags=["affectUI", "MIT", "skill", "仅源码"],
        description="affectUI 免费技能（skills/affectui）。给编码代理的说明、示例和目录。不含 Pro 技能。",
        files=skill_files,
        install="仓库 skills/affectui",
        notice=f"MIT，{copy}。作者 {author}。这是说明文件，没有实时画布。",
    ))
    return rows


def affect_category(stem: str, kind: str) -> str:
    if kind == "illustrations":
        return "背景/Shader"
    if kind == "motion":
        if "text" in stem or "number" in stem:
            return "文字动效"
        return "背景/Shader"
    if kind == "blocks":
        return "滚动动效" if "marquee" in stem else "卡片"
    form = ("field", "input", "checkbox", "select", "otp", "picker", "switch", "toggle", "textarea", "text-area", "text-field", "tag-input", "filter", "color")
    nav = ("menu", "breadcrumb", "pagination", "tooltip", "popover", "dialog", "tree", "tabs", "segmented", "scroll", "resizable")
    ai = ("tool-call", "thinking", "decision", "comment", "message", "email", "notification", "recommendation", "change-summary")
    load = ("spinner", "skeleton", "progress", "loader")
    button = ("button",)
    text = ("code-block",)
    if any(k in stem for k in ai):
        return "AI 界面组件"
    if any(k in stem for k in form):
        return "表单"
    if any(k in stem for k in nav):
        return "导航"
    if any(k in stem for k in load):
        return "加载动画"
    if any(k in stem for k in button):
        return "按钮"
    if any(k in stem for k in text):
        return "文字动效"
    return "卡片"


def emit_css(node: dict, indent: int = 0) -> str:
    pad = "  " * indent
    chunks = []
    for key, value in node.items():
        if isinstance(value, dict) and value and all(isinstance(v, str) for v in value.values()):
            body = "\n".join(f"{pad}  {prop}: {decl};" for prop, decl in value.items())
            chunks.append(f"{pad}{key} {{\n{body}\n{pad}}}")
        elif isinstance(value, dict):
            chunks.append(f"{pad}{key} {{\n{emit_css(value, indent + 1)}\n{pad}}}")
        else:
            chunks.append(f"{pad}{key}: {value};")
    return "\n".join(chunks)


def eased_items() -> list[dict]:
    root = SRC / "eased/src/registry/eased"
    reg = json.loads(read(SRC / "eased/registry.json"))
    author = "Eased"
    copy = "Copyright (c) 2026 Eased"
    repo = "https://github.com/easedui/ui"
    lic = "https://github.com/easedui/ui/blob/main/LICENSE"
    rows = []
    shared = []
    for folder_name in ("lib", "_primitives"):
        folder = root / folder_name
        for path in sorted(p for p in folder.rglob("*") if p.is_file() and p.suffix in {".ts", ".tsx"}):
            rel = path.relative_to(root).as_posix()
            shared.append(code_file(f"registry/{rel}", read(path)))
    rows.append(entry(
        item_id="eased-shared",
        name="Eased shared runtime",
        name_zh="Eased 共用运行时",
        source_id="eased",
        source_name="Eased UI",
        source_url="https://eased.dev",
        original_url="https://eased.dev/docs/introduction",
        author=author,
        repo=repo,
        license_url=lic,
        copyright=copy,
        category="滚动动效",
        tags=["Eased UI", "MIT", "仅源码"],
        description="免费组件共用的 motion、press 和 primitives。组件条目各自再带自己的源码。仓库是 MIT 免费部分，不含 Pro。",
        files=shared,
        install="npx shadcn add https://eased.dev/r/button.json",
        notice=f"MIT，{copy}。作者 {author}。原页 https://eased.dev/licence 。仓库 {repo}。",
    ))
    tok = next(i for i in reg["items"] if i["name"] == "eased-tokens")
    theme = emit_css(tok.get("css") or {})
    theme_vars = tok.get("cssVars") or {}
    theme_block = theme_vars.get("theme") or {}
    if theme_block:
        body = "\n".join(f"  --{key}: {value};" for key, value in theme_block.items())
        theme = f"@theme inline {{\n{body}\n}}\n" + theme
    page = "https://eased.dev/licence"
    rows.append(entry(
        item_id="eased-tokens",
        name="Eased stylesheet",
        name_zh="Eased 样式表",
        source_id="eased",
        source_name="Eased UI",
        source_url="https://eased.dev",
        original_url=page,
        author=author,
        repo=repo,
        license_url=lic,
        copyright=copy,
        category="背景/Shader",
        tags=["Eased UI", "MIT", "仅源码"],
        description="Eased 免费组件共用的设计令牌和工具类。预览页会载入它，避免组件没有颜色。",
        files=[code_file("theme.css", f"/* Eased UI · MIT · {copy} · {page} · {repo} */\n{theme}\n")],
        install="npx shadcn add https://eased.dev/r/eased-tokens.json",
        notice=f"MIT，{copy}。作者 {author}。许可页 {page}。仓库 {repo}。",
    ))
    skill = root / "eased-skill"
    if skill.exists():
        skill_files = []
        for path in sorted(p for p in skill.rglob("*") if p.is_file() and p.suffix in {".md", ".txt", ".tsx", ".ts"}):
            rel = path.relative_to(root).as_posix()
            skill_files.append(code_file(f"registry/{rel}", read(path)))
        if skill_files:
            rows.append(entry(
                item_id="eased-skill",
                name="Eased skill",
                name_zh="Eased 技能",
                source_id="eased",
                source_name="Eased UI",
                source_url="https://eased.dev",
                original_url="https://eased.dev/docs/introduction",
                author=author,
                repo=repo,
                license_url=lic,
                copyright=copy,
                category="提示词",
                tags=["Eased UI", "MIT", "仅源码"],
                description="Eased 免费仓库里的代理技能。",
                files=skill_files,
                install="仓库 src/registry/eased/eased-skill",
                notice=f"MIT，{copy}。作者 {author}。仓库 {repo}。",
            ))
    for folder in sorted(p for p in root.iterdir() if p.is_dir() and p.name not in {"lib", "_primitives", "eased-skill"}):
        files = []
        page = f"https://eased.dev/components/{folder.name}"
        for path in sorted(p for p in folder.rglob("*") if p.is_file() and p.suffix in {".ts", ".tsx"} and p.name != "README.md"):
            rel = path.relative_to(root).as_posix()
            files.append(code_file(f"registry/{rel}", banner(f"Eased UI · {folder.name}", copy, page, repo) + read(path)))
        if not files:
            continue
        rows.append(entry(
            item_id=f"eased-{folder.name}",
            name=folder.name.replace("-", " ").title(),
            name_zh=folder.name.replace("-", " ").title(),
            source_id="eased",
            source_name="Eased UI",
            source_url="https://eased.dev",
            original_url=page,
            author=author,
            repo=repo,
            license_url=lic,
            copyright=copy,
            category=guess_category(folder.name),
            tags=["Eased UI", "MIT", folder.name],
            description=f"Eased UI 免费组件「{folder.name}」。来自公开仓库的 MIT 源码，不含 Pro。",
            files=files,
            install=f"npx shadcn add https://eased.dev/r/{folder.name}.json",
            notice=f"MIT，{copy}。作者 {author}。原页 {page}。许可页 https://eased.dev/licence 。仓库 {repo}。",
        ))
    return rows


def keyframery_items() -> list[dict]:
    root = SRC / "keyframery/src"
    author = "Briyan Hingrajiya"
    copy = "Copyright (c) 2026 Briyan Hingrajiya"
    repo = "https://github.com/keyframery/keyframery"
    lic = "https://github.com/keyframery/keyframery/blob/main/LICENSE"
    site = "https://keyframery.com"
    rows = []
    shared = []
    for path in sorted((root / "components/primitives").glob("*.tsx")):
        shared.append(code_file(f"components/primitives/{path.name}", read(path)))
    for path in sorted((root / "components/core").glob("*.ts")):
        shared.append(code_file(f"components/core/{path.name}", read(path)))
    for path in sorted((root / "lib").glob("*.ts*")):
        shared.append(code_file(f"lib/{path.name}", read(path)))
    rows.append(entry(
        item_id="keyframery-runtime",
        name="Keyframery primitives",
        name_zh="Keyframery 原语与速度",
        source_id="keyframery",
        source_name="Keyframery",
        source_url=site,
        original_url=f"{site}/docs/installation",
        author=author,
        repo=repo,
        license_url=lic,
        copyright=copy,
        category="滚动动效",
        tags=["Keyframery", "MIT", "仅源码"],
        description="Keyframery 组件底下的 primitives 和速度辅助。每个组件条目再带自己的 UI 源码。纯 CSS 动效，MIT。",
        files=shared,
        install="npx shadcn@latest add https://keyframery.com/r/button.json",
        notice=f"MIT，{copy}。作者 {author}。原页 {site}。仓库 {repo}。",
    ))
    for path in sorted((root / "components/ui").glob("*.tsx")):
        slug = path.stem
        page = f"{site}/docs/components/{slug}"
        rows.append(entry(
            item_id=f"keyframery-{slug}",
            name=slug.replace("-", " ").title(),
            name_zh=slug.replace("-", " ").title(),
            source_id="keyframery",
            source_name="Keyframery",
            source_url=site,
            original_url=page,
            author=author,
            repo=repo,
            license_url=lic,
            copyright=copy,
            category=guess_category(slug),
            tags=["Keyframery", "MIT", slug],
            description=f"Keyframery「{slug}」。Vercel UI SDK 上的纯 CSS 动效组件，MIT。",
            files=[code_file(f"components/ui/{path.name}", banner(f"Keyframery · {slug}", copy, page, repo) + read(path))],
            install=f"npx shadcn@latest add https://keyframery.com/r/{slug}.json",
            notice=f"MIT，{copy}。作者 {author}。原页 {page}。仓库 {repo}。",
        ))
    return rows


ASCII_BG = {
    "balloon-valley", "black-hole", "canyon-river", "cyber-skull", "dubai", "ember", "glacier-lagoon",
    "hong-kong", "ionize", "lighthouse", "london", "miami", "mountain-dusk", "nebula", "new-york",
    "ocean-waves", "paris", "prism", "redwood-light", "retro-computer", "rice-terraces", "rio",
    "san-francisco", "satin", "seed-field", "squall", "sydney", "synthwave-sun", "tokyo", "torus-knot",
    "glyph-rain", "dna-helix",
}


def asciicn_items() -> list[dict]:
    root = SRC / "asciicn"
    author = "Leo"
    copy = "Copyright (c) 2026 Leo; Copyright (c) 2026 Shadcn Labs (startercn)"
    repo = "https://github.com/opencoredev/asciicn"
    lic = "https://github.com/opencoredev/asciicn/blob/main/LICENSE"
    site = "https://asciicn.dev"
    rows = []
    engine = []
    for path in sorted(p for p in (root / "lib/ascii").rglob("*") if p.is_file() and p.suffix in {".ts", ".tsx"}):
        rel = path.relative_to(root / "lib/ascii").as_posix()
        engine.append(code_file(f"lib/ascii/{rel}", banner("asciicn engine", copy, site, repo) + read(path)))
    rows.append(entry(
        item_id="asciicn-engine",
        name="asciicn engine",
        name_zh="asciicn 引擎",
        source_id="asciicn",
        source_name="asciicn",
        source_url=site,
        original_url=f"{site}/docs",
        author=author,
        repo=repo,
        license_url=lic,
        copyright=copy,
        category="着色器/WebGPU",
        tags=["asciicn", "MIT", "仅源码"],
        description="lib/ascii 引擎：字符栅格、调色板、场景和 WebGL 着色器。组件预览会一起载入它。",
        files=engine,
        install="npx shadcn@latest add https://asciicn.dev/r/asciicn-skill.json",
        notice=f"MIT，{copy}。作者 Leo，并保留 Shadcn Labs (startercn) 的版权。原页 {site}。仓库 {repo}。",
    ))
    skill = []
    for path in sorted(p for p in (root / "skills/asciicn").rglob("*") if p.is_file() and p.suffix in {".md", ".txt"}):
        rel = path.relative_to(root / "skills/asciicn").as_posix()
        skill.append(code_file(f"skills/{rel}", read(path)))
    rows.append(entry(
        item_id="asciicn-skill",
        name="asciicn skill",
        name_zh="asciicn 技能",
        source_id="asciicn",
        source_name="asciicn",
        source_url=site,
        original_url=f"{site}/docs",
        author=author,
        repo=repo,
        license_url=lic,
        copyright=copy,
        category="提示词",
        tags=["asciicn", "MIT", "仅源码"],
        description="skills/asciicn 代理技能和参考说明。",
        files=skill,
        install="npx shadcn@latest add https://asciicn.dev/r/asciicn-skill.json",
        notice=f"MIT，{copy}。作者 Leo，并保留 Shadcn Labs (startercn) 的版权。仓库 {repo}。",
    ))
    for path in sorted((root / "components/asciicn").glob("*.tsx")):
        slug = path.stem
        page = f"{site}/docs/{slug}"
        cat = "背景/Shader" if slug in ASCII_BG else guess_category(slug)
        extra = []
        seen = set()
        text = read(path)
        for spec in __import__("re").findall(r'["\']@/components/asciicn/([^"\']+)["\']', text):
            for cand in (path.parent / spec, path.parent / f"{spec}.ts", path.parent / f"{spec}.tsx"):
                if cand.is_file() and cand.suffix in {".ts", ".tsx"} and cand != path and cand not in seen:
                    seen.add(cand)
                    extra.append(cand)
                    break
        files = [code_file(f"components/{path.name}", banner(f"asciicn · {slug}", copy, page, repo) + text)]
        for cand in extra:
            files.append(code_file(f"components/{cand.name}", read(cand)))
        rows.append(entry(
            item_id=f"asciicn-{slug}",
            name=slug.replace("-", " ").title(),
            name_zh=slug.replace("-", " ").title(),
            source_id="asciicn",
            source_name="asciicn",
            source_url=site,
            original_url=page,
            author=author,
            repo=repo,
            license_url=lic,
            copyright=copy,
            category=cat,
            tags=["asciicn", "MIT", slug],
            description=f"asciicn「{slug}」。免费示例或绘制背景，跑在 lib/ascii 上。",
            files=files,
            install="npx shadcn@latest add https://asciicn.dev/r/asciicn-skill.json",
            notice=f"MIT，{copy}。作者 Leo，并保留 Shadcn Labs (startercn) 的版权。原页 {page}。仓库 {repo}。",
            height=640 if cat == "背景/Shader" else 520,
        ))
    return rows


def guess_category(slug: str) -> str:
    name = slug.lower()
    if any(k in name for k in ("button", "hold", "confirm", "switch", "toggle", "checkbox")):
        return "按钮"
    if any(k in name for k in ("input", "field", "select", "form", "textarea", "otp", "slider", "picker", "upload")):
        return "表单"
    if any(k in name for k in ("nav", "menu", "tab", "breadcrumb", "pagination", "dock", "accordion", "tooltip", "dialog", "popover", "drawer", "sidebar", "command")):
        return "导航"
    if any(k in name for k in ("text", "type", "heading", "title", "letter", "word", "number", "odometer", "flap", "ascii-text", "glitch-text")):
        return "文字动效"
    if any(k in name for k in ("loader", "spinner", "skeleton", "progress", "boot")):
        return "加载动画"
    if any(k in name for k in ("chart", "gauge", "meter", "graph")):
        return "数据图表"
    if any(k in name for k in ("marquee", "scroll", "parallax", "reveal", "ticker")):
        return "滚动动效"
    if any(k in name for k in ("background", "grid", "shader", "field", "rain", "galaxy", "aurora", "mesh")):
        return "背景/Shader"
    if any(k in name for k in ("card", "avatar", "badge", "alert", "toast", "empty", "kbd")):
        return "卡片"
    return "卡片"


def main() -> None:
    fresh = furin_items() + affect_items() + eased_items() + keyframery_items() + asciicn_items()
    items = json.loads(ITEMS.read_text())
    fresh_ids = {row["sourceId"] for row in fresh}
    items = [row for row in items if row.get("sourceId") not in fresh_ids]
    added = fresh
    items.extend(added)
    sources = json.loads(SOURCES.read_text())
    known = {row["id"] for row in sources}
    additions = [
        {
            "id": "furin",
            "name": "Furin",
            "url": "https://furin.dev",
            "repo": "https://github.com/MTVelazquez/furin",
            "license": "MIT",
            "licenseUrl": "https://github.com/MTVelazquez/furin/blob/main/LICENSE",
            "author": "Marcelo Treviño Velázquez",
            "included": "registry.json 里的全部 92 个免费组件，每个含 tsx 和 css。",
            "excluded": "Pro 组件不在这个免费注册表里，没有收录。",
            "why": "仓库 LICENSE 为 MIT，Copyright (c) 2026 Marcelo Treviño Velázquez。",
        },
        {
            "id": "affect",
            "name": "affectUI",
            "url": "https://www.affectui.com",
            "repo": "https://github.com/flohoeller/affectui",
            "license": "MIT",
            "licenseUrl": "https://github.com/flohoeller/affectui/blob/main/LICENSE",
            "author": "Florian Höller (adfects)",
            "included": "公开仓库里的免费组件、区块、动效、插画，以及 skills/affectui。带 -clean 的文件跟在同一条目里。",
            "excluded": "Pro：Agent Graph、Agent Checkpoints、Agent Crew、Agent Tree 和其他付费代理界面、Pro 技能。",
            "why": "仓库 LICENSE 为 MIT，Copyright (c) 2026 Florian Höller (adfects)。README 写明 Pro 不在这个仓库。",
        },
        {
            "id": "eased",
            "name": "Eased UI",
            "url": "https://eased.dev",
            "repo": "https://github.com/easedui/ui",
            "license": "MIT",
            "licenseUrl": "https://github.com/easedui/ui/blob/main/LICENSE",
            "author": "Eased",
            "included": "公开仓库 src/registry/eased 里的免费组件、共用 primitives，和样式令牌。",
            "excluded": "Pro / 付费部分不在这个免费仓库。",
            "why": "仓库 LICENSE 为 MIT，Copyright (c) 2026 Eased。许可页 https://eased.dev/licence 。README 写明本仓库是免费 MIT 部分。",
        },
        {
            "id": "keyframery",
            "name": "Keyframery",
            "url": "https://keyframery.com",
            "repo": "https://github.com/keyframery/keyframery",
            "license": "MIT",
            "licenseUrl": "https://github.com/keyframery/keyframery/blob/main/LICENSE",
            "author": "Briyan Hingrajiya",
            "included": "src/components/ui 的全部 MIT 组件，以及 primitives 和速度辅助。",
            "excluded": "站点外壳、文档和模板页没有当组件收录。",
            "why": "仓库 LICENSE 为 MIT，Copyright (c) 2026 Briyan Hingrajiya。",
        },
        {
            "id": "asciicn",
            "name": "asciicn",
            "url": "https://asciicn.dev",
            "repo": "https://github.com/opencoredev/asciicn",
            "license": "MIT",
            "licenseUrl": "https://github.com/opencoredev/asciicn/blob/main/LICENSE",
            "author": "Leo（LICENSE 同时保留 Shadcn Labs / startercn）",
            "included": "lib/ascii 引擎、skills/asciicn，以及 components/asciicn 里的免费示例和绘制背景。",
            "excluded": "没有发现 Pro 分区，站点外壳没有收录。",
            "why": "仓库 LICENSE 为 MIT，Copyright (c) 2026 Leo，以及 Copyright (c) 2026 Shadcn Labs (startercn)。",
        },
    ]
    for row in additions:
        if row["id"] not in known:
            sources.append(row)
    ITEMS.write_text(json.dumps(items, ensure_ascii=False, indent=2) + "\n")
    SOURCES.write_text(json.dumps(sources, ensure_ascii=False, indent=2) + "\n")
    for name, src in [
        ("Furin-MIT.txt", SRC / "furin/LICENSE"),
        ("affectUI-MIT.txt", SRC / "affectui/LICENSE"),
        ("Eased-UI-MIT.txt", SRC / "eased/LICENSE"),
        ("Keyframery-MIT.txt", SRC / "keyframery/LICENSE"),
        ("asciicn-MIT.txt", SRC / "asciicn/LICENSE"),
    ]:
        (ROOT / "LICENSES" / name).write_text(src.read_text())
    notice = """
## Furin
- 站点：https://furin.dev
- 仓库：https://github.com/MTVelazquez/furin
- 许可：MIT
- 许可原文：https://github.com/MTVelazquez/furin/blob/main/LICENSE
- 作者：Marcelo Treviño Velázquez
- 收录：92 个免费组件的 tsx 与 css。
- 未收录：Pro。
- 依据：LICENSE 为 MIT，Copyright (c) 2026 Marcelo Treviño Velázquez。

## affectUI
- 站点：https://www.affectui.com
- 仓库：https://github.com/flohoeller/affectui
- 许可：MIT
- 许可原文：https://github.com/flohoeller/affectui/blob/main/LICENSE
- 作者：Florian Höller (adfects)
- 收录：公开仓库的免费组件、区块、动效、插画和 skills/affectui。
- 未收录：Pro 代理界面和 Pro 技能。
- 依据：LICENSE 为 MIT，Copyright (c) 2026 Florian Höller (adfects)。

## Eased UI
- 站点：https://eased.dev
- 仓库：https://github.com/easedui/ui
- 许可：MIT
- 许可原文：https://github.com/easedui/ui/blob/main/LICENSE
- 作者：Eased
- 收录：免费仓库中的组件、共用运行时和样式令牌。
- 未收录：Pro。
- 依据：LICENSE 为 MIT，Copyright (c) 2026 Eased。许可页 https://eased.dev/licence 。

## Keyframery
- 站点：https://keyframery.com
- 仓库：https://github.com/keyframery/keyframery
- 许可：MIT
- 许可原文：https://github.com/keyframery/keyframery/blob/main/LICENSE
- 作者：Briyan Hingrajiya
- 收录：src/components/ui 的 MIT 组件，以及 primitives。
- 未收录：文档站和模板页。
- 依据：LICENSE 为 MIT，Copyright (c) 2026 Briyan Hingrajiya。

## asciicn
- 站点：https://asciicn.dev
- 仓库：https://github.com/opencoredev/asciicn
- 许可：MIT
- 许可原文：https://github.com/opencoredev/asciicn/blob/main/LICENSE
- 作者：Leo；LICENSE 同时保留 Shadcn Labs (startercn)
- 收录：lib/ascii、skills/asciicn，以及 components/asciicn 的免费示例和绘制背景。
- 未收录：没有 Pro 分区。站点外壳未收录。
- 依据：LICENSE 为 MIT，Copyright (c) 2026 Leo 与 Copyright (c) 2026 Shadcn Labs (startercn)。
"""
    text = NOTICES.read_text()
    if "## Furin" not in text:
        NOTICES.write_text(text.rstrip() + "\n" + notice)
    from collections import Counter
    print("added", len(added), "total", len(items))
    print(Counter(row["sourceId"] for row in added))


if __name__ == "__main__":
    main()
