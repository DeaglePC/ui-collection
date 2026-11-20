const clamp = (value) => Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0));
/** Project a shared shape destination and blend it with the word's paragraph position. */
export function sampleWordHelix(origin, index, count, width, height, progress, target = getShapePoints("helix", count)[index]) {
    const p = clamp(progress);
    const delay = count > 1 ? (index / (count - 1)) * 0.1 : 0;
    const local = clamp((p - delay) / (1 - delay));
    const mix = local * local * (3 - 2 * local);
    const depth = clamp((target.z + 1) / 2);
    const scale = 0.4 + depth * 0.2;
    // Match DotSwarm's normalized shape projection; only the word size differs.
    const unit = Math.min(width, height) * 0.42;
    const targetX = width / 2 + target.x * unit;
    const targetY = height / 2 + target.y * unit;
    return {
        x: (targetX - origin.x - origin.width / 2) * mix,
        y: (targetY - origin.y - origin.height / 2) * mix,
        scale: 1 + (scale - 1) * mix,
        opacity: 1 - (1 - (0.5 + depth * 0.5)) * mix,
        zIndex: Math.round(depth * 100),
    };
}
import { getShapePoints } from "./shapes.js";
