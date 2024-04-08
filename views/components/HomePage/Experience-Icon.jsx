import React from "react";

export default function ExperienceIcon({ tech, children }) {
  return (
    <div
      className={`experience__box slide-up ${
        tech === "HTML / CSS" ? "doubleicon" : ""
      }`}
    >
      <h4>{tech}</h4>
      <div className="experience__icons">{children}</div>
    </div>
  );
}
