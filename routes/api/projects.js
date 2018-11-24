//TODO: DELETE for Goal and Customer; GET for Customer
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Project Model
const Project = require("../../models/Project");

// Validation
const validateProjectInput = require("../../validation/project");
const validateGoalInput = require("../../validation/goal");
const validateCustomerInput = require("../../validation/customer");

// @route   GET api/projects/test
// @desc    Tests project route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Project works!" }));

// @route   GET api/projects
// @desc    Get projects
// @access  Public
router.get("/", (req, res) => {
  Project.find()
    .sort({ date: -1 })
    .then(goals => res.json(goals))
    .catch(err =>
      res.status(404).json({ noprojectsfound: "No projects found" })
    );
});

// @route   GET api/projects/:id
// @desc    Get project by id
// @access  Public
router.get("/:id", (req, res) => {
  Project.findById(req.params.id)
    .then(project => res.json(project))
    .catch(err =>
      res.status(404).json({ noprojectfound: "No project found with that ID" })
    );
});

// @route   POST api/projects
// @desc    Create project
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProjectInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newProject = new Project({
      name: req.body.name,
      domain: req.body.domain,
      description: req.body.description,
      user: req.user.id
    });

    newProject.save().then(project => res.json(project));
  }
);

// @route   DELETE api/projects/:id
// @desc    Delete project
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Project.findById(req.params.id)
        .then(project => {
          // Check for project owner
          if (project.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }

          // Delete
          project.remove().then(() => res.json({ success: true }));
        })
        .catch(err =>
          res.status(404).json({ projectnotfound: "No project found" })
        );
    });
  }
);

// @route   GET api/projects/goals
// @desc    Get goals
// @access  Public
router.get("/:id/goals", (req, res) => {
  Project.findById(req.params.id)
    .sort({ date: -1 })
    .then(project => res.json(project.goals))
    .catch(err =>
      res.status(404).json({ noprojectsfound: "No projects found" })
    );
});

// @route   POST api/projects/goals/:id
// @desc    Add goal to project
// @access  Private
router.post(
  "/goals/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateGoalInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    Project.findById(req.params.id)
      .then(project => {
        const newGoal = {
          title: req.body.title,
          description: req.body.description,
          type: req.body.type
        };

        // Add to goals array
        project.goals.unshift(newGoal);

        // Save
        project.save().then(project => res.json(project));
      })
      .catch(err =>
        res.status(404).json({ projectnotfound: "No project found" })
      );
  }
);

// @route   POST api/projects/customers/:id
// @desc    Add goal to project
// @access  Private
router.post(
  "/customers/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCustomerInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    Project.findById(req.params.id)
      .then(project => {
        const newCustomer = {
          name: req.body.name,
          bio: req.body.bio,
          age: req.body.age,
          income: req.body.income
        };

        //Customer pains csv
        if (typeof req.body.pains !== "undefined") {
          newCustomer.pains = req.body.pains.split(",");
        }

        //Customer gains csv
        if (typeof req.body.gains !== "undefined") {
          newCustomer.gains = req.body.gains.split(",");
        }

        //Customer jobs csv
        if (typeof req.body.jobs !== "undefined") {
          newCustomer.jobs = req.body.jobs.split(",");
        }

        //Customer thoughts csv
        if (typeof req.body.thoughts !== "undefined") {
          newCustomer.thoughts = req.body.thoughts.split(",");
        }

        //Customer feelings csv
        if (typeof req.body.feelings !== "undefined") {
          newCustomer.feelings = req.body.feelings.split(",");
        }

        //Customer sights csv
        if (typeof req.body.sights !== "undefined") {
          newCustomer.sights = req.body.sights.split(",");
        }

        //Customer sounds csv
        if (typeof req.body.sounds !== "undefined") {
          newCustomer.sounds = req.body.sounds.split(",");
        }

        //Customer words csv
        if (typeof req.body.words !== "undefined") {
          newCustomer.words = req.body.words.split(",");
        }

        //Customer actions csv
        if (typeof req.body.actions !== "undefined") {
          newCustomer.actions = req.body.actions.split(",");
        }

        // Add to customers array
        project.customer.unshift(newCustomer);

        // Save
        project.save().then(project => res.json(project));
      })
      .catch(err =>
        res.status(404).json({ projectnotfound: "No project found" })
      );
  }
);

module.exports = router;
