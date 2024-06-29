import React, { useEffect } from "react";
import "../assets/css/aboutme.css";
import AboutMeHero from "../components/AboutMe/AboutMeHero";
import AboutMeBlurb from "../components/AboutMe/AboutMeBlurb";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";

export default function AboutPage({ pageVariants }) {
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
      <Navbar />
      <AboutMeHero />
      <AboutMeBlurb />
      <Footer />
    </motion.main>
  );
}
