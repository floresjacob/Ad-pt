const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  //Type of project: i.e. design, development, business
  domain: {
    type: String,
    required: true
  },
  group: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = Project = mongoose.model("projects", ProjectSchema);
