const express = require("express");
const router = express.Router();

const { getFooter, updateFooter } = require("../controllers/footer");
const { isAuthenticated } = require("../middleware/authMiddleware");

// Public route to get footer
router.route("/").get(getFooter);

// Admin-only route to update footer
router.route("/").put(
  isAuthenticated,
  updateFooter
);

module.exports = router; 