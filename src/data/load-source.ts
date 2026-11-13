import type { ItemSource } from "./types";

const empty: ItemSource = { files: [], prompt: "" };

const payloadLoaders = import.meta.glob("./generated/payloads/*.json");

export async function loadItemSource(id: string): Promise<ItemSource> {
  const load = payloadLoaders[`./generated/payloads/${id}.json`];
  if (!load) return empty;
  const mod = (await load()) as { default: ItemSource };
  return mod.default ?? empty;
}
