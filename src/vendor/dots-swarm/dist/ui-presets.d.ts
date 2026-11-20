import type { SwarmPrimitiveDefinition } from "./ui-composition.js";
export { SWARM_PRIMITIVES, type SwarmPrimitiveKind } from "./ui-kinds.js";
export declare function SwarmPrimitive({ kind, label, detail, fontFamily, fontSize, fontWeight, appearance, reveal, stagger, duration, src, alt, imageTrigger, onAction, }: SwarmPrimitiveDefinition & {
    onAction?: () => void;
}): import("react").JSX.Element;
