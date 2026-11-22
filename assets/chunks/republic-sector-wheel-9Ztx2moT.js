const n=[{path:"components/sector-wheel.tsx",language:"tsx",content:`/**
 * Republic UI · sector-wheel
 * MIT License · Copyright (c) 2026 Republic Marketing
 * https://www.republicmarketing.co.uk/ui/sector-wheel
 * https://github.com/rm-sjent/republic-ui
 */
"use client"

import * as React from "react"
import { motion, AnimatePresence, useInView, useReducedMotion } from "motion/react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function Reel({ digit, lh }: { digit: number; lh: number }) {
  return (
    <span className="inline-block overflow-hidden align-top" style={{ height: lh }}>
      <motion.span className="flex flex-col" initial={false} animate={{ y: -digit * lh }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
        {Array.from({ length: 10 }).map((_, d) => (
          <span key={d} className="block" style={{ height: lh, lineHeight: \`\${lh}px\` }}>
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  )
}

function Counter({ value, size = 15 }: { value: number; size?: number }) {
  const lh = Math.round(size * 1.2)
  const chars = String(value).padStart(2, "0").split("")
  return (
    <span className="inline-flex tabular-nums" style={{ fontSize: size, height: lh }} role="img" aria-label={String(value)}>
      <span aria-hidden className="inline-flex select-none">
        {chars.map((c, i) => (
          <Reel key={i} digit={Number(c)} lh={lh} />
        ))}
      </span>
    </span>
  )
}

export interface Sector {
  name: string
  note: string
}

export interface SectorWheelProps {
  title?: string
  sectors: Sector[]
  interval?: number
  className?: string
}

const ROW = 84

export function SectorWheel({ title = "Know-how across thirteen industries", sectors, interval = 2600, className }: SectorWheelProps) {
  const [i, setI] = React.useState(0)
  const [hold, setHold] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.4 })
  const reduce = useReducedMotion()
  const n = sectors.length

  React.useEffect(() => {
    if (!interval || hold || !inView || reduce) return
    const t = setTimeout(() => setI((v) => (v + 1) % n), interval)
    return () => clearTimeout(t)
  }, [i, hold, inView, interval, n, reduce])

  const go = (d: number) => setI((v) => (v + d + n) % n)

  return (
    <section ref={ref} className={cn("w-full bg-[#f6f4ef] px-6 py-20 md:px-10 md:py-24", className)}>
      <div
        className="mx-auto grid max-w-[1312px] items-center gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
        onPointerEnter={(e) => e.pointerType === "mouse" && setHold(true)}
        onPointerLeave={() => setHold(false)}
      >
        <div className="flex flex-col gap-10">
          <h2 className="max-w-[14ch] font-serif text-[clamp(34px,3.6vw,52px)] font-light leading-[1.08] tracking-[-0.015em] text-[#0b1424]">{title}</h2>

          <div className="min-h-[96px] max-w-[40ch]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={i}
                className="text-[16px] leading-relaxed text-black/65"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.15 } }}
                exit={{ opacity: 0, y: -6, transition: { duration: 0.2 } }}
              >
                {sectors[i].note}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between border-t border-black/10 pt-5">
            <span className="flex items-center gap-1.5 text-[15px] text-[#0b1424]">
              <Counter value={i + 1} />
              <span className="text-black/35">of {n}</span>
            </span>
            <div className="flex gap-2">
              <button type="button" aria-label="Previous sector" onClick={() => go(-1)} className="grid size-10 place-items-center rounded-[10px] border border-black/12 bg-white text-[#0b1424]">
                <ArrowLeft className="size-4" strokeWidth={1.6} />
              </button>
              <button type="button" aria-label="Next sector" onClick={() => go(1)} className="grid size-10 place-items-center rounded-[10px] bg-[#0b1424] text-white">
                <ArrowRight className="size-4" strokeWidth={1.6} />
              </button>
            </div>
          </div>
        </div>

        {/* wheel */}
        <div
          className="relative h-[520px] overflow-hidden"
          style={{ maskImage: "linear-gradient(180deg, transparent 0, #000 24%, #000 76%, transparent 100%)" }}
        >
          <div className="absolute inset-x-0 top-1/2" style={{ marginTop: -ROW / 2 }}>
            {sectors.map((s, k) => {
              let d = k - i
              if (d > n / 2) d -= n
              if (d < -n / 2) d += n
              const a = Math.abs(d)
              return (
                <motion.button
                  key={s.name}
                  type="button"
                  onClick={() => setI(k)}
                  className="absolute left-0 flex w-full items-center whitespace-nowrap text-left font-serif text-[clamp(30px,3.4vw,46px)] font-light tracking-[-0.01em] text-[#0b1424]"
                  style={{ height: ROW, transformOrigin: "left center" }}
                  initial={false}
                  animate={{
                    y: d * ROW,
                    opacity: a === 0 ? 1 : a === 1 ? 0.5 : a === 2 ? 0.22 : 0,
                    scale: a === 0 ? 1 : 0.86,
                    filter: a === 0 ? "blur(0px)" : \`blur(\${Math.min(a, 3) * 1.2}px)\`,
                  }}
                  transition={a > 3 ? { duration: 0 } : { duration: 0.9, ease: [0.42, 0, 0, 1] }}
                >
                  {s.name}
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectorWheel
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
