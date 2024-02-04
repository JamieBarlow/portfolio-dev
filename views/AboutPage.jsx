import React from "react";
import AboutMeHero from "./components/AboutMeHero";
import AboutMeBlurb from "./components/AboutMeBlurb";
import HeadBoilerPlate from "./components/HeadBoilerplate";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Scripts from "./components/Scripts";

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
