import { Link } from "react-router";
import type { Item } from "@/data/types";
import { PreviewFrame } from "./PreviewFrame";

export function ItemCard({ item }: { item: Item }) {
  return (
    <Link
      to={`/item/${item.id}`}
      className={`group flex flex-col rounded-xl border overflow-hidden bg-[var(--color-panel)] transition-colors hover:border-[#4a4338] ${
        item.kind === "link" ? "border-dashed border-[#5a4a32]" : "border-[var(--color-line)]"
      }`}
    >
      <PreviewFrame item={item} height={200} />
      <div className="flex flex-col gap-1.5 p-3.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[15px] font-medium leading-snug">
            {item.nameZh}
            <span className="block text-[12px] font-normal text-[var(--color-mute)] mt-0.5">
              {item.name}
            </span>
          </h3>
          {item.kind === "link" ? (
            <span className="badge-link shrink-0 rounded px-1.5 py-0.5 text-[10px] leading-4">仅链接</span>
          ) : (
            <span className="shrink-0 rounded px-1.5 py-0.5 text-[10px] leading-4 border border-[var(--color-line)] text-[var(--color-mute)]">
              {item.license}
            </span>
          )}
        </div>
        <p className="text-[12.5px] text-[var(--color-mute)] line-clamp-2 leading-relaxed">{item.description}</p>
        <div className="mt-1 flex flex-wrap gap-1.5 text-[11px] text-[var(--color-mute)]">
          <span>{item.sourceName}</span>
          <span>·</span>
          <span>{item.category}</span>
        </div>
      </div>
    </Link>
  );
}
