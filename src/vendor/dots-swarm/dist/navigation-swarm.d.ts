import { type DotSwarmProps } from "./dot-swarm.js";
import { type NavigationInstruction, type DistanceUnits } from "./navigation.js";
export type NavigationSwarmProps = Omit<DotSwarmProps, "shape" | "points"> & {
    instruction: NavigationInstruction;
    units?: DistanceUnits;
};
/** Keep mounted across instruction changes to preserve particle identity and momentum. */
export declare function NavigationSwarm({ instruction, units, choreography, interactive, label, ...props }: NavigationSwarmProps): import("react").JSX.Element;
