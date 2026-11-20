const n=[{path:"registry/default/cards/ingot-grid/ingot-grid.tsx",language:"tsx",content:`import * as React from "react";

import { cn } from "@/lib/utils";

export interface IngotGridProps extends React.ComponentPropsWithoutRef<"div"> {
  /** IngotCell children (or any content). */
  children: React.ReactNode;
  /** Columns at the desktop (\`lg\`) breakpoint. Mobile is always 1 column, \`sm\` is 2. @default 4 */
  columns?: 2 | 3 | 4 | 5 | 6;
  /** Height of an implicit row in px — controls how tall a \`rowSpan\` step is. @default 140 */
  rowHeight?: number;
  /** Gap between cells, any CSS length or a number of px. @default 16 */
  gap?: number | string;
}

const COLUMN_CLASSES: Record<number, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
};

/**
 * IngotGrid — a responsive bento layout primitive. Compose it with
 * \`IngotCell\` children that declare \`colSpan\`/\`rowSpan\` to build
 * magazine-style tile layouts. Base component for future marketing
 * sections — keep consumers to the \`columns\`/\`gap\` knobs and cell spans,
 * nothing structural.
 */
export function IngotGrid({
  children,
  className,
  style,
  columns = 4,
  rowHeight = 140,
  gap = 16,
  ...props
}: IngotGridProps) {
  return (
    <div
      data-crucible="ingot-grid"
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2",
        COLUMN_CLASSES[columns] ?? COLUMN_CLASSES[4],
        className
      )}
      style={{
        gap: typeof gap === "number" ? \`\${gap}px\` : gap,
        gridAutoRows: typeof rowHeight === "number" ? \`\${rowHeight}px\` : rowHeight,
        ...style,
      }}
      {...props}
    >
      <style>{\`
        [data-crucible="ingot-grid"]:has(.ingot-cell:hover) .ingot-cell:not(:hover) {
          opacity: 0.45;
        }
        @media (prefers-reduced-motion: reduce) {
          [data-crucible="ingot-grid"] .ingot-cell {
            transition: border-color 200ms ease, opacity 200ms ease, box-shadow 200ms ease;
          }
          [data-crucible="ingot-grid"] .ingot-cell:hover {
            transform: none;
          }
        }
      \`}</style>
      {children}
    </div>
  );
}

export interface IngotCellProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Cell content — any header/icon/title/description markup. */
  children?: React.ReactNode;
  /** Columns this cell spans at \`lg\` (clamped to 1 on mobile and 2 at \`sm\`). @default 1 */
  colSpan?: 1 | 2 | 3 | 4;
  /** Rows this cell spans. @default 1 */
  rowSpan?: 1 | 2 | 3;
}

// Spans collapse with the breakpoints so a wide cell never forces implicit
// overflow columns: 1 column on mobile, at most 2 at \`sm\`, the full span at \`lg\`.
const COL_SPAN_CLASSES: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-1 sm:col-span-2",
  3: "col-span-1 sm:col-span-2 lg:col-span-3",
  4: "col-span-1 sm:col-span-2 lg:col-span-4",
};

const ROW_SPAN_CLASSES: Record<number, string> = {
  1: "row-span-1",
  2: "row-span-2",
  3: "row-span-3",
};

/**
 * IngotCell — a single tile inside \`IngotGrid\`. Reads as a stacked slab:
 * a beveled border, a soft vertical sheen, and a faint top-edge highlight.
 * On hover it lifts slightly and blooms — border brightens white and a
 * soft monochrome glow spreads beneath it — while sibling cells dim, so
 * the grid concentrates attention on the tile under the cursor. The lift
 * is skipped under \`prefers-reduced-motion\`; the border/glow/dim
 * choreography (color and opacity, not motion) still runs.
 */
export function IngotCell({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  ...props
}: IngotCellProps) {
  return (
    <div
      className={cn(
        "ingot-cell",
        "relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent p-5",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]",
        "transition-[transform,border-color,opacity,box-shadow] duration-300 ease-out",
        "hover:-translate-y-1 hover:border-white/55",
        "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_0_1px_rgba(255,255,255,0.08),0_12px_36px_-12px_rgba(255,255,255,0.22),0_0_28px_-6px_rgba(255,255,255,0.14)]",
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/35 before:to-transparent",
        COL_SPAN_CLASSES[colSpan] ?? COL_SPAN_CLASSES[1],
        ROW_SPAN_CLASSES[rowSpan] ?? ROW_SPAN_CLASSES[1],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
`}],e="",o={files:n,prompt:e};export{o as default,n as files,e as prompt};
