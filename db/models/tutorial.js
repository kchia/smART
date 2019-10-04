const mongoose = require("mongoose");

const TutorialSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  supplies: [String],
  optional: [String],
  steps: [String]
});

const Tutorial = mongoose.model("Tutorial", TutorialSchema);

module.exports = Tutorial;
