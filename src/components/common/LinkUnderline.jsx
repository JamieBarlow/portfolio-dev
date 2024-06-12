import React from "react";

export default function LinkUnderline({ text, href, variation, size }) {
  return (
    <a href={href}>
      {" "}
      <span className={`underline hover--green ${size} ${variation}`}>
        {text}
      </span>
    </a>
  );
}
