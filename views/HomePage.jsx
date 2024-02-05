import React from "react";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import Divider from "./components/Divider";
import ProjectsSection from "./components/ProjectsSection";
import ContactMe from "./components/ContactMe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Scripts from "./components/Scripts";

function HomePage(props) {
  return (
    <>
      <Head />
      <body className="ff-archivo">
        <main className="main-wrapper">
          <Navbar />
          <HeroSection />
          <ExperienceSection />
          <Divider />
          <div id="projectsAnchor"></div>
          <ProjectsSection />
          <ContactMe />
          <Footer />
        </main>
      </body>
      <Scripts />
    </>
  );
}

module.exports = HomePage;
