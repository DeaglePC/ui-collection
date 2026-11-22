const e=[{path:"registry/components/text-reveal/text-reveal.module.css",language:"css",content:`.reveal { max-width: 24ch; margin: 0; overflow: visible; color: var(--foreground); text-wrap: balance; }
.line { display: block; }
/* The clip hides the rise below the line through a feathered bottom edge, so a blurred word surfaces softly instead of being cut by a hard line.
   Padding with matching negative margins leaves room for descenders and the blur without changing layout; the feather sits below the descenders, so resting words are never dimmed. */
.clip { display: inline-block; vertical-align: top; padding: .1em .16em .24em; margin: -.1em -.16em -.24em; mask-image: linear-gradient(#000 calc(100% - .18em), transparent); }
/* Three tracks: the rise settles longest, the fade finishes first, and the blur clears between them.
   Backwards fill holds the hidden start through each word's delay, then lets go at the end, so resting words keep no transform or filter layer and render as crisp as plain text. */
.word { display: inline-block; animation: rise .76s var(--ease-enter) var(--reveal-delay, 0s) backwards, fade .44s var(--ease-standard) var(--reveal-delay, 0s) backwards, focus .58s var(--ease-enter) var(--reveal-delay, 0s) backwards; }
.srOnly { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0; user-select: none; }
@keyframes rise { from { transform: translateY(.62em); } }
@keyframes fade { from { opacity: 0; } }
@keyframes focus { from { filter: blur(var(--reveal-blur, 4px)); } }
@media (prefers-reduced-motion: reduce) { .clip { mask-image: none; } .word { animation: fade var(--duration-fast) var(--ease-standard) backwards; } }
`},{path:"registry/components/text-reveal/text-reveal.tsx",language:"tsx",content:`/**
 * Arc UI · Text reveal
 * MIT License · Copyright (c) 2026 Elia Kuratli
 * https://uiarc.dev/components/text-reveal
 * https://github.com/kuratlielia/arc-library
 */
"use client";
import { Fragment, type CSSProperties } from "react";
import { motionTokens } from "@/lib/motion-tokens";
import styles from "./text-reveal.module.css";

/**
 * Reveals a short headline or sentence once, as it mounts: each word rises out of its own clip while it sharpens from a soft blur.
 * The entrance runs in CSS, so it starts on first paint, never waits for hydration, and never leaves text hidden when scripts are slow.
 * Use \`\\n\` in \`text\` for a deliberate line break and change the element's \`key\` to replay it.
 */
export interface TextRevealProps { text: string; as?: "h1" | "h2" | "h3" | "p"; className?: string; id?: string; /** Seconds to wait before the first word rises. Defaults to 0. */ delay?: number }
/** Total stagger stays under this many seconds, however long the text is. */
const MAX_STAGGER = motionTokens.duration.considered;

export function TextReveal({ text, as = "h2", className, id, delay = 0 }: TextRevealProps) {
  const Tag = as;
  const lines = text.split("\\n").map(line => line.split(" ").filter(Boolean));
  const count = lines.reduce((total, words) => total + words.length, 0);
  const step = Math.min(motionTokens.stagger.word, MAX_STAGGER / Math.max(count, 1));
  const blur = as === "p" ? motionTokens.blur.soft : motionTokens.blur.text;
  let index = 0;
  const spoken = text.replace(/\\n/g, " ");
  // Headings take their accessible name from aria-label, so the sentence appears once in the DOM. A paragraph cannot be named, so it keeps a visually hidden copy.
  const named = as !== "p";
  return <Tag id={id} aria-label={named ? spoken : undefined} className={[styles.reveal, className].filter(Boolean).join(" ")} style={{ "--reveal-blur": \`\${blur}px\` } as CSSProperties}>
    {named ? null : <span className={styles.srOnly}>{spoken}</span>}
    {lines.map((words, lineIndex) => <Fragment key={lineIndex}><span className={styles.line} aria-hidden="true">{words.map((word, wordIndex) => {
      const position = index++;
      return <Fragment key={\`\${word}-\${position}\`}><span className={styles.clip}><span className={styles.word} style={{ "--reveal-delay": \`\${delay + position * step + lineIndex * step}s\` } as CSSProperties}>{word}</span></span>{wordIndex < words.length - 1 ? " " : null}</Fragment>;
    })}</span>{lineIndex < lines.length - 1 ? " " : null}</Fragment>)}
  </Tag>;
}

export default TextReveal;
`}],n="",a={files:e,prompt:n};export{a as default,e as files,n as prompt};
