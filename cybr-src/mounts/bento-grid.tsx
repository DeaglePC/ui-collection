import { BentoGrid, BentoGridItem } from "../components/bento-grid";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <BentoGrid className="w-full">
        <BentoGridItem span={2}>
          <span className="text-caption tracking-label text-label"><span className="text-signal">01</span> / SPAN 2</span>
          <p className="font-display text-3xl uppercase text-ink">The grid is the border</p>
        </BentoGridItem>
        <BentoGridItem>
          <span className="text-caption tracking-label text-label"><span className="text-signal">02</span> / SPAN 1</span>
          <p className="text-sm text-ink">2px gaps over a line-coloured parent.</p>
        </BentoGridItem>
        <BentoGridItem>
          <span className="text-caption tracking-label text-label"><span className="text-signal">03</span> / SPAN 1</span>
          <p className="text-sm text-ink">Nothing floats.</p>
        </BentoGridItem>
      </BentoGrid>
    </div>
  );
}
