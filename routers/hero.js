const express = require("express");
const router = express.Router();

const { getHero, updateHero } = require("../controllers/hero");
const { isAuthenticated } = require("../middleware/authMiddleware");

// Public route to get hero
router.route("/").get(getHero);

// Admin-only route to update hero
router.route("/").put(
  isAuthenticated,
  updateHero
);

module.exports = router; 