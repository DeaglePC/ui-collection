import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const items = JSON.parse(readFileSync(join(root, "src/data/items.json"), "utf8"));

const SOURCES = ["furin", "affect", "eased", "keyframery", "asciicn"];

function posix(path) {
  return path.split("\\").join("/");
}

function relImport(fromFile, target) {
  const fromDir = posix(dirname(fromFile));
  let rel = posix(relative(fromDir, target));
  if (!rel.startsWith(".")) rel = `./${rel}`;
  return rel;
}

function rewriteSpec(spec, fromFile, sourceId) {
  if (!spec.startsWith("@/")) return null;
  let target = spec.slice(2);
  if (sourceId === "asciicn") target = target.replace(/^components\/asciicn\//, "components/");
  return relImport(fromFile, target);
}

function rewriteAt(content, fromFile, sourceId) {
  if (sourceId !== "keyframery" && sourceId !== "asciicn") return content;
  return content.replace(
    /(from\s+|export\s+\*\s+from\s+)(["'])@\/([^"']+)\2/g,
    (all, lead, quote, spec) => {
      const next = rewriteSpec(`@/${spec}`, fromFile, sourceId);
      return next ? `${lead}${quote}${next}${quote}` : all;
    },
  );
}

function exportName(source, prefer) {
  const preferRe = prefer ? new RegExp(`\\b${prefer}\\b`) : null;
  const named = [...source.matchAll(/export\s+function\s+([A-Z][A-Za-z0-9]*)/g)].map((m) => m[1]);
  const consts = [...source.matchAll(/export\s+const\s+([A-Z][A-Za-z0-9]*)\s*=/g)]
    .map((m) => m[1])
    .filter((name) => name !== name.toUpperCase() && /[a-z]/.test(name));
  const braces = [...source.matchAll(/export\s*\{([^}]+)\}/g)].flatMap((m) =>
    m[1]
      .split(",")
      .map((part) => part.trim().split(/\s+as\s+/).pop().trim())
      .filter((name) => /^[A-Z][A-Za-z0-9]*$/.test(name) && /[a-z]/.test(name)),
  );
  const all = [...named, ...consts, ...braces];
  if (prefer) {
    const hit = all.find((name) => name.toLowerCase() === prefer.toLowerCase());
    if (hit) return hit;
    if (preferRe) {
      const loose = all.find((name) => preferRe.test(name));
      if (loose) return loose;
    }
  }
  return named[0] || consts.at(-1) || braces[0] || "";
}

function pascal(slug) {
  return slug
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function primaryFile(item) {
  const files = item.files || [];
  const tsx = files.filter((file) => /\.tsx$/.test(file.path) && !/demo|-clean|README/.test(file.path));
  return tsx[0] || files.find((file) => file.path.endsWith(".tsx"));
}

const SAMPLE = `items={[{ id: "a", label: "示例", value: "a", href: "#", name: "示例", title: "示例", text: "预览文字", status: "done", quote: "预览" }]} options={[{ label: "示例", value: "a" }]} steps={[{ id: "a", label: "一步" }]} nodes={[{ id: "a", label: "示例", children: [] }]} comments={[{ id: "a", author: "Ada", body: "预览", text: "预览" }]} notifications={[{ id: "a", title: "示例", body: "预览" }]} tips={[{ title: "示例", body: "预览" }]} logos={["甲", "乙", "丙"]} testimonials={[{ name: "Ada", quote: "预览", role: "设计" }]} links={[{ label: "示例", href: "#" }]} columns={[{ id: "a", header: "列", accessorKey: "a" }]} data={[{ a: "示例" }]} text="预览文字" value="预览" label="示例" code="const n = 1" title="标题" placeholder="输入"`;

const NEEDS_SAMPLE = new Set([
  "agent-team", "breadcrumb", "change-summary", "comment-thread", "cover-flow", "decision-inbox", "dropdown-menu",
  "logo-marquee", "notification-stack", "progress-tracker", "select", "smart-recommendation", "team-invite",
  "testimonial-wall", "text-reveal", "tips-panel", "attachment", "avatar", "cells", "code-block", "code-tabs",
  "pagination", "segmented", "snippet", "sparkline", "table", "tree", "preferences", "ascii-marquee", "ascii-tabs",
  "glitch-text", "kbd-shortcut", "scramble-text", "typewriter-text",
]);

function demoProps(slug, source) {
  const extra = [];
  if (slug === "tool-call-card") extra.push('name="search_web"', 'status="success"', 'summary="查了一下公开文档"');
  else if (slug === "thinking-loader") extra.push('label="思考"');
  else if (NEEDS_SAMPLE.has(slug)) extra.push(SAMPLE);
  else if (/status:\s*ToolCallStatus/.test(source)) extra.push('status="success"');
  else if (/\bname:\s*string/.test(source) && !/\bname\?:/.test(source)) extra.push('name="示例"');
  return extra.join(" ");
}

function stageCss(id) {
  if (id === "eased") {
    return `@import "tailwindcss" source(none);
@source "./registry";
@source "./mounts";
@import "./theme.css";

html, body, #root { margin: 0; min-height: 100%; background: var(--eased-bg, #14120f); color: var(--eased-text, #f4efe6); }
.stage { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 28px 20px; box-sizing: border-box; }
.stage-error { margin: 0; padding: 24px; font: 14px/1.5 ui-sans-serif, sans-serif; }
`;
  }
  if (id === "keyframery") {
    return `@import "tailwindcss" source(none);
@source "./components";
@source "./lib";
@source "./mounts";

:root {
  color-scheme: dark;
  --background: #0c0b09;
  --foreground: #f4efe6;
  --accent: #2a2620;
  --primary: #e08a45;
  --primary-foreground: #1a120c;
  --destructive: #e07a5f;
  --kf-speed: 1;
}
html, body, #root { margin: 0; min-height: 100%; background: var(--background); color: var(--foreground); }
.stage { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 28px 20px; box-sizing: border-box; background: var(--background); color: var(--foreground); }
.stage-error { margin: 0; padding: 24px; font: 14px/1.5 ui-sans-serif, sans-serif; }
`;
  }
  const bg = id === "furin" ? "#12141a" : id === "asciicn" ? "#07080c" : "#14120f";
  return `html, body, #root { margin: 0; min-height: 100%; background: ${bg}; color: #f4efe6; }
.stage { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 28px 20px; box-sizing: border-box; }
.stage > * { max-width: 100%; }
.stage-error { margin: 0; padding: 24px; font: 14px/1.5 ui-sans-serif, sans-serif; color: #f4efe6; }
`;
}

function stageTsx(id) {
  return `import { Component, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "./stage.css";

const loaders = import.meta.glob("./mounts/*.tsx");

class Boundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  render() {
    if (this.state.error) {
      return <p className="stage-error" data-${id}="error">这个组件没有跑起来：{this.state.error.message}</p>;
    }
    return this.props.children;
  }
}

function Missing({ name }: { name: string }) {
  return <p className="stage-error" data-${id}="error">没有找到「{name}」的预览。</p>;
}

async function boot() {
  const rootEl = document.getElementById("root");
  if (!rootEl) return;
  const name = new URLSearchParams(location.search).get("name") || "";
  const load = loaders[\`./mounts/\${name}.tsx\`];
  if (!name || !load) {
    createRoot(rootEl).render(<Missing name={name || "未命名"} />);
    return;
  }
  try {
    const mod = (await load()) as { default: () => ReactNode };
    const Mount = mod.default;
    createRoot(rootEl).render(
      <Boundary>
        <div data-${id}="ok" style={{ minHeight: "100%" }}><Mount /></div>
      </Boundary>,
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "未知错误";
    createRoot(rootEl).render(<p className="stage-error" data-${id}="error">这个组件没有跑起来：{message}</p>);
  }
}

void boot();
`;
}

function html(id) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${id}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/${id}-src/stage.tsx"></script>
  </body>
</html>
`;
}

function mountSource(item, file, name) {
  const slug = item.id.slice(item.sourceId.length + 1);
  const prefer = pascal(slug);
  const component = exportName(file.content, prefer);
  const importPath = relImport(`mounts/${slug}.tsx`, file.path.replace(/\.tsx$/, ""));
  if (!component) {
    return `export default function Mount() {
  return <p className="stage-error" data-${item.sourceId}="error">「${slug}」没有可渲染的组件导出。</p>;
}
`;
  }
  const props = item.sourceId === "affect" ? demoProps(slug, file.content) : "";
  const kids = item.sourceId === "eased" || item.sourceId === "keyframery" || /button|tabs|badge/i.test(slug) ? "预览" : "";
  return `import { ${component} } from "${importPath}";
export default function Mount() {
  return (
    <div className="stage">
      <${component}${props ? ` ${props}` : ""}>${kids}</${component}>
    </div>
  );
}
`;
}

for (const id of SOURCES) {
  const dir = join(root, `${id}-src`);
  rmSync(join(dir, "components"), { recursive: true, force: true });
  rmSync(join(dir, "mounts"), { recursive: true, force: true });
  rmSync(join(dir, "registry"), { recursive: true, force: true });
  rmSync(join(dir, "lib"), { recursive: true, force: true });
  mkdirSync(join(dir, "mounts"), { recursive: true });
  writeFileSync(join(dir, "stage.css"), stageCss(id));
  writeFileSync(join(dir, "stage.tsx"), stageTsx(id));
  writeFileSync(join(root, `${id}-stage.html`), html(id));
}

if (!readFileSync(join(root, "asciicn-src/stage.css"), "utf8").includes("stage")) {
  throw new Error("stage css missing");
}
mkdirSync(join(root, "asciicn-src/lib"), { recursive: true });
writeFileSync(
  join(root, "asciicn-src/lib/utils.ts"),
  `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
`,
);

let mounts = 0;
let filesWritten = 0;
for (const item of items) {
  if (!SOURCES.includes(item.sourceId)) continue;
  const base = join(root, `${item.sourceId}-src`);
  for (const file of item.files || []) {
    if (!file.content || file.path.startsWith("skills/")) continue;
    const dest = join(base, file.path);
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, rewriteAt(file.content, file.path, item.sourceId));
    filesWritten += 1;
  }
  if ((item.tags || []).includes("仅源码")) continue;
  const file = primaryFile(item);
  if (!file) continue;
  const slug = item.id.slice(item.sourceId.length + 1);
  writeFileSync(join(base, "mounts", `${slug}.tsx`), mountSource(item, file, slug));
  mounts += 1;
}

console.log(`stages: ${filesWritten} files, ${mounts} mounts`);
