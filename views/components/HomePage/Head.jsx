import React from "react";

export default function Head() {
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="./assets/images/favicon-32x32.png"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <title>Jamie Barlow</title>
      <script src="js/p5.min.js"></script>
      <script src="js/p5.asciiart.min.js"></script>
      <script src="js/asciiart_stillimage_example.js"></script>
      <script
        src="https://kit.fontawesome.com/762a7ebf5f.js"
        crossOrigin="anonymous"
      ></script>
      <link rel="stylesheet" href="css/style.css" />
    </head>
  );
}
