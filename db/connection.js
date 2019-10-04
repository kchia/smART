const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/smart", { useNewUrlParser: true }, () => {
  console.log("Mongoose connected!");
});

module.exports = mongoose;
