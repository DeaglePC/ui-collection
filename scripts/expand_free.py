# -*- coding: utf-8 -*-
"""Add every remaining clearly MIT/free component, plus the free Shaders library."""
from __future__ import annotations

import json, re, shutil, urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path("/workspace")
ITEMS = ROOT / "src/data/items.json"
SOURCES = ROOT / "src/data/sources.json"
PREVIEWS = ROOT / "public/previews"
NOTICES = ROOT / "THIRD_PARTY_NOTICES.md"
LICENSES = ROOT / "LICENSES"

items = json.loads(ITEMS.read_text())
sources = json.loads(SOURCES.read_text())
existing = {item["id"] for item in items}
added: dict[str, int] = {}
skipped: list[str] = []

def slug(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")

def add(item: dict) -> None:
    if item["id"] in existing:
        return
    existing.add(item["id"])
    items.append(item)
    added[item["sourceId"]] = added.get(item["sourceId"], 0) + 1

def clip(text: str, limit: int = 120_000) -> str:
    if len(text) <= limit:
        return text
    return text[:limit] + "\n/* …源集截断了过长的文件，完整内容见原仓库… */\n"

GLOSSARY = {
    "button": "按钮", "card": "卡片", "text": "文字", "input": "输入", "modal": "弹窗",
    "nav": "导航", "menu": "菜单", "loader": "加载", "spinner": "加载", "scroll": "滚动",
    "header": "顶栏", "footer": "页脚", "toggle": "开关", "switch": "开关", "slider": "滑块",
    "tabs": "标签", "tab": "标签", "toast": "提示", "badge": "徽章", "avatar": "头像",
    "chart": "图表", "table": "表格", "list": "列表", "grid": "网格", "form": "表单",
    "search": "搜索", "player": "播放器", "music": "音乐", "video": "视频", "image": "图片",
    "photo": "图片", "icon": "图标", "tooltip": "提示", "popover": "浮层", "dialog": "对话框",
    "drawer": "抽屉", "sidebar": "侧栏", "hero": "首屏", "banner": "横幅", "pricing": "价格",
    "login": "登录", "signup": "注册", "chat": "聊天", "message": "消息", "notification": "通知",
    "progress": "进度", "skeleton": "骨架", "accordion": "手风琴", "carousel": "轮播",
    "marquee": "跑马灯", "cursor": "指针", "hover": "悬停", "glow": "发光", "glass": "玻璃",
    "blur": "模糊", "gradient": "渐变", "particle": "粒子", "shader": "着色器", "orb": "光球",
    "wave": "波浪", "noise": "噪声", "gridlines": "网格", "clock": "时钟", "timer": "计时",
    "calendar": "日历", "map": "地图", "code": "代码", "terminal": "终端", "command": "命令",
    "palette": "面板", "send": "发送", "paper": "纸", "plane": "飞机", "fold": "折叠",
    "receipt": "收据", "compare": "对比", "typewriter": "打字机", "particle": "粒子",
}

def zh_slug(stem: str) -> str:
    words = [w for w in re.split(r"[-_]+", stem.lower()) if w and not w.isdigit()]
    parts = [GLOSSARY.get(w, "") for w in words]
    if parts and sum(bool(p) for p in parts) >= max(1, len(parts) // 2):
        return "".join(p or w for p, w in zip(parts, words))
    return ""

def lucian():
    root = Path("/tmp/sources/lucian")
    tokens = (root / "src/tokens.css").read_text(encoding="utf-8", errors="replace")
    elements = sorted((root / "src/elements").glob("*.html"))
    for path in elements:
        num = path.name.split("-")[0]
        item_id = f"lucian-{num}"
        if item_id in existing:
            continue
        raw = path.read_text(encoding="utf-8", errors="replace")
        title = re.search(r'<!-- @en \{"title":"([^"]+)"', raw)
        name = title.group(1) if title else path.stem[4:].replace("-", " ").title()
        name_zh = zh_slug(path.stem[4:]) or name
        preview_name = f"lucian-{num}.html"
        wrapped = (
            "<!DOCTYPE html>\n<html lang=\"zh-CN\" data-theme=\"dark\">\n<head>\n"
            "<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n"
            f"<title>{name} · Lucian</title>\n"
            "<!-- Lucian UX/UI Prompt · MIT License (c) 2026 Seokwoooo · https://lucianlabs.dev/uxui-prompt/ -->\n"
            f"<style>\n{tokens}\nhtml,body{{margin:0;min-height:100%;background:var(--ux-page);}}\n"
            "body{display:grid;place-items:center;padding:28px 16px;}\n</style>\n</head>\n<body class=\"ux\">\n"
            f"{raw}\n<script src=\"./_fit.js\"></script>\n</body>\n</html>\n"
        )
        (PREVIEWS / preview_name).write_text(wrapped, encoding="utf-8")
        add({
            "id": item_id,
            "name": name,
            "nameZh": name_zh,
            "sourceId": "lucian",
            "sourceName": "Lucian UX/UI Prompt",
            "sourceUrl": "https://lucianlabs.dev/en/uxui-prompt/",
            "originalUrl": f"https://lucianlabs.dev/en/uxui-prompt/#{num}",
            "author": "Seokwoooo",
            "repo": "https://github.com/Seokwoooo/lucian-uxui-prompt",
            "license": "MIT",
            "licenseUrl": "https://github.com/Seokwoooo/lucian-uxui-prompt/blob/main/LICENSE",
            "copyright": "Copyright (c) 2026 Seokwoooo",
            "category": "卡片",
            "tags": ["Lucian", "HTML", "MIT"],
            "description": f"Lucian 仓库中的 MIT 元素「{name}」。源码可复制，卡片里是独立预览。",
            "kind": "code",
            "preview": "iframe",
            "iframeSrc": f"./previews/{preview_name}",
            "reactPreview": "",
            "iframeHeight": 460,
            "files": [{"path": path.name, "language": "html", "content": clip(raw)}],
            "prompt": "把这段 Lucian MIT HTML 移植到项目中，保留文件顶部的许可证注释，并把示例文案换成真实数据。",
            "install": "",
            "notice": "原仓库 400 个元素均为 MIT。本站按文件收录，并保留许可证注释。",
        })

def radiant():
    for path in sorted(Path("/workspace/radiant/static").glob("*.html")):
        item_id = f"radiant-{slug(path.stem)}"
        if item_id in existing:
            continue
        raw = path.read_text(encoding="utf-8", errors="replace")
        if "</body>" in raw.lower() and "_fit.js" not in raw:
            raw = re.sub(r"</body>", '<script src="./_fit.js"></script></body>', raw, count=1, flags=re.I)
        (PREVIEWS / f"{item_id}.html").write_text(raw, encoding="utf-8")
        title = re.search(r"<title>([^<]+)</title>", raw, re.I)
        name = (title.group(1).split("·")[0].strip() if title else path.stem.replace("-", " ").title())
        add({
            "id": item_id,
            "name": name,
            "nameZh": zh_slug(path.stem) or name,
            "sourceId": "radiant",
            "sourceName": "Radiant",
            "sourceUrl": "https://www.radiant-shaders.com/",
            "originalUrl": f"https://github.com/pbakaus/radiant/blob/main/static/{path.name}",
            "author": "Paul Bakaus",
            "repo": "https://github.com/pbakaus/radiant",
            "license": "MIT",
            "licenseUrl": "https://github.com/pbakaus/radiant/blob/main/LICENSE",
            "copyright": "Copyright (c) 2025 Paul Bakaus",
            "category": "着色器/WebGPU",
            "tags": ["Radiant", "着色器", "MIT"],
            "description": f"Radiant 仓库里的 MIT 着色器「{name}」。卡片预览是独立页面；不支持对应图形接口时仍可复制源码。",
            "kind": "code",
            "preview": "iframe",
            "iframeSrc": f"./previews/{item_id}.html",
            "reactPreview": "",
            "iframeHeight": 440,
            "files": [{"path": path.name, "language": "html", "content": clip(path.read_text(encoding='utf-8', errors='replace'))}],
            "prompt": "",
            "install": "",
            "notice": "整库 MIT。Pro 内容不在这个仓库的独立 HTML 里。",
            "heavy": True,
        })

def mekai():
    for path in sorted(Path("/workspace/mekai/components/ui").glob("*.tsx")):
        item_id = f"mekai-{slug(path.stem)}"
        if item_id in existing:
            continue
        raw = path.read_text(encoding="utf-8", errors="replace")
        name = path.stem.replace("-", " ").title()
        add({
            "id": item_id,
            "name": name,
            "nameZh": zh_slug(path.stem) or name,
            "sourceId": "mekai",
            "sourceName": "Mekai UI",
            "sourceUrl": "https://ui.mekaigames.com/",
            "originalUrl": f"https://github.com/mekai-ui/mekai-ui/blob/main/components/ui/{path.name}",
            "author": "Mekai Games",
            "repo": "https://github.com/mekai-ui/mekai-ui",
            "license": "MIT",
            "licenseUrl": "https://github.com/mekai-ui/mekai-ui/blob/main/LICENSE",
            "copyright": "Copyright (c) 2026 Mekai Games",
            "category": "卡片",
            "tags": ["Mekai", "React", "MIT"],
            "description": f"Mekai UI 免费仓库中的「{name}」。公开仓库里的组件按 MIT 收录；付费组件不在该仓库，没有复制。",
            "kind": "code",
            "preview": "code",
            "iframeSrc": "",
            "reactPreview": "",
            "iframeHeight": 220,
            "files": [{"path": path.name, "language": "tsx", "content": clip(raw)}],
            "prompt": "",
            "install": "",
            "notice": "依赖 Mekai 自己的主题与工具。卡片给出源码，不把整个设计系统打进首页。",
        })

def voice():
    root = Path("/workspace/voiceorbs/src/registry/orbe")
    for folder in sorted(p for p in root.iterdir() if p.is_dir()):
        item_id = f"voiceorbs-{slug(folder.name)}"
        if item_id in existing:
            continue
        files = []
        for path in sorted(folder.glob("*")):
            if path.suffix.lower() not in {".tsx", ".ts", ".css"}:
                continue
            files.append({"path": f"{folder.name}/{path.name}", "language": path.suffix.lstrip("."), "content": clip(path.read_text(encoding="utf-8", errors="replace"), 80_000)})
        if not files:
            skipped.append(f"voiceorbs:{folder.name} 没有可复制源码")
            continue
        name = folder.name.replace("-", " ").title()
        add({
            "id": item_id,
            "name": name,
            "nameZh": zh_slug(folder.name) or name,
            "sourceId": "voiceorbs",
            "sourceName": "VoiceOrbs",
            "sourceUrl": "https://voiceorbs.vercel.app/",
            "originalUrl": f"https://github.com/amunozdev/voiceorbs/tree/main/src/registry/orbe/{folder.name}",
            "author": "Alexis Munoz",
            "repo": "https://github.com/amunozdev/voiceorbs",
            "license": "MIT",
            "licenseUrl": "https://github.com/amunozdev/voiceorbs/blob/main/LICENSE",
            "copyright": "Copyright (c) 2026 Alexis Munoz",
            "category": "语音/光球",
            "tags": ["VoiceOrbs", "MIT"],
            "description": f"VoiceOrbs 的「{name}」。其余光球同样是 MIT；需要 Three 或外部着色器的没有再做实时预览，避免把重依赖打进每一张卡片。",
            "kind": "code",
            "preview": "code",
            "iframeSrc": "",
            "reactPreview": "",
            "iframeHeight": 220,
            "files": files[:4],
            "prompt": "",
            "install": "",
            "notice": "MIT。实时预览仍只覆盖原先 6 个纯 CSS 光球。",
        })

def cue():
    root = Path("/workspace/cue/components/foundations")
    for path in sorted(root.iterdir()):
        if path.suffix.lower() not in {".tsx", ".html"}:
            continue
        item_id = f"cue-{slug(path.stem)}"
        if item_id in existing:
            continue
        raw = path.read_text(encoding="utf-8", errors="replace")
        name = path.stem.replace("-", " ").title()
        if path.suffix.lower() == ".html":
            if "_fit.js" not in raw and "</body>" in raw.lower():
                raw_preview = re.sub(r"</body>", '<script src="./_fit.js"></script></body>', raw, count=1, flags=re.I)
            else:
                raw_preview = raw
            (PREVIEWS / f"{item_id}.html").write_text(raw_preview, encoding="utf-8")
            preview, iframe = "iframe", f"./previews/{item_id}.html"
        else:
            preview, iframe = "code", ""
        add({
            "id": item_id,
            "name": name,
            "nameZh": zh_slug(path.stem) or name,
            "sourceId": "cuekit",
            "sourceName": "Cue Kit",
            "sourceUrl": "https://kit.cuedesign.space/",
            "originalUrl": f"https://github.com/aloksivastava1025-prog/cue-foundations/blob/main/components/foundations/{path.name}",
            "author": "Alok Srivastava",
            "repo": "https://github.com/aloksivastava1025-prog/cue-foundations",
            "license": "MIT",
            "licenseUrl": "https://github.com/aloksivastava1025-prog/cue-foundations/blob/main/LICENSE",
            "copyright": "Copyright (c) 2026 Alok Srivastava (Cue)",
            "category": "卡片",
            "tags": ["Cue Kit", "MIT"],
            "description": f"Cue Kit（cue-foundations，MIT）中的「{name}」。Cue+ 付费组件不在这个仓库，没有收录。",
            "kind": "code",
            "preview": preview,
            "iframeSrc": iframe,
            "reactPreview": "",
            "iframeHeight": 440,
            "files": [{"path": path.name, "language": path.suffix.lstrip("."), "content": clip(raw)}],
            "prompt": "",
            "install": "",
            "notice": "仓库 LICENSE 为 MIT。",
        })

def ndeko():
    root = Path("/workspace/ndekoui/components/core")
    for path in sorted(root.rglob("*.tsx")):
        item_id = f"ndekoui-{slug(path.stem)}"
        if item_id in existing:
            continue
        raw = path.read_text(encoding="utf-8", errors="replace")
        name = path.stem.replace("-", " ").title()
        rel = path.relative_to(Path("/workspace/ndekoui"))
        add({
            "id": item_id,
            "name": name,
            "nameZh": zh_slug(path.stem) or name,
            "sourceId": "ndekoui",
            "sourceName": "ndekoui",
            "sourceUrl": "https://ui.ndekocode.dev/",
            "originalUrl": f"https://github.com/NdekoCode/ndekoui/blob/main/{rel.as_posix()}",
            "author": "ndekocode",
            "repo": "https://github.com/NdekoCode/ndekoui",
            "license": "MIT",
            "licenseUrl": "https://github.com/NdekoCode/ndekoui/blob/main/LICENCE.md",
            "copyright": "Copyright (c) 2024-present ndekocode",
            "category": "AI 界面组件",
            "tags": ["ndekoui", "MIT"],
            "description": f"ndekoui 核心组件「{name}」。仓库为 MIT。网站外壳和图标没有当作组件收录。",
            "kind": "code",
            "preview": "code",
            "iframeSrc": "",
            "reactPreview": "",
            "iframeHeight": 220,
            "files": [{"path": path.name, "language": "tsx", "content": clip(raw)}],
            "prompt": "",
            "install": "",
            "notice": "依赖该库自己的设计系统，卡片提供源码而不是再嵌一套运行时。",
        })

def libraries():
    extra = {
        "voice-ring": "语音环",
        "magnetkit-web": "磁力套件",
    }
    for name, zh in extra.items():
        folder = Path("/workspace/libraries/packages") / name
        readme = folder / "README.md"
        if not readme.exists():
            skipped.append(f"libraries:{name} 没有 README")
            continue
        text = readme.read_text(encoding="utf-8", errors="replace")
        item_id = f"libraries-{slug(name)}"
        if item_id in existing:
            continue
        add({
            "id": item_id,
            "name": name,
            "nameZh": zh,
            "sourceId": "libraries",
            "sourceName": "Libraries.dev",
            "sourceUrl": "https://libraries.dev/",
            "originalUrl": f"https://github.com/Jakubantalik/Libraries.dev/tree/main/packages/{name}",
            "author": "Jakub Antalik",
            "repo": "https://github.com/Jakubantalik/Libraries.dev",
            "license": "MIT",
            "licenseUrl": "https://github.com/Jakubantalik/Libraries.dev/blob/main/LICENSE",
            "copyright": "Copyright (c) 2026 Jakub Antalik",
            "category": "语音/光球" if "voice" in name else "卡片",
            "tags": ["Libraries.dev", "MIT"],
            "description": f"Libraries.dev 的 MIT 包「{name}」。Pro Studio、Pro 预设和模型许可证下的文件没有收录。",
            "kind": "code",
            "preview": "code",
            "iframeSrc": "",
            "reactPreview": "",
            "iframeHeight": 220,
            "files": [{"path": "README.md", "language": "md", "content": clip(text, 40_000)}],
            "prompt": "",
            "install": f"npm install {name}",
            "notice": "包代码为 MIT。这里收录用法说明，不复制 Pro 内容。",
        })
    skipped.append("libraries:distortion-waves 是 Swift 包，没有 Web 组件预览，未把它的模型或原生源码搬进站点")

def fetch_crucible(name: str) -> dict | None:
    url = f"https://crucibleui.com/r/{name}.json"
    try:
        with urllib.request.urlopen(url, timeout=30) as response:
            return json.loads(response.read().decode("utf-8", "replace"))
    except Exception as error:
        skipped.append(f"crucible:{name} 拉取失败 {error}")
        return None

def crucible():
    registry = json.load(open("/tmp/crucible-reg.json"))
    free = [item["name"] for item in registry["items"] if (item.get("meta") or {}).get("tier") == "free"]
    meta = {item["name"]: item for item in registry["items"]}
    with ThreadPoolExecutor(max_workers=8) as pool:
        futures = {pool.submit(fetch_crucible, name): name for name in free}
        for future in as_completed(futures):
            name = futures[future]
            data = future.result()
            if not data:
                continue
            item_id = f"crucible-{slug(name)}"
            if item_id in existing:
                continue
            files = []
            for file in data.get("files") or []:
                content = file.get("content") or ""
                if not content:
                    continue
                files.append({
                    "path": file.get("path") or f"{name}.tsx",
                    "language": "tsx",
                    "content": clip(content),
                })
            if not files:
                skipped.append(f"crucible:{name} 没有可复制文件")
                continue
            info = meta.get(name, {})
            title = info.get("title") or name
            add({
                "id": item_id,
                "name": title,
                "nameZh": zh_slug(name) or title,
                "sourceId": "crucible",
                "sourceName": "Crucible",
                "sourceUrl": "https://crucibleui.com/",
                "originalUrl": f"https://crucibleui.com/r/{name}",
                "author": "Crucible",
                "repo": "",
                "license": "MIT",
                "licenseUrl": "https://crucibleui.com/license",
                "copyright": "Copyright (c) 2026 Crucible (crucibleui.com)",
                "category": "卡片",
                "tags": ["Crucible", "MIT", "免费"],
                "description": (info.get("description") or f"Crucible 免费组件 {title}。")[:280],
                "kind": "code",
                "preview": "code",
                "iframeSrc": "",
                "reactPreview": "",
                "iframeHeight": 220,
                "files": files[:3],
                "prompt": "",
                "install": f"npx shadcn@latest add https://crucibleui.com/r/{name}.json",
                "notice": "只收录注册表中 tier=free 的组件。Pro 源码官方不公开，没有收录。",
            })

def shaders():
    text = urllib.request.urlopen("https://shaders.com/llms-full.txt", timeout=60).read().decode("utf-8", "replace")
    category = "着色器/WebGPU"
    names = []
    for line in text.splitlines():
        if line.startswith("## Category:"):
            category = "着色器/WebGPU"
        elif line.startswith("### ") and not line.startswith("### "):
            pass
        if line.startswith("### ") and " " not in line[4:].strip():
            names.append(line[4:].strip())
    # headings like "### AngularBlur" have no space; "### Hierarchical Composition" has spaces
    names = []
    for line in text.splitlines():
        if line.startswith("### "):
            title = line[4:].strip()
            if re.fullmatch(r"[A-Za-z][A-Za-z0-9]+", title):
                names.append(title)
    seen = set()
    for name in names:
        if name in seen:
            continue
        seen.add(name)
        item_id = f"shaders-{slug(name)}"
        snippet = (
            "import { Shader, " + name + " } from 'shaders/react'\n\n"
            "export function Preview() {\n"
            "  return (\n"
            "    <Shader className=\"h-64 w-full\">\n"
            f"      <{name} />\n"
            "    </Shader>\n"
            "  )\n"
            "}\n"
        )
        vanilla = (
            "import { createShader } from 'shaders/js'\n\n"
            "await createShader(document.getElementById('root'), {\n"
            f"  components: [{{ type: '{name}' }}],\n"
            "})\n"
        )
        add({
            "id": item_id,
            "name": name,
            "nameZh": f"{name} 着色器",
            "sourceId": "shaders",
            "sourceName": "Shaders",
            "sourceUrl": "https://shaders.com/",
            "originalUrl": "https://shaders.com/docs/components",
            "author": "Shaders",
            "repo": "https://www.npmjs.com/package/shaders",
            "license": "MIT",
            "licenseUrl": "https://www.npmjs.com/package/shaders",
            "copyright": "Copyright Shaders (shaders.com)",
            "category": "着色器/WebGPU",
            "tags": ["Shaders", "WebGPU", "MIT"],
            "description": f"Shaders 免费 npm 包中的 {name}。用 WebGPU 渲染；浏览器没有 WebGPU 时预览会说明原因，源码仍可复制。Pro 着色器不在这个包里，没有收录。",
            "kind": "code",
            "preview": "iframe",
            "iframeSrc": f"./previews/shader-stage.html?name={name}",
            "reactPreview": "",
            "iframeHeight": 420,
            "files": [
                {"path": f"{name}.tsx", "language": "tsx", "content": snippet},
                {"path": f"{name}.js", "language": "javascript", "content": vanilla},
            ],
            "prompt": "",
            "install": "npm install shaders",
            "notice": "MIT 包 shaders@4.0.7。预览使用官方 vanilla bundle。不支持 WebGPU 时显示说明。",
            "heavy": True,
        })
    return len(seen)

def mark_heavy():
    for item in items:
        if item.get("sourceId") in {"radiant", "shaders"}:
            item["heavy"] = True

def update_sources(shader_count: int):
    notes = {
        "lucian": ("Lucian 仓库中全部 MIT HTML 元素（约 400 个），含独立预览和可复制源码。", "没有跳过 MIT 元素。"),
        "radiant": ("static/ 下全部独立 HTML 着色器，含已有的 8 个。", "教程分步页（learn/）不是独立组件，没有逐页搬入。"),
        "foundry44": ("全部 9 个免费 MIT 组件。", "Pro 组件禁止再分发，没有收录。"),
        "cuekit": ("cue-foundations 里 foundations 目录的 HTML 与 TSX。", "Cue+ 付费组件不在该仓库。"),
        "voiceorbs": ("registry/orbe 下全部光球源码。原先 6 个纯 CSS 光球保留实时预览。", "依赖 Three / 外部着色器的光球只提供源码，避免每张卡片再开一个 WebGL 上下文。"),
        "mekai": ("公开仓库 components/ui 的全部免费组件源码。原先 13 个保留实时预览。", "付费组件不在公开仓库。新增项以源码卡片呈现。"),
        "libraries": ("原先 7 个 npm 库的实时预览，加上 voice-ring 与 magnetkit-web 的 MIT 说明。", "Pro Studio、Pro 预设、模型许可证文件，以及 Swift 的 distortion-waves。"),
        "crucible": ("注册表里 tier=free 且能拉到源码的组件。", "Pro 组件。拉取失败的免费项记在构建日志里。"),
        "ndekoui": ("components/core 下的 TSX。", "网站外壳、图标和文档页。"),
        "uibrik": ("仅链接。", "许可不是标准开源，不复制代码。"),
        "ditherui": ("仅链接。", "没有标准开源许可。"),
        "motionprompts": ("仅链接。", "条款禁止再发布。"),
        "scrolltide": ("仅链接。", "条款禁止再分发模板。"),
    }
    for source in sources:
        pair = notes.get(source["id"])
        if pair:
            source["included"], source["excluded"] = pair
    sources.append({
        "id": "shaders",
        "name": "Shaders",
        "url": "https://shaders.com/",
        "repo": "https://www.npmjs.com/package/shaders",
        "license": "MIT",
        "licenseUrl": "https://www.npmjs.com/package/shaders",
        "author": "Shaders",
        "included": f"npm 包 shaders 中的 {shader_count} 个免费 WebGPU 组件，带实时预览（不支持 WebGPU 时显示说明）和可复制的 React / vanilla 用法。",
        "excluded": "Shaders Pro 的付费着色器、可视化编辑器导出和 MCP。它们不在免费包里。",
        "why": "npm 包 shaders@4.0.7 的 license 字段为 MIT。llms-full.txt 列出的是免费组件目录。",
    })

def write_notices():
    lines = [
        "# Third-Party Notices",
        "",
        "本仓库（源集）收录的第三方内容按其原许可证使用，版权归原作者。",
        "付费 / Pro 内容没有收录。许可不清晰的只保留链接卡片。",
        "",
    ]
    for source in sources:
        lines += [
            f"## {source['name']}",
            f"- 站点：{source['url']}",
            f"- 仓库：{source.get('repo') or '（无公开仓库或未使用）'}",
            f"- 许可：{source['license']}",
            f"- 许可原文：{source.get('licenseUrl') or ''}",
            f"- 作者：{source.get('author') or ''}",
            f"- 收录：{source.get('included') or ''}",
            f"- 未收录：{source.get('excluded') or ''}",
            f"- 依据：{source.get('why') or ''}",
            "",
        ]
    NOTICES.write_text("\n".join(lines), encoding="utf-8")

def main():
    shutil.copy("/tmp/shaders-bundle.js", ROOT / "public/vendor/shaders/bundle.js")
    lic = urllib.request.urlopen("https://cdn.jsdelivr.net/npm/shaders@4.0.7/LICENSE", timeout=30).read().decode()
    (LICENSES / "Shaders-MIT.txt").write_text(lic, encoding="utf-8")
    before = len(items)
    lucian()
    radiant()
    mekai()
    voice()
    cue()
    ndeko()
    libraries()
    crucible()
    count = shaders()
    mark_heavy()
    update_sources(count)
    ITEMS.write_text(json.dumps(items, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    SOURCES.write_text(json.dumps(sources, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    write_notices()
    print("before", before, "after", len(items), "added", added)
    print("skipped", len(skipped))
    for line in skipped:
        print(" -", line)

if __name__ == "__main__":
    main()
