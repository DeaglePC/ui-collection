import { HazardButton } from "../components/hazard-button";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <div className="flex flex-wrap items-center justify-center gap-12">
        <HazardButton>Purge cache</HazardButton>
        <HazardButton disabled>Offline</HazardButton>
      </div>
    </div>
  );
}
