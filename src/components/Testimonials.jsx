import { motion } from "framer-motion";

export default function Testimonials({ items }) {
  return (
    <div className="grid gap-0 border-y border-carbon/10 md:grid-cols-2">
      {items.map((item, idx) => (
        <motion.blockquote
          key={item.author}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: idx * 0.08 }}
          className="border-carbon/10 p-7 md:border-r md:p-10"
        >
          <p className="text-xl leading-relaxed text-carbon/88 md:text-2xl">"{item.quote}"</p>
          <footer className="mt-8 text-sm text-graphite/66">
            <span className="font-semibold text-carbon">{item.author}</span>
            <span> / {item.role}</span>
          </footer>
        </motion.blockquote>
      ))}
    </div>
  );
}
