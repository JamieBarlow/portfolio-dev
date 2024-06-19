import React from "react";
import parse from "html-react-parser";

export default function ProjectShowWebStack({ webStack }) {
  return (
    <section class="project__webStack wrapper my-5">
      <h3>Web Stack & Tech</h3>
      <div class="webstack-box text-box">
        {webStack.map((tech) => {
          return <p>{parse(tech)}</p>;
        })}
      </div>
    </section>
  );
}
