import type { SwarmBackdrop } from "./glass-backdrop.js";
import { type ParticleObject } from "./particle-object.js";
import { type CSSProperties } from "react";
import { type Point, type Shape } from "./shapes.js";
export type PointMotion = "rotate" | "swirl" | "wave" | "pulse" | "orbit";
export type Choreography = "flow" | "scatter" | "direct";
export type DotSwarmProps = {
    shape?: Shape;
    /** Normalized custom geometry, typically within -1…1. Overrides shape. */
    points?: readonly Point[];
    /** Continuous motion for custom geometry; shares speed, pause and reduced-motion controls. */
    motion?: PointMotion;
    count?: number;
    color?: string;
    speed?: number;
    choreography?: Choreography;
    /** Arriving morph length in seconds at 1× speed. */
    transitionDuration?: number;
    dotSize?: number;
    /** Individual particle artwork. Omit for the original batched circles. */
    particle?: ParticleObject;
    /** Canvas scene behind the swarm. Glass refracts this scene, not surrounding DOM. */
    backdrop?: SwarmBackdrop;
    spread?: number;
    paused?: boolean;
    interactive?: boolean;
    reducedMotion?: boolean;
    className?: string;
    style?: CSSProperties;
    label?: string;
    onTransitionChange?: (transitioning: boolean) => void;
    /** Availability of the GPU renderer used for metal, neon, and glass. */
    onMaterialStatus?: (status: "ready" | "unavailable") => void;
};
/** Responsive Canvas renderer. A fixed pool preserves identity and momentum across morphs. */
export declare function DotSwarm({ shape, points, motion, count, color, speed, choreography, transitionDuration, dotSize, particle, backdrop, spread, paused, interactive, reducedMotion, className, style, label, onTransitionChange, onMaterialStatus, }: DotSwarmProps): import("react").JSX.Element;
