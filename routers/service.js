const express = require("express");
const router = express.Router();

const {
  createService,
  getAllServices,
  getSingleService,
  updateService,
  deleteService,
  getCompanyServices,
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  getCompanyCategories
} = require("../controllers/service");

const { isAuthenticated } = require("../middleware/authMiddleware");

// Category routes - need to be defined BEFORE service routes to avoid conflict with /:id
router.get("/categories", getAllCategories);
router.post("/categories", isAuthenticated, createCategory);
router.put("/categories/:id", isAuthenticated, updateCategory);
router.delete("/categories/:id", isAuthenticated, deleteCategory);
router.get("/categories/company", isAuthenticated, getCompanyCategories);

// Service routes
router.get("/", getAllServices);
router.post("/", isAuthenticated, createService);
router.get("/company", isAuthenticated, getCompanyServices);
router.get("/:id", getSingleService);
router.put("/:id", isAuthenticated, updateService);
router.delete("/:id", isAuthenticated, deleteService);

module.exports = router; 