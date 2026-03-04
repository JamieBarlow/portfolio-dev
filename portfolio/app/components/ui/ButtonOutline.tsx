import Link from "next/link";

interface ButtonOutlineProps {
  href: string;
  variation?: string;
  children: React.ReactNode;
}

export default function ButtonOutline({
  href,
  variation,
  children,
}: ButtonOutlineProps) {
  let className = "";
  switch (variation) {
    case "dark":
      className = "button--outline button--outline-dark";
      break;
    case "light":
      className = "button--outline button--outline-light";
      break;
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
