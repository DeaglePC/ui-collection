export declare const SHAPES: readonly ["cloud", "orb", "halo", "helix", "infinity", "atom", "flower", "bolt", "moon", "equalizer", "arrow", "globe", "loader", "check", "heart", "wave", "grid", "spark", "route", "turn-left", "turn-right", "straight", "u-turn", "roundabout", "arrive", ...("bar-chart" | "calendar" | "car" | "cart" | "compass" | "credit-card" | "current-location" | "frame-tunnel" | "headphones" | "lattice" | "layer-stack" | "line-chart" | "lock" | "mail" | "map" | "message" | "microphone" | "music" | "note" | "package" | "pause" | "pin" | "play" | "send" | "thought-bubble" | "todo-list" | "walking" | "wire-sphere")[]];
export type Shape = (typeof SHAPES)[number];
export type Point = {
    x: number;
    y: number;
    z: number;
};
export declare const shapeInfo: Record<Shape, {
    label: string;
    description: string;
    category: string;
}>;
export declare const DIRECTION_SHAPES: readonly ["turn-left", "turn-right", "straight", "u-turn", "roundabout", "arrive", ...("car" | "compass" | "current-location" | "map" | "pin" | "walking")[]];
export declare function noise(seed: number): number;
/** All shapes return exactly `count` destinations in normalized coordinates. */
export declare function getShapePoints(shape: Shape, count: number, time?: number): Point[];
/** One-to-one nearest destinations: particles are reused, never faded into replacements. */
export declare function matchPoints(origins: Point[], targets: Point[]): number[];
