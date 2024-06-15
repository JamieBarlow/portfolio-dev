import React, { forwardRef } from "react";

const ExperienceIcon = forwardRef(({ tech, children }, ref) => {
  return (
    <div
      ref={ref}
      className={`experience__box slide-up ${
        tech === "HTML / CSS" ? "doubleicon" : ""
      }`}
    >
      <h4>{tech}</h4>
      <div className="experience__icons">{children}</div>
    </div>
  );
});

export default ExperienceIcon;
