// components/SelectiveWork.tsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "Code Overflow",
    year: "2025",
    category: "Full-Stack Development",
    description: "Interactive Clone of Stack Overflow, using PERN Stack.",
    tech: ["Postgresql", "Express", "React", "Node.js", "Tailwindcss"],
    image: "/images/CodeOverflow.png",
    link: "https://github.com/srijangdas/CodeOverflow",
  },
  {
    title: "Simon Game",
    year: "2025",
    category: "Creative Development",
    description: "A basic Javascript project of Simon Game.",
    tech: ["HTML", "CSS", "Javascript"],
    image: "/images/SimonGame.png",
    link: "https://github.com/srijangdas/Simon-game",
  },
];

export default function SelectiveWork() {
  return (
    <section
      id="selective-work"
      className="bg-white dark:bg-black text-black dark:text-white py-20 px-4 transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold text-center mb-16">Selective Work</h2>

      <div className="space-y-24 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            viewport={{ once: true }}
          >
            {/* Left Content */}
            <div className="space-y-4">
              <p className="uppercase tracking-wider text-sm text-gray-600 dark:text-gray-400">
                {proj.category} •{" "}
                <span className="text-red-500">{proj.year}</span>
              </p>

              <h3 className="text-4xl font-semibold">{proj.title}</h3>

              <p className="text-gray-700 dark:text-gray-400">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm border border-black/20 dark:border-white/20 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-black dark:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={proj.link}
                className="inline-block mt-4 px-5 py-2.5 rounded-lg border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>

            {/* Right Image */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={proj.image}
                alt={proj.title}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/50 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white dark:text-white border border-white dark:border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
