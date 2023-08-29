import React from "react";

const ProjectItem = ({ name,technologies }) => {
  return (
      <div>
        <h2>{name}</h2>
        {technologies.map((technology, index) =>(
          <span key={index}>{technology}
          </span>

        ))}
        
        {/* render a <span> for each technology in the technologies array */}
      </div>
  );
};

export default ProjectItem;
