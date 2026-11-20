const e=[{path:"registry/default/backgrounds/stipple/stipple.tsx",language:"tsx",content:`"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { OglCanvas } from "@/lib/ogl-canvas";

export interface StippleProps {
  /**
   * Duotone pair \`[paper, ink]\`: the dark paper tone and the light ink laid
   * over it. Any hex strings. Defaults to risograph sepia — warm cream ink
   * on near-black paper.
   */
  colors?: [string, string];
  /** Dither cell size in canvas pixels — bigger is chunkier. Clamped 2–16. Default 4. */
  pixelSize?: number;
  /** Quantization steps between the two inks. Clamped 2–8. Default 4. */
  levels?: number;
  /** Drift speed multiplier. 1 = default. */
  speed?: number;
  /** Contrast / ink coverage of the underlying field. 1 = default. */
  intensity?: number;
  /**
   * Idle autoplay: after ~1.5s with no real pointer, a seeded ghost pointer
   * bends the waves on a slow drift so it never looks dead in thumbnails and
   * heroes; the real pointer takes over instantly. Never runs under reduced
   * motion. @default true
   */
  idle?: boolean;
  /** Freeze the animation, holding the current frame. */
  paused?: boolean;
  /** Extra classes for the wrapper. Positioned \`absolute inset-0 -z-10\`. */
  className?: string;
}

const DEFAULT_COLORS: [string, string] = [
  "#181310", // near-black warm paper
  "#e0cba4", // sepia-cream ink
];

/** Hex → [r,g,b] in 0–1. Accepts #rgb / #rrggbb. */
function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  }
  const int = parseInt(h, 16);
  if (Number.isNaN(int) || h.length !== 6) return [0.88, 0.8, 0.64];
  return [((int >> 16) & 255) / 255, ((int >> 8) & 255) / 255, (int & 255) / 255];
}

/**
 * Ordered-dither fragment shader. A drifting fbm field is sampled once per
 * dither cell, quantized to a small number of levels, and the banding is
 * broken by an 8x8 Bayer threshold matrix — the classic retro print
 * pipeline, with the dither itself as the aesthetic. A second quantize pass
 * drifts half a cell out of register on a very slow cycle, like a print
 * pass slipping. GLSL ES 1.00.
 */
const FRAGMENT = /* glsl */ \`
precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform float uPointerActive; // eased 0..1 pointer (or ghost) presence

uniform vec3 uPaper;
uniform vec3 uInk;
uniform float uPixelSize;
uniform float uLevels;
uniform float uSpeed;
uniform float uIntensity;

// --- compact value noise + fbm (original) ---
float hash21(vec2 p) {
  p = fract(p * vec2(217.13, 373.41));
  p += dot(p, p + 31.73);
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
  mat2 m = mat2(1.7, 1.1, -1.1, 1.7);
  for (int i = 0; i < 4; i++) {
    v += amp * vnoise(p);
    p = m * p;
    amp *= 0.5;
  }
  return v;
}

// 8x8 Bayer threshold, computed recursively rather than tabled -- GLSL ES
// 1.00 has no constant array initializers. Base 2x2 pattern: 0 2 / 3 1,
// with the least-significant cell bits carrying the largest weights.
float bayer8(vec2 cell) {
  vec2 q = floor(mod(cell, 8.0));
  float v = 0.0;
  float w = 16.0;
  for (int i = 0; i < 3; i++) {
    vec2 h = mod(q, 2.0);
    v += (2.0 * h.x + 3.0 * h.y - 4.0 * h.x * h.y) * w;
    q = floor(q * 0.5);
    w *= 0.25;
  }
  return (v + 0.5) / 64.0;
}

// The continuous field under the dither: two drifting fbm layers, a soft
// lift where the waves bend toward the pointer, a settling vignette, then
// contrast around the midtone.
float field(vec2 uv, float aspect, float t) {
  vec2 p = vec2(uv.x * aspect, uv.y) * 2.6;
  float f = fbm(p + vec2(t * 0.11, -t * 0.05));
  f += 0.4 * fbm(p * 2.3 + vec2(-t * 0.04, t * 0.08));
  f /= 1.4;

  // Pointer lift position scales with presence, settling home when nobody is there.
  vec2 ptr = mix(vec2(0.5), uPointer, uPointerActive);
  vec2 pd = vec2((uv.x - ptr.x) * aspect, uv.y - ptr.y);
  f += exp(-dot(pd, pd) * 9.0) * 0.2;

  vec2 vg = (uv - 0.5) * vec2(aspect, 1.0);
  f -= 0.22 * dot(vg, vg);

  return 0.5 + (f - 0.5) * (0.9 * uIntensity + 0.35);
}

float quantize(float f, float levels, float b) {
  return clamp(floor(f * (levels - 1.0) + b) / (levels - 1.0), 0.0, 1.0);
}

void main() {
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  float t = uTime * uSpeed;
  float px = clamp(uPixelSize, 2.0, 16.0);

  // One field sample per dither cell keeps the pattern legibly crafted.
  vec2 cell = floor(gl_FragCoord.xy / px);
  vec2 cuv = (cell + 0.5) * px / uResolution;

  float levels = clamp(uLevels, 2.0, 8.0);
  float b = bayer8(cell);

  float q = quantize(field(cuv, aspect, t), levels, b);

  // Misregistered second pass: the light ink drifts half a cell out of
  // register on a very slow cycle, like a print pass slipping.
  vec2 reg = (px * 0.5 / uResolution) * vec2(sin(t * 0.07), cos(t * 0.057));
  float q2 = quantize(field(cuv + reg, aspect, t), levels, b);

  vec3 col = mix(uPaper, uInk, q);
  float hi = step(1.0 - 0.5 / (levels - 1.0), q2);
  col = mix(col, uInk, hi * 0.22);

  gl_FragColor = vec4(col, 1.0);
}
\`;

/**
 * Stipple — an ordered-dither shader field. A slowly drifting noise field is
 * crushed to a handful of levels and rendered through an 8x8 Bayer matrix at
 * a chunky, controllable cell size: living newsprint in risograph sepia
 * duotone, with a light ink that slips a half-cell out of register on a slow
 * cycle. The waves bend toward the pointer. Built on the \`ogl-canvas\`
 * harness: GPU-light, offscreen-paused, reduced-motion-safe. Drop it inside
 * any \`relative\` container; it fills and sits behind content.
 */
export function Stipple({
  colors = DEFAULT_COLORS,
  pixelSize = 4,
  levels = 4,
  speed = 1,
  intensity = 1,
  paused = false,
  idle = true,
  className,
}: StippleProps) {
  const uniforms = React.useMemo(
    () => ({
      uPaper: { value: hexToRgb(colors[0]) },
      uInk: { value: hexToRgb(colors[1]) },
      uPixelSize: { value: pixelSize },
      uLevels: { value: levels },
      uSpeed: { value: speed },
      uIntensity: { value: intensity },
    }),
    [colors, pixelSize, levels, speed, intensity]
  );

  return (
    <OglCanvas
      aria-hidden
      data-crucible="stipple"
      // DPR locked to 1 so a dither cell is a true pixel block, with
      // image-rendering: pixelated keeping the upscale crisp on hidpi.
      className={cn(
        "absolute inset-0 -z-10 [&_canvas]:[image-rendering:pixelated]",
        className
      )}
      fragment={FRAGMENT}
      uniforms={uniforms}
      dpr={1}
      reducedMotionTime={6}
      paused={paused}
      ghost={idle}
    />
  );
}
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
