import { data } from "../data";
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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ProjectCard = ({ project, index }) => {
  const { projectName, projectDescription, projectLink, projectImage, techUsed } = project;

  return (
    <Motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-500"
    >
      {/* Soft background glow behind card */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-violet-600/20 via-transparent to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card body */}
      <div className="relative flex flex-col h-full bg-[#0f0f15] border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-transparent">
        {/* Image section */}
        <div className="relative overflow-hidden aspect-video">
          <img
            src={projectImage}
            alt={`${projectName} preview`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Project index badge (top-left) */}
          <div className="absolute top-3 left-3 px-2.5 py-1 text-xs font-medium text-white/70 bg-black/30 backdrop-blur rounded-full">
            {String(index + 1).padStart(2, '0')}
          </div>
          {/* Permanent subtle overlay + hover button */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-violet-600/90 hover:bg-violet-500 rounded-full backdrop-blur transition-colors"
            >
              <span>Live</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex flex-col flex-1 space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight line-clamp-1">
            {projectName}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed flex-1 line-clamp-3">
            {projectDescription}
          </p>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-2">
            {techUsed.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-gray-300"
              >
                {tech.icon && (
                  <img src={tech.icon} alt={tech.name || "tech"} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                )}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>

          {/* View link */}
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors mt-1 group/link"
          >
            <span>View Project</span>
            <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </Motion.div>
  );
};

const Projects = () => {
  const { projectData } = data;
  const sortedProjects = [...projectData].sort((a, b) => b.id - a.id);

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 relative bg-[#0a0a0f]" id="projects">
      {/* Background orb */}
      <div className="absolute top-1/3 left-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-violet-700/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 mt-3 sm:mt-4 max-w-xl mx-auto text-base sm:text-lg">
            A selection of work I've built with modern tools.
          </p>
        </Motion.div>

        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {sortedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Projects;