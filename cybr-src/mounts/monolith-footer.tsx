import { MonolithFooter } from "../components/monolith-footer";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <MonolithFooter
        className="w-full"
        columns={[
          { heading: "LIBRARY", items: [{ label: "Components", href: "#components" }, { label: "Themes", href: "#themes" }] },
          { heading: "SOURCE", items: [{ label: "GitHub", href: "#github" }, { label: "Licence", href: "#licence" }] },
          { heading: "SYSTEM", items: [{ text: "REV 0.1" }, { text: "MIT" }] },
          { heading: "SIGNAL", items: [{ label: "Docs", href: "#docs" }] },
        ]}
      />
    </div>
  );
}
