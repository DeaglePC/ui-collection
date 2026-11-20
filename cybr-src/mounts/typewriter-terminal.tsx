import { TypewriterTerminal } from "../components/typewriter-terminal";
import { Replay } from "../preview";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <Replay>
        <TypewriterTerminal
          className="mx-auto w-full max-w-xl"
          lines={[
            { text: "boot --style=brutal", prompt: true },
            { text: "mounting /dev/concrete ...... ok" },
            { text: "loading neon.drv ............ ok" },
            { text: "_ready", prompt: true },
          ]}
        />
      </Replay>
    </div>
  );
}
