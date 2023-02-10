import React from "react";
import { ProjectSchema } from "../pages/Projects";
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';

function ProjectContainer(props: ProjectSchema) {
  return (
    <>
      <div className="flex flex-col rounded-md bg-gray-800 px-[5%] pb-[5%] ">
        <div>
          <div className="pt-[5%] pb-[2%] text-center text-xl">
            {props.name}
          </div>
          <div className="flex justify-center gap-x-3">
            {props.languages.map((language: any) => {
              return <img className="w-[12%] pb-4" key={language.name} src={language.logo} />
            })}
          </div>
          <div>
            <img className="w-full drop-shadow-2xl" src={props.image}/>
          </div>
          <div className="text-center py-3">
            Description are in progress :)
          </div>
        </div>
        <div className="flex grow items-end justify-center">
          <IconButton sx={{ color: "#D3D0CB" }} onClick={() => { 
            const win = window.open(props.link, '_blank');
          }}>
            <GitHubIcon/>
          </IconButton>
        </div>
      </div>
    </>
  );
}
export default ProjectContainer;