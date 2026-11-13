import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const items = JSON.parse(readFileSync(join(root, "src/data/items.json"), "utf8"));
const outDir = join(root, "src/data/generated");
const payloadDir = join(outDir, "payloads");

rmSync(outDir, { recursive: true, force: true });
mkdirSync(payloadDir, { recursive: true });

const meta = [];
const all = {};

for (const item of items) {
  const { files = [], prompt = "", ...rest } = item;
  meta.push({
    ...rest,
    hasPrompt: Boolean(String(prompt).trim()),
    files: files.map((file) => ({
      path: file.path,
      language: file.language || "",
    })),
  });
  const payload = { files, prompt: prompt || "" };
  all[item.id] = payload;
  writeFileSync(join(payloadDir, `${item.id}.json`), JSON.stringify(payload));
}

writeFileSync(join(outDir, "meta.json"), JSON.stringify(meta));
writeFileSync(join(outDir, "all-payloads.json"), JSON.stringify(all));
console.log(`split catalog: ${meta.length} items, meta ${Buffer.byteLength(JSON.stringify(meta))} bytes`);
