import { WarningTape } from "../components/warning-tape";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill bg-ground-deep">
      <div className="w-full bg-ground-deep">
        <WarningTape
          aria-label="Site notices"
          items={["CAUTION // UNDER CONSTRUCTION", "RESTRICTED SECTOR", "CAUTION // UNDER CONSTRUCTION", "RESTRICTED SECTOR"]}
        />
        <WarningTape variant="ink" tilt={1.5} className="pt-2" />
      </div>
    </div>
  );
}
