import React, { Component, useEffect, useState } from 'react'
import ProjectContainer from '../components/ProjectContainer';
import axios from 'axios';

export interface ProjectSchema {
  name: string;
  languages: any;
  description: string;
  image: string;
  link: string;
}

function Projects() {
  const [projects, setProjects] = useState<ProjectSchema[]>([]);

  const getProjects = () => {
    axios.get(import.meta.env.VITE_AWS_LAMBDA_API + "/api/get-all").then((response) => {
      setProjects(response.data);
    });
  };

  // const getProjects = () => {
  //   axios.get("http://localhost:3001/api/get-all").then((response) => {
  //     setProjects(response.data);
  //   });
  // };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <div className="p-[11%]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project, idx) => (
            <ProjectContainer key={idx} name={project.name} languages={project.languages} description={project.description} link={project.link} image={project.image}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects;