import rawItems from "./generated/meta.json";
import rawSources from "./sources.json";
import type { Item, SourceRecord } from "./types";

export const items = rawItems as Item[];
export const sources = rawSources as SourceRecord[];

export const categories = [
  "按钮",
  "卡片",
  "背景/Shader",
  "文字动效",
  "滚动动效",
  "加载动画",
  "AI 界面组件",
  "语音/光球",
  "导航",
  "表单",
  "游戏 UI",
  "提示词",
  "着色器/WebGPU",
] as const;

export function itemById(id: string): Item | undefined {
  return items.find((i) => i.id === id);
}

export function countsByCategory(list: Item[] = items) {
  const map = new Map<string, number>();
  for (const i of list) {
    map.set(i.category, (map.get(i.category) ?? 0) + 1);
  }
  return map;
}

export const sourceOptions = Array.from(
  new Map(items.map((i) => [i.sourceId, i.sourceName])).entries(),
).map(([id, name]) => ({ id, name }));

export const licenseOptions = Array.from(new Set(items.map((i) => i.license))).sort();

const previewRank = (i: Item) =>
  i.preview === "iframe" || i.preview === "react" ? 0 : i.preview === "code" ? 1 : 2;

const sourceRank = (id: string) => {
  const order = [
    "foundry44","radiant","voiceorbs","lucian","mekai","libraries","crucible","cuekit","ndekoui",
    "uibrik","ditherui","motionprompts","scrolltide",
  ];
  const n = order.indexOf(id);
  return n === -1 ? 99 : n;
};

/** Default listing order: live previews first, then a pleasant source sequence. */
export const listedItems = [...items].sort((a, b) => {
  const pr = previewRank(a) - previewRank(b);
  if (pr) return pr;
  const sr = sourceRank(a.sourceId) - sourceRank(b.sourceId);
  if (sr) return sr;
  return a.nameZh.localeCompare(b.nameZh, "zh");
});
