import type { Point } from "./shapes.js";
export type TextReveal = "letters" | "words" | "all";
export declare function splitTextUnits(text: string, reveal: TextReveal): string[];
/** Sample a real DOM text run in its browser layout. Wrapped runs are painted
 * a whole line at a time; the final text remains the original selectable DOM. */
export declare function sampleElementTextPoints(element: HTMLElement, count: number): Point[];
