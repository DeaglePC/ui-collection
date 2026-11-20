"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo, useRef } from "react";
import { compileSwarmSequence, sampleSwarmSequence, sampleSwarmParticle, } from "./sequence.js";
/** Seekable Canvas animation with an optional independent live formation clock. */
export function SwarmSequence({ keyframes, progress, count = 1200, interactive = false, animate = false, paused = false, animationSpeed = 1, reducedMotion = false, className, style, label = "A choreographed particle swarm", }) {
    const sequence = useMemo(() => compileSwarmSequence(keyframes, count), [keyframes, count]);
    const canvasRef = useRef(null);
    const latest = useRef({
        sequence,
        progress,
        interactive,
        reducedMotion,
        animate,
        paused,
        animationSpeed,
    });
    const wake = useRef(() => { });
    useEffect(() => {
        latest.current = {
            sequence,
            progress,
            interactive,
            reducedMotion,
            animate,
            paused,
            animationSpeed,
        };
        wake.current();
    }, [
        sequence,
        progress,
        interactive,
        reducedMotion,
        animate,
        paused,
        animationSpeed,
    ]);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        let width = 1, height = 1, frame = 0, visible = true, disposed = false;
        let time = 0, previousTime = 0;
        const pointer = { x: 99, y: 99 };
        const media = matchMedia("(prefers-reduced-motion: reduce)");
        function schedule() {
            if (!frame && visible && !document.hidden && !disposed)
                frame = requestAnimationFrame(draw);
        }
        function draw(now) {
            frame = 0;
            if (!ctx)
                return;
            const c = latest.current;
            const reduce = c.reducedMotion || media.matches;
            const running = c.animate && !c.paused && !reduce && visible && !document.hidden;
            if (running) {
                const rate = Number.isFinite(c.animationSpeed)
                    ? Math.max(0, Math.min(5, c.animationSpeed))
                    : 1;
                time +=
                    (previousTime ? Math.min(64, now - previousTime) / 1000 : 0) * rate;
            }
            previousTime = running ? now : 0;
            let sample = sampleSwarmSequence(c.sequence, c.progress, c.animate && !reduce ? time : 0);
            if (reduce) {
                const pose = sample.phase < 0.5 ? sample.from : sample.to;
                sample = sampleSwarmSequence(c.sequence, pose.at);
            }
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = sample.values.color;
            const unit = Math.min(width, height) * 0.36;
            for (let i = 0; i < c.sequence.count; i++) {
                const p = sampleSwarmParticle(sample, i, c.sequence.count, reduce);
                if (p.alpha <= 0)
                    continue;
                if (c.interactive && !reduce) {
                    const dx = p.x - pointer.x, dy = p.y - pointer.y, d = Math.hypot(dx, dy);
                    if (d > 0.001 && d < 0.4) {
                        p.x += (dx / d) * (0.4 - d) * 0.35;
                        p.y += (dy / d) * (0.4 - d) * 0.35;
                    }
                }
                const perspective = 1 / (1 + Math.max(-1.5, Math.min(1.5, p.z)) * 0.16);
                const depth = Math.max(0.18, Math.min(1, 0.65 - p.z * 0.3));
                ctx.globalAlpha = p.alpha * depth;
                const radius = Math.max(0.2, sample.values.dotSize * perspective * Math.min(1, unit / 160));
                ctx.beginPath();
                ctx.arc(width / 2 + p.x * unit * perspective, height / 2 + p.y * unit * perspective, radius, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.globalAlpha = 1;
            if (running && c.animationSpeed !== 0)
                schedule();
        }
        wake.current = schedule;
        const resize = new ResizeObserver(([entry]) => {
            width = entry.contentRect.width;
            height = entry.contentRect.height;
            const dpr = Math.min(devicePixelRatio || 1, 2);
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            schedule();
        });
        const observer = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            if (visible)
                schedule();
            else {
                cancelAnimationFrame(frame);
                frame = 0;
                previousTime = 0;
            }
        }, { rootMargin: "100px" });
        const move = (e) => {
            const r = canvas.getBoundingClientRect(), unit = Math.max(1, Math.min(width, height) * 0.36);
            pointer.x = (e.clientX - r.left - width / 2) / unit;
            pointer.y = (e.clientY - r.top - height / 2) / unit;
            schedule();
        };
        const leave = () => {
            pointer.x = pointer.y = 99;
            schedule();
        };
        const visibility = () => {
            previousTime = 0;
            if (document.hidden) {
                cancelAnimationFrame(frame);
                frame = 0;
            }
            else
                schedule();
        };
        resize.observe(canvas);
        observer.observe(canvas);
        media.addEventListener("change", schedule);
        document.addEventListener("visibilitychange", visibility);
        canvas.addEventListener("pointermove", move);
        canvas.addEventListener("pointerleave", leave);
        return () => {
            disposed = true;
            wake.current = () => { };
            cancelAnimationFrame(frame);
            resize.disconnect();
            observer.disconnect();
            media.removeEventListener("change", schedule);
            document.removeEventListener("visibilitychange", visibility);
            canvas.removeEventListener("pointermove", move);
            canvas.removeEventListener("pointerleave", leave);
        };
    }, []);
    return (_jsx("canvas", { ref: canvasRef, role: "img", "aria-label": label, className: className, style: { display: "block", width: "100%", height: "100%", ...style } }));
}
