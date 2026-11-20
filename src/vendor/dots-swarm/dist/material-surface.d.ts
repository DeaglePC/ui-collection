/** Surface maps include room outside the silhouette for light and shadow. */
export declare const MATERIAL_MAP_SIZE = 192;
export declare const MATERIAL_CONTENT_SIZE = 96;
export declare const MATERIAL_DISTANCE_RANGE = 48;
/** Raw bytes retain normals/distances even where coverage is zero. */
export declare function getMaterialSurfacePixels(map: HTMLCanvasElement): Uint8ClampedArray | undefined;
/**
 * Encodes a rounded, raised surface from any alpha silhouette.
 * RG = outward unit surface normal XY; B = signed distance, positive inside;
 * A = coverage. Distances and the lens profile use the original 96px body units.
 * This is a cached asset operation, never part of an animation frame.
 */
export declare function createMaterialSurface(mask: HTMLCanvasElement): HTMLCanvasElement;
