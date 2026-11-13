import type { ReactElement } from "react";
import { useEffect, useState } from "react"
// types;
import { SplitText } from "@/vendor/mekai/ui/split-text";
import { ScrambleText } from "@/vendor/mekai/ui/scramble-text";
import { BlurText } from "@/vendor/mekai/ui/blur-text";
import { ShinyText } from "@/vendor/mekai/ui/shiny-text";
import { PixelButton } from "@/vendor/mekai/ui/pixel-button";
import { MagneticButton } from "@/vendor/mekai/ui/magnetic-button";
import { HealthBar } from "@/vendor/mekai/ui/health-bar";
import { XpBar } from "@/vendor/mekai/ui/xp-bar";
import { Plasma } from "@/vendor/mekai/ui/plasma";
import { Aurora } from "@/vendor/mekai/ui/aurora";
import { ClickSpark } from "@/vendor/mekai/ui/click-spark";
import { TiltCard } from "@/vendor/mekai/ui/tilt-card";
import { Folder } from "@/vendor/mekai/ui/folder";
import { Stage } from "./stage";

function CyclingHealth() {
  const [v, setV] = useState(100);
  useEffect(() => {
    const t = setInterval(() => {
      setV((x) => {
        if (x > 40) return x - 18;
        return 100;
      });
    }, 1600);
    return () => clearInterval(t);
  }, []);
  return (
    <Stage>
      <div className="w-[280px]">
        <HealthBar value={v} max={100} showNumbers label="HP" />
      </div>
    </Stage>
  );
}

function CyclingXp() {
  const [xp, setXp] = useState(40);
  useEffect(() => {
    const t = setInterval(() => setXp((x) => (x + 35) % 280), 1400);
    return () => clearInterval(t);
  }, []);
  return (
    <Stage>
      <div className="w-[280px]">
        <XpBar xp={xp} perLevel={100} />
      </div>
    </Stage>
  );
}

export const mekaiPreviews: Record<string, () => ReactElement> = {
  "mekai-split-text": () => (
    <Stage>
      <SplitText
        text="字母逐个弹簧就位"
        once={false}
        className="text-3xl font-semibold tracking-tight text-[#f2eee6]"
      />
    </Stage>
  ),
  "mekai-scramble-text": () => (
    <Stage>
      <ScrambleText
        text="Hover to decode"
        className="text-3xl font-semibold tracking-tight text-[#f2eee6] pointer-events-auto"
      />
    </Stage>
  ),
  "mekai-blur-text": () => (
    <Stage>
      <BlurText
        text="词语从模糊里走出来"
        once={false}
        className="text-3xl font-semibold tracking-tight text-[#f2eee6]"
      />
    </Stage>
  ),
  "mekai-shiny-text": () => (
    <Stage>
      <ShinyText
        text="一道光从字上扫过"
        className="text-3xl font-semibold tracking-tight"
      />
    </Stage>
  ),
  "mekai-pixel-button": () => (
    <Stage>
      <div className="pointer-events-auto">
        <PixelButton>Start Game</PixelButton>
      </div>
    </Stage>
  ),
  "mekai-magnetic-button": () => (
    <Stage>
      <div className="pointer-events-auto">
        <MagneticButton className="rounded-full bg-[#f2eee6] text-[#0c0b09] px-6 py-3 font-medium">
          靠近试试
        </MagneticButton>
      </div>
    </Stage>
  ),
  "mekai-health-bar": () => <CyclingHealth />,
  "mekai-xp-bar": () => <CyclingXp />,
  "mekai-plasma": () => (
    <Stage pad={false}>
      <Plasma className="h-full w-full" />
    </Stage>
  ),
  "mekai-aurora": () => (
    <Stage pad={false}>
      <Aurora className="h-full w-full" />
    </Stage>
  ),
  "mekai-click-spark": () => (
    <Stage>
      <ClickSpark className="pointer-events-auto rounded-xl border border-[#2a2620] px-10 py-12 text-sm text-[#c9c2b6]">
        点击任意位置
      </ClickSpark>
    </Stage>
  ),
  "mekai-tilt-card": () => (
    <Stage>
      <div className="pointer-events-auto w-[240px]">
        <TiltCard className="rounded-xl border border-[#2a2620] bg-[#1c1a15] p-6">
          <p className="text-lg font-medium">Tilt Card</p>
          <p className="mt-2 text-sm text-[#8f877c]">把指针放上来，卡片会跟着倾斜。</p>
        </TiltCard>
      </div>
    </Stage>
  ),
  "mekai-folder": () => (
    <Stage>
      <div className="pointer-events-auto">
        <Folder
          openOnHover
          size={1.4}
          items={[
            <div key="a" className="h-full w-full bg-[#f2eee6]" />,
            <div key="b" className="h-full w-full bg-[#e07a3d]" />,
            <div key="c" className="h-full w-full bg-[#f0c37a]" />,
          ]}
          label="文件夹"
        />
      </div>
    </Stage>
  ),
};
