const mongoose = require("../connection");

const ArtistSchema = new mongoose.Schema({
  name: String,
  title: String,
  photo: String,
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
