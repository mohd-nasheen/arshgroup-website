import SectionWrapper from "../components/SectionWrapper";
import { editorialPillars, studioStats } from "../data/siteData";

export default function About() {
  return (
    <SectionWrapper
      eyebrow="About / Philosophy"
      title="A construction company with the eye of an architecture atelier."
      description="ArshGroup combines editorial spatial direction with site discipline. Design intent, engineering, procurement, and craft are held together by one accountable team."
    >
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <img
            src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1100&q=82"
            alt="Modern luxury interior with natural light and precise construction detailing"
            loading="lazy"
            decoding="async"
            className="h-[520px] w-full object-cover"
          />
        </div>
        <div className="md:col-span-7">
          <p className="font-display text-4xl leading-tight md:text-6xl">
            The work is calm because the process is rigorous.
          </p>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-graphite/76 md:text-lg">
            We prioritize sustainability as an active design input: passive cooling, daylight-first planning,
            responsible material choices, and lifecycle-aware detailing. The result is architecture that feels quietly
            luxurious while reducing long-term operational and environmental cost.
          </p>
          <div className="mt-10 grid gap-0 border-y border-carbon/10 md:grid-cols-2">
            {editorialPillars.map((pillar) => (
              <p key={pillar} className="border-b border-carbon/10 py-5 text-sm uppercase tracking-[0.15em] text-carbon/70 md:border-r">
                {pillar}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-4">
        {studioStats.map((stat) => (
          <div key={stat.label} className="border-t border-carbon/15 pt-5">
            <p className="font-display text-5xl leading-none">{stat.value}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-graphite/65">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
