/** Surface maps include room outside the silhouette for light and shadow. */
export const MATERIAL_MAP_SIZE = 192;
export const MATERIAL_CONTENT_SIZE = 96;
export const MATERIAL_DISTANCE_RANGE = 48;
const INFINITY = 1e12;
const BEVEL_WIDTH = 14;
const BEVEL_DEPTH = 12;
const CROWN_DEPTH = 4.32;
const CROWN_FALLOFF = 24;
const surfacePixels = new WeakMap();
/** Raw bytes retain normals/distances even where coverage is zero. */
export function getMaterialSurfacePixels(map) {
    return surfacePixels.get(map);
}
/** Exact squared Euclidean distance transform, applied one dimension at a time. */
function distanceTransform(input, output, sites, boundaries, length) {
    let envelope = 0;
    sites[0] = 0;
    boundaries[0] = -Infinity;
    boundaries[1] = Infinity;
    for (let position = 1; position < length; position++) {
        let intersection = 0;
        while (true) {
            const previous = sites[envelope];
            intersection =
                (input[position] +
                    position * position -
                    (input[previous] + previous * previous)) /
                    (2 * (position - previous));
            if (intersection > boundaries[envelope] || envelope === 0)
                break;
            envelope--;
        }
        envelope++;
        sites[envelope] = position;
        boundaries[envelope] = intersection;
        boundaries[envelope + 1] = Infinity;
    }
    envelope = 0;
    for (let position = 0; position < length; position++) {
        while (boundaries[envelope + 1] < position)
            envelope++;
        const delta = position - sites[envelope];
        output[position] = delta * delta + input[sites[envelope]];
    }
}
function distancesTo(coverage, inside) {
    const size = MATERIAL_MAP_SIZE;
    const field = new Float64Array(size * size);
    const input = new Float64Array(size);
    const output = new Float64Array(size);
    const sites = new Int32Array(size);
    const boundaries = new Float64Array(size + 1);
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const opaque = coverage[(y * size + x) * 4 + 3] >= 128;
            input[x] = opaque === inside ? 0 : INFINITY;
        }
        distanceTransform(input, output, sites, boundaries, size);
        field.set(output, y * size);
    }
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++)
            input[y] = field[y * size + x];
        distanceTransform(input, output, sites, boundaries, size);
        for (let y = 0; y < size; y++)
            field[y * size + x] = output[y];
    }
    return field;
}
/**
 * Encodes a rounded, raised surface from any alpha silhouette.
 * RG = outward unit surface normal XY; B = signed distance, positive inside;
 * A = coverage. Distances and the lens profile use the original 96px body units.
 * This is a cached asset operation, never part of an animation frame.
 */
export function createMaterialSurface(mask) {
    const surface = document.createElement("canvas");
    surface.width = surface.height = MATERIAL_MAP_SIZE;
    const context = surface.getContext("2d");
    if (!context)
        throw new Error("Unable to create a material surface");
    const padding = (MATERIAL_MAP_SIZE - MATERIAL_CONTENT_SIZE) / 2;
    context.drawImage(mask, padding, padding, MATERIAL_CONTENT_SIZE, MATERIAL_CONTENT_SIZE);
    const frame = context.getImageData(0, 0, surface.width, surface.height);
    const coverage = frame.data;
    const toInside = distancesTo(coverage, true);
    const toOutside = distancesTo(coverage, false);
    const distance = new Float32Array(MATERIAL_MAP_SIZE * MATERIAL_MAP_SIZE);
    for (let i = 0; i < distance.length; i++) {
        const alpha = coverage[i * 4 + 3] / 255;
        // Partial coverage locates the boundary within the antialiased edge pixel.
        distance[i] =
            alpha > 0 && alpha < 1
                ? alpha - 0.5
                : alpha >= 0.5
                    ? Math.sqrt(toOutside[i]) - 0.5
                    : 0.5 - Math.sqrt(toInside[i]);
    }
    const size = MATERIAL_MAP_SIZE;
    const at = (x, y) => distance[Math.max(0, Math.min(size - 1, y)) * size +
        Math.max(0, Math.min(size - 1, x))];
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const i = y * size + x;
            const d = distance[i];
            // A smoothed central gradient avoids faceting at glyph corners and forks.
            const gx = (at(x + 1, y - 1) +
                2 * at(x + 1, y) +
                at(x + 1, y + 1) -
                at(x - 1, y - 1) -
                2 * at(x - 1, y) -
                at(x - 1, y + 1)) /
                8;
            const gy = (at(x - 1, y + 1) +
                2 * at(x, y + 1) +
                at(x + 1, y + 1) -
                at(x - 1, y - 1) -
                2 * at(x, y - 1) -
                at(x + 1, y - 1)) /
                8;
            const depth = Math.max(0, d);
            const shoulder = Math.min(0.997, Math.max(0, 1 - depth / BEVEL_WIDTH));
            // Derivative of an elliptical shoulder plus a gently domed crown.
            // The same height profile supplies optical thickness in the glass shader.
            const slope = ((BEVEL_DEPTH / BEVEL_WIDTH) * shoulder) /
                Math.sqrt(Math.max(0.001, 1 - shoulder * shoulder)) +
                (CROWN_DEPTH / CROWN_FALLOFF) * Math.exp(-depth / CROWN_FALLOFF);
            const normalX = -gx * slope;
            const normalY = -gy * slope;
            const length = Math.hypot(normalX, normalY, 1);
            coverage[i * 4] = (0.5 + (normalX / length) * 0.5) * 255;
            coverage[i * 4 + 1] = (0.5 + (normalY / length) * 0.5) * 255;
            coverage[i * 4 + 2] =
                (0.5 +
                    Math.max(-MATERIAL_DISTANCE_RANGE, Math.min(MATERIAL_DISTANCE_RANGE, d)) /
                        (2 * MATERIAL_DISTANCE_RANGE)) *
                    255;
        }
    }
    // Canvas backing stores erase RGB at alpha zero. Texture uploaders use these
    // original bytes so the outer distance field survives in transparent padding.
    surfacePixels.set(surface, frame.data);
    context.putImageData(frame, 0, 0);
    return surface;
}
