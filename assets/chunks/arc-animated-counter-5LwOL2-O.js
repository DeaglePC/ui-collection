const e=[{path:"registry/components/animated-counter/animated-counter.module.css",language:"css",content:`.counter { position: relative; display: inline-flex; flex-direction: column; color: var(--foreground); font-family: var(--font-display); font-size: var(--text-3xl); font-weight: 500; letter-spacing: var(--tracking-display); line-height: 1; font-variant-numeric: tabular-nums; }
.label { margin-bottom: var(--space-2); color: var(--text-muted); font-family: var(--font-body); font-size: var(--text-xs); font-weight: 400; letter-spacing: var(--tracking-body); line-height: var(--leading-body); }
/* Each digit is a clipped wheel; separators clip sideways only so a comma keeps its tail. */
.value { display: inline-flex; align-items: flex-start; white-space: nowrap; user-select: none; }
/* The wheel's window reaches a little past the line box and feathers out, so a turning digit fades at the edge instead of being cut. */
.column { --feather: .16em; position: relative; display: inline-block; overflow: hidden; margin-block: calc(var(--feather) * -1); padding-block: var(--feather); mask-image: linear-gradient(to bottom, transparent, #000 calc(var(--feather) * 1.5), #000 calc(100% - var(--feather) * 1.5), transparent); }
.sizer { visibility: hidden; }
.glyph { position: absolute; inset: var(--feather) 0; text-align: center; }
.labelText { display: inline-block; }
.labelSwap { position: relative; display: block; }
.symbol { display: inline-block; overflow-x: clip; }
.srOnly { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
`},{path:"registry/components/animated-counter/animated-counter.tsx",language:"tsx",content:`/**
 * Arc UI · Animated counter
 * MIT License · Copyright (c) 2026 Elia Kuratli
 * https://uiarc.dev/components/animated-counter
 * https://github.com/kuratlielia/arc-library
 */
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useInView, useMotionValue, useReducedMotion, useTransform, type MotionValue, type Variants } from "motion/react";
import { motionTokens } from "@/lib/motion-tokens";
import styles from "./animated-counter.module.css";

export interface AnimatedCounterProps {
  value: number; label?: string; prefix?: string; suffix?: string; decimals?: number;
  /** Roll every digit up from zero the first time the counter scrolls into view. */
  animateOnView?: boolean;
  /** Formatting locale. Fixed by default so server and client render the same digits. */
  locale?: string;
}

type Part = { key: string; digit: number; order: number } | { key: string; text: string };

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const rise: Variants = { hidden: { opacity: 0, y: "0.3em", filter: \`blur(\${motionTokens.blur.soft}px)\` }, shown: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: motionTokens.duration.standard, ease: [...motionTokens.ease.enter] } }, gone: { opacity: 0, y: "-0.3em", filter: \`blur(\${motionTokens.blur.subtle}px)\`, transition: { duration: motionTokens.duration.fast, ease: [...motionTokens.ease.standard] } } };
const fade: Variants = { hidden: { opacity: 0, y: 0, filter: "blur(0px)" }, shown: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: motionTokens.duration.instant } }, gone: { opacity: 0, y: 0, filter: "blur(0px)", transition: { duration: motionTokens.duration.instant } } };
const reveal = { ...motionTokens.spring.smooth, visualDuration: motionTokens.duration.considered };

/** Split a formatted number into columns keyed by place value, so 999 → 1,000 keeps the ones column the ones column. */
function partsFor(value: number, decimals: number, locale: string): Part[] {
  const parts = new Intl.NumberFormat(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals, numberingSystem: "latn" }).formatToParts(value);
  let place = parts.reduce((count, part) => count + (part.type === "integer" ? part.value.length : 0), 0);
  let fraction = 0;
  let order = 0;
  return parts.flatMap((part, index): Part[] => {
    if (part.type === "integer") return [...part.value].map(char => ({ key: \`i\${--place}\`, digit: Number(char), order: order++ }));
    if (part.type === "fraction") return [...part.value].map(char => ({ key: \`f\${fraction++}\`, digit: Number(char), order: order++ }));
    return [{ key: part.type === "group" ? \`g\${place}\` : part.type === "decimal" ? "d" : \`\${part.type}\${index}\`, text: part.value }];
  });
}

/** One digit on the wheel. Its offset from the wheel position decides where it sits and how visible it is. */
function Glyph({ position, digit }: { position: MotionValue<number>; digit: number }) {
  const offset = useTransform(position, current => ((((digit - current) % 10) + 15) % 10) - 5);
  const y = useTransform(offset, current => \`\${current}em\`);
  const opacity = useTransform(offset, current => Math.max(0, 1 - Math.abs(current)));
  const visibility = useTransform(offset, current => Math.abs(current) >= 1 ? "hidden" : "visible");
  const filter = useTransform(offset, current => Math.abs(current) < .02 || Math.abs(current) >= 1 ? "none" : \`blur(\${(Math.abs(current) * motionTokens.blur.subtle).toFixed(2)}px)\`);
  return <motion.span className={styles.glyph} style={{ y, opacity, filter, visibility }}>{digit}</motion.span>;
}

const presence = { initial: { width: 0, opacity: 0 }, animate: { width: "auto", opacity: 1 }, exit: { width: 0, opacity: 0 } };

/** A digit wheel. It always turns in the direction the whole number moved, wrapping 9 → 0 like an odometer. */
function Column({ digit, direction, armed, delay, reduceMotion }: { digit: number; direction: number; armed: boolean; delay: number; reduceMotion: boolean }) {
  const position = useMotionValue(armed ? 0 : digit);
  const wheel = useRef({ digit: armed ? 0 : digit, target: armed ? 0 : digit, revealed: !armed });
  useEffect(() => {
    const state = wheel.current;
    if (armed || state.digit === digit) { if (!armed) state.revealed = true; return; }
    state.target += direction < 0 && state.revealed ? -((state.digit - digit + 10) % 10) : (digit - state.digit + 10) % 10;
    state.digit = digit;
    if (reduceMotion) position.jump(state.target);
    else animate(position, state.target, state.revealed ? motionTokens.spring.smooth : { ...reveal, delay });
    state.revealed = true;
  }, [armed, delay, digit, direction, position, reduceMotion]);
  return <motion.span className={styles.column} {...presence} transition={reduceMotion ? { duration: 0 } : motionTokens.spring.morph}>
    <span className={styles.sizer}>0</span>
    {DIGITS.map(item => <Glyph key={item} position={position} digit={item} />)}
  </motion.span>;
}

export function AnimatedCounter({ value, label, prefix = "", suffix = "", decimals = 0, animateOnView = false, locale = "en-US" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: .6 });
  const reduceMotion = !!useReducedMotion();
  const [previous, setPrevious] = useState(value);
  const [direction, setDirection] = useState(1);
  if (value !== previous) { setPrevious(value); setDirection(value > previous ? 1 : -1); }
  const parts = partsFor(value, decimals, locale);
  const text = \`\${prefix}\${parts.map(part => "text" in part ? part.text : part.digit).join("")}\${suffix}\`;
  const armed = animateOnView && !inView;
  return <span ref={ref} className={styles.counter}>
    {label && <span className={styles.label}><span className={styles.labelSwap}><AnimatePresence mode="popLayout" initial={false}><motion.span key={label} className={styles.labelText} variants={reduceMotion ? fade : rise} initial="hidden" animate="shown" exit="gone">{label}</motion.span></AnimatePresence></span></span>}
    <span className={styles.srOnly}>{text}</span>
    <span className={styles.value} aria-hidden="true">
      {prefix && <span className={styles.symbol}>{prefix}</span>}
      <AnimatePresence initial={false}>
        {parts.map(part => "digit" in part
          ? <Column key={part.key} digit={part.digit} direction={direction} armed={armed} delay={Math.min(part.order * motionTokens.stagger.item, .25)} reduceMotion={reduceMotion} />
          : <motion.span key={part.key} className={styles.symbol} {...presence} transition={reduceMotion ? { duration: 0 } : motionTokens.spring.morph}>{part.text}</motion.span>)}
      </AnimatePresence>
      {suffix && <span className={styles.symbol}>{suffix}</span>}
    </span>
  </span>;
}

export default AnimatedCounter;
`}],t="",n={files:e,prompt:t};export{n as default,e as files,t as prompt};
