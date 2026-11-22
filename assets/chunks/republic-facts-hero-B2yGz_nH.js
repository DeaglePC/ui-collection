const n=[{path:"components/facts-hero.tsx",language:"tsx",content:`/**
 * Republic UI · facts-hero
 * MIT License · Copyright (c) 2026 Republic Marketing
 * https://www.republicmarketing.co.uk/ui/facts-hero
 * https://github.com/rm-sjent/republic-ui
 */
"use client"

import * as React from "react"
import { motion, useInView } from "motion/react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function Reel({ digit, lh, delay, on }: { digit: number; lh: number; delay: number; on: boolean }) {
  return (
    <span className="inline-block overflow-hidden align-top" style={{ height: lh }}>
      <motion.span className="flex flex-col" initial={{ y: 0 }} animate={on ? {y: on ? -digit * lh : 0} : undefined} transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay }}>
        {Array.from({ length: 10 }).map((_, d) => (
          <span key={d} className="block" style={{ height: lh, lineHeight: \`\${lh}px\` }}>
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  )
}

function Rolling({ text, delay, on }: { text: string; delay: number; on: boolean }) {
  const lh = 18
  return (
    <span className="inline-flex tabular-nums" style={{ height: lh, lineHeight: \`\${lh}px\` }} role="img" aria-label={text}>
      <span aria-hidden className="inline-flex select-none">
        {text.split("").map((c, i) =>
          /\\d/.test(c) ? <Reel key={i} digit={Number(c)} lh={lh} delay={delay + i * 0.06} on={on} /> : <span key={i}>{c}</span>,
        )}
      </span>
    </span>
  )
}

export interface Fact {
  label: string
  value: string
  /** roll the digits in the value */
  roll?: boolean
  highlight?: boolean
}

export interface FactsHeroProps {
  title: React.ReactNode
  body: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
  image: string
  cardTitle?: string
  facts: Fact[]
  className?: string
}

const ease = [0.42, 0, 0, 1] as const

export function FactsHero({ title, body, primary, secondary, image, cardTitle = "At a glance", facts, className }: FactsHeroProps) {
  const ref = React.useRef<HTMLElement>(null)
  const on = useInView(ref, { once: true, amount: 0.25 })
  return (
    <section ref={ref} className={cn("w-full bg-[#0b1424] px-4 pb-4 pt-24 md:px-6 md:pb-6 md:pt-32", className)}>
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-[860px] px-2 md:px-10">
          <motion.h1
            className="font-serif text-[clamp(40px,5vw,72px)] font-light leading-[1.04] tracking-[-0.02em] text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={on ? {opacity: 1, y: 0} : undefined}
            transition={{ duration: 1, ease }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-[48ch] text-[17px] leading-relaxed text-white/65"
            initial={{ opacity: 0, y: 20 }}
            animate={on ? {opacity: 1, y: 0} : undefined}
            transition={{ duration: 1, ease, delay: 0.12 }}
          >
            {body}
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-2" initial={{ opacity: 0 }} animate={on ? {opacity: 1} : undefined} transition={{ duration: 0.8, delay: 0.3 }}>
            {primary && (
              <a href={primary.href} className="rounded-full bg-[#f2b24c] px-5 py-2.5 text-[15px] text-[#0b1424]">
                {primary.label}
              </a>
            )}
            {secondary && (
              <a href={secondary.href} className="rounded-full border border-white/15 px-5 py-2.5 text-[15px] text-white">
                {secondary.label}
              </a>
            )}
          </motion.div>
        </div>

        <motion.div
          className="relative mt-14 overflow-hidden rounded-[12px] md:mt-20"
          initial={{ opacity: 0, y: 60 }}
          animate={on ? {opacity: 1, y: 0} : undefined}
          transition={{ duration: 1.1, ease, delay: 0.2 }}
        >
          <motion.img
            src={image}
            alt=""
            className="aspect-[4/5] w-full object-cover md:aspect-[16/8]"
            initial={{ scale: 1.12 }}
            animate={on ? {scale: 1} : undefined}
            transition={{ duration: 1.8, ease }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/35 via-transparent to-transparent" />

          <motion.div
            className="absolute inset-x-3 bottom-3 rounded-[10px] border border-white/20 bg-white/10 p-1.5 backdrop-blur-xl md:inset-x-auto md:bottom-auto md:right-8 md:top-1/2 md:w-[420px] md:-translate-y-1/2"
            initial={{ opacity: 0, x: 40 }}
            animate={on ? {opacity: 1, x: 0} : undefined}
            transition={{ duration: 1, ease, delay: 0.7 }}
          >
            <div className="rounded-[7px] bg-white">
              <div className="flex items-center justify-between px-4 py-3 text-[14px]">
                <span className="text-[#0b1424]">{cardTitle}</span>
                <span className="text-black/40">In numbers</span>
              </div>
              <ul>
                {facts.map((f, i) => (
                  <motion.li
                    key={f.label}
                    className="flex items-center justify-between gap-4 border-t border-black/[0.07] px-4 py-[11px] text-[13px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={on ? {opacity: 1, y: 0} : undefined}
                    transition={{ duration: 0.6, ease, delay: 0.95 + i * 0.07 }}
                  >
                    <span className="text-black/65">{f.label}</span>
                    <span className={cn("text-right text-[#0b1424]", f.highlight && "rounded-[4px] bg-[#e7edff] px-1.5 py-0.5 text-[#1d3a8a]")}>
                      {f.roll ? <Rolling text={f.value} delay={1.1 + i * 0.07} on={on} /> : f.value}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FactsHero
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
