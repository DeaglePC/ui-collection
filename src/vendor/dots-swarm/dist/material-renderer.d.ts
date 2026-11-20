import { type ParticleMaterial } from "./particle-object.js";
type SurfaceMaterial = Extract<ParticleMaterial, {
    kind: "glass" | "metal" | "neon";
}>;
export type MaterialFrame = {
    time: number;
    pointer?: {
        x: number;
        y: number;
    };
};
/** One GPU batch for continuous metal, glass and emissive contour materials. */
export declare class MaterialRenderer {
    private wake;
    readonly canvas: HTMLCanvasElement;
    private gl;
    private program;
    private buffer;
    private scene;
    private normals;
    private uniforms;
    private maps;
    private lenses;
    private vertices;
    private active;
    private width;
    private height;
    private tintCanvas;
    private tintKey;
    private tint;
    constructor(wake: () => void);
    private lost;
    private restored;
    private initialize;
    private texture;
    reset(): void;
    begin(source: HTMLCanvasElement, width: number, height: number, material: SurfaceMaterial, color: string, frame: MaterialFrame): boolean;
    add(map: HTMLCanvasElement, x: number, y: number, size: number, angle: number, opacity: number): void;
    end(context: CanvasRenderingContext2D): void;
    private release;
    dispose(): void;
}
export {};
