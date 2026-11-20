"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useId, useState } from "react";
import { SwarmText, SwarmMaterialScope, SwarmButton, SwarmInput, } from "./ui.js";
import { SwarmDialog } from "./ui-primitives.js";
import { SwarmHoverCard, SwarmSheet, SwarmDrawer, SwarmCommand, SwarmBubble, SwarmMessage, } from "./ui-extended.js";
export function ExtendedPrimitive({ kind, label, detail, fontFamily, fontSize, fontWeight, appearance, reveal, stagger, duration, onAction, }) {
    const [open, setOpen] = useState(false), [selected, setSelected] = useState("");
    const [draft, setDraft] = useState(), [font, setFont] = useState();
    const [finish, setFinish] = useState();
    const [order, setOrder] = useState();
    const id = useId();
    useEffect(() => setDraft(undefined), [label]);
    useEffect(() => setFont(undefined), [fontFamily]);
    useEffect(() => setFinish(undefined), [appearance]);
    useEffect(() => setOrder(undefined), [reveal]);
    switch (kind) {
        case "hover-card":
            return (_jsxs(SwarmHoverCard.Root, { open: open, onOpenChange: setOpen, openDelay: 180, closeDelay: 180, children: [_jsx(SwarmHoverCard.Trigger, { asChild: true, children: _jsx("button", { className: "swarm-button swarm-preview-launch", "aria-controls": id, "aria-expanded": open, onClick: () => setOpen(!open), children: label || "Meet your next idea" }) }), _jsx(SwarmHoverCard.Portal, { children: _jsxs(SwarmHoverCard.Content, { id: id, sideOffset: 12, collisionPadding: 12, children: [_jsx("h3", { className: "swarm-dialog-title", children: label || "A little more context." }), _jsx("p", { className: "swarm-description", children: detail ||
                                        "A preview that takes shape when you pause. Move away to return it to dots." })] }) })] }));
        case "sheet":
            return (_jsxs(SwarmSheet.Root, { children: [_jsxs(SwarmSheet.Trigger, { className: "swarm-preview-launch", children: [label || "Open workspace", " \u2197"] }), _jsxs(SwarmSheet.Portal, { children: [_jsx(SwarmSheet.Overlay, {}), _jsxs(SwarmSheet.Content, { side: "right", children: [_jsxs(SwarmSheet.Header, { children: [_jsx(SwarmSheet.Title, { children: label || "Your workspace" }), _jsx(SwarmSheet.Description, { children: detail || "Room for the details, right beside your work." })] }), _jsx(SwarmInput, { "aria-label": "Workspace name", placeholder: "Name your workspace" }), _jsx(SwarmSheet.Footer, { children: _jsx(SwarmSheet.Close, { children: "Close workspace" }) })] })] })] }));
        case "drawer":
            return (_jsxs(SwarmDrawer.Root, { children: [_jsxs(SwarmDrawer.Trigger, { className: "swarm-preview-launch", children: [label || "Bring up the details", " \u2191"] }), _jsxs(SwarmDrawer.Portal, { children: [_jsx(SwarmDrawer.Overlay, {}), _jsxs(SwarmDrawer.Content, { children: [_jsx(SwarmDrawer.Handle, { "aria-label": "Drag to dismiss" }), _jsxs(SwarmDrawer.Header, { children: [_jsx(SwarmDrawer.Title, { children: label || "Within reach." }), _jsx(SwarmDrawer.Description, { children: detail ||
                                                    "A panel that forms from dots. Swipe down or use the close button." })] }), _jsx(SwarmInput, { "aria-label": "A note for later", placeholder: "Leave yourself a note", "data-vaul-no-drag": true }), _jsx(SwarmDrawer.Footer, { children: _jsx(SwarmDrawer.Close, { children: "Close details" }) })] })] })] }));
        case "command":
            return (_jsxs(SwarmDialog.Root, { open: open, onOpenChange: setOpen, children: [_jsxs(SwarmDialog.Trigger, { className: "swarm-preview-launch", children: [selected || label || "Find a command", " \u2318"] }), _jsxs(SwarmDialog.Portal, { children: [_jsx(SwarmDialog.Overlay, {}), _jsxs(SwarmDialog.Content, { className: "swarm-command-dialog", children: [_jsx(SwarmDialog.Title, { className: "swarm-sr-only", children: "Command palette" }), _jsx(SwarmDialog.Description, { className: "swarm-sr-only", children: "Search commands, then choose one with the arrow keys and Enter." }), _jsxs(SwarmCommand.Root, { label: "Search commands", loop: true, children: [_jsx(SwarmCommand.Input, { placeholder: "Type a command\u2026", "aria-label": "Search commands" }), _jsxs(SwarmCommand.List, { children: [_jsx(SwarmCommand.Empty, { children: "No commands found." }), _jsx(SwarmCommand.Group, { heading: "Suggestions", children: [
                                                            "Open projects",
                                                            "View activity",
                                                            "Workspace settings",
                                                        ].map((name) => (_jsx(SwarmCommand.Item, { value: name, onSelect: () => {
                                                                setSelected(name);
                                                                setOpen(false);
                                                                onAction?.();
                                                            }, children: name }, name))) })] })] }), _jsx(SwarmDialog.Close, { className: "swarm-command-close", children: "Close" })] })] })] }));
        case "text":
            return (_jsxs("div", { className: "swarm-text-demo", children: [_jsx(SwarmText, { fontFamily: font ?? fontFamily ?? "sans-serif", fontSize: fontSize ?? 32, fontWeight: fontWeight ?? 400, color: "#fafafa", appearance: finish ?? appearance ?? "solid", reveal: order ?? reveal ?? "words", stagger: stagger, duration: duration, children: draft ?? label ?? "Ideas become words." }), _jsx(SwarmMaterialScope, { children: _jsxs("div", { className: "swarm-text-demo-controls", style: { color: "#fafafa" }, children: [_jsx("input", { "aria-label": "Particle text", value: draft ?? label ?? "Ideas become words.", maxLength: 2000, onChange: (event) => setDraft(event.target.value) }), _jsxs("select", { "aria-label": "Text typeface", value: font ?? fontFamily ?? "sans-serif", onChange: (event) => setFont(event.target.value), children: [fontFamily &&
                                            !["sans-serif", "serif", "monospace"].includes(fontFamily) && _jsx("option", { value: fontFamily, children: fontFamily }), _jsx("option", { value: "sans-serif", children: "Sans serif" }), _jsx("option", { value: "serif", children: "Serif" }), _jsx("option", { value: "monospace", children: "Monospace" })] }), _jsxs("select", { "aria-label": "Text finish", value: finish ?? appearance ?? "solid", onChange: (event) => setFinish(event.target.value), children: [_jsx("option", { value: "solid", children: "Normal text" }), _jsx("option", { value: "dots", children: "Particle art" })] }), _jsxs("select", { "aria-label": "Text formation", value: order ?? reveal ?? "words", onChange: (event) => setOrder(event.target.value), disabled: (finish ?? appearance) === "dots", children: [_jsx("option", { value: "words", children: "Word by word" }), _jsx("option", { value: "letters", children: "Letter by letter" }), _jsx("option", { value: "all", children: "All together" })] }), _jsx("p", { className: "swarm-text-demo-note", children: "Formation settings apply to your next edit or replay." })] }) })] }));
        case "bubble":
            return (_jsx(SwarmBubble, { children: label || "Small dots. A whole conversation." }));
        case "message":
            return (_jsxs(SwarmMessage.Root, { "aria-label": "Assistant message", children: [_jsx(SwarmMessage.Author, { children: "Assistant" }), _jsx(SwarmMessage.Content, { children: selected || label || "What would you like to make?" }), _jsx(SwarmMaterialScope, { children: _jsx(SwarmMessage.Actions, { children: _jsx(SwarmButton, { onClick: () => {
                                    setSelected(selected
                                        ? ""
                                        : detail || "Let’s give your idea a little shape.");
                                    onAction?.();
                                }, children: selected ? "Start again" : "Explore an idea" }) }) })] }));
        default:
            return null;
    }
}
