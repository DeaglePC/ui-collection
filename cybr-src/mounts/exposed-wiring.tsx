import { ExposedWiring } from "../components/exposed-wiring";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <ExposedWiring className="min-h-80 w-full font-mono">
        <div className="absolute top-4 left-5 border border-line bg-ground-deep px-2.5 py-1.5 text-xs tracking-label text-label">
          <span className="text-signal">06</span> / EXPOSED WIRING
        </div>
      </ExposedWiring>
    </div>
  );
}
