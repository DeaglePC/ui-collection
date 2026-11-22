const e=[{path:"registry/components/search-field/search-field.module.css",language:"css",content:`.field { display: grid; gap: var(--space-2); min-width: 0; }
.field label { font-size: var(--text-sm); font-weight: 500; line-height: var(--leading-body); letter-spacing: var(--tracking-body); }
/* Focus darkens the border; the shell never changes size. */
.shell { display: flex; min-height: var(--control-height-md); align-items: center; gap: var(--space-2); border: 1px solid var(--border-strong); border-radius: var(--radius-control); padding: 0 var(--space-3); background: var(--surface); transition: border-color var(--duration-fast) var(--ease-standard); }
@media (hover: hover) and (pointer: fine) { .shell:hover:not(:focus-within) { border-color: var(--foreground); } }
.shell:focus-within { border-color: var(--foreground); }
/* The glass wakes up with the field: muted at rest, full contrast while searching. */
.shell > svg { flex: 0 0 auto; color: var(--text-muted); transition: color var(--duration-fast) var(--ease-standard); }
.shell:focus-within > svg, .shell[data-filled="true"] > svg { color: var(--foreground); }
.input { width: 100%; min-width: 0; border: 0; background: transparent; color: var(--foreground); font: inherit; font-size: var(--text-sm); letter-spacing: var(--tracking-body); outline: 0; }
.input:focus-visible { outline: 0; }
.input::placeholder { color: var(--text-muted); }
.input::-webkit-search-cancel-button { display: none; }
.clearSlot { display: grid; width: 24px; height: 24px; flex: 0 0 auto; place-items: center; }
.shell button { display: grid; width: 24px; height: 24px; flex: 0 0 auto; place-items: center; border: 0; border-radius: var(--radius-control); background: transparent; color: var(--text-muted); transition: background-color var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard); }
@media (hover: hover) and (pointer: fine) { .shell button:hover { background: var(--surface-muted); color: var(--foreground); } }
@media (prefers-reduced-motion: reduce) { .shell, .shell > svg, .shell button { transition: none; } }
`},{path:"registry/components/search-field/search-field.tsx",language:"tsx",content:`/**
 * Arc UI · Search field
 * MIT License · Copyright (c) 2026 Elia Kuratli
 * https://uiarc.dev/components/search-field
 * https://github.com/kuratlielia/arc-library
 */
"use client";
import { forwardRef, useId, useRef } from "react";
import type { InputHTMLAttributes } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Search, X as Xmark } from "lucide-react";
import { motionTokens } from "@/lib/motion-tokens";
import styles from "./search-field.module.css";
export interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> { label: string; value: string; onValueChange: (value: string) => void }
export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(function SearchField({ label, value, onValueChange, id, className, ...props }, ref) {
  const generated = useId(); const controlId = id ?? generated; const reduced = useReducedMotion(); const inputRef = useRef<HTMLInputElement | null>(null);
  const setRefs = (node: HTMLInputElement | null) => { inputRef.current = node; if (typeof ref === "function") ref(node); else if (ref) ref.current = node; };
  // Clearing returns focus to the field, since the clear button unmounts under the pointer.
  function clear() { onValueChange(""); inputRef.current?.focus(); }
  return <div className={styles.field}><label htmlFor={controlId}>{label}</label><div className={styles.shell} data-filled={value ? "true" : undefined}>
    <Search width={18} height={18} aria-hidden="true"/><input {...props} ref={setRefs} id={controlId} type="search" value={value} onChange={event => onValueChange(event.target.value)} className={[styles.input, className].filter(Boolean).join(" ")} />
    {/* The clear button has a reserved slot, so the field never changes width when it appears or leaves. */}
    <span className={styles.clearSlot}><AnimatePresence initial={false}>{value ? <motion.button key="clear" type="button" tabIndex={0} onClick={clear} aria-label="Clear search" initial={reduced ? { opacity: 0 } : { opacity: 0, scale: .8, filter: \`blur(\${motionTokens.blur.subtle}px)\` }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} exit={reduced ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, scale: .8, filter: \`blur(\${motionTokens.blur.subtle}px)\`, transition: { duration: motionTokens.duration.instant, ease: [...motionTokens.ease.standard] } }} whileTap={reduced ? undefined : { scale: .96, transition: { duration: motionTokens.duration.instant, ease: [...motionTokens.ease.standard] } }} transition={reduced ? { duration: motionTokens.duration.instant } : { ...motionTokens.spring.snappy, opacity: { duration: motionTokens.duration.fast }, filter: { duration: motionTokens.duration.fast } }}><Xmark width={16} height={16} aria-hidden="true" /></motion.button> : null}</AnimatePresence></span>
  </div></div>;
});
`}],t="",n={files:e,prompt:t};export{n as default,e as files,t as prompt};
