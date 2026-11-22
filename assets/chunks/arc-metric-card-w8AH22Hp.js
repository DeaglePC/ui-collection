const e=[{path:"registry/components/metric-card/metric-card.module.css",language:"css",content:`.card { min-width: 0; border: 1px solid var(--border); border-radius: var(--radius-surface); padding: var(--space-6); background: var(--surface); box-shadow: var(--shadow-resting); }
.top { display: flex; align-items: center; justify-content: space-between; gap: var(--space-3); margin-bottom: var(--space-8); }
.top span { color: var(--text-secondary); font-size: var(--text-sm); }
.top small { display: inline-flex; flex: 0 0 auto; border: 1px solid var(--border); border-radius: var(--radius-pill); padding: 3px 8px; color: var(--text-secondary); font-size: var(--text-sm); font-variant-numeric: tabular-nums; }
.card p { margin: var(--space-4) 0 0; color: var(--text-muted); font-size: var(--text-sm); line-height: var(--leading-body); }
@media (max-width: 380px) { .card { padding: var(--space-4); } .top { align-items: flex-start; flex-wrap: wrap; margin-bottom: var(--space-6); } }
/* Text swaps: the outgoing copy is popped out of flow so the wrapper never holds both widths. */
.swap, .swapBlock { position: relative; max-width: 100%; }
.swap { display: inline-flex; overflow-x: clip; white-space: nowrap; vertical-align: top; }
.swapBlock { display: block; }
.swap > .text { display: inline-block; }
.swapBlock > .text { display: block; }
.sizer { position: absolute; top: 0; left: 0; visibility: hidden; white-space: nowrap; pointer-events: none; }
/* A signed change reads its direction in color as well as sign: a faint tint behind, the color on the text. */
.top small[data-trend] span { color: inherit; }
.top small[data-trend] { border-color: transparent; transition: color var(--duration-fast) var(--ease-standard), background-color var(--duration-fast) var(--ease-standard); }
.top small[data-trend="up"] { background: color-mix(in oklab, var(--success) 11%, transparent); color: var(--success); }
.top small[data-trend="down"] { background: color-mix(in oklab, var(--danger) 11%, transparent); color: var(--danger); }
`},{path:"registry/components/metric-card/metric-card.tsx",language:"tsx",content:`/**
 * Arc UI · Metric card
 * MIT License · Copyright (c) 2026 Elia Kuratli
 * https://uiarc.dev/components/metric-card
 * https://github.com/kuratlielia/arc-library
 */
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useReducedMotion, type Variants } from "motion/react";
import { motionTokens } from "@/lib/motion-tokens";
import { AnimatedCounter } from "../animated-counter/animated-counter";
import styles from "./metric-card.module.css";
export interface MetricCardProps { label: string; value: number; suffix?: string; context: string; change?: string }

/** Copy that holds a number enters from the side it moved toward: a larger value rises from below, a smaller one drops from above. */
const rise: Variants = { hidden: (direction: number) => ({ opacity: 0, y: \`\${.3 * direction}em\`, filter: \`blur(\${motionTokens.blur.soft}px)\` }), shown: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: motionTokens.duration.standard, ease: [...motionTokens.ease.enter] } }, gone: (direction: number) => ({ opacity: 0, y: \`\${-.3 * direction}em\`, filter: \`blur(\${motionTokens.blur.subtle}px)\`, transition: { duration: motionTokens.duration.fast, ease: [...motionTokens.ease.standard] } }) };
const fade: Variants = { hidden: { opacity: 0, y: 0, filter: "blur(0px)" }, shown: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: motionTokens.duration.instant } }, gone: { opacity: 0, y: 0, filter: "blur(0px)", transition: { duration: motionTokens.duration.instant } } };
const amountIn = (text: string) => Number(text.replace(/,/g, "").match(/-?\\d+(?:\\.\\d+)?/)?.[0] ?? NaN);

/** New copy rises in while the old copy leaves; \`morph\` springs the wrapper to the new text's width instead of letting it snap. */
function Swap({ text, morph = false, block = false }: { text: string; morph?: boolean; block?: boolean }) {
  const reduceMotion = !!useReducedMotion();
  const sizer = useRef<HTMLSpanElement>(null);
  const width = useMotionValue<number | "auto">("auto");
  const [shown, setShown] = useState({ text, direction: 1 });
  if (shown.text !== text) setShown({ text, direction: amountIn(text) < amountIn(shown.text) ? -1 : 1 });
  useEffect(() => {
    const node = sizer.current;
    if (!node || typeof ResizeObserver === "undefined") return;
    let measured: string | null = null;
    // Layout size, not the transformed rect, so a scaling parent never leaves the text clipped. Only a new text springs; font loads jump.
    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;
      const next = entry.borderBoxSize?.[0]?.inlineSize ?? node.offsetWidth;
      if (next && measured !== null && measured !== node.textContent && !reduceMotion) animate(width, next, motionTokens.spring.morph);
      else width.jump(next || "auto");
      measured = next ? node.textContent : null;
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [morph, reduceMotion, width]);
  return <motion.span className={block ? styles.swapBlock : styles.swap} style={morph ? { width } : undefined}>
    {morph && <span ref={sizer} className={styles.sizer} aria-hidden="true">{text}</span>}
    <AnimatePresence mode="popLayout" initial={false} custom={shown.direction}><motion.span key={text} className={styles.text} custom={shown.direction} variants={reduceMotion ? fade : rise} initial="hidden" animate="shown" exit="gone">{text}</motion.span></AnimatePresence>
  </motion.span>;
}

export function MetricCard({ label, value, suffix, context, change }: MetricCardProps) {
  const reduceMotion = !!useReducedMotion();
  return <article className={styles.card}>
    <div className={styles.top}><span><Swap text={label} block /></span><AnimatePresence initial={false}>{change && <motion.small key="change" data-trend={/^[+]/.test(change) ? "up" : /^[-−]/.test(change) ? "down" : undefined} initial={{ opacity: 0, scale: reduceMotion ? 1 : .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: reduceMotion ? 1 : .96, transition: { duration: motionTokens.duration.fast, ease: [...motionTokens.ease.standard] } }} transition={reduceMotion ? { duration: 0 } : motionTokens.spring.snappy}><Swap text={change} morph /></motion.small>}</AnimatePresence></div>
    <AnimatedCounter value={value} suffix={suffix} animateOnView />
    <p><Swap text={context} block /></p>
  </article>;
}
`}],t="",n={files:e,prompt:t};export{n as default,e as files,t as prompt};
