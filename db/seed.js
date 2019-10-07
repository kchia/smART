// tutorial model & seed data
const Tutorial = require("./models/tutorial");
const seedData = require("./seeds.json");

// artist model & seed data
const Artist = require("./models/artist");
const artistSeedData = require("./artist_seeds.json");

Tutorial.deleteMany({})
  .then(() => {
    return Tutorial.insertMany(seedData);
  })
  .then(() => {
    console.log("MAKE ART!");
  });

Artist.deleteMany({})
  .then(() => {
    return Artist.insertMany(artistSeedData);
  })
  .then(() => {
    console.log("MEET ARTISTS!");
    process.exit();
  });
