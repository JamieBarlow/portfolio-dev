import React from "react";
import { Link } from "react-router-dom";

export default function LinkUnderline({ text, onClick, variation, size }) {
  return (
    <Link onClick={onClick}>
      {" "}
      <span className={`underline hover--green ${size} ${variation}`}>
        {text}
      </span>
    </Link>
  );
}
