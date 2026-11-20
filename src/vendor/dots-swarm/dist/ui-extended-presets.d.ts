import type { SwarmPrimitiveDefinition } from "./ui-composition.js";
export declare function ExtendedPrimitive({ kind, label, detail, fontFamily, fontSize, fontWeight, appearance, reveal, stagger, duration, onAction, }: SwarmPrimitiveDefinition & {
    onAction?: () => void;
}): import("react").JSX.Element | null;
