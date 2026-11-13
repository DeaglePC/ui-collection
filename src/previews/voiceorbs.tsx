import type { ReactElement } from "react";
import { useEffect, useState, type ComponentType } from "react"
// types;
import { PulseOrb } from "@/vendor/voiceorbs/orbe/pulse-orb/pulse-orb";
import { GlassOrb } from "@/vendor/voiceorbs/orbe/glass-orb/glass-orb";
import { AuroraOrb } from "@/vendor/voiceorbs/orbe/aurora-orb/aurora-orb";
import { HaloOrb } from "@/vendor/voiceorbs/orbe/halo-orb/halo-orb";
import { EqualizerOrb } from "@/vendor/voiceorbs/orbe/equalizer-orb/equalizer-orb";
import { MinimalOrb } from "@/vendor/voiceorbs/orbe/minimal-orb/minimal-orb";
import type { OrbProps, OrbState } from "@/vendor/voiceorbs/lib/orb-state";
import { Stage } from "./stage";

const STATES: OrbState[] = [
  "idle",
  "connecting",
  "listening",
  "thinking",
  "speaking",
  "error",
];

function OrbDemo({ Orb }: { Orb: ComponentType<OrbProps> }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % STATES.length), 1800);
    return () => clearInterval(t);
  }, []);
  const state = STATES[i];
  return (
    <Stage>
      <div className="flex flex-col items-center">
        <Orb state={state} size={168} />
        <div className="mt-4 flex flex-wrap justify-center gap-1.5 pointer-events-auto">
          {STATES.map((s, idx) => (
            <button
              key={s}
              type="button"
              onClick={() => setI(idx)}
              className={`rounded-full px-2 py-0.5 text-[11px] border ${
                s === state
                  ? "border-[#e07a3d] text-[#f2eee6]"
                  : "border-[#2a2620] text-[#8f877c]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </Stage>
  );
}

export const voiceorbsPreviews: Record<string, () => ReactElement> = {
  "voiceorbs-pulse-orb": () => <OrbDemo Orb={PulseOrb} />,
  "voiceorbs-glass-orb": () => <OrbDemo Orb={GlassOrb} />,
  "voiceorbs-aurora-orb": () => <OrbDemo Orb={AuroraOrb} />,
  "voiceorbs-halo-orb": () => <OrbDemo Orb={HaloOrb} />,
  "voiceorbs-equalizer-orb": () => <OrbDemo Orb={EqualizerOrb} />,
  "voiceorbs-minimal-orb": () => <OrbDemo Orb={MinimalOrb} />,
};
