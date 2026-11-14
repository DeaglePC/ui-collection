import type { ItemSource } from "./types";

type PayloadWindow = Window & { __YJ?: Record<string, ItemSource> };

const empty: ItemSource = { files: [], prompt: "" };

/** file:// cannot import ES modules. Each item's source is a classic script. */
export function loadItemSource(id: string): Promise<ItemSource> {
  const bag = (window as PayloadWindow).__YJ;
  if (bag?.[id]) return Promise.resolve(bag[id]);
  if (!/^[A-Za-z0-9._-]+$/.test(id)) return Promise.resolve(empty);
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = `./assets/payloads/${id}.js`;
    script.onload = () => resolve((window as PayloadWindow).__YJ?.[id] ?? empty);
    script.onerror = () => resolve(empty);
    document.head.appendChild(script);
  });
}
