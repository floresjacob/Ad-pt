const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  //Name of Project
  name: {
    type: String,
    required: true
  },
  //Type of project: i.e. design, development, business
  domain: {
    type: String,
    required: true
  },
  //Is this a group project?
  group: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: true
  },
  goals: [
    {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      //Type: Action, Parking Lot, Reference
      type: {
        type: String,
        required: true
      },
      complete: {
        type: Boolean,
        default: false
      }
    }
  ],
  //Customer: A Profile of the intended audience/users/customers of the project
  customers: [
    {
      name: {
        type: String,
        required: true
      },
      bio: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      income: {
        type: String
      },
      pains: {
        type: [String],
        required: true
      },
      gains: {
        type: [String],
        required: true
      },
      jobs: {
        type: [String],
        required: true
      },
      thoughts: {
        type: [String]
      },
      feelings: {
        type: [String]
      },
      sights: {
        type: [String]
      },
      sounds: {
        type: [String]
      },
      words: {
        type: [String]
      },
      actions: {
        type: [String]
      }
    }
  ]
});

module.exports = Project = mongoose.model("projects", ProjectSchema);
