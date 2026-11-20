import { HudImageFrame } from "../components/hud-image-frame";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <HudImageFrame className="min-h-72 w-full" index="01" caption="[IMAGE] · SCAN 38%" />
    </div>
  );
}
