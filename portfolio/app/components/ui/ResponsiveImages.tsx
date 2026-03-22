import ResponsiveImg from "./ResponsiveImg";
interface ResponsiveImagesProps {
  className: string;
  collection: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

export default function ResponsiveImages({
  className,
  collection,
}: ResponsiveImagesProps) {
  return (
    <>
      {collection.map((img) => (
        <div>
          <ResponsiveImg
            src={img.src}
            width={img.width}
            height={img.height}
            className={className}
            alt={img.alt}
          />
        </div>
      ))}
    </>
  );
}
