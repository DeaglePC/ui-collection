const n=[{path:"registry/default/backgrounds/slag/slag.tsx",language:"tsx",content:`"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useVisibilityPause } from "@/hooks/use-visibility-pause";

export interface SlagProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Size of a single grain in device-independent px. Bigger = coarser dust. Default 2.2. */
  grainSize?: number;
  /** Overlay opacity, 0–1. Default 0.09. */
  opacity?: number;
  /**
   * Frames per second the grain regenerates at. Real film grain doesn't need
   * 60fps churn; low values (e.g. 6) read as a "settled," smoldering
   * particulate-air look. Default 24.
   */
  fps?: number;
  /**
   * Amber tint strength on the brightest grains, 0–1. 0 keeps the grain
   * pure neutral gray; raise it for a warm-biased dust. Default 0.
   */
  warmth?: number;
  /** devicePixelRatio ceiling. Default 2. */
  dpr?: number;
  /** Freeze the grain at its current frame. */
  paused?: boolean;
}

const WARM_TINT: [number, number, number] = [255, 176, 96]; // molten amber, rgb

/** Regenerate the noise tile in place and blit it scaled-up onto the main canvas. */
function drawGrain(
  main: CanvasRenderingContext2D,
  tile: CanvasRenderingContext2D,
  tileImage: ImageData,
  mainW: number,
  mainH: number,
  tileW: number,
  tileH: number,
  warmth: number
) {
  const data = tileImage.data;
  for (let i = 0; i < data.length; i += 4) {
    const v = Math.random() * 255;
    // Occasional bright grains get an amber lift instead of staying neutral gray.
    const warm = Math.random() < 0.18 * warmth;
    const r = warm ? v * (1 - warmth) + WARM_TINT[0] * warmth : v;
    const g = warm ? v * (1 - warmth) + WARM_TINT[1] * warmth : v;
    const b = warm ? v * (1 - warmth) + WARM_TINT[2] * warmth : v;
    data[i] = r;
    data[i + 1] = g;
    data[i + 2] = b;
    data[i + 3] = 255;
  }
  tile.putImageData(tileImage, 0, 0);
  main.clearRect(0, 0, mainW, mainH);
  main.imageSmoothingEnabled = false;
  main.drawImage(tile.canvas, 0, 0, tileW, tileH, 0, 0, mainW, mainH);
}

/**
 * Slag — an animated film-grain / noise overlay. Fine, neutral-gray dust
 * speckle that blends over whatever sits beneath it via low opacity and
 * \`mix-blend-mode\` (dial \`warmth\` up for a warm-biased grain). Unlike
 * Crucible's other backgrounds this layer is meant to sit ABOVE your content
 * (not \`-z-10\`) — that's the whole point of a grain overlay — so position it
 * last in your stacking context and leave \`className\` to control
 * z-index/blend-mode if you need something other than the default.
 */
export function Slag({
  grainSize = 2.2,
  opacity = 0.09,
  fps = 24,
  warmth = 0,
  dpr = 2,
  paused = false,
  className,
  style,
  ...props
}: SlagProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  const internalsRef = React.useRef<{
    ctx: CanvasRenderingContext2D;
    tileCanvas: HTMLCanvasElement;
    tileCtx: CanvasRenderingContext2D;
    tileImage: ImageData;
    tileW: number;
    tileH: number;
    lastDraw: number;
  } | null>(null);

  const frameInterval = 1 / Math.max(fps, 1);

  const tick = React.useCallback(
    (elapsed: number) => {
      const it = internalsRef.current;
      const canvas = canvasRef.current;
      if (!it || !canvas) return;
      if (elapsed - it.lastDraw < frameInterval) return;
      it.lastDraw = elapsed;
      drawGrain(it.ctx, it.tileCtx, it.tileImage, canvas.width, canvas.height, it.tileW, it.tileH, warmth);
    },
    [frameInterval, warmth]
  );

  const containerRef = useVisibilityPause<HTMLDivElement>(tick, { paused: paused || reducedMotion });

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const effectiveDpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, dpr);

    const resize = () => {
      const w = Math.max(container.clientWidth, 1);
      const h = Math.max(container.clientHeight, 1);
      canvas.width = Math.round(w * effectiveDpr);
      canvas.height = Math.round(h * effectiveDpr);

      const tileW = Math.max(1, Math.round(canvas.width / (grainSize * effectiveDpr)));
      const tileH = Math.max(1, Math.round(canvas.height / (grainSize * effectiveDpr)));
      const tileCanvas = document.createElement("canvas");
      tileCanvas.width = tileW;
      tileCanvas.height = tileH;
      const tileCtx = tileCanvas.getContext("2d", { alpha: false });
      if (!tileCtx) return;
      const tileImage = tileCtx.createImageData(tileW, tileH);

      internalsRef.current = {
        ctx,
        tileCanvas,
        tileCtx,
        tileImage,
        tileW,
        tileH,
        lastDraw: -Infinity,
      };

      // Draw one frame immediately so resize/mount never shows a blank canvas.
      drawGrain(ctx, tileCtx, tileImage, canvas.width, canvas.height, tileW, tileH, warmth);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    return () => {
      ro.disconnect();
      internalsRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dpr, grainSize]);

  // Re-render the static frame in place when paused/reduced so warmth/opacity
  // prop changes are reflected even while the loop isn't running.
  React.useEffect(() => {
    const it = internalsRef.current;
    const canvas = canvasRef.current;
    if (!it || !canvas || !(paused || reducedMotion)) return;
    drawGrain(it.ctx, it.tileCtx, it.tileImage, canvas.width, canvas.height, it.tileW, it.tileH, warmth);
  }, [paused, reducedMotion, warmth]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      data-crucible="slag"
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{ opacity, mixBlendMode: "overlay", ...style }}
      {...props}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
