const express = require("express");
const router = express.Router();

const { getHeader, updateHeader } = require("../controllers/header");
const { isAuthenticated } = require("../middleware/authMiddleware");

// Public route to get header
router.route("/").get(getHeader);

// Admin-only route to update header
router.route("/").put(
  isAuthenticated,
  updateHeader
);

module.exports = router; 