import React from "react";
import { Link } from "react-router-dom";

export default function ButtonOutline({ href, variation, children }) {
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
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}
