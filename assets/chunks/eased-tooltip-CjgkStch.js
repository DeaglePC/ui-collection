const n=[{path:"registry/tooltip/tooltip-demo.tsx",language:"tsx",content:`/**
 * Eased UI · tooltip
 * MIT License · Copyright (c) 2026 Eased
 * https://eased.dev/components/tooltip
 * https://github.com/easedui/ui
 */
"use client";

import { Toggle } from "@base-ui/react/toggle";
import { Toolbar } from "@base-ui/react/toolbar";
import type { ReactNode } from "react";
import { Button } from "../button/button";
import { DemoFrame } from "../lib/demo-frame";
import { Tooltip, TooltipProvider } from "./tooltip";

type Tool = { label: string; keys: string[]; icon: ReactNode; toggle?: boolean; pressed?: boolean };

const MARKS: Tool[] = [
  { label: "Bold", keys: ["⌘", "B"], icon: <BoldIcon />, toggle: true, pressed: true },
  { label: "Italic", keys: ["⌘", "I"], icon: <ItalicIcon />, toggle: true },
  { label: "Strikethrough", keys: ["⇧", "⌘", "X"], icon: <StrikeIcon />, toggle: true },
  { label: "Inline code", keys: ["⌘", "E"], icon: <CodeIcon />, toggle: true },
];

const BLOCKS: Tool[] = [
  { label: "Add link", keys: ["⌘", "K"], icon: <LinkIcon /> },
  { label: "Bulleted list", keys: ["⇧", "⌘", "8"], icon: <ListIcon />, toggle: true },
];

export function TooltipDemo() {
  return (
    <DemoFrame title="Release notes" meta="Draft">
      <TooltipProvider>
        <Toolbar.Root aria-label="Formatting" className="flex h-12 shrink-0 items-center gap-0.5 border-b border-line-subtle px-2">
          {MARKS.map((t) => (
            <Tool key={t.label} tool={t} />
          ))}
          <Toolbar.Separator className="mx-1.5 h-4 w-px shrink-0 bg-line" />
          {BLOCKS.map((t) => (
            <Tool key={t.label} tool={t} />
          ))}
          <div className="flex-1" />
          <Tool tool={{ label: "Undo", keys: ["⌘", "Z"], icon: <UndoIcon /> }} />
        </Toolbar.Root>
      </TooltipProvider>

      <article className="flex min-h-0 flex-1 flex-col gap-3 overflow-hidden px-4 py-5">
        <h3 className="text-ui-md font-medium text-balance text-text">Eased 2.4: background sync</h3>
        <p className="text-ui text-pretty text-text-secondary">
          Offline edits now sync in the background. When two people change the same block, the{" "}
          <strong className="font-medium text-text">newest edit wins</strong> and the other is kept in history instead of
          asking you to choose.
        </p>
        <ul className="flex flex-col gap-1.5 text-ui text-text-secondary">
          {["Sync status lives in the title bar", "Conflicts open in a side-by-side diff", "Large files upload in parallel"].map(
            (line) => (
              <li key={line} className="flex gap-2">
                <span aria-hidden className="flex h-[1lh] shrink-0 items-center">
                  <span className="size-1 rounded-pill bg-text-muted" />
                </span>
                <span className="min-w-0">{line}</span>
              </li>
            ),
          )}
        </ul>
      </article>
    </DemoFrame>
  );
}

function Tool({ tool }: { tool: Tool }) {
  // Toolbar buttons sit side by side, so no extended hit area: it would cover the neighbours.
  const button = <Button variant="ghost" size="icon-sm" hitArea={false} className="data-pressed:bg-surface-active data-pressed:text-text" />;
  return (
    <Tooltip content={tool.label} shortcut={tool.keys} side="bottom">
      <Toolbar.Button aria-label={tool.label} render={tool.toggle ? <Toggle defaultPressed={tool.pressed} render={button} /> : button}>
        {tool.icon}
      </Toolbar.Button>
    </Tooltip>
  );
}

/* ---------- Icons: 16px, 1.5px stroke ---------- */

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className="size-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

function BoldIcon() {
  return (
    <Icon>
      <path d="M4.75 3h4a2.5 2.5 0 0 1 0 5h-4zM4.75 8h4.75a2.5 2.5 0 0 1 0 5H4.75z" />
    </Icon>
  );
}

function ItalicIcon() {
  return (
    <Icon>
      <path d="M10 3h-3.5M9.5 13H6M9.75 3l-3.5 10" />
    </Icon>
  );
}

function StrikeIcon() {
  return (
    <Icon>
      <path d="M2.75 8h10.5M11 4.6C10.5 3.6 9.4 3 8 3 6.3 3 5 3.9 5 5.2c0 .9.5 1.5 1.3 1.9M5 11.4c.5 1 1.6 1.6 3 1.6 1.7 0 3-.9 3-2.3 0-.4-.1-.7-.3-1" />
    </Icon>
  );
}

function CodeIcon() {
  return (
    <Icon>
      <path d="M5.5 4.5 2 8l3.5 3.5M10.5 4.5 14 8l-3.5 3.5" />
    </Icon>
  );
}

function LinkIcon() {
  return (
    <Icon>
      <path d="M7 9a2.5 2.5 0 0 0 3.5 0l2-2A2.5 2.5 0 0 0 9 3.5l-.5.5M9 7a2.5 2.5 0 0 0-3.5 0l-2 2A2.5 2.5 0 0 0 7 12.5l.5-.5" />
    </Icon>
  );
}

function ListIcon() {
  return (
    <Icon>
      <path d="M6.5 4.5h7M6.5 8h7M6.5 11.5h7" />
      <circle cx="3" cy="4.5" r=".6" fill="currentColor" />
      <circle cx="3" cy="8" r=".6" fill="currentColor" />
      <circle cx="3" cy="11.5" r=".6" fill="currentColor" />
    </Icon>
  );
}

function UndoIcon() {
  return (
    <Icon>
      <path d="M5 3.5 2.5 6 5 8.5" />
      <path d="M2.5 6h6.75a3.75 3.75 0 0 1 0 7.5H7" />
    </Icon>
  );
}
`},{path:"registry/tooltip/tooltip.tsx",language:"tsx",content:`/**
 * Eased UI · tooltip
 * MIT License · Copyright (c) 2026 Eased
 * https://eased.dev/components/tooltip
 * https://github.com/easedui/ui
 */
"use client";

import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import type { ReactElement, ReactNode } from "react";
import { FloatingLayer, floatingSurface, type FloatingAlign, type FloatingSide } from "../_primitives/floating/floating";
import { Kbd } from "../kbd/kbd";

export type TooltipProviderProps = {
  /** How long the pointer must rest on the first trigger before its tooltip opens, ms. Default 400. */
  delay?: number;
  /** How long a tooltip stays after the pointer leaves, ms. Default 0. */
  closeDelay?: number;
  /** After a tooltip closes, the next one within this window opens instantly and unanimated, ms. Default 400. */
  timeout?: number;
  children: ReactNode;
};

/**
 * A delay group. Inside it the first tooltip waits \`delay\`; while the pointer sweeps on to
 * neighbouring triggers the rest appear at once, with no animation.
 */
export function TooltipProvider({ delay = 400, closeDelay = 0, timeout = 400, children }: TooltipProviderProps) {
  return (
    <BaseTooltip.Provider delay={delay} closeDelay={closeDelay} timeout={timeout}>
      {children}
    </BaseTooltip.Provider>
  );
}

export type TooltipProps = {
  /** The label. Keep it short; the trigger still needs a matching \`aria-label\`. */
  content: ReactNode;
  /** Keys shown after the label as \`Kbd\` caps, one per key: \`["⌘", "B"]\`, or \`"Esc"\` for one key. */
  shortcut?: string | string[];
  /** The trigger: one focusable element that accepts a ref, usually an icon button. */
  children: ReactElement;
  /** Preferred side; flips on collision. Default "top". */
  side?: FloatingSide;
  align?: FloatingAlign;
  /** Gap to the trigger, px. Default 6. */
  sideOffset?: number;
  /** Rest time before opening, ms. Unset: the provider's delay (400), or Base UI's 600 outside a provider. */
  delay?: number;
  closeDelay?: number;
  /** Close when the trigger is clicked. Default true. */
  closeOnClick?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  /** Stacking order. Default 50; raise it inside a higher layer such as a dialog. */
  zIndex?: number;
  /** Appended to the tooltip's classes. */
  className?: string;
};

/**
 * A short visual label for mouse and keyboard users. It opens after the pointer rests (or on
 * keyboard focus), enters 3px toward its trigger from the trigger's origin, and never shows on touch.
 */
export function Tooltip({
  content,
  shortcut,
  children,
  side = "top",
  align = "center",
  sideOffset,
  delay,
  closeDelay,
  closeOnClick = true,
  open,
  defaultOpen,
  onOpenChange,
  disabled,
  zIndex,
  className = "",
}: TooltipProps) {
  const keys = typeof shortcut === "string" ? [shortcut] : shortcut;

  return (
    <BaseTooltip.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange ? (next) => onOpenChange(next) : undefined}
      disabled={disabled}
    >
      <BaseTooltip.Trigger
        render={children}
        delay={delay}
        closeDelay={closeDelay}
        closeOnClick={closeOnClick}
      />
      <FloatingLayer
        parts={BaseTooltip}
        role="tooltip"
        side={side}
        align={align}
        sideOffset={sideOffset}
        zIndex={zIndex}
        className={\`\${floatingSurface} flex max-w-[min(16rem,var(--available-width))] items-center gap-2 rounded-control-sm px-2.5 py-1 text-ui-sm text-pretty \${className}\`}
      >
        <span className="min-w-0">{content}</span>
        {keys && keys.length > 0 && (
          // The label already names the action; the caps are a visual hint, not read twice.
          <span aria-hidden className="-mr-1 inline-flex shrink-0">
            <Kbd keys={keys} listen={false} />
          </span>
        )}
      </FloatingLayer>
    </BaseTooltip.Root>
  );
}
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
