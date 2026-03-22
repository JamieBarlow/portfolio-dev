import Image from "next/image";
import cloudinaryLoader from "@/app/api/cloudinaryImageLoader";
import { object } from "framer-motion/client";
interface ResponsiveImgProps {
  title?: string;
  fileName: string;
  className?: string;
  alt?: string;
  src: string;
  width: number;
  height: number;
  quality?: number;
  loading?: "eager" | "lazy";
  sizes?: string;
  preload?: boolean;
  fill?: boolean;
  objectFit?: string;
  fetchPriority?: "low" | "high" | "auto" | undefined;
}

export default function ResponsiveImg({
  title,
  fileName,
  className,
  alt = "",
  src,
  width,
  height,
  quality,
  loading = "lazy",
  sizes,
  preload,
  fill,
  objectFit,
  fetchPriority,
}: ResponsiveImgProps) {
  // Prevent passing incompatible values
  const lazyOrEager = fetchPriority === "high" ? "eager" : loading;
  const resolvedPreload = fetchPriority === "high" ? false : preload;

  return (
    <Image
      preload={resolvedPreload}
      loader={cloudinaryLoader}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={lazyOrEager}
      quality={quality}
      className={className}
      sizes={sizes}
      fill={fill}
      objectFit={objectFit}
      fetchPriority={fetchPriority}
    />
    // <picture className={className ? className : ""}>
    //   <source
    //     media="(min-width: 990px)"
    //     srcSet={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_1400/portfolio/${fileName} 1400w`}
    //   />
    //   <source
    //     media="(min-width: 768px)"
    //     srcSet={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_800/portfolio/${fileName} 800w`}
    //   />
    //   <source
    //     media="(min-width: 200px)"
    //     srcSet={`https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_600/portfolio/${fileName} 600w`}
    //   />
    //   <img src={`../images/${fileName}.png`} alt={`${alt ?? title}`} />
    // </picture>
  );
}
