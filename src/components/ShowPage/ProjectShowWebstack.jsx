import React from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

export default function ProjectShowWebStack({ webStack }) {
  return (
    <section class="project__webStack wrapper my-5">
      <h3>Web Stack & Tech</h3>
      <div class="webstack-box text-box">
        {webStack.map((tech) => {
          return <p>{ReactHtmlParser(tech)}</p>;
        })}
      </div>
    </section>
  );
}
