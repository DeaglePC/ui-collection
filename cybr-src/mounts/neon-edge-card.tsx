import { NeonEdgeCard } from "../components/neon-edge-card";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <NeonEdgeCard className="w-full max-w-md" href="#open" eyebrow="HOVER OR TAB TO ME" title="The only glow allowed" cta="OPEN →" />
    </div>
  );
}
