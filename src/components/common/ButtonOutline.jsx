import React from "react";

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
    <a href={href} className={className}>
      {children}
    </a>
  );
}
