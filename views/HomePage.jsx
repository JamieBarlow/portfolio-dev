import React from "react";
import HeroSection from "./components/HeroSection";
import Experience from "./components/Experience";
import Divider from "./components/Divider";
import Projects from "./components/Projects";
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
          <Experience />
          <Divider />
          <div id="projectsAnchor"></div>
          <Projects />
          <ContactMe />
          <Footer />
        </main>
      </body>
      <Scripts />
    </>
  );
}

module.exports = HomePage;
