import React from "react";
import HeroSection from "./HeroSection";
import Experience from "./Experience";
import Divider from "./Divider";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "./Head";
import Scripts from "./Scripts";

function HelloMessage(props) {
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

module.exports = HelloMessage;
