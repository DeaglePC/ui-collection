const e=[{path:"registry/components/text-shimmer/text-shimmer.module.css",language:"css",content:`/* The band is the current text color; the resting base leans toward muted text. Override with --text-shimmer-highlight and --text-shimmer-base. */
.shimmer { --ts-highlight: var(--text-shimmer-highlight, currentColor); --ts-base: var(--text-shimmer-base, color-mix(in oklab, currentColor 12%, var(--text-muted))); }
.stage { position: relative; display: inline-block; max-width: 100%; }
.label { display: inline-block; max-width: 100%; background-repeat: no-repeat; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
/* While the line springs to a new width the label keeps its own line, so it never rewraps mid morph. */
.stage[data-sizing] .label { max-width: none; white-space: nowrap; }
.label::selection { -webkit-text-fill-color: currentColor; }
@supports not (color: color-mix(in oklab, red, blue)) { .label { background: none !important; -webkit-text-fill-color: currentColor; } }
@media (forced-colors: active) { .label { background: none !important; -webkit-text-fill-color: currentColor; } }
`},{path:"registry/components/text-shimmer/text-shimmer.tsx",language:"tsx",content:`/**
 * Arc UI · Text shimmer
 * MIT License · Copyright (c) 2026 Elia Kuratli
 * https://uiarc.dev/components/text-shimmer
 * https://github.com/kuratlielia/arc-library
 */
"use client";
import { useEffect, useLayoutEffect, useRef, useSyncExternalStore } from "react";
import { AnimatePresence, animate, motion, useInView, useMotionValue, usePageInView, useReducedMotion, useTransform } from "motion/react";
import type { AnimationPlaybackControls } from "motion/react";
import { motionTokens } from "@/lib/motion-tokens";
import styles from "./text-shimmer.module.css";
const subscribeHydration = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;
/** Half width of the highlight band in em, and a bell shaped falloff as [offset, strength] stops. */
const band = 2.2;
const falloff = [[-1, 0], [-.5, .5], [-.2, .9], [0, 1], [.2, .9], [.5, .5], [1, 0]] as const;
const percent = (value: number) => \`\${(value * 100).toFixed(1)}%\`;

/** Paints the band at sweep position \`t\` (0 sits left of the text, 1 right of it) over a base that is \`settle\` of the way to solid. */
function shimmerImage(t: number, settle: number) {
  const base = \`color-mix(in oklab, var(--ts-highlight) \${percent(settle)}, var(--ts-base))\`;
  const stops = falloff.map(([offset, strength]) => \`color-mix(in oklab, var(--ts-highlight) \${percent(strength)}, \${base}) calc(\${(t * 100).toFixed(2)}% + \${((2 * t - 1 + offset) * band).toFixed(3)}em)\`);
  return \`linear-gradient(90deg, \${base}, \${stops.join(", ")}, \${base})\`;
}

/**
 * A calm light sweep across a short status line, such as "Thinking" or "Generating summary", to show that work is ongoing.
 * The band uses the current text color over a muted base. When \`active\` turns false the band glides off and the text settles to solid.
 * A changed label rises in place while the line springs to its new width. The component sets \`aria-busy\`; announce completion from your own live region.
 */
export interface TextShimmerProps {
  /** The status text. Keep it to one short line. */
  children: string;
  /** Sweep while work is ongoing. Defaults to true. */
  active?: boolean;
  /** Seconds for one sweep across the text. Defaults to 1.8. */
  duration?: number;
  as?: "span" | "p" | "div" | "h2" | "h3" | "h4";
  className?: string;
  id?: string;
}
export function TextShimmer({ children, active = true, duration = 1.8, as = "span", className, id }: TextShimmerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReduced = useReducedMotion();
  const hydrated = useSyncExternalStore(subscribeHydration, clientSnapshot, serverSnapshot);
  const reduced = Boolean(hydrated && prefersReduced);
  const inView = useInView(ref, { margin: "64px" });
  const pageVisible = usePageInView();
  const sweep = useMotionValue(0);
  const settle = useMotionValue(active ? 0 : 1);
  const backgroundImage = useTransform(() => shimmerImage(sweep.get(), settle.get()));
  const running = active && !reduced && inView && pageVisible;
  const restWidth = useRef(0);
  const Tag = as;

  // Loop the sweep only while work is ongoing, visible, and motion is allowed. A paused band resumes where it stopped.
  useEffect(() => {
    if (reduced) sweep.jump(0);
    if (!running) return;
    let controls: AnimationPlaybackControls | undefined;
    const pass = (delay: number) => {
      if (sweep.get() >= 1) sweep.jump(0);
      controls = animate(sweep, 1, { duration: duration * (1 - sweep.get()), delay, ease: "linear", onComplete: () => pass(duration * .32) });
    };
    pass(sweep.get() > 0 ? 0 : .12);
    return () => controls?.stop();
  }, [running, reduced, duration, sweep]);

  // Finishing lets a band in flight glide off while the base resolves to solid, so the text never hard cuts.
  useEffect(() => {
    if (active) {
      const dim = animate(settle, 0, { duration: reduced ? 0 : motionTokens.duration.standard, ease: [...motionTokens.ease.standard] });
      return () => dim.stop();
    }
    const t = sweep.get();
    const glide = !reduced && t > 0 && t < 1 ? animate(sweep, 1, { duration: Math.min(.42, duration * (1 - t) * .5), ease: [...motionTokens.ease.enter] }) : undefined;
    const solid = animate(settle, 1, { duration: reduced ? motionTokens.duration.instant : .36, ease: [...motionTokens.ease.standard] });
    return () => { glide?.stop(); solid.stop(); };
  }, [active, reduced, duration, sweep, settle]);

  // A new label springs the line to its width instead of resizing in one frame, so text after it never jumps.
  useLayoutEffect(() => {
    const stage = ref.current;
    if (!stage) return;
    const sizing = Boolean(stage.style.width);
    const current = stage.getBoundingClientRect().width;
    stage.style.width = "";
    const next = stage.getBoundingClientRect().width;
    const from = sizing ? current : restWidth.current;
    restWidth.current = next;
    if (reduced || !from || Math.abs(from - next) < .5) { delete stage.dataset.sizing; return; }
    stage.dataset.sizing = "";
    const controls = animate(stage, { width: [from, next] }, { ...motionTokens.spring.morph, onComplete: () => { stage.style.width = ""; delete stage.dataset.sizing; } });
    return () => controls.stop();
  }, [children, reduced]);

  // Keep the resting width current when fonts load or the container resizes.
  useEffect(() => {
    const stage = ref.current;
    if (!stage || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() => { if (!stage.style.width) restWidth.current = stage.getBoundingClientRect().width; });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  return <Tag id={id} className={[styles.shimmer, className].filter(Boolean).join(" ")} data-state={active ? "active" : "idle"} aria-busy={active || undefined}>
    <span ref={ref} className={styles.stage}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span key={children} className={styles.label} style={{ backgroundImage }}
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: "0.3em", filter: \`blur(\${motionTokens.blur.soft}px)\` }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, y: "0em", filter: "blur(0px)" }}
          exit={reduced ? { opacity: 0, transition: { duration: motionTokens.duration.instant } } : { opacity: 0, y: "-0.24em", filter: \`blur(\${motionTokens.blur.subtle}px)\`, transition: { duration: motionTokens.duration.fast, ease: [...motionTokens.ease.standard] } }}
          transition={{ duration: reduced ? motionTokens.duration.instant : motionTokens.duration.standard, ease: [...motionTokens.ease.enter] }}>{children}</motion.span>
      </AnimatePresence>
    </span>
  </Tag>;
}

export default TextShimmer;
`}],t="",n={files:e,prompt:t};export{n as default,e as files,t as prompt};
