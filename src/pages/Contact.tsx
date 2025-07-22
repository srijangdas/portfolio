import { EnvelopeIcon } from "@heroicons/react/24/solid";
import {
  GithubIcon, // keep this if you have a custom GitHub SVG component
} from "../components/Icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-10 bg-white dark:bg-black transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold text-center text-black dark:text-white">
        Let's Create Something Together
      </h2>
      <p className="text-center mt-3 text-gray-600 dark:text-gray-400">
        Have a project in mind? I'm available for freelance projects and
        collaborations.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-black/10 dark:border-white/10">
            <EnvelopeIcon className="w-6 h-6 text-red-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Discord
              </p>
              <p className="text-lg font-semibold text-black dark:text-white">
                GodsTheGuy#1469
              </p>
              <p className="text-xs text-gray-400">
                Response time: Within 24 hours
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-md font-semibold text-black dark:text-white mb-2">
              Connect with me
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/srijangdas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center p-2 border rounded-lg border-black/10 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition"
              >
                <GithubIcon className="w-5 h-5 text-black dark:text-white" />
              </a>
              <a
                href="https://twitter.com/GodsTheGuy_TM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center p-2 border rounded-lg border-black/10 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition"
              >
                <svg
                  className="w-5 h-5 text-black dark:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.1 9.1 0 0 1-2.83 1.08A4.52 4.52 0 0 0 16.6 0c-2.5 0-4.52 2.2-4.52 4.91 0 .39.03.77.1 1.13A12.88 12.88 0 0 1 3.15.88a5 5 0 0 0-.62 2.47 4.8 4.8 0 0 0 2 4.1 4.48 4.48 0 0 1-2.05-.6v.06c0 2.2 1.5 4.06 3.5 4.48a4.3 4.3 0 0 1-2.03.08c.58 2 2.3 3.45 4.32 3.5A9 9 0 0 1 0 20.45a12.66 12.66 0 0 0 6.29 1.84c7.55 0 11.67-6.58 11.67-12.3 0-.2 0-.4-.02-.6A8.18 8.18 0 0 0 23 3z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/srijangdas/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center p-2 border rounded-lg border-black/10 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition"
              >
                <svg
                  className="w-5 h-5 text-black dark:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 5 3.9 6 2.5 6S0 5 0 3.5 1.08 1 2.5 1 5 2 4.98 3.5zM.5 8h4V24h-4V8zM7.5 8h3.6v2.3h.1c.5-1 1.6-2.3 3.9-2.3 4.2 0 5 2.6 5 6.1V24h-4v-8.5c0-2-.1-4.5-2.7-4.5-2.7 0-3.1 2.2-3.1 4.3V24h-4V8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Email Me Button */}
        <section
          id="contact-button"
          className="py-10 px-4 text-black dark:text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I’m always open to new opportunities, collaborations, or just a
              good chat. Drop me a message!
            </p>

            <a
              href="mailto:srijangod10@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full shadow hover:scale-105 hover:bg-gray-900 dark:hover:bg-gray-200 transition duration-300"
            >
              <EnvelopeIcon className="w-5 h-5" />
              Email Me
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
