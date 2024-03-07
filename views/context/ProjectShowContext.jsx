import React from "react";
import { createContext, useState } from "react";
const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [testState, setTestState] = useState("Test state");
  return (
    <ProjectContext.Provider
      value={{
        testState,
        setTestState,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
