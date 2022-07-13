const sequelize = require("../config/connection");
const { Owner, Dog } = require("../models");

const dogData = [
  {
    dogname: "Milo",
    owner_id: 1,
    sex: "male",
    dogbreed: "huskymix",
    dogweight: "60",
  },
  {
    dogname: "Minnie",
    owner_id: 2,
    sex: "female",
    dogbreed: "frenchbulldog",
    dogweight: "15",
  },
  {
    dogname: "Tinkerbell",
    owner_id: 3,
    sex: "female",
    dogbreed: "chihuahua",
    dogweight: "5",
  },
  {
    dogname: "Cinderella",
    owner_id: 4,
    sex: "female",
    dogbreed: "maltipoo",
    dogweight: "10",
  },
  {
    dogname: "Bo",
    owner_id: 5,
    sex: "male",
    dogbreed: "portuguesewaterdog",
    dogweight: "40",
  },
  {
    dogname: "Dodger",
    owner_id: 6,
    sex: "male",
    dogbreed: "boxermix",
    dogweight: "40",
  },
  {
    dogname: "Tessa",
    owner_id: 7,
    sex: "female",
    dogbreed: "staffordshire",
    dogweight: "40",
  },
];

const seedDogs = () => Dog.bulkCreate(dogData, { individualHooks: true });

module.exports = seedDogs;
