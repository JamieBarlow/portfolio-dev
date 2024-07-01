import React from "react";
import ButtonUnderline from "../common/ButtonUnderline";
import ProjectPreviewImg from "./ProjectPreviewImg";
import Pill from "../common/Pill";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  stack,
  pageLink,
  code,
  homeDescription,
  images,
  variation,
}) {
  const picL = `https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_800/portfolio/${images.header} 800w`;
  const picM = `https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_800/portfolio/${images.header} 600w`;
  const src = `/images/${images.header}`;
  let className;
  switch (variation) {
    case "shadow":
      className = "card";
      break;
    case "outline":
      className = "card--outline";
      break;
    default:
      className = "card";
  }

  return (
    <div className={className}>
      <ProjectPreviewImg {...{ picL, picM, src, title, pageLink }} />
      <p className="projects__title">{title}</p>
      <div className="projects__languages">
        {stack.map((lang, index) => (
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.05 }}
            viewport={{ once: true, margin: "100px", amount: 0.3 }}
          >
            <Pill variation="outline" key={index}>
              {lang}
            </Pill>
          </motion.div>
        ))}
      </div>
      <div className="projects__description">{homeDescription}</div>
      <div className="projects__links">
        <ButtonUnderline link={pageLink} name="View project" icon="fa-book" />
        <ButtonUnderline link={code} name="View code" icon="fa-laptop-code" />
      </div>
    </div>
  );
}
