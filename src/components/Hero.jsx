import { data } from "../data";
import { motion as Motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const floatAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  const { heroData, techStackData } = data;
  const techStackImages = techStackData.techStackImage;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient blur */}
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-violet-600 opacity-20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT SIDE */}
        <Motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <Motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent text-4xl md:text-6xl lg:text-7x">
              {heroData.name}
            </span>
          </Motion.h1>

          <Motion.p
            variants={fadeUp}
            className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed"
          >
            {heroData.heroParagraph}
          </Motion.p>

          {/* Buttons */}
          <Motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
            <a
              href="#about"
              className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-full text-white font-medium transition duration-300 shadow-lg shadow-violet-600/30"
            >
              More About Me →
            </a>

            <a
              href="#projects"
              className="border border-gray-600 hover:border-violet-500 px-6 py-3 rounded-full text-gray-300 hover:text-white transition duration-300"
            >
              View Projects
            </a>
          </Motion.div>

          {/* Tech Stack */}
         {/* Tech Stack */}
<Motion.div variants={fadeUp}>
  <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
    Tech Stack
  </h2>

  <Motion.div
    variants={container}
    initial="hidden"
    animate="visible"
    className="flex flex-wrap gap-5"
  >
    {techStackImages.map((tech) => (
      <Motion.div
        key={tech.id}
        variants={fadeUp}
        whileHover={{ y: -6 }}
        className="group p-3 bg-gray-800/60 backdrop-blur rounded-xl 
                   hover:bg-violet-600/20 transition duration-300 
                   shadow-md"
      >
        <img
          src={tech.icon}
          alt={tech.name}
          title={tech.name}
          loading="lazy"
          className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110"
        />
      </Motion.div>
    ))}
      </Motion.div>
    </Motion.div>

        </Motion.div>

        {/* RIGHT SIDE IMAGE */}
        <Motion.div
          {...floatAnimation}
          animate="animate"
          className="flex justify-center relative display hidden lg:block"
        >
          {/* Glow background */}
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-violet-600 opacity-20 blur-[120px] rounded-full"></div>

          <img
            src={heroData.heroImage}
            alt={`${heroData.name} portrait`}
            className="relative z-10 w-[280px] md:w-[400px] lg:w-[500px] xl:w-[600px] object-contain drop-shadow-2xl"
          />
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
