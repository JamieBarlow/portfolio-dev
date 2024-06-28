import React from "react";
import ArrowIcon from "../common/ArrowIcon";
import ButtonOutline from "../common/ButtonOutline";

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
          <ButtonOutline href={pageLink} variation="dark">
            Read More <ArrowIcon />
          </ButtonOutline>
        </div>
      </div>
    </div>
  );
}
