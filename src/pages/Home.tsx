import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { items, listedItems, categories, sourceOptions, licenseOptions } from "@/data/catalog";
import { filterItems } from "@/lib/search";
import { ItemCard } from "@/components/ItemCard";

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
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-2.5 py-1 text-[12.5px] border transition-colors ${
        active
          ? "border-[var(--color-accent)] bg-[color-mix(in_oklab,var(--color-accent)_18%,transparent)] text-[var(--color-ink)]"
          : "border-[var(--color-line)] text-[var(--color-mute)] hover:text-[var(--color-ink)] hover:border-[#4a4338]"
      }`}
    >
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

  function patch(next: Record<string, string>) {
    const p = new URLSearchParams(params);
    for (const [k, v] of Object.entries(next)) {
      if (v) p.set(k, v);
      else p.delete(k);
    }
    setParams(p, { replace: true });
  }

  const filtered = useMemo(
    () => filterItems(listedItems, q, category, source, license),
    [q, category, source, license],
  );

  const codeCount = items.filter((i) => i.kind === "code").length;
  const linkCount = items.filter((i) => i.kind === "link").length;

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20">
      <section className="pt-12 pb-8 border-b border-[var(--color-line)]">
        <p className="display text-[13px] tracking-[0.18em] uppercase text-[var(--color-accent-2)] mb-3">
          开源 · 可追溯
        </p>
        <h1 className="display text-5xl sm:text-6xl leading-[1.05] mb-5">源集</h1>
        <p className="max-w-xl text-[17px] leading-relaxed text-[#c9c2b6]">
          把许可明确的开源 UI 收在一起，分好类，能搜索，并注明来源。
          付费和协议不清楚的，只留链接，不复制代码。
        </p>
        <p className="mt-5 text-sm text-[var(--color-mute)]">
          {codeCount} 个可复制条目 · {linkCount} 个仅链接 · {new Set(items.map((i) => i.sourceId)).size} 个来源
        </p>
      </section>

      <div className="sticky top-14 z-20 -mx-6 px-6 py-3 bg-[color-mix(in_oklab,var(--color-paper)_92%,transparent)] backdrop-blur-md border-b border-[var(--color-line)] mb-8">
        <input
          type="search"
          value={q}
          onChange={(e) => patch({ q: e.target.value })}
          placeholder="搜索名称、描述、标签或来源"
          className="w-full mb-3 rounded-lg border border-[var(--color-line)] bg-[var(--color-panel)] px-3.5 py-2.5 text-sm outline-none focus:border-[#5a5248] placeholder:text-[#6d675e]"
          aria-label="搜索"
        />
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] text-[var(--color-mute)] w-10 shrink-0">分类</span>
            <Chip active={!category} onClick={() => patch({ cat: "" })}>
              全部
            </Chip>
            {categories.map((c) => (
              <Chip key={c} active={category === c} onClick={() => patch({ cat: category === c ? "" : c })}>
                {c}
              </Chip>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] text-[var(--color-mute)] w-10 shrink-0">来源</span>
            <Chip active={!source} onClick={() => patch({ src: "" })}>
              全部
            </Chip>
            {sourceOptions.map((s) => (
              <Chip key={s.id} active={source === s.id} onClick={() => patch({ src: source === s.id ? "" : s.id })}>
                {s.name}
              </Chip>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] text-[var(--color-mute)] w-10 shrink-0">许可</span>
            <Chip active={!license} onClick={() => patch({ lic: "" })}>
              全部
            </Chip>
            {licenseOptions.map((l) => (
              <Chip key={l} active={license === l} onClick={() => patch({ lic: license === l ? "" : l })}>
                {l}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-[var(--color-mute)] mb-4">
        {filtered.length} 项{q || category || source || license ? "（已筛选）" : ""}
      </p>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-[var(--color-mute)]">没有符合条件的条目。试着换一组筛选，或清空搜索。</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
