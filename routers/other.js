const express = require("express");
const router = express.Router();

const { getOther, updateOther } = require("../controllers/other");
const { isAuthenticated } = require("../middleware/authMiddleware");

// Public route to get other
router.route("/").get(getOther);

// Admin-only route to update other
router.route("/").put(
  isAuthenticated,
  updateOther
);

module.exports = router; 