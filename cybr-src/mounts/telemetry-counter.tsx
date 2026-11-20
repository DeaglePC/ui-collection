import { TelemetryCounter } from "../components/telemetry-counter";
import { Replay } from "../preview";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <Replay>
        <dl className="mx-auto flex w-full max-w-sm flex-col">
          <div className="flex items-baseline justify-between border-b border-line py-1.5">
            <dt className="text-[0.6875rem] tracking-label text-label">REQ / S</dt>
            <dd><TelemetryCounter className="text-[1.875rem]" value={1284} /></dd>
          </div>
          <div className="flex items-baseline justify-between border-b border-line py-1.5">
            <dt className="text-[0.6875rem] tracking-label text-label">LATENCY MS</dt>
            <dd><TelemetryCounter className="text-[1.875rem]" value={12.4} decimals={1} /></dd>
          </div>
          <div className="flex items-baseline justify-between py-1.5">
            <dt className="text-[0.6875rem] tracking-label text-label">NODES ONLINE</dt>
            <dd><TelemetryCounter className="text-[1.875rem]" value={64} minDigits={3} /></dd>
          </div>
        </dl>
      </Replay>
    </div>
  );
}
