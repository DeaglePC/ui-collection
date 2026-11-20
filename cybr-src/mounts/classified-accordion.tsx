import { ClassifiedAccordion, ClassifiedAccordionItem } from "../components/classified-accordion";
export default function Mount() {
  return (
    <div className="cybr-stage cybr-stage-fill">
      <ClassifiedAccordion className="w-full max-w-xl bg-bg" defaultValue={["f-01"]}>
        <ClassifiedAccordionItem value="f-01" id="F-01" question="HOW DO I INSTALL ONE?">
          Run npx shadcn add @cybr/name. The source lands in your project.
        </ClassifiedAccordionItem>
        <ClassifiedAccordionItem value="f-02" id="F-02" question="WHAT DOES IT NEED?">
          Tailwind CSS, the CYBR tokens, and the effects stylesheet.
        </ClassifiedAccordionItem>
        <ClassifiedAccordionItem value="f-03" id="F-03" question="REDUCED MOTION?">
          Every animation falls back when prefers-reduced-motion is set.
        </ClassifiedAccordionItem>
      </ClassifiedAccordion>
    </div>
  );
}
