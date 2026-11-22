const e=[{path:"registry/field/field-demo.tsx",language:"tsx",content:`/**
 * Eased UI · field
 * MIT License · Copyright (c) 2026 Eased
 * https://eased.dev/components/field
 * https://github.com/easedui/ui
 */
"use client";

import { Form } from "@base-ui/react/form";
import { useEffect, useRef, useState } from "react";
import { Button } from "../button/button";
import { Input } from "../input/input";
import { DemoFrame } from "../lib/demo-frame";
import { Field } from "./field";

const TAKEN = "maya@northwind.com";

const validateEmail = (value: unknown) => {
  const v = String(value ?? "").trim();
  if (!v) return "Enter your work email.";
  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(v)) return "That doesn’t look like an email address.";
  if (/@(gmail|yahoo|hotmail|outlook)\\./i.test(v)) return "Use your work email, not a personal one.";
  return null;
};

const validatePassword = (value: unknown) => {
  const v = String(value ?? "");
  if (!v) return "Choose a password.";
  if (v.length < 8) return \`Add \${8 - v.length} more character\${8 - v.length === 1 ? "" : "s"}.\`;
  return null;
};

export function FieldDemo() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const timer = useRef(0);
  useEffect(() => () => clearTimeout(timer.current), []);

  const submit = (values: Record<string, unknown>) => {
    setState("loading");
    timer.current = window.setTimeout(() => {
      // A server reply: Base UI's Form routes it to the field and focuses it.
      if (String(values.email).trim().toLowerCase() === TAKEN) {
        setErrors({ email: "An account with this email already exists." });
        setState("idle");
        return;
      }
      setState("done");
    }, 900);
  };

  return (
    <DemoFrame title="Create your account" meta="Step 1 of 2">
      <Form
        errors={errors}
        onFormSubmit={submit}
        className="flex min-h-0 flex-1 flex-col gap-4 p-4"
        aria-label="Create your account"
      >
        <Field
          name="email"
          label="Work email"
          description={\`We’ll send a sign-in link here. Try \${TAKEN}.\`}
          validate={validateEmail}
          onChange={() => errors.email && setErrors({})}
        >
          <Input type="email" placeholder="you@company.com" autoComplete="email" aria-required />
        </Field>

        <Field name="password" label="Password" description="At least 8 characters." validate={validatePassword}>
          <Input type="password" placeholder="••••••••" autoComplete="new-password" aria-required />
        </Field>

        <div className="mt-auto flex items-center justify-between gap-3">
          <p className="text-ui-sm text-text-muted">
            Already have an account?{" "}
            <a href="#" className="rounded-control-2xs text-text underline-offset-2 hover-fine:underline focus-ring">
              Sign in
            </a>
          </p>
          <Button
            type="submit"
            variant="primary"
            loading={state === "loading"}
            disabled={state === "done"}
            focusableWhenDisabled
            swapKey={state === "done" ? "done" : "idle"}
          >
            {state === "done" ? (
              <>
                <svg viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="m3.75 8.5 2.75 2.75 5.75-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Account created
              </>
            ) : (
              "Continue"
            )}
          </Button>
        </div>
        <span role="status" className="sr-only">
          {state === "done" ? "Account created" : ""}
        </span>
      </Form>
    </DemoFrame>
  );
}
`},{path:"registry/field/field.tsx",language:"tsx",content:`/**
 * Eased UI · field
 * MIT License · Copyright (c) 2026 Eased
 * https://eased.dev/components/field
 * https://github.com/easedui/ui
 */
"use client";

import type { ReactNode } from "react";
import {
  FieldLabel,
  FieldMessage,
  FieldRoot,
  type FieldRootProps,
} from "../_primitives/field/field";

export type FieldProps = Omit<FieldRootProps, "children"> & {
  /** The visible label, tied to the control for you. */
  label?: ReactNode;
  /** Helper text under the control. While the field is invalid the error takes its place. */
  description?: ReactNode;
  /**
   * An error you control (a server reply, a form library). Setting it marks the field invalid.
   * Leave it out to show the message from \`validate\`, \`<Form errors>\` or the browser.
   */
  error?: ReactNode;
  /** One control: \`<Input>\`, \`<Textarea>\`, \`<SearchField>\`, or any Base UI control. */
  children: ReactNode;
};

/**
 * Label, control and one message line, on Base UI's Field. The description and the error
 * share the line and swap with y + blur; the line's height springs when it opens or rewraps.
 * Inside Base UI's \`<Form>\`, submitting focuses the first invalid field.
 */
export function Field({ label, description, error, invalid, children, ...props }: FieldProps) {
  const hasError = error !== undefined && error !== null && error !== false && error !== "";
  return (
    <FieldRoot {...props} invalid={invalid ?? (hasError || undefined)}>
      {label !== undefined && <FieldLabel>{label}</FieldLabel>}
      {children}
      <FieldMessage description={description} error={hasError ? error : undefined} />
    </FieldRoot>
  );
}

export { FieldRoot, FieldLabel, FieldMessage } from "../_primitives/field/field";
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
