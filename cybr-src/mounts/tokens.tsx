import { GlitchButton } from "../components/glitch-button";
import { HardOffsetButton } from "../components/hard-offset-button";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <div className="flex flex-wrap gap-3 font-mono text-xs">
        <span className="bg-signal px-3 py-2 text-ground-deep">signal</span>
        <span className="bg-surface px-3 py-2 text-ink">surface</span>
        <span className="border border-line px-3 py-2 text-label">label</span>
        <span className="bg-ink px-3 py-2 text-bg">ink</span>
      </div>
      <div className="flex flex-wrap gap-8">
        <HardOffsetButton>Deploy</HardOffsetButton>
        <GlitchButton>Jack in</GlitchButton>
      </div>
    </div>
  );
}
