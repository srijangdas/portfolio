// Contact.tsx
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import {
  GithubIcon, // this is a custom component below for GitHub SVG
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
            <a
              href="https://github.com/srijangdas"
              target="_blank"
              className="inline-flex items-center p-2 border rounded-lg border-black/10 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
              <GithubIcon className="w-5 h-5 text-black dark:text-white" />
            </a>
          </div>
        </div>

        <section id="contact" className="py-20 px-4 text-black dark:text-white">
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
