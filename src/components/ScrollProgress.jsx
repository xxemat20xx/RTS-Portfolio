import { motion as Motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-violet-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;