const express = require("express");
const router = express.Router();

const Artist = require("../db/models/artist");
const Tutorial = require("../db/models/tutorial");

// tut index router (R)
router.get("/", (req, res) => {
  Artist.find({}).then(artists => res.render("index", { artists }));
});

// CUD page router for new tut
router.get("/new", (req, res) => {
  res.render("new");
});

// single tut router (R)
router.get("/:id", (req, res) => {
  Artist.findOne({ _id: req.params.id })
    .then(artist => res.render("artist", artist))
    .catch(err => console.error(err));
});

module.exports = router;
