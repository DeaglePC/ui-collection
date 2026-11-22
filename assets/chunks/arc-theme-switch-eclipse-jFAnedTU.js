const e=[{path:"registry/components/theme-switch/theme-switch.tsx",language:"tsx",content:`/**
 * Arc UI · theme-switch-eclipse
 * MIT License · Copyright (c) 2026 Elia Kuratli
 * https://uiarc.dev/components/theme-switch-eclipse
 * https://github.com/kuratlielia/arc-library
 */
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { motionTokens } from "../lib/motion-tokens";
import { Button } from "../button/button";
import styles from "./theme-switch.module.css";

export type ThemeSwitchVariant = "reveal" | "eclipse" | "split" | "rise";
export type Theme = "light" | "dark";

export interface ThemeSwitchProps {
  theme: Theme;
  variant?: ThemeSwitchVariant;
  onThemeChange: (next: Theme, variant: ThemeSwitchVariant, trigger: HTMLElement) => void;
  label?: string;
  iconOnly?: boolean;
}

/** Rotation and scale ride the spring; opacity and blur tween so the blur never overshoots below zero. */
const iconSpring = { ...motionTokens.spring.snappy, opacity: { duration: motionTokens.duration.fast, ease: [...motionTokens.ease.enter] }, filter: { duration: motionTokens.duration.fast, ease: [...motionTokens.ease.enter] } } as const;
const iconExit = { duration: motionTokens.duration.fast, ease: [...motionTokens.ease.standard] } as const;
const blur = \`blur(\${motionTokens.blur.subtle}px)\`;

/** A stored preference usually reaches the theme prop just after hydration. That correction swaps the icon in place;
 *  only changes after the first painted frames animate, so a page that loads in dark mode never spins its switches. */
function useSettled() {
  const [settled, setSettled] = useState(false);
  useEffect(() => {
    let second = 0;
    const first = requestAnimationFrame(() => { second = requestAnimationFrame(() => setSettled(true)); });
    return () => { cancelAnimationFrame(first); cancelAnimationFrame(second); };
  }, []);
  return settled;
}

/** Both icons turn the same way (clockwise into dark, back out of it), so the swap reads as one rotation rather than two fades. */
function ThemeIcon({ theme, reduced, settled }: { theme: Theme; reduced: boolean; settled: boolean }) {
  const Icon = theme === "light" ? Sun : Moon;
  const angle = theme === "light" ? 30 : -30;
  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.span
        key={theme}
        className={styles.icon}
        initial={!settled ? false : reduced ? { opacity: 0 } : { opacity: 0, scale: .7, rotate: angle, filter: blur }}
        animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
        exit={!settled ? { opacity: 0, transition: { duration: 0 } } : reduced ? { opacity: 0, transition: { duration: motionTokens.duration.instant } } : { opacity: 0, scale: .7, rotate: angle, filter: blur, transition: iconExit }}
        transition={reduced ? { duration: motionTokens.duration.instant } : iconSpring}
        aria-hidden="true"
      >
        <Icon size={16} strokeWidth={1.75} />
      </motion.span>
    </AnimatePresence>
  );
}

export function ThemeSwitch({ theme, variant = "reveal", onThemeChange, label, iconOnly = false }: ThemeSwitchProps) {
  const reduced = useReducedMotion() ?? false;
  const settled = useSettled();
  const next = theme === "light" ? "dark" : "light";
  const classes = [styles.themeSwitch, styles[variant], iconOnly ? styles.iconOnly : "", settled ? styles.settled : ""].join(" ");

  return (
    <Button
      type="button"
      size="sm"
      variant="secondary"
      className={classes}
      data-theme={theme}
      aria-label={label ?? \`Switch to \${next} mode\`}
      aria-pressed={theme === "dark"}
      onClick={event => onThemeChange(next, variant, event.currentTarget)}
    >
      <span className={styles.iconWrap}><ThemeIcon theme={theme} reduced={reduced} settled={settled} /></span>
      {!iconOnly && <span className={styles.label}>Switch theme</span>}
    </Button>
  );
}

export default ThemeSwitch;
`},{path:"registry/components/theme-switch/theme-switch.module.css",language:"css",content:`/* Each transition uses the same library Button, which owns the press scale; this file only animates the icon in place. */
.themeSwitch {
  position: relative;
  width: auto;
  padding-inline: var(--space-3);
}
.iconOnly { width: 38px; min-width: 38px; height: 38px; min-height: 38px; border-radius: 12px; padding: 0; }
@media (hover: hover) and (pointer: fine) {
  .themeSwitch:hover:not(:disabled) { border-color: var(--border-strong); }
  .iconOnly:hover:not(:disabled) { background: var(--surface-muted); box-shadow: none; }
}
.iconWrap {
  position: relative;
  display: inline-grid;
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  place-items: center;
}
/* The nudge only eases once the switch has settled, so a theme that arrives during hydration lands without motion. */
.settled .iconWrap { transition: transform var(--duration-spring) var(--ease-spring); }
.icon { position: absolute; display: grid; width: 18px; height: 18px; place-items: center; }
.label { white-space: nowrap; }
/* Each variant nudges the icon the way its page transition travels, and eases back when the theme returns. */
.themeSwitch.reveal[data-theme="dark"] .iconWrap { transform: scale(1.08); }
.themeSwitch.eclipse[data-theme="dark"] .iconWrap { transform: translateX(-2px); }
.themeSwitch.split[data-theme="dark"] .iconWrap { transform: translateX(1px); }
.themeSwitch.rise[data-theme="dark"] .iconWrap { transform: translateY(-2px); }
@media (prefers-reduced-motion: reduce) {
  .settled .iconWrap { transition: none; }
}
`}],t="",n={files:e,prompt:t};export{n as default,e as files,t as prompt};
