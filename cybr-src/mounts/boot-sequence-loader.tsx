import { BootSequenceLoader } from "../components/boot-sequence-loader";
import { Replay } from "../preview";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <Replay>
        <BootSequenceLoader
          className="mx-auto min-h-40 w-full max-w-xl"
          lines={[
            { text: "[0000.01] init kernel ............ ", status: "OK" },
            { text: "[0000.18] mount /dev/concrete .... ", status: "OK" },
            { text: "[0000.42] load neon.drv .......... ", status: "OK" },
            { text: "[0000.77] handshake uplink ....... ", status: "READY" },
          ]}
        />
      </Replay>
    </div>
  );
}
