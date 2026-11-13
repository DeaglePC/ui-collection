/**
 * Crucible · Cipher
 * MIT License · Copyright (c) 2026 Crucible (crucibleui.com)
 * https://crucibleui.com · https://crucibleui.com/r/cipher.json
 */
"use client";

import * as React from "react";

import { cn } from "../cn";
import { useReducedMotion } from "../use-reduced-motion";

export interface CipherProps extends Omit<React.ComponentPropsWithoutRef<"span">, "children"> {
  /** The text to resolve into. */
  children: string;
  /** What starts the scramble. @default "mount" */
  trigger?: "mount" | "hover" | "view";
  /** Order characters lock into place. @default "random" */
  resolveOrder?: "start" | "end" | "center" | "random";
  /** Glyphs drawn from while a character is still scrambling. @default abstract glyph set */
  charset?: string;
  /** Seconds for the whole string to resolve. @default 1.1 */
  duration?: number;
  /** Seconds to wait before the scramble starts. @default 0 */
  delay?: number;
  /**
   * Re-run every time the element scrolls back into view (`trigger="view"`).
   * The `hover` trigger always re-scrambles on each hover. @default false
   */
  repeat?: boolean;
  /** Color of the still-scrambling glyphs. @default neutral-400 */
  scrambleColor?: string;
  /** Color of the brief flash when a character locks in. @default white */
  flashColor?: string;
}

const DEFAULT_CHARSET = "⟁⟂⟃⟄⏃⏚⌬⌭⎔⋈⋔※᛭ᚨᚱᚲ0123456789#%&";

function computeRanks(n: number, order: NonNullable<CipherProps["resolveOrder"]>): number[] {
  const ranks = new Array<number>(n);
  if (order === "end") {
    for (let i = 0; i < n; i++) ranks[i] = n - 1 - i;
    return ranks;
  }
  if (order === "center") {
    const center = (n - 1) / 2;
    const idx = Array.from({ length: n }, (_, i) => i).sort(
      (a, b) => Math.abs(a - center) - Math.abs(b - center) || a - b
    );
    idx.forEach((charIndex, rank) => {
      ranks[charIndex] = rank;
    });
    return ranks;
  }
  if (order === "random") {
    const idx = Array.from({ length: n }, (_, i) => i);
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = idx[i]!;
      idx[i] = idx[j]!;
      idx[j] = tmp;
    }
    idx.forEach((charIndex, rank) => {
      ranks[charIndex] = rank;
    });
    return ranks;
  }
  for (let i = 0; i < n; i++) ranks[i] = i;
  return ranks;
}

/**
 * Cipher — characters churn through scrambled glyphs before locking into the
 * final text, one at a time, in the order you choose — each lock-in marked by
 * a brief white flash. Resolves instantly under reduced motion.
 */
export function Cipher({
  children,
  trigger = "mount",
  resolveOrder = "random",
  charset = DEFAULT_CHARSET,
  duration = 1.1,
  delay = 0,
  repeat = false,
  scrambleColor = "#a3a3a3",
  flashColor = "#ffffff",
  className,
  style,
  ...props
}: CipherProps) {
  const reducedMotion = useReducedMotion();
  const chars = React.useMemo(() => Array.from(children), [children]);
  // Runs of non-space chars (words) vs. whitespace, so the render can keep each
  // word on one line while letting the line break at spaces.
  const wordGroups = React.useMemo(() => {
    const groups: { start: number; end: number; isSpace: boolean }[] = [];
    let i = 0;
    while (i < chars.length) {
      const isSpace = /\s/.test(chars[i]!);
      let j = i;
      while (j < chars.length && /\s/.test(chars[j]!) === isSpace) j++;
      groups.push({ start: i, end: j, isSpace });
      i = j;
    }
    return groups;
  }, [chars]);
  const [display, setDisplay] = React.useState<string[]>(chars);
  const [resolvedMask, setResolvedMask] = React.useState<boolean[]>(() => chars.map(() => true));
  const runIdRef = React.useRef(0);
  const wrapperRef = React.useRef<HTMLSpanElement>(null);
  const hasRunRef = React.useRef(false);

  const run = React.useCallback(() => {
    if (reducedMotion) {
      runIdRef.current++; // cancel any scramble already in flight
      setDisplay(chars);
      setResolvedMask(chars.map(() => true));
      return;
    }
    const n = chars.length;
    if (n === 0) return;
    const ranks = computeRanks(n, resolveOrder);
    const runId = ++runIdRef.current;
    const durationMs = Math.max(duration, 0.05) * 1000;
    const delayMs = Math.max(delay, 0) * 1000;
    const startTime = performance.now();

    setResolvedMask(chars.map(() => false));

    const tick = (now: number) => {
      if (runIdRef.current !== runId) return;
      const elapsed = now - startTime - delayMs;
      if (elapsed < 0) {
        requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(1, elapsed / durationMs);
      const resolvedCount = Math.floor(progress * n);
      const nextDisplay = new Array<string>(n);
      const nextMask = new Array<boolean>(n);
      for (let i = 0; i < n; i++) {
        const original = chars[i]!;
        const isResolved = progress >= 1 || ranks[i]! < resolvedCount || /\s/.test(original);
        nextMask[i] = isResolved;
        nextDisplay[i] = isResolved ? original : (charset[Math.floor(Math.random() * charset.length)] ?? original);
      }
      setDisplay(nextDisplay);
      setResolvedMask(nextMask);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [chars, charset, duration, delay, resolveOrder, reducedMotion]);

  // Stop any in-flight scramble loop on unmount.
  React.useEffect(
    () => () => {
      runIdRef.current++;
    },
    []
  );

  // Reset display whenever the target text itself changes.
  React.useEffect(() => {
    runIdRef.current++; // a scramble of the old text must not overwrite the new one
    setDisplay(chars);
    setResolvedMask(chars.map(() => true));
    hasRunRef.current = false;
  }, [chars]);

  React.useEffect(() => {
    if (trigger !== "mount") return;
    run();
  }, [trigger, run]);

  React.useEffect(() => {
    if (trigger !== "view") return;
    const node = wrapperRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && (!hasRunRef.current || repeat)) {
          hasRunRef.current = true;
          run();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [trigger, repeat, run]);

  const handleMouseEnter = trigger === "hover" ? () => run() : undefined;

  if (reducedMotion) {
    return (
      <span
        ref={wrapperRef}
        aria-label={children}
        className={cn("inline-block", className)}
        style={style}
        {...props}
      >
        <span aria-hidden>{children}</span>
      </span>
    );
  }

  return (
    <span
      ref={wrapperRef}
      aria-label={children}
      onMouseEnter={handleMouseEnter}
      className={cn("inline-block", className)}
      style={
        {
          "--cipher-scramble-color": scrambleColor,
          "--cipher-flash-color": flashColor,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <style>{`
        @keyframes crucible-cipher-quench {
          0% { color: var(--cipher-flash-color); text-shadow: 0 0 8px var(--cipher-flash-color); }
          100% { color: inherit; text-shadow: none; }
        }
        @keyframes crucible-cipher-jitter {
          0%, 100% { transform: translateY(0); opacity: 0.9; }
          50% { transform: translateY(-1px); opacity: 1; }
        }
        [data-crucible="cipher"] .cipher-quench {
          animation: crucible-cipher-quench 0.32s ease-out;
        }
        [data-crucible="cipher"] .cipher-scramble {
          color: var(--cipher-scramble-color);
          animation: crucible-cipher-jitter 0.15s steps(2) infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          [data-crucible="cipher"] .cipher-scramble { animation: none; }
        }
      `}</style>
      <span data-crucible="cipher" aria-hidden className="inline-block">
        {/* Group per-character spans by word so the line only breaks at spaces —
            bare inline-block chars otherwise wrap mid-word (e.g. 'bet|ter'). The
            global index i is preserved for the scramble animation. */}
        {wordGroups.map((g, gi) =>
          g.isSpace ? (
            <span key={`g-${gi}`} className="whitespace-pre">
              {display.slice(g.start, g.end).join("")}
            </span>
          ) : (
            <span key={`g-${gi}`} className="inline-block whitespace-nowrap">
              {Array.from({ length: g.end - g.start }, (_, k) => {
                const i = g.start + k;
                return (
                  <span
                    key={resolvedMask[i] ? `r-${i}` : `s-${i}`}
                    className={cn("inline-block whitespace-pre", resolvedMask[i] ? "cipher-quench" : "cipher-scramble")}
                  >
                    {display[i]}
                  </span>
                );
              })}
            </span>
          )
        )}
      </span>
    </span>
  );
}
