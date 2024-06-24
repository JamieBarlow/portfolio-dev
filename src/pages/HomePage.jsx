import React, { useRef, useEffect, useContext } from "react";
import HeroSection from "../components/HomePage/HeroSection";
import ExperienceSection from "../components/HomePage/ExperienceSection";
import Divider from "../components/HomePage/Divider";
import ProjectsSection from "../components/HomePage/ProjectsSection";
import ContactMe from "../components/HomePage/ContactMe";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { ObserverContext } from "../context/ObserverContext";
import { useLocation } from "react-router-dom";

function HomePage() {
  const {
    smoothScrollToRef,
    projectsSectionRef,
    contactMeRef,
    clicked,
    setClicked,
  } = useContext(ObserverContext);
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && clicked) {
      if (clicked === "Projects") {
        smoothScrollToRef(projectsSectionRef);
      } else if (clicked === "Contact") {
        smoothScrollToRef(contactMeRef);
      }
      setClicked("");
    }
  }, [location.pathname, clicked]);
  return (
    <>
      <main className="main-wrapper homePage">
        <Navbar />
        <HeroSection />
        <ExperienceSection />
        <Divider />
        <div id="projectsAnchor"></div>
        <ProjectsSection />
        <ContactMe />
        <Footer />
      </main>
    </>
  );
}

export default HomePage;
