const n=[{path:"components/fan-gallery.tsx",language:"tsx",content:`/**
 * Republic UI · fan-gallery
 * MIT License · Copyright (c) 2026 Republic Marketing
 * https://www.republicmarketing.co.uk/ui/fan-gallery
 * https://github.com/rm-sjent/republic-ui
 */
"use client"

import * as React from "react"
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
  animate,
  type MotionValue,
} from "motion/react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface FanCard {
  src: string
  label: string
  tags: string[]
}

export interface FanGalleryProps {
  title?: React.ReactNode
  cards: FanCard[]
  /** ms between automatic moves, 0 to stop */
  interval?: number
  className?: string
}

const ease = [0.42, 0, 0, 1] as const

/** signed distance from the centre, wrapped so the loop has no seam */
function wrapDist(i: number, pos: number, n: number) {
  let d = (((i - pos) % n) + n) % n
  if (d > n / 2) d -= n
  return d
}

function Card({
  card,
  index,
  n,
  pos,
  step,
  radius,
}: {
  card: FanCard
  index: number
  n: number
  pos: MotionValue<number>
  step: number
  radius: number
}) {
  const rotate = useTransform(pos, (p) => wrapDist(index, p, n) * step)
  const opacity = useTransform(pos, (p) => {
    const a = Math.abs(wrapDist(index, p, n))
    return a <= 2 ? 1 : Math.max(0, 1 - (a - 2) * 2)
  })
  const zIndex = useTransform(pos, (p) => Math.round(20 - Math.abs(wrapDist(index, p, n)) * 4))

  return (
    <motion.div
      className="absolute left-1/2 top-0 h-[var(--ch)] w-[var(--cw)] -ml-[calc(var(--cw)/2)] overflow-hidden rounded-[12px] bg-[#eceae4]"
      style={{ rotate, opacity, zIndex, transformOrigin: \`50% \${radius}px\` }}
      data-fan-index={index}
    >
      <img src={card.src} alt={card.label} draggable={false} className="pointer-events-none h-full w-full select-none object-cover" />
    </motion.div>
  )
}

export function FanGallery({
  title = (
    <>
      Advice for founders,
      <br />
      families and teams
    </>
  ),
  cards,
  interval = 3600,
  className,
}: FanGalleryProps) {
  const n = cards.length
  const start = Math.floor(n / 2)
  const pos = useMotionValue(start)
  const [active, setActive] = React.useState(start)
  const [hold, setHold] = React.useState(false)
  const [tick, setTick] = React.useState(0)
  const dragging = React.useRef<{ x: number; p: number; moved: boolean } | null>(null)
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.4 })
  const reduce = useReducedMotion()

  // geometry sized from the viewport so the five visible cards always fit with a gap between them
  const [geo, setGeo] = React.useState({ cw: 225, ch: 291, step: 15, radius: 1100, h: 520 })
  React.useEffect(() => {
    const fit = () => {
      const vw = window.innerWidth
      if (vw < 640) {
        const radius = 800
        setGeo({ cw: 200, ch: 260, step: 19, radius, h: 320 })
        return
      }
      const avail = Math.min(vw, 1600) - 48
      const radius = Math.min(1250, Math.round(avail / 1.31))
      const cw = Math.round(radius * 0.205)
      const ch = Math.round(radius * 0.265)
      setGeo({ cw, ch, step: 15, radius, h: Math.round(ch * 0.87 + cw * 0.5 + radius * 0.134 + 24) })
    }
    fit()
    window.addEventListener("resize", fit)
    return () => window.removeEventListener("resize", fit)
  }, [])

  useMotionValueEvent(pos, "change", (p) => {
    const a = ((Math.round(p) % n) + n) % n
    setActive((prev) => (prev === a ? prev : a))
  })

  const target = React.useRef(start)
  const goTo = React.useCallback(
    (to: number) => {
      target.current = to
      animate(pos, to, { duration: 0.9, ease })
      setTick((t) => t + 1)
    },
    [pos],
  )
  const step = (d: number) => goTo(target.current + d)

  const pick = (i: number) => goTo(target.current + Math.round(wrapDist(i, target.current, n)))

  // autoplay; restarts after any interaction
  React.useEffect(() => {
    if (!interval || hold || !inView || reduce) return
    const t = setTimeout(() => goTo(target.current + 1), interval)
    return () => clearTimeout(t)
  }, [tick, active, hold, inView, interval, reduce, goTo, pos])

  // drag the whole fan
  const pxPerCard = geo.radius * Math.sin((geo.step * Math.PI) / 180)
  const onPointerDown = (e: React.PointerEvent) => {
    pos.stop()
    dragging.current = { x: e.clientX, p: pos.get(), moved: false }
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragging.current
    if (!d) return
    const dx = e.clientX - d.x
    if (Math.abs(dx) > 4) d.moved = true
    pos.set(d.p - dx / pxPerCard)
  }
  const onPointerUp = (e: React.PointerEvent) => {
    const d = dragging.current
    if (!d) return
    if (d.moved) {
      const dx = e.clientX - d.x
      // a short flick still moves one card
      let to = Math.round(pos.get())
      if (to === Math.round(d.p) && Math.abs(dx) > 30) to += dx < 0 ? 1 : -1
      goTo(to)
    } else {
      // a tap: bring the tapped card to the centre
      const hit = document
        .elementsFromPoint(e.clientX, e.clientY)
        .find((el) => el instanceof HTMLElement && el.dataset.fanIndex !== undefined) as HTMLElement | undefined
      if (hit) pick(Number(hit.dataset.fanIndex))
      else goTo(target.current)
    }
    dragging.current = null
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") step(1)
    if (e.key === "ArrowLeft") step(-1)
  }

  const style = { "--cw": \`\${geo.cw}px\`, "--ch": \`\${geo.ch}px\` } as React.CSSProperties

  return (
    <section ref={ref} className={cn("w-full overflow-hidden bg-white py-20 md:py-28", className)}>
      <h2 className="mx-auto max-w-[18ch] px-6 text-center font-serif text-[clamp(36px,4.4vw,60px)] font-light leading-[1.08] tracking-[-0.02em] text-[#0b1424]">
        {title}
      </h2>

      <div
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Gallery"
        onKeyDown={onKeyDown}
        onPointerEnter={(e) => e.pointerType === "mouse" && setHold(true)}
        onPointerLeave={() => setHold(false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="relative mx-auto mt-16 w-full max-w-[1600px] cursor-grab touch-pan-y select-none outline-none active:cursor-grabbing md:mt-20"
        style={{ ...style, height: geo.h }}
      >
        {cards.map((c, i) => (
          <Card key={c.src} card={c} index={i} n={n} pos={pos} step={geo.step} radius={geo.radius} />
        ))}
      </div>

      {/* caption row: tags for the centre card, arrows either side */}
      <div className="mx-auto mt-8 flex max-w-[560px] items-center justify-between gap-4 px-6">
        <button type="button" aria-label="Previous" onClick={() => step(-1)} className="grid size-10 shrink-0 place-items-center rounded-[10px] border border-black/12 bg-white text-[#0b1424]">
          <ArrowLeft className="size-4" strokeWidth={1.6} />
        </button>
        <div className="flex min-h-[64px] flex-col items-center justify-center gap-2 text-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              <p className="font-serif text-[22px] font-light text-[#0b1424]">{cards[active].label}</p>
              <div className="flex flex-wrap justify-center gap-1.5">
                {cards[active].tags.map((t) => (
                  <span key={t} className="rounded-[6px] border border-black/10 bg-[#f6f4ef] px-2.5 py-1 text-[13px] text-black/70">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <button type="button" aria-label="Next" onClick={() => step(1)} className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-[#0b1424] text-white">
          <ArrowRight className="size-4" strokeWidth={1.6} />
        </button>
      </div>
    </section>
  )
}

export default FanGallery
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
