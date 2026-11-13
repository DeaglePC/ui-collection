import { useState } from "react";
import { Link } from "react-router";
import type { Item } from "@/data/types";
import { PreviewFrame } from "./PreviewFrame";

export function ItemCard({ item, index = 0 }: { item: Item; index?: number }) {
  const [spot, setSpot] = useState({ x: 50, y: 0 });
  return (
    <Link
      to={`/item/${item.id}`}
      data-item-card={item.id}
      className={`item-card rise ${item.kind === "link" ? "is-link" : ""}`}
      style={{
        animationDelay: `${Math.min(index, 8) * 45}ms`,
        ["--mx" as string]: `${spot.x}px`,
        ["--my" as string]: `${spot.y}px`,
      }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setSpot({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }}
    >
      <PreviewFrame item={item} height={196} />
      <div className="flex flex-col gap-1.5 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[15.5px] font-medium leading-snug tracking-tight">
            {item.nameZh}
            <span className="block text-[12px] font-normal text-[var(--color-mute)] mt-0.5">{item.name}</span>
          </h3>
          {item.kind === "link" ? (
            <span className="badge-link shrink-0 rounded-full px-2 py-0.5 text-[10px] leading-4">仅链接</span>
          ) : (
            <span className="shrink-0 rounded-full px-2 py-0.5 text-[10px] leading-4 border border-[var(--color-line)] text-[var(--color-mute)]">
              {item.license}
            </span>
          )}
        </div>
        <p className="text-[12.5px] text-[#c9c2b6] line-clamp-2 leading-relaxed">{item.description}</p>
        <div className="mt-1 flex flex-wrap gap-1.5 text-[11px] text-[var(--color-mute)]">
          <span>{item.sourceName}</span>
          <span>·</span>
          <span>{item.category}</span>
        </div>
      </div>
    </Link>
  );
}
