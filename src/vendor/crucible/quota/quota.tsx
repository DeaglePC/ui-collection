/**
 * Crucible · Quota
 * MIT License · Copyright (c) 2026 Crucible (crucibleui.com)
 * https://crucibleui.com · https://crucibleui.com/r/quota.json
 */
"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import * as React from "react";

import { cn } from "../cn";
import { useReducedMotion } from "../use-reduced-motion";

/** One category of consumed usage, drawn as a slice of the segmented bar. */
export interface QuotaSegment {
  /** Category name shown in the legend, e.g. "System", "Tools", "Messages". Also the React key — keep unique. */
  label: string;
  /** Units consumed by this category (same unit as `limit`). Negative values clamp to 0. */
  value: number;
  /** Slice + swatch color. Defaults to a tint of `accentColor` that fades with each successive segment. */
  color?: string;
}

/** Number style for the headline and legend values. */
export type QuotaFormat = "compact" | "full" | ((value: number) => string);

export interface QuotaProps extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  /**
   * Consumed usage by category, left to right. Used = the sum of all values;
   * the remainder up to `limit` is shown as an automatic "Free" entry.
   * Pass new arrays to update — each slice springs to its new width independently.
   */
  segments: QuotaSegment[];
  /** Capacity the meter reads full at (e.g. a 200k-token context window). */
  limit: number;
  /** Unit noun appended to the headline and aria text. @default "tokens" */
  unit?: string;
  /** "compact" → 84.2k, "full" → 84,200, or a custom formatter. @default "compact" */
  format?: QuotaFormat;
  /** Fraction of `limit` (0–1) past which the bar's leading edge pulses with an accent→amber glow. @default 0.8 */
  warnAt?: number;
  /** Fraction of `limit` (0–1) past which the headline turns amber and `note` fades in. @default 0.95 */
  critAt?: number;
  /** Optional cost line. A number renders as "$0.42 this session"; a string renders verbatim. */
  cost?: number | string;
  /** When the quota resets (Date or epoch ms). Renders "Resets in 2h 14m", computed after mount (hydration-safe). */
  resetAt?: Date | number;
  /** Text of the critical-threshold note. @default "Compacting soon" */
  note?: string;
  /** Card heading. @default "Context window" */
  label?: string;
  /** Legend label for the unused remainder; pass `null` to hide that entry. @default "Free" */
  freeLabel?: string | null;
  /** The single accent hue: focus/edge glow and the default segment tints. @default "#a78bfa" (ion violet) */
  accentColor?: string;
  /** Warning/critical hue used by the glow tail, headline and note. @default "#fbbf24" */
  warnColor?: string;
}

const DEFAULT_ACCENT = "#a78bfa";
const DEFAULT_WARN = "#fbbf24";
const HEADLINE_COLOR = "#fafafa";
/** Successive segment tints: % of accent mixed into a graphite base. */
const TINT_STEPS = [100, 68, 44, 28, 18];
const SPRING = { type: "spring", stiffness: 140, damping: 22, mass: 0.9 } as const;
const REDUCED_FADE = { duration: 0.15, ease: "easeOut" } as const;
const INSTANT = { duration: 0 } as const;

function trimZero(s: string): string {
  return s.endsWith(".0") ? s.slice(0, -2) : s;
}

function formatCompact(n: number): string {
  const a = Math.abs(n);
  if (a < 1000) return String(Math.round(n));
  if (a < 1_000_000) return `${trimZero((n / 1000).toFixed(1))}k`;
  if (a < 1_000_000_000) return `${trimZero((n / 1_000_000).toFixed(1))}M`;
  return `${trimZero((n / 1_000_000_000).toFixed(1))}B`;
}

/** Fixed locale so server and client render identical strings. */
const FULL = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

function resolveFormat(format: QuotaFormat): (n: number) => string {
  if (typeof format === "function") return format;
  return format === "full" ? (n) => FULL.format(n) : formatCompact;
}

function formatRemaining(ms: number): string {
  if (ms <= 0) return "Resetting now";
  const totalMin = Math.floor(ms / 60_000);
  if (totalMin < 1) return "Resets in <1m";
  const d = Math.floor(totalMin / 1440);
  const h = Math.floor((totalMin % 1440) / 60);
  const m = totalMin % 60;
  if (d > 0) return `Resets in ${d}d ${h}h`;
  if (h > 0) return `Resets in ${h}h ${m}m`;
  return `Resets in ${m}m`;
}

function tint(accent: string, index: number): string {
  const pct = TINT_STEPS[Math.min(index, TINT_STEPS.length - 1)];
  return pct === 100 ? accent : `color-mix(in oklab, ${accent} ${pct}%, #3f3f46)`;
}

/**
 * Rolling text: each digit is a 0–9 drum that slides to its value; other
 * characters are static. The real string sits underneath as transparent,
 * selectable text so copy/paste and layout use the true value.
 */
function RollText({ text, reducedMotion }: { text: string; reducedMotion: boolean }) {
  const chars = text.split("");
  return (
    <span className="relative inline-block whitespace-nowrap tabular-nums leading-none">
      <span className="text-transparent">{text}</span>
      <span aria-hidden className="pointer-events-none absolute inset-0 flex select-none">
        {chars.map((ch, i) => {
          // Key from the right so a growing number keeps its ones/tens drums stable.
          const key = chars.length - i;
          const digit = ch >= "0" && ch <= "9" ? Number(ch) : -1;
          if (digit < 0) {
            return (
              <span key={`c${key}`} className="inline-block">
                {ch}
              </span>
            );
          }
          return (
            <span key={`d${key}`} className="relative inline-block h-[1em] w-[1ch] overflow-hidden">
              <motion.span
                className="absolute left-0 top-0 flex flex-col"
                initial={false}
                animate={{ y: `${-digit * 10}%` }}
                transition={reducedMotion ? INSTANT : { type: "spring", stiffness: 380, damping: 36 }}
              >
                {Array.from({ length: 10 }, (_, n) => (
                  <span key={n} className="block h-[1em] leading-none">
                    {n}
                  </span>
                ))}
              </motion.span>
            </span>
          );
        })}
      </span>
    </span>
  );
}

/**
 * Quota — a context-window / credits meter card. The headline (used / limit)
 * rolls on digit drums, and a single segmented bar splits usage by category,
 * each slice with its own tint of one accent. On scroll-in the slices grow
 * from the left on a staggered spring; on updates each slice springs to its
 * new width independently. Past `warnAt` the bar's leading edge breathes an
 * accent→amber glow; past `critAt` the headline turns amber and a note fades
 * in. Optional cost line and a hydration-safe reset countdown. The bar is a
 * real `role="meter"` with full aria value text; reduced motion renders the
 * settled state with short opacity fades and no glow pulse.
 */
export function Quota({
  segments,
  limit,
  unit = "tokens",
  format = "compact",
  warnAt = 0.8,
  critAt = 0.95,
  cost,
  resetAt,
  note = "Compacting soon",
  label = "Context window",
  freeLabel = "Free",
  accentColor = DEFAULT_ACCENT,
  warnColor = DEFAULT_WARN,
  className,
  style,
  ...props
}: QuotaProps) {
  const reducedMotion = useReducedMotion();
  const rootRef = React.useRef<HTMLDivElement>(null);
  const fmt = React.useMemo(() => resolveFormat(format), [format]);

  const safeLimit = limit > 0 ? limit : 1;
  const parts = segments.map((s, i) => ({
    label: s.label,
    value: Math.max(0, s.value),
    color: s.color ?? tint(accentColor, i),
  }));
  const used = parts.reduce((sum, p) => sum + p.value, 0);
  const ratio = Math.min(used / safeLimit, 1);
  const free = Math.max(safeLimit - used, 0);
  const isWarn = ratio >= warnAt;
  const isCrit = ratio >= critAt;

  // ---- Reveal: grow from the left once in view, staggered, then go live. ----
  const inView = useInView(rootRef, { once: true, amount: 0.3 });
  const visible = useInView(rootRef, { amount: 0 });
  const armed = inView || reducedMotion;
  const [staggerDone, setStaggerDone] = React.useState(false);
  React.useEffect(() => {
    if (!armed || staggerDone) return;
    const id = window.setTimeout(() => setStaggerDone(true), 900);
    return () => window.clearTimeout(id);
  }, [armed, staggerDone]);

  // ---- Reset countdown: only computed after mount so SSR markup is stable. ----
  const resetMs = resetAt === undefined ? undefined : typeof resetAt === "number" ? resetAt : resetAt.getTime();
  const [now, setNow] = React.useState<number | null>(null);
  React.useEffect(() => {
    if (resetMs === undefined) return;
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 15_000);
    return () => window.clearInterval(id);
  }, [resetMs]);

  const shownUsed = armed ? used : 0;
  const shownPct = armed ? Math.round(ratio * 100) : 0;
  const widthTransition = (i: number) =>
    reducedMotion ? INSTANT : { ...SPRING, delay: staggerDone ? 0 : i * 0.08 };
  const edgeDelay = staggerDone ? 0 : Math.max(parts.length - 1, 0) * 0.08;

  const valueText = `${Math.round(ratio * 100)} percent used, ${FULL.format(used)} of ${FULL.format(safeLimit)} ${unit}`;
  const costText = cost === undefined ? null : typeof cost === "number" ? `$${cost.toFixed(2)} this session` : cost;
  const resetText = resetMs !== undefined && now !== null ? formatRemaining(resetMs - now) : null;
  const pulseOn = isWarn && armed && !reducedMotion && visible;
  const fade = reducedMotion ? REDUCED_FADE : { duration: 0.35, ease: "easeOut" as const };

  return (
    <div
      ref={rootRef}
      data-crucible="quota"
      className={cn(
        "relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/90 p-5 text-neutral-200 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_24px_48px_-24px_rgba(0,0,0,0.8)]",
        className
      )}
      style={style}
      {...props}
    >
      {/* Faint accent wash in the top corner — the card's only ornament. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-[0.12] blur-3xl"
        style={{ background: accentColor }}
      />

      <div className="relative flex min-h-5 items-center justify-between gap-3">
        <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">{label}</span>
        <AnimatePresence initial={false}>
          {isCrit && armed && note ? (
            <motion.span
              key="note"
              role="status"
              className="inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-medium"
              style={{
                color: warnColor,
                borderColor: `color-mix(in oklab, ${warnColor} 30%, transparent)`,
                background: `color-mix(in oklab, ${warnColor} 8%, transparent)`,
              }}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
              transition={fade}
            >
              <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ background: warnColor }} />
              {note}
            </motion.span>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="relative mt-3 flex items-end justify-between gap-4">
        <p className="flex items-baseline gap-1.5">
          <motion.span
            className="text-3xl font-semibold tracking-tight"
            initial={false}
            animate={{ color: isCrit && armed ? warnColor : HEADLINE_COLOR }}
            transition={reducedMotion ? REDUCED_FADE : { duration: 0.4 }}
          >
            <RollText text={fmt(shownUsed)} reducedMotion={reducedMotion} />
          </motion.span>
          <span className="text-sm text-neutral-500">
            / {fmt(safeLimit)} {unit}
          </span>
        </p>
        <span className="pb-0.5 text-sm font-medium text-neutral-300">
          <RollText text={`${shownPct}%`} reducedMotion={reducedMotion} />
        </span>
      </div>

      {/* Segmented bar */}
      <div className="relative mt-4">
        <div
          role="meter"
          aria-label={`${label} usage`}
          aria-valuemin={0}
          aria-valuemax={safeLimit}
          aria-valuenow={Math.min(used, safeLimit)}
          aria-valuetext={valueText}
          className="relative flex h-2.5 w-full overflow-hidden rounded-full bg-white/[0.06]"
        >
          {parts.map((p, i) => {
            const pct = armed ? (Math.min(p.value, safeLimit) / safeLimit) * 100 : 0;
            return (
              <motion.div
                key={p.label}
                className="relative h-full shrink-0"
                initial={false}
                animate={{ width: `${pct}%` }}
                transition={widthTransition(i)}
              >
                {/* 2px seam lives inside the slice so widths always sum to the true ratio. */}
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 right-[2px]"
                  style={{ background: p.color }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Leading-edge glow: accent→warn tail that breathes past warnAt. */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-1/2 h-5 w-14 -translate-y-1/2"
          style={{ marginLeft: "-3.5rem" }}
          initial={false}
          animate={{ left: `${armed ? ratio * 100 : 0}%` }}
          transition={reducedMotion ? INSTANT : { ...SPRING, delay: edgeDelay }}
        >
          <motion.div
            className="h-full w-full rounded-full blur-md"
            style={{ background: `linear-gradient(90deg, transparent, ${accentColor} 55%, ${warnColor})` }}
            initial={false}
            animate={
              pulseOn
                ? { opacity: [0.35, 0.9, 0.35] }
                : { opacity: isWarn && armed ? (reducedMotion ? 0.5 : 0.35) : 0 }
            }
            transition={
              pulseOn ? { duration: 1.8, repeat: Infinity, ease: "easeInOut" } : reducedMotion ? REDUCED_FADE : { duration: 0.4 }
            }
          />
        </motion.div>
      </div>

      {/* Legend */}
      <ul className="relative mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
        {parts.map((p) => (
          <li key={p.label} className="flex items-center gap-2">
            <span aria-hidden className="h-2 w-2 shrink-0 rounded-[3px]" style={{ background: p.color }} />
            <span className="truncate text-neutral-400">{p.label}</span>
            <span className="ml-auto tabular-nums text-neutral-200">{fmt(p.value)}</span>
          </li>
        ))}
        {freeLabel !== null ? (
          <li className="flex items-center gap-2">
            <span aria-hidden className="h-2 w-2 shrink-0 rounded-[3px] border border-white/15 bg-white/[0.06]" />
            <span className="truncate text-neutral-500">{freeLabel}</span>
            <span className="ml-auto tabular-nums text-neutral-400">{fmt(free)}</span>
          </li>
        ) : null}
      </ul>

      {costText !== null || resetMs !== undefined ? (
        <div className="relative mt-4 flex min-h-4 items-center justify-between gap-3 border-t border-white/[0.08] pt-3 text-[11px] text-neutral-500">
          <span className="tabular-nums">{costText}</span>
          <motion.span
            className="tabular-nums"
            initial={false}
            animate={{ opacity: resetText ? 1 : 0 }}
            transition={reducedMotion ? REDUCED_FADE : { duration: 0.3 }}
          >
            {resetText ?? " "}
          </motion.span>
        </div>
      ) : null}
    </div>
  );
}
