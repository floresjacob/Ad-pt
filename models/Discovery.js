const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiscoverySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: "projects"
  },
  //What is the goal for this project and how do you want to achieve it?
  goal: {
    type: Schema.Types.ObjectId,
    ref: "goals"
  },
  //Orientation of project: Business, Social service, or Field piece (i.e. art for the fellow artist, code for coders)
  orientation: {
    type: String,
    required: true
  },
  //Customer: A Profile of the intended audience/user/customer of the project
  customer: [
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
      behavior: {
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
    }
  ]
});

module.exports = Discovery = mongoose.model("discovery", DiscoverySchema);
