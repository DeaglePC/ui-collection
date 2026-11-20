import { type ElementType, type ComponentPropsWithoutRef, type ComponentRef, type ForwardRefExoticComponent, type PropsWithoutRef, type RefAttributes } from "react";
export declare function skin<T extends ElementType>(Component: T, name: string, particles?: boolean): ForwardRefExoticComponent<PropsWithoutRef<ComponentPropsWithoutRef<T>> & RefAttributes<ComponentRef<T>>>;
export declare function material<T extends ElementType>(Component: T, name: string): ForwardRefExoticComponent<PropsWithoutRef<ComponentPropsWithoutRef<T>> & RefAttributes<ComponentRef<T>>>;
export declare function gated<T extends ElementType>(Component: T): (props: ComponentPropsWithoutRef<T>) => import("react").JSX.Element;
