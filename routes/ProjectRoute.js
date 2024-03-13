const express = require('express');
const {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} = require('../controllers/ProjectController'); 

let router = express.Router();

router.route('/').post(createProject);

router.route('/').get(getAllProjects);

router.route('/:id').get(getProjectById);

router.route('/:id').put(updateProject);

router.route('/:id').delete(deleteProject);

module.exports = router;