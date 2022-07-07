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
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newDogData) {
        newDogData.password = await bcrypt.hash(newDogData.password, 10);
        return newDogData;
      },

      async beforeUpdate(updatedDogData) {
        updatedDogData.password = await bcrypt.hash(
          updatedDogData.password,
          10
        );
        return updatedDogData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Dog",
  }
);

module.exports = Dog;
