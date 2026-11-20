import { type Point, type Shape } from "./shapes.js";
export type SwarmEase = "linear" | "smooth" | "elastic";
export type SwarmPath = "direct" | "flow" | "scatter";
export type SwarmValues = {
    color: string;
    /** Blend toward a continuous rainbow cycle (0–1); requires animated time. */
    rainbow: number;
    /** Fraction of the fixed particle pool visible (0–1). */
    density: number;
    dispersion: number;
    turbulence: number;
    /** Deterministic turbulence frequency multiplier, not playback rate. */
    speed: number;
    dotSize: number;
    opacity: number;
    scale: number;
    /** Rotation in radians around the Z axis. */
    rotation: number;
    /** Position in normalized canvas units. */
    x: number;
    y: number;
};
export type SwarmKeyframe = Partial<SwarmValues> & {
    /** Normalized timeline location. Start at 0, end at 1. */
    at: number;
    shape?: Shape;
    /** Custom geometry for this formation; a new shape clears inherited points. */
    points?: readonly Point[];
    /** Easing/path/stagger apply to the segment arriving at this keyframe. */
    ease?: SwarmEase;
    path?: SwarmPath;
    stagger?: number;
};
export type CompiledSwarmFrame = SwarmValues & {
    at: number;
    shape: Shape;
    points: Point[];
    pointIndices: number[];
    custom: boolean;
    ease: SwarmEase;
    path: SwarmPath;
    stagger: number;
};
export type SwarmSequenceData = {
    frames: CompiledSwarmFrame[];
    count: number;
};
export declare const DEFAULT_SWARM_VALUES: Readonly<SwarmValues>;
export declare function swarmEase(t: number, ease: SwarmEase): number;
/** Compile once; point identities stay consistent across all keyframes. */
export declare function compileSwarmSequence(keyframes: readonly SwarmKeyframe[], requestedCount?: number): SwarmSequenceData;
export type SwarmSample = {
    values: SwarmValues;
    from: CompiledSwarmFrame;
    to: CompiledSwarmFrame;
    phase: number;
    progress: number;
    index: number;
};
/** Pure evaluation. Optional time in seconds animates native formations independently of progress. */
export declare function sampleSwarmSequence(sequence: SwarmSequenceData, progress: number, time?: number): SwarmSample;
/** Particle position plus a soft density mask. No particles are added on seek. */
export declare function sampleSwarmParticle(sample: SwarmSample, index: number, count: number, reducedMotion?: boolean): Point & {
    alpha: number;
};
