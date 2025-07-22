import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const welcomeWords = [
  "Welcome", // Start
  "Bienvenido",
  "Willkommen",
  "ようこそ",
  "स्वागत है", // End
];

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (index < welcomeWords.length - 1) {
      const isFirstOrLast = index === 0 || index === welcomeWords.length - 2;
      const delay = isFirstOrLast ? 1000 : 500;

      timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, delay);
    } else {
      timeout = setTimeout(() => onFinish(), 1000);
    }

    return () => clearTimeout(timeout);
  }, [index, onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute w-full h-full pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-purple-500 opacity-30 blur-3xl animate-pulse"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-pink-500 opacity-25 blur-2xl animate-pulse"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 7 }}
        />
        <motion.div
          className="absolute top-10 right-10 w-60 h-60 rounded-full bg-yellow-400 opacity-20 blur-3xl animate-pulse"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
      </div>

      {/* Animated Welcome Text */}
      <AnimatePresence mode="wait">
        <motion.div
          key={welcomeWords[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="text-4xl sm:text-6xl text-white font-bold tracking-wider z-10"
        >
          {welcomeWords[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
