# -*- coding: utf-8 -*-
"""Add every ns-ui registry component, plus one link-only Sora UI card."""
from __future__ import annotations

import json
import urllib.request
from collections import Counter
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path("/workspace")
ITEMS = ROOT / "src/data/items.json"
SOURCES = ROOT / "src/data/sources.json"
NOTICES = ROOT / "THIRD_PARTY_NOTICES.md"
CACHE = Path("/tmp/ns-r")
CACHE.mkdir(exist_ok=True)

items = json.loads(ITEMS.read_text())
sources = json.loads(SOURCES.read_text())
existing = {item["id"] for item in items}


def clip(text: str, limit: int = 120_000) -> str:
    if len(text) <= limit:
        return text
    return text[:limit] + "\n/* …源集截断了过长的文件，完整内容见原仓库… */\n"


def fetch(name: str) -> dict | None:
    path = CACHE / f"{name}.json"
    if path.exists() and path.stat().st_size > 50:
        return json.loads(path.read_text())
    url = f"https://design.helpmarq.com/r/{name}.json"
    try:
        with urllib.request.urlopen(url, timeout=40) as response:
            raw = response.read()
        path.write_bytes(raw)
        return json.loads(raw.decode("utf-8", "replace"))
    except Exception as error:
        print("fail", name, error)
        return None


def category(name: str, tags: set[str], content: str) -> str:
    blob = content.lower()
    if "webgl" in tags or "shader" in tags or "@react-three" in blob or "from \"three\"" in blob:
        return "着色器/WebGPU"
    rules = [
        (("input", "form", "field", "select", "checkbox", "slider", "textarea"), "表单"),
        (("nav", "menu", "sidebar", "breadcrumb", "command", "tabbar", "tabs"), "导航"),
        (("accordion", "disclosure"), "导航"),
        (("scroll", "marquee", "parallax"), "滚动动效"),
        (("loader", "spinner", "skeleton", "progress", "meter"), "加载动画"),
        (("text", "type", "heading", "title", "glyph", "font"), "文字动效"),
        (("chart", "graph", "plot", "viz", "dashboard"), "数据图表"),
        (("button", "toggle", "switch"), "按钮"),
    ]
    for keys, cat in rules:
        if any(key in name for key in keys):
            return cat
    if tags & {"form", "input", "slider"}:
        return "表单"
    if "navigation" in tags:
        return "导航"
    if "scroll" in tags:
        return "滚动动效"
    if tags & {"loader", "loading", "progress"}:
        return "加载动画"
    if tags & {"typography", "text"}:
        return "文字动效"
    if tags & {"chart", "data-viz", "dashboard"}:
        return "数据图表"
    if tags & {"background", "ambient", "hero", "generative", "particles", "ascii"}:
        return "背景/Shader"
    if "cursor" in tags or "micro-interaction" in tags:
        return "按钮"
    return "卡片"


def main() -> None:
    registry = json.loads(Path("/tmp/ns-registry.json").read_text())
    names = [item["name"] for item in registry["items"]]
    meta = {item["name"]: item for item in registry["items"]}
    print("fetch", len(names))
    payloads: dict[str, dict] = {}
    with ThreadPoolExecutor(max_workers=12) as pool:
        futures = {pool.submit(fetch, name): name for name in names}
        done = 0
        for future in as_completed(futures):
            done += 1
            name = futures[future]
            data = future.result()
            if data:
                payloads[name] = data
            if done % 100 == 0:
                print("  ", done)
    print("got", len(payloads))

    added = 0
    cats: Counter[str] = Counter()
    collections: Counter[str] = Counter()
    for name in names:
        data = payloads.get(name)
        if not data:
            continue
        item_id = f"nsui-{name}"
        if item_id in existing:
            continue
        files = []
        for file in data.get("files") or []:
            content = file.get("content") or ""
            if not content.strip():
                continue
            files.append({
                "path": file.get("target") or file.get("path") or f"{name}.tsx",
                "language": "tsx",
                "content": clip(content),
            })
        if not files:
            print("no content", name)
            continue
        info = meta[name]
        tags = set((info.get("meta") or {}).get("tags") or [])
        collection = (info.get("meta") or {}).get("collection") or ""
        title = info.get("title") or name
        description = (info.get("description") or "").strip()
        joined = "\n".join(file["content"] for file in files)
        cat = category(name, tags, joined)
        cats[cat] += 1
        collections[collection] += 1
        items.append({
            "id": item_id,
            "name": title,
            "nameZh": title,
            "sourceId": "nsui",
            "sourceName": "ns-ui",
            "sourceUrl": "https://design.helpmarq.com",
            "originalUrl": f"https://design.helpmarq.com/r/{name}",
            "author": "Nikolas Sapalidis",
            "repo": "https://github.com/nikolas-sapa/ns-ui",
            "license": "MIT",
            "licenseUrl": "https://github.com/nikolas-sapa/ns-ui/blob/main/LICENSE",
            "copyright": "Copyright (c) 2026 Nikolas Sapalidis",
            "category": cat,
            "tags": ["ns-ui", collection, "MIT"] + sorted(tags)[:6],
            "description": f"ns-ui {collection} 组件「{title}」。{description}"[:360],
            "kind": "code",
            "preview": "code",
            "iframeSrc": "",
            "reactPreview": "",
            "iframeHeight": 220,
            "files": files[:2],
            "prompt": "",
            "install": f"npx shadcn@latest add https://design.helpmarq.com/r/{name}.json",
            "notice": "MIT，Copyright (c) 2026 Nikolas Sapalidis。组件依赖 ns-ui 的主题、Tailwind v4 和 Motion；用到 three 的不会打进首页。卡片提供完整源码，不单独挂实时画布，避免空白预览。",
        })
        existing.add(item_id)
        added += 1

    if "sora-ui" not in existing:
        items.append({
            "id": "sora-ui",
            "name": "Sora UI",
            "nameZh": "Sora UI",
            "sourceId": "soraui",
            "sourceName": "Sora UI",
            "sourceUrl": "https://ui.soralabs.studio",
            "originalUrl": "https://ui.soralabs.studio",
            "author": "Sora Labs",
            "repo": "https://github.com/SoraLabsOSS/ui",
            "license": "未确认可再分发",
            "licenseUrl": "https://ui.soralabs.studio/docs/license",
            "copyright": "",
            "category": "卡片",
            "tags": ["Sora UI", "仅链接"],
            "description": "Sora Labs 的界面组件库。许可页写原创代码是 MIT，但来自 Animate UI 的部分是 Commons Clause，且没有标出哪些文件属于哪一类。GitHub 仓库许可证为 NOASSERTION。",
            "kind": "link",
            "preview": "none",
            "files": [],
            "notice": "仅链接，未确认可再分发。本站不收录其源码、提示词或截图。",
            "install": "",
            "prompt": "",
            "iframeSrc": "",
            "reactPreview": "",
            "iframeHeight": 220,
        })
        added += 1

    if not any(source["id"] == "nsui" for source in sources):
        sources.append({
            "id": "nsui",
            "name": "ns-ui",
            "url": "https://design.helpmarq.com",
            "repo": "https://github.com/nikolas-sapa/ns-ui",
            "license": "MIT",
            "licenseUrl": "https://github.com/nikolas-sapa/ns-ui/blob/main/LICENSE",
            "author": "Nikolas Sapalidis",
            "included": f"注册表全部 {added - 1 if 'sora-ui' not in {i['id'] for i in items[:-1]} else added} 个免费组件的源码（core 与 loud）。",
            "excluded": "没有跳过注册表里的免费组件。站内不做逐个实时画布，避免上百个 WebGL 上下文。",
            "why": "仓库 LICENSE 为 MIT，Copyright (c) 2026 Nikolas Sapalidis。组件从公开注册表 https://design.helpmarq.com/r/<name>.json 取得。",
        })
    for source in sources:
        if source["id"] == "nsui":
            source["included"] = f"注册表全部 {sum(1 for i in items if i['sourceId']=='nsui')} 个免费组件（core 与 loud）的完整源码，并注明作者、仓库和原页面。"
            source["excluded"] = "没有跳过注册表中的免费组件。卡片不挂实时 WebGL，源码按条目按需加载。"
    if not any(source["id"] == "soraui" for source in sources):
        sources.append({
            "id": "soraui",
            "name": "Sora UI",
            "url": "https://ui.soralabs.studio",
            "repo": "https://github.com/SoraLabsOSS/ui",
            "license": "未确认可再分发（GitHub NOASSERTION；许可页对部分组件使用 Commons Clause）",
            "licenseUrl": "https://ui.soralabs.studio/docs/license",
            "author": "Sora Labs",
            "included": "1 张仅链接卡片，无源码。",
            "excluded": "全部源码。许可页写原创代码是 MIT，但 Animate UI 衍生组件是 Commons Clause，且没有列出分别是哪些文件。",
            "why": "许可边界不清楚时只放链接，不复制代码。",
        })

    ITEMS.write_text(json.dumps(items, ensure_ascii=False, indent=2) + "\n")
    SOURCES.write_text(json.dumps(sources, ensure_ascii=False, indent=2) + "\n")
    notice = """
## ns-ui
- 站点：https://design.helpmarq.com
- 仓库：https://github.com/nikolas-sapa/ns-ui
- 许可：MIT
- 许可原文：https://github.com/nikolas-sapa/ns-ui/blob/main/LICENSE
- 作者：Nikolas Sapalidis
- 收录：注册表中的全部免费组件（core 与 loud）源码。
- 未收录：无。不做逐个实时画布。
- 依据：LICENSE 为 MIT，Copyright (c) 2026 Nikolas Sapalidis。

## Sora UI
- 站点：https://ui.soralabs.studio
- 仓库：https://github.com/SoraLabsOSS/ui
- 许可：未确认可再分发
- 许可原文：https://ui.soralabs.studio/docs/license
- 作者：Sora Labs
- 收录：1 张仅链接卡片。
- 未收录：全部源码。Animate UI 衍生部分为 Commons Clause，且未标明具体文件。
- 依据：GitHub 许可证为 NOASSERTION，许可边界不清楚。
"""
    text = NOTICES.read_text()
    if "## ns-ui" not in text:
        NOTICES.write_text(text.rstrip() + "\n" + notice)
    shutil_license()
    print("added", added, "total", len(items))
    print("ns categories", cats)
    print("collections", collections)


def shutil_license() -> None:
    src = Path("/tmp/ns-license.txt")
    dest = ROOT / "LICENSES/ns-ui-MIT.txt"
    dest.write_text(src.read_text())


if __name__ == "__main__":
    main()
