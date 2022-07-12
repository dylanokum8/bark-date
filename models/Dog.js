const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Dog extends Model {}

Dog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dogname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dogbreed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dogweight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "owner",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Dog",
  }
);

module.exports = Dog;
