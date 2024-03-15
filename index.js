const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const projectData = require("./projects/projectData");
const nodemailer = require("nodemailer");
require("dotenv").config();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
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
  if (project in projectData) {
    const projectInfo = projectData[project];
    res.render("pages/ShowPage", {
      projectInfo: JSON.stringify(projectInfo),
    });
  } else {
    // Handle case when project is not found
    res.status(404).send("Project not found");
  }
});

app.get("/aboutMe", (req, res) => {
  const projectTitle = "About Me";
  // res.render("about", { projectTitle });
  res.render("AboutPage");
});

app.get("*", (req, res) => {
  res.send("Page not found");
});

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
