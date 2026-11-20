"use client";
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { SwarmButton, SwarmInput, SwarmSelect, SwarmSlider, SwarmCard, SwarmBadge, SwarmProgress, SwarmDialog, SwarmDropdownMenu, } from "./ui.js";
import { ControlPrimitive } from "./ui-control-presets.js";
import { ImagePrimitive } from "./ui-image-presets.js";
import { ExtendedPrimitive } from "./ui-extended-presets.js";
export { SWARM_PRIMITIVES } from "./ui-kinds.js";
function ButtonCopy({ done, label, complete = "Done", }) {
    return (_jsxs(_Fragment, { children: [_jsxs("span", { className: "swarm-button-copy", "aria-hidden": "true", children: [_jsx("span", { "data-active": !done, children: label }), _jsx("span", { "data-active": done, children: complete })] }), _jsxs("span", { className: "swarm-button-state-icon", "aria-hidden": "true", children: [_jsx("svg", { className: "swarm-button-arrow", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: _jsx("path", { d: "M4 12 12 4M4 4h8v8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }), _jsx("svg", { className: "swarm-button-check", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: _jsx("path", { d: "m3 8 3 3 7-7", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", pathLength: "1" }) })] })] }));
}
export function SwarmPrimitive({ kind, label, detail, fontFamily, fontSize, fontWeight, appearance, reveal, stagger, duration, src, alt, imageTrigger, onAction, }) {
    const [value, setValue] = useState([48]), [done, setDone] = useState(false), [selected, setSelected] = useState("Personal");
    switch (kind) {
        case "checkbox":
        case "switch":
        case "accordion":
        case "tabs":
        case "toast":
            return (_jsx(ControlPrimitive, { kind: kind, label: label, detail: detail, onAction: onAction }));
        case "image-reveal":
            return (_jsx(ImagePrimitive, { kind: kind, src: src, alt: alt, imageTrigger: imageTrigger, duration: duration, onAction: onAction }));
        case "button":
            return (_jsx(SwarmButton, { className: "swarm-state-button", "data-complete": done, "aria-label": done ? "Done" : label || "Make it happen", style: { minWidth: 180 }, onClick: () => {
                    setDone(!done);
                    onAction?.();
                }, children: _jsx(ButtonCopy, { done: done, label: label || "Make it happen" }) }));
        case "input":
            return (_jsx(SwarmInput, { "aria-label": label || "Email address", placeholder: label || "you@example.com" }));
        case "select":
            return (_jsxs(SwarmSelect.Root, { value: selected, onValueChange: setSelected, children: [_jsxs(SwarmSelect.Trigger, { "aria-label": label || "Choose workspace", children: [_jsx(SwarmSelect.Value, {}), _jsx(SwarmSelect.Icon, { children: "\u2304" })] }), _jsx(SwarmSelect.Portal, { children: _jsx(SwarmSelect.Content, { children: _jsx(SwarmSelect.Viewport, { children: ["Personal", "Design team", "Engineering"].map((name) => (_jsx(SwarmSelect.Item, { value: name, children: _jsx(SwarmSelect.ItemText, { children: name }) }, name))) }) }) })] }));
        case "slider":
            return (_jsxs(SwarmSlider.Root, { value: value, onValueChange: setValue, children: [_jsx(SwarmSlider.Track, { children: _jsx(SwarmSlider.Range, {}) }), _jsx(SwarmSlider.Thumb, { "aria-label": label || "Volume" })] }));
        case "card":
            return (_jsxs(SwarmCard.Root, { children: [_jsxs(SwarmCard.Header, { children: [_jsx(SwarmCard.Title, { children: done ? "Project created." : label || "Something takes shape." }), _jsx(SwarmCard.Description, { children: detail || "A whole card, made from the same swarm." })] }), _jsx(SwarmCard.Content, { children: _jsx(SwarmInput, { "aria-label": "Project name", placeholder: "Your next idea" }) }), _jsx(SwarmCard.Footer, { children: _jsx(SwarmButton, { className: "swarm-state-button", "data-complete": done, "aria-label": done ? "Create another" : "Create project", onClick: () => {
                                setDone(!done);
                                onAction?.();
                            }, children: _jsx(ButtonCopy, { done: done, label: "Create project", complete: "Create another" }) }) })] }));
        case "dialog":
            return (_jsxs(SwarmDialog.Root, { children: [_jsxs(SwarmDialog.Trigger, { className: "swarm-preview-launch", children: [label || "Make some room", " \u2197"] }), _jsxs(SwarmDialog.Portal, { children: [_jsx(SwarmDialog.Overlay, {}), _jsxs(SwarmDialog.Content, { children: [_jsx(SwarmDialog.Title, { children: label || "A little more space." }), _jsx(SwarmDialog.Description, { children: detail ||
                                            "The panel gathers from dots. Close it to send them on their way." }), _jsx(SwarmInput, { "aria-label": "Workspace name", placeholder: "Your workspace" }), _jsx(SwarmDialog.Close, { children: "Looks good \u2713" })] })] })] }));
        case "menu":
            return (_jsxs(SwarmDropdownMenu.Root, { children: [_jsxs(SwarmDropdownMenu.Trigger, { className: "swarm-preview-launch", children: [done ? "Marked as favorite ✓" : label || "Project actions", " \u2304"] }), _jsx(SwarmDropdownMenu.Portal, { children: _jsxs(SwarmDropdownMenu.Content, { sideOffset: 10, children: [_jsx(SwarmDropdownMenu.Label, { children: "YOUR WORKSPACE" }), _jsx(SwarmDropdownMenu.Item, { onSelect: () => onAction?.(), children: "Select project" }), _jsx(SwarmDropdownMenu.Item, { onSelect: () => setDone(!done), children: "Toggle favorite" }), _jsx(SwarmDropdownMenu.Separator, {}), _jsx(SwarmDropdownMenu.Item, { disabled: true, children: "Archive project" })] }) })] }));
        case "badge":
            return _jsxs(SwarmBadge, { children: [label || "Ready to ship", " \u2713"] });
        case "hover-card":
        case "sheet":
        case "drawer":
        case "command":
        case "text":
        case "bubble":
        case "message":
            return (_jsx(ExtendedPrimitive, { kind: kind, label: label, detail: detail, fontFamily: fontFamily, fontSize: fontSize, fontWeight: fontWeight, appearance: appearance, reveal: reveal, stagger: stagger, duration: duration, onAction: onAction }));
        case "progress":
            return (_jsx(SwarmProgress.Root, { value: 72, "aria-label": label || "Progress", style: { width: "min(250px, 100%)" }, children: _jsx(SwarmProgress.Indicator, { style: { transform: "translateX(-28%)" } }) }));
    }
}
