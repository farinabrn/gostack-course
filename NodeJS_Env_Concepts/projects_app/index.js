const express = require('express');
const server = express();

server.use(express.json());

var reqCounter = 0;
const projects = [];

function checkProjectExists(req, res, next) {
  const { id } = req.params;
  
  if (!id) {
    return res.status(400).json({ message: 'Project id must be informed in params!' });
  }

  const project = projects.find(elem => {
    return elem.id === id;
  });

  if (!project) {
    return res.status(404).json({ message: 'Project does not exists' });
  }

  req.projectIndex = projects.indexOf(project);

  next();
}

function countRequests(req, res, next) {
  console.log(`Request num: ${++reqCounter}`);
  next();
}

server.use(countRequests);

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  if(!id) {
    return res.status(400).json({ message: 'The id of project must be informed' });
  }

  if(!title) {
    return res.status(400).json({ message: 'The title of project must be informed' });
  }
  
  projectWithId = projects.find(elem => {
    return elem.id === id;
  });

  if (projectWithId) {
    return res.status(400).json({ message: 'The id of project was already informed' });
  }

  projects.push({
    id,
    title,
    tasks: []
  });
  
  return res.json(projects);
});

server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { title } = req.body;

  if(!title) {
    return res.status(400).json({ message: 'The title of project must be informed' });
  }
  
  projects[req.projectIndex].title = title;projects
  
  return res.json(projects);
});

server.delete('/projects/:id', checkProjectExists, (req, res) => {
  projects.splice(req.projectIndex, 1);

  return res.send();
});

server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { title } = req.body;
  
  if(!title) {
    return res.status(400).json({ message: 'The title of project must be informed' });
  }
  
  projects[req.projectIndex].tasks.push(title);
  
  return res.json(projects);
});

server.listen(3001);