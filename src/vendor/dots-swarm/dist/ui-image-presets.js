"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { SwarmImageReveal, } from "./ui-image.js";
import { SwarmMaterialScope } from "./ui.js";
// A self-contained original landscape keeps package examples usable offline.
const landscape = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 900 600"><defs><linearGradient id="sky" x2="0" y2="1"><stop stop-color="#334875"/><stop offset=".6" stop-color="#b693ad"/><stop offset="1" stop-color="#f6c9a0"/></linearGradient><linearGradient id="hill" x2=".2" y2="1"><stop stop-color="#99b3bf"/><stop offset="1" stop-color="#364a6b"/></linearGradient><linearGradient id="water" x2="0" y2="1"><stop stop-color="#e4bfa9"/><stop offset="1" stop-color="#384f71"/></linearGradient></defs><path fill="url(#sky)" d="M0 0h900v600H0z"/><circle cx="662" cy="177" r="67" fill="#ffe8bf"/><path d="M0 367 170 134 360 352 518 206 763 418 900 305V600H0z" fill="url(#hill)"/><path d="m99 230 71-96 100 115-92-42z" fill="#e3e3dd"/><path d="m465 258 53-52 73 64-71-34z" fill="#d5d8d9"/><path d="M0 435q225-66 451-10t449 0v175H0" fill="url(#water)"/><path d="M0 376q120 13 284 120L0 572z" fill="#203a4e"/><path d="M900 374Q700 419 585 554l315 46z" fill="#182e43"/><g fill="none" stroke="#ffe0c0" opacity=".38"><path d="M382 454h207m-241 19h187m-120 25h236m-305 24h211m-144 30h196"/></g></svg>`)}`;
const hints = {
    hover: "Hover or focus to reveal. Leave or blur to conceal. On touch, tap to toggle.",
    click: "Click, tap, or press Enter to reveal. Repeat to conceal.",
    focus: "Tab to the image to reveal it. Move focus away to conceal.",
    "in-view": "Reveals when 35% is in view; conceals when it leaves the viewport.",
    manual: "Use the action below. In your app, use a ref or controlled state.",
};
export function ImagePrimitive({ kind, src, alt, imageTrigger, duration, onAction, }) {
    const [trigger, setTrigger] = useState(imageTrigger ?? "hover");
    const [dotSize, setDotSize] = useState(5), [revealed, setRevealed] = useState(false);
    useEffect(() => {
        setTrigger(imageTrigger ?? "hover");
        setRevealed(false);
    }, [imageTrigger, kind]);
    const controller = useRef(null);
    const Image = SwarmImageReveal;
    return (_jsx(SwarmMaterialScope, { children: _jsxs("div", { className: "swarm-image-demo", children: [_jsx(Image, { ref: controller, src: src || landscape, alt: alt || "Sunset over an alpine lake", trigger: trigger, dotSize: dotSize, duration: duration, onRevealedChange: setRevealed }, trigger), _jsxs("div", { className: "swarm-image-demo-controls", children: [_jsxs("label", { children: ["Trigger", _jsx("select", { "aria-label": "Image trigger", value: trigger, onChange: (event) => {
                                        setTrigger(event.target.value);
                                        setRevealed(false);
                                    }, children: Object.keys(hints).map((value) => (_jsx("option", { value: value, children: value === "in-view"
                                            ? "In view"
                                            : value[0].toUpperCase() + value.slice(1) }, value))) })] }), _jsxs("label", { children: ["Dots", _jsx("input", { "aria-label": "Image dot size", type: "range", min: 2, max: 12, step: 1, value: dotSize, onChange: (event) => setDotSize(Number(event.target.value)) })] }), _jsx("button", { onClick: () => {
                                controller.current?.toggle();
                                onAction?.();
                            }, children: revealed ? "Conceal image" : "Reveal image" })] }), _jsx("p", { className: "swarm-image-demo-hint", children: hints[trigger] })] }) }));
}
