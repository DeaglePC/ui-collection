import { animatePoint } from "./point-motion.js";
import { getShapePoints } from "./shapes.js";
const fract = (n) => n - Math.floor(n);
// Keep the invisible particle body under the exact painted pose, including
// squash/stretch, so an excited character bursts from where it actually is.
function avatarPose(box, expression, time, tension = 0) {
    const charge = Math.max(0, Math.min(1, tension));
    const radius = Math.min(box.width, box.height) * 0.44;
    const dizzy = expression === "dizzy";
    const breath = 1 + Math.sin(time * 1.5) * 0.012;
    const compress = 1 + Math.sin(charge * Math.PI) * 0.08 - charge * charge * 0.27;
    const shake = charge * charge * radius * 0.018;
    return {
        radius,
        x: box.x +
            box.width / 2 +
            Math.sin(time * 81) * shake +
            (dizzy ? Math.sin(time * 2.7) * radius * 0.035 : 0),
        y: box.y +
            box.height / 2 +
            charge * radius * 0.1 +
            Math.cos(time * 93) * shake * 0.65,
        tilt: dizzy
            ? -0.1 + Math.sin(time * 3.2) * 0.19
            : -0.1 +
                Math.sin(time * 0.7) * 0.035 +
                (expression === "curious" ? -0.12 : 0) +
                Math.sin(time * 74) * charge * charge * 0.035,
        scaleX: breath * compress * (1 + charge * 0.11),
        scaleY: breath * compress * (1 - charge * 0.14),
    };
}
function avatarEyes(expression, time, gaze, tension) {
    const blink = Math.pow(Math.max(0, Math.cos(time * 1.15)), 70);
    const dizzy = expression === "dizzy";
    return [-1, 1].map((side) => ({
        x: side * 0.27 +
            (dizzy
                ? Math.sin(time * 2.1 + side) * 0.04
                : Math.max(-1, Math.min(1, gaze.x)) * 0.08),
        y: -0.14 +
            (dizzy
                ? Math.sin(time * 2.6 + side) * 0.045
                : Math.max(-1, Math.min(1, gaze.y)) * 0.05),
        width: expression === "surprised" ? 0.12 : 0.105,
        height: Math.max(0.035, (expression === "surprised"
            ? 0.29
            : expression === "happy"
                ? 0.16
                : expression === "excited"
                    ? 0.25
                    : dizzy
                        ? 0.15 + (side + 1) * 0.036
                        : 0.22) *
            (1 - blink * 0.9) *
            (1 - tension * 0.75)),
        tilt: dizzy ? Math.sin(time * 2 + side * 1.4) * 0.34 : 0,
    }));
}
/** Sample a formation in pixel coordinates; particle ordering is stable over time. */
export function sampleSurfaceGeometry(geometry, box, count, time = 0, gaze = { x: 0, y: 0 }) {
    const cx = box.x + box.width / 2, cy = box.y + box.height / 2;
    if ((geometry.kind === "points" || geometry.kind === "text") && !geometry.points.length) {
        return Array.from({ length: count }, () => ({ x: cx, y: cy, opacity: 0 }));
    }
    if (geometry.kind === "shape" || geometry.kind === "points" || geometry.kind === "text") {
        const scale = Math.min(box.width, box.height) * 0.48;
        const points = geometry.kind === "shape"
            ? getShapePoints(geometry.shape, count, time)
            : Array.from({ length: count }, (_, i) => geometry.points[Math.floor((i * geometry.points.length) / count)] ?? { x: 0, y: 0, z: 0 });
        return points.map((point) => {
            const p = geometry.kind === "points" ? animatePoint(point, geometry.motion, time) : point;
            return {
                x: cx + p.x * scale,
                y: cy + p.y * scale,
                opacity: 0.35 + (p.z + 1) * 0.3,
            };
        });
    }
    if (geometry.kind === "element") {
        const width = Math.max(8, box.width), height = Math.max(8, box.height);
        const radius = Math.max(0, Math.min(geometry.radius ?? 18, width / 2, height / 2));
        if (geometry.appearance !== "dots") {
            // A clear perimeter and evenly spaced interior let the material read as
            // the real component before the DOM handoff, rather than a random cloud.
            const edgeCount = Math.min(Math.round(count * 0.18), Math.round((width + height) / 3));
            const fillCount = count - edgeCount;
            const columns = Math.max(1, Math.ceil(Math.sqrt(fillCount * width / height)));
            const rows = Math.max(1, Math.ceil(fillCount / columns));
            const grid = [];
            for (let row = 0; row < rows; row++)
                for (let column = 0; column < columns; column++) {
                    const x = (column + 0.5) * width / columns;
                    const y = (row + 0.5) * height / rows;
                    const dx = Math.max(radius - x, 0, x - width + radius);
                    const dy = Math.max(radius - y, 0, y - height + radius);
                    if (dx * dx + dy * dy <= radius * radius)
                        grid.push({ x: box.x + x, y: box.y + y, opacity: 1 });
                }
            const interior = Array.from({ length: fillCount }, (_, i) => grid[Math.min(grid.length - 1, Math.floor(i * grid.length / fillCount))] ?? { x: cx, y: cy, opacity: 1 });
            const edge = sampleSurfaceGeometry({ ...geometry, appearance: "dots", thickness: 1 }, box, edgeCount, time, gaze);
            return [...edge, ...interior];
        }
        const thickness = Math.max(1, Math.min(geometry.thickness ?? 6, width / 2, height / 2));
        const horizontal = width - radius * 2, vertical = height - radius * 2;
        const arc = (Math.PI * radius) / 2;
        const perimeter = horizontal * 2 + vertical * 2 + arc * 4;
        return Array.from({ length: count }, (_, i) => {
            let distance = (i / count) * perimeter;
            const inset = fract(i * 0.618034) * thickness;
            const r = Math.max(0, radius - inset);
            const lengths = [
                horizontal,
                arc,
                vertical,
                arc,
                horizontal,
                arc,
                vertical,
                arc,
            ];
            let part = 0;
            while (part < 7 && distance > lengths[part])
                distance -= lengths[part++];
            const f = lengths[part] ? distance / lengths[part] : 0;
            let x = 0, y = 0;
            if (part === 0) {
                x = radius + horizontal * f;
                y = inset;
            }
            else if (part === 2) {
                x = width - inset;
                y = radius + vertical * f;
            }
            else if (part === 4) {
                x = width - radius - horizontal * f;
                y = height - inset;
            }
            else if (part === 6) {
                x = inset;
                y = height - radius - vertical * f;
            }
            else {
                const corner = (part - 1) / 2;
                const angle = (-0.5 + corner * 0.5 + f * 0.5) * Math.PI;
                x = (corner < 2 ? width - radius : radius) + Math.cos(angle) * r;
                y =
                    (corner === 0 || corner === 3 ? radius : height - radius) +
                        Math.sin(angle) * r;
            }
            return {
                x: box.x + x,
                y: box.y + y,
                opacity: 0.5 + fract(i * 0.754877) * 0.5,
            };
        });
    }
    const expression = geometry.expression ?? "neutral";
    const tension = geometry.tension ?? 0;
    const pose = avatarPose(box, expression, time, tension);
    const eyes = avatarEyes(expression, time, gaze, tension);
    const points = [];
    // A softly shaded dot body, with negative-space eyes cut into its front.
    for (let i = 0; i < count; i++) {
        const rho = Math.sqrt((i + 0.5) / count);
        const angle = i * 2.39996323;
        let x = Math.cos(angle) * rho, y = Math.sin(angle) * rho;
        const eye = eyes.some((eye) => {
            const dx = x - eye.x, dy = y - eye.y;
            const ex = dx * Math.cos(eye.tilt) + dy * Math.sin(eye.tilt);
            const ey = -dx * Math.sin(eye.tilt) + dy * Math.cos(eye.tilt);
            const r = Math.min(eye.width, eye.height);
            return (Math.hypot(Math.max(0, Math.abs(ex) - eye.width + r), Math.max(0, Math.abs(ey) - eye.height + r)) < r);
        });
        x *= pose.scaleX;
        y *= pose.scaleY;
        const turnX = x * Math.cos(pose.tilt) - y * Math.sin(pose.tilt);
        y = x * Math.sin(pose.tilt) + y * Math.cos(pose.tilt);
        x = turnX;
        points.push({
            x: pose.x + x * pose.radius,
            y: pose.y + y * pose.radius,
            opacity: eye ? 0 : 0.7 + fract(i * 0.78) * 0.3,
        });
    }
    return points;
}
/** Smooth, fully assembled finish, using the same pose as the particle body. */
export function paintSolidAvatar(ctx, box, expression, time, gaze, color, opacity, tension = 0) {
    if (opacity <= 0)
        return;
    const pose = avatarPose(box, expression, time, tension);
    const { radius } = pose;
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.translate(pose.x, pose.y);
    ctx.rotate(pose.tilt);
    ctx.scale(pose.scaleX, pose.scaleY);
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    // A quiet wash of light, without the specular shine or shaded 3D rim.
    const wash = ctx.createLinearGradient(-radius, -radius, radius * 0.6, radius);
    wash.addColorStop(0, "#ffffff50");
    wash.addColorStop(0.65, "#ffffff00");
    ctx.fillStyle = wash;
    ctx.fill();
    ctx.fillStyle = "#0c1013";
    for (const eye of avatarEyes(expression, time, gaze, tension)) {
        ctx.save();
        ctx.translate(eye.x * radius, eye.y * radius);
        ctx.rotate(eye.tilt);
        ctx.beginPath();
        ctx.roundRect(-eye.width * radius, -eye.height * radius, eye.width * radius * 2, eye.height * radius * 2, Math.min(eye.width, eye.height) * radius);
        ctx.fill();
        ctx.restore();
    }
    ctx.restore();
}
