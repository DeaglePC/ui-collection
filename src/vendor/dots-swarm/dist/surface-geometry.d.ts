import type { PointMotion } from "./dot-swarm.js";
import { type Shape, type Point } from "./shapes.js";
import type { PhysicsPoint } from "./physics.js";
export type AvatarExpression = "neutral" | "happy" | "curious" | "surprised" | "excited" | "dizzy";
export type SurfaceGeometry = {
    kind: "shape";
    shape: Shape;
} | {
    kind: "points";
    points: readonly Point[];
    motion?: PointMotion;
} | {
    kind: "text";
    points: readonly Point[];
} | {
    kind: "element";
    radius?: number;
    thickness?: number;
    appearance?: "solid" | "dots";
} | {
    kind: "avatar";
    expression?: AvatarExpression;
    /** 0–1 anticipation: compress and tremble before releasing. */
    tension?: number;
    appearance?: "solid" | "dots";
};
export type SurfaceBox = {
    x: number;
    y: number;
    width: number;
    height: number;
};
/** Sample a formation in pixel coordinates; particle ordering is stable over time. */
export declare function sampleSurfaceGeometry(geometry: SurfaceGeometry, box: SurfaceBox, count: number, time?: number, gaze?: {
    x: number;
    y: number;
}): PhysicsPoint[];
/** Smooth, fully assembled finish, using the same pose as the particle body. */
export declare function paintSolidAvatar(ctx: CanvasRenderingContext2D, box: SurfaceBox, expression: AvatarExpression, time: number, gaze: {
    x: number;
    y: number;
}, color: string, opacity: number, tension?: number): void;
