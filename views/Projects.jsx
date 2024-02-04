import React from "react";
import ProjectsRows from "./ProjectsRows";

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
            <button className="pushable">
              <a className="front p-2" href="#contactMe">
                Contact Me
              </a>
            </button>
          </div>
        </div>
        <div className="projects__main">
          <ProjectsRows />
        </div>
      </div>
    </section>
  );
}
