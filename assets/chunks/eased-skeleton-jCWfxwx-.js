const e=[{path:"registry/skeleton/skeleton-demo.tsx",language:"tsx",content:`/**
 * Eased UI · skeleton
 * MIT License · Copyright (c) 2026 Eased
 * https://eased.dev/components/skeleton
 * https://github.com/easedui/ui
 */
"use client";

import { useEffect, useState } from "react";
import { Avatar } from "../avatar/avatar";
import { Button } from "../button/button";
import { DemoFrame } from "../lib/demo-frame";
import { Skeleton, SkeletonText } from "./skeleton";

type Activity = { id: string; who: string; did: string; what: string; when: string };

const FEED: Activity[] = [
  { id: "1", who: "Maya Okafor", did: "merged", what: "Checkout: smart address paste", when: "4m" },
  { id: "2", who: "Jonas Weber", did: "commented on", what: "Pricing page copy, v3", when: "18m" },
  { id: "3", who: "Priya Raman", did: "opened", what: "Skeleton flashes on fast networks", when: "1h" },
  { id: "4", who: "Leo Martín", did: "shipped", what: "Changelog 2.4", when: "3h" },
];

/** Simulates a request: 1.4s on the first load and on every reload. */
function useFeed() {
  const [attempt, setAttempt] = useState(0);
  const [data, setData] = useState<{ attempt: number; items: Activity[] } | null>(null);
  useEffect(() => {
    const t = window.setTimeout(() => setData({ attempt, items: FEED }), 1400);
    return () => window.clearTimeout(t);
  }, [attempt]);
  const loading = data?.attempt !== attempt;
  return { items: loading || !data ? null : data.items, loading, reload: () => setAttempt((a) => a + 1) };
}

export function SkeletonDemo() {
  const { items, loading, reload } = useFeed();

  return (
    <DemoFrame
      title="Activity"
      meta={loading ? "Loading…" : "Updated just now"}
      actions={
        <Button variant="ghost" size="sm" edge="end" onClick={reload} disabled={loading}>
          Reload
        </Button>
      }
    >
      <ul aria-busy={loading} className="flex flex-col p-1.5">
        {/* While loading, every row renders with stand-in text the length of a real one, so the handoff never moves a pixel. */}
        {(items ?? FEED).map((a) => (
          <li key={a.id} className="flex min-w-0 items-start gap-3 rounded-control px-2.5 py-3">
            <Skeleton loading={loading} className="size-8 shrink-0 rounded-pill">
              <Avatar name={a.who} size="md" />
            </Skeleton>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <div className="flex min-w-0 items-baseline justify-between gap-3">
                <Skeleton loading={loading} text className="min-w-0">
                  <p className="truncate text-ui-sm text-text">
                    <span className="font-medium">{a.who}</span> <span className="text-text-secondary">{a.did}</span>
                  </p>
                </Skeleton>
                <Skeleton loading={loading} text className="shrink-0">
                  <span className="text-ui-xs text-text-muted tabular-nums">{a.when}</span>
                </Skeleton>
              </div>
              <Skeleton loading={loading} text className="min-w-0 self-start">
                <p className="truncate text-ui-sm text-text-secondary">{a.what}</p>
              </Skeleton>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-auto border-t border-line-subtle p-4">
        <p className="mb-2 text-ui-xs font-medium tracking-caps text-text-muted uppercase">Release notes</p>
        {loading ? (
          <SkeletonText lines={2} />
        ) : (
          <p className="text-pretty text-ui-sm text-text-secondary">
            Skeletons now share one shimmer across the page, and hand off to content in place.
          </p>
        )}
      </div>
    </DemoFrame>
  );
}
`},{path:"registry/skeleton/skeleton.tsx",language:"tsx",content:`/**
 * Eased UI · skeleton
 * MIT License · Copyright (c) 2026 Eased
 * https://eased.dev/components/skeleton
 * https://github.com/easedui/ui
 */
"use client";

import { AnimatePresence, motion, type TargetAndTransition } from "motion/react";
import { useLayoutEffect, useRef, type ReactNode } from "react";
import { enter, exit, reducedFade, useSafeReducedMotion } from "../lib/motion";

export type SkeletonProps = {
  /** While true the shimmer shows; set it false and the shimmer hands off to \`children\`. Default true. */
  loading?: boolean;
  /**
   * The real content. While loading it is laid out but invisible (and inert), so the
   * placeholder is exactly its size and nothing shifts at the handoff. Pass stand-in text
   * of a typical length while the data is missing, e.g. \`{user?.name ?? "Maya Okafor"}\`.
   * Without children the skeleton is a plain block: size it with \`className\`.
   */
  children?: ReactNode;
  /** Size and radius classes. Default radius \`rounded-control-xs\`; pass \`rounded-pill\` for avatars. */
  className?: string;
  /** Lay the wrapper out as a block (\`grid\`) instead of inline, for cards and rows. Default false. */
  block?: boolean;
  /**
   * Wrapping text: the bar covers the middle 60% of each line box (roughly the x-height plus
   * ascenders) instead of the full line height, so it reads as a line of text. Default false.
   */
  text?: boolean;
};

/*
 * One shimmer for the whole page: the highlight is painted in viewport space
 * (background-attachment: fixed) and every skeleton's animation is pinned to the same start
 * time, so a single band sweeps across all of them in sync instead of each one flashing on
 * its own beat. The highlight is the base tone lifted 6% in lightness, in both themes.
 */
const CSS = \`
@keyframes eased-shimmer { from { background-position: -170vw 0; } 70%, to { background-position: -30vw 0; } }
.eased-skeleton {
  background-color: var(--eased-surface-hover);
  background-image: linear-gradient(90deg, transparent 46%, oklch(from var(--eased-surface-hover) calc(l + 0.06) c h) 50%, transparent 54%);
  background-size: 300vw 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  animation: eased-shimmer 2000ms linear infinite;
}
@media (prefers-reduced-motion: reduce) { .eased-skeleton { animation: none; background-image: none; } }
\`;

/** Pins every running shimmer to the document timeline's zero, so they share one phase. */
function useSharedPhase<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useLayoutEffect(() => {
    for (const a of ref.current?.getAnimations() ?? []) a.startTime = 0;
  }, []);
  return ref;
}

/**
 * A loading placeholder with one page-wide shimmer. Wrap the real content and flip
 * \`loading\` off: the shimmer fades out as the content fades in from a soft blur, in place.
 */
export function Skeleton({ loading = true, children, className = "", block = false, text = false }: SkeletonProps) {
  const reduced = useSafeReducedMotion();
  const radius = /\\brounded-/.test(className) ? "" : "rounded-control-xs";

  if (children === undefined) {
    return (
      <AnimatePresence initial={false}>
        {loading && (
          <Block
            key="block"
            className={\`block \${radius} \${className}\`}
            exit={{ opacity: 0, transition: reduced ? reducedFade : exit }}
          />
        )}
      </AnimatePresence>
    );
  }

  return (
    <span aria-busy={loading || undefined} className={\`relative \${block ? "grid" : "inline-grid"} max-w-full \${className}\`}>
      <motion.span
        inert={loading}
        className="col-start-1 row-start-1 min-w-0"
        initial={false}
        animate={
          loading
            ? { opacity: 0, filter: reduced ? "blur(0px)" : "blur(4px)" }
            : { opacity: 1, filter: "blur(0px)", transitionEnd: { filter: "none" } }
        }
        transition={reduced ? reducedFade : loading ? { duration: 0 } : enter}
      >
        {children}
      </motion.span>
      <AnimatePresence initial={false}>
        {loading && (
          <Block
            key="block"
            className={\`absolute \${text ? "inset-x-0 inset-y-[0.2lh]" : "inset-0"} \${radius} \${className.match(/\\brounded-\\S+/g)?.join(" ") ?? ""}\`}
            exit={{ opacity: 0, transition: reduced ? reducedFade : exit }}
          />
        )}
      </AnimatePresence>
    </span>
  );
}

function Block({ className, exit: exitTo }: { className: string; exit: TargetAndTransition }) {
  const ref = useSharedPhase<HTMLSpanElement>();
  return (
    <motion.span ref={ref} aria-hidden className={\`eased-skeleton \${className}\`} exit={exitTo}>
      <style href="eased-skeleton" precedence="default">
        {CSS}
      </style>
    </motion.span>
  );
}

export type SkeletonTextProps = {
  /** Number of lines. Default 3; the last one is shorter, like a paragraph's. */
  lines?: number;
  loading?: boolean;
  className?: string;
};

/** Lines sized for 13–14px text: 12px bars on a 20px rhythm. */
export function SkeletonText({ lines = 3, loading = true, className = "" }: SkeletonTextProps) {
  return (
    <span aria-hidden className={\`flex flex-col gap-2 py-1 \${className}\`}>
      {Array.from({ length: lines }, (_, i) => (
        <Skeleton key={i} loading={loading} className={\`h-3 \${i === lines - 1 && lines > 1 ? "w-3/5" : "w-full"}\`} />
      ))}
    </span>
  );
}
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
