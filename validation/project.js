const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateDiscoveryInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.domain = !isEmpty(data.domain) ? data.domain : "";

  if (!Validator.isLength(data.name, { min: 3, max: 150 })) {
    errors.name = "Name must be between 3 and 150 characters";
  }

  if (!Validator.isLength(data.description, { min: 5, max: 300 })) {
    errors.description = "Description must be between 5 and 300 characters";
  }

  if (!Validator.isLength(data.domain, { min: 5, max: 300 })) {
    errors.domain = "Domain must be between 5 and 300 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }

  if (Validator.isEmpty(data.domain)) {
    errors.domain = "Domain field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
