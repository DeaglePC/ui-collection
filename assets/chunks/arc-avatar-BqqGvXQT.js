const t=[{path:"registry/components/avatar/avatar.module.css",language:"css",content:`.avatar {
  position: relative;
  display: inline-grid;
  flex: 0 0 auto;
  place-items: center;
  overflow: visible;
  border: 1px solid var(--border);
  border-radius: var(--radius-pill);
  background: var(--surface-muted);
  color: var(--foreground);
  font-size: var(--text-xs);
  font-weight: 500;
}

.avatar img {
  pointer-events: none;
  border-radius: inherit;
  object-fit: cover;
  transition: opacity var(--duration-standard) var(--ease-enter), filter var(--duration-standard) var(--ease-enter);
}

/* Set only while a photo is still downloading after mount, so cached photos never fade. */
.avatar img[data-loading] {
  opacity: 0;
  filter: blur(4px);
  transition: none;
}

.fallback { animation: avatar-fallback-in var(--duration-standard) var(--ease-enter) both; }

.sm { width: 28px; height: 28px; font-size: 10px; }
.md { width: 36px; height: 36px; }
.lg { width: 48px; height: 48px; font-size: var(--text-sm); }
.xl { width: 88px; height: 88px; font-size: var(--text-xl); }

.status {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
  width: 10px;
  height: 10px;
  border: 2px solid var(--surface);
  border-radius: var(--radius-pill);
  box-shadow: 0 0 0 1px color-mix(in oklab, var(--border) 70%, transparent);
}

.sm .status { width: 8px; height: 8px; border-width: 1.5px; }
.lg .status { width: 12px; height: 12px; }
.xl .status { width: 14px; height: 14px; right: 4px; bottom: 4px; }
.online { background: var(--success); }
.offline { background: var(--text-muted); }

@keyframes avatar-fallback-in { from { opacity: 0; } to { opacity: 1; } }

@media (prefers-reduced-motion: reduce) {
  .avatar img { transition: none; }
  .avatar img[data-loading] { filter: none; }
  .fallback { animation: none; }
}
`},{path:"registry/components/avatar/avatar.tsx",language:"tsx",content:`/**
 * Arc UI · Avatar
 * MIT License · Copyright (c) 2026 Elia Kuratli
 * https://uiarc.dev/components/avatar
 * https://github.com/kuratlielia/arc-library
 */
"use client";

import { useLayoutEffect, useRef, useState, type HTMLAttributes } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArcImage } from "@/lib/arc-provider";
import { motionTokens } from "@/lib/motion-tokens";
import styles from "./avatar.module.css";
export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> { name: string; src?: string; size?: "sm" | "md" | "lg" | "xl"; status?: "online" | "offline" }
export function Avatar({ name, src, size = "md", status, className, ...props }: AvatarProps) {
  const initials = name.trim().split(/\\s+/).slice(0, 2).map(part => part[0]?.toUpperCase()).join("");
  const reduceMotion = !!useReducedMotion();
  const image = useRef<HTMLImageElement>(null);
  const [failedSrc, setFailedSrc] = useState<string>();
  // A photo that is already decoded shows at once. One that is still loading waits, then fades in from a soft blur.
  useLayoutEffect(() => { const node = image.current; if (node && !node.complete) node.dataset.loading = ""; }, [src]);
  const showImage = src && failedSrc !== src;
  return <span {...props} className={[styles.avatar, styles[size], className].filter(Boolean).join(" ")} role="img" aria-label={\`\${name}\${status ? \`, \${status}\` : ""}\`}>
    {showImage ? <ArcImage key={src} ref={image} src={src} alt="" fill sizes={size === "xl" ? "88px" : size === "lg" ? "48px" : size === "md" ? "36px" : "28px"} onLoad={event => { delete event.currentTarget.dataset.loading; }} onError={() => setFailedSrc(src)} /> : <span className={src ? styles.fallback : undefined} aria-hidden="true">{initials}</span>}
    <AnimatePresence initial={false}>{status && <motion.i key={status} className={[styles.status, styles[status]].join(" ")} aria-hidden="true" initial={{ opacity: 0, scale: .6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .6, transition: { duration: reduceMotion ? 0 : motionTokens.duration.fast } }} transition={reduceMotion ? { duration: 0 } : motionTokens.spring.snappy} />}</AnimatePresence>
  </span>;
}
`}],n="",a={files:t,prompt:n};export{a as default,t as files,n as prompt};
