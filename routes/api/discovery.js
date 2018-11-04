//TODO: make discovery api route
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Profile Model
const Discovery = require("../../models/Discovery");

// @route   GET api/goal/test
// @desc    Tests goal route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Discovery works!" }));

module.exports = router;
