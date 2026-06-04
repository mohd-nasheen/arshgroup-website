import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const whatsappLink =
  "https://api.whatsapp.com/send/?phone=919445330479&text=Hi%2C+I+have+a+general+enquiry+about+construction.+Can+you+help%3F&type=phone_number&app_absent=0";

export default function FloatingWhatsAppCTA() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 220, damping: 18, mass: 0.25 });
  const springY = useSpring(pointerY, { stiffness: 220, damping: 18, mass: 0.25 });
  const glowX = useTransform(springX, (value) => `${44 + value * 0.16}%`);
  const glowY = useTransform(springY, (value) => `${44 + value * 0.16}%`);
  const bubbleBackground = useTransform([glowX, glowY], ([x, y]) =>
    `radial-gradient(circle at ${x} ${y}, rgba(251,250,247,0.96), rgba(92,37,49,0.36) 34%, rgba(17,17,17,0.42) 72%)`
  );

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - rect.left - rect.width / 2);
    pointerY.set(event.clientY - rect.top - rect.height / 2);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with ArshGroup support on WhatsApp"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="group fixed bottom-5 right-5 z-[80] flex h-[86px] w-[86px] cursor-pointer items-center justify-center rounded-full sm:bottom-8 sm:right-8 sm:h-24 sm:w-24"
      initial={{ opacity: 0, scale: 0.68, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 240, damping: 14, delay: 0.8 }}
      whileHover={{ scale: 1.08, rotate: -2 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute h-5 w-5 rounded-full border border-paper/80 bg-wine/70 opacity-0 mix-blend-screen shadow-[0_0_24px_rgba(251,250,247,0.55)] transition-opacity duration-300 group-hover:opacity-100"
        style={{ x: springX, y: springY }}
      />
      <motion.span
        aria-hidden="true"
        className="whatsapp-bubble-shell absolute inset-0 rounded-full border border-paper/45 bg-carbon/35 backdrop-blur-xl"
        style={{ background: bubbleBackground }}
      />
      <span aria-hidden="true" className="whatsapp-bubble-ring absolute inset-[-7px] rounded-full border border-wine/45" />
      <span aria-hidden="true" className="whatsapp-bubble-ring whatsapp-bubble-ring-delay absolute inset-[-14px] rounded-full border border-paper/32" />

      <span className="relative grid h-[62px] w-[62px] place-items-center rounded-full border border-paper/25 bg-wine text-3xl shadow-[0_18px_50px_rgba(92,37,49,0.36)] transition-colors duration-300 group-hover:bg-carbon sm:h-[70px] sm:w-[70px] sm:text-4xl">
        <span aria-hidden="true" className="whatsapp-hand">
          👋
        </span>
      </span>
      <span className="pointer-events-none absolute -left-28 top-1/2 hidden -translate-y-1/2 scale-95 border border-carbon/10 bg-paper px-4 py-2 text-xs uppercase tracking-[0.14em] text-carbon opacity-0 shadow-editorial transition-all duration-300 group-hover:-translate-x-2 group-hover:scale-100 group-hover:opacity-100 sm:block">
        Chat now
      </span>
    </motion.a>
  );
}
