import React from "react";
import AboutMeHero from "../components/AboutMe/AboutMeHero";
import AboutMeBlurb from "../components/AboutMe/AboutMeBlurb";
import HeadBoilerPlate from "../components/layout/HeadBoilerplate";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Scripts from "../components/layout/Scripts";

export default function AboutPage() {
  return (
    <>
      <HeadBoilerPlate />
      <link rel="stylesheet" href="/css/aboutme.css" />
      <body>
        <main>
          <Navbar />
          <AboutMeHero />
          <AboutMeBlurb />
          <Footer />
        </main>
      </body>
      <Scripts />
    </>
  );
}
