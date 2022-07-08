const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pictures extends Model {}

Pictures.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'picture',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'pictures',
  }
);

module.exports = Pictures;
