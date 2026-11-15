import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const items = JSON.parse(readFileSync(join(root, "src/data/items.json"), "utf8"));
const out = join(root, "nsui-src");
const components = join(out, "components");
const mounts = join(out, "mounts");
rmSync(components, { recursive: true, force: true });
rmSync(mounts, { recursive: true, force: true });
mkdirSync(components, { recursive: true });
mkdirSync(mounts, { recursive: true });

const special = {
  "badge-unread-tarnish": `import { PatinaPip } from "../components/badge-unread-tarnish";
export default function Mount() {
  return <div className="ns-stage grid place-items-center"><PatinaPip count={4} newestTimestamp={Date.now()} id="demo" /></div>;
}
`,
  "tabs-slack-cable": `import { SlackRail } from "../components/tabs-slack-cable";
export default function Mount() {
  return (
    <div className="ns-stage p-6">
      <SlackRail
        aria-label="示例分页"
        defaultValue="a"
        items={[
          { value: "a", label: "概览", content: <p className="p-4 text-sm">第一页，用来看轨道和标签。</p> },
          { value: "b", label: "细节", content: <p className="p-4 text-sm">第二页内容。</p> },
          { value: "c", label: "记录", content: <p className="p-4 text-sm">第三页内容。</p> },
        ]}
      />
    </div>
  );
}
`,
};

function exportName(source) {
  const functions = [...source.matchAll(/^export function ([A-Z][A-Za-z0-9]*)/gm)].map((match) => match[1]);
  if (functions.length) return functions.at(-1);
  const constants = [...source.matchAll(/^export const ([A-Z][A-Za-z0-9]*)\s*=/gm)].map((match) => match[1]);
  return constants.filter((name) => /[a-z]/.test(name)).at(-1) || constants.at(-1) || "";
}

function readBalanced(source, open, pairs) {
  const close = pairs[source[open]];
  if (!close) return "";
  let depth = 0;
  for (let i = open; i < source.length; i++) {
    const c = source[i];
    if (c === "/" && source[i + 1] === "/") {
      const next = source.indexOf("\n", i);
      i = next < 0 ? source.length : next;
      continue;
    }
    if (c === "/" && source[i + 1] === "*") {
      const next = source.indexOf("*/", i + 2);
      i = next < 0 ? source.length : next + 1;
      continue;
    }
    if (c === "'" || c === '"' || c === "`") {
      const quote = c;
      i += 1;
      while (i < source.length) {
        if (source[i] === "\\") {
          i += 2;
          continue;
        }
        if (source[i] === quote) break;
        i += 1;
      }
      continue;
    }
    if (c === source[open]) depth += 1;
    else if (c === close) {
      depth -= 1;
      if (depth === 0) return source.slice(open + 1, i);
    }
  }
  return "";
}

function extractTypes(source) {
  const types = new Map();
  const aliases = new Map();
  const objects = /(?:export\s+)?(?:interface|type)\s+([A-Za-z0-9_]+)\s*(?:<[^>={}]*>)?\s*(?:=\s*)?\{/g;
  for (const match of source.matchAll(objects)) {
    const brace = source.indexOf("{", match.index);
    types.set(match[1], readBalanced(source, brace, { "{": "}" }));
  }
  const aliasRe = /(?:export\s+)?type\s+([A-Za-z0-9_]+)\s*(?:<[^>]*>)?\s*=\s*/g;
  for (const match of source.matchAll(aliasRe)) {
    if (types.has(match[1])) continue;
    let depth = 0;
    let angle = 0;
    let text = "";
    for (let i = match.index + match[0].length; i < source.length; i++) {
      const c = source[i];
      if (c === "/" && source[i + 1] === "/") {
        const next = source.indexOf("\n", i);
        i = next < 0 ? source.length : next;
        continue;
      }
      if (c === "/" && source[i + 1] === "*") {
        const next = source.indexOf("*/", i + 2);
        i = next < 0 ? source.length : next + 1;
        continue;
      }
      if (c === "'" || c === '"' || c === "`") {
        const quote = c;
        const start = i;
        i += 1;
        while (i < source.length) {
          if (source[i] === "\\") {
            i += 2;
            continue;
          }
          if (source[i] === quote) break;
          i += 1;
        }
        text += source.slice(start, i + 1);
        continue;
      }
      if (c === ";" && depth === 0 && angle === 0) break;
      if (c === "{" || c === "(" || c === "[") depth += 1;
      else if (c === "}" || c === ")" || c === "]") depth -= 1;
      else if (c === "<") angle += 1;
      else if (c === ">") angle -= 1;
      text += c;
    }
    aliases.set(match[1], text.trim());
  }
  return { types, aliases };
}

function propsTypeBody(source, component, types) {
  const start = source.search(new RegExp(`export (?:function|const) ${component}\\b`));
  if (start < 0) return "";
  const window = source.slice(start, start + 5000);
  const named = window.match(/\}\s*:\s*([A-Za-z0-9_]+)/);
  if (named && types.has(named[1])) return types.get(named[1]);
  const inline = window.match(/\}\s*:\s*\{/);
  if (inline) return readBalanced(source, start + window.indexOf(inline[0]) + inline[0].length - 1, { "{": "}" });
  const forwardInline = window.match(/forwardRef\s*<\s*[^,>]+\s*,\s*\{/);
  if (forwardInline) return readBalanced(source, start + window.indexOf(forwardInline[0]) + forwardInline[0].length - 1, { "{": "}" });
  const forwardNamed = window.match(/forwardRef\s*<\s*[^,>]+\s*,\s*([A-Za-z0-9_]+)\s*>/);
  if (forwardNamed && types.has(forwardNamed[1])) return types.get(forwardNamed[1]);
  return "";
}

function parseFields(body) {
  const fields = [];
  let i = 0;
  while (i < body.length) {
    while (i < body.length && /[\s,]/.test(body[i])) i += 1;
    if (body.startsWith("/*", i)) {
      i = body.indexOf("*/", i + 2);
      i = i < 0 ? body.length : i + 2;
      continue;
    }
    if (body.startsWith("//", i)) {
      i = body.indexOf("\n", i);
      i = i < 0 ? body.length : i + 1;
      continue;
    }
    if (i >= body.length) break;
    let key = "";
    if (body[i] === '"' || body[i] === "'") {
      const quote = body[i];
      i += 1;
      while (i < body.length && body[i] !== quote) {
        key += body[i];
        i += 1;
      }
      i += 1;
    } else if (/[A-Za-z_]/.test(body[i])) {
      while (i < body.length && /[A-Za-z0-9_]/.test(body[i])) {
        key += body[i];
        i += 1;
      }
    } else {
      i += 1;
      continue;
    }
    while (i < body.length && /[ \t]/.test(body[i])) i += 1;
    const optional = body[i] === "?";
    if (optional) i += 1;
    while (i < body.length && /\s/.test(body[i])) i += 1;
    if (body[i] !== ":") continue;
    i += 1;
    const type = readType(body, i);
    fields.push({ key, optional, type: type.text.trim() });
    i = type.end;
  }
  return fields;
}

function readType(body, start) {
  let i = start;
  let brace = 0;
  let angle = 0;
  let paren = 0;
  let bracket = 0;
  let text = "";
  while (i < body.length) {
    if (body.startsWith("/*", i)) {
      const end = body.indexOf("*/", i + 2);
      i = end < 0 ? body.length : end + 2;
      continue;
    }
    if (body.startsWith("//", i)) {
      const end = body.indexOf("\n", i);
      i = end < 0 ? body.length : end + 1;
      continue;
    }
    const c = body[i];
    if ((c === ";" || c === ",") && brace === 0 && angle === 0 && paren === 0 && bracket === 0) {
      i += 1;
      break;
    }
    if (c === "\n" && brace === 0 && angle === 0 && paren === 0 && bracket === 0) {
      let j = i + 1;
      while (j < body.length && /[ \t]/.test(body[j])) j += 1;
      if (body[j] !== "|") break;
    }
    if (c === "{") brace += 1;
    else if (c === "}") {
      if (brace === 0) break;
      brace -= 1;
    } else if (c === "<") angle += 1;
    else if (c === ">") angle = Math.max(0, angle - 1);
    else if (c === "(") paren += 1;
    else if (c === ")") paren = Math.max(0, paren - 1);
    else if (c === "[") bracket += 1;
    else if (c === "]") bracket = Math.max(0, bracket - 1);
    text += c;
    i += 1;
  }
  return { text, end: i };
}

function hasDefaultAssignment(line) {
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== "=") continue;
    const prev = line[i - 1];
    const next = line[i + 1];
    if (next === "=" || next === ">" || prev === "=" || prev === "!" || prev === "<" || prev === ">") continue;
    return true;
  }
  return false;
}

function paramBrace(source, component) {
  const named = source.search(new RegExp(`function\\s+${component}\\s*(?:<[^>]*>)?\\s*\\(`));
  const from = named >= 0 ? named : source.search(new RegExp(`export const ${component}\\b`));
  if (from < 0) return -1;
  const window = source.slice(from, from + 1800);
  const match = window.match(/\(\s*\{/);
  if (!match) return -1;
  return from + window.indexOf(match[0]) + match[0].length - 1;
}

function destructureDefaults(source, component) {
  const defaults = new Set();
  const required = new Set();
  const brace = paramBrace(source, component);
  if (brace < 0) return { defaults, required };
  const body = readBalanced(source, brace, { "{": "}" });
  for (const raw of body.split(",")) {
    const line = raw.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").trim();
    if (!line || line.startsWith("...")) continue;
    const renamed = line.match(/^["']?([A-Za-z0-9_-]+)["']?\s*:/);
    const plain = line.match(/^([A-Za-z_][A-Za-z0-9_]*)/);
    const key = renamed ? renamed[1] : plain ? plain[1] : "";
    if (!key) continue;
    if (hasDefaultAssignment(line) && !/=\s*[\[{]/.test(line.replace(/=>/g, ""))) defaults.add(key);
    else required.add(key);
  }
  return { defaults, required };
}

function splitTop(type, op) {
  const parts = [];
  let depth = 0;
  let angle = 0;
  let current = "";
  for (let i = 0; i < type.length; i++) {
    const c = type[i];
    if (c === "{" || c === "(") depth += 1;
    else if (c === "}" || c === ")") depth -= 1;
    else if (c === "<") angle += 1;
    else if (c === ">") angle -= 1;
    if (c === op && depth === 0 && angle === 0) {
      parts.push(current.trim());
      current = "";
    } else current += c;
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

function stringSample(key, variant) {
  if (key === "id" || key === "value" || key === "key") return variant ? '"b"' : '"a"';
  if (/href|url|src/i.test(key)) return '"#"';
  if (/email/i.test(key)) return '"ada@example.com"';
  if (/color|fill|stroke/i.test(key)) return variant ? '"#c2a46a"' : '"#7aa2ff"';
  if (key === "date") return variant ? '"2026-11-14"' : '"2026-11-15"';
  if (/time|start|end|from|to|iso|at$/i.test(key)) return variant ? '"2026-11-14T10:30:00.000Z"' : '"2026-11-15T09:00:00.000Z"';
  if (key === "text" || key === "content" || key === "description" || key === "body") {
    return variant ? '"第二段用来占位的说明。"' : '"这是一段用来预览排版的示例文字。"';
  }
  return variant ? '"第二项"' : '"示例"';
}

function resolveAlias(type, aliases, seen = new Set()) {
  let current = type.trim();
  while (aliases.has(current) && !seen.has(current)) {
    seen.add(current);
    current = aliases.get(current).trim();
  }
  return current;
}

function valueForType(raw, types, aliases, depth, variant, stack, key = "") {
  if (depth > 5) return stringSample(key, variant);
  let type = raw.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").trim();
  type = type.replace(/\s*\|\s*(?:undefined|null)\b/g, "").replace(/^(?:undefined|null)\s*\|\s*/, "").trim();
  type = type.replace(/^readonly\s+/, "");
  type = resolveAlias(type, aliases);
  if (type.startsWith("(") && type.endsWith(")") && !type.includes("=>")) {
    return valueForType(type.slice(1, -1), types, aliases, depth + 1, variant, stack, key);
  }
  if (!type) return stringSample(key, variant);
  if (type === "string") return stringSample(key, variant);
  if (type === "number") return /^(index|active|step|page|selected|current|activeIndex|selectedIndex)$/i.test(key) ? "0" : variant ? "18" : "42";
  if (type === "boolean") return variant ? "false" : "true";
  if (type === "Date") return variant ? "new Date(Date.now() - 86400000)" : "new Date()";
  if (/CSSProperties/.test(type)) return "{}";
  if (/\bReactElement\b/.test(type)) return '<button type="button">示例</button>';
  if (/ReactNode|JSX\.Element/.test(type)) return stringSample(key || "text", variant);
  if (hasTopLevelArrow(type)) return "() => {}";
  if (type.startsWith("[")) {
    const inner = type.slice(1, type.lastIndexOf("]"));
    const parts = splitTop(inner, ",").map((part, index) => valueForType(part, types, aliases, depth + 1, index, stack) || "0");
    return `[${parts.join(", ")}]`;
  }
  const array = type.match(/^([\s\S]*)\[\]$/);
  if (array) return arraySample(array[1], types, aliases, depth, stack);
  const generic = type.match(/^(?:Array|ReadonlyArray)\s*<([\s\S]+)>$/);
  if (generic) return arraySample(generic[1], types, aliases, depth, stack);
  if (/^Set\s*</.test(type)) return 'new Set(["示例", "第二项"])';
  const record = type.match(/^Record\s*<\s*[^,]+,\s*([\s\S]+)>$/);
  if (record) {
    const inner = valueForType(record[1], types, aliases, depth + 1, variant, stack, "a") || '"示例"';
    return `{ a: ${inner} }`;
  }
  const partial = type.match(/^(?:Partial|Readonly|Required)\s*<([\s\S]+)>$/);
  if (partial) return valueForType(partial[1], types, aliases, depth + 1, variant, stack, key);
  if (type.startsWith("{")) {
    const inner = type.slice(1, type.lastIndexOf("}"));
    return objectLiteral(parseFields(inner), types, aliases, depth + 1, variant, stack);
  }
  if (type.startsWith('"') || type.startsWith("'")) return splitTop(type, "|")[0];
  if (type.includes("|")) {
    const parts = splitTop(type, "|").map((part) => part.trim()).filter(Boolean);
    return valueForType(parts[0] || "string", types, aliases, depth + 1, variant, stack, key);
  }
  if (types.has(type)) {
    if (stack.has(type)) return '{ id: "a", label: "示例" }';
    stack.add(type);
    const literal = objectLiteral(parseFields(types.get(type)), types, aliases, depth + 1, variant, stack);
    stack.delete(type);
    return literal;
  }
  if (key.startsWith("on") && key.length > 2 && key[2] === key[2].toUpperCase()) return "() => {}";
  return "";
}

function hasTopLevelArrow(type) {
  let depth = 0;
  for (let i = 0; i < type.length - 1; i++) {
    const c = type[i];
    if (c === "{" || c === "(" || c === "[") depth += 1;
    else if (c === "}" || c === ")" || c === "]") depth -= 1;
    else if (depth === 0 && c === "=" && type[i + 1] === ">") return true;
  }
  return false;
}

function arraySample(inner, types, aliases, depth, stack) {
  const resolved = resolveAlias(inner, aliases);
  const members = resolved.includes("|")
    ? splitTop(resolved, "|")
        .map((part) => part.trim())
        .filter((part) => part && part !== "null" && part !== "undefined" && !hasTopLevelArrow(part))
    : [resolved];
  const samples = members.map((part, index) => {
    const expr = valueForType(part, types, aliases, depth + 1, index, stack);
    return expr || (index ? '{ id: "b", label: "第二项" }' : '{ id: "a", label: "示例" }');
  });
  if (samples.length === 1) samples.push(valueForType(members[0], types, aliases, depth + 1, 1, stack) || '{ id: "b", label: "第二项" }');
  return `[${samples.join(", ")}]`;
}

function objectLiteral(fields, types, aliases, depth, variant, stack) {
  const parts = [];
  for (const field of fields) {
    if (field.key === "className" || field.key === "style") continue;
    if (field.optional && !/\[\]|>/.test(field.type) && !/^[A-Z]/.test(field.type) && field.type !== "Date") continue;
    const expr = valueForType(field.type, types, aliases, depth, variant, stack, field.key);
    if (!expr || expr === "() => {}") continue;
    const prop = /^[A-Za-z_][A-Za-z0-9_]*$/.test(field.key) ? field.key : JSON.stringify(field.key);
    parts.push(`${prop}: ${expr}`);
  }
  if (!parts.length) return variant ? '{ id: "b", label: "第二项" }' : '{ id: "a", label: "示例" }';
  return `{ ${parts.join(", ")} }`;
}

function interestingOptional(type) {
  return /\[\]|Array<|ReadonlyArray<|Date|\bSet<|^[A-Z{]/.test(type) && !/CSSProperties|=>/.test(type);
}

function propsLiteral(source, component) {
  const { types, aliases } = extractTypes(source);
  const body = propsTypeBody(source, component, types);
  const fields = body ? parseFields(body) : [];
  const { defaults, required } = destructureDefaults(source, component);
  const byKey = new Map(fields.map((field) => [field.key, field]));
  const keys = [...new Set([...byKey.keys(), ...required])];
  const lines = [];
  for (const key of keys) {
    if (key === "className" || key === "style" || key === "sx" || defaults.has(key)) continue;
    const field = byKey.get(key);
    const must = required.has(key) || (field && !field.optional);
    if (!must && field && !interestingOptional(field.type)) continue;
    if (!must && !field) continue;
    const expr = field
      ? valueForType(field.type, types, aliases, 0, 0, new Set(), key)
      : key.startsWith("on")
        ? "() => {}"
        : "";
    if (!expr) continue;
    if (!must && expr === "() => {}") continue;
    const prop = /^[A-Za-z_][A-Za-z0-9_]*$/.test(key) ? key : JSON.stringify(key);
    lines.push(`    ${prop}: ${expr},`);
  }
  if (!lines.length) return "";
  return `{\n${lines.join("\n")}\n  }`;
}

let count = 0;
for (const item of items) {
  if (item.sourceId !== "nsui") continue;
  const name = item.id.replace(/^nsui-/, "");
  const source = item.files?.[0]?.content || "";
  if (!source.trim()) continue;
  const cleaned = source.replace(/^["']use client["'];?\s*/m, "");
  const banner = `/* ns-ui · MIT · Copyright (c) 2026 Nikolas Sapalidis · https://github.com/nikolas-sapa/ns-ui */\n`;
  writeFileSync(join(components, `${name}.tsx`), banner + cleaned);
  if (special[name]) {
    writeFileSync(join(mounts, `${name}.tsx`), special[name]);
  } else {
    const component = exportName(cleaned);
    const props = component ? propsLiteral(cleaned, component) : "";
    const body = component
      ? `import { ${component} } from "../components/${name}";
export default function Mount() {
  return <div className="ns-stage"><${component} ${props ? `{...${props}}` : ""} /></div>;
}
`
      : `export default function Mount() {
  return <p className="ns-fallback" data-nsui="error">「${name}」没有可渲染的组件导出。</p>;
}
`;
    writeFileSync(join(mounts, `${name}.tsx`), body);
  }
  count += 1;
}
console.log(`generated ${count} ns-ui mounts`);
