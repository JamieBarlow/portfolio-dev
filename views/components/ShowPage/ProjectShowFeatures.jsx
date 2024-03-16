import React from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

export default function ProjectShowFeatures({ features }) {
  return (
    <section class="card project__features wrapper">
      <h3>Features</h3>
      <div class="col-layout">
        <div class="features-box text-box">
          <ul>
            {features.map((feature) => {
              return <li>{ReactHtmlParser(feature)}</li>;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
