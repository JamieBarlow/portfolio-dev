import React, { useContext } from "react";
import ExperienceIcons from "./Experience-Icons";
import LinkUnderline from "../common/LinkUnderline";
import { ObserverContext } from "../../context/ObserverContext";

export default function ExperienceSection() {
  const { setClicked } = useContext(ObserverContext);
  function handleClick() {
    setClicked("Projects");
  }
  return (
    <section className="experience bg--blue text--light">
      <svg id="visual" viewBox="0 0 960 120" version="1.1">
        <rect x="0" y="0" width="960" height="540" fill="#2d6acd" />
        <path
          d="M0 30L960 73L960 0L0 0Z"
          fill="#f0f5f4"
          strokeLinecap="square"
          strokeLinejoin="bevel"
        />
      </svg>
      <div className="experience__intro wrapper">
        <h2 className="experience__header fw--medium m-1 py-3 fs--h2">
          What I work with
        </h2>
        <h5 className="experience__subheader fw--light my-3">
          I use the tools below regularly, and have been able to put my skills
          into practice through a number of
          <LinkUnderline
            text="projects."
            size="fs--h5"
            variation="text--light"
            onClick={handleClick}
          />{" "}
          My current tech stack includes:
        </h5>
      </div>
      <ExperienceIcons />
    </section>
  );
}
