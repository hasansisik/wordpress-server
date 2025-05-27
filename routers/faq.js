const express = require("express");
const router = express.Router();

const { getFaq, updateFaq } = require("../controllers/faq");
const { isAuthenticated } = require("../middleware/authMiddleware");

// Public route to get FAQ
router.route("/").get(getFaq);

// Admin-only route to update FAQ
router.route("/").put(
  isAuthenticated,
  updateFaq
);

module.exports = router; 