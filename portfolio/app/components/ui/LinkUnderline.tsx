import Link from "next/link";

interface LinkUnderlineProps {
  text: string;
  onClick?: () => void;
  variation?: string;
  size?: string;
  href: string;
}

export default function LinkUnderline({
  text,
  onClick,
  variation,
  size,
  href,
}: LinkUnderlineProps) {
  return (
    <Link onClick={onClick} href={href}>
      {" "}
      <span className={`underline hover--green ${size} ${variation}`}>
        {text}
      </span>
    </Link>
  );
}
