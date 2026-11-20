import { type ReactNode, type ComponentPropsWithoutRef, type HTMLAttributes } from "react";
import * as Select from "@radix-ui/react-select";
import * as Slider from "@radix-ui/react-slider";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Switch from "@radix-ui/react-switch";
import { type SwarmSurfaceHandle, type SwarmSurfaceProps, type SwarmSurfaceBurst } from "./swarm-surface.js";
import type { Shape } from "./shapes.js";
import { type TextReveal } from "./text-dom.js";
import { type SwarmTextOptions } from "./text-geometry.js";
export declare function SwarmMaterialScope({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function useSwarmSceneActive(): boolean;
export type SwarmUIRootProps = Omit<SwarmSurfaceProps, "targets" | "mode"> & {
    /** The Scene to assemble. Inactive scenes keep their form state. */
    active: string;
    /** Burst on scene changes. false gives a direct morph. */
    transition?: false | SwarmSurfaceBurst;
    /** Move focus out of the outgoing scene into the incoming control. */
    manageFocus?: boolean;
};
export type SwarmUISceneProps = HTMLAttributes<HTMLDivElement> & {
    name: string;
};
export type SwarmUIPartProps = HTMLAttributes<HTMLElement> & {
    /** Use the child's actual DOM node. Compatible with ref-forwarding shadcn components. */
    asChild?: boolean;
    /** Treat this subtree as one material; nested primitives do not register twice. */
    contain?: boolean;
    points?: readonly import("./shapes.ts").Point[];
    motion?: import("./dot-swarm.tsx").PointMotion;
    radius?: number;
    weight?: number;
    color?: string;
    /** Optional particle formation to morph from/to, instead of solid UI. */
    shape?: Shape;
};
export declare const SwarmUI: {
    Root: import("react").ForwardRefExoticComponent<Omit<SwarmSurfaceProps, "mode" | "targets"> & {
        /** The Scene to assemble. Inactive scenes keep their form state. */
        active: string;
        /** Burst on scene changes. false gives a direct morph. */
        transition?: false | SwarmSurfaceBurst;
        /** Move focus out of the outgoing scene into the incoming control. */
        manageFocus?: boolean;
    } & import("react").RefAttributes<SwarmSurfaceHandle>>;
    Scene: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & {
        name: string;
    } & import("react").RefAttributes<HTMLDivElement>>;
    Part: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLElement> & {
        /** Use the child's actual DOM node. Compatible with ref-forwarding shadcn components. */
        asChild?: boolean;
        /** Treat this subtree as one material; nested primitives do not register twice. */
        contain?: boolean;
        points?: readonly import("./shapes.ts").Point[];
        motion?: import("./dot-swarm.tsx").PointMotion;
        radius?: number;
        weight?: number;
        color?: string;
        /** Optional particle formation to morph from/to, instead of solid UI. */
        shape?: Shape;
    } & import("react").RefAttributes<HTMLElement>>;
};
/** Particle lettering in any loaded browser font. Joins the current scene's
 * pool, or creates a standalone surface when used outside SwarmUI.Root. */
export type SwarmTextProps = Omit<HTMLAttributes<HTMLDivElement>, "children" | "color"> & SwarmTextOptions & {
    children: string;
    color?: string;
    dotSize?: number;
    reducedMotion?: boolean;
    /** Ordinary selectable text by default; dots keeps the particle artwork. */
    appearance?: "solid" | "dots";
    reveal?: TextReveal;
    /** Seconds between letters/words beginning to form. */
    stagger?: number;
    /** Seconds each unit takes to assemble, before the short DOM handoff. */
    duration?: number;
};
export declare const SwarmText: import("react").ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "children" | "color"> & SwarmTextOptions & {
    children: string;
    color?: string;
    dotSize?: number;
    reducedMotion?: boolean;
    /** Ordinary selectable text by default; dots keeps the particle artwork. */
    appearance?: "solid" | "dots";
    reveal?: TextReveal;
    /** Seconds between letters/words beginning to form. */
    stagger?: number;
    /** Seconds each unit takes to assemble, before the short DOM handoff. */
    duration?: number;
} & import("react").RefAttributes<HTMLDivElement>>;
export type SwarmButtonProps = ComponentPropsWithoutRef<"button"> & {
    /** Reassemble this button when its semantic state changes. */
    morphKey?: string | number | boolean;
    asChild?: boolean;
};
export declare const SwarmButton: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    /** Reassemble this button when its semantic state changes. */
    morphKey?: string | number | boolean;
    asChild?: boolean;
} & import("react").RefAttributes<HTMLButtonElement>>;
declare function SelectRoot({ open, defaultOpen, onOpenChange, ...props }: ComponentPropsWithoutRef<typeof Select.Root>): import("react").JSX.Element;
export declare const SwarmSelect: {
    Root: typeof SelectRoot;
    Trigger: import("react").ForwardRefExoticComponent<Omit<Select.SelectTriggerProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
    Value: import("react").ForwardRefExoticComponent<Select.SelectValueProps & import("react").RefAttributes<HTMLSpanElement>>;
    Icon: import("react").ForwardRefExoticComponent<Omit<Select.SelectIconProps & import("react").RefAttributes<HTMLSpanElement>, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
    Portal: import("react").FC<Select.SelectPortalProps>;
    Content: import("react").ForwardRefExoticComponent<Omit<Select.SelectContentProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Viewport: import("react").ForwardRefExoticComponent<Select.SelectViewportProps & import("react").RefAttributes<HTMLDivElement>>;
    Item: import("react").ForwardRefExoticComponent<Omit<Select.SelectItemProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    ItemText: import("react").ForwardRefExoticComponent<Select.SelectItemTextProps & import("react").RefAttributes<HTMLSpanElement>>;
    ItemIndicator: import("react").ForwardRefExoticComponent<Select.SelectItemIndicatorProps & import("react").RefAttributes<HTMLSpanElement>>;
    Group: import("react").ForwardRefExoticComponent<Select.SelectGroupProps & import("react").RefAttributes<HTMLDivElement>>;
    Label: import("react").ForwardRefExoticComponent<Select.SelectLabelProps & import("react").RefAttributes<HTMLDivElement>>;
    Separator: import("react").ForwardRefExoticComponent<Select.SelectSeparatorProps & import("react").RefAttributes<HTMLDivElement>>;
    ScrollUpButton: import("react").ForwardRefExoticComponent<Select.SelectScrollUpButtonProps & import("react").RefAttributes<HTMLDivElement>>;
    ScrollDownButton: import("react").ForwardRefExoticComponent<Select.SelectScrollDownButtonProps & import("react").RefAttributes<HTMLDivElement>>;
};
export declare const SwarmSlider: {
    Root: import("react").ForwardRefExoticComponent<Omit<Slider.SliderProps & import("react").RefAttributes<HTMLSpanElement>, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
    Track: import("react").ForwardRefExoticComponent<Omit<Slider.SliderTrackProps & import("react").RefAttributes<HTMLSpanElement>, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
    Range: import("react").ForwardRefExoticComponent<Omit<Slider.SliderRangeProps & import("react").RefAttributes<HTMLSpanElement>, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
    Thumb: import("react").ForwardRefExoticComponent<Omit<Slider.SliderThumbProps & import("react").RefAttributes<HTMLSpanElement>, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
};
export declare const SwarmCheckbox: {
    Root: import("react").ForwardRefExoticComponent<Omit<Checkbox.CheckboxProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
    Indicator: import("react").ForwardRefExoticComponent<Checkbox.CheckboxIndicatorProps & import("react").RefAttributes<HTMLSpanElement>>;
};
export declare const SwarmSwitch: {
    Root: import("react").ForwardRefExoticComponent<Omit<Switch.SwitchProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
    Thumb: import("react").ForwardRefExoticComponent<Omit<Switch.SwitchThumbProps & import("react").RefAttributes<HTMLSpanElement>, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
};
export * from "./ui-primitives.js";
export { SwarmPrimitive, SWARM_PRIMITIVES, type SwarmPrimitiveKind } from "./ui-presets.js";
export { SwarmComposition, DotsUISequencePlayer, type SwarmCompositionScene, type SwarmPrimitiveDefinition } from "./ui-composition.js";
export { SwarmMorph } from "./material-motion.js";
export * from "./ui-extended.js";
export { sampleTextPoints, type SwarmTextOptions, type SwarmTextGeometry } from "./text-geometry.js";
export type { TextReveal } from "./text-dom.js";
export { SwarmImageReveal, type SwarmImageProps, type SwarmImageTrigger, type SwarmImageHandle } from "./ui-image.js";
