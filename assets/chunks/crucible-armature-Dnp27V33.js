const n=[{path:"registry/default/utility/armature/armature.tsx",language:"tsx",content:`"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface ArmatureProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Content pinned in the fixed center slot — logo, icon, avatar. */
  center?: React.ReactNode;
  /** One or more \`<ArmatureRing>\` elements. */
  children: React.ReactNode;
  /** Pause every ring (and its counter-rotating icons) while hovered. @default true */
  pauseOnHover?: boolean;
  /** Color of the soft light cast behind the center slot. @default "#ffffff" */
  emberColor?: string;
}

export interface ArmatureRingProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Ring radius in px. */
  radius: number;
  /** Seconds per revolution. @default 20 */
  speed?: number;
  /** Spin direction. @default "cw" */
  direction?: "cw" | "ccw";
  /** Draw a hairline guide circle with a rotating brightened arc. @default true */
  showPath?: boolean;
  /** Icons/elements distributed evenly around the ring. */
  children: React.ReactNode;
  /** Squash factor (0–1) for a slightly elliptical, off-axis orbit. @default 0 */
  eccentricity?: number;
  /** Color of the guide circle / trailing arc. @default "#ffffff" */
  color?: string;
}

const KEYFRAMES = \`
@keyframes crucible-armature-spin-cw { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes crucible-armature-spin-ccw { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
@keyframes crucible-armature-counter-cw { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
@keyframes crucible-armature-counter-ccw { from { transform: rotate(-360deg); } to { transform: rotate(0deg); } }
@keyframes crucible-armature-ember {
  0%, 100% { opacity: 0.55; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.85; transform: translate(-50%, -50%) scale(1.12); }
}
[data-crucible="armature"][data-paused="true"] .armature-spin {
  /* !important: the spin animation is set as an inline style whose shorthand
     implies animation-play-state:running, and inline wins over a plain rule. */
  animation-play-state: paused !important;
}
@media (prefers-reduced-motion: reduce) {
  [data-crucible="armature"] .armature-spin,
  [data-crucible="armature"] .armature-ember {
    animation: none !important;
  }
}
\`;

/**
 * Armature — orbiting icon rings around a fixed center slot. Compose with
 * \`<ArmatureRing>\` for a multi-radius orbital system: each ring sets its own
 * radius, speed, and direction, and icons stay upright via a counter-rotation
 * so only their position orbits, not their orientation.
 *
 * Crucible signature: rings render as neutral hairline guide circles with a
 * rotating arc that brightens to white just behind the icons, a soft white
 * glow behind the center slot, and support for one ring set deliberately
 * eccentric (\`eccentricity\`) for a slightly elliptical orbit. Pure CSS —
 * pauses on hover and freezes orbits (and the center glow's breathing) to a
 * static, correctly-centered frame under reduced motion.
 */
export function Armature({
  center,
  children,
  pauseOnHover = true,
  emberColor = "#ffffff",
  className,
  onMouseEnter,
  onMouseLeave,
  ...props
}: ArmatureProps) {
  const [paused, setPaused] = React.useState(false);

  return (
    <div
      data-crucible="armature"
      data-paused={pauseOnHover && paused}
      className={cn("relative flex items-center justify-center", className)}
      onMouseEnter={(e) => {
        onMouseEnter?.(e);
        if (pauseOnHover) setPaused(true);
      }}
      onMouseLeave={(e) => {
        onMouseLeave?.(e);
        if (pauseOnHover) setPaused(false);
      }}
      {...props}
    >
      <style>{KEYFRAMES}</style>
      <span
        aria-hidden
        className="armature-ember pointer-events-none absolute top-1/2 left-1/2 h-24 w-24 rounded-full blur-2xl"
        style={{
          background: \`radial-gradient(circle, \${emberColor}66, transparent 70%)\`,
          // Resting pose (centered, mid-glow) for when the breath is disabled
          // under reduced motion; the running animation overrides both.
          transform: "translate(-50%, -50%)",
          opacity: 0.7,
          animation: "crucible-armature-ember 4s ease-in-out infinite",
        }}
      />
      {center && <div className="relative z-10 flex items-center justify-center">{center}</div>}
      {children}
    </div>
  );
}

/**
 * ArmatureRing — one orbit within an \`<Armature>\`. Must be a descendant of
 * \`Armature\` (it positions itself absolutely against the nearest positioned
 * ancestor, i.e. Armature's root).
 */
export function ArmatureRing({
  radius,
  speed = 20,
  direction = "cw",
  showPath = true,
  eccentricity = 0,
  color = "#ffffff",
  children,
  className,
  style,
  ...props
}: ArmatureRingProps) {
  const icons = React.Children.toArray(children);
  const size = radius * 2;
  const squash = 1 - Math.min(1, Math.max(0, eccentricity)) * 0.16;
  const tilt = Math.min(1, Math.max(0, eccentricity)) * 5;
  const spinAnimation = \`crucible-armature-spin-\${direction} \${speed}s linear infinite\`;
  const counterAnimation = \`crucible-armature-counter-\${direction} \${speed}s linear infinite\`;

  return (
    <div
      data-crucible="armature-ring"
      className={cn("pointer-events-none absolute top-1/2 left-1/2", className)}
      style={{
        width: size,
        height: size,
        transform: \`translate(-50%, -50%) scale(1, \${squash}) rotate(\${tilt}deg)\`,
        ...style,
      }}
      {...props}
    >
      {showPath && (
        <div
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{ border: \`1px solid \${color}\`, opacity: 0.25 }}
        />
      )}
      {showPath && (
        <div
          aria-hidden
          className="armature-spin absolute inset-0 rounded-full"
          style={{
            background: \`conic-gradient(from 0deg, transparent 0deg, transparent 290deg, \${color} 330deg, transparent 358deg)\`,
            WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
            animation: spinAnimation,
          }}
        />
      )}
      <div className="armature-spin absolute inset-0" style={{ animation: spinAnimation }}>
        {icons.map((icon, i) => {
          const angle = (360 / icons.length) * i;
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2"
              style={{ transform: \`translate(-50%, -50%) rotate(\${angle}deg) translate(\${radius}px) rotate(-\${angle}deg)\` }}
            >
              <div className="armature-spin pointer-events-auto" style={{ animation: counterAnimation }}>
                {icon}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
