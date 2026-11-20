import { SteppedWipeReveal } from "../components/stepped-wipe-reveal";
import { Replay } from "../preview";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <Replay>
        <p className="text-center font-display text-[2.75rem] leading-[0.92] uppercase text-ink">
          <SteppedWipeReveal>Raw.</SteppedWipeReveal>
          <SteppedWipeReveal delay={300}>Loud.</SteppedWipeReveal>
          <SteppedWipeReveal delay={600} className="text-signal">Lit.</SteppedWipeReveal>
        </p>
      </Replay>
    </div>
  );
}
