const n=[{path:"registry/blocks/logo-marquee/logo-marquee.module.css",language:"css",content:`.section {
  container: logos / inline-size;
  width: 100%;
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--radius-surface);
  background: var(--surface);
  color: var(--foreground);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-body);
  line-height: var(--leading-body);
}

.intro {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.72fr);
  align-items: end;
  gap: 48px;
  padding: 40px 40px 36px;
}

.intro h2 {
  max-width: 540px;
  margin: 0;
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 400;
  line-height: var(--leading-display);
  text-wrap: balance;
  letter-spacing: var(--tracking-display);
}

.intro p {
  max-width: 36ch;
  margin: 0 0 3px;
  color: var(--text-secondary);
  font-size: var(--text-base);
  line-height: var(--leading-body);
  text-wrap: pretty;
}

.marquee {
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  padding-block: 32px;
  mask-image: linear-gradient(to right, transparent, #000 7%, #000 93%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, #000 7%, #000 93%, transparent);
}

.track {
  display: flex;
  width: max-content;
  animation: travel 39s linear infinite;
  will-change: transform;
}

.track.paused {
  animation-play-state: paused;
}

/* Hovering the row holds it still, so a logo can be read. */
@media (hover: hover) and (pointer: fine) {
  .marquee:hover .track { animation-play-state: paused; }
}

.brandList {
  display: flex;
  flex: none;
  align-items: center;
  gap: 56px;
  margin: 0;
  padding: 0 56px 0 0;
  list-style: none;
}

.brand {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: 10px;
  color: var(--text-secondary);
  white-space: nowrap;
}

.brandMark {
  display: block;
  width: 22px;
  height: 22px;
  flex: none;
  background: currentColor;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
}

img.brandMark { background: none; object-fit: contain; }

/* In color tone the marks carry the brand color and the names read at full contrast; black and white marks follow the text. */
.section[data-tone="color"] .brand { color: var(--foreground); }

.brandName {
  font-size: var(--text-lg);
  font-weight: 500;
  letter-spacing: var(--tracking-body);
}

.footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  padding: 10px 16px;
}

.motionButton { color: var(--text-secondary); }
.motionStatus {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

@keyframes travel {
  to { transform: translateX(-50%); }
}

@container logos (max-width: 639px) {
  .intro {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 28px 20px 24px;
  }

  .intro h2 { font-size: var(--text-2xl); }
  .intro p { font-size: var(--text-sm); }
  .marquee { padding-block: 24px; }
  .brandList { gap: 40px; padding-right: 40px; }
  .brandName { font-size: var(--text-base); }
  .brandMark { width: 20px; height: 20px; }
  .footer { padding-inline: 12px; }
}

@media (prefers-reduced-motion: reduce) {
  .track {
    animation: none;
    will-change: auto;
  }

  .track { width: auto; justify-content: center; }
  .brandList { flex-wrap: wrap; justify-content: center; row-gap: 20px; padding: 0 24px; }
  .brandList[aria-hidden="true"] { display: none; }
  .footer { display: none; }
}
`},{path:"registry/blocks/logo-marquee/logo-marquee.tsx",language:"tsx",content:`/**
 * Arc UI · Logo marquee
 * MIT License · Copyright (c) 2026 Elia Kuratli
 * https://uiarc.dev/components/blocks/logo-marquee
 * https://github.com/kuratlielia/arc-library
 */
"use client";

import { useId, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/registry/components/button/button";
import styles from "./logo-marquee.module.css";

export interface LogoMarqueeBrand {
  name: string;
  /** Monochrome SVG, drawn as a mask in the text color. */
  icon: string;
  /** Single brand color for the mark in color tone. Leave out for brands whose mark is black or white. */
  color?: string;
  /** Full color SVG for multicolor marks, used in color tone instead of \`icon\`. */
  colorIcon?: string;
}

export type LogoMarqueeTone = "color" | "mono";

export interface LogoMarqueeProps {
  title?: string;
  description?: string;
  brands?: LogoMarqueeBrand[];
  /** \`color\` shows each mark in its official colors; \`mono\` draws every mark in the text color. */
  tone?: LogoMarqueeTone;
}

const exampleBrands: LogoMarqueeBrand[] = [
  { name: "Figma", icon: "/block-logos/figma.svg", colorIcon: "/block-logos/figma-color.svg" },
  { name: "Linear", icon: "/block-logos/linear.svg", color: "#5E6AD2" },
  { name: "Notion", icon: "/block-logos/notion.svg" },
  { name: "Slack", icon: "/block-logos/slack.svg", colorIcon: "/block-logos/slack-color.svg" },
  { name: "GitHub", icon: "/block-logos/github.svg" },
  { name: "Stripe", icon: "/block-logos/stripe.svg", color: "#635BFF" },
  { name: "Vercel", icon: "/block-logos/vercel.svg" },
];

function BrandMark({ brand, tone }: { brand: LogoMarqueeBrand; tone: LogoMarqueeTone }) {
  if (tone === "color" && brand.colorIcon) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className={styles.brandMark} src={brand.colorIcon} alt="" width={22} height={22} draggable={false} />;
  }
  return (
    <span
      className={styles.brandMark}
      style={{ maskImage: \`url("\${brand.icon}")\`, WebkitMaskImage: \`url("\${brand.icon}")\`, color: tone === "color" ? brand.color : undefined }}
      aria-hidden="true"
    />
  );
}

function BrandList({ brands, tone, duplicate = false }: { brands: LogoMarqueeBrand[]; tone: LogoMarqueeTone; duplicate?: boolean }) {
  return (
    <ul className={styles.brandList} aria-label={duplicate ? undefined : "Illustrative tool logos"} aria-hidden={duplicate || undefined}>
      {brands.map((brand, index) => (
        <li className={styles.brand} key={\`\${brand.name}-\${index}\`}>
          <BrandMark brand={brand} tone={tone} />
          <span className={styles.brandName}>{brand.name}</span>
        </li>
      ))}
    </ul>
  );
}

export function LogoMarquee({
  title = "Good work moves between tools",
  description = "From the first idea to the final handoff, a familiar set of tools stays close to the work.",
  brands = exampleBrands,
  tone = "color",
}: LogoMarqueeProps) {
  const titleId = useId();
  const [paused, setPaused] = useState(false);

  return (
    <section className={styles.section} data-tone={tone} aria-labelledby={titleId}>
      <div className={styles.intro}>
        <h2 id={titleId}>{title}</h2>
        <p>{description}</p>
      </div>

      <div className={styles.marquee} role="region" aria-label="Illustrative tool logos">
        <div className={\`\${styles.track}\${paused ? \` \${styles.paused}\` : ""}\`}>
          <BrandList brands={brands} tone={tone} />
          <BrandList brands={brands} tone={tone} duplicate />
        </div>
      </div>

      <div className={styles.footer}>
        <Button
          variant="ghost"
          size="sm"
          className={styles.motionButton}
          aria-label={paused ? "Play logo motion" : "Pause logo motion"}
          onClick={() => setPaused((value) => !value)}
        >
          {paused ? <><Play size={16} strokeWidth={1.75} aria-hidden="true" />Play</> : <><Pause size={16} strokeWidth={1.75} aria-hidden="true" />Pause</>}
        </Button>
        <span className={styles.motionStatus} aria-live="polite">
          {paused ? "Motion paused" : ""}
        </span>
      </div>
    </section>
  );
}

export default LogoMarquee;
`}],e="",a={files:n,prompt:e};export{a as default,n as files,e as prompt};
