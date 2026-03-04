interface ResponsiveImgProps {
  title: string;
  fileName: string;
  className?: string;
}

export default function ResponsiveImg({
  title,
  fileName,
  className,
}: ResponsiveImgProps) {
  return (
    <picture className={className ? className : ""}>
      <source
        media="(min-width: 990px)"
        srcSet={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_1400/portfolio/${fileName} 1400w`}
      />
      <source
        media="(min-width: 768px)"
        srcSet={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_800/portfolio/${fileName} 800w`}
      />
      <source
        media="(min-width: 200px)"
        srcSet={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_600/portfolio/${fileName} 600w`}
      />
      <img src={`../images/${fileName}.png`} alt={`${title}`} />
    </picture>
  );
}
