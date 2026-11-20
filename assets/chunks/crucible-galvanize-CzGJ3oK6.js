const n=[{path:"registry/default/buttons/galvanize/galvanize.tsx",language:"tsx",content:`import * as React from "react";

import { cn } from "@/lib/utils";

export interface GalvanizeProps extends React.ComponentPropsWithoutRef<"button"> {
  /** Three colors the border rotates through. Any CSS colors. @default silver, blue, violet */
  colors?: [string, string, string];
  /** Border radius in px. @default 12 */
  radius?: number;
  /** Ring thickness in px at rest — thickens by 1px on hover. @default 1.5 */
  thickness?: number;
  /** Seconds for one full rotation at rest (hover runs ~2.9x faster). @default 5 */
  duration?: number;
  /** Freeze the animation, holding the current frame. @default false */
  paused?: boolean;
}

/**
 * Galvanize — an animated gradient border, like electroplating in progress.
 * Silver, blue, and violet rotate continuously around the edge; on hover
 * the rotation visibly accelerates and the ring thickens by a pixel, as if
 * current had increased. Pure CSS via a masked conic gradient — the
 * gradient never bleeds into the label. Honors prefers-reduced-motion by
 * freezing the ring at a static tri-tone gradient.
 */
export function Galvanize({
  colors = ["#cbd5e1", "#60a5fa", "#8b5cf6"],
  radius = 12,
  thickness = 1.5,
  duration = 5,
  paused = false,
  className,
  style,
  disabled,
  children,
  ...rest
}: GalvanizeProps) {
  return (
    <button
      data-crucible="galvanize"
      className={cn(
        "relative isolate inline-flex items-center justify-center overflow-hidden",
        "bg-neutral-900 px-6 py-3 text-sm font-medium text-white",
        "select-none transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
        "focus-visible:ring-[color:var(--galvanize-c1)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      style={
        {
          "--galvanize-c1": colors[0],
          "--galvanize-c2": colors[1],
          "--galvanize-c3": colors[2],
          "--galvanize-thickness": \`\${thickness}px\`,
          "--galvanize-duration": \`\${duration}s\`,
          "--galvanize-play": paused ? "paused" : "running",
          borderRadius: radius,
          ...style,
        } as React.CSSProperties
      }
      disabled={disabled}
      {...rest}
    >
      <style>{\`
        @property --galvanize-angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }
        @keyframes crucible-galvanize-rotate {
          to { --galvanize-angle: 360deg; }
        }
        /* The rotating conic lives ON the ring element (not an oversized child),
           so the border fills evenly at any button aspect ratio — animating the
           gradient's start angle rather than transform-rotating a rectangle. */
        [data-crucible="galvanize"] .galvanize-ring {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: var(--galvanize-thickness);
          transition: padding 200ms ease;
          background: conic-gradient(
            from var(--galvanize-angle),
            var(--galvanize-c1),
            var(--galvanize-c2),
            var(--galvanize-c3),
            var(--galvanize-c1)
          );
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          animation: crucible-galvanize-rotate var(--galvanize-duration) linear infinite;
          animation-play-state: var(--galvanize-play);
        }
        [data-crucible="galvanize"]:hover .galvanize-ring {
          padding: calc(var(--galvanize-thickness) + 1px);
          animation-duration: calc(var(--galvanize-duration) * 0.35);
        }
        [data-crucible="galvanize"]:disabled .galvanize-ring {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          [data-crucible="galvanize"] .galvanize-ring {
            animation: none;
            background: conic-gradient(from 35deg, var(--galvanize-c1), var(--galvanize-c2), var(--galvanize-c3), var(--galvanize-c1));
          }
          [data-crucible="galvanize"]:hover .galvanize-ring {
            padding: var(--galvanize-thickness);
          }
        }
      \`}</style>

      <span aria-hidden className="galvanize-ring pointer-events-none" />

      {/* Faint persistent rim over the gradient: keeps the silhouette readable
          (and lifts the dim ember/violet phases) no matter the spin phase. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/15"
      />

      <span className="relative z-10">{children}</span>
    </button>
  );
}
`}],e="",a={files:n,prompt:e};export{a as default,n as files,e as prompt};
