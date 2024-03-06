const express = require('express');
const {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} = require('../controllers/ProjectController'); 

let router = express.Router();

router.route('/projects').post(createProject);

router.route('/projects').get(getAllProjects);

router.route('/projects/:id').get(getProjectById);

router.route('/projects/:id').put(updateProject);

router.route('/projects/:id').delete(deleteProject);

module.exports = router;