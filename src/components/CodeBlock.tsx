import { useEffect, useState } from "react";
import type { CodeFile } from "@/data/types";
import { CopyButton } from "./CopyButton";

type Highlighter = {
  highlight: (code: string, options: { language: string; ignoreIllegals: boolean }) => { value: string };
};

let highlighter: Promise<Highlighter> | null = null;

function languageOf(language: string) {
  const name = language.toLowerCase();
  if (name === "html" || name === "xml" || name === "svg") return "xml";
  if (name === "css") return "css";
  if (name === "js" || name === "javascript" || name === "jsx") return "javascript";
  return "typescript";
}

function getHighlighter() {
  highlighter ??= (async () => {
    const core = await import("highlight.js/lib/core");
    const [javascript, typescript, xml, css] = await Promise.all([
      import("highlight.js/lib/languages/javascript"),
      import("highlight.js/lib/languages/typescript"),
      import("highlight.js/lib/languages/xml"),
      import("highlight.js/lib/languages/css"),
    ]);
    const hljs = core.default;
    hljs.registerLanguage("javascript", javascript.default);
    hljs.registerLanguage("typescript", typescript.default);
    hljs.registerLanguage("xml", xml.default);
    hljs.registerLanguage("css", css.default);
    return hljs;
  })();
  return highlighter;
}

export function CodeBlock({ files }: { files: CodeFile[] }) {
  const [idx, setIdx] = useState(0);
  const [html, setHtml] = useState("");
  const current = files[Math.min(idx, Math.max(files.length - 1, 0))];

  useEffect(() => {
    if (!current) return;
    let cancel = false;
    setHtml("");
    getHighlighter().then((hljs) => {
      if (cancel) return;
      setHtml(hljs.highlight(current.content, { language: languageOf(current.language), ignoreIllegals: true }).value);
    });
    return () => {
      cancel = true;
    };
  }, [current]);

  if (!files.length || !current) return null;

  return (
    <div className="code-frame" data-testid="code-block">
      <div className="flex items-center gap-2 border-b border-[var(--color-line)] px-3 py-2">
        <span className="flex gap-1.5 pr-2" aria-hidden="true">
          <i className="h-2.5 w-2.5 rounded-full bg-[#5a3a32]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#6a5428]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#3d4a38]" />
        </span>
        <div className="flex items-center gap-1 overflow-x-auto">
          {files.map((file, index) => (
            <button
              key={file.path + index}
              type="button"
              onClick={() => setIdx(index)}
              className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-mono ${
                index === idx ? "bg-white/10 text-[var(--color-ink)]" : "text-[var(--color-mute)] hover:text-[var(--color-ink)]"
              }`}
            >
              {file.path.split("/").slice(-2).join("/")}
            </button>
          ))}
        </div>
        <div className="ml-auto">
          <CopyButton text={current.content} label="复制代码" />
        </div>
      </div>
      <pre>
        {html ? (
          <code className="hljs" dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <code>{current.content}</code>
        )}
      </pre>
    </div>
  );
}
