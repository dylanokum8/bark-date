const sequelize = require("../config/connection");
const { Owner, Dog } = require("../models");

const ownerData = [
  {
    username: "A-Hask",
    firstname: "Arlene",
    lastname: "Haskins",
    email: "arlene@email.com",
  },
  {
    username: "reesewitherspoon",
    firstname: "Reese",
    lastname: "Witherspoon",
    email: "reese@email.com",
  },
  {
    username: "parishilton",
    firstname: "Paris",
    lastname: "Hilton",
    email: "paris@email.com",
  },
  {
    username: "demilovato",
    firstname: "Demi",
    lastname: "Lovato",
    email: "demi@email.com",
  },
  {
    username: "barackobama",
    firstname: "Barack",
    lastname: "Obama",
    email: "barack@email.com",
  },
  {
    username: "chrisevans",
    firstname: "Chris",
    lastname: "Evans",
    email: "chris@email.com",
  },
  {
    username: "tomholland",
    firstname: "Tom",
    lastname: "Holland",
    email: "tom@email.com",
  },
];

const seedOwners = () => Owner.bulkCreate(ownerData, { individualHooks: true });

module.exports = seedOwners;
