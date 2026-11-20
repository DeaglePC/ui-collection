import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const items = JSON.parse(readFileSync(join(root, "src/data/items.json"), "utf8"));
const components = join(root, "cybr-src/components");
const styles = join(root, "cybr-src/styles");

rmSync(components, { recursive: true, force: true });
mkdirSync(components, { recursive: true });
mkdirSync(join(styles, "themes"), { recursive: true });

let written = 0;
for (const item of items) {
  if (item.sourceId !== "cybr") continue;
  for (const file of item.files || []) {
    const path = file.path || "";
    let content = String(file.content || "");
    content = content.replaceAll('from "@/lib/utils"', 'from "../lib/utils"');
    content = content.replaceAll('from "@/lib/use-reduced-motion"', 'from "../lib/use-reduced-motion"');
    if (path.includes("registry/ui/") && path.endsWith(".tsx")) {
      writeFileSync(join(components, path.split("/").pop()), content);
      written += 1;
    } else if (path.endsWith("tokens.css")) {
      writeFileSync(join(styles, "tokens.css"), content);
      written += 1;
    } else if (path.endsWith("effects.css")) {
      writeFileSync(join(styles, "effects.css"), content);
      written += 1;
    } else if (path.includes("acid-terminal")) {
      writeFileSync(join(styles, "themes/acid-terminal.css"), content);
      written += 1;
    } else if (path.includes("ice-neon")) {
      writeFileSync(join(styles, "themes/ice-neon.css"), content);
      written += 1;
    }
  }
}

console.log(`generated ${written} cybr preview files`);
