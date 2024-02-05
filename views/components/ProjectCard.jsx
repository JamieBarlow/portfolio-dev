import React from "react";
import ButtonProject from "./ButtonProject";
import ProjectPreviewImg from "./ProjectPreviewImg";

export default function ProjectCard({
  title,
  languages,
  description,
  picL,
  picM,
  src,
  pageLink,
  gitHubLink,
}) {
  return (
    <div className="projects__box">
      <ProjectPreviewImg {...{ picL, picM, src, title, pageLink }} />
      <p className="projects__title">{title}</p>
      <div className="projects__languages">
        {languages.map((lang) => (
          <p>{lang}</p>
        ))}
      </div>
      <div className="projects__description">
        <p>{description}</p>
      </div>
      <div className="projects__links">
        <ButtonProject link={pageLink} name="View project" icon="fa-book" />
        <ButtonProject
          link={gitHubLink}
          name="View code"
          icon="fa-laptop-code"
        />
      </div>
    </div>
  );
}
