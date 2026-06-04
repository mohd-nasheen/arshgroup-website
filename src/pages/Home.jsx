import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import ArchitecturalDesignPackages from "../components/ArchitecturalDesignPackages";
import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";
import Testimonials from "../components/Testimonials";
import {
  editorialPillars,
  processSteps,
  projects,
  services,
  studioStats,
  testimonials,
} from "../data/siteData";

export default function Home() {
  const [featuredProject, ...secondaryProjects] = projects;
  const navigate = useNavigate();

  return (
    <>
      <Hero />

      <section className="border-b border-carbon/10 bg-paper">
        <div className="page-container grid gap-8 py-8 md:grid-cols-4">
          {studioStats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55 }}
              className="border-l border-carbon/15 pl-5"
            >
              <p className="font-display text-5xl leading-none text-carbon">{stat.value}</p>
              <p className="mt-2 max-w-44 text-xs uppercase tracking-[0.16em] text-graphite/65">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionWrapper
        id="featured-projects"
        eyebrow="Featured Projects"
        title="Case studies built like editorials, not thumbnails."
        description="Each commission is presented as a spatial argument: climate response, material discipline, lifestyle choreography, and construction intelligence."
      >
        <div className="grid gap-6">
          <ProjectCard project={featuredProject} featured />
          <div className="grid gap-6 md:grid-cols-3">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="philosophy"
        eyebrow="Philosophy"
        title="Luxury is the quiet confidence of a space that performs."
        description="ArshGroup treats sustainability as a design material. We use natural light, passive comfort, circular materials, and AI-assisted option studies to make each space calmer, sharper, and more durable."
        dark
      >
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82"
              alt="Refined interior material palette with sculptural light"
              loading="lazy"
              decoding="async"
              className="h-[420px] w-full object-cover"
            />
          </div>
          <div className="md:col-span-7">
            <p className="max-w-3xl font-display text-4xl leading-tight text-paper md:text-6xl">
              We do not decorate buildings. We tune them for light, movement, texture, and memory.
            </p>
            <div className="mt-10 grid gap-0 border-y border-paper/14 md:grid-cols-2">
              {editorialPillars.map((pillar) => (
                <p key={pillar} className="border-b border-paper/14 py-5 text-sm uppercase tracking-[0.16em] text-paper/70 md:border-r">
                  {pillar}
                </p>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="services"
        eyebrow="Services"
        title="One studio from first sketch to final polish."
        description="The offering is intentionally integrated: architecture, interiors, construction, sustainability, and project governance share one visual and operational standard."
      >
        <div className="border-y border-carbon/10">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className="grid gap-4 border-b border-carbon/10 py-7 last:border-b-0 md:grid-cols-12 md:items-start"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-graphite/55 md:col-span-2">
                0{index + 1}
              </p>
              <h3 className="text-3xl leading-none md:col-span-4 md:text-4xl">{service.title}</h3>
              <p className="max-w-2xl text-base leading-relaxed text-graphite/75 md:col-span-6">{service.detail}</p>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>

      <ArchitecturalDesignPackages />

      <section className="bg-alabaster py-10 md:py-14">
        <div className="page-container flex justify-center">
          <motion.button
            type="button"
            onClick={() => navigate("/estimator")}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: [0.2, 0.65, 0.2, 1] }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 border border-[#b8976a] bg-[#b8976a] px-10 py-5 font-display text-lg tracking-[0.06em] text-white transition-[background-color,border-color,transform] duration-300 will-change-transform hover:border-[#a07d52] hover:bg-[#a07d52]"
          >
            Calculate Your Estimate
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 translate-x-0 transition-transform duration-300 will-change-transform group-hover:translate-x-1.5"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>
        </div>
      </section>

      <SectionWrapper
        id="process"
        eyebrow="Process"
        title="A high-control path from ambition to handover."
        description="The process borrows from product strategy and construction management: fewer surprises, better decisions, and more protected design intent."
      >
        <div className="grid gap-px bg-carbon/10 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="bg-alabaster p-6 md:min-h-80 md:p-7"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-graphite/55">Phase 0{index + 1}</p>
              <h3 className="mt-8 text-3xl leading-none">{step.title}</h3>
              <p className="mt-6 text-sm leading-relaxed text-carbon/72">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="testimonials"
        eyebrow="Client Voice"
        title="Trusted for spaces where every decision is visible."
      >
        <Testimonials items={testimonials} />
      </SectionWrapper>

      <section id="contact" className="bg-wine py-18 text-paper md:py-24">
        <div className="page-container grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="eyebrow text-paper/62 text-white">Start Your Project</p>
            <h2 className="max-w-4xl font-display text-5xl leading-none md:text-7xl">
              Commission a space with the gravity of a landmark.
            </h2>
          </div>
          <div className="md:col-span-4">
            <Link
              to="/contact"
              className="inline-flex border border-paper/55 px-6 py-4 text-sm uppercase tracking-[0.14em] transition hover:bg-paper hover:text-wine"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
