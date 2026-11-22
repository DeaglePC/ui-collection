const n=[{path:"registry/default/backgrounds/draft/draft.tsx",language:"tsx",content:`"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { OglCanvas } from "@/lib/ogl-canvas";

export interface DraftProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Blob colors, any hex color. Defaults to a soft slate / indigo / violet palette. */
  colors?: [string, string, string, string];
  /** Animation speed multiplier. 1 = default, 2 = twice as fast. */
  speed?: number;
  /** Freeze the animation at its current frame. */
  paused?: boolean;
  /**
   * Idle autoplay: after ~1.5s with no pointer present, a seeded ghost drifts
   * slowly across the field and leans the mesh, so thumbnails and heroes never
   * look still; a real pointer takes over instantly. Never runs under reduced
   * motion. Default true.
   */
  idle?: boolean;
  /**
   * Softness of the color fields. Kept in the same px scale as the original
   * CSS version for API compatibility (90 = default); internally it maps to a
   * shader smoothness uniform — lower values sharpen the mesh edges, higher
   * values melt them further together.
   */
  blur?: number;
}

const DEFAULT_COLORS: [string, string, string, string] = [
  "#64748b", // slate — the calm body of the mesh
  "#6366f1", // indigo — cool current
  "#1a1a2b", // deep — the base field everything floats on
  "#8b5cf6", // violet — soft bloom
];

/** Hex → [r,g,b] in 0–1. Accepts #rgb / #rrggbb. */
function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  }
  const int = parseInt(h, 16);
  if (Number.isNaN(int) || h.length !== 6) return [0.39, 0.45, 0.55];
  return [((int >> 16) & 255) / 255, ((int >> 8) & 255) / 255, (int & 255) / 255];
}

/**
 * Original domain-warped fbm "fluid gradient mesh" fragment shader.
 * Three chained warp layers (q warps p, r warps p+q, f samples p+r) produce
 * slowly swirling, cloud-soft color fields rather than discrete blobs. Each
 * palette entry keys off a different warp field so the hues drift through one
 * another. Soft exponential tone curve so nothing clips, film-grain dithering
 * to defeat 8-bit banding. GLSL ES 1.00 (WebGL1/2 compatible).
 *
 * No fract() on spatial coordinates (only inside the hash), so there are no
 * wrap seams anywhere in the field.
 */
const FRAGMENT = /* glsl */ \`
precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform float uPointerActive; // eased 0-1 pointer/ghost presence

uniform vec3 uColor1; // slate — mesh body
uniform vec3 uColor2; // indigo — cool current
uniform vec3 uColor3; // deep — base field
uniform vec3 uColor4; // violet — bloom
uniform float uSpeed;
uniform float uSoftness; // 1 = default, from the blur prop

// --- compact value noise + fbm (original) ---
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float amp = 0.5;
  // Rotated lacunarity kills the axis-aligned look of raw value noise.
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 5; i++) {
    v += amp * vnoise(p);
    p = m * p;
    amp *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  // Slow by design: the whole field should read as a lava-lamp drift.
  float t = uTime * uSpeed * 0.05;

  // Centered, aspect-corrected field coordinate.
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0) * 1.35;

  // Gentle pointer influence: the field leans toward the cursor, strongest
  // nearby and fading out smoothly — a lean, never a spotlight.
  vec2 pd = vec2((uv.x - uPointer.x) * aspect, uv.y - uPointer.y);
  float pfall = exp(-dot(pd, pd) * 3.5) * uPointerActive;
  p -= (uPointer - 0.5) * 0.22 * pfall;

  // --- three-layer domain warp ---
  // q: first warp field, two decorrelated fbm channels drifting on their own
  // clocks so the motion never settles into a loop.
  vec2 q = vec2(
    fbm(p + t * vec2(0.9, 0.6)),
    fbm(p + vec2(5.2, 1.3) - t * vec2(0.5, 0.8))
  );

  // r: second warp, sampled through q — this is what turns soft gradients
  // into swirling currents.
  vec2 r = vec2(
    fbm(p + 1.7 * q + vec2(1.7, 9.2) + t * vec2(0.25, 0.4)),
    fbm(p + 1.7 * q + vec2(8.3, 2.8) - t * vec2(0.35, 0.15))
  );

  // f: the final field, warped through both layers.
  float f = fbm(p + 1.9 * r);

  // Softness maps the blur prop onto the smoothstep transition width: wide
  // windows melt the hues together, narrow ones cut cleaner shapes.
  float w = clamp(0.3 * uSoftness, 0.06, 0.85);

  // Each hue keys off a DIFFERENT warp field so the colors drift through one
  // another instead of moving in lockstep. smoothstep clamps — no clipping.
  vec3 col = uColor3;
  col = mix(col, uColor1, smoothstep(0.38 - w, 0.38 + w, f));
  col = mix(col, uColor2, 0.85 * smoothstep(0.52 - w, 0.52 + w, q.y));
  col = mix(col, uColor4, 0.75 * smoothstep(0.58 - w, 0.58 + w, r.x));

  // Cloud shading: valleys of the field sit deeper, crests lift — gives the
  // mesh volume without hard edges.
  col *= mix(0.72, 1.12, smoothstep(0.18, 0.82, f));

  // Luminous crest bloom where the field peaks, tinted along a second field
  // so the highlight color itself wanders.
  float glow = smoothstep(0.62, 0.94, f);
  col += mix(uColor2, uColor4, r.y) * glow * glow * 0.35;

  // Soft exponential tone curve: compresses highlights asymptotically below
  // 1.0 so the bloom can never clip to a flat patch.
  col = 1.0 - exp(-col * 1.7);

  // Faint vignette to seat the field behind content.
  vec2 vg = (uv - 0.5) * vec2(aspect, 1.0);
  col *= 1.0 - 0.3 * dot(vg, vg);

  // Film-grain dithering to defeat 8-bit banding in the slow gradients.
  float grain = hash21(gl_FragCoord.xy + fract(t) * 137.0) - 0.5;
  col += grain * (1.8 / 255.0);

  gl_FragColor = vec4(max(col, 0.0), 1.0);
}
\`;

/**
 * Draft — a soft fluid gradient mesh. A domain-warped fbm fragment shader
 * swirls slate, indigo, and violet fields through each other in a slow,
 * cloud-soft drift, with a gentle lean toward the pointer. Built on the
 * \`ogl-canvas\` harness: GPU-light, offscreen-paused, reduced-motion-safe.
 * Position it inside any \`relative\` container; it fills and sits behind
 * content.
 */
export function Draft({
  colors = DEFAULT_COLORS,
  speed = 1,
  paused = false,
  idle = true,
  blur = 90,
  className,
  ...props
}: DraftProps) {
  const uniforms = React.useMemo(
    () => ({
      uColor1: { value: hexToRgb(colors[0]) },
      uColor2: { value: hexToRgb(colors[1]) },
      uColor3: { value: hexToRgb(colors[2]) },
      uColor4: { value: hexToRgb(colors[3]) },
      uSpeed: { value: Math.max(speed, 0) },
      // 90px (the CSS-era default) maps to softness 1.
      uSoftness: { value: Math.min(Math.max(blur / 90, 0.1), 3) },
    }),
    [colors, speed, blur]
  );

  return (
    <OglCanvas
      aria-hidden
      data-crucible="draft"
      {...props}
      className={cn("absolute inset-0 -z-10", className)}
      fragment={FRAGMENT}
      uniforms={uniforms}
      paused={paused}
      ghost={idle}
      reducedMotionTime={8}
    />
  );
}
`}],e="",o={files:n,prompt:e};export{o as default,n as files,e as prompt};
