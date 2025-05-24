import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Project = ({ data }) => {
  const projects = data[0].projectData;
  const [titleRef, isTitleVisible] = useScrollAnimation(0.01);
  const [projectsRef, isProjectsVisible] = useScrollAnimation(0.1);

  return (
    <section className='bg-gray-800 min-h-screen'>
      <div className='container mx-auto px-4 py-16'>
        <h2 ref={titleRef} className={`text-5xl text-center text-violet-500 font-bold mb-8 md:text-left transform transition-all duration-1000 ease-out
                      ${isTitleVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
          Projects
        </h2>
        <div className='h-1 w-24 bg-white mx-auto my-8 md:mx-0'></div>
        <div ref={projectsRef} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`bg-gray-900 rounded-lg overflow-hidden transform transition-all duration-1000 ease-out
                        ${isProjectsVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className='p-6'>
                <h3 className='text-xl font-bold text-white mb-2'>{project.projectName}</h3>
                <img src={project.projectImage} alt={project.projectName} className='w-full h-48 object-cover mb-4' />
                <p className='text-gray-400 mb-4'>{project.projectDescription}</p>
                <div className='flex gap-2 mb-4'>
                  
                  {project.techUsed.map((tech) => (
                    <img
                      key={tech.id}
                      src={tech.icon}
                      alt={`tech-${tech.id}`}
                      className='w-6 h-6'
                    />
                  ))}
                </div>
                <a
                  href={project.projectLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600 transition-colors'
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project