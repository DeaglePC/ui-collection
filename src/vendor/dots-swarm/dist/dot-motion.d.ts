/** A single dot's position and appearance. Distances are pixels; angles are degrees. */
export interface DotState {
    x?: number;
    y?: number;
    /** Sets both dimensions. A width or height in the same state overrides size. */
    size?: number;
    width?: number;
    height?: number;
    scale?: number;
    scaleX?: number;
    scaleY?: number;
    rotate?: number;
    opacity?: number;
    color?: string;
    /** A CSS radius, or pixels when numeric. */
    borderRadius?: number | string;
    /** Opacity of the content inside the dot, from 0 to 1. */
    reveal?: number;
}
export interface DotTransition {
    /** Seconds. Defaults to 0.6. */
    duration?: number;
    /** Seconds to hold before this transition. */
    delay?: number;
    /** A CSS easing function. */
    easing?: string;
}
/** Each step inherits the previous step's appearance. */
export interface DotKeyframe extends DotState, DotTransition {
}
export type DotValues = Required<Omit<DotState, "size">>;
export declare const DEFAULT_DOT_VALUES: Readonly<DotValues>;
export declare function resolveDotState(previous: DotValues, state: DotState): DotValues;
export declare function dotSurfaceStyle(state: DotValues): {
    width: string;
    height: string;
    backgroundColor: string;
    borderRadius: string;
    opacity: number;
    transform: string;
};
/** Internal, browser-independent timeline compiler. */
export declare function compileDotMotion(initial: DotState, steps: readonly DotKeyframe[], transition?: DotTransition): {
    start: Required<Omit<DotState, "size">>;
    end: Required<Omit<DotState, "size">>;
    duration: number;
    ends: number[];
    surface: {
        width: string;
        height: string;
        backgroundColor: string;
        borderRadius: string;
        opacity: number;
        transform: string;
        offset: number;
        easing: string;
    }[];
    content: {
        opacity: number;
        offset: number;
        easing: string;
    }[];
};
