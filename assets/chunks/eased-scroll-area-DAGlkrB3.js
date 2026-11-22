const e=[{path:"registry/scroll-area/scroll-area-demo.tsx",language:"tsx",content:`/**
 * Eased UI · scroll-area
 * MIT License · Copyright (c) 2026 Eased
 * https://eased.dev/components/scroll-area
 * https://github.com/easedui/ui
 */
"use client";

import { useRef, useState } from "react";
import { Avatar } from "../avatar/avatar";
import { DemoFrame } from "../lib/demo-frame";
import { ToggleGroup, ToggleGroupItem } from "../toggle-group/toggle-group";
import { ScrollArea } from "./scroll-area";

type Kind = "merged" | "review" | "comment" | "deploy" | "issue";

const EVENTS: { who: string; kind: Kind; what: string; ago: string }[] = [
  { who: "Maya Chen", kind: "merged", what: "Fix sheet scroll handoff on iOS", ago: "2m" },
  { who: "Jonas Weber", kind: "review", what: "Requested changes on #482", ago: "9m" },
  { who: "Priya Raman", kind: "deploy", what: "Shipped v0.14.2 to production", ago: "21m" },
  { who: "Leo Martins", kind: "comment", what: "“Thumb should thicken on hover”", ago: "34m" },
  { who: "Ana Sousa", kind: "issue", what: "Opened #491 Fades flicker in Safari 17", ago: "1h" },
  { who: "Maya Chen", kind: "review", what: "Approved #479 Progressive blur", ago: "1h" },
  { who: "Kenji Sato", kind: "merged", what: "Add superellipse fallback path", ago: "2h" },
  { who: "Jonas Weber", kind: "comment", what: "“Can we pin the corner exponent?”", ago: "2h" },
  { who: "Priya Raman", kind: "deploy", what: "Shipped v0.14.1 to staging", ago: "3h" },
  { who: "Ana Sousa", kind: "merged", what: "Tokenise scrollbar colours", ago: "4h" },
  { who: "Leo Martins", kind: "issue", what: "Opened #488 Rubber-band too loose", ago: "5h" },
  { who: "Kenji Sato", kind: "review", what: "Commented on #476", ago: "6h" },
  { who: "Maya Chen", kind: "deploy", what: "Rolled back v0.14.0", ago: "8h" },
  { who: "Jonas Weber", kind: "merged", what: "Velocity projection for pagers", ago: "Yesterday" },
  { who: "Ana Sousa", kind: "comment", what: "“Feather looks right at 20px”", ago: "Yesterday" },
  { who: "Priya Raman", kind: "issue", what: "Closed #470 Focus ring clipped", ago: "Mon" },
];

const FILTERS: { value: "all" | Kind; label: string }[] = [
  { value: "all", label: "All" },
  { value: "merged", label: "Merged" },
  { value: "review", label: "Reviews" },
  { value: "comment", label: "Comments" },
  { value: "deploy", label: "Deploys" },
  { value: "issue", label: "Issues" },
];

/** An activity feed: a horizontal filter row and a vertical list, both in Scroll Areas. */
export function ScrollAreaDemo() {
  const [filter, setFilter] = useState<"all" | Kind>("all");
  const list = useRef<HTMLDivElement>(null);
  const rows = filter === "all" ? EVENTS : EVENTS.filter((e) => e.kind === filter);

  return (
    <DemoFrame title="Activity" meta={\`\${rows.length} events\`}>
      <ScrollArea orientation="horizontal" fade={24} className="shrink-0 border-b border-line-subtle" aria-label="Filters">
        <ToggleGroup
          value={[filter]}
          onValueChange={(v) => {
            if (!v[0]) return; // one filter is always on
            setFilter(v[0] as "all" | Kind);
            list.current?.scrollTo({ top: 0 });
          }}
          aria-label="Filter activity"
          variant="chips"
          className="w-max px-4 py-2.5"
        >
          {FILTERS.map((f) => (
            <ToggleGroupItem key={f.value} value={f.value}>
              {f.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </ScrollArea>

      <ScrollArea viewportRef={list} className="min-h-0 flex-1" aria-label="Activity">
        <ul>
          {rows.map((e, i) => (
            <li key={\`\${e.who}-\${e.what}\`} className={\`flex h-12 items-center gap-3 px-4 \${i ? "border-t border-line-subtle" : ""}\`}>
              <Avatar name={e.who} size="md" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-ui-sm text-text">
                  <span className="font-medium">{e.who}</span> <span className="text-text-secondary">{e.what}</span>
                </p>
                <p className="text-ui-xs text-text-muted capitalize">{e.kind}</p>
              </div>
              <span className="shrink-0 text-ui-xs text-text-muted tabular-nums">{e.ago}</span>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </DemoFrame>
  );
}
`},{path:"registry/scroll-area/scroll-area.tsx",language:"tsx",content:`/**
 * Eased UI · scroll-area
 * MIT License · Copyright (c) 2026 Eased
 * https://eased.dev/components/scroll-area
 * https://github.com/easedui/ui
 */
"use client";

import { ScrollArea as Base } from "@base-ui/react/scroll-area";
import type { CSSProperties, ReactNode, Ref } from "react";
import { scrollFadeMask, type FadeAxis } from "../_primitives/scroll-fade/scroll-fade";

export type ScrollAreaProps = {
  children: ReactNode;
  /** Which way it scrolls. "both" draws both bars and fades all four edges. Default "vertical". */
  orientation?: "vertical" | "horizontal" | "both";
  /** Edge feather in px, drawn only while there is more to scroll that way; 0 turns it off. Default 20. */
  fade?: number;
  /** Classes for the root: size it here (\`h-64\`, \`max-h-80\`, \`flex-1 min-h-0\`). */
  className?: string;
  /** Classes for the content wrapper: put padding here so it scrolls with the content. */
  contentClassName?: string;
  /** The scrolling element, for \`scrollTo\`, scroll-linked effects or a Progressive Blur. */
  viewportRef?: Ref<HTMLDivElement>;
  /** Accessible name for the scrollable region, which is a keyboard tab stop when it overflows. */
  "aria-label"?: string;
  "aria-labelledby"?: string;
  style?: CSSProperties;
};

const AXIS: Record<NonNullable<ScrollAreaProps["orientation"]>, FadeAxis> = { vertical: "y", horizontal: "x", both: "both" };

// The bar is a 10px hit zone; the visible pill is 6px and drawn at 2/3 until the pointer is on
// the bar, so it thickens under the pointer (scale, not width, so it stays on the compositor).
const bar =
  "group/bar flex touch-none p-0.5 opacity-0 select-none pointer-events-none transition-opacity duration-(--eased-duration-slow) ease-standard data-hovering:pointer-events-auto data-hovering:opacity-100 data-hovering:duration-(--eased-duration-fast) data-scrolling:pointer-events-auto data-scrolling:opacity-100 data-scrolling:duration-(--eased-duration-instant) reduced:transition-none";
const pill =
  "rounded-pill bg-line-strong transition-[scale,background-color] duration-(--eased-duration-fast) ease-standard group-active/bar:bg-text-muted group-active/bar:scale-100 [@media(hover:hover)_and_(pointer:fine)]:group-hover/bar:scale-100 [@media(hover:hover)_and_(pointer:fine)]:group-hover/bar:bg-text-muted reduced:transition-none";

/**
 * A native scroller with Eased's overlay scrollbar and edge fades. Base UI owns the scrolling,
 * the thumb drag and the keyboard (the viewport is a tab stop that arrow keys scroll); Eased
 * draws a thin themed pill that appears while scrolling or hovering and thickens under the
 * pointer, and feathers each edge only while there is content past it.
 */
export function ScrollArea({
  children,
  orientation = "vertical",
  fade = 20,
  className = "",
  contentClassName = "",
  viewportRef,
  style,
  ...aria
}: ScrollAreaProps) {
  const vertical = orientation !== "horizontal";
  const horizontal = orientation !== "vertical";

  return (
    <Base.Root
      style={style}
      className={\`relative min-h-0 min-w-0 overflow-hidden -outline-offset-2 has-[[data-eased-viewport]:focus-visible]:outline-2 has-[[data-eased-viewport]:focus-visible]:outline-focus \${className}\`}
    >
      <Base.Viewport
        ref={viewportRef}
        data-eased-viewport=""
        {...aria}
        role={aria["aria-label"] || aria["aria-labelledby"] ? "region" : undefined}
        style={{
          ...(fade > 0 && scrollFadeMask(AXIS[orientation], fade)),
          // Base UI sets overflow: scroll inline; lock the axis this area does not scroll.
          ...(!vertical && { overflowY: "hidden" }),
          ...(!horizontal && { overflowX: "hidden" }),
        }}
        className="size-full max-h-[inherit] overscroll-contain outline-none"
      >
        {/* Base UI sets min-width: fit-content inline; a vertical-only area must shrink to the
            viewport instead, or wide rows push their trailing column out of view. */}
        <Base.Content style={horizontal ? undefined : { minWidth: 0 }} className={contentClassName}>
          {children}
        </Base.Content>
      </Base.Viewport>

      {vertical && (
        <Base.Scrollbar orientation="vertical" className={\`\${bar} w-2.5 justify-end\`}>
          <Base.Thumb className="flex w-full justify-end">
            <span className={\`\${pill} h-full w-1.5 origin-right scale-x-[0.67]\`} />
          </Base.Thumb>
        </Base.Scrollbar>
      )}
      {horizontal && (
        <Base.Scrollbar orientation="horizontal" className={\`\${bar} h-2.5 flex-col justify-end\`}>
          <Base.Thumb className="flex h-full flex-col justify-end">
            <span className={\`\${pill} h-1.5 w-full origin-bottom scale-y-[0.67]\`} />
          </Base.Thumb>
        </Base.Scrollbar>
      )}
      {orientation === "both" && <Base.Corner />}
    </Base.Root>
  );
}
`}],n="",a={files:e,prompt:n};export{a as default,e as files,n as prompt};
