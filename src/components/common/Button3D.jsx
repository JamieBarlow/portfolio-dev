import React from "react";
import { Link } from "react-router-dom";

export default function Button3D({
  text,
  onClick,
  size,
  type = "button",
  icon,
  href,
}) {
  return (
    <button className="pushable" type={type}>
      <Link className={`front ${size}`} onClick={onClick} to={href}>
        {icon ? icon : null}
        {text}
      </Link>
    </button>
  );
}
