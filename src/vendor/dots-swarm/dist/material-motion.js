"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useLayoutEffect, useRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { sampleSurfaceGeometry } from './surface-geometry.js';
const running = new WeakMap();
function snapshot(node) {
    const rect = node.getBoundingClientRect(), css = getComputedStyle(node);
    const transparent = css.backgroundColor === 'transparent' || css.backgroundColor === 'rgba(0, 0, 0, 0)';
    return { box: { x: rect.left, y: rect.top, width: rect.width, height: rect.height }, color: transparent ? css.color : css.backgroundColor, radius: parseFloat(css.borderTopLeftRadius) || 6 };
}
const smooth = (v) => { const t = Math.max(0, Math.min(1, v)); return t * t * (3 - 2 * t); };
/** Viewport particle handoff survives portal removal; never intercepts input or focus. */
function animate(node, from, to, mode, duration = 720) {
    running.get(node)?.cancel();
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !to.box.width || !to.box.height)
        return () => { };
    const canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
    if (!ctx)
        return () => { };
    canvas.setAttribute('aria-hidden', 'true');
    const pad = 80, left = Math.min(from.box.x, to.box.x) - pad, top = Math.min(from.box.y, to.box.y) - pad;
    const width = Math.max(from.box.x + from.box.width, to.box.x + to.box.width) - left + pad;
    const height = Math.max(from.box.y + from.box.height, to.box.y + to.box.height) - top + pad;
    const dpr = Math.min(2, devicePixelRatio || 1);
    canvas.width = Math.ceil(width * dpr);
    canvas.height = Math.ceil(height * dpr);
    Object.assign(canvas.style, { position: 'fixed', left: `${left}px`, top: `${top}px`, width: `${width}px`, height: `${height}px`, pointerEvents: 'none', zIndex: '10000' });
    document.body.appendChild(canvas);
    const count = Math.round(Math.max(180, Math.min(1000, to.box.width * to.box.height / 65)));
    const sample = (s) => sampleSurfaceGeometry({ kind: 'element', radius: s.radius }, s.box, count);
    const source = sample(from), destination = sample(to);
    node.setAttribute('data-swarm-material-motion', '');
    let frame = 0, finished = false;
    const start = performance.now();
    const cleanup = () => { if (finished)
        return; finished = true; cancelAnimationFrame(frame); canvas.remove(); node.removeAttribute('data-swarm-material-motion'); node.style.removeProperty('--swarm-material-opacity'); window.removeEventListener('scroll', onScroll, true); window.removeEventListener('resize', cancel); document.removeEventListener('visibilitychange', cancel); if (running.get(node)?.cancel === cancel)
        running.delete(node); };
    const cancel = () => cleanup();
    const onScroll = (event) => { if (event.target instanceof Node && node.contains(event.target))
        return; cleanup(); };
    running.set(node, { cancel });
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', cancel);
    document.addEventListener('visibilitychange', cancel);
    const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        if (mode !== 'exit' && !node.isConnected) {
            cleanup();
            return;
        }
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, width, height);
        const travel = smooth(p), handoff = mode === 'exit' ? 0 : smooth((p - .76) / .24);
        node.style.setProperty('--swarm-material-opacity', String(handoff));
        for (let i = 0; i < count; i++) {
            const a = source[i], b = destination[i], angle = i * 2.39996323;
            const spread = 14 + (i % 13) * 3, dx = Math.cos(angle) * spread, dy = Math.sin(angle) * spread;
            let x = a.x + (b.x - a.x) * travel, y = a.y + (b.y - a.y) * travel;
            if (mode === 'change') {
                const scatter = Math.sin(p * Math.PI);
                x += dx * scatter;
                y += dy * scatter;
            }
            if (mode === 'enter') {
                x += dx * (1 - travel);
                y += (dy - 35) * (1 - travel);
            }
            if (mode === 'exit') {
                x += dx * travel;
                y += (dy - 25) * travel;
            }
            ctx.globalAlpha = mode === 'exit' ? (1 - smooth(p)) * .9 : (1 - handoff) * (.6 + (i % 5) * .1);
            ctx.fillStyle = p < .45 ? from.color : to.color;
            ctx.beginPath();
            ctx.arc(x - left, y - top, 1.3 + (i % 3) * .17, 0, Math.PI * 2);
            ctx.fill();
        }
        if (p < 1)
            frame = requestAnimationFrame(tick);
        else
            cleanup();
    };
    tick(start);
    return cancel;
}
/** Animate meaningful state changes; wrap a single ref-forwarding element. */
export function SwarmMorph({ state, children, duration = .72 }) {
    const ref = useRef(null), previous = useRef(null), cancel = useRef(undefined);
    useLayoutEffect(() => {
        const node = ref.current;
        if (!node)
            return;
        const next = snapshot(node), old = previous.current;
        previous.current = { state, snapshot: next };
        if (old && old.state !== state) {
            // A semantic morph belongs to the control's current location. Retain its
            // previous size and material, never its cached viewport position.
            const from = { ...old.snapshot, box: { ...old.snapshot.box,
                    x: next.box.x + (next.box.width - old.snapshot.box.width) / 2,
                    y: next.box.y + (next.box.height - old.snapshot.box.height) / 2,
                } };
            cancel.current?.();
            cancel.current = animate(node, from, next, 'change', Math.max(.2, Math.min(2, duration)) * 1000);
        }
    }, [state, duration]);
    useLayoutEffect(() => () => cancel.current?.(), []);
    return _jsx(Slot, { ref: ref, children: children });
}
/** Used by portaled primitive content. CSS exit presence keeps Radix semantics intact. */
export function useSwarmPresence(node) {
    useLayoutEffect(() => {
        if (!node)
            return;
        let frame = 0, last, lastState = '', stop;
        const origin = () => {
            if (!node.id)
                return undefined;
            const trigger = document.querySelector(`[aria-controls="${CSS.escape(node.id)}"]`);
            return trigger?.isConnected ? snapshot(trigger) : undefined;
        };
        const begin = () => {
            const state = node.getAttribute('data-state') ?? 'open';
            if (state === lastState)
                return;
            lastState = state;
            // Popper positioning is committed before sampling viewport coordinates.
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                frame = requestAnimationFrame(() => {
                    const next = snapshot(node);
                    stop?.();
                    const anchor = origin();
                    const current = next.box.width && next.box.height ? next : last ?? next;
                    stop = state === 'closed' ? animate(node, current, anchor ?? current, 'exit', 520) : animate(node, anchor ?? next, next, 'enter', 680);
                    last = next;
                });
            });
        };
        begin();
        const observer = new MutationObserver(begin);
        observer.observe(node, { attributes: true, attributeFilter: ['data-state'] });
        // Retain a current origin for primitives that unmount immediately on close.
        const refresh = () => { if (node.isConnected) {
            const next = snapshot(node);
            if (next.box.width && next.box.height)
                last = next;
        } };
        window.addEventListener('scroll', refresh, true);
        window.addEventListener('resize', refresh);
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', refresh, true);
            window.removeEventListener('resize', refresh);
            cancelAnimationFrame(frame);
            stop?.();
            // Select content may be removed immediately; its particles still get an exit.
            if (last && lastState !== 'closed')
                animate(node, last, origin() ?? last, 'exit', 420);
        };
    }, [node]);
}
