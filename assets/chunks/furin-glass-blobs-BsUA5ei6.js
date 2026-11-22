const n=[{path:"components/glass-blobs/GlassBlobs.css",language:"css",content:`/**
 * Furin · Glass Blobs
 * MIT License · Copyright (c) 2026 Marcelo Treviño Velázquez
 * https://furin.dev/components/glass-blobs
 * https://github.com/MTVelazquez/furin
 */
.furin-glass-blobs {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  place-items: center;
  background: var(--furin-glass-blobs-bg);
  font-family: Geist, system-ui, -apple-system, sans-serif;
  color: #fff;
  isolation: isolate;
}
.furin-glass-blobs__fondo { position: absolute; inset: 0; z-index: 0; }
.furin-glass-blobs__mancha {
  position: absolute;
  display: block;
  border-radius: 58% 42% 55% 45% / 52% 48% 60% 40%;
  /* Mancha con volumen: luz arriba-izquierda, color pleno, borde más oscuro. */
  background:
    radial-gradient(circle at 32% 26%, rgba(255, 255, 255, 0.75) 0, rgba(255, 255, 255, 0) 38%),
    radial-gradient(circle at 50% 50%, var(--c) 0, var(--c) 55%, color-mix(in srgb, var(--c) 55%, #000) 100%);
  animation:
    furin-glass-blobs-flota calc(var(--t) * var(--furin-glass-blobs-v)) ease-in-out var(--d) infinite alternate,
    furin-glass-blobs-forma calc(var(--m) * var(--furin-glass-blobs-v)) ease-in-out var(--d) infinite;
}
@keyframes furin-glass-blobs-flota { to { transform: translate(var(--dx), var(--dy)) rotate(40deg) scale(1.12); } }
@keyframes furin-glass-blobs-forma {
  0%, 100% { border-radius: 58% 42% 55% 45% / 52% 48% 60% 40%; }
  33% { border-radius: 42% 58% 40% 60% / 60% 40% 55% 45%; }
  66% { border-radius: 52% 48% 62% 38% / 40% 60% 42% 58%; }
}
.furin-glass-blobs.is-quieto .furin-glass-blobs__mancha, .furin-glass-blobs[data-pausa] .furin-glass-blobs__mancha { animation-play-state: paused; }
.furin-glass-blobs.is-quieto .furin-glass-blobs__mancha { animation: none; }
.furin-glass-blobs__panel {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: min(78%, 400px);
  min-height: 56%;
  border-radius: var(--furin-glass-blobs-radius);
  background:
    linear-gradient(150deg, rgba(255, 255, 255, 0.26), rgba(255, 255, 255, 0.05) 45%, rgba(255, 255, 255, 0.1)),
    rgba(255, 255, 255, 0.05);
  -webkit-backdrop-filter: blur(var(--furin-glass-blobs-blur)) saturate(1.8) brightness(1.05);
  backdrop-filter: blur(var(--furin-glass-blobs-blur)) saturate(1.8) brightness(1.05);
  box-shadow:
    0 30px 44px -18px rgba(3, 4, 24, 0.6),
    0 5px 10px -3px rgba(3, 4, 24, 0.32),
    inset 0 -14px 26px -12px rgba(255, 255, 255, 0.2),
    inset 0 14px 22px -14px rgba(255, 255, 255, 0.4);
}
.furin-glass-blobs__grano {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: calc(var(--furin-glass-blobs-grain) * 0.55);
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1.6 -.55'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)'/%3E%3C/svg%3E");
}
.furin-glass-blobs__rim {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  pointer-events: none;
  background: linear-gradient(140deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.1) 28%, rgba(255, 255, 255, 0.04) 62%, rgba(255, 255, 255, 0.5));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
}
.furin-glass-blobs__contenido {
  position: relative;
  padding: 24px;
  text-align: center;
  font-size: clamp(22px, 5vw, 32px);
  font-weight: 650;
  letter-spacing: -0.025em;
  line-height: 1.1;
  text-shadow: 0 1px 14px rgba(10, 14, 50, 0.35);
}
.furin-glass-blobs__velo {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.03));
  -webkit-backdrop-filter: blur(var(--furin-glass-blobs-blur)) saturate(1.8);
  backdrop-filter: blur(var(--furin-glass-blobs-blur)) saturate(1.8);
}
.furin-glass-blobs__contenido--libre { position: absolute; inset: 0; z-index: 2; display: grid; place-items: center; }
@media (prefers-reduced-motion: reduce) { .furin-glass-blobs__mancha { animation: none; } }
`},{path:"components/glass-blobs/GlassBlobs.tsx",language:"tsx",content:`/**
 * Furin · Glass Blobs
 * MIT License · Copyright (c) 2026 Marcelo Treviño Velázquez
 * https://furin.dev/components/glass-blobs
 * https://github.com/MTVelazquez/furin
 */
"use client";
import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import "./GlassBlobs.css";

export interface GlassBlobsProps {
  /** Contenido que va sobre el panel esmerilado. */
  children?: ReactNode;
  /** Colores de las manchas, separados por comas o como lista. */
  colors?: string | string[];
  /** Cuántas manchas flotan detrás. */
  count?: number;
  /** Velocidad del movimiento: 1 es normal, 0 las detiene. */
  speed?: number;
  /** Desenfoque del vidrio esmerilado, en px. */
  blur?: number;
  /** Cuánto grano tiene el vidrio, de 0 a 1. */
  grain?: number;
  /** Muestra el panel de vidrio centrado (si no, el desenfoque cubre todo). */
  panel?: boolean;
  /** Radio de las esquinas del panel, en px. */
  radius?: number;
  /** Color de fondo detrás de las manchas. */
  background?: string;
  /** Clase extra para el contenedor. */
  className?: string;
  /** Estilos extra para el contenedor. */
  style?: CSSProperties;
}

const COLORES = "#ff4f9a,#5b7bff,#2fe0b8,#ffb04a,#9b5cff,#ff6a4d";

/** Valor pseudoaleatorio estable por índice (igual en servidor y cliente, sin hidratación rota). */
function sem(i: number, k: number): number {
  const x = Math.sin(i * 127.1 + k * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/** Fondo de manchas de color que flotan y se deforman detrás de un panel de vidrio esmerilado. */
export function GlassBlobs({
  children,
  colors = COLORES,
  count = 6,
  speed = 1,
  blur = 26,
  grain = 0.5,
  panel = true,
  radius = 32,
  background = "#0b0d24",
  className = "",
  style,
}: GlassBlobsProps) {
  const root = useRef<HTMLDivElement>(null);
  const lista = (Array.isArray(colors) ? colors : colors.split(",")).map((c) => c.trim()).filter(Boolean);

  // Pausa las animaciones CSS cuando el fondo no está a la vista.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => el.toggleAttribute("data-pausa", !e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const vars = {
    "--furin-glass-blobs-bg": background,
    "--furin-glass-blobs-blur": \`\${blur}px\`,
    "--furin-glass-blobs-grain": grain,
    "--furin-glass-blobs-radius": \`\${radius}px\`,
    "--furin-glass-blobs-v": speed > 0 ? 1 / speed : 0,
  } as CSSProperties;
  const quieto = speed <= 0;
  return (
    <div ref={root} className={\`furin-glass-blobs\${quieto ? " is-quieto" : ""}\${panel ? "" : " is-total"} \${className}\`} style={{ ...vars, ...style }}>
      <div className="furin-glass-blobs__fondo" aria-hidden="true">
        {Array.from({ length: Math.max(1, count) }, (_, i) => {
          const c = lista[i % lista.length] ?? "#fff";
          const size = 120 + sem(i, 1) * 110;
          const b = {
            "--c": c,
            left: \`\${(sem(i, 2) * 84 - 4).toFixed(1)}%\`,
            top: \`\${(sem(i, 3) * 84 - 4).toFixed(1)}%\`,
            width: size,
            height: size,
            "--dx": \`\${((sem(i, 4) - 0.5) * 150).toFixed(0)}px\`,
            "--dy": \`\${((sem(i, 5) - 0.5) * 120).toFixed(0)}px\`,
            "--t": \`\${(11 + sem(i, 6) * 9).toFixed(1)}s\`,
            "--m": \`\${(8 + sem(i, 7) * 7).toFixed(1)}s\`,
            "--d": \`\${(-sem(i, 8) * 12).toFixed(1)}s\`,
          } as CSSProperties;
          return <i key={i} className="furin-glass-blobs__mancha" style={b} />;
        })}
      </div>
      {panel ? (
        <div className="furin-glass-blobs__panel">
          <span className="furin-glass-blobs__grano" aria-hidden="true" />
          <span className="furin-glass-blobs__rim" aria-hidden="true" />
          <div className="furin-glass-blobs__contenido">{children}</div>
        </div>
      ) : (
        <>
          <div className="furin-glass-blobs__velo" aria-hidden="true" />
          <div className="furin-glass-blobs__contenido furin-glass-blobs__contenido--libre">{children}</div>
        </>
      )}
    </div>
  );
}

export default GlassBlobs;
`}],s="",e={files:n,prompt:s};export{e as default,n as files,s as prompt};
