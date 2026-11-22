const e=[{path:"registry/components/checkbox/checkbox.module.css",language:"css",content:`.field { display: inline-flex; align-items: flex-start; gap: 0; min-width: 0; }
.box { position: relative; flex: 0 0 auto; display: grid; place-items: center; width: var(--control-height-md); height: var(--control-height-md); border: 0; border-radius: var(--radius-control); padding: 0; background: transparent; color: var(--control-glyph); cursor: pointer; -webkit-tap-highlight-color: transparent; }
/* The square is the only part that reacts to a press, so the hit area and label never move. */
.visual { position: relative; display: block; width: 18px; height: 18px; border: 1px solid var(--border-strong); border-radius: 5px; background: var(--surface); transition: border-color var(--duration-fast) var(--ease-standard), transform var(--duration-spring) var(--ease-spring); }
.fill { position: absolute; inset: -1px; border-radius: inherit; background: var(--control-on); }
.mark { position: absolute; inset: -1px; width: 18px; height: 18px; overflow: visible; }
.box[data-state="checked"] .visual, .box[data-state="indeterminate"] .visual { border-color: var(--control-on); }
@media (hover: hover) and (pointer: fine) { .box[data-state="unchecked"]:hover:not(:disabled) .visual { border-color: var(--text-muted); } }
.box:active:not(:disabled) .visual { transform: scale(.95); transition: border-color var(--duration-fast) var(--ease-standard), transform var(--duration-instant) var(--ease-standard); }
.box:disabled { opacity: .5; cursor: not-allowed; }
/* The label's first line centers on the square: (44px box - 19.6px line) / 2. */
.copy { display: grid; gap: 2px; min-width: 0; margin-left: 1px; padding-top: calc((var(--control-height-md) - var(--text-sm) * 1.4) / 2); }
.copy label { color: var(--foreground); font-size: var(--text-sm); font-weight: 500; line-height: var(--leading-body); cursor: pointer; }
.copy span { color: var(--text-muted); font-size: var(--text-xs); line-height: var(--leading-body); }
@media (prefers-reduced-motion: reduce) { .visual, .box:active:not(:disabled) .visual { transition: none; transform: none; } }
`},{path:"registry/components/checkbox/checkbox.tsx",language:"tsx",content:`/**
 * Arc UI · Checkbox
 * MIT License · Copyright (c) 2026 Elia Kuratli
 * https://uiarc.dev/components/checkbox
 * https://github.com/kuratlielia/arc-library
 */
"use client";

import { forwardRef, useId, useState } from "react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { motion, useReducedMotion } from "motion/react";
import type { Transition } from "motion/react";
import { motionTokens } from "@/lib/motion-tokens";
import styles from "./checkbox.module.css";

export interface CheckboxProps extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string;
  description?: string;
}

/** Both marks share three points, so the check morphs into the dash and back instead of swapping. */
const checkPath = "M4.25 9.25 L7.25 12.25 L13.75 5.75";
const dashPath = "M4.75 9 L9 9 L13.25 9";

export const Checkbox = forwardRef<ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(function Checkbox(
  { label, description, id, className, checked, defaultChecked, onCheckedChange, ...props }, ref,
) {
  const generatedId = useId();
  const controlId = id ?? generatedId;
  const reduced = useReducedMotion();
  const [internal, setInternal] = useState<CheckboxPrimitive.CheckedState>(defaultChecked ?? false);
  const state = checked ?? internal;
  const on = state !== false;
  const change = (next: CheckboxPrimitive.CheckedState) => { if (checked === undefined) setInternal(next); onCheckedChange?.(next); };
  const fade: Transition = { duration: on ? motionTokens.duration.instant : motionTokens.duration.fast, ease: [...motionTokens.ease.standard] };
  return <div className={styles.field}>
    <CheckboxPrimitive.Root {...props} id={controlId} ref={ref} checked={state} onCheckedChange={change} className={[styles.box, className].filter(Boolean).join(" ")} aria-describedby={description ? \`\${controlId}-description\` : undefined} aria-label={props["aria-label"] ?? (label ? undefined : "Checkbox")}>
      <span className={styles.visual} aria-hidden="true">
        <motion.span className={styles.fill} initial={false} animate={{ opacity: on ? 1 : 0, scale: on ? 1 : .6 }} transition={reduced ? { duration: 0 } : { scale: motionTokens.spring.snappy, opacity: fade }} />
        <svg className={styles.mark} viewBox="0 0 18 18" fill="none" focusable="false">
          <motion.path initial={false} animate={{ d: state === "indeterminate" ? dashPath : checkPath, pathLength: on ? 1 : 0, opacity: on ? 1 : 0 }} transition={reduced ? { duration: 0 } : { d: motionTokens.spring.morph, pathLength: motionTokens.spring.snappy, opacity: fade }} stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </CheckboxPrimitive.Root>
    {label || description ? <div className={styles.copy}>{label ? <label htmlFor={controlId}>{label}</label> : null}{description ? <span id={\`\${controlId}-description\`}>{description}</span> : null}</div> : null}
  </div>;
});

Checkbox.displayName = "Checkbox";
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
