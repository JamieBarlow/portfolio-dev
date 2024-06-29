import ButtonOutline from "../common/ButtonOutline";
import ArrowIcon from "../common/ArrowIcon";

import React from "react";
export default function ProjectShowOther({ otherProjects }) {
  return (
    <section className="project__other wrapper">
      <h3>Other Projects</h3>
      <div className="project__otherProjects my-3">
        {otherProjects.map((project) => {
          return (
            <div className="card otherProject">
              <h4 className="my-2">{project.title}</h4>
              <div className="projects__img">
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_800/portfolio/${project.previewImg} 800w`}
                  />
                  <source
                    media="(min-width: 200px)"
                    srcSet={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_600/portfolio/${project.previewImg} 600w`}
                  />
                  <img
                    src={`../images/${project.previewImg}`}
                    alt={project.title}
                  />
                </picture>
                <div className="img-overlay img-overlay--blur">
                  <div className="img-overlay__button">
                    <ButtonOutline href={project.link} variation="dark">
                      Read More <ArrowIcon />
                    </ButtonOutline>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
