"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState, } from "react";
const clamp = (n) => Math.max(0, Math.min(1, n));
const edge = (value) => typeof value === "number" ? value : value === "top" ? 0 : value === "center" ? 0.5 : 1;
const readOffset = (value) => {
    const n = typeof value === "function" ? value() : value ?? 0;
    return Number.isFinite(n) ? Math.max(0, n) : 0;
};
const initial = { progress: 0, rawProgress: 0, active: false, direction: 1 };
/** Scroll drives progress; the renderer can keep animating a completed shape. */
export function useSwarmScroll(options) {
    const latest = useRef(options);
    latest.current = options;
    const [snapshot, setSnapshot] = useState(initial);
    const current = useRef(snapshot);
    const refreshRef = useRef(() => { });
    const seekRef = useRef(() => { });
    const refresh = useCallback(() => refreshRef.current(), []);
    const scrollTo = useCallback((progress, behavior) => {
        seekRef.current(clamp(Number.isFinite(progress) ? progress : 0), behavior);
    }, []);
    const { target, container, enabled = true, sequence } = options;
    useEffect(() => {
        const node = target.current;
        if (!node)
            return;
        const scroller = container?.current ?? null;
        const eventTarget = scroller ?? window;
        const motion = matchMedia("(prefers-reduced-motion: reduce)");
        const reduced = () => latest.current.reducedMotion ?? motion.matches;
        let frame = 0, lastTime = 0, previousRaw = null;
        let disposed = false;
        const fired = new Set();
        const releaseControl = enabled ? sequence?.control() : undefined;
        const position = () => scroller ? scroller.scrollTop : window.scrollY;
        const range = () => {
            const rect = node.getBoundingClientRect();
            const offset = readOffset(latest.current.offset);
            const viewportTop = scroller ? scroller.getBoundingClientRect().top + scroller.clientTop : 0;
            const viewportHeight = scroller ? scroller.clientHeight : window.innerHeight;
            const top = rect.top - viewportTop + position();
            const available = Math.max(1, viewportHeight - offset);
            const boundary = ([a, b]) => top + rect.height * edge(a) - offset - available * edge(b);
            const start = boundary(latest.current.start ?? ["top", "top"]);
            const end = boundary(latest.current.end ?? ["bottom", "bottom"]);
            return { start, length: Math.max(1, end - start) };
        };
        const publish = (next, force = false) => {
            const old = current.current;
            if (old.progress === next.progress && old.rawProgress === next.rawProgress &&
                old.active === next.active && old.direction === next.direction && !force)
                return;
            current.current = next;
            setSnapshot(next);
            if (enabled)
                sequence?.seek(next.progress * sequence.duration);
            latest.current.onUpdate?.(next);
        };
        const read = (now) => {
            frame = 0;
            if (disposed || !enabled || reduced())
                return;
            if (!node.getClientRects().length)
                return;
            const { start, length } = range();
            const raw = (position() - start) / length;
            const desired = clamp(raw);
            const old = current.current;
            const direction = previousRaw === null || raw === previousRaw ? old.direction : raw > previousRaw ? 1 : -1;
            const scrub = latest.current.scrub;
            const smoothing = typeof scrub === "number" && Number.isFinite(scrub) ? Math.max(0, scrub) : 0;
            const dt = lastTime ? Math.min(0.1, (now - lastTime) / 1000) : 1 / 60;
            lastTime = now;
            let progress = smoothing ? old.progress + (desired - old.progress) * (1 - Math.exp(-dt / smoothing)) : desired;
            if (Math.abs(progress - desired) < 0.0001)
                progress = desired;
            const next = { progress, rawProgress: desired, active: raw >= 0 && raw <= 1, direction };
            const callbacks = latest.current;
            const firstRead = previousRaw === null;
            if (previousRaw === null) {
                if (next.active)
                    callbacks.onEnter?.(next);
            }
            else {
                if (previousRaw < 0 && raw >= 0)
                    callbacks.onEnter?.(next);
                if (previousRaw < 1 && raw >= 1)
                    callbacks.onLeave?.(next);
                if (previousRaw > 1 && raw <= 1)
                    callbacks.onEnterBack?.(next);
                if (previousRaw > 0 && raw <= 0)
                    callbacks.onLeaveBack?.(next);
                for (const trigger of callbacks.triggers ?? []) {
                    if (trigger.once && fired.has(trigger))
                        continue;
                    const forward = previousRaw < trigger.at && raw >= trigger.at;
                    const backward = previousRaw > trigger.at && raw <= trigger.at;
                    if ((forward && trigger.direction !== "backward") ||
                        (backward && (trigger.direction === "backward" || trigger.direction === "both"))) {
                        fired.add(trigger);
                        trigger.onCross(next);
                    }
                }
            }
            previousRaw = raw;
            publish(next, firstRead);
            if (progress !== desired)
                schedule();
        };
        function schedule() {
            if (!disposed && !frame)
                frame = requestAnimationFrame(read);
        }
        refreshRef.current = schedule;
        seekRef.current = (progress, behavior = "smooth") => {
            if (reduced() || !enabled) {
                publish({ ...current.current, progress, rawProgress: progress });
                return;
            }
            const { start, length } = range();
            eventTarget.scrollTo({ top: Math.max(0, start + progress * length), behavior });
            schedule();
        };
        const resize = new ResizeObserver(schedule);
        resize.observe(node);
        if (scroller)
            resize.observe(scroller);
        else
            resize.observe(document.documentElement);
        eventTarget.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", schedule);
        motion.addEventListener("change", schedule);
        document.fonts?.ready.then(() => { if (!disposed)
            schedule(); });
        schedule();
        return () => {
            disposed = true;
            cancelAnimationFrame(frame);
            resize.disconnect();
            eventTarget.removeEventListener("scroll", schedule);
            window.removeEventListener("resize", schedule);
            motion.removeEventListener("change", schedule);
            refreshRef.current = () => { };
            seekRef.current = () => { };
            releaseControl?.();
        };
    }, [target, container, enabled, sequence]);
    useEffect(refresh, [refresh, options.reducedMotion, options.offset, options.start, options.end, options.scrub]);
    return { ...snapshot, refresh, scrollTo };
}
/** Values for CSS helpers, updated on viewport and motion-preference changes. */
function useScrollLayout(offset, reducedMotion) {
    const [layout, setLayout] = useState({ offset: 0, reduced: false });
    useEffect(() => {
        const media = matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setLayout({ offset: readOffset(offset), reduced: reducedMotion ?? media.matches });
        update();
        window.addEventListener("resize", update);
        media.addEventListener("change", update);
        return () => {
            window.removeEventListener("resize", update);
            media.removeEventListener("change", update);
        };
    }, [offset, reducedMotion]);
    return layout;
}
/** Native sticky positioning. The parent supplies the scroll distance. */
export function SwarmScrollPin({ offset, reducedMotion, fullHeight = true, style, ...props }) {
    const layout = useScrollLayout(offset, reducedMotion);
    return _jsx("div", { ...props, "data-swarm-scroll-pin": "", style: {
            ...style,
            position: layout.reduced ? "relative" : "sticky",
            top: layout.reduced ? 0 : layout.offset,
            ...(fullHeight && !layout.reduced ? { minHeight: `calc(100svh - ${layout.offset}px)` } : {}),
        } });
}
/** Snap markers align with useSwarmScroll's default top/top → bottom/bottom range. */
export function SwarmScrollStops({ points, offset, reducedMotion }) {
    const layout = useScrollLayout(offset, reducedMotion);
    if (layout.reduced)
        return null;
    return _jsx("div", { "aria-hidden": "true", "data-swarm-scroll-stops": "", style: {
            position: "absolute", inset: "0 0 auto", height: `max(0px, calc(100% - 100svh + ${layout.offset}px))`, pointerEvents: "none",
        }, children: points.map((point, index) => _jsx("i", { style: {
                position: "absolute", top: `${clamp(point) * 100}%`, left: 0, width: "100%", height: 1,
                scrollSnapAlign: "start", scrollSnapStop: "normal",
            } }, index)) });
}
/** Opt-in native snapping. Never intercepts wheel, touch or keyboard scrolling. */
export function useSwarmScrollSnap(options) {
    const { container, points, offset, enabled = true, type = "proximity" } = options;
    useEffect(() => {
        if (!enabled)
            return;
        const scroller = container?.current ?? document.documentElement;
        const saved = new Map();
        const own = (node, property, value) => {
            if (!saved.has(node))
                saved.set(node, new Map());
            const styles = saved.get(node);
            if (!styles.has(property))
                styles.set(property, { value: node.style.getPropertyValue(property), priority: node.style.getPropertyPriority(property) });
            node.style.setProperty(property, value);
        };
        const update = () => {
            own(scroller, "scroll-snap-type", `y ${type}`);
            own(scroller, "scroll-padding-top", `${readOffset(offset)}px`);
            const nodes = typeof points === "string" ? Array.from(scroller.querySelectorAll(points)) : points.flatMap((ref) => ref.current ? [ref.current] : []);
            nodes.forEach((node) => {
                own(node, "scroll-snap-align", "start");
                own(node, "scroll-snap-stop", "normal");
            });
        };
        update();
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("resize", update);
            saved.forEach((styles, node) => styles.forEach(({ value, priority }, property) => {
                if (value)
                    node.style.setProperty(property, value, priority);
                else
                    node.style.removeProperty(property);
            }));
        };
    }, [container, points, offset, enabled, type]);
}
