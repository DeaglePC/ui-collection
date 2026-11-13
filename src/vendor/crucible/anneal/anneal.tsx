/**
 * Crucible · Anneal
 * MIT License · Copyright (c) 2026 Crucible (crucibleui.com)
 * https://crucibleui.com · https://crucibleui.com/r/anneal.json
 */
"use client";

import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import * as React from "react";

import { useReducedMotion } from "../use-reduced-motion";
import { cn } from "../cn";

export interface AnnealProps
  extends Omit<HTMLMotionProps<"span">, "children" | "initial" | "whileInView" | "viewport" | "transition"> {
  /** The text to reveal. */
  children: string;
  /** Split granularity. Words keep natural line-wrapping; chars are more dramatic. */
  by?: "word" | "char";
  /** Seconds before the reveal starts. */
  delay?: number;
  /** Seconds between each segment's reveal. */
  stagger?: number;
  /** Seconds each segment takes to sharpen. */
  duration?: number;
  /** Starting blur radius in px. */
  blur?: number;
  /** Re-trigger every time the text scrolls into view (default: once). */
  repeat?: boolean;
}

/**
 * Anneal — text that resolves from a soft blur into sharp focus, one segment
 * at a time, when it enters the viewport. Like metal normalizing as it cools.
 * Falls back to a simple fade when the user prefers reduced motion.
 */
export function Anneal({
  children,
  by = "word",
  delay = 0,
  stagger = 0.045,
  duration = 0.5,
  blur = 10,
  repeat = false,
  className,
  ...props
}: AnnealProps) {
  const reducedMotion = useReducedMotion();

  // Words keep trailing spaces attached so layout is identical to plain text.
  // In char mode each word's characters are grouped in a nowrap wrapper so the
  // line only ever breaks at spaces, never mid-word.
  const words = React.useMemo(() => children.split(/(?<=\s)/), [children]);

  const variants: Variants = reducedMotion
    ? {
        // Reset filter/y explicitly: useReducedMotion returns false during SSR, so
        // the non-reduced hidden pose (blur + y offset) may already be committed as
        // the initial inline style. Without resetting them here, whileInView drives
        // only opacity and the text freezes blurred/offset. (Same class as surface.)
        hidden: { opacity: 0 },
        visible: { opacity: 1, filter: "blur(0px)", y: "0em", transition: { duration: 0.3 } },
      }
    : {
        hidden: { opacity: 0, filter: `blur(${blur}px)`, y: "0.3em" },
        visible: {
          opacity: 1,
          filter: "blur(0px)",
          y: "0em",
          transition: { duration, ease: [0.25, 0.4, 0.25, 1] },
        },
      };

  return (
    <motion.span
      className={cn("inline-block", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, amount: 0.6 }}
      transition={{ staggerChildren: reducedMotion ? 0 : stagger, delayChildren: delay }}
      aria-label={children}
      {...props}
    >
      {by === "char"
        ? words.map((word, wi) => (
            <span key={wi} aria-hidden className="inline-block whitespace-nowrap">
              {[...word].map((ch, ci) => (
                <motion.span
                  key={ci}
                  variants={variants}
                  className="inline-block whitespace-pre will-change-[filter,transform,opacity]"
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          ))
        : words.map((segment, i) => (
            <motion.span
              key={i}
              aria-hidden
              variants={variants}
              className="inline-block whitespace-pre will-change-[filter,transform,opacity]"
            >
              {segment}
            </motion.span>
          ))}
    </motion.span>
  );
}
