import React, { useContext } from "react";
import AboutMeHero from "../components/AboutMe/AboutMeHero";
import AboutMeBlurb from "../components/AboutMe/AboutMeBlurb";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ObserverProvider from "../context/ObserverContext";

export default function AboutPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/aboutme.css" />
      <ObserverProvider>
        <Navbar />
        <AboutMeHero />
        <AboutMeBlurb />
      </ObserverProvider>
      <Footer />
    </>
  );
}
