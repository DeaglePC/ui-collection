import { type CSSProperties } from 'react';
import { type SwarmPrimitiveKind } from './ui-presets.js';
import { DotsSequence, type DotsAssets, type DotsShapeRegistry } from './dots-sequence.js';
import { type Shape, type Point } from './shapes.js';
import type { SwarmSurfaceProps } from './swarm-surface.js';
export type SwarmPrimitiveDefinition = {
    kind: SwarmPrimitiveKind;
    src?: string;
    alt?: string;
    imageTrigger?: import("./ui-image.tsx").SwarmImageTrigger;
    label?: string;
    detail?: string;
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: number;
    appearance?: "solid" | "dots";
    reveal?: "letters" | "words" | "all";
    stagger?: number;
    duration?: number;
};
export type SwarmCompositionScene = {
    id: string;
    shape?: Shape;
    points?: readonly Point[];
    motion?: import("./dot-swarm.tsx").PointMotion;
    primitive?: SwarmPrimitiveDefinition;
};
export declare function SwarmComposition({ scenes, active, spread, onAction, ...props }: Omit<SwarmSurfaceProps, 'targets'> & {
    scenes: readonly SwarmCompositionScene[];
    active: string;
    spread?: number;
    onAction?: (scene: string) => void;
}): import("react").JSX.Element;
/** A sequence renderer for mixed shape and UI clips. Definitions remain plain data. */
export declare function DotsUISequencePlayer({ sequence, elements, shapes, assets, paused, style, className, onAction }: {
    sequence: DotsSequence;
    elements: Record<string, SwarmPrimitiveDefinition>;
    shapes?: DotsShapeRegistry;
    assets?: DotsAssets;
    paused?: boolean;
    style?: CSSProperties;
    className?: string;
    onAction?: (scene: string) => void;
}): import("react").JSX.Element;
