import type { ReactElement } from "react";
import { Orb } from "@/vendor/yogesh-orbs/orb";
import { cube, octahedron, tetrahedron, torus } from "@/vendor/yogesh-orbs/shapes";
import { crosses, dashes, halftone, lines, mesh, squares } from "@/vendor/yogesh-orbs/renders";
import { Stage } from "./stage";

function Cell({ label, children }: { label: string; children: ReactElement }) {
  return (
    <div className="flex flex-col items-center gap-2 text-[#f4efe6]">
      {children}
      <span className="text-[11px] tracking-wide text-[#8f877c]">{label}</span>
    </div>
  );
}

function OrbStates() {
  return (
    <Stage>
      <div className="grid grid-cols-3 gap-x-6 gap-y-4 text-[#f4efe6]">
        <Cell label="idle · blink">
          <Orb state="idle" variant="blink" size={52} />
        </Cell>
        <Cell label="working · gyro">
          <Orb state="working" variant="gyro" size={52} />
        </Cell>
        <Cell label="reasoning · twins">
          <Orb state="reasoning" variant="twins" size={52} />
        </Cell>
        <Cell label="searching">
          <Orb state="searching" variant="lighthouse" size={52} />
        </Cell>
        <Cell label="using · type">
          <Orb state="using" variant="type" size={52} />
        </Cell>
        <Cell label="compacting">
          <Orb state="compacting" variant="squeeze" size={52} />
        </Cell>
      </div>
    </Stage>
  );
}

function OrbShapes() {
  return (
    <Stage>
      <div className="grid grid-cols-4 gap-x-5 gap-y-4 text-[#e7d7a8]">
        <Cell label="cube">
          <Orb state="working" shape={cube} size={58} />
        </Cell>
        <Cell label="octahedron">
          <Orb state="working" shape={octahedron} size={58} />
        </Cell>
        <Cell label="tetrahedron">
          <Orb state="working" shape={tetrahedron} size={58} />
        </Cell>
        <Cell label="torus">
          <Orb state="reasoning" shape={torus} size={58} />
        </Cell>
      </div>
    </Stage>
  );
}

function OrbRenders() {
  return (
    <Stage>
      <div className="grid grid-cols-3 gap-x-5 gap-y-4 text-[#f4efe6]">
        <Cell label="dashes">
          <Orb state="working" render={dashes} size={52} />
        </Cell>
        <Cell label="squares">
          <Orb state="working" render={squares} size={52} />
        </Cell>
        <Cell label="crosses">
          <Orb state="reasoning" render={crosses} size={52} />
        </Cell>
        <Cell label="mesh">
          <Orb state="searching" render={mesh} size={52} />
        </Cell>
        <Cell label="halftone">
          <Orb state="reasoning" render={halftone} size={52} />
        </Cell>
        <Cell label="lines">
          <Orb state="idle" variant="blink" render={lines} size={52} />
        </Cell>
      </div>
    </Stage>
  );
}

export const thinkingorbsPreviews: Record<string, () => ReactElement> = {
  "thinkingorbs-orb": () => <OrbStates />,
  "thinkingorbs-shapes": () => <OrbShapes />,
  "thinkingorbs-renders": () => <OrbRenders />,
};
