import ButtonOutline from "../common/ButtonOutline";
import ArrowIcon from "../common/ArrowIcon";

import React from "react";
export default function ProjectShowOther({ otherProjects }) {
  return (
    <section class="project__other wrapper">
      <h3>Other Projects</h3>
      <div class="project__otherProjects my-3">
        {otherProjects.map((project) => {
          return (
            <div class="card otherProject">
              <h4 class="my-2">{project.title}</h4>
              <div class="projects__img">
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcset={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_800/portfolio/${project.previewImg} 800w`}
                  />
                  <source
                    media="(min-width: 200px)"
                    srcset={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_600/portfolio/${project.previewImg} 600w`}
                  />
                  <img
                    src={`../images/${project.previewImg}`}
                    alt={project.title}
                  />
                </picture>
                <div class="img-overlay img-overlay--blur">
                  <div class="img-overlay__button">
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
