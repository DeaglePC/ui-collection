import { PixelatedImageTrail } from "../components/pixelated-image-trail";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <PixelatedImageTrail
        className="flex min-h-80 w-full items-center justify-center bg-ground-void"
        images={["./cybr/trail-01.svg", "./cybr/trail-02.svg", "./cybr/trail-03.svg", "./cybr/trail-04.svg"]}
      >
        <div className="text-center font-display text-5xl leading-none text-ink">MOVE THE<br />CURSOR<span className="text-signal">_</span></div>
      </PixelatedImageTrail>
    </div>
  );
}
