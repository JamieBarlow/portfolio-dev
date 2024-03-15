import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "../../../projects/projectData";

export default function ProjectsRows() {
  const displayProjects = projectData.slice(0, 4);
  // Create array 'chunks' from data to populate rows depending on rowLength
  const rowLength = 2;
  const dataChunk = [];
  for (let i = 0; i < displayProjects.length; i += rowLength) {
    dataChunk.push(displayProjects.slice(i, i + rowLength));
  }
  return (
    <>
      {dataChunk.map((chunk, rowIndex) => (
        <div key={`${rowIndex}`} className="projects__row">
          {chunk.map((project) => (
            <ProjectCard key={`${project.title}`} {...project} />
          ))}
        </div>
      ))}
    </>
  );
}
