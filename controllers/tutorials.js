const express = require("express");
const router = express.Router();

const Tutorial = require("../db/models/tutorial");

// tut index router (R)
router.get("/", (req, res) => {
  Tutorial.find({})
    .then(tuts => res.render("index", { tuts }))
    .catch(err => console.error(err));
});

// CUD page router for new tut
router.get("/new", (req, res) => {
  res.render("new");
});

// single tut router (R)
router.get("/:id", (req, res) => {
  Tutorial.findOne({ _id: req.params.id })
    .then(tut => res.render("tut", tut))
    .catch(err => console.error(err));
});

// CUD page router for existing tut
router.get("/:id/edit", (req, res) => {
  Tutorial.findOne({ _id: req.params.id }).then(tut => {
    res.render("new", tut);
  });
});

// POST router (C)
router.post("/", (req, res) => {
  req.body.supplies = req.body.supplies.split("\n");
  req.body.optional = req.body.optional.split("\n");
  req.body.steps = req.body.steps.split("+ ");
  req.body.steps.shift();

  Tutorial.create(req.body).then(() => {
    res.redirect("/");
  });
});

// PUT router (U)
// router.put("/:id", (req, res) => {
//   req.body.supplies = req.body.supplies.split("\n");
//   req.body.optional = req.body.optional.split("\n");
//   req.body.steps = req.body.steps.split("\n- ");

//   Tutorial.findOneAndUpdate({ _id: req.params.id }, req.body).then(tut => {
//     res.redirect("/edit/:id");
//   });
// });

// DELETE router (D)
// router.delete("/:id", (req, res) => {
//   Tutorial.findOneAndDelete({ _id: req.params.id }).then(() => {
//     res.redirect("/");
//   });
// });

module.exports = router;
