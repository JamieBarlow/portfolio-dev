import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import ExperienceSection from "../components/HomePage/ExperienceSection";
import Divider from "../components/HomePage/Divider";
import ProjectsSection from "../components/HomePage/ProjectsSection";
import ContactMe from "../components/HomePage/ContactMe";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Head from "../components/HomePage/Head";
import Scripts from "../components/layout/Scripts";

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
      <script src="js/contact.js"></script>
    </>
  );
}

module.exports = HomePage;
