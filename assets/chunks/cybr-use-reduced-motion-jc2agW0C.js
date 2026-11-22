const n=[{path:"lib/use-reduced-motion.ts",language:"typescript",content:`/**
 * CYBR//UI · useReducedMotion
 * MIT License · Copyright (c) 2026 JLTDigital and Jonathan Taft
 * https://cybr-ui.com/r/use-reduced-motion.json
 * https://github.com/JLTDigital/cybr-ui
 */
import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

// Static-first: report reduced motion on the server and during hydration so JS
// animation never starts before the real preference is known.
function getServerSnapshot() {
  return true;
}

export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
