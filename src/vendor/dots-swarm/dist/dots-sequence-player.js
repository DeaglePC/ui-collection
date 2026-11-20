"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo, useState, useSyncExternalStore, } from "react";
import { DotSwarm } from "./dot-swarm.js";
import { SHAPES } from "./shapes.js";
export function useDotsSequence(sequence, options = {}) {
    const [systemReduced, setSystemReduced] = useState(false);
    useEffect(() => {
        const media = matchMedia("(prefers-reduced-motion: reduce)");
        const read = () => setSystemReduced(media.matches);
        read();
        media.addEventListener("change", read);
        return () => media.removeEventListener("change", read);
    }, []);
    const reduced = options.reducedMotion ?? systemReduced;
    useEffect(() => {
        if (!reduced && !options.paused)
            return sequence.connect();
    }, [sequence, reduced, options.paused]);
    return useSyncExternalStore(sequence.subscribe, sequence.getSnapshot, sequence.getSnapshot);
}
/** React renderer for named shape / custom-asset sequences. Use useDotsSequence for UI scenes. */
export function DotsSequencePlayer({ sequence, shapes, assets, paused, animate = false, reducedMotion, className, style, }) {
    const state = useDotsSequence(sequence, { paused, reducedMotion });
    const { element, values } = state;
    const geometry = useMemo(() => {
        if (element.element)
            throw new Error("Use useDotsSequence with SwarmUI.Root for UI element sequences.");
        if (element.asset) {
            const asset = assets?.[element.asset];
            if (!asset)
                throw new Error(`Missing Dots asset: ${element.asset}`);
            return asset;
        }
        if (SHAPES.includes(element.shape))
            return undefined;
        const formation = shapes?.[element.shape];
        if (!formation)
            throw new Error(`Shape '${element.shape}' needs its shape registry. Pass shapes to DotsSequencePlayer.`);
        return formation(values.count ?? 1000);
    }, [element, shapes, assets, values.count]);
    return (_jsx(DotSwarm, { shape: geometry ? "cloud" : element.shape, points: geometry?.points, motion: geometry?.motion, color: values.color, count: values.count, speed: values.speed, dotSize: values.dotSize, spread: values.spread, interactive: values.interactive, choreography: values.choreography, transitionDuration: element.transition?.duration ?? Math.min(0.8, element.duration * 0.4), paused: paused || (!state.playing && !animate), reducedMotion: reducedMotion, label: element.label ?? element.shape ?? element.asset, className: className, style: { background: values.background, ...style } }));
}
