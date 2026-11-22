const e=[{path:"registry/slider/slider-demo.tsx",language:"tsx",content:`/**
 * Eased UI · slider
 * MIT License · Copyright (c) 2026 Eased
 * https://eased.dev/components/slider
 * https://github.com/easedui/ui
 */
"use client";

import { useState } from "react";
import { DemoFrame } from "../lib/demo-frame";
import { Slider } from "./slider";

const usd = { style: "currency", currency: "USD", maximumFractionDigits: 0 } as const;

/** Usage limits: a spend cap, a price range with two thumbs, and an alert threshold. */
export function SliderDemo() {
  const [cap, setCap] = useState(400);
  return (
    <DemoFrame title="Usage limits" meta={\`Cap \${new Intl.NumberFormat("en-US", usd).format(cap)}/mo\`}>
      <div className="flex min-h-0 flex-1 flex-col justify-center gap-8 overflow-y-auto px-(--pad) py-4">
        <Slider label="Monthly spend cap" value={cap} onValueChange={setCap} min={0} max={2000} step={50} largeStep={250} format={usd} locale="en-US" />
        <Slider label="Model price range" defaultValue={[2, 15]} min={0} max={30} step={0.5} minStepsBetweenValues={2} format={{ ...usd, maximumFractionDigits: 2, minimumFractionDigits: 0 }} locale="en-US" aria-label="Price per million tokens" />
        <Slider label="Alert at" defaultValue={80} min={50} max={100} format={{ style: "unit", unit: "percent" }} />
        <Slider label="Burst allowance" defaultValue={20} disabled format={{ style: "unit", unit: "percent" }} />
      </div>
    </DemoFrame>
  );
}
`},{path:"registry/slider/slider.tsx",language:"tsx",content:`/**
 * Eased UI · slider
 * MIT License · Copyright (c) 2026 Eased
 * https://eased.dev/components/slider
 * https://github.com/easedui/ui
 */
"use client";

import { Slider as BaseSlider } from "@base-ui/react/slider";
import { useId, useState, type ReactNode } from "react";
import { NumberRoll } from "../_primitives/number-roll/number-roll";

export type SliderProps<V extends number | readonly number[]> = {
  /** The value (controlled). An array of two makes a range with two thumbs. */
  value?: V;
  /** The initial value (uncontrolled). */
  defaultValue?: V;
  /** Fires on every change while dragging or stepping. */
  onValueChange?: (value: V) => void;
  /** Fires once when a drag ends or a key is released: save here. */
  onValueCommitted?: (value: V) => void;
  /** Default 0. */
  min?: number;
  /** Default 100. */
  max?: number;
  /** Default 1. */
  step?: number;
  /** Shift + arrow and Page keys move by this much. Default 10. */
  largeStep?: number;
  /** Formats the readout and the value screen readers hear, e.g. \`{ style: "currency", currency: "USD" }\`. */
  format?: Intl.NumberFormatOptions;
  /** Locale for \`format\`. Defaults to the runtime locale. */
  locale?: Intl.LocalesArgument;
  /** The label above the track. Leave it out for a bare slider, and pass \`aria-label\`. */
  label?: ReactNode;
  /** Show the value, rolling, on the label row. Default true when there is a label. */
  showValue?: boolean;
  /** Minimum steps between a range's two thumbs. Default 0. */
  minStepsBetweenValues?: number;
  name?: string;
  disabled?: boolean;
  "aria-label"?: string;
  className?: string;
};

/**
 * A slider on Base UI: drag, click the track, or use arrows, Shift + arrows, Page, Home and
 * End. Pass an array for a range. The thumb swells while held, and the readout's digits roll
 * when the value steps (keys, track clicks) and follow the finger exactly while dragging.
 */
export function Slider<V extends number | readonly number[]>({
  label,
  showValue,
  format,
  locale,
  onValueChange,
  onValueCommitted,
  "aria-label": ariaLabel,
  className = "",
  ...props
}: SliderProps<V>) {
  const id = useId();
  const [inner, setInner] = useState<number | readonly number[]>(props.value ?? props.defaultValue ?? props.min ?? 0);
  const [dragging, setDragging] = useState(false);
  const current = props.value ?? inner;
  const values = typeof current === "number" ? [current] : current;
  const withValue = showValue ?? label != null;

  return (
    <BaseSlider.Root
      {...(props as BaseSlider.Root.Props<V>)}
      format={format}
      locale={locale}
      aria-labelledby={label != null ? \`\${id}-label\` : undefined}
      onValueChange={(v, details) => {
        setDragging(details.reason === "drag");
        setInner(v as number | readonly number[]);
        onValueChange?.(v as V);
      }}
      onValueCommitted={(v) => {
        setDragging(false);
        onValueCommitted?.(v as V);
      }}
      className={\`group/slider flex min-w-0 flex-col gap-2 data-disabled:opacity-50 \${className}\`}
    >
      {(label != null || withValue) && (
        <div className="flex min-w-0 items-baseline justify-between gap-3">
          {label != null && (
            <span id={\`\${id}-label\`} className="min-w-0 truncate text-ui font-medium text-text">
              {label}
            </span>
          )}
          {withValue && (
            <span className="ms-auto shrink-0 text-ui text-text-secondary tabular-nums" aria-hidden>
              {values.map((v, i) => (
                <span key={i}>
                  {i > 0 && <span className="px-1 text-text-muted">–</span>}
                  <NumberRoll value={v} format={format} locale={locale} animated={!dragging} aria-hidden />
                </span>
              ))}
            </span>
          )}
        </div>
      )}
      {/* A 20px control around a 4px track: the whole band is the hit target. */}
      <BaseSlider.Control className="relative flex h-5 w-full touch-none items-center select-none data-disabled:cursor-not-allowed">
        <BaseSlider.Track className="relative h-1 w-full rounded-pill bg-surface-active inset-shadow-well">
          <BaseSlider.Indicator className="rounded-pill bg-brand" />
          {values.map((_, i) => (
            <BaseSlider.Thumb
              key={i}
              index={values.length > 1 ? i : undefined}
              getAriaLabel={ariaLabel && values.length > 1 ? (n) => \`\${ariaLabel} \${n === 0 ? "minimum" : "maximum"}\` : undefined}
              aria-label={values.length === 1 ? ariaLabel : undefined}
              className="group/thumb flex size-5 items-center justify-center rounded-pill outline-none [&:has(:focus-visible)>span]:shadow-[0_0_0_2px_var(--eased-bg),0_0_0_4px_var(--eased-ring)] data-disabled:cursor-not-allowed"
            >
              <span
                aria-hidden
                className="size-4 rounded-pill bg-surface-raised shadow-thumb [transition:scale_var(--eased-duration-spring-snappy)_var(--eased-spring-snappy),box-shadow_var(--eased-duration-focus)_var(--eased-ease-standard)] [@media(hover:hover)_and_(pointer:fine)]:group-hover/thumb:scale-110 group-data-dragging/thumb:scale-125 reduced:scale-100! dark:bg-text"
              />
            </BaseSlider.Thumb>
          ))}
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}
`}],n="",a={files:e,prompt:n};export{a as default,e as files,n as prompt};
