const express = require("express");
const hbs = require("hbs");
const parser = require("body-parser");
const methodOverride = require("method-override");

const app = express();

const tutorialController = require("./controllers/tutorials");

// HBS view engine connection
app.set("view engine", "hbs");

// body parser connection
app.use(parser.urlencoded({ extended: true }));

// method override connection
app.use(methodOverride("_method"));

// css connection
app.use(express.static("public"));

// router connection
app.use("/", tutorialController);

// local host port
app.listen(4000, () => console.log("Running on port 4000!"));
