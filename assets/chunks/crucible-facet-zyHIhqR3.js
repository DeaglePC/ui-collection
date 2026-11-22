const e=[{path:"registry/default/cards/facet/facet.tsx",language:"tsx",content:`"use client";

import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "motion/react";
import * as React from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useVisibilityPause } from "@/hooks/use-visibility-pause";
import { cn } from "@/lib/utils";

export interface FacetProps extends Omit<HTMLMotionProps<"div">, "children" | "ref"> {
  /** Content to render on the tilting surface. */
  children: React.ReactNode;
  /** Maximum rotation, in degrees, on either axis at the card's edge. @default 14 */
  maxTilt?: number;
  /** Container perspective distance in px — lower feels more extreme. @default 900 */
  perspective?: number;
  /** Peak opacity of the glare streak while hovered. @default 0.7 */
  glareOpacity?: number;
  /** Scale applied while hovered/tilting. @default 1.02 */
  hoverScale?: number;
  /**
   * Idle autoplay: after 1.5s with no pointer on the card, a ghost light
   * slowly rocks it through a shallow tilt with a dimmed glare, so the metal
   * never reads as dead. A real pointer takes over instantly. Off under
   * reduced motion; sleeps offscreen. @default true
   */
  idle?: boolean;
}

const SPRING = { stiffness: 300, damping: 28, mass: 1 };
const IDLE_MS = 1500;
/** Ghost tilt relative to a real pointer — deliberate, never a full hover. */
const GHOST_GAIN = 0.45;

/** Stable per-instance phase from React's id, so sibling cards never ghost in lockstep. */
function idPhase(id: string): number {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) h = Math.imul(h ^ id.charCodeAt(i), 16777619);
  return ((h >>> 0) / 4294967296) * Math.PI * 2;
}

/**
 * Facet — a card that tilts in 3D toward the pointer with spring-damped
 * rotation, while a hard-edged white-silver anisotropic glare streak sweeps
 * the surface like light across brushed metal. Disables tilt for touch input, and under
 * \`prefers-reduced-motion\` falls back to a flat card with a static, subtle
 * glare instead of disappearing. Untouched, a ghost light idles the tilt
 * (\`idle\`) and hands over to the real pointer the moment it arrives.
 */
export function Facet({
  children,
  className,
  style,
  maxTilt = 14,
  perspective = 900,
  glareOpacity = 0.7,
  hoverScale = 1.02,
  idle = true,
  ...props
}: FacetProps) {
  const reducedMotion = useReducedMotion();
  const [hovering, setHovering] = React.useState(false);
  const [ghosting, setGhosting] = React.useState(false);
  const hoverRef = React.useRef(false);
  const lastPointerRef = React.useRef(0);
  const ghostRef = React.useRef({ presence: 0, last: 0, on: false });
  const phase = idPhase(React.useId());

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, SPRING);
  const rotateY = useSpring(rawRotateY, SPRING);
  const scale = useSpring(1, SPRING);

  // Ghost driver: a slow Lissajous light path at reduced strength.
  // The observed element, mirrored for the rAF tick (set after commit).
  const elRef = React.useRef<HTMLElement | null>(null);
  const cardRef = useVisibilityPause<HTMLDivElement>(
    (elapsed) => {
      const node = elRef.current;
      const g = ghostRef.current;
      if (!node) return;
      if (elapsed < g.last) g.last = elapsed;
      const dt = Math.min(elapsed - g.last, 0.05);
      g.last = elapsed;
      if (hoverRef.current) {
        g.presence = 0;
        if (g.on) {
          g.on = false;
          setGhosting(false);
        }
        return;
      }
      const want = performance.now() - lastPointerRef.current > IDLE_MS ? 1 : 0;
      g.presence += (want - g.presence) * Math.min(1, dt * 1.6);
      if (!want && g.presence < 0.01) {
        if (g.on) {
          g.on = false;
          setGhosting(false);
        }
        return;
      }
      if (!g.on) {
        g.on = true;
        setGhosting(true);
      }
      const px = 0.5 + 0.36 * Math.sin(elapsed * 0.43 + phase + 0.4);
      const py = 0.45 + 0.32 * Math.sin(elapsed * 0.31 + 1.9 + phase * 1.7);
      const k = g.presence * GHOST_GAIN;
      rawRotateX.set(-(py - 0.5) * 2 * maxTilt * k);
      rawRotateY.set((px - 0.5) * 2 * maxTilt * k);
      node.style.setProperty("--facet-gx", \`\${(px * 100).toFixed(2)}%\`);
      node.style.setProperty("--facet-gy", \`\${(py * 100).toFixed(2)}%\`);
    },
    { paused: !idle || reducedMotion }
  );

  React.useEffect(() => {
    elRef.current = cardRef.current;
  });

  // Arm the idle clock at mount (the ghost waits 1.5s before its first pass).
  React.useEffect(() => {
    lastPointerRef.current = performance.now();
  }, []);

  const handlePointerMove = React.useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (reducedMotion || event.pointerType === "touch") return;
      const node = cardRef.current;
      if (!node) return;
      lastPointerRef.current = performance.now();
      if (!hoverRef.current) {
        // Pointer started inside the card (no enter event): take over now.
        hoverRef.current = true;
        setHovering(true);
        scale.set(hoverScale);
      }

      const rect = node.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const cx = px - 0.5;
      const cy = py - 0.5;

      rawRotateX.set(-cy * 2 * maxTilt);
      rawRotateY.set(cx * 2 * maxTilt);
      node.style.setProperty("--facet-gx", \`\${(px * 100).toFixed(2)}%\`);
      node.style.setProperty("--facet-gy", \`\${(py * 100).toFixed(2)}%\`);
    },
    [reducedMotion, maxTilt, rawRotateX, rawRotateY, cardRef, scale, hoverScale]
  );

  const handlePointerEnter = React.useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (reducedMotion || event.pointerType === "touch") return;
      hoverRef.current = true;
      lastPointerRef.current = performance.now();
      setHovering(true);
      scale.set(hoverScale);
    },
    [reducedMotion, hoverScale, scale]
  );

  const handlePointerLeave = React.useCallback(() => {
    hoverRef.current = false;
    lastPointerRef.current = performance.now();
    setHovering(false);
    rawRotateX.set(0);
    rawRotateY.set(0);
    scale.set(1);
  }, [rawRotateX, rawRotateY, scale]);

  return (
    <motion.div
      ref={cardRef}
      data-crucible="facet"
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border border-white/10 bg-neutral-900",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        // \`transformPerspective\` bakes perspective() into this element's own
        // transform. The CSS \`perspective\` property only affects descendants, so
        // it never foreshortened the card's own rotateX/rotateY (the tilt read flat).
        transformPerspective: reducedMotion ? undefined : perspective,
        rotateX: reducedMotion ? 0 : rotateX,
        rotateY: reducedMotion ? 0 : rotateY,
        scale: reducedMotion ? 1 : scale,
        ["--facet-gx" as string]: "50%",
        ["--facet-gy" as string]: "30%",
        ...style,
      }}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: reducedMotion ? 0.12 : hovering ? glareOpacity : ghosting ? glareOpacity * 0.55 : 0,
          mixBlendMode: "screen",
          background: [
            "radial-gradient(360px circle at var(--facet-gx) var(--facet-gy), rgba(255,255,255,0.35), transparent 40%)",
            "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.5) 47%, rgba(196,204,215,0.38) 50%, rgba(148,158,172,0.34) 53%, transparent 60%)",
          ].join(", "),
          backgroundSize: "auto, 220% 220%",
          backgroundPosition: "var(--facet-gx) var(--facet-gy)",
        }}
      />
    </motion.div>
  );
}
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
