const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: "projects"
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  //Type: Action Item, Spike Research, Parking Lot
  type: {
    type: String,
    required: true
  }
});

module.exports = Goal = mongoose.model("goals", GoalSchema);
