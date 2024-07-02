import React from "react";

export default function ProjectShowPurpose({ purpose, images, title }) {
  return (
    <section className="project__purpose wrapper my-3">
      <h3>The purpose</h3>
      <div>{purpose}</div>
      <div className="screenshot-box constrain">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`
            https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_800/portfolio/${images.features} 800w`}
          />
          <source
            media="(min-width: 200px)"
            srcSet={`
            https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_600/portfolio/${images.features} 600w`}
          />
          <img src={`../images/${images.features}`} alt={`${title} features`} />
        </picture>
      </div>
    </section>
  );
}