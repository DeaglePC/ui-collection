import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router";
import { items, listedItems, categories, sourceOptions, licenseOptions } from "@/data/catalog";
import { filterItems } from "@/lib/search";
import { ItemCard } from "@/components/ItemCard";

const PAGE = 24;

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button type="button" className="chip" aria-pressed={active} onClick={onClick}>
      {children}
    </button>
  );
}

export function Home() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";
  const category = params.get("cat") ?? "";
  const source = params.get("src") ?? "";
  const license = params.get("lic") ?? "";
  const [count, setCount] = useState(PAGE);
  const sentinel = useRef<HTMLDivElement>(null);
  const mac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);

  function patch(next: Record<string, string>) {
    const nextParams = new URLSearchParams(params);
    for (const [key, value] of Object.entries(next)) {
      if (value) nextParams.set(key, value);
      else nextParams.delete(key);
    }
    setParams(nextParams, { replace: true });
  }

  const filtered = useMemo(
    () => filterItems(listedItems, q, category, source, license),
    [q, category, source, license],
  );
  const shown = filtered.slice(0, count);
  const codeCount = items.filter((item) => item.kind === "code").length;
  const linkCount = items.filter((item) => item.kind === "link").length;

  useEffect(() => {
    setCount(PAGE);
  }, [q, category, source, license]);

  useEffect(() => {
    const el = sentinel.current;
    if (!el || count >= filtered.length) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCount((value) => Math.min(value + PAGE, filtered.length));
      },
      { rootMargin: "720px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [count, filtered.length]);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-24">
      <section className="rise pt-10 pb-8">
        <p className="text-[12px] tracking-[0.22em] uppercase text-[var(--color-accent-2)] mb-4">开源 · 可追溯</p>
        <h1 className="display text-6xl sm:text-7xl leading-[0.92] mb-4">源集</h1>
        <p className="max-w-xl text-[17px] leading-relaxed text-[#d5cec2]">
          把许可明确的开源 UI 收在一起，分好类，能搜索，并注明来源。付费和协议不清楚的，只留链接，不复制代码。
        </p>
        <p className="mt-5 text-sm text-[var(--color-mute)] font-mono">
          {codeCount} 个可复制条目 · {linkCount} 个仅链接 · {new Set(items.map((item) => item.sourceId)).size} 个来源
        </p>
      </section>

      <div className="filter-bar mb-6">
        <label className="search-shell mb-3">
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="shrink-0 text-[var(--color-mute)]">
            <circle cx="7" cy="7" r="4.25" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <path d="M10.4 10.4 13.5 13.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input
            id="catalog-search"
            type="search"
            value={q}
            onChange={(event) => patch({ q: event.target.value })}
            placeholder="搜索名称、描述、标签或来源"
            aria-label="搜索"
            autoComplete="off"
          />
          <kbd className="kbd hidden sm:inline">{mac ? "⌘K" : "Ctrl K"}</kbd>
        </label>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[var(--color-mute)] w-8 shrink-0">分类</span>
            <div className="chip-scroller min-w-0 flex-1">
              <Chip active={!category} onClick={() => patch({ cat: "" })}>全部</Chip>
              {categories.map((name) => (
                <Chip key={name} active={category === name} onClick={() => patch({ cat: category === name ? "" : name })}>
                  {name}
                </Chip>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[var(--color-mute)] w-8 shrink-0">来源</span>
            <div className="chip-scroller min-w-0 flex-1">
              <Chip active={!source} onClick={() => patch({ src: "" })}>全部</Chip>
              {sourceOptions.map((option) => (
                <Chip
                  key={option.id}
                  active={source === option.id}
                  onClick={() => patch({ src: source === option.id ? "" : option.id })}
                >
                  {option.name}
                </Chip>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[var(--color-mute)] w-8 shrink-0">许可</span>
            <div className="chip-scroller min-w-0 flex-1">
              <Chip active={!license} onClick={() => patch({ lic: "" })}>全部</Chip>
              {licenseOptions.map((name) => (
                <Chip key={name} active={license === name} onClick={() => patch({ lic: license === name ? "" : name })}>
                  {name}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-[var(--color-mute)] mb-4">
        {filtered.length} 项
        {q || category || source || license ? "（已筛选）" : ""}
        {shown.length < filtered.length ? ` · 已显示 ${shown.length}` : ""}
      </p>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-[var(--color-mute)]">没有符合条件的条目。试着换一组筛选，或清空搜索。</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5" data-testid="catalog-grid">
          {shown.map((item, index) => (
            <ItemCard key={item.id} item={item} index={index} />
          ))}
        </div>
      )}

      {shown.length < filtered.length ? (
        <div className="mt-8 flex flex-col items-center gap-3">
          <div ref={sentinel} className="h-2 w-full" />
          <button type="button" id="load-more" className="load-more" onClick={() => setCount((value) => value + PAGE)}>
            加载更多
          </button>
        </div>
      ) : null}
    </div>
  );
}
