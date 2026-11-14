import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const items = JSON.parse(readFileSync(join(root, "src/data/items.json"), "utf8"));
const outDir = join(root, "src/data/generated");
const payloadDir = join(outDir, "payloads");
const classicDir = join(outDir, "classic");

rmSync(outDir, { recursive: true, force: true });
mkdirSync(payloadDir, { recursive: true });
mkdirSync(classicDir, { recursive: true });

const meta = [];

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
  const json = JSON.stringify(payload);
  writeFileSync(join(payloadDir, `${item.id}.json`), json);
  writeFileSync(
    join(classicDir, `${item.id}.js`),
    `window.__YJ=window.__YJ||{};window.__YJ[${JSON.stringify(item.id)}]=${json};\n`,
  );
}

writeFileSync(join(outDir, "meta.json"), JSON.stringify(meta));
console.log(`split catalog: ${meta.length} items, meta ${Buffer.byteLength(JSON.stringify(meta))} bytes`);
