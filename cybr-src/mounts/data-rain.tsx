import { DataRain } from "../components/data-rain";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <DataRain className="min-h-80 w-full font-mono">
        <div className="absolute bottom-4 left-5 bg-ground-deep px-2 py-1 text-xs tracking-label text-label">
          <span className="text-signal">05</span> / DATA RAIN
        </div>
      </DataRain>
    </div>
  );
}
