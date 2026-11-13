/**
 * Crucible · Sluice
 * MIT License · Copyright (c) 2026 Crucible (crucibleui.com)
 * https://crucibleui.com · https://crucibleui.com/r/sluice.json
 */
"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "../cn";
import { useReducedMotion } from "../use-reduced-motion";

/** One file attached to the composer, rendered as a removable chip. */
export interface SluiceAttachment {
  /** Stable, unique id — used as the React key and passed to `onRemoveAttachment`. */
  id: string;
  /** Filename shown on the chip and in its remove button's label. */
  name: string;
  /** Size in bytes. Rendered as a compact "12 KB" suffix when present. */
  size?: number;
}

export interface SluiceProps
  extends Omit<
    React.ComponentPropsWithoutRef<"div">,
    "onSubmit" | "defaultValue" | "onChange"
  > {
  /** Controlled draft text. Pair with `onValueChange`. */
  value?: string;
  /** Initial draft text when uncontrolled. @default "" */
  defaultValue?: string;
  /** Fires with the next draft on every edit (and with `""` after submit), controlled or not. */
  onValueChange?: (value: string) => void;
  /**
   * Fires on Enter or the send button with the draft and the current
   * attachments. The composer clears its own draft (and, when uncontrolled,
   * its attachments) right after.
   */
  onSubmit?: (text: string, attachments: SluiceAttachment[]) => void;
  /**
   * The assistant is working. The send button morphs into a stop button, a
   * light traces the capsule border, and Enter no longer submits.
   * @default false
   */
  busy?: boolean;
  /** Fires from the stop button or Escape while `busy`. */
  onStop?: () => void;
  /** Textarea placeholder. @default "Ask anything…" */
  placeholder?: string;
  /**
   * Controlled attachment chips. Omit to let the composer track files picked
   * or pasted itself (cleared on submit).
   */
  attachments?: SluiceAttachment[];
  /** Fires with files chosen from the attach button or pasted from the clipboard. */
  onAttach?: (files: File[]) => void;
  /** Fires when a chip's remove button is pressed. */
  onRemoveAttachment?: (id: string) => void;
  /** Hide the attach button entirely. @default false */
  hideAttach?: boolean;
  /** Model names for the compact model pill. The pill is hidden when omitted or empty. */
  models?: string[];
  /** Controlled selected model. Pair with `onModelChange`. */
  model?: string;
  /** Initial model when uncontrolled. @default models[0] */
  defaultModel?: string;
  /** Fires when the model pill changes, controlled or not. */
  onModelChange?: (model: string) => void;
  /** Rows the textarea grows to before it scrolls. @default 8 */
  maxRows?: number;
  /** Accent for the busy border trace, stop button, and focus rings. @default "#a78bfa" (ion violet) */
  accentColor?: string;
  /** Accessible name for the textarea. @default "Message" */
  label?: string;
  /**
   * Embedded variant for panels and side sheets: a tighter, flatter field —
   * smaller radius, quiet fill, no glass blur or drop shadow, trimmed padding.
   * @default false
   */
  compact?: boolean;
}

const useIsoLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb < 10 ? kb.toFixed(1) : Math.round(kb)} KB`;
  const mb = kb / 1024;
  return `${mb < 10 ? mb.toFixed(1) : Math.round(mb)} MB`;
}

const TEXT_CLASS =
  "w-full whitespace-pre-wrap break-words px-4 pt-3.5 pb-1.5 text-[15px] leading-6";
const TEXT_CLASS_COMPACT =
  "w-full whitespace-pre-wrap break-words px-3.5 pt-3 pb-1 text-[15px] leading-6";

/**
 * Sluice — a prompt composer for chat UIs. An auto-growing textarea inside a
 * rounded glass capsule, with a toolbar of attach button, spring-in attachment
 * chips, an optional model pill, and a send button. While `busy`, the send
 * disc morphs into a rounded-square stop button and a thin accent light laps
 * the capsule border, so the input itself shows the system is working. On
 * submit the text lifts and fades upward as it clears.
 *
 * Keyboard: Enter submits, Shift+Enter inserts a newline, Escape stops while
 * busy; IME composition is respected. Pasting files attaches them.
 *
 * Accessibility: labelled textarea, send/stop button with a switching label,
 * chips as a list with labelled remove buttons, and a polite status when the
 * assistant starts responding. Honors prefers-reduced-motion: no border trace
 * (a static accent border instead), instant morphs, short opacity fades only.
 */
export function Sluice({
  value,
  defaultValue = "",
  onValueChange,
  onSubmit,
  busy = false,
  onStop,
  placeholder = "Ask anything…",
  attachments,
  onAttach,
  onRemoveAttachment,
  hideAttach = false,
  models,
  model,
  defaultModel,
  onModelChange,
  maxRows = 8,
  accentColor = "#a78bfa",
  label = "Message",
  compact = false,
  className,
  style,
  onKeyDown,
  ...props
}: SluiceProps) {
  const reducedMotion = useReducedMotion();
  const rootRef = React.useRef<HTMLDivElement>(null);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // ---- Draft text (controlled / uncontrolled) ------------------------------
  const textControlled = value !== undefined;
  const [internalText, setInternalText] = React.useState(defaultValue);
  const text = textControlled ? value : internalText;
  const setText = React.useCallback(
    (next: string) => {
      if (!textControlled) setInternalText(next);
      onValueChange?.(next);
    },
    [textControlled, onValueChange]
  );

  // ---- Attachments (controlled / uncontrolled) -----------------------------
  const attachmentsControlled = attachments !== undefined;
  const [internalAttachments, setInternalAttachments] = React.useState<
    SluiceAttachment[]
  >([]);
  const currentAttachments = attachmentsControlled
    ? attachments
    : internalAttachments;
  const idCounter = React.useRef(0);

  const attach = React.useCallback(
    (files: File[]) => {
      if (files.length === 0) return;
      onAttach?.(files);
      if (!attachmentsControlled) {
        setInternalAttachments((prev) => [
          ...prev,
          ...files.map((f) => ({
            id: `sluice-file-${++idCounter.current}`,
            name: f.name || "pasted-file",
            size: f.size,
          })),
        ]);
      }
    },
    [onAttach, attachmentsControlled]
  );

  const removeAttachment = React.useCallback(
    (id: string) => {
      onRemoveAttachment?.(id);
      if (!attachmentsControlled) {
        setInternalAttachments((prev) => prev.filter((a) => a.id !== id));
      }
      // The removed chip's button vanishes — keep focus in the composer.
      textareaRef.current?.focus();
    },
    [onRemoveAttachment, attachmentsControlled]
  );

  // ---- Model (controlled / uncontrolled) -----------------------------------
  const [internalModel, setInternalModel] = React.useState(
    () => defaultModel ?? models?.[0] ?? ""
  );
  const currentModel = model ?? (internalModel || models?.[0] || "");
  const changeModel = (next: string) => {
    if (model === undefined) setInternalModel(next);
    onModelChange?.(next);
  };

  // ---- Auto-grow -----------------------------------------------------------
  const [overflowing, setOverflowing] = React.useState(false);
  useIsoLayoutEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    const cs = window.getComputedStyle(ta);
    const lineHeight = parseFloat(cs.lineHeight) || 24;
    const padY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
    const max = lineHeight * Math.max(1, maxRows) + padY;
    ta.style.height = "0px";
    const needed = ta.scrollHeight;
    ta.style.height = `${Math.min(needed, max)}px`;
    setOverflowing(needed > max + 1);
  }, [text, maxRows]);

  // ---- Submit + lift-away ghost --------------------------------------------
  const [ghost, setGhost] = React.useState<{
    key: number;
    text: string;
    height: number;
  } | null>(null);
  const ghostCounter = React.useRef(0);

  const isEmpty = text.trim().length === 0 && currentAttachments.length === 0;

  const submit = () => {
    if (busy || isEmpty) return;
    const ta = textareaRef.current;
    if (text.trim().length > 0) {
      setGhost({
        key: ++ghostCounter.current,
        text,
        height: ta?.offsetHeight ?? 0,
      });
    }
    onSubmit?.(text, currentAttachments);
    setText("");
    if (!attachmentsControlled) setInternalAttachments([]);
  };

  const handleTextKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key !== "Enter" || event.shiftKey) return;
    // IME guard: Enter that confirms a composition must not submit.
    if (event.nativeEvent.isComposing || event.keyCode === 229) return;
    event.preventDefault();
    submit();
  };

  const handleRootKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;
    if (event.key === "Escape" && busy) {
      event.preventDefault();
      onStop?.();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const files = Array.from(event.clipboardData.files);
    if (files.length === 0 || hideAttach) return;
    // Only swallow the paste when there's no text riding along with the files.
    if (!event.clipboardData.getData("text/plain")) event.preventDefault();
    attach(files);
  };

  // ---- Pause the border trace offscreen ------------------------------------
  const [onScreen, setOnScreen] = React.useState(true);
  React.useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) =>
      setOnScreen(entry?.isIntersecting ?? true)
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const showTrace = busy && !reducedMotion && onScreen;
  const textClass = compact ? TEXT_CLASS_COMPACT : TEXT_CLASS;
  const fade = { duration: 0.15 };
  const morph = reducedMotion
    ? { duration: 0 }
    : ({ type: "spring", duration: 0.22, bounce: 0.25 } as const);

  const iconButton = cn(
    "flex size-8 shrink-0 items-center justify-center rounded-full text-neutral-400 transition-colors",
    "hover:bg-white/[0.06] hover:text-neutral-100",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--sluice-accent)"
  );

  return (
    <div
      ref={rootRef}
      data-crucible="sluice"
      className={cn("relative w-full max-w-2xl", className)}
      style={{ ["--sluice-accent" as string]: accentColor, ...style }}
      onKeyDown={handleRootKeyDown}
      {...props}
    >
      <div
        className={cn(
          "relative border transition-[border-color,box-shadow] duration-300",
          compact
            ? "rounded-[14px] bg-white/[0.03]"
            : "rounded-3xl bg-neutral-900/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl",
          busy && reducedMotion
            ? "border-[color-mix(in_oklab,var(--sluice-accent)_60%,transparent)]"
            : "border-white/10 focus-within:border-white/20",
          busy &&
            (compact
              ? "shadow-[0_0_24px_-12px_var(--sluice-accent)]"
              : "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_32px_-12px_var(--sluice-accent),0_18px_40px_-20px_rgba(0,0,0,0.9)]")
        )}
      >
        {/* Busy border trace — a rotating conic light masked to a 1.5px ring. */}
        <AnimatePresence>
          {showTrace && (
            <motion.div
              key="trace"
              aria-hidden
              className="pointer-events-none absolute -inset-px overflow-hidden rounded-[inherit]"
              style={{
                padding: 1.5,
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                mask: "linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute aspect-square"
                style={{
                  left: "50%",
                  top: "50%",
                  width: "max(150%, 400px)",
                  x: "-50%",
                  y: "-50%",
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, transparent 220deg, color-mix(in oklab, var(--sluice-accent) 40%, transparent) 290deg, var(--sluice-accent) 340deg, white 356deg, transparent 360deg)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2.4, ease: "linear", repeat: Infinity }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Text area + the lift-away ghost of the last submission. */}
        <div className="relative">
          <AnimatePresence>
            {ghost && (
              <motion.div
                key={ghost.key}
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col justify-end overflow-hidden text-neutral-100"
                style={{ maxHeight: ghost.height || undefined }}
                initial={{ opacity: 1, y: 0 }}
                animate={
                  reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }
                }
                transition={
                  reducedMotion ? fade : { duration: 0.34, ease: [0.22, 1, 0.36, 1] }
                }
                onAnimationComplete={() =>
                  setGhost((g) => (g?.key === ghost.key ? null : g))
                }
              >
                <div className={textClass}>{ghost.text}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <textarea
            ref={textareaRef}
            rows={1}
            value={text}
            placeholder={placeholder}
            aria-label={label}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleTextKeyDown}
            onPaste={handlePaste}
            className={cn(
              textClass,
              "block resize-none bg-transparent text-neutral-100 placeholder:text-neutral-500 focus:outline-none",
              overflowing ? "overflow-y-auto" : "overflow-y-hidden"
            )}
          />
        </div>

        {/* Toolbar */}
        <div
          className={cn(
            "flex items-end gap-2",
            compact ? "px-2 pb-2 pt-0.5" : "px-2.5 pb-2.5 pt-1"
          )}
        >
          {!hideAttach && (
            <>
              <button
                type="button"
                aria-label="Attach files"
                className={iconButton}
                onClick={() => fileInputRef.current?.click()}
              >
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="size-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m20 11.5-8.2 8.2a5 5 0 0 1-7.1-7.1l8.6-8.6a3.4 3.4 0 0 1 4.8 4.8l-8.6 8.6a1.7 1.7 0 0 1-2.4-2.4l7.9-7.9" />
                </svg>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                tabIndex={-1}
                aria-hidden
                className="hidden"
                onChange={(e) => {
                  attach(Array.from(e.target.files ?? []));
                  e.target.value = "";
                }}
              />
            </>
          )}

          <ul
            role="list"
            aria-label="Attachments"
            className="flex min-h-8 min-w-0 flex-1 flex-wrap items-center gap-y-1.5"
          >
            <AnimatePresence initial={false}>
              {currentAttachments.map((a) => (
                <motion.li
                  key={a.id}
                  className="overflow-hidden"
                  style={{ originX: 0 }}
                  initial={
                    reducedMotion
                      ? { opacity: 0 }
                      : { opacity: 0, width: 0, marginRight: 0, x: -14, scale: 0.7 }
                  }
                  animate={{ opacity: 1, width: "auto", marginRight: 6, x: 0, scale: 1 }}
                  exit={
                    reducedMotion
                      ? { opacity: 0, transition: fade }
                      : {
                          opacity: 0,
                          width: 0,
                          marginRight: 0,
                          scale: 0.85,
                          transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
                        }
                  }
                  transition={
                    reducedMotion
                      ? fade
                      : { type: "spring", stiffness: 520, damping: 30, mass: 0.7 }
                  }
                >
                  <span className="flex h-7 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] pl-2.5 pr-1 text-xs text-neutral-300">
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="size-3.5 text-neutral-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    >
                      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                      <path d="M14 3v5h5" />
                    </svg>
                    <span className="max-w-[10rem] truncate">{a.name}</span>
                    {a.size !== undefined && (
                      <span className="tabular-nums text-neutral-500">
                        {formatSize(a.size)}
                      </span>
                    )}
                    <button
                      type="button"
                      aria-label={`Remove ${a.name}`}
                      onClick={() => removeAttachment(a.id)}
                      className="flex size-5 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-white/10 hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--sluice-accent)"
                    >
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className="size-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      >
                        <path d="M6 6l12 12M18 6 6 18" />
                      </svg>
                    </button>
                  </span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          {models && models.length > 0 && (
            <div className="relative shrink-0">
              <select
                aria-label="Model"
                value={currentModel}
                onChange={(e) => changeModel(e.target.value)}
                className="h-8 cursor-pointer appearance-none rounded-full border border-white/10 bg-white/[0.03] pl-3 pr-7 text-xs text-neutral-300 transition-colors hover:border-white/20 hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--sluice-accent)"
              >
                {models.map((m) => (
                  <option key={m} value={m} className="bg-neutral-900 text-neutral-200">
                    {m}
                  </option>
                ))}
              </select>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="pointer-events-none absolute right-2.5 top-1/2 size-3 -translate-y-1/2 text-neutral-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          )}

          {/* Send ⇄ stop — one button that morphs disc → rounded square. */}
          <motion.button
            type="button"
            aria-label={busy ? "Stop generating" : "Send message"}
            disabled={!busy && isEmpty}
            onClick={() => (busy ? onStop?.() : submit())}
            initial={false}
            animate={{ borderRadius: busy ? 10 : 18 }}
            transition={morph}
            className={cn(
              "relative flex size-9 shrink-0 items-center justify-center overflow-hidden transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--sluice-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900",
              busy
                ? "bg-[color-mix(in_oklab,var(--sluice-accent)_18%,transparent)] text-(--sluice-accent) hover:bg-[color-mix(in_oklab,var(--sluice-accent)_28%,transparent)]"
                : isEmpty
                  ? "cursor-not-allowed bg-white/[0.07] text-neutral-500"
                  : "bg-neutral-100 text-neutral-950 hover:bg-white"
            )}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {busy ? (
                <motion.span
                  key="stop"
                  aria-hidden
                  className="block size-3 rounded-[3px] bg-current"
                  initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.4, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.4 }}
                  transition={reducedMotion ? { duration: 0 } : morph}
                />
              ) : (
                <motion.svg
                  key="send"
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="size-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                  transition={reducedMotion ? { duration: 0 } : morph}
                >
                  <path d="M12 19V5M5.5 11.5 12 5l6.5 6.5" />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <span role="status" aria-live="polite" className="sr-only">
        {busy ? "Assistant is responding. Press Escape to stop." : ""}
      </span>
    </div>
  );
}
