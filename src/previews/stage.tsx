import type { ReactNode } from "react";

export function Stage({
  children,
  className = "",
  pad = true,
}: {
  children: ReactNode;
  className?: string;
  pad?: boolean;
}) {
  return (
    <div
      className={`h-full w-full flex items-center justify-center ${pad ? "p-6" : ""} ${className}`}
      style={{
        background:
          "radial-gradient(80% 70% at 50% 0%, #1c1914 0%, #0e0d0b 70%)",
      }}
    >
      {children}
    </div>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-center text-xs text-[#8f877c]">{children}</p>;
}
