import type { SwarmBurst } from "./physics.js";
import type { SwarmTarget } from "./swarm-surface.js";
export type SwarmActionPhysics = {
    gravity?: number;
    wind?: number;
    restitution?: number;
};
export type ExplodeOptions = Partial<SwarmBurst> & SwarmActionPhysics & {
    /** Seconds of tension before release. */
    anticipation?: number;
    /** Seconds after release before onActionComplete fires. Particles stay free. */
    duration?: number;
};
export type RainOptions = SwarmActionPhysics & {
    /** Optional completion cue. Rain continues until a reform action. */
    duration?: number;
};
export type ReformOptions = {
    /** Omit to return to the current targets. New targets may be shapes, DOM or avatars. */
    targets?: readonly SwarmTarget[];
    /** Seconds over which attraction returns. Completion waits for arrival. */
    duration?: number;
};
export type SwarmAction = ({
    type: "explode";
} & ExplodeOptions) | ({
    type: "rain";
} & RainOptions) | ({
    type: "reform";
} & ReformOptions);
export type SwarmActionPhase = "charging" | "scattered" | "gathering" | "settled";
/** Targets describe a destination. Actions operate on the particles already there. */
export declare const swarmActions: {
    explode: (options?: ExplodeOptions) => SwarmAction;
    rain: (options?: RainOptions) => SwarmAction;
    reform: (options?: ReformOptions) => SwarmAction;
};
