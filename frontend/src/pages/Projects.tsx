import React, { Component, useEffect, useState } from 'react'
import ProjectContainer from '../components/ProjectContainer';
import axios from 'axios';
import { useProjectContext } from '../context/ProjectContext';
import { ProjectSchema } from '../context/ProjectContext';

function Projects() {
  const { projectList } = useProjectContext();

  return (
    <>
      <div className="flex justify-center px-[10%] py-[10%] lg:py-[4.6%] md:py-[6.5%] lg:px-[25%] md:px-[15%]">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="col-span-1 md:col-span-2 lg:col-span-2 text-6xl text-[#121212] font-bold">
            Projects.
          </div>
          {projectList && projectList.map((project: ProjectSchema, idx) => (
            <ProjectContainer
              key={idx}
              name={project.name}
              languages={project.languages}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects;
