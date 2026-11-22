const e=[{path:"registry/components/progress/progress.module.css",language:"css",content:`.progress { width: 100%; color: var(--text-secondary); font-size: var(--text-sm); } .meta { display: flex; justify-content: space-between; gap: 12px; margin-bottom: 8px; line-height: var(--leading-body); } .label { position: relative; min-width: 0; } .line { display: block; } .value { display: inline-flex; flex: none; align-items: center; gap: 4px; color: var(--text-muted); font-variant-numeric: tabular-nums; } .count { display: inline-grid; justify-items: end; } /* A hidden "100%" row reserves the widest count, so the check never shifts as the number gains a digit. */ .count::before { content: "100%"; height: 0; overflow: hidden; visibility: hidden; } .done { display: grid; place-items: center; color: var(--success); } .track { height: 7px; overflow: hidden; border: 1px solid var(--border); border-radius: 99px; background: var(--surface-muted); } .fill { display: block; width: 100%; height: 100%; border-radius: inherit; background: var(--accent); transition: background-color var(--duration-standard) var(--ease-standard); } .progress[data-complete] .fill { background: var(--success); transition-delay: 200ms; } @media (prefers-reduced-motion: reduce) { .fill, .progress[data-complete] .fill { transition: none; } }
`},{path:"registry/components/progress/progress.tsx",language:"tsx",content:`/**
 * Arc UI · Progress
 * MIT License · Copyright (c) 2026 Elia Kuratli
 * https://uiarc.dev/components/progress
 * https://github.com/kuratlielia/arc-library
 */
"use client";

import { useEffect } from "react";
import { AnimatePresence, animate, motion, useIsPresent, useMotionValue, useReducedMotion, useTransform, type HTMLMotionProps, type TargetAndTransition, type Transition } from "motion/react";
import { Check } from "lucide-react";
import { motionTokens } from "@/lib/motion-tokens";
import styles from "./progress.module.css";

export interface ProgressProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  value?: number;
  max?: number;
  label?: string;
  showValue?: boolean;
}

const exitFast: Transition = { duration: motionTokens.duration.fast, ease: [...motionTokens.ease.standard] };
const textIn: TargetAndTransition = { opacity: 0, y: "0.3em", filter: \`blur(\${motionTokens.blur.soft}px)\` };
const textOut: TargetAndTransition = { opacity: 0, y: "-0.3em", filter: \`blur(\${motionTokens.blur.subtle}px)\`, transition: exitFast };
const iconIn: TargetAndTransition = { opacity: 0, scale: .6, filter: \`blur(\${motionTokens.blur.subtle}px)\` };
const shown: TargetAndTransition = { opacity: 1, y: "0em", scale: 1, filter: "blur(0px)" };
const fadeOut: TargetAndTransition = { opacity: 0, transition: { duration: motionTokens.duration.instant } };

/** Outgoing copies are hidden from assistive tech while they fade. */
function Swap(props: HTMLMotionProps<"span">) {
  const present = useIsPresent();
  return <motion.span {...props} aria-hidden={present ? props["aria-hidden"] : true} />;
}

export function Progress({ value = 0, max = 100, label, showValue = false, className, ...props }: ProgressProps) {
  const reduce = useReducedMotion();
  const safeMax = max > 0 ? max : 100;
  const safeValue = Math.min(Math.max(value, 0), safeMax);
  const percentage = Math.round((safeValue / safeMax) * 100);
  const complete = percentage >= 100;
  // One spring drives both the fill and the counted label, so the number always matches the bar.
  const progress = useMotionValue(percentage);
  // The fill slides in from the left instead of scaling, so its rounded end keeps its shape at every value.
  const x = useTransform(progress, latest => \`\${Math.min(Math.max(latest, 0), 100) - 100}%\`);
  const counted = useTransform(progress, latest => \`\${Math.round(Math.min(Math.max(latest, 0), 100))}%\`);
  useEffect(() => {
    if (reduce) { progress.jump(percentage); return; }
    const controls = animate(progress, percentage, motionTokens.spring.smooth);
    return () => controls.stop();
  }, [percentage, progress, reduce]);
  const enter: Transition = reduce ? { duration: motionTokens.duration.instant } : { duration: motionTokens.duration.standard, ease: [...motionTokens.ease.enter] };
  const classes = [styles.progress, className].filter(Boolean).join(" ");
  return <div {...props} className={classes} data-complete={complete ? "" : undefined} role="progressbar" aria-label={label ?? "Progress"} aria-valuemin={0} aria-valuemax={safeMax} aria-valuenow={safeValue} aria-valuetext={\`\${percentage}%\`}>
    {(label || showValue) ? <div className={styles.meta}>
      {label ? <span className={styles.label}><AnimatePresence mode="popLayout" initial={false}><Swap key={label} className={styles.line} initial={reduce ? { opacity: 0 } : textIn} animate={shown} exit={reduce ? fadeOut : textOut} transition={enter}>{label}</Swap></AnimatePresence></span> : <span />}
      {showValue ? <span className={styles.value}>
        {/* Completion lands as the fill arrives: a check settles in beside the final count. */}
        <AnimatePresence initial={false}>{complete && <motion.span key="done" className={styles.done} initial={reduce ? { opacity: 0 } : iconIn} animate={shown} exit={reduce ? fadeOut : { ...iconIn, transition: exitFast }} transition={reduce ? enter : { ...motionTokens.spring.snappy, delay: .24 }}><Check size={14} strokeWidth={1.75} aria-hidden="true" /></motion.span>}</AnimatePresence>
        <motion.span className={styles.count}>{counted}</motion.span>
      </span> : null}
    </div> : null}
    <div className={styles.track}><motion.span className={styles.fill} style={{ x }} /></div>
  </div>;
}

export default Progress;
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
