"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { DotSwarm } from "./dot-swarm.js";
import { shapeForInstruction, instructionText, formatDistance, } from "./navigation.js";
/** Keep mounted across instruction changes to preserve particle identity and momentum. */
export function NavigationSwarm({ instruction, units = "metric", choreography = "direct", interactive = false, label, ...props }) {
    return (_jsx(DotSwarm, { ...props, shape: shapeForInstruction(instruction), choreography: choreography, interactive: interactive, label: label ??
            `${formatDistance(instruction.distanceMeters, units)}: ${instructionText(instruction)}` }));
}
