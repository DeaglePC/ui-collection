import { isEssentialShape } from "./essential-shapes.js";
import { getShapePoints, matchPoints, SHAPES, } from "./shapes.js";
export const DEFAULT_SWARM_VALUES = {
    color: "#ffffff",
    rainbow: 0,
    density: 1,
    dispersion: 0,
    turbulence: 0,
    speed: 1,
    dotSize: 1.4,
    opacity: 1,
    scale: 1,
    rotation: 0,
    x: 0,
    y: 0,
};
const bounds = {
    rainbow: [0, 1],
    density: [0, 1],
    dispersion: [0, 2],
    turbulence: [0, 1],
    speed: [0, 5],
    dotSize: [0.2, 6],
    opacity: [0, 1],
    scale: [0.1, 2],
    rotation: [-Math.PI * 20, Math.PI * 20],
    x: [-2, 2],
    y: [-2, 2],
};
const clamp = (v, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
export function swarmEase(t, ease) {
    if (ease === "linear")
        return t;
    if (ease === "elastic")
        return t === 0 || t === 1
            ? t
            : 1 - Math.pow(2, -8 * t) * Math.cos(t * Math.PI * 4);
    return t * t * (3 - 2 * t);
}
function hex(color) {
    if (!/^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(color))
        throw new Error("SwarmSequence colors must be #RGB or #RRGGBB.");
    return color.length === 4
        ? `#${color
            .slice(1)
            .split("")
            .map((c) => c + c)
            .join("")}`
        : color;
}
function blendColor(a, b, t) {
    return `#${[1, 3, 5]
        .map((i) => Math.round(parseInt(a.slice(i, i + 2), 16) * (1 - t) +
        parseInt(b.slice(i, i + 2), 16) * t)
        .toString(16)
        .padStart(2, "0"))
        .join("")}`;
}
/** Compile once; point identities stay consistent across all keyframes. */
export function compileSwarmSequence(keyframes, requestedCount = 1200) {
    if (keyframes.length < 2 ||
        keyframes.length > 64 ||
        keyframes[0].at !== 0 ||
        keyframes[keyframes.length - 1].at !== 1)
        throw new Error("SwarmSequence requires 2–64 keyframes, starting at 0 and ending at 1.");
    const count = Number.isFinite(requestedCount)
        ? Math.round(clamp(requestedCount, 24, 2400))
        : 1200;
    let values = { ...DEFAULT_SWARM_VALUES };
    let shape = "cloud";
    let custom;
    let previousShape, previousCustom;
    const frames = [];
    for (const frame of keyframes) {
        if (!Number.isFinite(frame.at) ||
            (frames.length && frame.at <= frames[frames.length - 1].at))
            throw new Error("SwarmSequence keyframe positions must increase strictly.");
        if (frame.shape !== undefined) {
            if (!SHAPES.includes(frame.shape))
                throw new Error("Unknown SwarmSequence shape.");
            shape = frame.shape;
            custom = undefined;
        }
        if (frame.points !== undefined) {
            if (!frame.points.length ||
                !frame.points.every((p) => [p.x, p.y, p.z].every(Number.isFinite)))
                throw new Error("SwarmSequence custom points must contain finite coordinates.");
            custom = frame.points;
        }
        const nextValues = { ...values };
        for (const k of Object.keys(bounds)) {
            if (frame[k] !== undefined) {
                if (!Number.isFinite(frame[k]))
                    throw new Error(`Invalid SwarmSequence ${k}.`);
                nextValues[k] = clamp(frame[k], ...bounds[k]);
            }
        }
        if (frame.color !== undefined)
            nextValues.color = hex(frame.color);
        values = nextValues;
        let points;
        let pointIndices;
        const last = frames[frames.length - 1];
        if (last && shape === previousShape && custom === previousCustom) {
            points = last.points;
            pointIndices = last.pointIndices;
        }
        else {
            const samples = custom
                ? Array.from({ length: count }, (_, i) => ({
                    ...custom[Math.floor((i * custom.length) / count)],
                }))
                : getShapePoints(shape, count, 0);
            pointIndices = last
                ? matchPoints(last.points, samples)
                : samples.map((_, i) => i);
            points = pointIndices.map((i) => samples[i]);
        }
        previousShape = shape;
        previousCustom = custom;
        frames.push({
            ...values,
            at: frame.at,
            shape,
            points,
            pointIndices,
            custom: custom !== undefined,
            ease: frame.ease ?? "smooth",
            path: frame.path ?? "flow",
            stagger: Number.isFinite(frame.stagger)
                ? clamp(frame.stagger, 0, 0.8)
                : 0,
        });
    }
    return { frames, count };
}
/** Pure evaluation. Optional time in seconds animates native formations independently of progress. */
export function sampleSwarmSequence(sequence, progress, time = 0) {
    const p = Number.isFinite(progress) ? clamp(progress) : 0;
    const frames = sequence.frames;
    let index = 0;
    while (index < frames.length - 2 && p >= frames[index + 1].at)
        index++;
    const seconds = Number.isFinite(time) ? time : 0;
    const native = new Map();
    const animateFrame = (frame) => {
        if (!seconds || frame.custom)
            return frame;
        let points = native.get(frame.shape);
        if (!points) {
            points = getShapePoints(frame.shape, sequence.count, seconds);
            // Flat interface glyphs keep their silhouette while gently breathing.
            if (isEssentialShape(frame.shape)) {
                const breath = 1 + Math.sin(seconds * 1.8) * 0.018;
                points = points.map((p, i) => ({
                    x: p.x * breath + Math.sin(seconds * 0.7 + i * 0.9) * 0.003,
                    y: p.y * breath,
                    z: p.z,
                }));
            }
            native.set(frame.shape, points);
        }
        return { ...frame, points: frame.pointIndices.map((i) => points[i]) };
    };
    const from = animateFrame(frames[index]), to = animateFrame(frames[index + 1]);
    const phase = clamp((p - from.at) / (to.at - from.at));
    const mix = clamp(swarmEase(phase, to.ease));
    const values = {
        ...DEFAULT_SWARM_VALUES,
        color: blendColor(from.color, to.color, mix),
    };
    for (const key of Object.keys(bounds))
        values[key] = from[key] + (to[key] - from[key]) * mix;
    if (values.rainbow > 0) {
        const colors = [
            "#ff506c",
            "#ff9b46",
            "#ffe66b",
            "#70e895",
            "#65bdff",
            "#9580ff",
            "#e57bff",
        ];
        const cycle = (((seconds / 2) % colors.length) + colors.length) % colors.length;
        const n = Math.floor(cycle);
        const color = blendColor(colors[n], colors[(n + 1) % colors.length], cycle - n);
        values.color = blendColor(values.color, color, values.rainbow);
    }
    return { values, from, to, phase, progress: p, index };
}
/** Particle position plus a soft density mask. No particles are added on seek. */
export function sampleSwarmParticle(sample, index, count, reducedMotion = false) {
    const { from, to, phase, progress } = sample;
    const seed = index * 2.3999632297;
    const rank = (index * 0.61803398875) % 1;
    const delay = rank * to.stagger;
    const local = clamp((phase - delay) / (1 - to.stagger));
    const mix = swarmEase(local, to.ease);
    const a = from.points[index], b = to.points[index];
    const v = sample.values;
    // A repeated formation is a hold, not another journey through the swarm.
    // Keep the live shape clock, but do not scatter identical point identities.
    const holding = from.shape === to.shape &&
        from.custom === to.custom &&
        from.pointIndices === to.pointIndices;
    const arc = (holding ? 0 : Math.sin(local * Math.PI)) *
        (to.path === "scatter" ? 0.65 : to.path === "flow" ? 0.16 : 0);
    const spin = progress * Math.PI * 8 * v.speed;
    let x = a.x + (b.x - a.x) * mix + Math.cos(seed) * (arc + v.dispersion);
    let y = a.y + (b.y - a.y) * mix + Math.sin(seed) * (arc + v.dispersion);
    let z = a.z +
        (b.z - a.z) * mix +
        Math.sin(seed * 0.7) * (arc + v.dispersion) * 0.65;
    if (!reducedMotion) {
        x += Math.sin(seed + spin) * v.turbulence * 0.25;
        y += Math.cos(seed * 0.8 + spin) * v.turbulence * 0.25;
    }
    const c = Math.cos(v.rotation), s = Math.sin(v.rotation);
    const alpha = (v.density === 1 ? 1 : clamp((v.density - rank) * Math.min(count, 50))) *
        v.opacity;
    return {
        x: (x * c - y * s) * v.scale + v.x,
        y: (x * s + y * c) * v.scale + v.y,
        z: z * v.scale,
        alpha,
    };
}
