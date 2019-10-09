const mongoose = require("mongoose");

mongoose.Promise = Promise;

let mongoURI = "";
let something;

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/smart";
}

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // what does this line do? do we need it?
    useFindAndModify: false // what does this line do? do we need it?
  })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(error => console.log("Connection failed!", error));

module.exports = mongoose;
