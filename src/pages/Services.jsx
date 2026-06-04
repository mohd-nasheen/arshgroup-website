import SectionWrapper from "../components/SectionWrapper";
import ArchitecturalDesignPackages from "../components/ArchitecturalDesignPackages";
import { services } from "../data/siteData";

export default function Services() {
  return (
    <>
      <SectionWrapper
        eyebrow="Services"
        title="Integrated design, interiors, and construction services."
        description="Flexible engagement for private residences, premium commercial environments, boutique hospitality, and high-detail interiors."
      >
        <div className="border-y border-carbon/10">
          {services.map((service, index) => (
            <article key={service.title} className="grid gap-4 border-b border-carbon/10 py-7 last:border-b-0 md:grid-cols-12">
              <p className="text-xs uppercase tracking-[0.18em] text-graphite/55 md:col-span-2">0{index + 1}</p>
              <h3 className="text-3xl leading-none md:col-span-4">{service.title}</h3>
              <p className="max-w-2xl text-base leading-relaxed text-graphite/75 md:col-span-6">{service.detail}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>
      <ArchitecturalDesignPackages />
    </>
  );
}
