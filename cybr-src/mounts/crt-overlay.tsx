import { CrtOverlay } from "../components/crt-overlay";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <CrtOverlay className="flex min-h-80 w-full items-center justify-center font-mono">
        <div className="text-center">
          <p className="font-display text-5xl text-signal">NO CARRIER</p>
          <p className="mt-3 text-xs tracking-[0.3em] text-label">CH 03 · RETRY IN 05</p>
        </div>
      </CrtOverlay>
    </div>
  );
}
