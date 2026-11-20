import type { Point } from "./shapes.js";
export declare const STRUCTURE_SHAPES: {
    readonly lattice: {
        readonly label: "Lattice";
        readonly description: "A rotating three-dimensional grid.";
    };
    readonly "frame-tunnel": {
        readonly label: "Frame tunnel";
        readonly description: "Nested frames turning through depth.";
    };
    readonly "wire-sphere": {
        readonly label: "Wire sphere";
        readonly description: "A woven particle cage with counter-rotating inner orbits.";
    };
    readonly "layer-stack": {
        readonly label: "Layer stack";
        readonly description: "Five floating planes of particles.";
    };
};
export type StructureShape = keyof typeof STRUCTURE_SHAPES;
export declare const STRUCTURE_IDS: StructureShape[];
export declare const isStructureShape: (id: string) => id is StructureShape;
export declare function getStructurePoints(id: StructureShape, count: number, time: number): Point[];
