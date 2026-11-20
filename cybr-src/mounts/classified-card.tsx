import { ClassifiedCard, Redacted } from "../components/classified-card";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <ClassifiedCard className="w-full max-w-sm" hint="CLICK BAR TO DECLASSIFY">
        Subject entered <Redacted>sector nine at</Redacted> 0300 hrs and <Redacted>disabled the</Redacted> relay.
      </ClassifiedCard>
    </div>
  );
}
