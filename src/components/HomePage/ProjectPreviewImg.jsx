import React from "react";
import ArrowIcon from "../common/ArrowIcon";
import ButtonOutline from "../common/ButtonOutline";
import ResponsiveImg from "../common/ResponsiveImg";

export default function ProjectPreviewImg({ previewImg, pageLink }) {
  return (
    <div className="projects__img">
      {previewImg}
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
