import { Suspense, useEffect, useRef, useState } from "react";
import type { Item } from "@/data/types";
import { PreviewMap } from "@/previews/index";

/** file:// and any subpath host: turn root-absolute paths into relative ones. */
function assetUrl(src: string): string {
  if (!src) return src;
  if (src.startsWith("/")) return "." + src;
  return src;
}



function useVisible(rootMargin = "200px") {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { rootMargin, threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);
  return { ref, visible };
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
  const { ref, visible } = useVisible(interactive ? "400px" : "160px");
  const h = height ?? (interactive ? item.iframeHeight || 440 : 220);

  if (item.preview === "none" || item.kind === "link") {
    return (
      <div
        className={`preview-clip flex items-center justify-center text-sm text-[var(--color-mute)] ${className}`}
        style={{ height: h }}
      >
        <span className="badge-link rounded-full px-3 py-1 text-xs">仅链接，未确认可再分发</span>
      </div>
    );
  }

  if (item.preview === "code") {
    return (
      <div
        className={`preview-clip flex items-center justify-center px-6 text-center ${className}`}
        style={{ height: Math.min(h, 220) }}
      >
        <p className="text-sm text-[var(--color-mute)] leading-relaxed">
          这项提供源码{item.prompt ? "和提示词" : ""}，因依赖较重或只是提示词，没有站内实时预览。
        </p>
      </div>
    );
  }

  return (
    <div ref={ref} className={`preview-clip ${className}`} style={{ height: h }}>
      {!visible ? (
        <div className="absolute inset-0 grid place-items-center text-[var(--color-mute)] text-xs">
          预览将在进入视野时加载
        </div>
      ) : item.preview === "iframe" && item.iframeSrc ? (
        <iframe
          title={`${item.nameZh} 预览`}
          src={assetUrl(item.iframeSrc)}
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
          className={interactive ? "" : "pointer-events-none"}
          tabIndex={interactive ? 0 : -1}
        />
      ) : item.preview === "react" ? (
        <div className={`absolute inset-0 ${interactive ? "overflow-auto" : "overflow-hidden pointer-events-none"}`}>
          <Suspense
            fallback={
              <div className="h-full grid place-items-center text-xs text-[var(--color-mute)]">载入预览…</div>
            }
          >
            <PreviewMap id={item.reactPreview} interactive={interactive} />
          </Suspense>
        </div>
      ) : null}
    </div>
  );
}
