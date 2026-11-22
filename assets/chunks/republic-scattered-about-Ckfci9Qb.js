const e=[{path:"components/scattered-about.tsx",language:"tsx",content:`/**
 * Republic UI · scattered-about
 * MIT License · Copyright (c) 2026 Republic Marketing
 * https://www.republicmarketing.co.uk/ui/scattered-about
 * https://github.com/rm-sjent/republic-ui
 */
"use client"

import * as React from "react"
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "motion/react"
import { ChevronRight } from "lucide-react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ScatteredAboutProps {
  title?: string
  body?: string
  cta?: { label: string; href: string }
  /** six images; they fill fixed slots around the copy */
  images: string[]
  className?: string
}

// slots on a 1312 x 640 stage, as percentages so it scales; speed = parallax amount
const SLOTS = [
  { left: 0, top: 10, w: 17, ratio: 4 / 5, speed: 60 },
  { left: 21, top: 0, w: 10, ratio: 3 / 4, speed: 120 },
  { left: 8, top: 70, w: 12, ratio: 1, speed: 30 },
  { left: 66, top: 12, w: 9, ratio: 1, speed: 110 },
  { left: 79, top: 0, w: 21, ratio: 4 / 5, speed: 50 },
  { left: 72, top: 72, w: 13, ratio: 4 / 3, speed: 90 },
]

function Photo({ src, slot, progress, index, still }: { src: string; slot: (typeof SLOTS)[number]; progress: MotionValue<number>; index: number; still: boolean }) {
  const y = useTransform(progress, [0, 1], [slot.speed, -slot.speed])
  return (
    <motion.div
      className="absolute overflow-hidden rounded-[12px] bg-[#eceae4]"
      style={{ left: \`\${slot.left}%\`, top: \`\${slot.top}%\`, width: \`\${slot.w}%\`, aspectRatio: slot.ratio, y: still ? 0 : y }}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.42, 0, 0, 1], delay: 0.08 * index }}
    >
      <img src={src} alt="" className="h-full w-full object-cover" />
    </motion.div>
  )
}

export function ScatteredAbout({
  title = "Who we are",
  body = "Started in 2019 by two partners who wanted advice to feel personal again. Today we help private clients and growing companies across London and beyond.",
  cta = { label: "About the firm", href: "#" },
  images,
  className,
}: ScatteredAboutProps) {
  const ref = React.useRef<HTMLElement>(null)
  const reduce = useReducedMotion() ?? false
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  return (
    <section ref={ref} className={cn("w-full overflow-hidden bg-white px-6 py-20 md:py-28", className)}>
      {/* desktop: scattered stage */}
      <div className="relative mx-auto hidden aspect-[1312/640] w-full max-w-[1312px] md:block">
        {images.slice(0, 6).map((src, i) => (
          <Photo key={src} src={src} slot={SLOTS[i]} progress={scrollYProgress} index={i} still={reduce} />
        ))}
        <div className="absolute left-1/2 top-1/2 w-[36%] -translate-x-1/2 -translate-y-1/2 text-center">
          <Copy title={title} body={body} cta={cta} />
        </div>
      </div>

      {/* mobile: copy then a tidy strip */}
      <div className="md:hidden">
        <div className="text-center">
          <Copy title={title} body={body} cta={cta} />
        </div>
        <div className="-mx-6 mt-10 flex gap-3 overflow-x-auto px-6 pb-2">
          {images.slice(0, 6).map((src) => (
            <img key={src} src={src} alt="" className="aspect-[4/5] w-[42vw] shrink-0 rounded-[12px] object-cover" />
          ))}
        </div>
      </div>
    </section>
  )
}

function Copy({ title, body, cta }: { title: string; body: string; cta?: { label: string; href: string } }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.9, ease: [0.42, 0, 0, 1] }}
    >
      <h2 className="font-serif text-[clamp(38px,4.2vw,60px)] font-light leading-[1.05] tracking-[-0.02em] text-[#0b1424]">{title}</h2>
      <p className="mx-auto mt-5 max-w-[42ch] text-[16px] leading-relaxed text-black/65">{body}</p>
      {cta && (
        <a href={cta.href} className="mt-7 inline-flex items-center gap-1 rounded-full border border-black/12 px-4 py-2 text-[14px] text-[#0b1424]">
          {cta.label}
          <ChevronRight className="size-4" strokeWidth={1.6} />
        </a>
      )}
    </motion.div>
  )
}

export default ScatteredAbout
`}],t="",n={files:e,prompt:t};export{n as default,e as files,t as prompt};
