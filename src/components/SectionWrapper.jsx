import { motion } from "framer-motion";

export default function SectionWrapper({ id, eyebrow, title, description, children, dark = false }) {
  return (
    <section id={id} className={`section-padding ${dark ? "bg-carbon text-paper" : ""}`}>
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.75, ease: [0.2, 0.65, 0.2, 1] }}
          className="mb-12 grid gap-8 border-t border-current/15 pt-8 md:grid-cols-12"
        >
          <div className="md:col-span-3">
            {eyebrow ? <span className={`eyebrow ${dark ? "text-paper/60" : ""}`}>{eyebrow}</span> : null}
          </div>
          <div className="md:col-span-7">
            {title ? <h2 className="text-4xl leading-none md:text-6xl">{title}</h2> : null}
            {description ? (
              <p className={`mt-6 text-base leading-relaxed md:text-lg ${dark ? "text-paper/68" : "text-graphite/72"}`}>
                {description}
              </p>
            ) : null}
          </div>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
