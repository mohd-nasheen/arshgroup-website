import SectionWrapper from "../components/SectionWrapper";
import { processSteps } from "../data/siteData";

export default function Process() {
  return (
    <SectionWrapper
      eyebrow="Process"
      title="A controlled route from ambition to handover."
      description="Each stage protects the project from drift: strategic clarity, visual direction, technical coordination, and site-level quality control."
    >
      <ol className="grid gap-px bg-carbon/10 md:grid-cols-4">
        {processSteps.map((step, idx) => (
          <li key={step.title} className="bg-alabaster p-6 md:min-h-96 md:p-7">
            <p className="text-xs uppercase tracking-[0.18em] text-graphite/55">0{idx + 1}</p>
            <h3 className="mt-10 text-3xl leading-none">{step.title}</h3>
            <p className="mt-6 text-sm leading-relaxed text-carbon/72">{step.detail}</p>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
