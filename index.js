const express = require('express');
const app = express();
const port = 5000;
// This is the entry point of the application


require('dotenv').config();
const Project = require('./Project');
const Blog = require('./Blog');

app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello, World!');
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

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
