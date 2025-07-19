// components/AnimatedButton.tsx
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

const AnimatedButton = ({ children, href, onClick }: Props) => {
  const base = (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 15px rgba(0, 191, 255, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-block px-6 py-3 rounded-lg bg-red-500 text-white dark:text-black font-semibold transition-all duration-300 overflow-hidden cursor-none"
      onClick={onClick}
    >
      {/* Glowing animated ring */}
      <span className="absolute inset-0 rounded-lg border border-white/30 dark:border-black/30 pointer-events-none blur-[2px]" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );

  return href ? (
    <a href={href} className="inline-block cursor-none">
      {base}
    </a>
  ) : (
    base
  );
};

export default AnimatedButton;
