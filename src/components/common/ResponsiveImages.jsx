export default function ResponsiveImages({ title, className, collection }) {
  return (
    <>
      {collection.map((img, i) => (
        <picture className={className ? className : ""} key={i}>
          <source
            media="(min-width: 990px)"
            srcSet={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_1400/portfolio/${img} 1400w`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_800/portfolio/${img} 800w`}
          />
          <source
            media="(min-width: 200px)"
            srcSet={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_600/portfolio/${img} 600w`}
          />
          <img src={`../images/${img}.png`} alt={`${title} ${collection}`} />
        </picture>
      ))}
    </>
  );
}
