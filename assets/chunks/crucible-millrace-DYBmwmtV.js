const e=[{path:"registry/default/scroll/millrace/millrace.tsx",language:"tsx",content:`"use client";

import { motion, useAnimationFrame, useInView, useMotionValue, useScroll, useTransform } from "motion/react";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export interface MillraceProps extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  /** Repeating content — text, logos, whatever. Duplicated internally for a seamless wrap. */
  children: React.ReactNode;
  /** How many copies of \`children\` to lay end to end. Increase for short content. @default 4 */
  repeat?: number;
  /** Idle drift speed in px/second when scroll is still. @default 40 */
  baseVelocity?: number;
  /** How strongly scroll velocity accelerates/reverses the drift. @default 4 */
  velocityFactor?: number;
  /** Max skew in degrees applied at high scroll velocity. @default 6 */
  skewFactor?: number;
  /** Base travel direction at rest. @default "left" */
  direction?: "left" | "right";
  /** Slow to a crawl on hover. @default true */
  pauseOnHover?: boolean;
  /**
   * Track the scroll velocity of this element instead of the window. Pass a
   * ref to an \`overflow-y-auto\` container to drive the race from an internal
   * scroll region.
   */
  scroller?: React.RefObject<HTMLElement | null>;
  /** Smoothed |velocity| (px/s) above which the fill ignites. @default 350 */
  heatThreshold?: number;
  /** Disable the velocity fill / smear / spark treatment entirely. @default true */
  heatFill?: boolean;
  /** Outline (resting) text color. @default "#8a8a92" (neutral) */
  steelColor?: string;
  /** Fill gradient stops, dim to bright. @default ["#c9c9d2", "#ffffff"] */
  heatColors?: [string, string];
}

/** Wraps \`v\` into \`[min, max)\` — the seamless-loop modulo. */
function wrapValue(min: number, max: number, v: number) {
  const range = max - min;
  if (range <= 0) return min;
  return (((v - min) % range) + range) % range + min;
}

const SPARKS = [
  { top: "18%", delay: 0 },
  { top: "52%", delay: 0.35 },
  { top: "78%", delay: 0.7 },
];

/**
 * Millrace — an infinite marquee whose speed and skew react to scroll
 * velocity. Idles at a steady drift; scrolling accelerates and skews it,
 * damped through a spring so it never jitters.
 *
 * Crucible signature: content renders as stamped outline type that fills
 * bright white once velocity clears a friction threshold, settling back to
 * outline at rest, with a horizontal smear and spark flecks at speed. Under
 * reduced motion the race freezes to a static outline row with no drift, skew,
 * smear, or fill reaction. The frame loop idles while the marquee is offscreen
 * (and on hidden tabs, where rAF stops).
 */
export function Millrace({
  children,
  repeat = 4,
  baseVelocity = 40,
  velocityFactor = 4,
  skewFactor = 6,
  direction = "left",
  pauseOnHover = true,
  scroller,
  heatThreshold = 350,
  heatFill = true,
  steelColor = "#8a8a92",
  heatColors = ["#c9c9d2", "#ffffff"],
  className,
  ...props
}: MillraceProps) {
  const reducedMotion = useReducedMotion();
  const rootRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { margin: "100px" });
  const inViewRef = React.useRef(inView);
  React.useEffect(() => {
    inViewRef.current = inView;
  }, [inView]);
  const baseX = useMotionValue(0);
  const hoveringRef = React.useRef(false);
  const [unitWidth, setUnitWidth] = React.useState(0);

  const { scrollY } = useScroll(scroller ? { container: scroller } : undefined);

  // Exponentially-damped scroll velocity (px/s), sampled every frame — avoids
  // the extra frame of lag a useVelocity(useSpring(...)) chain would add.
  const velocityRef = React.useRef(0);
  const lastScrollRef = React.useRef(0);
  const lastTimeRef = React.useRef<number | null>(null);

  const dirSign = direction === "left" ? -1 : 1;
  const gapPx = 48;

  React.useEffect(() => {
    const node = trackRef.current;
    if (!node) return;
    const measure = () => setUnitWidth(node.scrollWidth / repeat);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(node);
    return () => ro.disconnect();
  }, [repeat, children]);

  const x = useTransform(baseX, (v) => (unitWidth ? \`\${wrapValue(-unitWidth, 0, v)}px\` : "0px"));
  const skew = useMotionValue(0);
  const heat = useMotionValue(0);
  const smear = useMotionValue(0);

  useAnimationFrame((time, delta) => {
    const dt = Math.min(delta, 48) / 1000;

    // Reduced motion: static frame. Offscreen: idle (reset sampling so the
    // first frame back doesn't read a giant velocity spike).
    if (reducedMotion) return;
    if (!inViewRef.current) {
      lastTimeRef.current = null;
      return;
    }

    // Sample raw scroll velocity (px/s) from the spring-smoothed position.
    const current = scrollY.get();
    if (lastTimeRef.current !== null) {
      const elapsed = (time - lastTimeRef.current) / 1000;
      if (elapsed > 0) {
        const rawVelocity = (current - lastScrollRef.current) / elapsed;
        velocityRef.current += (rawVelocity - velocityRef.current) * Math.min(1, elapsed * 6);
      }
    }
    lastScrollRef.current = current;
    lastTimeRef.current = time;

    const v = velocityRef.current;
    const clampedFactor = Math.max(-velocityFactor, Math.min(velocityFactor, (v / 1500) * velocityFactor));

    // Hover slows the race to a crawl (10%) rather than a dead stop.
    const hoverScale = hoveringRef.current && pauseOnHover ? 0.1 : 1;
    const drift = dirSign * baseVelocity * dt;
    const boost = clampedFactor * baseVelocity * dt;
    baseX.set(baseX.get() + (drift + boost) * hoverScale);

    const absV = Math.abs(v);
    skew.set(Math.max(-skewFactor, Math.min(skewFactor, (v / 2000) * skewFactor)));
    heat.set(Math.max(0, Math.min(1, (absV - heatThreshold) / (heatThreshold * 2))));
    smear.set(Math.max(0, Math.min(3, absV / 900)));
  });

  const filter = useTransform(smear, (s) => (s > 0.05 ? \`blur(\${s.toFixed(2)}px)\` : "none"));
  const heatOpacity = useTransform(heat, (h) => h);
  const sparkOpacity = useTransform(heat, (h) => (h > 0.35 ? 1 : 0));

  const copies = Array.from({ length: repeat }, (_, i) => i);

  return (
    <div
      ref={rootRef}
      data-crucible="millrace"
      className={cn("relative isolate overflow-hidden", className)}
      onMouseEnter={() => {
        hoveringRef.current = true;
      }}
      onMouseLeave={() => {
        hoveringRef.current = false;
      }}
      {...props}
    >
      <motion.div
        ref={trackRef}
        className="flex w-max whitespace-nowrap will-change-transform"
        style={{
          x,
          skewX: reducedMotion ? 0 : skew,
          filter: reducedMotion || !heatFill ? "none" : filter,
          gap: gapPx,
          paddingInline: gapPx / 2,
        }}
      >
        {copies.map((i) => (
          <span key={i} className="relative inline-flex shrink-0 items-center" aria-hidden={i > 0}>
            <span
              className="millrace-outline select-none text-4xl font-black uppercase tracking-tight sm:text-5xl"
              style={{
                color: "transparent",
                WebkitTextStroke: \`1.5px \${steelColor}\`,
              }}
            >
              {children}
            </span>
            {heatFill && !reducedMotion && (
              <motion.span
                aria-hidden
                className="millrace-fill pointer-events-none absolute inset-0 select-none text-4xl font-black uppercase tracking-tight sm:text-5xl"
                style={{
                  opacity: heatOpacity,
                  backgroundImage: \`linear-gradient(90deg, \${heatColors[0]}, \${heatColors[1]})\`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  filter: \`drop-shadow(0 0 10px \${heatColors[1]}66)\`,
                }}
              >
                {children}
              </motion.span>
            )}
          </span>
        ))}
      </motion.div>

      {heatFill && !reducedMotion && (
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16">
          {SPARKS.map((spark, i) => (
            // Outer span gates visibility by heat (\`style\`); inner span owns the
            // fall/flicker keyframe loop (\`animate\`) — kept on separate elements
            // because an \`animate\` target always wins over a \`style\` value for
            // the same key, which would otherwise erase the heat gating.
            <motion.span key={i} className="absolute right-2" style={{ top: spark.top, opacity: sparkOpacity }}>
              <motion.span
                className="block h-1 w-1 rounded-full"
                style={{ backgroundColor: heatColors[1], boxShadow: \`0 0 6px 1px \${heatColors[1]}\` }}
                animate={{ y: [0, 10, 16], opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  ease: "easeIn",
                  delay: spark.delay,
                }}
              />
            </motion.span>
          ))}
        </div>
      )}
    </div>
  );
}
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
