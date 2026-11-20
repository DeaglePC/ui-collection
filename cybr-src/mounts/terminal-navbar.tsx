import { TerminalNavbar, TerminalNavbarCta } from "../components/terminal-navbar";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <TerminalNavbar
        aria-label="Demo"
        className="w-full"
        brandHref="#"
        links={[
          { label: "INDEX", href: "#index" },
          { label: "COMPONENTS", href: "#components", current: true },
          { label: "DOCS", href: "#docs" },
          { label: "GITHUB", href: "#github" },
        ]}
        actions={<TerminalNavbarCta href="#install">INSTALL →</TerminalNavbarCta>}
      />
    </div>
  );
}
