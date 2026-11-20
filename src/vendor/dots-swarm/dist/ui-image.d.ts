import { type CSSProperties } from "react";
export type SwarmImageTrigger = "hover" | "click" | "focus" | "in-view" | "manual";
export type SwarmImageHandle = {
    reveal: () => void;
    conceal: () => void;
    toggle: () => void;
};
export type SwarmImageProps = {
    src: string;
    alt: string;
    /** Hover also supports keyboard focus and tapping on touch screens. */
    trigger?: SwarmImageTrigger;
    revealed?: boolean;
    defaultRevealed?: boolean;
    onRevealedChange?: (revealed: boolean) => void;
    /** Transition duration in seconds. */
    duration?: number;
    dotSize?: number;
    color?: string;
    background?: string;
    aspectRatio?: CSSProperties["aspectRatio"];
    crossOrigin?: "anonymous" | "use-credentials";
    onError?: (error: Error) => void;
    className?: string;
    style?: CSSProperties;
};
/** Conceal an image with dots; reveal or conceal it through events, state, or a ref. */
export declare const SwarmImageReveal: import("react").ForwardRefExoticComponent<SwarmImageProps & import("react").RefAttributes<SwarmImageHandle>>;
