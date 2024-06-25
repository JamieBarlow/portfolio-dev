import React, { forwardRef, useEffect, useContext, useState } from "react";
import { RoughNotation } from "react-rough-notation";
import { ObserverContext } from "../../context/ObserverContext";

const ExperienceIcon = forwardRef(({ tech, children }, ref) => {
  const { isTablet, isDesktop } = useContext(ObserverContext);
  const [underlineWidth, setUnderlineWidth] = useState("--------");
  useEffect(() => {
    if (isDesktop) {
      setUnderlineWidth("-----------------");
    } else if (isTablet) {
      setUnderlineWidth("---------");
    } else {
      setUnderlineWidth("--");
    }
  }, [isTablet, isDesktop]);
  return (
    <div
      ref={ref}
      className={`experience__box slide-up ${
        tech === "HTML / CSS" ? "doubleicon" : ""
      }`}
    >
      <h4>{tech}</h4>
      <div className="experience__icons">{children}</div>
      {isDesktop || isTablet ? (
        <RoughNotation
          style={{
            color: "#2D6ACD",
          }}
          type="underline"
          show={true}
          color="#4CE19E"
          padding={[20, 0]}
        >
          {underlineWidth}
        </RoughNotation>
      ) : null}
    </div>
  );
});

export default ExperienceIcon;
