import React from "react";
import ArrowIcon from "../ArrowIcon";

export default function ButtonProject({ link, name, icon }) {
  return (
    <a href={link} className="underline underline--animated">
      <div className="projects__link">
        <i className={`fa-solid ${icon} projects__icon`}></i>
        <span className="link">{name}</span>
        <ArrowIcon />
      </div>
    </a>
  );
}
