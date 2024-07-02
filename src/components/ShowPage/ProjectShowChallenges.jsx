export default function ProjectShowChallenges({ challenges, images, title }) {
  return (
    <section className="project__challenges my-5 wrapper">
      <div>
        <h3>Challenges</h3>
        <div className="challenges-box text-box">{challenges}</div>
        <div className="screenshot-box challenges">
          {images.challenges.map((image) => {
            return (
              <picture className="challenges-img">
                <source
                  media="(min-width: 768px)"
                  srcSet={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_800/portfolio/${image} 800w
                  `}
                />
                <source
                  media="(min-width: 200px)"
                  srcSet={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_600/portfolio/${image} 600w`}
                />
                <img src={`../images/${image}`} alt={`${title} challenges`} />
              </picture>
            );
          })}
        </div>
      </div>
    </section>
  );
}