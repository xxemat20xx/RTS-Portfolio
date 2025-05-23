import React, { useEffect, useState } from 'react'
import '../styles/typewriter.css'

const Hero = ({data}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className='bg-gradient-to-b from-black to-gray-800 min-h-screen flex items-center'>
        <div className='container mx-auto px-4'>
            <div className='hero-content text-center text-neutral-content md:text-left'>
                {data && data.map((item, index) => (
                    <div key={item.heroData?.id || `hero-${index}`} className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                        <div 
                            className={`flex flex-col space-y-4 order-2 md:order-1 transform transition-all duration-1000 ease-out
                                      ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
                        >
                            <h1 className='text-3xl font-bold text-white inline-block text-center md:text-left md:text-6xl'>
                                <span className="typewriter inline-block">Hi I'm, <span className='text-violet-500'>{item?.heroData?.name || 'Name'}</span></span>
                            </h1>
                            <p className='text-gray-400 text-lg text-center md:text-left md:text-xl'>{item?.heroData?.heroParagraph || 'Content'}</p>

                            <div className="tech-stack mt-4 mx-auto md:mx-0">
                                <h2 className='text-white text-2xl font-bold'>Tech Stack</h2>
                                <div className="flex flex-wrap gap-4">
                                    {item?.techStackData?.techStackImage?.map((tech, techIndex) => (
                                        <img 
                                            key={tech.id || `tech-${techIndex}`}
                                            src={tech.techStackImage} 
                                            alt={`tech-${tech.id || techIndex}`} 
                                            className='w-8 h-8 my-4 md:w-10 md:h-10'
                                        />
                                    ))}
                                </div>
                                <button className='btn bg-violet-500 text-white mt-4 px-8 py-2 rounded-full hover:bg-violet-600 delay-100 duration-300 transition-colors cursor-pointer'>More about me &rarr;</button>
                            </div>
                        </div>
                        <div 
                            className={`hero-image max-w-2xl mx-auto order-1 md:order-2 transform transition-all duration-1000 ease-out delay-200
                                      ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
                        >
                            {item?.heroData?.heroImage && (
                                <div className="relative">
                                    <div className="absolute inset-0 bg-violet-500 rounded-full blur-3xl opacity-20"></div>
                                    <img 
                                        src={item.heroData.heroImage} 
                                        alt={item.heroData.name || 'Hero image'}
                                        className='w-full h-auto relative z-10'
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Hero