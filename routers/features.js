const express = require("express");
const router = express.Router();

const { getFeatures, updateFeatures } = require("../controllers/features");
const { isAuthenticated } = require("../middleware/authMiddleware");

// Public route to get features
router.route("/").get(getFeatures);

// Admin-only route to update features
router.route("/").put(
  isAuthenticated,
  updateFeatures
);

module.exports = router; 