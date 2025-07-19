import { motion } from "framer-motion";
import {
  MapPinIcon,
  CodeBracketIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500"
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-12 md:gap-20">
        {/* Left side */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Hi, I’m{" "}
            <span className="text-red-500 dark:text-red-400">Srijan Das</span>
          </h2>

          <div className="space-y-3 text-lg sm:text-xl text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-2">
              <MapPinIcon className="w-5 h-5 text-red-500" />
              Based in India
            </p>
            <p className="flex items-center gap-2">
              <CalendarDaysIcon className="w-5 h-5 text-red-500" />
              22 Years Old
            </p>
            <p className="flex items-center gap-2">
              <CodeBracketIcon className="w-5 h-5 text-red-500" />
              Full Stack Developer
            </p>
          </div>

          <p className="text-lg sm:text-xl leading-relaxed max-w-xl text-gray-800 dark:text-gray-200">
            As a passionate developer based in India, I blend clean code with
            bold creativity to deliver robust web and mobile applications. I
            focus on performance, accessibility, and user-first design in every
            project I work on.
          </p>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-red-500 text-red-500 font-semibold rounded hover:bg-red-500 hover:text-white transition"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          className="flex-1 space-y-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Key Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "Next.js",
                "TailwindCSS",
                "Node.js",
                "Python",
                "MongoDB",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-800 dark:text-gray-300">
              <li>→ Full Stack Development</li>
              <li>→ Mobile App Development</li>
              <li>→ UI/UX Design & Prototyping</li>
              <li>→ REST API & Backend Systems</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
