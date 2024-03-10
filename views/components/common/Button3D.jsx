import React from "react";

export default function Button3D({ text, link, size, type = "button", icon }) {
  return (
    <button className="pushable" type={type}>
      <a className={`front ${size}`} href={link}>
        {icon ? icon : null}
        {text}
      </a>
    </button>
  );
}
