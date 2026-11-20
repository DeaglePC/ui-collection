import { GlitchHeading } from "../components/glitch-heading";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <GlitchHeading className="text-5xl">Glitch</GlitchHeading>
      <div className="hazard-stripes h-10 w-full max-w-md" />
      <div className="relative h-24 w-full max-w-md overflow-hidden bg-surface scanlines" />
    </div>
  );
}
