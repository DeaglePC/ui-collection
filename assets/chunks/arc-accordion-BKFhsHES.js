const n=[{path:"registry/components/accordion/accordion.module.css",language:"css",content:`.accordion { width: 100%; border-top: 1px solid var(--border); }
.item { border-bottom: 1px solid var(--border); }
.header { margin: 0; }
.trigger { display: flex; width: 100%; min-height: var(--control-height-lg); align-items: center; justify-content: space-between; gap: var(--space-5); padding: var(--space-2) 0; border: 0; background: transparent; color: var(--foreground); font: inherit; font-size: var(--text-sm); font-weight: 500; line-height: var(--leading-body); text-align: left; cursor: pointer; -webkit-tap-highlight-color: transparent; transition: color var(--duration-fast) var(--ease-standard); }
@media (hover: hover) and (pointer: fine) { .trigger:hover { color: var(--text-secondary); } .trigger:hover .icon { color: var(--foreground); } }
/* Rotation is driven by a spring in accordion.tsx; CSS only handles color. */
.icon { display: inline-flex; flex: 0 0 auto; color: var(--text-muted); transition: color var(--duration-fast) var(--ease-standard); }
.trigger[data-state="open"] .icon { color: var(--foreground); }
.panel { overflow: hidden; color: var(--text-secondary); font-size: var(--text-sm); line-height: var(--leading-body); }
.panelInner { overflow-wrap: anywhere; padding: 0 var(--space-8) var(--space-5) 0; }
.lg .trigger { min-height: 76px; gap: var(--space-8); padding-block: var(--space-5); font-size: var(--text-lg); letter-spacing: var(--tracking-body); }
.lg .panel { font-size: var(--text-base); line-height: 1.65; }
.lg .panelInner { max-width: 62ch; padding: 0 var(--space-12) var(--space-6) 0; }
@media (max-width: 520px) { .lg .trigger { min-height: 68px; font-size: var(--text-base); } .lg .panel { font-size: var(--text-sm); } .lg .panelInner { padding-right: var(--space-6); } }
@media (prefers-reduced-motion: reduce) { .trigger, .icon { transition: none; } }
`},{path:"registry/components/accordion/accordion.tsx",language:"tsx",content:`/**
 * Arc UI · Accordion
 * MIT License · Copyright (c) 2026 Elia Kuratli
 * https://uiarc.dev/components/accordion
 * https://github.com/kuratlielia/arc-library
 */
"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { TargetAndTransition, Variants } from "motion/react";
import { motionTokens } from "@/lib/motion-tokens";
import styles from "./accordion.module.css";

export interface AccordionItem { title: string; content: ReactNode; }
export interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number;
  /** "lg" suits page-level FAQs: questions at the large text size, answers at body size. */
  size?: "md" | "lg";
}

/** Height follows the content on a spring that never overshoots; closed panels leave the accessibility tree once they finish collapsing. */
const panelOpen: TargetAndTransition = { height: "auto", opacity: 1, visibility: "visible" };
const panelClosed: TargetAndTransition = { height: 0, opacity: 0, transitionEnd: { visibility: "hidden" } };
/** The answer settles down into place with a brief focus pull as the panel opens. */
const contentOpen: TargetAndTransition = { y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } };
const contentClosed: TargetAndTransition = { y: -6, filter: \`blur(\${motionTokens.blur.subtle}px)\` };
const panelMotion: Variants = {
  open: { ...panelOpen, transition: { height: motionTokens.spring.smooth, opacity: { duration: motionTokens.duration.standard, ease: [...motionTokens.ease.enter] } } },
  closed: { ...panelClosed, transition: { height: motionTokens.spring.smooth, opacity: { duration: motionTokens.duration.fast, ease: [...motionTokens.ease.standard] } } },
};
const contentMotion: Variants = {
  open: { ...contentOpen, transition: { y: motionTokens.spring.smooth, filter: { duration: motionTokens.duration.standard, ease: [...motionTokens.ease.enter] } } },
  closed: { ...contentClosed, transition: { duration: motionTokens.duration.fast, ease: [...motionTokens.ease.standard] } },
};
/** Reduced motion: same end states in one step, so server and client render identical styles. */
const panelStill: Variants = { open: { ...panelOpen, transition: { duration: 0 } }, closed: { ...panelClosed, transition: { duration: 0 } } };
const contentStill: Variants = { open: { ...contentOpen, transition: { duration: 0 } }, closed: { ...contentClosed, transition: { duration: 0 } } };

export function Accordion({ items, defaultOpen = 0, size = "md" }: AccordionProps) {
  const initialValue = defaultOpen >= 0 && defaultOpen < items.length ? String(defaultOpen) : "";
  const [openValue, setOpenValue] = useState(initialValue);
  const reduced = useReducedMotion();
  return <AccordionPrimitive.Root className={[styles.accordion, size === "lg" ? styles.lg : ""].filter(Boolean).join(" ")} type="single" collapsible value={openValue} onValueChange={setOpenValue}>
    {items.map((item, index) => { const open = openValue === String(index); return <AccordionPrimitive.Item className={styles.item} value={String(index)} key={\`\${item.title}-\${index}\`}>
      <AccordionPrimitive.Header className={styles.header}>
        <AccordionPrimitive.Trigger className={styles.trigger}>
          <span>{item.title}</span><motion.span className={styles.icon} initial={false} animate={{ rotate: open ? 180 : 0 }} transition={reduced ? { duration: 0 } : motionTokens.spring.snappy}><ChevronDown width={17} height={17} aria-hidden="true" /></motion.span>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      {/* Radix keeps semantics and ids; motion owns the height so a toggle mid-flight retargets instead of restarting. */}
      <AccordionPrimitive.Content forceMount asChild>
        <motion.div className={styles.panel} initial={false} animate={open ? "open" : "closed"} variants={reduced ? panelStill : panelMotion}>
          <motion.div className={styles.panelInner} variants={reduced ? contentStill : contentMotion}>{item.content}</motion.div>
        </motion.div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>; })}
  </AccordionPrimitive.Root>;
}

export default Accordion;
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
