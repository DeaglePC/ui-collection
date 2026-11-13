import { copyFileSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const fileAssets = readdirSync("dist-file/assets");
const js = fileAssets.filter((name) => name.endsWith(".js"));
const css = fileAssets.filter((name) => name.endsWith(".css"));
if (js.length !== 1) throw new Error(`expected one file:// bundle, found ${js.join(", ") || "none"}`);
if (css.length !== 1) throw new Error(`expected one file:// stylesheet, found ${css.join(", ") || "none"}`);

copyFileSync(join("dist-file/assets", js[0]), "dist/assets/app.file.js");
copyFileSync(join("dist-file/assets", css[0]), "dist/assets/style.file.css");

const entry = readFileSync("dist/assets/app.js", "utf8");
if (entry.includes("Permission is hereby granted, free of charge")) {
  throw new Error("item source leaked into the GitHub Pages entry bundle");
}
if (!readFileSync("dist/index.html", "utf8").includes("app.file.js")) {
  throw new Error("dist/index.html is missing the file:// bootstrap");
}

const entryBytes = statSync("dist/assets/app.js").size;
const fileBytes = statSync("dist/assets/app.file.js").size;
const chunks = readdirSync("dist/assets/chunks").filter((name) => name.endsWith(".js"));
console.log(
  `pages entry ${(entryBytes / 1024).toFixed(1)} KiB, file bundle ${(fileBytes / 1024).toFixed(1)} KiB, async chunks ${chunks.length}`,
);
if (entryBytes > 700 * 1024) {
  throw new Error(`pages entry is ${entryBytes} bytes; expected the initial bundle to stay under 700 KiB`);
}
