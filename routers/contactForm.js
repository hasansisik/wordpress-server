const express = require("express");
const router = express.Router();
const { 
  createContactForm, 
  getAllContactForms, 
  deleteContactForm 
} = require("../controllers/contactForm");
const { isAuthenticated } = require("../middleware/authMiddleware");

// Public route - Create contact form submission
router.post("/", createContactForm);

// Protected routes - Get all and delete
router.get("/", isAuthenticated, getAllContactForms);
router.delete("/", isAuthenticated, deleteContactForm);

module.exports = router; 