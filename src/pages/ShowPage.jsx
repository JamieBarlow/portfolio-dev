import React from "react";
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

export default function ShowPage({ projectInfo }) {
  const parsedProjectInfo = JSON.parse(projectInfo);
  // console.log(parsedProjectInfo);
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
  } = parsedProjectInfo;
  return (
    <>
      <link rel="stylesheet" href="css/projectStyles.css" />
      <body>
        <main class="main-wrapper">
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
      </body>
    </>
  );
}
