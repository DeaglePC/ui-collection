const e=[{path:"components/ui/text-slot-rotate.tsx",language:"tsx",content:`"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// ---------------------------------------------------------------------------
// SlotWordRotate — a rotating-word slot. Distinct from this registry's other
// character-swap mechanics: split-flap-board hinges a single fixed-width
// character card 180deg on a change; counter-carry-ripple diffs a NUMBER by
// place value and flips only the digits that differ. This is neither — it is
// a continuous SLOT-MACHINE REEL per character column (a long vertical strip
// of glyphs scrolls downward and decelerates onto the target letter, always
// travelling the same direction, never a 2-state flip) driving a WHOLE-WORD
// swap on a timer, with the slot's pixel width carried (FLIP) between words
// of different lengths so shorter/longer words don't jump-cut the layout.
// Direct-DOM: reels are CSS transitions on translateY set imperatively via
// refs; only the settled word lives in React state.
// ---------------------------------------------------------------------------

export interface SlotWordRotateProps {
  /** words cycled through, in order, looping */
  words: string[];
  /** ms each word holds before rotating to the next */
  interval?: number;
  /** glyphs a reel spins through before landing (visual only) */
  charset?: string;
  /** number of intermediate glyphs a reel scrolls through before landing */
  reelSteps?: number;
  /** extra classes merged onto the rendered root element */
  className?: string;
}

const DEFAULT_CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const REEL_MS_PER_STEP = 90;
const REEL_STAGGER_MS = 45;
const REEL_EASE = "cubic-bezier(0.2, 0.85, 0.1, 1)";
const WIDTH_MS = 320;
const WIDTH_EASE = "cubic-bezier(0.34, 1.4, 0.64, 1)";

function pick(charset: string) {
  return charset[Math.floor(Math.random() * charset.length)] ?? "A";
}

interface ColumnHandle {
  strip: HTMLDivElement | null;
  cellHeight: number;
}

export function SlotWordRotate({
  words,
  interval = 2400,
  charset = DEFAULT_CHARSET,
  reelSteps = 5,
  className = "",
}: SlotWordRotateProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const probeRef = useRef<HTMLSpanElement>(null);
  const columnsRef = useRef<ColumnHandle[]>([]);
  const reducedRef = useRef(false);
  const pausedRef = useRef(false);
  const indexRef = useRef(0);
  const timerRef = useRef<number | undefined>(undefined);
  const tokenRef = useRef(0);

  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState(() => words[0] ?? "");
  const maxLen = useMemo(() => Math.max(1, ...words.map((w) => w.length)), [words]);
  const chars = useMemo(() => Array.from(displayed), [displayed]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedRef.current = mq.matches;
    const onChange = () => {
      reducedRef.current = mq.matches;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // measures the target word's pixel width from the probe (per-char cell
  // width x length) and eases the row's own width toward it — the width
  // carry that keeps a shorter/longer incoming word from jump-cutting.
  const carryWidth = (word: string) => {
    const row = rowRef.current;
    const probe = probeRef.current;
    if (!row || !probe) return;
    const cellWidth = probe.getBoundingClientRect().width || 10;
    const targetWidth = cellWidth * word.length;
    if (reducedRef.current) {
      row.style.transition = "none";
      row.style.width = \`\${targetWidth}px\`;
      return;
    }
    row.style.transition = \`width \${WIDTH_MS}ms \${WIDTH_EASE}\`;
    row.style.width = \`\${targetWidth}px\`;
  };

  const spinTo = (word: string) => {
    const myToken = ++tokenRef.current;
    carryWidth(word);
    if (reducedRef.current) {
      setDisplayed(word);
      return;
    }
    const cols = columnsRef.current;
    const len = Math.max(word.length, cols.length);
    for (let i = 0; i < len; i++) {
      const col = cols[i];
      if (!col?.strip) continue;
      if (!col.cellHeight) {
        col.cellHeight = col.strip.parentElement?.getBoundingClientRect().height || 0;
      }
      const target = word[i] ?? " ";
      const steps: string[] = [];
      for (let s = 0; s < reelSteps; s++) steps.push(pick(charset));
      steps.push(target === " " ? " " : target);
      col.strip.textContent = "";
      for (const g of steps) {
        const cell = document.createElement("div");
        cell.textContent = g;
        cell.style.height = \`\${col.cellHeight}px\`;
        cell.style.display = "flex";
        cell.style.alignItems = "center";
        cell.style.justifyContent = "center";
        col.strip.appendChild(cell);
      }
      col.strip.style.transition = "none";
      col.strip.style.transform = "translateY(0px)";
      void col.strip.offsetHeight;
      const delay = i * REEL_STAGGER_MS;
      const duration = reelSteps * REEL_MS_PER_STEP;
      col.strip.style.transition = \`transform \${duration}ms \${REEL_EASE} \${delay}ms\`;
      col.strip.style.transform = \`translateY(-\${reelSteps * col.cellHeight}px)\`;
    }
    const settleMs = reelSteps * REEL_MS_PER_STEP + len * REEL_STAGGER_MS + 40;
    window.setTimeout(() => {
      if (tokenRef.current === myToken) setDisplayed(word);
    }, settleMs);
  };

  const goTo = (next: number) => {
    const n = words.length;
    if (n === 0) return;
    const wrapped = ((next % n) + n) % n;
    indexRef.current = wrapped;
    setIndex(wrapped);
    spinTo(words[wrapped] ?? "");
  };

  const scheduleNext = () => {
    window.clearTimeout(timerRef.current);
    if (words.length < 2) return;
    timerRef.current = window.setTimeout(() => {
      if (!pausedRef.current) goTo(indexRef.current + 1);
      scheduleNext();
    }, interval);
  };

  useEffect(() => {
    indexRef.current = 0;
    setIndex(0);
    setDisplayed(words[0] ?? "");
    scheduleNext();
    return () => window.clearTimeout(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words.join("\0"), interval]);

  const onMouseEnter = () => {
    pausedRef.current = true;
  };
  const onMouseLeave = () => {
    pausedRef.current = false;
  };

  return (
    <div
      ref={wrapRef}
      className={\`inline-flex items-center gap-2 \${className}\`}
      onPointerEnter={onMouseEnter}
      onPointerLeave={onMouseLeave}
    >
      <span role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        {displayed}
      </span>

      <button
        type="button"
        aria-label="Previous word"
        onClick={() => goTo(indexRef.current - 1)}
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] border border-border font-mono text-xs text-ns-muted transition-colors hover:border-foreground/40 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ns-accent"
      >
        ‹
      </button>

      <div
        ref={rowRef}
        aria-hidden="true"
        className="relative inline-flex h-[1.4em] items-center overflow-hidden whitespace-nowrap font-mono text-foreground"
        style={{ width: \`\${maxLen}ch\` }}
      >
        <span
          ref={probeRef}
          className="pointer-events-none absolute -left-[9999px] top-0"
          style={{ visibility: "hidden", whiteSpace: "pre" }}
        >
          0
        </span>
        {Array.from({ length: maxLen }).map((_, i) => (
          <div
            key={i}
            className="relative h-[1.4em] overflow-hidden"
            style={{ width: "1ch" }}
          >
            <div
              ref={(el) => {
                if (!columnsRef.current[i]) columnsRef.current[i] = { strip: null, cellHeight: 0 };
                columnsRef.current[i]!.strip = el;
                if (el) columnsRef.current[i]!.cellHeight = el.parentElement?.getBoundingClientRect().height || 0;
              }}
              className="absolute left-0 top-0 flex flex-col will-change-transform"
            >
              <div className="flex h-[1.4em] items-center justify-center">
                {chars[i] ?? " "}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Next word"
        onClick={() => goTo(indexRef.current + 1)}
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px] border border-border font-mono text-xs text-ns-muted transition-colors hover:border-foreground/40 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ns-accent"
      >
        ›
      </button>
    </div>
  );
}
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
