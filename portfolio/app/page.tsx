"use client";

import Image from "next/image";
import { useEffect, useContext } from "react";
import HeroSection from "./components/HomePage/HeroSection";
import ExperienceSection from "./components/HomePage/ExperienceSection";
import Divider from "./components/HomePage/Divider";
// import ProjectsSection from "../components/HomePage/ProjectsSection";
// import ContactMe from "../components/HomePage/ContactMe";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
import { ObserverContext } from "./context/ObserverContext";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { Variants } from "framer-motion";
import { pageVariants } from "@/app/context/animations";

export default function Home() {
  // const {
  //   smoothScrollToRef,
  //   projectsSectionRef,
  //   contactMeRef,
  //   clicked,
  //   setClicked,
  //   location,
  // } = useContext(ObserverContext);

  // useEffect(() => {
  //   if (location.pathname === "/" && clicked) {
  //     if (clicked === "My Work") {
  //       smoothScrollToRef(projectsSectionRef);
  //     } else if (clicked === "Contact") {
  //       smoothScrollToRef(contactMeRef);
  //     } else if (clicked === "Home") {
  //       window.scrollTo(0, 0);
  //     }
  //     setClicked("");
  //   }
  // }, [location.pathname, clicked]);

  // function toastify(message, position, type) {
  //   const options = {
  //     position,
  //     autoClose: 1400,
  //   };
  //   if (type === "success") {
  //     toast.success(message, options);
  //   } else if (type === "error") toast.error(message, options);
  // }
  return (
    <>
      <ToastContainer />
      <motion.main
        className="main-wrapper homePage"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* <Navbar /> */}
        <HeroSection />
        <ExperienceSection />
        <Divider />
        <div id="projectsAnchor"></div>
        {/* <ProjectsSection /> */}
        {/* <ContactMe displayToast={toastify} /> */}
        {/* <Footer /> */}
      </motion.main>
    </>
  );
}
