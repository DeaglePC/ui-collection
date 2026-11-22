const e=[{path:"registry/accordion/accordion-demo.tsx",language:"tsx",content:`/**
 * Eased UI · accordion
 * MIT License · Copyright (c) 2026 Eased
 * https://eased.dev/components/accordion
 * https://github.com/easedui/ui
 */
"use client";

import { DemoFrame } from "../lib/demo-frame";
import { Accordion, AccordionItem } from "./accordion";

export function AccordionDemo() {
  return (
    <DemoFrame title="Billing help" meta="4 questions">
      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-1">
        <Accordion defaultValue={["charged"]}>
          <AccordionItem value="charged" title="When am I charged?">
            On the day your trial ends, then on the same date every month. If that date doesn’t exist in a month, such as
            the 31st, we charge on the last day instead.
          </AccordionItem>
          <AccordionItem value="switch" title="Can I change plans mid-cycle?">
            Yes. Upgrades apply at once and you pay the difference for the days left in the cycle. Downgrades take effect at
            your next renewal, so you keep what you paid for.
          </AccordionItem>
          <AccordionItem value="refund" title="Do you offer refunds?">
            Within 14 days of any charge, in full, no questions asked.
          </AccordionItem>
          <AccordionItem value="vat" title="How do I add a VAT number to my invoices?">
            <p>
              Go to Settings → Billing → Tax details and enter it with its country prefix, for example DE123456789. We
              check it against VIES before saving.
            </p>
            <p className="mt-2">
              New invoices show it from then on. To reissue a past invoice with the number on it, open the invoice and
              choose Regenerate.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </DemoFrame>
  );
}
`},{path:"registry/accordion/accordion.tsx",language:"tsx",content:`/**
 * Eased UI · accordion
 * MIT License · Copyright (c) 2026 Eased
 * https://eased.dev/components/accordion
 * https://github.com/easedui/ui
 */
"use client";

import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import { useState, type HTMLProps, type ReactNode } from "react";
import { AutoHeight } from "../_primitives/auto-height/auto-height";

export type AccordionProps<V extends string> = {
  /** Open items (controlled). */
  value?: V[];
  /** Initially open items (uncontrolled). */
  defaultValue?: V[];
  onValueChange?: (value: V[]) => void;
  /** Allow more than one item open at a time. Default \`false\`. */
  multiple?: boolean;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * A stack of disclosures separated by hairlines. Base UI's Accordion supplies the
 * behaviour: buttons in headings, \`aria-expanded\`/\`aria-controls\`, arrow keys between
 * triggers, Home/End.
 */
export function Accordion<V extends string>({ className = "", onValueChange, children, ...props }: AccordionProps<V>) {
  return (
    <BaseAccordion.Root<V>
      {...props}
      onValueChange={(v) => onValueChange?.(v)}
      className={\`flex min-w-0 flex-col divide-y divide-line-subtle \${className}\`}
    >
      {children}
    </BaseAccordion.Root>
  );
}

export type AccordionItemProps<V extends string> = {
  value: V;
  /** The trigger's label. */
  title: ReactNode;
  /** Heading level of the trigger, so it fits the page outline. Default 3. */
  headingLevel?: 2 | 3 | 4 | 5 | 6;
  disabled?: boolean;
  /** The panel's content. */
  children: ReactNode;
  className?: string;
};

function Chevron() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="size-4 shrink-0 text-text-muted [transition:rotate_var(--eased-duration-spring-smooth)_var(--eased-spring-smooth),color_150ms_var(--eased-ease-standard)] group-data-panel-open:rotate-180 reduced:[transition:none]"
    >
      <path d="m4 6.5 4 4 4-4" />
    </svg>
  );
}

/**
 * Base UI hides a closing panel at once; this keeps it rendered until AutoHeight has
 * finished collapsing it, then hides it so the empty region leaves the accessibility tree.
 */
function PanelBody({ open, htmlProps }: { open: boolean; htmlProps: HTMLProps<HTMLDivElement> }) {
  const [collapsed, setCollapsed] = useState(!open);
  const { hidden, children, ...rest } = htmlProps;
  void hidden;
  return (
    <div {...rest} hidden={!open && collapsed}>
      <AutoHeight
        open={open}
        onOpenChangeComplete={(isOpen) => setCollapsed(!isOpen)}
        innerClassName="pb-4 text-ui text-text-secondary text-pretty"
      >
        {children}
      </AutoHeight>
    </div>
  );
}

/**
 * One item. Its height springs open with no overshoot, the content fades in as the height
 * lands, and the chevron turns on the same spring. Closing fades the content first and is
 * quicker than opening.
 */
export function AccordionItem<V extends string>({
  value,
  title,
  headingLevel = 3,
  disabled,
  children,
  className = "",
}: AccordionItemProps<V>) {
  const H = \`h\${headingLevel}\` as const;
  return (
    <BaseAccordion.Item value={value} disabled={disabled} className={\`min-w-0 \${className}\`}>
      <BaseAccordion.Header render={<H />} className="m-0">
        <BaseAccordion.Trigger
          className={(state) =>
            \`group flex w-full items-center justify-between gap-3 rounded-control-xs py-3 text-left text-ui font-medium focus-ring \${
              state.disabled ? "cursor-not-allowed text-text-disabled" : "cursor-pointer text-text hover-fine:[&_svg]:text-text-secondary"
            }\`
          }
        >
          <span className="min-w-0 text-balance">{title}</span>
          <Chevron />
        </BaseAccordion.Trigger>
      </BaseAccordion.Header>
      <BaseAccordion.Panel
        keepMounted
        // Base UI owns open state and ARIA; AutoHeight owns the motion.
        render={(htmlProps, state) => <PanelBody open={state.open} htmlProps={htmlProps} />}
      >
        {children}
      </BaseAccordion.Panel>
    </BaseAccordion.Item>
  );
}
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
