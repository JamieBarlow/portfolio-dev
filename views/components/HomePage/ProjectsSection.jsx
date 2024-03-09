import React from "react";
import ProjectsRows from "./ProjectsRows";
import Button3D from "../Button3D";

export default function Projects() {
  return (
    <section className="projects">
      <div className="wrapper projects__wrapper">
        <div className="projects__header my-2">
          <img
            src="images/projects-svg-blue.svg"
            alt=""
            className="projects__logo"
          />
          <div className="projects__contact fs--p py-2">
            <Button3D text="Contact Me" link="#contactMe" size="p-2" />
          </div>
        </div>
        <div className="projects__main">
          <ProjectsRows />
        </div>
      </div>
    </section>
  );
}
