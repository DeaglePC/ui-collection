const e=[{path:"registry/default/navigation/lodestar/lodestar.tsx",language:"tsx",content:`"use client";

import { motion, useMotionValueEvent, useScroll, type HTMLMotionProps } from "motion/react";
import * as React from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export interface LodestarProps
  extends Omit<HTMLMotionProps<"nav">, "children" | "ref" | "animate" | "variants" | "transition"> {
  /** Nav content — links, buttons, a logo, whatever the bar should hold. */
  children: React.ReactNode;
  /**
   * Scroll container to track instead of the window. Pass a ref to an
   * internal \`overflow-y-auto\` element (used by this component's own demo).
   * When provided, Lodestar positions itself \`sticky\` inside that container
   * instead of \`fixed\` to the viewport.
   */
  scrollContainer?: React.RefObject<HTMLElement | null>;
  /** Scroll distance in px from the top before the bar is allowed to hide. @default 80 */
  hideThreshold?: number;
}

/** Scroll speed (px/s) below which direction changes are ignored. */
const MIN_VELOCITY = 60;

/**
 * Lodestar — a floating pill navbar that hides on scroll down and reveals on
 * scroll up, scroll-velocity aware via \`useScroll\`/\`useMotionValueEvent\` (slow
 * drift below ~60px/s never toggles it). It
 * never hides while any child has \`:focus-visible\`, so keyboard users never
 * lose the bar mid-navigation. Collapses to an instant (non-springy)
 * transition under \`prefers-reduced-motion\` — it still hides/shows, since
 * that's the component's function, but without the springy travel.
 */
export function Lodestar({
  children,
  className,
  scrollContainer,
  hideThreshold = 80,
  ...props
}: LodestarProps) {
  const reducedMotion = useReducedMotion();
  const navRef = React.useRef<HTMLElement | null>(null);
  const [hidden, setHidden] = React.useState(false);

  const { scrollY } = useScroll(scrollContainer ? { container: scrollContainer } : undefined);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? latest;
    const scrollingDown = latest > previous;
    // Velocity gate: slow drift and trackpad jitter (< MIN_VELOCITY px/s, in
    // small steps) never toggles the bar — a deliberate scroll or a discrete
    // jump (PageDown, anchor) in either direction does.
    const velocity = Math.abs(scrollY.getVelocity());
    if (velocity < MIN_VELOCITY && Math.abs(latest - previous) < 12 && latest >= hideThreshold) return;

    setHidden((wasHidden) => {
      if (latest < hideThreshold) return false;

      const activeElement = typeof document !== "undefined" ? document.activeElement : null;
      const focusedInside =
        !!navRef.current &&
        !!activeElement &&
        navRef.current.contains(activeElement) &&
        (activeElement as HTMLElement).matches?.(":focus-visible");
      if (focusedInside) return false;

      if (scrollingDown && !wasHidden) return true;
      if (!scrollingDown && wasHidden) return false;
      return wasHidden;
    });
  });

  return (
    <motion.nav
      {...props}
      ref={navRef}
      data-crucible="lodestar"
      onFocusCapture={() => setHidden(false)}
      animate={hidden ? "hidden" : "visible"}
      // Sticky mode centers with mx-auto/w-fit — an x:-50% there shoves the
      // full-width flow box half out of the scroller and clips every item.
      variants={{
        visible: { y: 0, opacity: 1, ...(scrollContainer ? {} : { x: "-50%" }) },
        hidden: { y: "-140%", opacity: 0, ...(scrollContainer ? {} : { x: "-50%" }) },
      }}
      transition={
        reducedMotion
          ? { duration: 0.15, ease: "linear" }
          : { type: "spring", stiffness: 380, damping: 34 }
      }
      className={cn(
        "top-4 z-50 flex items-center gap-1 rounded-full border border-white/10 bg-neutral-950/70 px-2 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md",
        "before:pointer-events-none before:absolute before:inset-x-3 before:bottom-[1px] before:h-px before:bg-white/0 before:transition-colors before:duration-500",
        "data-[hidden=false]:before:bg-white/25",
        scrollContainer ? "sticky mx-auto w-fit" : "fixed left-1/2",
        className
      )}
      data-hidden={hidden}
    >
      {children}
    </motion.nav>
  );
}
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
