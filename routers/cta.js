const express = require("express");
const router = express.Router();

const { getCta, updateCta } = require("../controllers/cta");
const { isAuthenticated } = require("../middleware/authMiddleware");

// Public route to get CTA
router.route("/").get(getCta);

// Admin-only route to update CTA
router.route("/").put(
  isAuthenticated,
  updateCta
);

module.exports = router; 