import React, { forwardRef, useRef, useContext } from "react";
import ProjectsRows from "./ProjectsRows";
import Button3D from "../common/Button3D";
import { ObserverContext } from "../../context/ObserverContext";

const Projects = () => {
  const { projectsSectionRef, setClicked } = useContext(ObserverContext);
  function handleClick() {
    setClicked("Contact");
  }
  return (
    <section className="projects" ref={projectsSectionRef}>
      <div className="wrapper projects__wrapper">
        <div className="projects__header my-2">
          <h2>Projects</h2>
          <div className="projects__contact fs--p py-2">
            <Button3D
              text="Contact Me"
              onClick={handleClick}
              size="p-2"
              isInternalLink={true}
            />
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