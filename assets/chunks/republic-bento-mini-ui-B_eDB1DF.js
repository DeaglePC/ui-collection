const e=[{path:"components/bento-mini-ui.tsx",language:"tsx",content:`/**
 * Republic UI · bento-mini-ui
 * MIT License · Copyright (c) 2026 Republic Marketing
 * https://www.republicmarketing.co.uk/ui/bento-mini-ui
 * https://github.com/rm-sjent/republic-ui
 */
"use client"

import * as React from "react"
import { motion, useInView } from "motion/react"
import { Check } from "lucide-react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const ease = [0.42, 0, 0, 1] as const

function Card({ title, body, children }: { title: string; body: string; children: (on: boolean) => React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const on = useInView(ref, { once: true, amount: 0.6 })
  return (
    <div ref={ref} className="flex flex-col overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#111c33]">
      <div className="relative flex h-[260px] items-center justify-center overflow-hidden px-6">{children(on)}</div>
      <div className="px-7 pb-7">
        <h3 className="font-serif text-[24px] font-light leading-[1.2] text-white">{title}</h3>
        <p className="mt-2 max-w-[44ch] text-[15px] leading-relaxed text-white/55">{body}</p>
      </div>
    </div>
  )
}

/* 1. overlapping client chips */
function ChipsVisual({ on, items, highlight }: { on: boolean; items: string[]; highlight: string }) {
  const spots = [
    { x: -150, y: 0 },
    { x: 0, y: -52 },
    { x: 140, y: 30 },
  ]
  return (
    <div className="relative h-[180px] w-full">
      {items.slice(0, 3).map((t, i) => (
        <motion.div
          key={t}
          className="absolute left-1/2 top-1/2 w-[190px] rounded-[8px] border border-white/10 bg-[#1a2846] p-3"
          style={{ marginLeft: -95, marginTop: -30 }}
          initial={{ opacity: 0, x: spots[i].x, y: spots[i].y + 30 }}
          animate={on ? { opacity: 1, x: spots[i].x, y: spots[i].y } : {}}
          transition={{ duration: 0.9, ease, delay: 0.1 + i * 0.1 }}
        >
          <p className="text-[13px] text-white/85">{t}</p>
          <span className="mt-2 block h-1.5 w-3/4 rounded-full bg-white/10" />
          <span className="mt-1.5 block h-1.5 w-1/2 rounded-full bg-white/10" />
        </motion.div>
      ))}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <motion.span
          className="rounded-[6px] bg-[#f2b24c] px-2.5 py-1 text-[12px] text-[#0b1424]"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={on ? { opacity: 1, scale: [0.6, 1.12, 1] } : {}}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          {highlight}
        </motion.span>
      </div>
    </div>
  )
}

/* 2. person card */
function PersonVisual({ on, name, role, photo, line }: { on: boolean; name: string; role: string; photo: string; line: string }) {
  return (
    <motion.div
      className="w-[280px] rounded-[10px] border border-white/10 bg-[#1a2846] p-4"
      initial={{ opacity: 0, y: 40 }}
      animate={on ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease }}
    >
      <div className="flex items-center gap-3">
        <img src={photo} alt="" className="size-11 rounded-[8px] object-cover" />
        <div>
          <p className="text-[14px] text-white">{name}</p>
          <p className="text-[12px] text-white/50">{role}</p>
        </div>
      </div>
      <motion.div
        className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3 text-[13px] text-white/80"
        initial={{ opacity: 0 }}
        animate={on ? { opacity: 1 } : {}}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Check className="size-3.5 text-[#f2b24c]" strokeWidth={2.4} />
        {line}
      </motion.div>
    </motion.div>
  )
}

/* 3. list where the wrong options get struck out */
function StrikeVisual({ on, title, keep, strike }: { on: boolean; title: string; keep: string; strike: string[] }) {
  return (
    <motion.div
      className="w-[300px] rounded-[10px] border border-white/10 bg-[#1a2846] p-4"
      initial={{ opacity: 0, y: 40 }}
      animate={on ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease }}
    >
      <p className="pb-2 text-[12px] text-white/50">{title}</p>
      <p className="flex items-center gap-2 border-t border-white/10 py-2.5 text-[14px] text-white">
        <Check className="size-3.5 text-[#f2b24c]" strokeWidth={2.4} />
        {keep}
      </p>
      {strike.map((s, i) => (
        <p key={s} className="relative w-fit border-t border-white/10 py-2.5 pl-[22px] text-[14px] text-white/35">
          {s}
          <motion.span
            className="absolute left-[22px] right-0 top-1/2 h-px origin-left bg-white/45"
            initial={{ scaleX: 0 }}
            animate={on ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.8 + i * 0.25 }}
          />
        </p>
      ))}
    </motion.div>
  )
}

/* 4. review list with a flag that appears and resolves */
function ReviewVisual({ on, title, rows, flag }: { on: boolean; title: string; rows: string[]; flag: string }) {
  const [resolved, setResolved] = React.useState(false)
  React.useEffect(() => {
    if (!on) return
    const t = setTimeout(() => setResolved(true), 2200)
    return () => clearTimeout(t)
  }, [on])
  return (
    <motion.div
      className="w-[320px] rounded-[10px] border border-white/10 bg-[#1a2846] p-4"
      initial={{ opacity: 0, y: 40 }}
      animate={on ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease }}
    >
      <p className="pb-2 text-[12px] text-white/50">{title}</p>
      {rows.map((r, i) => (
        <div key={r} className="flex items-center justify-between gap-3 border-t border-white/10 py-2.5 text-[14px] text-white/85">
          <span className="flex items-center gap-2">
            {i === 1 && !resolved ? (
              <span className="size-3.5 rounded-full border border-[#f2b24c]" />
            ) : (
              <Check className="size-3.5 text-[#f2b24c]" strokeWidth={2.4} />
            )}
            {r}
          </span>
          {i === 1 && (
            <motion.span
              className={cn("rounded-[4px] px-1.5 py-0.5 text-[11px]", resolved ? "bg-white/10 text-white/70" : "bg-[#f2b24c] text-[#0b1424]")}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={on ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.4 }}
            >
              {resolved ? "Resolved" : flag}
            </motion.span>
          )}
        </div>
      ))}
    </motion.div>
  )
}

/* ---------- block ---------- */

export interface BentoMiniUIProps {
  title?: string
  person?: { name: string; role: string; photo: string }
  className?: string
}

export function BentoMiniUI({
  title = "A small team with a partner on every file",
  person = { name: "Amara Okoye", role: "Founding partner", photo: "" },
  className,
}: BentoMiniUIProps) {
  return (
    <section className={cn("w-full bg-[#0b1424] px-6 py-20 md:px-10 md:py-28", className)}>
      <div className="mx-auto max-w-[1312px]">
        <h2 className="max-w-[16ch] font-serif text-[clamp(34px,3.8vw,54px)] font-light leading-[1.08] tracking-[-0.015em] text-white">
          {title}
        </h2>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <Card title="Built for complex lives" body="Founders, families and growing teams, often all at once. We keep the whole picture in one place.">
            {(on) => <ChipsVisual on={on} items={["Private clients", "Founders", "Growing teams"]} highlight="One adviser" />}
          </Card>
          <Card title="You always know who to call" body="The partner who takes your first call stays on your file until the very last signature.">
            {(on) => <PersonVisual on={on} {...person} line="Your file, start to finish" />}
          </Card>
          <Card title="Senior people on the detail" body="No hand-offs to juniors you have never met. The people you meet are the people doing the work.">
            {(on) => <StrikeVisual on={on} title="Who handles your file" keep="A senior partner" strike={["A junior associate", "A call centre"]} />}
          </Card>
          <Card title="Problems caught early" body="Small details become expensive later. We check everything before anything is filed.">
            {(on) => <ReviewVisual on={on} title="Before we file" rows={["Documents checked", "Dates and history", "Final sign-off"]} flag="Needs a look" />}
          </Card>
        </div>
      </div>
    </section>
  )
}

export default BentoMiniUI
`}],n="",t={files:e,prompt:n};export{t as default,e as files,n as prompt};
