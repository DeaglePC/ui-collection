import { Link, useParams } from "react-router";
import { itemById } from "@/data/catalog";
import { PreviewFrame } from "@/components/PreviewFrame";
import { CodeBlock } from "@/components/CodeBlock";
import { SourceBlock } from "@/components/SourceBlock";
import { CopyButton } from "@/components/CopyButton";

export function ItemPage() {
  const { id } = useParams();
  const item = id ? itemById(id) : undefined;
  if (!item) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-[var(--color-mute)] mb-4">没有这条目录。</p>
        <Link to="/" className="underline underline-offset-2">
          回到目录
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 pb-24">
      <p className="text-sm text-[var(--color-mute)] mb-5">
        <Link to="/" className="hover:text-[var(--color-ink)]">
          目录
        </Link>
        <span className="mx-2">/</span>
        <span>{item.sourceName}</span>
        <span className="mx-2">/</span>
        <span>{item.nameZh}</span>
      </p>

      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="rounded-full border border-[var(--color-line)] px-2 py-0.5 text-[11px] text-[var(--color-mute)]">
              {item.category}
            </span>
            <span className="rounded-full border border-[var(--color-line)] px-2 py-0.5 text-[11px] text-[var(--color-mute)]">
              {item.license}
            </span>
            {item.kind === "link" ? (
              <span className="badge-link rounded-full px-2 py-0.5 text-[11px]">仅链接，未确认可再分发</span>
            ) : null}
          </div>
          <h1 className="display text-4xl leading-tight">{item.nameZh}</h1>
          <p className="mt-1 text-[var(--color-mute)]">{item.name}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {item.files[0] ? <CopyButton text={item.files.map((f) => `/* ${f.path} */\n${f.content}`).join("\n\n")} label="复制代码" /> : null}
          {item.prompt ? <CopyButton text={item.prompt} label="复制提示词" /> : null}
          <a
            href={item.originalUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md border border-[var(--color-line)] px-3 py-1.5 text-sm hover:border-[#4a4338]"
          >
            打开原页
          </a>
        </div>
      </div>

      <p className="max-w-3xl text-[16px] leading-relaxed text-[#d8d2c6] mb-8">{item.description}</p>

      {item.preview !== "none" && item.kind !== "link" ? (
        <PreviewFrame item={item} interactive className="rounded-xl border border-[var(--color-line)] mb-8" />
      ) : (
        <PreviewFrame item={item} className="rounded-xl mb-8" height={160} />
      )}

      <div className="grid lg:grid-cols-[1fr_20rem] gap-8">
        <div className="min-w-0 space-y-6">
          {item.install ? (
            <div>
              <h2 className="text-sm text-[var(--color-mute)] mb-2">安装</h2>
              <div className="flex items-start gap-2">
                <pre className="flex-1 rounded-lg border border-[var(--color-line)] bg-[#0a0908] px-3 py-2 text-[12.5px] font-mono overflow-auto">
                  {item.install}
                </pre>
                <CopyButton text={item.install} label="复制" />
              </div>
            </div>
          ) : null}

          {item.prompt ? (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm text-[var(--color-mute)]">提示词</h2>
                <CopyButton text={item.prompt} label="复制提示词" />
              </div>
              <pre className="rounded-xl border border-[var(--color-line)] bg-[#0a0908] p-4 text-[12.5px] leading-relaxed font-mono max-h-80 overflow-auto whitespace-pre-wrap">
                {item.prompt}
              </pre>
            </div>
          ) : null}

          {item.files.length ? (
            <div>
              <h2 className="text-sm text-[var(--color-mute)] mb-2">源码</h2>
              <CodeBlock files={item.files} />
            </div>
          ) : null}

          {item.notice ? (
            <p className="text-sm text-[var(--color-mute)] leading-relaxed">{item.notice}</p>
          ) : null}

          {item.tags.length ? (
            <p className="text-xs text-[var(--color-mute)]">
              {item.tags.join(" · ")}
            </p>
          ) : null}
        </div>
        <SourceBlock item={item} prominent />
      </div>
    </div>
  );
}
