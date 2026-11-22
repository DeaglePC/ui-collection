const e=[{path:"registry/default/loaders/billet/billet.tsx",language:"tsx",content:`import * as React from "react";

import { cn } from "@/lib/utils";

export interface BilletProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Which content-shaped placeholder to forge.
   * - \`card\` (default): an avatar + heading rows, a media rect, and a
   *   paragraph — a full content card blank.
   * - \`text\`: a stack of text-line bars, the last one short.
   * - \`circle\`: a single avatar disc.
   * - \`rect\`: a single media/thumbnail block.
   * Compose several to prefigure any layout.
   * @default "card"
   */
  shape?: "card" | "text" | "circle" | "rect";
  /** Number of text-line bars for \`text\` (and the card paragraph). @default 3 */
  lines?: number;
  /** Width of the final, short line — any CSS length/percentage. @default "62%" */
  lastLineWidth?: string;
  /** Diameter in px of the \`circle\` avatar disc. @default 48 */
  size?: number;
  /** Sweep-cycle speed multiplier. 1 = default, 2 = twice as fast. @default 1 */
  speed?: number;
  /** Direction the light pass travels. @default "right" */
  direction?: "left" | "right";
  /** Tilt of the light band in degrees (0 = vertical bar). @default 12 */
  angle?: number;
  /** Corner radius in px for blocks and the card panel. @default 8 */
  radius?: number;
  /**
   * \`sweep\` (default): a single cool-white light pass with matte graphite
   * between passes. \`pulse\`: a gentle opacity breathe, no pass.
   * @default "sweep"
   */
  mode?: "sweep" | "pulse";
  /** Matte base tone of the placeholder blocks. Any CSS color. @default "#1c1e24" */
  baseColor?: string;
  /** Peak tone of the light pass. Any CSS color. @default "#e6ecf7" */
  highlightColor?: string;
  /** Freeze the animation on a designed lit frame. @default false */
  paused?: boolean;
  /** Accessible label announced while content loads. @default "Loading" */
  label?: string;
}

// @property makes --billet-pos a real animatable <number>, so the custom
// property INTERPOLATES between keyframes (unregistered custom properties
// snap, they don't tween) — that smooth tween is the whole light pass. The
// keyframes dwell off-screen (matte) then fire a single eased pass: a heat
// pass, not a constant conveyor. Reduced motion swaps to a slow opacity
// breathe — a living resting frame, never a dead grey box. All pure CSS:
// browsers already throttle CSS animations offscreen and on hidden tabs, so
// no JS observer is needed to pause.
const STYLE = \`
@property --billet-pos {
  syntax: "<number>";
  inherits: false;
  initial-value: 0;
}
@keyframes crucible-billet-sweep {
  0%, 44%  { --billet-pos: var(--billet-from); }
  44%      { --billet-pos: var(--billet-from); animation-timing-function: cubic-bezier(0.45, 0, 0.15, 1); }
  80%      { --billet-pos: var(--billet-to); }
  100%     { --billet-pos: var(--billet-to); }
}
@keyframes crucible-billet-pulse {
  0%, 100% { opacity: 0.5; }
  50%      { opacity: 1; }
}
[data-crucible="billet"] .billet-block {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background-color: var(--billet-base);
  border-radius: var(--billet-radius);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.035), inset 0 0 0 1px rgba(255, 255, 255, 0.02);
}
[data-crucible="billet"] .billet-shine {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: linear-gradient(
    var(--billet-grad-angle),
    transparent 34%,
    color-mix(in oklab, var(--billet-highlight) 85%, transparent) 50%,
    transparent 66%
  );
  transform: translateX(calc(var(--billet-pos) * 1%));
  mix-blend-mode: screen;
  opacity: 0.7;
  will-change: transform;
}
[data-crucible="billet"][data-mode="sweep"]:not([data-paused="true"]) .billet-shine {
  animation: crucible-billet-sweep var(--billet-dur) linear infinite;
}
[data-crucible="billet"][data-mode="pulse"] .billet-shine {
  display: none;
}
[data-crucible="billet"][data-mode="pulse"]:not([data-paused="true"]) .billet-block {
  animation: crucible-billet-pulse var(--billet-dur) ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  [data-crucible="billet"] .billet-shine {
    display: none !important;
  }
  [data-crucible="billet"]:not([data-paused="true"]) .billet-block {
    animation: crucible-billet-pulse calc(var(--billet-dur) * 1.5) ease-in-out infinite !important;
  }
}
\`;

// A single matte placeholder block with its own light-pass overlay.
function Block({ style }: { style?: React.CSSProperties }) {
  return (
    <div className="billet-block" style={style} aria-hidden>
      <span className="billet-shine" />
    </div>
  );
}

function TextLines({ lines, lastLineWidth, lineRadius }: { lines: number; lastLineWidth: string; lineRadius: number }) {
  return (
    <div className="flex w-full flex-col" style={{ gap: "0.62rem" }}>
      {Array.from({ length: lines }, (_, i) => (
        <Block
          key={i}
          style={{
            height: "0.85rem",
            width: i === lines - 1 && lines > 1 ? lastLineWidth : "100%",
            borderRadius: lineRadius,
          }}
        />
      ))}
    </div>
  );
}

/**
 * Billet — a content-shaped skeleton placeholder: matte graphite blocks (an
 * "unforged billet") crossed by a single cool-white light pass. The pass is a
 * heat pass, not a treadmill — it dwells off the block, then fires once and
 * rests, driven by an @property-registered custom property so the shine tweens
 * smoothly with zero JavaScript. Presets cover the common blanks (card / text
 * / circle / rect) and compose to prefigure any layout. Colors, radius, sweep
 * speed/direction/angle, line count, and a pulse mode are all themeable; the
 * region carries \`role="status"\` + \`aria-busy\`, and under reduced motion the
 * sweep becomes a gentle opacity breathe — a living resting frame, never a
 * dead grey box.
 */
export function Billet({
  shape = "card",
  lines = 3,
  lastLineWidth = "62%",
  size = 48,
  speed = 1,
  direction = "right",
  angle = 12,
  radius = 8,
  mode = "sweep",
  baseColor = "#1c1e24",
  highlightColor = "#e6ecf7",
  paused = false,
  label = "Loading",
  className,
  style,
  ...rest
}: BilletProps) {
  const lineCount = Math.max(1, Math.min(Math.round(lines), 12));
  const lineRadius = Math.min(radius, 6);

  const vars = {
    "--billet-base": baseColor,
    "--billet-highlight": highlightColor,
    "--billet-radius": \`\${radius}px\`,
    "--billet-grad-angle": \`\${90 + angle}deg\`,
    "--billet-dur": \`\${(2.8 / Math.max(speed, 0.05)).toFixed(3)}s\`,
    // Percentages the light band translates between (its own width is the
    // block width, so ±120% clears fully off either side).
    "--billet-from": direction === "left" ? "120" : "-120",
    "--billet-to": direction === "left" ? "-120" : "120",
    ...style,
  } as React.CSSProperties;

  const panel: React.CSSProperties = {
    padding: "1rem",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: \`calc(var(--billet-radius) + 6px)\`,
    background: "rgba(255,255,255,0.015)",
  };

  return (
    <div
      {...rest}
      data-crucible="billet"
      data-mode={mode}
      data-paused={paused ? "true" : undefined}
      role="status"
      aria-busy="true"
      aria-label={label}
      className={cn("relative block w-full", className)}
      style={vars}
    >
      <style>{STYLE}</style>

      {shape === "circle" && (
        <Block style={{ width: size, height: size, borderRadius: 9999 }} />
      )}

      {shape === "rect" && <Block style={{ width: "100%", height: "9rem" }} />}

      {shape === "text" && (
        <TextLines lines={lineCount} lastLineWidth={lastLineWidth} lineRadius={lineRadius} />
      )}

      {shape === "card" && (
        <div className="billet-card w-full" style={panel}>
          <div className="flex items-center" style={{ gap: "0.85rem" }}>
            <Block style={{ width: 44, height: 44, borderRadius: 9999, flex: "0 0 auto" }} />
            <div className="flex min-w-0 flex-1 flex-col" style={{ gap: "0.5rem" }}>
              <Block style={{ height: "0.95rem", width: "55%", borderRadius: lineRadius }} />
              <Block style={{ height: "0.75rem", width: "32%", borderRadius: lineRadius }} />
            </div>
          </div>
          <Block
            style={{ height: "8.5rem", width: "100%", borderRadius: "var(--billet-radius)", marginTop: "1rem" }}
          />
          <div className="flex flex-col" style={{ gap: "0.6rem", marginTop: "1rem" }}>
            {Array.from({ length: lineCount }, (_, i) => (
              <Block
                key={i}
                style={{
                  height: "0.8rem",
                  width: i === lineCount - 1 && lineCount > 1 ? lastLineWidth : "100%",
                  borderRadius: lineRadius,
                }}
              />
            ))}
          </div>
        </div>
      )}

      <span className="sr-only">{label}</span>
    </div>
  );
}
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
