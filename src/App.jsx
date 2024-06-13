// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import React from "react";
import HeroSection from "./components/HomePage/HeroSection";
import ExperienceSection from "./components/HomePage/ExperienceSection";
import Divider from "./components/HomePage/Divider";
import ProjectsSection from "./components/HomePage/ProjectsSection";
import ContactMe from "./components/HomePage/ContactMe";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Head from "./components/HomePage/Head";
import ObserverProvider from "./context/ObserverContext"
// import Scripts from "./components/layout/Scripts";

function App() {
  return (
    <>
      <main className="main-wrapper">
        <ObserverProvider>
        <Navbar />
        <HeroSection />
        </ObserverProvider>
        <ExperienceSection />
        <Divider />
        <div id="projectsAnchor"></div>
        <ProjectsSection />
        <ContactMe />
        <Footer />
      </main>
      <script src="js/p5.min.js"></script>
      <script src="js/p5.asciiart.min.js"></script>
      <script src="js/asciiart_stillimage_example.js"></script>
      {/* <Scripts /> */}
      {/* <script src="js/contact.js"></script> */}
    </>
  );
}

export default App;
