const express = require('express');
const app = express();
app.use(express.json());
const port = 5000;
// This is the entry point of the application
const cors = require('cors');
app.use(cors());

require('dotenv').config();
const Project = require('./Project');
const Blog = require('./Blog');

app.get('/', (req, res) => {
    console.log(req);
    console.log('Helo world from console.');
    res.send('Hello, World!2');
});

app.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/projects', async (req, res) => {
    //Get Output to console
    console.log(req.body);

    //send data to Frontend
    //res.send('Hello from Backend');

    const project = new Project(req.body);
    try {
        const newProjects = await project.save();
        res.status(201).json(newProjects);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
