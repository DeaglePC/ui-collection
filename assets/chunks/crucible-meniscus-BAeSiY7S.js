const e=[{path:"registry/default/loaders/meniscus/meniscus.tsx",language:"tsx",content:`"use client";

import { motion, type MotionStyle, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export interface MeniscusProps extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  /**
   * Track the scroll progress of this element instead of the page. Pass a
   * ref to an \`overflow-y-auto\` container to drive the bar from an internal
   * scroll region — mirrors the \`scroller\` prop on Runnel.
   */
  scroller?: React.RefObject<HTMLElement | null>;
  /** Fill gradient, tail to leading edge. @default ["#4c6a92", "#dbe9ff"] */
  colors?: [string, string];
  /** Channel + fill thickness in px. @default 4 */
  height?: number;
  /** Accessible label. @default "Scroll progress" */
  label?: string;
}

/**
 * Meniscus — a scroll-progress bar rendered as liquid filling a channel:
 * a cool blue-to-white gradient fill with a white leading bead that
 * glows brighter while actively scrolling and calms when idle, flashing once
 * and settling to a solid neutral fill at 100%. Reports progress via
 * \`role="progressbar"\`.
 *
 * Renders as a plain block-level element — position it yourself (e.g.
 * \`className="fixed inset-x-0 top-0 z-50"\` for a page-top bar, or
 * \`className="absolute inset-x-0 top-0"\` alongside a \`scroller\` container).
 * Falls back to a static, non-glowing fill under reduced motion.
 */
export function Meniscus({
  scroller,
  colors = ["#4c6a92", "#dbe9ff"],
  height = 4,
  label = "Scroll progress",
  className,
  style,
  ...props
}: MeniscusProps) {
  const reducedMotion = useReducedMotion();
  const fillRef = React.useRef<HTMLDivElement>(null);
  const [valueNow, setValueNow] = React.useState(0);
  const lastPercentRef = React.useRef(0);
  const idleTimerRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const completedRef = React.useRef(false);

  const { scrollYProgress } = useScroll(scroller ? { container: scroller } : undefined);
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: reducedMotion ? 1000 : 300,
    damping: reducedMotion ? 100 : 40,
    restDelta: 0.001,
  });
  const width = useTransform(smoothProgress, (v) => \`\${Math.max(0, Math.min(1, v)) * 100}%\`);
  // The meniscus edge (wave + white-hot bead) rides the fill's right end — hide
  // it until there is actually a fill, so the rest state reads fully cold.
  const edgeOpacity = useTransform(smoothProgress, [0, 0.02], [0, 1]);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const clamped = Math.max(0, Math.min(1, latest));
    const percent = Math.round(clamped * 100);

    if (percent !== lastPercentRef.current) {
      lastPercentRef.current = percent;
      setValueNow(percent);
    }

    const node = fillRef.current;
    if (!node) return;

    if (!reducedMotion) {
      node.dataset.active = "true";
      window.clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        if (fillRef.current) fillRef.current.dataset.active = "false";
      }, 200);
    }

    const isComplete = clamped >= 0.995;
    if (isComplete && !completedRef.current) {
      completedRef.current = true;
      node.dataset.complete = "true";
    } else if (!isComplete && completedRef.current) {
      completedRef.current = false;
      node.dataset.complete = "false";
    }
  });

  React.useEffect(() => () => window.clearTimeout(idleTimerRef.current), []);

  return (
    <div
      data-crucible="meniscus"
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={valueNow}
      className={cn("relative w-full overflow-visible rounded-full bg-black/40", className)}
      style={{ height, ...style }}
      {...props}
    >
      <style>{\`
        [data-crucible="meniscus"] .meniscus-fill {
          transition: filter 200ms ease-out;
          filter: drop-shadow(0 0 2px var(--meniscus-hot)) brightness(0.85);
        }
        [data-crucible="meniscus"] .meniscus-fill[data-active="true"] {
          filter: drop-shadow(0 0 8px var(--meniscus-hot)) brightness(1.15);
        }
        [data-crucible="meniscus"] .meniscus-fill[data-complete="true"] {
          animation: crucible-meniscus-temper 700ms ease-out forwards;
        }
        @keyframes crucible-meniscus-temper {
          0% { filter: drop-shadow(0 0 14px #ffffff) brightness(1.6); }
          60% { filter: drop-shadow(0 0 10px var(--meniscus-hot)) brightness(1.3); }
          100% { filter: drop-shadow(0 0 4px rgba(255,255,255,0.35)) brightness(1.05) saturate(0.35); }
        }
        [data-crucible="meniscus"] .meniscus-wave {
          animation: crucible-meniscus-wave 1.6s ease-in-out infinite;
        }
        @keyframes crucible-meniscus-wave {
          0%, 100% { transform: translateY(-1px) scaleY(1); }
          50% { transform: translateY(1px) scaleY(1.15); }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-crucible="meniscus"] .meniscus-fill,
          [data-crucible="meniscus"] .meniscus-fill[data-active="true"],
          [data-crucible="meniscus"] .meniscus-fill[data-complete="true"] {
            filter: none;
            animation: none;
          }
          [data-crucible="meniscus"] .meniscus-wave {
            animation: none;
          }
        }
      \`}</style>
      <motion.div
        ref={fillRef}
        className="meniscus-fill relative h-full overflow-visible rounded-full"
        style={
          {
            width,
            background: \`linear-gradient(90deg, \${colors[0]}, \${colors[1]})\`,
            "--meniscus-hot": colors[1],
          } as MotionStyle
        }
      >
        {!reducedMotion && (
          <motion.svg
            aria-hidden
            className="meniscus-wave absolute right-0 -translate-y-1/2 translate-x-1/2 overflow-visible"
            style={{ top: "50%", width: height * 4, height: height * 4, opacity: edgeOpacity }}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M0 12 Q6 5 12 12 T24 12"
              stroke={colors[1]}
              strokeWidth={1.5}
              strokeLinecap="round"
            />
          </motion.svg>
        )}
        {!reducedMotion && (
          <motion.span
            aria-hidden
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-white"
            style={{
              width: height * 2,
              height: height * 2,
              boxShadow: \`0 0 \${height * 3}px \${height}px \${colors[1]}\`,
              opacity: edgeOpacity,
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
