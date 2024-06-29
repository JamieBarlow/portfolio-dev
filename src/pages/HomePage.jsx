import React, { useRef, useEffect, useContext } from "react";
import HeroSection from "../components/HomePage/HeroSection";
import ExperienceSection from "../components/HomePage/ExperienceSection";
import Divider from "../components/HomePage/Divider";
import ProjectsSection from "../components/HomePage/ProjectsSection";
import ContactMe from "../components/HomePage/ContactMe";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { ObserverContext } from "../context/ObserverContext";
import { motion } from "framer-motion";

export default function HomePage({ pageVariants }) {
  const {
    smoothScrollToRef,
    projectsSectionRef,
    contactMeRef,
    clicked,
    setClicked,
    location,
  } = useContext(ObserverContext);

  useEffect(() => {
    if (location.pathname === "/" && clicked) {
      if (clicked === "Projects") {
        smoothScrollToRef(projectsSectionRef);
      } else if (clicked === "Contact") {
        smoothScrollToRef(contactMeRef);
      } else if (clicked === "Home") {
        window.scrollTo(0, 0);
      }
      setClicked("");
    }
  }, [location.pathname, clicked]);
  return (
    <>
      <motion.main
        className="main-wrapper homePage"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Navbar />
        <HeroSection />
        <ExperienceSection />
        <Divider />
        <div id="projectsAnchor"></div>
        <ProjectsSection />
        <ContactMe />
        <Footer />
      </motion.main>
    </>
  );
}
