import { motion } from "framer-motion";

const jobs = [
  {
    year: "2020",
    title: "Junior Developer",
    industry: "Video-game",
    country: "Egypt",
    points: [
      "Part of a development team of 3 engineers",
      "Handled Back-End and Networking of a Mobile game",
    ],
    tags: ["C#", "Javascript", "Unity"],
  },
  {
    year: "2021",
    title: "Junior Front-End Developer",
    industry: "NDA",
    country: "UK",
    points: [
      "Made a Front-End Custom Application according to Client's Requirement",
      "Satisfied Client with Iterative and Incremental Development",
    ],
    tags: ["HTML", "Javascript", "JQuery"],
  },
  {
    year: "2023",
    title: "Junior Full Stack Developer",
    industry: "Education Industry",
    country: "India",
    points: [
      "Worked as an App Developer for an Educational Institute ",
      "Developed Interactive Software for Children (under the age of 5) which encouraged Holistic learning",
    ],
    tags: ["React Native", "Gluestack UI"],
  },
  {
    year: "2025",
    title: "Junior Full Stack Developer",
    industry: "IT Industry",
    country: "India",
    points: ["Developed a landing page for a local company"],
    tags: ["React.js", "Tailwind CSS", "TypeScript"],
  },
];

export default function Work() {
  return (
    <section className="relative px-6 py-16 overflow-hidden" id="projects">
      {/* Vertical timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 to-indigo-500 z-0" />

      <div className="flex flex-col gap-16 items-center">
        {jobs.map((job, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <div
              key={idx}
              className="relative w-full flex justify-center items-center py-12"
            >
              {/* Vertical Line */}
              <div className="absolute left-1/2 -translate-x-1/2 z-0 h-full w-[2px] bg-gradient-to-b from-pink-500 to-indigo-500" />

              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-gradient-to-tr from-pink-500 to-indigo-500 shadow-lg border-4 border-white dark:border-black" />

              {/* Horizontal Line to Card */}
              <div
                className={`
          hidden md:block absolute -translate-x-1 h-[5px] w-10 bg-gradient-to-r from-pink-500 to-indigo-500 z-0
          ${isLeft ? "left-1/2 -translate-x-full" : "left-1/2"}
        `}
              />

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`
          relative z-10 w-full 
          ${isLeft ? "md:pr-20 md:mr-160" : "md:pl-20 md:ml-160"} 
          max-w-lg p-6 rounded-xl 
          bg-white/90 dark:bg-black/30 
          border border-black/10 dark:border-white/10 backdrop-blur-md
          shadow-md hover:shadow-xl transition duration-300 ease-in-out
        `}
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-3xl font-bold text-blue-500 dark:text-blue-400"
                >
                  {job.year}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="mt-1 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  {job.title}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="text-gray-700 dark:text-gray-400 font-medium"
                >
                  <span className="text-black dark:text-white font-bold">
                    {job.industry}
                  </span>{" "}
                  • {job.country}
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="mt-3 space-y-1 text-gray-800 dark:text-gray-300 list-inside list-disc"
                >
                  {job.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="flex flex-wrap gap-2 mt-4"
                >
                  {job.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-black/10 dark:bg-white/10 text-black dark:text-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
