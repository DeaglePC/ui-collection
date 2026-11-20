const n=[{path:"registry/default/backgrounds/plasma/plasma.tsx",language:"tsx",content:`"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { OglCanvas } from "@/lib/ogl-canvas";

export interface PlasmaProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Three palette stops the plasma cycles through as a seamless loop
   * (\`A → B → C → A\`). Keep one stop dark for elegant flowing bands, or push
   * all three to saturated hues for full 90s psychedelia. Defaults to a cool
   * indigo → sky → periwinkle gradient. Warm alt: \`["#2a0f3d", "#f97316", "#fbbf24"]\`.
   */
  colors?: [string, string, string];
  /** Flow speed multiplier. 1 = default, 2 = twice as fast, 0 = frozen field. Default 1. */
  speed?: number;
  /**
   * Band richness, 0–2. Scales spatial frequency (how many color bands fill the
   * frame) and vividness. 1 = calm and tasteful; higher packs denser, more
   * saturated psychedelic bands. Default 1.
   */
  intensity?: number;
  /**
   * Idle autoplay: after ~1.5s with no real pointer, a seeded ghost pointer
   * warps the field on a slow drift so it never looks dead in thumbnails and
   * heroes; the real pointer takes over instantly. Never runs under reduced
   * motion. @default true
   */
  idle?: boolean;
  /** Freeze the animation at its current frame. */
  paused?: boolean;
}

const DEFAULT_COLORS: [string, string, string] = [
  "#15234f", // deep indigo — the dark valleys of the field
  "#38bdf8", // sky — the flowing mid band
  "#a5b4fc", // periwinkle — the bright crests
];

/** Hex → [r,g,b] in 0–1. Accepts #rgb / #rrggbb. */
function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  }
  const int = parseInt(h, 16);
  if (Number.isNaN(int) || h.length !== 6) return [0.08, 0.14, 0.31];
  return [((int >> 16) & 255) / 255, ((int >> 8) & 255) / 255, (int & 255) / 255];
}

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(Math.max(v, lo), hi);
}

/**
 * Original demoscene-plasma fragment shader. Several layered sine/cosine fields
 * — two axis-aligned, one diagonal, and two travelling radial waves whose
 * centers orbit on their own slow beats — are summed into a single scalar field
 * over space and time. That field indexes a smooth 3-stop palette wrapped into a
 * seamless loop (A→B→C→A), and the lookup itself drifts with time, so the color
 * bands both deform AND palette-cycle — the classic hypnotic flow. The pointer
 * gently displaces the whole field toward the cursor for a subtle warp. Band
 * spatial frequency and vividness scale with \`intensity\`, keeping the default an
 * elegant cool duotone-to-tritone rather than a garish rainbow. A soft vignette,
 * an exponential tone curve, and film-grain dither kill 8-bit banding.
 * GLSL ES 1.00 (WebGL1/2 compatible); no fract() on spatial coords (only in the
 * hash), so there are no wrap seams.
 */
const FRAGMENT = /* glsl */ \`
precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform float uPointerActive; // eased 0..1 pointer (or ghost) presence

uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform float uSpeed;
uniform float uIntensity;

// Seamless 3-stop loop palette: A -> B -> C -> A.
vec3 palette(float x) {
  float s = fract(x) * 3.0;
  if (s < 1.0)      return mix(uColorA, uColorB, smoothstep(0.0, 1.0, s));
  else if (s < 2.0) return mix(uColorB, uColorC, smoothstep(0.0, 1.0, s - 1.0));
  else              return mix(uColorC, uColorA, smoothstep(0.0, 1.0, s - 2.0));
}

// Compact value-noise hash (fract only inside) for dither.
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

void main() {
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  // Pointer influence scales with presence so it releases when nobody is there.
  vec2 ptr = mix(vec2(0.5), uPointer, uPointerActive);
  vec2 p = vUv - 0.5;
  p.x *= aspect;

  // Subtle pointer warp — gently pulls the whole field toward the cursor.
  p += (ptr - 0.5) * 0.12;

  float t = uTime * uSpeed;
  float freq = 4.0 + clamp(uIntensity, 0.0, 2.0) * 3.0; // denser bands with intensity

  // Layered sine/cosine fields — the heart of the plasma.
  float v = 0.0;
  v += sin(p.x * freq + t);
  v += sin(p.y * freq * 0.9 - t * 1.1);
  v += sin((p.x + p.y) * freq * 0.7 + t * 0.8);

  vec2 c1 = vec2(sin(t * 0.31), cos(t * 0.27)) * 0.4;
  v += sin(length(p - c1) * freq * 1.3 - t * 1.4);

  vec2 c2 = vec2(cos(t * 0.23), sin(t * 0.19)) * 0.5;
  v += sin(length((p - c2) * vec2(1.2, 0.8)) * freq - t);

  // Map the summed field into a cycling palette index; the lookup drifts with
  // time so the palette cycles as the bands deform.
  float idx = v * 0.12 + t * 0.05;
  vec3 col = palette(idx);

  // Vividness rises gently with intensity (kept restrained by default).
  col *= 0.82 + 0.26 * clamp(uIntensity, 0.0, 2.0);

  // Soft vignette to seat it as a background.
  vec2 vg = (vUv - 0.5) * vec2(aspect, 1.0);
  col *= 1.0 - 0.28 * dot(vg, vg);

  // Exponential tone curve rolls highlights instead of clipping.
  col = vec3(1.0) - exp(-col * 1.15);

  // Film-grain dither kills 8-bit banding in the smooth gradients.
  float grain = hash21(gl_FragCoord.xy + fract(t) * 137.0) - 0.5;
  col += grain * (1.5 / 255.0);

  gl_FragColor = vec4(max(col, 0.0), 1.0);
}
\`;

/**
 * Plasma — a classic 90s demoscene plasma background. Layered sine/cosine fields
 * over space and time sum into a scalar that indexes a smooth palette wrapped
 * into a seamless loop, so smooth flowing color bands both deform and
 * palette-cycle — organic, hypnotic, endless. The pointer subtly warps the
 * field. Tasteful cool duotone-to-tritone by default; push the \`colors\` knob for
 * full psychedelia. Built on the \`ogl-canvas\` harness: DPR-clamped,
 * offscreen-paused, reduced-motion-safe (freezes on a static plasma frame), full
 * GL teardown. Drop it inside any \`relative\` container; it fills and sits behind
 * content.
 */
export function Plasma({
  colors = DEFAULT_COLORS,
  speed = 1,
  intensity = 1,
  paused = false,
  idle = true,
  className,
  ...props
}: PlasmaProps) {
  const uniforms = React.useMemo(
    () => ({
      uColorA: { value: hexToRgb(colors[0]) },
      uColorB: { value: hexToRgb(colors[1]) },
      uColorC: { value: hexToRgb(colors[2]) },
      uSpeed: { value: Math.max(speed, 0) },
      uIntensity: { value: clamp(intensity, 0, 2) },
    }),
    [colors, speed, intensity]
  );

  return (
    <OglCanvas
      aria-hidden
      data-crucible="plasma"
      className={cn("absolute inset-0 -z-10 bg-neutral-950", className)}
      fragment={FRAGMENT}
      uniforms={uniforms}
      dpr={2}
      paused={paused}
      ghost={idle}
      reducedMotionTime={5}
      {...props}
    />
  );
}
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
