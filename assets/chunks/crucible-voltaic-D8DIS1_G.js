const e=[{path:"registry/default/cards/voltaic/voltaic.tsx",language:"tsx",content:`"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useVisibilityPause } from "@/hooks/use-visibility-pause";

export interface VoltaicProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Card content. */
  children: React.ReactNode;
  /** Arc color, any CSS color. The stroke core is auto-mixed toward white. @default electric violet */
  color?: string;
  /** Displacement strength — 0 is a calm line, higher is more violent arcing. @default 1 */
  intensity?: number;
  /** Temporal churn multiplier for the turbulence. @default 1 */
  speed?: number;
  /** Corner radius of the card and its arc, in px. @default 16 */
  borderRadius?: number;
  /** Freeze the arc at its current frame. @default false */
  paused?: boolean;
}

/** How far the SVG bleeds past the card so displaced kinks aren't clipped. */
const PAD = 12;

/** Deterministic PRNG so reseed/misfire schedules are identical every run (SSR-safe, no Math.random). */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(0x5eed);
const SEEDS = Array.from({ length: 32 }, () => Math.floor(rand() * 1000));
const MISFIRE_AT = Array.from({ length: 16 }, () => 0.25 + rand() * 0.55);

/**
 * Voltaic — an electric turbulence border. The card's perimeter is a live
 * arc: an SVG rounded-rect stroke continuously deformed by animated
 * procedural turbulence (feTurbulence noise drifting through feOffset, then
 * feDisplacementMap), so the line writhes and — on periodic reseeds —
 * crackles to a new configuration, under a soft violet corona. Every few
 * seconds the turbulence misfires to near-zero for a beat and snaps back,
 * like an arc re-striking. Hover ramps the displacement. Filter attributes
 * are driven by refs in a throttled rAF loop that pauses offscreen and on
 * hidden tabs; all randomness is seeded. Reduced motion: a static,
 * softly-glowing border with zero displacement.
 */
export function Voltaic({
  children,
  color = "#a78bfa",
  intensity = 1,
  speed = 1,
  borderRadius = 16,
  paused = false,
  className,
  style,
  ...props
}: VoltaicProps) {
  const reducedMotion = useReducedMotion();
  const rawId = React.useId();
  const id = React.useMemo(() => \`voltaic-\${rawId.replace(/[^a-zA-Z0-9-]/g, "")}\`, [rawId]);

  const turbRefs = React.useRef<(SVGFETurbulenceElement | null)[]>([null, null]);
  const offsetRefs = React.useRef<(SVGFEOffsetElement | null)[]>([null, null]);
  const displaceRefs = React.useRef<(SVGFEDisplacementMapElement | null)[]>([null, null]);
  const hoverRef = React.useRef(false);
  const boostRef = React.useRef(0);
  const lastFrame = React.useRef(0);

  const nodeRef = useVisibilityPause<HTMLDivElement>(
    (elapsed) => {
      // SVG filters re-rasterize on every attribute write — 30fps is plenty.
      if (elapsed - lastFrame.current < 1 / 30) return;
      lastFrame.current = elapsed;
      const t = elapsed * speed;

      boostRef.current += ((hoverRef.current ? 1 : 0) - boostRef.current) * 0.14;

      // Misfire: every cycle the turbulence drops to near-zero for ~150ms at
      // a seeded point in the cycle, then snaps back — the arc re-striking.
      const CYCLE = 3.4;
      const cycleIndex = Math.floor(t / CYCLE);
      const phase = t / CYCLE - cycleIndex;
      const misfireAt = MISFIRE_AT[cycleIndex % MISFIRE_AT.length] ?? 0.5;
      const env = phase > misfireAt && phase < misfireAt + 0.045 ? 0.06 : 1;

      // Cap the displacement so high intensity + hover boost can't push stroke
      // samples far enough apart to fragment the arc into detached specks that
      // spill past the filter region (~24 is where the path starts breaking up).
      const scale = Math.min(13 * intensity * (1 + 0.65 * boostRef.current) * env, 22).toFixed(2);
      // Bounded scroll of the noise offset. A linear (t * 30) drift grows without
      // limit and eventually slides the turbulence entirely out of the filter
      // region — the arc fades away after a minute or two. A slow sine keeps the
      // pattern travelling seamlessly forever; the crackle comes from reseeding below.
      const dx = (Math.sin(t * 0.23) * 60).toFixed(2);
      const dy = (Math.sin(t * 0.8) * 10).toFixed(2);
      const seed = String(SEEDS[Math.floor(t / 0.55) % SEEDS.length]);

      for (const el of displaceRefs.current) el?.setAttribute("scale", scale);
      for (const el of offsetRefs.current) {
        el?.setAttribute("dx", dx);
        el?.setAttribute("dy", dy);
      }
      for (const el of turbRefs.current) {
        // Reseeding jumps the noise to a new configuration — the crackle.
        if (el && el.getAttribute("seed") !== seed) el.setAttribute("seed", seed);
      }
    },
    { paused: paused || reducedMotion }
  );

  // If reduced motion engages mid-session, settle the arc back to a calm line.
  React.useEffect(() => {
    if (!reducedMotion) return;
    for (const el of displaceRefs.current) el?.setAttribute("scale", "0");
    boostRef.current = 0;
  }, [reducedMotion]);

  const handlePointerEnter = React.useCallback(() => {
    hoverRef.current = true;
  }, []);
  const handlePointerLeave = React.useCallback(() => {
    hoverRef.current = false;
  }, []);

  const rectGeometry: React.CSSProperties = {
    ["x" as string]: \`\${PAD}px\`,
    ["y" as string]: \`\${PAD}px\`,
    ["width" as string]: \`calc(100% - \${PAD * 2}px)\`,
    ["height" as string]: \`calc(100% - \${PAD * 2}px)\`,
  };

  const turbulence = (index: number, result: string) => (
    <>
      <feTurbulence
        ref={(el) => {
          turbRefs.current[index] = el;
        }}
        type="turbulence"
        baseFrequency="0.02 0.06"
        numOctaves={2}
        seed={7}
        result={\`\${result}-noise\`}
      />
      <feOffset
        ref={(el) => {
          offsetRefs.current[index] = el;
        }}
        in={\`\${result}-noise\`}
        dx={0}
        dy={0}
        result={\`\${result}-drift\`}
      />
      <feDisplacementMap
        ref={(el) => {
          displaceRefs.current[index] = el;
        }}
        in="SourceGraphic"
        in2={\`\${result}-drift\`}
        scale={0}
        xChannelSelector="R"
        yChannelSelector="G"
        result={\`\${result}-arc\`}
      />
    </>
  );

  return (
    <div
      ref={nodeRef}
      data-crucible="voltaic"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={cn("relative border border-white/10 bg-neutral-900", className)}
      style={{
        borderRadius,
        boxShadow: \`0 0 36px -10px color-mix(in oklab, \${color} 45%, transparent)\`,
        ...style,
      }}
      {...props}
    >
      <div className="relative rounded-[inherit]">{children}</div>
      <svg
        aria-hidden
        className="pointer-events-none absolute overflow-visible"
        style={{
          left: -PAD,
          top: -PAD,
          width: \`calc(100% + \${PAD * 2}px)\`,
          height: \`calc(100% + \${PAD * 2}px)\`,
        }}
      >
        <defs>
          <filter id={\`\${id}-arc\`} x="-25%" y="-25%" width="150%" height="150%">
            {turbulence(0, "a")}
          </filter>
          <filter id={\`\${id}-corona\`} x="-25%" y="-25%" width="150%" height="150%">
            {turbulence(1, "b")}
            <feGaussianBlur in="b-arc" stdDeviation="3.5" />
          </filter>
        </defs>
        {/* Violet corona: the same displaced path, blurred wide. */}
        <rect
          fill="none"
          stroke={color}
          strokeWidth={2.5}
          opacity={0.85}
          rx={borderRadius}
          filter={\`url(#\${id}-corona)\`}
          style={rectGeometry}
        />
        {/* Pale core: near-white filament riding the identical turbulence. */}
        <rect
          fill="none"
          strokeWidth={1.2}
          rx={borderRadius}
          filter={\`url(#\${id}-arc)\`}
          style={{
            ...rectGeometry,
            stroke: \`color-mix(in oklab, \${color} 30%, white)\`,
          }}
        />
      </svg>
    </div>
  );
}
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
