const sequelize = require("../config/connection");
const { Owner, Dog } = require("../models");

const dogData = [
  {
    dogname: "Milo",
    owner_id: 1,
    sex: "Male",
    dogbreed: "Husky Mix",
    dogweight: "60",
  },
  {
    dogname: "Minnie",
    owner_id: 2,
    sex: "Female",
    dogbreed: "French Bulldog",
    dogweight: "15",
  },
  {
    dogname: "Major",
    owner_id: 2,
    sex: "Male",
    dogbreed: "Lab",
    dogweight: "50",
  },
  {
    dogname: "Tinkerbell",
    owner_id: 3,
    sex: "Female",
    dogbreed: "Chihuahua",
    dogweight: "5",
  },
  {
    dogname: "Cinderella",
    owner_id: 4,
    sex: "Female",
    dogbreed: "Maltipoo",
    dogweight: "10",
  },
  {
    dogname: "Batman",
    owner_id: 4,
    sex: "Male",
    dogbreed: "Yorkipoo",
    dogweight: "10",
  },
  {
    dogname: "Bo",
    owner_id: 5,
    sex: "Male",
    dogbreed: "Portuguese Waterdog",
    dogweight: "40",
  },
  {
    dogname: "Dodger",
    owner_id: 6,
    sex: "Male",
    dogbreed: "Boxer Mix",
    dogweight: "40",
  },
  {
    dogname: "Tessa",
    owner_id: 7,
    sex: "Female",
    dogbreed: "American Staffordshire Terrier",
    dogweight: "40",
  },
];

const seedDogs = () => Dog.bulkCreate(dogData, { individualHooks: true });

module.exports = seedDogs;
