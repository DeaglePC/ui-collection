import { HudBracketButton } from "../components/hud-bracket-button";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <div className="flex flex-wrap items-center justify-center gap-12">
        <HudBracketButton>Target</HudBracketButton>
        <HudBracketButton disabled>Offline</HudBracketButton>
      </div>
    </div>
  );
}
