import type { SwarmPrimitiveDefinition } from "./ui-composition.js";
export declare function ControlPrimitive({ kind, label, detail, onAction, }: SwarmPrimitiveDefinition & {
    onAction?: () => void;
}): import("react").JSX.Element | null;
