const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateGoalInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.type = !isEmpty(data.type) ? data.type : "";

  if (!Validator.isLength(data.title, { min: 5, max: 300 })) {
    errors.title = "Goal title must be between 5 and 300 characters";
  }

  if (!Validator.isLength(data.description, { min: 5, max: 300 })) {
    errors.description = "Goal Description be between 5 and 300 characters";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }

  if (Validator.isEmpty(data.type)) {
    errors.type = "Type field is required";
  }

  if (
    data.type != "Action" &&
    data.type != "Parking Lot" &&
    data.type != "Reference"
  ) {
    errors.type = "Type must be Action, Parking Lot, or Reference";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
