const sequelize = require("../config/connection");
const { Owner, Dog } = require("../models");

const dogData = [
  {
    name: "Milo",
    sex: "male",
    breed: "husky",
    weight: "60",
  },
  {
    name: "Bow",
    sex: "male",
    breed: "beagle",
    weight: "35",
  },
  {
    name: "Archer",
    sex: "male",
    breed: "beagle",
    weight: "25",
  },
  {
    name: "Riley",
    sex: "male",
    breed: "yorkie",
    weight: "10",
  },
  {
    name: "Zara",
    sex: "female",
    breed: "labradoodle",
    weight: "45",
  },
  {
    name: "Clementine",
    sex: "female",
    breed: "catahoula",
    weight: "40",
  },
  {
    name: "Obi",
    sex: "male",
    breed: "catahoula",
    weight: "50",
  },
  {
    name: "Rosie",
    sex: "female",
    breed: "pit",
    weight: "40",
  },
];

const seedDogs = () => Dog.bulkCreate(dogData, { individualHooks: true });

module.exports = seedDogs;
