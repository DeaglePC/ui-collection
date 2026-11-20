import { HardwarePanel, HardwarePanelStatus } from "../components/hardware-panel";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <HardwarePanel className="w-full max-w-xs" title="PWR / BUS 04">
        <HardwarePanelStatus label="MAIN" on />
        <HardwarePanelStatus label="AUX" on={false} />
        <HardwarePanelStatus label="UPLINK" on />
      </HardwarePanel>
    </div>
  );
}
