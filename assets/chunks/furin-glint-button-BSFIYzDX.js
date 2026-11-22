const n=[{path:"components/glint-button/GlintButton.css",language:"css",content:`/**
 * Furin · Glint Button
 * MIT License · Copyright (c) 2026 Marcelo Treviño Velázquez
 * https://furin.dev/components/glint-button
 * https://github.com/MTVelazquez/furin
 */
.furin-glint-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: var(--furin-glint-button-h);
  padding: 0 32px 0 34px;
  border: 0;
  border-radius: 999px;
  overflow: hidden;
  isolation: isolate;
  color: #fff;
  background:
    radial-gradient(120% 140% at 20% -40%, rgb(255 255 255 / 0.16), transparent 55%),
    linear-gradient(180deg, color-mix(in srgb, var(--furin-glint-button-color) 78%, #fff) 0%, var(--furin-glint-button-color) 48%, color-mix(in srgb, var(--furin-glint-button-color) 70%, #000) 100%);
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 0.18),
    inset 0 -1px 0 rgb(0 0 0 / 0.5),
    0 1px 2px rgb(0 0 0 / 0.5),
    0 16px 28px -12px rgb(0 0 0 / 0.85);
  font: 600 17px/1 Geist, -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif;
  letter-spacing: -0.01em;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  transform: scale(1);
  transition: transform 0.5s cubic-bezier(0.3, 1.7, 0.5, 1);
}
.furin-glint-button:hover { transform: scale(1.03); }
.furin-glint-button:active { transform: scale(0.96); transition-duration: 0.1s; }
.furin-glint-button:focus-visible { box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.18), 0 0 0 4px rgb(255 255 255 / 0.5); }
.furin-glint-button:disabled { opacity: 0.45; cursor: not-allowed; }

/* Las tres capas comparten la misma franja y la misma animación: el destello las enciende a la vez. */
.furin-glint-button__fill,
.furin-glint-button__edge,
.furin-glint-button__label {
  --furin-glint-button-band: linear-gradient(var(--furin-glint-button-angle),
    transparent 43%,
    color-mix(in srgb, var(--furin-glint-button-glint) 12%, transparent) 47%,
    color-mix(in srgb, var(--furin-glint-button-glint) 90%, transparent) 50%,
    color-mix(in srgb, var(--furin-glint-button-glint) 12%, transparent) 53%,
    transparent 57%);
}
.furin-glint-button__fill {
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0.38;
  mix-blend-mode: screen;
  background: var(--furin-glint-button-band) 130% 0 / 260% 100% no-repeat;
}
/* Borde que se enciende: el mismo destello, recortado a un aro de 1.5px. */
.furin-glint-button__edge {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.5px;
  pointer-events: none;
  background:
    var(--furin-glint-button-band) 130% 0 / 260% 100% no-repeat,
    linear-gradient(180deg, rgb(255 255 255 / 0.3), rgb(255 255 255 / 0.04) 55%, rgb(255 255 255 / 0.12));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
}
.furin-glint-button__label {
  position: relative;
  color: transparent;
  background: var(--furin-glint-button-band) 130% 0 / 260% 100% no-repeat, linear-gradient(#dfe2ea, #dfe2ea);
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: none;
  filter: drop-shadow(0 1px 0 rgb(0 0 0 / 0.5));
}
.furin-glint-button__arrow { width: 18px; height: 18px; flex: none; color: #dfe2ea; transition: transform 0.4s cubic-bezier(0.3, 1.7, 0.5, 1); }
.furin-glint-button:hover .furin-glint-button__arrow { transform: translateX(3px); }

.furin-glint-button[data-glint="true"] .furin-glint-button__fill,
.furin-glint-button[data-glint="true"] .furin-glint-button__edge,
.furin-glint-button[data-glint="true"] .furin-glint-button__label {
  animation: furin-glint-button-sweep var(--furin-glint-button-dur) cubic-bezier(0.35, 0.05, 0.3, 1) both;
}
.furin-glint-button[data-glint="true"] .furin-glint-button__fill { opacity: 0.6; }
@keyframes furin-glint-button-sweep {
  from { background-position: 130% 0, 0 0; }
  to { background-position: -30% 0, 0 0; }
}
@media (prefers-reduced-motion: reduce) { .furin-glint-button { transition: none; } .furin-glint-button__arrow { transition: none; } }
`},{path:"components/glint-button/GlintButton.tsx",language:"tsx",content:`/**
 * Furin · Glint Button
 * MIT License · Copyright (c) 2026 Marcelo Treviño Velázquez
 * https://furin.dev/components/glint-button
 * https://github.com/MTVelazquez/furin
 */
"use client";
import { useCallback, useEffect, useRef } from "react";
import type { ButtonHTMLAttributes, CSSProperties, PointerEvent, ReactNode } from "react";
import "./GlintButton.css";

export interface GlintButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style" | "className" | "color"> {
  /** Texto del botón. */
  children?: ReactNode;
  /** Color del cuerpo del botón. */
  color?: string;
  /** Color del destello. */
  glintColor?: string;
  /** Cada cuántos segundos pasa el destello solo (0 = solo al pasar el cursor). */
  interval?: number;
  /** Segundos que tarda el destello en cruzar. */
  speed?: number;
  /** Inclinación del destello, en grados. */
  angle?: number;
  /** Muestra una flecha al final del texto. */
  arrow?: boolean;
  /** Alto del botón, en px. */
  height?: number;
  /** Clase extra para el botón. */
  className?: string;
  /** Estilos extra para el botón. */
  style?: CSSProperties;
}

/** Botón oscuro con un destello que lo cruza cada tanto (y al pasar el cursor): se enciende el relleno, el borde y el texto en el mismo instante. */
export function GlintButton({
  children = "Get started",
  color = "#16171c",
  glintColor = "#ffffff",
  interval = 3.8,
  speed = 1,
  angle = 105,
  arrow = true,
  height = 60,
  className = "",
  style,
  onPointerEnter,
  ...rest
}: GlintButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const reduced = useRef(false);
  const timer = useRef(0);
  const cfg = useRef({ interval, speed });
  cfg.current = { interval, speed };

  /** Dispara un destello (reiniciándolo si ya había uno en curso). */
  const fire = useCallback(() => {
    const el = ref.current;
    if (!el || reduced.current) return;
    el.removeAttribute("data-glint");
    void el.offsetWidth;
    el.setAttribute("data-glint", "true");
  }, []);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (!el || reduced.current) return;
    let visible = true;
    const io = new IntersectionObserver((e) => { visible = e[0]?.isIntersecting ?? true; });
    io.observe(el);
    const loop = (first: boolean) => {
      timer.current = window.setTimeout(() => {
        if (visible && !document.hidden) fire();
        if (cfg.current.interval > 0) loop(false);
      }, first ? 700 : Math.max(0.8, cfg.current.interval) * 1000);
    };
    if (interval > 0) loop(true);
    return () => { window.clearTimeout(timer.current); io.disconnect(); };
  }, [interval, fire]);

  const vars = {
    "--furin-glint-button-color": color,
    "--furin-glint-button-glint": glintColor,
    "--furin-glint-button-dur": \`\${0.95 / Math.max(0.2, speed)}s\`,
    "--furin-glint-button-angle": \`\${angle}deg\`,
    "--furin-glint-button-h": \`\${height}px\`,
  } as CSSProperties;

  return (
    <button
      ref={ref}
      type="button"
      className={\`furin-glint-button \${className}\`}
      style={{ ...vars, ...style }}
      onPointerEnter={(e: PointerEvent<HTMLButtonElement>) => { if (e.pointerType === "mouse") fire(); onPointerEnter?.(e); }}
      onAnimationEnd={(e) => { if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains("furin-glint-button__fill")) ref.current?.removeAttribute("data-glint"); }}
      {...rest}
    >
      <span className="furin-glint-button__fill" aria-hidden="true" />
      <span className="furin-glint-button__edge" aria-hidden="true" />
      <span className="furin-glint-button__label">{children}</span>
      {arrow ? (
        <svg className="furin-glint-button__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h13M13 6.5 18.5 12 13 17.5" /></svg>
      ) : null}
    </button>
  );
}

export default GlintButton;
`}],t="",e={files:n,prompt:t};export{e as default,n as files,t as prompt};
