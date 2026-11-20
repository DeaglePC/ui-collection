import { type HTMLAttributes } from "react";
import { type DotKeyframe, type DotState, type DotTransition } from "./dot-motion.js";
export type { DotState, DotTransition, DotKeyframe } from "./dot-motion.js";
export interface DotPlayback {
    /** Time within the current iteration, in seconds. */
    currentTime: number;
    duration: number;
    progress: number;
    /** Zero-based destination step; -1 for a dot without a sequence. */
    step: number;
    status: "running" | "paused" | "finished";
}
export interface DotHandle {
    readonly element: HTMLSpanElement | null;
    readonly duration: number;
    /** Resume, or replay from the beginning after completion. */
    play(): void;
    pause(): void;
    restart(): void;
    /** Scrub to seconds and pause. */
    seek(seconds: number): void;
    finish(): void;
}
export interface DotProps extends HTMLAttributes<HTMLSpanElement> {
    initial?: DotState;
    /** Animate to a new state. Updates start from the current visible appearance. */
    animate?: DotState;
    /** Ordered destinations. Takes precedence over animate. Changes restart the sequence. */
    sequence?: readonly DotKeyframe[];
    transition?: DotTransition;
    paused?: boolean;
    loop?: boolean;
    /** Playback multiplier. Defaults to 1. */
    speed?: number;
    /** Also respects the operating system preference. Shows the final state. */
    reducedMotion?: boolean;
    /** Optional accessible name for a visual dot. For interactive children, use normal HTML semantics instead. */
    label?: string;
    onUpdate?: (playback: DotPlayback) => void;
    onComplete?: () => void;
}
/** One persistent, clipped surface. No canvas, stylesheet, or animation dependency. */
export declare const Dot: import("react").ForwardRefExoticComponent<DotProps & import("react").RefAttributes<DotHandle>>;
