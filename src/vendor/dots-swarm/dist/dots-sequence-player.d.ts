import { type CSSProperties } from "react";
import { DotsSequence, type DotsShapeRegistry, type DotsAssets } from "./dots-sequence.js";
export declare function useDotsSequence(sequence: DotsSequence, options?: {
    reducedMotion?: boolean;
    paused?: boolean;
}): import("./dots-sequence.ts").DotsSequenceSnapshot;
export type DotsSequencePlayerProps = {
    sequence: DotsSequence;
    /** Optional private Pro registry. Core ships without Pro artwork. */
    shapes?: DotsShapeRegistry;
    /** Imported SVG/custom geometry, stored once outside the timeline. */
    assets?: DotsAssets;
    paused?: boolean;
    /** Keep formation motion alive while the timeline is manually paused/scrubbed. */
    animate?: boolean;
    reducedMotion?: boolean;
    className?: string;
    style?: CSSProperties;
};
/** React renderer for named shape / custom-asset sequences. Use useDotsSequence for UI scenes. */
export declare function DotsSequencePlayer({ sequence, shapes, assets, paused, animate, reducedMotion, className, style, }: DotsSequencePlayerProps): import("react").JSX.Element;
