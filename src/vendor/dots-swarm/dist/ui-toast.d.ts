import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { Toast } from "radix-ui";
export type SwarmToastProps = ComponentPropsWithoutRef<typeof Toast.Root> & {
    variant?: "default" | "success" | "error";
};
declare function Portal({ children, container, }: {
    children: ReactNode;
    container?: Element | DocumentFragment | null;
}): import("react").ReactPortal | null;
/** Accessible, swipe-dismissable notifications that gather from and disperse into dots. */
export declare const SwarmToast: {
    Provider: import("react").FC<Toast.ToastProviderProps>;
    Toast: import("react").ForwardRefExoticComponent<Toast.ToastProps & import("react").RefAttributes<HTMLLIElement>>;
    ToastAction: import("react").ForwardRefExoticComponent<Toast.ToastActionProps & import("react").RefAttributes<HTMLButtonElement>>;
    ToastClose: import("react").ForwardRefExoticComponent<Toast.ToastCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
    ToastDescription: import("react").ForwardRefExoticComponent<Toast.ToastDescriptionProps & import("react").RefAttributes<HTMLDivElement>>;
    ToastProvider: import("react").FC<Toast.ToastProviderProps>;
    ToastTitle: import("react").ForwardRefExoticComponent<Toast.ToastTitleProps & import("react").RefAttributes<HTMLDivElement>>;
    ToastViewport: import("react").ForwardRefExoticComponent<Toast.ToastViewportProps & import("react").RefAttributes<HTMLOListElement>>;
    createToastScope: import("@radix-ui/react-context").CreateScope;
    Root: import("react").ForwardRefExoticComponent<Omit<Toast.ToastProps & import("react").RefAttributes<HTMLLIElement>, "ref"> & {
        variant?: "default" | "success" | "error";
    } & import("react").RefAttributes<HTMLLIElement>>;
    Portal: typeof Portal;
    Viewport: import("react").ForwardRefExoticComponent<Omit<Toast.ToastViewportProps & import("react").RefAttributes<HTMLOListElement>, "ref"> & import("react").RefAttributes<HTMLOListElement>>;
    Title: import("react").ForwardRefExoticComponent<Omit<Toast.ToastTitleProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Description: import("react").ForwardRefExoticComponent<Omit<Toast.ToastDescriptionProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Action: import("react").ForwardRefExoticComponent<Omit<Toast.ToastActionProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
    Close: import("react").ForwardRefExoticComponent<Omit<Toast.ToastCloseProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
};
export {};
