const express = require("express");
const router = express.Router();

const Tutorial = require("../db/models/tutorial");

// tut index router (R)
router.get("/", (req, res) => {
  Tutorial.find({})
    .then(tuts => res.render("index", { tuts }))
    .catch(err => console.error(err));
});

// single tut router (R)

// CUD page router for tut

// POST router (C)

// PUT router (U)

// DELETE router (D)

module.exports = router;
