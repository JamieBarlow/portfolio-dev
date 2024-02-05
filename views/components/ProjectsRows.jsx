import React from "react";
import ProjectBox from "./ProjectBox";

const projectData = [
  {
      title: "YelpCamp",
      languages: [
          "HTML/CSS",
          "JAVASCRIPT",
          "EXPRESS",
          "MONGO DB"
      ],
      description: "Full-stack web application with CRUD functionality. Allows user to add/read/update/delete reviews.",
      picL: "https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_600/portfolio/yelpcamp-homepage2 600w",
      picM: "https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_400/portfolio/yelpcamp-homepage2 400w",
      src: "../images/yelpcamp-homepage",
      pageLink: "projects/yelpCamp",
      gitHubLink: "https://github.com/JamieBarlow/myYelpCamp"              
  },
  {
    title: "Direct Debit Processing Calendar",
    languages: [
      "HTML/CSS",
      "JAVASCRIPT",
      "Mocha.JS"
    ],
    description: "JavaScript web app to generate calendar data a company's Direct Debit processes. Features unit-testing with Mocha.js and Chai, which can be run from the browser",
    picL: "https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_800/portfolio/dd-calculator-preview 800w",
    picM: "https://res.cloudinary.com/dakgl7s9n/image/upload/f_auto,q_auto:best,c_scale,w_600/portfolio/dd-calculator-preview 600w",
    src: "../images/dd-calculator-preview",
    pageLink: "projects/directDebits",
    gitHubLink: "https://github.com/JamieBarlow/weekend-bankhol"
  },
]

export default function ProjectsRows() {
  // Create array 'chunks' from data to populate rows depending on rowLength
  const rowLength = 2;
  const dataChunk = [];
  for (let i = 0; i < projectData.length; i += rowLength) {
    dataChunk.push(projectData.slice(i, i + rowLength));
  }
  return (
    <>
    {dataChunk.map((chunk, rowIndex) => (
        <div key={`${rowIndex}`} className="projects__row">
          {chunk.map((project) => (
            <ProjectBox key={`${project.title}`} {...project} />
          ))}
        </div>
      ))}
    </>
  );
}
