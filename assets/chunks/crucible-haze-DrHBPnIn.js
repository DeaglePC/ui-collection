const e=[{path:"registry/default/utility/haze/haze.tsx",language:"tsx",content:`// No "use client" directive on purpose: Haze is a pure, static JSX composition —
// no hooks, no event handlers, no browser APIs — so it stays server-compatible
// and adds zero JS to the client bundle when rendered from an RSC.

import * as React from "react";

import { cn } from "@/lib/utils";

export interface HazeProps extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  /** Which edge the haze clings to — content sharpens away from this edge. @default "bottom" */
  edge?: "top" | "bottom" | "left" | "right";
  /**
   * Size of the blur zone in pixels, measured inward from the edge. Clamped to
   * 16–480 — backdrop-filter cost scales with covered area, so shallow zones
   * are both the look and the budget.
   * @default 128
   */
  depth?: number;
  /** Blur ceiling in pixels reached at the deepest point of the zone. Clamped to 0.5–96. @default 24 */
  blur?: number;
  /**
   * Number of stacked backdrop layers building the ramp. More layers = a finer
   * blur gradient (and more compositing work). Clamped to 3–12; the default is
   * tuned so no banding seam shows at any DPR.
   * @default 6
   */
  layers?: number;
  /**
   * Easing exponent applied to the ramp's gradient stops. \`1\` distributes the
   * ramp evenly through the zone; \`> 1\` holds sharpness longer before a steeper
   * dive at the edge; \`< 1\` starts hazing sooner. Clamped to 0.25–4.
   * @default 1
   */
  curve?: number;
  /**
   * Tint color washed toward the edge on top of the blur — any CSS color.
   * The default is a breath of near-black for dark UIs; pass a brand hue for
   * a color wash.
   * @default "#050508"
   */
  tint?: string;
  /** Tint opacity (0–1) at the deepest point of the zone. \`0\` removes the tint layer entirely. @default 0.2 */
  tintStrength?: number;
  /**
   * \`"absolute"\` pins the haze inside the nearest positioned ancestor (give
   * the container \`position: relative\`); \`"fixed"\` pins it to the viewport
   * edge — the classic floating-toolbar / bottom-of-page treatment.
   * @default "absolute"
   */
  position?: "absolute" | "fixed";
  /** Let pointer events pass through to the content beneath the haze. @default true */
  passThrough?: boolean;
}

const EDGE_PLACEMENT: Record<NonNullable<HazeProps["edge"]>, string> = {
  top: "inset-x-0 top-0",
  bottom: "inset-x-0 bottom-0",
  left: "inset-y-0 left-0",
  right: "inset-y-0 right-0",
};

/** Gradient axis runs from the sharp boundary of the zone toward the blurred edge. */
const EDGE_DIRECTION: Record<NonNullable<HazeProps["edge"]>, string> = {
  top: "to top",
  bottom: "to bottom",
  left: "to left",
  right: "to right",
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

/**
 * Haze — a progressive blur edge: a zone where content ramps from sharp to
 * fully blurred through a smooth gradient, the iOS/visionOS depth idiom. Use
 * it over scrolling lists, under floating toolbars, or across a hero image's
 * bottom edge.
 *
 * Built as stacked \`backdrop-filter\` layers on a geometric blur ladder, each
 * masked by a staggered gradient that overlaps its neighbors — adjacent layers
 * crossfade through shared segments, so the blur *ramps* continuously instead
 * of stepping, with no banding seam at any DPR. An optional tint layer washes
 * a color toward the edge.
 *
 * Zero JS at runtime — a static CSS composition. Nothing animates, so there is
 * no reduced-motion concern (the effect is spatial, not temporal) and no
 * reduced-motion hook is consumed. Decorative: \`aria-hidden\`, pointer-events
 * pass through by default.
 *
 * Performance: \`backdrop-filter\` cost scales with the area it covers — keep
 * zones shallow (the \`depth\` clamp enforces a sane ceiling) and avoid tiling
 * many deep hazes in one viewport.
 */
export function Haze({
  edge = "bottom",
  depth = 128,
  blur = 24,
  layers = 6,
  curve = 1,
  tint = "#050508",
  tintStrength = 0.2,
  position = "absolute",
  passThrough = true,
  className,
  style,
  ...props
}: HazeProps) {
  const depthPx = clamp(depth, 16, 480);
  const ceiling = clamp(blur, 0.5, 96);
  const count = Math.round(clamp(layers, 3, 12));
  const exponent = clamp(curve, 0.25, 4);
  const strength = clamp(tintStrength, 0, 1);

  const direction = EDGE_DIRECTION[edge];
  const vertical = edge === "top" || edge === "bottom";

  // The zone is divided into \`count + 1\` segments. Layer i is fully opaque
  // across segments [i, i+1] and fades out across the neighboring segment on
  // each side — so every point in the zone sits inside at least one opaque
  // band while adjacent layers crossfade through the shared segments. The
  // crossfade overlap is the anti-banding mechanism: effective blur
  // interpolates between rungs instead of stepping.
  const segments = count + 1;
  const stop = (t: number) =>
    \`\${(Math.pow(clamp(t / segments, 0, 1), exponent) * 100).toFixed(2)}%\`;

  const blurLayers = Array.from({ length: count }, (_, i) => {
    // Geometric ladder (each rung doubles toward the ceiling): blur perception
    // is roughly logarithmic, so equal ratio steps read as equal visual steps.
    // With the defaults (6 layers, 24px) the rungs run 0.75 → 1.5 → 3 → 6 →
    // 12 → 24px — the first rung is sub-pixel, so the zone's onset is
    // seamless too.
    const blurPx = ceiling / 2 ** (count - 1 - i);
    const maskImage =
      i === 0
        ? // First rung: opaque from the zone start (its blur is imperceptible).
          \`linear-gradient(\${direction}, #000 0%, #000 \${stop(1)}, transparent \${stop(2)})\`
        : i === count - 1
          ? // Last rung: holds opaque through 100% so the ceiling blur reaches
            // the very edge instead of falling off.
            \`linear-gradient(\${direction}, transparent \${stop(i - 1)}, #000 \${stop(i)}, #000 100%)\`
          : \`linear-gradient(\${direction}, transparent \${stop(i - 1)}, #000 \${stop(i)}, #000 \${stop(i + 1)}, transparent \${stop(i + 2)})\`;
    return (
      <div
        key={i}
        className="absolute inset-0"
        style={{
          backdropFilter: \`blur(\${blurPx}px)\`,
          WebkitBackdropFilter: \`blur(\${blurPx}px)\`,
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      />
    );
  });

  return (
    <div
      aria-hidden
      data-crucible="haze"
      className={cn(
        position === "fixed" ? "fixed" : "absolute",
        EDGE_PLACEMENT[edge],
        passThrough && "pointer-events-none",
        className
      )}
      style={{
        ...(vertical ? { height: depthPx } : { width: depthPx }),
        ...style,
      }}
      {...props}
    >
      {blurLayers}
      {strength > 0 && (
        <div
          className="absolute inset-0"
          style={{
            // Eased three-stop ramp: a straight two-stop alpha gradient can
            // band on wide zones; the soft midpoint keeps the wash smooth.
            background: \`linear-gradient(\${direction}, transparent 0%, color-mix(in srgb, \${tint} \${(strength * 35).toFixed(1)}%, transparent) 50%, color-mix(in srgb, \${tint} \${(strength * 100).toFixed(1)}%, transparent) 100%)\`,
          }}
        />
      )}
    </div>
  );
}
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
