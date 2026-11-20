import { type HTMLAttributes, type RefObject } from "react";
import type { DotsSequence } from "./dots-sequence.js";
type ElementRef = RefObject<HTMLElement | null>;
export type SwarmScrollOffset = number | (() => number);
export type SwarmScrollEdge = "top" | "center" | "bottom" | number;
/** [target edge, viewport edge]. Numeric edges are fractions, e.g. 0.8. */
export type SwarmScrollBoundary = readonly [SwarmScrollEdge, SwarmScrollEdge];
export type SwarmScrollSnapshot = {
    progress: number;
    rawProgress: number;
    active: boolean;
    direction: 1 | -1;
};
export type SwarmScrollTrigger = {
    at: number;
    direction?: "forward" | "backward" | "both";
    once?: boolean;
    onCross: (snapshot: SwarmScrollSnapshot) => void;
};
export type SwarmScrollOptions = {
    target: ElementRef;
    /** Omit for document scrolling; otherwise use an overflow scroll container. */
    container?: ElementRef;
    start?: SwarmScrollBoundary;
    end?: SwarmScrollBoundary;
    /** Reserved space above the viewport, such as a sticky header. */
    offset?: SwarmScrollOffset;
    enabled?: boolean;
    reducedMotion?: boolean;
    /** true = direct scrubbing; a number adds that many seconds of catch-up. */
    scrub?: true | number;
    /** Optional DotsSequence binding. Takes over its clock until disconnected. */
    sequence?: DotsSequence;
    triggers?: readonly SwarmScrollTrigger[];
    onUpdate?: (snapshot: SwarmScrollSnapshot) => void;
    onEnter?: (snapshot: SwarmScrollSnapshot) => void;
    onLeave?: (snapshot: SwarmScrollSnapshot) => void;
    onEnterBack?: (snapshot: SwarmScrollSnapshot) => void;
    onLeaveBack?: (snapshot: SwarmScrollSnapshot) => void;
};
/** Scroll drives progress; the renderer can keep animating a completed shape. */
export declare function useSwarmScroll(options: SwarmScrollOptions): {
    progress: number;
    rawProgress: number;
    active: boolean;
    direction: 1 | -1;
    refresh: () => void;
    scrollTo: (progress: number, behavior?: ScrollBehavior) => void;
};
export type SwarmScrollPinProps = HTMLAttributes<HTMLDivElement> & {
    offset?: SwarmScrollOffset;
    reducedMotion?: boolean;
    /** Keep the panel at viewport height below the header. */
    fullHeight?: boolean;
};
/** Native sticky positioning. The parent supplies the scroll distance. */
export declare function SwarmScrollPin({ offset, reducedMotion, fullHeight, style, ...props }: SwarmScrollPinProps): import("react").JSX.Element;
export type SwarmScrollStopsProps = {
    points: readonly number[];
    offset?: SwarmScrollOffset;
    reducedMotion?: boolean;
};
/** Snap markers align with useSwarmScroll's default top/top → bottom/bottom range. */
export declare function SwarmScrollStops({ points, offset, reducedMotion }: SwarmScrollStopsProps): import("react").JSX.Element | null;
export type SwarmScrollSnapOptions = {
    /** Omit to configure document scrolling. */
    container?: ElementRef;
    /** CSS selector for the sections to align, or explicit element refs. */
    points: string | readonly ElementRef[];
    offset?: SwarmScrollOffset;
    enabled?: boolean;
    type?: "proximity" | "mandatory";
};
/** Opt-in native snapping. Never intercepts wheel, touch or keyboard scrolling. */
export declare function useSwarmScrollSnap(options: SwarmScrollSnapOptions): void;
export {};
