import { HardOffsetButton } from "../components/hard-offset-button";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <div className="flex flex-wrap items-center justify-center gap-12">
        <HardOffsetButton>Deploy now</HardOffsetButton>
        <HardOffsetButton disabled>Offline</HardOffsetButton>
      </div>
    </div>
  );
}
