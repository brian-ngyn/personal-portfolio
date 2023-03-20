import React from "react";
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ProjectSchema } from "../context/ProjectContext";

function ProjectContainer(props: ProjectSchema) {
  return (
    <>
      <div className="bg-[#F7F7F7] overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
          alt="project image"
          src={props.image}
          className="object-cover"
        />

        <div className="bg-[#F7F7F7] p-4 sm:p-6">
          <div className="text-xl text-gray-900 font-bold">
            {props.name}
          </div>

          <div className="flex flex-row space-x-2 mt-3">
            {props.languages.map((language: any) => {
              return <img className="w-[10%] h-[10%]" key={language.name} src={language.logo} />
            })}
          </div>

          <div className="mt-3 leading-relaxed text-gray-600 text-base line-clamp-3">
            Descriptions in Progress :)
          </div>

          <div className="mt-3">
            <IconButton sx={{ color: "#545454" }} size="small" onClick={() => {
              window.open(props.link, '_blank');
            }}>
              <GitHubIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProjectContainer;
