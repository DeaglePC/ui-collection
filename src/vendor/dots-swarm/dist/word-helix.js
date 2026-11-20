"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment, useEffect, useLayoutEffect, useMemo, useRef, } from "react";
import { sampleWordHelix } from "./word-helix-geometry.js";
import { getShapePoints } from "./shapes.js";
/** Real words preserve their DOM identity while following the built-in helix shape. */
export function WordHelix({ children, progress = 1, animate = true, speed = 1, transitionDuration = 1.4, paused = false, reducedMotion = false, style, ...props }) {
    const root = useRef(null);
    const paragraph = useRef(null);
    const latest = useRef({
        progress,
        animate,
        speed,
        transitionDuration,
        paused,
        reducedMotion,
    });
    latest.current = {
        progress,
        animate,
        speed,
        transitionDuration,
        paused,
        reducedMotion,
    };
    const render = useRef(() => { });
    const units = useMemo(() => children.split(/(\s+)/), [children]);
    useLayoutEffect(() => {
        const element = root.current, text = paragraph.current;
        if (!element || !text)
            return;
        const words = Array.from(text.querySelectorAll("[data-helix-word]"));
        const media = matchMedia("(prefers-reduced-motion: reduce)");
        let origins = [], width = 0, height = 0;
        const clampProgress = (value) => Number.isFinite(value) ? Math.max(0, Math.min(1, value)) : 0;
        let currentProgress = clampProgress(latest.current.progress);
        let shapeTime = 0;
        let frame = 0;
        let lastTime = 0;
        let visible = true;
        const isReduced = () => latest.current.reducedMotion || media.matches;
        const paint = () => {
            if (!origins.length)
                return;
            const progress = isReduced() ? 0 : currentProgress;
            const destinations = getShapePoints("helix", words.length, shapeTime);
            element.dataset.helixProgress = progress.toFixed(3);
            for (let index = 0; index < words.length; index++) {
                const pose = sampleWordHelix(origins[index], index, words.length, width, height, progress, destinations[index % destinations.length]);
                const node = words[index];
                node.style.transform =
                    progress === 0
                        ? "none"
                        : `translate3d(${pose.x}px,${pose.y}px,0) scale(${pose.scale})`;
                node.style.opacity = String(pose.opacity);
                node.style.zIndex = String(pose.zIndex);
            }
        };
        const canAnimate = () => {
            const options = latest.current;
            return (words.length > 0 &&
                visible &&
                !document.hidden &&
                !options.paused &&
                !isReduced() &&
                (currentProgress !== clampProgress(options.progress) ||
                    (options.animate &&
                        currentProgress > 0 &&
                        Number.isFinite(options.speed) &&
                        options.speed !== 0)));
        };
        const tick = (timestamp) => {
            frame = 0;
            const dt = lastTime ? Math.min((timestamp - lastTime) / 1000, 0.05) : 0;
            lastTime = timestamp;
            const options = latest.current;
            const target = clampProgress(options.progress);
            const duration = Number.isFinite(options.transitionDuration)
                ? Math.max(0, options.transitionDuration)
                : 1.4;
            const step = duration > 0 ? dt / duration : 1;
            currentProgress +=
                Math.sign(target - currentProgress) *
                    Math.min(Math.abs(target - currentProgress), step);
            if (options.animate && Number.isFinite(options.speed)) {
                shapeTime += dt * options.speed * currentProgress;
            }
            paint();
            if (canAnimate())
                frame = requestAnimationFrame(tick);
            else
                lastTime = 0;
        };
        const sync = () => {
            const options = latest.current;
            if (isReduced()) {
                currentProgress = 0;
                shapeTime = 0;
            }
            else if (!options.paused) {
                if (options.transitionDuration <= 0)
                    currentProgress = clampProgress(options.progress);
            }
            paint();
            if (canAnimate()) {
                if (!frame)
                    frame = requestAnimationFrame(tick);
            }
            else {
                cancelAnimationFrame(frame);
                frame = 0;
                lastTime = 0;
            }
        };
        const measure = () => {
            width = element.clientWidth;
            height = element.clientHeight;
            if (!width || !height)
                return;
            // Offset geometry ignores animated transforms and remains stable on resize.
            const x = text.offsetLeft, y = text.offsetTop;
            origins = words.map((node) => ({
                x: x + node.offsetLeft,
                y: y + node.offsetTop,
                width: node.offsetWidth,
                height: node.offsetHeight,
            }));
            paint();
        };
        render.current = sync;
        const resize = new ResizeObserver(measure);
        resize.observe(element);
        resize.observe(text);
        document.fonts?.addEventListener("loadingdone", measure);
        media.addEventListener("change", sync);
        document.addEventListener("visibilitychange", sync);
        const intersection = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            sync();
        });
        intersection.observe(element);
        measure();
        sync();
        return () => {
            cancelAnimationFrame(frame);
            intersection.disconnect();
            resize.disconnect();
            document.fonts?.removeEventListener("loadingdone", measure);
            media.removeEventListener("change", sync);
            document.removeEventListener("visibilitychange", sync);
            render.current = () => { };
        };
    }, [units]);
    useEffect(() => render.current(), [progress, animate, speed, transitionDuration, paused, reducedMotion]);
    return (_jsx("div", { ...props, ref: root, style: {
            position: "relative",
            display: "grid",
            placeItems: "center",
            height: 480,
            ...style,
        }, children: _jsx("p", { ref: paragraph, style: {
                position: "relative",
                margin: 0,
                width: "100%",
                maxWidth: 740,
                lineHeight: 1.7,
            }, children: units.map((unit, index) => /^\s+$/.test(unit) ? (_jsx(Fragment, { children: unit }, index)) : unit ? (_jsx("span", { "data-helix-word": "", style: {
                    position: "relative",
                    display: "inline-block",
                    transformOrigin: "center",
                    whiteSpace: "nowrap",
                }, children: unit }, index)) : null) }) }));
}
