"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useRef, } from "react";
import { compileDotMotion, dotSurfaceStyle, } from "./dot-motion.js";
const useClientLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;
const playbackRate = (speed) => Number.isFinite(speed) ? Math.max(0.05, Math.min(10, speed)) : 1;
/** One persistent, clipped surface. No canvas, stylesheet, or animation dependency. */
export const Dot = forwardRef(function Dot({ initial = {}, animate, sequence, transition = {}, paused = false, loop = false, speed = 1, reducedMotion = false, label, onUpdate, onComplete, children, style, ...attributes }, forwardedRef) {
    const root = useRef(null);
    const surface = useRef(null);
    const content = useRef(null);
    const controller = useRef(null);
    const animations = useRef([]);
    const wasPaused = useRef(paused);
    const latest = useRef({ onUpdate, onComplete, paused, speed });
    const carry = useRef(null);
    useClientLayoutEffect(() => {
        latest.current = { onUpdate, onComplete, paused, speed };
    });
    // Semantic equality keeps inline object/array props and onUpdate renders from restarting motion.
    const definition = JSON.stringify({
        initial,
        steps: sequence ?? (animate ? [animate] : []),
        transition,
    });
    const initialStyle = dotSurfaceStyle(compileDotMotion(initial, []).start);
    useImperativeHandle(forwardedRef, () => ({
        get element() {
            return root.current;
        },
        get duration() {
            return controller.current?.duration ?? 0;
        },
        play: () => controller.current?.play(),
        pause: () => controller.current?.pause(),
        restart: () => controller.current?.restart(),
        seek: (seconds) => controller.current?.seek(seconds),
        finish: () => controller.current?.finish(),
    }), []);
    useClientLayoutEffect(() => {
        const node = surface.current;
        const inner = content.current;
        const wrapper = root.current;
        if (!node || !inner || !wrapper)
            return;
        const parsed = JSON.parse(definition);
        const motion = compileDotMotion(parsed.initial, parsed.steps, parsed.transition);
        if (sequence === undefined && animate !== undefined && carry.current) {
            // Retarget a running declarative animation without jumping back to initial.
            // Preserve the current appearance throughout the first step's delay, too.
            const hasDelay = (parsed.steps[0]?.delay ?? parsed.transition.delay ?? 0) > 0;
            motion.surface
                .slice(0, hasDelay ? 2 : 1)
                .forEach((frame) => Object.assign(frame, carry.current.surface));
            motion.content.slice(0, hasDelay ? 2 : 1).forEach((frame) => {
                frame.opacity = Number(carry.current.content);
            });
        }
        carry.current = null;
        const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
        let frame = 0;
        let disposed = false;
        let completed = false;
        let staticFinal = false;
        let pair = [];
        const seconds = motion.duration;
        const updateContent = () => {
            const hidden = Number(getComputedStyle(inner).opacity) <= 0.001;
            inner.toggleAttribute("inert", hidden);
            if (hidden)
                inner.setAttribute("aria-hidden", "true");
            else
                inner.removeAttribute("aria-hidden");
        };
        const report = () => {
            const animation = pair[0];
            const elapsed = Number(animation?.currentTime ?? 0) / 1000;
            const time = staticFinal
                ? seconds
                : loop && seconds && animation?.playState !== "finished"
                    ? elapsed % seconds ||
                        (elapsed > 0 && animation?.playState === "paused" ? seconds : 0)
                    : Math.min(seconds, Math.max(0, elapsed));
            const status = staticFinal || animation?.playState === "finished"
                ? "finished"
                : animation?.playState === "running"
                    ? "running"
                    : "paused";
            wrapper.dataset.dotStatus = status;
            updateContent();
            const nextStep = motion.ends.findIndex((end) => end > time);
            latest.current.onUpdate?.({
                currentTime: time,
                duration: seconds,
                progress: seconds ? time / seconds : 1,
                step: nextStep === -1 ? motion.ends.length - 1 : nextStep,
                status,
            });
        };
        const complete = () => {
            cancelAnimationFrame(frame);
            report();
            if (!completed) {
                completed = true;
                // Skip the discarded setup pass in React Strict Mode for instant runs.
                queueMicrotask(() => {
                    if (!disposed)
                        latest.current.onComplete?.();
                });
            }
        };
        const tick = () => {
            if (disposed)
                return;
            report();
            if (pair[0]?.playState === "running")
                frame = requestAnimationFrame(tick);
        };
        const watch = () => {
            cancelAnimationFrame(frame);
            report();
            frame = requestAnimationFrame(tick);
        };
        const finish = () => {
            staticFinal = true;
            pair.forEach((animation) => animation.cancel());
            Object.assign(node.style, dotSurfaceStyle(motion.end));
            inner.style.opacity = String(motion.end.reveal);
            complete();
        };
        const play = () => {
            if (reducedMotion || preference.matches || !seconds || !pair.length) {
                finish();
                return;
            }
            if (staticFinal ||
                pair[0].playState === "finished" ||
                (!loop && Number(pair[0].currentTime) >= seconds * 1000) ||
                (pair[0].effect?.getTiming().iterations === 1 && loop)) {
                staticFinal = false;
                completed = false;
                pair.forEach((animation) => {
                    animation.currentTime = 0;
                });
            }
            pair.forEach((animation) => animation.effect?.updateTiming({ iterations: loop ? Infinity : 1 }));
            pair.forEach((animation) => animation.play());
            // Both animations share an epoch, including after pause/resume and speed changes.
            const now = document.timeline.currentTime;
            if (typeof now === "number") {
                const epoch = now - Number(pair[0].currentTime ?? 0) / pair[0].playbackRate;
                pair.forEach((animation) => {
                    animation.startTime = epoch;
                });
            }
            watch();
        };
        const pause = () => {
            if (staticFinal)
                return;
            pair.forEach((animation) => animation.pause());
            cancelAnimationFrame(frame);
            report();
        };
        controller.current = {
            element: wrapper,
            duration: seconds,
            play,
            pause,
            finish,
            restart: () => {
                if (reducedMotion || preference.matches || !pair.length) {
                    finish();
                    return;
                }
                staticFinal = false;
                completed = false;
                pair.forEach((animation) => {
                    animation.currentTime = 0;
                });
                play();
            },
            seek: (time) => {
                if (reducedMotion || preference.matches || !pair.length) {
                    finish();
                    return;
                }
                staticFinal = false;
                completed = false;
                const safe = Number.isFinite(time)
                    ? Math.max(0, Math.min(seconds, time))
                    : 0;
                pair.forEach((animation) => {
                    animation.pause();
                    animation.effect?.updateTiming({
                        iterations: safe === seconds ? 1 : loop ? Infinity : 1,
                    });
                    animation.currentTime = safe * 1000;
                });
                cancelAnimationFrame(frame);
                report();
            },
        };
        Object.assign(node.style, dotSurfaceStyle(motion.start));
        inner.style.opacity = String(motion.start.reveal);
        if (seconds && typeof node.animate === "function") {
            const options = {
                duration: seconds * 1000,
                fill: "both",
                iterations: loop ? Infinity : 1,
            };
            pair = [
                node.animate(motion.surface, options),
                inner.animate(motion.content, options),
            ];
            pair.forEach((animation) => {
                animation.pause();
                animation.currentTime = 0;
                animation.playbackRate = playbackRate(latest.current.speed);
            });
            animations.current = pair;
            pair[0].onfinish = complete;
            if (reducedMotion || preference.matches)
                finish();
            else if (latest.current.paused)
                report();
            else
                play();
        }
        else
            finish();
        const preferenceChanged = () => {
            if (preference.matches)
                finish();
        };
        preference.addEventListener("change", preferenceChanged);
        return () => {
            disposed = true;
            const css = getComputedStyle(node);
            carry.current = {
                surface: Object.fromEntries([
                    "width",
                    "height",
                    "backgroundColor",
                    "borderRadius",
                    "opacity",
                    "transform",
                ].map((key) => [
                    key,
                    css[key],
                ])),
                content: getComputedStyle(inner).opacity,
            };
            pair.forEach((animation) => {
                animation.onfinish = null;
                animation.cancel();
            });
            animations.current = [];
            controller.current = null;
            cancelAnimationFrame(frame);
            preference.removeEventListener("change", preferenceChanged);
        };
        // The serialized definition is the dependency; equivalent inline props must not restart playback.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        definition,
        loop,
        reducedMotion,
        sequence === undefined,
        animate === undefined,
    ]);
    useClientLayoutEffect(() => {
        if (paused)
            controller.current?.pause();
        // Initial playback is owned by the setup effect. Only resume on a paused prop change.
        else if (wasPaused.current)
            controller.current?.play();
        wasPaused.current = paused;
    }, [paused]);
    useClientLayoutEffect(() => {
        animations.current.forEach((animation) => animation.updatePlaybackRate(playbackRate(speed)));
    }, [speed]);
    return (_jsx("span", { ...(label ? { role: "img", "aria-label": label } : {}), ...attributes, ref: root, "data-dot": "", style: {
            display: "inline-block",
            position: "relative",
            flexShrink: 0,
            verticalAlign: "middle",
            width: initialStyle.width,
            height: initialStyle.height,
            ...style,
        }, children: _jsx("span", { ref: surface, "data-dot-surface": "", style: {
                position: "absolute",
                left: "50%",
                top: "50%",
                // Center independently of the animated transform, including when a
                // retargeted animation starts from a computed pixel matrix.
                translate: "-50% -50%",
                display: "grid",
                placeItems: "center",
                overflow: "hidden",
                isolation: "isolate",
                ...initialStyle,
            }, children: _jsx("span", { ref: content, "data-dot-content": "", "aria-hidden": (initial.reveal ?? 0) <= 0 ? true : undefined, style: {
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    opacity: initial.reveal ?? 0,
                }, children: children }) }) }));
});
