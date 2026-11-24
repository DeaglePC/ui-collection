/**
 * Add Peel UI's 30 free MIT registry items to src/data/items.json.
 * Component files come from https://peel-ui.vercel.app/r/{slug}.json.
 * Demos, lib/utils.ts, StageControlBar, and src/index.css come from the upstream repo.
 *
 *   PEEL_SRC=/tmp/peel-ui PEEL_REGISTRY=/tmp/peel-registry node scripts/add-peel.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const peelSrc = process.env.PEEL_SRC || "/tmp/peel-ui";
const registryDir = process.env.PEEL_REGISTRY || "/tmp/peel-registry";

const AUTHOR = "Sumit Singh (@killersumit)";
const COPYRIGHT = "Copyright (c) 2026 Sumit Singh (@killersumit)";
const SITE = "https://peel-ui.vercel.app/";
const REPO = "https://github.com/Killersumit/peel-ui";
const LICENSE = "https://github.com/Killersumit/peel-ui/blob/main/LICENSE";

const CATEGORY = {
  "ai-inline-status": "AI 界面组件",
  "tactile-theme-switch": "按钮",
  "morphing-feedback": "表单",
  "interactive-file-tree": "导航",
  "tactile-3d-bar": "数据图表",
  "shortcut-teacher": "按钮",
  "slide-to-confirm": "按钮",
  "magnetic-split-button": "按钮",
  "tactile-otp-input": "表单",
  "lens-scrubber": "表单",
  "filter-chips": "表单",
  "invite-field": "表单",
  "note-button": "按钮",
  "morphing-share-island": "按钮",
  "detent-tabs": "导航",
  "layout-scrub": "卡片",
  "privacy-shutter": "表单",
  "cookie-consent": "卡片",
  "skill-pile": "卡片",
  "moire-field": "背景/Shader",
  "moire-intro": "加载动画",
  "skeleton-handoff": "加载动画",
  "release-notes": "滚动动效",
  "save-state-pill": "按钮",
  "voice-pill": "语音/光球",
  "waitlist-join": "表单",
  "next-up": "卡片",
  "roadmap-vote": "卡片",
  "notification-inbox": "导航",
  "expressive-loader": "加载动画",
};

const HEIGHT = {
  "moire-field": 780,
  "moire-intro": 860,
  "release-notes": 780,
  "layout-scrub": 760,
  "skill-pile": 720,
  "interactive-file-tree": 680,
  "skeleton-handoff": 720,
  "cookie-consent": 720,
  "notification-inbox": 640,
  "voice-pill": 720,
  "invite-field": 680,
  "next-up": 720,
  "roadmap-vote": 720,
  "waitlist-join": 680,
  "tactile-3d-bar": 640,
  "detent-tabs": 640,
  "note-button": 640,
};

function language(path) {
  if (path.endsWith(".tsx")) return "tsx";
  if (path.endsWith(".ts")) return "ts";
  if (path.endsWith(".css")) return "css";
  return "text";
}

function file(path, content) {
  return { path, language: language(path), content };
}

const utils = readFileSync(join(peelSrc, "src/lib/utils.ts"), "utf8");
const stageBar = readFileSync(join(peelSrc, "src/components/ui/StageControlBar.tsx"), "utf8");
const indexCss = readFileSync(join(peelSrc, "src/index.css"), "utf8");

const index = JSON.parse(readFileSync(join(peelSrc, "registry.json"), "utf8"));
const slugs = index.items.map((item) => item.name);
if (slugs.length !== 30) throw new Error(`expected 30 registry items, found ${slugs.length}`);

const items = [];
for (const slug of slugs) {
  const payload = JSON.parse(readFileSync(join(registryDir, `${slug}.json`), "utf8"));
  if (payload.name !== slug) throw new Error(`registry name mismatch for ${slug}`);
  const files = payload.files.map((entry) => {
    if (!entry.content) throw new Error(`${slug} file ${entry.path} has no content`);
    return file(entry.path, entry.content);
  });
  const demoPath = join(peelSrc, "src/registry/demos", `${slug}-demo.tsx`);
  let demo = "";
  try {
    demo = readFileSync(demoPath, "utf8");
  } catch {
    demo = "";
  }
  if (demo) files.push(file(`demos/${slug}-demo.tsx`, demo));
  const blob = files.map((entry) => entry.content).join("\n");
  if (blob.includes("@/lib/utils")) files.push(file("lib/utils.ts", utils));
  if (blob.includes("@/components/ui/StageControlBar")) {
    files.push(file("components/ui/StageControlBar.tsx", stageBar));
  }
  if (slug === "slide-to-confirm" || blob.includes("bevel-machined") || blob.includes("well-recessed") || blob.includes("glass-specular")) {
    if (!files.some((entry) => entry.path === "src/index.css")) files.push(file("src/index.css", indexCss));
  }
  if (!CATEGORY[slug]) throw new Error(`missing category for ${slug}`);
  const title = payload.title || slug;
  const page = `https://peel-ui.vercel.app/components/${slug}`;
  const deps = (payload.dependencies || []).join(", ");
  items.push({
    id: `peel-${slug}`,
    name: title,
    nameZh: title,
    sourceId: "peel",
    sourceName: "Peel UI",
    sourceUrl: SITE,
    originalUrl: page,
    author: AUTHOR,
    repo: REPO,
    license: "MIT",
    licenseUrl: LICENSE,
    copyright: COPYRIGHT,
    category: CATEGORY[slug],
    tags: ["Peel UI", "MIT", slug],
    description: `Peel UI「${title}」。${payload.description || ""}`.trim(),
    kind: "code",
    preview: "code",
    iframeSrc: "",
    reactPreview: "",
    iframeHeight: HEIGHT[slug] || 560,
    files,
    prompt: "",
    install: `npx shadcn@latest add @peel-ui/${slug}`,
    notice: [
      `MIT，${COPYRIGHT}。`,
      `作者 ${AUTHOR}。`,
      `原页 ${page}。`,
      `仓库 ${REPO}（源码 src/registry/primitives/${slug === "note-button" ? "note-button.tsx 与 note-button/" : slug + ".tsx"}）。`,
      `注册表 https://peel-ui.vercel.app/r/${slug}.json。`,
      `安装前把 @peel-ui 注册为 https://peel-ui.vercel.app/r/{name}.json。`,
      deps ? `上游声明的依赖：${deps}。` : "上游没有额外 npm 依赖。",
      slug === "slide-to-confirm" ? "滑块用到的 bevel-machined 类在仓库 src/index.css，已随条目附上。该样式表还包含文档站的 lenis 引入，组件本身不依赖 lenis。" : "",
      demo ? "条目里的 demos/ 是上游演示，用来给出可运行的示例数据。" : "",
    ].filter(Boolean).join(""),
  });
}

const itemsPath = join(root, "src/data/items.json");
const raw = readFileSync(itemsPath, "utf8");
const existing = JSON.parse(raw);
if (existing.some((item) => item.sourceId === "peel")) {
  throw new Error("items.json already has Peel entries; remove them before re-running");
}
const trimmed = raw.trimEnd().replace(/\]\s*$/, "").trimEnd();
const body = trimmed.endsWith(",") ? trimmed.slice(0, -1) : trimmed;
const addition = items
  .map((item) => JSON.stringify(item, null, 2).replace(/^/gm, "  "))
  .join(",\n");
writeFileSync(itemsPath, `${body},\n${addition}\n]\n`);
console.log(`peel items ${items.length}, catalog ${existing.length + items.length} (was ${existing.length})`);
const files = items.reduce((sum, item) => sum + item.files.length, 0);
console.log(`peel files ${files}`);
console.log(items.map((item) => `${item.id} ${item.category} files=${item.files.length} ${item.files.map((f) => f.path).join(", ")}`).join("\n"));
