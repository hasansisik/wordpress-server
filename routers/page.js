const express = require("express");
const router = express.Router();

const { getPage, updatePage } = require("../controllers/page");
const { isAuthenticated } = require("../middleware/authMiddleware");

// Public route to get page content
router.route("/:pageType").get(getPage);

// Admin-only route to update page content
router.route("/:pageType").put(
  isAuthenticated,
  updatePage
);

module.exports = router; 