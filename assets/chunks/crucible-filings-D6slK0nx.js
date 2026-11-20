const n=[{path:"registry/default/backgrounds/filings/filings.tsx",language:"tsx",content:`"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { OglCanvas } from "@/lib/ogl-canvas";

export interface FilingsProps {
  /**
   * Two tones: \`[cool, warm]\`. \`cool\` is the resting silver of aligned
   * filings; \`warm\` is the brighter white they glow near the cursor.
   * Any hex string.
   */
  colors?: [string, string];
  /** Grid density (square cells stacked across the container height), clamped 8–40. Default 22. */
  density?: number;
  /** Idle-field animation speed multiplier. 1 = default. Default 1. */
  speed?: number;
  /** Stroke brightness / glow. 1 = default. Default 1. */
  intensity?: number;
  /** Freeze the animation, holding the current frame. */
  paused?: boolean;
  /**
   * Idle autoplay: after ~1.5s with no pointer present, a seeded ghost drifts
   * slowly across the field and bends the filings, so thumbnails and heroes
   * never look still; a real pointer takes over instantly. Never runs under
   * reduced motion. Default true.
   */
  idle?: boolean;
  /** Extra classes for the wrapper. Positioned \`absolute inset-0 -z-10\`. */
  className?: string;
}

const DEFAULT_COLORS: [string, string] = [
  "#a1a1aa", // silver — resting
  "#fafafa", // white — alignment glow
];

/** Hex → [r,g,b] in 0–1. Accepts #rgb / #rrggbb. */
function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  }
  const int = parseInt(h, 16);
  if (Number.isNaN(int) || h.length !== 6) return [0.63, 0.63, 0.67];
  return [((int >> 16) & 255) / 255, ((int >> 8) & 255) / 255, (int & 255) / 255];
}

/**
 * Original iron-filings fragment shader. The plane is tiled into a grid; each
 * cell draws one short line segment (an SDF capsule) whose orientation tracks a
 * slowly-rotating magnetic-dipole field when idle and bends radially toward the
 * pointer near it. Alignment strength doubles as brightness — cells near the
 * cursor glow from resting silver to bright white, with a radial
 * magnetization wave rippling out from the pointer. One draw call, no
 * derivatives. GLSL ES 1.00.
 */
const FRAGMENT = /* glsl */ \`
precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform float uPointerActive;

uniform vec3 uColorCool; // resting silver
uniform vec3 uColorWarm; // alignment-glow white
uniform float uDensity;
uniform float uSpeed;
uniform float uIntensity;

// Distance from p to the segment a—b.
float segDist(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

// Ideal magnetic-dipole field at p from a dipole at pos with moment m.
// Direction (~1/r^3 magnitude, unused here) gives the field-line tangent.
vec2 dipoleField(vec2 p, vec2 pos, vec2 m) {
  vec2 r = p - pos;
  float d2 = dot(r, r) + 0.0009;
  float d = sqrt(d2);
  vec2 rh = r / d;
  return (3.0 * dot(m, rh) * rh - m) / (d2 * d);
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  float t = uTime * uSpeed;
  vec2 asp = vec2(aspect, 1.0);

  float dens = clamp(uDensity, 8.0, 40.0);

  // Aspect-corrected grid space (one grid unit is square on screen).
  vec2 q = uv * asp;
  vec2 gp = q * dens;
  vec2 cid = floor(gp);
  vec2 f = fract(gp) - 0.5;            // local coords within the cell
  vec2 cCenter = (cid + 0.5) / dens;   // cell center in q-space

  // Slowly-rotating, gently-drifting dipole for the idle field pattern.
  float a = t * 0.15;
  vec2 m = vec2(cos(a), sin(a));
  vec2 dpos = vec2(0.5 * aspect, 0.5) + 0.12 * vec2(cos(t * 0.10), sin(t * 0.13));
  vec2 fieldDir = normalize(dipoleField(cCenter, dpos, m));

  // Pointer influence, aspect-corrected.
  vec2 pw = uPointer * asp;
  vec2 toP = pw - cCenter;
  float pd = length(toP);
  // Released when the pointer leaves, so the idle frame is the pure dipole field.
  float cursorInf = exp(-pd * pd * 5.0) * uPointerActive;
  vec2 cDir = toP / (pd + 1e-4);

  // Blend idle field with the radial cursor pull.
  vec2 dir = normalize(mix(fieldDir, cDir, cursorInf));

  // One short segment centered in the cell, oriented along dir.
  float hl = 0.34;
  vec2 e = dir * hl;
  float dist = segDist(f, -e, e);
  float th = 0.075;
  float seg = smoothstep(th, th * 0.35, dist);

  // Alignment/brightness: a magnetization wave rides out from the pointer.
  float wave = 0.6 + 0.4 * sin(pd * 12.0 - t * 2.5);
  float warmth = clamp(cursorInf * wave, 0.0, 1.0);

  vec3 stroke = mix(uColorCool, uColorWarm, warmth);

  // Near-black plate with a faint cool lift toward the bottom.
  vec3 col = mix(vec3(0.018, 0.016, 0.030), uColorCool * 0.05, pow(1.0 - uv.y, 1.6));

  col += stroke * seg * uIntensity;
  // Soft glow halo pooling under the cursor.
  col += uColorWarm * cursorInf * cursorInf * 0.06;

  // Film-grain dithering to defeat banding.
  float grain = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233)) + fract(t) * 43.0) * 43758.5453) - 0.5;
  col += grain * (1.6 / 255.0);

  gl_FragColor = vec4(max(col, 0.0), 1.0);
}
\`;

/**
 * Filings — an iron-filing field. A grid of short line segments aligns to a
 * slowly-rotating magnetic-dipole field when idle and bends toward the cursor
 * like filings around a magnet, brightening from resting silver to white
 * where the field is strongest. Built on the \`ogl-canvas\` harness: one draw
 * call, offscreen-paused, reduced-motion-safe. Drop it inside any \`relative\`
 * container; it fills and sits behind content.
 */
export function Filings({
  colors = DEFAULT_COLORS,
  density = 22,
  speed = 1,
  intensity = 1,
  paused = false,
  idle = true,
  className,
}: FilingsProps) {
  const uniforms = React.useMemo(
    () => ({
      uColorCool: { value: hexToRgb(colors[0]) },
      uColorWarm: { value: hexToRgb(colors[1]) },
      uDensity: { value: density },
      uSpeed: { value: speed },
      uIntensity: { value: intensity },
    }),
    [colors, density, speed, intensity]
  );

  return (
    <OglCanvas
      aria-hidden
      data-crucible="filings"
      className={cn("absolute inset-0 -z-10", className)}
      fragment={FRAGMENT}
      uniforms={uniforms}
      paused={paused}
      ghost={idle}
      reducedMotionTime={3}
    />
  );
}
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
