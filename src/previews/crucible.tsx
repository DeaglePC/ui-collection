import type { ReactElement } from "react";
import { useEffect, useState } from "react"
// types;
import { Anneal } from "@/vendor/crucible/anneal/anneal";
import { Cipher } from "@/vendor/crucible/cipher/cipher";
import { Gild } from "@/vendor/crucible/gild/gild";
import { Murmur, useScriptedStream } from "@/vendor/crucible/murmur/murmur";
import { Relay } from "@/vendor/crucible/relay/relay";
import { Sluice } from "@/vendor/crucible/sluice/sluice";
import { Quota } from "@/vendor/crucible/quota/quota";
import { Quench } from "@/vendor/crucible/quench/quench";
import { Sheen } from "@/vendor/crucible/sheen/sheen";
import { Piston } from "@/vendor/crucible/piston/piston";
import { Flywheel } from "@/vendor/crucible/flywheel/flywheel";
import type { RelayStatus } from "@/vendor/crucible/relay/relay";
import { Stage } from "./stage";

function MurmurDemo() {
  const stream = useScriptedStream(
    "每个到达的词会向上淡入就位。适合用在 AI 对话的流式回答里，思考过程也可以折叠显示。",
    { cps: 36, startDelay: 400 },
  );
  return (
    <Stage>
      <div className="w-[min(420px,90%)] text-left text-[#f2eee6]">
        <Murmur text={stream.text} streaming={stream.streaming} thinking={false} />
      </div>
    </Stage>
  );
}

function RelayDemo() {
  const sequence: RelayStatus[] = ["pending", "running", "success"];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % sequence.length), 1600);
    return () => clearInterval(t);
  }, []);
  return (
    <Stage>
      <div className="w-[min(400px,90%)]">
        <Relay
          name="search_docs"
          summary="查找许可条款"
          status={sequence[i]}
        />
      </div>
    </Stage>
  );
}

function SluiceDemo() {
  const [v, setV] = useState("");
  return (
    <Stage>
      <div className="w-[min(440px,94%)] pointer-events-auto">
        <Sluice
          value={v}
          onValueChange={setV}
          placeholder="问任何事…"
          onSubmit={() => setV("")}
        />
      </div>
    </Stage>
  );
}

export const cruciblePreviews: Record<string, () => ReactElement> = {
  "crucible-anneal": () => (
    <Stage>
      <Anneal
        by="word"
        repeat
        className="text-3xl font-medium tracking-tight text-[#f2eee6]"
      >
        文字从模糊里退火变清晰
      </Anneal>
    </Stage>
  ),
  "crucible-cipher": () => (
    <Stage>
      <Cipher className="text-3xl font-medium tracking-tight text-[#f2eee6]" repeat>
        符文翻搅后再淬成句子
      </Cipher>
    </Stage>
  ),
  "crucible-gild": () => (
    <Stage>
      <Gild className="text-4xl font-medium tracking-tight">鎏金扫过字形</Gild>
    </Stage>
  ),
  "crucible-murmur": () => <MurmurDemo />,
  "crucible-relay": () => <RelayDemo />,
  "crucible-sluice": () => <SluiceDemo />,
  "crucible-quota": () => (
    <Stage>
      <div className="w-[min(400px,90%)]">
        <Quota
          label="Context window"
          unit="tokens"
          limit={200000}
          segments={[
            { label: "System", value: 12000, color: "#8b7cff" },
            { label: "Tools", value: 28000, color: "#e07a3d" },
            { label: "Messages", value: 64000, color: "#f0c37a" },
          ]}
        />
      </div>
    </Stage>
  ),
  "crucible-quench": () => (
    <Stage>
      <div className="pointer-events-auto">
        <Quench className="px-6 py-3 text-sm">点击看涟漪</Quench>
      </div>
    </Stage>
  ),
  "crucible-sheen": () => (
    <Stage>
      <Sheen>扫光按钮</Sheen>
    </Stage>
  ),
  "crucible-piston": () => (
    <Stage>
      <div className="pointer-events-auto">
        <Piston
          onClick={() => new Promise((r) => setTimeout(r, 900))}
          className="px-6 py-3 text-sm"
        >
          提交
        </Piston>
      </div>
    </Stage>
  ),
  "crucible-flywheel": () => (
    <Stage>
      <div className="flex items-center gap-8">
        <Flywheel variant="ring" size={56} />
        <Flywheel variant="dots-orbit" size={56} />
        <Flywheel variant="dual-ring" size={56} />
      </div>
    </Stage>
  ),
};
