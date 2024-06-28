import React, { useEffect } from "react";
import "../assets/css/aboutme.css";
import AboutMeHero from "../components/AboutMe/AboutMeHero";
import AboutMeBlurb from "../components/AboutMe/AboutMeBlurb";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function AboutPage() {
  // Always render from top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="aboutPage">
      <Navbar />
      <AboutMeHero />
      <AboutMeBlurb />
      <Footer />
    </div>
  );
}
