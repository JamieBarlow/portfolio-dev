const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
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
    const { project } = req.params;
    res.render('projects', { project })
    // res.send(`<h1>Viewing page for the ${project} project`);
})

app.get('*', (req, res) => {
    res.send('Page not found');
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
})