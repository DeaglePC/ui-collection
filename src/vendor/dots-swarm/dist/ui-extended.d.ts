import { type ComponentPropsWithoutRef } from "react";
import { Dialog, HoverCard } from "radix-ui";
export declare const SwarmHoverCard: {
    HoverCard: import("react").FC<HoverCard.HoverCardProps>;
    HoverCardArrow: import("react").ForwardRefExoticComponent<HoverCard.HoverCardArrowProps & import("react").RefAttributes<SVGSVGElement>>;
    HoverCardContent: import("react").ForwardRefExoticComponent<HoverCard.HoverCardContentProps & import("react").RefAttributes<HTMLDivElement>>;
    HoverCardPortal: import("react").FC<HoverCard.HoverCardPortalProps>;
    HoverCardTrigger: import("react").ForwardRefExoticComponent<HoverCard.HoverCardTriggerProps & import("react").RefAttributes<HTMLAnchorElement>>;
    Portal: import("react").FC<HoverCard.HoverCardPortalProps>;
    createHoverCardScope: import("@radix-ui/react-context").CreateScope;
    Root: (props: HoverCard.HoverCardProps) => import("react").JSX.Element;
    Trigger: import("react").ForwardRefExoticComponent<Omit<HoverCard.HoverCardTriggerProps & import("react").RefAttributes<HTMLAnchorElement>, "ref"> & import("react").RefAttributes<HTMLAnchorElement>>;
    Content: import("react").ForwardRefExoticComponent<Omit<HoverCard.HoverCardContentProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Arrow: import("react").ForwardRefExoticComponent<Omit<HoverCard.HoverCardArrowProps & import("react").RefAttributes<SVGSVGElement>, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
};
export type SwarmSheetContentProps = ComponentPropsWithoutRef<typeof Dialog.Content> & {
    side?: "top" | "right" | "bottom" | "left";
};
export declare const SwarmSheet: {
    Dialog: import("react").FC<Dialog.DialogProps>;
    DialogClose: import("react").ForwardRefExoticComponent<Dialog.DialogCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
    DialogContent: import("react").ForwardRefExoticComponent<Dialog.DialogContentProps & import("react").RefAttributes<HTMLDivElement>>;
    DialogDescription: import("react").ForwardRefExoticComponent<Dialog.DialogDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>>;
    DialogOverlay: import("react").ForwardRefExoticComponent<Dialog.DialogOverlayProps & import("react").RefAttributes<HTMLDivElement>>;
    DialogPortal: import("react").FC<Dialog.DialogPortalProps>;
    DialogTitle: import("react").ForwardRefExoticComponent<Dialog.DialogTitleProps & import("react").RefAttributes<HTMLHeadingElement>>;
    DialogTrigger: import("react").ForwardRefExoticComponent<Dialog.DialogTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
    Portal: import("react").FC<Dialog.DialogPortalProps>;
    WarningProvider: import("react").FC<{
        children?: import("react").ReactNode;
        contentName: string;
        titleName: string;
        docsSlug: 'dialog';
    } & {
        __scopeDialog?: import("@radix-ui/react-context").Scope;
    }>;
    createDialogScope: import("@radix-ui/react-context").CreateScope;
    Root: (props: Dialog.DialogProps) => import("react").JSX.Element;
    Trigger: import("react").ForwardRefExoticComponent<Omit<Dialog.DialogTriggerProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
    Overlay: import("react").ForwardRefExoticComponent<Omit<Dialog.DialogOverlayProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Title: import("react").ForwardRefExoticComponent<Omit<Dialog.DialogTitleProps & import("react").RefAttributes<HTMLHeadingElement>, "ref"> & import("react").RefAttributes<HTMLHeadingElement>>;
    Description: import("react").ForwardRefExoticComponent<Omit<Dialog.DialogDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>, "ref"> & import("react").RefAttributes<HTMLParagraphElement>>;
    Close: import("react").ForwardRefExoticComponent<Omit<Dialog.DialogCloseProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
    Content: import("react").ForwardRefExoticComponent<Omit<Dialog.DialogContentProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & {
        side?: "top" | "right" | "bottom" | "left";
    } & import("react").RefAttributes<HTMLDivElement>>;
    Header: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Footer: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
};
export declare const SwarmDrawer: {
    NestedRoot: typeof import("vaul").NestedRoot;
    Portal: typeof import("vaul").Portal;
    Root: (props: import("vaul").DialogProps) => import("react").JSX.Element;
    Trigger: import("react").ForwardRefExoticComponent<Omit<Dialog.DialogTriggerProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
    Overlay: import("react").ForwardRefExoticComponent<Omit<Omit<Dialog.DialogOverlayProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Content: import("react").ForwardRefExoticComponent<Omit<Omit<Dialog.DialogContentProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Handle: import("react").ForwardRefExoticComponent<Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        preventCycle?: boolean | undefined;
    } & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Title: import("react").ForwardRefExoticComponent<Omit<Dialog.DialogTitleProps & import("react").RefAttributes<HTMLHeadingElement>, "ref"> & import("react").RefAttributes<HTMLHeadingElement>>;
    Description: import("react").ForwardRefExoticComponent<Omit<Dialog.DialogDescriptionProps & import("react").RefAttributes<HTMLParagraphElement>, "ref"> & import("react").RefAttributes<HTMLParagraphElement>>;
    Close: import("react").ForwardRefExoticComponent<Omit<Dialog.DialogCloseProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
    Header: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Footer: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
};
export type SwarmCommandDialogProps = ComponentPropsWithoutRef<typeof Dialog.Root> & {
    title?: string;
    description?: string;
};
declare function CommandDialog({ title, description, children, ...props }: SwarmCommandDialogProps): import("react").JSX.Element;
export declare const SwarmCommand: {
    Root: import("react").ForwardRefExoticComponent<Omit<{
        children?: React.ReactNode;
    } & Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
        ref?: React.Ref<HTMLDivElement>;
    } & {
        asChild?: boolean;
    }, "asChild" | "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
        label?: string;
        shouldFilter?: boolean;
        filter?: (value: string, search: string, keywords?: string[]) => number;
        defaultValue?: string;
        value?: string;
        onValueChange?: (value: string) => void;
        loop?: boolean;
        disablePointerSelection?: boolean;
        vimBindings?: boolean;
    } & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Dialog: typeof CommandDialog;
    Input: import("react").ForwardRefExoticComponent<Omit<Omit<Pick<Pick<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof import("react").InputHTMLAttributes<HTMLInputElement>> & {
        ref?: React.Ref<HTMLInputElement>;
    } & {
        asChild?: boolean;
    }, "asChild" | "key" | keyof import("react").InputHTMLAttributes<HTMLInputElement>>, "onChange" | "type" | "value"> & {
        value?: string;
        onValueChange?: (search: string) => void;
    } & import("react").RefAttributes<HTMLInputElement>, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
    List: import("react").ForwardRefExoticComponent<Omit<{
        children?: React.ReactNode;
    } & Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
        ref?: React.Ref<HTMLDivElement>;
    } & {
        asChild?: boolean;
    }, "asChild" | "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
        label?: string;
    } & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Empty: import("react").ForwardRefExoticComponent<Omit<{
        children?: React.ReactNode;
    } & Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
        ref?: React.Ref<HTMLDivElement>;
    } & {
        asChild?: boolean;
    }, "asChild" | "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Group: import("react").ForwardRefExoticComponent<Omit<{
        children?: React.ReactNode;
    } & Omit<Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
        ref?: React.Ref<HTMLDivElement>;
    } & {
        asChild?: boolean;
    }, "asChild" | "key" | keyof import("react").HTMLAttributes<HTMLDivElement>>, "heading" | "value"> & {
        heading?: React.ReactNode;
        value?: string;
        forceMount?: boolean;
    } & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Item: import("react").ForwardRefExoticComponent<Omit<{
        children?: React.ReactNode;
    } & Omit<Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
        ref?: React.Ref<HTMLDivElement>;
    } & {
        asChild?: boolean;
    }, "asChild" | "key" | keyof import("react").HTMLAttributes<HTMLDivElement>>, "disabled" | "onSelect" | "value"> & {
        disabled?: boolean;
        onSelect?: (value: string) => void;
        value?: string;
        keywords?: string[];
        forceMount?: boolean;
    } & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Separator: import("react").ForwardRefExoticComponent<Omit<Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
        ref?: React.Ref<HTMLDivElement>;
    } & {
        asChild?: boolean;
    }, "asChild" | "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
        alwaysRender?: boolean;
    } & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Loading: import("react").ForwardRefExoticComponent<Omit<{
        children?: React.ReactNode;
    } & Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
        ref?: React.Ref<HTMLDivElement>;
    } & {
        asChild?: boolean;
    }, "asChild" | "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
        progress?: number;
        label?: string;
    } & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Shortcut: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
};
export type SwarmBubbleProps = ComponentPropsWithoutRef<"div"> & {
    variant?: "incoming" | "outgoing";
};
export declare const SwarmBubble: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    variant?: "incoming" | "outgoing";
} & import("react").RefAttributes<HTMLDivElement>>;
export type SwarmMessageProps = ComponentPropsWithoutRef<"article"> & {
    from?: "user" | "assistant";
};
export declare const SwarmMessage: {
    Root: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
        from?: "user" | "assistant";
    } & import("react").RefAttributes<HTMLElement>>;
    Content: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        variant?: "incoming" | "outgoing";
    } & import("react").RefAttributes<HTMLDivElement>>;
    Author: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
    Avatar: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    Actions: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
};
export {};
