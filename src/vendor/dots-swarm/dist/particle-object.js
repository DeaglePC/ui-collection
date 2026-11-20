export const HTML_PARTICLE_LIMIT = 96;
export function particleNumber(value, fallback, min, max) {
    return Number.isFinite(value)
        ? Math.max(min, Math.min(max, value))
        : fallback;
}
export function particleRandom(index, seed = 1, channel = 0) {
    let x = (index + 1) ^
        (Math.trunc(particleNumber(seed, 1, -2147483648, 2147483647)) * 0x45d9f3b) ^
        (channel * 0x27d4eb2d);
    x = Math.imul(x ^ (x >>> 16), 0x45d9f3b);
    x = Math.imul(x ^ (x >>> 16), 0x45d9f3b);
    return ((x ^ (x >>> 16)) >>> 0) / 4294967296;
}
export function particleCount(count, object) {
    return Math.floor(particleNumber(count, 900, object?.kind === "html" || object?.material?.kind === "glass" ? 1 : 24, object?.kind === "html" ? HTML_PARTICLE_LIMIT : 2400));
}
export function particleAppearance(object, index, time, vx, vy, reduced) {
    const random = particleRandom(index, object.seed);
    const variation = particleNumber(object.variation, 0.25, 0, 1);
    const size = particleNumber(object.size, 16, 2, 160) * (1 - random * variation * 0.7);
    let angle = (particleNumber(object.rotation?.angle, 0, -3600, 3600) * Math.PI) / 180;
    if (!reduced && object.rotation?.mode === "spin")
        angle +=
            ((time * particleNumber(object.rotation.speed, 24, -360, 360) * Math.PI) /
                180) *
                (0.6 + random * 0.8);
    if (!reduced &&
        object.rotation?.mode === "velocity" &&
        Math.hypot(vx, vy) > 0.001)
        angle += Math.atan2(vy, vx) + Math.PI / 2;
    return { size, angle, random };
}
