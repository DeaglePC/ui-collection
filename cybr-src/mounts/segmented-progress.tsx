import { SegmentedProgress } from "../components/segmented-progress";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <SegmentedProgress className="w-full max-w-xl bg-bg p-6" value={65} label="Loading" phase="HANDSHAKE" />
    </div>
  );
}
