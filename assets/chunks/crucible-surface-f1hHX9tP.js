const e=[{path:"registry/default/scroll/surface/surface.tsx",language:"tsx",content:`"use client";

import { motion, type HTMLMotionProps, type TargetAndTransition, type Variants } from "motion/react";
import * as React from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export interface SurfaceProps
  extends Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView" | "viewport" | "transition"> {
  /** Content to reveal. Each top-level child animates as its own staggered item. */
  children: React.ReactNode;
  /**
   * Named entrance treatment. \`melt\` is the Crucible signature: rise + blur +
   * a soft under-glow, like the element is surfacing out of the dark.
   * @default "melt"
   */
  preset?: "melt" | "fade" | "slide" | "scale" | "blur";
  /** Travel direction for \`melt\`/\`slide\`. @default "up" */
  direction?: "up" | "down" | "left" | "right";
  /** Travel distance in px for \`melt\`/\`slide\`. @default 12 */
  distance?: number;
  /** Starting blur radius in px for \`melt\`/\`blur\`. @default 8 */
  blur?: number;
  /** Starting scale for \`scale\`. @default 0.94 */
  scaleFrom?: number;
  /** Seconds each item takes to settle. @default 0.6 */
  duration?: number;
  /** Seconds between each top-level child's reveal. @default 0.08 */
  stagger?: number;
  /** Seconds before the first item starts. @default 0 */
  delay?: number;
  /** Re-trigger every time it scrolls into view instead of once. @default false */
  repeat?: boolean;
  /** Fraction of the element that must be visible to trigger. @default 0.4 */
  amount?: number;
  /** \`viewport.margin\`-style rootMargin, e.g. to trigger before entry. @default "0px 0px -10% 0px" */
  margin?: NonNullable<HTMLMotionProps<"div">["viewport"]>["margin"];
  /**
   * Scroll container to observe instead of the browser viewport. Pass a ref to
   * an \`overflow\`-scrolling ancestor so the reveal triggers as content scrolls
   * within THAT container (e.g. inside a boxed panel). @default the viewport
   */
  root?: React.RefObject<Element | null>;
  /** Show the under-glow (only rendered for \`preset="melt"\`). @default true */
  ember?: boolean;
  /** Glow color for the \`melt\` under-glow. @default "#ffffff" (soft white) */
  emberColor?: string;
}

function buildItemVariants(opts: {
  preset: SurfaceProps["preset"];
  direction: NonNullable<SurfaceProps["direction"]>;
  distance: number;
  blur: number;
  scaleFrom: number;
  duration: number;
  reducedMotion: boolean;
}): Variants {
  const { preset, direction, distance, blur, scaleFrom, duration, reducedMotion } = opts;

  if (reducedMotion) {
    // Reset the full superset of animatable props so the reveal lands on a clean
    // static frame even if an earlier (pre-hydration) render committed a melt/slide
    // hidden state carrying a blur or offset.
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, x: 0, y: 0, filter: "blur(0px)", scale: 1, transition: { duration: 0.3 } },
    };
  }

  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const offset = axis === "y" ? (direction === "up" ? distance : -distance) : direction === "left" ? distance : -distance;

  const usesOffset = preset === "melt" || preset === "slide";
  const usesBlur = preset === "melt" || preset === "blur";
  const usesScale = preset === "scale";

  const hidden: TargetAndTransition = {
    opacity: 0,
    ...(usesOffset ? { [axis]: offset } : {}),
    ...(usesBlur ? { filter: \`blur(\${blur}px)\` } : {}),
    ...(usesScale ? { scale: scaleFrom } : {}),
  };

  const show: TargetAndTransition = {
    opacity: 1,
    ...(usesOffset ? { [axis]: 0 } : {}),
    ...(usesBlur ? { filter: "blur(0px)" } : {}),
    ...(usesScale ? { scale: 1 } : {}),
    transition: { duration, ease: [0.25, 0.4, 0.25, 1] },
  };

  return { hidden, show };
}

/**
 * Surface — a composable in-view reveal wrapper. Wrap any content and it rises
 * into view as it crosses the viewport threshold; wrap multiple top-level
 * children and they stagger in sequence, each animating via shared variants.
 *
 * Default \`melt\` preset reads as surfacing out of the dark: children rise 12px
 * while a soft white under-glow brightens then fades beneath them, with a
 * starting blur that sharpens as they settle. Falls back to a plain opacity
 * fade when the user prefers reduced motion.
 */
export function Surface({
  children,
  preset = "melt",
  direction = "up",
  distance = 12,
  blur = 8,
  scaleFrom = 0.94,
  duration = 0.6,
  stagger = 0.08,
  delay = 0,
  repeat = false,
  amount = 0.4,
  margin = "0px 0px -10% 0px",
  root,
  ember = true,
  emberColor = "#ffffff",
  className,
  ...props
}: SurfaceProps) {
  const reducedMotion = useReducedMotion();
  const items = React.Children.toArray(children);

  const itemVariants = React.useMemo(
    () => buildItemVariants({ preset, direction, distance, blur, scaleFrom, duration, reducedMotion }),
    [preset, direction, distance, blur, scaleFrom, duration, reducedMotion]
  );

  const glowVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: [0, 0.55, 0],
      transition: { duration: duration * 1.4, times: [0, 0.45, 1], ease: "easeOut" },
    },
  };

  const showEmber = ember && preset === "melt" && !reducedMotion;

  return (
    <motion.div
      data-crucible="surface"
      className={cn("relative isolate", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: !repeat, amount, margin, root }}
      transition={{ staggerChildren: reducedMotion ? 0 : stagger, delayChildren: delay }}
      {...props}
    >
      {showEmber && (
        <motion.span
          aria-hidden
          variants={glowVariants}
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 blur-2xl"
          style={{ background: \`radial-gradient(60% 100% at 50% 100%, \${emberColor}55, transparent 70%)\` }}
        />
      )}
      {items.map((child, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className="will-change-[transform,filter,opacity]"
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
