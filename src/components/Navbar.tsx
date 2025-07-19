import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  const links = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact Me" },
  ];

  return (
    <nav className="fixed top-0 shadow-lg shadow-black/10 dark:shadow-white/5 w-full z-50 backdrop-blur-md border-b border-white/20 dark:border-white/10 bg-white/30 dark:bg-neutral-900/40 text-black dark:text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-xl font-bold text-black dark:text-white">
          Srijan Das
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white dark:bg-black text-black dark:text-white shadow">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 px-4 w-full text-center border-b hover:bg-blue-50 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
