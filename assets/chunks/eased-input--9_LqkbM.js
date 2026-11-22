const n=[{path:"registry/input/input-demo.tsx",language:"tsx",content:`/**
 * Eased UI · input
 * MIT License · Copyright (c) 2026 Eased
 * https://eased.dev/components/input
 * https://github.com/easedui/ui
 */
"use client";

import { useState } from "react";
import { Field } from "../field/field";
import { DemoFrame } from "../lib/demo-frame";
import { Input } from "./input";

const RESERVED = ["admin", "api", "app", "eased", "www"];

const validateSlug = (value: unknown) => {
  const v = String(value ?? "");
  if (!v) return "Pick a URL for your workspace.";
  if (/[^a-z0-9-]/.test(v)) return "Use lowercase letters, numbers and hyphens.";
  if (v.length < 3) return "Use at least 3 characters.";
  if (RESERVED.includes(v)) return \`“\${v}” is reserved. Try another.\`;
  return null;
};

export function InputDemo() {
  const [name, setName] = useState("Northwind Traders");
  const [slug, setSlug] = useState("northwind");

  return (
    <DemoFrame title="Workspace" meta="Settings">
      <div className="flex min-h-0 flex-1 flex-col gap-4 p-4">
        <Field label="Name">
          <Input value={name} onValueChange={setName} placeholder="Acme Inc." />
        </Field>

        <Field
          label="URL"
          description="Changing it breaks links people have saved."
          validate={validateSlug}
          validationMode="onChange"
        >
          <Input
            value={slug}
            onValueChange={setSlug}
            start={<span className="-mr-2 text-ui text-text-muted">eased.dev/</span>}
            spellCheck={false}
            autoCapitalize="off"
          />
        </Field>

        <Field label="Region" description="Data residency is set when the workspace is created." disabled>
          <Input
            defaultValue="Frankfurt (eu-central-1)"
            start={
              <svg viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M4.5 7V5.5a3.5 3.5 0 0 1 7 0V7m-7.75 0h8.5c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75h-8.5a.75.75 0 0 1-.75-.75v-5c0-.41.34-.75.75-.75Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            }
          />
        </Field>
      </div>
    </DemoFrame>
  );
}
`},{path:"registry/input/input.tsx",language:"tsx",content:`/**
 * Eased UI · input
 * MIT License · Copyright (c) 2026 Eased
 * https://eased.dev/components/input
 * https://github.com/easedui/ui
 */
"use client";

import { Input as BaseInput } from "@base-ui/react/input";
import type { ComponentProps, ReactNode } from "react";
import {
  InputGroup,
  InputGroupAddon,
  controlClass,
  type ControlSize,
} from "../_primitives/field/field";

export type InputProps = Omit<ComponentProps<typeof BaseInput>, "size" | "className"> & {
  /** sm 32px, md 36px (default), lg 40px. */
  size?: ControlSize;
  /** Leading content: an icon, or a prefix such as "https://". */
  start?: ReactNode;
  /** Trailing content: a unit, a kbd hint, a button. */
  end?: ReactNode;
  /**
   * Mark the input invalid outside a \`Field\` (inside one, the field's validity drives it):
   * red border, \`aria-invalid\`, and one shake when it turns on.
   */
  invalid?: boolean;
  /** Classes for the bordered shell. */
  className?: string;
  /** Classes for the \`<input>\` itself. */
  controlClassName?: string;
};

/**
 * A text input on Base UI's Input, so it labels, describes and validates itself inside a
 * \`Field\`. Focus firms the border and grows a soft glow; an error shakes the box once, 6px, and the field's
 * message opens under it with a height spring.
 */
export function Input({
  size = "md",
  start,
  end,
  invalid,
  className = "",
  controlClassName = "",
  ...props
}: InputProps) {
  return (
    <InputGroup size={size} invalid={invalid} className={className}>
      {start !== undefined && <InputGroupAddon>{start}</InputGroupAddon>}
      <BaseInput
        {...props}
        {...(invalid !== undefined ? { "aria-invalid": invalid } : null)}
        className={\`\${controlClass} \${controlClassName}\`}
      />
      {end !== undefined && <InputGroupAddon>{end}</InputGroupAddon>}
    </InputGroup>
  );
}
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
