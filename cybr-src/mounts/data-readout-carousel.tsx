import { DataReadoutCarousel } from "../components/data-readout-carousel";

function Readout({ code, title, value, unit, note }: { code: string; title: string; value: string; unit: string; note: string }) {
  return (
    <div className="flex min-h-48 flex-col justify-between gap-6 px-6 py-6">
      <span className="text-caption tracking-label text-label"><span className="text-signal">{code}</span> / {title}</span>
      <span className="font-display text-6xl leading-none text-ink">{value}<span className="text-signal">{unit}</span></span>
      <span className="text-xs text-label">{note}</span>
    </div>
  );
}

export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <DataReadoutCarousel
        className="w-full max-w-xl"
        label="SYSTEM READOUT"
        slides={[
          <Readout key="a" code="R-01" title="UPTIME" value="99.98" unit="%" note="Rolling 30-day availability." />,
          <Readout key="b" code="R-02" title="LATENCY" value="042" unit="MS" note="Median edge response." />,
          <Readout key="c" code="R-03" title="COMPONENTS" value="038" unit="//" note="Free MIT registry items." />,
        ]}
      />
    </div>
  );
}
