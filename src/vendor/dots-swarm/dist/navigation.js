import { shapeInfo } from "./shapes.js";
import { NAVIGATION_GLYPH_IDS } from "./navigation-glyphs.js";
export const NAVIGATION_SHAPES = [
    "arrow",
    "globe",
    "route",
    "turn-left",
    "turn-right",
    "straight",
    "u-turn",
    "roundabout",
    "arrive",
    ...NAVIGATION_GLYPH_IDS,
];
export const NAVIGATION_CATEGORIES = [
    "Directions",
    "Lanes",
    "Roundabouts",
    "Maps",
    "Transport",
    "Roads",
    "Places",
];
export const navigationGroups = NAVIGATION_CATEGORIES.map((category) => ({
    category,
    shapes: NAVIGATION_SHAPES.filter((shape) => {
        if (shape === "arrow" || shape === "globe" || shape === "route")
            return category === "Maps";
        return shapeInfo[shape].category === category;
    }),
}));
export function isNavigationShape(shape) {
    return NAVIGATION_SHAPES.includes(shape);
}
export const MANEUVERS = [
    "straight",
    "turn-left",
    "turn-right",
    "u-turn",
    "roundabout",
    "arrive",
];
export function shapeForManeuver(maneuver) {
    if (!MANEUVERS.includes(maneuver))
        throw new Error("This maneuver requires the Pro navigation collection.");
    return maneuver;
}
export function shapeForInstruction(instruction) {
    return shapeForManeuver(instruction.maneuver);
}
export function formatDistance(meters, units = "metric") {
    if (meters === undefined || !Number.isFinite(meters))
        return "Next";
    if (meters <= 0)
        return "Now";
    if (units === "imperial") {
        const feet = meters / 0.3048;
        return feet < 1000
            ? `${Math.round(feet)} ft`
            : `${(meters / 1609.344).toFixed(1)} mi`;
    }
    return meters < 1000
        ? `${Math.round(meters)} m`
        : `${(meters / 1000).toFixed(1)} km`;
}
export function instructionText(instruction) {
    const shape = shapeForInstruction(instruction);
    const prompts = {
        straight: "Continue straight",
        "turn-left": "Turn left",
        "turn-right": "Turn right",
        "u-turn": "Make a U-turn",
        roundabout: "Enter the roundabout",
        arrive: "You’ve arrived",
    };
    const text = shape === "roundabout" &&
        Number.isInteger(instruction.exitNumber) &&
        instruction.exitNumber > 0
        ? "Take exit " + instruction.exitNumber + " at the roundabout"
        : prompts[instruction.maneuver];
    return instruction.roadName?.trim()
        ? text + " · " + instruction.roadName.trim()
        : text;
}
export const NAVIGATION_DEMOS = [
    {
        name: "Starter route",
        instructions: [
            { maneuver: "straight", distanceMeters: 500 },
            { maneuver: "turn-right", distanceMeters: 200, roadName: "Park Lane" },
            { maneuver: "roundabout", distanceMeters: 100, exitNumber: 2 },
            { maneuver: "arrive", distanceMeters: 0 },
        ],
    },
];
