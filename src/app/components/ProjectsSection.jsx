import React from 'react'
import ProjectsCard from './ProjectsCard'

const projectsData = [
    {
        id: 1,
        title: 'Task Local Website',
        description: 'Proyecto 1 para guardar tareas locales en el navegador',
        image: '/images/projects/project-1.png',
        gitUrl: 'https://github.com/LautaroLinari/Task-Local',
        previewUrl: 'https://task-local.vercel.app/',
    },
    {
        id: 2,
        title: 'Portfolio Website',
        description: 'Proyecto 2 de ejemplo de un Portfolio',
        image: '/images/projects/project-2.jpg',
        gitUrl: 'https://github.com/LautaroLinari/Pracitca-Sass',
        previewUrl: 'https://practica-sass.vercel.app/',
    },
    {
        id: 3,
        title: 'Landing Page Website',
        description: 'Proyecto 3 Landing Page de una escuela',
        image: "/images/projects/project-3.jpg",
        gitUrl: 'https://github.com/LautaroLinari/PROYECTO-INTEGRADOR-WEB-UNTREFSCHOOL',
        previewUrl: 'https://proyecto-integrador-web-untrefschool.vercel.app/',
    },
    {
        id: 4,
        title: 'Ecommerce Website',
        description: 'Proyecto 4 de un Ecommerce de zapatillas de basketball',
        image: '/images/projects/project-4.jpg',
        gitUrl: 'https://github.com/LautaroLinari/ProyectoEcommerce',
        previewUrl: 'https://proyecto-ecommerce-beta.vercel.app/',
    },
    {
        id: 5,
        title: 'Cotizar Seguros Website',
        description: 'Proyecto 5 para cotizar el valor del seguro según las medidas de tu hogar',
        image: '/images/projects/project-5.jpg',
        gitUrl: 'https://github.com/LautaroLinari/Proyecto-Final-React',
        previewUrl: 'https://proyecto-final-react-xi-rosy.vercel.app/',
    },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
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
            />
        ))}
      </div>

    </>
  )
}

export default ProjectsSection
