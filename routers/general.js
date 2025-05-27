const express = require("express");
const router = express.Router();
const { getGeneral, updateGeneral } = require("../controllers/general");
const { isAuthenticated } = require("../middleware/authMiddleware");

// Get general settings - Public route
router.get("/", getGeneral);

// Update general settings - Protected route
router.put("/", isAuthenticated, updateGeneral);

module.exports = router; 