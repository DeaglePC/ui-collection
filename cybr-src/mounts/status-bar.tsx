import { StatusBar } from "../components/status-bar";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <StatusBar className="w-full" items={["SYS:OK", "REV 0.1", "NODE / EU-NE"]} signal={3} />
    </div>
  );
}
