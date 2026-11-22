const e=[{path:"registry/components/copy-button/copy-button.module.css",language:"css",content:`/* The label cell eases to the current word's width (no overshoot) while icon and word crossfade inside it, centered. Press releases on the spring curve. */
.button { display: inline-flex; width: max-content; max-width: 100%; min-height: var(--control-height-sm); align-items: center; justify-content: center; gap: var(--space-2); border: 1px solid var(--border); border-radius: var(--radius-control); padding: 0 var(--space-3); background: var(--surface); color: var(--foreground); font: inherit; font-size: var(--text-sm); font-weight: 500; cursor: pointer; -webkit-tap-highlight-color: transparent; transition: background-color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), transform var(--duration-spring) var(--ease-spring); }
.button:active:not(:disabled) { transform: scale(.97); transition-duration: var(--duration-fast), var(--duration-fast), var(--duration-fast), var(--duration-instant); transition-timing-function: var(--ease-standard); }
.iconOnly:active:not(:disabled) { transform: scale(.96); }
@media (hover: hover) and (pointer: fine) { .button:hover:not(:disabled) { background: var(--surface-muted); border-color: var(--border-strong); } .plain:hover:not(:disabled) { border-color: transparent; background: var(--surface-muted); color: var(--foreground); } }
.button:disabled { cursor: not-allowed; opacity: .5; }
/* Each icon carries its own color, so the outgoing glyph never tints on its way out. */
.icon { position: relative; display: grid; width: 16px; height: 16px; flex: none; }
.iconInner { position: absolute; inset: 0; display: grid; place-items: center; }
.iconInner[data-state="copied"] { color: var(--success); }
.iconInner[data-state="error"] { color: var(--danger); }
.label { position: relative; display: grid; min-width: 0; justify-items: center; white-space: nowrap; }
.text { grid-area: 1 / 1; }
/* Off-screen copies of each word, so every width is known before it is shown. */
.measure { position: absolute; top: 0; left: 0; visibility: hidden; white-space: nowrap; pointer-events: none; }
.iconOnly { width: var(--control-height-sm); padding: 0; }
.plain { border-color: transparent; background: transparent; color: var(--text-secondary); }
.srOnly { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; }
@media (prefers-reduced-motion: reduce) { .button { transition: none; } .button:active:not(:disabled) { transform: none; } }
`},{path:"registry/components/copy-button/copy-button.tsx",language:"tsx",content:`/**
 * Arc UI · Copy button
 * MIT License · Copyright (c) 2026 Elia Kuratli
 * https://uiarc.dev/components/copy-button
 * https://github.com/kuratlielia/arc-library
 */
"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CircleAlert, Copy } from "lucide-react";
import { motionTokens } from "@/lib/motion-tokens";
import { useCopyFeedback } from "@/lib/use-copy-feedback";
import styles from "./copy-button.module.css";

export interface CopyButtonProps {
  value: string;
  label?: string;
  className?: string;
  iconOnly?: boolean;
  variant?: "outline" | "plain";
  disabled?: boolean;
  onCopied?: () => void;
}

/** Copy feedback is quick and quiet: the old icon and word fade out fast while the new ones fade in, with no blur and no
 *  per-letter motion. The button eases to the width of the current word on a spring with no overshoot, so a long label
 *  like "Copy model id" never leaves empty space next to "Copied", and nothing jumps. */
const ease = [...motionTokens.ease.standard] as [number, number, number, number];
const show = { duration: .16, ease } as const;
const hide = { duration: .1, ease } as const;
const instant = { duration: 0 } as const;
const resize = { type: "spring", visualDuration: .22, bounce: 0 } as const;

/** The success tick draws itself in one short stroke. */
function DrawnCheck({ reduced }: { reduced: boolean }) {
  return <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <motion.path d="M4 12l5 5L20 6" initial={reduced ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: .22, ease, delay: .04 }} />
  </svg>;
}

export function CopyButton({ value, label = "Copy", className, iconOnly = false, variant = "outline", disabled, onCopied }: CopyButtonProps) {
  const { state, copy } = useCopyFeedback();
  const reduced = useReducedMotion() ?? false;
  const text = state === "copied" ? "Copied" : state === "error" ? "Failed" : label;
  // Each word's natural width, measured off screen (and again when fonts load or the label changes).
  const measures = useRef<Record<string, HTMLSpanElement | null>>({});
  const [widths, setWidths] = useState<Record<string, number>>({});
  useLayoutEffect(() => {
    if (iconOnly) return;
    const read = () => setWidths(Object.fromEntries(Object.entries(measures.current).map(([key, node]) => [key, node?.offsetWidth ?? 0])));
    read();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(read);
    Object.values(measures.current).forEach(node => { if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, [label, iconOnly]);
  const width = widths[state === "copied" ? "copied" : state === "error" ? "error" : "idle"];
  // The first measured width applies at once; only later changes ease, so the very first copy animates too.
  const [shown, setShown] = useState<number | undefined>(undefined);
  const first = shown === undefined;
  if (width !== undefined && width !== shown) setShown(width);

  async function handleCopy() {
    if (await copy(value)) onCopied?.();
  }

  return <><button
    type="button"
    className={[styles.button, iconOnly && styles.iconOnly, variant === "plain" && styles.plain, className].filter(Boolean).join(" ")}
    onClick={() => void handleCopy()}
    aria-label={label}
    data-copy-state={state}
    disabled={disabled}
  >
    <span className={styles.icon} aria-hidden="true">
      <AnimatePresence initial={false}>
        <motion.span key={state} className={styles.iconInner} data-state={state}
          initial={reduced ? { opacity: 0 } : { opacity: 0, scale: .85 }} animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, transition: reduced ? instant : hide }} transition={reduced ? instant : show}>
          {state === "copied" ? <DrawnCheck reduced={reduced} /> : state === "error" ? <CircleAlert size={16} strokeWidth={1.75} /> : <Copy size={16} strokeWidth={1.75} />}
        </motion.span>
      </AnimatePresence>
    </span>
    {!iconOnly && <motion.span className={styles.label} aria-hidden="true" initial={false} animate={width ? { width } : undefined} transition={reduced || first ? instant : resize}>
      <span ref={node => { measures.current.idle = node; }} className={styles.measure}>{label}</span>
      <span ref={node => { measures.current.copied = node; }} className={styles.measure}>Copied</span>
      <span ref={node => { measures.current.error = node; }} className={styles.measure}>Failed</span>
      <AnimatePresence initial={false}>
        <motion.span key={text} className={styles.text} initial={reduced ? { opacity: 0 } : { opacity: 0, y: 2 }} animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, transition: reduced ? instant : hide }} transition={reduced ? instant : show}>{text}</motion.span>
      </AnimatePresence>
    </motion.span>}
  </button><span className={styles.srOnly} role="status" aria-live="polite">{state === "idle" ? "" : state === "error" ? \`\${label}: Could not copy\` : \`\${label}: Copied\`}</span></>;
}
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
