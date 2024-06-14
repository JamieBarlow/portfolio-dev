import React, {useContext, forwardRef} from "react";
import { ObserverContext } from "../../context/ObserverContext";

const ExperienceIcon = forwardRef(({ tech, children }, ref) => {
  const {slidingElemIsIntersecting} = useContext(ObserverContext);
  return (
    <div ref={ref}
      className={`experience__box slide-up ${
        tech === "HTML / CSS" ? "doubleicon" : ""
      } ${slidingElemIsIntersecting && 'active'}`}
    >
      <h4>{tech}</h4>
      <div className="experience__icons">{children}</div>
    </div>
  );
})

export default ExperienceIcon;