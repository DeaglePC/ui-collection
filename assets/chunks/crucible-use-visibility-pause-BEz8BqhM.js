const e=[{path:"registry/default/hooks/use-visibility-pause/use-visibility-pause.ts",language:"tsx",content:`"use client";

import * as React from "react";

/**
 * Drives a requestAnimationFrame loop that automatically pauses when the
 * element scrolls offscreen (IntersectionObserver) or the tab is hidden
 * (document.visibilitychange). Mandatory for every shader/canvas/R3F
 * component — offscreen WebGL must never burn GPU time.
 *
 * \`tick\` receives elapsed seconds since the loop started. Offscreen and
 * hidden-tab pauses are excluded (the clock resumes where it stopped), but
 * changing the \`paused\` option restarts the loop and the clock from 0 —
 * one-shot reveals rely on that to replay; continuous effects that must not
 * jump on un-pause should carry their own time offset across the toggle.
 * Returns a ref to attach to the observed element.
 */
export function useVisibilityPause<T extends HTMLElement>(
  tick: (elapsedSeconds: number) => void,
  { paused = false }: { paused?: boolean } = {}
): React.RefObject<T | null> {
  const ref = React.useRef<T>(null);
  const tickRef = React.useRef(tick);
  tickRef.current = tick;
  // Accumulated running time survives effect re-runs (e.g. toggling \`paused\`),
  // so un-pausing resumes the clock instead of snapping back to 0.
  const elapsedRef = React.useRef(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let running = false;
    let visible = false;
    let last = 0;

    const loop = (now: number) => {
      if (!running) return;
      // Clamp at 0: a rAF timestamp can predate the performance.now() that
      // armed the loop by a fraction of a frame.
      elapsedRef.current += Math.max(0, now - last) / 1000;
      last = now;
      tickRef.current(elapsedRef.current);
      raf = requestAnimationFrame(loop);
    };

    const sync = () => {
      const shouldRun = visible && !document.hidden && !paused;
      if (shouldRun && !running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(loop);
      } else if (!shouldRun && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    io.observe(el);
    document.addEventListener("visibilitychange", sync);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, [paused]);

  return ref;
}
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
