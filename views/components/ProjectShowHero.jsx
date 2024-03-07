import React from "react";

export default function ProjectShowHero({
  title,
  about,
  stack,
  live,
  code,
  images,
}) {
  return (
    <>
      <section class="projects__hero">
        <div class="project__header wrapper">
          <h1 class="observed">
            <span class="svg--underlined project__underline">
              {title}
              <svg viewBox="0 0 261 15" class="svg--underline">
                <path
                  d="M260.873 1.13231C261.529 3.77683 256.062 3.58368 254.362 4.35423C234.067 8.56861 196.462 11.0159 175.722 12.0618C158.958 12.8467 142.229 14.1022 125.444 14.4597C113.074 14.9857 100.688 14.4207 88.3119 14.7844C62.2162 14.9714 35.9892 15.1707 10.0571 12.0453C7.36529 11.5029 4.5057 11.4453 1.93012 10.5145C-4.66696 6.11313 7.52882 6.09053 10.2184 6.55697C87.6685 12.5261 88.6863 12.1789 147.548 10.2248C173.583 9.44806 199.451 6.27752 239.373 1.7056C240.389 1.57204 241.349 2.43711 241.192 3.42341C245.104 2.90146 248.999 2.27037 252.873 1.53094C254.881 1.05217 256.897 0.593955 258.887 0.0535445C259.3 -0.0504262 259.739 0.00403855 260.11 0.205278C260.481 0.406518 260.755 0.738539 260.873 1.13026V1.13231Z"
                  fill="hsl(153, 71%, 59%)"
                ></path>
              </svg>
            </span>
          </h1>
          <p>{about}</p>
        </div>
        <div class="bg--blue text--light">
          <div class="project__info wrapper my-4 p-3">
            <div class="project__stackCol">
              <h4>Stack</h4>
              <ul class="project__stackList">
                {stack.map((tech) => (
                  <li>{tech}</li>
                ))}
              </ul>
            </div>
            <div class="project__live">
              <h4>Live</h4>
              <a
                href={live}
                class="text--light underline underline--green underline--animated"
              >
                <div class="projects__link">
                  <span class="link">View project</span>
                  <svg
                    width="1.3rem"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
            <div class="project__code">
              <h4>Code & Docs</h4>
              <a
                href={code}
                class="text--light underline underline--green underline--animated"
              >
                <div class="projects__link text--light">
                  <span class="link">GitHub</span>
                  <svg
                    width="1.3rem"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="project__mainImg wrapper">
          <picture>
            <source
              media="(min-width: 990px)"
              srcset={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_1400/portfolio/${images.header} 1400w`}
            />
            <source
              media="(min-width: 768px)"
              srcset={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_800/portfolio/${images.header} 800w`}
            />
            <source
              media="(min-width: 200px)"
              srcset={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_600/portfolio/${images.header} 600w`}
            />
            <img
              src={`../images/${images.header}.png`}
              alt={`${title} home page`}
            />
          </picture>
        </div>
      </section>
    </>
  );
}
