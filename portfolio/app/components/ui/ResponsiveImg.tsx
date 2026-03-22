import Image from "next/image";
import cloudinaryLoader from "@/app/api/cloudinaryImageLoader";

interface ResponsiveImgProps {
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
  );
}
