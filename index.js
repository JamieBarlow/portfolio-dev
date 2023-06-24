const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate')
const projectData = require('./projects/projectData');

app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
// Serve static assets
app.use(express.static(path.join(__dirname, 'assets')))

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/projects', (req, res) => {
    res.render('projects');
})

app.get('/projects/:project', (req, res) => {
    let { project } = req.params;
    if (project in projectData) {
        const projectInfo = projectData[project];
        res.render('projects/show', { projectInfo });
      } else {
        // Handle case when project is not found
        res.status(404).send('Project not found');
      }
})

app.get('*', (req, res) => {
    res.send('Page not found');
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
})