/** A small, renderer-independent 2D particle solver. All units are CSS pixels. */
export type PhysicsPoint = {
    x: number;
    y: number;
    opacity?: number;
};
export type SwarmParticle = PhysicsPoint & {
    vx: number;
    vy: number;
};
export type SwarmCollider = {
    contains: (x: number, y: number) => boolean;
    /** Optional broad-phase bounds, used to avoid unnecessary mask lookups. */
    bounds?: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
};
export type PhysicsStep = {
    targets?: readonly PhysicsPoint[];
    colliders?: readonly SwarmCollider[];
    gravity?: number;
    wind?: number;
    spring?: number;
    damping?: number;
    restitution?: number;
    bounds?: {
        width: number;
        height: number;
        top?: boolean;
    };
};
export type SwarmBurst = {
    x: number;
    y: number;
    strength?: number;
    radius?: number;
    /** 0–1 variation in direction and speed; 0 keeps a uniform radial impulse. */
    spread?: number;
};
export declare function createRectCollider(x: number, y: number, width: number, height: number): SwarmCollider;
export declare class SwarmPhysics {
    readonly particles: SwarmParticle[];
    constructor(points: readonly PhysicsPoint[]);
    burst({ x, y, strength, radius, spread }: SwarmBurst): void;
    /** Clamped, sub-stepped integration with swept point/mask collisions. */
    step(delta: number, options?: PhysicsStep): void;
}
