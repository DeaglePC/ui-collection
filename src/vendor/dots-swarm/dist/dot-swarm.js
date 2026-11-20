"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { animatePoint } from "./point-motion.js";
import { ParticlePainter } from "./particle-painter.js";
import { particleAppearance, particleCount, particleRandom, } from "./particle-object.js";
import { useEffect, useRef } from "react";
import { getShapePoints, matchPoints, noise, } from "./shapes.js";
const clamp = (value, low, high, fallback) => Number.isFinite(value) ? Math.max(low, Math.min(high, value)) : fallback;
// Stable target identities let the springs follow a moving surface without
// restarting the morph or rematching the particle pool every frame.
/** Responsive Canvas renderer. A fixed pool preserves identity and momentum across morphs. */
export function DotSwarm({ shape = "cloud", points, motion, count = 900, color = "#eef0e9", speed = 1, choreography = "flow", transitionDuration = 2.4, dotSize = 1.25, particle, backdrop, spread = 1, paused = false, interactive = false, reducedMotion = false, className, style, label, onTransitionChange, onMaterialStatus, }) {
    const canvasRef = useRef(null);
    const rootRef = useRef(null);
    const htmlLayer = useRef(null);
    const heldHTML = useRef({
        hovered: null,
        focused: null,
    });
    const wake = useRef(() => { });
    const options = useRef({
        shape,
        points,
        motion,
        count,
        color,
        speed,
        choreography,
        transitionDuration,
        dotSize,
        particle,
        backdrop,
        spread,
        paused,
        interactive,
        reducedMotion,
        onTransitionChange,
        onMaterialStatus,
    });
    useEffect(() => {
        options.current = {
            shape,
            points,
            motion,
            count,
            color,
            speed,
            choreography,
            transitionDuration,
            dotSize,
            particle,
            backdrop,
            spread,
            paused,
            interactive,
            reducedMotion,
            onTransitionChange,
            onMaterialStatus,
        };
        wake.current();
    }, [
        shape,
        points,
        motion,
        count,
        color,
        speed,
        choreography,
        transitionDuration,
        dotSize,
        particle,
        backdrop,
        spread,
        paused,
        interactive,
        reducedMotion,
        onTransitionChange,
        onMaterialStatus,
    ]);
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (!canvas || !context)
            return;
        let width = 1, height = 1, dpr = 1, unit = 1;
        let frame = 0, previous = 0, time = 0, transitionAt = 0;
        let visible = true, disposed = false, transitioning = false;
        let lastShape;
        let lastMotion;
        let lastPoints;
        let lastMaterialStatus;
        let sampled = [];
        let particles = [];
        const pointer = { x: 99, y: 99 };
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        const schedule = () => {
            if (!frame && !disposed && visible && !document.hidden)
                frame = requestAnimationFrame(draw);
        };
        wake.current = schedule;
        const painter = new ParticlePainter(schedule);
        const fontsChanged = () => painter.invalidate();
        document.fonts?.addEventListener("loadingdone", fontsChanged);
        const resize = new ResizeObserver(([entry]) => {
            width = entry.contentRect.width;
            height = entry.contentRect.height;
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            unit = Math.min(width, height) * 0.42;
            schedule();
        });
        const intersection = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            previous = 0;
            if (visible)
                schedule();
            else {
                cancelAnimationFrame(frame);
                frame = 0;
            }
        }, { rootMargin: "80px" });
        const visibility = () => {
            previous = 0;
            schedule();
        };
        const move = (event) => {
            const rect = canvas.getBoundingClientRect();
            pointer.x = (event.clientX - rect.left - width / 2) / Math.max(1, unit);
            pointer.y = (event.clientY - rect.top - height / 2) / Math.max(1, unit);
            schedule();
        };
        const leave = () => {
            pointer.x = pointer.y = 99;
            schedule();
        };
        function draw(now) {
            frame = 0;
            if (!context || !canvas || disposed)
                return;
            const c = options.current;
            const reduce = c.reducedMotion || media.matches;
            const amount = particleCount(c.count, c.particle);
            const dt = previous ? Math.min((now - previous) / 1000, 0.05) : 1 / 60;
            previous = now;
            const step = dt * clamp(c.speed, 0.1, 3, 1);
            if (!c.paused && !reduce)
                time += step;
            const changed = lastShape !== c.shape ||
                lastPoints !== c.points ||
                lastMotion !== c.motion ||
                particles.length !== amount;
            if (changed && c.points?.length) {
                const valid = c.points.filter((p) => Number.isFinite(p.x) &&
                    Number.isFinite(p.y) &&
                    Number.isFinite(p.z));
                sampled = valid.length
                    ? Array.from({ length: amount }, (_, i) => valid[Math.floor((i * valid.length) / amount)])
                    : [];
            }
            const destinations = c.points?.length && sampled.length
                ? sampled.map((p) => animatePoint(p, c.motion, reduce ? 0 : time))
                : getShapePoints(c.shape, amount, reduce ? 0 : time);
            if (changed) {
                const first = particles.length === 0;
                const origin = getShapePoints("cloud", amount, time);
                while (particles.length < amount) {
                    const p = first
                        ? destinations[particles.length]
                        : origin[particles.length];
                    particles.push({
                        ...p,
                        vx: 0,
                        vy: 0,
                        vz: 0,
                        from: { ...p },
                        target: particles.length,
                    });
                }
                particles.length = amount;
                const assignment = first
                    ? particles.map((_, i) => i)
                    : matchPoints(particles, destinations);
                particles.forEach((p, i) => {
                    p.from = { x: p.x, y: p.y, z: p.z };
                    p.target = assignment[i];
                });
                transitionAt = first ? time - 30 : time;
                lastShape = c.shape;
                lastPoints = c.points;
                lastMotion = c.motion;
            }
            const duration = clamp(c.transitionDuration, 0, 30, 2.4);
            const elapsed = time - transitionAt;
            const active = !reduce && !c.paused && elapsed < duration;
            if (active !== transitioning) {
                transitioning = active;
                c.onTransitionChange?.(active);
            }
            const envelope = Math.sin(Math.min(1, elapsed / Math.max(0.001, duration * 0.7083)) * Math.PI) ** 2;
            const size = clamp(c.dotSize, 0.4, 4, 1.25) *
                Math.max(0.55, Math.min(1, unit / 140));
            const scale = clamp(c.spread, 0.4, 1.5, 1);
            const buckets = Array.from({ length: 8 }, () => []);
            context.setTransform(dpr, 0, 0, dpr, 0, 0);
            context.clearRect(0, 0, width, height);
            if (c.backdrop) {
                context.save();
                c.backdrop(context, { width, height, time: reduce ? 0 : time });
                context.restore();
            }
            if (c.particle) {
                painter.prepare(c.particle, c.color);
                const materialStatus = painter.beginFrame(context, width, height, c.particle, c.color, {
                    time,
                    pointer: pointer.x === 99
                        ? undefined
                        : {
                            x: width / 2 + pointer.x * unit,
                            y: height / 2 + pointer.y * unit,
                        },
                });
                if (materialStatus !== lastMaterialStatus) {
                    lastMaterialStatus = materialStatus;
                    if (materialStatus !== undefined)
                        c.onMaterialStatus?.(materialStatus ? "ready" : "unavailable");
                }
            }
            for (let i = 0; i < amount; i++) {
                const p = particles[i], target = destinations[p.target];
                const held = c.particle?.kind === "html" &&
                    c.particle.holdOnInteraction &&
                    (heldHTML.current.hovered === i || heldHTML.current.focused === i);
                let x = target.x, y = target.y;
                if (!reduce) {
                    const distance = Math.hypot(target.x - p.from.x, target.y - p.from.y);
                    const arc = c.choreography === "scatter"
                        ? 0.55
                        : c.choreography === "flow"
                            ? Math.min(0.2, distance * 0.13)
                            : 0;
                    const angle = noise(i + 82) * Math.PI * 2 + elapsed * 0.4;
                    x += Math.cos(angle) * arc * envelope;
                    y += Math.sin(angle) * arc * envelope;
                    const dx = p.x - pointer.x / scale, dy = p.y - pointer.y / scale;
                    const d = Math.hypot(dx, dy);
                    if (c.interactive && d < 0.32 && d > 0.001) {
                        x += (dx / d) * (0.32 - d) * 0.7;
                        y += (dy / d) * (0.32 - d) * 0.7;
                    }
                    x += Math.sin(time * 0.7 + i * 0.9) * 0.003;
                }
                if (held) {
                    p.vx = p.vy = p.vz = 0;
                }
                else if (reduce || duration === 0 || (changed && c.paused)) {
                    p.x = x;
                    p.y = y;
                    p.z = target.z;
                    p.vx = p.vy = p.vz = 0;
                }
                else if (!c.paused) {
                    // Analytic critically damped springs retain velocity when a morph is interrupted.
                    const omega = 7.5 * (2.4 / Math.max(0.08, duration)), decay = Math.exp(-omega * step);
                    const ax = p.x - x, bx = p.vx + omega * ax;
                    const ay = p.y - y, by = p.vy + omega * ay;
                    const az = p.z - target.z, bz = p.vz + omega * az;
                    p.x = x + (ax + bx * step) * decay;
                    p.vx = (p.vx - omega * bx * step) * decay;
                    p.y = y + (ay + by * step) * decay;
                    p.vy = (p.vy - omega * by * step) * decay;
                    p.z = target.z + (az + bz * step) * decay;
                    p.vz = (p.vz - omega * bz * step) * decay;
                }
                const depth = Math.max(0, Math.min(1, (p.z + 1) / 2));
                const bucket = Math.min(7, Math.floor((depth * 0.7 + noise(i + 61) * 0.3) * 8));
                const screenX = width / 2 + p.x * unit * scale;
                const screenY = height / 2 + p.y * unit * scale;
                if (c.particle) {
                    const appearance = particleAppearance(c.particle, i, time, p.vx, p.vy, reduce);
                    const diameter = appearance.size * (0.8 + depth * 0.25);
                    const opacity = held ? 1 : 0.5 + depth * 0.5;
                    painter.draw(context, c.particle, c.color, i, screenX, screenY, diameter, appearance.angle, opacity);
                    if (c.particle.kind === "html") {
                        const element = htmlLayer.current?.children[i];
                        if (element) {
                            element.style.width = element.style.height = `${diameter}px`;
                            element.style.transform = `translate3d(${screenX - diameter / 2}px,${screenY - diameter / 2}px,0) rotate(${appearance.angle}rad)`;
                            element.style.opacity = String(opacity);
                            element.style.zIndex = String(held ? 1000 : Math.round(depth * 100));
                        }
                    }
                }
                else
                    buckets[bucket].push(screenX, screenY);
            }
            painter.endFrame(context);
            context.fillStyle = c.color;
            buckets.forEach((coords, index) => {
                context.globalAlpha = 0.2 + (index / 7) * 0.8;
                context.beginPath();
                const radius = size * (0.68 + (index / 7) * 0.52);
                for (let j = 0; j < coords.length; j += 2) {
                    context.moveTo(coords[j] + radius, coords[j + 1]);
                    context.arc(coords[j], coords[j + 1], radius, 0, Math.PI * 2);
                }
                context.fill();
            });
            context.globalAlpha = 1;
            if (!c.paused && !reduce)
                schedule();
        }
        resize.observe(canvas);
        intersection.observe(canvas);
        media.addEventListener("change", schedule);
        document.addEventListener("visibilitychange", visibility);
        const pointerTarget = rootRef.current ?? canvas;
        pointerTarget.addEventListener("pointermove", move);
        pointerTarget.addEventListener("pointerleave", leave);
        pointerTarget.addEventListener("pointercancel", leave);
        schedule();
        return () => {
            disposed = true;
            cancelAnimationFrame(frame);
            resize.disconnect();
            intersection.disconnect();
            painter.dispose();
            document.fonts?.removeEventListener("loadingdone", fontsChanged);
            wake.current = () => { };
            media.removeEventListener("change", schedule);
            document.removeEventListener("visibilitychange", visibility);
            pointerTarget.removeEventListener("pointermove", move);
            pointerTarget.removeEventListener("pointerleave", leave);
            pointerTarget.removeEventListener("pointercancel", leave);
        };
    }, []);
    return (_jsxs("div", { ref: rootRef, className: className, style: { position: "relative", width: "100%", height: "100%", ...style }, "data-particle-kind": particle?.kind ?? "dot", role: particle?.kind === "html" ? "group" : undefined, "aria-label": particle?.kind === "html"
            ? (label ?? "A swarm of interactive elements")
            : undefined, children: [_jsx("canvas", { ref: canvasRef, style: { display: "block", width: "100%", height: "100%" }, role: particle?.kind === "html" ? undefined : "img", "aria-hidden": particle?.kind === "html" || undefined, "aria-label": particle?.kind === "html"
                    ? undefined
                    : (label ??
                        `A swarm of dots forming ${points?.length ? "a custom shape" : shape}`) }), particle?.kind === "html" && (_jsx("div", { ref: htmlLayer, style: { position: "absolute", inset: 0, pointerEvents: "none" }, children: Array.from({ length: particleCount(count, particle) }, (_, index) => (_jsx("div", { "data-particle-index": index, onPointerEnter: (event) => {
                        if (event.pointerType !== "touch")
                            heldHTML.current.hovered = index;
                    }, onPointerLeave: () => {
                        if (heldHTML.current.hovered === index)
                            heldHTML.current.hovered = null;
                    }, onFocusCapture: () => {
                        heldHTML.current.focused = index;
                    }, onBlurCapture: (event) => {
                        if (!event.currentTarget.contains(event.relatedTarget))
                            heldHTML.current.focused = null;
                    }, style: {
                        position: "absolute",
                        left: 0,
                        top: 0,
                        opacity: 0,
                        display: "grid",
                        placeItems: "center",
                        pointerEvents: "auto",
                        transformOrigin: "center",
                    }, children: particle.render({
                        index,
                        random: particleRandom(index, particle.seed),
                    }) }, index))) }))] }));
}
