import type { ReactNode } from "react";
export type ParticleShape = "circle" | "triangle" | "square" | "diamond" | "star";
export type ParticleMaterial = {
    kind: "flat";
} | {
    kind: "metal";
    /** 0–1; broadens reflected lights. */ roughness?: number;
    intensity?: number;
    /** Light direction in degrees. */ light?: number;
    /** 0–1; subtle separation of colors at reflection boundaries. */ chromatic?: number;
    /** 0–2; flow rate of the reflected studio lights. */ flow?: number;
} | {
    kind: "ink"; /** 0–1 paper grain. */
    grain?: number;
    intensity?: number;
} | {
    kind: "neon";
    /** 0–1; radius of the colored light around the silhouette. */ glow?: number;
    intensity?: number;
} | {
    kind: "glass";
    /** 0–1; strength of the curved lens. Requires a DotSwarm backdrop. */ refraction?: number;
    /** 0–1; separation of red, green, and blue near the rim. */ dispersion?: number;
    /** 0–1; softens the transmitted background. */ frost?: number;
    intensity?: number;
};
export type ParticleRotation = {
    mode?: "fixed" | "spin" | "velocity";
    /** Initial angle in degrees. */ angle?: number;
    /** Degrees per second in spin mode. */ speed?: number;
};
export type ParticleIdentity = {
    index: number;
    /** Stable seeded number, 0–1. */ random: number;
};
type ParticleObjectBase = {
    /** Full particle width in CSS pixels; independent of dotSize. Default 16. */
    size?: number;
    /** Seeded size variation, 0–1. */ variation?: number;
    seed?: number;
    rotation?: ParticleRotation;
    material?: ParticleMaterial;
};
/** Appearance of individual particles, independent of the swarm's formation.
 * Shape, glyph and image definitions are JSON serializable. HTML definitions
 * keep real React children and require application code for render(). */
export type ParticleObject = ParticleObjectBase & ({
    kind: "shape";
    shape: ParticleShape | readonly ParticleShape[];
} | {
    kind: "glyph";
    values: readonly string[];
    fontFamily?: string;
    fontWeight?: number;
} | {
    kind: "image";
    sources: readonly string[];
    /** Original image colors, or silhouette tinted by color/material. */ appearance?: "original" | "mask";
    onError?: (source: string) => void;
} | {
    kind: "html";
    render: (particle: ParticleIdentity) => ReactNode;
    /** Hold an individual element still while hovered or focused. */ holdOnInteraction?: boolean;
    /** Optional canvas material behind each real element. */ surface?: ParticleShape;
});
export declare const HTML_PARTICLE_LIMIT = 96;
export declare function particleNumber(value: number | undefined, fallback: number, min: number, max: number): number;
export declare function particleRandom(index: number, seed?: number, channel?: number): number;
export declare function particleCount(count: number | undefined, object?: ParticleObject): number;
export declare function particleAppearance(object: ParticleObject, index: number, time: number, vx: number, vy: number, reduced: boolean): {
    size: number;
    angle: number;
    random: number;
};
export {};
