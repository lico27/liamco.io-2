import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../assets/js/projects'

const Projects = () => {
  return (
    <>
      <div className='w-100 flex text-center py-5'>
        <h1 className='m-0 text-capitalize'>
          Projects
        </h1> 
      </div>
      <div className='cert-container text-center px-1 px-md-3 px-lg-5 px-xl-6'>
        {projects.map((project, index) => {
          return <ProjectCard 
          key={index} 
          title={project.title}
          description={project.description}
          url={project.url}
          status={project.status}
          img={project.img}
          />
        })}
      </div>
    </>
  )
}

export default Projects