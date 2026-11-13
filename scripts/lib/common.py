from __future__ import annotations
import json, re, shutil, textwrap
from pathlib import Path

ROOT = Path("/workspace/ui-collection")
SRC = Path("/tmp/ui-src")
PUBLIC = ROOT / "public" / "previews"
DATA = ROOT / "src" / "data"
LICENSES = ROOT / "LICENSES"
VENDOR = ROOT / "src" / "vendor"

items: list[dict] = []
sources: list[dict] = []

def read(p: Path) -> str:
    return p.read_text(encoding="utf-8", errors="replace")

def write(p: Path, s: str) -> None:
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(s, encoding="utf-8")

def add_item(**kw):
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

def add_source(**kw):
    sources.append(kw)

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
