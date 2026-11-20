export const STRUCTURE_SHAPES = {
    lattice: {
        label: "Lattice",
        description: "A rotating three-dimensional grid.",
    },
    "frame-tunnel": {
        label: "Frame tunnel",
        description: "Nested frames turning through depth.",
    },
    "wire-sphere": {
        label: "Wire sphere",
        description: "A woven particle cage with counter-rotating inner orbits.",
    },
    "layer-stack": {
        label: "Layer stack",
        description: "Five floating planes of particles.",
    },
};
export const STRUCTURE_IDS = Object.keys(STRUCTURE_SHAPES);
export const isStructureShape = (id) => Object.prototype.hasOwnProperty.call(STRUCTURE_SHAPES, id);
function rotate(x, y, z, time) {
    const a = time * 0.25 + 0.4, rx = x * Math.cos(a) + z * Math.sin(a), rz = z * Math.cos(a) - x * Math.sin(a);
    return {
        x: rx * 0.82,
        y: (y * 0.94 - rz * 0.34) * 0.82,
        z: y * 0.34 + rz * 0.94,
    };
}
export function getStructurePoints(id, count, time) {
    return Array.from({ length: count }, (_, i) => {
        if (id === "wire-sphere") {
            const strand = i % 12;
            const samples = Math.max(1, Math.ceil((count - strand) / 12));
            const along = Math.floor(i / 12) / samples;
            const angle = along * Math.PI * 2 + time * (strand < 9 ? 0.18 : -0.38);
            let point;
            if (strand < 9) {
                // Twisted meridians weave a spherical shell without a latitude grid.
                const longitude = (strand / 9) * Math.PI + Math.sin(angle * 2 + time * 0.45) * 0.24;
                const radius = 0.94 + Math.sin(angle * 3 - time * 0.7 + strand) * 0.025;
                point = rotate(Math.cos(angle) * Math.cos(longitude) * radius, Math.sin(angle) * radius, Math.cos(angle) * Math.sin(longitude) * radius, time);
            }
            else {
                // A smaller gyroscope turns against the outer shell.
                const c = Math.cos(angle) * 0.61, s = Math.sin(angle) * 0.61;
                point =
                    strand === 9
                        ? rotate(c, s, 0, -time * 1.3)
                        : strand === 10
                            ? rotate(c, 0, s, -time * 1.3)
                            : rotate(0, c, s, -time * 1.3);
            }
            const highlight = Math.pow((1 + Math.cos(angle - time * 1.7 + strand * 0.5)) / 2, 8);
            return { ...point, z: Math.min(1, point.z * 0.8 + highlight * 0.4) };
        }
        if (id === "lattice") {
            const edge = i % 75, axis = Math.floor(edge / 25), u = (((edge % 25) % 5) / 4) * 1.4 - 0.7, v = (Math.floor((edge % 25) / 5) / 4) * 1.4 - 0.7, k = (Math.floor(i / 75) / Math.max(1, Math.ceil(count / 75) - 1)) * 1.4 -
                0.7;
            return axis === 0
                ? rotate(k, u, v, time)
                : axis === 1
                    ? rotate(u, k, v, time)
                    : rotate(u, v, k, time);
        }
        if (id === "layer-stack") {
            const layer = i % 5, n = Math.floor(i / 5), side = Math.ceil(Math.sqrt(Math.ceil(count / 5))), x = ((n % side) / Math.max(1, side - 1)) * 1.3 - 0.65, z = (Math.floor(n / side) / Math.max(1, side - 1)) * 1.3 - 0.65;
            return rotate(x, (layer - 2) * 0.28 + Math.sin(time + layer * 0.7) * 0.06, z, time * 0.6);
        }
        const ring = i % 7, f = (Math.floor(i / 7) / Math.ceil(count / 7)) * 4, edge = Math.floor(f), u = f - edge, r = 0.18 + ring * 0.105, theta = time * 0.22 + ring * 0.12;
        const x = [-r + 2 * r * u, r, r - 2 * r * u, -r][edge], y = [-r, -r + 2 * r * u, r, r - 2 * r * u][edge];
        return {
            x: x * Math.cos(theta) - y * Math.sin(theta),
            y: x * Math.sin(theta) + y * Math.cos(theta),
            z: Math.sin(ring * 0.6 - time) * 0.5,
        };
    });
}
