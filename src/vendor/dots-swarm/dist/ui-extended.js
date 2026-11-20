"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Dialog, HoverCard } from "radix-ui";
import { Command } from "cmdk";
import { Drawer } from "vaul";
import { skin, material, gated } from "./ui-helpers.js";
import { SwarmUI } from "./ui.js";
import { SwarmDialog } from "./ui-primitives.js";
export const SwarmHoverCard = {
    ...HoverCard,
    Root: gated(HoverCard.Root),
    Trigger: skin(HoverCard.Trigger, "swarm-hover-card-trigger", true),
    Content: material(HoverCard.Content, "swarm-hover-card"),
    Arrow: skin(HoverCard.Arrow, "swarm-hover-card-arrow"),
};
const SheetMaterial = material(Dialog.Content, "swarm-sheet");
const SheetContent = forwardRef(function SwarmSheetContent({ side = "right", ...props }, ref) {
    return _jsx(SheetMaterial, { ...props, "data-side": side, ref: ref });
});
export const SwarmSheet = {
    ...SwarmDialog,
    Content: SheetContent,
    Header: skin("div", "swarm-panel-header"),
    Footer: skin("div", "swarm-panel-footer"),
};
export const SwarmDrawer = {
    ...Drawer,
    Root: gated(Drawer.Root),
    Trigger: skin(Drawer.Trigger, "swarm-button", true),
    Overlay: skin(Drawer.Overlay, "swarm-overlay"),
    Content: material(Drawer.Content, "swarm-drawer"),
    Handle: skin(Drawer.Handle, "swarm-drawer-handle"),
    Title: skin(Drawer.Title, "swarm-dialog-title"),
    Description: skin(Drawer.Description, "swarm-description"),
    Close: skin(Drawer.Close, "swarm-button"),
    Header: skin("div", "swarm-panel-header"),
    Footer: skin("div", "swarm-panel-footer"),
};
const CommandRoot = forwardRef(function SwarmCommandRoot({ className, ...props }, ref) {
    return (_jsx(SwarmUI.Part, { asChild: true, contain: true, radius: 12, children: _jsx(Command, { ...props, ref: ref, className: ["swarm-command", className].filter(Boolean).join(" ") }) }));
});
function CommandDialog({ title = "Command palette", description = "Search for a command to run.", children, ...props }) {
    return (_jsx(SwarmDialog.Root, { ...props, children: _jsxs(SwarmDialog.Portal, { children: [_jsx(SwarmDialog.Overlay, {}), _jsxs(SwarmDialog.Content, { className: "swarm-command-dialog", children: [_jsx(SwarmDialog.Title, { className: "swarm-sr-only", children: title }), _jsx(SwarmDialog.Description, { className: "swarm-sr-only", children: description }), _jsx(CommandRoot, { label: title, children: children }), _jsx(SwarmDialog.Close, { className: "swarm-command-close", "aria-label": "Close command palette", children: "Close" })] })] }) }));
}
export const SwarmCommand = {
    Root: CommandRoot,
    Dialog: CommandDialog,
    Input: skin(Command.Input, "swarm-command-input"),
    List: skin(Command.List, "swarm-command-list"),
    Empty: skin(Command.Empty, "swarm-command-empty"),
    Group: skin(Command.Group, "swarm-command-group"),
    Item: skin(Command.Item, "swarm-command-item"),
    Separator: skin(Command.Separator, "swarm-separator"),
    Loading: skin(Command.Loading, "swarm-command-loading"),
    Shortcut: skin("span", "swarm-command-shortcut"),
};
export const SwarmBubble = forwardRef(function SwarmBubble({ variant = "incoming", className, ...props }, ref) {
    return (_jsx(SwarmUI.Part, { asChild: true, contain: true, radius: 18, children: _jsx("div", { ...props, ref: ref, "data-variant": variant, className: ["swarm-bubble", className].filter(Boolean).join(" ") }) }));
});
const MessageRoot = forwardRef(function SwarmMessageRoot({ from = "assistant", className, ...props }, ref) {
    return (_jsx("article", { ...props, ref: ref, "data-from": from, className: ["swarm-message", className].filter(Boolean).join(" ") }));
});
export const SwarmMessage = {
    Root: MessageRoot,
    Content: SwarmBubble,
    Author: skin("span", "swarm-message-author"),
    Avatar: skin("div", "swarm-message-avatar"),
    Actions: skin("div", "swarm-message-actions"),
};
