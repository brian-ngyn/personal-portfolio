import React, { Component, useEffect, useState } from 'react'
import ProjectContainer from '../components/ProjectContainer';
import { useProjectContext } from '../context/ProjectContext';
import { ProjectSchema } from '../context/ProjectContext';
import { motion } from 'framer-motion';

function Projects() {
  const { projectList } = useProjectContext();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="flex flex-col gap-5 justify-center px-[10%] py-[10%] lg:py-[3.5%] md:py-[6.5%] lg:px-[25%] md:px-[15%]">
        <div className="grid gap-4 grid-cols-1">
          <div className="col-span-1 md:col-span-2 lg:col-span-2 text-6xl text-[#121212] font-bold">
            Projects.
          </div>
        </div>
        <div className="grid grid-cols-1 scrollbar-hide p-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 overflow-y-scroll scrollbar-hide px-1">
            {projectList.map((project: ProjectSchema, idx) => (
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
      </motion.div>
    </>
  )
}

export default Projects;
