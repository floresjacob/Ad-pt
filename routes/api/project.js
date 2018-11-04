//TODO: make project api route
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Project Model
const Project = require("../../models/Project");

// @route   GET api/goal/test
// @desc    Tests goal route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Project works!" }));

module.exports = router;
