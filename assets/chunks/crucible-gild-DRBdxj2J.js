const e=[{path:"registry/default/text/gild/gild.tsx",language:"tsx",content:`/**
 * Crucible · Gild
 * MIT License · Copyright (c) 2026 Crucible (crucibleui.com)
 * https://crucibleui.com · https://crucibleui.com/r/gild.json
 */
"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export interface GildColors {
  /** Resting metal tone the sweep travels across. @default warm neutral-bronze */
  base?: string;
  /** White core of the sweep. @default white */
  core?: string;
  /** Inner edge of the sweep. @default champagne gold */
  amber?: string;
  /** Outer edge of the sweep. @default deep champagne */
  ember?: string;
}

export interface GildProps extends React.ComponentPropsWithoutRef<"span"> {
  /** Element tag rendered. @default "span" */
  as?: "span" | "div" | "p" | "h1" | "h2" | "h3";
  /** Gradient stops for the base tone and sweep core/edges. */
  colors?: GildColors;
  /** Seconds between sweeps. @default 4.5 */
  interval?: number;
  /** Sweep angle in degrees. @default 100 */
  angle?: number;
  /** Only sweep while hovered, instead of continuously on an interval. @default false */
  hoverOnly?: boolean;
  /** Freeze the sweep at its current frame. @default false */
  paused?: boolean;
}

const DEFAULT_COLORS: Required<GildColors> = {
  base: "#9c8b6e",
  core: "#ffffff",
  amber: "#e8d5a3",
  ember: "#c9ae7c",
};

/**
 * Gild — a narrow white light band, edged in refined champagne gold, sweeps
 * across a brushed neutral-bronze text fill on a deliberate slow interval —
 * never a constant conveyor shimmer. Pure CSS, driven by an animated
 * \`@property\` so the sweep interpolates smoothly inside the gradient stops.
 * Freezes at a static mid-sweep frame under reduced motion.
 */
export function Gild({
  as = "span",
  colors,
  interval = 4.5,
  angle = 100,
  hoverOnly = false,
  paused = false,
  className,
  style,
  children,
  ...props
}: GildProps) {
  const reducedMotion = useReducedMotion();
  const c = { ...DEFAULT_COLORS, ...colors };
  const Tag = as;

  const gradient = \`linear-gradient(\${angle}deg,
    \${c.base} 0%,
    \${c.base} calc(var(--gild-shine, 45%) - 22%),
    \${c.amber} calc(var(--gild-shine, 45%) - 8%),
    \${c.core} var(--gild-shine, 45%),
    \${c.amber} calc(var(--gild-shine, 45%) + 8%),
    \${c.ember} calc(var(--gild-shine, 45%) + 16%),
    \${c.base} calc(var(--gild-shine, 45%) + 30%),
    \${c.base} 100%)\`;

  const forcePaused = paused || reducedMotion;

  return (
    <Tag
      data-crucible="gild"
      data-hover-only={hoverOnly ? "" : undefined}
      className={cn("gild-text inline-block bg-clip-text text-transparent", className)}
      style={
        {
          backgroundImage: gradient,
          backgroundSize: "220% 220%",
          // Per-instance duration: the <style> rule below is shared by every
          // Gild on the page, so the interval must ride a custom property.
          "--gild-interval": \`\${Math.max(interval, 0.1)}s\`,
          ...(forcePaused ? { "--gild-play": "paused" } : {}),
          ...(reducedMotion ? { "--gild-shine": "45%" } : {}),
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <style>{\`
        /* Rest at -35% so every sweep stop (widest: shine + 30%) sits below 0%
           and the resting fill is pure base — no stuck ember glyph. */
        @property --gild-shine {
          syntax: '<percentage>';
          inherits: true;
          initial-value: -35%;
        }
        @keyframes crucible-gild-sweep {
          0% { --gild-shine: -35%; }
          30% { --gild-shine: 120%; }
          100% { --gild-shine: 120%; }
        }
        [data-crucible="gild"] {
          animation: crucible-gild-sweep var(--gild-interval, 4.5s) ease-in-out infinite;
          animation-play-state: var(--gild-play, running);
        }
        [data-crucible="gild"][data-hover-only] {
          animation-play-state: var(--gild-play, paused);
        }
        [data-crucible="gild"][data-hover-only]:hover {
          animation-play-state: var(--gild-play, running);
        }
        @media (prefers-reduced-motion: reduce) {
          [data-crucible="gild"] {
            animation: none;
            --gild-shine: 45%;
          }
        }
      \`}</style>
      {children}
    </Tag>
  );
}
`}],n="",a={files:e,prompt:n};export{a as default,e as files,n as prompt};
