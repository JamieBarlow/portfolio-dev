import React from "react";
import { Link } from "react-router-dom";

export default function Button3D({
  text,
  onClick,
  size,
  type = "button",
  icon,
  href,
  isInternalLink,
}) {
  return (
    <button className="pushable" type={type}>
      {isInternalLink ? (
        <a className={`front ${size}`} onClick={onClick} href={href}>
          {icon ? icon : null}
          {text}
        </a>
      ) : (
        <Link className={`front ${size}`} onClick={onClick} to={href}>
          {icon ? icon : null}
          {text}
        </Link>
      )}
    </button>
  );
}
