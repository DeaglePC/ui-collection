export function createRectCollider(x, y, width, height) {
    return {
        bounds: { x, y, width, height },
        contains: (px, py) => px >= x && px <= x + width && py >= y && py <= y + height,
    };
}
export class SwarmPhysics {
    constructor(points) {
        this.particles = points.map((p) => ({ ...p, vx: 0, vy: 0 }));
    }
    burst({ x, y, strength = 360, radius = Infinity, spread = 0 }) {
        if (radius <= 0 ||
            !Number.isFinite(strength) ||
            !Number.isFinite(x) ||
            !Number.isFinite(y))
            return;
        this.particles.forEach((p, i) => {
            const dx = p.x - x, dy = p.y - y, distance = Math.hypot(dx, dy);
            if (distance > radius)
                return;
            const variation = Math.max(0, Math.min(1, spread));
            const random = (n) => {
                const value = Math.sin(n * 127.1 + 311.7) * 43758.5453;
                return value - Math.floor(value);
            };
            const angle = (distance > 1 ? Math.atan2(dy, dx) : i * 2.39996) +
                (random(i + 3) - 0.5) * variation * 2.4;
            const force = strength *
                (Number.isFinite(radius) ? 1 - distance / radius : 1) *
                (1 + (random(i + 91) - 0.5) * variation * 1.5);
            p.vx += Math.cos(angle) * force;
            p.vy += Math.sin(angle) * force;
        });
    }
    /** Clamped, sub-stepped integration with swept point/mask collisions. */
    step(delta, options = {}) {
        if (!Number.isFinite(delta) || delta <= 0)
            return;
        const elapsed = Math.min(delta, 0.05);
        const steps = Math.ceil(elapsed / (1 / 120));
        const dt = elapsed / steps;
        const spring = Math.max(0, options.spring ?? 70);
        const damping = Math.max(0, options.damping ?? (options.targets ? 13 : 0.22));
        const drag = Math.exp(-damping * dt);
        const bounce = Math.max(0, Math.min(1, options.restitution ?? 0.55));
        for (let s = 0; s < steps; s++) {
            this.particles.forEach((p, i) => {
                const target = options.targets?.[i];
                p.vx +=
                    ((target ? (target.x - p.x) * spring : 0) + (options.wind ?? 0)) * dt;
                p.vy +=
                    ((target ? (target.y - p.y) * spring : 0) + (options.gravity ?? 0)) *
                        dt;
                p.vx *= drag;
                p.vy *= drag;
                const dx = p.vx * dt, dy = p.vy * dt;
                const nearby = options.colliders?.filter(({ bounds: b }) => !b ||
                    (Math.max(p.x, p.x + dx) >= b.x - 3 &&
                        Math.min(p.x, p.x + dx) <= b.x + b.width + 3 &&
                        Math.max(p.y, p.y + dy) >= b.y - 3 &&
                        Math.min(p.y, p.y + dy) <= b.y + b.height + 3));
                const samples = nearby?.length
                    ? Math.min(32, Math.max(1, Math.ceil(Math.hypot(dx, dy) / 1.5)))
                    : 1;
                for (let j = 0; j < samples; j++) {
                    const nx = p.x + dx / samples, ny = p.y + dy / samples;
                    const hit = nearby?.find((c) => c.contains(nx, ny));
                    if (hit) {
                        // The gradient of the occupancy mask points out of a glyph edge.
                        let normalX = Number(hit.contains(nx - 3, ny)) -
                            Number(hit.contains(nx + 3, ny));
                        let normalY = Number(hit.contains(nx, ny - 3)) -
                            Number(hit.contains(nx, ny + 3));
                        let length = Math.hypot(normalX, normalY);
                        if (length < 0.1) {
                            normalX = -dx;
                            normalY = -dy;
                            length = Math.hypot(dx, dy) || 1;
                        }
                        normalX /= length;
                        normalY /= length;
                        const dot = p.vx * normalX + p.vy * normalY;
                        if (dot < 0) {
                            p.vx -= (1 + bounce) * dot * normalX;
                            p.vy -= (1 + bounce) * dot * normalY;
                        }
                        p.x += normalX * 1.5;
                        p.y += normalY * 1.5;
                        break;
                    }
                    p.x = nx;
                    p.y = ny;
                }
                if (options.bounds) {
                    const { width, height } = options.bounds;
                    if (options.bounds.top && p.y < 2) {
                        p.y = 2;
                        p.vy = Math.abs(p.vy) * bounce;
                    }
                    if (p.x < 2) {
                        p.x = 2;
                        p.vx = Math.abs(p.vx) * bounce;
                    }
                    if (p.x > width - 2) {
                        p.x = width - 2;
                        p.vx = -Math.abs(p.vx) * bounce;
                    }
                    if (p.y > height - 3) {
                        p.y = height - 3;
                        p.vy = -Math.abs(p.vy) * bounce;
                    }
                }
                if (target)
                    p.opacity =
                        (p.opacity ?? 1) +
                            ((target.opacity ?? 1) - (p.opacity ?? 1)) * Math.min(1, dt * 9);
            });
        }
    }
}
