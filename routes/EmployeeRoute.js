const express = require("express");
const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
} = require("../controllers/EmployeeController"); // Adjust the path as needed

let router = express.Router();

router.route("/employees").post(createEmployee);

router.route("/employees").get(getAllEmployees);

router.route("/employees/:id").get(getEmployeeById);

router.route("/employees/:id").put(updateEmployee);

router.route("/employees/:id").delete(deleteEmployee);

module.exports = router;
