import React from "react";
import ButtonUnderline from "../common/ButtonUnderline";
import ProjectPreviewImg from "./ProjectPreviewImg";
import Pill from "../common/Pill";

export default function ProjectCard({
  title,
  stack,
  pageLink,
  code,
  homeDescription,
  images,
  variation,
}) {
  const picL = `https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_800/portfolio/${images.header} 800w`;
  const picM = `https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_800/portfolio/${images.header} 600w`;
  const src = `/images/${images.header}`;
  let className;
  switch (variation) {
    case "shadow":
      className = "card";
      break;
    case "outline":
      className = "card--outline";
      break;
    default:
      className = "card";
  }

  return (
    <div className={className}>
      <ProjectPreviewImg {...{ picL, picM, src, title, pageLink }} />
      <p className="projects__title">{title}</p>
      <div className="projects__languages">
        {stack.map((lang) => (
          <Pill variation="outline">{lang}</Pill>
        ))}
      </div>
      <div className="projects__description">{homeDescription}</div>
      <div className="projects__links">
        <ButtonUnderline link={pageLink} name="View project" icon="fa-book" />
        <ButtonUnderline link={code} name="View code" icon="fa-laptop-code" />
      </div>
    </div>
  );
}
