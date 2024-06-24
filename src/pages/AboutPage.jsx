import React, { useEffect } from "react";
import "../assets/css/aboutme.css";
import AboutMeHero from "../components/AboutMe/AboutMeHero";
import AboutMeBlurb from "../components/AboutMe/AboutMeBlurb";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ObserverProvider from "../context/ObserverContext";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="aboutPage">
      <ObserverProvider>
        <Navbar />
        <AboutMeHero />
        <AboutMeBlurb />
      </ObserverProvider>
      <Footer />
    </div>
  );
}
