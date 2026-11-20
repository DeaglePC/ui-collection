export function animatePoint(p, motion, time) {
    if (!motion || time === 0)
        return p;
    if (motion === "wave")
        return {
            x: p.x,
            y: p.y + 0.14 * (Math.sin(p.x * 4 + time * 1.5) - Math.sin(p.x * 4)),
            z: p.z + 0.09 * Math.sin(time * 1.2 + p.x * 3),
        };
    if (motion === "pulse") {
        const scale = 1 + 0.12 * Math.sin(time * 1.6 - Math.hypot(p.x, p.y) * 4);
        return { x: p.x * scale, y: p.y * scale, z: p.z * scale };
    }
    if (motion === "orbit") {
        const a = time * 0.3, c = Math.cos(a), s = Math.sin(a);
        return { x: p.x * c - p.y * s, y: p.x * s + p.y * c, z: p.z };
    }
    // Tilted vertical axis keeps a funnel upright while its particles circulate.
    const ay = 0.9404, az = 0.3401;
    const height = p.y * ay + p.z * az;
    const angle = time * (motion === "swirl" ? 1.15 + height * 0.35 : 0.38);
    const c = Math.cos(angle), s = Math.sin(angle), d = height * (1 - c);
    return {
        x: p.x * c + (ay * p.z - az * p.y) * s,
        y: p.y * c + az * p.x * s + ay * d,
        z: p.z * c - ay * p.x * s + az * d,
    };
}
