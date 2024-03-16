import React from "react";
export default function ProjectShowImages({ images, title }) {
  return (
    <section class="project__images wrapper">
      <div class="screenshot-box constrain">
        <picture>
          <source
            media="(min-width: 990px)"
            srcset={`
          https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_1400/portfolio/${images.tech} 1400w
        `}
          />
          <source
            media="(min-width: 768px)"
            srcset={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_800/portfolio/${images.tech} 800w`}
          />
          <source
            media="(min-width: 200px)"
            srcset={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_600/portfolio/${images.tech} 600w`}
          />
          <img
            src={`../images/${images.tech}-fallback`}
            alt={`${title} tech`}
          />
        </picture>
      </div>
    </section>
  );
}
