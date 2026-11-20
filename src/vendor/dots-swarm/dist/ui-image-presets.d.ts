import type { SwarmPrimitiveDefinition } from "./ui-composition.js";
export declare function ImagePrimitive({ kind, src, alt, imageTrigger, duration, onAction, }: SwarmPrimitiveDefinition & {
    onAction?: () => void;
}): import("react").JSX.Element;
