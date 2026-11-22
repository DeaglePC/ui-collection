import type { AnchorHTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";
export type StaticImageData = string;
export default function Image({ fill, priority, ...props }: ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean }) {
  return <img {...props} alt={props.alt || ""} style={fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" } : undefined} />;
}
export function Link({ href, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { children?: ReactNode }) {
  return <a href={href} {...props}>{children}</a>;
}
