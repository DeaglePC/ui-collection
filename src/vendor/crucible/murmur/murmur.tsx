/**
 * Crucible · Murmur
 * MIT License · Copyright (c) 2026 Crucible (crucibleui.com)
 * https://crucibleui.com · https://crucibleui.com/r/murmur.json
 */
"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "../cn";
import { useReducedMotion } from "../use-reduced-motion";

/* -------------------------------------------------------------------------- */
/*                                   Parsing                                  */
/* -------------------------------------------------------------------------- */

type Token =
  | { kind: "space"; text: string }
  | { kind: "word"; text: string; index: number }
  | { kind: "code"; text: string; index: number };

type Block =
  | { type: "p"; tokens: Token[]; plain: string }
  | { type: "ul"; items: Token[][]; plain: string };

/** Splits one line into prose words, whitespace and `code` spans. Unclosed
 *  backticks (mid-stream) render as code so the chip doesn't flicker. */
function tokenizeLine(line: string, counter: { n: number }): Token[] {
  const tokens: Token[] = [];
  const parts = line.split("`");
  parts.forEach((part, i) => {
    if (i % 2 === 1) {
      if (part.length) tokens.push({ kind: "code", text: part, index: counter.n++ });
      return;
    }
    for (const piece of part.split(/(\s+)/)) {
      if (!piece) continue;
      if (/^\s+$/.test(piece)) tokens.push({ kind: "space", text: " " });
      else tokens.push({ kind: "word", text: piece, index: counter.n++ });
    }
  });
  return tokens;
}

/** Lightweight block parser: blank lines split paragraphs, `- ` lines form a
 *  bullet list, inline `code` becomes a chip. Deliberately not markdown. */
function parseBlocks(text: string): { blocks: Block[]; words: number } {
  const counter = { n: 0 };
  const blocks: Block[] = [];
  let para: string[] = [];
  let list: string[] = [];

  const flushPara = () => {
    if (!para.length) return;
    const joined = para.join(" ");
    blocks.push({ type: "p", tokens: tokenizeLine(joined, counter), plain: joined.replace(/`/g, "") });
    para = [];
  };
  const flushList = () => {
    if (!list.length) return;
    blocks.push({
      type: "ul",
      items: list.map((l) => tokenizeLine(l, counter)),
      plain: list.map((l) => l.replace(/`/g, "")).join(". "),
    });
    list = [];
  };

  for (const raw of text.split("\n")) {
    const line = raw.trim();
    if (!line) {
      flushPara();
      flushList();
    } else if (/^- /.test(line)) {
      flushPara();
      list.push(line.slice(2));
    } else {
      flushList();
      para.push(line);
    }
  }
  flushPara();
  flushList();
  return { blocks, words: counter.n };
}

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

export interface MurmurProps extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  /** The message text received so far. Blank lines split paragraphs, lines starting with `- ` become bullets, and `backticks` become inline code chips. */
  text: string;
  /** True while more text is still arriving. Shows the breathing caret and animates newly arrived words. @default false */
  streaming?: boolean;
  /** Optional reasoning text, shown in a collapsible "Thinking" section above the answer. */
  reasoning?: string;
  /** True while the assistant is still thinking. Keeps the section open, shimmers the label and counts seconds. When it turns false the section collapses to "Thought for Ns". @default false */
  thinking?: boolean;
  /** When thinking started, in epoch ms. Drives the elapsed counter. Defaults to the moment `thinking` became true. */
  thinkingStartedAt?: number;
  /** How long the thinking took, in seconds. Overrides the measured duration in the "Thought for Ns" label, useful when rendering a finished message. */
  thinkingDuration?: number;
  /** Accent for the caret, the thinking shimmer and focus rings. @default "#a78bfa" (ion violet) */
  accentColor?: string;
  /** How many trailing words get an animated span. Older words render as plain text. @default 40 */
  trailingWords?: number;
}

const STYLES = `
@keyframes crucible-murmur-settle {
  from { opacity: 0; transform: translateY(2px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes crucible-murmur-breathe {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
@keyframes crucible-murmur-shimmer {
  from { background-position: 100% 0; }
  to { background-position: -100% 0; }
}
[data-crucible="murmur"] .murmur-word {
  display: inline-block;
  animation: crucible-murmur-settle 280ms cubic-bezier(0.22, 1, 0.36, 1) both;
}
[data-crucible="murmur"] .murmur-breathe {
  animation: crucible-murmur-breathe 1s ease-in-out infinite;
}
[data-crucible="murmur"] .murmur-shimmer {
  background-image: linear-gradient(90deg, #a3a3a3 0%, #a3a3a3 35%, var(--murmur-accent) 50%, #a3a3a3 65%, #a3a3a3 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: crucible-murmur-shimmer 1.8s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  [data-crucible="murmur"] .murmur-word,
  [data-crucible="murmur"] .murmur-breathe,
  [data-crucible="murmur"] .murmur-shimmer { animation: none; }
}
`;

const CODE_CHIP =
  "rounded-md border border-white/10 bg-white/[0.06] px-1.5 py-px font-mono text-[0.85em] text-neutral-100";

function renderTokens(tokens: Token[], animateFrom: number): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  let plain = "";
  const flush = () => {
    if (plain) out.push(plain);
    plain = "";
  };
  for (const t of tokens) {
    if (t.kind === "space") {
      plain += t.text;
    } else if (t.kind === "code") {
      flush();
      out.push(
        <code key={`c${t.index}`} className={cn(CODE_CHIP, t.index >= animateFrom && "murmur-word")}>
          {t.text}
        </code>
      );
    } else if (t.index >= animateFrom) {
      flush();
      out.push(
        <span key={`w${t.index}`} className="murmur-word">
          {t.text}
        </span>
      );
    } else {
      plain += t.text;
    }
  }
  flush();
  return out;
}

function Caret({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <motion.span
      aria-hidden
      initial={{ opacity: 0, scaleY: 0.4 }}
      animate={{ opacity: 1, scaleY: 1 }}
      exit={{ opacity: 0, scaleY: 0 }}
      transition={reducedMotion ? { duration: 0.12 } : { duration: 0.16, ease: "easeOut" }}
      className="ml-0.5 inline-block h-[1.05em] w-[2px] origin-bottom translate-y-[0.18em] rounded-full align-baseline"
      style={{ backgroundColor: "var(--murmur-accent)", boxShadow: "0 0 8px var(--murmur-accent)" }}
    >
      <span className={cn("block h-full w-full rounded-full", !reducedMotion && "murmur-breathe")} />
    </motion.span>
  );
}

/**
 * Murmur — an assistant message that streams in. Each newly arrived word
 * fades up from a 2px offset (only the trailing ~40 words carry spans, the rest
 * is plain text), and a soft accent caret breathes at the end of the line
 * until the stream ends, then shrinks away. Paragraphs, `- ` bullet lists and
 * inline `code` chips are supported without a markdown parser. An optional
 * "Thinking" disclosure sits above the answer: the label shimmers and counts
 * seconds while thinking, then springs closed to "Thought for Ns".
 *
 * Accessibility: the text is real and selectable. A polite live region
 * announces each paragraph once it is complete, never per token; the message
 * is `aria-busy` while streaming. The disclosure is a button with
 * `aria-expanded`. Under reduced motion words appear without the settle, the
 * caret and label stay static, and the disclosure uses a short fade.
 */
export function Murmur({
  text,
  streaming = false,
  reasoning,
  thinking = false,
  thinkingStartedAt,
  thinkingDuration,
  accentColor = "#a78bfa",
  trailingWords = 40,
  className,
  style,
  ...props
}: MurmurProps) {
  const reducedMotion = useReducedMotion();
  const panelId = React.useId();
  const { blocks, words } = React.useMemo(() => parseBlocks(text), [text]);

  // Only animate words once this instance has seen a live stream, so static
  // messages don't fade their tail in on mount.
  const [hasStreamed, setHasStreamed] = React.useState(streaming);
  if (streaming && !hasStreamed) setHasStreamed(true);
  const animateFrom = hasStreamed && !reducedMotion ? words - trailingWords : Number.POSITIVE_INFINITY;

  /* ---------------------------- thinking state ---------------------------- */
  const [open, setOpen] = React.useState(thinking);
  const [prevThinking, setPrevThinking] = React.useState(thinking);
  if (thinking !== prevThinking) {
    setPrevThinking(thinking);
    setOpen(thinking);
  }

  const [elapsed, setElapsed] = React.useState(0);
  const [measured, setMeasured] = React.useState<number | null>(null);
  React.useEffect(() => {
    if (!thinking) return;
    const start = thinkingStartedAt ?? Date.now();
    const tick = () => setElapsed(Math.max(0, Math.floor((Date.now() - start) / 1000)));
    tick();
    const id = window.setInterval(tick, 250);
    return () => {
      window.clearInterval(id);
      setMeasured(Math.max(1, Math.round((Date.now() - start) / 1000)));
    };
  }, [thinking, thinkingStartedAt]);

  const duration = thinkingDuration ?? measured;
  const showThinking = thinking || reasoning != null;

  /* ------------------------------ announcer ------------------------------- */
  // Announce completed blocks only: while streaming, the last block is still
  // in flight. Static messages (never streamed) announce nothing.
  const [announcement, setAnnouncement] = React.useState("");
  const announcedRef = React.useRef(0);
  const completed = streaming ? Math.max(0, blocks.length - 1) : blocks.length;
  React.useEffect(() => {
    if (completed < announcedRef.current || text.length === 0) {
      announcedRef.current = 0;
      setAnnouncement("");
      return;
    }
    if (!hasStreamed || completed === announcedRef.current) return;
    const fresh = blocks
      .slice(announcedRef.current, completed)
      .map((b) => b.plain)
      .join(" ");
    announcedRef.current = completed;
    setAnnouncement(fresh);
  }, [blocks, completed, hasStreamed, text.length]);

  /* -------------------------------- render -------------------------------- */
  const caret = <AnimatePresence>{streaming && <Caret key="caret" reducedMotion={reducedMotion} />}</AnimatePresence>;
  const lastBlock = blocks.length - 1;

  const panelTransition = reducedMotion
    ? { height: { duration: 0 }, opacity: { duration: 0.15 } }
    : { type: "spring" as const, stiffness: 320, damping: 34, mass: 0.8 };

  return (
    <div
      data-crucible="murmur"
      className={cn("w-full text-[15px] leading-relaxed text-neutral-200", className)}
      style={{ "--murmur-accent": accentColor, ...style } as React.CSSProperties}
      {...props}
    >
      <style>{STYLES}</style>

      {showThinking && (
        <div className="mb-3">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((o) => !o)}
            className="group -mx-1.5 inline-flex items-center gap-1.5 rounded-md px-1.5 py-0.5 text-sm text-neutral-400 outline-none transition-colors hover:text-neutral-200 focus-visible:ring-2 focus-visible:ring-[color:var(--murmur-accent)]"
          >
            <span className={cn("font-medium", thinking && !reducedMotion && "murmur-shimmer")}>
              {thinking ? "Thinking…" : duration != null ? `Thought for ${duration}s` : "Thought process"}
            </span>
            {thinking && <span className="tabular-nums text-neutral-500">{elapsed}s</span>}
            <svg
              aria-hidden
              viewBox="0 0 16 16"
              className={cn(
                "size-3.5 text-neutral-500",
                !reducedMotion && "transition-transform duration-200",
                open && "rotate-90"
              )}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 3.5 10.5 8 6 12.5" />
            </svg>
          </button>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="panel"
                id={panelId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={panelTransition}
                className="overflow-hidden"
              >
                <div className="mt-2 max-h-48 overflow-y-auto whitespace-pre-line border-l border-white/10 pl-3 text-sm leading-relaxed text-neutral-500">
                  {reasoning || (thinking ? "…" : "")}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      <div aria-busy={streaming || undefined} className="space-y-3">
        {blocks.map((block, bi) => {
          const isLast = bi === lastBlock;
          if (block.type === "p") {
            return (
              <p key={`p${bi}`}>
                {renderTokens(block.tokens, animateFrom)}
                {isLast && caret}
              </p>
            );
          }
          return (
            <ul key={`ul${bi}`} className="list-disc space-y-1 pl-5 marker:text-neutral-500">
              {block.items.map((item, ii) => (
                <li key={ii}>
                  {renderTokens(item, animateFrom)}
                  {isLast && ii === block.items.length - 1 && caret}
                </li>
              ))}
            </ul>
          );
        })}
        {blocks.length === 0 && streaming && <p>{caret}</p>}
      </div>

      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              useScriptedStream                             */
/* -------------------------------------------------------------------------- */

export interface ScriptedStreamOptions {
  /** Average characters per second. @default 48 */
  cps?: number;
  /** Delay before the first character, in ms. @default 0 */
  startDelay?: number;
  /** Start streaming on mount. When false, call `restart()` to begin. @default true */
  autoStart?: boolean;
  /** Seed for the deterministic chunk sizes and cadence. @default 7 */
  seed?: number;
  /** Pauses playback while true. @default false */
  paused?: boolean;
  /** Element to watch: playback pauses while it is offscreen. */
  viewportRef?: React.RefObject<Element | null>;
}

export interface ScriptedStream {
  /** The portion of the text revealed so far. */
  text: string;
  /** True while characters are still being revealed. */
  streaming: boolean;
  /** Clears the text and plays it again from the start (after `startDelay`). */
  restart: () => void;
}

/** Deterministic integer hash of (seed, position) — no Math.random. */
function hash(seed: number, n: number): number {
  let h = (seed * 374761393 + n * 668265263) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return (h ^ (h >>> 16)) >>> 0;
}

/**
 * Plays `fullText` out in token-sized chunks on a seeded, deterministic
 * cadence — for demos and for prototyping streaming UI without a backend.
 * Pauses offscreen (via `viewportRef`), on hidden tabs and on `paused`; tears down all timers
 * on unmount. Under reduced motion it returns the full text immediately.
 */
export function useScriptedStream(fullText: string, options: ScriptedStreamOptions = {}): ScriptedStream {
  const { cps = 48, startDelay = 0, autoStart = true, seed = 7, paused = false, viewportRef } = options;
  const reducedMotion = useReducedMotion();

  const [pos, setPos] = React.useState(0);
  const posRef = React.useRef(0);
  const [stage, setStage] = React.useState<"idle" | "delay" | "run" | "done">(autoStart ? "delay" : "idle");
  const [runId, setRunId] = React.useState(0);
  const [inView, setInView] = React.useState(true);

  // Restart when the script itself changes.
  const [prevText, setPrevText] = React.useState(fullText);
  if (prevText !== fullText) {
    setPrevText(fullText);
    posRef.current = 0;
    setPos(0);
    setStage(autoStart ? "delay" : "idle");
  }

  React.useEffect(() => {
    const node = viewportRef?.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setInView(!!entry?.isIntersecting));
    io.observe(node);
    return () => io.disconnect();
  }, [viewportRef]);

  // Hidden tabs pause playback too, so a backgrounded demo doesn't finish unseen.
  const [tabHidden, setTabHidden] = React.useState(false);
  React.useEffect(() => {
    const sync = () => setTabHidden(document.hidden);
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  const halted = paused || !inView || tabHidden || reducedMotion;

  React.useEffect(() => {
    if (stage !== "delay" || halted) return;
    const t = window.setTimeout(() => setStage("run"), startDelay);
    return () => window.clearTimeout(t);
  }, [stage, runId, startDelay, halted]);

  React.useEffect(() => {
    if (stage !== "run" || halted) return;
    const len = fullText.length;
    let timer = 0;
    const step = () => {
      const p = posRef.current;
      if (p >= len) {
        setStage("done");
        return;
      }
      const h = hash(seed, p);
      const k = 1 + (h % 5); // 1–5 chars per chunk, token-ish
      const next = Math.min(len, p + k);
      posRef.current = next;
      setPos(next);
      // Jitter 0.6×–1.4× around the target rate, plus a beat at line breaks.
      const jitter = 0.6 + ((h >>> 8) % 1000) / 1250;
      const pause = fullText.slice(p, next).includes("\n") ? 140 : 0;
      timer = window.setTimeout(step, (k / Math.max(1, cps)) * 1000 * jitter + pause);
    };
    timer = window.setTimeout(step, 0);
    return () => window.clearTimeout(timer);
  }, [stage, runId, halted, fullText, cps, seed]);

  const restart = React.useCallback(() => {
    posRef.current = 0;
    setPos(0);
    setStage("delay");
    setRunId((r) => r + 1);
  }, []);

  if (reducedMotion) return { text: fullText, streaming: false, restart };
  return { text: fullText.slice(0, pos), streaming: stage === "run" && pos < fullText.length, restart };
}
