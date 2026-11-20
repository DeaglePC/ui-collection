export type WordOrigin = {
    x: number;
    y: number;
    width: number;
    height: number;
};
/** Project a shared shape destination and blend it with the word's paragraph position. */
export declare function sampleWordHelix(origin: WordOrigin, index: number, count: number, width: number, height: number, progress: number, target?: Point): {
    x: number;
    y: number;
    scale: number;
    opacity: number;
    zIndex: number;
};
import { type Point } from "./shapes.js";
