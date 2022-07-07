const seedDogs = require("./Dog-seeds");
const seedOwners = require("./Owner-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("----------");

  await seedOwners();
  console.log("----------");

  await seedDogs();
  console.log("----------");

  process.exit(0);
};

seedAll();
