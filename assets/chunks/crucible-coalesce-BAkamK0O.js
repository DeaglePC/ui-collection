const n=[{path:"registry/default/backgrounds/coalesce/coalesce.tsx",language:"tsx",content:`"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { OglCanvas } from "@/lib/ogl-canvas";

export interface CoalesceProps {
  /** Number of drifting cores, clamped 1–10. The pointer adds one more. Default 5. */
  count?: number;
  /**
   * Chrome pair \`[shadow, highlight]\`: the dark reflection tone and the
   * bright sky tone the surface mirrors. Any hex strings. Defaults to
   * mercury — silvery monochrome.
   */
  colors?: [string, string];
  /** Drift speed multiplier. 1 = default. */
  speed?: number;
  /** Base core radius as a fraction of the container's height. Default 0.16. */
  size?: number;
  /** Overall brightness of the surface shading. 1 = default. */
  intensity?: number;
  /** Freeze the animation, holding the current frame. */
  paused?: boolean;
  /**
   * Idle autoplay: after ~1.5s with no pointer present, a seeded ghost drifts
   * slowly across the field and carries the extra pointer core, so thumbnails
   * and heroes never look still; a real pointer takes over instantly. Never runs
   * under reduced motion. Default true.
   */
  idle?: boolean;
  /** Extra classes for the wrapper. Positioned \`absolute inset-0 -z-10\`. */
  className?: string;
}

const DEFAULT_COLORS: [string, string] = [
  "#262a31", // mercury shadow
  "#e9edf3", // mercury highlight
];

/** Hex → [r,g,b] in 0–1. Accepts #rgb / #rrggbb. */
function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  }
  const int = parseInt(h, 16);
  if (Number.isNaN(int) || h.length !== 6) return [0.9, 0.92, 0.95];
  return [((int >> 16) & 255) / 255, ((int >> 8) & 255) / 255, (int & 255) / 255];
}

/**
 * Metaball fragment shader. Classic sum-of-inverse-square fields thresholded
 * with smoothstep into one liquid silhouette; the analytic field gradient
 * doubles as a height-field normal for mirror-chrome shading (sharp fake
 * horizon, circling key light, rim on the blend edge). The pointer carries
 * one extra core. GLSL ES 1.00, constant loop bounds, grain-dithered.
 */
const FRAGMENT = /* glsl */ \`
precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform float uPointerActive;

uniform vec3 uColorA; // shadow tone
uniform vec3 uColorB; // highlight tone
uniform float uCount;
uniform float uSpeed;
uniform float uSize;
uniform float uIntensity;

const int MAX_N = 10;

float hash11(float n) {
  return fract(sin(n * 127.1 + 311.7) * 43758.5453);
}

float hash21(vec2 p) {
  p = fract(p * vec2(217.13, 373.41));
  p += dot(p, p + 31.73);
  return fract(p.x * p.y);
}

void main() {
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 p = vec2((vUv.x - 0.5) * aspect, vUv.y - 0.5);
  float t = uTime * uSpeed;
  float size = max(uSize, 0.02);
  int count = int(clamp(uCount, 1.0, float(MAX_N)));

  float f = 0.0;
  vec2 grad = vec2(0.0);

  // Sum of inverse-square fields, accumulating the analytic gradient
  // alongside for shading. Constant loop bound with an early break.
  for (int i = 0; i < MAX_N; i++) {
    if (i >= count) break;
    float fi = float(i);
    float h1 = hash11(fi + 1.0);
    float h2 = hash11(fi + 17.0);
    float h3 = hash11(fi + 43.0);
    float h4 = hash11(fi + 71.0);

    // Each core drifts a slow seeded lissajous orbit around its anchor.
    vec2 anchor = vec2((h1 - 0.5) * 0.8 * max(aspect, 1.0), (h2 - 0.5) * 0.5);
    vec2 amp = vec2(0.14 + 0.22 * h4, 0.10 + 0.18 * h3);
    vec2 c = anchor + amp * vec2(
      sin(t * (0.28 + 0.5 * h3) + h1 * 6.2832),
      cos(t * (0.22 + 0.45 * h4) + h2 * 6.2832)
    );

    float r = size * (0.55 + 0.7 * h3);
    vec2 d = p - c;
    float d2 = dot(d, d) + 1e-5;
    float r2 = r * r;
    f += r2 / d2;
    grad -= 2.0 * r2 * d / (d2 * d2);
  }

  // The pointer carries one extra core; the harness lerps uPointer, so it
  // trails with liquid lag and merges into the ambient field.
  vec2 pc = vec2((uPointer.x - 0.5) * aspect, uPointer.y - 0.5);
  vec2 pd = p - pc;
  // Shrinks away when the pointer leaves instead of parking at center.
  float pr = size * 0.8 * uPointerActive;
  float pd2 = dot(pd, pd) + 1e-5;
  f += pr * pr / pd2;
  grad -= 2.0 * pr * pr * pd / (pd2 * pd2);

  // Iso-surface: a crisp silhouette with a soft anti-aliased shoulder.
  float mask = smoothstep(1.0, 1.16, f);

  // Height-field normal: dividing the gradient by f^2 flattens the domes
  // over the cores and keeps the tilt strongest at the blend edge. At fusion
  // necks the raw slope spikes and, run through the sharp horizon term below,
  // used to trace hard sawtooth contours across the interior. Soft-limiting the
  // slope magnitude compresses those extreme neck values while leaving gentle
  // dome slopes untouched, so the mirror reads as smooth liquid, not terraced.
  vec2 gh = grad / (f * f);
  float ghLen = length(gh);
  gh /= 1.0 + ghLen * 0.6;
  vec3 n = normalize(vec3(-gh * size * 0.85, 1.0));

  // Mirror-chrome environment: bright sky above a soft dark horizon (a slightly
  // wider band than a razor edge — enough to read as a horizon, gentle enough
  // that rapid normal swings never quantize into hard steps).
  float envY = n.y + 0.28 * n.x;
  vec3 col = mix(uColorA, uColorB, smoothstep(-0.45, 0.6, envY));
  float horizon = exp(-abs(envY - 0.02) * 5.5);
  col = mix(col, uColorA * 0.45, horizon * 0.5);

  // One slowly circling key light for the moving specular glint.
  vec3 l = normalize(vec3(cos(t * 0.25) * 0.55, 0.7, 0.5));
  float spec = pow(max(dot(n, l), 0.0), 48.0);
  col += vec3(0.95, 0.97, 1.0) * spec * 0.9;

  // Silvery rim hugging the blend edge, where necks form and snap.
  float rim = smoothstep(1.0, 1.45, f) * (1.0 - smoothstep(1.45, 2.4, f));
  col += uColorB * rim * 0.28;

  col *= uIntensity;

  // Film-grain dithering kills banding in both color and the alpha edge.
  float grain = hash21(gl_FragCoord.xy + fract(t) * 61.0) - 0.5;
  col += grain * (2.0 / 255.0);
  float alpha = clamp(mask + grain * (1.5 / 255.0) * mask, 0.0, 1.0);

  gl_FragColor = vec4(max(col, 0.0), alpha);
}
\`;

/**
 * Coalesce — a metaball field. Several blobby cores drift on slow seeded
 * orbits and fuse where they meet, rendered as one mercury-chrome liquid: a
 * mirror environment with a sharp horizon, a circling specular glint, and a
 * silvery rim on the blend edge. The pointer carries one extra core with
 * liquid lag. Transparent outside the surface, so it layers over any stage.
 * Built on the \`ogl-canvas\` harness: GPU-light, offscreen-paused,
 * reduced-motion-safe. Drop it inside any \`relative\` container; it fills
 * and sits behind content.
 */
export function Coalesce({
  count = 5,
  colors = DEFAULT_COLORS,
  speed = 1,
  size = 0.16,
  intensity = 1,
  paused = false,
  idle = true,
  className,
}: CoalesceProps) {
  const uniforms = React.useMemo(
    () => ({
      uColorA: { value: hexToRgb(colors[0]) },
      uColorB: { value: hexToRgb(colors[1]) },
      uCount: { value: count },
      uSpeed: { value: speed },
      uSize: { value: size },
      uIntensity: { value: intensity },
    }),
    [colors, count, speed, size, intensity]
  );

  return (
    <OglCanvas
      aria-hidden
      data-crucible="coalesce"
      className={cn("absolute inset-0 -z-10", className)}
      fragment={FRAGMENT}
      uniforms={uniforms}
      reducedMotionTime={8}
      paused={paused}
      ghost={idle}
    />
  );
}
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
