const mongoose = require("../connection");
const validators = require("mongoose-validators");

const ArtistSchema = new mongoose.Schema({
  name: String,
  title: String,
  photo: { type: String, validate: validators.isURL(["http", "https"]) },
  birth: Date,
  death: Date,
  bio: String,
  works: [String],
  tutorials: [
    {
      ref: "Tutorial",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

const Artist = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;
