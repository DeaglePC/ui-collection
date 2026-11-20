import { MegaMenu } from "../components/mega-menu";
import { TerminalNavbar } from "../components/terminal-navbar";

const columns = [
  { heading: "BUTTONS", links: [{ label: "Hard-Offset", href: "#hard" }, { label: "Glitch", href: "#glitch" }, { label: "Hazard", href: "#hazard" }] },
  { heading: "TEXT", links: [{ label: "Decrypt", href: "#decrypt" }, { label: "Typewriter", href: "#type" }] },
  { heading: "LAYOUT", links: [{ label: "Bento", href: "#bento" }, { label: "Spec Card", href: "#spec" }] },
];
const feature = { eyebrow: "NEW DROP", title: "GLITCH BUTTON →", href: "#glitch" };

export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <nav aria-label="Standalone demo" className="flex self-start bg-ground-deep">
        <MegaMenu label="COMPONENTS" columns={columns} feature={feature} />
      </nav>
      <TerminalNavbar aria-label="Navbar demo" className="w-full" brandHref="#" links={[{ label: "INDEX", href: "#index" }, { label: "DOCS", href: "#docs" }]}>
        <MegaMenu label="COMPONENTS" columns={columns} feature={feature} />
      </TerminalNavbar>
    </div>
  );
}
