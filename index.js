const express = require("express");
const hbs = require("hbs");

const app = express();

app.set("view engine", "hbs");

app.listen(4000, () => console.log("Running on port 4000!"));
