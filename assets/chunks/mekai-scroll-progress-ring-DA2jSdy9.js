const e=[{path:"scroll-progress-ring.tsx",language:"tsx",content:`"use client";

import { useEffect, useRef, useState, type MouseEvent, type RefObject } from "react";

export type ScrollProgressRingProps = {
  /** Scrolling element to follow. Leave it out to follow the page. With a target the ring is absolutely positioned, so wrap both in a relative parent. */
  target?: RefObject<HTMLElement | null>;
  /** Diameter of the ring, in pixels. */
  size?: number;
  /** Thickness of the line, in pixels. */
  thickness?: number;
  /** Color of the progress line and of the finished button. */
  color?: string;
  /** Color of the arrow on the finished button. */
  iconColor?: string;
  /** Show the percentage inside the ring. */
  showPercent?: boolean;
  /** Progress at which the ring appears, from 0 to 1. */
  showAfter?: number;
  /** Progress at which it turns into the back-to-top button, from 0 to 1. */
  endAt?: number;
  /** Corner of the page it floats in. */
  side?: "left" | "right";
  /** Distance from the corner, in pixels. */
  offset?: number;
  /** Accessible name of the button. */
  label?: string;
  /** Called when the button is pressed. */
  onBackToTop?: () => void;
  className?: string;
};

const EASE = "ease-[cubic-bezier(0.2,0.9,0.25,1.2)]";

/** A floating ring that shows how far a page has been read and turns into a back-to-top button at the end. */
export function ScrollProgressRing({
  target,
  size = 56,
  thickness = 3,
  color = "#ff784f",
  iconColor = "#070606",
  showPercent = true,
  showAfter = 0.03,
  endAt = 0.985,
  side = "right",
  offset = 24,
  label = "Back to top",
  onBackToTop,
  className = "",
}: ScrollProgressRingProps) {
  const button = useRef<HTMLButtonElement>(null);
  const line = useRef<SVGCircleElement>(null);
  const percent = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const scroller = target?.current ?? null;
    const metrics = scroller ?? document.documentElement;
    let frame = 0;
    let shown = -1;

    // Scrolling writes straight to the DOM. React only renders when the ring appears or finishes.
    const read = () => {
      frame = 0;
      const range = metrics.scrollHeight - metrics.clientHeight;
      const top = scroller ? scroller.scrollTop : window.scrollY;
      const progress = range > 1 ? Math.min(1, Math.max(0, top / range)) : 0;
      const whole = Math.round(progress * 100);
      if (line.current) line.current.style.strokeDashoffset = String(1 - progress);
      if (whole !== shown) {
        shown = whole;
        if (percent.current) percent.current.textContent = String(whole);
        button.current?.setAttribute("aria-label", \`\${label}. \${whole}% read.\`);
      }
      setVisible(range > 1 && progress >= showAfter);
      setDone(range > 1 && progress >= endAt);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(read);
    };

    const source = scroller ?? window;
    source.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    // Images and late content change the length of the page without a scroll.
    const resize = new ResizeObserver(schedule);
    if (scroller) Array.from(scroller.children).forEach((child) => resize.observe(child));
    else resize.observe(document.documentElement);
    schedule();

    return () => {
      cancelAnimationFrame(frame);
      source.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      resize.disconnect();
    };
  }, [endAt, label, showAfter, target]);

  function toTop(e: MouseEvent<HTMLButtonElement>) {
    const scroller = target?.current ?? null;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    (scroller ?? window).scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    // The button hides at the top, so keyboard focus moves to the start of the content.
    if (e.detail === 0) {
      const home = scroller ?? document.body;
      if (!home.hasAttribute("tabindex")) {
        home.setAttribute("tabindex", "-1");
        home.style.setProperty("outline", "none");
        home.addEventListener(
          "blur",
          () => {
            home.removeAttribute("tabindex");
            home.style.removeProperty("outline");
          },
          { once: true },
        );
      }
      home.focus({ preventScroll: true });
    }
    onBackToTop?.();
  }

  const radius = (size - thickness) / 2;

  return (
    <button
      ref={button}
      type="button"
      aria-label={label}
      onClick={toTop}
      className={\`group \${target ? "absolute" : "fixed"} z-50 grid place-items-center rounded-full shadow-[0_14px_34px_-12px_rgb(0_0_0/0.85)] transition-[opacity,scale,visibility] duration-300 focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ember \${EASE} \${
        visible ? "visible scale-100 opacity-100 hover:scale-105 active:scale-95" : "invisible scale-75 opacity-0"
      } \${className}\`}
      style={{
        width: size,
        height: size,
        [side]: offset,
        bottom: \`calc(\${offset}px + env(safe-area-inset-bottom, 0px))\`,
      }}
    >
      <span aria-hidden="true" className="absolute inset-0 rounded-full bg-ink-850/90 backdrop-blur-md" />
      <span
        aria-hidden="true"
        className={\`absolute inset-0 rounded-full transition-[scale] duration-500 \${EASE}\`}
        style={{ background: color, scale: done ? 1 : 0 }}
      />
      <svg aria-hidden="true" width={size} height={size} className="absolute inset-0 -rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgb(255 255 255 / 0.12)" strokeWidth={thickness} />
        {/* pathLength lets the dash work in fractions of the circle, whatever its size. */}
        <circle
          ref={line}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1}
          className="transition-[stroke-dashoffset] duration-150 ease-out"
        />
      </svg>
      {showPercent ? (
        <span
          aria-hidden="true"
          className={\`absolute inset-0 grid place-items-center font-display font-bold tabular-nums text-bone transition-[opacity,scale] duration-200 \${
            done ? "scale-50 opacity-0" : "group-hover:scale-75 group-hover:opacity-0 group-focus-visible:scale-75 group-focus-visible:opacity-0"
          }\`}
          style={{ fontSize: Math.max(10, size * 0.23) }}
        >
          <span>
            <span ref={percent}>0</span>
            <span className="opacity-60" style={{ fontSize: "0.72em" }}>
              %
            </span>
          </span>
        </span>
      ) : null}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: size * 0.4, height: size * 0.4, stroke: done ? iconColor : color }}
        className={\`relative transition-[opacity,translate] duration-300 \${EASE} \${
          done || !showPercent
            ? "translate-y-0 opacity-100"
            : "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
        }\`}
      >
        <path d="M12 19V5M5.5 11.5 12 5l6.5 6.5" />
      </svg>
    </button>
  );
}
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
