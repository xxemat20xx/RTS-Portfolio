import { data } from "../data";
import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const ShowcaseProject = ({ project, index, total }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0, show: false });
  const number = String(index + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top, show: true });
  };

  const isEven = index % 2 === 0;

  return (
    <Motion.article
      ref={ref}
      variants={fadeUp}
      className="group relative grid grid-cols-12 gap-x-6 gap-y-8 py-16 md:py-24 border-t border-white/[0.06]"
    >
      {/* Meta column */}
      <div
        className={`col-span-12 md:col-span-3 flex md:flex-col md:sticky md:top-28 md:self-start gap-4 md:gap-6 ${isEven ? "md:order-1" : "md:order-3"
          }`}
      >
        <div className="flex-1">
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30">
            {number} <span className="text-white/15">/</span> {totalStr}
          </div>
          <div className="mt-4 inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-mono uppercase tracking-[0.2em] text-white/50">
            {project.category || "Product"}
            {project.year ? ` · ${project.year}` : ""}
          </div>

          <h3 className="hidden md:block mt-8 text-2xl lg:text-3xl font-medium tracking-tight text-white leading-[1.05]">
            {project.projectName}
          </h3>

          <p className="hidden md:block mt-5 text-white/55 text-[14px] leading-relaxed">
            {project.projectDescription}
          </p>

          <div className="hidden md:flex mt-6 flex-wrap gap-1.5">
            {project.techUsed.map((tech) => (
              <span
                key={tech.id}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[10.5px] text-white/70 font-mono"
              >
                {tech.icon && <img src={tech.icon} alt="" className="w-3 h-3" />}
                {tech.name}
              </span>
            ))}
          </div>

          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex group/link mt-8 items-center gap-2 text-sm text-white/90 w-fit"
          >
            <span className="relative">
              View project
              <span className="absolute left-0 -bottom-0.5 h-px w-full bg-white/30 origin-left scale-x-100 group-hover/link:scale-x-0 transition-transform duration-500" />
              <span className="absolute left-0 -bottom-0.5 h-px w-full bg-white origin-right scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500 delay-100" />
            </span>
            <span className="transition-transform group-hover/link:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="col-span-12 md:col-span-9 md:order-2">
        <a
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={handleMove}
          onMouseLeave={() => setPos((p) => ({ ...p, show: false }))}
          className="relative block overflow-hidden rounded-[28px] cursor-none group/img"
        >
          {/* gradient frame */}
          <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-tr from-white/15 via-white/5 to-transparent opacity-80" />

          {/* image stage — full image visible (object-contain) */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] bg-gradient-to-br from-neutral-900 via-neutral-950 to-black">
            {/* soft halo behind image */}
            <div className="absolute inset-0 opacity-60">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-white/[0.04] blur-3xl" />
            </div>

            {/* subtle grid */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />

            <Motion.img
              src={project.projectImage}
              alt={project.projectName}
              style={{ y: imgY }}
              className="relative z-10 w-full h-full object-contain p-6 md:p-10 transition-transform duration-[1200ms] ease-out group-hover/img:scale-[1.03] drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
            />

            {/* corner badges */}
            <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] text-white/85">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            </div>

            <div className="absolute top-5 right-5 z-20">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
                {number}
              </span>
            </div>

            {/* mobile title overlay */}
            <div className="md:hidden absolute bottom-0 left-0 right-0 p-5 z-20 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl font-semibold tracking-tight text-white leading-tight">
                {project.projectName}
              </h3>
            </div>

            {/* custom cursor */}
            {pos.show && (
              <div
                className="pointer-events-none absolute z-30 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white text-black grid place-items-center text-[11px] font-semibold tracking-wider"
                style={{ left: pos.x, top: pos.y }}
              >
                OPEN ↗
              </div>
            )}
          </div>
        </a>

        {/* mobile detail */}
        <div className="md:hidden mt-6 space-y-5">
          <p className="text-white/60 text-[15px] leading-relaxed">
            {project.projectDescription}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.techUsed.map((tech) => (
              <span
                key={tech.id}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] text-white/70 font-mono"
              >
                {tech.icon && <img src={tech.icon} alt="" className="w-3 h-3" />}
                {tech.name}
              </span>
            ))}
          </div>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/90"
          >
            View project <span>→</span>
          </a>
        </div>
      </div>
    </Motion.article>
  );
};

const Projects = () => {
  const { projectData } = data;
  const sortedProjects = [...projectData].sort((a, b) => b.id - a.id);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#08080a] py-24 md:py-36 px-5 md:px-10"
    >
      {/* Noise / grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      {/* Ambient gradients */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-violet-600/15 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[160px]" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="grid grid-cols-12 gap-4 mb-20 md:mb-32"
        >
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-white/40">
              <span className="h-px w-8 bg-white/30" />
              Index / Work
            </div>
          </div>

          <div className="col-span-12 md:col-span-9">
            <h2 className="text-[clamp(2.75rem,7vw,7rem)] font-medium text-white leading-[0.95] tracking-[-0.04em]">
              Selected
              <br />
              <span className="text-white/30">projects, </span>
              <span className="italic font-serif font-extralight text-white/90">
                driven by
              </span>{" "}
              <span className="italic font-serif font-extralight text-white/90">
                a passion
              </span>
              <br />
              <span className="text-white/30">of building.</span>
            </h2>

            <div className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-6">
              <p className="text-white/55 max-w-md text-[15px] leading-relaxed">
                A small archive of products and interfaces — built end-to-end,
                from first sketch to last commit.
              </p>
              <div className="font-mono text-xs text-white/40 uppercase tracking-widest">
                {String(sortedProjects.length).padStart(2, "0")} Projects
                <span className="mx-2 text-white/20">/</span>
                {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </Motion.div>

        {/* Project list */}
        <Motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {sortedProjects.map((project, index) => (
            <ShowcaseProject
              key={project.id}
              project={project}
              index={index}
              total={sortedProjects.length}
            />
          ))}
        </Motion.div>

        {/* Footer */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mt-24 md:mt-32 border-t border-white/10 pt-10 grid grid-cols-12 gap-4"
        >
          <div className="col-span-12 md:col-span-3 text-[11px] font-mono uppercase tracking-[0.3em] text-white/40">
            ↳ Next
          </div>
          <div className="col-span-12 md:col-span-9">
            <a
              href="#contact"
              className="group inline-flex items-baseline gap-4 text-4xl md:text-6xl font-medium text-white tracking-[-0.03em] leading-none"
            >
              <span className="relative">
                Have a project in mind?
                <span className="block h-px w-0 group-hover:w-full bg-white transition-all duration-700 ease-out" />
              </span>
              <span className="text-2xl md:text-4xl text-white/40 group-hover:text-white group-hover:translate-x-2 transition">
                ↗
              </span>
            </a>
            <p className="mt-6 text-white/50 text-sm">
              Available for select engagements — let's talk.
            </p>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Projects;
