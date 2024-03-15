import React from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

export default function ProjectShowPurpose({ purpose }) {
  return (
    <section class="project__purpose wrapper my-3">
      <h3>The purpose</h3>
      {purpose.map((para) => {
        return <p>{ReactHtmlParser(para)}</p>;
      })}
    </section>
  );
}
