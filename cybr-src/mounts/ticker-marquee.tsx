import { TickerMarquee } from "../components/ticker-marquee";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <TickerMarquee
        className="w-full"
        aria-label="Ticker"
        items={["01 / TICKER MARQUEE", "// REV 0.1 LIVE", "// SYS:OK", "// MIT LICENSE"]}
      />
    </div>
  );
}
