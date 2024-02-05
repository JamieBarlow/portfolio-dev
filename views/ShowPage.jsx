import React from "react";

export default function ShowPage({ projectInfo, projectTitle }) {
  const parsedProjectInfo = JSON.parse(projectInfo);
  console.log(parsedProjectInfo);
  return (
    <div>
      <p>Hello</p>
      {/* <h1>{parsedProjectInfo}</h1> */}
      <h1>{projectTitle}</h1>
    </div>
  );
}
