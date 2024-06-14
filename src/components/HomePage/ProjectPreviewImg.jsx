import React from "react";
import ArrowIcon from "../common/ArrowIcon";

export default function ProjectPreviewImg({
  picL,
  picM,
  title,
  src,
  pageLink,
}) {
  return (
    <div className="projects__img">
      <picture>
        <source media="(min-width: 990px)" srcSet={picL} />
        <source media="(min-width: 200px)" srcSet={picM} />
        <img className="slide-up active" src={src} alt={title} />
      </picture>
      <div className="img-overlay img-overlay--blur">
        <div className="img-overlay__button">
          <a className="button--outline-dark" href={pageLink}>
            Read More <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
