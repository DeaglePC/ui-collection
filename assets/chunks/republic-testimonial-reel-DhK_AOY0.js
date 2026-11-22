const n=[{path:"components/testimonial-reel.tsx",language:"tsx",content:`/**
 * Republic UI · testimonial-reel
 * MIT License · Copyright (c) 2026 Republic Marketing
 * https://www.republicmarketing.co.uk/ui/testimonial-reel
 * https://github.com/rm-sjent/republic-ui
 */
"use client"

import * as React from "react"
import { motion, AnimatePresence, useReducedMotion, useInView } from "motion/react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/* ---------- odometer ---------- */

function Reel({ digit, lh }: { digit: number; lh: number }) {
  return (
    <span className="inline-block overflow-hidden align-top" style={{ height: lh }}>
      <motion.span
        className="flex flex-col"
        initial={false}
        animate={{ y: -digit * lh }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {Array.from({ length: 10 }).map((_, d) => (
          <span key={d} className="block text-center" style={{ height: lh, lineHeight: \`\${lh}px\` }}>
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  )
}

function Odometer({ value, size, prefix, suffix }: { value: number; size: number; prefix?: string; suffix?: string }) {
  const lh = Math.round(size * 1.05)
  const chars = String(value).split("")
  return (
    <span
      className="inline-flex items-start tabular-nums tracking-[-0.04em]"
      style={{ fontSize: size, height: lh, lineHeight: \`\${lh}px\` }} role="img"
      aria-label={\`\${prefix ?? ""}\${value}\${suffix ?? ""}\`}
    >
      <span aria-hidden className="inline-flex select-none">
        {prefix && <span>{prefix}</span>}
        {chars.map((c, i) =>
          /\\d/.test(c) ? <Reel key={chars.length - i} digit={Number(c)} lh={lh} /> : <span key={\`c\${i}\`}>{c}</span>,
        )}
        {suffix && <span>{suffix}</span>}
      </span>
    </span>
  )
}

/* ---------- reel ---------- */

export interface Testimonial {
  quote: string
  name: string
  role: string
  photo: string
  stat: { value: number; prefix?: string; suffix?: string; label: string }
}

export interface TestimonialReelProps {
  items: Testimonial[]
  /** autoplay interval in ms, 0 to disable */
  interval?: number
  className?: string
}

/** width of an element, kept up to date, so the layout follows its own box not the window */
function useWidth<T extends HTMLElement>(ref: React.RefObject<T | null>) {
  const [w, setW] = React.useState(0)
  React.useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    setW(el.getBoundingClientRect().width)
    const ro = new ResizeObserver(([e]) => setW(e.borderBoxSize?.[0]?.inlineSize ?? e.target.getBoundingClientRect().width))
    ro.observe(el)
    return () => ro.disconnect()
  }, [ref])
  return w
}

const ease = [0.42, 0, 0, 1] as const

export function TestimonialReel({ items, interval = 7000, className }: TestimonialReelProps) {
  const [i, setI] = React.useState(0)
  const [paused, setPaused] = React.useState(false)
  const reduce = useReducedMotion()
  const root = React.useRef<HTMLDivElement>(null)
  const inView = useInView(root, { amount: 0.3 })
  const width = useWidth(root)
  const t = items[i]
  const auto = interval > 0 && !paused && !reduce && inView

  React.useEffect(() => {
    if (!auto) return
    const id = setTimeout(() => setI((v) => (v + 1) % items.length), interval)
    return () => clearTimeout(id)
  }, [i, auto, interval, items.length])

  // layout comes from the component's own width, so it works in any container
  const wide = width >= 720
  const pad = width >= 1000 ? 48 : width >= 560 ? 36 : 24
  const gap = width >= 1000 ? 56 : 36
  const portraitW = Math.round(Math.min(340, Math.max(220, width * 0.32)))
  const quoteSize = Math.round(Math.min(32, Math.max(20, (wide ? width - portraitW : width) * 0.036)))
  const statSize = width >= 560 ? 56 : 44

  const words = t.quote.split(" ")

  const portrait = (
    <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-[#ececea]">
      <AnimatePresence initial={false}>
        <motion.img
          key={t.photo}
          src={t.photo}
          alt={t.name}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ y: "100%" }}
          animate={{ y: "0%", zIndex: 1 }}
          exit={{ y: "-30%", zIndex: 0, transition: { duration: 0.9, ease } }}
          transition={{ duration: 0.9, ease }}
        />
      </AnimatePresence>
    </div>
  )

  const nameRole = (
    <div className="h-[46px] overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={t.name}
          initial={{ y: "100%" }}
          animate={{ y: "0%", transition: { duration: 0.6, ease, delay: 0.2 } }}
          exit={{ y: "-100%", transition: { duration: 0.3, ease: [0.42, 0, 1, 1] } }}
        >
          <p className="text-[17px] leading-[22px] text-black">{t.name}</p>
          <p className="text-[15px] leading-[22px] text-black/55">{t.role}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )

  const quote = (
    <figure style={{ minHeight: quoteSize * 1.28 * (wide ? 5 : 6) }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.blockquote
          key={i}
          className="font-normal leading-[1.28] tracking-[-0.02em] text-black"
          style={{ fontSize: quoteSize }}
          initial="hidden"
          animate="show"
          exit="exit"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.018 } },
            exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: [0.42, 0, 1, 1] } },
          }}
        >
          {words.map((w, k) => (
            <motion.span
              key={k}
              className="inline-block whitespace-pre"
              variants={{
                hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease } },
              }}
            >
              {w}
              {k < words.length - 1 ? " " : ""}
            </motion.span>
          ))}
        </motion.blockquote>
      </AnimatePresence>
    </figure>
  )

  const statAndTabs = (
    <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-6">
      <div>
        <Odometer value={t.stat.value} size={statSize} prefix={t.stat.prefix} suffix={t.stat.suffix} />
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={t.stat.label}
            className="mt-2 text-[15px] text-black/55"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {t.stat.label}
          </motion.p>
        </AnimatePresence>
      </div>

      <div role="tablist" aria-label="Testimonials" className="flex gap-2 pb-3">
        {items.map((it, n) => {
          const on = n === i
          return (
            <button key={it.name} role="tab" aria-selected={on} aria-label={it.name} onClick={() => setI(n)} className="relative w-12 sm:w-14">
              <img
                src={it.photo}
                alt=""
                className={cn(
                  "aspect-square w-full rounded-[10px] object-cover transition-[opacity,filter] duration-500",
                  on ? "opacity-100" : "opacity-45 grayscale",
                )}
              />
              <span className="absolute -bottom-3 left-0 h-[2px] w-full overflow-hidden rounded-full bg-black/10">
                {on && (
                  <motion.span
                    key={\`\${i}-\${auto}\`}
                    className="block h-full origin-left bg-black"
                    initial={{ scaleX: auto ? 0 : 1 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: auto ? interval / 1000 : 0, ease: "linear" }}
                  />
                )}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )

  return (
    <div
      ref={root}
      onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      className={cn("w-full rounded-[12px] border border-black/[0.08] bg-white", className)}
      style={{ padding: pad }}
    >
      {wide ? (
        <div className="grid" style={{ gridTemplateColumns: \`minmax(0,1fr) \${portraitW}px\`, gap }}>
          <div className="flex min-w-0 flex-col justify-between gap-10">
            {quote}
            {statAndTabs}
          </div>
          <div className="flex flex-col gap-4">
            <div style={{ aspectRatio: "4 / 5" }}>{portrait}</div>
            {nameRole}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-4">
            <div className="size-16 shrink-0">{portrait}</div>
            {nameRole}
          </div>
          {quote}
          {statAndTabs}
        </div>
      )}
    </div>
  )
}

export default TestimonialReel
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
