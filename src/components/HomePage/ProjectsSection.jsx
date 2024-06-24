import React, { forwardRef, useRef, useContext } from "react";
import ProjectsRows from "./ProjectsRows";
import Button3D from "../common/Button3D";
import { ObserverContext } from "../../context/ObserverContext";

const Projects = () => {
  const { projectsSectionRef } = useContext(ObserverContext);

  return (
    <section className="projects" ref={projectsSectionRef}>
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
};

export default Projects;
