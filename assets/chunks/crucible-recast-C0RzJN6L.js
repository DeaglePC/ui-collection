const n=[{path:"registry/default/text/recast/recast.tsx",language:"tsx",content:`"use client";

import { AnimatePresence, motion, useAnimationControls, type Transition } from "motion/react";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export interface RecastProps extends Omit<React.ComponentPropsWithoutRef<"span">, "children"> {
  /**
   * The text to display. Whenever it changes, the word re-forms: shared letters
   * slide to their new home while unique letters iris in/out.
   */
  children?: string;
  /**
   * Optional words to auto-cycle through. When provided, the component morphs
   * between them on a timer (pausing offscreen and on hidden tabs) and
   * \`children\` is ignored.
   */
  words?: string[];
  /** Milliseconds each cycled word holds before re-forming into the next. @default 2600 */
  interval?: number;
  /** Restart from the first word after the last (cycle mode). @default true */
  loop?: boolean;
  /** Freeze cycling on the current word. @default false */
  paused?: boolean;
  /** Seconds the position morph / iris takes. @default 0.6 */
  duration?: number;
  /** Seconds between each entering/leaving letter's start. @default 0.016 */
  stagger?: number;
  /** Fired whenever a new word becomes current (cycle mode). */
  onIndexChange?: (index: number) => void;
}

/** Occurrence-indexed keys so shared letters keep a stable identity across a
 *  morph (the second "n" in "Continue" stays the second "n"), which is what
 *  lets motion's layout engine slide them from their old slot to the new one
 *  instead of cross-fading. Letters with no match iris in/out. */
function keyLetters(text: string): { key: string; char: string }[] {
  const counts = new Map<string, number>();
  const out: { key: string; char: string }[] = [];
  for (const char of Array.from(text)) {
    const n = counts.get(char) ?? 0;
    counts.set(char, n + 1);
    out.push({ key: \`\${char}\0\${n}\`, char });
  }
  return out;
}

/** Split into runs of word (non-space) vs. whitespace so the line only ever
 *  breaks at spaces — each word is its own nowrap group, never split mid-word. */
function tokenize(text: string): { text: string; isSpace: boolean }[] {
  const chars = Array.from(text);
  const tokens: { text: string; isSpace: boolean }[] = [];
  let i = 0;
  while (i < chars.length) {
    const isSpace = /\\s/.test(chars[i]!);
    let j = i;
    while (j < chars.length && /\\s/.test(chars[j]!) === isSpace) j++;
    tokens.push({ text: chars.slice(i, j).join(""), isSpace });
    i = j;
  }
  return tokens;
}

/** One word slot. Owns its own kerning-settle so a phrase's words settle
 *  independently. Letters are keyed by identity; motion's \`layout\` FLIPs the
 *  survivors along the baseline while \`AnimatePresence\` iris-transitions the
 *  rest. Shared letters never touch opacity, so they stay fully legible. */
function WordMorph({
  text,
  duration,
  stagger,
}: {
  text: string;
  duration: number;
  stagger: number;
}) {
  const controls = useAnimationControls();
  const letters = React.useMemo(() => keyLetters(text), [text]);
  const isFirst = React.useRef(true);

  // Kerning settle: once the letters have slid home, the word tightens by a
  // hair into its final rest, like type seating in a form. Driven as a
  // scaleX overshoot on the whole slot — a transform, so it never fights the
  // letters' layout measurement. Skipped on the initial word.
  React.useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    void controls.start(
      { scaleX: [1.03, 1] },
      { duration: duration * 0.8, delay: duration * 0.45, ease: [0.22, 1, 0.36, 1] }
    );
  }, [text, duration, controls]);

  const positionTransition: Transition = { type: "spring", duration, bounce: 0.16 };

  return (
    <motion.span
      animate={controls}
      className="relative inline-block whitespace-nowrap align-baseline will-change-transform"
      style={{ transformOrigin: "50% 60%" }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {letters.map(({ key, char }, i) => (
          <motion.span
            key={key}
            layout
            initial={{ opacity: 0, scale: 0.28 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.28 }}
            transition={{
              layout: positionTransition,
              opacity: { duration: duration * 0.5, delay: i * stagger, ease: [0.4, 0, 0.2, 1] },
              scale: { type: "spring", duration: duration * 0.7, bounce: 0.32, delay: i * stagger },
            }}
            className="inline-block whitespace-pre align-baseline will-change-[transform,opacity]"
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </motion.span>
  );
}

/**
 * Recast — a word that re-forms into a new one. When the text changes, letters
 * shared with the previous word slide along the baseline to their new home
 * while unique letters iris in and out, so the surviving letters stay legible
 * the whole way through (no blur, no scramble, no flash). The letters tighten a
 * hair into their final kerning once they arrive. Neutral monochrome — it
 * inherits the surrounding text color. The first word server-renders as plain
 * text; reduced motion swaps the text instantly.
 */
export function Recast({
  children = "",
  words,
  interval = 2600,
  loop = true,
  paused = false,
  duration = 0.6,
  stagger = 0.016,
  onIndexChange,
  className,
  ...props
}: RecastProps) {
  const reducedMotion = useReducedMotion();
  const cycling = Array.isArray(words) && words.length > 0;

  const [index, setIndex] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [inView, setInView] = React.useState(true);
  const wrapperRef = React.useRef<HTMLSpanElement>(null);

  const safeIndex = cycling ? Math.max(0, Math.min(index, words!.length - 1)) : 0;
  const currentText = cycling ? words![safeIndex] ?? "" : children;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Pause cycling on hidden tabs and offscreen — nothing runs at rest.
  React.useEffect(() => {
    if (!cycling) return;
    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [cycling]);

  React.useEffect(() => {
    if (!cycling) return;
    const node = wrapperRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry?.isIntersecting ?? true);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [cycling]);

  React.useEffect(() => {
    if (!cycling || paused || hidden || !inView || words!.length < 2) return;
    if (!loop && safeIndex === words!.length - 1) return;
    const id = window.setTimeout(() => {
      setIndex((i) => (i + 1) % words!.length);
    }, interval);
    return () => window.clearTimeout(id);
    // \`words.length\`, not \`words\`: an inline array literal is a new identity on
    // every parent render and would otherwise restart the hold timer each time.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cycling, safeIndex, paused, hidden, inView, loop, interval, words?.length]);

  const onIndexChangeRef = React.useRef(onIndexChange);
  React.useEffect(() => {
    onIndexChangeRef.current = onIndexChange;
  });
  const isFirstIndex = React.useRef(true);
  React.useEffect(() => {
    if (isFirstIndex.current) {
      isFirstIndex.current = false;
      return;
    }
    onIndexChangeRef.current?.(safeIndex);
  }, [safeIndex]);

  // Before mount and under reduced motion: plain, static, selectable text —
  // matches SSR exactly (no hydration mismatch) and never animates the first word.
  const showMorph = mounted && !reducedMotion;

  const tokens = React.useMemo(() => (showMorph ? tokenize(currentText) : []), [showMorph, currentText]);
  let wordSlot = 0;

  return (
    <span
      ref={wrapperRef}
      className={cn("inline-block align-baseline", className)}
      {...props}
    >
      {/* Polite live region announces the current word on every change. */}
      <span role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        {currentText}
      </span>

      {showMorph ? (
        <span aria-hidden>
          {tokens.map((token, i) =>
            token.isSpace ? (
              <span key={\`s-\${i}\`} className="whitespace-pre">
                {token.text}
              </span>
            ) : (
              <WordMorph
                key={\`w-\${wordSlot++}\`}
                text={token.text}
                duration={duration}
                stagger={stagger}
              />
            )
          )}
        </span>
      ) : (
        <span aria-hidden>{currentText}</span>
      )}
    </span>
  );
}
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
