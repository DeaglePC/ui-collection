const n=[{path:"components/typing-indicator/TypingIndicator.css",language:"css",content:`/**
 * Furin · Typing Indicator
 * MIT License · Copyright (c) 2026 Marcelo Treviño Velázquez
 * https://furin.dev/components/typing-indicator
 * https://github.com/MTVelazquez/furin
 */
.furin-typing-indicator {
  --furin-ti-scale: 1;
  --furin-ti-bg: #2a2b31;
  --furin-ti-fg: #f3f5f8;
  --furin-ti-dot: #9a9ca6;
  --furin-ti-ctx: linear-gradient(180deg, #4a8cff, #2c6bf2);
  display: grid;
  gap: 10px;
  justify-items: start;
  width: min(340px, 92%);
  font-family: "Geist", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  font-size: calc(15px * var(--furin-ti-scale));
  color: var(--furin-ti-fg);
}
.furin-typing-indicator.is-light { --furin-ti-bg: #e9e9ee; --furin-ti-fg: #15161a; --furin-ti-dot: #8b8d97; }
.furin-typing-indicator.is-accent { --furin-ti-bg: linear-gradient(180deg, #4a8cff, #2c6bf2); --furin-ti-fg: #fff; --furin-ti-dot: rgba(255, 255, 255, 0.9); --furin-ti-ctx: #2a2b31; }

.furin-typing-indicator__ctx {
  justify-self: end;
  max-width: 82%;
  padding: 0.55em 0.95em;
  border-radius: 1.2em 1.2em 0.35em 1.2em;
  background: var(--furin-ti-ctx);
  color: #fff;
  line-height: 1.3;
  box-shadow: 0 6px 18px -8px rgba(0, 0, 0, 0.6);
}
.is-accent .furin-typing-indicator__ctx { color: #f3f5f8; }

.furin-typing-indicator__slot { position: relative; min-height: 2.6em; }
.furin-typing-indicator__bubble {
  position: relative;
  display: inline-flex;
  align-items: center;
  background: var(--furin-ti-bg);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.07), 0 6px 18px -8px rgba(0, 0, 0, 0.6);
  transform-origin: 0% 100%;
  animation: furin-typing-indicator-pop 0.65s linear(0, 0.35 8%, 0.82 17%, 1.08 26%, 1.14 33%, 1.06 42%, 0.98 53%, 1.01 65%, 1 80%, 1) both;
}
.furin-typing-indicator__typing {
  gap: 0.34em;
  padding: 0.92em 1.05em;
  border-radius: 1.4em;
}
/* Cola de globo: dos círculos que se achican hacia abajo a la izquierda. */
.furin-typing-indicator__typing::before,
.furin-typing-indicator__typing::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: var(--furin-ti-bg);
}
.furin-typing-indicator__typing::before { width: 0.62em; height: 0.62em; left: -0.18em; bottom: -0.1em; }
.furin-typing-indicator__typing::after { width: 0.32em; height: 0.32em; left: -0.46em; bottom: -0.34em; }

.furin-typing-indicator__dot {
  display: block;
  width: 0.56em;
  height: 0.56em;
  border-radius: 50%;
  background: var(--furin-ti-dot);
  animation: furin-typing-indicator-dot 1.4s linear infinite;
  animation-delay: calc(var(--furin-ti-i) * 0.17s);
}
@keyframes furin-typing-indicator-dot {
  0%, 62%, 100% { transform: translateY(0) scale(1, 1); opacity: 0.5; animation-timing-function: ease-in; }
  8% { transform: translateY(0.05em) scale(1.12, 0.86); opacity: 0.55; animation-timing-function: ease-out; }
  22% { transform: translateY(-0.52em) scale(0.9, 1.14); opacity: 1; animation-timing-function: ease-in; }
  38% { transform: translateY(0.1em) scale(1.16, 0.84); opacity: 0.85; animation-timing-function: ease-out; }
  50% { transform: translateY(-0.14em) scale(0.97, 1.04); opacity: 0.65; animation-timing-function: ease-in-out; }
}
.furin-typing-indicator[data-pausa="1"] .furin-typing-indicator__dot { animation-play-state: paused; }

.furin-typing-indicator__reply {
  max-width: 88%;
  padding: 0.62em 1em;
  border-radius: 1.25em 1.25em 1.25em 0.35em;
  line-height: 1.3;
}

@keyframes furin-typing-indicator-pop {
  from { opacity: 0; transform: scale(0.35); }
  25% { opacity: 1; }
  to { opacity: 1; transform: scale(1); }
}

.furin-typing-indicator__sr {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}

@media (prefers-reduced-motion: reduce) {
  .furin-typing-indicator__bubble { animation: none; }
  .furin-typing-indicator__dot { animation: none; opacity: 0.8; }
  .furin-typing-indicator__dot:nth-child(2) { transform: translateY(-0.18em); opacity: 1; }
}
`},{path:"components/typing-indicator/TypingIndicator.tsx",language:"tsx",content:`/**
 * Furin · Typing Indicator
 * MIT License · Copyright (c) 2026 Marcelo Treviño Velázquez
 * https://furin.dev/components/typing-indicator
 * https://github.com/MTVelazquez/furin
 */
"use client";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import "./TypingIndicator.css";

export interface TypingIndicatorProps {
  /** Muestra un mensaje anterior para dar contexto a la burbuja. */
  context?: string;
  /** Respuesta que aparece cuando termina de "escribir" (vacío para que solo escriba). */
  reply?: string;
  /** Segundos que dura el "escribiendo…" antes de mostrar la respuesta. */
  typingTime?: number;
  /** Segundos que se queda la respuesta antes de volver a empezar. */
  replyTime?: number;
  /** Estilo de la burbuja: light, dark o accent. */
  variant?: "light" | "dark" | "accent";
  /** Escala de toda la pieza (1 es el tamaño normal). */
  scale?: number;
  /** Texto oculto que leen los lectores de pantalla. */
  label?: string;
  /** Clase extra para el contenedor. */
  className?: string;
  /** Estilos extra para el contenedor. */
  style?: CSSProperties;
}

/** Burbuja de "escribiendo…": tres puntos con rebote elástico (se estiran, caen y se aplastan en cadena), cola de globo y, en ciclo, la respuesta que reemplaza a la burbuja con un pequeño resorte. */
export function TypingIndicator({
  context = "Did you see this week's report yet?",
  reply = "Yes, I'll send it over in a moment.",
  typingTime = 3.2,
  replyTime = 3,
  variant = "dark",
  scale = 1,
  label = "Typing",
  className = "",
  style,
}: TypingIndicatorProps) {
  const [fase, setFase] = useState<"escribe" | "responde">("escribe");
  const [ciclo, setCiclo] = useState(0);
  const raiz = useRef<HTMLDivElement>(null);
  const [pausa, setPausa] = useState(false);

  useEffect(() => {
    const el = raiz.current;
    if (!el) return;
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let visible = true;
    let timer = 0;
    const programar = (f: "escribe" | "responde") => {
      window.clearTimeout(timer);
      if (quieto || !reply) return;
      const espera = (f === "escribe" ? typingTime : replyTime) * 1000;
      timer = window.setTimeout(() => {
        if (!visible) { programar(f); return; }
        if (f === "escribe") { setFase("responde"); programar("responde"); }
        else { setFase("escribe"); setCiclo((c) => c + 1); programar("escribe"); }
      }, espera);
    };
    programar("escribe");
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; setPausa(!e.isIntersecting); });
    io.observe(el);
    return () => { io.disconnect(); window.clearTimeout(timer); };
  }, [reply, typingTime, replyTime]);

  const vars = { "--furin-ti-scale": scale } as CSSProperties;
  return (
    <div ref={raiz} className={\`furin-typing-indicator is-\${variant} \${className}\`} style={{ ...vars, ...style }} role="status" data-pausa={pausa ? "1" : "0"}>
      {context ? <div className="furin-typing-indicator__ctx" aria-hidden="true">{context}</div> : null}
      <div className="furin-typing-indicator__slot" aria-hidden="true">
        {fase === "escribe" ? (
          <div key={\`t\${ciclo}\`} className="furin-typing-indicator__bubble furin-typing-indicator__typing">
            <i className="furin-typing-indicator__dot" style={{ "--furin-ti-i": 0 } as CSSProperties} />
            <i className="furin-typing-indicator__dot" style={{ "--furin-ti-i": 1 } as CSSProperties} />
            <i className="furin-typing-indicator__dot" style={{ "--furin-ti-i": 2 } as CSSProperties} />
          </div>
        ) : (
          <div key={\`r\${ciclo}\`} className="furin-typing-indicator__bubble furin-typing-indicator__reply">{reply}</div>
        )}
      </div>
      <span className="furin-typing-indicator__sr">{fase === "escribe" ? \`\${label}…\` : reply}</span>
    </div>
  );
}

export default TypingIndicator;
`}],i="",e={files:n,prompt:i};export{e as default,n as files,i as prompt};
