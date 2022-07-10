const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class Dog extends Model {}

Dog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
      // hooks: {
      //   // set up beforeCreate lifecycle "hook" functionality
      //   async beforeCreate(newDogData) {
      //     newDogData.password = await bcrypt.hash(newDogData.password, 10);
      //     return newDogData;
      //   },
  
      //   async beforeUpdate(updatedDogData) {
      //     updatedDogData.password = await bcrypt.hash(
      //       updatedDogData.password,
      //       10
      //     );
      //     return updatedDogData;
      //   },
      // },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "Dog",
    }
  );
  
  module.exports = Dog;
