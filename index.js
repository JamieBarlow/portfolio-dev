const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const projectData = require("./projects/projectData");
const displayProjects = projectData.slice(0, 4);
const nodemailer = require("nodemailer");
require("dotenv").config();
const port = process.env.PORT || 3000;

// app.set("view engine", "ejs");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
// Serve static assets
app.use(express.static(path.join(__dirname, "assets")));

// Handling POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/email", (req, res) => {
  console.log(req.body);
  // res.json({message: 'Message received!'})

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jamiebarlow@gmail.com",
      pass: process.env.GMAIL_TRANSPORTER_PWD,
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "jamiebarlow@gmail.com",
    subject: req.body.subject,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent!");
      res.send("success");
    }
  });
});

app.get("/", (req, res) => {
  res.render("pages/HomePage");
});

app.get("/projects", (req, res) => {
  res.render("pages/projects");
});

app.get("/projects/:project", (req, res) => {
  let { project } = req.params;
  const href = `projects/${project}`;
  let projectFound = false; // Flag to track whether project is found
  for (let i = 0; i < displayProjects.length; i++) {
    const projectInfo = displayProjects[i];
    if (href === projectInfo.pageLink) {
      projectFound = true;
      res.render("pages/ShowPage", {
        projectInfo: JSON.stringify(projectInfo),
      });
      break; // Exit the loop once project is found
    }
  }
  if (!projectFound) {
    res.status(404).send("Project not found");
  }
});

app.get("/aboutMe", (req, res) => {
  const projectTitle = "About Me";
  // res.render("about", { projectTitle });
  res.render("pages/AboutPage");
});

app.get("*", (req, res) => {
  res.send("Page not found");
});

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
