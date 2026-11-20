import { useState } from "react";
import { CommandPalette, type CommandPaletteGroup } from "../components/command-palette";

const groups: CommandPaletteGroup[] = [
  { label: "BUTTONS", items: [
    { value: "hard-offset-button", label: "Hard-Offset Button", hint: "BTN-01" },
    { value: "glitch-button", label: "Glitch Button", hint: "BTN-02" },
    { value: "hazard-button", label: "Hazard Button", hint: "BTN-05" },
  ]},
  { label: "TEXT", items: [
    { value: "decrypt-text", label: "Decrypt Text", hint: "TXT-01" },
    { value: "glitch-heading", label: "Glitch Heading", hint: "TXT-02" },
  ]},
];

export default function Mount() {
  const [last, setLast] = useState<string | null>(null);
  return (
    <div className="cybr-stage">
      <CommandPalette groups={groups} onSelect={setLast} />
      <p className="m-0 font-mono text-xs tracking-label text-label">LAST RUN: <span className="text-ink">{last ?? "—"}</span></p>
    </div>
  );
}
