import { useMemo, useState } from "react";
import type { CodeFile } from "@/data/types";
import { CopyButton } from "./CopyButton";

export function CodeBlock({ files }: { files: CodeFile[] }) {
  const [idx, setIdx] = useState(0);
  const current = files[Math.min(idx, files.length - 1)];
  const pretty = useMemo(() => current?.content ?? "", [current]);
  if (!files.length) return null;
  return (
    <div className="rounded-xl border border-[var(--color-line)] overflow-hidden bg-[#0a0908]">
      <div className="flex items-center gap-1 border-b border-[var(--color-line)] px-2 py-1.5 overflow-x-auto">
        {files.map((f, i) => (
          <button
            key={f.path + i}
            type="button"
            onClick={() => setIdx(i)}
            className={`shrink-0 rounded px-2.5 py-1 text-xs font-mono ${
              i === idx ? "bg-[var(--color-panel-2)] text-[var(--color-ink)]" : "text-[var(--color-mute)] hover:text-[var(--color-ink)]"
            }`}
          >
            {f.path.split("/").slice(-2).join("/")}
          </button>
        ))}
        <div className="ml-auto">
          <CopyButton text={pretty} label="复制代码" />
        </div>
      </div>
      <pre className="overflow-auto max-h-[32rem] p-4 text-[12.5px] leading-relaxed font-mono text-[#e6e0d4]">
        <code>{pretty}</code>
      </pre>
    </div>
  );
}
