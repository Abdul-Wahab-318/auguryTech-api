const express = require("express");
const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
} = require("../controllers/EmployeeController"); // Adjust the path as needed

let router = express.Router();

router.route("/").post(createEmployee);

router.route("/").get(getAllEmployees);

router.route("/:id").get(getEmployeeById);

router.route("/:id").put(updateEmployee);

router.route("/:id").delete(deleteEmployee);

module.exports = router;
