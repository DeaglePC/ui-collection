/**
 * Crucible · Flywheel
 * MIT License · Copyright (c) 2026 Crucible (crucibleui.com)
 * https://crucibleui.com · https://crucibleui.com/r/flywheel.json
 */
import * as React from "react";

import { cn } from "../cn";

export interface FlywheelProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Which spinner to render.
   * - `ring` (default): a machined groove with a white-hot comet head that
   *   cools to a blue-silver tail, spun with heavy inertia and a faint
   *   flicker at speed — the Crucible signature.
   * - `dots-orbit`: a comet of beads orbiting, each breathing on a sine so
   *   the ring has life even at rest.
   * - `segmented`: a spoked wheel of alternating solid/gap segments with a
   *   hot leading spoke.
   * - `dual-ring`: two filament heads counter-rotating at different rates.
   * @default "ring"
   */
  variant?: "ring" | "dots-orbit" | "segmented" | "dual-ring";
  /** Overall size in px. @default 40 */
  size?: number;
  /** Rotation speed multiplier. 1 = default, 2 = twice as fast. @default 1 */
  speed?: number;
  /** Accessible label announced to screen readers. @default "Loading" */
  label?: string;
  /** Accent color for the hot head / active ring. @default "#ffffff" */
  accentColor?: string;
}

// Grain tile — a tiny fractal-noise SVG, tiled at low opacity over the whole
// widget to kill gradient banding and give the glow a shader-grade texture.
// Built once at module scope (pure string ops — SSR-safe, deterministic).
const GRAIN_SVG =
  "<svg xmlns='http://www.w3.org/2000/svg' width='90' height='90'>" +
  "<filter id='fwn'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter>" +
  "<rect width='100%' height='100%' filter='url(#fwn)'/></svg>";
const GRAIN_URI = `url("data:image/svg+xml,${encodeURIComponent(GRAIN_SVG)}")`;

const KEYFRAMES = `
@property --fw-spin {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}
@keyframes crucible-flywheel-spin { to { transform: rotate(360deg); } }
@keyframes crucible-flywheel-spin-reverse { to { transform: rotate(-360deg); } }
@keyframes crucible-flywheel-flicker {
  0%, 21%, 23%, 46%, 48%, 100% { opacity: 1; }
  22%, 47% { opacity: 0.62; }
}
/* A sine-ish breath: dots swell and dim, never fully off — idle life. */
@keyframes crucible-flywheel-dot {
  0%, 100% { opacity: 0.18; transform: scale(0.7); }
  50% { opacity: 1; transform: scale(1.15); }
}
/* The head bloom breathes slightly so the tip flares, not just glows flat. */
@keyframes crucible-flywheel-bloom {
  0%, 100% { opacity: 0.85; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.18); }
}
[data-crucible="flywheel"] .fw-rotor,
[data-crucible="flywheel"] .fw-dot { will-change: transform; }
@media (prefers-reduced-motion: reduce) {
  /* Pin an explicit, legible resting pose — a lit comet, never a blank box
     and never frozen mid-blur. All animated props are committed here. */
  [data-crucible="flywheel"] .fw-rotor {
    animation: none !important;
    transform: rotate(-42deg) !important;
  }
  [data-crucible="flywheel"] .fw-rotor-slow {
    transform: rotate(38deg) !important;
  }
  [data-crucible="flywheel"] .fw-spin-inner { animation: none !important; }
  [data-crucible="flywheel"] .fw-stroke,
  [data-crucible="flywheel"] .fw-head { animation: none !important; opacity: 1 !important; }
  [data-crucible="flywheel"] .fw-bloom {
    animation: none !important;
    opacity: 0.9 !important;
    transform: translate(-50%, -50%) scale(1) !important;
  }
  [data-crucible="flywheel"] .fw-dot {
    animation: none !important;
    opacity: 0.85 !important;
    transform: scale(1) !important;
  }
}
`;

const DOT_COUNT = 8;

// Shared machined groove behind a rotating stroke: a recessed channel with an
// inner shadow, a dark outer rim and a soft top rim-light so it reads as cut
// metal, not a CSS border.
function Groove({ thickness = "var(--fw-thick)", inset = "0" }: { thickness?: string; inset?: string }) {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          inset,
          border: `${thickness} solid transparent`,
          background: `linear-gradient(to bottom, color-mix(in oklab, currentColor 24%, transparent), color-mix(in oklab, currentColor 7%, transparent)) border-box`,
          WebkitMask: "linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          inset,
          boxShadow:
            "inset 0 1px 1.5px rgba(0,0,0,0.65), inset 0 -1px 1px rgba(255,255,255,0.09), inset 0 0 3px rgba(0,0,0,0.5)",
        }}
      />
    </>
  );
}

// The comet head: a blurred bloom flaring behind a sharp white-hot core, both
// pinned to the top-centre point of the ring where the conic head sits.
function Head({ bloom = true }: { bloom?: boolean }) {
  return (
    <>
      {bloom && (
        <span
          aria-hidden
          className="fw-bloom pointer-events-none absolute rounded-full"
          style={{
            top: 0,
            left: "50%",
            width: "calc(var(--fw-thick) * 5)",
            height: "calc(var(--fw-thick) * 5)",
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, var(--fw-accent) 0%, color-mix(in oklab, var(--fw-hot) 70%, transparent) 35%, transparent 70%)`,
            filter: "blur(2.5px) brightness(1.35)",
            animation: "crucible-flywheel-bloom calc(var(--fw-dur) * 2) ease-in-out infinite",
          }}
        />
      )}
      <span
        aria-hidden
        className="fw-head pointer-events-none absolute rounded-full"
        style={{
          top: 0,
          left: "50%",
          width: "calc(var(--fw-thick) * 1.7)",
          height: "calc(var(--fw-thick) * 1.7)",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, var(--fw-accent) 0%, var(--fw-hot) 55%, transparent 78%)`,
          boxShadow:
            "0 0 4px 1px color-mix(in oklab, var(--fw-accent) 80%, transparent), 0 0 9px 2px color-mix(in oklab, var(--fw-hot) 45%, transparent)",
        }}
      />
    </>
  );
}

// Conic hot filament, masked to the ring band. Head at 12 o'clock (0deg),
// cooling backward into a blue-silver tail that fades to nothing.
const cometConic = `conic-gradient(from 0deg,
  var(--fw-accent) 0%,
  color-mix(in oklab, var(--fw-hot) 55%, transparent) 2.5%,
  transparent 6%,
  transparent 58%,
  color-mix(in oklab, var(--fw-trace) 45%, transparent) 70%,
  var(--fw-cool) 86%,
  var(--fw-hot) 96%,
  var(--fw-accent) 100%
)`;

const ringMask = (t: string) =>
  `radial-gradient(farthest-side, transparent calc(100% - ${t}), #000 calc(100% - ${t}))`;

function RingVariant() {
  return (
    <>
      <Groove />
      <div
        className="fw-rotor absolute inset-0"
        style={{
          animation:
            "crucible-flywheel-spin calc(var(--fw-dur) * 1.4) cubic-bezier(0.62, 0.02, 0.34, 1) infinite",
        }}
      >
        <span
          aria-hidden
          className="fw-stroke absolute inset-0 rounded-full"
          style={{
            background: cometConic,
            WebkitMask: ringMask("var(--fw-thick)"),
            mask: ringMask("var(--fw-thick)"),
            animation: "crucible-flywheel-flicker calc(var(--fw-dur) * 1.4) linear infinite",
          }}
        />
        <Head />
      </div>
    </>
  );
}

function DotsOrbitVariant() {
  return (
    <div
      className="fw-rotor absolute inset-0"
      style={{
        animation:
          "crucible-flywheel-spin calc(var(--fw-dur) * 1.15) cubic-bezier(0.5, 0.05, 0.5, 0.95) infinite",
      }}
    >
      {Array.from({ length: DOT_COUNT }, (_, i) => {
        const angle = (360 / DOT_COUNT) * i;
        // Head-most bead runs hottest; brightness cools around the ring so the
        // orbit reads as a comet of beads, not a uniform necklace.
        const headness = Math.round(100 - (i / DOT_COUNT) * 82);
        const dotColor = `color-mix(in oklab, var(--fw-accent) ${headness}%, var(--fw-cool))`;
        return (
          // Position (rotate + radial offset) lives on this static wrapper so
          // it never collides with the breath's own `transform: scale(...)`.
          <span
            key={i}
            className="absolute top-1/2 left-1/2 h-[15%] w-[15%]"
            style={{
              transform: `rotate(${angle}deg) translate(calc(var(--fw-size) * 0.36)) translate(-50%, -50%)`,
            }}
          >
            <span
              className="fw-dot block h-full w-full rounded-full"
              style={{
                background: `radial-gradient(circle at 40% 35%, var(--fw-accent) 0%, ${dotColor} 45%, color-mix(in oklab, ${dotColor} 40%, transparent) 78%, transparent 100%)`,
                boxShadow: `0 0 ${headness > 60 ? 6 : 3}px ${headness > 60 ? 1 : 0}px color-mix(in oklab, ${dotColor} ${Math.round(headness * 0.6)}%, transparent)`,
                animation: "crucible-flywheel-dot calc(var(--fw-dur) * 1.15) ease-in-out infinite",
                animationDelay: `calc(var(--fw-dur) * 1.15 / ${DOT_COUNT} * ${i} * -1)`,
              }}
            />
          </span>
        );
      })}
    </div>
  );
}

function SegmentedVariant() {
  // Spoked wheel: a hot leading spoke, cool blue-silver teeth behind it.
  const spokes = `conic-gradient(from 0deg,
    var(--fw-accent) 0deg 22deg, transparent 22deg 45deg,
    color-mix(in oklab, var(--fw-cool) 92%, var(--fw-hot)) 45deg 67deg, transparent 67deg 90deg,
    color-mix(in oklab, var(--fw-cool) 78%, transparent) 90deg 112deg, transparent 112deg 135deg,
    color-mix(in oklab, var(--fw-cool) 62%, transparent) 135deg 157deg, transparent 157deg 180deg,
    color-mix(in oklab, var(--fw-cool) 50%, transparent) 180deg 202deg, transparent 202deg 225deg,
    color-mix(in oklab, var(--fw-cool) 40%, transparent) 225deg 247deg, transparent 247deg 270deg,
    color-mix(in oklab, var(--fw-cool) 32%, transparent) 270deg 292deg, transparent 292deg 315deg,
    color-mix(in oklab, var(--fw-cool) 24%, transparent) 315deg 337deg, transparent 337deg 360deg
  )`;
  return (
    <>
      <Groove />
      <div
        className="fw-rotor absolute inset-0"
        style={{
          animation:
            "crucible-flywheel-spin calc(var(--fw-dur) * 1.1) cubic-bezier(0.6, 0.04, 0.36, 1) infinite",
        }}
      >
        <span
          aria-hidden
          className="fw-stroke absolute inset-0 rounded-full"
          style={{
            background: spokes,
            WebkitMask: ringMask("calc(var(--fw-thick) * 1.15)"),
            mask: ringMask("calc(var(--fw-thick) * 1.15)"),
            animation: "crucible-flywheel-flicker calc(var(--fw-dur) * 1.1) linear infinite",
          }}
        />
        <Head />
      </div>
    </>
  );
}

function DualRingVariant() {
  const conicHalf = (lead: string, trail: string) => `conic-gradient(from 0deg,
    var(--fw-accent) 0%,
    transparent 5%,
    transparent 44%,
    ${lead} 50%,
    transparent 55%,
    transparent 90%,
    ${trail} 100%
  )`;
  return (
    <>
      <Groove />
      <div
        className="fw-rotor absolute inset-0"
        style={{
          animation:
            "crucible-flywheel-spin calc(var(--fw-dur) * 1.25) cubic-bezier(0.55, 0.05, 0.45, 0.95) infinite",
        }}
      >
        <span
          aria-hidden
          className="fw-stroke absolute inset-0 rounded-full"
          style={{
            background: conicHalf("var(--fw-hot)", "var(--fw-cool)"),
            WebkitMask: ringMask("var(--fw-thick)"),
            mask: ringMask("var(--fw-thick)"),
            animation: "crucible-flywheel-flicker calc(var(--fw-dur) * 1.25) linear infinite",
          }}
        />
        <Head />
      </div>
      <div className="fw-rotor fw-rotor-slow absolute inset-[24%]">
        <Groove thickness="calc(var(--fw-thick) * 0.7)" />
        <div
          className="fw-spin-inner absolute inset-0"
          style={{
            animation:
              "crucible-flywheel-spin-reverse calc(var(--fw-dur) * 0.72) cubic-bezier(0.55, 0.05, 0.45, 0.95) infinite",
          }}
        >
          <span
            aria-hidden
            className="fw-stroke absolute inset-0 rounded-full"
            style={{
              background: conicHalf(
                "color-mix(in oklab, var(--fw-cool) 85%, var(--fw-hot))",
                "color-mix(in oklab, var(--fw-cool) 60%, transparent)"
              ),
              WebkitMask: ringMask("calc(var(--fw-thick) * 0.7)"),
              mask: ringMask("calc(var(--fw-thick) * 0.7)"),
              opacity: 0.85,
            }}
          />
        </div>
      </div>
    </>
  );
}

/**
 * Flywheel — four machined CSS spinner variants selected by `variant`.
 * The track groove is currentColor-driven (wrap in a `text-*` class to
 * recolor it); the white-hot comet head is independently themeable via
 * `accentColor` and cools into a blue-silver tail. Zero dependencies,
 * SSR-safe, GPU-light.
 *
 * Crucible signature (`variant="ring"`, the default): a recessed groove with
 * a conic-gradient filament — a white-hot head blooming at the tip, cooling
 * back through silver to a faint slate trace — spun with heavy inertia and a
 * flicker at speed, over a low-opacity grain that kills banding. Under
 * reduced motion every variant pins a lit resting frame — no spin, never
 * blank.
 */
export function Flywheel({
  variant = "ring",
  size = 40,
  speed = 1,
  label = "Loading",
  accentColor = "#ffffff",
  className,
  style,
  ...props
}: FlywheelProps) {
  const duration = `${1.1 / Math.max(speed, 0.01)}s`;

  return (
    <div
      data-crucible="flywheel"
      role="status"
      aria-label={label}
      className={cn("relative inline-block", className)}
      style={
        {
          width: size,
          height: size,
          "--fw-size": `${size}px`,
          "--fw-dur": duration,
          "--fw-thick": "max(2px, calc(var(--fw-size) * 0.078))",
          "--fw-accent": accentColor,
          // Silver the head cools through, and the cool blue-silver tail —
          // both track the accent so custom accents stay harmonious.
          "--fw-hot": `color-mix(in oklab, ${accentColor} 68%, #cdd9ee)`,
          "--fw-cool": `color-mix(in oklab, ${accentColor} 26%, #7f97ba)`,
          "--fw-trace": `color-mix(in oklab, ${accentColor} 15%, #5f7896)`,
          "--fw-grain": GRAIN_URI,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <style>{KEYFRAMES}</style>
      {variant === "ring" && <RingVariant />}
      {variant === "dots-orbit" && <DotsOrbitVariant />}
      {variant === "segmented" && <SegmentedVariant />}
      {variant === "dual-ring" && <DualRingVariant />}
      {/* Grain overlay — tiled fractal noise at very low opacity to kill the
          banding in the conic tail and match a shader look. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background: "var(--fw-grain)",
          backgroundSize: "90px 90px",
          opacity: 0.07,
          mixBlendMode: "overlay",
        }}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}
