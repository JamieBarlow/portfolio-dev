import React from "react";

export default function HeadBoilerPlate({ projectTitle }) {
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <title>{projectTitle ? projectTitle : "My Portfolio"}</title>
      <link rel="stylesheet" href="/css/style.css" />
    </head>
  );
}
