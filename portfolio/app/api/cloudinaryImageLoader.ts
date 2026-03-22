import type { ImageLoaderProps } from "next/image";

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  return `https://res.cloudinary.com/dakgl7s9n/image/upload/${params.join(",")}/portfolio/${src}`;
}
