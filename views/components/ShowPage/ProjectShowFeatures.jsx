import React from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

export default function ProjectShowFeatures({ title, features, images }) {
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
        <div class="screenshot-box">
          <picture>
            <source
              media="(min-width: 768px)"
              srcset={`
            https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_800/portfolio/${images.features} 800w`}
            />
            <source
              media="(min-width: 200px)"
              srcset={`
            https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_600/portfolio/${images.features} 600w`}
            />
            <img
              src={`../images/${images.features}`}
              alt={`${title} features`}
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
