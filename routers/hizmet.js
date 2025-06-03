const express = require("express");
const router = express.Router();

const {
  createHizmet,
  getAllHizmetler,
  getSingleHizmet,
  updateHizmet,
  deleteHizmet,
  getCompanyHizmetler,
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  getCompanyCategories
} = require("../controllers/hizmet");

const { isAuthenticated } = require("../middleware/authMiddleware");

// Category routes - need to be defined BEFORE hizmet routes to avoid conflict with /:id
router.get("/categories", getAllCategories);
router.post("/categories", isAuthenticated, createCategory);
router.put("/categories/:id", isAuthenticated, updateCategory);
router.delete("/categories/:id", isAuthenticated, deleteCategory);
router.get("/categories/company", isAuthenticated, getCompanyCategories);

// Hizmet routes
router.get("/", getAllHizmetler);
router.post("/", isAuthenticated, createHizmet);
router.get("/company", isAuthenticated, getCompanyHizmetler);
router.get("/:id", getSingleHizmet);
router.put("/:id", isAuthenticated, updateHizmet);
router.delete("/:id", isAuthenticated, deleteHizmet);

module.exports = router; 