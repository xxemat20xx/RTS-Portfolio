import React from "react";
import { data } from "../data";
import { motion as Motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ProjectCard = ({ project }) => {
  const {
    projectName,
    projectDescription,
    projectLink,
    projectImage,
    techUsed,
  } = project;

  return (
    <Motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="group bg-gray-900/70 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-violet-500/10 transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={projectImage}
          alt={`${projectName} preview`}
          loading="lazy"
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white">{projectName}</h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {projectDescription}
        </p>

        <div className="flex flex-wrap gap-2">
          {techUsed.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-1 px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700"
            >
              {tech.icon && (
                <img
                  src={tech.icon}
                  alt={tech.name || "tech icon"}
                  className="w-4 h-4"
                />
              )}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${projectName}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
        >
          View Project →
        </a>
      </div>
    </Motion.div>
  );
};

const Projects = () => {
  const { projectData } = data;
  const sortedProjects = [...projectData].sort((a, b) => b.id - a.id);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold" id="projects">
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            A selection of projects I've built using modern technologies.
          </p>
        </div>

        <Motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible" // ✅ Mobile safe
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Projects;
