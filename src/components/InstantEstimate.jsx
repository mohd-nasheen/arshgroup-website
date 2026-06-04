import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BRONZE = "#b8976a";
const BRONZE_DARK = "#a07d52";

const rates = {
  Bangalore: { basic: 2299, premium: 2549, ultra: 2999 },
  Chennai: { basic: 2299, premium: 2549, ultra: 2999 },
  Other: { basic: 2199, premium: 2449, ultra: 2899 },
};

const propertyMultipliers = {
  ground: 1,
  duplex: 1,
  villa: 1.07,
  apartment: 1.05,
};

const tierLabels = {
  basic: "Basic",
  premium: "Premium",
  ultra: "Ultra Premium",
};

const tierDescriptions = {
  basic: "Standard specs. Clean build.",
  premium: "Curated finishes. Upgraded fittings.",
  ultra: "Bespoke finishes. Designer-grade specs.",
};

const steps = ["Location & Size", "Quality Tier", "Property Type"];

const propertyTypes = [
  { value: "ground", label: "Ground Floor" },
  { value: "duplex", label: "Duplex (G+1)" },
  { value: "villa", label: "Villa / G+2+" },
  { value: "apartment", label: "Apartments" },
];

const initialForm = {
  sqft: "",
  city: "Chennai",
  tier: "premium",
  type: "ground",
};

function calculateEstimate({ sqft, city, tier, type }) {
  const cityRates = rates[city] || rates.Other;
  const baseRate = cityRates[tier] || cityRates.premium;
  const multiplier = propertyMultipliers[type] || 1;
  const adjustedRate = Math.round(baseRate * multiplier);

  return {
    low: Number(sqft) * Math.round(adjustedRate * 0.96),
    high: Number(sqft) * Math.round(adjustedRate * 1.12),
    rate: adjustedRate,
    sqft: Number(sqft),
    city,
    tier,
    type,
  };
}

function formatCurrency(value) {
  if (value >= 10000000) return `Rs ${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000) return `Rs ${(value / 100000).toFixed(1)}L`;
  return `Rs ${value.toLocaleString("en-IN")}`;
}

function resultWhatsappUrl(result) {
  const message = `Hi, I used your cost estimator for a ${result.sqft} sq ft home in ${result.city}.
Estimate: Rs ${(result.low / 100000).toFixed(1)}L - Rs ${(result.high / 100000).toFixed(1)}L.
Can I get a detailed breakdown and quote?`;

  return `https://api.whatsapp.com/send/?phone=919445330479&text=${encodeURIComponent(
    message
  )}&type=phone_number&app_absent=0`;
}

const stepTransition = { type: "spring", stiffness: 200, damping: 22 };

export default function InstantEstimate() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState(null);

  const cities = useMemo(() => Object.keys(rates).filter((city) => city !== "Other"), []);
  const tiers = useMemo(() => Object.keys(tierLabels), []);

  const updateField = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const goNext = () => {
    if (step === 0 && (!form.sqft || Number(form.sqft) < 200)) return;
    if (step < 2) {
      setStep((current) => current + 1);
      return;
    }

    setResult(calculateEstimate(form));
    setStep(3);
  };

  const reset = () => {
    setStep(0);
    setForm(initialForm);
    setResult(null);
  };

  return (
    <section id="estimator" className="bg-alabaster py-18 text-carbon md:py-24">
      <div className="page-container">
        <div className="mx-auto max-w-4xl">
          {step < 3 ? (
            <>
              {/* Step indicators */}
              <div className="mb-8 flex items-center justify-center gap-2">
                {steps.map((label, index) => (
                  <div key={label} className="flex items-center gap-2">
                    <span
                      className="grid h-8 w-8 place-items-center rounded-full border text-xs font-medium transition-colors duration-250"
                      style={
                        index <= step
                          ? { borderColor: BRONZE, backgroundColor: BRONZE, color: "#fff" }
                          : { borderColor: "rgba(17,17,17,0.12)", backgroundColor: "rgba(17,17,17,0.04)", color: "rgba(17,17,17,0.42)" }
                      }
                    >
                      {index + 1}
                    </span>
                    {index < steps.length - 1 ? (
                      <span
                        className="h-px w-10 transition-colors duration-250 md:w-20"
                        style={{ backgroundColor: index < step ? BRONZE : "rgba(17,17,17,0.12)" }}
                      />
                    ) : null}
                  </div>
                ))}
              </div>

              {/* Form card */}
              <div className="border border-carbon/10 bg-paper p-6 shadow-editorial md:p-8">
                <AnimatePresence mode="wait">
                  {step === 0 ? (
                    <motion.div
                      key="location"
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={stepTransition}
                      className="grid gap-6 md:grid-cols-2"
                    >
                      <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-graphite/65">
                        Built-up Area (sq ft)
                        <input
                          type="number"
                          min="200"
                          max="20000"
                          placeholder="e.g. 1800"
                          value={form.sqft}
                          onChange={(event) => updateField("sqft", event.target.value)}
                          className="border border-carbon/15 bg-alabaster px-4 py-4 text-base normal-case tracking-normal text-carbon outline-none transition-[border-color] duration-250 placeholder:text-carbon/35 focus:border-[#b8976a]"
                        />
                      </label>
                      <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-graphite/65">
                        City
                        <select
                          value={form.city}
                          onChange={(event) => updateField("city", event.target.value)}
                          className="border border-carbon/15 bg-alabaster px-4 py-4 text-base normal-case tracking-normal text-carbon outline-none transition-[border-color] duration-250 focus:border-[#b8976a]"
                        >
                          {cities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </label>
                    </motion.div>
                  ) : null}

                  {step === 1 ? (
                    <motion.div
                      key="tier"
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={stepTransition}
                      className="grid gap-4 md:grid-cols-3"
                    >
                      {tiers.map((tier) => {
                        const isActive = form.tier === tier;
                        return (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => updateField("tier", tier)}
                            className="border p-5 text-left transition-[border-color,background-color] duration-250"
                            style={
                              isActive
                                ? { borderColor: BRONZE, backgroundColor: `${BRONZE}18`, color: "#111111" }
                                : { borderColor: "rgba(17,17,17,0.10)", backgroundColor: "rgba(17,17,17,0.02)", color: "#2a2b29" }
                            }
                          >
                            <p className="font-display text-2xl leading-none">{tierLabels[tier]}</p>
                            <p className="mt-3 text-xs leading-relaxed text-graphite/62">{tierDescriptions[tier]}</p>
                            <p className="mt-5 text-xs uppercase tracking-[0.15em] text-graphite/52">
                              Rs {rates[form.city][tier].toLocaleString("en-IN")} / sq ft
                            </p>
                          </button>
                        );
                      })}
                    </motion.div>
                  ) : null}

                  {step === 2 ? (
                    <motion.div
                      key="type"
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={stepTransition}
                      className="grid grid-cols-2 gap-4 md:grid-cols-4"
                    >
                      {propertyTypes.map((property) => {
                        const isActive = form.type === property.value;
                        return (
                          <button
                            key={property.value}
                            type="button"
                            onClick={() => updateField("type", property.value)}
                            className="min-h-32 border p-4 text-center transition-[border-color,background-color] duration-250"
                            style={
                              isActive
                                ? { borderColor: BRONZE, backgroundColor: `${BRONZE}18`, color: "#111111" }
                                : { borderColor: "rgba(17,17,17,0.10)", backgroundColor: "rgba(17,17,17,0.02)", color: "#2a2b29" }
                            }
                          >
                            <span className="grid h-full place-items-center font-display text-2xl leading-tight">
                              {property.label}
                            </span>
                          </button>
                        );
                      })}
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                {/* Navigation buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={() => setStep((current) => current - 1)}
                      className="border border-carbon/15 px-6 py-4 text-sm uppercase tracking-[0.14em] text-graphite/72 transition-[border-color,color] duration-250 hover:border-carbon/40 hover:text-carbon"
                    >
                      Back
                    </button>
                  ) : null}
                  <button
                    type="button"
                    onClick={goNext}
                    className="flex-1 px-6 py-4 text-sm uppercase tracking-[0.14em] text-white transition-[background-color,border-color] duration-300"
                    style={{ backgroundColor: BRONZE, borderWidth: 1, borderStyle: "solid", borderColor: BRONZE }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = BRONZE_DARK;
                      e.currentTarget.style.borderColor = BRONZE_DARK;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = BRONZE;
                      e.currentTarget.style.borderColor = BRONZE;
                    }}
                  >
                    {step < 2 ? "Continue" : "Calculate Estimate"}
                  </button>
                </div>
              </div>
            </>
          ) : null}

          {/* Results */}
          {step === 3 && result ? (
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 170, damping: 18 }}
              className="border border-carbon/10 bg-paper p-6 shadow-editorial md:p-8"
            >
              <p className="text-xs uppercase tracking-[0.18em]" style={{ color: BRONZE }}>
                Your Estimate
              </p>
              <p className="mt-4 font-display text-5xl leading-none text-carbon md:text-7xl">
                {formatCurrency(result.low)} – {formatCurrency(result.high)}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-graphite/72">
                Based on {result.sqft} sq ft / {tierLabels[result.tier]} tier / {result.city}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-graphite/52">
                Rate: Rs {result.rate.toLocaleString("en-IN")} / sq ft
              </p>
              <p className="mt-8 text-sm italic leading-relaxed text-graphite/55">
                This is a rough estimate. Final quote depends on design, soil condition, and approvals.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={resultWhatsappUrl(result)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 px-6 py-4 text-center text-sm uppercase tracking-[0.14em] text-white transition-[background-color,border-color] duration-300"
                  style={{ backgroundColor: BRONZE, borderWidth: 1, borderStyle: "solid", borderColor: BRONZE }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = BRONZE_DARK;
                    e.currentTarget.style.borderColor = BRONZE_DARK;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = BRONZE;
                    e.currentTarget.style.borderColor = BRONZE;
                  }}
                >
                  Get Detailed Quote on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={reset}
                  className="border border-carbon/15 px-6 py-4 text-sm uppercase tracking-[0.14em] text-graphite/72 transition-[border-color,color] duration-250 hover:border-carbon/40 hover:text-carbon"
                >
                  Start over
                </button>
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
