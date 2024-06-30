import React, {
  forwardRef,
  useEffect,
  useContext,
  useState,
  useRef,
} from "react";
import { RoughNotation } from "react-rough-notation";
import { ObserverContext } from "../../context/ObserverContext";
import { motion } from "framer-motion";

const ExperienceIcon = forwardRef(({ tech, children }, ref) => {
  const { isTablet, isDesktop, slideUpVariant } = useContext(ObserverContext);
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
    <motion.div
      ref={ref}
      variants={slideUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
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
    </motion.div>
  );
});

export default ExperienceIcon;
