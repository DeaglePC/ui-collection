"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, forwardRef, useCallback, useContext, useEffect, useId, useMemo, useRef, useState, } from "react";
import { SwarmMorph, useSwarmPresence } from "./material-motion.js";
import { Slot } from "@radix-ui/react-slot";
import * as Select from "@radix-ui/react-select";
import * as Slider from "@radix-ui/react-slider";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Switch from "@radix-ui/react-switch";
import { SwarmSurface, } from "./swarm-surface.js";
import { sampleElementTextPoints, splitTextUnits } from "./text-dom.js";
import { sampleTextPoints } from "./text-geometry.js";
const UI = createContext(null);
const Scene = createContext(null);
const PartOwner = createContext(false);
export function SwarmMaterialScope({ children }) { return _jsx(PartOwner.Provider, { value: true, children: children }); }
export function useSwarmSceneActive() {
    const context = useContext(UI);
    const scene = useContext(Scene);
    return !context || scene === null || context.active === scene;
}
function assignRef(ref, value) {
    if (typeof ref === "function")
        ref(value);
    else if (ref)
        ref.current = value;
}
const classes = (...values) => values.filter(Boolean).join(" ");
const Root = forwardRef(function SwarmUIRoot({ active, transition, manageFocus = true, children, ...props }, forwardedRef) {
    const surface = useRef(null);
    const container = useRef(null);
    const [parts, setParts] = useState(() => new Map());
    const register = useCallback((id, part) => {
        setParts((previous) => new Map(previous).set(id, part));
        return () => setParts((previous) => {
            const next = new Map(previous);
            next.delete(id);
            return next;
        });
    }, []);
    const context = useMemo(() => ({ active, register }), [active, register]);
    const targets = useMemo(() => Array.from(parts.values())
        .filter((part) => part.scene === null || part.scene === active)
        .map((part) => part.target), [active, parts]);
    const previous = useRef(active);
    const settings = useRef({ transition, manageFocus });
    settings.current = { transition, manageFocus };
    useEffect(() => {
        if (previous.current === active)
            return;
        previous.current = active;
        if (settings.current.transition !== false)
            surface.current?.burst({
                strength: 380,
                duration: 0.16,
                ...settings.current.transition,
            });
        const focused = document.activeElement;
        // Keep focus on scene selectors outside the surface. Only transfer focus
        // when the user was using a control in the scene that just became inert.
        if (settings.current.manageFocus &&
            focused instanceof HTMLElement &&
            container.current?.contains(focused) &&
            focused.closest("[data-swarm-scene][inert]")) {
            const scene = Array.from(container.current.querySelectorAll("[data-swarm-scene]")).find((node) => node.dataset.swarmScene === active);
            const next = scene?.querySelector('[data-swarm-autofocus], button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), [tabindex="0"]');
            next?.focus({ preventScroll: true });
        }
    }, [active]);
    const surfaceRef = useCallback((handle) => {
        surface.current = handle;
        assignRef(forwardedRef, handle);
    }, [forwardedRef]);
    return (_jsx(UI.Provider, { value: context, children: _jsx("div", { ref: container, style: { display: "contents" }, children: _jsx(SwarmSurface, { ...props, ref: surfaceRef, targets: targets, children: children }) }) }));
});
const SceneRoot = forwardRef(function SwarmUIScene({ name, style, children, ...props }, ref) {
    const context = useContext(UI);
    if (!context)
        throw new Error("SwarmUI.Scene must be inside SwarmUI.Root.");
    const active = context.active === name;
    return (_jsx(Scene.Provider, { value: name, children: _jsx("div", { ...props, ref: ref, "data-swarm-scene": name, "data-state": active ? "active" : "inactive", "aria-hidden": !active, inert: !active, style: {
                ...style,
                visibility: active ? style?.visibility : "hidden",
                pointerEvents: active ? style?.pointerEvents : "none",
            }, children: children }) }));
});
const Part = forwardRef(function SwarmUIPart({ asChild, contain = false, points, motion, radius = 8, weight = 1, color, shape, children, ...props }, forwardedRef) {
    const context = useContext(UI);
    const scene = useContext(Scene);
    const owned = useContext(PartOwner);
    const id = useId();
    const node = useRef(null);
    const ref = useCallback((value) => {
        node.current = value;
        assignRef(forwardedRef, value);
    }, [forwardedRef]);
    const register = context?.register;
    useEffect(() => {
        if (!register || owned)
            return;
        return register(id, {
            scene,
            target: {
                id,
                ref: node,
                weight,
                color,
                ...(points ? { kind: "points", points, motion } : shape ? { kind: "shape", shape } : { kind: "element", radius }),
            },
        });
    }, [register, id, scene, radius, weight, color, shape, points, motion, owned]);
    const Comp = asChild ? Slot : "div";
    return (_jsx(PartOwner.Provider, { value: owned || contain, children: _jsx(Comp, { ...props, ref: ref, "data-swarm-part": "", children: children }) }));
});
export const SwarmUI = { Root, Scene: SceneRoot, Part };
const ParticleText = forwardRef(function ParticleText({ children, fontFamily, fontSize = 48, fontWeight = 600, fontStyle, lineHeight, letterSpacing, textAlign = "center", direction, width, count = 1800, color, dotSize = 1, reducedMotion, style, className, ...props }, forwardedRef) {
    const hosted = useContext(UI) !== null;
    const node = useRef(null);
    const [geometry, setGeometry] = useState({ points: [], width: 0, height: 0, lines: [] });
    const bind = useCallback((value) => {
        node.current = value;
        assignRef(forwardedRef, node.current);
    }, [forwardedRef]);
    useEffect(() => {
        const element = node.current;
        if (!element)
            return;
        let disposed = false, revision = 0, lastWidth = -1, raf = 0;
        const measure = () => {
            const measuredWidth = element.getBoundingClientRect().width;
            if (!measuredWidth)
                return;
            const css = getComputedStyle(element), current = ++revision;
            sampleTextPoints(children, {
                width: measuredWidth, count, fontFamily: css.fontFamily, fontSize: parseFloat(css.fontSize),
                fontWeight: css.fontWeight, fontStyle: css.fontStyle,
                lineHeight: parseFloat(css.lineHeight) || undefined, letterSpacing: parseFloat(css.letterSpacing) || 0,
                textAlign, direction: css.direction,
            }).then(result => { if (!disposed && current === revision)
                setGeometry(result); });
        };
        const schedule = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(measure); };
        const observer = new ResizeObserver(() => {
            const nextWidth = element.getBoundingClientRect().width;
            if (nextWidth !== lastWidth) {
                lastWidth = nextWidth;
                schedule();
            }
        });
        observer.observe(element);
        document.fonts?.addEventListener("loadingdone", schedule);
        schedule();
        return () => { disposed = true; observer.disconnect(); cancelAnimationFrame(raf); document.fonts?.removeEventListener("loadingdone", schedule); };
    }, [children, count, fontFamily, fontSize, fontWeight, fontStyle, lineHeight, letterSpacing, textAlign, direction, width, className, style]);
    const content = _jsx(Part, { ...props, ref: bind, points: geometry.points, color: color, className: ["swarm-text", className].filter(Boolean).join(" "), "data-swarm-text-ready": geometry.width > 0 || undefined, style: { width: width ?? "100%", position: "relative", fontFamily, fontSize, fontWeight,
            fontStyle, lineHeight: lineHeight ? `${lineHeight}px` : 1.25, letterSpacing, textAlign, direction,
            ...style, height: geometry.height || fontSize * 1.25 }, children: _jsx("span", { style: { position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clipPath: "inset(50%)", whiteSpace: "pre-wrap", border: 0 }, children: children }) });
    return hosted ? content : _jsx(Root, { active: "text", count: count, color: color, dotSize: dotSize, reducedMotion: reducedMotion, transition: false, style: { position: "relative", width: width ?? "100%" }, children: content });
});
function SolidTextContent({ children, fontFamily, fontSize = 24, fontWeight = 400, fontStyle, lineHeight, letterSpacing, textAlign = "left", direction, width, count = 1800, color, reveal = "words", stagger = .1, duration = .6, style, className, forwardedRef, ...props }) {
    const context = useContext(UI), scene = useContext(Scene), owned = useContext(PartOwner);
    const id = useId(), root = useRef(null);
    const active = useSwarmSceneActive();
    const requestedFormation = useRef({ reveal, stagger, duration });
    requestedFormation.current = { reveal, stagger, duration };
    // Configuration changes apply on the next text change or scene entry. Keeping
    // the current units and targets preserves both the DOM and its settled opacity.
    const formation = useMemo(() => requestedFormation.current, [children, active]);
    const units = useMemo(() => splitTextUnits(children, formation.reveal), [children, formation.reveal]);
    const [sampled, setSampled] = useState({ revision: 0, targets: [] });
    const revision = useRef(0);
    const bind = useCallback((value) => { root.current = value; assignRef(forwardedRef, value); }, [forwardedRef]);
    useEffect(() => {
        const element = root.current;
        if (!element)
            return;
        let disposed = false, request = 0, frame = 0, lastWidth = -1;
        const measure = async () => {
            const current = ++request, css = getComputedStyle(element);
            try {
                await document.fonts?.load(`${css.fontStyle} ${css.fontWeight} ${css.fontSize} ${css.fontFamily}`, children || " ");
            }
            catch { /* browser fallback */ }
            if (disposed || current !== request)
                return;
            const nodes = Array.from(element.querySelectorAll("[data-swarm-text-unit]"));
            const nextRevision = ++revision.current;
            const delay = Number.isFinite(formation.stagger) ? Math.max(0, formation.stagger) : .1;
            const seconds = Number.isFinite(formation.duration) ? Math.max(.05, formation.duration) : .6;
            const particleCount = Number.isFinite(count) ? Math.max(24, Math.min(2400, count)) : 1800;
            const targets = nodes.map((node, index) => ({
                id: `${id}-${nextRevision}-${index}`, ref: { current: node }, kind: "text",
                points: sampleElementTextPoints(node, Math.max(24, Math.min(2400, Math.round(particleCount / Math.max(1, nodes.length))))),
                weight: Math.max(1, node.textContent?.length ?? 1), color: color ?? css.color,
                formation: { delay: index * delay, duration: seconds },
            }));
            if (!targets.length)
                targets.push({ id: `${id}-${nextRevision}-empty`, ref: root, kind: "text", points: [] });
            setSampled({ revision: nextRevision, targets });
        };
        const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => { void measure(); }); };
        const observer = new ResizeObserver(() => {
            const width = element.getBoundingClientRect().width;
            if (width !== lastWidth) {
                lastWidth = width;
                schedule();
            }
        });
        observer.observe(element);
        document.fonts?.addEventListener("loadingdone", schedule);
        schedule();
        return () => { disposed = true; cancelAnimationFrame(frame); observer.disconnect(); document.fonts?.removeEventListener("loadingdone", schedule); };
    }, [children, units, count, fontFamily, fontSize, fontWeight, fontStyle, lineHeight, letterSpacing, textAlign, direction, width, color, formation, id, className, style]);
    const register = context?.register;
    useEffect(() => {
        if (!register || owned)
            return;
        const cleanups = sampled.targets.map((target, index) => register(`${id}-${index}`, { scene, target }));
        return () => cleanups.forEach(cleanup => cleanup());
    }, [register, owned, id, scene, sampled]);
    return _jsx("div", { ...props, ref: bind, className: ["swarm-text", "swarm-text-solid", className].filter(Boolean).join(" "), "data-swarm-text-ready": sampled.revision > 0 || undefined, "data-reveal": reveal, "data-formation": formation.reveal, style: { width: width ?? "100%", minHeight: "1em", fontFamily, fontSize, fontWeight, fontStyle, lineHeight: lineHeight ? `${lineHeight}px` : 1.5,
            letterSpacing, textAlign, direction, color, whiteSpace: "pre-wrap", overflowWrap: "anywhere", ...style }, children: units.map((unit, index) => unit.trim() ? _jsx("span", { "data-swarm-text-unit": "", style: { opacity: owned ? 1 : "var(--swarm-text-opacity, 0)" }, children: unit }, `${children}-${formation.reveal}-${fontFamily}-${fontSize}-${fontWeight}-${index}`) : unit) });
}
export const SwarmText = forwardRef(function SwarmText({ appearance = "solid", dotSize = 1, reducedMotion, ...props }, ref) {
    const hosted = useContext(UI) !== null;
    if (appearance === "dots") {
        const { reveal: _, stagger: __, duration: ___, ...particleProps } = props;
        return _jsx(ParticleText, { ...particleProps, ref: ref, dotSize: dotSize, reducedMotion: reducedMotion });
    }
    const content = _jsx(SolidTextContent, { ...props, forwardedRef: ref });
    return hosted ? content : _jsx(Root, { active: "text", transition: false, count: props.count ?? 1800, dotSize: dotSize, reducedMotion: reducedMotion, color: props.color, style: { position: "relative", width: props.width ?? "100%" }, children: content });
});
export const SwarmButton = forwardRef(function SwarmButton({ asChild, morphKey, className, type = "button", ...props }, ref) {
    const Comp = asChild ? Slot : "button";
    return (_jsx(SwarmMorph, { state: morphKey ?? "idle", children: _jsx(Part, { asChild: true, children: _jsx(Comp, { ...props, ref: ref, ...(!asChild && { type }), className: classes("swarm-button", className) }) }) }));
});
function SelectRoot({ open, defaultOpen = false, onOpenChange, ...props }) {
    const context = useContext(UI);
    const scene = useContext(Scene);
    const active = !context || scene === null || context.active === scene;
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const expanded = open ?? internalOpen;
    const change = useCallback((value) => {
        setInternalOpen(value);
        onOpenChange?.(value);
    }, [onOpenChange]);
    useEffect(() => {
        if (!active && expanded)
            change(false);
    }, [active, expanded, change]);
    return (_jsx(Select.Root, { ...props, open: active && expanded, onOpenChange: change }));
}
const SelectTrigger = forwardRef(function SwarmSelectTrigger({ className, ...props }, ref) {
    return (_jsx(Part, { asChild: true, children: _jsx(Select.Trigger, { ...props, ref: ref, className: classes("swarm-select-trigger", className) }) }));
});
const SelectContent = forwardRef(function SwarmSelectContent({ className, position = "popper", sideOffset = 8, ...props }, ref) {
    const [node, setNode] = useState(null);
    useSwarmPresence(node);
    const bind = useCallback((value) => { setNode(value); assignRef(ref, value); }, [ref]);
    return (_jsx(SwarmMaterialScope, { children: _jsx(Select.Content, { ...props, ref: bind, position: position, sideOffset: sideOffset, className: classes("swarm-select-content swarm-particle-presence", className) }) }));
});
const SelectItem = forwardRef(function SwarmSelectItem({ className, ...props }, ref) {
    return (_jsx(Select.Item, { ...props, ref: ref, className: classes("swarm-select-item", className) }));
});
const SelectIcon = forwardRef(function SwarmSelectIcon({ className, ...props }, ref) {
    return _jsx(Select.Icon, { ...props, ref: ref, className: classes("swarm-select-icon", className) });
});
export const SwarmSelect = {
    Root: SelectRoot,
    Trigger: SelectTrigger,
    Value: Select.Value,
    Icon: SelectIcon,
    Portal: Select.Portal,
    Content: SelectContent,
    Viewport: Select.Viewport,
    Item: SelectItem,
    ItemText: Select.ItemText,
    ItemIndicator: Select.ItemIndicator,
    Group: Select.Group,
    Label: Select.Label,
    Separator: Select.Separator,
    ScrollUpButton: Select.ScrollUpButton,
    ScrollDownButton: Select.ScrollDownButton,
};
const SliderRoot = forwardRef(function SwarmSliderRoot({ className, ...props }, ref) {
    return (_jsx(Slider.Root, { ...props, ref: ref, className: classes("swarm-slider", className) }));
});
const SliderTrack = forwardRef(function SwarmSliderTrack({ className, ...props }, ref) {
    return (_jsx(Part, { asChild: true, radius: 20, children: _jsx(Slider.Track, { ...props, ref: ref, className: classes("swarm-slider-track", className) }) }));
});
const SliderRange = forwardRef(function SwarmSliderRange({ className, ...props }, ref) {
    return (_jsx(Slider.Range, { ...props, ref: ref, className: classes("swarm-slider-range", className) }));
});
const SliderThumb = forwardRef(function SwarmSliderThumb({ className, ...props }, ref) {
    return (_jsx(Part, { asChild: true, radius: 20, weight: 0.25, children: _jsx(Slider.Thumb, { ...props, ref: ref, className: classes("swarm-slider-thumb", className) }) }));
});
export const SwarmSlider = {
    Root: SliderRoot,
    Track: SliderTrack,
    Range: SliderRange,
    Thumb: SliderThumb,
};
const CheckboxRoot = forwardRef(function SwarmCheckboxRoot({ className, ...props }, ref) {
    return (_jsx(Part, { asChild: true, radius: 5, children: _jsx(Checkbox.Root, { ...props, ref: ref, className: classes("swarm-checkbox", className) }) }));
});
export const SwarmCheckbox = {
    Root: CheckboxRoot,
    Indicator: Checkbox.Indicator,
};
const SwitchRoot = forwardRef(function SwarmSwitchRoot({ className, ...props }, ref) {
    return (_jsx(Part, { asChild: true, radius: 24, children: _jsx(Switch.Root, { ...props, ref: ref, className: classes("swarm-switch", className) }) }));
});
const SwitchThumb = forwardRef(function SwarmSwitchThumb({ className, ...props }, ref) {
    return (_jsx(Switch.Thumb, { ...props, ref: ref, className: classes("swarm-switch-thumb", className) }));
});
export const SwarmSwitch = { Root: SwitchRoot, Thumb: SwitchThumb };
export * from "./ui-primitives.js";
export { SwarmPrimitive, SWARM_PRIMITIVES } from "./ui-presets.js";
export { SwarmComposition, DotsUISequencePlayer } from "./ui-composition.js";
export { SwarmMorph } from "./material-motion.js";
export * from "./ui-extended.js";
export { sampleTextPoints } from "./text-geometry.js";
export { SwarmImageReveal } from "./ui-image.js";
