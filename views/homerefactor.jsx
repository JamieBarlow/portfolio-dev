import React from "react";
import HeroSection from "./HeroSection";
import Experience from "./Experience";
import Divider from "./Divider";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Navbar from "./Navbar";
import Footer from "./Footer";

function HelloMessage(props) {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Experience />
      <Divider />
      <div id="projectsAnchor"></div>
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

module.exports = HelloMessage;
