const express = require("express");
const hbs = require("hbs");
const app = express();
const parser = require("body-parser");
const methodOverride = require("method-override");

const tutorialController = require("./controllers/tutorials");
const artistController = require("./controllers/artists");

// HBS view engine connection
app.set("view engine", "hbs");

// css connection
app.use(express.static("public"));

// method override connection
app.use(methodOverride("_method"));

// body parser connection
app.use(parser.urlencoded({ extended: true }));

// redirect root request to tutorials
app.get("/", (req, res) => {
  res.redirect("/tutorials");
});

// router connection
app.use("/tutorials", tutorialController);
app.use("/artists", artistController);

// local host port
app.listen(4000, () => console.log("Running on port 4000!"));
