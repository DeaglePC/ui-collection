import type { Item } from "@/data/types";

export function SourceBlock({ item, prominent = false }: { item: Item; prominent?: boolean }) {
  return (
    <aside
      className={`rounded-xl border ${
        item.kind === "link"
          ? "border-dashed border-[#5a4a32] bg-[#1a150e]"
          : "border-[var(--color-line)] bg-[var(--color-panel)]"
      } ${prominent ? "p-5" : "p-4"}`}
    >
      <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--color-accent-2)] mb-2">
        来源与协议
      </div>
      <h3 className="text-base font-medium mb-1">{item.sourceName}</h3>
      <dl className="grid grid-cols-[4.5rem_1fr] gap-x-3 gap-y-1.5 text-sm">
        <dt className="text-[var(--color-mute)]">作者</dt>
        <dd>{item.author || "—"}</dd>
        <dt className="text-[var(--color-mute)]">许可</dt>
        <dd>
          {item.licenseUrl ? (
            <a href={item.licenseUrl} target="_blank" rel="noreferrer" className="underline decoration-white/20 underline-offset-2 hover:decoration-[var(--color-accent)]">
              {item.license}
            </a>
          ) : (
            item.license
          )}
        </dd>
        {item.copyright ? (
          <>
            <dt className="text-[var(--color-mute)]">版权</dt>
            <dd className="text-[13px]">{item.copyright}</dd>
          </>
        ) : null}
        <dt className="text-[var(--color-mute)]">原页</dt>
        <dd>
          <a href={item.originalUrl} target="_blank" rel="noreferrer" className="underline decoration-white/20 underline-offset-2 break-all hover:decoration-[var(--color-accent)]">
            {item.originalUrl}
          </a>
        </dd>
        {item.repo ? (
          <>
            <dt className="text-[var(--color-mute)]">仓库</dt>
            <dd>
              <a href={item.repo} target="_blank" rel="noreferrer" className="underline decoration-white/20 underline-offset-2 break-all hover:decoration-[var(--color-accent)]">
                {item.repo}
              </a>
            </dd>
          </>
        ) : null}
      </dl>
      {item.kind === "link" ? (
        <p className="mt-3 text-sm text-[#c9a06a]">仅链接，未确认可再分发。本站没有复制它的源码、提示词或截图。</p>
      ) : null}
    </aside>
  );
}
