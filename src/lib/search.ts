import Fuse from "fuse.js";
import type { Item } from "@/data/types";

export function filterItems(
  list: Item[],
  q: string,
  category: string,
  source: string,
  license: string,
): Item[] {
  let out = list;
  if (category) out = out.filter((i) => i.category === category);
  if (source) out = out.filter((i) => i.sourceId === source);
  if (license) out = out.filter((i) => i.license === license);
  const query = q.trim();
  if (!query) return out;
  const fuse = new Fuse(out, {
    keys: [
      { name: "nameZh", weight: 2 },
      { name: "name", weight: 2 },
      { name: "description", weight: 1.4 },
      { name: "tags", weight: 1.2 },
      { name: "sourceName", weight: 1 },
      { name: "author", weight: 0.6 },
      { name: "license", weight: 0.4 },
    ],
    threshold: 0.38,
    ignoreLocation: true,
    minMatchCharLength: 1,
  });
  return fuse.search(query).map((r) => r.item);
}
