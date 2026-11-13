import { mkdirSync, writeFileSync } from "node:fs";
import { chromium } from "playwright";

const base = process.env.PREVIEW_URL ?? "http://127.0.0.1:4173/";
const outDir = process.env.SHOT_DIR ?? "/opt/cursor/artifacts";
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({
  args: ["--allow-file-access-from-files"],
});
const report = { failures: [] };

function check(name, ok, detail) {
  report[name] = detail;
  if (!ok) report.failures.push(name);
  console.log(`${ok ? "ok" : "FAIL"} ${name}`, typeof detail === "string" ? detail : JSON.stringify(detail));
}

async function shot(page, name) {
  const path = `${outDir}/${name}.png`;
  await page.screenshot({ path, fullPage: false });
  console.log("shot", path);
}

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const scripts = [];
page.on("response", (response) => {
  const url = response.url();
  if (url.includes(".js")) scripts.push(url.split("/").pop());
});
const errors = [];
page.on("pageerror", (error) => errors.push(String(error)));

await page.goto(base, { waitUntil: "networkidle" });
await page.locator("h1").waitFor();
await page.waitForTimeout(600);

const home = await page.evaluate(() => {
  const vh = window.innerHeight;
  const margin = 240;
  const cards = document.querySelectorAll("[data-item-card]").length;
  const frames = [...document.querySelectorAll("[data-preview-kind]")].map((el) => {
    const rect = el.getBoundingClientRect();
    const near = rect.bottom > -margin && rect.top < vh + margin && rect.width > 0;
    return {
      mounted: el.getAttribute("data-preview-mounted"),
      kind: el.getAttribute("data-preview-kind"),
      near,
    };
  });
  const mounted = frames.filter((frame) => frame.mounted === "true");
  const mountedFar = mounted.filter((frame) => !frame.near);
  const nearUnmounted = frames.filter((frame) => frame.near && frame.mounted === "false" && (frame.kind === "iframe" || frame.kind === "react"));
  return { cards, frames: frames.length, mounted: mounted.length, mountedFar: mountedFar.length, nearUnmounted: nearUnmounted.length };
});
check("desktop cards are the first page", home.cards === 24, home);
check("only nearby previews are mounted", home.mounted > 0 && home.mounted < home.cards && home.mountedFar === 0, home);

const initialJs = scripts.filter((name) => name && !name.includes("fonts"));
check(
  "initial scripts skip heavy chunks",
  initialJs.some((name) => name.startsWith("app.js")) && !initialJs.some((name) => /libraries-|voiceorbs-|crucible-|ItemPage|highlight|core-/.test(name)),
  initialJs,
);

await shot(page, "home_desktop");

const clip = page.locator("[data-item-card]", { hasText: "裁剪显现" });
await clip.scrollIntoViewIfNeeded();
await clip.locator("iframe").waitFor({ state: "visible" });
await page.waitForTimeout(400);
const scrollbar = await clip.locator("iframe").evaluate((el) => {
  const doc = el.contentDocument;
  const html = doc?.documentElement;
  const body = doc?.body;
  const style = html ? getComputedStyle(html) : null;
  return {
    scrolling: el.getAttribute("scrolling"),
    src: el.getAttribute("src"),
    overflow: style?.overflow ?? "",
    gutter: html ? html.offsetWidth - html.clientWidth : 99,
    zoom: body?.style.zoom ?? "",
  };
});
check(
  "card iframe hides its scrollbar",
  scrollbar.scrolling === "no" &&
    (scrollbar.src ?? "").includes("fit=1") &&
    scrollbar.overflow === "hidden" &&
    scrollbar.gutter < 2,
  scrollbar,
);
await clip.hover();
await page.waitForTimeout(350);
await clip.screenshot({ path: `${outDir}/card_hover.png` });
console.log("shot", `${outDir}/card_hover.png`);

await page.locator("[data-item-card]").first().click();
await page.locator("[data-testid='item-detail']").waitFor();
await page.locator("[data-testid='code-block'] .hljs").waitFor({ timeout: 8000 });
await page.waitForTimeout(300);
const highlighted = await page.locator("[data-testid='code-block'] .hljs span").count();
check("detail code is highlighted", highlighted > 0, { highlighted });
await shot(page, "item_detail");

const detailScripts = scripts.filter((name) => name.includes("ItemPage") || name.includes("foundry-") || name.includes("core-"));
check("detail loads its own source chunk", detailScripts.length > 0, detailScripts);

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto(base, { waitUntil: "networkidle" });
await mobile.locator("h1").waitFor();
await mobile.locator("[data-item-card]").first().scrollIntoViewIfNeeded();
await mobile.waitForTimeout(400);
await mobile.screenshot({ path: `${outDir}/home_mobile.png` });
console.log("shot", `${outDir}/home_mobile.png`);
await mobile.close();

const filePage = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const fileErrors = [];
filePage.on("pageerror", (error) => fileErrors.push(String(error)));
await filePage.goto("file:///workspace/dist/index.html", { waitUntil: "domcontentloaded" });
await filePage.locator("h1").waitFor({ timeout: 8000 });
const fileTitle = await filePage.locator("h1").innerText();
const fileCards = await filePage.locator("[data-item-card]").count();
check("file protocol renders the catalog", fileTitle.includes("源集") && fileCards === 24 && fileErrors.length === 0, {
  fileTitle,
  fileCards,
  fileErrors,
});
await filePage.close();

check("no page errors on the http build", errors.length === 0, errors);
writeFileSync(`${outDir}/verify-ui.json`, JSON.stringify(report, null, 2));
await browser.close();
if (report.failures.length) {
  console.error("failures", report.failures);
  process.exit(1);
}
console.log("verify passed");
