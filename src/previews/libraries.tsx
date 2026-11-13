import type { ReactElement } from "react";
import { useEffect, useState } from "react"
// types;
import { BorderBeam } from "border-beam";
import { ThinkingOrb } from "thinking-orbs";
import { MetalFx } from "metal-fx";
import { Liquid } from "liquid-gooey";
import { VoiceBeam } from "voice-glow";
import { BotAvatar } from "bot-avatars";
import { ImageGeneration } from "img-fx";
import { Stage } from "./stage";

const ORB_STATES = [
  "searching",
  "working",
  "solving",
  "listening",
  "connecting",
  "weaving",
  "composing",
  "breathing",
  "shaping",
] as const;

function ThinkingDemo() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % ORB_STATES.length), 2000);
    return () => clearInterval(t);
  }, []);
  const state = ORB_STATES[i];
  return (
    <Stage>
      <div className="flex flex-col items-center gap-3">
        <ThinkingOrb state={state} size={64} theme="dark" />
        <p className="text-xs text-[#8f877c]">{state}</p>
      </div>
    </Stage>
  );
}

function GooeyDemo() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setOpen((o) => !o), 1800);
    return () => clearInterval(t);
  }, []);
  return (
    <Stage>
      <div className="relative h-44 w-44 pointer-events-auto" onClick={() => setOpen((o) => !o)}>
        <Liquid blur={8} contrast={20} fill="#f2eee6">
          <Liquid.Item x={0} y={0}>
            <div className="grid h-14 w-14 place-items-center rounded-full bg-[#f2eee6] text-[#0c0b09] text-sm font-medium">
              +
            </div>
          </Liquid.Item>
          <Liquid.Item x={open ? -52 : 0} y={open ? -36 : 0} transition="bouncy">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-[#e07a3d] text-white text-xs">A</div>
          </Liquid.Item>
          <Liquid.Item x={open ? 52 : 0} y={open ? -36 : 0} transition="bouncy" delay={40}>
            <div className="grid h-11 w-11 place-items-center rounded-full bg-[#f0c37a] text-[#0c0b09] text-xs">B</div>
          </Liquid.Item>
        </Liquid>
      </div>
    </Stage>
  );
}

function VoiceDemo() {
  const [t, setT] = useState(0);
  useEffect(() => {
    let id = 0;
    const loop = () => {
      setT(performance.now());
      id = requestAnimationFrame(loop);
    };
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, []);
  const level = () => (Math.sin(t / 220) * 0.5 + 0.5) * 0.85;
  // t used so level closes over current time
  void t;
  return (
    <Stage>
      <VoiceBeam level={level} type="pill">
        <div
          style={{
            padding: "28px 36px",
            borderRadius: 24,
            background: "#1d1b16",
            border: "1px solid #2a2620",
            minWidth: 260,
            color: "#f2eee6",
            textAlign: "center",
          }}
        >
          语音光晕
        </div>
      </VoiceBeam>
    </Stage>
  );
}

function BotDemo() {
  const [busy, setBusy] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setBusy((b) => !b), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <Stage>
      <div className="flex items-end gap-4">
        <BotAvatar type="clover" state={busy ? "working" : "default"} />
        <BotAvatar type="droid" state={busy ? "working" : "default"} />
        <BotAvatar type="cat" state={busy ? "working" : "default"} />
      </div>
    </Stage>
  );
}

export const librariesPreviews: Record<string, () => ReactElement> = {
  "libraries-border-beam": () => (
    <Stage>
      <BorderBeam size="md">
        <div
          style={{
            padding: "36px 40px",
            borderRadius: 18,
            background: "#1d1b16",
            minWidth: 240,
            textAlign: "center",
          }}
        >
          <p className="text-lg font-medium">Border Beam</p>
          <p className="mt-1 text-sm text-[#8f877c]">光沿边框走一圈</p>
        </div>
      </BorderBeam>
    </Stage>
  ),
  "libraries-thinking-orbs": () => <ThinkingDemo />,
  "libraries-metal-fx": () => (
    <Stage>
      <MetalFx variant="button" preset="chromatic" theme="dark">
        <button
          type="button"
          className="pointer-events-auto rounded-full px-6 py-2.5 text-sm font-medium text-white"
          style={{ background: "#161410" }}
        >
          Upgrade
        </button>
      </MetalFx>
    </Stage>
  ),
  "libraries-liquid-gooey": () => <GooeyDemo />,
  "libraries-voice-glow": () => <VoiceDemo />,
  "libraries-bot-avatars": () => <BotDemo />,
  "libraries-img-fx": () => (
    <Stage>
      <ImageGeneration
        preset="pixels-organic"
        images={["./previews/fx-a.svg", "./previews/fx-b.svg"]}
      >
        <div style={{ width: 260, height: 200, borderRadius: 20, background: "#1c1a15" }} />
      </ImageGeneration>
    </Stage>
  ),
};
