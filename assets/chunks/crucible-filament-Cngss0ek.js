const n=[{path:"registry/default/cards/filament/filament.tsx",language:"tsx",content:`import * as React from "react";

import { cn } from "@/lib/utils";

export interface FilamentProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Card content. */
  children: React.ReactNode;
  /**
   * Four stops for the traveling filament: \`[head, hot, cool, trace]\` — a
   * white-hot leading point, the bright silver it cools through, the cool
   * blue-gray it desaturates to, and a faint slate trace before it fades.
   */
  colors?: [string, string, string, string];
  /** Border radius in px. */
  radius?: number;
  /** Ring thickness in px. */
  thickness?: number;
  /** Seconds for one full lap. */
  duration?: number;
  /** Freeze the animation, holding the current frame. */
  paused?: boolean;
}

/**
 * Filament — an animated conic-gradient border, a filament of light
 * orbiting the card: a white-hot head trailing a silver-to-blue tail that
 * cools and desaturates, leaving a faint slate trace before it fades.
 * Pure CSS via \`@property\`-animated conic gradient — zero JS, zero
 * dependencies. Honors prefers-reduced-motion by freezing the wire in place.
 */
export function Filament({
  children,
  colors = ["#ffffff", "#dbe4f0", "#93a8c4", "#5f7896"],
  radius = 16,
  thickness = 1.5,
  duration = 6,
  paused = false,
  className,
  style,
  ...rest
}: FilamentProps) {
  return (
    <div
      data-crucible="filament"
      className={cn("relative isolate overflow-hidden bg-neutral-900", className)}
      style={
        {
          "--filament-head": colors[0],
          "--filament-hot": colors[1],
          "--filament-cool": colors[2],
          "--filament-trace": colors[3],
          "--filament-thickness": \`\${thickness}px\`,
          "--filament-duration": \`\${duration}s\`,
          "--filament-play": paused ? "paused" : "running",
          "--filament-angle": "0deg",
          borderRadius: radius,
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      <style>{\`
        @property --filament-angle {
          syntax: '<angle>';
          inherits: false;
          initial-value: 0deg;
        }
        @keyframes crucible-filament-spin {
          to { --filament-angle: 360deg; }
        }
        [data-crucible="filament"] .filament-ring {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: var(--filament-thickness);
          background: conic-gradient(
            from var(--filament-angle),
            var(--filament-head) 0%,
            var(--filament-hot) 3%,
            var(--filament-cool) 9%,
            color-mix(in oklab, var(--filament-cool) 25%, transparent) 15%,
            transparent 20%,
            color-mix(in oklab, var(--filament-trace) 35%, transparent) 30%,
            transparent 38%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          animation: crucible-filament-spin var(--filament-duration) linear infinite;
          animation-play-state: var(--filament-play);
        }
        @media (prefers-reduced-motion: reduce) {
          [data-crucible="filament"] .filament-ring {
            animation: none;
            --filament-angle: 20deg;
          }
        }
      \`}</style>

      <span aria-hidden className="filament-ring pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
`}],e="",a={files:n,prompt:e};export{a as default,n as files,e as prompt};
