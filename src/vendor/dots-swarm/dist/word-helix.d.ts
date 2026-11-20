import { type HTMLAttributes } from "react";
export type WordHelixProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    children: string;
    /** 0 = normal paragraph; 1 = helix. Intermediate values are reversible. */
    progress?: number;
    /** Continuously rotate the helix. */
    animate?: boolean;
    /** Playback multiplier for the built-in helix shape's motion. */
    speed?: number;
    /** Seconds to move between paragraph and helix. Use 0 for direct scrubbing. */
    transitionDuration?: number;
    paused?: boolean;
    reducedMotion?: boolean;
};
/** Real words preserve their DOM identity while following the built-in helix shape. */
export declare function WordHelix({ children, progress, animate, speed, transitionDuration, paused, reducedMotion, style, ...props }: WordHelixProps): import("react").JSX.Element;
