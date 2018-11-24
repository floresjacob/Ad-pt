const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfitabilityInput(data) {
  let errors = {};

  data.role = !isEmpty(data.role) ? data.role : "";
  data.income = !isEmpty(data.income) ? data.income : "";

  if (!Validator.isLength(data.role, { min: 2, max: 300 })) {
    errors.role = "Role must be between 2 and 300 characters";
  }

  if (Validator.isEmpty(data.role)) {
    errors.role = "Role is required";
  }

  if (Validator.isEmpty(data.income)) {
    errors.income = "Income is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
