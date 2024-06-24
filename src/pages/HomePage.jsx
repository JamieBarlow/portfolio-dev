import React, { useRef, useEffect, useContext } from "react";
import HeroSection from "../components/HomePage/HeroSection";
import ExperienceSection from "../components/HomePage/ExperienceSection";
import Divider from "../components/HomePage/Divider";
import ProjectsSection from "../components/HomePage/ProjectsSection";
import ContactMe from "../components/HomePage/ContactMe";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ObserverProvider from "../context/ObserverContext";

function App() {
  return (
    <>
      <main className="main-wrapper homePage">
        <ObserverProvider>
          <Navbar />
          <HeroSection />
          <ExperienceSection />
          <Divider />
          <div id="projectsAnchor"></div>
          <ProjectsSection />
          <ContactMe />
          <Footer />
        </ObserverProvider>
      </main>
    </>
  );
}

export default App;
