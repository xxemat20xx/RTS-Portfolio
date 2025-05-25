import React from 'react'
import {data} from '../data'
const Projects = () => {
  const {projectData} = data;
  return (
    <section className='projects-section my-10'>
        <h2 className='text-xl font-bold my-4'>Projects :</h2>
        <div className='project-container grid grid-cols-1 md:grid-cols-3 gap-4 my-10'>
        {projectData.map((project) => {
          const {id, projectName, projectDescription, projectLink, projectImage, techUsed} = project;
     
          return (
       
                <div key={id} className='cards bg-gray-800 rounded-lg p-4 text-white'>
                  <div className='card-image'>
                    <img src={projectImage} alt={projectName} className='w-full h-full object-cover rounded-lg'/>
                  </div>
                  <div className='card-content my-4'>
                    <h3 className='card-title'>{projectName}</h3>
                    <p className='card-description'>{projectDescription}</p>
                    <div className='card-tech flex flex-wrap gap-2'>
                      {techUsed.map((tech) => {
                        const {id, icon} = tech;
                        return (
                          <div key={id} className='tech-icon my-4'>
                            <img src={icon} alt={tech.name} className='w-6 h-6'/>
                          </div>
                        )
                      })}
                    </div>
                    <div className='card-link my-4'>
                      <button 
                      className='bg-violet-500 text-white px-4 py-2 rounded-full hover:bg-violet-600 transition-all duration-300 cursor-pointer'>
                        <a href={projectLink} target='_blank' rel='noopener noreferrer'>View Project</a>
                      </button>
                    </div>
                  </div>
              </div>
 
          )
        })}
        </div>
    </section>
  )
}

export default Projects