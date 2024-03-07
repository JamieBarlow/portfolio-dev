import React from "react";
import HeadBoilerPlate from "./components/HeadBoilerplate";
import ProjectShowHero from "./components/ProjectShowHero";
import ProjectShowPurpose from "./components/ProjectShowPurpose";
import Scripts from "./components/Scripts";
import ProjectShowFeatures from "./components/ProjectShowFeatures";
import ProjectShowWebStack from "./components/ProjectShowWebstack";
import ProjectShowImages from "./components/ProjectShowImages";
import ProjectShowChallenges from "./components/ProjectShowChallenges";
import ProjectShowLessons from "./components/ProjectShowLessons";
import ProjectShowOther from "./components/ProjectShowOther";

export default function ShowPage({ projectInfo }) {
  const parsedProjectInfo = JSON.parse(projectInfo);
  console.log(parsedProjectInfo);
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
  } = parsedProjectInfo;
  return (
    <>
      <HeadBoilerPlate />
      <link rel="stylesheet" href="css/projectStyles.css" />
      <ProjectShowHero
        title={title}
        about={about}
        stack={stack}
        live={live}
        code={code}
        images={images}
      />
      <ProjectShowPurpose purpose={purpose} />
      <ProjectShowFeatures title={title} features={features} images={images} />
      <ProjectShowWebStack webStack={webStack} />
      <ProjectShowImages images={images} title={title} />
      <ProjectShowChallenges
        challenges={challenges}
        images={images}
        title={title}
      />
      <ProjectShowLessons lessons={lessons} />
      <ProjectShowOther otherProjects={otherProjects} />
      <Scripts />
    </>
  );
}
