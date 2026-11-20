import { type ParticleObject } from "./particle-object.js";
import { type MaterialFrame } from "./material-renderer.js";
/** Cached silhouettes with continuous, batched GPU material shading. */
export declare class ParticlePainter {
    private wake;
    private key;
    private paintKey;
    private surfaces;
    private masks;
    private stamps;
    private images;
    private failed;
    private pending;
    private revision;
    private disposed;
    private renderer;
    private gpuActive;
    constructor(wake: () => void);
    dispose(): void;
    private reset;
    invalidate(): void;
    private image;
    prepare(object: ParticleObject, color: string): void;
    beginFrame(ctx: CanvasRenderingContext2D, width: number, height: number, object: ParticleObject, color: string, frame?: MaterialFrame): boolean | undefined;
    endFrame(ctx: CanvasRenderingContext2D): void;
    private surface;
    stamp(object: ParticleObject, color: string, index: number, angle: number): HTMLCanvasElement;
    draw(ctx: CanvasRenderingContext2D, object: ParticleObject, color: string, index: number, x: number, y: number, size: number, angle: number, opacity: number): void;
}
