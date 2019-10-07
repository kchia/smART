const express = require("express");
const hbs = require("hbs");
const app = express();
const parser = require("body-parser");
const methodOverride = require("method-override");
const tutorialController = require("./controllers/tutorials");

// HBS view engine connection
app.set("view engine", "hbs");

// css connection
app.use(express.static("public"));

// method override connection
app.use(methodOverride("_method"));

// body parser connection
app.use(parser.urlencoded({ extended: true }));

// router connection
app.use("/", tutorialController);

// local host port
app.listen(4000, () => console.log("Running on port 4000!"));
