//TODO: make goal api route
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Goal Model
const Goal = require("../../models/Goal");

// @route   GET api/goal/test
// @desc    Tests goal route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Goal works!" }));

module.exports = router;
