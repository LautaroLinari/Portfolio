import React from 'react'
import projectsData from './ProjectsData'
import ProjectsCard from './ProjectsCard'

const CardProject = () => {
  return (
    <>
    <h2 className='text-center text-2xl md:text-4xl font-bold text-white mt-10 mb-8 md:mb-12' id='proyectos'>
          Mis Proyectos
      </h2>
    <div className='grid md:grid-cols-2 gap-8 md:gap-12'>
      {projectsData.map((project) => (
          <ProjectsCard 
              key={project.id} 
              title={project.title} 
              description={project.description} 
              imgUrl={project.image} 
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl} 
              tecnology={project.tecnology}
          />
      ))}
    </div>

  </>
  )
}

export default CardProject
