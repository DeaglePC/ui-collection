const n=[{path:"registry/default/hooks/use-dpr-cap/use-dpr-cap.ts",language:"tsx",content:`"use client";

import * as React from "react";

/**
 * A subtree-wide devicePixelRatio ceiling, applied on top of each component's
 * own \`dpr\` knob. A host running many GPU components at once — a gallery of
 * thumbnails, a dashboard of small charts — wraps them in a provider to trade
 * sharpness for fill rate without touching each component:
 *
 * \`\`\`tsx
 * <DprCapContext.Provider value={1}>{thumbnails}</DprCapContext.Provider>
 * \`\`\`
 *
 * Defaults to no cap.
 */
export const DprCapContext = React.createContext<number>(Infinity);

/** The enclosing {@link DprCapContext} ceiling (Infinity when uncapped). */
export function useDprCap(): number {
  return React.useContext(DprCapContext);
}

/**
 * \`min(window.devicePixelRatio, ...caps)\`. Reads \`window\`, so call it inside
 * effects or handlers only — never during render.
 */
export function clampDpr(...caps: number[]): number {
  const device = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
  return Math.min(device, ...caps);
}
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
