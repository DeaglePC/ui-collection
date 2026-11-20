import { ESSENTIAL_IDS, ESSENTIAL_SHAPES, isEssentialShape, getEssentialPoints, } from "./essential-shapes.js";
import { STRUCTURE_IDS, STRUCTURE_SHAPES, isStructureShape, getStructurePoints, } from "./structure-shapes.js";
import { NAVIGATION_GLYPHS, NAVIGATION_GLYPH_IDS, isNavigationGlyph, getNavigationGlyphPoints, } from "./navigation-glyphs.js";
export const SHAPES = [
    "cloud",
    "orb",
    "halo",
    "helix",
    "infinity",
    "atom",
    "flower",
    "bolt",
    "moon",
    "equalizer",
    "arrow",
    "globe",
    "loader",
    "check",
    "heart",
    "wave",
    "grid",
    "spark",
    "route",
    "turn-left",
    "turn-right",
    "straight",
    "u-turn",
    "roundabout",
    "arrive",
    ...NAVIGATION_GLYPH_IDS,
    ...STRUCTURE_IDS,
    ...ESSENTIAL_IDS,
];
export const shapeInfo = {
    ...Object.fromEntries(ESSENTIAL_IDS.map((id) => [
        id,
        {
            label: ESSENTIAL_SHAPES[id].label,
            description: ESSENTIAL_SHAPES[id].description,
            category: ESSENTIAL_SHAPES[id].category,
        },
    ])),
    ...Object.fromEntries(STRUCTURE_IDS.map((id) => [
        id,
        { ...STRUCTURE_SHAPES[id], category: "Structure" },
    ])),
    ...Object.fromEntries(NAVIGATION_GLYPH_IDS.map((id) => {
        const { label, description, category } = NAVIGATION_GLYPHS[id];
        return [id, { label, description, category }];
    })),
    cloud: {
        label: "Cloud",
        description: "An organic, breathing volume of particles.",
        category: "Organic",
    },
    orb: {
        label: "Orb",
        description: "A quietly rotating sphere with a little depth.",
        category: "Organic",
    },
    halo: {
        label: "Halo",
        description: "A ribbon of particles in a weightless orbit.",
        category: "Organic",
    },
    helix: {
        label: "Helix",
        description: "Two strands, endlessly intertwined.",
        category: "Organic",
    },
    infinity: {
        label: "Infinity",
        description: "An idea that keeps coming around.",
        category: "Expression",
    },
    atom: {
        label: "Atom",
        description: "Three orbits. One restless little system.",
        category: "Organic",
    },
    flower: {
        label: "Bloom",
        description: "A small idea unfolding into something more.",
        category: "Organic",
    },
    bolt: {
        label: "Bolt",
        description: "A brief moment of electric energy.",
        category: "Feedback",
    },
    moon: {
        label: "Moon",
        description: "A quieter state of mind.",
        category: "Expression",
    },
    equalizer: {
        label: "Equalizer",
        description: "A rhythmic signal for listening interfaces.",
        category: "Feedback",
    },
    arrow: {
        label: "Arrow",
        description: "A little direction goes a long way.",
        category: "Navigation",
    },
    globe: {
        label: "Globe",
        description: "A world of possibilities, in constant motion.",
        category: "Exploration",
    },
    loader: {
        label: "Loader",
        description: "Make the in-between worth watching.",
        category: "Feedback",
    },
    check: {
        label: "Check",
        description: "That satisfying feeling of getting it done.",
        category: "Feedback",
    },
    heart: {
        label: "Heart",
        description: "A few hundred dots. A little more feeling.",
        category: "Expression",
    },
    wave: {
        label: "Wave",
        description: "Find a rhythm. Let the particles follow.",
        category: "Expression",
    },
    grid: {
        label: "Grid",
        description: "A moment of order in a world of movement.",
        category: "Structure",
    },
    spark: {
        label: "Spark",
        description: "Every good idea starts with a small spark.",
        category: "Expression",
    },
    route: {
        label: "Map route",
        description: "From here to there, one little dot at a time.",
        category: "Navigation",
    },
    "turn-left": {
        label: "Turn left",
        description: "Your next move, unmistakably left.",
        category: "Directions",
    },
    "turn-right": {
        label: "Turn right",
        description: "A new direction, the same little dots.",
        category: "Directions",
    },
    straight: {
        label: "Straight",
        description: "Keep going. You’re on the right path.",
        category: "Directions",
    },
    "u-turn": {
        label: "U-turn",
        description: "A little change of direction.",
        category: "Directions",
    },
    roundabout: {
        label: "Roundabout",
        description: "Around the bend, toward your next exit.",
        category: "Roundabouts",
    },
    arrive: {
        label: "Arrive",
        description: "You’ve arrived. Every dot in its place.",
        category: "Directions",
    },
};
const LEGACY_DIRECTION_SHAPES = [
    "turn-left",
    "turn-right",
    "straight",
    "u-turn",
    "roundabout",
    "arrive",
];
export const DIRECTION_SHAPES = [
    ...LEGACY_DIRECTION_SHAPES,
    ...NAVIGATION_GLYPH_IDS.filter((id) => ["Directions", "Lanes", "Roundabouts"].includes(NAVIGATION_GLYPHS[id].category)),
];
function inDirection(shape, x, y) {
    if (shape === "turn-left" || shape === "turn-right") {
        const directionX = shape === "turn-right" ? -x : x;
        return inPolygon(directionX, y, [
            [0.17, 0.86],
            [0.49, 0.86],
            [0.49, -0.42],
            [-0.18, -0.42],
            [-0.18, -0.78],
            [-0.88, -0.26],
            [-0.18, 0.26],
            [-0.18, -0.1],
            [0.17, -0.1],
        ]);
    }
    if (shape === "straight")
        return inPolygon(x, y, [
            [-0.18, 0.85],
            [0.18, 0.85],
            [0.18, -0.12],
            [0.59, -0.12],
            [0, -0.88],
            [-0.59, -0.12],
            [-0.18, -0.12],
        ]);
    if (shape === "u-turn") {
        const ring = Math.hypot(x, y + 0.12);
        return ((y < -0.12 && ring >= 0.27 && ring <= 0.59) ||
            (x >= 0.27 && x <= 0.59 && y >= -0.12 && y <= 0.83) ||
            (x >= -0.59 && x <= -0.27 && y >= -0.12 && y <= 0.22) ||
            inPolygon(x, y, [
                [-0.89, 0.12],
                [0.03, 0.12],
                [-0.43, 0.79],
            ]));
    }
    if (shape === "roundabout") {
        const r = Math.hypot(x, y);
        return ((r >= 0.35 && r <= 0.58 && !(x > 0.15 && y < -0.12)) ||
            (Math.abs(x) < 0.13 && y > 0.42 && y < 0.91) ||
            (x >= -0.08 && x <= 0.49 && y > -0.58 && y < -0.35) ||
            inPolygon(x, y, [
                [0.29, -0.84],
                [0.9, -0.47],
                [0.29, -0.08],
            ]));
    }
    if (shape === "arrive") {
        return ((x >= -0.55 && x <= -0.34 && y >= -0.85 && y <= 0.88) ||
            (x >= -0.34 &&
                x <= 0.76 &&
                y >= -0.8 &&
                y <= -0.02 &&
                (Math.floor((x + 0.34) / 0.22) + Math.floor((y + 0.8) / 0.26)) % 2 ===
                    0));
    }
    return false;
}
const routeCurves = [
    [
        [-0.74, 0.62],
        [-0.27, 0.75],
        [-0.7, 0.13],
        [-0.18, 0.17],
    ],
    [
        [-0.18, 0.17],
        [0.37, 0.2],
        [0.36, -0.16],
        [0.01, -0.18],
    ],
    [
        [0.01, -0.18],
        [-0.4, -0.21],
        [-0.05, -0.49],
        [0.72, -0.49],
    ],
];
// Sample once by arc length so bends do not bunch the particles together.
const routePath = [];
for (const curve of routeCurves) {
    for (let i = routePath.length ? 1 : 0; i <= 100; i++) {
        const t = i / 100, v = 1 - t;
        const x = v ** 3 * curve[0][0] +
            3 * v * v * t * curve[1][0] +
            3 * v * t * t * curve[2][0] +
            t ** 3 * curve[3][0];
        const y = v ** 3 * curve[0][1] +
            3 * v * v * t * curve[1][1] +
            3 * v * t * t * curve[2][1] +
            t ** 3 * curve[3][1];
        const previous = routePath[routePath.length - 1];
        routePath.push({
            x,
            y,
            z: 0,
            distance: previous
                ? previous.distance + Math.hypot(x - previous.x, y - previous.y)
                : 0,
        });
    }
}
function pointOnRoute(progress, offset) {
    const distance = progress * routePath[routePath.length - 1].distance;
    let low = 1, high = routePath.length - 1;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (routePath[mid].distance < distance)
            low = mid + 1;
        else
            high = mid;
    }
    const a = routePath[low - 1], b = routePath[low];
    const length = b.distance - a.distance;
    const t = (distance - a.distance) / length;
    return {
        x: a.x + (b.x - a.x) * t - ((b.y - a.y) / length) * offset,
        y: a.y + (b.y - a.y) * t + ((b.x - a.x) / length) * offset,
        z: 0,
    };
}
const routeCache = new Map();
function getRoutePoints(count, time) {
    let geometry = routeCache.get(count);
    if (!geometry) {
        const pathCount = Math.ceil(count * 0.58);
        const startCount = Math.ceil((count - pathCount) / 2);
        const endCount = count - pathCount - startCount;
        geometry = Array.from({ length: count }, (_, i) => {
            if (i < pathCount) {
                const lanes = Math.min(5, pathCount);
                const lane = i % lanes;
                const laneCount = Math.ceil((pathCount - lane) / lanes);
                const progress = Math.floor(i / lanes) / Math.max(1, laneCount - 1);
                return {
                    point: pointOnRoute(progress, (lane - (lanes - 1) / 2) * 0.014),
                    progress,
                };
            }
            const isStart = i < pathCount + startCount;
            const pinIndex = i - pathCount - (isStart ? 0 : startCount);
            const pinCount = isStart ? startCount : endCount;
            const tipX = isStart ? -0.74 : 0.72, tipY = isStart ? 0.62 : -0.49;
            const outlineCount = Math.ceil(pinCount * 0.76);
            if (pinIndex < outlineCount) {
                const angle = (Math.floor(pinIndex / 3) / Math.ceil(outlineCount / 3)) *
                    Math.PI *
                    2;
                const scale = 1 + ((pinIndex % 3) - 1) * 0.075;
                return {
                    point: {
                        x: tipX +
                            0.17 * Math.sin(angle) * (1 - 0.4 * Math.cos(angle)) * scale,
                        y: tipY - 0.21 + 0.21 * Math.cos(angle) * scale,
                        z: 0.55,
                    },
                    progress: null,
                };
            }
            const j = pinIndex - outlineCount;
            const angle = (Math.floor(j / 2) / Math.ceil((pinCount - outlineCount) / 2)) *
                Math.PI *
                2;
            const radius = 0.059 + (j % 2) * 0.013;
            return {
                point: {
                    x: tipX + Math.cos(angle) * radius,
                    y: tipY - 0.26 + Math.sin(angle) * radius,
                    z: 0.75,
                },
                progress: null,
            };
        });
        if (routeCache.size >= 32) {
            const oldest = routeCache.keys().next().value;
            if (oldest !== undefined)
                routeCache.delete(oldest);
        }
        routeCache.set(count, geometry);
    }
    // A bright pulse travels from origin to destination; the pins stay anchored.
    const phase = ((time * 0.22) % 1.25) - 0.125;
    return geometry.map(({ point, progress }) => ({
        ...point,
        z: progress === null
            ? point.z
            : -0.65 + 1.6 * Math.exp(-Math.pow((progress - phase) / 0.095, 2)),
    }));
}
export function noise(seed) {
    const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453123;
    return value - Math.floor(value);
}
function inPolygon(x, y, polygon) {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i];
        const [xj, yj] = polygon[j];
        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi)
            inside = !inside;
    }
    return inside;
}
const silhouetteCache = new Map();
function silhouette(shape, count) {
    const key = `${shape}:${count}`;
    const cached = silhouetteCache.get(key);
    if (cached)
        return cached;
    // Increase an even hexagonal lattice until there are enough interior points.
    // This gives each dot some breathing room while preserving the silhouette.
    let candidates = [];
    let resolution = Math.max(3, Math.floor(Math.sqrt(count)));
    while (candidates.length < count) {
        candidates = [];
        for (let row = 0; row < resolution; row++) {
            for (let col = 0; col < resolution; col++) {
                const x = (col - (resolution - 1) / 2 + (row % 2) * 0.5) / (resolution / 2);
                const y = (row - (resolution - 1) / 2) / (resolution / 2);
                let inside = false;
                if (LEGACY_DIRECTION_SHAPES.includes(shape)) {
                    inside = inDirection(shape, x, y);
                }
                else if (shape === "arrow") {
                    const rx = (x - y) / Math.SQRT2;
                    const ry = (x + y) / Math.SQRT2;
                    inside = inPolygon(rx, ry, [
                        [-0.87, -0.21],
                        [0.06, -0.21],
                        [0.06, -0.67],
                        [0.88, 0],
                        [0.06, 0.67],
                        [0.06, 0.21],
                        [-0.87, 0.21],
                    ]);
                }
                else if (shape === "check") {
                    inside = inPolygon(x, y, [
                        [-0.88, 0.01],
                        [-0.65, -0.2],
                        [-0.23, 0.22],
                        [0.66, -0.68],
                        [0.88, -0.46],
                        [-0.23, 0.66],
                    ]);
                }
                else if (shape === "heart") {
                    const hx = x * 1.3;
                    const hy = -y * 1.3 + 0.13;
                    inside =
                        Math.pow(hx * hx + hy * hy - 0.8, 3) - hx * hx * Math.pow(hy, 3) <=
                            0;
                }
                else if (shape === "bolt") {
                    inside = inPolygon(x, y, [
                        [0.15, -0.94],
                        [-0.65, 0.12],
                        [-0.12, 0.12],
                        [-0.3, 0.94],
                        [0.68, -0.23],
                        [0.08, -0.23],
                    ]);
                }
                else if (shape === "moon") {
                    inside =
                        Math.hypot(x, y) < 0.88 && Math.hypot(x - 0.4, y + 0.3) > 0.76;
                }
                else if (shape === "spark") {
                    const angle = Math.atan2(y, x);
                    const radius = Math.hypot(x, y);
                    const boundary = 0.22 + 0.7 * Math.pow(Math.abs(Math.cos(2 * angle)), 7);
                    inside = radius < boundary;
                }
                if (inside)
                    candidates.push({ x, y, z: 0 });
            }
        }
        resolution++;
    }
    // Spread the few excess points evenly over the lattice instead of trimming an edge.
    const result = Array.from({ length: count }, (_, i) => candidates[Math.floor((i * candidates.length) / count)]);
    if (silhouetteCache.size >= 48) {
        const oldest = silhouetteCache.keys().next().value;
        if (oldest !== undefined)
            silhouetteCache.delete(oldest);
    }
    silhouetteCache.set(key, result);
    return result;
}
const flowerCache = new Map();
let flowerPetal;
function getFlowerPoints(count, time) {
    let points = flowerCache.get(count);
    if (!points) {
        // Equal arc lengths preserve the tips, shoulders and valleys even when
        // there are only four large objects describing each petal.
        if (!flowerPetal) {
            flowerPetal = [];
            let distance = 0;
            for (let i = 0; i <= 128; i++) {
                const angle = (i / 128) * ((Math.PI * 2) / 5);
                const radius = 0.52 + Math.cos(angle * 5) * 0.34;
                const x = Math.sin(angle) * radius;
                const y = -Math.cos(angle) * radius;
                const previous = flowerPetal[i - 1];
                if (previous)
                    distance += Math.hypot(x - previous.x, y - previous.y);
                flowerPetal.push({ x, y, distance });
            }
        }
        const outlineCount = count < 6
            ? count - 1
            : 5 *
                Math.min(Math.floor((count - 1) / 5), Math.floor(Math.sqrt(count) * 0.95));
        const remaining = count - outlineCount;
        let centerCount = Math.min(remaining, Math.max(1, Math.ceil(count * 0.08)));
        if (remaining - centerCount < 5)
            centerCount = remaining;
        const fillCount = remaining - centerCount;
        points = [];
        for (let i = 0; i < centerCount; i++) {
            const angle = centerCount <= 8 ? (i / centerCount) * Math.PI * 2 : i * 2.3999632297;
            const radius = centerCount === 1
                ? 0
                : centerCount <= 8
                    ? 0.115
                    : Math.sqrt((i + 0.5) / centerCount) * 0.16;
            points.push({
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius,
                z: 0.18,
            });
        }
        const petalLength = flowerPetal[flowerPetal.length - 1].distance;
        for (let i = 0; i < outlineCount; i++) {
            const petalPosition = count < 6 ? i : (i * 5) / outlineCount;
            const petal = Math.floor(petalPosition);
            const distance = (petalPosition - petal) * petalLength;
            let segment = 1;
            while (flowerPetal[segment].distance < distance)
                segment++;
            const a = flowerPetal[segment - 1];
            const b = flowerPetal[segment];
            const mix = (distance - a.distance) / (b.distance - a.distance);
            const x = a.x + (b.x - a.x) * mix;
            const y = a.y + (b.y - a.y) * mix;
            const angle = count < 6
                ? (i / outlineCount) * Math.PI * 2
                : (petal / 5) * Math.PI * 2;
            points.push({
                x: x * Math.cos(angle) - y * Math.sin(angle),
                y: x * Math.sin(angle) + y * Math.cos(angle),
                z: 0.08,
            });
        }
        for (let i = 0; i < fillCount; i++) {
            const angle = i * 2.3999632297;
            const edge = 0.52 + Math.cos(angle * 5) * 0.34;
            const radius = Math.sqrt(0.16 ** 2 + ((i + 0.5) / fillCount) * (edge ** 2 - 0.16 ** 2) * 0.92);
            points.push({
                x: Math.sin(angle) * radius,
                y: -Math.cos(angle) * radius,
                z: 0.14,
            });
        }
        if (flowerCache.size >= 32) {
            const oldest = flowerCache.keys().next().value;
            if (oldest !== undefined)
                flowerCache.delete(oldest);
        }
        flowerCache.set(count, points);
    }
    const angle = time * 0.028;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const breathe = 1 + Math.sin(time * 0.65) * 0.018;
    return points.map((point) => ({
        x: (point.x * cos - point.y * sin) * breathe,
        y: (point.x * sin + point.y * cos) * breathe,
        z: point.z +
            Math.sin(time * 0.55 + Math.hypot(point.x, point.y) * 3) * 0.045,
    }));
}
/** All shapes return exactly `count` destinations in normalized coordinates. */
export function getShapePoints(shape, count, time = 0) {
    count = Number.isFinite(count)
        ? Math.max(1, Math.min(2400, Math.floor(count)))
        : 720;
    time = Number.isFinite(time) ? time : 0;
    if (!SHAPES.includes(shape))
        shape = "cloud";
    if (isEssentialShape(shape))
        return getEssentialPoints(shape, count);
    if (isStructureShape(shape))
        return getStructurePoints(shape, count, time);
    if (isNavigationGlyph(shape))
        return getNavigationGlyphPoints(shape, count, time);
    if (shape === "route")
        return getRoutePoints(count, time);
    if (shape === "flower")
        return getFlowerPoints(count, time);
    if ([
        "arrow",
        "check",
        "heart",
        "spark",
        "bolt",
        "moon",
        ...LEGACY_DIRECTION_SHAPES,
    ].includes(shape)) {
        const candidates = silhouette(shape, count);
        const breathe = shape === "heart" ? 1 + Math.sin(time * 3) * 0.025 : 1;
        return Array.from({ length: count }, (_, i) => {
            const p = candidates[i % candidates.length];
            return { x: p.x * breathe, y: p.y * breathe, z: 0 };
        });
    }
    return Array.from({ length: count }, (_, i) => {
        const t = i / count;
        if (shape === "orb" || shape === "cloud") {
            const y = 1 - (2 * (i + 0.5)) / count;
            const ring = Math.sqrt(1 - y * y);
            const angle = i * 2.3999632297 + time * 0.16;
            const radius = shape === "cloud" ? 0.56 + noise(i + 12) * 0.4 : 0.9;
            const breathe = 1 + Math.sin(time * 0.8 + y * 3) * 0.035;
            const x = Math.cos(angle) * ring;
            const z = Math.sin(angle) * ring;
            const ripple = shape === "cloud" ? Math.sin(y * 5 + angle * 2 + time * 0.6) * 0.06 : 0;
            return {
                x: (x * radius + ripple) * breathe,
                y: (y * radius + Math.sin(x * 4 + time * 0.4) * 0.025) * breathe,
                z: z * radius,
            };
        }
        if (shape === "halo" || shape === "atom") {
            const orbit = shape === "atom" ? i % 3 : 0;
            const angle = t * Math.PI * 2 * (shape === "atom" ? 9 : 13) + time * 0.35;
            const cross = noise(i + 48) * Math.PI * 2;
            const radius = 0.72 + Math.cos(cross) * (shape === "atom" ? 0.04 : 0.17);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius * 0.38 + Math.sin(cross) * 0.11;
            const tilt = (orbit * Math.PI) / 3 - 0.28;
            return {
                x: x * Math.cos(tilt) - y * Math.sin(tilt),
                y: x * Math.sin(tilt) + y * Math.cos(tilt),
                z: Math.sin(angle) * 0.9,
            };
        }
        if (shape === "helix") {
            const y = t * 1.8 - 0.9;
            const angle = y * 5 + time * 0.6 + (i % 2) * Math.PI;
            const thickness = (noise(i + 31) - 0.5) * 0.08;
            return {
                x: Math.sin(angle) * 0.53 + thickness,
                y,
                z: Math.cos(angle) * 0.8,
            };
        }
        if (shape === "infinity") {
            const angle = t * Math.PI * 2 + time * 0.18;
            const band = (noise(i + 18) - 0.5) * 0.11;
            return {
                x: Math.cos(angle) * 0.94 + band,
                y: Math.sin(angle * 2) * 0.43 + band,
                z: Math.sin(angle) * 0.7,
            };
        }
        if (shape === "equalizer") {
            const bar = i % 9;
            const row = Math.floor(i / 9) / Math.max(1, Math.ceil(count / 9) - 1) - 0.5;
            const height = 0.3 + (0.5 + Math.sin(bar * 0.7 - time * 1.6) * 0.5) * 1.15;
            return {
                x: (bar - 4) * 0.2 + (noise(i + 20) - 0.5) * 0.1,
                y: row * height,
                z: 0.3,
            };
        }
        if (shape === "globe") {
            const curveCount = 19;
            const curve = Math.floor(t * curveCount);
            const u = (t * curveCount - curve) * Math.PI * 2;
            let x, y, z;
            if (curve < 7) {
                const latitude = (((curve - 3) / 4) * Math.PI) / 2;
                x = Math.cos(latitude) * Math.cos(u);
                y = Math.sin(latitude);
                z = Math.cos(latitude) * Math.sin(u);
            }
            else {
                const longitude = ((curve - 7) / 12) * Math.PI;
                x = Math.cos(u) * Math.cos(longitude);
                y = Math.sin(u);
                z = Math.cos(u) * Math.sin(longitude);
            }
            const rotation = time * 0.22 + 0.45;
            const rx = x * Math.cos(rotation) + z * Math.sin(rotation);
            const rz = -x * Math.sin(rotation) + z * Math.cos(rotation);
            const tilt = -0.22;
            return {
                x: (rx * Math.cos(tilt) - y * Math.sin(tilt)) * 0.88,
                y: (rx * Math.sin(tilt) + y * Math.cos(tilt)) * 0.88,
                z: rz,
            };
        }
        if (shape === "loader") {
            const spoke = Math.floor(t * 12);
            const along = (t * 12) % 1;
            const angle = (spoke / 12) * Math.PI * 2 + time * 0.65;
            const radius = 0.5 + along * 0.32;
            const width = (noise(i + 22) - 0.5) * 0.105;
            return {
                x: Math.cos(angle) * radius - Math.sin(angle) * width,
                y: Math.sin(angle) * radius + Math.cos(angle) * width,
                z: Math.sin((spoke / 12) * Math.PI * 2 - time * 2) * 0.8,
            };
        }
        if (shape === "wave") {
            const strand = i % 6;
            const x = (Math.floor(i / 6) / Math.max(1, Math.ceil(count / 6) - 1)) * 1.9 -
                0.95;
            return {
                x,
                y: Math.sin(x * 5 - time * 1.5 + strand * 0.13) * 0.27 +
                    (strand - 2.5) * 0.075,
                z: Math.sin(x * 4 + strand) * 0.3,
            };
        }
        const columns = Math.ceil(Math.sqrt(count));
        const rows = Math.ceil(count / columns);
        return {
            x: ((i % columns) / Math.max(1, columns - 1) - 0.5) * 1.45,
            y: (Math.floor(i / columns) / Math.max(1, rows - 1) - 0.5) * 1.45,
            z: 0,
        };
    });
}
/** One-to-one nearest destinations: particles are reused, never faded into replacements. */
export function matchPoints(origins, targets) {
    const available = new Uint8Array(targets.length).fill(1);
    return origins.map((origin) => {
        let best = -1;
        let distance = Infinity;
        for (let j = 0; j < targets.length; j++) {
            if (!available[j])
                continue;
            const dx = origin.x - targets[j].x;
            const dy = origin.y - targets[j].y;
            const d = dx * dx + dy * dy;
            if (d < distance) {
                distance = d;
                best = j;
            }
        }
        if (best >= 0)
            available[best] = 0;
        return Math.max(0, best);
    });
}
