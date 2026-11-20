import { useState, type ReactNode } from "react";

/** Preview chrome. Remounts one-shot CYBR animations so the iframe is not stuck on the last frame. */
export function Replay({ children }: { children: ReactNode }) {
  const [key, setKey] = useState(0);
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div key={key} className="flex w-full justify-center">
        {children}
      </div>
      <button
        type="button"
        className="cursor-pointer border border-line bg-transparent px-3 py-1 font-mono text-xs tracking-label text-label"
        onClick={() => setKey((n) => n + 1)}
      >
        REPLAY
      </button>
    </div>
  );
}
