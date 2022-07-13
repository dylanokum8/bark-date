const sequelize = require("../config/connection");
const { Owner, Dog } = require("../models");

const ownerData = [
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

const seedOwners = async () => Owner.bulkCreate(ownerData);

// const seedOwners = async () =>
//   await Owner.create("Owner", ownerData, { individualHooks: true });

module.exports = seedOwners;
