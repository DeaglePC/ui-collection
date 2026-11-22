const e=[{path:"registry/components/breadcrumb/breadcrumb.module.css",language:"css",content:`/* The gap between crumbs matches the gap inside one, so every chevron sits centered between its two labels. */
.list { position: relative; display: flex; flex-wrap: wrap; align-items: center; gap: 2px 6px; margin: 0; padding: 0; list-style: none; }
.list li { display: inline-flex; align-items: center; gap: 6px; color: var(--text-muted); font-size: var(--text-sm); line-height: var(--leading-body); white-space: nowrap; }
.list li > svg { width: 16px; height: 16px; flex: 0 0 auto; color: var(--border-strong); stroke-width: 1.75; }
/* Each crumb reserves the width of its medium weight label, so becoming the current page never shifts the path. */
.list a, .list li > span, .list li > button { display: inline-flex; flex-direction: column; border-radius: 7px; padding: 4px 2px; }
.list a::after, .list li > span::after, .list li > button::after { height: 0; overflow: hidden; content: attr(data-label); font-weight: 500; visibility: hidden; user-select: none; pointer-events: none; }
.list li > button { border: 0; margin: 0; background: none; font: inherit; line-height: inherit; text-align: start; cursor: pointer; }
.list a, .list li > button { color: var(--text-secondary); text-decoration: underline 1px; text-decoration-color: transparent; text-underline-offset: 4px; transition: color var(--duration-fast) var(--ease-standard), text-decoration-color var(--duration-fast) var(--ease-standard); }
.list [aria-current="page"] { color: var(--accent-strong); font-weight: 500; transition: color var(--duration-fast) var(--ease-standard); }
@media (hover: hover) and (pointer: fine) { .list a:hover, .list li > button:hover { color: var(--accent-strong); text-decoration-color: color-mix(in oklab, currentColor 45%, transparent); } }
@media (prefers-reduced-motion: reduce) { .list a, .list li > button, .list [aria-current="page"] { transition: none; } }
`},{path:"registry/components/breadcrumb/breadcrumb.tsx",language:"tsx",content:`/**
 * Arc UI · Breadcrumb
 * MIT License · Copyright (c) 2026 Elia Kuratli
 * https://uiarc.dev/components/breadcrumb
 * https://github.com/kuratlielia/arc-library
 */
"use client";
import type { MouseEvent } from "react";
import { ChevronRight as NavArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArcLink } from "@/lib/arc-provider";
import { motionTokens } from "@/lib/motion-tokens";
import styles from "./breadcrumb.module.css";
export interface BreadcrumbItem {
  label: string;
  href?: string;
  /** Runs when the crumb is chosen. Without an href the crumb renders as a button, for paths that live in local state. */
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}
export interface BreadcrumbProps { items: BreadcrumbItem[]; ariaLabel?: string }
/** Crumbs present on first render stay still; crumbs added later slide in from the path before them. */
export function Breadcrumb({ items, ariaLabel = "Breadcrumb" }: BreadcrumbProps) {
  const reduced = useReducedMotion() ?? false;
  const still = { duration: 0 };
  const path = items.map(item => item.label).join("/");
  return <nav aria-label={ariaLabel}><ol className={styles.list}><AnimatePresence mode="popLayout" initial={false}>{items.map((item, index) => {
    const current = index === items.length - 1;
    return <motion.li key={\`\${item.label}-\${index}\`}
      layout={reduced ? false : "position"} layoutDependency={path}
      initial={reduced ? false : { opacity: 0, x: -8, filter: \`blur(\${motionTokens.blur.subtle}px)\` }} animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      exit={reduced ? { opacity: 0, transition: still } : { opacity: 0, x: -4, filter: \`blur(\${motionTokens.blur.subtle}px)\`, transition: { duration: motionTokens.duration.instant, ease: [...motionTokens.ease.standard] } }}
      transition={reduced ? still : { duration: motionTokens.duration.standard, ease: [...motionTokens.ease.enter], layout: motionTokens.spring.smooth }}>
      {index > 0 && <NavArrowRight width={14} height={14} aria-hidden="true"/>}
      {!current && item.href ? <ArcLink href={item.href} data-label={item.label} onClick={item.onClick}>{item.label}</ArcLink>
        : !current && item.onClick ? <button type="button" data-label={item.label} onClick={item.onClick}>{item.label}</button>
        : <span aria-current={current ? "page" : undefined} data-label={item.label}>{item.label}</span>}
    </motion.li>;
  })}</AnimatePresence></ol></nav>;
}
`}],t="",n={files:e,prompt:t};export{n as default,e as files,t as prompt};
