const n=[{path:"components/ripple-button/RippleButton.css",language:"css",content:`/**
 * Furin · Ripple Button
 * MIT License · Copyright (c) 2026 Marcelo Treviño Velázquez
 * https://furin.dev/components/ripple-button
 * https://github.com/MTVelazquez/furin
 */
.furin-ripple-button {
  --furin-ripple-button-mx: 50%;
  --furin-ripple-button-my: 50%;
  position: relative;
  display: inline-grid;
  place-items: center;
  height: var(--furin-ripple-button-h);
  padding: 0 34px;
  border: 0;
  border-radius: var(--furin-ripple-button-r);
  overflow: hidden;
  isolation: isolate;
  color: var(--furin-ripple-button-text);
  background:
    linear-gradient(180deg, rgb(255 255 255 / 0.2), rgb(255 255 255 / 0) 48%),
    var(--furin-ripple-button-color);
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 0.35),
    inset 0 -2px 0 rgb(0 0 0 / 0.18),
    0 0 0 1px color-mix(in srgb, var(--furin-ripple-button-color) 70%, #000),
    0 14px 26px -10px color-mix(in srgb, var(--furin-ripple-button-color) 75%, transparent);
  font: 600 17px/1 Geist, -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif;
  letter-spacing: -0.01em;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  transition: transform 0.45s cubic-bezier(0.3, 1.7, 0.5, 1), box-shadow 0.25s;
}
.furin-ripple-button:active { transform: scale(0.97); transition-duration: 0.1s; }
.furin-ripple-button:focus-visible { box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.35), 0 0 0 1px color-mix(in srgb, var(--furin-ripple-button-color) 70%, #000), 0 0 0 4px rgb(255 255 255 / 0.5); }
.furin-ripple-button:disabled { opacity: 0.45; cursor: not-allowed; }
/* Un reflejo suave que sigue al cursor. */
.furin-ripple-button::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: radial-gradient(110px circle at var(--furin-ripple-button-mx) var(--furin-ripple-button-my), rgb(255 255 255 / 0.22), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
}
.furin-ripple-button:hover::before { opacity: 1; }
.furin-ripple-button__layer { position: absolute; inset: 0; z-index: -1; overflow: hidden; border-radius: inherit; pointer-events: none; }
.furin-ripple-button__label { position: relative; text-shadow: 0 1px 1px rgb(0 0 0 / 0.18); }
/* La onda: disco luminoso con el borde más fuerte que el centro, como un frente de agua. */
.furin-ripple-button__wave {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(closest-side,
    transparent 0%,
    color-mix(in srgb, var(--furin-ripple-button-ripple) 16%, transparent) 52%,
    color-mix(in srgb, var(--furin-ripple-button-ripple) 62%, transparent) 84%,
    color-mix(in srgb, var(--furin-ripple-button-ripple) 8%, transparent) 96%,
    transparent 100%);
  will-change: transform, opacity;
}
.furin-ripple-button__flash {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(circle, color-mix(in srgb, var(--furin-ripple-button-ripple) 85%, transparent), transparent 66%);
}
@media (prefers-reduced-motion: reduce) { .furin-ripple-button { transition: none; } }
`},{path:"components/ripple-button/RippleButton.tsx",language:"tsx",content:`/**
 * Furin · Ripple Button
 * MIT License · Copyright (c) 2026 Marcelo Treviño Velázquez
 * https://furin.dev/components/ripple-button
 * https://github.com/MTVelazquez/furin
 */
"use client";
import { useRef } from "react";
import type { ButtonHTMLAttributes, CSSProperties, PointerEvent, ReactNode } from "react";
import "./RippleButton.css";

export interface RippleButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style" | "className" | "color"> {
  /** Texto del botón. */
  children?: ReactNode;
  /** Color del botón. */
  color?: string;
  /** Color de la onda. */
  rippleColor?: string;
  /** Color del texto. */
  textColor?: string;
  /** Milisegundos que dura la onda. */
  duration?: number;
  /** Cuántos anillos tiene la onda (1 a 3). */
  rings?: number;
  /** Radio de las esquinas, en px. */
  radius?: number;
  /** Alto del botón, en px. */
  height?: number;
  /** Clase extra para el botón. */
  className?: string;
  /** Estilos extra para el botón. */
  style?: CSSProperties;
}

/** Botón con una onda que nace exactamente donde haces clic: un frente luminoso con anillos que se ensanchan hasta cubrir la esquina más lejana. */
export function RippleButton({
  children = "Continue",
  color = "#3b4cf0",
  rippleColor = "#ffffff",
  textColor = "#ffffff",
  duration = 900,
  rings = 2,
  radius = 16,
  height = 56,
  className = "",
  style,
  onPointerDown,
  onPointerMove,
  onPointerLeave,
  ...rest
}: RippleButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const layer = useRef<HTMLSpanElement>(null);

  const spawn = (e: PointerEvent<HTMLButtonElement>) => {
    const b = ref.current, host = layer.current;
    if (!b || !host) return;
    const r = b.getBoundingClientRect();
    // Con teclado no hay punto de clic: la onda nace en el centro.
    const keyboard = e.clientX === 0 && e.clientY === 0;
    const x = keyboard ? r.width / 2 : e.clientX - r.left;
    const y = keyboard ? r.height / 2 : e.clientY - r.top;
    // El radio llega a la esquina más lejana, así la onda siempre cubre todo el botón.
    const far = Math.hypot(Math.max(x, r.width - x), Math.max(y, r.height - y));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const n = Math.max(1, Math.min(3, Math.round(rings)));
    for (let i = 0; i < n; i++) {
      const el = document.createElement("span");
      el.className = "furin-ripple-button__wave";
      const d = far * 2;
      el.style.cssText = \`left:\${x - far}px;top:\${y - far}px;width:\${d}px;height:\${d}px\`;
      host.appendChild(el);
      const delay = i * duration * 0.14;
      const life = duration * (1 - i * 0.08);
      const peak = [0.55, 0.32, 0.18][i];
      const anim = reduce
        ? el.animate([{ opacity: 0.25, transform: "scale(1)" }, { opacity: 0, transform: "scale(1)" }], { duration: 300, fill: "both" })
        : el.animate(
            [
              { transform: "scale(0.02)", opacity: peak, offset: 0 },
              { opacity: peak * 0.8, offset: 0.35 },
              { transform: "scale(1)", opacity: 0, offset: 1 },
            ],
            { duration: life, delay, easing: "cubic-bezier(0.16, 0.7, 0.25, 1)", fill: "both" },
          );
      anim.onfinish = () => el.remove();
    }
    // Un destello breve bajo el dedo, para que el clic se sienta "mojado" de luz.
    const flash = document.createElement("span");
    flash.className = "furin-ripple-button__flash";
    flash.style.cssText = \`left:\${x - 60}px;top:\${y - 60}px\`;
    host.appendChild(flash);
    const fa = flash.animate([{ opacity: 0.7, transform: "scale(0.4)" }, { opacity: 0, transform: "scale(1.5)" }], { duration: 420, easing: "ease-out", fill: "both" });
    fa.onfinish = () => flash.remove();
  };

  const move = (e: PointerEvent<HTMLButtonElement>) => {
    const b = ref.current;
    if (!b) return;
    const r = b.getBoundingClientRect();
    b.style.setProperty("--furin-ripple-button-mx", \`\${e.clientX - r.left}px\`);
    b.style.setProperty("--furin-ripple-button-my", \`\${e.clientY - r.top}px\`);
  };

  const vars = {
    "--furin-ripple-button-color": color,
    "--furin-ripple-button-ripple": rippleColor,
    "--furin-ripple-button-text": textColor,
    "--furin-ripple-button-r": \`\${radius}px\`,
    "--furin-ripple-button-h": \`\${height}px\`,
  } as CSSProperties;

  return (
    <button
      ref={ref}
      type="button"
      className={\`furin-ripple-button \${className}\`}
      style={{ ...vars, ...style }}
      onPointerDown={(e) => { spawn(e); onPointerDown?.(e); }}
      onPointerMove={(e) => { move(e); onPointerMove?.(e); }}
      onPointerLeave={onPointerLeave}
      {...rest}
    >
      <span ref={layer} className="furin-ripple-button__layer" aria-hidden="true" />
      <span className="furin-ripple-button__label">{children}</span>
    </button>
  );
}

export default RippleButton;
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
