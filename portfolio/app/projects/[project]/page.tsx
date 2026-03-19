"use client";

import { useEffect } from "react";
import "./projects.css";
import ProjectShowHero from "../../components/ProjectPage/ProjectShowHero";
import ProjectShowPurpose from "../../components/ProjectPage/ProjectShowPurpose";
import ProjectShowFeatures from "../../components/ProjectPage/ProjectShowFeatures";
import ProjectShowWebStack from "../../components/ProjectPage/ProjectShowWebstack";
import ProjectShowImages from "../../components/ProjectPage/ProjectShowImages";
import ProjectShowChallenges from "../../components/ProjectPage/ProjectShowChallenges";
import ProjectShowLessons from "../../components/ProjectPage/ProjectShowLessons";
import ProjectShowOther from "../../components/ProjectPage/ProjectShowOther";
import { motion } from "framer-motion";
import { pageVariants } from "../../context/animations";
import { notFound } from "next/navigation";

import projectData from "@/app/pagedata/pageData";

interface ProjectPageProps {
  params: Promise<{ project: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // Always render from top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { project } = await params;
  const projectInfo = projectData.find(
    (p) => p.pageLink === `projects/${project}`,
  );
  if (!projectInfo) {
    notFound();
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
    challenges,
    lessons,
    otherProjects,
    media,
  } = projectInfo;
  return (
    <>
      <motion.main
        className="main-wrapper projectPage"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <p>{title}</p>
        {/* <ProjectShowHero
          title={title}
          about={about}
          stack={stack}
          live={live}
          code={code}
          media={media}
        />
        <ProjectShowPurpose purpose={purpose} media={media} title={title} />
        <ProjectShowFeatures features={features} />
        <ProjectShowWebStack webStack={webStack} />
        <ProjectShowImages media={media} />
        <ProjectShowChallenges challenges={challenges} media={media} />
        <ProjectShowLessons lessons={lessons} />
        <ProjectShowOther otherProjects={otherProjects} /> */}
      </motion.main>
    </>
  );
}
