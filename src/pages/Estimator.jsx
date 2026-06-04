import InstantEstimate from "../components/InstantEstimate";

export default function Estimator() {
  return (
    <>
      <section className="bg-paper pt-32 text-carbon md:pt-40">
        <div className="page-container pb-10">
          <p className="eyebrow text-[#b8976a]">
            Instant Estimate
          </p>
          <h1 className="max-w-4xl font-display text-5xl leading-none md:text-8xl">
            How much will your home cost?
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-graphite/72 md:text-lg">
            Get a rough range in 30 seconds. No sign-up required. Final cost depends on design, soil
            condition, approvals, and selected specifications.
          </p>
        </div>
      </section>
      <InstantEstimate />
    </>
  );
}
