const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/smArt", { useNewUrlParser: true }, () => {
  console.log("Mongoose connected!");
});

module.exports = mongoose;
