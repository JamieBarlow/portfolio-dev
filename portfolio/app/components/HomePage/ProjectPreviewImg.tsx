import ArrowIcon from "../ui/ArrowIcon";
import ButtonOutline from "../ui/ButtonOutline";

interface PreviewImgProps {
  previewImg: React.ReactNode;
  pageLink: string;
}

export default function ProjectPreviewImg({
  previewImg,
  pageLink,
}: PreviewImgProps) {
  return (
    <div className="projects__img">
      {previewImg}
      <div className="img-overlay img-overlay--blur">
        <div className="img-overlay__button">
          <ButtonOutline href={pageLink} variation="dark">
            Read More <ArrowIcon />
          </ButtonOutline>
        </div>
      </div>
    </div>
  );
}
