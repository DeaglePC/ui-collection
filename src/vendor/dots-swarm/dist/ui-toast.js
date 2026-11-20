"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useEffect, useState, } from "react";
import { createPortal } from "react-dom";
import { Toast } from "radix-ui";
import { skin, material } from "./ui-helpers.js";
import { useSwarmSceneActive } from "./ui.js";
const ToastMaterial = material(Toast.Root, "swarm-toast");
const Root = forwardRef(function SwarmToastRoot({ open, defaultOpen = true, onOpenChange, variant = "default", className, ...props }, ref) {
    const [internal, setInternal] = useState(defaultOpen);
    const active = useSwarmSceneActive();
    const shown = open ?? internal;
    useEffect(() => {
        if (!active && shown) {
            setInternal(false);
            onOpenChange?.(false);
        }
    }, [active, shown, onOpenChange]);
    return (_jsx(ToastMaterial, { ...props, ref: ref, open: active && shown, onOpenChange: (next) => {
            setInternal(next);
            onOpenChange?.(next);
        }, "data-variant": variant, className: className }));
});
function Portal({ children, container, }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    return mounted ? createPortal(children, container ?? document.body) : null;
}
/** Accessible, swipe-dismissable notifications that gather from and disperse into dots. */
export const SwarmToast = {
    ...Toast,
    Root,
    Portal,
    Viewport: skin(Toast.Viewport, "swarm-toast-viewport"),
    Title: skin(Toast.Title, "swarm-toast-title"),
    Description: skin(Toast.Description, "swarm-toast-description"),
    Action: skin(Toast.Action, "swarm-toast-action"),
    Close: skin(Toast.Close, "swarm-toast-close"),
};
