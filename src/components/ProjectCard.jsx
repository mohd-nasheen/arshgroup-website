import { motion } from "framer-motion";

export default function ProjectCard({ project, featured = false }) {
  return (
    <motion.article
      className={`group overflow-hidden border border-carbon/10 bg-paper ${featured ? "md:grid md:grid-cols-12" : ""}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`relative overflow-hidden ${featured ? "h-[420px] md:col-span-7 md:h-[560px]" : "h-72 md:h-96"}`}>
        <motion.img
          src={project.image}
          alt={project.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 1.0, ease: [0.2, 0.65, 0.2, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className={`flex flex-col justify-between p-6 md:p-8 ${featured ? "md:col-span-5" : ""}`}>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-graphite/60">
            {project.type} / {project.year}
          </p>
          <h3 className={`${featured ? "text-4xl md:text-6xl" : "text-3xl"} mt-4 leading-none`}>{project.name}</h3>
          <p className="mt-3 text-sm text-graphite/65">{project.location}</p>
          <p className="mt-6 text-sm leading-relaxed text-carbon/78 md:text-base">{project.summary}</p>
        </div>

        <div className="mt-8 border-t border-carbon/10 pt-5">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-graphite/55">Material Direction</p>
          <p className="text-sm text-carbon/80">{project.material}</p>
          <div className="mt-5 grid gap-3">
            {project.metrics.map((metric) => (
              <span key={metric} className="border-t border-carbon/10 pt-3 text-xs uppercase tracking-[0.12em] text-carbon/68">
                {metric}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
