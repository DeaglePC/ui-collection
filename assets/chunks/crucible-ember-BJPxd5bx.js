const n=[{path:"registry/default/backgrounds/ember/ember.tsx",language:"tsx",content:`"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { OglCanvas } from "@/lib/ogl-canvas";

export interface EmberProps {
  /**
   * Two forge tones for the ember color ramp: \`[base, tip]\`. \`base\` is the
   * color at the bottom where embers are born (ember red); \`tip\` is the color
   * they carry as they rise (molten amber). Any hex string.
   */
  colors?: [string, string];
  /**
   * Wind vector \`[x, y]\`. \`x\` drifts rising embers sideways (positive =
   * rightward), roughly −1…1; positive \`y\` quickens their rise (0 or
   * negative leaves the base rise speed — embers never sink).
   * Default \`[0.25, 0]\` — a soft rightward draft.
   */
  wind?: [number, number];
  /** Rise-speed multiplier. 1 = default. Default 1. */
  speed?: number;
  /** Ember count / field density, clamped 8–64. Default 44. */
  density?: number;
  /** Overall glow / bloom of the embers. 1 = default. Default 1. */
  intensity?: number;
  /** Freeze the animation, holding the current frame. */
  paused?: boolean;
  /**
   * Idle autoplay: after ~1.5s with no pointer present, a seeded ghost drifts
   * slowly across the field and raises the updraft, so thumbnails and heroes
   * never look still; a real pointer takes over instantly. Never runs under
   * reduced motion. Default true.
   */
  idle?: boolean;
  /** Extra classes for the wrapper. Positioned \`absolute inset-0 -z-10\`. */
  className?: string;
}

const DEFAULT_COLORS: [string, string] = [
  "#c1121f", // ember red — base
  "#ff6b35", // molten amber — tip
];

/** Hex → [r,g,b] in 0–1. Accepts #rgb / #rrggbb. */
function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  }
  const int = parseInt(h, 16);
  if (Number.isNaN(int) || h.length !== 6) return [1, 0.42, 0.21];
  return [((int >> 16) & 255) / 255, ((int >> 8) & 255) / 255, (int & 255) / 255];
}

/**
 * Original ember fragment shader. A field of point-sprite embers, each seeded
 * by an inline hash, rising from the bottom edge with a per-particle phase,
 * convection wobble, and a caller-supplied horizontal wind. Color ramps from
 * base (ember red) at birth to tip (molten amber) as it climbs; brightness
 * flickers per particle; glow accumulates additively over a dark coal bed.
 * The pointer raises a gentle updraft in the embers nearest it. GLSL ES 1.00.
 */
const FRAGMENT = /* glsl */ \`
precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform float uPointerActive; // eased 0-1 pointer/ghost presence

uniform vec3 uColorBase; // ember red (birth)
uniform vec3 uColorTip;  // molten amber (rising)
uniform vec2 uWind;      // horizontal drift + rise bias
uniform float uSpeed;
uniform float uDensity;
uniform float uIntensity;

const int MAX_EMBERS = 64;

// --- inline hashes (original) ---
float hash11(float n) {
  return fract(sin(n * 127.1) * 43758.5453);
}
vec2 hash21(float n) {
  return fract(sin(vec2(n * 127.1, n * 311.7)) * 43758.5453);
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  float t = uTime * uSpeed;

  int count = int(clamp(uDensity, 8.0, float(MAX_EMBERS)));

  // Dark field with a faint warm coal glow banked along the bottom edge.
  vec3 col = vec3(0.015, 0.010, 0.020);
  col += uColorBase * 0.10 * pow(1.0 - uv.y, 5.0);

  for (int i = 0; i < MAX_EMBERS; i++) {
    if (i >= count) break;
    float fi = float(i);

    vec2 rnd = hash21(fi + 1.37);
    float speed = 0.10 + rnd.x * 0.22 + max(uWind.y, 0.0) * 0.15;
    float phase = rnd.y;

    // life: 0 at the bottom edge, 1 at the top, looping.
    float life = fract(t * speed + phase);

    // Horizontal home + convection wobble, then wind carries it with height.
    float bx = hash11(fi * 3.17 + 5.0);
    float wob = sin(t * (0.8 + rnd.x * 2.0) + fi * 2.3) * 0.03;
    float x = bx + wob + uWind.x * life * 0.45;
    x = fract(x);

    float y = life;

    // Pointer updraft: embers horizontally near the pointer and below it get
    // lifted and jostled — a gentle convection column, never repulsion.
    float dxp = (x - uPointer.x) * aspect;
    float prox = exp(-dxp * dxp * 6.0);
    float below = smoothstep(uPointer.y + 0.20, uPointer.y - 0.30, y);
    float updraft = prox * below * uPointerActive;
    y += updraft * 0.05;
    x += updraft * sin(t * 5.0 + fi) * 0.008;

    // Point-sprite: gaussian falloff, shrinking as the ember rises.
    float size = (0.006 + rnd.x * 0.011) * (1.0 - 0.45 * life);
    size *= 1.0 + updraft * 0.30;
    vec2 d = vec2((uv.x - x) * aspect, uv.y - y);
    float g = exp(-dot(d, d) / (size * size));

    // Per-particle flicker + fade-in at birth, fade-out near the top.
    float flick = 0.65 + 0.35 * sin(t * (6.0 + rnd.y * 8.0) + fi * 4.0);
    float fade = smoothstep(0.0, 0.07, life) * (1.0 - smoothstep(0.72, 1.0, life));

    // Color ramp base → tip along the rise.
    vec3 ec = mix(uColorBase, uColorTip, smoothstep(0.0, 0.85, life));

    col += ec * g * flick * fade * uIntensity;
  }

  // Soft tone curve so stacked glows bloom instead of clipping.
  col = col / (col + vec3(0.85));

  // Film-grain dithering to defeat 8-bit banding.
  float grain = hash11(dot(gl_FragCoord.xy, vec2(12.9898, 78.233)) + fract(t) * 137.0) - 0.5;
  col += grain * (1.6 / 255.0);

  gl_FragColor = vec4(max(col, 0.0), 1.0);
}
\`;

/**
 * Ember — a field of glowing embers rising from below in molten forge tones.
 * Each ember carries its own phase, convection wobble, flicker and color ramp
 * (ember red → molten amber), with a caller-supplied wind drift and a gentle
 * cursor updraft. Built on the \`ogl-canvas\` harness: GPU-light, offscreen-
 * paused, reduced-motion-safe. Drop it inside any \`relative\` container; it
 * fills and sits behind content.
 */
export function Ember({
  colors = DEFAULT_COLORS,
  wind = [0.25, 0],
  speed = 1,
  density = 44,
  intensity = 1,
  paused = false,
  idle = true,
  className,
}: EmberProps) {
  const uniforms = React.useMemo(
    () => ({
      uColorBase: { value: hexToRgb(colors[0]) },
      uColorTip: { value: hexToRgb(colors[1]) },
      uWind: { value: [wind[0], wind[1]] as [number, number] },
      uSpeed: { value: speed },
      uDensity: { value: density },
      uIntensity: { value: intensity },
    }),
    [colors, wind, speed, density, intensity]
  );

  return (
    <OglCanvas
      aria-hidden
      data-crucible="ember"
      className={cn("absolute inset-0 -z-10", className)}
      fragment={FRAGMENT}
      uniforms={uniforms}
      paused={paused}
      ghost={idle}
      dpr={1.75}
      reducedMotionTime={2.5}
    />
  );
}
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
