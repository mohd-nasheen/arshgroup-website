import { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import { services } from "../data/siteData";
import { supabase } from "../lib/supabase";

const initialForm = { name: "", email: "", phone: "", service: "", message: "" };
const inputClass =
  "border border-carbon/20 bg-paper px-4 py-4 text-base normal-case tracking-normal text-carbon focus:outline-none focus:border-carbon";
const labelClass = "grid gap-2 text-sm uppercase tracking-[0.12em] text-graphite/70";

function validate({ name, email, phone, message }) {
  const errors = {};
  if (name.trim().length < 2) errors.name = "Please enter your name.";
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10) errors.phone = "Enter a valid phone number (10+ digits).";
  if (message.trim().length < 10) errors.message = "Tell us a little more about the project.";
  if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = "That email doesn't look right.";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "submitting") return;
    const v = validate(form);
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }
    setErrors({});
    setStatus("submitting");
    const { error } = await supabase.from("enquiries").insert({
      name: form.name.trim(),
      email: form.email.trim() || null,
      phone: form.phone.trim(),
      service: form.service || null,
      message: form.message.trim(),
      source: "website",
    });
    if (error) {
      console.error("Enquiry insert failed", error);
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm(initialForm);
  }

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

        <form
          className="grid gap-5 md:col-span-8 md:grid-cols-2"
          aria-label="Contact form"
          onSubmit={handleSubmit}
          noValidate
        >
          <label className={labelClass}>
            Name
            <input
              className={inputClass}
              type="text"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={update("name")}
              aria-invalid={!!errors.name}
            />
            {errors.name && <span className="text-xs normal-case tracking-normal text-wine">{errors.name}</span>}
          </label>

          <label className={labelClass}>
            Phone
            <input
              className={inputClass}
              type="tel"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              value={form.phone}
              onChange={update("phone")}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && <span className="text-xs normal-case tracking-normal text-wine">{errors.phone}</span>}
          </label>

          <label className={labelClass}>
            <span>
              Email <span className="text-graphite/40">(optional)</span>
            </span>
            <input
              className={inputClass}
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={update("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && <span className="text-xs normal-case tracking-normal text-wine">{errors.email}</span>}
          </label>

          <label className={labelClass}>
            <span>
              Service <span className="text-graphite/40">(optional)</span>
            </span>
            <select
              className={`${inputClass} appearance-none`}
              name="service"
              value={form.service}
              onChange={update("service")}
            >
              <option value="">Select…</option>
              {services.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
          </label>

          <label className={`${labelClass} md:col-span-2`}>
            Message
            <textarea
              className={`${inputClass} min-h-40`}
              name="message"
              value={form.message}
              onChange={update("message")}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <span className="text-xs normal-case tracking-normal text-wine">{errors.message}</span>
            )}
          </label>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center gap-3 border border-carbon bg-carbon px-6 py-4 text-sm uppercase tracking-[0.14em] text-paper transition hover:bg-transparent hover:text-carbon disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" && (
                <span className="h-3 w-3 animate-spin rounded-full border border-paper/40 border-t-paper" />
              )}
              {status === "submitting" ? "Sending…" : "Send Inquiry"}
            </button>

            {status === "success" && (
              <p className="mt-4 text-xs uppercase tracking-[0.14em] text-graphite/80">
                Thank you. Our team will contact you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-xs uppercase tracking-[0.14em] text-wine">
                Unable to submit enquiry. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
}
