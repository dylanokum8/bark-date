const sequelize = require("../config/connection");
const { Owner, Dog } = require("../models");

const ownerData = [
  {
    username: "A-Hask",
    firstname: "Arlene",
    lastname: "Haskins",
    email: "arlene@email.com",
    password: "arlene1",
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
    password: "paris1",
  },
  {
    username: "demilovato",
    firstname: "Demi",
    lastname: "Lovato",
    email: "demi@email.com",
    password: "demi1",
  },
  {
    username: "barackobama",
    firstname: "Barack",
    lastname: "Obama",
    email: "barack@email.com",
    password: "barack1",
  },
  {
    username: "chrisevans",
    firstname: "Chris",
    lastname: "Evans",
    email: "chris@email.com",
    password: "chris1",
  },
  {
    username: "tomholland",
    firstname: "Tom",
    lastname: "Holland",
    email: "tom@email.com",
    password: "tom1",
  },
];

//can't bulkCreate. use await model.create
const seedOwners = () => Owner.bulkCreate(ownerData, { individualHooks: true });

module.exports = seedOwners;
