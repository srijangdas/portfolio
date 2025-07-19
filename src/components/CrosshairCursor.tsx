import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const CrosshairCursor = () => {
  const hoverTargets = document.querySelectorAll("a, button, .cursor-hover");
  const handleEnter = () => controls.start({ scale: 1.1 });
  const handleLeave = () => controls.start({ scale: 1 });

  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);
  });

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const click = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 150);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("click", click);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", click);
    };
  }, []);

  useEffect(() => {
    controls.start({
      x: pos.x - 15,
      y: pos.y - 15,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    });
  }, [pos, controls]);

  return (
    <>
      {/* Glitchy trail */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[999] w-6 h-6 rounded-full bg-blue-500/20 dark:bg-yellow-400/10 blur-xl"
        animate={{
          x: pos.x - 12,
          y: pos.y - 12,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      />
      {/* Main Crosshair */}
      <motion.div
        className={`pointer-events-none fixed z-[1000] hidden md:flex items-center justify-center`}
        animate={controls}
      >
        <div
          className={`w-8 h-8 border-2 rounded-full 
            transition-transform duration-200 ease-out
            ${
              clicked ? "scale-75" : "scale-100"
            } border-blue-500 dark:border-yellow-400`}
        >
          <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-yellow-400 rounded-full m-auto mt-[13px]" />
        </div>
      </motion.div>
    </>
  );
};

export default CrosshairCursor;
