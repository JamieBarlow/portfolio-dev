import React from "react";
import ArrowIcon from "./ArrowIcon";
import { Link } from "react-router-dom";

export default function ButtonUnderline({ link, name, icon, variation }) {
  let variationClass = "";
  switch (variation) {
    case "green":
      variationClass = "text--light underline--green";
      break;
  }
  return (
    <Link
      to={link}
      className={`underline underline--animated ${variationClass}`}
    >
      <div className="projects__link">
        {icon && <i className={`fa-solid ${icon} projects__icon`}></i>}
        <span className="link">{name}</span>
        <ArrowIcon />
      </div>
    </Link>
  );
}
