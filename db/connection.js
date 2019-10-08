const mongoose = require("mongoose");

mongoose.set("useUnifiedTopology", true);

mongoose.connect("mongodb://localhost/smart", { useNewUrlParser: true }, () => {
  console.log("Mongoose connected!");
});

module.exports = mongoose;
