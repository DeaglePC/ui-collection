import { TerminalButton } from "../components/terminal-button";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <div className="flex flex-wrap items-center justify-center gap-12">
        <TerminalButton>execute</TerminalButton>
        <TerminalButton disabled>Offline</TerminalButton>
      </div>
    </div>
  );
}
