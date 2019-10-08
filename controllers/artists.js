const express = require("express");
const router = express.Router();

const Artist = require("../db/models/artist");
const Tutorial = require("../db/models/tutorial");

// artists index router (R)
router.get("/", (req, res) => {
  Artist.find({}).then(artists => res.render("artists", { artists }));

  //   Tutorial.find({}).then(artists => res.render("index", artists));
});

// page router for new artist (C)
router.get("/new", (req, res) => {
  res.render("artist-new");
});

// single artist router (R)
router.get("/:id", (req, res) => {
  Artist.findOne({ _id: req.params.id })
    .then(artist => res.render("artist", artist))
    .catch(err => console.error(err));
});

// page router for existing artist (UD)
router.get("/:id/edit", (req, res) => {
  Artist.findOne({ _id: req.params.id }).then(artist => {
    res.render("artist-edit", artist);
  });
});

// // POST router (C)
router.post("/", (req, res) => {
  req.body.works = req.body.works.split("\n");

  Artist.create(req.body).then(() => {
    res.redirect("/artists");
  });
});

// // PUT router (U)
router.put("/:id", (req, res) => {
  req.body.works = req.body.works.split("\n");

  Artist.findOneAndUpdate({ _id: req.params.id }, req.body).then(() => {
    res.redirect("/artists");
  });
});

// // DELETE router (D)
router.delete("/:id", (req, res) => {
  Artist.findOneAndDelete({ _id: req.params.id }).then(() => {
    res.redirect("/artists");
  });
});

module.exports = router;
