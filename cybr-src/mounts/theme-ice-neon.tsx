import { GlitchButton } from "../components/glitch-button";
import { HardOffsetButton } from "../components/hard-offset-button";
export default function Mount() {
  return (
    <div className="cybr-stage bg-bg text-ink" data-theme="ice-neon">
      <p className="font-mono text-xs tracking-label text-label">data-theme=&quot;ice-neon&quot;</p>
      <div className="flex gap-3 font-mono text-xs">
        <span className="bg-signal px-3 py-2 text-ground-deep">signal</span>
        <span className="bg-surface px-3 py-2 text-ink">surface</span>
      </div>
      <div className="flex flex-wrap gap-8">
        <HardOffsetButton>Deploy</HardOffsetButton>
        <GlitchButton>Jack in</GlitchButton>
      </div>
    </div>
  );
}
