import { Link } from "react-router";
import { sources, items } from "@/data/catalog";

export function LicensesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 pb-24">
      <h1 className="display text-4xl mb-3">来源与协议</h1>
      <p className="text-[#c9c2b6] leading-relaxed mb-4">
        每一条收录都核过许可：有明确的开源许可（MIT 等）才复制源码，并保留版权声明。
        许可不清楚、或条款禁止再分发的，只放链接，标记为「仅链接，未确认可再分发」。
        付费和 Pro 内容没有收入，也没有绕过登录或付费墙。
      </p>
      <p className="text-sm text-[var(--color-mute)] mb-10">
        完整声明也写在仓库的 <code className="font-mono text-[12px]">THIRD_PARTY_NOTICES.md</code> 和{" "}
        <code className="font-mono text-[12px]">LICENSES/</code> 目录里。
      </p>

      <div className="space-y-8">
        {sources.map((s) => {
          const nCode = items.filter((i) => i.sourceId === s.id && i.kind === "code").length;
          const nLink = items.filter((i) => i.sourceId === s.id && i.kind === "link").length;
          return (
            <article key={s.id} className="rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)] p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h2 className="text-xl font-medium">{s.name}</h2>
                <span className="text-xs text-[var(--color-mute)]">
                  {nCode} 个源码项 · {nLink} 个仅链接
                </span>
              </div>
              <dl className="grid grid-cols-[5rem_1fr] gap-x-3 gap-y-1.5 text-sm mb-4">
                <dt className="text-[var(--color-mute)]">站点</dt>
                <dd>
                  <a href={s.url} target="_blank" rel="noreferrer" className="underline decoration-white/20 underline-offset-2 break-all">
                    {s.url}
                  </a>
                </dd>
                {s.repo ? (
                  <>
                    <dt className="text-[var(--color-mute)]">仓库</dt>
                    <dd>
                      <a href={s.repo} target="_blank" rel="noreferrer" className="underline decoration-white/20 underline-offset-2 break-all">
                        {s.repo}
                      </a>
                    </dd>
                  </>
                ) : null}
                <dt className="text-[var(--color-mute)]">许可</dt>
                <dd>
                  {s.licenseUrl ? (
                    <a href={s.licenseUrl} target="_blank" rel="noreferrer" className="underline decoration-white/20 underline-offset-2">
                      {s.license}
                    </a>
                  ) : (
                    s.license
                  )}
                </dd>
                <dt className="text-[var(--color-mute)]">作者</dt>
                <dd>{s.author}</dd>
              </dl>
              <div className="space-y-2 text-sm leading-relaxed text-[#d8d2c6]">
                <p>
                  <span className="text-[var(--color-mute)]">收录：</span>
                  {s.included}
                </p>
                <p>
                  <span className="text-[var(--color-mute)]">未收录：</span>
                  {s.excluded}
                </p>
                <p>
                  <span className="text-[var(--color-mute)]">依据：</span>
                  {s.why}
                </p>
              </div>
              <p className="mt-3">
                <Link to={`/?src=${s.id}`} className="text-sm underline decoration-white/20 underline-offset-2 hover:decoration-[var(--color-accent)]">
                  查看该来源的条目
                </Link>
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
