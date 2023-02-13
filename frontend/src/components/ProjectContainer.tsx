import React from "react";
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ProjectSchema } from "../context/ProjectContext";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ProjectContainer(props: ProjectSchema) {
  return (
    <>
      <Card style={{backgroundColor: "#f7f7f7"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.image}
          />
          <CardContent>
            <div className="font-bold text-xl pb-2">
              {props.name}
            </div>
            <div className="flex gap-x-3">
              {props.languages.map((language: any) => {
                return <img className="w-[10%] pb-4" key={language.name} src={language.logo} />
              })}
            </div>
            <div className="font-light text-base">
              Descriptions are in progress :)
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton sx={{ color: "#545454" }} onClick={() => {
            window.open(props.link, '_blank');
          }}>
            <GitHubIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
export default ProjectContainer;