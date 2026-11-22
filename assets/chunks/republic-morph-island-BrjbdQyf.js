const n=[{path:"components/morph-island.tsx",language:"tsx",content:`/**
 * Republic UI · morph-island
 * MIT License · Copyright (c) 2026 Republic Marketing
 * https://www.republicmarketing.co.uk/ui/morph-island
 * https://github.com/rm-sjent/republic-ui
 */
"use client"

import { motion, AnimatePresence, MotionConfig } from "motion/react"
import { Check, ArrowUpRight } from "lucide-react"
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
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
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

function Odometer({ value, size = 15 }: { value: number; size?: number }) {
  const lh = Math.round(size * 1.2)
  const chars = String(value).padStart(3, " ").split("")
  return (
    <span className="inline-flex tabular-nums" style={{ fontSize: size, height: lh }} role="img" aria-label={\`\${value}%\`}>
      <span aria-hidden className="inline-flex select-none">
        {chars.map((c, i) =>
          c === " " ? (
            <span key={chars.length - i} className="inline-block w-[0.6em]" />
          ) : (
            <Reel key={chars.length - i} digit={Number(c)} lh={lh} />
          ),
        )}
        <span style={{ lineHeight: \`\${lh}px\` }}>%</span>
      </span>
    </span>
  )
}

/* ---------- island ---------- */

export type IslandState = "idle" | "uploading" | "done" | "preview"

export interface IslandFile {
  name: string
  src: string
  album?: string
}

export interface MorphIslandProps {
  state: IslandState
  files: IslandFile[]
  /** 0-100, used while uploading */
  progress?: number
  /** index of the file being uploaded or previewed */
  current?: number
  onOpen?: () => void
  className?: string
}

const SIZES: Record<IslandState, { width: number; height: number; radius: number }> = {
  idle: { width: 188, height: 40, radius: 20 },
  uploading: { width: 380, height: 68, radius: 22 },
  done: { width: 300, height: 48, radius: 24 },
  preview: { width: 380, height: 356, radius: 28 },
}

const content = {
  initial: { opacity: 0, filter: "blur(6px)", scale: 0.96 },
  animate: { opacity: 1, filter: "blur(0px)", scale: 1, transition: { duration: 0.35, delay: 0.12 } },
  exit: { opacity: 0, filter: "blur(6px)", scale: 0.96, transition: { duration: 0.15 } },
}

export function MorphIsland({ state, files, progress = 0, current = 0, onOpen, className }: MorphIslandProps) {
  const f = files[current] ?? files[0]
  const s = SIZES[state]

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0.22, duration: 0.6 }}>
      <motion.div
        role="status"
        aria-live="polite"
        className={cn("relative mx-auto max-w-[calc(100vw-48px)] overflow-hidden bg-black text-white", className)}
        animate={{ width: s.width, height: s.height, borderRadius: s.radius }}
        initial={false}
      >
        <AnimatePresence initial={false}>
          {state === "idle" && (
            <motion.div key="idle" {...content} className="absolute inset-0 flex items-center justify-between pl-1.5 pr-4">
              <div className="flex -space-x-2">
                {files.slice(0, 3).map((x) => (
                  <img key={x.src} src={x.src} alt="" className="size-7 rounded-full border-2 border-black object-cover" />
                ))}
              </div>
              <span className="text-[14px] text-white/90">{files.length} photos ready</span>
            </motion.div>
          )}

          {state === "uploading" && (
            <motion.div key="up" {...content} className="absolute inset-0 flex items-center gap-3 px-3">
              <img src={f.src} alt="" className="size-11 shrink-0 rounded-[12px] object-cover" />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="truncate text-[14px] text-white/90">Uploading {f.name}</span>
                  <span className="shrink-0 text-white/90">
                    <Odometer value={Math.round(progress)} size={14} />
                  </span>
                </div>
                <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-white/15">
                  <motion.div
                    className="h-full origin-left rounded-full bg-white"
                    animate={{ scaleX: progress / 100 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {state === "done" && (
            <motion.div key="done" {...content} className="absolute inset-0 flex items-center gap-3 pl-2 pr-5">
              <motion.span
                className="grid size-8 place-items-center rounded-full bg-[#3ecf6e] text-black"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1], transition: { duration: 0.5, delay: 0.15 } }}
              >
                <Check className="size-4" strokeWidth={2.4} />
              </motion.span>
              <span className="truncate text-[14px] text-white/90">
                Saved to {f.album ?? "your library"}
              </span>
            </motion.div>
          )}

          {state === "preview" && (
            <motion.div key="prev" {...content} className="absolute inset-0 flex flex-col p-2.5">
              <img src={f.src} alt={f.name} className="min-h-0 w-full flex-1 rounded-[20px] object-cover" />
              <div className="flex items-center justify-between gap-3 px-2.5 pb-1 pt-3">
                <div className="min-w-0">
                  <p className="truncate text-[15px] text-white">{f.name}</p>
                  <p className="truncate text-[13px] text-white/55">{f.album ?? "Library"}</p>
                </div>
                <button
                  type="button"
                  onClick={onOpen}
                  className="flex shrink-0 items-center gap-1 rounded-full bg-white px-3.5 py-2 text-[14px] text-black"
                >
                  Open <ArrowUpRight className="size-4" strokeWidth={1.8} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  )
}

export default MorphIsland
`}],e="",t={files:n,prompt:e};export{t as default,n as files,e as prompt};
