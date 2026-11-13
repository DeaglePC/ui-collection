/**
 * Crucible · Quench
 * MIT License · Copyright (c) 2026 Crucible (crucibleui.com)
 * https://crucibleui.com · https://crucibleui.com/r/quench.json
 */
"use client";

import { AnimatePresence, motion, type HTMLMotionProps } from "motion/react";
import * as React from "react";

import { useReducedMotion } from "../use-reduced-motion";
import { cn } from "../cn";

export interface QuenchProps extends Omit<HTMLMotionProps<"button">, "onClick" | "children"> {
  /** Shockwave color. Any CSS color. @default white */
  color?: string;
  /** Seconds the ripple takes to fully dissipate. @default 0.7 */
  duration?: number;
  /** Show three spark particles ejected from the click point. @default true */
  sparks?: boolean;
  /** Fires after the ripple's originating click/keyboard-activation. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Button label / content. */
  children?: React.ReactNode;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
  /** True when triggered by keyboard activation (no pointer coordinates available). */
  keyboard: boolean;
}

/**
 * Quench — a click ripple that expands from the exact point of contact: a
 * thin white shockwave, a briefly desaturated "cooled" interior, and a
 * scatter of white spark particles. At rest the face carries a soft top
 * light and a slow-breathing edge glow; hovering primes it — the edge
 * light warms up on a spring before the strike. Keyboard activation
 * (Enter/Space) ripples from the button's center. Falls back to a plain
 * opacity pulse under prefers-reduced-motion.
 */
export function Quench({
  color = "#ffffff",
  duration = 0.7,
  sparks = true,
  className,
  style,
  onClick,
  children,
  ...rest
}: QuenchProps) {
  const reducedMotion = useReducedMotion();
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [ripples, setRipples] = React.useState<Ripple[]>([]);
  const nextId = React.useRef(0);
  const timers = React.useRef(new Set<number>());
  React.useEffect(() => {
    const pending = timers.current;
    return () => {
      pending.forEach((t) => window.clearTimeout(t));
      pending.clear();
    };
  }, []);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const el = buttonRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      // A keyboard-activated click carries no real pointer position (browsers
      // report clientX/clientY as 0, and detail is 0 for non-pointer clicks).
      const isKeyboard = event.detail === 0;
      const x = isKeyboard ? rect.width / 2 : event.clientX - rect.left;
      const y = isKeyboard ? rect.height / 2 : event.clientY - rect.top;
      const size = Math.hypot(Math.max(x, rect.width - x), Math.max(y, rect.height - y)) * 2.2;

      const id = nextId.current++;
      setRipples((prev) => [...prev, { id, x, y, size, keyboard: isKeyboard }]);
      // The shockwave ring lives slightly past `duration` (1.2x) so it reads
      // fully before unmount.
      const timer = window.setTimeout(() => {
        timers.current.delete(timer);
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, duration * 1200);
      timers.current.add(timer);
    }
    onClick?.(event);
  };

  return (
    <motion.button
      ref={buttonRef}
      data-crucible="quench"
      initial="idle"
      animate="idle"
      whileHover="hover"
      whileTap={reducedMotion ? undefined : { scale: 0.97 }}
      className={cn(
        "relative isolate inline-flex items-center justify-center overflow-hidden rounded-lg",
        "border border-neutral-800 bg-neutral-900 px-6 py-3 text-sm font-medium text-white",
        "select-none transition-colors duration-200",
        "hover:border-[color:var(--quench-hover-border)] hover:bg-neutral-800",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
        "focus-visible:ring-[color:var(--quench-color)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      style={
        {
          "--quench-color": color,
          "--quench-hover-border": `color-mix(in oklab, ${color} 45%, #262626)`,
          ...style,
        } as React.CSSProperties
      }
      onClick={handleClick}
      {...rest}
    >
      {/* Idle life: a soft top light so the face never reads as a flat slab. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, rgba(255,255,255,0.07), transparent 55%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 -1px 0 rgba(0,0,0,0.35)",
        }}
      />
      {/* Barely-breathing edge glow (static under reduced motion). */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          boxShadow: `inset 0 0 0 1px color-mix(in oklab, ${color} 12%, transparent), inset 0 -8px 18px -12px color-mix(in oklab, ${color} 22%, transparent)`,
        }}
        animate={reducedMotion ? { opacity: 0.7 } : { opacity: [0.4, 0.85, 0.4] }}
        transition={
          reducedMotion
            ? { duration: 0.2 }
            : { duration: 4.4, repeat: Infinity, ease: "easeInOut" }
        }
      />
      {/* Hover primer: the edge light warms up before the strike. */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          background: `radial-gradient(130% 100% at 50% 0%, color-mix(in oklab, ${color} 9%, transparent), transparent 60%)`,
          boxShadow: `inset 0 0 0 1px color-mix(in oklab, ${color} 38%, transparent), inset 0 -12px 24px -14px color-mix(in oklab, ${color} 32%, transparent), inset 0 1px 0 color-mix(in oklab, ${color} 30%, transparent)`,
        }}
        variants={{ idle: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={
          reducedMotion
            ? { duration: 0.2, ease: "easeOut" }
            : { type: "spring", stiffness: 260, damping: 28 }
        }
      />
      <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
        <AnimatePresence>
          {ripples.map((ripple) =>
            reducedMotion ? (
              <motion.span
                key={ripple.id}
                className="absolute rounded-full"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  translateX: "-50%",
                  translateY: "-50%",
                  width: ripple.size * 0.4,
                  height: ripple.size * 0.4,
                  background: `color-mix(in oklab, ${color} 40%, transparent)`,
                }}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            ) : (
              <React.Fragment key={ripple.id}>
                {/* Shockwave ring */}
                <motion.span
                  className="absolute rounded-full"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    translateX: "-50%",
                    translateY: "-50%",
                    border: `2.5px solid color-mix(in oklab, ${color} 85%, white)`,
                    boxShadow: `0 0 10px 1px color-mix(in oklab, ${color} 55%, transparent), inset 0 0 6px 0 color-mix(in oklab, ${color} 40%, transparent)`,
                  }}
                  initial={{ width: 0, height: 0, opacity: 1 }}
                  animate={{ width: ripple.size, height: ripple.size, opacity: 0 }}
                  transition={{ duration: duration * 1.15, ease: [0.15, 0.65, 0.3, 1] }}
                />
                {/* Cooled interior: a darker, briefly desaturated core */}
                <motion.span
                  className="absolute rounded-full"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    translateX: "-50%",
                    translateY: "-50%",
                    background:
                      "radial-gradient(circle, rgba(10,10,12,0.55) 0%, rgba(10,10,12,0) 70%)",
                  }}
                  initial={{ width: 0, height: 0, opacity: 1 }}
                  animate={{ width: ripple.size * 0.75, height: ripple.size * 0.75, opacity: 0 }}
                  transition={{ duration: duration * 0.8, ease: "easeOut" }}
                />
                {/* Spark particles */}
                {sparks &&
                  [0, 1, 2].map((i) => {
                    const angle = ripple.keyboard
                      ? (i / 3) * Math.PI * 2 + Math.PI / 6
                      : (i / 3) * Math.PI * 2 + (ripple.id % 7);
                    const dist = ripple.size * 0.22;
                    return (
                      <motion.span
                        key={i}
                        className="absolute h-[3px] w-[3px] rounded-full"
                        style={{
                          left: ripple.x,
                          top: ripple.y,
                          background: color,
                          boxShadow: `0 0 4px 1px ${color}`,
                        }}
                        initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                        animate={{
                          x: Math.cos(angle) * dist,
                          y: Math.sin(angle) * dist,
                          opacity: 0,
                          scale: 0.3,
                        }}
                        transition={{ duration: duration * 0.65, ease: "easeOut" }}
                      />
                    );
                  })}
              </React.Fragment>
            )
          )}
        </AnimatePresence>
      </span>

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
