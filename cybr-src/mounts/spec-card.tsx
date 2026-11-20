import { SpecCard, SpecCardAction } from "../components/spec-card";
export default function Mount() {
  return (
    <div className="cybr-stage">
      <SpecCard
        className="w-full max-w-2xl"
        meta="UNIT / D-01 · REV 2.6"
        title="Core module"
        titleAs="h3"
        action={<SpecCardAction href="#spec">VIEW SPEC →</SpecCardAction>}
        specs={[
          { label: "STATUS", value: "ONLINE", accent: true },
          { label: "CLASS", value: "MIT" },
          { label: "SECTOR", value: "UI" },
          { label: "BUILD", value: "0.1" },
        ]}
      >
        Short product description, two lines at most.
      </SpecCard>
    </div>
  );
}
