import React from "react";
import Button3D from "../common/Button3D";
import { useContext } from "react";
import { ObserverContext } from "../../context/ObserverContext";
import ASCII from "./ASCII";

export default function HeroSection() {
  const { observedElem } = useContext(ObserverContext);
  return (
    <section className="hero">
      <div className="hero__main">
        <div
          className="hero__image observed"
          id="image-container"
          ref={observedElem}
        >
          <ASCII />
        </div>
        <div className="hero__text">
          <h1 className="hero__headline py-3">
            Hi there,
            <br />
            I'm{" "}
            <span className="svg--underlined">
              Jamie.
              <svg viewBox="0 0 261 15" className="svg--underline">
                <path
                  d="M260.873 1.13231C261.529 3.77683 256.062 3.58368 254.362 4.35423C234.067 8.56861 196.462 11.0159 175.722 12.0618C158.958 12.8467 142.229 14.1022 125.444 14.4597C113.074 14.9857 100.688 14.4207 88.3119 14.7844C62.2162 14.9714 35.9892 15.1707 10.0571 12.0453C7.36529 11.5029 4.5057 11.4453 1.93012 10.5145C-4.66696 6.11313 7.52882 6.09053 10.2184 6.55697C87.6685 12.5261 88.6863 12.1789 147.548 10.2248C173.583 9.44806 199.451 6.27752 239.373 1.7056C240.389 1.57204 241.349 2.43711 241.192 3.42341C245.104 2.90146 248.999 2.27037 252.873 1.53094C254.881 1.05217 256.897 0.593955 258.887 0.0535445C259.3 -0.0504262 259.739 0.00403855 260.11 0.205278C260.481 0.406518 260.755 0.738539 260.873 1.13026V1.13231Z"
                  fill="hsl(153, 71%, 59%)"
                />
              </svg>
            </span>
          </h1>
          <h5 className="hero__description m-0 py-4">
            I'm a full-stack developer with a passion for building high quality
            web apps. You can check out my work below, or:
          </h5>
        </div>
      </div>
      <div className="hero__contact p-4">
        <Button3D text="Get in touch" link="#contactMe" size="fs--h4" />
      </div>
    </section>
  );
}
