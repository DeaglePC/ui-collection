const n=[{path:"components/photo-deck.tsx",language:"tsx",content:`/**
 * Republic UI · photo-deck
 * MIT License · Copyright (c) 2026 Republic Marketing
 * https://www.republicmarketing.co.uk/ui/photo-deck
 * https://github.com/rm-sjent/republic-ui
 */
"use client"

import * as React from "react"
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
  type PanInfo,
} from "motion/react"
import { ArrowLeft, ArrowRight } from "lucide-react"
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
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
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

function Odometer({ value, size = 15, pad = 2 }: { value: number; size?: number; pad?: number }) {
  const lh = Math.round(size * 1.2)
  const chars = String(value).padStart(pad, "0").split("")
  return (
    <span className="inline-flex tabular-nums" style={{ fontSize: size, height: lh }} role="img" aria-label={String(value)}>
      <span aria-hidden className="inline-flex select-none">
        {chars.map((c, i) => (
          <Reel key={chars.length - i} digit={Number(c)} lh={lh} />
        ))}
      </span>
    </span>
  )
}

/* ---------- deck ---------- */

export interface DeckPhoto {
  src: string
  title: string
  place: string
  note?: string
}

export interface PhotoDeckProps {
  photos: DeckPhoto[]
  heading?: string
  className?: string
}

const tilt = [-2.5, 3, -4, 2]

export function PhotoDeck({ photos, heading = "Places worth the detour", className }: PhotoDeckProps) {
  const [order, setOrder] = React.useState(() => photos.map((_, i) => i))
  const [index, setIndex] = React.useState(0)
  const [leaving, setLeaving] = React.useState<{ id: number; dir: 1 | -1 } | null>(null)
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-300, 0, 300], [-14, 0, 14])
  const busy = React.useRef(false)
  const entering = React.useRef(false)

  const next = React.useCallback(
    (dir: 1 | -1 = 1) => {
      if (busy.current) return
      busy.current = true
      const top = order[0]
      setLeaving({ id: top, dir })
      animate(x, dir * 520, { duration: 0.5, ease: [0.42, 0, 1, 1] }).then(() => {
        setOrder((o) => [...o.slice(1), o[0]])
        setIndex((i) => (i + 1) % photos.length)
        x.set(0)
        setLeaving(null)
        busy.current = false
      })
    },
    [order, photos.length, x],
  )

  const prev = React.useCallback(() => {
    if (busy.current) return
    busy.current = true
    entering.current = true
    setLeaving({ id: order[order.length - 1], dir: -1 })
    setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)])
    setIndex((i) => (i - 1 + photos.length) % photos.length)
  }, [order, photos.length])

  // the previous card flies back in from the left, the reverse of next
  React.useLayoutEffect(() => {
    if (!entering.current) return
    entering.current = false
    x.set(-520)
    animate(x, 0, { duration: 0.65, ease: [0.16, 1, 0.3, 1] }).then(() => {
      setLeaving(null)
      busy.current = false
    })
  }, [order, x])

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const { x: dx } = info.offset
    const v = info.velocity.x
    const flick = Math.abs(v) > 600 && Math.abs(dx) > 40 && Math.sign(v) === Math.sign(dx)
    if (Math.abs(dx) > 120 || flick) next(dx > 0 ? 1 : -1)
    else animate(x, 0, { type: "spring", stiffness: 420, damping: 32 })
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault()
      next(1)
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      prev()
    }
  }

  const current = photos[order[0]]
  const visible = order.slice(0, 4)

  return (
    <div
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={heading}
      onKeyDown={onKeyDown}
      className={cn(
        "grid w-full grid-cols-1 items-center gap-10 rounded-[12px] border border-black/[0.08] bg-[#f6f6f4] p-6 outline-none focus-visible:ring-2 focus-visible:ring-black/15 md:grid-cols-[1fr_1fr] md:px-14 md:py-10",
        className,
      )}
    >
      {/* copy column */}
      <div className="flex h-full flex-col justify-between gap-10 md:py-4">
        <p className="text-[15px] text-black/55">{heading}</p>

        <div className="min-h-[230px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={order[0]}
              initial="hidden"
              animate="show"
              exit="exit"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } }, exit: {} }}
            >
              <div className="overflow-hidden pb-1">
                <motion.h3
                  className="text-[clamp(32px,3.4vw,48px)] font-normal leading-[1.05] tracking-[-0.03em] text-black"
                  variants={{
                    hidden: { y: "100%" },
                    show: { y: "0%", transition: { duration: 0.7, ease: [0.42, 0, 0, 1] } },
                    exit: { y: "-100%", transition: { duration: 0.3, ease: [0.42, 0, 1, 1] } },
                  }}
                >
                  {current.title}
                </motion.h3>
              </div>
              <motion.p
                className="mt-4 text-[17px] text-black/80"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0, 1] } },
                  exit: { opacity: 0, transition: { duration: 0.2 } },
                }}
              >
                {current.place}
              </motion.p>
              {current.note && (
                <motion.p
                  className="mt-3 max-w-[38ch] text-[15px] leading-relaxed text-black/55"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0, 1] } },
                    exit: { opacity: 0, transition: { duration: 0.2 } },
                  }}
                >
                  {current.note}
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-1.5 text-[15px] text-black">
            <Odometer value={index + 1} />
            <span className="text-black/35">/</span>
            <span className="tabular-nums text-black/35">{String(photos.length).padStart(2, "0")}</span>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="grid size-11 place-items-center rounded-[10px] border border-black/10 bg-white text-black"
            >
              <ArrowLeft className="size-[18px]" strokeWidth={1.6} />
            </button>
            <button
              type="button"
              onClick={() => next(1)}
              aria-label="Next photo"
              className="grid size-11 place-items-center rounded-[10px] bg-black text-white"
            >
              <ArrowRight className="size-[18px]" strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </div>

      {/* deck */}
      <div className="relative mx-auto mt-4 aspect-[4/5] w-full max-w-[340px] select-none md:mt-6">
        {visible
          .slice()
          .reverse()
          .map((id) => {
            const depth = visible.indexOf(id)
            const isTop = depth === 0
            const p = photos[id]
            return (
              <motion.div
                key={id}
                className={cn("absolute inset-0", !isTop && "pointer-events-none")}
                style={{ zIndex: 10 - depth }}
                initial={false}
                animate={{
                  scale: 1 - depth * 0.045,
                  y: depth * -18,
                  rotate: isTop ? 0 : tilt[depth % tilt.length],
                  opacity: depth > 2 ? 0 : 1,
                }}
                transition={{ duration: 0.7, ease: [0.42, 0, 0, 1] }}
              >
                <motion.div
                  className={cn(
                    "h-full w-full overflow-hidden rounded-[12px] border-[6px] border-white bg-white",
                    isTop && "cursor-grab touch-pan-y active:cursor-grabbing",
                  )}
                  style={isTop ? { x, rotate } : undefined}
                  drag={isTop && !leaving ? "x" : false}
                  dragMomentum={false}
                  onDragEnd={isTop ? onDragEnd : undefined}
                >
                  <img src={p.src} alt={p.title} draggable={false} className="h-full w-full rounded-[7px] object-cover" />
                </motion.div>
              </motion.div>
            )
          })}
      </div>
    </div>
  )
}

export default PhotoDeck
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
