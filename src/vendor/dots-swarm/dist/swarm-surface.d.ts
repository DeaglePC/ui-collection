import { type CSSProperties, type ReactNode, type RefObject } from "react";
import { SwarmPhysics, type SwarmBurst, type PhysicsPoint } from "./physics.js";
import { type SwarmAction } from "./actions.js";
import { type SurfaceGeometry, type SurfaceBox } from "./surface-geometry.js";
export type SwarmTarget = SurfaceGeometry & {
    /** Optional renderer extension: custom sampled body with a solid finish. */
    renderer?: SwarmSurfaceRenderer;
    /** Stable identity. Change targets without replacing the surface. */
    id: string;
    /** A real element inside the surface; its bounds place the formation. */
    ref: RefObject<HTMLElement | null>;
    weight?: number;
    /** Particle/solid-avatar color. Element targets reveal their own DOM styling. */
    color?: string;
    /** Ordered assembly, in seconds from selecting this set of targets. */
    formation?: {
        delay?: number;
        duration?: number;
    };
};
export type SwarmSurfaceRenderer = {
    sample: (box: SurfaceBox, count: number, time: number, gaze: {
        x: number;
        y: number;
    }, tension: number) => PhysicsPoint[];
    paint: (ctx: CanvasRenderingContext2D, box: SurfaceBox, time: number, gaze: {
        x: number;
        y: number;
    }, opacity: number, tension: number) => void;
};
export type SwarmObstacle = ({
    ref: RefObject<HTMLElement | null>;
} | {
    selector: string;
}) & {
    kind: "text" | "box";
};
export type SwarmBurstPhase = "charging" | "scattered" | "gathering" | "settled";
export type SwarmSurfaceBurst = Partial<SwarmBurst> & {
    /** Seconds of compression and tension before the impulse. */
    anticipation?: number;
    /** Seconds of free physics before attraction resumes. */
    duration?: number;
    /** Seconds to gradually restore the attraction force. */
    reassemble?: number;
};
export type SwarmSurfaceHandle = {
    /** Perform an action on this pool. A new action replaces the current action. */
    act: (action: SwarmAction) => void;
    /** Legacy explosion + automatic return. Prefer separate explode/reform actions. */
    burst: (options?: SwarmSurfaceBurst) => void;
    /** Refresh measurements after an external layout/font change. */
    refresh: () => void;
};
export type SwarmSurfaceProps = {
    /** Supply a solver extension. Memoize the factory to preserve the pool. */
    createPhysics?: (points: readonly PhysicsPoint[]) => SwarmPhysics;
    targets: readonly SwarmTarget[];
    colliders?: readonly SwarmObstacle[];
    /** Render above the page, with viewport bounds and viewport-space coordinates. */
    viewport?: boolean;
    onBurstPhaseChange?: (phase: SwarmBurstPhase) => void;
    onActionPhaseChange?: (phase: SwarmBurstPhase, action: SwarmAction) => void;
    /** Explode/rain completion is a cue; only reform brings particles back. */
    onActionComplete?: (action: SwarmAction) => void;
    mode?: "form" | "physics";
    count?: number;
    gravity?: number;
    wind?: number;
    restitution?: number;
    spring?: number;
    damping?: number;
    color?: string;
    rainbow?: boolean;
    dotSize?: number;
    paused?: boolean;
    reducedMotion?: boolean;
    interactive?: boolean;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
};
/** One particle pool for shapes, gravity, and real DOM controls.
 * The canvas is decorative; children retain their native semantics and focus.
 */
export declare const SwarmSurface: import("react").ForwardRefExoticComponent<SwarmSurfaceProps & import("react").RefAttributes<SwarmSurfaceHandle>>;
