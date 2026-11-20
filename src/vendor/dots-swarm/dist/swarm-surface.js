"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useEffect, useImperativeHandle, useRef, useState, } from "react";
import { createPortal } from "react-dom";
import { SwarmPhysics, createRectCollider, } from "./physics.js";
import { createTextCollider } from "./dom-collider.js";
import { swarmActions } from "./actions.js";
import { sampleSurfaceGeometry, paintSolidAvatar, } from "./surface-geometry.js";
/** One particle pool for shapes, gravity, and real DOM controls.
 * The canvas is decorative; children retain their native semantics and focus.
 */
export const SwarmSurface = forwardRef(function SwarmSurface(props, forwardedRef) {
    const root = useRef(null);
    const canvas = useRef(null);
    const [portalHost, setPortalHost] = useState(null);
    useEffect(() => {
        if (props.viewport)
            setPortalHost(document.body);
    }, [props.viewport]);
    const latest = useRef(props);
    latest.current = props;
    const commands = useRef({ act: () => { }, burst: () => { }, refresh: () => { } });
    useImperativeHandle(forwardedRef, () => ({
        act: (action) => commands.current.act(action),
        burst: (options) => commands.current.burst(options),
        refresh: () => commands.current.refresh(),
    }), []);
    const count = Math.round(Math.max(24, Math.min(2400, Number.isFinite(props.count) ? props.count : 1000)));
    useEffect(() => {
        const el = root.current, view = canvas.current;
        if (!el || !view)
            return;
        const ctx = view.getContext("2d");
        if (!ctx)
            return;
        let width = 1, height = 1, dpr = 1, raf = 0, last = 0, time = 0;
        let visible = true, disposed = false, dirty = true;
        let system = null;
        let obstacles = [];
        let boxes = new Map();
        let groups = [];
        const materials = new Map();
        const textElements = new Set();
        let formationStart = 0;
        let formationOrigins = [];
        const ownedOpacity = new Map();
        let actionTargets;
        let declarativeTargets = latest.current.targets;
        const currentTargets = () => {
            if (latest.current.targets !== declarativeTargets) {
                declarativeTargets = latest.current.targets;
                actionTargets = undefined;
            }
            return actionTargets ?? latest.current.targets;
        };
        const isSolid = (target) => (target.renderer || target.kind === "element" || target.kind === "avatar" || target.kind === "text") &&
            (!("appearance" in target) || target.appearance !== "dots");
        const targetSignature = () => currentTargets()
            .map((t) => `${t.id}:${t.kind}:${t.kind === "shape" ? t.shape : ""}:${t.weight ?? 1}:${isSolid(t)}:${t.formation?.delay ?? 0}:${t.formation?.duration ?? 0}`)
            .join("|");
        const restoreOpacity = (node) => {
            const saved = ownedOpacity.get(node);
            if (!saved)
                return;
            if (saved.value)
                node.style.setProperty("opacity", saved.value, saved.priority);
            else
                node.style.removeProperty("opacity");
            ownedOpacity.delete(node);
        };
        let assignment = [], signature = "", charge = 0;
        let burst = null;
        let actionMode = null;
        let actionPhysics = {};
        const emitPhase = (phase, action) => {
            latest.current.onBurstPhaseChange?.(phase);
            latest.current.onActionPhaseChange?.(phase, action);
        };
        let gaze = { x: 0, y: 0 }, pointer = null;
        const motion = matchMedia("(prefers-reduced-motion: reduce)");
        const isReduced = () => latest.current.reducedMotion ?? motion.matches;
        const collisionNodes = (collider) => "selector" in collider
            ? Array.from((props.viewport ? document : el).querySelectorAll(collider.selector))
            : collider.ref.current
                ? [collider.ref.current]
                : [];
        const surfaceBounds = () => props.viewport
            ? {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            }
            : el.getBoundingClientRect();
        const measure = () => {
            dirty = false;
            const bounds = surfaceBounds();
            if (!bounds.width || !bounds.height) {
                // Hidden/unlaid-out surfaces do not provide usable particle origins.
                boxes.clear();
                dirty = true;
                return;
            }
            const oldWidth = width, oldHeight = height;
            width = Math.max(1, bounds.width);
            height = Math.max(1, bounds.height);
            dpr = Math.min(2, devicePixelRatio || 1);
            if (view.width !== Math.round(width * dpr))
                view.width = Math.round(width * dpr);
            if (view.height !== Math.round(height * dpr))
                view.height = Math.round(height * dpr);
            if (system && (oldWidth !== width || oldHeight !== height)) {
                system.particles.forEach((p) => {
                    p.x *= width / oldWidth;
                    p.y *= height / oldHeight;
                    p.vx = 0;
                    p.vy = 0;
                });
            }
            boxes = new Map();
            const solidElements = new Set(currentTargets().flatMap((t) => t.kind === "element" && isSolid(t) && t.ref.current
                ? [t.ref.current]
                : []));
            ownedOpacity.forEach((_, node) => {
                if (!solidElements.has(node))
                    restoreOpacity(node);
            });
            const activeText = new Set(currentTargets().flatMap(t => t.kind === "text" && t.ref.current ? [t.ref.current] : []));
            textElements.forEach(node => {
                if (!activeText.has(node)) {
                    node.style.removeProperty("--swarm-text-opacity");
                    textElements.delete(node);
                }
            });
            activeText.forEach(node => textElements.add(node));
            solidElements.forEach((node) => {
                if (!ownedOpacity.has(node))
                    ownedOpacity.set(node, {
                        value: node.style.getPropertyValue("opacity"),
                        priority: node.style.getPropertyPriority("opacity"),
                        opacity: Number(getComputedStyle(node).opacity),
                    });
            });
            currentTargets().forEach((target) => {
                const rect = target.ref.current?.getBoundingClientRect();
                if (rect && rect.width > 0 && rect.height > 0)
                    boxes.set(target.id, {
                        x: rect.left - bounds.left,
                        y: rect.top - bounds.top,
                        width: rect.width,
                        height: rect.height,
                    });
            });
            obstacles = (latest.current.colliders ?? []).flatMap((collider) => collisionNodes(collider).flatMap((node) => {
                const rect = node.getBoundingClientRect();
                if (!rect.width ||
                    !rect.height ||
                    rect.right < bounds.left ||
                    rect.bottom < bounds.top ||
                    rect.left > bounds.left + width ||
                    rect.top > bounds.top + height)
                    return [];
                const css = getComputedStyle(node);
                if (css.visibility === "hidden" || Number(css.opacity) === 0)
                    return [];
                if (collider.kind === "text")
                    return [createTextCollider(node, bounds)];
                return [
                    createRectCollider(rect.left - bounds.left, rect.top - bounds.top, rect.width, rect.height),
                ];
            }));
        };
        const sample = () => {
            const active = currentTargets().filter((t) => boxes.has(t.id));
            const weight = active.reduce((sum, t) => sum + Math.max(0.01, t.weight ?? 1), 0);
            let remaining = count;
            groups = [];
            const points = active.flatMap((t, i) => {
                const n = i === active.length - 1
                    ? remaining
                    : Math.floor((count * Math.max(0.01, t.weight ?? 1)) / weight);
                groups.push({
                    target: t,
                    start: count - remaining,
                    end: count - remaining + n,
                    blend: 0,
                });
                remaining -= n;
                if (t.renderer)
                    return t.renderer.sample(boxes.get(t.id), n, isReduced() ? 1 : time, gaze, charge);
                return sampleSurfaceGeometry(t.kind === "avatar"
                    ? { ...t, tension: Math.max(t.tension ?? 0, charge) }
                    : t, boxes.get(t.id), n, isReduced() ? 1 : time, gaze);
            });
            return points;
        };
        const assign = (points) => {
            if (!system || points.length !== count)
                return;
            const key = targetSignature();
            if (key === signature && assignment.length === count)
                return;
            signature = key;
            materials.clear();
            formationStart = time;
            formationOrigins = system.particles.map(p => ({ x: p.x, y: p.y }));
            const used = new Uint8Array(count);
            // Only rematch on a formation change, never per animation frame.
            assignment = system.particles.map((p) => {
                let nearest = -1, distance = Infinity;
                for (let i = 0; i < count; i++) {
                    if (used[i])
                        continue;
                    const d = (points[i].x - p.x) ** 2 + (points[i].y - p.y) ** 2;
                    if (d < distance) {
                        nearest = i;
                        distance = d;
                    }
                }
                used[nearest] = 1;
                return nearest;
            });
        };
        function schedule() {
            if (!disposed && visible && !document.hidden && !raf)
                raf = requestAnimationFrame(draw);
        }
        function draw(now) {
            raf = 0;
            if (disposed)
                return;
            const options = latest.current;
            if (dirty)
                measure();
            const reduced = isReduced();
            const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
            last = now;
            if (!options.paused && !reduced)
                time += dt;
            if (reduced && burst) {
                const action = burst.action;
                burst = null;
                actionMode = "form";
                emitPhase("settled", action);
                options.onActionComplete?.(action);
            }
            charge =
                burst?.phase === "charging"
                    ? Math.min(1, (time - burst.start) /
                        Math.max(0.001, burst.release - burst.start))
                    : 0;
            if (burst && !options.paused && !reduced) {
                if (burst.phase === "charging" && time >= burst.release && system) {
                    // The charged pose is already stored in the pool. Release those
                    // exact particles, rather than replacing the body with a new ring.
                    const center = system?.particles.reduce((sum, p) => ({ x: sum.x + p.x / count, y: sum.y + p.y / count }), { x: 0, y: 0 });
                    system?.burst({
                        x: center?.x ?? width / 2,
                        y: center?.y ?? height / 2,
                        ...burst.options,
                    });
                    materials.clear();
                    charge = 0;
                    burst.phase = "scattered";
                    actionMode = "physics";
                    emitPhase("scattered", burst.action);
                }
                if (burst?.phase === "scattered" && time >= burst.gather) {
                    burst.phase = "gathering";
                    if (currentTargets().some(target => target.formation))
                        signature = "";
                    actionMode = "form";
                    emitPhase("gathering", burst.action);
                }
                if (burst?.phase === "scattered" && !burst.legacy && !burst.complete && time >= burst.completion) {
                    burst.complete = true;
                    options.onActionComplete?.(burst.action);
                }
            }
            const points = sample();
            if (!system && points.length === count) {
                const initial = groups.some(group => group.target.formation)
                    ? sampleSurfaceGeometry({ kind: "shape", shape: "cloud" }, { x: 0, y: 0, width, height }, count)
                    : points;
                system = props.createPhysics ? props.createPhysics(initial) : new SwarmPhysics(initial);
                assignment = points.map((_, i) => i);
                signature = targetSignature();
                formationStart = time;
                formationOrigins = initial.map(p => ({ x: p.x, y: p.y }));
                groups.forEach((group) => materials.set(group.target.id, group.target.formation ? 0 : 1));
            }
            if (system) {
                assign(points);
                const targets = points.length === count
                    ? assignment.map((i) => points[i])
                    : undefined;
                if (reduced && targets) {
                    system.particles.forEach((p, i) => {
                        Object.assign(p, targets[i], { vx: 0, vy: 0 });
                    });
                }
                else if (!options.paused) {
                    const falling = (actionMode ?? options.mode) === "physics" || burst?.phase === "scattered";
                    const returning = burst?.phase === "gathering" && burst.reassemble > 0;
                    const arrival = returning
                        ? Math.min(1, (time - burst.gather) / burst.reassemble)
                        : 1;
                    const attraction = arrival * arrival * (3 - 2 * arrival);
                    system.step(dt, {
                        targets: falling ? undefined : targets,
                        colliders: falling ? obstacles : undefined,
                        gravity: falling ? (actionPhysics.gravity ?? options.gravity ?? 650) : 0,
                        wind: falling ? (actionPhysics.wind ?? options.wind ?? 0) : 0,
                        spring: (options.spring ?? 70) *
                            (returning ? 0.003 + attraction * 0.997 : 1),
                        damping: falling
                            ? undefined
                            : returning
                                ? 2 + attraction * ((options.damping ?? 13) - 2)
                                : options.damping,
                        restitution: actionPhysics.restitution ?? options.restitution,
                        bounds: { width, height, top: props.viewport },
                    });
                    if (options.interactive && pointer && !falling) {
                        system.particles.forEach((p) => {
                            const dx = p.x - pointer.x, dy = p.y - pointer.y, distance = Math.hypot(dx, dy);
                            if (distance > 0 && distance < 65) {
                                const force = (1 - distance / 65) * 850 * dt;
                                p.vx += (dx / distance) * force;
                                p.vy += (dy / distance) * force;
                            }
                        });
                    }
                }
            }
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, width, height);
            const radius = Math.max(0.4, Math.min(4, options.dotSize ?? 1.2));
            const falling = !reduced &&
                ((actionMode ?? options.mode) === "physics" || burst?.phase === "scattered");
            if (props.viewport)
                view.style.zIndex =
                    falling || burst?.phase === "gathering" ? "100" : "1";
            const groupForPoint = new Int16Array(points.length);
            groups.forEach((group, groupIndex) => groupForPoint.fill(groupIndex, group.start, group.end));
            // Scheduled lettering travels from the existing particles in reading
            // order. Physics actions still take over during rain/explosion.
            if (!falling && !reduced && !options.paused)
                system?.particles.forEach((particle, i) => {
                    const targetIndex = assignment[i], target = points[targetIndex];
                    const formation = groups[groupForPoint[targetIndex]]?.target.formation;
                    const origin = formationOrigins[i];
                    if (!formation || !target || !origin)
                        return;
                    const delay = Number.isFinite(formation.delay) ? Math.max(0, formation.delay) : 0;
                    const duration = Number.isFinite(formation.duration) ? Math.max(.05, formation.duration) : .6;
                    const progress = Math.max(0, Math.min(1, (time - formationStart - delay) / duration));
                    const eased = progress * progress * (3 - 2 * progress);
                    particle.x = origin.x + (target.x - origin.x) * eased;
                    particle.y = origin.y + (target.y - origin.y) * eased;
                    particle.vx = particle.vy = 0;
                });
            const error = new Float64Array(groups.length);
            system?.particles.forEach((p, i) => {
                const index = assignment[i], target = points[index];
                if (target)
                    error[groupForPoint[index]] += Math.hypot(p.x - target.x, p.y - target.y);
            });
            groups.forEach((group, i) => {
                const target = group.target, box = boxes.get(target.id);
                if (!isSolid(target))
                    return;
                let blend = materials.get(target.id) ?? 0;
                if (reduced)
                    blend = 1;
                else if (!options.paused) {
                    if (falling)
                        blend = 0;
                    else {
                        const meanError = error[i] / Math.max(1, group.end - group.start);
                        // Reveal the DOM only after particles trace the actual surface.
                        const arrival = Math.max(0, Math.min(1, (8 - meanError) / 6));
                        const formation = target.formation;
                        const gate = formation ? Math.max(0, Math.min(1, (time - formationStart - (Number.isFinite(formation.delay) ? Math.max(0, formation.delay) : 0) - (Number.isFinite(formation.duration) ? Math.max(.05, formation.duration) : .6)) / .18)) : 1;
                        blend = Math.max(blend, Math.min(arrival, gate, blend + dt * (formation ? 6 : 2.4)));
                    }
                }
                materials.set(target.id, blend);
                group.blend = blend * blend * (3 - 2 * blend);
                if (target.renderer) {
                    target.renderer.paint(ctx, box, reduced ? 1 : time, gaze, group.blend, charge);
                }
                else if (target.kind === "text" && target.ref.current) {
                    target.ref.current.style.setProperty("--swarm-text-opacity", String(group.blend));
                }
                else if (target.kind === "element" && target.ref.current) {
                    // Hand the finish to the real HTML, including its content, focus,
                    // hover styles, borders, and shadows. Restore inline styles on exit.
                    target.ref.current.style.opacity = String(group.blend *
                        (ownedOpacity.get(target.ref.current)?.opacity ?? 1));
                }
                else if (target.kind === "avatar") {
                    paintSolidAvatar(ctx, box, target.expression ?? "neutral", reduced ? 1 : time, gaze, target.color ?? options.color ?? "#75b6ff", group.blend, Math.max(target.tension ?? 0, charge));
                }
            });
            if (burst?.phase === "gathering" &&
                time >= burst.gather + burst.reassemble &&
                groups.length > 0 &&
                groups.every((group, i) => isSolid(group.target)
                    ? group.blend >= 1
                    : error[i] / Math.max(1, group.end - group.start) < 6)) {
                const action = burst.action;
                burst = null;
                emitPhase("settled", action);
                options.onActionComplete?.(action);
            }
            // A continuous spectrum shared by the whole formation.
            const color = options.rainbow
                ? `hsl(${(time * 24 + 200) % 360} 85% 76%)`
                : (options.color ?? "#ffffff");
            system?.particles.forEach((p, i) => {
                const group = groups[groupForPoint[assignment[i]]];
                const blend = group?.blend ?? 0;
                if (blend >= 1) {
                    // Keep the invisible pool exactly under the finished object so
                    // later bursts originate from its current layout and pose.
                    const target = points[assignment[i]];
                    if (target)
                        Object.assign(p, target, { vx: 0, vy: 0 });
                    return;
                }
                ctx.fillStyle = group?.target.color ?? color;
                ctx.globalAlpha =
                    Math.max(0, Math.min(1, p.opacity ?? 0.8)) * (1 - blend);
                const box = group && boxes.get(group.target.id);
                const filledSize = group && box && isSolid(group.target) && group.target.kind !== "text"
                    ? Math.sqrt((box.width * box.height) /
                        Math.max(1, group.end - group.start)) * 0.55
                    : radius;
                const dotRadius = radius + (Math.max(radius, filledSize) - radius) * blend;
                ctx.beginPath();
                ctx.arc(p.x, p.y, dotRadius * (0.75 + (i % 5) * 0.09), 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.globalAlpha = 1;
            const nativeAtRest = groups.length > 0 &&
                groups.every((group) => group.target.kind === "element" && group.blend === 1);
            if (!options.paused && !reduced && (!nativeAtRest || burst))
                schedule();
        }
        const refresh = () => {
            dirty = true;
            schedule();
        };
        const resized = new ResizeObserver(refresh);
        resized.observe(el);
        const observed = new Set();
        const observeChildren = () => {
            resized.disconnect();
            resized.observe(el);
            observed.clear();
            const nodes = [
                ...currentTargets().flatMap((t) => t.ref.current ? [t.ref.current] : []),
                ...(latest.current.colliders ?? []).flatMap(collisionNodes),
            ];
            nodes.forEach((node) => {
                if (!observed.has(node)) {
                    resized.observe(node);
                    observed.add(node);
                }
            });
            refresh();
        };
        const intersection = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            last = 0;
            // Layout may have changed while this pool was offscreen, even when
            // its own size stayed the same. Sample again before resuming.
            dirty = true;
            if (visible)
                schedule();
            else {
                cancelAnimationFrame(raf);
                raf = 0;
                if (props.viewport)
                    ctx.clearRect(0, 0, view.width, view.height);
            }
        }, { rootMargin: "100px" });
        intersection.observe(el);
        const visibility = () => {
            last = 0;
            if (document.hidden) {
                cancelAnimationFrame(raf);
                raf = 0;
            }
            else
                schedule();
        };
        const move = (event) => {
            const rect = el.getBoundingClientRect();
            const bounds = surfaceBounds();
            pointer = {
                x: event.clientX - bounds.left,
                y: event.clientY - bounds.top,
            };
            gaze = {
                x: ((event.clientX - rect.left) / Math.max(1, rect.width)) * 2 - 1,
                y: ((event.clientY - rect.top) / Math.max(1, rect.height)) * 2 - 1,
            };
        };
        const leave = () => {
            pointer = null;
            gaze = { x: 0, y: 0 };
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        document.addEventListener("visibilitychange", visibility);
        motion.addEventListener("change", refresh);
        window.addEventListener("resize", refresh);
        // Measure targets in their current surface space after page or nested
        // scrolling. Particles on local surfaces keep their local coordinates.
        window.addEventListener("scroll", refresh, {
            passive: true,
            capture: true,
        });
        document.fonts?.ready.then(() => {
            if (!disposed)
                refresh();
        });
        const seconds = (value, fallback) => Number.isFinite(value) ? Math.max(0, Math.min(3600, value)) : fallback;
        const act = (action, legacy) => {
            if (action.type === "reform") {
                if (currentTargets().some(target => target.formation))
                    signature = "";
                if (action.targets) {
                    declarativeTargets = latest.current.targets;
                    actionTargets = action.targets;
                    materials.clear();
                }
                actionMode = "form";
                actionPhysics = {};
            }
            else {
                actionMode = action.type === "rain" ? "physics" : "form";
                actionPhysics = {
                    gravity: action.gravity,
                    wind: action.wind,
                    restitution: action.restitution,
                };
            }
            const anticipation = action.type === "explode" ? seconds(action.anticipation, 0) : 0;
            const duration = seconds(action.duration, action.type === "rain" ? Infinity : 0.6);
            burst = {
                action,
                complete: false,
                completion: action.type === "reform" ? Infinity : time + anticipation + duration,
                legacy: !!legacy,
                options: action.type === "explode" ? action : {},
                start: time,
                release: time + anticipation,
                gather: action.type === "reform" ? time : legacy ? time + anticipation + duration : Infinity,
                reassemble: action.type === "reform" ? seconds(action.duration, 1.2) : seconds(legacy?.reassemble, 0),
                phase: action.type === "reform" ? "gathering" : action.type === "rain" ? "scattered" : "charging",
            };
            if (action.type === "rain")
                materials.clear();
            observeChildren();
            emitPhase(burst.phase, action);
            last = 0;
            schedule();
        };
        commands.current = {
            act,
            refresh: observeChildren,
            burst: (options) => {
                if (isReduced() || latest.current.paused)
                    return;
                act(swarmActions.explode({ ...options, duration: options?.duration ?? 0.28 }), options ?? {});
            },
        };
        observeChildren();
        return () => {
            disposed = true;
            cancelAnimationFrame(raf);
            resized.disconnect();
            intersection.disconnect();
            el.removeEventListener("pointermove", move);
            el.removeEventListener("pointerleave", leave);
            document.removeEventListener("visibilitychange", visibility);
            motion.removeEventListener("change", refresh);
            window.removeEventListener("resize", refresh);
            window.removeEventListener("scroll", refresh, true);
            commands.current = { act: () => { }, burst: () => { }, refresh: () => { } };
            ownedOpacity.forEach((_, node) => restoreOpacity(node));
            textElements.forEach(node => node.style.removeProperty("--swarm-text-opacity"));
        };
    }, [count, props.viewport, props.viewport ? portalHost : null, props.createPhysics]);
    useEffect(() => {
        commands.current.refresh();
    }, [
        props.targets,
        props.colliders,
        props.mode,
        props.paused,
        props.reducedMotion,
        props.color,
        props.rainbow,
        props.dotSize,
    ]);
    const drawing = (_jsx("canvas", { ref: canvas, "aria-hidden": "true", "data-swarm-viewport": props.viewport || undefined, style: {
            position: props.viewport ? "fixed" : "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: props.viewport ? 100 : 2,
        } }));
    return (_jsxs("div", { ref: root, className: props.className, style: { position: "relative", isolation: "isolate", ...props.style }, children: [props.viewport
                ? portalHost && createPortal(drawing, portalHost)
                : drawing, props.children] }));
});
