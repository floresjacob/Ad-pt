const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCustomerInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.bio = !isEmpty(data.bio) ? data.bio : "";
  data.age = !isEmpty(data.age) ? data.age : "";
  data.income = !isEmpty(data.income) ? data.income : "";
  data.pains = !isEmpty(data.pains) ? data.pains : "";
  data.gains = !isEmpty(data.gains) ? data.gains : "";
  data.jobs = !isEmpty(data.jobs) ? data.jobs : "";
  data.thoughts = !isEmpty(data.thoughts) ? data.thoughts : "";
  data.feelings = !isEmpty(data.feelings) ? data.feelings : "";
  data.sights = !isEmpty(data.sights) ? data.sights : "";
  data.sounds = !isEmpty(data.sounds) ? data.sounds : "";
  data.words = !isEmpty(data.words) ? data.words : "";
  data.actions = !isEmpty(data.actions) ? data.actions : "";

  if (!Validator.isLength(data.name, { min: 5, max: 300 })) {
    errors.name = "Customer name must be between 5 and 300 characters";
  }

  if (!Validator.isLength(data.bio, { min: 5, max: 300 })) {
    errors.bio = "Bio must be between 5 and 300 characters";
  }

  if (isNaN(data.age)) {
    errors.age = "Age must be a number";
  }

  if (!Validator.isLength(data.income, { min: 5, max: 300 })) {
    errors.income = "Income must be between 5 and 300 characters";
  }

  if (!Validator.isLength(data.pains, { min: 5, max: 300 })) {
    errors.pains = "Pain must be between 5 and 300 characters";
  }

  if (!Validator.isLength(data.gains, { min: 5, max: 300 })) {
    errors.gains = "Gain must be between 5 and 300 characters";
  }

  if (!Validator.isLength(data.jobs, { min: 5, max: 300 })) {
    errors.jobs = "Job must be between 5 and 300 characters";
  }

  if (!Validator.isLength(data.thoughts, { min: 5, max: 300 })) {
    errors.thoughts = "Thought must be between 5 and 300 characters";
  }

  if (!Validator.isLength(data.feelings, { min: 5, max: 300 })) {
    errors.feelings = "Feeling must be between 5 and 300 characters";
  }

  if (!Validator.isLength(data.sights, { min: 5, max: 300 })) {
    errors.sights = "Sight must be between 5 and 300 characters";
  }

  if (!Validator.isLength(data.sounds, { min: 5, max: 300 })) {
    errors.sounds = "Sound must be between 5 and 300 characters";
  }

  if (!Validator.isLength(data.words, { min: 5, max: 300 })) {
    errors.words = "Words must be between 5 and 300 characters";
  }

  if (!Validator.isLength(data.actions, { min: 5, max: 300 })) {
    errors.actions = "Actions must be between 5 and 300 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
