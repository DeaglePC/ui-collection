# -*- coding: utf-8 -*-
"""Add Clayzo (link only), Republic UI, and the free half of Arc UI."""
from __future__ import annotations

import json
import shutil
import urllib.request
from pathlib import Path

ROOT = Path("/agent/repos/ui-collection")
SRC = Path("/tmp/ui-src")
ITEMS = ROOT / "src/data/items.json"
SOURCES = ROOT / "src/data/sources.json"
NOTICES = ROOT / "THIRD_PARTY_NOTICES.md"


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def code_file(path: str, content: str) -> dict:
    lang = "tsx" if path.endswith(".tsx") else "typescript" if path.endswith(".ts") else "css" if path.endswith(".css") else "markdown" if path.endswith(".md") else "text"
    return {"path": path, "language": lang, "content": content}


def banner(title: str, copy: str, page: str, repo: str) -> str:
    return f"/**\n * {title}\n * MIT License · {copy}\n * {page}\n * {repo}\n */\n"


def entry(**kw) -> dict:
    return {
        "id": kw["item_id"],
        "name": kw["name"],
        "nameZh": kw["name_zh"],
        "sourceId": kw["source_id"],
        "sourceName": kw["source_name"],
        "sourceUrl": kw["source_url"],
        "originalUrl": kw["original_url"],
        "author": kw["author"],
        "repo": kw["repo"],
        "license": kw.get("license", "MIT"),
        "licenseUrl": kw["license_url"],
        "copyright": kw.get("copyright", ""),
        "category": kw["category"],
        "tags": kw["tags"],
        "description": kw["description"][:420],
        "kind": kw.get("kind", "code"),
        "preview": kw.get("preview", "code"),
        "iframeSrc": "",
        "reactPreview": "",
        "iframeHeight": kw.get("height", 560),
        "files": kw.get("files", []),
        "prompt": "",
        "install": kw.get("install", ""),
        "notice": kw["notice"],
    }


def guess(slug: str, fallback: str = "卡片") -> str:
    name = slug.lower()
    if any(k in name for k in ("button", "toggle", "switch", "checkbox")):
        return "按钮"
    if any(k in name for k in ("input", "field", "select", "form", "slider", "picker", "upload", "otp", "search")):
        return "表单"
    if any(k in name for k in ("nav", "menu", "tab", "breadcrumb", "dialog", "drawer", "popover", "tooltip", "accordion", "sidebar", "command", "header")):
        return "导航"
    if any(k in name for k in ("text", "type", "headline", "title", "word", "number")):
        return "文字动效"
    if any(k in name for k in ("loader", "spinner", "skeleton", "progress", "toast")):
        return "加载动画"
    if any(k in name for k in ("chart", "meter", "graph", "table", "stat")):
        return "数据图表"
    if any(k in name for k in ("scroll", "marquee", "reel", "gallery", "parallax")):
        return "滚动动效"
    if any(k in name for k in ("hero", "background", "shader", "grid")):
        return "背景/Shader"
    return fallback


ARC_CAT = {
    "Actions": "按钮",
    "Inputs": "表单",
    "Data": "数据图表",
    "Disclosure": "导航",
    "Feedback": "加载动画",
    "Text": "文字动效",
    "Special": "卡片",
}


def fetch_json(url: str) -> dict:
    req = urllib.request.Request(url, headers={"User-Agent": "ui-collection"})
    with urllib.request.urlopen(req, timeout=40) as response:
        return json.loads(response.read().decode("utf-8", "replace"))


def fetch_text(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "ui-collection"})
    with urllib.request.urlopen(req, timeout=40) as response:
        return response.read().decode("utf-8", "replace")


def clayzo() -> dict:
    return entry(
        item_id="clayzo",
        name="Clayzo",
        name_zh="Clayzo",
        source_id="clayzo",
        source_name="Clayzo",
        source_url="https://www.clayzo.com/",
        original_url="https://docs.clayzo.com/",
        author="Clayzo Labs",
        repo="",
        license="未确认可再分发",
        license_url="https://docs.clayzo.com/",
        copyright="",
        category="背景/Shader",
        tags=["Clayzo", "仅链接"],
        description="站点写自己的网站和应用可以免费使用，但为别人生成输出的产品需要另谈许可（team@clayzo.com）。预览、渲染、打包和导出还要登录。",
        kind="link",
        preview="none",
        files=[],
        install="",
        notice="仅链接，未确认可再分发。本站没有复制引擎、包源码、预览或导出。作者 Clayzo Labs。站点 https://www.clayzo.com/ 。文档 https://docs.clayzo.com/ 。",
    )


def republic_items() -> list[dict]:
    root = SRC / "republic-ui"
    author = "Republic Marketing"
    copy = "Copyright (c) 2026 Republic Marketing"
    repo = "https://github.com/rm-sjent/republic-ui"
    lic = "https://github.com/rm-sjent/republic-ui/blob/main/LICENSE"
    site = "https://www.republicmarketing.co.uk/ui/"
    rows = []
    for path in sorted((root / "registry/republic").glob("*.tsx")):
        slug = path.stem
        page = f"https://www.republicmarketing.co.uk/ui/{slug}"
        rows.append(entry(
            item_id=f"republic-{slug}",
            name=slug.replace("-", " ").title(),
            name_zh=slug.replace("-", " ").title(),
            source_id="republic",
            source_name="Republic UI",
            source_url=site,
            original_url=page,
            author=author,
            repo=repo,
            license_url=lic,
            copyright=copy,
            category={
                "slat-shutter-hero": "背景/Shader",
                "photo-deck": "卡片",
                "timeline-scrubber": "数据图表",
                "testimonial-reel": "滚动动效",
                "morph-island": "导航",
                "facts-hero": "卡片",
                "fan-gallery": "滚动动效",
                "feature-ui-row": "卡片",
                "bento-mini-ui": "卡片",
                "torn-portrait-scroll": "滚动动效",
                "scroll-fill-headline": "文字动效",
                "sector-wheel": "数据图表",
                "scattered-about": "卡片",
            }.get(slug, guess(slug, "卡片")),
            tags=["Republic UI", "MIT", slug],
            description=f"Republic UI「{slug}」。MIT 组件，演示照片在 public/republic/。",
            files=[code_file(f"components/{path.name}", banner(f"Republic UI · {slug}", copy, page, repo) + read(path))],
            install=f"npx shadcn@latest add @republic/{slug}",
            notice=f"MIT，{copy}。作者 {author}。原页 {page}。仓库 {repo}。安装前把 @republic 注册为 https://www.republicmarketing.co.uk/ui/r/{{name}}.json。演示图在本站 public/republic/。",
            height=640,
        ))
    data = read(root / "src/demos/data.ts")
    rows.append(entry(
        item_id="republic-demo-data",
        name="Republic demo data",
        name_zh="Republic 演示数据",
        source_id="republic",
        source_name="Republic UI",
        source_url=site,
        original_url=site,
        author=author,
        repo=repo,
        license_url=lic,
        copyright=copy,
        category="卡片",
        tags=["Republic UI", "MIT", "仅源码"],
        description="组件演示用的文案和图片文件名。对应照片在 public/republic/，来自仓库 public/img。",
        files=[code_file("src/demos/data.ts", banner("Republic UI demo data", copy, site, repo) + data)],
        install="仓库 src/demos/data.ts 与 public/img",
        notice=f"MIT，{copy}。作者 {author}。仓库 {repo}。",
    ))
    img = ROOT / "public/republic"
    if img.exists():
        shutil.rmtree(img)
    shutil.copytree(root / "public/img", img)
    blocks = read(root / "src/BlocksApp.tsx")
    start = blocks.find("const I =")
    end = blocks.find("export function BlocksSections")
    extra = blocks[start:end]
    extra = extra.replace("const I =", "export const I =")
    extra = extra.replace("const cities", "export const cities")
    extra = extra.replace("const sectors", "export const sectors")
    extra = extra.replace("const torn", "export const torn")
    extra = extra.replace("`${import.meta.env.BASE_URL}img/${n}`", "`./republic/${n}`")
    sample = data.replace("`${import.meta.env.BASE_URL}img/${n}`", "`./republic/${n}`") + "\n" + extra
    out = ROOT / "republic-src"
    out.mkdir(parents=True, exist_ok=True)
    (out / "samples.ts").write_text(sample)
    return rows


def arc_files_from_dir(folder: Path, prefix: str, title: str, copy: str, page: str, repo: str) -> list[dict]:
    files = []
    for path in sorted(p for p in folder.rglob("*") if p.is_file() and p.suffix in {".ts", ".tsx", ".css"}):
        rel = f"{prefix}/{path.relative_to(folder).as_posix()}"
        body = read(path)
        if path.suffix in {".ts", ".tsx"}:
            body = banner(title, copy, page, repo) + body
        files.append(code_file(rel, body))
    return files


def arc_items() -> list[dict]:
    catalog = json.loads(Path("/tmp/arc-catalog.json").read_text())
    root = SRC / "arc-library"
    author = "Elia Kuratli"
    copy = "Copyright (c) 2026 Elia Kuratli"
    repo = "https://github.com/kuratlielia/arc-library"
    lic = "https://github.com/kuratlielia/arc-library/blob/main/LICENSE"
    site = "https://uiarc.dev/"
    rows = []
    shared = []
    for path in sorted(p for p in (root / "lib").rglob("*") if p.is_file() and p.suffix in {".ts", ".tsx"}):
        rel = path.relative_to(root).as_posix()
        shared.append(code_file(rel, banner("Arc UI shared", copy, f"{site}r/arc-foundation.json", repo) + read(path)))
    motion = root / "registry/motion-tokens.ts"
    if motion.exists():
        shared.append(code_file("registry/motion-tokens.ts", read(motion)))
    rows.append(entry(
        item_id="arc-shared",
        name="Arc foundation helpers",
        name_zh="Arc 共用辅助",
        source_id="arc",
        source_name="Arc UI",
        source_url=site,
        original_url=f"{site}r/arc-foundation.json",
        author=author,
        repo=repo,
        license_url=lic,
        copyright=copy,
        category="卡片",
        tags=["Arc UI", "MIT", "仅源码"],
        description="免费组件共用的 motion tokens、provider 和媒体辅助。先安装 arc-foundation。不含 Pro。",
        files=shared,
        install="npx shadcn@latest add https://uiarc.dev/r/arc-foundation.json",
        notice=f"MIT，{copy}。作者 {author}。仓库 {repo}。",
    ))
    foundation = read(root / "registry/foundation.css")
    rows.append(entry(
        item_id="arc-foundation",
        name="Arc foundation",
        name_zh="Arc 基础样式",
        source_id="arc",
        source_name="Arc UI",
        source_url=site,
        original_url=f"{site}r/arc-foundation.json",
        author=author,
        repo=repo,
        license_url=lic,
        copyright=copy,
        category="背景/Shader",
        tags=["Arc UI", "MIT", "仅源码"],
        description="免费组件共用的 foundation.css。预览会载入它。",
        files=[code_file("foundation.css", f"/* Arc UI · MIT · {copy} · {site} · {repo} */\n{foundation}")],
        install="npx shadcn@latest add https://uiarc.dev/r/arc-foundation.json",
        notice=f"MIT，{copy}。作者 {author}。原页 {site} 。仓库 {repo}。",
    ))
    skill = fetch_text("https://uiarc.dev/r/skills/arc/SKILL.md")
    rows.append(entry(
        item_id="arc-skill",
        name="Arc skill",
        name_zh="Arc 免费技能",
        source_id="arc",
        source_name="Arc UI",
        source_url=site,
        original_url="https://uiarc.dev/r/arc-skill.json",
        author=author,
        repo=repo,
        license_url=lic,
        copyright=copy,
        category="提示词",
        tags=["Arc UI", "MIT", "仅源码"],
        description="免费技能 SKILL.md。Pro 技能没有收录。",
        files=[code_file("skills/SKILL.md", skill)],
        install="npx shadcn@latest add https://uiarc.dev/r/arc-skill.json",
        notice=f"MIT，{copy}。作者 {author}。仓库 {repo}。",
    ))
    free = [item for item in catalog["items"] if item.get("tier") == "free"]
    for info in free:
        name = info["name"]
        kind = info.get("kind") or "component"
        folder = None
        for base in ("components", "blocks"):
            candidate = root / "registry" / base / name
            if candidate.is_dir():
                folder = candidate
                prefix = f"registry/{base}/{name}"
                break
        page = info.get("docs") or f"{site}components/{name}"
        if folder:
            files = arc_files_from_dir(folder, prefix, f"Arc UI · {info.get('title') or name}", copy, page, repo)
        else:
            try:
                payload = fetch_json(f"https://uiarc.dev/r/{name}.json")
            except Exception as error:
                print("fetch fail", name, error)
                continue
            files = []
            for file in payload.get("files") or []:
                path = file.get("path") or file.get("target") or f"{name}.tsx"
                content = file.get("content") or ""
                if not content.strip():
                    continue
                if path.endswith((".ts", ".tsx")):
                    content = banner(f"Arc UI · {name}", copy, page, repo) + content
                files.append(code_file(path, content))
        if not files:
            print("no files", name)
            continue
        cat = ARC_CAT.get(info.get("category") or "", guess(name))
        if name == "slot-text":
            cat = "文字动效"
        if name == "notification-center":
            cat = "加载动画"
        rows.append(entry(
            item_id=f"arc-{name}",
            name=info.get("title") or name,
            name_zh=info.get("title") or name,
            source_id="arc",
            source_name="Arc UI",
            source_url=site,
            original_url=page,
            author=author,
            repo=repo,
            license_url=lic,
            copyright=copy,
            category=cat,
            tags=["Arc UI", "MIT", kind, name],
            description=f"Arc UI 免费{('区块' if kind == 'block' else '组件')}「{info.get('title') or name}」。{info.get('description') or ''} Pro 未收录。",
            files=files,
            install=f"npx shadcn@latest add @uiarc/{name}",
            notice=f"MIT，{copy}。作者 {author}。原页 {page}。仓库 {repo}。先安装 https://uiarc.dev/r/arc-foundation.json。",
            height=640 if kind == "block" else 520,
        ))
    return rows


def main() -> None:
    fresh = [clayzo(), *republic_items(), *arc_items()]
    items = json.loads(ITEMS.read_text())
    drop = {row["sourceId"] for row in fresh}
    items = [row for row in items if row.get("sourceId") not in drop]
    items.extend(fresh)
    sources = json.loads(SOURCES.read_text())
    known = {row["id"] for row in sources}
    additions = [
        {
            "id": "clayzo",
            "name": "Clayzo",
            "url": "https://www.clayzo.com/",
            "repo": "",
            "license": "未确认可再分发",
            "licenseUrl": "https://docs.clayzo.com/",
            "author": "Clayzo Labs",
            "included": "1 张仅链接卡片，无源码。",
            "excluded": "引擎和包源码。站点允许用在自己的网站和应用，但为别人生成输出需要另谈许可；预览、渲染、打包和导出还要登录。",
            "why": "许可边界不是标准开源，只放链接，标成未确认可再分发。",
        },
        {
            "id": "republic",
            "name": "Republic UI",
            "url": "https://www.republicmarketing.co.uk/ui/",
            "repo": "https://github.com/rm-sjent/republic-ui",
            "license": "MIT",
            "licenseUrl": "https://github.com/rm-sjent/republic-ui/blob/main/LICENSE",
            "author": "Republic Marketing",
            "included": "registry/republic 的 13 个组件，以及仓库 public/img 的演示照片。",
            "excluded": "站点外壳没有收录。",
            "why": "仓库 LICENSE 为 MIT，Copyright (c) 2026 Republic Marketing。",
        },
        {
            "id": "arc",
            "name": "Arc UI",
            "url": "https://uiarc.dev/",
            "repo": "https://github.com/kuratlielia/arc-library",
            "license": "MIT（仅免费项）",
            "licenseUrl": "https://github.com/kuratlielia/arc-library/blob/main/LICENSE",
            "author": "Elia Kuratli",
            "included": "catalog.json 里 tier=free 的组件和区块，加上 foundation 和免费技能。",
            "excluded": "Pro 组件、Pro 区块、模板和 Pro 技能。",
            "why": "仓库 LICENSE 为 MIT，Copyright (c) 2026 Elia Kuratli。免费和 Pro 的分界以 https://uiarc.dev/r/catalog.json 的 tier 为准。",
        },
    ]
    for row in additions:
        if row["id"] not in known:
            sources.append(row)
    ITEMS.write_text(json.dumps(items, ensure_ascii=False, indent=2) + "\n")
    SOURCES.write_text(json.dumps(sources, ensure_ascii=False, indent=2) + "\n")
    (ROOT / "LICENSES/Republic-UI-MIT.txt").write_text(read(SRC / "republic-ui/LICENSE"))
    (ROOT / "LICENSES/Arc-UI-MIT.txt").write_text(read(SRC / "arc-library/LICENSE"))
    notice = """
## Clayzo
- 站点：https://www.clayzo.com/
- 文档：https://docs.clayzo.com/
- 作者：Clayzo Labs
- 许可：未确认可再分发
- 收录：1 张仅链接卡片。
- 未收录：引擎和包源码。自己的网站和应用可以免费使用，但为别人生成输出需要另谈许可；预览、渲染、打包和导出还要登录。
- 依据：许可不是标准开源，只放链接。

## Republic UI
- 站点：https://www.republicmarketing.co.uk/ui/
- 仓库：https://github.com/rm-sjent/republic-ui
- 许可：MIT
- 许可原文：https://github.com/rm-sjent/republic-ui/blob/main/LICENSE
- 作者：Republic Marketing
- 收录：13 个组件和 public/img 演示照片。
- 未收录：站点外壳。
- 依据：LICENSE 为 MIT，Copyright (c) 2026 Republic Marketing。

## Arc UI
- 站点：https://uiarc.dev/
- 仓库：https://github.com/kuratlielia/arc-library
- 许可：MIT（仅免费项）
- 许可原文：https://github.com/kuratlielia/arc-library/blob/main/LICENSE
- 作者：Elia Kuratli
- 收录：catalog.json 中 tier=free 的组件和区块，以及 foundation 和免费技能。
- 未收录：Pro 组件、Pro 区块、模板和 Pro 技能。
- 依据：LICENSE 为 MIT，Copyright (c) 2026 Elia Kuratli。
"""
    text = NOTICES.read_text()
    if "## Clayzo" not in text:
        NOTICES.write_text(text.rstrip() + "\n" + notice)
    from collections import Counter
    print("added", len(fresh), "total", len(items))
    print(Counter(row["sourceId"] for row in fresh))


if __name__ == "__main__":
    main()
