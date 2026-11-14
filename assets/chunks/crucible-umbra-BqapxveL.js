const e=[{path:"registry/default/backgrounds/umbra/umbra.tsx",language:"tsx",content:`"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { OglCanvas } from "@/lib/ogl-canvas";

export interface UmbraProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * \`[undertone, crestLight]\`. The undertone is the deep hue that breathes in
   * the folds (default black-violet); crestLight is the pale tint the fold
   * crests catch. Both stay whisper-subtle under the luminance cap.
   */
  colors?: [string, string];
  /** Animation speed multiplier. 1 = default drift + ~0.1 Hz breathing. */
  speed?: number;
  /** Field scale. 1 = default; higher packs more, smaller folds. */
  scale?: number;
  /** Domain-warp strength. 0 = straight ridges, 1 = default drape, up to 3. */
  warp?: number;
  /**
   * Hard ceiling on output luminance (0–1). The veil soft-clips beneath this
   * so overlay text always wins. Default 0.3 — raise with care.
   */
  luminanceCap?: number;
  /** Freeze the animation at its current frame. */
  paused?: boolean;
}

const DEFAULT_COLORS: [string, string] = [
  "#1f1133", // deep violet undertone — breathes in the folds
  "#c9bfe4", // pale lavender-gray — what the crests catch
];

/** Hex → [r,g,b] in 0–1. Accepts #rgb / #rrggbb. */
function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  }
  const int = parseInt(h, 16);
  if (Number.isNaN(int) || h.length !== 6) return [0.12, 0.07, 0.2];
  return [((int >> 16) & 255) / 255, ((int >> 8) & 255) / 255, (int & 255) / 255];
}

/**
 * Original "dark veil" fragment shader: domain-warped ridged fbm rendered
 * near-threshold. The ridge transform folds value noise into sharp crests;
 * a low-frequency warp field drapes them into organic folds. Only the crests
 * catch light — everything else falls to true black — and a deep undertone
 * breathes through them at ~0.1 Hz. Output is soft-clipped under uCap so the
 * veil can never compete with overlay text, and time-varying hash dither
 * defeats the banding that would otherwise be fatal at these luminances.
 * GLSL ES 1.00 (WebGL1/2 compatible).
 */
const FRAGMENT = /* glsl */ \`
precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uPointer; // managed by the harness; unused — the veil ignores the cursor

uniform vec3 uUndertone; // deep violet — breathes in the folds
uniform vec3 uCrest;     // pale light the crests catch
uniform float uSpeed;
uniform float uScale;
uniform float uWarp;
uniform float uCap;  // luminance ceiling
uniform float uSeed; // per-instance offset — desynchronizes multiple veils

// --- compact value noise (original) ---
float hash21(vec2 p) {
  p = fract(p * vec2(127.1, 311.7));
  p += dot(p, p + 34.23);
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

// Plain fbm drives the warp field (soft billows, no ridges needed there).
float fbm(vec2 p) {
  float v = 0.0;
  float amp = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 3; i++) {
    v += amp * vnoise(p);
    p = m * p;
    amp *= 0.5;
  }
  return v;
}

// Ridge transform: folds noise so its midline becomes a sharp crest.
float ridge(float n) {
  return 1.0 - abs(2.0 * n - 1.0);
}

// Ridged multifractal: each octave's detail is gated by the crest below it,
// so fine wrinkles live ON the folds instead of filling the hollows.
float rfbm(vec2 p) {
  float v = 0.0;
  float amp = 0.5;
  float carry = 1.0;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 4; i++) {
    float r = ridge(vnoise(p));
    r *= r; // sharpen the fold line
    v += amp * r * (0.35 + 0.65 * carry);
    carry = r;
    p = m * p;
    amp *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / max(uResolution.y, 1.0);

  // Field clock: glacial by design — a drape settling, not a fluid churning.
  float t = uTime * uSpeed * 0.035 + uSeed;

  vec2 p = (uv - 0.5) * vec2(aspect, 1.0) * (2.4 * uScale)
    + vec2(uSeed * 3.1, uSeed * -1.7);

  // Low-frequency warp field: two decorrelated fbm channels on their own
  // clocks bend the ridge domain into hanging, overlapping folds.
  vec2 q = vec2(
    fbm(p * 0.55 + t * vec2(0.7, 0.45)),
    fbm(p * 0.55 + vec2(4.7, 2.3) - t * vec2(0.4, 0.65))
  );
  vec2 wp = p + uWarp * 3.4 * (q - 0.5);

  float f = rfbm(wp + t * vec2(0.12, -0.08));

  // ~0.1 Hz breath on the REAL clock (2*pi*0.1 = 0.6283), phase-split per
  // instance so multiple veils on a page never inhale together.
  float br = 0.5 + 0.5 * sin(uTime * uSpeed * 0.6283 + uSeed * 6.2832);

  // Near-threshold crest window: only the fold tops catch light. Squared so
  // the transition tail dies into true black instead of lingering as haze.
  float crest = smoothstep(0.42, 0.85, f);
  crest *= crest;

  // Crest color drifts between undertone-violet and pale light with the
  // breath — the undertone literally breathes IN the crests.
  vec3 crestCol = mix(uUndertone * 1.8, uCrest, 0.30 + 0.35 * crest + 0.18 * br);
  vec3 col = crestCol * crest * (0.72 + 0.35 * br);

  // Barely-there ambient drape so the crests read as tops of a volume, not
  // floating filaments. Sits a breath above true black, breathing too.
  float body = smoothstep(0.10, 0.55, f);
  col += uUndertone * body * (0.16 + 0.10 * br);

  // Hard promise of the component: soft-clip asymptotically under uCap so
  // no crest, at any knob setting, can climb above the luminance ceiling.
  float cap = max(uCap, 0.001);
  col = cap * (vec3(1.0) - exp(-col * 2.4 / cap));

  // Faint vignette seats the veil behind content.
  vec2 vg = (uv - 0.5) * vec2(aspect, 1.0);
  col *= 1.0 - 0.35 * dot(vg, vg);

  // Time-varying hash dither — mandatory. At these luminances, 8-bit banding
  // is fatal; re-hashing per frame turns it into a filmic shimmer instead.
  float grain = hash21(gl_FragCoord.xy + fract(uTime * 0.31 + uSeed) * 149.0) - 0.5;
  col += grain * (2.0 / 255.0);

  gl_FragColor = vec4(max(col, 0.0), 1.0);
}
\`;

/**
 * Umbra — a dark veil. Black-on-black volumetric drape: domain-warped ridged
 * fbm folds where only the crests catch a whisper of light and a deep violet
 * undertone breathes at ~0.1 Hz; everything else falls to true black. Output
 * luminance is hard-capped so overlay text always wins — the restraint is the
 * signature. Built on the \`ogl-canvas\` harness: GPU-light, offscreen-paused,
 * reduced-motion-safe. Position it inside any \`relative\` container; it fills
 * and sits behind content.
 */
export function Umbra({
  colors = DEFAULT_COLORS,
  speed = 1,
  scale = 1,
  warp = 1,
  luminanceCap = 0.3,
  paused = false,
  className,
  ...props
}: UmbraProps) {
  // Deterministic per-instance seed (SSR-safe — useId is stable across
  // server and client) so multiple veils on one page desynchronize.
  const id = React.useId();
  const seed = React.useMemo(() => {
    let h = 0;
    for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
    return (h % 1024) / 1024;
  }, [id]);

  const uniforms = React.useMemo(
    () => ({
      uUndertone: { value: hexToRgb(colors[0]) },
      uCrest: { value: hexToRgb(colors[1]) },
      uSpeed: { value: Math.max(speed, 0) },
      uScale: { value: Math.min(Math.max(scale, 0.2), 4) },
      uWarp: { value: Math.min(Math.max(warp, 0), 3) },
      uCap: { value: Math.min(Math.max(luminanceCap, 0.02), 1) },
      uSeed: { value: seed * 37.0 },
    }),
    [colors, speed, scale, warp, luminanceCap, seed]
  );

  return (
    <OglCanvas
      aria-hidden
      data-crucible="umbra"
      {...props}
      className={cn("absolute inset-0 -z-10", className)}
      fragment={FRAGMENT}
      uniforms={uniforms}
      paused={paused}
      reducedMotionTime={11}
    />
  );
}
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
