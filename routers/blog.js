const express = require("express");
const router = express.Router();

const {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  getCompanyBlogs,
  getAllCategories,
  addCategory,
  deleteCategory,
  createGlobalCategory,
  deleteGlobalCategory
} = require("../controllers/blog");

const { isAuthenticated } = require("../middleware/authMiddleware");

// Public routes
router.get("/", getAllBlogs);
router.get("/categories", getAllCategories);
router.get("/:id", getSingleBlog);

// Protected routes - require authentication
router.post("/", isAuthenticated, createBlog);
router.put("/:id", isAuthenticated, updateBlog);
router.delete("/:id", isAuthenticated, deleteBlog);

// Company-specific routes
router.get("/company/blogs", isAuthenticated, getCompanyBlogs);

// Category management routes
router.post("/categories", isAuthenticated, createGlobalCategory);
router.delete("/categories/:category", isAuthenticated, deleteGlobalCategory);
router.post("/:id/categories", isAuthenticated, addCategory);
router.delete("/:id/categories/:category", isAuthenticated, deleteCategory);

module.exports = router; 