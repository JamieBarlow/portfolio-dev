import React, { forwardRef, useContext } from "react";
import { ObserverContext } from "../../context/ObserverContext";
import { motion } from "framer-motion";

const ExperienceIcon = forwardRef(({ tech, children }, ref) => {
  const { popInVariant } = useContext(ObserverContext);

  return (
    <motion.div
      ref={ref}
      variants={popInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "100px", amount: 0.3 }}
      className={`experience__box slide-up ${
        tech === "HTML / CSS" ? "doubleicon" : ""
      }`}
    >
      <h4>{tech}</h4>
      <div className="experience__icons">{children}</div>
    </motion.div>
  );
});

export default ExperienceIcon;
