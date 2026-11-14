const e=[{path:"registry/default/hooks/use-reduced-motion/use-reduced-motion.ts",language:"tsx",content:`"use client";

import * as React from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Returns true when the user prefers reduced motion. SSR-safe: returns false
 * on the server and during hydration, then syncs to the real media query.
 *
 * Every animated Crucible component must consume this and either freeze at a
 * tasteful static frame or fall back to a simple fade.
 */
export function useReducedMotion(): boolean {
  return React.useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false
  );
}

function subscribe(callback: () => void): () => void {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
