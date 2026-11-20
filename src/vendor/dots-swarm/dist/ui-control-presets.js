"use client";
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useId, useState } from "react";
import { SwarmUI, SwarmButton, SwarmCheckbox, SwarmSwitch, SwarmTabs, SwarmAccordion, useSwarmSceneActive, } from "./ui.js";
import { SwarmToast } from "./ui-toast.js";
function Chevron() {
    return (_jsx("svg", { className: "swarm-demo-chevron", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: _jsx("path", { d: "m4 6 4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
export function ControlPrimitive({ kind, label, detail, onAction, }) {
    const id = useId();
    const [checked, setChecked] = useState(true), [tab, setTab] = useState("overview"), [expanded, setExpanded] = useState("deliverables");
    const [open, setOpen] = useState(false), [toastId, setToastId] = useState(0), [result, setResult] = useState("ready");
    const active = useSwarmSceneActive();
    useEffect(() => {
        if (!active)
            setOpen(false);
    }, [active]);
    const panel = (content, className = "") => (_jsx(SwarmUI.Part, { asChild: true, contain: true, radius: 12, children: _jsx("section", { className: `swarm-demo-panel ${className}`, children: content }) }));
    if (kind === "checkbox" || kind === "switch")
        return panel(_jsxs(_Fragment, { children: [_jsx("span", { className: "swarm-demo-eyebrow", children: kind === "checkbox" ? "EXPORT OPTIONS" : "WORKSPACE PREFERENCES" }), _jsxs("div", { className: "swarm-demo-setting", children: [_jsxs("label", { htmlFor: id, children: [_jsx("strong", { id: `${id}-label`, children: label ||
                                        (kind === "checkbox" ? "Include files" : "Notifications") }), _jsx("span", { id: `${id}-description`, children: detail ||
                                        (kind === "checkbox"
                                            ? "Bundle the editable source files with your export."
                                            : "Get a weekly summary of your team’s activity.") })] }), kind === "checkbox" ? (_jsx(SwarmCheckbox.Root, { id: id, "aria-labelledby": `${id}-label`, "aria-describedby": `${id}-description`, checked: checked, onCheckedChange: (value) => {
                                setChecked(value === true);
                                onAction?.();
                            }, children: _jsx(SwarmCheckbox.Indicator, { children: _jsx("svg", { width: "13", height: "13", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: _jsx("path", { d: "m3 8 3 3 7-7", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) })) : (_jsx(SwarmSwitch.Root, { id: id, "aria-labelledby": `${id}-label`, "aria-describedby": `${id}-description`, checked: checked, onCheckedChange: (value) => {
                                setChecked(value);
                                onAction?.();
                            }, children: _jsx(SwarmSwitch.Thumb, {}) }))] }), _jsxs("div", { className: "swarm-demo-setting-note", role: "status", children: [_jsx("span", { className: "swarm-demo-status-dot", "data-enabled": checked }), kind === "checkbox"
                            ? checked
                                ? "Preview and source files included"
                                : "Preview only"
                            : checked
                                ? "Weekly summary enabled"
                                : "Weekly summary paused"] })] }));
    if (kind === "accordion")
        return panel(_jsxs(_Fragment, { children: [_jsxs("div", { className: "swarm-demo-panel-heading", children: [_jsx("span", { className: "swarm-demo-eyebrow", children: "PROJECT HANDOFF" }), _jsx("h3", { children: "The details, covered." }), _jsx("p", { children: "A few things to know before we get started." })] }), _jsx(SwarmAccordion.Root, { type: "single", collapsible: true, value: expanded, onValueChange: setExpanded, children: [
                        {
                            id: "deliverables",
                            title: label || "What’s included in the handoff?",
                            text: detail ||
                                "Your final designs, editable source files, and a short guide to colors and typography. Everything is organized in one shared folder.",
                        },
                        {
                            id: "feedback",
                            title: "Can we request changes?",
                            text: "Yes. Two rounds of revisions are included. Leave your feedback on the shared preview and we’ll work through it together.",
                        },
                        {
                            id: "access",
                            title: "How does the team get access?",
                            text: "Invite teammates by email or share a private link. You can choose who can view, comment, or edit, and change access at any time.",
                        },
                    ].map((item) => (_jsxs(SwarmAccordion.Item, { value: item.id, children: [_jsx(SwarmAccordion.Header, { children: _jsxs(SwarmAccordion.Trigger, { children: [item.title, _jsx(Chevron, {})] }) }), _jsx(SwarmAccordion.Content, { children: _jsx("div", { className: "swarm-demo-accordion-body", children: item.text }) })] }, item.id))) })] }), "swarm-primitive-accordion");
    if (kind === "tabs")
        return panel(_jsxs(_Fragment, { children: [_jsxs("div", { className: "swarm-demo-panel-heading", children: [_jsx("span", { className: "swarm-demo-eyebrow", children: "PROJECT WORKSPACE" }), _jsx("h3", { children: label || "Website refresh" }), _jsx("p", { children: detail || "Everything the team needs, in one place." })] }), _jsxs(SwarmTabs.Root, { value: tab, onValueChange: setTab, children: [_jsxs(SwarmTabs.List, { "aria-label": "Project sections", children: [_jsx(SwarmTabs.Trigger, { value: "overview", children: "Overview" }), _jsx(SwarmTabs.Trigger, { value: "activity", children: "Activity" }), _jsx(SwarmTabs.Trigger, { value: "files", children: "Files" })] }), _jsxs(SwarmTabs.Content, { value: "overview", children: [_jsxs("div", { className: "swarm-demo-project-summary", children: [_jsxs("div", { children: [_jsx("span", { children: "STATUS" }), _jsx("strong", { children: "In review" })] }), _jsxs("div", { children: [_jsx("span", { children: "DELIVERABLES" }), _jsx("strong", { children: "8 of 10 ready" })] })] }), _jsx("p", { className: "swarm-demo-caption", children: "The homepage and product pages are ready for feedback." })] }), _jsx(SwarmTabs.Content, { value: "activity", children: _jsxs("ul", { className: "swarm-demo-file-list", children: [_jsxs("li", { children: [_jsxs("span", { children: [_jsx("strong", { children: "Homepage updated" }), _jsx("small", { children: "Maya added the latest revision" })] }), _jsx("small", { children: "12m ago" })] }), _jsxs("li", { children: [_jsxs("span", { children: [_jsx("strong", { children: "Feedback resolved" }), _jsx("small", { children: "Alex closed 3 comments" })] }), _jsx("small", { children: "1h ago" })] })] }) }), _jsx(SwarmTabs.Content, { value: "files", children: _jsxs("ul", { className: "swarm-demo-file-list", children: [_jsxs("li", { children: [_jsxs("span", { children: [_jsx("strong", { children: "Brand guidelines.pdf" }), _jsx("small", { children: "Typography, colors, and usage" })] }), _jsx("small", { children: "2.4 MB" })] }), _jsxs("li", { children: [_jsxs("span", { children: [_jsx("strong", { children: "Website source.zip" }), _jsx("small", { children: "Editable layouts and assets" })] }), _jsx("small", { children: "18 MB" })] })] }) })] })] }), "swarm-primitive-tabs");
    if (kind === "toast") {
        const show = (next) => {
            setResult(next);
            setToastId((value) => value + 1);
            setOpen(true);
            onAction?.();
        };
        return (_jsxs(SwarmToast.Provider, { duration: 5000, swipeDirection: "right", children: [panel(_jsxs(_Fragment, { children: [_jsxs("div", { className: "swarm-demo-panel-heading", children: [_jsx("span", { className: "swarm-demo-eyebrow", children: "WORKSPACE SETTINGS" }), _jsx("h3", { children: label || "Keep everyone in sync." }), _jsx("p", { children: detail ||
                                        "Save your preferences. A notification confirms the change without getting in the way." })] }), _jsxs("div", { className: "swarm-demo-toast-actions", children: [_jsx(SwarmButton, { onClick: () => show("saved"), children: "Save changes" }), _jsx("button", { className: "swarm-demo-text-button", onClick: () => show("error"), children: "Try an error" })] }), _jsx("p", { className: "swarm-demo-caption", role: "status", children: result === "saved"
                                ? "Your preferences are saved."
                                : result === "error"
                                    ? "Your changes are still here. Try saving again."
                                    : result === "undone"
                                        ? "Previous preferences restored."
                                        : "You have unsaved changes." })] })), _jsxs(SwarmToast.Root, { open: open, onOpenChange: setOpen, variant: result === "error" ? "error" : "success", children: [_jsx("span", { className: "swarm-toast-icon", "aria-hidden": "true", children: result === "error" ? "!" : "✓" }), _jsxs("div", { className: "swarm-toast-copy", children: [_jsx(SwarmToast.Title, { children: result === "error" ? "Couldn’t save changes" : "Changes saved" }), _jsx(SwarmToast.Description, { children: result === "error"
                                        ? "Check your connection and try again."
                                        : "Your workspace preferences are up to date." })] }), result !== "error" && (_jsx(SwarmToast.Action, { altText: "Restore the previous workspace preferences", onClick: () => setResult("undone"), children: "Undo" })), _jsx(SwarmToast.Close, { "aria-label": "Dismiss notification", children: "\u00D7" })] }, toastId), _jsx(SwarmToast.Portal, { children: _jsx(SwarmToast.Viewport, {}) })] }));
    }
    return null;
}
