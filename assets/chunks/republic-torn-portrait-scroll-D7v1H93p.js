const n=[{path:"components/torn-portrait-scroll.tsx",language:"tsx",content:`/**
 * Republic UI · torn-portrait-scroll
 * MIT License · Copyright (c) 2026 Republic Marketing
 * https://www.republicmarketing.co.uk/ui/torn-portrait-scroll
 * https://github.com/rm-sjent/republic-ui
 */
"use client"

import * as React from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from "motion/react"
import { Check } from "lucide-react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** a jagged edge as a CSS polygon: top and bottom edges torn, sides straight */
function tornPolygon(seed: number, top = true, bottom = true) {
  let s = seed
  const rand = () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
  const pts: string[] = []
  const steps = 26
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * 100
    const y = top ? 2.2 + rand() * 3.2 : 0
    pts.push(\`\${x.toFixed(2)}% \${y.toFixed(2)}%\`)
  }
  for (let i = steps; i >= 0; i--) {
    const x = (i / steps) * 100
    const y = bottom ? 97.8 - rand() * 3.2 : 100
    pts.push(\`\${x.toFixed(2)}% \${y.toFixed(2)}%\`)
  }
  return \`polygon(\${pts.join(",")})\`
}

export interface TornItem {
  title: string
  body: string
  photo: string
  /** colour of the paper behind the photo */
  paper: string
  card: { title: string; rows: string[] }
}

export interface TornPortraitScrollProps {
  items: TornItem[]
  className?: string
}

const ease = [0.42, 0, 0, 1] as const

export function TornPortraitScroll({ items, className }: TornPortraitScrollProps) {
  const ref = React.useRef<HTMLElement>(null)
  const [i, setI] = React.useState(0)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setI(Math.min(items.length - 1, Math.max(0, Math.floor(v * items.length * 0.999))))
  })

  const clips = React.useMemo(() => items.map((_, k) => tornPolygon(17 + k * 31)), [items])
  const paperClips = React.useMemo(() => items.map((_, k) => tornPolygon(101 + k * 13, true, false)), [items])
  const it = items[i]

  const jump = (k: number) => {
    const el = ref.current
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY
    const span = el.offsetHeight - window.innerHeight
    window.scrollTo({ top: top + (span * (k + 0.5)) / items.length, behavior: reduce ? "auto" : "smooth" })
  }

  return (
    <section ref={ref} className={cn("relative w-full bg-white", className)} style={{ height: \`\${items.length * 70 + 30}vh\` }}>
      <div className="sticky top-0 flex h-svh items-center px-6 md:px-10">
        <div className="mx-auto grid w-full max-w-[1312px] items-center gap-10 md:grid-cols-[minmax(0,4fr)_minmax(0,4fr)_minmax(0,3fr)] md:gap-14">
          {/* list */}
          <ol className="hidden flex-col gap-6 md:flex">
            {items.map((x, k) => (
              <li key={x.title}>
                <button
                  type="button"
                  onClick={() => jump(k)}
                  className={cn(
                    "text-left font-serif text-[clamp(26px,2.4vw,36px)] font-light leading-[1.12] tracking-[-0.01em] transition-colors duration-500",
                    k === i ? "text-[#0b1424]" : "text-black/20",
                  )}
                >
                  {x.title}
                </button>
              </li>
            ))}
          </ol>

          {/* collage */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px]">
            <AnimatePresence initial={false}>
              <motion.div
                key={\`paper-\${i}\`}
                className="absolute bottom-[-6%] left-[10%] right-[-12%] top-[22%]"
                style={{ background: it.paper, clipPath: paperClips[i], rotate: 2.5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease }}
              />
            </AnimatePresence>
            <AnimatePresence initial={false}>
              <motion.div
                key={\`photo-\${i}\`}
                className="absolute inset-0"
                initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.3 } }}
                transition={{ duration: 0.9, ease }}
              >
                <img src={it.photo} alt="" className="h-full w-full object-cover" style={{ clipPath: clips[i] }} />
              </motion.div>
            </AnimatePresence>

            {/* caption card */}
            <div className="absolute -bottom-8 left-[-8%] right-[8%] z-10 md:left-[-14%]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={\`card-\${i}\`}
                  className="rounded-[10px] border border-black/[0.08] bg-white p-4"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease, delay: 0.35 } }}
                  exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
                >
                  <p className="font-serif text-[17px] text-[#0b1424]">{it.card.title}</p>
                  <ul className="mt-2">
                    {it.card.rows.map((r, k) => (
                      <motion.li
                        key={r}
                        className="flex items-center gap-2 border-t border-black/[0.07] py-2 text-[13px] text-black/70"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease, delay: 0.55 + k * 0.1 }}
                      >
                        <Check className="size-3.5 text-[#1d3a8a]" strokeWidth={2.4} />
                        {r}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* body */}
          <div className="min-h-[140px] pt-10 md:pt-0">
            <p className="mb-3 font-serif text-[24px] font-light text-[#0b1424] md:hidden">{it.title}</p>
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={i}
                className="max-w-[34ch] text-[16px] leading-relaxed text-black/65"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease, delay: 0.2 } }}
                exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
              >
                {it.body}
              </motion.p>
            </AnimatePresence>
            <div className="mt-6 flex gap-1.5" aria-hidden>
              {items.map((_, k) => (
                <span key={k} className="relative h-[2px] w-8 overflow-hidden rounded-full bg-black/10">
                  <motion.span className="absolute inset-0 origin-left bg-[#0b1424]" initial={false} animate={{ scaleX: k <= i ? 1 : 0 }} transition={{ duration: 0.6, ease }} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TornPortraitScroll
`}],t="",e={files:n,prompt:t};export{e as default,n as files,t as prompt};
