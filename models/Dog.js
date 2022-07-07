const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Dog extends Model {}

Dog.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      owner_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'dogs',
    }
  );
  
  module.exports = Dog;
  