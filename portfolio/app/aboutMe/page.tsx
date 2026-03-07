"use client";

import { useEffect } from "react";
import "./aboutMe.css";
import AboutMeHero from "../components/AboutPage/AboutMeHero";
import AboutMeBlurb from "../components/AboutPage/AboutMeBlurb";
import { motion, Variants } from "framer-motion";

interface AboutPageProps {
  pageVariants: Variants;
}

export default function AboutPage({ pageVariants }: AboutPageProps) {
  // Always render from top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.main
      className="aboutPage"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <AboutMeHero />
      <AboutMeBlurb />
    </motion.main>
  );
}
