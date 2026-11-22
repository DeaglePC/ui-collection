const n=[{path:"components/feature-ui-row.tsx",language:"tsx",content:`/**
 * Republic UI · feature-ui-row
 * MIT License · Copyright (c) 2026 Republic Marketing
 * https://www.republicmarketing.co.uk/ui/feature-ui-row
 * https://github.com/rm-sjent/republic-ui
 */
"use client"

import * as React from "react"
import { motion, useInView } from "motion/react"
import { Check, ChevronRight } from "lucide-react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/* ---------- odometer ---------- */

function Reel({ digit, lh, delay }: { digit: number; lh: number; delay: number }) {
  return (
    <span className="inline-block overflow-hidden align-top" style={{ height: lh }}>
      <motion.span
        className="flex flex-col"
        initial={{ y: 0 }}
        animate={{ y: -digit * lh }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {Array.from({ length: 10 }).map((_, d) => (
          <span key={d} className="block" style={{ height: lh, lineHeight: \`\${lh}px\` }}>
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  )
}

function Odometer({ value, size, run, suffix }: { value: number; size: number; run: boolean; suffix?: string }) {
  const lh = Math.round(size * 1.05)
  const chars = String(value).split("")
  return (
    <span className="inline-flex tabular-nums" style={{ fontSize: size, height: lh, lineHeight: \`\${lh}px\` }} role="img" aria-label={\`\${value}\${suffix ?? ""}\`}>
      <span aria-hidden className="inline-flex select-none">
        {chars.map((c, i) => (
          <Reel key={i} digit={run ? Number(c) : 0} lh={lh} delay={0.4 + i * 0.08} />
        ))}
        {suffix && <span>{suffix}</span>}
      </span>
    </span>
  )
}

/* ---------- visuals ---------- */

export interface ChecklistVisualProps {
  title: string
  rows: { label: string; value: string }[]
  stat: { value: number; suffix?: string; label: string }
}

export function ChecklistVisual({ title, rows, stat }: ChecklistVisualProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  return (
    <div ref={ref} className="relative mt-14 w-[min(380px,78vw)]">
      <motion.div
        className="absolute -right-1 -top-20 z-10 rounded-[10px] md:-right-16 border border-white/10 bg-[#0b1424] px-5 py-4 text-white md:-right-10"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.42, 0, 0, 1], delay: 0.2 }}
      >
        <div className="font-serif font-light">
          <Odometer value={stat.value} size={44} run={inView} suffix={stat.suffix} />
        </div>
        <p className="mt-1 text-[13px] text-white/60">{stat.label}</p>
      </motion.div>

      <motion.div
        className="rounded-[12px] border border-white/15 bg-white/[0.06] p-2 backdrop-blur-md"
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.95, ease: [0.42, 0, 0, 1] }}
      >
        <div className="rounded-[8px] bg-white p-4">
          <p className="pb-3 text-[14px] text-[#0b1424]">{title}</p>
          <ul>
            {rows.map((r, i) => (
              <motion.li
                key={r.label}
                className="flex items-center justify-between gap-4 border-t border-black/[0.07] py-2.5 text-[13px]"
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.42, 0, 0, 1], delay: 0.35 + i * 0.09 }}
              >
                <span className="flex items-center gap-2 text-black/70">
                  <motion.span
                    className="grid size-4 place-items-center rounded-full bg-[#0b1424] text-white"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ type: "spring", bounce: 0.5, duration: 0.5, delay: 0.9 + i * 0.25 }}
                  >
                    <Check className="size-2.5" strokeWidth={3} />
                  </motion.span>
                  {r.label}
                </span>
                <span className="text-black">{r.value}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export interface TimelineVisualProps {
  title: string
  stages: { label: string; years: number }[]
  total: number
  note: string
}

export function TimelineVisual({ title, stages, total, note }: TimelineVisualProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  let acc = 0
  return (
    <motion.div
      ref={ref}
      className="w-[min(440px,80vw)] rounded-[12px] border border-white/15 bg-[#0b1424]/70 p-5 text-white backdrop-blur-md"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.95, ease: [0.42, 0, 0, 1] }}
    >
      <div className="flex items-baseline justify-between text-[14px]">
        <span>{title}</span>
        <span className="text-white/50">{total} years</span>
      </div>
      <div className="mt-4 flex h-10 overflow-hidden rounded-[6px] bg-white/10">
        {stages.map((s, i) => {
          const start = acc
          acc += s.years
          return (
            <motion.div
              key={s.label}
              className={cn("flex h-full items-center px-3 text-[12px]", i === 0 ? "bg-white text-[#0b1424]" : "bg-[#c9d6ff] text-[#0b1424]")}
              style={{ width: \`\${(s.years / total) * 100}%\`, transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.9, ease: [0.42, 0, 0, 1], delay: 0.4 + (start / total) * 1.2 }}
            >
              <span className="truncate">{s.label}</span>
            </motion.div>
          )
        })}
      </div>
      <div className="mt-2 flex justify-between text-[11px] text-white/40 tabular-nums">
        {Array.from({ length: total + 1 }).map((_, i) => (
          <span key={i}>{i}</span>
        ))}
      </div>
      <motion.p
        className="mt-4 flex items-center gap-2 text-[13px] text-white/70"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="rounded-[4px] bg-[#f2b24c] px-1.5 py-0.5 text-[11px] text-[#0b1424]">Then</span>
        {note}
      </motion.p>
    </motion.div>
  )
}

/* ---------- row ---------- */

export interface FeatureUIRowProps {
  eyebrow: string
  title: string
  body: string
  cta?: { label: string; href: string }
  visual: React.ReactNode
  /** put the visual on the left */
  reverse?: boolean
  /** panel background behind the visual */
  tone?: "royal" | "night"
  className?: string
}

export function FeatureUIRow({ eyebrow, title, body, cta, visual, reverse, tone = "royal", className }: FeatureUIRowProps) {
  return (
    <div className={cn("grid w-full items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16", className)}>
      <div className={cn("max-w-[440px]", reverse && "md:order-2")}>
        <p className="flex items-center gap-2 text-[14px] text-black/60">
          <span className="h-px w-5 bg-black/40" />
          {eyebrow}
        </p>
        <h3 className="mt-6 font-serif text-[clamp(30px,3vw,44px)] font-light leading-[1.1] tracking-[-0.015em] text-[#0b1424]">{title}</h3>
        <p className="mt-4 text-[16px] leading-relaxed text-black/65">{body}</p>
        {cta && (
          <a
            href={cta.href}
            className="mt-7 inline-flex items-center gap-1 rounded-full border border-black/12 px-4 py-2 text-[14px] text-[#0b1424]"
          >
            {cta.label}
            <ChevronRight className="size-4" strokeWidth={1.6} />
          </a>
        )}
      </div>

      <div
        className={cn(
          "relative flex w-full items-center justify-center overflow-hidden rounded-[12px] px-5 py-16 md:aspect-[7/5] md:px-8 md:py-0",
          tone === "royal" ? "bg-[#1d3a8a]" : "bg-[#0b1424]",
          reverse && "md:order-1",
        )}
      >
        {/* hairline texture on both edges */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-1/4 opacity-40"
          style={{
            backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,.35) 0 1px, transparent 1px 9px)",
            maskImage: "linear-gradient(90deg, #000, transparent)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-1/4 opacity-40"
          style={{
            backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,.35) 0 1px, transparent 1px 9px)",
            maskImage: "linear-gradient(270deg, #000, transparent)",
          }}
        />
        <div className="relative">{visual}</div>
      </div>
    </div>
  )
}

export default FeatureUIRow
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
