const e=[{path:"registry/default/buttons/weld/weld.tsx",language:"tsx",content:`import * as React from "react";

import { cn } from "@/lib/utils";

export interface WeldProps extends React.ComponentPropsWithoutRef<"button"> {
  /** Color of the blinding beam head. Any CSS color. @default white */
  headColor?: string;
  /** Color of the tail trailing the head. @default cool blue-white */
  tailColor?: string;
  /** Seconds for one full lap of the border. @default 3.2 */
  duration?: number;
  /** Border radius in px — the beam's path is corner-radius aware and matches this exactly. @default 10 */
  radius?: number;
  /** Travel counterclockwise instead of clockwise. @default false */
  reverse?: boolean;
  /** Seconds to wait before the first lap starts. @default 0 */
  delay?: number;
  /** Freeze the animation, holding the current frame. @default false */
  paused?: boolean;
}

/**
 * Weld — a light beam traveling the border in a continuous loop, like a
 * welding arc tracing the seam: a blinding white-hot head with a cool
 * blue-white tail, corner sparks, and a faint heat-discoloration on the rim
 * that fades before the next lap. Pure CSS, corner-radius aware via
 * \`offset-path\`. Honors prefers-reduced-motion by freezing the beam in place.
 */
export function Weld({
  headColor = "#ffffff",
  tailColor = "#93c5fd",
  duration = 3.2,
  radius = 10,
  reverse = false,
  delay = 0,
  paused = false,
  className,
  style,
  disabled,
  children,
  ...rest
}: WeldProps) {
  return (
    <button
      data-crucible="weld"
      className={cn(
        "relative isolate inline-flex items-center justify-center overflow-visible",
        "border border-neutral-800 bg-neutral-900 px-6 py-3 text-sm font-medium text-white",
        "select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
        "focus-visible:ring-[color:var(--weld-head)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      style={
        {
          "--weld-head": headColor,
          "--weld-tail": tailColor,
          "--weld-duration": \`\${duration}s\`,
          "--weld-delay": \`\${delay}s\`,
          "--weld-direction": reverse ? "reverse" : "normal",
          "--weld-play": paused ? "paused" : "running",
          "--weld-radius": \`\${radius}px\`,
          borderRadius: radius,
          ...style,
        } as React.CSSProperties
      }
      disabled={disabled}
      {...rest}
    >
      <style>{\`
        @keyframes crucible-weld-travel {
          to { offset-distance: 100%; }
        }
        @keyframes crucible-weld-spark {
          0%, 92%, 100% { opacity: 0; transform: scale(0.4); }
          95% { opacity: 1; transform: scale(1); }
        }
        @keyframes crucible-weld-heat {
          0%   { opacity: 0; }
          6%   { opacity: 0.9; }
          30%  { opacity: 0; }
          100% { opacity: 0; }
        }
        [data-crucible="weld"] .weld-track {
          position: absolute;
          inset: 0;
          offset-path: inset(0 round var(--weld-radius));
          offset-distance: 0%;
          animation: crucible-weld-travel var(--weld-duration) linear infinite;
          animation-delay: var(--weld-delay);
          animation-direction: var(--weld-direction);
          animation-play-state: var(--weld-play);
        }
        /* The track box is exactly container-sized so its own perimeter IS the
           button's border; offset-distance rides that perimeter by moving the
           box's center anchor. Centering the head/tail on that anchor makes
           them ride the path while the (invisible) track box itself overflows. */
        [data-crucible="weld"] .weld-track { offset-rotate: auto; }
        [data-crucible="weld"] .weld-head,
        [data-crucible="weld"] .weld-trail-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 999px;
        }
        [data-crucible="weld"] .weld-head {
          width: 7px;
          height: 7px;
          /* A tight white-hot core so the beam reads as a point riding the
             seam, not a loose orb hovering off the edge. */
          background: radial-gradient(circle, #fff 0%, var(--weld-head) 30%, var(--weld-tail) 62%, transparent 80%);
          filter: blur(0.3px);
          box-shadow: 0 0 5px 1px color-mix(in oklab, var(--weld-head) 85%, transparent),
            0 0 11px 2px color-mix(in oklab, var(--weld-tail) 45%, transparent);
        }
        /* The tail is drip dots on their own tracks, phase-lagged behind the
           head via negative animation-delays — they ride the same offset-path,
           so the trail bends around corners instead of flying off tangentially
           like a straight gradient bar would. */
        [data-crucible="weld"] .weld-trail-dot {
          background: var(--weld-tail);
          filter: blur(0.4px);
          box-shadow: 0 0 4px 1px color-mix(in oklab, var(--weld-tail) 55%, transparent);
        }
        [data-crucible="weld"] .weld-corner {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 999px;
          background: var(--weld-head);
          box-shadow: 0 0 5px 1px color-mix(in oklab, var(--weld-tail) 60%, transparent);
          animation: crucible-weld-spark var(--weld-duration) linear infinite;
          /* backwards: adopt the 0% keyframe (opacity 0) during the staggered
             start delay, so delayed corners stay dark on mount instead of
             flashing at their base opacity 1 until their animation begins. */
          animation-fill-mode: backwards;
          animation-play-state: var(--weld-play);
          transform: translate(-50%, -50%);
        }
        [data-crucible="weld"] .weld-heat {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 0 1.5px color-mix(in oklab, var(--weld-tail) 55%, transparent);
          animation: crucible-weld-heat var(--weld-duration) ease-out infinite;
          animation-delay: var(--weld-delay);
          /* backwards so a non-zero delay holds the rim at the 0% keyframe
             (opacity 0) rather than its base opacity 1 during the wait. */
          animation-fill-mode: backwards;
          animation-play-state: var(--weld-play);
        }
        [data-crucible="weld"]:disabled .weld-track,
        [data-crucible="weld"]:disabled .weld-corner,
        [data-crucible="weld"]:disabled .weld-heat {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          [data-crucible="weld"] .weld-track,
          [data-crucible="weld"] .weld-corner,
          [data-crucible="weld"] .weld-heat {
            animation: none;
          }
          [data-crucible="weld"] .weld-track { offset-distance: 0%; }
          [data-crucible="weld"] .weld-heat { opacity: 0.25; }
          [data-crucible="weld"] .weld-corner { opacity: 0; }
        }
      \`}</style>

      {/* Faint heat discoloration that blooms after the beam passes and fades before the next lap. */}
      <span aria-hidden className="weld-heat pointer-events-none" />

      {/* Corner sparks, roughly phase-locked to the beam reaching each corner. */}
      {/* Counterclockwise laps reach the top-right / bottom-left corners in the
          opposite order, so their phases swap when reversed. */}
      <span aria-hidden className="weld-corner pointer-events-none" style={{ top: 0, left: 0, animationDelay: \`calc(var(--weld-delay) + var(--weld-duration) * 0.0)\` }} />
      <span aria-hidden className="weld-corner pointer-events-none" style={{ top: 0, right: 0, animationDelay: \`calc(var(--weld-delay) + var(--weld-duration) * \${reverse ? 0.75 : 0.25})\` }} />
      <span aria-hidden className="weld-corner pointer-events-none" style={{ bottom: 0, right: 0, animationDelay: \`calc(var(--weld-delay) + var(--weld-duration) * 0.5)\` }} />
      <span aria-hidden className="weld-corner pointer-events-none" style={{ bottom: 0, left: 0, animationDelay: \`calc(var(--weld-delay) + var(--weld-duration) * \${reverse ? 0.25 : 0.75})\` }} />

      {/* The beam itself: a bright head trailed by drip dots, all riding the
          border path. Negative delays put each dot mid-lap immediately (no
          start-corner pileup) at a phase just behind the head. */}
      {[
        { lag: 0.008, size: 5, opacity: 0.85 },
        { lag: 0.018, size: 4, opacity: 0.6 },
        { lag: 0.03, size: 3.5, opacity: 0.4 },
        { lag: 0.044, size: 3, opacity: 0.22 },
      ].map(({ lag, size, opacity }) => (
        <span
          key={lag}
          aria-hidden
          className="weld-track pointer-events-none"
          style={{ animationDelay: \`calc(var(--weld-delay) - var(--weld-duration) * \${1 - lag})\` }}
        >
          <span className="weld-trail-dot" style={{ width: size, height: size, opacity }} />
        </span>
      ))}
      <span aria-hidden className="weld-track pointer-events-none">
        <span className="weld-head" />
      </span>

      <span className="relative z-10">{children}</span>
    </button>
  );
}
`}],a="",n={files:e,prompt:a};export{n as default,e as files,a as prompt};
