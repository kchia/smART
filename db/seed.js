const Tutorial = require("./models/tutorial");
const seedData = require("./seeds.json");

Tutorial.deleteMany({})
  .then(() => {
    return Tutorial.insertMany(seedData);
  })
  .then(() => {
    console.log("MAKE ART!");
    process.exit();
  });
