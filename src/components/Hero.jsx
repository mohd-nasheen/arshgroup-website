import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={heroRef} className="relative min-h-[86vh] overflow-hidden bg-carbon">
      <motion.img
        src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=84"
        alt="Luxury residential interior designed with stone, timber, and natural light"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ y, scale }}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:12.5vw_100%] opacity-35" />

      <div className="relative z-10 flex min-h-[86vh] items-end">
        <div className="page-container grid gap-10 pb-10 md:grid-cols-12 md:items-end md:pb-16">
          <div className="md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-5 text-xs uppercase tracking-[0.24em] text-white"
            >
              Interior and construction atelier
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 35, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 1.15, delay: 0.08, ease: [0.2, 0.65, 0.2, 1] }}
              className="max-w-5xl text-6xl leading-none text-paper sm:text-7xl md:text-8xl lg:text-9xl"
            >
              ArshGroup
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.26 }}
              className="mt-7 max-w-2xl text-base leading-relaxed text-paper/85 md:text-xl"
            >
              Luxury architecture, interiors, and construction for clients who expect restraint, precision, and permanence.
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="border-l border-paper/35 pl-5 text-sm leading-relaxed text-white md:col-span-4"
          >
            Residential villas, high-performance commercial spaces, and gallery-grade interiors shaped through a single
            design-build studio.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
