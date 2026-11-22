const e=[{path:"registry/components/popover/popover.module.css",language:"css",content:`/* Press feedback on the anchor stays in color. Radix measures the trigger when the panel opens, so a scaled trigger would move the panel. */
.anchor:active:not(:disabled) { transform: none; }
.content {
  --popover-x: 0px;
  --popover-y: -5px;
  z-index: 80;
  min-width: 12rem;
  max-width: min(22rem, calc(100vw - 20px));
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-panel);
  background: var(--surface-raised);
  color: var(--foreground);
  box-shadow: var(--shadow-floating);
  transform-origin: var(--radix-popover-content-transform-origin);
  transition: opacity var(--duration-fast) var(--ease-enter), transform var(--duration-spring) var(--ease-spring);
}
/* The panel starts a few pixels toward its trigger and settles on a spring; it leaves faster than it arrives.
   Transitions instead of keyframes, so a close that interrupts the open, or a reopen during the close, reverses from where the panel is. */
.content[data-side="top"] { --popover-y: 5px; }
.content[data-side="left"] { --popover-x: 5px; --popover-y: 0px; }
.content[data-side="right"] { --popover-x: -5px; --popover-y: 0px; }
@starting-style {
  .content[data-state="open"] { opacity: 0; transform: translate(var(--popover-x), var(--popover-y)) scale(.97); }
}
/* Radix unmounts when the exit animation ends, so a no-op keyframe times the exit while the transition does the visual work. */
.content[data-state="closed"] { opacity: 0; transform: translate(calc(var(--popover-x) * .5), calc(var(--popover-y) * .5)) scale(.98); transition: opacity var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard); animation: popover-exit var(--duration-fast) linear both; pointer-events: none; }
.content:focus { outline: none; }
@keyframes popover-exit { to { --popover-exit: 1; } }
@media (prefers-reduced-motion: reduce) {
  .content, .content[data-state="closed"] { transform: none; transition: opacity var(--duration-instant) var(--ease-standard); }
}
`},{path:"registry/components/popover/popover.tsx",language:"tsx",content:`/**
 * Arc UI · Popover
 * MIT License · Copyright (c) 2026 Elia Kuratli
 * https://uiarc.dev/components/popover
 * https://github.com/kuratlielia/arc-library
 */
"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import styles from "./popover.module.css";

export const Popover = PopoverPrimitive.Root;
export const PopoverClose = PopoverPrimitive.Close;

/** The trigger anchors the panel, so it opts out of press-scale: a scaled rect measured on open would shift the panel as the trigger springs back. */
export const PopoverTrigger = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
>(function PopoverTrigger({ className, ...props }, ref) {
  return <PopoverPrimitive.Trigger {...props} ref={ref} className={[styles.anchor, className].filter(Boolean).join(" ")}/>;
});

PopoverTrigger.displayName = "PopoverTrigger";

export const PopoverContent = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(function PopoverContent({ className, align = "start", sideOffset = 6, collisionPadding = 10, ...props }, ref) {
  return <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      {...props}
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      collisionPadding={collisionPadding}
      className={[styles.content, className].filter(Boolean).join(" ")}
    />
  </PopoverPrimitive.Portal>;
});

PopoverContent.displayName = "PopoverContent";
`}],o="",n={files:e,prompt:o};export{n as default,e as files,o as prompt};
