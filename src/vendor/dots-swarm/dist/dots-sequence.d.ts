import type { DotSwarmProps, PointMotion } from "./dot-swarm.js";
import type { Point } from "./shapes.js";
export type DotsAppearance = Pick<DotSwarmProps, "color" | "count" | "speed" | "dotSize" | "spread" | "interactive" | "choreography"> & {
    background?: string;
};
export type DotsElement = DotsAppearance & {
    /** A core or registered Pro formation name. */
    shape?: string;
    /** The name of a SwarmUI.Scene, for a UI timeline. */
    element?: string;
    /** A key in the separately supplied custom-geometry assets. */
    asset?: string;
    label?: string;
    /** Total clip length in seconds, including its arriving transition. */
    duration: number;
    transition?: {
        duration?: number;
        path?: "flow" | "scatter" | "direct";
    };
};
export type DotsSequenceOptions = {
    name?: string;
    loop?: boolean;
    autoplay?: boolean;
    defaults?: DotsAppearance;
};
export type DotsSequenceDefinition = DotsSequenceOptions & {
    version: 1;
    steps: readonly DotsElement[];
};
export type DotsFormation = {
    points: readonly Point[];
    motion?: PointMotion;
};
export type DotsShapeRegistry = Record<string, (count: number) => DotsFormation>;
export type DotsAssets = Record<string, DotsFormation>;
export type DotsSequenceSnapshot = {
    time: number;
    progress: number;
    index: number;
    elapsed: number;
    playing: boolean;
    element: DotsElement;
    values: DotsAppearance;
};
/** A compact, renderer-independent timeline. No coordinates or React markup required. */
export declare class DotsSequence {
    readonly steps: readonly DotsElement[];
    readonly options: Readonly<DotsSequenceOptions>;
    readonly duration: number;
    private snapshot;
    private listeners;
    private frame;
    private last;
    private connections;
    private controllers;
    constructor(steps: readonly DotsElement[], options?: DotsSequenceOptions);
    /** Recreate a timeline from Studio's plain JSON. */
    static fromJSON(definition: DotsSequenceDefinition): DotsSequence;
    toJSON(): DotsSequenceDefinition;
    /** Pure seek; does not start a clock or mutate playback. */
    sample(seconds: number, playing?: boolean): DotsSequenceSnapshot;
    getSnapshot: () => DotsSequenceSnapshot;
    subscribe: (listener: () => void) => () => void;
    private publish;
    play(): this;
    pause(): this;
    seek(seconds: number): this;
    restart(): this;
    /** Give scroll/another external driver ownership of time without freezing the renderer. */
    control(): () => void;
    /** Shared clock: several consumers can follow one sequence without double-speed playback. */
    connect(): () => void;
    private visibility;
    private stop;
    private schedule;
    private tick;
}
