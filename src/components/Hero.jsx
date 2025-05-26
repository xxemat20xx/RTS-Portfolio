import { data } from '../data';
import '../index.css';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Hero = () => {
  const { heroData, techStackData } = data;
  const techStackImages = techStackData.techStackImage;

  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    } else {
      controls.start({ x: -100, opacity: 0 });
    }
  }, [inView, controls]);

  return (
    <section className="hero-section mx-auto flex justify-center items-center min-h-screen">
      <div className="hero-container grid grid-cols-1 md:grid-cols-2">
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="order-2 md:order-1 flex flex-col items-start justify-center p-4"
        >
          <h1 className="text-4xl font-bold mb-4 md:text-6xl">
            Hi I'm <span className="text-violet-500 font-extrabold">{heroData.name}</span>
          </h1>
          <p className="text-gray-400 mb-4 max-w-3xl">{heroData.heroParagraph}</p>
          <div className="my-4">
            <button className="bg-violet-500 text-white px-4 py-2 rounded-full hover:bg-violet-600 transition-all duration-300 cursor-pointer">
              More about me &rarr;
            </button>
          </div>
          <h2 className="text-xl font-bold my-4">Tech Stack :</h2>
          <div className="tech-stack flex flex-wrap gap-4">
            {techStackImages.map((image) => (
              <div key={image.id} className="tech-stack-image">
                <img
                  src={image.techStackImage}
                  alt=""
                  className="w-10 h-10 transition-all duration-700 ease-out"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="order-1 md:order-2"
        >
          <div className="hero-image order-1 md:order-2 inline-block relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-violet-500 opacity-30 blur-2xl z-0"></div>
            <img src={heroData.heroImage} alt="" className="relative z-10" />
          </div>
        </motion.div>
      
      </div>
    </section>
  );
};

export default Hero;
