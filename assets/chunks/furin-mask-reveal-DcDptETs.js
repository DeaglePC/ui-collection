const e=[{path:"components/mask-reveal/MaskReveal.css",language:"css",content:`/**
 * Furin · Mask Reveal
 * MIT License · Copyright (c) 2026 Marcelo Treviño Velázquez
 * https://furin.dev/components/mask-reveal
 * https://github.com/MTVelazquez/furin
 */
.furin-mask-reveal {
  display: flex;
  flex-direction: column;
  gap: 1.1em;
  width: min(100%, 31em);
  box-sizing: border-box;
  padding-inline: 0.65em;
  font-family: "Geist", "Inter", "SF Pro Display", system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif;
  font-size: var(--furin-mr-size);
  color: var(--furin-mr-color);
  -webkit-font-smoothing: antialiased;
}
.furin-mask-reveal[data-align="center"] { align-items: center; text-align: center; }
.furin-mask-reveal[data-align="left"] { align-items: flex-start; text-align: left; }
.furin-mask-reveal__texto { margin: 0; font-weight: 650; line-height: 1.08; letter-spacing: -0.035em; }
/* Cada línea es una ventana: lo que queda fuera de ella no se ve. El relleno vertical protege las astas y las colas. */
.furin-mask-reveal__linea {
  display: block;
  overflow: hidden;
  padding: 0.12em 0.04em 0.18em;
  margin: -0.12em -0.04em -0.18em;
}
.furin-mask-reveal__linea[data-tenue="1"] { color: var(--furin-mr-dim); }
.furin-mask-reveal__dentro {
  display: block;
  transform-origin: 0 100%;
  transform: translateY(0) rotate(0);
  transition: transform var(--furin-mr-dur) cubic-bezier(0.16, 1, 0.3, 1) calc(var(--i) * var(--furin-mr-stagger));
  will-change: transform;
}
.furin-mask-reveal[data-estado="oculto"] .furin-mask-reveal__dentro { transform: translateY(115%) rotate(3.5deg); transition: none; }
.furin-mask-reveal__boton {
  appearance: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  margin-top: 0.15em;
  padding: 0.5em 0.95em 0.5em 0.8em;
  font: 500 14px/1 "Geist", "Inter", system-ui, sans-serif;
  letter-spacing: 0;
  color: color-mix(in srgb, var(--furin-mr-color) 82%, transparent);
  background: color-mix(in srgb, var(--furin-mr-color) 7%, transparent);
  border: 1px solid color-mix(in srgb, var(--furin-mr-color) 16%, transparent);
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.furin-mask-reveal__boton:hover { color: var(--furin-mr-color); background: color-mix(in srgb, var(--furin-mr-color) 13%, transparent); border-color: color-mix(in srgb, var(--furin-mr-color) 30%, transparent); }
.furin-mask-reveal__boton:active { transform: scale(0.96); }
.furin-mask-reveal__boton:focus-visible { outline: 2px solid color-mix(in srgb, var(--furin-mr-color) 70%, transparent); outline-offset: 3px; }
.furin-mask-reveal__sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
@media (prefers-reduced-motion: reduce) {
  .furin-mask-reveal__dentro, .furin-mask-reveal[data-estado="oculto"] .furin-mask-reveal__dentro { transform: none; transition: none; }
  .furin-mask-reveal__boton { display: none; }
}
`},{path:"components/mask-reveal/MaskReveal.tsx",language:"tsx",content:`/**
 * Furin · Mask Reveal
 * MIT License · Copyright (c) 2026 Marcelo Treviño Velázquez
 * https://furin.dev/components/mask-reveal
 * https://github.com/MTVelazquez/furin
 */
"use client";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import "./MaskReveal.css";

export interface MaskRevealProps {
  /** El texto: cada línea (separada por salto de línea) sube por su propia máscara. */
  children?: string;
  /** Tamaño de la letra, en px. */
  size?: number;
  /** Milisegundos de retraso entre una línea y la siguiente. */
  stagger?: number;
  /** Milisegundos que dura la subida de cada línea. */
  duration?: number;
  /** Desde qué línea (0 es la primera) el texto se atenúa; −1 deja todas iguales. */
  dimFrom?: number;
  /** Alineación del texto. */
  align?: "left" | "center";
  /** Muestra un botón para repetir la animación. */
  replayButton?: boolean;
  /** Texto del botón de repetir (también su etiqueta accesible). */
  replayLabel?: string;
  /** Repite la animación cada vez que el texto vuelve a entrar en vista. */
  repeat?: boolean;
  /** Color del texto. */
  color?: string;
  /** Color de las líneas atenuadas. */
  dimColor?: string;
  /** Clase extra para el contenedor. */
  className?: string;
  /** Estilos extra para el contenedor. */
  style?: CSSProperties;
}

/** Líneas que suben desde detrás de una máscara, escalonadas, como en la presentación de un producto. */
export function MaskReveal({
  children = "Made with care.\\nBuilt to last.\\nReady for you.",
  size = 44,
  stagger = 120,
  duration = 1050,
  dimFrom = 2,
  align = "left",
  replayButton = true,
  replayLabel = "Replay",
  repeat = true,
  color = "#F4F5F7",
  dimColor = "#6F7480",
  className = "",
  style,
}: MaskRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const texto = String(children ?? "");
  const lineas = texto.split("\\n");
  const cfg = useRef({ repeat });
  cfg.current = { repeat };
  const repetir = useRef<() => void>(() => {});

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reducido = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducido) { root.dataset.estado = "visible"; return; }
    let raf = 0, muerto = false, visto = false;
    const reproducir = () => {
      cancelAnimationFrame(raf);
      root.dataset.estado = "oculto";
      void root.offsetWidth; // fuerza el reflujo para que la transición arranque de cero
      raf = requestAnimationFrame(() => { raf = requestAnimationFrame(() => { if (!muerto) root.dataset.estado = "visible"; }); });
    };
    repetir.current = reproducir;
    root.dataset.estado = "oculto";
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { if (!visto || cfg.current.repeat) { visto = true; reproducir(); } }
      else if (cfg.current.repeat) { cancelAnimationFrame(raf); root.dataset.estado = "oculto"; }
    }, { threshold: 0.4 });
    io.observe(root);
    return () => { muerto = true; cancelAnimationFrame(raf); io.disconnect(); repetir.current = () => {}; };
  }, [texto]);

  const vars = {
    "--furin-mr-size": \`\${size}px\`,
    "--furin-mr-stagger": \`\${stagger}ms\`,
    "--furin-mr-dur": \`\${duration}ms\`,
    "--furin-mr-color": color,
    "--furin-mr-dim": dimColor,
  } as CSSProperties;

  return (
    <div ref={rootRef} className={\`furin-mask-reveal \${className}\`} data-align={align} data-estado="visible" style={{ ...vars, ...style }}>
      <span className="furin-mask-reveal__sr">{lineas.join(" ")}</span>
      <p className="furin-mask-reveal__texto" aria-hidden="true">
        {lineas.map((ln, i) => (
          <span key={i} className="furin-mask-reveal__linea" data-tenue={dimFrom >= 0 && i >= dimFrom ? "1" : "0"} style={{ "--i": i } as CSSProperties}>
            <span className="furin-mask-reveal__dentro">{ln}</span>
          </span>
        ))}
      </p>
      {replayButton ? (
        <button type="button" className="furin-mask-reveal__boton" onClick={() => repetir.current()} aria-label={replayLabel}>
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false">
            <path d="M13.2 8a5.2 5.2 0 1 1-1.6-3.75M13.2 2.4v2.9h-2.9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{replayLabel}</span>
        </button>
      ) : null}
    </div>
  );
}

export default MaskReveal;
`}],n="",r={files:e,prompt:n};export{r as default,e as files,n as prompt};
