"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useEffect, useState, useCallback, } from "react";
import { useSwarmPresence } from "./material-motion.js";
import { SwarmUI, SwarmMaterialScope, useSwarmSceneActive } from "./ui.js";
export function skin(Component, name, particles = false) {
    const Wrapped = forwardRef(function SwarmPrimitive(props, ref) {
        const { className, ...rest } = props;
        const Node = Component;
        const child = (_jsx(Node, { ...rest, ref: ref, className: [name, className].filter(Boolean).join(" ") }));
        return particles ? _jsx(SwarmUI.Part, { asChild: true, children: child }) : child;
    });
    return Wrapped;
}
export function material(Component, name) {
    const Wrapped = forwardRef(function SwarmMaterial(props, ref) {
        const [node, setNode] = useState(null);
        useSwarmPresence(node);
        const bind = useCallback((value) => {
            setNode(value);
            if (typeof ref === "function")
                ref(value);
            else if (ref)
                ref.current = value;
        }, [ref]);
        const { className, ...rest } = props;
        const Node = Component;
        return (_jsx(SwarmMaterialScope, { children: _jsx(Node, { ...rest, ref: bind, className: [name, "swarm-particle-presence", className]
                    .filter(Boolean)
                    .join(" ") }) }));
    });
    return Wrapped;
}
export function gated(Component) {
    return function SwarmOverlayRoot(props) {
        const active = useSwarmSceneActive();
        const p = props;
        const [internal, setInternal] = useState(p.defaultOpen ?? false);
        const open = p.open ?? internal;
        useEffect(() => {
            if (!active && open) {
                setInternal(false);
                p.onOpenChange?.(false);
            }
        }, [active, open, p.onOpenChange]);
        const Node = Component;
        return (_jsx(Node, { ...props, open: active && open, onOpenChange: (value) => {
                setInternal(value);
                p.onOpenChange?.(value);
            } }));
    };
}
