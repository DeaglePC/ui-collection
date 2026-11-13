import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { itemById } from "@/data/catalog";
import { loadItemSource } from "@/data/load-source";
import type { ItemSource } from "@/data/types";
import { PreviewFrame } from "@/components/PreviewFrame";
import { CodeBlock } from "@/components/CodeBlock";
import { SourceBlock } from "@/components/SourceBlock";
import { CopyButton } from "@/components/CopyButton";

export default function ItemPage() {
  const { id } = useParams();
  const item = id ? itemById(id) : undefined;
  const [source, setSource] = useState<ItemSource | null>(null);

  useEffect(() => {
    if (!id) return;
    let cancel = false;
    setSource(null);
    loadItemSource(id).then((next) => {
      if (!cancel) setSource(next);
    });
    return () => {
      cancel = true;
    };
  }, [id]);

  if (!item) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-[var(--color-mute)] mb-4">没有这条目录。</p>
        <Link to="/" className="underline underline-offset-4">
          回到目录
        </Link>
      </div>
    );
  }

  const files = source?.files ?? [];
  const prompt = source?.prompt ?? "";
  const waiting = source === null && (item.files.length > 0 || item.hasPrompt);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 pb-24" data-testid="item-detail">
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
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="rounded-full border border-[var(--color-line)] px-2.5 py-0.5 text-[11px] text-[var(--color-mute)]">
              {item.category}
            </span>
            <span className="rounded-full border border-[var(--color-line)] px-2.5 py-0.5 text-[11px] text-[var(--color-mute)]">
              {item.license}
            </span>
            {item.kind === "link" ? (
              <span className="badge-link rounded-full px-2.5 py-0.5 text-[11px]">仅链接，未确认可再分发</span>
            ) : null}
          </div>
          <h1 className="display text-4xl sm:text-5xl leading-[1.05]">{item.nameZh}</h1>
          <p className="mt-2 text-[var(--color-mute)]">{item.name}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {files.length ? (
            <CopyButton text={files.map((file) => `/* ${file.path} */\n${file.content}`).join("\n\n")} label="复制代码" />
          ) : null}
          {prompt ? <CopyButton text={prompt} label="复制提示词" /> : null}
          <a
            href={item.originalUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-[var(--color-line)] px-3 py-1.5 text-sm hover:border-[rgba(240,195,122,0.45)]"
          >
            打开原页
          </a>
        </div>
      </div>

      <p className="max-w-3xl text-[16px] leading-relaxed text-[#d8d2c6] mb-8">{item.description}</p>

      <PreviewFrame
        item={item}
        interactive={item.preview !== "none" && item.kind !== "link"}
        className="rounded-2xl border border-[var(--color-line)] mb-8"
        height={item.preview === "none" || item.kind === "link" ? 160 : undefined}
      />

      <div className="grid lg:grid-cols-[minmax(0,1fr)_20rem] gap-8">
        <div className="order-1 lg:order-2">
          <div className="lg:sticky lg:top-20">
            <SourceBlock item={item} prominent />
          </div>
        </div>
        <div className="order-2 lg:order-1 min-w-0 space-y-6">
          {item.install ? (
            <div>
              <h2 className="text-sm text-[var(--color-mute)] mb-2">安装</h2>
              <div className="flex items-start gap-2">
                <pre className="flex-1 rounded-xl border border-[var(--color-line)] bg-[#0c0b09] px-3 py-2 text-[12.5px] font-mono overflow-auto">
                  {item.install}
                </pre>
                <CopyButton text={item.install} label="复制" />
              </div>
            </div>
          ) : null}

          {item.hasPrompt ? (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm text-[var(--color-mute)]">提示词</h2>
                {prompt ? <CopyButton text={prompt} label="复制提示词" /> : null}
              </div>
              <pre className="rounded-xl border border-[var(--color-line)] bg-[#0c0b09] p-4 text-[12.5px] leading-relaxed font-mono max-h-80 overflow-auto whitespace-pre-wrap">
                {prompt || "正在读取提示词…"}
              </pre>
            </div>
          ) : null}

          {item.files.length ? (
            <div>
              <h2 className="text-sm text-[var(--color-mute)] mb-2">源码</h2>
              {waiting || !files.length ? (
                <div className="code-frame grid place-items-center h-36 text-sm text-[var(--color-mute)]">正在读取源码…</div>
              ) : (
                <CodeBlock files={files} />
              )}
            </div>
          ) : null}

          {item.notice ? <p className="text-sm text-[var(--color-mute)] leading-relaxed">{item.notice}</p> : null}

          {item.tags.length ? <p className="text-xs text-[var(--color-mute)]">{item.tags.join(" · ")}</p> : null}
        </div>
      </div>
    </div>
  );
}
