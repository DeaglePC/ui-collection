/**
 * Crucible · Sheen
 * MIT License · Copyright (c) 2026 Crucible (crucibleui.com)
 * https://crucibleui.com · https://crucibleui.com/r/sheen.json
 */
import * as React from "react";

import { cn } from "../cn";

export interface SheenProps extends React.ComponentPropsWithoutRef<"button"> {
  /** Peak color of the light pass, at its brightest. Any CSS color. @default white */
  color?: string;
  /** Color the rim decays through as the pass lingers and fades. @default neutral-400 */
  afterglowColor?: string;
  /** Seconds between the start of each pass. @default 3.5 */
  interval?: number;
  /** Border radius in px. @default 10 */
  radius?: number;
  /** Freeze the animation, holding the current frame. @default false */
  paused?: boolean;
}

/**
 * Sheen — a shimmer-sweep button on a brushed-metal cap. Pure CSS, zero
 * dependencies. The face is a machined metal plate — a fine brushed grain
 * over a vertical light-to-shadow gradient, capped by a crisp top rim
 * highlight — that reads dimensional at rest. A soft specular highlight
 * periodically crosses it: a blurred, chromatically dispersed ramp (warm
 * silver leading edge → white core → cool blue-white trail) that accelerates
 * through the middle of its travel, with a narrow micro-glint trailing a beat
 * behind, while the rim flashes and settles through a neutral afterglow back
 * to matte. Between passes a faint slow idle sheen drifts across the plate so
 * it never sits fully dead. Honors prefers-reduced-motion by freezing on a
 * designed static rim glow with the idle sheen pinned mid-plate.
 */
export function Sheen({
  color = "#ffffff",
  afterglowColor = "#a3a3a3",
  interval = 3.5,
  radius = 10,
  paused = false,
  className,
  style,
  disabled,
  children,
  ...rest
}: SheenProps) {
  return (
    <button
      data-crucible="sheen"
      className={cn(
        "relative isolate inline-flex items-center justify-center gap-2 overflow-hidden",
        "bg-neutral-900 px-6 py-3 text-sm font-medium text-white",
        "transition-colors duration-200 select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
        "focus-visible:ring-[color:var(--sheen-color)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      style={
        {
          "--sheen-color": color,
          "--sheen-afterglow": afterglowColor,
          "--sheen-interval": `${interval}s`,
          "--sheen-play": paused ? "paused" : "running",
          borderRadius: radius,
          ...style,
        } as React.CSSProperties
      }
      disabled={disabled}
      {...rest}
    >
      <style>{`
        @keyframes crucible-sheen-rim {
          0%, 6%   { border-color: var(--sheen-rim-base); box-shadow: 0 0 0 0 transparent; }
          9%       { border-color: var(--sheen-color); box-shadow: 0 0 16px 1px color-mix(in oklab, var(--sheen-color) 70%, transparent); }
          22%      { border-color: var(--sheen-afterglow); box-shadow: 0 0 10px 0px color-mix(in oklab, var(--sheen-afterglow) 48%, transparent); }
          32%, 100% { border-color: var(--sheen-rim-base); box-shadow: 0 0 0 0 transparent; }
        }
        @keyframes crucible-sheen-band {
          /* Accelerates through the middle of its travel — never linear. */
          0%, 6%   { transform: translateX(-220%) skewX(-18deg); animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          9.5%     { transform: translateX(420%) skewX(-18deg); }
          100%     { transform: translateX(420%) skewX(-18deg); }
        }
        @keyframes crucible-sheen-glint {
          /* Micro-glint trails the main pass by a beat. */
          0%, 6.8% { transform: translateX(-360%) skewX(-18deg); animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1); }
          10.8%    { transform: translateX(1300%) skewX(-18deg); }
          100%     { transform: translateX(1300%) skewX(-18deg); }
        }
        @keyframes crucible-sheen-idle {
          /* Slow low-amplitude drift so the plate breathes between passes. */
          0%   { transform: translateX(-7%); opacity: 0.45; }
          50%  { transform: translateX(7%);  opacity: 0.95; }
          100% { transform: translateX(-7%); opacity: 0.45; }
        }
        [data-crucible="sheen"] {
          --sheen-warm: color-mix(in oklab, var(--sheen-color) 82%, #f2d3a6);
          --sheen-cool: color-mix(in oklab, var(--sheen-color) 82%, #b6cbff);
          /* Idle matte rim color — the single border line is owned by the
             .sheen-rim overlay so the flash never doubles a static border.
             Hover tints this base; the flash cycle overrides it momentarily. */
          --sheen-rim-base: rgba(255, 255, 255, 0.10);
          /* A transparent border reserves the 1px border box (stable sizing)
             without drawing a second edge under the animated rim. */
          border: 1px solid transparent;
          /* Machined metal cap: fine brushed grain over a top-lit vertical face
             with a soft floor-bounce lift at the base. */
          background-image:
            repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.016) 0px, rgba(255, 255, 255, 0.016) 1px, rgba(0, 0, 0, 0.02) 1px, rgba(0, 0, 0, 0.02) 3px),
            linear-gradient(180deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.012) 22%, rgba(0, 0, 0, 0.18) 62%, rgba(255, 255, 255, 0.028) 100%);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12), inset 0 -1px 0 rgba(0, 0, 0, 0.38);
          transition: border-color 200ms ease, background-color 200ms ease, box-shadow 200ms ease,
            transform 120ms ease, filter 120ms ease;
        }
        [data-crucible="sheen"]:hover:not(:disabled) {
          --sheen-rim-base: color-mix(in oklab, var(--sheen-color) 45%, rgba(255, 255, 255, 0.10));
          background-color: #222226;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.16), inset 0 -1px 0 rgba(0, 0, 0, 0.38),
            0 0 14px 0 color-mix(in oklab, var(--sheen-color) 24%, transparent);
        }
        [data-crucible="sheen"]:active:not(:disabled) {
          transform: scale(0.98);
          filter: brightness(0.9);
        }
        [data-crucible="sheen"] .sheen-rim {
          animation: crucible-sheen-rim var(--sheen-interval) ease-out infinite;
          animation-play-state: var(--sheen-play);
        }
        [data-crucible="sheen"] .sheen-band {
          animation: crucible-sheen-band var(--sheen-interval) linear infinite;
          animation-play-state: var(--sheen-play);
        }
        [data-crucible="sheen"] .sheen-glint {
          animation: crucible-sheen-glint var(--sheen-interval) linear infinite;
          animation-play-state: var(--sheen-play);
        }
        [data-crucible="sheen"] .sheen-idle {
          animation: crucible-sheen-idle calc(var(--sheen-interval) * 2) ease-in-out infinite;
          animation-play-state: var(--sheen-play);
        }
        [data-crucible="sheen"]:disabled .sheen-rim,
        [data-crucible="sheen"]:disabled .sheen-band,
        [data-crucible="sheen"]:disabled .sheen-glint,
        [data-crucible="sheen"]:disabled .sheen-idle {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          [data-crucible="sheen"] .sheen-rim,
          [data-crucible="sheen"] .sheen-band,
          [data-crucible="sheen"] .sheen-glint,
          [data-crucible="sheen"] .sheen-idle {
            animation: none;
          }
          [data-crucible="sheen"] .sheen-rim {
            box-shadow: 0 0 8px 0px color-mix(in oklab, var(--sheen-color) 30%, transparent);
            border-color: color-mix(in oklab, var(--sheen-color) 35%, transparent);
          }
          /* Pin the idle sheen to a legible resting pose rather than hiding it. */
          [data-crucible="sheen"] .sheen-idle {
            transform: translateX(0%);
            opacity: 0.7;
          }
          [data-crucible="sheen"] .sheen-band,
          [data-crucible="sheen"] .sheen-glint {
            display: none;
          }
        }
      `}</style>

      {/* Idle sheen: a broad, faint soft-light highlight that slowly drifts
          across the plate so it has life between passes. */}
      <span
        aria-hidden
        className="sheen-idle pointer-events-none absolute inset-0 rounded-[inherit] will-change-transform"
        style={{
          background:
            "radial-gradient(140% 160% at 32% -30%, color-mix(in oklab, var(--sheen-color) 12%, transparent), transparent 58%)",
          mixBlendMode: "soft-light",
        }}
      />

      {/* Rim: idle matte border that flashes and cools on every pass. */}
      <span
        aria-hidden
        className="sheen-rim pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent"
      />

      {/* Sweep: a soft specular ramp — warm-silver leading edge, narrow white
          core, cool blue-white trail — that crosses the face, with a thinner
          micro-glint trailing it. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
      >
        <span
          className="sheen-band absolute top-1/2 left-0 h-[220%] w-1/3 -translate-y-1/2 will-change-transform"
          style={{
            background: [
              "linear-gradient(90deg",
              "transparent 0%",
              "color-mix(in oklab, var(--sheen-warm) 8%, transparent) 26%",
              "color-mix(in oklab, var(--sheen-warm) 26%, transparent) 42%",
              "color-mix(in oklab, var(--sheen-color) 92%, white) 49.5%",
              "color-mix(in oklab, var(--sheen-color) 92%, white) 50.5%",
              "color-mix(in oklab, var(--sheen-cool) 26%, transparent) 58%",
              "color-mix(in oklab, var(--sheen-cool) 8%, transparent) 74%",
              "transparent 100%)",
            ].join(", "),
            filter: "blur(3px)",
            mixBlendMode: "soft-light",
            opacity: 0.95,
          }}
        />
        <span
          className="sheen-band absolute top-1/2 left-0 h-[220%] w-1/3 -translate-y-1/2 will-change-transform"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, transparent 40%, color-mix(in oklab, var(--sheen-color) 80%, white) 50%, transparent 60%, transparent 100%)",
            filter: "blur(2px)",
            mixBlendMode: "screen",
            opacity: 0.55,
          }}
        />
        <span
          className="sheen-glint absolute top-1/2 left-0 h-[220%] w-[9%] -translate-y-1/2 will-change-transform"
          style={{
            background:
              "linear-gradient(90deg, transparent, color-mix(in oklab, var(--sheen-cool) 65%, white) 50%, transparent)",
            filter: "blur(1.5px)",
            mixBlendMode: "screen",
            opacity: 0.35,
          }}
        />
      </span>

      <span className="relative z-10">{children}</span>
    </button>
  );
}
