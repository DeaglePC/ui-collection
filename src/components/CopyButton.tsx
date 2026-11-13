import { useState } from "react";

export function CopyButton({
  text,
  label = "复制",
  className = "",
}: {
  text: string;
  label?: string;
  className?: string;
}) {
  const [done, setDone] = useState(false);
  if (!text) return null;
  return (
    <button
      type="button"
      className={`inline-flex items-center gap-1.5 rounded-md border border-[var(--color-line)] bg-[var(--color-panel)] px-3 py-1.5 text-sm hover:border-[#4a4338] hover:bg-[var(--color-panel-2)] ${className}`}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 1600);
        } catch {
          setDone(false);
        }
      }}
    >
      {done ? "已复制" : label}
    </button>
  );
}
