"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState, } from "react";
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const finite = (value, fallback) => Number.isFinite(value) ? value : fallback;
const ImageEffect = forwardRef(function ImageEffect({ src, alt, trigger = "manual", revealed, defaultRevealed = false, onRevealedChange, duration = 0.85, dotSize = 5, color = "#f4f4f5", background = "#101014", aspectRatio = "3 / 2", crossOrigin, onError, className = "", style, }, ref) {
    const host = useRef(null), image = useRef(null), canvas = useRef(null);
    const frame = useRef(null), progress = useRef(0);
    const [internal, setInternal] = useState(defaultRevealed), [status, setStatus] = useState("loading"), [revision, setRevision] = useState(0);
    const isRevealed = revealed ?? internal;
    const current = useRef(isRevealed), controlled = useRef(revealed), callback = useRef(onRevealedChange), errorCallback = useRef(onError);
    current.current = isRevealed;
    controlled.current = revealed;
    callback.current = onRevealedChange;
    errorCallback.current = onError;
    const hovering = useRef(false), focused = useRef(false);
    const request = useCallback((next) => {
        if (controlled.current === undefined)
            setInternal(next);
        if (next !== current.current)
            callback.current?.(next);
    }, []);
    useImperativeHandle(ref, () => ({
        reveal: () => request(true),
        conceal: () => request(false),
        toggle: () => request(!current.current),
    }), [request]);
    useEffect(() => {
        const node = image.current, container = host.current;
        if (!node || !container)
            return;
        let disposed = false;
        setStatus("loading");
        frame.current = null;
        const fail = (error, missing = false) => {
            if (disposed)
                return;
            frame.current = null;
            setStatus(missing ? "error" : "fallback");
            errorCallback.current?.(error);
        };
        const build = () => {
            if (disposed || !node.complete || !node.naturalWidth)
                return;
            const bounds = container.getBoundingClientRect();
            if (!bounds.width || !bounds.height)
                return;
            const scale = Math.min(1, 960 / Math.max(bounds.width, bounds.height));
            const width = Math.max(1, Math.round(bounds.width * scale)), height = Math.max(1, Math.round(bounds.height * scale));
            const size = Math.max(clamp(finite(dotSize, 5), 2, 24) * scale, Math.sqrt((width * height) / 40000));
            try {
                const cells = [];
                const bitmap = document.createElement("canvas");
                bitmap.width = width;
                bitmap.height = height;
                const paint = bitmap.getContext("2d");
                paint.fillStyle = background;
                paint.fillRect(0, 0, width, height);
                paint.fillStyle = color;
                for (let y = 0, row = 0; y < height; y += size, row++) {
                    for (let x = 0, col = 0; x < width; x += size, col++) {
                        const noise = ((Math.imul(col + 1, 374761393) ^
                            Math.imul(row + 1, 668265263)) >>>
                            0) /
                            4294967295;
                        const radius = noise > 0.64 ? size * 0.22 : 0;
                        const cell = {
                            x,
                            y,
                            radius,
                            threshold: (x / width) * 0.65 + noise * 0.35,
                        };
                        cells.push(cell);
                        if (radius) {
                            paint.beginPath();
                            paint.arc(x + size / 2, y + size / 2, radius, 0, Math.PI * 2);
                            paint.fill();
                        }
                    }
                }
                frame.current = { width, height, size, cells, bitmap };
                setStatus("ready");
                setRevision((value) => value + 1);
            }
            catch {
                fail(new Error("The image effect could not be rendered."));
            }
        };
        const failed = () => fail(new Error(`Could not load image: ${src}`), true);
        node.addEventListener("load", build);
        node.addEventListener("error", failed);
        const observer = new ResizeObserver(build);
        observer.observe(container);
        if (node.complete) {
            if (node.naturalWidth)
                build();
            else if (node.currentSrc)
                failed();
        }
        return () => {
            disposed = true;
            node.removeEventListener("load", build);
            node.removeEventListener("error", failed);
            observer.disconnect();
        };
    }, [src, crossOrigin, dotSize, color, background]);
    useEffect(() => {
        const data = frame.current, node = canvas.current, context = node?.getContext("2d");
        if (!data || !node || !context)
            return;
        node.width = data.width;
        node.height = data.height;
        const start = progress.current, target = isRevealed ? 1 : 0, began = performance.now();
        const motion = matchMedia("(prefers-reduced-motion: reduce)");
        let raf = 0;
        const draw = (amount) => {
            progress.current = amount;
            context.clearRect(0, 0, data.width, data.height);
            if (amount <= 0) {
                context.drawImage(data.bitmap, 0, 0);
                return;
            }
            if (amount >= 1)
                return;
            for (const cell of data.cells) {
                // A feathered, ordered dissolve travels across the image in both directions.
                const opacity = 1 - clamp((amount * 1.18 - cell.threshold) / 0.18, 0, 1);
                if (!opacity)
                    continue;
                context.globalAlpha = opacity;
                context.fillStyle = background;
                context.fillRect(cell.x, cell.y, data.size + 0.5, data.size + 0.5);
                if (cell.radius) {
                    context.fillStyle = color;
                    context.beginPath();
                    context.arc(cell.x + data.size / 2, cell.y + data.size / 2, cell.radius, 0, Math.PI * 2);
                    context.fill();
                }
            }
            context.globalAlpha = 1;
        };
        const tick = (now) => {
            const elapsed = motion.matches
                ? 1
                : clamp((now - began) / Math.max(1, finite(duration, 0.85) * 1000), 0, 1);
            const eased = elapsed * elapsed * (3 - 2 * elapsed);
            draw(start + (target - start) * eased);
            if (elapsed < 1)
                raf = requestAnimationFrame(tick);
        };
        const reduce = () => {
            if (motion.matches) {
                cancelAnimationFrame(raf);
                draw(target);
            }
        };
        motion.addEventListener("change", reduce);
        tick(began);
        return () => {
            cancelAnimationFrame(raf);
            motion.removeEventListener("change", reduce);
        };
    }, [isRevealed, duration, revision, color, background]);
    useEffect(() => {
        if (trigger !== "in-view" || !host.current)
            return;
        const observer = new IntersectionObserver(([entry]) => request(entry.isIntersecting && entry.intersectionRatio >= 0.35), { threshold: [0, 0.35] });
        observer.observe(host.current);
        return () => observer.disconnect();
    }, [trigger, request]);
    const interactive = trigger === "hover" || trigger === "click" || trigger === "focus";
    return (_jsxs("div", { ref: host, className: `swarm-image ${className}`, style: { ...style, aspectRatio, background }, "data-state": isRevealed ? "revealed" : "concealed", "data-status": status, "data-trigger": trigger, role: interactive ? "button" : undefined, tabIndex: interactive ? 0 : undefined, "aria-label": interactive ? alt : undefined, "aria-pressed": interactive ? isRevealed : undefined, onPointerEnter: (event) => {
            if (trigger === "hover" && event.pointerType !== "touch") {
                hovering.current = true;
                request(true);
            }
        }, onPointerLeave: () => {
            hovering.current = false;
            if (trigger === "hover")
                request(focused.current);
        }, onFocus: (event) => {
            if (trigger === "focus" ||
                (trigger === "hover" &&
                    event.currentTarget.matches(":focus-visible"))) {
                focused.current = true;
                request(true);
            }
        }, onBlur: () => {
            focused.current = false;
            if (trigger === "focus" || trigger === "hover")
                request(trigger === "hover" && hovering.current);
        }, onClick: () => {
            if (trigger === "click" || (trigger === "hover" && !hovering.current))
                request(!current.current);
        }, onKeyDown: (event) => {
            if (interactive && (event.key === "Enter" || event.key === " ")) {
                event.preventDefault();
                request(!current.current);
            }
            else if (interactive && event.key === "Escape") {
                request(false);
            }
        }, children: [_jsx("img", { ref: image, src: src, alt: interactive ? "" : alt, crossOrigin: crossOrigin, draggable: false, style: { opacity: status === "loading" ? 0 : 1 } }), _jsx("canvas", { ref: canvas, "aria-hidden": "true", style: { visibility: status === "ready" ? "visible" : "hidden" } }), status === "error" && (_jsx("span", { className: "swarm-image-error", role: "status", children: "Image unavailable" }))] }));
});
/** Conceal an image with dots; reveal or conceal it through events, state, or a ref. */
export const SwarmImageReveal = forwardRef(function SwarmImageReveal({ trigger = "hover", ...props }, ref) {
    return _jsx(ImageEffect, { ...props, ref: ref, trigger: trigger });
});
