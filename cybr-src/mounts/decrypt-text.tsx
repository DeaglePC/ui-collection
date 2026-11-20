import { DecryptText } from "../components/decrypt-text";
import { Replay } from "../preview";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <Replay>
        <p className="text-center font-display text-[4rem] leading-none text-ink">
          <DecryptText text="ACCESS GRANTED" />
        </p>
      </Replay>
    </div>
  );
}
