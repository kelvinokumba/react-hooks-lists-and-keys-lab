import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({projects}){
  return (
    <div>
      {projects.map((project) => (
        <ProjectItem key={project.id} technologies={project.technologies} name={project.name} about={project.about}/>
      ))}
    </div>
  );
}

export default ProjectList;
