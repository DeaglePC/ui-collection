import { type Shape } from "./shapes.js";
export declare const NAVIGATION_SHAPES: readonly ["arrow", "globe", "route", "turn-left", "turn-right", "straight", "u-turn", "roundabout", "arrive", ...("car" | "compass" | "current-location" | "map" | "pin" | "walking")[]];
export type NavigationShape = (typeof NAVIGATION_SHAPES)[number];
export declare const NAVIGATION_CATEGORIES: readonly ["Directions", "Lanes", "Roundabouts", "Maps", "Transport", "Roads", "Places"];
export type NavigationCategory = (typeof NAVIGATION_CATEGORIES)[number];
export declare const navigationGroups: {
    category: "Directions" | "Lanes" | "Maps" | "Places" | "Roads" | "Roundabouts" | "Transport";
    shapes: ("arrive" | "arrow" | "car" | "compass" | "current-location" | "globe" | "map" | "pin" | "roundabout" | "route" | "straight" | "turn-left" | "turn-right" | "u-turn" | "walking")[];
}[];
export declare function isNavigationShape(shape: string): shape is NavigationShape;
export declare const MANEUVERS: readonly ["straight", "turn-left", "turn-right", "u-turn", "roundabout", "arrive"];
export type Maneuver = (typeof MANEUVERS)[number];
export type DistanceUnits = "metric" | "imperial";
export type NavigationInstruction = {
    maneuver: Maneuver;
    distanceMeters?: number;
    roadName?: string;
    exitNumber?: number;
    exitDirection?: "left" | "right" | "straight" | "u-turn";
};
export declare function shapeForManeuver(maneuver: Maneuver): Shape;
export declare function shapeForInstruction(instruction: NavigationInstruction): Shape;
export declare function formatDistance(meters?: number, units?: DistanceUnits): string;
export declare function instructionText(instruction: NavigationInstruction): string;
export declare const NAVIGATION_DEMOS: ReadonlyArray<{
    name: string;
    instructions: readonly NavigationInstruction[];
}>;
