const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('user', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        firstName: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        lastName: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        username: {
            type: Sequelize.TEXT
        },
 
        dogBreed: {
            type: Sequelize.TEXT
        },

        dogWeight: {
            type: Sequelize.TEXT
        },
 
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
 
        last_login: {
            type: Sequelize.DATE
        },

    });
 
    return User;
 
}