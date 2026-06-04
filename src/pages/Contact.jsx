import SectionWrapper from "../components/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper
      eyebrow="Contact"
      title="Let us shape your next landmark space."
      description="Share your project brief, timeline, and location. The first conversation is built around fit, ambition, budget clarity, and the right delivery path."
    >
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="border-y border-carbon/10 py-6">
            <p className="text-xs uppercase tracking-[0.18em] text-graphite/55">Studio</p>
            <p className="mt-4 font-display text-3xl leading-tight">Chennai </p>
            <p className="mt-5 text-sm leading-relaxed text-graphite/72">
              Private residences, commercial interiors, boutique hospitality, and full design-build commissions.
            </p>
          </div>
        </div>

        <form className="grid gap-5 md:col-span-8 md:grid-cols-2" aria-label="Contact form">
          <label className="grid gap-2 text-sm uppercase tracking-[0.12em] text-graphite/70">
            Name
            <input className="border border-carbon/20 bg-paper px-4 py-4 text-base normal-case tracking-normal text-carbon" type="text" name="name" autoComplete="name" />
          </label>
          <label className="grid gap-2 text-sm uppercase tracking-[0.12em] text-graphite/70">
            Email
            <input className="border border-carbon/20 bg-paper px-4 py-4 text-base normal-case tracking-normal text-carbon" type="email" name="email" autoComplete="email" />
          </label>
          <label className="grid gap-2 text-sm uppercase tracking-[0.12em] text-graphite/70 md:col-span-2">
            Project Type
            <input className="border border-carbon/20 bg-paper px-4 py-4 text-base normal-case tracking-normal text-carbon" type="text" name="projectType" />
          </label>
          <label className="grid gap-2 text-sm uppercase tracking-[0.12em] text-graphite/70 md:col-span-2">
            Brief
            <textarea className="min-h-40 border border-carbon/20 bg-paper px-4 py-4 text-base normal-case tracking-normal text-carbon" name="brief" />
          </label>
          <div className="md:col-span-2">
            <button
              type="button"
              className="border border-carbon bg-carbon px-6 py-4 text-sm uppercase tracking-[0.14em] text-paper transition hover:bg-transparent hover:text-carbon"
            >
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
}
