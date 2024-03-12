import React from "react";
import ButtonUnderline from "../common/ButtonUnderline";
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
    <div className="card">
      <ProjectPreviewImg {...{ picL, picM, src, title, pageLink }} />
      <p className="projects__title">{title}</p>
      <div className="projects__languages">
        {languages.map((lang) => (
          <p className="pill">{lang}</p>
        ))}
      </div>
      <div className="projects__description">
        <p>{description}</p>
      </div>
      <div className="projects__links">
        <ButtonUnderline link={pageLink} name="View project" icon="fa-book" />
        <ButtonUnderline
          link={gitHubLink}
          name="View code"
          icon="fa-laptop-code"
        />
      </div>
    </div>
  );
}
