const e=[{path:"registry/segmented/segmented-demo.tsx",language:"tsx",content:`/**
 * Eased UI · segmented
 * MIT License · Copyright (c) 2026 Eased
 * https://eased.dev/components/segmented
 * https://github.com/easedui/ui
 */
"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Badge } from "../badge/badge";
import { DemoFrame } from "../lib/demo-frame";
import { smooth, useSafeReducedMotion } from "../lib/motion";
import { NumberRoll } from "../number-roll/number-roll";
import { TextSwap } from "../text-swap/text-swap";
import { Segmented } from "./segmented";

type Range = "24h" | "7d" | "30d" | "12m";
type Metric = "visitors" | "views";

const RANGES = [
  { value: "24h", label: "24h" },
  { value: "7d", label: "7 days" },
  { value: "30d", label: "30 days" },
  { value: "12m", label: "12 mo" },
] as const;

const METRICS = [
  { value: "visitors", label: "Visitors" },
  { value: "views", label: "Views" },
] as const;

// Twelve buckets per range, as a share of the range's busiest bucket.
const DATA: Record<Range, { total: number; delta: number; bars: number[]; axis: [string, string] }> = {
  "24h": { total: 3_842, delta: 0.081, bars: [18, 12, 9, 14, 38, 62, 81, 100, 92, 74, 55, 31], axis: ["00:00", "22:00"] },
  "7d": { total: 26_190, delta: -0.034, bars: [72, 80, 77, 91, 100, 46, 39, 70, 84, 88, 95, 52], axis: ["Oct 6", "Oct 17"] },
  "30d": { total: 118_604, delta: 0.124, bars: [41, 48, 52, 50, 61, 66, 63, 72, 79, 85, 93, 100], axis: ["Sep 18", "Oct 17"] },
  "12m": { total: 1_204_330, delta: 0.468, bars: [22, 26, 31, 30, 38, 44, 52, 57, 63, 74, 88, 100], axis: ["Nov", "Oct"] },
};

const pct = new Intl.NumberFormat("en-US", { style: "percent", maximumFractionDigits: 1, signDisplay: "always" });

export function SegmentedDemo() {
  const reduced = useSafeReducedMotion();
  const [range, setRange] = useState<Range>("7d");
  const [metric, setMetric] = useState<Metric>("visitors");
  const data = DATA[range];
  const scale = metric === "views" ? 2.7 : 1;
  const total = Math.round(data.total * scale);

  return (
    <DemoFrame
      title="Traffic"
      actions={<Segmented aria-label="Metric" options={METRICS} value={metric} onValueChange={setMetric} />}
    >
      <div className="flex min-h-0 flex-1 flex-col gap-5 p-4">
        <Segmented aria-label="Date range" options={RANGES} value={range} onValueChange={setRange} fullWidth />

        <div className="flex items-baseline justify-between gap-3">
          <div className="min-w-0">
            <p className="text-ui-sm text-text-muted">
              <TextSwap>{metric === "views" ? "Page views" : "Unique visitors"}</TextSwap>
            </p>
            <p className="text-3xl font-semibold text-text tabular-nums">
              <NumberRoll value={total} locale="en-US" />
            </p>
          </div>
          <Badge tone={data.delta < 0 ? "danger" : "success"}>{pct.format(data.delta)}</Badge>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-2">
          <div className="flex min-h-0 flex-1 items-end gap-1.5" aria-hidden>
            {data.bars.map((value, i) => (
              <motion.div
                key={i}
                initial={false}
                // clip-path, not scaleY, so the rounded top never squashes. 4px is --eased-radius-control-2xs:
                // Motion cannot interpolate a var() inside clip-path.
                animate={{ clipPath: \`inset(\${100 - value}% 0 0 0 round 4px 4px 0 0)\` }}
                transition={reduced ? { duration: 0 } : smooth}
                className={\`h-full flex-1 \${i === data.bars.length - 1 ? "bg-brand" : "bg-surface-active"}\`}
              />
            ))}
          </div>
          <div className="flex justify-between text-ui-xs text-text-muted tabular-nums">
            <span>{data.axis[0]}</span>
            <span>{data.axis[1]}</span>
          </div>
        </div>
      </div>
    </DemoFrame>
  );
}
`},{path:"registry/segmented/segmented.tsx",language:"tsx",content:`/**
 * Eased UI · segmented
 * MIT License · Copyright (c) 2026 Eased
 * https://eased.dev/components/segmented
 * https://github.com/easedui/ui
 */
"use client";

import { Radio } from "@base-ui/react/radio";
import { RadioGroup } from "@base-ui/react/radio-group";
import type { ReactNode } from "react";
import { Indicator, IndicatorGroup } from "../_primitives/indicator/indicator";

export type SegmentedOption<V extends string> = {
  value: V;
  /** The visible label. For an icon-only segment pass \`icon\` and an \`aria-label\` instead. */
  label?: ReactNode;
  /** A 16px icon before the label. */
  icon?: ReactNode;
  /** Required when there is no text label. */
  "aria-label"?: string;
  disabled?: boolean;
};

export type SegmentedProps<V extends string> = {
  options: readonly SegmentedOption<V>[];
  /** The selected value (controlled). */
  value?: V;
  /** The initially selected value (uncontrolled). Defaults to the first option. */
  defaultValue?: V;
  onValueChange?: (value: V) => void;
  /** \`sm\` is 32px (dense UI, toolbars, demo headers); \`md\` is 36px (forms, settings). Default \`sm\`. */
  size?: "sm" | "md";
  /** Stretch to the container and share the width equally between segments. */
  fullWidth?: boolean;
  /** Submits the value with a form under this name. */
  name?: string;
  disabled?: boolean;
  /** Accessible name, e.g. "Date range". Or point \`aria-labelledby\` at a visible label. */
  "aria-label"?: string;
  "aria-labelledby"?: string;
  className?: string;
};

const SIZES = {
  sm: {
    track: "h-control-sm rounded-control-sm [--radius-outer:var(--eased-radius-control-sm)]",
    item: "gap-1.5 px-3 text-ui-sm",
    icon: "px-2",
  },
  md: {
    track: "h-control-md rounded-control [--radius-outer:var(--eased-radius-control)]",
    item: "gap-2 px-3.5 text-ui",
    icon: "px-2.5",
  },
} as const;

/**
 * A single-choice control whose thumb glides to the selected segment on the snappy spring.
 * Base UI's RadioGroup supplies the behaviour: one tab stop, arrow keys move selection,
 * Home/End, form submission. Concentric by construction: the thumb's radius is the track's
 * minus its padding and border (\`radius-nested\`). Labels never change weight; the selected
 * one only darkens, and its cursor goes back to default because clicking it does nothing.
 * Segments carry no extended hit area: they sit edge to edge, and the track is the target.
 */
export function Segmented<V extends string>({
  options,
  value,
  defaultValue,
  onValueChange,
  size = "sm",
  fullWidth = false,
  name,
  disabled,
  className = "",
  ...aria
}: SegmentedProps<V>) {
  const s = SIZES[size];
  return (
    <RadioGroup<V>
      value={value}
      defaultValue={value === undefined ? (defaultValue ?? options[0]?.value) : undefined}
      onValueChange={(next) => onValueChange?.(next)}
      name={name}
      disabled={disabled}
      {...aria}
      className={\`\${fullWidth ? "flex w-full" : "inline-flex"} shrink-0 items-stretch border border-line-subtle bg-surface-sunken p-0.5 [--border-w:1px] [--pad:2px] \${s.track} \${className}\`}
    >
      <IndicatorGroup>
        {options.map((option) => (
          <Radio.Root
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            aria-label={option["aria-label"]}
            nativeButton
            render={(props, state) => (
              <button type="button" {...props}>
                {state.checked && (
                  <Indicator className="inset-0 radius-nested bg-surface-raised shadow-thumb" />
                )}
                {option.icon && <span className="relative flex size-4 shrink-0 items-center justify-center [&_svg]:size-4">{option.icon}</span>}
                {option.label !== undefined && <span className="relative truncate">{option.label}</span>}
              </button>
            )}
            className={(state) =>
              \`relative flex min-w-0 items-center justify-center font-medium whitespace-nowrap radius-nested select-none transition-[color,background-color,border-color,box-shadow] duration-150 ease-standard focus-ring \${
                option.label === undefined ? s.icon : s.item
              } \${fullWidth ? "flex-1" : ""} \${
                state.disabled
                  ? "cursor-not-allowed text-text-disabled"
                  : state.checked
                    ? "cursor-default text-text"
                    : "cursor-pointer text-text-muted hover-fine:text-text-secondary"
              }\`
            }
          />
        ))}
      </IndicatorGroup>
    </RadioGroup>
  );
}
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
