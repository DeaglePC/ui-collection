import { useEffect, useRef, useState } from "react";
import type { Item } from "@/data/types";
import { PreviewMap } from "@/previews/index";

const NEAR = "240px";
const MAX_HEAVY = 6;
const heavySlots = new Set<string>();
const heavyQueue: Array<() => void> = [];

function usePreviewSlot(id: string, needsSlot: boolean) {
  const [granted, setGranted] = useState(false);
  useEffect(() => {
    if (!needsSlot) {
      setGranted(false);
      return;
    }
    let held = false;
    let dead = false;
    const acquire = () => {
      if (dead) return;
      if (heavySlots.size < MAX_HEAVY) {
        heavySlots.add(id);
        held = true;
        setGranted(true);
        return;
      }
      heavyQueue.push(acquire);
    };
    acquire();
    return () => {
      dead = true;
      const index = heavyQueue.indexOf(acquire);
      if (index >= 0) heavyQueue.splice(index, 1);
      if (held) {
        heavySlots.delete(id);
        setGranted(false);
        const next = heavyQueue.shift();
        next?.();
      }
    };
  }, [id, needsSlot]);
  return granted;
}

function assetUrl(src: string): string {
  if (!src) return src;
  if (src.startsWith("/")) return `.${src}`;
  return src;
}

function withFit(src: string, fit: boolean) {
  const url = assetUrl(src);
  if (!fit) return url;
  return `${url}${url.includes("?") ? "&" : "?"}fit=1`;
}

function posterHue(id: string) {
  let hash = 0;
  for (const char of id) hash = (hash * 33 + char.charCodeAt(0)) >>> 0;
  return 18 + (hash % 36);
}

function useNearViewport() {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setNear(entry.isIntersecting),
      { rootMargin: NEAR, threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, near };
}

function Poster({ item }: { item: Item }) {
  return (
    <div className="preview-poster" style={{ ["--poster-h" as string]: String(posterHue(item.id)) }}>
      <span className="text-[10px] tracking-[0.16em] uppercase text-[var(--color-accent-2)]">{item.category}</span>
      <strong>{item.nameZh}</strong>
    </div>
  );
}

export function PreviewFrame({
  item,
  interactive = false,
  className = "",
  height,
}: {
  item: Item;
  interactive?: boolean;
  className?: string;
  height?: number;
}) {
  const { ref, near } = useNearViewport();
  const h = height ?? (interactive ? item.iframeHeight || 440 : 220);
  const live = item.preview === "iframe" || item.preview === "react";
  const heavy = Boolean(item.heavy);
  const wantsLive = near && live && item.kind !== "link" && item.preview !== "code" && item.preview !== "none";
  const slot = usePreviewSlot(item.id, heavy && wantsLive);
  const showLive = wantsLive && (!heavy || slot);

  if (item.preview === "none" || item.kind === "link") {
    return (
      <div className={`preview-clip ${className}`} style={{ height: h }} data-preview-kind="link">
        <div className="absolute inset-0 grid place-items-center text-sm text-[var(--color-mute)]">
          <span className="badge-link rounded-full px-3 py-1 text-xs">仅链接，未确认可再分发</span>
        </div>
      </div>
    );
  }

  if (item.preview === "code") {
    return (
      <div className={`preview-clip ${className}`} style={{ height: Math.min(h, 220) }} data-preview-kind="code">
        <Poster item={item} />
        <div className="absolute inset-x-0 bottom-0 px-4 pb-3 text-[12px] leading-relaxed text-[var(--color-mute)]">
          这项提供源码{item.hasPrompt ? "和提示词" : ""}，因依赖较重或只是提示词，没有站内实时预览。
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`preview-clip ${className}`}
      style={{ height: h }}
      data-preview-kind={item.preview}
      data-preview-mounted={showLive ? "true" : "false"}
    >
      <Poster item={item} />
      {showLive && item.preview === "iframe" && item.iframeSrc ? (
        <iframe
          title={`${item.nameZh} 预览`}
          src={withFit(item.iframeSrc, !interactive)}
          sandbox="allow-scripts allow-same-origin"
          scrolling={interactive ? "auto" : "no"}
          loading="lazy"
          data-preview-live="iframe"
          className={interactive ? "" : "pointer-events-none"}
          tabIndex={interactive ? 0 : -1}
        />
      ) : null}
      {showLive && item.preview === "react" ? (
        <div
          data-preview-live="react"
          className={`absolute inset-0 ${interactive ? "overflow-auto" : "overflow-hidden pointer-events-none"}`}
        >
          <PreviewMap id={item.reactPreview} interactive={interactive} />
        </div>
      ) : null}
    </div>
  );
}
