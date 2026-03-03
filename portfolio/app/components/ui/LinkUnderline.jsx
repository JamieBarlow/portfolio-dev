import React from "react";
import { Link } from "react-router-dom";

export default function LinkUnderline({
  text,
  onClick,
  variation,
  size,
  href,
}) {
  return (
    <Link onClick={onClick} to={href}>
      {" "}
      <span className={`underline hover--green ${size} ${variation}`}>
        {text}
      </span>
    </Link>
  );
}
