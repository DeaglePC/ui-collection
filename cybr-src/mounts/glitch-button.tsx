import { GlitchButton } from "../components/glitch-button";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <div className="flex flex-wrap items-center justify-center gap-12">
        <GlitchButton>Jack in</GlitchButton>
        <GlitchButton disabled>Offline</GlitchButton>
      </div>
    </div>
  );
}
