const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateInterestInput(data) {
  let errors = {};

  data.field = !isEmpty(data.field) ? data.field : "";
  data.influence = !isEmpty(data.influence) ? data.influence : "";
  data.example = !isEmpty(data.example) ? data.example : "";

  if (!Validator.isLength(data.field, { min: 3, max: 300 })) {
    errors.field = "Field name must be between 3 and 300 characters";
  }

  if (!Validator.isLength(data.influence, { min: 5, max: 300 })) {
    errors.influence = "Influence be between 5 and 300 characters";
  }

  if (!Validator.isLength(data.example, { min: 5, max: 300 })) {
    errors.example = "Example be between 5 and 300 characters";
  }

  if (Validator.isEmpty(data.field)) {
    errors.field = "Field is required";
  }

  if (Validator.isEmpty(data.influence)) {
    errors.influence = "Influence is required";
  }

  if (Validator.isEmpty(data.example)) {
    errors.example = "An example is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
