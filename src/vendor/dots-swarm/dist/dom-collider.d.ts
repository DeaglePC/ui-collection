import type { SwarmCollider } from "./physics.js";
/** Rasterize text nodes, including wrapped lines, into a collision mask.
 * Call again after fonts/layout change. Supports horizontal, untransformed text.
 * No DOM is changed and no text is converted to an image in the visible UI.
 */
export declare function createTextCollider(element: HTMLElement, surface: HTMLElement | {
    left: number;
    top: number;
    width: number;
    height: number;
}): SwarmCollider;
