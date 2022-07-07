const sequelize = require("../config/connection");
const { Owner, Dog } = require("../models");

const dogData = [
  {
    name: "Milo",
    sex: "male",
    breed: "huskymix",
    weight: "60",
  },
  {
    name: "Minnie",
    sex: "female",
    breed: "frenchbulldog",
    weight: "15",
  },
  {
    name: "Major",
    sex: "male",
    breed: "lab",
    weight: "50",
  },
  {
    name: "Tinkerbell",
    sex: "female",
    breed: "chihuahua",
    weight: "5",
  },
  {
    name: "Cinderella",
    sex: "female",
    breed: "maltipoo",
    weight: "10",
  },
  {
    name: "Batman",
    sex: "male",
    breed: "yorkipoo",
    weight: "15",
  },
  {
    name: "Bo",
    sex: "male",
    breed: "portuguesewaterdog",
    weight: "40",
  },
  {
    name: "Dodger",
    sex: "male",
    breed: "boxermix",
    weight: "40",
  },
  {
    name: "Tessa",
    sex: "female",
    breed: "staffordshire",
    weight: "40",
  },
];

const seedDogs = () => Dog.bulkCreate(dogData, { individualHooks: true });

module.exports = seedDogs;
