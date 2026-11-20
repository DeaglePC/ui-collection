import type { Point } from "./shapes.js";
export type SwarmTextOptions = {
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: string | number;
    fontStyle?: string;
    /** Line height in CSS pixels. */
    lineHeight?: number;
    letterSpacing?: number;
    textAlign?: "left" | "center" | "right";
    direction?: "ltr" | "rtl";
    /** Available width in CSS pixels. Long lines wrap at this width. */
    width?: number;
    count?: number;
};
export type SwarmTextGeometry = {
    points: Point[];
    width: number;
    height: number;
    lines: string[];
};
/** Rasterize complete lines (preserving font shaping and ligatures), then sample
 * their ink. Browser-only; load custom fonts via @font-face or FontFace first.
 * Coordinates match SwarmUI.Part / SwarmSurface's normalized point space.
 */
export declare function sampleTextPoints(text: string, options?: SwarmTextOptions): Promise<SwarmTextGeometry>;
