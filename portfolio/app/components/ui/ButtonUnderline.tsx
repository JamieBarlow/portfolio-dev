import ArrowIcon from "./ArrowIcon";
import Link from "next/link";

interface ButtonUnderlineProps {
  link: string;
  name: string;
  icon: string;
  variation?: string;
}

export default function ButtonUnderline({
  link,
  name,
  icon,
  variation,
}: ButtonUnderlineProps) {
  let variationClass = "";
  switch (variation) {
    case "green":
      variationClass = "text--light underline--green";
      break;
  }
  return (
    <Link
      href={link}
      className={`underline underline--animated ${variationClass}`}
    >
      <div className="projects__link">
        {icon && <i className={`fa-solid ${icon} projects__icon`}></i>}
        <span className="link">{name}</span>
        <ArrowIcon />
      </div>
    </Link>
  );
}
