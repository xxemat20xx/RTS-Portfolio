import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { data } from "../data";

// --- Animation Variants ---
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Rotating role component
const RoleRotator = ({ roles }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!roles || roles.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles]);

  return (
    <span className="relative inline-block min-w-[200px]">
      <AnimatePresence mode="wait">
        <Motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="absolute left-0 top-0 bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent"
        >
          {roles[index]}
        </Motion.span>
      </AnimatePresence>
      {/* Invisible placeholder to maintain space */}
      <span className="invisible">{roles[0]}</span>
    </span>
  );
};

const Hero = () => {
  const { heroData, techStackData } = data;
  const techStackImages = techStackData.techStackImage;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 py-20 overflow-hidden bg-[#0a0a0f]" id="home">
      {/* ---- Refined background orbs ---- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-700/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/15 blur-[140px] rounded-full translate-y-1/2 -translate-x-1/3" />

      {/* ---- Main content grid ---- */}
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
        {/* Profile Image (DOM first → on top for mobile) */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative">
            {/* Blurred backdrop circle */}
            <div className="absolute inset-0 rounded-full bg-violet-600/25 blur-[80px] scale-125" />
            
            {/* Gradient ring around the image */}
            <div className="relative rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 p-[3px] animate-gradient-rotate">
              <img
                src={heroData.heroImage}
                alt={heroData.name}
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full object-cover bg-[#0a0a0f]"
              />
            </div>

            {/* Decorative dot */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-white/5 rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-violet-400 rounded-full animate-pulse" />
            </div>
          </div>
        </Motion.div>

        {/* Text Content (visually left on lg, second in DOM) */}
        <Motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left space-y-6 order-2 lg:order-1"
        >
          {/* Availability badge */}
          <Motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              Available for hire
            </span>
          </Motion.div>

          {/* Name & rotating role */}
          <div className="space-y-2">
            <Motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
                {heroData.name}
              </span>
            </Motion.h1>
            <Motion.div
              variants={fadeUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-400 h-12"
            >
              <RoleRotator roles={heroData.roles || ["Full-Stack Developer"]} />
            </Motion.div>
          </div>

          {/* Description */}
          <Motion.p
            variants={fadeUp}
            className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            {heroData.heroParagraph}
          </Motion.p>

          {/* CTA buttons */}
          <Motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-violet-400/50 px-6 py-3.5 rounded-full text-white font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105"
            >
              View my work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 px-6 py-3.5 rounded-full text-white font-medium transition-all duration-300 shadow-lg shadow-violet-600/20 hover:shadow-violet-500/30 hover:scale-105"
            >
              Get in touch
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Motion.div>

          {/* Tech stack (mini chips) */}
          <Motion.div variants={fadeUp} className="pt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 text-center lg:text-left">
              Tech I work with
            </p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {techStackImages.map((tech) => (
                <div
                  key={tech.id}
                  title={tech.name}
                  className="group flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/5 hover:border-violet-400/30 hover:bg-white/10 transition-all duration-300 cursor-default"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    loading="lazy"
                    className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </Motion.div>
        </Motion.div>
      </div>

      {/* ---- Scroll down indicator ---- */}
      <Motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <span className="w-5 h-8 border border-gray-600 rounded-full flex justify-center pt-1">
          <span className="w-1 h-2 bg-violet-400 rounded-full animate-bounce" />
        </span>
      </Motion.div>
    </section>
  );
};

export default Hero;