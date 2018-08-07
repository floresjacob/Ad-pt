const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport'); 

// Post Model
const Post = require('../../models/Post');
// Profile Model
const Profile = require('../../models/Profile');

const validatePostInput = require('../../validation/post')

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Post works!" }));

// @route GET api/posts test
// @desc Tests post route
// @access Public

module.exports = router;
