const express = require("express");
const router = express.Router();

const {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  getCompanyBlogs
} = require("../controllers/blog");

const { isAuthenticated } = require("../middleware/authMiddleware");

// Public routes
router.get("/", getAllBlogs);
router.get("/:id", getSingleBlog);

// Protected routes - require authentication
router.post("/", isAuthenticated, createBlog);
router.put("/:id", isAuthenticated, updateBlog);
router.delete("/:id", isAuthenticated, deleteBlog);

// Company-specific routes
router.get("/company/blogs", isAuthenticated, getCompanyBlogs);

module.exports = router; 