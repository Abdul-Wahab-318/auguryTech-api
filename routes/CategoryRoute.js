const express = require("express")
const { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } = require("../controllers/CategoryController")
let router = express.Router()

router.route("/categories").post(createCategory)

router.route("/categories").get(getAllCategories)

router.route("/categories/:id").get(getCategoryById)

router.route("/categories/:id").put(updateCategory)

router.route("/categories/:id").delete(deleteCategory)

module.exports = router