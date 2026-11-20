"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { SwarmUI } from './ui.js';
import { SwarmPrimitive } from './ui-presets.js';
import { useDotsSequence } from './dots-sequence-player.js';
import { SHAPES } from './shapes.js';
export function SwarmComposition({ scenes, active, spread = 1, onAction, ...props }) {
    return _jsx(SwarmUI.Root, { ...props, active: active, transition: false, spring: props.spring ?? 32, damping: props.damping ?? 9, style: { position: 'relative', minHeight: 320, ...props.style }, children: scenes.map(scene => _jsx(SwarmUI.Scene, { name: scene.id, style: { position: 'absolute', inset: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }, children: scene.primitive ? _jsx("div", { className: "swarm-primitive-host", children: _jsx(SwarmPrimitive, { ...scene.primitive, onAction: () => onAction?.(scene.id) }) }) :
                _jsx(SwarmUI.Part, { shape: scene.shape, points: scene.points, motion: scene.motion, style: { width: `${Math.min(95, 72 * spread)}%`, height: `${Math.min(95, 82 * spread)}%` } }) }, scene.id)) });
}
/** A sequence renderer for mixed shape and UI clips. Definitions remain plain data. */
export function DotsUISequencePlayer({ sequence, elements, shapes, assets, paused, style, className, onAction }) {
    const state = useDotsSequence(sequence, { paused });
    const scenes = useMemo(() => sequence.steps.map((step, index) => {
        const id = `clip-${index}`;
        if (step.element) {
            const primitive = elements[step.element];
            if (!primitive)
                throw new Error(`Missing UI element: ${step.element}`);
            return { id, primitive };
        }
        if (step.asset) {
            const asset = assets?.[step.asset];
            if (!asset)
                throw new Error(`Missing asset: ${step.asset}`);
            return { id, points: asset.points, motion: asset.motion };
        }
        if (SHAPES.includes(step.shape))
            return { id, shape: step.shape };
        const formation = shapes?.[step.shape];
        if (!formation)
            throw new Error(`Missing shape: ${step.shape}`);
        const result = formation(state.values.count ?? 1000);
        return { id, points: result.points, motion: result.motion };
    }), [sequence, elements, shapes, assets, state.values.count]);
    return _jsx(SwarmComposition, { scenes: scenes, active: `clip-${state.index}`, count: state.values.count, color: state.values.color, dotSize: state.values.dotSize, spread: state.values.spread, className: className, style: { background: state.values.background, ...style }, onAction: onAction });
}
