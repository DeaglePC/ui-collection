const e=[{path:"registry/badge/badge-demo.tsx",language:"tsx",content:`/**
 * Eased UI · badge
 * MIT License · Copyright (c) 2026 Eased
 * https://eased.dev/components/badge
 * https://github.com/easedui/ui
 */
"use client";

import { useState } from "react";
import { Button } from "../button/button";
import { DemoFrame } from "../lib/demo-frame";
import { rowGridRow } from "../lib/layout";
import { Badge } from "./badge";

type Folder = { id: string; name: string; count: number; icon: string };

const START: Folder[] = [
  { id: "inbox", name: "Inbox", count: 12, icon: "M3 9.5h3.5l1 2h3l1-2H15M3 9.5V13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9.5M3 9.5 5 4h8l2 5.5" },
  { id: "mentions", name: "Mentions", count: 3, icon: "M11.5 9a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0 0v1a1.75 1.75 0 0 0 3.5 0V9a6 6 0 1 0-2.4 4.8" },
  { id: "review", name: "Needs review", count: 98, icon: "M4 9.5 7.5 13 14 5" },
  { id: "drafts", name: "Drafts", count: 0, icon: "M11.5 4.5l2 2L7 13H5v-2l6.5-6.5Z" },
];

export function BadgeDemo() {
  const [folders, setFolders] = useState(START);
  const [selected, setSelected] = useState("inbox");

  // Opening a folder reads it, and its badge leaves.
  const open = (id: string) => {
    setSelected(id);
    setFolders((f) => f.map((x) => (x.id === id ? { ...x, count: 0 } : x)));
  };
  // New mail lands in the folders you're not looking at; "Needs review" crosses 99 → 99+.
  const deliver = () =>
    setFolders((f) =>
      f.map((x) =>
        x.id === selected || x.id === "drafts" ? x : { ...x, count: x.count + 1 + Math.floor(Math.random() * 3) },
      ),
    );

  return (
    <DemoFrame
      title="Mail"
      actions={
        <Button size="sm" onClick={deliver}>
          Receive mail
        </Button>
      }
    >
      <nav aria-label="Folders" className="p-1.5 pb-2.5">
        <ul>
          {folders.map((f) => (
            <li key={f.id}>
              <button
                type="button"
                onClick={() => open(f.id)}
                aria-current={selected === f.id ? "page" : undefined}
                className={\`flex h-9 w-full cursor-pointer items-center gap-2.5 rounded-control px-2.5 text-left text-ui-sm transition-[color,background-color,border-color,box-shadow] duration-150 ease-standard focus-ring \${
                  selected === f.id ? "bg-surface-hover text-text" : "text-text-secondary hover-fine:bg-surface-hover hover-fine:text-text"
                }\`}
              >
                <svg viewBox="0 0 18 18" aria-hidden className="size-4 shrink-0 fill-none stroke-current" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d={f.icon} />
                </svg>
                <span className="min-w-0 flex-1 truncate">{f.name}</span>
                <Badge count={f.count} tone={f.id === "mentions" ? "brand" : "neutral"} aria-label={\`\${f.count} unread\`} />
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-4 border-t border-line-subtle" />

      <section aria-labelledby="badge-demo-status" className="flex flex-col gap-3 p-4">
        <h3 id="badge-demo-status" className="text-ui-xs font-medium tracking-caps text-text-muted uppercase">
          Services
        </h3>
        {/* The badge track is as wide as the widest badge, so every badge starts on one x. */}
        <ul className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 text-ui-sm">
          <Service name="API" badge={<Badge tone="success" dot="live">Operational</Badge>} />
          <Service name="Webhooks" badge={<Badge tone="warning" dot>Degraded</Badge>} />
          <Service name="Search" badge={<Badge tone="info">Beta</Badge>} />
          <Service name="Exports" badge={<Badge tone="neutral" count={4}>Queued</Badge>} />
        </ul>
      </section>
    </DemoFrame>
  );
}

function Service({ name, badge }: { name: string; badge: React.ReactNode }) {
  return (
    <li className={\`\${rowGridRow} h-9\`}>
      <span className="truncate text-text-secondary">{name}</span>
      <span className="flex">{badge}</span>
    </li>
  );
}
`},{path:"registry/badge/badge.tsx",language:"tsx",content:`/**
 * Eased UI · badge
 * MIT License · Copyright (c) 2026 Eased
 * https://eased.dev/components/badge
 * https://github.com/easedui/ui
 */
"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { NumberRoll } from "../_primitives/number-roll/number-roll";
import { exitFast, reducedFade, snappy, useSafeReducedMotion } from "../lib/motion";

export type BadgeTone = "neutral" | "brand" | "success" | "warning" | "danger" | "info";

export type BadgeProps = {
  /** The label, e.g. "Beta" or "Operational". Optional when the badge is only a count. */
  children?: ReactNode;
  /** A number that rolls when it changes. Shown after the label. */
  count?: number;
  /** Counts above this show as \`max+\`. Default 99. */
  max?: number;
  /**
   * A count-only badge leaves (scale and fade) when its count is 0, and returns when it rises.
   * Keep it mounted and let this drive presence. Default false.
   */
  showZero?: boolean;
  /** A status dot before the label. \`"live"\` breathes slowly (2.4s) and stops under reduced motion. */
  dot?: boolean | "live";
  tone?: BadgeTone;
  /** 20px (\`sm\`, default) or 24px (\`md\`) tall. */
  size?: "sm" | "md";
  locale?: Intl.LocalesArgument;
  /** Spoken in place of the visible text, e.g. "3 unread messages". */
  "aria-label"?: string;
  className?: string;
};

// Status badges are subtle fill + state text (R31); the dot takes the text colour.
const TONES: Record<BadgeTone, string> = {
  neutral: "bg-surface-active text-text-secondary",
  brand: "bg-brand-subtle text-brand-text",
  success: "bg-success-subtle text-success-text",
  warning: "bg-warning-subtle text-warning-text",
  danger: "bg-danger-subtle text-danger-text",
  info: "bg-info-subtle text-info-text",
};

const SIZES = {
  sm: { box: "h-5 gap-1 px-1.5 text-ui-xs", count: "min-w-5", dot: "size-1.5" },
  md: { box: "h-6 gap-1.5 px-2 text-ui-sm", count: "min-w-6", dot: "size-2" },
} as const;

/**
 * A status or count chip. Counts roll their digits in the direction of change; a count-only
 * badge pops in when it rises above zero and leaves when it is cleared; a live dot breathes.
 */
export function Badge({
  children,
  count,
  max = 99,
  showZero = false,
  dot = false,
  tone = "neutral",
  size = "sm",
  locale,
  "aria-label": ariaLabel,
  className = "",
}: BadgeProps) {
  const reduced = useSafeReducedMotion();
  const s = SIZES[size];
  const hasLabel = children !== undefined && children !== null && children !== false;
  const countOnly = !hasLabel && count !== undefined;
  const visible = !countOnly || showZero || (count ?? 0) > 0;
  const shown = count === undefined ? undefined : Math.min(count, max);
  const over = count !== undefined && count > max;

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.span
          initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduced ? { opacity: 0, transition: reducedFade } : { opacity: 0, scale: 0.9, transition: exitFast }}
          transition={reduced ? reducedFade : snappy}
          className={\`inline-flex shrink-0 items-center justify-center font-medium whitespace-nowrap tabular-nums \${s.box} \${
            countOnly ? \`\${s.count} rounded-pill\` : "rounded-control-xs"
          } \${TONES[tone]} \${className}\`}
        >
          {ariaLabel && <span className="sr-only">{ariaLabel}</span>}
          {dot && <Dot live={dot === "live"} className={s.dot} />}
          {hasLabel && (
            <span aria-hidden={ariaLabel ? true : undefined} className="min-w-0 truncate">
              {children}
            </span>
          )}
          {shown !== undefined && (
            <span aria-hidden={ariaLabel ? true : undefined} className="inline-flex">
              <NumberRoll value={shown} locale={locale} aria-hidden={!!ariaLabel} />
              {over && "+"}
            </span>
          )}
        </motion.span>
      )}
    </AnimatePresence>
  );
}

function Dot({ live, className }: { live: boolean; className: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);
  return (
    <span ref={ref} aria-hidden className={\`relative shrink-0 rounded-pill bg-current \${className}\`}>
      {live && (
        <>
          {/* A halo the dot's colour that swells and fades back; it pauses off-screen and under reduced motion. */}
          <span
            className="absolute inset-0 animate-[eased-breathe_2400ms_var(--eased-ease-in-out)_infinite] rounded-pill bg-current opacity-0 reduced:animate-none"
            style={{ animationPlayState: inView ? "running" : "paused" }}
          />
          <style href="eased-badge" precedence="default">
            {"@keyframes eased-breathe { 0%, 100% { opacity: 0; scale: 1; } 50% { opacity: 0.35; scale: 2.25; } }"}
          </style>
        </>
      )}
    </span>
  );
}
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
