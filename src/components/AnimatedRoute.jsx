import { motion } from "framer-motion";

export default function AnimatedRoute({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.7, ease: [0.2, 0.65, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
