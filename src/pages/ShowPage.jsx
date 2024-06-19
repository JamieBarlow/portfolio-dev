import React from "react";
import "../assets/css/projectStyles.css";
import ProjectShowHero from "../components/ShowPage/ProjectShowHero";
import ProjectShowPurpose from "../components/ShowPage/ProjectShowPurpose";
import ProjectShowFeatures from "../components/ShowPage/ProjectShowFeatures";
import ProjectShowWebStack from "../components/ShowPage/ProjectShowWebstack";
import ProjectShowImages from "../components/ShowPage/ProjectShowImages";
import ProjectShowChallenges from "../components/ShowPage/ProjectShowChallenges";
import ProjectShowLessons from "../components/ShowPage/ProjectShowLessons";
import ProjectShowOther from "../components/ShowPage/ProjectShowOther";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ObserverProvider from "../context/ObserverContext";

import { useParams } from "react-router-dom";
import projectData from "../assets/js/projects/projectData";
const displayProjects = projectData.slice(0, 4);

export default function ShowPage() {
  const { project } = useParams();
  const projectInfo = displayProjects.find(
    (p) => p.pageLink === `projects/${project}`
  );
  if (!projectInfo) {
    return <div>Project not found</div>;
  }
  const {
    title,
    stack,
    code,
    live,
    about,
    purpose,
    features,
    webStack,
    description,
    challenges,
    lessons,
    images,
    otherProjects,
    conversion,
  } = projectInfo;
  return (
    <>
      <link rel="stylesheet" href="css/projectStyles.css" />
      <main className="main-wrapper projectPage">
        <ObserverProvider>
          <Navbar />
          <ProjectShowHero
            title={title}
            about={about}
            stack={stack}
            live={live}
            code={code}
            images={images}
          />
          <ProjectShowPurpose purpose={purpose} images={images} title={title} />
          <ProjectShowFeatures features={features} />
        </ObserverProvider>
        <ProjectShowWebStack webStack={webStack} />
        <ProjectShowImages images={images} title={title} />
        <ProjectShowChallenges
          challenges={challenges}
          images={images}
          title={title}
        />
        <ProjectShowLessons lessons={lessons} />
        <ProjectShowOther otherProjects={otherProjects} />
        <Footer />
      </main>
    </>
  );
}
