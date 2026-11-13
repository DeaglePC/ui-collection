import all from "./generated/all-payloads.json";
import type { ItemSource } from "./types";

const payloads = all as Record<string, ItemSource>;

/** Classic-script fallback: every payload is already in this bundle, so file:// needs no fetch. */
export async function loadItemSource(id: string): Promise<ItemSource> {
  return payloads[id] ?? { files: [], prompt: "" };
}
