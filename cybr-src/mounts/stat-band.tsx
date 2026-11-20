import { StatBand } from "../components/stat-band";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <StatBand
        className="w-full"
        stats={[
          { value: "038", label: "COMPONENTS" },
          { value: "MIT", label: "LICENSE" },
          { value: "0PX", label: "BORDER RADIUS" },
          { value: "02", label: "THEMES" },
        ]}
      />
    </div>
  );
}
