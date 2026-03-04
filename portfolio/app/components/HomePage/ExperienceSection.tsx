import { useContext } from "react";
import ExperienceIcons from "./ExperienceIcons";
import LinkUnderline from "../ui/LinkUnderline";
import { ObserverContext } from "@/app/context/ObserverContext";
import { RoughNotation } from "react-rough-notation";

export default function ExperienceSection() {
  const { setClicked } = useContext(ObserverContext);

  function handleClick() {
    setClicked("My Work");
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
          I use the tools below regularly, and and you can see them in{" "}
          <span style={{ cursor: "pointer" }}>
            <RoughNotation
              type="underline"
              show={true}
              color="#4CE19E"
              padding={[0, 0]}
            >
              <a className="fs--h5" onClick={handleClick}>
                my work
              </a>
            </RoughNotation>
          </span>{" "}
          below.
          {/* <LinkUnderline
            text="projects."
            size="fs--h5"
            variation="text--light"
            onClick={handleClick}
          /> */}
          My current tech stack includes:
        </h5>
      </div>
      <ExperienceIcons />
    </section>
  );
}
