/**
 * Crucible · Piston
 * MIT License · Copyright (c) 2026 Crucible (crucibleui.com)
 * https://crucibleui.com · https://crucibleui.com/r/piston.json
 */
"use client";

import { AnimatePresence, motion, type HTMLMotionProps, type Transition } from "motion/react";
import * as React from "react";

import { useReducedMotion } from "../use-reduced-motion";
import { cn } from "../cn";

export type PistonState = "idle" | "pending" | "success" | "error";

export interface PistonProps
  extends Omit<HTMLMotionProps<"button">, "onClick" | "children" | "animate" | "transition"> {
  /**
   * Async click handler — return a promise and Piston runs the whole
   * lifecycle for you: pending while in flight, success/error on settle,
   * back to idle after the dwell. A sync handler leaves the button idle.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<unknown>;
  /**
   * Controlled state. When set, the internal machine is off: Piston renders
   * exactly this state and you own every transition (onClick still fires).
   */
  state?: PistonState;
  /** Idle label. @default "Submit" */
  children?: React.ReactNode;
  /** Pending content. @default a neutral spinner */
  pendingContent?: React.ReactNode;
  /** Success content. @default a self-drawing check */
  successContent?: React.ReactNode;
  /** Error / retry label — the button stays live so a click retries. @default "Retry" */
  errorContent?: React.ReactNode;
  /** Contract the button toward a circle while pending. @default false */
  contractToCircle?: boolean;
  /** Seconds the success state dwells before the label returns. @default 1.6 */
  successDwell?: number;
  /** Error shake amplitude multiplier — 0 disables the shake. @default 1 */
  shakeIntensity?: number;
  /** Spring for the axial content slide and the width breath. @default { stiffness: 520, damping: 34 } */
  spring?: { stiffness?: number; damping?: number };
  /** Really disable the button (not just visually) while pending. @default true */
  disabledWhilePending?: boolean;
  /** The only saturated moments. @default { success: "#34d399", error: "#f87171" } */
  colors?: { success?: string; error?: string };
  /** Button size. @default "md" */
  size?: "sm" | "md" | "lg";
}

const SIZES = {
  sm: { height: 36, padX: 18, radius: 8, text: "text-xs" },
  md: { height: 44, padX: 24, radius: 10, text: "text-sm" },
  lg: { height: 52, padX: 30, radius: 12, text: "text-base" },
} as const;

/** Draws itself with a single stroke, then lands with a 1-frame settle. */
function Check({ color, reduced }: { color: string; reduced: boolean }) {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 24 24"
      width="1.25em"
      height="1.25em"
      fill="none"
      className="block"
      initial={reduced ? false : { scale: 0.9 }}
      animate={reduced ? { scale: 1 } : { scale: [0.9, 1.07, 1] }}
      transition={reduced ? { duration: 0 } : { duration: 0.45, times: [0, 0.88, 1], ease: "easeOut" }}
    >
      <motion.path
        d="M5 12.5 L10 17.5 L19 7"
        stroke={color}
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduced ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={reduced ? { duration: 0 } : { duration: 0.32, ease: [0.65, 0, 0.35, 1] }}
      />
    </motion.svg>
  );
}

/** Neutral spinner — a rotating ring, or an opacity pulse under reduced motion. */
function Spinner({ reduced }: { reduced: boolean }) {
  return reduced ? (
    <motion.span
      aria-hidden
      className="block h-[1.1em] w-[1.1em] rounded-full border-2 border-current"
      animate={{ opacity: [0.3, 0.9, 0.3] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
    />
  ) : (
    <motion.span
      aria-hidden
      className="block h-[1.1em] w-[1.1em] rounded-full border-2 border-current border-t-transparent opacity-80"
      animate={{ rotate: 360 }}
      transition={{ duration: 0.75, repeat: Infinity, ease: "linear" }}
    />
  );
}

/**
 * Piston — a stateful submit button that runs its async lifecycle like a
 * piston stroke: the label slides out along one axis as the spinner slides
 * in, the button's width breathing around each state's content — mechanical
 * and axial, never a fade-in-place. On resolve the spinner gives way to a
 * check that draws itself in a single stroke and lands with a 1-frame
 * settle; rejection plays a distinct beat — a shake and an error tint —
 * and leaves a live retry label. Success and error are the only saturated
 * moments and both cool back to the neutral chrome. Honest a11y: aria-busy
 * while pending, a polite live announcement on resolution, and a real
 * disabled state. Reduced motion: instant state swaps, no shake, spinner
 * as an opacity pulse only.
 */
export function Piston({
  onClick,
  state,
  children,
  pendingContent,
  successContent,
  errorContent,
  contractToCircle = false,
  successDwell = 1.6,
  shakeIntensity = 1,
  spring,
  disabledWhilePending = true,
  colors,
  size = "md",
  className,
  style,
  disabled,
  ...rest
}: PistonProps) {
  const reducedMotion = useReducedMotion();
  const successColor = colors?.success ?? "#34d399";
  const errorColor = colors?.error ?? "#f87171";
  const stiffness = spring?.stiffness ?? 520;
  const damping = spring?.damping ?? 34;
  const dims = SIZES[size];

  const controlled = state !== undefined;
  const [internal, setInternal] = React.useState<PistonState>("idle");
  const status: PistonState = controlled ? state : internal;
  // Monotonic run token: a click supersedes any in-flight settle or dwell.
  const runId = React.useRef(0);
  const dwellTimer = React.useRef<number | null>(null);

  const clearDwell = React.useCallback(() => {
    if (dwellTimer.current !== null) {
      window.clearTimeout(dwellTimer.current);
      dwellTimer.current = null;
    }
  }, []);
  React.useEffect(() => clearDwell, [clearDwell]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Never re-enter an in-flight run, even when disabledWhilePending is off.
    if (status === "pending") return;
    const result = onClick?.(event);
    if (controlled) return;
    if (result && typeof (result as Promise<unknown>).then === "function") {
      const id = ++runId.current;
      clearDwell();
      setInternal("pending");
      (result as Promise<unknown>).then(
        () => {
          if (id !== runId.current) return;
          setInternal("success");
          dwellTimer.current = window.setTimeout(() => {
            if (id === runId.current) setInternal("idle");
          }, successDwell * 1000);
        },
        () => {
          if (id === runId.current) setInternal("error");
        }
      );
    }
  };

  const content: Record<PistonState, React.ReactNode> = {
    idle: children ?? "Submit",
    pending: pendingContent ?? <Spinner reduced={reducedMotion} />,
    success: successContent ?? <Check color={successColor} reduced={reducedMotion} />,
    error: errorContent ?? "Retry",
  };

  const announcement =
    status === "success"
      ? typeof successContent === "string"
        ? successContent
        : "Success"
      : status === "error"
        ? typeof errorContent === "string"
          ? `Failed — ${errorContent.toLowerCase()}`
          : "Something went wrong — press to retry"
        : "";

  const contracted = contractToCircle && status === "pending";
  const springT: Transition = reducedMotion
    ? { duration: 0 }
    : { type: "spring", stiffness, damping };

  // The error beat: a mechanical lateral shake, scaled by intensity.
  const amp = 6 * shakeIntensity;
  const shakeX =
    status === "error" && !reducedMotion && shakeIntensity > 0
      ? [0, -amp, amp * 0.85, -amp * 0.6, amp * 0.35, 0]
      : 0;

  return (
    <motion.button
      data-crucible="piston"
      layout={!reducedMotion}
      aria-busy={status === "pending" || undefined}
      disabled={disabled || (disabledWhilePending && status === "pending")}
      whileTap={reducedMotion || status === "pending" ? undefined : { scale: 0.97 }}
      animate={{ x: shakeX }}
      transition={{ layout: springT, x: { duration: 0.4, ease: "easeInOut" } }}
      className={cn(
        "relative isolate inline-flex items-center justify-center overflow-hidden",
        "border border-neutral-800 bg-neutral-900 font-medium text-neutral-100",
        dims.text,
        "select-none transition-colors duration-200",
        "hover:border-neutral-700 hover:bg-neutral-800",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
        "disabled:cursor-not-allowed",
        className
      )}
      style={{
        height: dims.height,
        width: contracted ? dims.height : "auto",
        paddingLeft: contracted ? 0 : dims.padX,
        paddingRight: contracted ? 0 : dims.padX,
        borderRadius: contracted ? dims.height / 2 : dims.radius,
        ...style,
      }}
      onClick={handleClick}
      {...rest}
    >
      {/* Soft top light so the neutral face never reads as a flat slab. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          background: "radial-gradient(120% 90% at 50% 0%, rgba(255,255,255,0.06), transparent 55%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 -1px 0 rgba(0,0,0,0.35)",
        }}
      />
      {/* Success tint: flashes saturated on the settle, then cools to neutral. */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          boxShadow: `inset 0 0 0 1px color-mix(in oklab, ${successColor} 70%, transparent), inset 0 -10px 22px -12px color-mix(in oklab, ${successColor} 55%, transparent), 0 0 16px -6px color-mix(in oklab, ${successColor} 60%, transparent)`,
        }}
        initial={false}
        animate={
          status === "success"
            ? { opacity: reducedMotion ? 0.4 : [0, 0.95, 0.25] }
            : { opacity: 0 }
        }
        transition={
          status === "success" && !reducedMotion
            ? { duration: 0.9, times: [0, 0.3, 1], ease: "easeOut" }
            : { duration: 0.25 }
        }
      />
      {/* Error tint: a distinct flash that cools to a faint standing warning. */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          boxShadow: `inset 0 0 0 1px color-mix(in oklab, ${errorColor} 70%, transparent), inset 0 -10px 22px -12px color-mix(in oklab, ${errorColor} 50%, transparent), 0 0 16px -6px color-mix(in oklab, ${errorColor} 55%, transparent)`,
        }}
        initial={false}
        animate={
          status === "error"
            ? { opacity: reducedMotion ? 0.45 : [0, 1, 0.35] }
            : { opacity: 0 }
        }
        transition={
          status === "error" && !reducedMotion
            ? { duration: 0.9, times: [0, 0.25, 1], ease: "easeOut" }
            : { duration: 0.25 }
        }
      />

      {/* Axial viewport: content strokes vertically through, clipped at the lips. */}
      <motion.span
        layout={!reducedMotion}
        className="relative z-10 flex h-full items-center justify-center overflow-hidden"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={status}
            className="flex items-center justify-center whitespace-nowrap"
            style={
              status === "error"
                ? { color: `color-mix(in oklab, ${errorColor} 55%, white)` }
                : undefined
            }
            initial={reducedMotion ? { y: 0 } : { y: "130%" }}
            animate={{ y: 0 }}
            exit={reducedMotion ? { y: 0, transition: { duration: 0 } } : { y: "-130%" }}
            transition={springT}
          >
            {content[status]}
          </motion.span>
        </AnimatePresence>
      </motion.span>

      {/* Honest resolution announcement for assistive tech. */}
      <span role="status" aria-live="polite" className="sr-only">
        {announcement}
      </span>
    </motion.button>
  );
}
