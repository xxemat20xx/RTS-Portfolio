import { motion as Motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/5">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
        >
          {/* Connect column */}
          <Motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-white tracking-tight">
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href="https://github.com/xxemat20xx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 group-hover:border-violet-400/30 group-hover:bg-violet-500/10 transition-all">
                  <img
                    src="https://skillicons.dev/icons?i=github"
                    alt="GitHub"
                    className="w-5 h-5"
                  />
                </span>
                <span>GitHub</span>
                <span className="ml-auto text-xs text-gray-600 group-hover:text-violet-400 transition-colors">
                  ↗
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/raymart-t-santiago-024aa41b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 group-hover:border-violet-400/30 group-hover:bg-violet-500/10 transition-all">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    alt="LinkedIn"
                    className="w-5 h-5"
                  />
                </span>
                <span>LinkedIn</span>
                <span className="ml-auto text-xs text-gray-600 group-hover:text-violet-400 transition-colors">
                  ↗
                </span>
              </a>
            </div>
          </Motion.div>

          {/* Contact column */}
          <Motion.div variants={itemVariants} className="space-y-4" id="contact">
            <h3 className="text-lg font-semibold text-white tracking-tight">
              Contact
            </h3>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                emat5252@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                +63 912 345 6789
              </p>
            </div>
          </Motion.div>

          {/* Thanks column */}
          <Motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-white tracking-tight">
              Special Thanks
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Grateful to The Odin Project for their outstanding curriculum and community support.
            </p>
            <a
              href="https://www.theodinproject.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors group"
            >
              <span>Visit The Odin Project</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Motion.div>
        </Motion.div>

        {/* Bottom divider and copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Raymart S. All rights reserved.</p>
          <p>
            Designed & built with{" "}
            <span className="text-violet-400">❤</span> and modern tools.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;