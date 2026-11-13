/**
 * Crucible · Relay
 * MIT License · Copyright (c) 2026 Crucible (crucibleui.com)
 * https://crucibleui.com · https://crucibleui.com/r/relay.json
 */
"use client";

import * as React from "react";
import { AnimatePresence, motion, type Transition } from "motion/react";

import { cn } from "../cn";
import { useReducedMotion } from "../use-reduced-motion";

/** Lifecycle of a single tool invocation. */
export type RelayStatus = "pending" | "running" | "success" | "error";

const DEFAULT_ACCENT = "#a78bfa";
const RUST = "#f87171";

const STATUS_WORD: Record<RelayStatus, string> = {
  pending: "pending",
  running: "running",
  success: "succeeded",
  error: "failed",
};

export interface RelayProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  /** Tool name, rendered monospace in the header (e.g. `"search_docs"`). */
  name: string;
  /** Short human summary shown after the name, truncated to one line. */
  summary?: React.ReactNode;
  /** Current lifecycle state — drives the glyph, sheen, shake and timer. @default "pending" */
  status?: RelayStatus;
  /** Tool arguments. Objects/arrays render as tinted, pretty-printed JSON. */
  input?: unknown;
  /** Tool result. Strings render as plain text; anything else as tinted JSON. `undefined` means "not arrived yet". */
  output?: unknown;
  /** Epoch ms when the call started. Enables the elapsed-time readout. */
  startedAt?: number;
  /** Epoch ms when the call finished. Freezes the elapsed readout at an exact duration. */
  endedAt?: number;
  /** Start with the Input/Output body expanded. @default false */
  defaultOpen?: boolean;
  /** Accent for the running arc, success glyph, sheen, JSON keys and focus ring. @default "#a78bfa" (ion violet) */
  accentColor?: string;
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function formatElapsed(ms: number): string {
  const s = Math.max(0, ms) / 1000;
  if (s < 60) return `${s.toFixed(1)}s`;
  const m = Math.floor(s / 60);
  if (m >= 60) {
    // Long-running (or stale `startedAt`) calls: hours + minutes, not "1440m".
    const h = Math.floor(m / 60);
    return `${h}h ${(m % 60).toString().padStart(2, "0")}m`;
  }
  const rest = Math.floor(s % 60);
  return `${m}m ${rest.toString().padStart(2, "0")}s`;
}

function stringify(value: unknown): string {
  if (typeof value === "string") return value;
  try {
    return JSON.stringify(value, null, 2) ?? String(value);
  } catch {
    return String(value);
  }
}

const TOKEN_RE =
  /("(?:\\.|[^"\\])*")(\s*:)?|\b(true|false|null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g;

/** Tokenizes pretty-printed JSON into tinted spans (keys / strings / numbers / literals). */
function JsonTokens({ value, accent }: { value: unknown; accent: string }) {
  const text = stringify(value);
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(TOKEN_RE)) {
    const start = m.index ?? 0;
    if (start > last) nodes.push(text.slice(last, start));
    if (m[1] && m[2]) {
      nodes.push(
        <span key={i++} style={{ color: accent }}>
          {m[1]}
        </span>,
        m[2]
      );
    } else if (m[1]) {
      nodes.push(
        <span key={i++} className="text-neutral-200">
          {m[1]}
        </span>
      );
    } else if (m[3]) {
      nodes.push(
        <span key={i++} className="text-neutral-500 italic">
          {m[3]}
        </span>
      );
    } else if (m[4]) {
      nodes.push(
        <span
          key={i++}
          style={{ color: `color-mix(in srgb, ${accent} 55%, #e5e5e5)` }}
        >
          {m[4]}
        </span>
      );
    }
    last = start + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

function Pane({
  label,
  children,
  tone,
}: {
  label: string;
  children: React.ReactNode;
  tone?: "error";
}) {
  return (
    <div className="min-w-0">
      <div className="mb-1.5 text-[10px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
        {label}
      </div>
      <pre
        className={cn(
          "max-h-56 overflow-auto rounded-md border border-white/[0.06] bg-black/40 px-3 py-2.5 font-mono text-[12px] leading-relaxed whitespace-pre-wrap break-words",
          tone === "error" ? "text-red-300/90" : "text-neutral-300"
        )}
      >
        {children}
      </pre>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Status glyph                                                        */
/* ------------------------------------------------------------------ */

function StatusGlyph({
  status,
  accent,
  reducedMotion,
}: {
  status: RelayStatus;
  accent: string;
  reducedMotion: boolean;
}) {
  const fade: Transition = { duration: reducedMotion ? 0.15 : 0.12 };
  const layer = "absolute inset-0 flex items-center justify-center";

  return (
    <span aria-hidden className="relative inline-block size-4 shrink-0">
      <AnimatePresence initial={false}>
        {status === "pending" && (
          <motion.span
            key="pending"
            className={layer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={fade}
          >
            <svg viewBox="0 0 16 16" className="size-4">
              <circle
                cx="8"
                cy="8"
                r="6.25"
                fill="none"
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="1.5"
              />
            </svg>
          </motion.span>
        )}

        {status === "running" && (
          <motion.span
            key="running"
            className={layer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={fade}
          >
            <svg viewBox="0 0 16 16" className="absolute size-4">
              <circle
                cx="8"
                cy="8"
                r="6.25"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1.5"
              />
            </svg>
            <motion.svg
              viewBox="0 0 16 16"
              className="absolute size-4"
              animate={reducedMotion ? { rotate: 0 } : { rotate: 360 }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { duration: 0.9, ease: "linear", repeat: Infinity }
              }
            >
              <circle
                cx="8"
                cy="8"
                r="6.25"
                fill="none"
                stroke={accent}
                strokeWidth="1.5"
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray="0.28 1"
              />
            </motion.svg>
          </motion.span>
        )}

        {status === "success" && (
          <motion.span
            key="success"
            className={layer}
            initial={{ opacity: reducedMotion ? 0 : 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={fade}
          >
            <svg viewBox="0 0 16 16" className="size-4">
              <motion.circle
                cx="8"
                cy="8"
                r="6.25"
                stroke={accent}
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={
                  reducedMotion
                    ? false
                    : { pathLength: 0.28, fillOpacity: 0 }
                }
                animate={{ pathLength: 1, fillOpacity: 0.16 }}
                style={{ fill: accent, rotate: -90 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
              <motion.path
                d="M5.3 8.3 7.1 10.1 10.8 6.1"
                fill="none"
                stroke={accent}
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={reducedMotion ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3, delay: 0.16, ease: "easeOut" }}
              />
            </svg>
          </motion.span>
        )}

        {status === "error" && (
          <motion.span
            key="error"
            className={layer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={fade}
          >
            <svg viewBox="0 0 16 16" className="size-4">
              <circle cx="8" cy="8" r="7" fill={RUST} />
              <path
                d="M5.6 5.6 10.4 10.4M10.4 5.6 5.6 10.4"
                stroke="#0a0a0a"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Relay                                                               */
/* ------------------------------------------------------------------ */

/**
 * Relay — a compact card for one tool invocation. The header reads
 * status glyph · monospace tool name · summary · elapsed time, and the
 * status lifecycle drives the motion: `pending` is a dim hollow ring,
 * `running` spins an accent arc and sweeps a faint sheen across the header,
 * `success` closes the arc into a full circle and draws a check, `error`
 * fills the ring rust with a single 3px shake. Clicking (or Enter/Space on)
 * the header expands Input/Output panes with tinted JSON; a result arriving
 * while expanded grows in with a height spring.
 *
 * Fully controlled by `status`/`output`/timestamps — drive it from your
 * agent loop. Elapsed time ticks only after mount (no hydration mismatch)
 * and freezes when the call ends.
 *
 * Accessibility: the header is a `button` with `aria-expanded` +
 * `aria-controls`; status is conveyed in sr-only text, and transitions are
 * announced politely ("read_file succeeded"). Honors prefers-reduced-motion:
 * no spin, sheen or shake — glyphs swap with a short fade and the body opens
 * with an opacity fade.
 */
export function Relay({
  name,
  summary,
  status = "pending",
  input,
  output,
  startedAt,
  endedAt,
  defaultOpen = false,
  accentColor = DEFAULT_ACCENT,
  className,
  style,
  ...props
}: RelayProps) {
  const reducedMotion = useReducedMotion();
  const [open, setOpen] = React.useState(defaultOpen);
  const bodyId = React.useId();

  // Elapsed ticker — only after mount, only while running.
  const [now, setNow] = React.useState<number | null>(null);
  React.useEffect(() => {
    if (status !== "running" || startedAt == null) return;
    const first = window.setTimeout(() => setNow(Date.now()), 0);
    const id = window.setInterval(() => setNow(Date.now()), 100);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(id);
    };
  }, [status, startedAt]);

  let elapsed: string | null = null;
  if (startedAt != null) {
    if (status !== "running" && status !== "pending" && endedAt != null) {
      elapsed = formatElapsed(endedAt - startedAt);
    } else if (status !== "pending" && now != null) {
      elapsed = formatElapsed(now - startedAt);
    }
  }

  // Announce transitions (not the initial state) via a polite live region.
  const [prevStatus, setPrevStatus] = React.useState(status);
  const [announcement, setAnnouncement] = React.useState("");
  if (prevStatus !== status) {
    setPrevStatus(status);
    setAnnouncement(`${name} ${STATUS_WORD[status]}`);
  }

  const hasOutput = output !== undefined;
  const isError = status === "error";
  const settle: Transition = reducedMotion
    ? { duration: 0.15 }
    : { type: "spring", stiffness: 380, damping: 34, mass: 0.8 };

  return (
    <motion.div
      {...(props as React.ComponentPropsWithoutRef<typeof motion.div>)}
      data-status={status}
      aria-busy={status === "running" || undefined}
      initial={false}
      animate={
        isError && !reducedMotion ? { x: [0, -3, 3, -2, 1, 0] } : { x: 0 }
      }
      transition={{ duration: 0.32, ease: "easeOut" }}
      className={cn(
        "relative w-full overflow-hidden rounded-lg border bg-neutral-900/70 text-sm shadow-[0_1px_0_rgba(255,255,255,0.04)_inset] transition-colors duration-300",
        isError ? "border-red-400/25" : "border-white/10",
        className
      )}
      style={{ ["--relay-accent" as string]: accentColor, ...style }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={() => setOpen((o) => !o)}
        className="relative flex h-10 w-full items-center gap-2.5 rounded-lg px-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-[var(--relay-accent)] focus-visible:ring-inset"
      >
        {status === "running" && !reducedMotion && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <motion.span
              className="absolute inset-y-0 left-0 w-1/2"
              style={{
                background: `linear-gradient(90deg, transparent, color-mix(in srgb, ${accentColor} 12%, transparent), transparent)`,
              }}
              initial={{ x: "-100%" }}
              animate={{ x: "220%" }}
              transition={{
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.7,
              }}
            />
          </span>
        )}

        <StatusGlyph
          status={status}
          accent={accentColor}
          reducedMotion={reducedMotion}
        />
        <span className="sr-only">{STATUS_WORD[status]}:</span>

        <span
          className={cn(
            "shrink-0 font-mono text-[13px] transition-colors duration-300",
            status === "pending" ? "text-neutral-500" : "text-neutral-100"
          )}
        >
          {name}
        </span>

        <span
          className={cn(
            "min-w-0 flex-1 truncate transition-colors duration-300",
            status === "pending" ? "text-neutral-600" : "text-neutral-400"
          )}
        >
          {summary}
        </span>

        <span className="shrink-0 font-mono text-xs text-neutral-500 tabular-nums">
          {elapsed}
        </span>

        <svg
          aria-hidden
          viewBox="0 0 16 16"
          className={cn(
            "size-3.5 shrink-0 text-neutral-500 transition-transform duration-200",
            open && "rotate-180",
            reducedMotion && "transition-none"
          )}
        >
          <path
            d="M4 6l4 4 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <span role="status" className="sr-only">
        {announcement}
      </span>

      <div id={bodyId}>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="body"
              initial={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              animate={reducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
              exit={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={settle}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-3 border-t border-white/[0.06] px-3 pt-3 pb-3">
                <Pane label="Input">
                  {input === undefined ? (
                    <span className="text-neutral-600">No arguments</span>
                  ) : (
                    <JsonTokens value={input} accent={accentColor} />
                  )}
                </Pane>

                <AnimatePresence initial={false} mode="popLayout">
                  {hasOutput ? (
                    <motion.div
                      key="output"
                      initial={
                        reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }
                      }
                      animate={
                        reducedMotion
                          ? { opacity: 1 }
                          : { height: "auto", opacity: 1 }
                      }
                      exit={{ opacity: 0 }}
                      transition={settle}
                      className="overflow-hidden"
                    >
                      <Pane label="Output" tone={isError ? "error" : undefined}>
                        {typeof output === "string" ? (
                          output
                        ) : (
                          <JsonTokens value={output} accent={accentColor} />
                        )}
                      </Pane>
                    </motion.div>
                  ) : (
                    <motion.p
                      key="waiting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.12 }}
                      className="text-xs text-neutral-500"
                    >
                      {status === "running"
                        ? "Waiting for output…"
                        : status === "pending"
                          ? "Not started yet."
                          : "No output."}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* RelayGroup                                                          */
/* ------------------------------------------------------------------ */

export interface RelayGroupProps
  extends Omit<React.ComponentPropsWithoutRef<"ol">, "children"> {
  /** `<Relay>` elements, in call order. Give each a stable `key` so added/removed calls animate. */
  children?: React.ReactNode;
  /** Accent for the progress spine; also passed to child cards that don't set their own. @default "#a78bfa" */
  accentColor?: string;
  /** Accessible name for the list of calls. @default "Tool calls" */
  label?: string;
}

const GAP_PX = 8;

/**
 * RelayGroup — stacks `<Relay>` cards along a vertical progress spine. Each
 * card gets a node on the spine; the segment leading to the next card fills
 * with accent (rust for a failure) as the card completes, so a chain of calls
 * reads as progress at a glance. Cards added later slide in; removed ones
 * fade out. Rendered as an ordered list.
 */
export function RelayGroup({
  children,
  accentColor = DEFAULT_ACCENT,
  label = "Tool calls",
  className,
  style,
  ...props
}: RelayGroupProps) {
  const reducedMotion = useReducedMotion();
  const items = React.Children.toArray(children).filter(
    React.isValidElement
  ) as React.ReactElement<RelayProps>[];

  return (
    <ol
      aria-label={label}
      {...props}
      className={cn("relative flex w-full flex-col", className)}
      style={{ gap: GAP_PX, ...style }}
    >
      <AnimatePresence initial={false}>
        {items.map((child, index) => {
          const status = child.props.status ?? "pending";
          const done = status === "success" || status === "error";
          const isLast = index === items.length - 1;
          const nodeColor =
            status === "error"
              ? RUST
              : status === "pending"
                ? undefined
                : accentColor;
          const card =
            child.props.accentColor === undefined
              ? React.cloneElement(child, { accentColor })
              : child;

          return (
            <motion.li
              key={child.key ?? index}
              layout={reducedMotion ? false : "position"}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={
                reducedMotion
                  ? { duration: 0.15 }
                  : { type: "spring", stiffness: 420, damping: 34 }
              }
              className="relative pl-6"
            >
              {!isLast && (
                <span
                  aria-hidden
                  className="absolute top-5 left-[5px] w-px overflow-hidden bg-white/10"
                  style={{ height: `calc(100% + ${GAP_PX}px)` }}
                >
                  <motion.span
                    className="absolute inset-0 origin-top"
                    style={{ background: status === "error" ? RUST : accentColor }}
                    initial={false}
                    animate={{ scaleY: done ? 1 : 0, opacity: done ? 1 : 0 }}
                    transition={
                      reducedMotion
                        ? { duration: 0.15 }
                        : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                    }
                  />
                </span>
              )}
              <span
                aria-hidden
                className="absolute top-[15px] left-0 size-[11px] rounded-full border transition-colors duration-300"
                style={{
                  borderColor: nodeColor ?? "rgba(255,255,255,0.18)",
                  background: done ? nodeColor : "#0a0a0a",
                }}
              >
                {status === "running" && !reducedMotion && (
                  <motion.span
                    className="absolute -inset-px rounded-full"
                    style={{ boxShadow: `0 0 0 1px ${accentColor}` }}
                    animate={{ scale: [1, 2.2], opacity: [0.7, 0] }}
                    transition={{ duration: 1.4, ease: "easeOut", repeat: Infinity }}
                  />
                )}
              </span>
              {card}
            </motion.li>
          );
        })}
      </AnimatePresence>
    </ol>
  );
}
