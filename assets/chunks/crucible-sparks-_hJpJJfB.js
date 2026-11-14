const n=[{path:"registry/default/utility/sparks/sparks.tsx",language:"tsx",content:`"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useVisibilityPause } from "@/hooks/use-visibility-pause";

export interface SparksHandle {
  /**
   * Fire a burst. Coordinates are relative to the component's own top-left
   * corner (its own bounding box, not the viewport) — omit both to burst
   * from the component's center.
   */
  fire: (x?: number, y?: number) => void;
}

export interface SparksProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Particles per burst. Default 36. */
  count?: number;
  /** Streak colors as hex strings (\`#rgb\` / \`#rrggbb\`), cycled per-particle. Defaults to white, silver, and pale blue. */
  colors?: string[];
  /** Base launch direction in degrees (0 = right, 90 = up). Default 90. */
  angle?: number;
  /** Fan width around \`angle\`, in degrees. 360 = fully omnidirectional. Default 130. */
  spread?: number;
  /** Initial launch speed, px/s. Default 420. */
  velocity?: number;
  /** Downward acceleration, px/s². Default 900. */
  gravity?: number;
  /** Pooled particle capacity — bursts recycle the oldest particle once full. Default 240. */
  maxParticles?: number;
  /** devicePixelRatio ceiling. Default 2. */
  dpr?: number;
}

interface Particle {
  active: boolean;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  length: number;
  width: number;
  rgb: [number, number, number];
  bounced: boolean;
  bounceEligible: boolean;
  isFlash: boolean;
}

function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  const int = parseInt(h, 16);
  if (Number.isNaN(int) || h.length !== 6) return [255, 255, 255];
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
}

function makePool(size: number): Particle[] {
  const pool: Particle[] = [];
  for (let i = 0; i < size; i++) {
    pool.push({
      active: false,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      life: 0,
      maxLife: 1,
      length: 0,
      width: 2,
      rgb: [255, 255, 255],
      bounced: false,
      bounceEligible: false,
      isFlash: false,
    });
  }
  return pool;
}

/** Find an inactive slot, or recycle the particle with the least life left. */
function nextSlot(pool: Particle[]): Particle {
  for (const p of pool) if (!p.active) return p;
  let oldest = pool[0];
  for (const p of pool) if (p.life < oldest.life) oldest = p;
  return oldest;
}

const DEFAULT_COLORS = ["#ffffff", "#d9dce3", "#b9d2ff"];

/**
 * Sparks — a celebratory spark shower fired imperatively via ref: elongated
 * glowing streaks fan outward, fall under gravity, and burn out bright-to-dark
 * rather than gently fading, with a fraction bouncing once. Not confetti —
 * every particle is a short streak of white, silver, or pale-blue light.
 * Pooled particles, zero allocation per burst, auto-cleanup on unmount. Under
 * reduced motion a burst becomes a brief, stationary flash instead of a
 * physics-driven shower.
 */
export const Sparks = React.forwardRef<SparksHandle, SparksProps>(function Sparks(
  {
    count = 36,
    colors = DEFAULT_COLORS,
    angle = 90,
    spread = 130,
    velocity = 420,
    gravity = 900,
    maxParticles = 240,
    dpr = 2,
    className,
    ...props
  },
  ref
) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  const internalsRef = React.useRef<{
    ctx: CanvasRenderingContext2D;
    pool: Particle[];
    width: number;
    height: number;
    lastElapsed: number;
    /** True while anything may be on the canvas — lets idle frames skip all work. */
    dirty: boolean;
  } | null>(null);

  const rgbPalette = React.useMemo(() => colors.map(hexToRgb), [colors]);

  const fire = React.useCallback(
    (x?: number, y?: number) => {
      const it = internalsRef.current;
      if (!it) return;
      const ox = x ?? it.width / 2;
      const oy = y ?? it.height / 2;
      const flash = reducedMotion;
      it.dirty = true;
      const burstCount = flash ? Math.min(8, count) : count;

      for (let i = 0; i < burstCount; i++) {
        const p = nextSlot(it.pool);
        const rgb = rgbPalette[i % rgbPalette.length];
        p.active = true;
        p.bounced = false;
        p.bounceEligible = Math.random() < 0.15;
        p.isFlash = flash;
        p.x = ox;
        p.y = oy;
        p.rgb = rgb;

        if (flash) {
          p.vx = 0;
          p.vy = 0;
          p.maxLife = p.life = 0.35 + Math.random() * 0.15;
          p.length = 3 + Math.random() * 3;
          p.width = p.length;
          continue;
        }

        const spreadRad = (spread * Math.PI) / 180;
        const baseRad = (angle * Math.PI) / 180;
        const a = baseRad + (Math.random() - 0.5) * spreadRad;
        const speed = velocity * (0.5 + Math.random() * 0.7);
        p.vx = Math.cos(a) * speed;
        p.vy = -Math.sin(a) * speed;
        p.maxLife = p.life = 0.5 + Math.random() * 0.6;
        p.length = 10 + Math.random() * 16;
        p.width = 1.5 + Math.random();
      }
    },
    [count, angle, spread, velocity, reducedMotion, rgbPalette]
  );

  React.useImperativeHandle(ref, () => ({ fire }), [fire]);

  const tick = React.useCallback((elapsed: number) => {
    const it = internalsRef.current;
    if (!it) return;
    const dt = Math.max(0, Math.min(elapsed - it.lastElapsed, 0.05));
    it.lastElapsed = elapsed;
    // Idle between bursts: the canvas is already clear, so do nothing.
    if (!it.dirty) return;

    const { ctx, pool, width, height } = it;
    ctx.clearRect(0, 0, width, height);
    let anyActive = false;
    ctx.lineCap = "round";

    for (const p of pool) {
      if (!p.active) continue;
      p.life -= dt;
      if (p.life <= 0) {
        p.active = false;
        continue;
      }
      anyActive = true;
      const t = Math.max(p.life / p.maxLife, 0);
      const [r, g, b] = p.rgb;
      // Burn out bright-to-dark rather than a uniform opacity fade.
      const burn = t * t;
      const cr = r * burn;
      const cg = g * burn;
      const cb = b * burn;
      const alpha = Math.min(t * 1.6, 1);

      if (p.isFlash) {
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = \`rgb(\${cr}, \${cg}, \${cb})\`;
        ctx.shadowColor = \`rgb(\${r}, \${g}, \${b})\`;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.width, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        continue;
      }

      p.vy += gravity * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;

      // A fraction of sparks bounce once off an implicit floor at the canvas edge.
      if (!p.bounced && p.y > height && p.vy > 0) {
        if (p.bounceEligible) {
          p.vy *= -0.4;
          p.vx *= 0.7;
          p.y = height;
        }
        p.bounced = true;
      }

      const mag = Math.hypot(p.vx, p.vy) || 1;
      const trail = p.length * (0.4 + t * 0.6);
      const tailX = p.x - (p.vx / mag) * trail;
      const tailY = p.y - (p.vy / mag) * trail;

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = \`rgb(\${cr}, \${cg}, \${cb})\`;
      ctx.shadowColor = \`rgb(\${r}, \${g}, \${b})\`;
      ctx.shadowBlur = 6;
      ctx.lineWidth = p.width;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();
      ctx.restore();
    }
    // Everything burned out this frame — the clear above was the last draw.
    if (!anyActive) it.dirty = false;
  }, [gravity]);

  const containerRef = useVisibilityPause<HTMLDivElement>(tick);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const effectiveDpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, dpr);

    internalsRef.current = {
      ctx,
      pool: makePool(maxParticles),
      width: 0,
      height: 0,
      lastElapsed: 0,
      dirty: false,
    };

    const resize = () => {
      const it = internalsRef.current;
      if (!it) return;
      const w = Math.max(container.clientWidth, 1);
      const h = Math.max(container.clientHeight, 1);
      canvas.width = Math.round(w * effectiveDpr);
      canvas.height = Math.round(h * effectiveDpr);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      ctx.setTransform(effectiveDpr, 0, 0, effectiveDpr, 0, 0);
      it.width = w;
      it.height = h;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    return () => {
      ro.disconnect();
      internalsRef.current = null;
    };
  }, [dpr, maxParticles]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      data-crucible="sparks"
      className={cn("pointer-events-none absolute inset-0 z-40 overflow-hidden", className)}
      {...props}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
});
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
