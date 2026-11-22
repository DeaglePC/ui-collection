import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const items = JSON.parse(readFileSync(join(root, "src/data/items.json"), "utf8"));

const SOURCES = ["furin", "affect", "eased", "keyframery", "asciicn", "republic", "arc"];

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
  if (sourceId === "arc") {
    const stub = relImport(fromFile, "next-stub");
    content = content.replace(/from\s+["']next\/image["']/g, `from "${stub}"`);
    content = content.replace(/from\s+["']next\/link["']/g, `from "${stub}"`);
    content = content.replace(/from\s+(["'])(?:\.\.\/)+lib\/([^"']+)\1/g, (all, quote, spec) => {
      return `from ${quote}${relImport(fromFile, `lib/${spec}`)}${quote}`;
    });
  }
  if (sourceId !== "keyframery" && sourceId !== "asciicn" && sourceId !== "arc") return content;
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
  if (id === "republic") {
    return `@import "tailwindcss" source(none);
@source "./components";
@source "./mounts";
html, body, #root { margin: 0; min-height: 100%; background: #f6f3ee; color: #14120c; }
.stage { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 28px 20px; box-sizing: border-box; }
.stage-error { margin: 0; padding: 24px; font: 14px/1.5 ui-sans-serif, sans-serif; }
`;
  }
  if (id === "arc") {
    return `@import "tailwindcss" source(none);
@source "./registry";
@source "./lib";
@source "./mounts";
@import "./foundation.css";
html, body, #root { margin: 0; min-height: 100%; background: var(--background, #fff); color: var(--foreground, #161616); }
.stage { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 28px 20px; box-sizing: border-box; }
.stage-error { margin: 0; padding: 24px; font: 14px/1.5 ui-sans-serif, sans-serif; }
`;
  }
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

const FACE =
  "data:image/svg+xml," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='32' fill='#e08a45'/><circle cx='32' cy='26' r='10' fill='#fff'/><path d='M16 54c4-10 28-10 32 0' fill='#fff'/></svg>",
  );

function specialMount(sourceId, slug) {
  const key = `${sourceId}/${slug}`;
  const mounts = {
    "affect/agent-team": `import { AgentTeam } from "../components/agent-team";
const face = "${FACE}";
export default function Mount() {
  return (
    <div className="stage">
      <AgentTeam members={[
        { role: "研究员", avatar: face, tools: ["slack"] },
        { role: "写作者", avatar: face, tools: ["gmail"] },
        { role: "复核", avatar: face, tools: ["linkedin"] },
      ]} />
    </div>
  );
}`,
    "affect/change-summary": `import { ChangeSummary } from "../components/change-summary";
export default function Mount() {
  return (
    <div className="stage">
      <ChangeSummary period="本周" changes={[
        { label: "访问", change: "升到 18.2K", tone: "good" },
        { label: "转化", change: "降了 1.4%", tone: "bad", direction: "down" },
        { label: "停留", change: "2 分 10 秒", tone: "neutral" },
      ]} />
    </div>
  );
}`,
    "affect/comment-thread": `import { CommentThread } from "../components/comment-thread";
export default function Mount() {
  return (
    <div className="stage">
      <CommentThread
        currentUser={{ name: "林夏" }}
        assistant={{ name: "助手", assistant: true }}
        messages={[
          { id: "1", author: { name: "林夏" }, createdAt: Date.now() - 3600000, text: "这段预览能折叠吗？" },
          { id: "2", author: { name: "助手", assistant: true }, createdAt: Date.now() - 3500000, text: "可以。点开就能看到细节。", status: "已整理", details: ["保留原文", "补了一句说明"] },
        ]}
      />
    </div>
  );
}`,
    "affect/decision-inbox": `import { DecisionInbox } from "../components/decision-inbox";
export default function Mount() {
  return (
    <div className="stage">
      <DecisionInbox decisions={[
        { id: "a", title: "发布这一版？", detail: "免费组件已经核对过许可。", primary: "发布", secondary: "再看一眼" },
        { id: "b", title: "关掉实验？", detail: "只有 3% 的人用过。", primary: "关掉", secondary: "保留", collapsed: true },
      ]} />
    </div>
  );
}`,
    "affect/dropdown-menu": `import { DropdownMenu } from "../components/dropdown-menu";
export default function Mount() {
  return (
    <div className="stage">
      <DropdownMenu
        trigger={({ triggerProps }) => <button type="button" {...triggerProps}>操作</button>}
        items={[
          { label: "复制", description: "放到剪贴板" },
          { label: "重命名" },
          { label: "删除", danger: true },
        ]}
      />
    </div>
  );
}`,
    "affect/logo-marquee": `import { LogoMarquee } from "../components/logo-marquee";
export default function Mount() {
  return (
    <div className="stage" style={{ width: "100%" }}>
      <LogoMarquee logos={[
        { name: "北窗" },
        { name: "山南" },
        { name: "澄海" },
        { name: "青田" },
        { name: "白露" },
      ]} />
    </div>
  );
}`,
    "affect/notification-stack": `import { NotificationStack } from "../components/notification-stack";
export default function Mount() {
  return (
    <div className="stage">
      <NotificationStack notices={[
        { id: "1", badge: "通知", title: "构建完成", text: "预览已经可以打开。", pattern: "orbit" },
        { id: "2", badge: "提醒", title: "还有一项待核对", text: "许可声明写在来源页。", pattern: "grid" },
      ]} />
    </div>
  );
}`,
    "affect/team-invite": `import { TeamInvite } from "../components/team-invite";
const face = "${FACE}";
export default function Mount() {
  return (
    <div className="stage">
      <TeamInvite avatars={[{ src: face, name: "林夏" }, { src: face, name: "周宁" }, { src: face, name: "阿禾" }]} />
    </div>
  );
}`,
    "eased/code-tabs": `import { CodeTabs } from "../registry/code-tabs/code-tabs";
export default function Mount() {
  return (
    <div className="stage" style={{ width: "min(520px, 100%)" }}>
      <CodeTabs items={[
        { label: "button.tsx", code: "export function Button() { return <button>预览</button>; }" },
        { label: "app.css", code: "button { border-radius: 8px; }" },
      ]} />
    </div>
  );
}`,
    "keyframery/input": `import { Input } from "../components/ui/input";
export default function Mount() {
  return (
    <div className="stage">
      <Input placeholder="输入名字" aria-label="名字" defaultValue="林夏" />
    </div>
  );
}`,
    "keyframery/preferences": `import { MotionStyleSwitcher } from "../components/ui/preferences";
export default function Mount() {
  return (
    <div className="stage">
      <MotionStyleSwitcher />
    </div>
  );
}`,
    "keyframery/radio": `import { Radio, RadioGroup } from "../components/ui/radio";
export default function Mount() {
  return (
    <div className="stage text-sm">
      <RadioGroup aria-label="通知" defaultValue="mentions" className="flex flex-col gap-2">
        <label className="flex items-center gap-2"><Radio value="all" />全部</label>
        <label className="flex items-center gap-2"><Radio value="mentions" />只看提及</label>
        <label className="flex items-center gap-2"><Radio value="none" />关闭</label>
      </RadioGroup>
    </div>
  );
}`,
    "keyframery/sidebar": `import { useState } from "react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarInset, SidebarLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "../components/ui/sidebar";
const pages = ["首页", "收件", "日历", "搜索"];
export default function Mount() {
  const [active, setActive] = useState(pages[0]);
  return (
    <div className="stage" style={{ width: "100%" }}>
      <SidebarProvider mobileBreakpoint={420} className="h-[280px] w-full max-w-[520px] overflow-hidden rounded-[14px] border bg-background">
        <Sidebar>
          <SidebarContent className="pt-2">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {pages.map((title) => (
                    <SidebarMenuItem key={title}>
                      <SidebarMenuButton isActive={active === title} onClick={() => setActive(title)}>
                        <SidebarLabel>{title}</SidebarLabel>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset className="p-5 text-[15px] font-semibold">{active}</SidebarInset>
      </SidebarProvider>
    </div>
  );
}`,
    "keyframery/toast": `import { useState } from "react";
import { Button } from "../components/ui/button";
import { createToaster, ToastRegion } from "../components/ui/toast";
export default function Mount() {
  const [toaster] = useState(() => createToaster());
  return (
    <div className="stage">
      <div className="flex flex-wrap justify-center gap-2">
        <Button onClick={() => toaster("草稿已保存")}>默认</Button>
        <Button onClick={() => toaster.success("已发送", { description: "48.00 给林夏" })}>成功</Button>
        <Button onClick={() => toaster.error("没传上去", { description: "文件超过 10 MB。" })}>失败</Button>
      </div>
      <ToastRegion toaster={toaster} />
    </div>
  );
}`,
    "asciicn/ascii-marquee": `import { AsciiMarquee } from "../components/ascii-marquee";
export default function Mount() {
  return (
    <div className="stage" style={{ width: "min(640px, 100%)" }}>
      <AsciiMarquee items={[
        { label: "沪指", value: "3124", change: 0.8 },
        { label: "深成", value: "9802", change: -0.4 },
        "恒生 · 平稳",
      ]} />
    </div>
  );
}`,
    "asciicn/ascii-tabs": `import { AsciiTabs } from "../components/ascii-tabs";
export default function Mount() {
  return (
    <div className="stage" style={{ width: "min(520px, 100%)" }}>
      <AsciiTabs tabs={[
        { value: "a", label: "概览", content: "第一页，用来看标签。" },
        { value: "b", label: "细节", content: "第二页内容。" },
        { value: "c", label: "记录", content: "第三页内容。" },
      ]} />
    </div>
  );
}`,
    "asciicn/avatar": `import { Avatar } from "../components/avatar";
export default function Mount() {
  return (
    <div className="stage">
      <Avatar name="林夏" status="online" size="lg" />
    </div>
  );
}`,
    "asciicn/glitch-text": `import { GlitchText } from "../components/glitch-text";
export default function Mount() {
  return (
    <div className="stage">
      <GlitchText className="text-3xl">信号中断</GlitchText>
    </div>
  );
}`,
    "asciicn/kbd-shortcut": `import { KbdShortcut } from "../components/kbd-shortcut";
export default function Mount() {
  return (
    <div className="stage">
      <KbdShortcut keys="mod+k" />
    </div>
  );
}`,
    "asciicn/scramble-text": `import { ScrambleText } from "../components/scramble-text";
export default function Mount() {
  return (
    <div className="stage">
      <ScrambleText className="text-3xl">解码完成</ScrambleText>
    </div>
  );
}`,
    "asciicn/typewriter-text": `import { TypewriterText } from "../components/typewriter-text";
export default function Mount() {
  return (
    <div className="stage">
      <TypewriterText phrases={["正在写入", "已经就位", "可以复制"]} />
    </div>
  );
}`,
    "republic/slat-shutter-hero": `import { SlatShutterHero } from "../components/slat-shutter-hero";
import { IMG } from "../samples";
export default function Mount() {
  return <div className="stage" style={{ width: "100%", padding: 0 }}><SlatShutterHero coverSrc={IMG("hero-dark.jpg")} revealSrc={IMG("hero-bright.jpg")} kicker="Field notes, issue 14" coverTitle={["Leave the black sand", "before the light goes"]} revealTitle={["Then follow the sun", "south to clear water"]} caption="Reynisfjara to the Calanques in eleven days." /></div>;
}`,
    "republic/photo-deck": `import { PhotoDeck } from "../components/photo-deck";
import { deckPhotos } from "../samples";
export default function Mount() {
  return <div className="stage" style={{ width: "100%" }}><PhotoDeck photos={deckPhotos} /></div>;
}`,
    "republic/timeline-scrubber": `import { TimelineScrubber } from "../components/timeline-scrubber";
import { yearStops } from "../samples";
export default function Mount() {
  return <div className="stage" style={{ width: "100%" }}><TimelineScrubber stops={yearStops} /></div>;
}`,
    "republic/testimonial-reel": `import { TestimonialReel } from "../components/testimonial-reel";
import { testimonials } from "../samples";
export default function Mount() {
  return <div className="stage" style={{ width: "100%" }}><TestimonialReel items={testimonials} /></div>;
}`,
    "republic/morph-island": `import { MorphIsland } from "../components/morph-island";
import { IMG } from "../samples";
export default function Mount() {
  return <div className="stage"><MorphIsland state="idle" files={[{ name: "Lisbon", src: IMG("deck-lisbon.jpg"), album: "Autumn" }, { name: "Lofoten", src: IMG("deck-lofoten.jpg"), album: "Autumn" }, { name: "Kyoto", src: IMG("deck-kyoto.jpg"), album: "Autumn" }]} /></div>;
}`,
    "republic/facts-hero": `import { FactsHero } from "../components/facts-hero";
import { IMG } from "../samples";
export default function Mount() {
  return <div className="stage" style={{ width: "100%", padding: 0 }}><FactsHero title={<>Clear advice for people on the move</>} body="Halden is an independent advisory firm in London." primary={{ label: "Book a call", href: "#" }} secondary={{ label: "Our services", href: "#" }} image={IMG("hero-office.jpg")} facts={[{ label: "Years", value: "14" }, { label: "Clients", value: "2,400+" }, { label: "Rating", value: "4.9" }]} /></div>;
}`,
    "republic/fan-gallery": `import { FanGallery } from "../components/fan-gallery";
import { cities } from "../samples";
export default function Mount() {
  return <div className="stage" style={{ width: "100%" }}><FanGallery cards={cities} /></div>;
}`,
    "republic/feature-ui-row": `import { ChecklistVisual, FeatureUIRow } from "../components/feature-ui-row";
export default function Mount() {
  return <div className="stage" style={{ width: "100%" }}><FeatureUIRow eyebrow="For companies" title="Hire abroad with confidence" body="A partner runs the plan from the first conversation to the first day." cta={{ label: "Explore", href: "#" }} visual={<ChecklistVisual title="Relocation file" rows={[{ label: "Eligibility", value: "Checked" }, { label: "Contract", value: "Signed" }]} stat={{ value: 98, suffix: "%", label: "Approved first time" }} />} /></div>;
}`,
    "republic/bento-mini-ui": `import { BentoMiniUI } from "../components/bento-mini-ui";
import { IMG } from "../samples";
export default function Mount() {
  return <div className="stage" style={{ width: "100%" }}><BentoMiniUI person={{ name: "Amara Okoye", role: "Founding partner", photo: IMG("person-amara.jpg") }} /></div>;
}`,
    "republic/torn-portrait-scroll": `import { TornPortraitScroll } from "../components/torn-portrait-scroll";
import { torn } from "../samples";
export default function Mount() {
  return <div className="stage" style={{ width: "100%", padding: 0 }}><TornPortraitScroll items={torn} /></div>;
}`,
    "republic/scroll-fill-headline": `import { ScrollFillHeadline } from "../components/scroll-fill-headline";
import { IMG } from "../samples";
export default function Mount() {
  return <div className="stage" style={{ width: "100%" }}><ScrollFillHeadline lines={["A small firm", "with a partner on every file"]} objects={[{ src: IMG("object-compass.jpg"), left: 70, top: 10, width: 160, rotate: [-8, 10], drift: [40, -40] }]} /></div>;
}`,
    "republic/sector-wheel": `import { SectorWheel } from "../components/sector-wheel";
import { sectors } from "../samples";
export default function Mount() {
  return <div className="stage"><SectorWheel sectors={sectors} /></div>;
}`,
    "republic/scattered-about": `import { ScatteredAbout } from "../components/scattered-about";
import { cities } from "../samples";
export default function Mount() {
  return <div className="stage" style={{ width: "100%" }}><ScatteredAbout images={cities.slice(0, 6).map((city) => city.src)} /></div>;
}`,
  };
  return mounts[key] || "";
}

function splitTop(block) {
  const names = [];
  let depth = 0;
  let current = "";
  for (const ch of block) {
    if (ch === "{" || ch === "(" || ch === "[" || ch === "<") depth += 1;
    else if (ch === "}" || ch === ")" || ch === "]" || ch === ">") depth -= 1;
    if (ch === "," && depth === 0) {
      names.push(current);
      current = "";
    } else current += ch;
  }
  if (current.trim()) names.push(current);
  return names
    .map((part) => {
      const cleaned = part.replace(/\/\*[\s\S]*?\*\//g, "").trim();
      const quoted = cleaned.match(/^["']([^"']+)["']/);
      if (quoted) return quoted[1];
      const id = cleaned.match(/^([A-Za-z_][\w]*)/);
      return id ? id[1] : "";
    })
    .filter(Boolean);
}

function destructure(source, component) {
  const start = source.search(new RegExp(`function ${component}\\b`));
  if (start < 0) return [];
  let i = start + `function ${component}`.length;
  if (source[i] === "<") {
    let depth = 0;
    for (; i < source.length; i += 1) {
      if (source[i] === "<") depth += 1;
      else if (source[i] === ">") {
        depth -= 1;
        if (!depth) {
          i += 1;
          break;
        }
      }
    }
  }
  const open = source.slice(i, i + 80).match(/^\s*\(\s*\{/);
  if (!open) return [];
  i += open[0].length;
  let depth = 1;
  let body = "";
  for (; i < source.length && depth; i += 1) {
    const ch = source[i];
    if (ch === "{") depth += 1;
    else if (ch === "}") depth -= 1;
    if (depth) body += ch;
  }
  return splitTop(body);
}

const ARC_LIST = {
  items: '[{ id: "a", key: "a", label: "复制", title: "复制", name: "林夏", value: "a", text: "预览", message: "预览", href: "#", content: "第一段说明", status: "done" }, { id: "b", key: "b", label: "重命名", title: "重命名", name: "周宁", value: "b", text: "第二行", message: "第二行", href: "#", content: "第二段说明", status: "idle" }]',
  actions: '[{ label: "复制" }, { label: "归档" }]',
  options: '[{ id: "a", value: "a", label: "示例" }, { id: "b", value: "b", label: "另一项" }]',
  steps: '[{ id: "a", title: "填写", label: "填写", description: "名字和邮箱" }, { id: "b", title: "确认", label: "确认", description: "看一眼再提交" }]',
  events: '[{ id: "a", at: Date.now() - 3600000, title: "合并了预览", actor: "林夏" }, { id: "b", at: Date.now() - 600000, title: "打开了目录", actor: "周宁" }]',
  members: '[{ name: "林夏", status: "online" }, { name: "周宁", status: "offline" }]',
  nodes: '[{ id: "a", label: "文档", children: [{ id: "b", label: "说明" }] }]',
  rows: '[{ id: "a", name: "林夏", role: "设计" }, { id: "b", name: "周宁", role: "工程" }]',
  notifications: '[{ id: "a", title: "构建完成", description: "预览可以打开。", time: "2 分钟前" }]',
  messages: '[{ id: "a", message: "目录已更新", action: { label: "查看", href: "#" } }]',
  states: '[{ id: "idle", label: "保存" }, { id: "done", label: "已保存" }]',
  filters: '[{ id: "city", label: "城市", value: "杭州" }]',
  fields: '[{ id: "city", label: "城市", options: ["杭州", "苏州"] }]',
  participants: '[{ id: "me", name: "林夏" }, { id: "them", name: "周宁" }]',
  defaultMessages: '[{ id: "1", authorId: "them", text: "预览好了吗？", createdAt: Date.now() - 60000 }]',
  defaultComments: '[{ id: "1", author: { id: "them", name: "周宁" }, body: "这段能再短一点吗？", createdAt: "1 小时前" }]',
  comments: '[{ id: "1", author: { id: "them", name: "周宁" }, body: "这段能再短一点吗？", createdAt: "1 小时前" }]',
};

const ARC_COMPONENT = {
  ActionSwap: { states: ARC_LIST.states, defaultValue: '"idle"', label: '"保存"' },
  SplitButton: { label: '"保存"', actions: ARC_LIST.actions },
  Gauge: { value: "64", label: '"用量"' },
  Sparkline: { data: "[4, 8, 6, 12, 9, 14, 11]", label: '"访问"' },
  RangeHistogramSlider: { data: "[12, 18, 18, 24, 30, 42, 48, 36]", label: '"价格"', defaultValue: "[18, 42]" },
  SlotText: { value: "1280" },
  SegmentedControl: { value: '"a"', options: ARC_LIST.options, onValueChange: "() => {}" },
  ChipGroup: { value: '["a"]', options: ARC_LIST.options, label: '"标签"' },
  MultiSelect: { value: '["a"]', options: ARC_LIST.options, label: '"选择"' },
  InlineEdit: { value: '"林夏"', onSave: "() => {}", label: '"名字"' },
  IconMorph: { name: '"heart"', state: "false" },
  Countdown: { target: "Date.now() + 36e5 * 26", label: '"距离发布"' },
  BarChart: {
    data: '[{ key: "mon", label: "周一", axisLabel: "一", value: 12 }, { key: "tue", label: "周二", axisLabel: "二", value: 18 }, { key: "wed", label: "周三", axisLabel: "三", value: 9 }]',
    label: '"访问"',
    period: '"本周"',
  },
  LineChart: {
    series: '[{ key: "a", label: "今年" }, { key: "b", label: "去年" }]',
    data: '[{ key: "mon", label: "周一", axisLabel: "一", values: { a: 12, b: 8 } }, { key: "tue", label: "周二", axisLabel: "二", values: { a: 18, b: 11 } }, { key: "wed", label: "周三", axisLabel: "三", values: { a: 9, b: 14 } }]',
    label: '"访问"',
  },
  DonutChart: {
    data: '[{ key: "a", label: "直接", value: 42 }, { key: "b", label: "搜索", value: 28 }, { key: "c", label: "推荐", value: 16 }]',
    label: '"来源"',
  },
  Streamgraph: {
    series: '[{ key: "a", label: "产品" }, { key: "b", label: "支持" }]',
    data: '[{ key: "w1", label: "第一周", axisLabel: "1", values: { a: 12, b: 8 } }, { key: "w2", label: "第二周", axisLabel: "2", values: { a: 18, b: 11 } }, { key: "w3", label: "第三周", axisLabel: "3", values: { a: 9, b: 14 } }]',
    label: '"工单"',
  },
  BrushChart: {
    data: "[{ date: Date.now() - 86400000 * 6, value: 12 }, { date: Date.now() - 86400000 * 3, value: 18 }, { date: Date.now(), value: 9 }]",
    label: '"活跃"',
  },
  Ridgeline: {
    series: '[{ id: "a", label: "北城", values: [2, 4, 6, 5, 3] }, { id: "b", label: "南城", values: [1, 3, 5, 7, 4] }]',
    label: '"气温"',
  },
  Treemap: {
    data: '{ id: "root", label: "全部", children: [{ id: "a", label: "产品", value: 40 }, { id: "b", label: "服务", value: 25 }, { id: "c", label: "其他", value: 15 }] }',
    label: '"收入"',
  },
  WaffleChart: {
    data: '[{ key: "a", label: "水电", value: 40 }, { key: "b", label: "风电", value: 25 }, { key: "c", label: "其他", value: 10 }]',
    label: '"发电"',
  },
  SlopeChart: {
    data: '[{ key: "a", label: "直接", start: 12, end: 18 }, { key: "b", label: "搜索", start: 20, end: 14 }]',
    label: '"转化"',
    startLabel: '"上月"',
    endLabel: '"本月"',
  },
  ActivityHeatmap: {
    days: '[{ date: "2026-11-01", count: 2 }, { date: "2026-11-08", count: 5 }, { date: "2026-11-15", count: 3 }]',
    label: '"提交"',
    period: '"2026"',
  },
  UsageMeter: {
    segments: '[{ id: "a", label: "文档", value: 12 }, { id: "b", label: "图片", value: 8 }]',
    label: '"空间"',
    limit: "40",
  },
  Timeline: { events: ARC_LIST.events, now: "Date.now()", label: '"动态"' },
  Stepper: { steps: ARC_LIST.steps, current: "1", label: '"进度"' },
  SortableDataTable: {
    rows: '[{ id: "a", name: "林夏", role: "设计" }, { id: "b", name: "周宁", role: "工程" }]',
    columns: '[{ key: "name", label: "名字" }, { key: "role", label: "角色" }]',
    rowKey: '"id"',
  },
  TreeTable: {
    rows: '[{ id: "a", data: { name: "林夏" } }, { id: "b", data: { name: "周宁" }, children: [{ id: "c", data: { name: "阿禾" } }] }]',
    columns: '[{ id: "name", header: "名字", cell: (row) => row.name }]',
    label: '"成员"',
  },
  CardStack: {
    items: '[{ id: "a", label: "杭州" }, { id: "b", label: "苏州" }]',
    getKey: "(item) => item.id",
    getLabel: "(item) => item.label",
    renderCard: "(item) => item.label",
  },
  ChatThread: {
    participants: ARC_LIST.participants,
    currentUserId: '"me"',
    defaultMessages: ARC_LIST.defaultMessages,
  },
  CommentThread: {
    currentUser: '{ id: "me", name: "林夏" }',
    defaultComments: ARC_LIST.defaultComments,
  },
  UserMenu: { user: '{ name: "林夏", email: "lin@example.com" }' },
  AnnouncementBar: { messages: ARC_LIST.messages },
  TextReveal: { text: '"把句子慢慢展开"' },
  InViewTitle: { text: '"进入视野的标题"' },
  TextMorph: { children: '"预览文字"' },
  CodeBlock: { code: '"export const n = 1"', filename: '"preview.tsx"', language: '"tsx"' },
  Avatar: { name: '"林夏"' },
  Select: { label: '"城市"', options: ARC_LIST.options, defaultValue: '"a"' },
  Combobox: { label: '"城市"', options: ARC_LIST.options, defaultValue: '"a"' },
  RadioGroup: { label: '"通知"', options: ARC_LIST.options, defaultValue: '"a"' },
  RadioCards: { options: ARC_LIST.options, defaultValue: '"a"', label: '"方案"' },
  MorphSelect: { label: '"城市"', items: ARC_LIST.items, defaultValue: '"a"' },
};

function arcExpr(component, prop) {
  const specific = ARC_COMPONENT[component]?.[prop];
  if (specific) return specific;
  if (["className", "style", "ref", "disabled", "icon", "Icon"].includes(prop)) return "";
  if (/^(format|formatValue|formatTick|formatChange|formatDate|validate|clock)/.test(prop)) return "";
  if (/^on[A-Z]/.test(prop)) return "() => {}";
  if (prop === "actions") return "";
  if (component === "ChatThread" && prop === "messages") return "";
  if (prop === "getKey") return "(item) => item.id || item.value || item.label";
  if (prop === "getLabel") return "(item) => item.label || item.name || item.title";
  if (prop === "renderCard") return "(item) => item.label || item.name";
  if (prop === "renderEmpty") return "() => null";
  if (prop === "rowKey") return '"id"';
  if (prop === "currentUser") return '{ id: "me", name: "林夏" }';
  if (prop === "currentUserId") return '"me"';
  if (prop === "user") return '{ name: "林夏", email: "lin@example.com" }';
  if (prop === "target") return "Date.now() + 36e5 * 26";
  if (prop === "now") return "Date.now()";
  if (prop === "current") return "1";
  if (prop === "limit" || prop === "min") return "0";
  if (prop === "max") return "100";
  if (prop === "name") return '"林夏"';
  if (prop === "text" || prop === "children") return '"预览文字"';
  if (prop === "code") return '"export const n = 1"';
  if ((prop === "value" || prop === "defaultValue") && /Select|Radio|Combobox|Segmented|Chip|Morph/.test(component)) return prop === "value" && component === "ChipGroup" ? '["a"]' : '"a"';
  if (ARC_LIST[prop]) return ARC_LIST[prop];
  if (/^(label|title|filename|language|placeholder|detail|period|caption|description|unit|id|startLabel|endLabel|aria-label)$/.test(prop)) return '"示例"';
  return "";
}

function arcMount(component, source, importPath, asDefault = false) {
  const importLine = asDefault
    ? `import ${component} from "${importPath}";`
    : `import { ${component} } from "${importPath}";`;
  if (component === "ToastStack") {
    return `import { ToastStack, ToastStackProvider, useToastStack } from "${importPath}";
function Demo() {
  const { toast } = useToastStack();
  return (
    <>
      <button type="button" onClick={() => toast({ title: "已保存", description: "草稿留在这台机器上。" })}>弹出提示</button>
      <ToastStack />
    </>
  );
}
export default function Mount() {
  return (
    <div className="stage">
      <ToastStackProvider><Demo /></ToastStackProvider>
    </div>
  );
}
`;
  }
  if (component === "Reactions") {
    return `import { Heart, ThumbsUp } from "lucide-react";
import { Reactions } from "${importPath}";
export default function Mount() {
  return (
    <div className="stage">
      <Reactions label="反应" options={[{ id: "like", label: "喜欢", icon: ThumbsUp }, { id: "heart", label: "心", icon: Heart }]} defaultValue={[{ id: "like", count: 3, reacted: false }]} />
    </div>
  );
}
`;
  }
  const names = destructure(source, component);
  const attrs = [];
  let kids = "";
  for (const prop of names) {
    const expr = arcExpr(component, prop);
    if (!expr) continue;
    if (prop === "children") {
      kids = component === "TextMorph" ? "{'预览文字'}" : '<button type="button">预览</button>';
      continue;
    }
    const attr = prop.includes("-") ? prop : prop;
    attrs.push(`${attr}={${expr}}`);
  }
  return `${importLine}
export default function Mount() {
  return (
    <div className="stage">
      <${component}${attrs.length ? ` ${attrs.join(" ")}` : ""}>${kids}</${component}>
    </div>
  );
}
`;
}

function mountSource(item, file) {
  const slug = item.id.slice(item.sourceId.length + 1);
  const special = specialMount(item.sourceId, slug);
  if (special) return special;
  const demo = item.sourceId === "eased"
    ? (item.files || []).find((candidate) => /-demo\.tsx$/.test(candidate.path) && !candidate.path.includes("code-tabs-demo"))
    : null;
  const chosen = demo || file;
  const prefer = demo ? `${pascal(slug)}Demo` : pascal(slug);
  const component = exportName(chosen.content, prefer);
  const importPath = relImport(`mounts/${slug}.tsx`, chosen.path.replace(/\.tsx$/, ""));
  const defaultName = chosen.content.match(/export\s+default\s+function\s+([A-Z][A-Za-z0-9]*)/)?.[1] || "";
  if (item.sourceId === "arc" && (component || defaultName)) return arcMount(component || defaultName, chosen.content, importPath, !component);
  if (!component && /export\s+default\s+/.test(chosen.content)) {
    return `import Mounted from "${importPath}";
export default function Mount() {
  return (
    <div className="stage">
      <Mounted />
    </div>
  );
}
`;
  }
  if (!component) {
    return `export default function Mount() {
  return <p className="stage-error" data-${item.sourceId}="error">「${slug}」没有可渲染的组件导出。</p>;
}
`;
  }
  if (item.sourceId === "arc") return arcMount(component, chosen.content, importPath);
  const props = item.sourceId === "affect" ? demoProps(slug, chosen.content) : "";
  const voidTag = /^(input)$/.test(slug);
  const kids = voidTag ? "" : item.sourceId === "eased" || item.sourceId === "keyframery" || /button|tabs|badge/i.test(slug) ? "预览" : "";
  const inputProps = voidTag ? ' placeholder="预览" aria-label="预览"' : "";
  return `import { ${component} } from "${importPath}";
export default function Mount() {
  return (
    <div className="stage">
      <${component}${inputProps}${props ? ` ${props}` : ""}>${kids}</${component}>
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
mkdirSync(join(root, "arc-src"), { recursive: true });
writeFileSync(
  join(root, "arc-src/next-stub.tsx"),
  `import type { AnchorHTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";
export type StaticImageData = string;
export default function Image({ fill, priority, ...props }: ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean }) {
  return <img {...props} alt={props.alt || ""} style={fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" } : undefined} />;
}
export function Link({ href, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { children?: ReactNode }) {
  return <a href={href} {...props}>{children}</a>;
}
`,
);
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
