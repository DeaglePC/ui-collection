const n=[{path:"registry/default/backgrounds/cathode/cathode.tsx",language:"tsx",content:`"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { OglCanvas } from "@/lib/ogl-canvas";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export interface CathodeProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Screen palette as \`[phosphor, ambient]\`. \`phosphor\` is the glowing tube
   * tint that colours the scanned image and bloom; \`ambient\` is the faint
   * screen-on wash in the dark areas. Defaults to a classic green-phosphor
   * terminal on near-black. Pass e.g. \`["#ffb454", "#140a02"]\` for amber,
   * or \`["#bfe6ff", "#050a12"]\` for a cold blue-white tube.
   */
  colors?: [string, string];
  /** Playback-rate multiplier for the roll, tracking bar, and snow. 1 = default. Default 1. */
  speed?: number;
  /**
   * Overall luminosity of the phosphor, scanlines, and bloom, 0–2. 1 = default;
   * lower banks a dim standby tube, higher blazes. Default 1.
   */
  intensity?: number;
  /**
   * Barrel-distortion / tube-bulge amount, 0–1. 0 is a flat panel; 1 is a
   * fat vintage CRT with pronounced curvature and a dark bezel. Default 0.32.
   */
  curvature?: number;
  /**
   * Snow / signal-noise amount, 0–1. 0 is a clean transmission; 1 is heavy
   * VHS static. Default 0.35.
   */
  noise?: number;
  /** Freeze the animation at its current frame. */
  paused?: boolean;
}

const DEFAULT_COLORS: [string, string] = [
  "#7cffc4", // green phosphor
  "#05130d", // ambient screen-on wash
];

/** Hex → [r,g,b] in 0–1. Accepts #rgb / #rrggbb. */
function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  }
  const int = parseInt(h, 16);
  if (Number.isNaN(int) || h.length !== 6) return [0.49, 1, 0.77];
  return [((int >> 16) & 255) / 255, ((int >> 8) & 255) / 255, (int & 255) / 255];
}

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(Math.max(v, lo), hi);
}

/**
 * Original CRT / VHS tube fragment shader. The "signal" is a synthetic
 * monochrome phosphor field — faintly drifting domain-warped bands under a
 * dense pattern of rolling horizontal scanlines. A slow vertical TRACKING bar
 * sweeps down the screen, brightening a thin band and shearing the picture
 * with a burst of horizontal jitter as it passes (the classic bad-vertical-
 * hold tear). The whole frame is barrel-distorted so it bulges like a glass
 * tube, masked by a dark bezel at the rim. Chromatic aberration splits the
 * red/blue channels radially — strongest at the curved edges — and the bright
 * scan bands smear into a soft phosphor bloom. A fine aperture-grille shimmer
 * and animated snow ride on top, all graded through the phosphor tint and a
 * radial vignette. \`uMotion\` (0 under reduced motion) kills the roll, bar, and
 * snow, leaving a still, lit tube. GLSL ES 1.00 (WebGL1/2 compatible).
 */
const FRAGMENT = /* glsl */ \`
precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec2 uResolution;

uniform vec3 uPhosphor;
uniform vec3 uAmbient;
uniform float uSpeed;
uniform float uIntensity;
uniform vec2 uCurve;    // barrel divisors (smaller = more bulge)
uniform float uSnow;    // snow amount
uniform float uMotion;  // 0 under reduced motion, else 1

const float TAU = 6.28318530718;
const float SCAN = 240.0; // scanline pairs across the tube height

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
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 3; i++) {
    v += amp * vnoise(p);
    p = m * p;
    amp *= 0.5;
  }
  return v;
}

// Signed distance of uv.y from the descending tracking bar (wrapped 0..1).
float barDist(float y, float t) {
  float bp = fract(0.5 - t * 0.07 * uMotion);
  float d = y - bp;
  return d - floor(d + 0.5);
}

// The synthetic monochrome signal at a sample point.
float signal(vec2 uv, float t) {
  // Rolling scanlines: dense horizontal lines scrolling slowly upward.
  float rows = uv.y * SCAN - t * 1.2 * uMotion;
  float scan = 0.55 + 0.45 * sin(rows * TAU);

  // Faint drifting phosphor picture (soft ghost bands, domain-warped).
  float pic = 0.16
    + 0.11 * fbm(vec2(uv.x * 2.2, uv.y * 3.2) + vec2(0.0, -t * 0.06 * uMotion))
    + 0.06 * sin(uv.y * 6.5 + t * 0.2 * uMotion);

  // Tracking bar: a thin bright band with a soft leading glow.
  float bd = barDist(uv.y, t);
  float bar = exp(-bd * bd * 300.0) * 0.9 + exp(-bd * bd * 40.0) * 0.14;
  pic += bar * uMotion;

  return max(pic, 0.0) * scan;
}

void main() {
  vec2 uv0 = vUv;
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  float t = uTime * uSpeed;

  // ---- barrel distortion (tube bulge) ----
  vec2 cc = uv0 * 2.0 - 1.0;
  vec2 warp = (cc.yx * cc.yx) / uCurve;
  vec2 uv = cc + cc * warp;
  // Bezel: fade to black just before the curved rim.
  vec2 em = smoothstep(1.0, 0.965, abs(uv));
  float mask = em.x * em.y;
  uv = uv * 0.5 + 0.5;

  // ---- tracking-bar shear: horizontal jitter as the bar passes ----
  float bd = barDist(uv.y, t);
  float near = exp(-bd * bd * 90.0);
  uv.x += (fbm(vec2(uv.y * 60.0, t * 3.0)) - 0.5) * 0.03 * near * uMotion;

  // ---- chromatic aberration: radial R/B split, strongest at the edges ----
  vec2 rc = uv - 0.5;
  float edge = dot(rc, rc);
  vec2 dir = rc / max(length(rc), 1e-4);
  float ca = (0.0016 + edge * 0.02);

  float lg = signal(uv, t);
  float lr = signal(uv + dir * ca, t);
  float lb = signal(uv - dir * ca, t);

  vec3 col = vec3(lr, lg, lb) * uPhosphor;
  // Pronounce the coloured fringe at high-contrast edges.
  col.r += (lr - lg) * 0.7;
  col.b += (lb - lg) * 0.7;

  // ---- phosphor bloom: vertical smear of the bright scan bands ----
  float bloom = signal(uv + vec2(0.0, 0.009), t) + signal(uv - vec2(0.0, 0.009), t);
  col += uPhosphor * bloom * 0.13 * uIntensity;

  // Ambient screen-on wash so the dark areas still glow like a live tube.
  col += uAmbient;

  // ---- fine aperture-grille shimmer (subtle, anti-aliased amplitude) ----
  float grille = 0.94 + 0.06 * sin(uv.x * aspect * 520.0);
  col *= grille;

  // ---- radial vignette ----
  col *= 1.0 - 1.05 * edge;

  // ---- snow / signal noise ----
  float sn = hash21(gl_FragCoord.xy + fract(t) * 131.7);
  col += (sn - 0.5) * uSnow * uMotion * (0.6 + 0.4 * uIntensity);

  // ---- bezel + overall level ----
  col *= mask * uIntensity;

  gl_FragColor = vec4(max(col, 0.0), 1.0);
}
\`;

/**
 * Cathode — a CRT / VHS tube background. A synthetic phosphor signal rolls
 * under dense scanlines while a slow vertical tracking bar sweeps down and
 * shears the picture, the whole frame barrel-distorted into a bulging glass
 * tube with a dark bezel, radial chromatic aberration, phosphor bloom, an
 * aperture-grille shimmer, and animated snow — all graded through a single
 * phosphor tint (\`colors\`). Built on the \`ogl-canvas\` harness: DPR-clamped,
 * offscreen- and hidden-tab-paused, reduced-motion-safe (freezes to a still,
 * lit tube — scanlines and vignette, no roll or snow), full GL teardown.
 * Drop it inside any \`relative\` container; it fills and sits behind content.
 */
export function Cathode({
  colors = DEFAULT_COLORS,
  speed = 1,
  intensity = 1,
  curvature = 0.32,
  noise = 0.35,
  paused = false,
  className,
  ...props
}: CathodeProps) {
  const reducedMotion = useReducedMotion();

  const uniforms = React.useMemo(() => {
    const curv = clamp(curvature, 0, 1);
    const flatten = Math.max(Math.min(curv / 0.32, 1), 1e-4);
    return {
      uPhosphor: { value: hexToRgb(colors[0]) },
      uAmbient: { value: hexToRgb(colors[1]) },
      uSpeed: { value: Math.max(speed, 0) },
      uIntensity: { value: clamp(intensity, 0, 2) },
      // Smaller divisors = more bulge. Wider on X so the tube reads landscape.
      // Below the default the divisors grow without bound, so 0 is truly flat.
      uCurve: {
        value: [
          Math.max(12.5 - curv * 9.0, 2.5) / flatten,
          Math.max(9.5 - curv * 6.8, 2.2) / flatten,
        ] as [number, number],
      },
      uSnow: { value: clamp(noise, 0, 1) * 0.22 },
      uMotion: { value: reducedMotion ? 0 : 1 },
    };
  }, [colors, speed, intensity, curvature, noise, reducedMotion]);

  return (
    <OglCanvas
      aria-hidden
      data-crucible="cathode"
      className={cn("absolute inset-0 -z-10 bg-neutral-950", className)}
      fragment={FRAGMENT}
      uniforms={uniforms}
      dpr={2}
      paused={paused}
      reducedMotionTime={6}
      {...props}
    />
  );
}
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
