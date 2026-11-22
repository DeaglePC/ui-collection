const n=[{path:"components/scroll-fill-headline.tsx",language:"tsx",content:`/**
 * Republic UI · scroll-fill-headline
 * MIT License · Copyright (c) 2026 Republic Marketing
 * https://www.republicmarketing.co.uk/ui/scroll-fill-headline
 * https://github.com/rm-sjent/republic-ui
 */
"use client"

import * as React from "react"
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "motion/react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const color = useTransform(progress, range, ["rgba(11,20,36,0.16)", "rgba(11,20,36,1)"])
  return (
    <motion.span style={{ color }} className="inline-block">
      {word}
    </motion.span>
  )
}

export interface FloatingObject {
  src: string
  /** position as % of the block */
  left: number
  top: number
  /** width in px at desktop */
  width: number
  rotate: [number, number]
  drift: [number, number]
}

export interface ScrollFillHeadlineProps {
  lines: [string, string]
  objects?: FloatingObject[]
  className?: string
}

function Floater({ o, progress }: { o: FloatingObject; progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], o.drift)
  const rotate = useTransform(progress, [0, 1], o.rotate)
  return (
    <motion.img
      src={o.src}
      alt=""
      aria-hidden
      className="pointer-events-none absolute hidden mix-blend-multiply md:block"
      style={{
        left: \`\${o.left}%\`,
        top: \`\${o.top}%\`,
        width: o.width,
        y,
        rotate,
        filter: "brightness(1.07) contrast(1.06)",
        maskImage: "radial-gradient(closest-side, #000 72%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(closest-side, #000 72%, transparent 100%)",
      }}
    />
  )
}

export function ScrollFillHeadline({ lines, objects = [], className }: ScrollFillHeadlineProps) {
  const ref = React.useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 45%"] })
  const words = lines.flatMap((l, li) => l.split(" ").map((w) => ({ w, li })))
  const total = words.length

  return (
    <section ref={ref} className={cn("relative w-full overflow-hidden bg-white px-6 py-28 md:py-40", className)}>
      {objects.map((o, k) => (
        <Floater key={k} o={o} progress={scrollYProgress} />
      ))}
      <h2 className="relative mx-auto max-w-[1100px] text-center font-serif text-[clamp(38px,5.4vw,80px)] font-light leading-[1.06] tracking-[-0.025em]">
        {[0, 1].map((li) => (
          <span key={li} className="flex flex-wrap justify-center gap-x-[0.24em]">
            {words.map((x, k) =>
              x.li === li ? (
                reduce ? (
                  <span key={k} className="text-[#0b1424]">
                    {x.w}
                  </span>
                ) : (
                  <Word key={k} word={x.w} progress={scrollYProgress} range={[k / total, (k + 1.5) / total]} />
                )
              ) : null,
            )}
          </span>
        ))}
      </h2>
    </section>
  )
}

export default ScrollFillHeadline
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
