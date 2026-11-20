import { type ReactElement } from 'react';
/** Animate meaningful state changes; wrap a single ref-forwarding element. */
export declare function SwarmMorph({ state, children, duration }: {
    state: string | number | boolean;
    children: ReactElement;
    duration?: number;
}): import("react").JSX.Element;
/** Used by portaled primitive content. CSS exit presence keeps Radix semantics intact. */
export declare function useSwarmPresence(node: HTMLElement | null): void;
