import { useEffect, useRef, useState } from 'react';

const Testing = () => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.2 }
      );
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
  
      return () => {
        if (elementRef.current) observer.unobserve(elementRef.current);
      };
    }, []);
  
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div
          ref={elementRef}
          className="p-10 bg-violet-800 rounded-xl shadow-xl transition-all duration-700 ease-out"
          style={{
            transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
            opacity: isVisible ? 1 : 0,
          }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Hi I'm <span className="text-violet-300">Raymart S.</span>
          </h1>
          <p>This should slide from left to center on scroll-in.</p>
        </div>
      </section>
    );
};

export default Testing;
