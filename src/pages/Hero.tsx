import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import MarqueeBackground from "../components/MarqueeBackground";
import AnimatedButton from "../components/AnimatedButton";
import ScrollIndicator from "../components/ScrollIndicator";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 bg-white dark:bg-black text-black dark:text-white overflow-hidden"
    >
      <MarqueeBackground />

      <div className="max-w-4xl text-center space-y-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold"
        >
          Hi, I’m{" "}
          <span className="text-blue-500 dark:text-blue-400">[SRIJAN DAS]</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300"
        >
          I build modern web & mobile experiences for businesses and consumers
          alike.
        </motion.p>

        <h2 className="mt-4 text-xl md:text-2xl z-10">
          <Typewriter
            words={[
              "Full-Stack Developer",
              "Mobile App Creator",
              "Open Source Contributor",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <div className="p-2"></div>
        <AnimatedButton href="#projects">View My Work</AnimatedButton>
        <div className="p-0"></div>
        <AnimatedButton href="#contact">Contact Me</AnimatedButton>

        <ScrollIndicator />
      </div>
    </section>
  );
};

export default HeroSection;
