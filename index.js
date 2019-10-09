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
app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
