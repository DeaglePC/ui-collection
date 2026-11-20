import { useEffect, useState, type ReactElement } from "react";
import { Dot, DotSwarm, NavigationSwarm, type Shape } from "dots-swarm";
import { Stage } from "./stage";

const FREE_SHAPES = [
  "cloud",
  "heart",
  "calendar",
  "lock",
  "microphone",
  "check",
  "bolt",
  "globe",
  "headphones",
  "todo-list",
] as const satisfies readonly Shape[];

function SwarmDemo() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((n) => (n + 1) % FREE_SHAPES.length), 2200);
    return () => clearInterval(timer);
  }, []);
  const shape = FREE_SHAPES[index];
  return (
    <Stage pad={false}>
      <div className="relative h-full w-full">
        <DotSwarm shape={shape} count={420} color="#d9f99d" dotSize={1.35} speed={1} />
        <p className="pointer-events-none absolute bottom-3 left-0 right-0 text-center text-[11px] tracking-[0.14em] text-[#d9f99d]/80">
          {shape}
        </p>
      </div>
    </Stage>
  );
}

function DotDemo() {
  return (
    <Stage>
      <Dot
        initial={{ size: 16, y: -36, color: "#d5f999" }}
        sequence={[
          { y: 0, duration: 0.7, easing: "ease-in" },
          { size: 72, duration: 0.8 },
          { color: "#c3adff", duration: 0.55 },
          { size: 16, y: -36, color: "#d5f999", duration: 0.7 },
        ]}
        loop
        label="单点运动"
      />
    </Stage>
  );
}

const MANEUVERS = ["turn-left", "straight", "turn-right", "roundabout", "arrive"] as const;

function NavigationDemo() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((n) => (n + 1) % MANEUVERS.length), 2400);
    return () => clearInterval(timer);
  }, []);
  const maneuver = MANEUVERS[index];
  return (
    <Stage pad={false}>
      <div className="relative h-full w-full">
        <NavigationSwarm
          instruction={{ maneuver, distanceMeters: 180, roadName: "Market St" }}
          count={380}
          color="#9ad7ff"
          dotSize={1.3}
        />
        <p className="pointer-events-none absolute bottom-3 left-0 right-0 text-center text-[11px] tracking-[0.14em] text-[#9ad7ff]/80">
          {maneuver}
        </p>
      </div>
    </Stage>
  );
}

export const dotsPreviews: Record<string, () => ReactElement> = {
  "dots-swarm": () => <SwarmDemo />,
  "dots-dot": () => <DotDemo />,
  "dots-navigation": () => <NavigationDemo />,
};
