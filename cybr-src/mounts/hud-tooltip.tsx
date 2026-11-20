import { HudTooltip } from "../components/hud-tooltip";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <div className="flex w-full max-w-lg flex-wrap items-start justify-between gap-8">
        <HudTooltip content={<>STATUS: ONLINE<br />LOAD: 42%</>}>
          <button type="button" className="min-h-11 cursor-help border-2 border-ink bg-ground-deep px-4 font-mono text-sm font-bold tracking-label text-ink">NODE 07</button>
        </HudTooltip>
        <HudTooltip variant="lock" side="right" eyebrow="TARGET LOCKED" title="NODE 12" content="Bracket corners and a leader line.">
          <button type="button" className="min-h-11 cursor-help border-2 border-ink bg-ground-deep px-4 font-mono text-sm font-bold tracking-label text-ink">NODE 12</button>
        </HudTooltip>
      </div>
    </div>
  );
}
