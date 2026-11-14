const n=[{path:"registry/default/backgrounds/warp/warp.tsx",language:"tsx",content:`"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { OglCanvas } from "@/lib/ogl-canvas";

export interface WarpProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Three tones: \`[core, head, bloom]\`. \`core\` is the streak body (kept near
   * white for the classic light-speed look), \`head\` the chromatic tint that
   * blooms at the leading edge of each streak, \`bloom\` the central glow at the
   * vanishing point. Defaults to a cool blue-white hyperspace palette. Pass a
   * warm set (e.g. \`["#fff3e6", "#ff9a5c", "#ffcf99"]\`) for a solar jump.
   */
  colors?: [string, string, string];
  /** Outward-travel speed multiplier. 1 = default, 2 = twice as fast. Default 1. */
  speed?: number;
  /**
   * Overall luminosity of the streaks, heads, and center bloom, 0–2. 1 =
   * default; lower is a calmer drift, higher blazes into full jump. Default 1.
   */
  intensity?: number;
  /**
   * Streak density, 0.3–2. Scales how many stars radiate from the vanishing
   * point. Lower is a sparse calm field, higher a dense warp tunnel. Default 1.
   */
  density?: number;
  /**
   * Idle autoplay: after ~1.5s with no real pointer, a seeded ghost pointer
   * steers the vanishing point on a slow seeded drift so it never looks dead in thumbnails and
   * heroes; the real pointer takes over instantly. Never runs under reduced
   * motion. @default true
   */
  idle?: boolean;
  /** Freeze the animation at its current frame. */
  paused?: boolean;
}

const DEFAULT_COLORS: [string, string, string] = [
  "#eaf1ff", // core — blue-white streak body
  "#5b8cff", // head — cool chromatic tint at the leading edge
  "#9db8ff", // bloom — soft periwinkle glow at the vanishing point
];

/** Hex → [r,g,b] in 0–1. Accepts #rgb / #rrggbb. */
function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  }
  const int = parseInt(h, 16);
  if (Number.isNaN(int) || h.length !== 6) return [0.92, 0.95, 1.0];
  return [((int >> 16) & 255) / 255, ((int >> 8) & 255) / 255, (int & 255) / 255];
}

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(Math.max(v, lo), hi);
}

/**
 * Original hyperspace-warp fragment shader. Space is read in polar coordinates
 * around a vanishing point: several layers of star-streaks radiate outward,
 * each one a thin line whose LEADING EDGE accelerates toward the frame edge
 * (radius grows with the square of its phase, so stars ease out slowly then
 * blur to light-speed). Streak length breathes with a slow "warp surge" so the
 * field pulses between a gentle drift and a full jump. Every streak carries a
 * per-channel radial offset — a genuine chromatic aberration that fringes the
 * heads cyan/red — plus a colored head-bloom sampled from the palette. A tight
 * core bloom and wide halo sit at the vanishing point over a faint twinkling
 * backdrop. Line thickness is corrected by radius so streaks stay constant
 * width in screen space, not fat wedges. The pointer nudges the vanishing
 * point. Exponential tone curve + film-grain dither kill 8-bit banding.
 * GLSL ES 1.00 (WebGL1/2 compatible); no fract() on spatial coords (only in
 * the hash), so there are no wrap seams.
 */
const FRAGMENT = /* glsl */ \`
precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform float uPointerActive; // eased 0..1 pointer (or ghost) presence

uniform vec3 uCore;      // streak body
uniform vec3 uHead;      // chromatic head tint
uniform vec3 uBloom;     // center glow
uniform float uSpeed;
uniform float uIntensity;
uniform float uDensity;

const float TAU = 6.28318530718;
const float MAXR = 1.45;  // normalized radius a streak head travels to

// ---- compact value-noise hash (fract only inside) ----
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float sq(float x) { return x * x; }

// One layer's radial band for a single channel, bright at the head, fading to
// the tail behind it.
float band(float r, float head, float len) {
  return smoothstep(head - len, head, r) * (1.0 - smoothstep(head, head + 0.03, r));
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  float t = uTime * uSpeed;

  // Vanishing point: pointer nudges it a little off-center.
  vec2 center = vec2(0.5) + (uPointer - vec2(0.5)) * 0.18 * uPointerActive;
  vec2 p = uv - center;
  p.x *= aspect;

  float r = length(p);
  float ang = atan(p.y, p.x) / TAU + 0.5; // 0..1

  // Steady hyperspace stream with a gentle breathing surge — a calm, constant
  // jump (Star Wars), not a dramatic drift↔lightspeed pulse. Two slow beats.
  float surge = 0.66 + 0.14 * sin(t * 0.22) + 0.06 * sin(t * 0.09 + 1.3);
  surge = clamp(surge, 0.0, 1.0);

  vec3 acc = vec3(0.0);

  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    // Whole columns only — a fractional count leaves a seam where the angle wraps.
    float cols = max(floor((12.0 + fi * 10.0) * clamp(uDensity, 0.3, 2.0) + 0.5), 1.0);
    float depth = 0.55 + 0.45 * fi / 2.0; // nearer layers brighter/faster

    float g = ang * cols;
    float col = floor(g);
    float fcol = fract(g);

    float h1 = hash21(vec2(col, fi * 5.7 + 1.3));
    float h2 = hash21(vec2(col, fi * 9.1 + 4.2));

    // Angular offset of this streak inside its column → screen-space arc.
    float ao = 0.2 + 0.6 * h2;
    float angDist = (fcol - ao) * (TAU / cols);
    float arc = angDist * max(r, 0.05);

    // Outward travel, accelerating: radius ~ phase^2.
    float spd = (0.24 + 0.5 * h1) * (0.55 + 0.45 * surge);
    float phase = fract(h1 * 7.31 + t * spd);
    float head = phase * phase * MAXR;
    float len = (0.14 + 0.6 * phase) * (0.5 + 0.7 * surge);

    // Chromatic aberration: subtle per-channel radial offset (kept restrained
    // so the streaks read as clean light, not a rainbow smear).
    float ca = 0.006 * (0.4 + surge) * (0.35 + phase);
    float bR = band(r * (1.0 + ca), head, len);
    float bG = band(r, head, len);
    float bB = band(r * (1.0 - ca), head, len);
    vec3 radial = vec3(bR, bG, bB);

    // Constant screen-space line width (thinner in far layers).
    float w = 0.0055 + 0.004 * (1.0 - depth);
    float thin = exp(-(arc * arc) / (2.0 * w * w));

    // Per-star brightness + twinkle.
    float bright = (0.3 + 0.7 * h2) * depth;
    float tw = 0.75 + 0.25 * sin(t * (1.4 + 3.0 * h1) + h2 * TAU);

    // Colored bloom at the leading edge.
    float headGlow = exp(-sq((r - head) / (len * 0.6 + 0.02)));

    vec3 streak = uCore * radial + uHead * headGlow * (0.35 + 0.4 * surge);
    acc += streak * thin * bright * tw;
  }

  // Center bloom: tight core + wide halo at the vanishing point (restrained).
  float coreGlow = exp(-r * r / (2.0 * 0.0045));
  float halo = exp(-r * r / (2.0 * 0.06));
  acc += uBloom * (coreGlow * 0.7 + halo * 0.18) * (0.6 + 0.4 * surge);

  // Whisper-faint twinkling backdrop so the gaps aren't dead black (sparse +
  // dim so it reads as distant stars, not blocky noise).
  vec2 sg = floor((p + 4.0) * 90.0);
  float sh = hash21(sg);
  float star = step(0.992, sh) * (0.4 + 0.6 * sin(t * 2.0 + sh * TAU));
  acc += uCore * star * 0.05 * smoothstep(0.02, 0.25, r);

  vec3 col = acc * uIntensity;

  // Exponential tone curve rolls the stacked bloom to white instead of clipping
  // (lower exposure keeps the field restrained rather than blown-out).
  col = vec3(1.0) - exp(-col * 1.3);

  // Vignette + film-grain dither.
  vec2 vg = (uv - 0.5) * vec2(aspect, 1.0);
  col *= 1.0 - 0.35 * dot(vg, vg);
  float grain = hash21(gl_FragCoord.xy + fract(t) * 137.0) - 0.5;
  col += grain * (1.6 / 255.0);

  gl_FragColor = vec4(max(col, 0.0), 1.0);
}
\`;

/**
 * Warp — a jump-to-light-speed hyperspace background. Layered star-streaks
 * accelerate radially from a vanishing point, their length breathing with a
 * slow warp surge, their heads fringed by real chromatic aberration and lit by
 * a colored bloom, over a soft central glow and a faint twinkling starfield.
 * The pointer nudges the vanishing point. Built on the \`ogl-canvas\` harness:
 * DPR-clamped, offscreen-paused, reduced-motion-safe (freezes on a static
 * radial-streak starburst), full GL teardown. Drop it inside any \`relative\`
 * container; it fills and sits behind content.
 */
export function Warp({
  colors = DEFAULT_COLORS,
  speed = 1,
  intensity = 1,
  density = 1,
  paused = false,
  idle = true,
  className,
  ...props
}: WarpProps) {
  const uniforms = React.useMemo(
    () => ({
      uCore: { value: hexToRgb(colors[0]) },
      uHead: { value: hexToRgb(colors[1]) },
      uBloom: { value: hexToRgb(colors[2]) },
      uSpeed: { value: Math.max(speed, 0) },
      uIntensity: { value: clamp(intensity, 0, 2) },
      uDensity: { value: clamp(density, 0.3, 2) },
    }),
    [colors, speed, intensity, density]
  );

  return (
    <OglCanvas
      aria-hidden
      data-crucible="warp"
      className={cn("absolute inset-0 -z-10 bg-neutral-950", className)}
      fragment={FRAGMENT}
      uniforms={uniforms}
      dpr={2}
      paused={paused}
      ghost={idle}
      reducedMotionTime={6}
      {...props}
    />
  );
}
`}],e="",a={files:n,prompt:e};export{a as default,n as files,e as prompt};
