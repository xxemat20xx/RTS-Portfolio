import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { data } from "../data";

const RoleRotator = ({ roles }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [roles]);

  return (
    <AnimatePresence mode="wait">
      <Motion.span
        key={index}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.25 }}
        className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
      >
        {roles[index]}
      </Motion.span>
    </AnimatePresence>
  );
};

const Hero = () => {
  const { heroData, techStackData } = data;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#07070c] flex items-center px-6"
    >
      {/* Grid Background */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-violet-600/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-300 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Open for freelance & full-time opportunities
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Building
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>

            <div className="mt-6 text-2xl md:text-4xl text-gray-300 font-medium min-h-[60px]">
              <RoleRotator
                roles={
                  heroData.roles || [
                    "Full Stack Developer",
                    "Frontend Engineer",
                    "MERN Stack Developer",
                  ]
                }
              />
            </div>

            <p className="mt-6 max-w-xl text-gray-400 text-lg leading-relaxed">
              {heroData.heroParagraph}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#projects"
                className="
                  px-7 py-4 rounded-2xl
                  bg-gradient-to-r
                  from-violet-600
                  to-fuchsia-600
                  text-white font-semibold
                  hover:scale-105
                  transition
                "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                  px-7 py-4 rounded-2xl
                  border border-white/10
                  bg-white/5
                  text-white
                  backdrop-blur-xl
                  hover:bg-white/10
                  transition
                "
              >
                Contact Me
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-12 flex-wrap">
              <div>
                <h3 className="text-3xl font-bold text-white">20+</h3>
                <p className="text-gray-500 text-sm">Projects Built</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">3+</h3>
                <p className="text-gray-500 text-sm">Years Learning</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">10+</h3>
                <p className="text-gray-500 text-sm">Technologies</p>
              </div>
            </div>
          </Motion.div>

          {/* RIGHT SIDE */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Orbit Ring */}
              <div className="absolute inset-0 scale-125 border border-white/10 rounded-full" />

              {/* Floating Tech Icons */}
              {techStackData.techStackImage.slice(0, 8).map((tech, index) => {
                const angle = (360 / 8) * index;

                return (
                  <Motion.div
                    key={tech.id}
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 30,
                      ease: "linear",
                    }}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: `
                        rotate(${angle}deg)
                        translateY(-180px)
                      `,
                    }}
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-white/10
                      backdrop-blur-xl
                      border border-white/10
                      flex items-center justify-center
                    "
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-7 h-7"
                    />
                  </Motion.div>
                );
              })}

              {/* Avatar Card */}
              <div
                className="
                  relative
                  p-4
                  rounded-[40px]
                  bg-white/5
                  border border-white/10
                  backdrop-blur-2xl
                "
              >
                <img
                  src={heroData.heroImage}
                  alt={heroData.name}
                  className="
                    w-72 h-72 md:w-96 md:h-96
                    rounded-[32px]
                    object-cover
                  "
                />
              </div>
            </div>
          </Motion.div>
        </div>

        {/* Tech Pills */}
        <div className="mt-24 flex flex-wrap justify-center gap-3">
          {techStackData.techStackImage.map((tech) => (
            <div
              key={tech.id}
              className="
                flex items-center gap-2
                px-4 py-2
                rounded-full
                bg-white/5
                border border-white/10
                backdrop-blur-xl
              "
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;