const express = require("express");
const router = express.Router();

const { getFaq, updateFaq } = require("../controllers/faq");
const { isAuthenticated } = require("../middleware/authMiddleware");

// Public route to get FAQ
router.route("/").get(getFaq);

// Temporarily disable authentication for development
router.route("/").put(updateFaq);

module.exports = router; 