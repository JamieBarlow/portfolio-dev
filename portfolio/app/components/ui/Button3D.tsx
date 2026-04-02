import Link from "next/link";

interface Button3DProps {
  text: string;
  onClick?: () => void;
  size?: string;
  type?: "button" | "submit" | "reset" | undefined;
  icon?: React.ReactNode;
  href?: string;
  isInternalLink?: boolean;
}

export default function Button3D({
  text,
  onClick,
  size,
  type = "button",
  icon,
  href,
  isInternalLink,
}: Button3DProps) {
  return (
    <button className="pushable" type={type}>
      {isInternalLink ? (
        <a className={`front ${size}`} onClick={onClick} href={href}>
          {icon ? icon : null}
          {text}
        </a>
      ) : (
        <Link className={`front ${size}`} onClick={onClick} href={href ?? "/"}>
          {icon ? icon : null}
          {text}
        </Link>
      )}
    </button>
  );
}
