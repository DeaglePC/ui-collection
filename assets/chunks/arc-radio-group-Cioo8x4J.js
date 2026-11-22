const e=[{path:"registry/components/radio-group/radio-group.module.css",language:"css",content:`.group { display: grid; min-width: 0; margin: 0; border: 0; padding: 0; }
.group legend { margin-bottom: var(--space-2); padding: 0; font-size: var(--text-sm); font-weight: 500; }
/* One highlight travels between the rows: above their borders and fills, below their text, so it never crosses a label. */
.options { position: relative; display: grid; gap: var(--space-2); }
.highlight { position: absolute; top: 0; right: 0; left: 0; z-index: 1; box-sizing: border-box; border: 1px solid var(--control-on); border-radius: var(--radius-control); background: color-mix(in oklab, var(--control-on) 5%, transparent); opacity: 0; pointer-events: none; }
/* Rows answer a press with color only; the mark is what moves. */
/* The mark sits centered on the left edge of the row, whether or not the option has a description. */
.option { position: relative; display: flex; align-items: center; gap: var(--space-3); border: 1px solid var(--border); border-radius: var(--radius-control); padding: var(--space-3); cursor: pointer; -webkit-tap-highlight-color: transparent; transition: background-color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard); }
@media (hover: hover) and (pointer: fine) { .option:hover { background: var(--surface-muted); } }
.option:active { background: var(--surface-muted); }
/* Until the highlight is placed (server paint or no script), the checked row carries the same look itself. */
.options:not([data-ready]) .option:has(input:checked) { border-color: var(--control-on); background: color-mix(in oklab, var(--control-on) 5%, transparent); }
.option input { position: absolute; opacity: 0; }
/* Rows are not stacking contexts, so their mark and copy rise above the highlight while their border and fill stay below it. */
.option > span { position: relative; z-index: 2; }
.mark { display: grid; width: 17px; height: 17px; flex: 0 0 auto; place-items: center; border: 1px solid var(--border-strong); border-radius: 50%; transition: border-color var(--duration-fast) var(--ease-standard), background-color var(--duration-fast) var(--ease-standard), transform var(--duration-spring) var(--ease-spring); }
/* 7px keeps the dot on whole pixels inside the 15px interior of the mark. */
.mark::after, .dot { grid-area: 1 / 1; width: 7px; height: 7px; border-radius: 50%; background: var(--foreground); }
/* A faint dot previews the choice while the pointer is down, then the real dot springs in on release. */
.mark::after { content: ""; opacity: 0; transition: opacity var(--duration-instant) var(--ease-standard); }
.option:active:not(:has(input:checked)) .mark::after { opacity: .22; }
/* The mark alone answers a press: a quick dip, then a spring back. */
.option:active .mark { transform: scale(.88); transition: border-color var(--duration-fast) var(--ease-standard), background-color var(--duration-fast) var(--ease-standard), transform 100ms var(--ease-standard); }
.option:has(input:checked) .mark { border-color: var(--control-on); background: var(--control-on); }
.option:has(input:checked) .dot { background: var(--control-glyph); }
.option strong, .option small { display: block; }
.option strong { color: var(--text-secondary); font-size: var(--text-sm); font-weight: 500; transition: color var(--duration-standard) var(--ease-standard); }
.option:has(input:checked) strong { color: var(--foreground); }
.option small { margin-top: 2px; color: var(--text-muted); font-size: var(--text-xs); }
@media (prefers-reduced-motion: reduce) { .option, .mark, .mark::after, .option strong { transition: none; } .option:active .mark { transform: none; } }
`},{path:"registry/components/radio-group/radio-group.tsx",language:"tsx",content:`/**
 * Arc UI · Radio group
 * MIT License · Copyright (c) 2026 Elia Kuratli
 * https://uiarc.dev/components/radio-group
 * https://github.com/kuratlielia/arc-library
 */
"use client";
import { useEffect, useId, useLayoutEffect, useRef } from "react";
import { animate, motion, useReducedMotion } from "motion/react";
import { motionTokens } from "@/lib/motion-tokens";
import styles from "./radio-group.module.css";
export interface RadioGroupProps { label: string; options: { value: string; label: string; description?: string }[]; value: string; onValueChange: (value: string) => void; name?: string }

/** Sizes the highlight to the chosen row. A new choice glides on the morph spring; the first paint and resizes place it at once. */
function place(highlight: HTMLElement | null, row: HTMLElement | null | undefined, at: { current: string }, glide: boolean) {
  const next = row ? \`\${row.offsetTop} \${row.offsetHeight}\` : "";
  if (!highlight || next === at.current) return;
  const visible = at.current !== "";
  at.current = next;
  if (!row) { animate(highlight, { opacity: 0 }, { duration: 0 }); return; }
  const target = { y: row.offsetTop, height: row.offsetHeight, opacity: 1 };
  if (glide && visible) { animate(highlight, target, { ...motionTokens.spring.morph, opacity: { duration: 0 } }); return; }
  // Written to the element too, so the paint that drops the server fallback already shows the highlight in place.
  Object.assign(highlight.style, { transform: \`translateY(\${target.y}px)\`, height: \`\${target.height}px\`, opacity: "1" });
  animate(highlight, target, { duration: 0 });
}

/** One highlight travels to the chosen row while the new dot springs in and the old one shrinks away, so a change reads as a single physical move. Arrow keys take the same path. Rows and text never resize. */
export function RadioGroup({ label, options, value, onValueChange, name }: RadioGroupProps) {
  const id = useId();
  const reduced = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const rows = useRef<(HTMLLabelElement | null)[]>([]);
  const shown = useRef<number | null>(null);
  const at = useRef("");
  const selected = options.findIndex(option => option.value === value);
  useLayoutEffect(() => {
    place(highlightRef.current, rows.current[selected], at, shown.current !== null && shown.current !== selected && !reduced);
    shown.current = selected;
    listRef.current?.setAttribute("data-ready", "");
  }, [selected, reduced]);
  useEffect(() => {
    const list = listRef.current;
    if (!list || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() => place(highlightRef.current, rows.current[shown.current ?? -1], at, false));
    observer.observe(list); rows.current.forEach(row => row && observer.observe(row));
    return () => observer.disconnect();
  }, [options.length]);
  return <fieldset className={styles.group}><legend>{label}</legend><div ref={listRef} className={styles.options}>
    <span ref={highlightRef} className={styles.highlight} aria-hidden="true" />
    {options.map((option, index) => { const checked = value === option.value; return <label className={styles.option} key={option.value} ref={node => { rows.current[index] = node; }}>
      <input type="radio" name={name ?? id} value={option.value} checked={checked} onChange={() => onValueChange(option.value)}/>
      <span className={styles.mark} aria-hidden="true"><motion.span className={styles.dot} initial={false} animate={checked ? { scale: 1, opacity: 1 } : { scale: .4, opacity: 0 }} transition={reduced ? { duration: 0 } : { ...motionTokens.spring.snappy, opacity: { duration: checked ? motionTokens.duration.fast : motionTokens.duration.instant } }}/></span>
      <span><strong>{option.label}</strong>{option.description && <small>{option.description}</small>}</span>
    </label>; })}
  </div></fieldset>;
}
`}],t="",n={files:e,prompt:t};export{n as default,e as files,t as prompt};
