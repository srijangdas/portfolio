const stats = [
  { title: "Junior", description: "Intermediate Level" },
  { title: "10+", description: "Projects Completed" },
  { title: "8", description: "Happy Clients" },
  { title: "3", description: "Countries Reached" },
];

export default function StatsSection() {
  return (
    <section
      className="flex justify-center gap-6 flex-wrap px-6 py-8"
      id="work"
    >
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="border border-red-500/20 rounded-xl p-6 text-center w-[160px] md:w-[200px] bg-white backdrop-blur-md dark:bg-white/10 transition"
        >
          <h2 className="text-2xl text-red-500 font-semibold">{stat.title}</h2>
          <p className="text-sm text-black dark:text-gray-300 mt-2">
            {stat.description}
          </p>
        </div>
      ))}
    </section>
  );
}
