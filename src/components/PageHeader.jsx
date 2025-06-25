import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-[var(--color-cream)] pt-16 pb-6 px-4 text-center shadow-sm"
    >
      {/* Judul */}
      <h2 className="font-extrabold text-2xl md:text-3xl text-[var(--color-brand-green)] mb-1">
        {title}
      </h2>

      {/* Subjudul */}
      {subtitle && (
        <p className="font-poppins text-[var(--color-brown)] text-xs md:text-base max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Garis dekoratif */}
      <div className="mt-3 w-20 h-1 bg-[var(--color-green-dark)] rounded-full mx-auto shadow-md" />
    </motion.div>
  );
}
