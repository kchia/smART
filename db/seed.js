const Tutorial = require("../db/models/tutorial");
const seedTuts = require("./seeds.json");

Tutorial.deleteMany({})
  .then(() => {
    return Tutorial.insertMany(seedTuts);
  })
  .then(() => {
    process.exit();
  });
