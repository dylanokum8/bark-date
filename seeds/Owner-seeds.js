const sequelize = require("../config/connection");
const { Owner, Dog } = require("../models");

const ownerData = [
  {
    username: "A-Hask",
    firstname: "Arlene",
    lastname: "Haskins",
    email: "arlene@email.com",
    password: "arlene1",
    phonenumber: 1111111111,
  },
  {
    username: "reesewitherspoon",
    firstname: "Reese",
    lastname: "Witherspoon",
    email: "reese@email.com",
    password: "reese1",
    phonenumber: 2222222222,
  },
  {
    username: "parishilton",
    firstname: "Paris",
    lastname: "Hilton",
    email: "paris@email.com",
    password: "paris1",
    phonenumber: 3333333333,
  },
  {
    username: "demilovato",
    firstname: "Demi",
    lastname: "Lovato",
    email: "demi@email.com",
    password: "demi1",
    phonenumber: 4444444444,
  },
  {
    username: "barackobama",
    firstname: "Barack",
    lastname: "Obama",
    email: "barack@email.com",
    password: "barack1",
    phonenumber: 5555555555,
  },
  {
    username: "chrisevans",
    firstname: "Chris",
    lastname: "Evans",
    email: "chris@email.com",
    password: "chris1",
    phonenumber: 6666666666,
  },
  {
    username: "tomholland",
    firstname: "Tom",
    lastname: "Holland",
    email: "tom@email.com",
    password: "tom1",
    phonenumber: 7777777777,
  },
];

const seedOwners = async () => {
  for (let i = 0; i < ownerData.length; i++) {
    await Owner.create(ownerData[i]);
  }
};

module.exports = seedOwners;
