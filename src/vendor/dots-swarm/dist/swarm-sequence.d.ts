import { type CSSProperties } from "react";
import { type SwarmKeyframe } from "./sequence.js";
export type SwarmSequenceProps = {
    /** Keep this array stable (module constant or useMemo) to avoid rematching geometry. */
    keyframes: readonly SwarmKeyframe[];
    /** Controlled normalized playhead; scrolling, GSAP, or any clock can drive it. */
    progress: number;
    /** Fixed pool size. Animate keyframe density instead of changing this during playback. */
    count?: number;
    interactive?: boolean;
    /** Keep native shape motion playing independently of the progress playhead. */
    animate?: boolean;
    paused?: boolean;
    /** Rate of the live formation clock. Does not change timeline progress. */
    animationSpeed?: number;
    reducedMotion?: boolean;
    className?: string;
    style?: CSSProperties;
    label?: string;
};
/** Seekable Canvas animation with an optional independent live formation clock. */
export declare function SwarmSequence({ keyframes, progress, count, interactive, animate, paused, animationSpeed, reducedMotion, className, style, label, }: SwarmSequenceProps): import("react").JSX.Element;
