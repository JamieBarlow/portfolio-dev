import React from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

export default function ProjectShowDDConversion({ conversion, images, title }) {
  return (
    <section class="project__conversion wrapper my-5">
      <h3>Evolving from V1</h3>
      <div class="text-box">
        {conversion.map((para) => {
          return <p>{ReactHtmlParser(para)}</p>;
        })}
      </div>
      <div class="screenshot-box challenges">
          {images.conversion.map((image) => {
            return (
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcset={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_800/portfolio/${image} 800w
                  `}
                />
                <source
                  media="(min-width: 200px)"
                  srcset={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_600/portfolio/${image} 600w`}
                />
                <img src={`../images/${image}`} alt={`${title} challenges`} />
              </picture>
            );
          })}
        </div>
    </section>
  )
}